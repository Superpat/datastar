// Datastar v1.0.0-beta.2
var je=/🖕JS_DS🚀/.source,pe=je.slice(0,5),ke=je.slice(4),L="datastar";var Be="Datastar-Request",Ge="1.0.0-beta.1",me=300;var Ke="type module",ge=!1,Je=!1,ze=!0,O={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},Xe=O.Morph,I={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var p=(r=>(r[r.Attribute=1]="Attribute",r[r.Watcher=2]="Watcher",r[r.Action=3]="Action",r))(p||{});var xn="computed",Ye={type:1,name:xn,keyReq:1,valReq:1,onLoad:({key:t,signals:e,genRX:n})=>{let r=n();e.setComputed(t,r)}};var $=t=>t.trim()==="true",U=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),Ze=t=>t.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,n)=>n===0?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,""),he=t=>new Function(`return Object.assign({}, ${t})`)(),j=t=>t.startsWith("$")?t.slice(1):t;var Qe={type:1,name:"signals",removeOnLoad:!0,onLoad:t=>{let{key:e,value:n,genRX:r,signals:i,mods:s}=t,o=s.has("ifmissing");if(e!==""&&!o){let a=n===""?n:r()();i.setValue(e,a)}else{let a=he(t.value);t.value=JSON.stringify(a);let u=r()();i.merge(u,o)}}};var et={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var ie=class{#e=0;#t;constructor(e=L){this.#t=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else this.#e=(this.#e<<5)-this.#e+e;return this}reset(){return this.#e=0,this}get value(){return this.#t+Math.abs(this.#e).toString(36)}};function tt(t){if(t.id)return t.id;let e=new ie,n=t;for(;n.parentNode;){if(n.id){e.with(n.id);break}if(n===n.ownerDocument.documentElement)e.with(n.tagName);else{for(let r=1,i=t;i.previousElementSibling;i=i.previousElementSibling,r++)e.with(r);n=n.parentNode}n=n.parentNode}return e.value}function nt(t,e){let n=new MutationObserver(r=>{for(let i of r)for(let s of i.removedNodes)if(s===t){n.disconnect(),e();return}});n.observe(t.parentNode,{childList:!0})}var Pn=`${window.location.origin}/errors`;function De(t,e,n={}){let r=new Error;e=e[0].toUpperCase()+e.slice(1),r.name=`${L} ${t} error`;let i=U(e).replaceAll("-","_"),s=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),o=JSON.stringify(n,null,2);return r.message=`${e}
More info: ${Pn}/${t}/${i}?${s}
Context: ${o}`,r}function P(t,e,n={}){return De("internal",e,Object.assign({from:t},n))}function V(t,e,n={}){let r={plugin:{name:e.plugin.name,type:p[e.plugin.type]}};return De("init",t,Object.assign(r,n))}function h(t,e,n={}){let r={plugin:{name:e.plugin.name,type:p[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return De("runtime",t,Object.assign(r,n))}var G="preact-signals",Nn=Symbol.for("preact-signals"),F=1,X=2,se=4,Z=8,ye=16,Y=32;function Oe(){ve++}function Ve(){if(ve>1){ve--;return}let t,e=!1;for(;oe!==void 0;){let n=oe;for(oe=void 0,Le++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~X,!(n._flags&Z)&&it(n))try{n._callback()}catch(i){e||(t=i,e=!0)}n=r}}if(Le=0,ve--,e)throw P(G,"BatchError, error",{error:t})}var v;var oe,ve=0,Le=0,be=0;function rt(t){if(v===void 0)return;let e=t._node;if(e===void 0||e._target!==v)return e={_version:0,_source:t,_prevSource:v._sources,_nextSource:void 0,_target:v,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},v._sources!==void 0&&(v._sources._nextSource=e),v._sources=e,t._node=e,v._flags&Y&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=v._sources,e._nextSource=void 0,v._sources._nextSource=e,v._sources=e),e}function R(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}R.prototype.brand=Nn;R.prototype._refresh=()=>!0;R.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};R.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};R.prototype.subscribe=function(t){return Se(()=>{let e=this.value,n=v;v=void 0;try{t(e)}finally{v=n}})};R.prototype.valueOf=function(){return this.value};R.prototype.toString=function(){return`${this.value}`};R.prototype.toJSON=function(){return this.value};R.prototype.peek=function(){let t=v;v=void 0;try{return this.value}finally{v=t}};Object.defineProperty(R.prototype,"value",{get(){let t=rt(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(Le>100)throw P(G,"SignalCycleDetected");this._value=t,this._version++,be++,Oe();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{Ve()}}}});function it(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function ot(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function st(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function K(t){R.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=be-1,this._flags=se}K.prototype=new R;K.prototype._refresh=function(){if(this._flags&=~X,this._flags&F)return!1;if((this._flags&(se|Y))===Y||(this._flags&=~se,this._globalVersion===be))return!0;if(this._globalVersion=be,this._flags|=F,this._version>0&&!it(this))return this._flags&=~F,!0;let t=v;try{ot(this),v=this;let e=this._fn();(this._flags&ye||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~ye,this._version++)}catch(e){this._value=e,this._flags|=ye,this._version++}return v=t,st(this),this._flags&=~F,!0};K.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=se|Y;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}R.prototype._subscribe.call(this,t)};K.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(R.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~Y;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};K.prototype._notify=function(){if(!(this._flags&X)){this._flags|=se|X;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(K.prototype,"value",{get(){if(this._flags&F)throw P(G,"SignalCycleDetected");let t=rt(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&ye)throw P(G,"GetComputedError",{value:this._value});return this._value}});function at(t){return new K(t)}function lt(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){Oe();let n=v;v=void 0;try{e()}catch(r){throw t._flags&=~F,t._flags|=Z,Fe(t),P(G,"CleanupEffectError",{error:r})}finally{v=n,Ve()}}}function Fe(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,lt(t)}function Mn(t){if(v!==this)throw P(G,"EndEffectError");st(this),v=t,this._flags&=~F,this._flags&Z&&Fe(this),Ve()}function ae(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=Y}ae.prototype._callback=function(){let t=this._start();try{if(this._flags&Z||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};ae.prototype._start=function(){if(this._flags&F)throw P(G,"SignalCycleDetected");this._flags|=F,this._flags&=~Z,lt(this),ot(this),Oe();let t=v;return v=this,Mn.bind(this,t)};ae.prototype._notify=function(){this._flags&X||(this._flags|=X,this._nextBatchedEffect=oe,oe=this)};ae.prototype._dispose=function(){this._flags|=Z,this._flags&F||Fe(this)};function Se(t){let e=new ae(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var ut="namespacedSignals";function ct(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let i=t[r];i instanceof R?n[r]=i.value:n[r]=ct(i)}return n}function ft(t,e,n=!1){for(let r in e)if(Object.hasOwn(e,r)){if(r.match(/\_\_+/))throw P(ut,"InvalidSignalKey",{key:r});let i=e[r];if(i instanceof Object&&!Array.isArray(i))t[r]||(t[r]={}),ft(t[r],i,n);else{if(Object.hasOwn(t,r)){if(n)continue;let o=t[r];if(o instanceof R){o.value=i;continue}}t[r]=new R(i)}}}function dt(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof R?e(n,r):dt(r,(i,s)=>{e(`${n}.${i}`,s)})}}function Cn(t,...e){let n={};for(let r of e){let i=r.split("."),s=t,o=n;for(let l=0;l<i.length-1;l++){let u=i[l];if(!s[u])return{};o[u]||(o[u]={}),s=s[u],o=o[u]}let a=i[i.length-1];o[a]=s[a]}return n}var Ee=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let o=0;o<n.length-1;o++){let a=n[o];if(!r[a])return null;r=r[a]}let i=n[n.length-1],s=r[i];if(!s)throw P(ut,"SignalNotFound",{path:e});return s}setSignal(e,n){let r=e.split("."),i=this.#e;for(let o=0;o<r.length-1;o++){let a=r[o];i[a]||(i[a]={}),i=i[a]}let s=r[r.length-1];i[s]=n}setComputed(e,n){let r=at(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let r=this.upsertIfMissing(e,n);r.value=n}upsertIfMissing(e,n){let r=e.split("."),i=this.#e;for(let l=0;l<r.length-1;l++){let u=r[l];i[u]||(i[u]={}),i=i[u]}let s=r[r.length-1],o=i[s];if(o instanceof R)return o;let a=new R(n);return i[s]=a,a}remove(...e){for(let n of e){let r=n.split("."),i=this.#e;for(let o=0;o<r.length-1;o++){let a=r[o];if(!i[a])return;i=i[a]}let s=r[r.length-1];delete i[s]}}merge(e,n=!1){ft(this.#e,e,n)}subset(...e){return Cn(this.values(),...e)}walk(e){dt(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return ct(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var Te=class{#e=new Ee;#t=[];#r={};#s=[];#n=new Map;get signals(){return this.#e}get version(){return Ge}load(...e){for(let n of e){let r=this,i={get signals(){return r.#e},effect:o=>Se(o),actions:this.#r,apply:this.apply.bind(this),cleanup:this.#i.bind(this),plugin:n},s;switch(n.type){case 2:{let o=n;this.#s.push(o),s=o.onGlobalInit;break}case 3:{this.#r[n.name]=n;break}case 1:{let o=n;this.#t.push(o),s=o.onGlobalInit;break}default:throw V("InvalidPluginType",i)}s&&s(i)}this.#t.sort((n,r)=>{let i=r.name.length-n.name.length;return i!==0?i:n.name.localeCompare(r.name)})}apply(e){this.#o(e,n=>{this.#i(n);for(let r of Object.keys(n.dataset)){let i=this.#t.find(f=>r.startsWith(f.name));if(!i)continue;n.id.length||(n.id=tt(n));let[s,...o]=r.slice(i.name.length).split(/\_\_+/),a=s.length>0;if(a){let f=s.slice(1);s=s.startsWith("-")?f:s[0].toLowerCase()+f}let l=`${n.dataset[r]}`||"",u=l.length>0,c=this,d={get signals(){return c.#e},effect:f=>Se(f),apply:this.apply.bind(this),cleanup:this.#i.bind(this),actions:this.#r,genRX:()=>this.#a(d,...i.argNames||[]),plugin:i,el:n,rawKey:r,key:s,value:l,mods:new Map},y=i.keyReq||0;if(a){if(y===2)throw h(`${i.name}KeyNotAllowed`,d)}else if(y===1)throw h(`${i.name}KeyRequired`,d);let S=i.valReq||0;if(u){if(S===2)throw h(`${i.name}ValueNotAllowed`,d)}else if(S===1)throw h(`${i.name}ValueRequired`,d);if(y===3||S===3){if(a&&u)throw h(`${i.name}KeyAndValueProvided`,d);if(!a&&!u)throw h(`${i.name}KeyOrValueRequired`,d)}for(let f of o){let[E,...w]=f.split(".");d.mods.set(Ze(E),new Set(w.map(C=>C.toLowerCase())))}let m=i.onLoad(d);m&&(this.#n.has(n)||this.#n.set(n,{id:n.id,fns:[]}),this.#n.get(n)?.fns.push(m)),i?.removeOnLoad&&delete n.dataset[r]}})}#a(e,...n){let r=e.value.split(/;|\n/).map(f=>f.trim()).filter(f=>f!==""),i=r.length-1;r[i].startsWith("return")||(r[i]=`return (${r[i]});`);let o=r.join(`;
`).trim(),a=new Map,l=new RegExp(`(?:${pe})(.*?)(?:${ke})`,"gm");for(let f of o.matchAll(l)){let E=f[1],w=new ie("dsEscaped").with(E).value;a.set(w,E),o=o.replace(pe+E+ke,w)}let u=/@(\w*)\(/gm,c=o.matchAll(u),d=new Set;for(let f of c)d.add(f[1]);let y=new RegExp(`@(${Object.keys(this.#r).join("|")})\\(`,"gm");o=o.replaceAll(y,"ctx.actions.$1.fn(ctx,");let S=e.signals.paths();if(S.length){let f=new RegExp(`\\$(${S.join("|")})(\\W|$)`,"gm");o=o.replaceAll(f,"ctx.signals.signal('$1').value$2")}for(let[f,E]of a)o=o.replace(f,E);let m=`return (()=> {
${o}
})()`;e.fnContent=m;try{let f=new Function("ctx",...n,m);return(...E)=>{try{return f(e,...E)}catch(w){throw h("ExecuteExpression",e,{error:w.message})}}}catch(f){throw h("GenerateExpression",e,{error:f.message})}}#o(e,n){if(!e||!(e instanceof HTMLElement||e instanceof SVGElement))return null;let r=e.dataset;if("starIgnore"in r)return null;"starIgnore__self"in r||n(e);let i=e.firstElementChild;for(;i;)this.#o(i,n),i=i.nextElementSibling}#i(e){let n=this.#n.get(e);if(n){for(let r of n.fns)r();this.#n.delete(e)}}};var pt=new Te;pt.load(et,Qe,Ye);var Ae=pt;async function In(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function kn(t){let e,n,r,i=!1;return function(o){e===void 0?(e=o,n=0,r=-1):e=Ln(e,o);let a=e.length,l=0;for(;n<a;){i&&(e[n]===10&&(l=++n),i=!1);let u=-1;for(;n<a&&u===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-l);break;case 13:i=!0;case 10:u=n;break}if(u===-1)break;t(e.subarray(l,u),r),l=n,r=-1}l===a?e=void 0:l!==0&&(e=e.subarray(l),n-=l)}}function Dn(t,e,n){let r=mt(),i=new TextDecoder;return function(o,a){if(o.length===0)n?.(r),r=mt();else if(a>0){let l=i.decode(o.subarray(0,a)),u=a+(o[a+1]===32?2:1),c=i.decode(o.subarray(u));switch(l){case"data":r.data=r.data?`${r.data}
${c}`:c;break;case"event":r.event=c;break;case"id":t(r.id=c);break;case"retry":{let d=Number.parseInt(c,10);Number.isNaN(d)||e(r.retry=d);break}}}}}function Ln(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function mt(){return{data:"",event:"",id:"",retry:void 0}}var On="text/event-stream",gt="last-event-id";function ht(t,e,{signal:n,headers:r,onopen:i,onmessage:s,onclose:o,onerror:a,openWhenHidden:l,fetch:u,retryInterval:c=1e3,retryScaler:d=2,retryMaxWaitMs:y=3e4,retryMaxCount:S=10,...m}){return new Promise((f,E)=>{let w=0,C={...r};C.accept||(C.accept=On);let A;function T(){A.abort(),document.hidden||D()}l||document.addEventListener("visibilitychange",T);let b=0;function x(){document.removeEventListener("visibilitychange",T),window.clearTimeout(b),A.abort()}n?.addEventListener("abort",()=>{x(),f()});let N=u??window.fetch,g=i??function(){};async function D(){A=new AbortController;try{let M=await N(e,{...m,headers:C,signal:A.signal});await g(M),await In(M.body,kn(Dn(_=>{_?C[gt]=_:delete C[gt]},_=>{c=_},s))),o?.(),x(),f()}catch(M){if(!A.signal.aborted)try{let _=a?.(M)??c;window.clearTimeout(b),b=window.setTimeout(D,_),c*=d,c=Math.min(c,y),w++,w>=S?(x(),E(h("SseMaxRetries",t,{retryMaxCount:S}))):console.error(`Datastar failed to reach ${m.method}: ${e.toString()} retry in ${_}ms`)}catch(_){x(),E(_)}}}D()})}var Q=`${L}-sse`,He=`${L}-settling`,J=`${L}-swapping`,_e="started",we="finished",yt="error";function H(t,e){document.addEventListener(Q,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function Re(t,e){document.dispatchEvent(new CustomEvent(Q,{detail:{type:t,argsRaw:e}}))}var vt=t=>`${t}`.includes("text/event-stream"),q=async(t,e,n,r)=>{let{el:{id:i},el:s,signals:o}=t,{headers:a,contentType:l,includeLocal:u,selector:c,openWhenHidden:d,retryInterval:y,retryScaler:S,retryMaxWaitMs:m,retryMaxCount:f,abort:E}=Object.assign({headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:1e3,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},r),w=e.toLowerCase(),C=()=>{};try{if(Re(_e,{elId:i}),!n?.length)throw h("SseNoUrlProvided",t,{action:w});let A={};A[Be]=!0,l==="json"&&(A["Content-Type"]="application/json");let T=Object.assign({},A,a),b={method:e,headers:T,openWhenHidden:d,retryInterval:y,retryScaler:S,retryMaxWaitMs:m,retryMaxCount:f,signal:E,onopen:async g=>{if(g.status>=400){let D=g.status.toString();Re(yt,{status:D})}},onmessage:g=>{if(!g.event.startsWith(L))return;let D=g.event,M={},_=g.data.split(`
`);for(let re of _){let fe=re.indexOf(" "),Ue=re.slice(0,fe),de=M[Ue];de||(de=[],M[Ue]=de);let Rn=re.slice(fe+1).trim();de.push(Rn)}let W={};for(let[re,fe]of Object.entries(M))W[re]=fe.join(`
`);Re(D,W)},onerror:g=>{if(vt(g))throw h("InvalidContentType",t,{url:n});g&&console.error(g.message)}},x=new URL(n,window.location.origin),N=new URLSearchParams(x.search);if(l==="json"){let g=o.JSON(!1,!u);e==="GET"?N.set(L,g):b.body=g}else if(l==="form"){let g=c?document.querySelector(c):s.closest("form");if(g===null)throw c?h("SseFormNotFound",t,{action:w,selector:c}):h("SseClosestFormNotFound",t,{action:w});if(s!==g){let M=_=>_.preventDefault();g.addEventListener("submit",M),C=()=>g.removeEventListener("submit",M)}if(!g.checkValidity()){g.reportValidity(),C();return}let D=new FormData(g);if(e==="GET"){let M=new URLSearchParams(D);for(let[_,W]of M)N.set(_,W)}else b.body=D}else throw h("SseInvalidContentType",t,{action:w,contentType:l});x.search=N.toString();try{await ht(t,x.toString(),b)}catch(g){if(!vt(g))throw h("SseFetchFailed",t,{method:e,url:n,error:g})}}finally{Re(we,{elId:i}),C()}};var bt={type:3,name:"delete",fn:async(t,e,n)=>q(t,"DELETE",e,{...n})};var St={type:3,name:"get",fn:async(t,e,n)=>q(t,"GET",e,{...n})};var Et={type:3,name:"patch",fn:async(t,e,n)=>q(t,"PATCH",e,{...n})};var Tt={type:3,name:"post",fn:async(t,e,n)=>q(t,"POST",e,{...n})};var At={type:3,name:"put",fn:async(t,e,n)=>q(t,"PUT",e,{...n})};var _t={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({value:t,signals:e,el:n,key:r})=>{let i=r||j(t),s=e.upsertIfMissing(i,!1),o=a=>{let{type:l,argsRaw:{elId:u}}=a.detail;if(u===n.id)switch(l){case _e:s.value=!0;break;case we:s.value=!1;break}};return document.addEventListener(Q,o),()=>{document.removeEventListener(Q,o)}}};var wt={type:2,name:I.ExecuteScript,onGlobalInit:async t=>{H(I.ExecuteScript,({autoRemove:e=`${ze}`,attributes:n=Ke,script:r})=>{let i=$(e);if(!r?.length)throw V("NoScriptProvided",t);let s=document.createElement("script");for(let o of n.split(`
`)){let a=o.indexOf(" "),l=a?o.slice(0,a):o,u=a?o.slice(a):"";s.setAttribute(l.trim(),u.trim())}s.text=r,document.head.appendChild(s),i&&s.remove()})}};var le=document,ee=!!le.startViewTransition;var te="idiomorph",Pe=new WeakSet;function Nt(t,e,n={}){t instanceof Document&&(t=t.documentElement);let r;typeof e=="string"?r=Wn(e):r=e;let i=$n(r),s=Fn(t,i,n);return Mt(t,i,s)}function Mt(t,e,n){if(n.head.block){let r=t.querySelector("head"),i=e.querySelector("head");if(r&&i){let s=It(i,r,n);Promise.all(s).then(()=>{Mt(t,e,Object.assign(n,{head:{block:!1,ignore:!0}}))});return}}if(n.morphStyle==="innerHTML")return Ct(e,t,n),t.children;if(n.morphStyle==="outerHTML"||n.morphStyle==null){let r=jn(e,t,n);if(!r)throw P(te,"NoBestMatchFound",{old:t,new:e});let i=r?.previousSibling,s=r?.nextSibling,o=Ne(t,r,n);return r?Un(i,o,s):[]}throw P(te,"InvalidMorphStyle",{style:n.morphStyle})}function Ne(t,e,n){if(!(n.ignoreActive&&t===document.activeElement))if(e==null){if(n.callbacks.beforeNodeRemoved(t)===!1)return;t.remove(),n.callbacks.afterNodeRemoved(t);return}else{if(Me(t,e))return n.callbacks.beforeNodeMorphed(t,e)===!1?void 0:(t instanceof HTMLHeadElement&&n.head.ignore||(e instanceof HTMLHeadElement&&t instanceof HTMLHeadElement&&n.head.style!==O.Morph?It(e,t,n):(Vn(e,t),Ct(e,t,n))),n.callbacks.afterNodeMorphed(t,e),t);if(n.callbacks.beforeNodeRemoved(t)===!1||n.callbacks.beforeNodeAdded(e)===!1)return;if(!t.parentElement)throw P(te,"NoParentElementFound",{oldNode:t});return t.parentElement.replaceChild(e,t),n.callbacks.afterNodeAdded(e),n.callbacks.afterNodeRemoved(t),e}}function Ct(t,e,n){let r=t.firstChild,i=e.firstChild,s;for(;r;){if(s=r,r=s.nextSibling,i==null){if(n.callbacks.beforeNodeAdded(s)===!1)return;e.appendChild(s),n.callbacks.afterNodeAdded(s),z(n,s);continue}if(kt(s,i,n)){Ne(i,s,n),i=i.nextSibling,z(n,s);continue}let o=Hn(t,e,s,i,n);if(o){i=Rt(i,o,n),Ne(o,s,n),z(n,s);continue}let a=qn(t,s,i,n);if(a){i=Rt(i,a,n),Ne(a,s,n),z(n,s);continue}if(n.callbacks.beforeNodeAdded(s)===!1)return;e.insertBefore(s,i),n.callbacks.afterNodeAdded(s),z(n,s)}for(;i!==null;){let o=i;i=i.nextSibling,Dt(o,n)}}function Vn(t,e){let n=t.nodeType;if(n===1){for(let r of t.attributes)e.getAttribute(r.name)!==r.value&&e.setAttribute(r.name,r.value);for(let r of e.attributes)t.hasAttribute(r.name)||e.removeAttribute(r.name)}if((n===Node.COMMENT_NODE||n===Node.TEXT_NODE)&&e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue),t instanceof HTMLInputElement&&e instanceof HTMLInputElement&&t.type!=="file")e.value=t.value||"",xe(t,e,"value"),xe(t,e,"checked"),xe(t,e,"disabled");else if(t instanceof HTMLOptionElement)xe(t,e,"selected");else if(t instanceof HTMLTextAreaElement&&e instanceof HTMLTextAreaElement){let r=t.value,i=e.value;r!==i&&(e.value=r),e.firstChild&&e.firstChild.nodeValue!==r&&(e.firstChild.nodeValue=r)}}function xe(t,e,n){let r=t.getAttribute(n),i=e.getAttribute(n);r!==i&&(r?e.setAttribute(n,r):e.removeAttribute(n))}function It(t,e,n){let r=[],i=[],s=[],o=[],a=n.head.style,l=new Map;for(let c of t.children)l.set(c.outerHTML,c);for(let c of e.children){let d=l.has(c.outerHTML),y=n.head.shouldReAppend(c),S=n.head.shouldPreserve(c);d||S?y?i.push(c):(l.delete(c.outerHTML),s.push(c)):a===O.Append?y&&(i.push(c),o.push(c)):n.head.shouldRemove(c)!==!1&&i.push(c)}o.push(...l.values());let u=[];for(let c of o){let d=document.createRange().createContextualFragment(c.outerHTML).firstChild;if(!d)throw P(te,"NewElementCouldNotBeCreated",{newNode:c});if(n.callbacks.beforeNodeAdded(d)){if(d.hasAttribute("href")||d.hasAttribute("src")){let y,S=new Promise(m=>{y=m});d.addEventListener("load",()=>{y(void 0)}),u.push(S)}e.appendChild(d),n.callbacks.afterNodeAdded(d),r.push(d)}}for(let c of i)n.callbacks.beforeNodeRemoved(c)!==!1&&(e.removeChild(c),n.callbacks.afterNodeRemoved(c));return n.head.afterHeadMorphed(e,{added:r,kept:s,removed:i}),u}function B(){}function Fn(t,e,n){return{target:t,newContent:e,config:n,morphStyle:n.morphStyle,ignoreActive:n.ignoreActive,idMap:Jn(t,e),deadIds:new Set,callbacks:Object.assign({beforeNodeAdded:B,afterNodeAdded:B,beforeNodeMorphed:B,afterNodeMorphed:B,beforeNodeRemoved:B,afterNodeRemoved:B},n.callbacks),head:Object.assign({style:"merge",shouldPreserve:r=>r.getAttribute("im-preserve")==="true",shouldReAppend:r=>r.getAttribute("im-re-append")==="true",shouldRemove:B,afterHeadMorphed:B},n.head)}}function kt(t,e,n){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName?t?.id?.length&&t.id===e.id?!0:ue(n,t,e)>0:!1}function Me(t,e){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName}function Rt(t,e,n){for(;t!==e;){let r=t;if(t=t?.nextSibling,!r)throw P(te,"NoTemporaryNodeFound",{startInclusive:t,endExclusive:e});Dt(r,n)}return z(n,e),e.nextSibling}function Hn(t,e,n,r,i){let s=ue(i,n,e),o=null;if(s>0){o=r;let a=0;for(;o!=null;){if(kt(n,o,i))return o;if(a+=ue(i,o,t),a>s)return null;o=o.nextSibling}}return o}function qn(t,e,n,r){let i=n,s=e.nextSibling,o=0;for(;i&&s;){if(ue(r,i,t)>0)return null;if(Me(e,i))return i;if(Me(s,i)&&(o++,s=s.nextSibling,o>=2))return null;i=i.nextSibling}return i}var xt=new DOMParser;function Wn(t){let e=t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(e.match(/<\/html>/)||e.match(/<\/head>/)||e.match(/<\/body>/)){let i=xt.parseFromString(t,"text/html");if(e.match(/<\/html>/))return Pe.add(i),i;let s=i.firstChild;return s?(Pe.add(s),s):null}let r=xt.parseFromString(`<body><template>${t}</template></body>`,"text/html").body.querySelector("template")?.content;if(!r)throw P(te,"NoContentFound",{newContent:t});return Pe.add(r),r}function $n(t){if(t==null)return document.createElement("div");if(Pe.has(t))return t;if(t instanceof Node){let n=document.createElement("div");return n.append(t),n}let e=document.createElement("div");for(let n of[...t])e.append(n);return e}function Un(t,e,n){let r=[],i=[];for(;t;)r.push(t),t=t.previousSibling;for(;r.length>0;){let s=r.pop();i.push(s),e?.parentElement?.insertBefore(s,e)}for(i.push(e);n;)r.push(n),i.push(n),n=n.nextSibling;for(;r.length;)e?.parentElement?.insertBefore(r.pop(),e.nextSibling);return i}function jn(t,e,n){let r=t.firstChild,i=r,s=0;for(;r;){let o=Bn(r,e,n);o>s&&(i=r,s=o),r=r.nextSibling}return i}function Bn(t,e,n){return Me(t,e)?.5+ue(n,t,e):0}function Dt(t,e){z(e,t),e.callbacks.beforeNodeRemoved(t)!==!1&&(t.remove(),e.callbacks.afterNodeRemoved(t))}function Gn(t,e){return!t.deadIds.has(e)}function Kn(t,e,n){return t.idMap.get(n)?.has(e)||!1}function z(t,e){let n=t.idMap.get(e);if(n)for(let r of n)t.deadIds.add(r)}function ue(t,e,n){let r=t.idMap.get(e);if(!r)return 0;let i=0;for(let s of r)Gn(t,s)&&Kn(t,s,n)&&++i;return i}function Pt(t,e){let n=t.parentElement,r=t.querySelectorAll("[id]");for(let i of r){let s=i;for(;s!==n&&s;){let o=e.get(s);o==null&&(o=new Set,e.set(s,o)),o.add(i.id),s=s.parentElement}}}function Jn(t,e){let n=new Map;return Pt(t,n),Pt(e,n),n}var Ot={type:2,name:I.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");H(I.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:i=Xe,settleDuration:s=`${me}`,useViewTransition:o=`${ge}`})=>{let a=Number.parseInt(s),l=$(o);e.innerHTML=n.trim();let u=[...e.content.children];for(let c of u){if(!(c instanceof Element))throw V("NoFragmentsFound",t);let d=r||`#${c.getAttribute("id")}`,y=[...document.querySelectorAll(d)||[]];if(!y.length)throw V("NoTargetsFound",t,{selectorOrID:d});ee&&l?le.startViewTransition(()=>Lt(t,i,a,c,y)):Lt(t,i,a,c,y)}})}};function Lt(t,e,n,r,i){for(let s of i){s.classList.add(J);let o=s.outerHTML,a=s;switch(e){case O.Morph:{let c=Nt(a,r,{callbacks:{beforeNodeRemoved:(d,y)=>(t.cleanup(d),!0)}});if(!c?.length)throw V("MorphFailed",t);a=c[0];break}case O.Inner:a.innerHTML=r.innerHTML;break;case O.Outer:a.replaceWith(r);break;case O.Prepend:a.prepend(r);break;case O.Append:a.append(r);break;case O.Before:a.before(r);break;case O.After:a.after(r);break;case O.UpsertAttributes:for(let c of r.getAttributeNames()){let d=r.getAttribute(c);a.setAttribute(c,d)}break;default:throw V("InvalidMergeMode",t,{mergeMode:e})}t.cleanup(a);let l=a.classList;l.add(J),t.apply(document.body),setTimeout(()=>{s.classList.remove(J),l.remove(J)},n);let u=a.outerHTML;o!==u&&(l.add(He),setTimeout(()=>{l.remove(He)},n))}}var Vt={type:2,name:I.MergeSignals,onGlobalInit:async t=>{H(I.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${Je}`})=>{let{signals:r}=t,i=$(n);r.merge(he(e),i),t.apply(document.body)})}};var Ft={type:2,name:I.RemoveFragments,onGlobalInit:async t=>{H(I.RemoveFragments,({selector:e,settleDuration:n=`${me}`,useViewTransition:r=`${ge}`})=>{if(!e.length)throw V("NoSelectorProvided",t);let i=Number.parseInt(n),s=$(r),o=document.querySelectorAll(e),a=()=>{for(let l of o)l.classList.add(J);setTimeout(()=>{for(let l of o)l.remove()},i)};ee&&s?le.startViewTransition(()=>a()):a()})}};var Ht={type:2,name:I.RemoveSignals,onGlobalInit:async t=>{H(I.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw V("NoPathsProvided",t);t.signals.remove(...n),t.apply(document.body)})}};var qt={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw h("ClipboardNotAvailable",t);navigator.clipboard.writeText(e)}};var Wt={type:1,name:"customValidity",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t;if(!(e instanceof HTMLInputElement))throw h("CustomValidityInvalidElement",t);let i=n();return r(()=>{let s=i();if(typeof s!="string")throw h("CustomValidityInvalidExpression",t,{result:s});e.setCustomValidity(s)})}};var $t="once",Ut="half",jt="full",Bt={type:1,name:"intersects",keyReq:2,mods:new Set([$t,Ut,jt]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let i={threshold:0};n.has(jt)?i.threshold=1:n.has(Ut)&&(i.threshold=.5);let s=r(),o=new IntersectionObserver(a=>{for(let l of a)l.isIntersecting&&(s(),n.has($t)&&(o.disconnect(),delete t.dataset[e]))},i);return o.observe(t),()=>o.disconnect()}};var Gt="session",Kt={type:1,name:"persist",mods:new Set([Gt]),onLoad:({key:t,value:e,signals:n,effect:r,mods:i})=>{t===""&&(t=L);let s=i.has(Gt)?sessionStorage:localStorage,o=e.split(/\s+/).filter(u=>u!=="");o=o.map(u=>j(u));let a=()=>{let u=s.getItem(t)||"{}",c=JSON.parse(u);n.merge(c)},l=()=>{let u;o.length?u=n.subset(...o):u=n.values(),s.setItem(t,JSON.stringify(u))};return a(),r(()=>{l()})}};var Jt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),i=window.location.href,s=new URL(r,i).toString();window.history.replaceState({},"",s)})}};var Ce="smooth",qe="instant",We="auto",zt="hstart",Xt="hcenter",Yt="hend",Zt="hnearest",Qt="vstart",en="vcenter",tn="vend",nn="vnearest",zn="focus",Ie="center",rn="start",on="end",sn="nearest",an={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([Ce,qe,We,zt,Xt,Yt,Zt,Qt,en,tn,nn,zn]),onLoad:t=>{let{el:e,mods:n,rawKey:r}=t;e.tabIndex||e.setAttribute("tabindex","0");let i={behavior:Ce,block:Ie,inline:Ie};if(n.has(Ce)&&(i.behavior=Ce),n.has(qe)&&(i.behavior=qe),n.has(We)&&(i.behavior=We),n.has(zt)&&(i.inline=rn),n.has(Xt)&&(i.inline=Ie),n.has(Yt)&&(i.inline=on),n.has(Zt)&&(i.inline=sn),n.has(Qt)&&(i.block=rn),n.has(en)&&(i.block=Ie),n.has(tn)&&(i.block=on),n.has(nn)&&(i.block=sn),!(e instanceof HTMLElement||e instanceof SVGElement))throw h("ScrollIntoViewInvalidElement",t);return e.tabIndex||e.setAttribute("tabindex","0"),e.scrollIntoView(i),n.has("focus")&&e.focus(),delete e.dataset[r],()=>{}}};var ln="none",un="display",cn={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===ln&&t.removeProperty(un):t.setProperty(un,ln)})}};var fn="view-transition",dn={type:1,name:"viewTransition",keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===fn&&(t=!0);if(!t){let e=document.createElement("meta");e.name=fn,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!ee){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let i=r();if(!i?.length)return;let s=e.style;s.viewTransitionName=i})}};var pn={type:1,name:"attr",valReq:1,onLoad:({el:t,genRX:e,key:n,effect:r})=>{let i=e();return n===""?r(async()=>{let s=i();for(let[o,a]of Object.entries(s))t.setAttribute(o,a)}):(n=U(n),r(async()=>{let s=!1;try{s=i()}catch{}let o;typeof s=="string"?o=s:o=JSON.stringify(s),!o||o==="false"||o==="null"||o==="undefined"?t.removeAttribute(n):t.setAttribute(n,o)}))}};var Xn=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,mn=["change","input","keydown"],gn={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,value:n,key:r,signals:i,effect:s}=t,o=r||j(n),a=()=>{},l=()=>{},u=e.tagName.toLowerCase(),c="",d=u.includes("input"),y=e.getAttribute("type"),S=u.includes("checkbox")||d&&y==="checkbox";S&&(c=!1),d&&y==="number"&&(c=0);let f=u.includes("select"),E=u.includes("radio")||d&&y==="radio",w=d&&y==="file";E&&(e.getAttribute("name")?.length||e.setAttribute("name",o)),i.upsertIfMissing(o,c),a=()=>{let A="value"in e,T=i.value(o),b=`${T}`;if(S||E){let x=e;S?x.checked=!!T||T==="true":E&&(x.checked=b===x.value)}else if(!w)if(f){let x=e;if(x.multiple)for(let N of x.options){if(N?.disabled)return;Array.isArray(T)||typeof T=="string"?N.selected=T.includes(N.value):typeof T=="number"?N.selected=T===Number(N.value):N.selected=T}else x.value=b}else A?e.value=b:e.setAttribute("value",b)},l=async()=>{if(w){let b=[...e?.files||[]],x=[],N=[],g=[];await Promise.all(b.map(D=>new Promise(M=>{let _=new FileReader;_.onload=()=>{if(typeof _.result!="string")throw h("InvalidFileResultType",t,{resultType:typeof _.result});let W=_.result.match(Xn);if(!W?.groups)throw h("InvalidDataUri",t,{result:_.result});x.push(W.groups.contents),N.push(W.groups.mime),g.push(D.name)},_.onloadend=()=>M(void 0),_.readAsDataURL(D)}))),i.setValue(o,x),i.setValue(`${o}Mimes`,N),i.setValue(`${o}Names`,g);return}let A=i.value(o),T=e||e;if(typeof A=="number"){let b=Number(T.value||T.getAttribute("value"));i.setValue(o,b)}else if(typeof A=="string"){let b=T.value||T.getAttribute("value")||"";i.setValue(o,b)}else if(typeof A=="boolean")if(S){let b=T.checked||T.getAttribute("checked")==="true";i.setValue(o,b)}else{let b=!!(T.value||T.getAttribute("value"));i.setValue(o,b)}else if(!(typeof A>"u"))if(Array.isArray(A))if(f){let N=[...e.selectedOptions].filter(g=>g.selected).map(g=>g.value);i.setValue(o,N)}else{let b=JSON.stringify(T.value.split(","));i.setValue(o,b)}else throw h("BindUnsupportedSignalType",t,{signalType:typeof A})};for(let A of mn)e.addEventListener(A,l);let C=s(()=>a());return()=>{C();for(let A of mn)e.removeEventListener(A,l)}}};var hn={type:1,name:"class",valReq:1,onLoad:({key:t,el:e,genRX:n,effect:r})=>{let i=e.classList,s=n();return r(()=>{if(t===""){let o=s();for(let[a,l]of Object.entries(o)){let u=a.split(/\s+/);l?i.add(...u):i.remove(...u)}}else{let o=s(),a=U(t);o?i.add(a):i.remove(a)}})}};function ce(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function ne(t,e,n=!1){return t?t.has(e.toLowerCase()):n}function yn(t,e,n=!1){return function(...i){n?t(...i):setTimeout(()=>{t(...i)},e)}}function vn(t,e,n=!1,r=!0){let i=-1,s=()=>i&&clearTimeout(i);return function(...a){s(),n&&!i&&t(...a),i=setTimeout(()=>{r&&t(...a),s()},e)}}function bn(t,e,n=!0,r=!1){let i=!1;return function(...o){i||(n&&t(...o),i=!0,setTimeout(()=>{i=!1,r&&t(...o)},e))}}var $e=new Map,Yn="evt",Sn={type:1,name:"on",keyReq:1,valReq:1,argNames:[Yn],onLoad:({el:t,key:e,genRX:n,mods:r,signals:i,effect:s})=>{let o=n(),a=t;r.has("window")&&(a=window);let l=m=>{m&&((r.has("prevent")||e==="submit")&&m.preventDefault(),r.has("stop")&&m.stopPropagation()),o(m)},u=r.get("delay");if(u){let m=ce(u),f=ne(u,"leading",!1);l=yn(l,m,f)}let c=r.get("debounce");if(c){let m=ce(c),f=ne(c,"leading",!1),E=!ne(c,"notrail",!1);l=vn(l,m,f,E)}let d=r.get("throttle");if(d){let m=ce(d),f=!ne(d,"noleading",!1),E=ne(d,"trail",!1);l=bn(l,m,f,E)}let y={capture:!0,passive:!1,once:!1};r.has("capture")||(y.capture=!1),r.has("passive")&&(y.passive=!0),r.has("once")&&(y.once=!0);let S=U(e).toLowerCase();switch(S){case"load":return l(),delete t.dataset.onLoad,()=>{};case"interval":{let m=1e3;u&&(m=ce(u),l());let f=setInterval(l,m);return()=>{clearInterval(f)}}case"raf":{let m,f=()=>{l(),m=requestAnimationFrame(f)};return m=requestAnimationFrame(f),()=>{m&&cancelAnimationFrame(m)}}case"signals-change":return nt(t,()=>{$e.delete(t.id)}),s(()=>{let m=r.has("remote"),f=i.JSON(!1,m);($e.get(t.id)||"")!==f&&($e.set(t.id,f),l())});default:{if(r.has("outside")){a=document;let f=l;l=w=>{let C=w?.target;t.contains(C)||f(w)}}return a.addEventListener(S,l,y),()=>{a.removeEventListener(S,l)}}}}};var En={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,value:n,signals:r})=>{let i=e||j(n);return r.setValue(i,t),()=>r.setValue(i,null)}};var Tn={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t,i=n();return e instanceof HTMLElement||h("TextInvalidElement",t),r(()=>{let s=i(t);e.textContent=`${s}`})}};var{round:Zn,max:Qn,min:er}=Math,An={type:3,name:"fit",fn:(t,e,n,r,i,s,o=!1,a=!1)=>{let l=(e-n)/(r-n)*(s-i)+i;return a&&(l=Zn(l)),o&&(l=Qn(i,er(s,l))),l}};var _n={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,i)=>{r.startsWith(e)&&(i.value=n)})}};var wn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};Ae.load(pn,gn,hn,Sn,En,cn,Tn,_t,St,Tt,At,Et,bt,Ot,Vt,Ft,Ht,wt,qt,Wt,Bt,Kt,Jt,an,dn,An,_n,wn);Ae.apply(document.body);var bs=Ae;export{bs as Datastar};
//# sourceMappingURL=datastar.js.map
