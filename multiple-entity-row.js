/*! For license information please see multiple-entity-row.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=i.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(n,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new r(i,t,n)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var a;const c=window,l=c.trustedTypes,u=l?l.emptyScript:"",h=c.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},d=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:d};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Ep(n,e);void 0!==i&&(this._$Ev.set(i,n),t.push(i))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var n;const i=null!==(n=this.shadowRoot)&&void 0!==n?n:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{e?n.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,n.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=p){var i;const r=this.constructor._$Ep(t,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:f).toAttribute(e,n.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:f;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:y}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.5.0");const v=window,b=v.trustedTypes,_=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,$="?"+g,w=`<${$}>`,A=document,O=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,x=/>/g,k=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),C=/'/g,N=/"/g,T=/^(?:script|style|textarea|title)$/i,D=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),U=D(1),H=(D(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),M=new WeakMap,I=A.createTreeWalker(A,129,null,!1),z=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=j;for(let e=0;e<n;e++){const n=t[e];let a,c,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,c=s.exec(n),null!==c);)u=s.lastIndex,s===j?"!--"===c[1]?s=P:void 0!==c[1]?s=x:void 0!==c[2]?(T.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=k):void 0!==c[3]&&(s=k):s===k?">"===c[0]?(s=null!=r?r:j,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?k:'"'===c[3]?N:C):s===N||s===C?s=k:s===P||s===x?s=j:(s=k,r=void 0);const h=s===k&&t[e+1].startsWith("/>")?" ":"";o+=s===j?n+w:l>=0?(i.push(a),n.slice(0,l)+"$lit$"+n.slice(l)+g+h):n+g+(-2===l?(i.push(void 0),e):h)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(a):a,i]};class L{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[c,l]=z(t,e);if(this.el=L.createElement(c,n),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=I.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const n=l[o++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?K:"@"===e[1]?Z:W})}else a.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(T.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],O()),I.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===$)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)a.push({type:7,index:r}),t+=g.length-1}r++}}static createElement(t,e){const n=A.createElement("template");return n.innerHTML=t,n}}function F(t,e,n=t,i){var r,o,s,a;if(e===H)return e;let c=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const l=S(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,n,i)),void 0!==i?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[i]=c:n._$Cl=c),void 0!==c&&(e=F(t,c._$AS(t,e.values),c,i)),e}class B{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:n},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(n,!0);I.currentNode=r;let o=I.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let e;2===c.type?e=new V(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new Y(o,this,t)),this.u.push(e),c=i[++a]}s!==(null==c?void 0:c.index)&&(o=I.nextNode(),s++)}return r}p(t){let e=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class V{constructor(t,e,n,i){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),S(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==H&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=L.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(n);else{const t=new B(r,this),e=t.v(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new L(t)),e}k(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new V(this.O(O()),this.O(O()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,n,i,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=F(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=F(this,i[n+s],e,s),a===H&&(a=this._$AH[s]),o||(o=!S(a)||a!==this._$AH[s]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=b?b.emptyScript:"";class K extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends W{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=F(this,t,e,0))&&void 0!==n?n:R)===H)return;const i=this._$AH,r=t===R&&i!==R||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==R&&(i===R||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const G=v.litHtmlPolyfillSupport;var Q,X;null==G||G(L,V),(null!==(m=v.litHtmlVersions)&&void 0!==m?m:v.litHtmlVersions=[]).push("2.5.0");class tt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new V(e.insertBefore(O(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;var nt,it,rt;function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2"),(rt=nt||(nt={})).language="language",rt.system="system",rt.comma_decimal="comma_decimal",rt.decimal_comma="decimal_comma",rt.space_comma="space_comma",rt.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(it||(it={}));var st=["closed","locked","off"],at=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,e,n,i){i=i||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,t.dispatchEvent(r),r});new Set(["call-service","divider","section","weblink","cast","select"]);var ct=function(t){at(window,"haptic",t)},lt="unavailable",ut="unknown",ht=[lt,ut],ft="last-changed",dt="last-updated",pt=["relative","total","date","time","datetime"],yt=["entity-id","last-changed","last-updated","last-triggered","position","tilt-position","brightness"],mt="language",vt=function(t){return t<10?"0".concat(t):t};function bt(t){return bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bt(t)}function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function gt(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==bt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==bt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===bt(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $t=function(t,e,n){var i=e?function(t){switch(t.number_format){case"comma_decimal":return["en-US","en"];case"decimal_comma":return["de","es","it"];case"space_comma":return["fr","sv","cs"];case"system":return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},"none"!==(null==e?void 0:e.number_format)&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(i,wt(t,n)).format(Number(t))}catch(e){return new Intl.NumberFormat(void 0,wt(t,n)).format(Number(t))}return"string"==typeof t?t:"".concat(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==n?void 0:n.maximumFractionDigits).toString()).concat("currency"===(null==n?void 0:n.style)?" ".concat(n.currency):"")},wt=function(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(n),!0).forEach((function(e){gt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({maximumFractionDigits:2},e);if("string"!=typeof t)return n;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=t.indexOf(".")>-1?t.split(".")[1].length:0;n.minimumFractionDigits=i,n.maximumFractionDigits=i}return n},At=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ot(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!((i=t[n])===(r=e[n])||At(i)&&At(r)))return!1;var i,r;return!0}function St(t,e){void 0===e&&(e=Ot);var n=null;function i(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;var o=t.apply(this,i);return n={lastResult:o,lastArgs:i,lastThis:this},o}return i.clear=function(){n=null},i}var Et=function(t,e){return jt(e).format(t)},jt=St((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})})),Pt=St((function(t){if(t.time_format===mt||"system"===t.time_format){var e=t.time_format===mt?t.language:void 0,n=(new Date).toLocaleString(e);return n.includes("AM")||n.includes("PM")}return"12"===t.time_format})),xt=function(t,e){return kt(e).format(t)},kt=St((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:Pt(t)?"numeric":"2-digit",minute:"2-digit",hour12:Pt(t)})})),Ct=function(t,e){return Nt(e).format(t)},Nt=St((function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:Pt(t)})}));function Tt(t){return Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(t)}var Dt=function(t){return"object"===Tt(t)&&!Array.isArray(t)&&!!t},Ut=function(t){return!t||ht.includes(t.state)},Ht=function(t,e){if(function(t,e){return e.hide_unavailable&&(Ut(t)||e.attribute&&void 0===t.attributes[e.attribute])}(t,e))return!0;if(void 0===e.hide_if)return!1;var n=e.attribute?t.attributes[e.attribute]:t.state,i=[];if(Dt(e.hide_if)){if(e.hide_if.below&&n<e.hide_if.below)return!0;if(e.hide_if.above&&n>e.hide_if.above)return!0;e.hide_if.value&&(i=i.concat(e.hide_if.value))}else i=i.concat(e.hide_if);return i.some((function(t){return"number"==typeof t?t===+n:t===n}))};function Rt(t){return Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rt(t)}function Mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function It(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Mt(Object(n),!0).forEach((function(e){zt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function zt(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==Rt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==Rt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Rt(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Lt,Ft,Bt,Vt,Wt,qt,Jt,Kt,Zt,Yt,Gt,Qt,Xt,te=function(t){if(Dt(t)&&!(t.entity||t.attribute||t.icon))throw new Error("Entity object requires at least one 'entity', 'attribute' or 'icon'.");if("string"==typeof t&&""===t)throw new Error("Entity ID string must not be blank.");if("string"!=typeof t&&!Dt(t))throw new Error("Entity config must be a valid entity ID string or entity object.")},ee=function(t,e){return!1===e.name?null:e.name||(e.entity?t.attributes.friendly_name||(n=t.entity_id).substr(n.indexOf(".")+1):null)||null;var n},ne=function(t){return Dt(null==t?void 0:t.styles)?Object.keys(t.styles).map((function(e){return"".concat(e,": ").concat(t.styles[e],";")})).join(""):""};function ie(t){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(t)}function re(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function oe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function se(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?oe(Object(n),!0).forEach((function(e){ae(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ae(t,e,n){return(e=ue(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function le(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ue(i.key),i)}}function ue(t){var e=function(t,e){if("object"!==ie(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==ie(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===ie(e)?e:String(e)}function he(t,e){return he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},he(t,e)}function fe(t,e){if(e&&("object"===ie(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function de(t){return de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},de(t)}console.info("%c MULTIPLE-ENTITY-ROW %c 4.4.2 ","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");var pe=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&he(t,e)}(c,t);var e,n,i,r,s,a=(r=c,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=de(r);if(s){var n=de(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return fe(this,t)});function c(){return ce(this,c),a.apply(this,arguments)}return e=c,n=[{key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Please define a main entity.");t.entities&&t.entities.forEach((function(t){return te(t)})),t.secondary_info&&te(t.secondary_info),this.entityIds=function(t){var e,n;return[t.entity,null===(e=t.secondary_info)||void 0===e?void 0:e.entity].concat(null===(n=t.entities)||void 0===n?void 0:n.map((function(t){return"string"==typeof t?t:t.entity}))).filter((function(t){return t}))}(t),this.onRowClick=this.clickHandler(t.entity,t.tap_action),this.config=se(se({},t),{},{name:!1===t.name?" ":t.name})}},{key:"shouldUpdate",value:function(t){return function(t,e){if(e.has("config"))return!0;var n=e.get("_hass");return!!n&&t.entityIds.some((function(e){return n.states[e]!==t._hass.states[e]}))}(this,t)}},{key:"hass",set:function(t){var e,n,i,r=this;this._hass=t,t&&this.config&&(this.stateObj=t.states[this.config.entity],Dt(this.config.secondary_info)&&(this.info=null!==(i=t.states[this.config.secondary_info.entity])&&void 0!==i?i:this.stateObj),this.entities=null!==(e=null===(n=this.config.entities)||void 0===n?void 0:n.map((function(e){var n="string"==typeof e?{entity:e}:e;return se(se({},n),{},{stateObj:n.entity?t.states[n.entity]:r.stateObj})})))&&void 0!==e?e:[])}},{key:"render",value:function(){var t=this;return this._hass&&this.config?this.stateObj?U(Bt||(Bt=re(['<hui-generic-entity-row\n            .hass="','"\n            .config="','"\n            .secondaryText="','"\n            .catchInteraction=','\n        >\n            <div class="','">\n                ',"","\n            </div>\n        </hui-generic-entity-row>"])),this._hass,this.config,this.renderSecondaryInfo(),!1,this.config.column?"entities-column":"entities-row",this.entities.map((function(e){return t.renderEntity(e.stateObj,e)})),this.renderMainEntity()):this.renderWarning():U(Ft||(Ft=re([""])))}},{key:"renderSecondaryInfo",value:function(){if(!this.config.secondary_info||"string"==typeof(t=this.config.secondary_info)&&yt.includes(t)||Ht(this.info,this.config.secondary_info))return null;var t;if("string"==typeof this.config.secondary_info)return U(Vt||(Vt=re(["",""])),this.config.secondary_info);var e=ee(this.info,this.config.secondary_info);return U(Wt||(Wt=re([""," ",""])),e,this.renderValue(this.info,this.config.secondary_info))}},{key:"renderMainEntity",value:function(){return!1===this.config.show_state?null:U(qt||(qt=re(['<div class="state entity" style="','" @click="','">\n            ',"\n            <div>","</div>\n        </div>"])),ne(this.config),this.onRowClick,this.config.state_header&&U(Jt||(Jt=re(["<span>","</span>"])),this.config.state_header),this.renderValue(this.stateObj,this.config))}},{key:"renderEntity",value:function(t,e){if(!t||Ht(t,e))return null;var n=this.clickHandler(t.entity_id,e.tap_action);return U(Kt||(Kt=re(['<div class="entity" style="','" @click="','">\n            <span>',"</span>\n            <div>","</div>\n        </div>"])),ne(e),n,ee(t,e),e.icon?this.renderIcon(t,e):this.renderValue(t,e))}},{key:"renderValue",value:function(t,e){if(!0===e.toggle)return U(Zt||(Zt=re(['<ha-entity-toggle .stateObj="','" .hass="','"></ha-entity-toggle>'])),t,this._hass);var n;if(e.attribute&&[ft,dt].includes(e.attribute))return U(Yt||(Yt=re(["<ha-relative-time\n                .hass=","\n                .datetime=","\n                capitalize\n            ></ha-relative-time>"])),this._hass,t[null===(n=e.attribute)||void 0===n?void 0:n.replace("-","_")]);if(e.format&&pt.includes(e.format)){var i=e.attribute?t.attributes[e.attribute]:t.state,r=new Date(i);return r instanceof Date&&!isNaN(r.getTime())?U(Gt||(Gt=re(["<hui-timestamp-display\n                .hass=","\n                .ts=","\n                .format=","\n                capitalize\n            ></hui-timestamp-display>"])),this._hass,r,e.format):i}return function(t,e,n){if(Ut(e))return t.localize("state.default.".concat(e.state));var i=n.attribute?e.attributes[n.attribute]:e.state,r=!1===n.unit?void 0:void 0!==n.attribute?n.unit:n.unit||e.attributes.unit_of_measurement;if(n.format){if(isNaN(parseFloat(i))||!isFinite(i));else if("brightness"===n.format)i=Math.round(i/255*100),r="%";else if(n.format.startsWith("duration"))i=function(t){var e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=Math.floor(t%3600%60);return e>0?"".concat(e,":").concat(vt(n),":").concat(vt(i)):n>0?"".concat(n,":").concat(vt(i)):i>0?""+i:null}("duration-m"===n.format?i/1e3:i),r=void 0;else if(n.format.startsWith("precision")){var o=parseInt(n.format.slice(-1),10);i=$t(parseFloat(i),t.locale,{minimumFractionDigits:o,maximumFractionDigits:o})}else"kilo"===n.format?i=$t(i/1e3,t.locale,{maximumFractionDigits:2}):"invert"===n.format?i=$t(i-2*i,t.locale):"position"===n.format&&(i=$t(100-i,t.locale));return"".concat(i).concat(r?" ".concat(r):"")}if(n.attribute)return"".concat(isNaN(i)?i:$t(i,t.locale)).concat(r?" ".concat(r):"");var s=It(It({},e),{},{attributes:It(It({},e.attributes),{},{unit_of_measurement:r})});return function(t,e,n,i){var r=e.state;if(r===ut||r===lt)return t("state.default.".concat(r));if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return $t(r,n,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return"".concat($t(r,n)).concat(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o,s=function(t){return t.entity_id.substr(0,t.entity_id.indexOf("."))}(e);return"input_datetime"===s?e.attributes.has_date&&e.attributes.has_time?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),xt(o,n)):e.attributes.has_date?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),Et(o,n)):e.attributes.has_time?((o=new Date).setHours(e.attributes.hour,e.attributes.minute),Ct(o,n)):e.state:"humidifier"===s&&"on"===r&&e.attributes.humidity?"".concat(e.attributes.humidity," %"):"counter"===s||"number"===s||"input_number"===s?$t(r,n):"button"===s||"sensor"===s&&"timestamp"===e.attributes.device_class?xt(new Date(r),n):e.attributes.device_class&&t("component.".concat(s,".state.").concat(e.attributes.device_class,".").concat(r))||t("component.".concat(s,".state._.").concat(r))||r}(t.localize,s,t.locale)}(this._hass,t,e)}},{key:"renderIcon",value:function(t,e){return U(Qt||(Qt=re(['<state-badge\n            class="icon-small"\n            .stateObj="','"\n            .overrideIcon="','"\n            .stateColor="','"\n        ></state-badge>'])),t,!0===e.icon?t.attributes.icon||null:e.icon,e.state_color)}},{key:"renderWarning",value:function(){return U(Xt||(Xt=re(["<hui-warning>\n            ","\n        </hui-warning>"])),this._hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this.config.entity))}},{key:"clickHandler",value:function(t,e){var n=this;return function(){return function(t,e,n,i,r){var o;if(n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||n.entity||n.camera_image)&&(at(t,"hass-more-info",{entityId:o.entity?o.entity:n.entity?n.entity:n.camera_image}),o.haptic&&ct(o.haptic));break;case"navigate":o.navigation_path&&(function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),at(window,"location-changed",{replace:n})}(0,o.navigation_path),o.haptic&&ct(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&ct(o.haptic);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,r=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(o,i,{entity_id:e})})(t,e,st.includes(t.states[e].state))}(e,n.entity),o.haptic&&ct(o.haptic));break;case"call-service":if(!o.service)return;var s=o.service.split(".",2),a=s[0],c=s[1],l=ot({},o.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),e.callService(a,c,l,o.target),o.haptic&&ct(o.haptic);break;case"fire-dom-event":at(t,"ll-custom",o),o.haptic&&ct(o.haptic)}}(n,n._hass,{entity:t,tap_action:e})}}}],i=[{key:"properties",get:function(){return{_hass:Object,config:Object,stateObj:Object}}},{key:"styles",get:function(){return o(Lt||(t=["\n    .icon-small {\n        width: auto;\n    }\n    .entity {\n        text-align: center;\n        cursor: pointer;\n    }\n    .entity span {\n        font-size: 10px;\n        color: var(--secondary-text-color);\n    }\n    .entities-row {\n        flex-direction: row;\n        display: inline-flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    .entities-row .entity {\n        margin-right: 16px;\n    }\n    .entities-row .entity:last-of-type {\n        margin-right: 0;\n    }\n    .entities-column {\n        flex-direction: column;\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-evenly;\n    }\n    .entities-column .entity div {\n        display: inline-block;\n        vertical-align: middle;\n    }\n"],e||(e=t.slice(0)),Lt=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))));var t,e}}],n&&le(e.prototype,n),i&&le(e,i),Object.defineProperty(e,"prototype",{writable:!1}),c}(tt);customElements.define("multiple-entity-row",pe)})();