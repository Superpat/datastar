package site

import (
	"net/http"
	"time"

	"github.com/delaneyj/datastar"
	. "github.com/delaneyj/gostar/elements"
	"github.com/go-chi/chi/v5"
	"github.com/gorilla/sessions"
)

func setupExamplesOnLoad(examplesRouter chi.Router) error {
	store := sessions.NewCookieStore([]byte("ExampleSession"))
	sessionKey := "datastar-on-load-example"
	examplesRouter.Post("/on_load/data", func(w http.ResponseWriter, r *http.Request) {
		session, err := store.Get(r, sessionKey)

		if err != nil || len(session.Values) == 0 {
			session.Values["foo"] = "bar"
			session.Values["baz"] = 42
			if err := session.Save(r, w); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
			}

		}

		// You can comment out the below block and still persist the session
		sse := datastar.NewSSE(w, r)
		datastar.RenderFragment(sse,
			DIV(
				TextF("Loaded at %s", time.Now().Format(time.RFC3339)),
				DIV().TextF("Session name: %s", sessionKey),
				DIV().TextF("Session contents: %v", session.Values),
			).ID("replaceMe"),
		)
	})

	return nil
}
