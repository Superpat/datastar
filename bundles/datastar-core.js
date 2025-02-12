// Datastar v1.0.0-beta.5
var ee=/🖕JS_DS🚀/.source,M=ee.slice(0,5),W=ee.slice(4),A="datastar";var Ae={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},ke=Ae.Morph;var b=(n=>(n[n.Attribute=1]="Attribute",n[n.Watcher=2]="Watcher",n[n.Action=3]="Action",n))(b||{});var te=`${A}-signals`;var q=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,s)=>(s?"-":"")+e.toLowerCase()),D=t=>q(t).replace(/-./g,e=>e[1].toUpperCase()),J=t=>q(t).replace(/-/g,"_"),we=t=>D(t).replace(/^./,e=>e[0].toUpperCase()),ne=t=>new Function(`return Object.assign({}, ${t})`)();var Ne={kebab:q,snake:J,pascal:we};function I(t,e){for(let s of e.get("case")||[]){let n=Ne[s];n&&(t=n(t))}return t}var Re="computed",re={type:1,name:Re,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:s,genRX:n})=>{t=I(t,e);let r=n();s.setComputed(t,r)}};var ie={type:1,name:"signals",removeOnLoad:()=>!0,onLoad:t=>{let{key:e,mods:s,signals:n,value:r,genRX:i}=t,o=s.has("ifmissing");if(e!==""){let a=I(e,s),l=r===""?r:i()();o?n.upsertIfMissing(a,l):n.setValue(a,l)}else{let a=ne(t.value);t.value=JSON.stringify(a);let c=i()();n.merge(c,o)}}};var oe={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var k=class{#e=0;#n;constructor(e=A){this.#n=e}with(e){if(typeof e=="string")for(let s of e.split(""))this.with(s.charCodeAt(0));else this.#e=(this.#e<<5)-this.#e+e;return this}get value(){return this.#n+Math.abs(this.#e).toString(36)}};function ae(t){if(t.id)return t.id;let e=new k,s=t;for(;s;){if(s.id){e.with(s.id);break}let n=s?.parentNode;n?e.with([...n.children].indexOf(s)):e.with(s.tagName),s=n}return e.value}function U(t,e){if(!t||!(t instanceof HTMLElement||t instanceof SVGElement))return null;let s=t.dataset;if("starIgnore"in s)return null;"starIgnore__self"in s||e(t);let n=t.firstElementChild;for(;n;)U(n,e),n=n.nextElementSibling}function le(t,e){return(...s)=>{setTimeout(()=>{t(...s)},e)}}var Ce="https://data-star.dev/errors";function z(t,e,s={}){let n=new Error;n.name=`${A} ${t} error`;let r=J(e),i=new URLSearchParams({metadata:JSON.stringify(s)}).toString(),o=JSON.stringify(s,null,2);return n.message=`${e}
More info: ${Ce}/${t}/${r}?${i}
Context: ${o}`,n}function v(t,e,s={}){return z("internal",e,Object.assign({from:t},s))}function ue(t,e,s={}){let n={plugin:{name:e.plugin.name,type:b[e.plugin.type]}};return z("init",t,Object.assign(n,s))}function x(t,e,s={}){let n={plugin:{name:e.plugin.name,type:b[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return z("runtime",t,Object.assign(n,s))}var w="preact-signals",Oe=Symbol.for("preact-signals"),y=1,N=2,V=4,C=8,F=16,R=32;function X(){L++}function Z(){if(L>1){L--;return}let t,e=!1;for(;P!==void 0;){let s=P;for(P=void 0,Y++;s!==void 0;){let n=s._nextBatchedEffect;if(s._nextBatchedEffect=void 0,s._flags&=~N,!(s._flags&C)&&fe(s))try{s._callback()}catch(r){e||(t=r,e=!0)}s=n}}if(Y=0,L--,e)throw t}var u;var P,L=0,Y=0,G=0;function ce(t){if(u===void 0)return;let e=t._node;if(e===void 0||e._target!==u)return e={_version:0,_source:t,_prevSource:u._sources,_nextSource:void 0,_target:u,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},u._sources!==void 0&&(u._sources._nextSource=e),u._sources=e,t._node=e,u._flags&R&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=u._sources,e._nextSource=void 0,u._sources._nextSource=e,u._sources=e),e}function d(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}d.prototype.brand=Oe;d.prototype._refresh=()=>!0;d.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};d.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,s=t._nextTarget;e!==void 0&&(e._nextTarget=s,t._prevTarget=void 0),s!==void 0&&(s._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=s)}};d.prototype.subscribe=function(t){return j(()=>{let e=this.value,s=u;u=void 0;try{t(e)}finally{u=s}})};d.prototype.valueOf=function(){return this.value};d.prototype.toString=function(){return`${this.value}`};d.prototype.toJSON=function(){return this.value};d.prototype.peek=function(){let t=u;u=void 0;try{return this.value}finally{u=t}};Object.defineProperty(d.prototype,"value",{get(){let t=ce(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(Y>100)throw v(w,"SignalCycleDetected");let e=this._value,s=t;this._value=t,this._version++,G++,X();try{for(let n=this._targets;n!==void 0;n=n._nextTarget)n._target._notify()}finally{Z()}this?._onChange({old:e,revised:s})}}});function fe(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function de(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let s=e._source._node;if(s!==void 0&&(e._rollbackNode=s),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function pe(t){let e=t._sources,s;for(;e!==void 0;){let n=e._prevSource;e._version===-1?(e._source._unsubscribe(e),n!==void 0&&(n._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=n)):s=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=n}t._sources=s}function E(t){d.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=G-1,this._flags=V}E.prototype=new d;E.prototype._refresh=function(){if(this._flags&=~N,this._flags&y)return!1;if((this._flags&(V|R))===R||(this._flags&=~V,this._globalVersion===G))return!0;if(this._globalVersion=G,this._flags|=y,this._version>0&&!fe(this))return this._flags&=~y,!0;let t=u;try{de(this),u=this;let e=this._fn();(this._flags&F||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~F,this._version++)}catch(e){this._value=e,this._flags|=F,this._version++}return u=t,pe(this),this._flags&=~y,!0};E.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=V|R;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}d.prototype._subscribe.call(this,t)};E.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(d.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~R;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};E.prototype._notify=function(){if(!(this._flags&N)){this._flags|=V|N;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(E.prototype,"value",{get(){if(this._flags&y)throw v(w,"SignalCycleDetected");let t=ce(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&F)throw v(w,"GetComputedError",{value:this._value});return this._value}});function ge(t){return new E(t)}function he(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){X();let s=u;u=void 0;try{e()}catch(n){throw t._flags&=~y,t._flags|=C,Q(t),v(w,"CleanupEffectError",{error:n})}finally{u=s,Z()}}}function Q(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,he(t)}function Me(t){if(u!==this)throw v(w,"EndEffectError");pe(this),u=t,this._flags&=~y,this._flags&C&&Q(this),Z()}function $(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=R}$.prototype._callback=function(){let t=this._start();try{if(this._flags&C||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};$.prototype._start=function(){if(this._flags&y)throw v(w,"SignalCycleDetected");this._flags|=y,this._flags&=~C,he(this),de(this),X();let t=u;return u=this,Me.bind(this,t)};$.prototype._notify=function(){this._flags&N||(this._flags|=N,this._nextBatchedEffect=P,P=this)};$.prototype._dispose=function(){this._flags|=C,this._flags&y||Q(this)};function j(t){let e=new $(t);try{e._callback()}catch(s){throw e._dispose(),s}return e._dispose.bind(e)}var me="namespacedSignals",O=t=>{document.dispatchEvent(new CustomEvent(te,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function _e(t,e=!1){let s={};for(let n in t)if(Object.hasOwn(t,n)){if(e&&n.startsWith("_"))continue;let r=t[n];r instanceof d?s[n]=r.value:s[n]=_e(r)}return s}function ve(t,e,s=!1){let n={added:[],removed:[],updated:[]};for(let r in e)if(Object.hasOwn(e,r)){if(r.match(/\_\_+/))throw v(me,"InvalidSignalKey",{key:r});let i=e[r];if(i instanceof Object&&!Array.isArray(i)){t[r]||(t[r]={});let o=ve(t[r],i,s);n.added.push(...o.added.map(a=>`${r}.${a}`)),n.removed.push(...o.removed.map(a=>`${r}.${a}`)),n.updated.push(...o.updated.map(a=>`${r}.${a}`))}else{if(Object.hasOwn(t,r)){if(s)continue;let l=t[r];if(l instanceof d){let c=l.value;l.value=i,c!==i&&n.updated.push(r);continue}}let a=new d(i);a._onChange=()=>{O({updated:[r]})},t[r]=a,n.added.push(r)}}return n}function ye(t,e){for(let s in t)if(Object.hasOwn(t,s)){let n=t[s];n instanceof d?e(s,n):ye(n,(r,i)=>{e(`${s}.${r}`,i)})}}function De(t,...e){let s={};for(let n of e){let r=n.split("."),i=t,o=s;for(let l=0;l<r.length-1;l++){let c=r[l];if(!i[c])return{};o[c]||(o[c]={}),i=i[c],o=o[c]}let a=r[r.length-1];o[a]=i[a]}return s}var K=class{#e={};exists(e){return!!this.signal(e)}signal(e){let s=e.split("."),n=this.#e;for(let o=0;o<s.length-1;o++){let a=s[o];if(!n[a])return null;n=n[a]}let r=s[s.length-1],i=n[r];if(!i)throw v(me,"SignalNotFound",{path:e});return i}setSignal(e,s){let n=e.split("."),r=this.#e;for(let o=0;o<n.length-1;o++){let a=n[o];r[a]||(r[a]={}),r=r[a]}let i=n[n.length-1];r[i]=s}setComputed(e,s){let n=ge(()=>s());this.setSignal(e,n)}value(e){return this.signal(e)?.value}setValue(e,s){let n=this.upsertIfMissing(e,s),r=n.value;n.value=s,r!==s&&O({updated:[e]})}upsertIfMissing(e,s){let n=e.split("."),r=this.#e;for(let l=0;l<n.length-1;l++){let c=n[l];r[c]||(r[c]={}),r=r[c]}let i=n[n.length-1],o=r[i];if(o instanceof d)return o;let a=new d(s);return a._onChange=()=>{O({updated:[e]})},r[i]=a,O({added:[e]}),a}remove(...e){if(!e.length){this.#e={};return}let s=Array();for(let n of e){let r=n.split("."),i=this.#e;for(let a=0;a<r.length-1;a++){let l=r[a];if(!i[l])return;i=i[l]}let o=r[r.length-1];delete i[o],s.push(n)}O({removed:s})}merge(e,s=!1){let n=ve(this.#e,e,s);(n.added.length||n.removed.length||n.updated.length)&&O(n)}subset(...e){return De(this.values(),...e)}walk(e){ye(this.#e,e)}paths(){let e=new Array;return this.walk(s=>e.push(s)),e}values(e=!1){return _e(this.#e,e)}JSON(e=!0,s=!1){let n=this.values(s);return e?JSON.stringify(n,null,2):JSON.stringify(n)}toString(){return this.JSON()}};var Se=(t,e)=>`${t}${M}${e}`,H=class{constructor(){this.aliasPrefix="";this.#e=new K;this.#n=[];this.#s={};this.#a=[];this.#i=null;this.#t=new Map;this.#l=le(()=>{this.#o(document.body),this.#u()},1)}#e;#n;#s;#a;#i;#t;get signals(){return this.#e}load(...e){let s=this;for(let n of e){let r={get signals(){return s.#e},effect:o=>j(o),actions:this.#s,plugin:n,applyAttributePlugin:s.#r.bind(s)},i;switch(n.type){case 2:{let o=n;this.#a.push(o),i=o.onGlobalInit;break}case 3:{this.#s[n.name]=n;break}case 1:{let o=n;this.#n.push(o),i=o.onGlobalInit;break}default:throw ue("InvalidPluginType",r)}i&&i(r)}this.#n.sort((n,r)=>{let i=r.name.length-n.name.length;return i!==0?i:n.name.localeCompare(r.name)}),this.#l()}#l;#o(e){U(e,s=>{let n=this.#t.get(s);if(n){for(let[,r]of n)r();this.#t.delete(s)}for(let r of Object.keys(s.dataset))this.#r(s,r)})}#u(){this.#i||(this.#i=new MutationObserver(e=>{for(let{target:s,type:n,attributeName:r,oldValue:i,addedNodes:o,removedNodes:a}of e)switch(n){case"childList":{for(let l of a){let c=l,g=this.#t.get(c);if(g){for(let[_,p]of g)p();this.#t.delete(c)}}for(let l of o){let c=l;this.#o(c)}}break;case"attributes":{{let l="data-",c=l+(this.aliasPrefix?`${this.aliasPrefix}-`:"");if(!r?.startsWith(c))break;let g=s,_=D(r.slice(l.length));if(i!==null&&g.dataset[_]!==i){let p=this.#t.get(g);if(p){let S=Se(_,i),f=p.get(S);f&&(f(),p.delete(S))}}_ in g.dataset&&this.#r(g,_)}break}}}),this.#i.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}#r(e,s){let n=s.slice(this.aliasPrefix.length),r=this.#n.find(m=>n.startsWith(m.name));if(!r)return;let i=this.#t.get(e);if(i)for(let[m,B]of i)m.startsWith(s)&&(B(),i.delete(m));e.id.length||(e.id=ae(e));let[o,...a]=n.slice(r.name.length).split(/\_\_+/),l=o.length>0;l&&(o=D(o));let c=e.dataset[s]||"",g=c.length>0,_=this,p={get signals(){return _.#e},applyAttributePlugin:_.#r.bind(_),effect:m=>j(m),actions:this.#s,genRX:()=>this.#c(p,...r.argNames||[]),plugin:r,el:e,rawKey:n,key:o,value:c,mods:new Map},S=r.keyReq||0;if(l){if(S===2)throw x(`${r.name}KeyNotAllowed`,p)}else if(S===1)throw x(`${r.name}KeyRequired`,p);let f=r.valReq||0;if(g){if(f===2)throw x(`${r.name}ValueNotAllowed`,p)}else if(f===1)throw x(`${r.name}ValueRequired`,p);if(S===3||f===3){if(l&&g)throw x(`${r.name}KeyAndValueProvided`,p);if(!l&&!g)throw x(`${r.name}KeyOrValueRequired`,p)}for(let m of a){let[B,...Te]=m.split(".");p.mods.set(D(B),new Set(Te.map(Ee=>Ee.toLowerCase())))}let h=r.onLoad(p);if(h){let m=this.#t.get(e);m||(m=new Map,this.#t.set(e,m)),m.set(Se(s,c),h)}let T=r.removeOnLoad;T&&T(n)===!0&&delete e.dataset[s]}#c(e,...s){let n="",r=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,i=e.value.trim().match(r);if(i){let f=i.length-1,h=i[f].trim();h.startsWith("return")||(i[f]=`return (${h});`),n=i.join(`;
`)}let o=new Map,a=new RegExp(`(?:${M})(.*?)(?:${W})`,"gm");for(let f of n.matchAll(a)){let h=f[1],T=new k("dsEscaped").with(h).value;o.set(T,h),n=n.replace(M+h+W,T)}let l=/@(\w*)\(/gm,c=n.matchAll(l),g=new Set;for(let f of c)g.add(f[1]);let _=new RegExp(`@(${Object.keys(this.#s).join("|")})\\(`,"gm");n=n.replaceAll(_,"ctx.actions.$1.fn(ctx,");let p=e.signals.paths();if(p.length){let f=new RegExp(`\\$(${p.join("|")})(\\W|$)`,"gm");n=n.replaceAll(f,"ctx.signals.signal('$1').value$2")}for(let[f,h]of o)n=n.replace(f,h);let S=`return (()=> {
${n}
})()`;e.fnContent=S;try{let f=new Function("ctx",...s,S);return(...h)=>{try{return f(e,...h)}catch(T){throw x("ExecuteExpression",e,{error:T.message})}}}catch(f){throw x("GenerateExpression",e,{error:f.message})}}};var xe=new H;xe.load(oe,ie,re);var be=xe;var xt=be;export{xt as Datastar};
//# sourceMappingURL=datastar-core.js.map
