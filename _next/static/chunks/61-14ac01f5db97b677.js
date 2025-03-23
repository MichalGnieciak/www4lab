"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{2432:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(9946).A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]])},3651:(e,t,n)=>{n.d(t,{bm:()=>e6,UC:()=>e5,VY:()=>e8,hJ:()=>e1,ZL:()=>e0,bL:()=>e$,hE:()=>e2});var r,o=n(2115),a=n(5185),i=n(6101),l=n(6081),c=n(1285),u=n(5845),s=n(9178),d=n(3655),f=n(9033),p=n(5155),v="focusScope.autoFocusOnMount",h="focusScope.autoFocusOnUnmount",m={bubbles:!1,cancelable:!0},g=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:l,...c}=e,[u,s]=o.useState(null),g=(0,f.c)(a),x=(0,f.c)(l),C=o.useRef(null),R=(0,i.s)(t,e=>s(e)),T=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(T.paused||!u)return;let t=e.target;u.contains(t)?C.current=t:w(C.current,{select:!0})},t=function(e){if(T.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||w(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&w(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,T.paused]),o.useEffect(()=>{if(u){E.add(T);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(v,m);u.addEventListener(v,g),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(w(r,{select:t}),document.activeElement!==n)return}(y(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&w(u))}return()=>{u.removeEventListener(v,g),setTimeout(()=>{let t=new CustomEvent(h,m);u.addEventListener(h,x),u.dispatchEvent(t),t.defaultPrevented||w(null!=e?e:document.body,{select:!0}),u.removeEventListener(h,x),E.remove(T)},0)}}},[u,g,x,T]);let k=o.useCallback(e=>{if(!n&&!r||T.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=y(e);return[b(t,e),b(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&w(a,{select:!0})):(e.preventDefault(),n&&w(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,T.paused]);return(0,p.jsx)(d.sG.div,{tabIndex:-1,...c,ref:R,onKeyDown:k})});function y(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function b(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function w(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}g.displayName="FocusScope";var E=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=x(e,t)).unshift(t)},remove(t){var n;null===(n=(e=x(e,t))[0])||void 0===n||n.resume()}}}();function x(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var C=n(4378),R=n(8905),T=0;function k(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var j=function(){return(j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function S(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var L=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),N="width-before-scroll-bar";function A(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var M="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,D=new WeakMap;function I(e){return e}var P=function(e){void 0===e&&(e={});var t,n,r,o,a=(t=null,void 0===n&&(n=I),r=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,o);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){o=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}});return a.options=j({async:!0,ssr:!1},e),a}(),O=function(){},F=o.forwardRef(function(e,t){var n,r,a,i,l=o.useRef(null),c=o.useState({onScrollCapture:O,onWheelCapture:O,onTouchMoveCapture:O}),u=c[0],s=c[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,h=e.enabled,m=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,E=e.as,x=e.gapMode,C=S(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[l,t],r=function(e){return n.forEach(function(t){return A(t,e)})},(a=(0,o.useState)(function(){return{value:null,callback:r,facade:{get current(){return a.value},set current(value){var e=a.value;e!==value&&(a.value=value,a.callback(value,e))}}}})[0]).callback=r,i=a.facade,M(function(){var e=D.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||A(e,null)}),r.forEach(function(e){t.has(e)||A(e,o)})}D.set(i,n)},[n]),i),T=j(j({},C),u);return o.createElement(o.Fragment,null,h&&o.createElement(g,{sideCar:P,removeScrollBar:v,shards:m,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!w,lockRef:l,gapMode:x}),d?o.cloneElement(o.Children.only(f),j(j({},T),{ref:R})):o.createElement(void 0===E?"div":E,j({},T,{className:p,ref:R}),f))});F.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},F.classNames={fullWidth:N,zeroRight:L};var _=function(e){var t=e.sideCar,n=S(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return o.createElement(r,j({},n))};_.isSideCarExport=!0;var B=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},W=function(){var e=B();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},K=function(){var e=W();return function(t){return e(t.styles,t.dynamic),null}},X={left:0,top:0,right:0,gap:0},Y=function(e){return parseInt(e||"",10)||0},q=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[Y(n),Y(r),Y(o)]},Z=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return X;var t=q(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},G=K(),H="data-scroll-locked",U=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(H,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(L," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(N," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(L," .").concat(L," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(N," .").concat(N," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(H,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},z=function(){var e=parseInt(document.body.getAttribute(H)||"0",10);return isFinite(e)?e:0},V=function(){o.useEffect(function(){return document.body.setAttribute(H,(z()+1).toString()),function(){var e=z()-1;e<=0?document.body.removeAttribute(H):document.body.setAttribute(H,e.toString())}},[])},J=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r;V();var i=o.useMemo(function(){return Z(a)},[a]);return o.createElement(G,{styles:U(i,!t,a,n?"":"!important")})},Q=!1;if("undefined"!=typeof window)try{var $=Object.defineProperty({},"passive",{get:function(){return Q=!0,!0}});window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch(e){Q=!1}var ee=!!Q&&{passive:!1},et=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},en=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),er(e,r)){var o=eo(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},er=function(e,t){return"v"===e?et(t,"overflowY"):et(t,"overflowX")},eo=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ea=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),l=i*r,c=n.target,u=t.contains(c),s=!1,d=l>0,f=0,p=0;do{var v=eo(e,c),h=v[0],m=v[1]-v[2]-i*h;(h||m)&&er(e,c)&&(f+=m,p+=h),c=c instanceof ShadowRoot?c.host:c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&l>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-l>p)&&(s=!0),s},ei=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},el=function(e){return[e.deltaX,e.deltaY]},ec=function(e){return e&&"current"in e?e.current:e},eu=0,es=[];let ed=(P.useMedium(function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(eu++)[0],i=o.useState(K)[0],l=o.useRef(e);o.useEffect(function(){l.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ec),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!l.current.allowPinchZoom;var o,a=ei(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],u="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=en(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=en(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||u)&&(r.current=o),!o)return!0;var p=r.current||o;return ea(p,t,e,"h"===p?c:u,!0)},[]),u=o.useCallback(function(e){if(es.length&&es[es.length-1]===i){var n="deltaY"in e?el(e):ei(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(ec).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=o.useCallback(function(e){n.current=ei(e),r.current=void 0},[]),f=o.useCallback(function(t){s(t.type,el(t),t.target,c(t,e.lockRef.current))},[]),p=o.useCallback(function(t){s(t.type,ei(t),t.target,c(t,e.lockRef.current))},[]);o.useEffect(function(){return es.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",u,ee),document.addEventListener("touchmove",u,ee),document.addEventListener("touchstart",d,ee),function(){es=es.filter(function(e){return e!==i}),document.removeEventListener("wheel",u,ee),document.removeEventListener("touchmove",u,ee),document.removeEventListener("touchstart",d,ee)}},[]);var v=e.removeScrollBar,h=e.inert;return o.createElement(o.Fragment,null,h?o.createElement(i,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,v?o.createElement(J,{gapMode:e.gapMode}):null)}),_);var ef=o.forwardRef(function(e,t){return o.createElement(F,j({},e,{ref:t,sideCar:ed}))});ef.classNames=F.classNames;var ep=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},ev=new WeakMap,eh=new WeakMap,em={},eg=0,ey=function(e){return e&&(e.host||ey(e.parentNode))},eb=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ey(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});em[n]||(em[n]=new WeakMap);var a=em[n],i=[],l=new Set,c=new Set(o),u=function(e){!(!e||l.has(e))&&(l.add(e),u(e.parentNode))};o.forEach(u);var s=function(e){!(!e||c.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(l.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(ev.get(e)||0)+1,u=(a.get(e)||0)+1;ev.set(e,c),a.set(e,u),i.push(e),1===c&&o&&eh.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),l.clear(),eg++,function(){i.forEach(function(e){var t=ev.get(e)-1,o=a.get(e)-1;ev.set(e,t),a.set(e,o),t||(eh.has(e)||e.removeAttribute(r),eh.delete(e)),o||e.removeAttribute(n)}),--eg||(ev=new WeakMap,ev=new WeakMap,eh=new WeakMap,em={})}},ew=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||ep(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eb(r,o,n,"aria-hidden")):function(){return null}},eE=n(9708),ex="Dialog",[eC,eR]=(0,l.A)(ex),[eT,ek]=eC(ex),ej=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,s=o.useRef(null),d=o.useRef(null),[f=!1,v]=(0,u.i)({prop:r,defaultProp:a,onChange:i});return(0,p.jsx)(eT,{scope:t,triggerRef:s,contentRef:d,contentId:(0,c.B)(),titleId:(0,c.B)(),descriptionId:(0,c.B)(),open:f,onOpenChange:v,onOpenToggle:o.useCallback(()=>v(e=>!e),[v]),modal:l,children:n})};ej.displayName=ex;var eS="DialogTrigger";o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eS,n),l=(0,i.s)(t,o.triggerRef);return(0,p.jsx)(d.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eH(o.open),...r,ref:l,onClick:(0,a.m)(e.onClick,o.onOpenToggle)})}).displayName=eS;var eL="DialogPortal",[eN,eA]=eC(eL,{forceMount:void 0}),eM=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,i=ek(eL,t);return(0,p.jsx)(eN,{scope:t,forceMount:n,children:o.Children.map(r,e=>(0,p.jsx)(R.C,{present:n||i.open,children:(0,p.jsx)(C.Z,{asChild:!0,container:a,children:e})}))})};eM.displayName=eL;var eD="DialogOverlay",eI=o.forwardRef((e,t)=>{let n=eA(eD,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ek(eD,e.__scopeDialog);return a.modal?(0,p.jsx)(R.C,{present:r||a.open,children:(0,p.jsx)(eP,{...o,ref:t})}):null});eI.displayName=eD;var eP=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eD,n);return(0,p.jsx)(ef,{as:eE.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,p.jsx)(d.sG.div,{"data-state":eH(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eO="DialogContent",eF=o.forwardRef((e,t)=>{let n=eA(eO,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ek(eO,e.__scopeDialog);return(0,p.jsx)(R.C,{present:r||a.open,children:a.modal?(0,p.jsx)(e_,{...o,ref:t}):(0,p.jsx)(eB,{...o,ref:t})})});eF.displayName=eO;var e_=o.forwardRef((e,t)=>{let n=ek(eO,e.__scopeDialog),r=o.useRef(null),l=(0,i.s)(t,n.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return ew(e)},[]),(0,p.jsx)(eW,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,a.m)(e.onFocusOutside,e=>e.preventDefault())})}),eB=o.forwardRef((e,t)=>{let n=ek(eO,e.__scopeDialog),r=o.useRef(!1),a=o.useRef(!1);return(0,p.jsx)(eW,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,i;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,i;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),eW=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:l,...c}=e,u=ek(eO,n),d=o.useRef(null),f=(0,i.s)(t,d);return o.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:k()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:k()),T++,()=>{1===T&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),T--}},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:l,children:(0,p.jsx)(s.qW,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":eH(u.open),...c,ref:f,onDismiss:()=>u.onOpenChange(!1)})}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(eJ,{titleId:u.titleId}),(0,p.jsx)(eQ,{contentRef:d,descriptionId:u.descriptionId})]})]})}),eK="DialogTitle",eX=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eK,n);return(0,p.jsx)(d.sG.h2,{id:o.titleId,...r,ref:t})});eX.displayName=eK;var eY="DialogDescription",eq=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eY,n);return(0,p.jsx)(d.sG.p,{id:o.descriptionId,...r,ref:t})});eq.displayName=eY;var eZ="DialogClose",eG=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eZ,n);return(0,p.jsx)(d.sG.button,{type:"button",...r,ref:t,onClick:(0,a.m)(e.onClick,()=>o.onOpenChange(!1))})});function eH(e){return e?"open":"closed"}eG.displayName=eZ;var eU="DialogTitleWarning",[ez,eV]=(0,l.q)(eU,{contentName:eO,titleName:eK,docsSlug:"dialog"}),eJ=e=>{let{titleId:t}=e,n=eV(eU),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},eQ=e=>{let{contentRef:t,descriptionId:n}=e,r=eV("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},e$=ej,e0=eM,e1=eI,e5=eF,e2=eX,e8=eq,e6=eG},4416:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(9946).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},7489:(e,t,n)=>{n.d(t,{b:()=>u});var r=n(2115),o=n(3655),a=n(5155),i="horizontal",l=["horizontal","vertical"],c=r.forwardRef((e,t)=>{var n;let{decorative:r,orientation:c=i,...u}=e,s=(n=c,l.includes(n))?c:i;return(0,a.jsx)(o.sG.div,{"data-orientation":s,...r?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},...u,ref:t})});c.displayName="Separator";var u=c},9613:(e,t,n)=>{n.d(t,{Kq:()=>Y,UC:()=>H,ZL:()=>G,bL:()=>q,i3:()=>U,l9:()=>Z});var r=n(2115),o=n(5185),a=n(6101),i=n(6081),l=n(9178),c=n(1285),u=n(8795),s=n(4378),d=n(8905),f=n(3655),p=n(9708),v=n(5845),h=n(2564),m=n(5155),[g,y]=(0,i.A)("Tooltip",[u.Bk]),b=(0,u.Bk)(),w="TooltipProvider",E="tooltip.open",[x,C]=g(w),R=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:a=!1,children:i}=e,[l,c]=r.useState(!0),u=r.useRef(!1),s=r.useRef(0);return r.useEffect(()=>{let e=s.current;return()=>window.clearTimeout(e)},[]),(0,m.jsx)(x,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(s.current),c(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(()=>c(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:r.useCallback(e=>{u.current=e},[]),disableHoverableContent:a,children:i})};R.displayName=w;var T="Tooltip",[k,j]=g(T),S=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:l,delayDuration:s}=e,d=C(T,e.__scopeTooltip),f=b(t),[p,h]=r.useState(null),g=(0,c.B)(),y=r.useRef(0),w=null!=l?l:d.disableHoverableContent,x=null!=s?s:d.delayDuration,R=r.useRef(!1),[j=!1,S]=(0,v.i)({prop:o,defaultProp:a,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(E))):d.onClose(),null==i||i(e)}}),L=r.useMemo(()=>j?R.current?"delayed-open":"instant-open":"closed",[j]),N=r.useCallback(()=>{window.clearTimeout(y.current),y.current=0,R.current=!1,S(!0)},[S]),A=r.useCallback(()=>{window.clearTimeout(y.current),y.current=0,S(!1)},[S]),M=r.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{R.current=!0,S(!0),y.current=0},x)},[x,S]);return r.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),(0,m.jsx)(u.bL,{...f,children:(0,m.jsx)(k,{scope:t,contentId:g,open:j,stateAttribute:L,trigger:p,onTriggerChange:h,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?M():N()},[d.isOpenDelayed,M,N]),onTriggerLeave:r.useCallback(()=>{w?A():(window.clearTimeout(y.current),y.current=0)},[A,w]),onOpen:N,onClose:A,disableHoverableContent:w,children:n})})};S.displayName=T;var L="TooltipTrigger",N=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...i}=e,l=j(L,n),c=C(L,n),s=b(n),d=r.useRef(null),p=(0,a.s)(t,d,l.onTriggerChange),v=r.useRef(!1),h=r.useRef(!1),g=r.useCallback(()=>v.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),(0,m.jsx)(u.Mz,{asChild:!0,...s,children:(0,m.jsx)(f.sG.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...i,ref:p,onPointerMove:(0,o.m)(e.onPointerMove,e=>{"touch"===e.pointerType||h.current||c.isPointerInTransitRef.current||(l.onTriggerEnter(),h.current=!0)}),onPointerLeave:(0,o.m)(e.onPointerLeave,()=>{l.onTriggerLeave(),h.current=!1}),onPointerDown:(0,o.m)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:(0,o.m)(e.onFocus,()=>{v.current||l.onOpen()}),onBlur:(0,o.m)(e.onBlur,l.onClose),onClick:(0,o.m)(e.onClick,l.onClose)})})});N.displayName=L;var A="TooltipPortal",[M,D]=g(A,{forceMount:void 0}),I=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:o}=e,a=j(A,t);return(0,m.jsx)(M,{scope:t,forceMount:n,children:(0,m.jsx)(d.C,{present:n||a.open,children:(0,m.jsx)(s.Z,{asChild:!0,container:o,children:r})})})};I.displayName=A;var P="TooltipContent",O=r.forwardRef((e,t)=>{let n=D(P,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...a}=e,i=j(P,e.__scopeTooltip);return(0,m.jsx)(d.C,{present:r||i.open,children:i.disableHoverableContent?(0,m.jsx)(W,{side:o,...a,ref:t}):(0,m.jsx)(F,{side:o,...a,ref:t})})}),F=r.forwardRef((e,t)=>{let n=j(P,e.__scopeTooltip),o=C(P,e.__scopeTooltip),i=r.useRef(null),l=(0,a.s)(t,i),[c,u]=r.useState(null),{trigger:s,onClose:d}=n,f=i.current,{onPointerInTransitChange:p}=o,v=r.useCallback(()=>{u(null),p(!1)},[p]),h=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,o,a)){case a:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+!!(e.y>t.y)),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),p(!0)},[p]);return r.useEffect(()=>()=>v(),[v]),r.useEffect(()=>{if(s&&f){let e=e=>h(e,f),t=e=>h(e,s);return s.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{s.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[s,f,h,v]),r.useEffect(()=>{if(c){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==s?void 0:s.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let i=t[e].x,l=t[e].y,c=t[a].x,u=t[a].y;l>r!=u>r&&n<(c-i)*(r-l)/(u-l)+i&&(o=!o)}return o}(n,c);r?v():o&&(v(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[s,f,c,d,v]),(0,m.jsx)(W,{...e,ref:l})}),[_,B]=g(T,{isInside:!1}),W=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:c,...s}=e,d=j(P,n),f=b(n),{onClose:v}=d;return r.useEffect(()=>(document.addEventListener(E,v),()=>document.removeEventListener(E,v)),[v]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&v()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,v]),(0,m.jsx)(l.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:v,children:(0,m.jsxs)(u.UC,{"data-state":d.stateAttribute,...f,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,m.jsx)(p.xV,{children:o}),(0,m.jsx)(_,{scope:n,isInside:!0,children:(0,m.jsx)(h.b,{id:d.contentId,role:"tooltip",children:a||o})})]})})});O.displayName=P;var K="TooltipArrow",X=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=b(n);return B(K,n).isInside?null:(0,m.jsx)(u.i3,{...o,...r,ref:t})});X.displayName=K;var Y=R,q=S,Z=N,G=I,H=O,U=X}}]);