# Browser Plugins

[Source Code](https://github.com/starfederation/datastar/tree/main/library/src/plugins/official/browser)

Focused on showing and hiding elements based on signals. Most of the time you want to send updates from the server but is useful for things like modals, dropdowns, and other UI elements.

## Attribute Plugins

### Show

```html
<div data-show="showMe.value"></div>
```

Shows the element when the expression is true. For anything custom, use `data-class` instead.

### Intersects

```html
<div data-intersects="console.log('I am intersecting!')"></div>
```

Runs the expression when the element intersects with the viewport.

#### Modifiers

- `__once` - Only trigger the event once
- `__half` - Trigger when half of the element is visible
- `__full` - Trigger when the full element is visible

### Scroll Into View

```html
<div data-scroll-into-view></div>
```

Scrolls the element into view. Useful when updating DOM from the server, and you want to scroll to the new content.

#### Modifiers

- `__smooth` - Scrolling should be animate smoothly
- `__instant` - Scrolling should be instant
- `__auto` - Scrolling is determined by the computed `scroll-behavior` CSS property
- `__hstart` - Scroll to the left of the element
- `__hcenter` - Scroll to the horizontal center of the element
- `__hend` - Scroll to the right of the element
- `__hnearest` - Scroll to the nearest horizontal edge of the element
- `__vstart` - Scroll to the top of the element
- `__vcenter` - Scroll to the vertical center of the element
- `__vend` - Scroll to the bottom of the element
- `__vnearest` - Scroll to the nearest vertical edge of the element
- `__focus` - Focus the element after scrolling

### View Transition

```html
<div data-view-transition="foo"></div>
```

Page level transitions are automatically handled by an injected meta tag. Inter-page elements are automatically transitioned if the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) is available in the browser and `useViewTransitions` is `true`. To set the `view-transition-name` style attribute explicitly you use the `data-view-transition` attribute.

## Action Plugins

### `clipboard(text: string)`

```html
<div data-on-click="clipboard('Hello, world!')"></div>
```

Copies the text to the clipboard. This is useful for copying text to the clipboard.
