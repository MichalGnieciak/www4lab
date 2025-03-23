"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{2335:(e,t,r)=>{r.d(t,{UC:()=>A,ZL:()=>L,bL:()=>k,l9:()=>O});var n,o=r(2115),a=r(5185),i=r(6081),u=r(5845),l=r(6101),s=r(8795),c=r(4378),d=r(8905),f=r(3655),p=r(9178),v=r(5155),m="HoverCard",[h,g]=(0,i.A)(m,[s.Bk]),w=(0,s.Bk)(),[y,x]=h(m),C=e=>{let{__scopeHoverCard:t,children:r,open:n,defaultOpen:a,onOpenChange:i,openDelay:l=700,closeDelay:c=300}=e,d=w(t),f=o.useRef(0),p=o.useRef(0),m=o.useRef(!1),h=o.useRef(!1),[g=!1,x]=(0,u.i)({prop:n,defaultProp:a,onChange:i}),C=o.useCallback(()=>{clearTimeout(p.current),f.current=window.setTimeout(()=>x(!0),l)},[l,x]),b=o.useCallback(()=>{clearTimeout(f.current),m.current||h.current||(p.current=window.setTimeout(()=>x(!1),c))},[c,x]),R=o.useCallback(()=>x(!1),[x]);return o.useEffect(()=>()=>{clearTimeout(f.current),clearTimeout(p.current)},[]),(0,v.jsx)(y,{scope:t,open:g,onOpenChange:x,onOpen:C,onClose:b,onDismiss:R,hasSelectionRef:m,isPointerDownOnContentRef:h,children:(0,v.jsx)(s.bL,{...d,children:r})})};C.displayName=m;var b="HoverCardTrigger",R=o.forwardRef((e,t)=>{let{__scopeHoverCard:r,...n}=e,o=x(b,r),i=w(r);return(0,v.jsx)(s.Mz,{asChild:!0,...i,children:(0,v.jsx)(f.sG.a,{"data-state":o.open?"open":"closed",...n,ref:t,onPointerEnter:(0,a.m)(e.onPointerEnter,_(o.onOpen)),onPointerLeave:(0,a.m)(e.onPointerLeave,_(o.onClose)),onFocus:(0,a.m)(e.onFocus,o.onOpen),onBlur:(0,a.m)(e.onBlur,o.onClose),onTouchStart:(0,a.m)(e.onTouchStart,e=>e.preventDefault())})})});R.displayName=b;var E="HoverCardPortal",[P,j]=h(E,{forceMount:void 0}),N=e=>{let{__scopeHoverCard:t,forceMount:r,children:n,container:o}=e,a=x(E,t);return(0,v.jsx)(P,{scope:t,forceMount:r,children:(0,v.jsx)(d.C,{present:r||a.open,children:(0,v.jsx)(c.Z,{asChild:!0,container:o,children:n})})})};N.displayName=E;var T="HoverCardContent",M=o.forwardRef((e,t)=>{let r=j(T,e.__scopeHoverCard),{forceMount:n=r.forceMount,...o}=e,i=x(T,e.__scopeHoverCard);return(0,v.jsx)(d.C,{present:n||i.open,children:(0,v.jsx)(S,{"data-state":i.open?"open":"closed",...o,onPointerEnter:(0,a.m)(e.onPointerEnter,_(i.onOpen)),onPointerLeave:(0,a.m)(e.onPointerLeave,_(i.onClose)),ref:t})})});M.displayName=T;var S=o.forwardRef((e,t)=>{let{__scopeHoverCard:r,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:c,onInteractOutside:d,...f}=e,m=x(T,r),h=w(r),g=o.useRef(null),y=(0,l.s)(t,g),[C,b]=o.useState(!1);return o.useEffect(()=>{if(C){let e=document.body;return n=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=n,e.style.webkitUserSelect=n}}},[C]),o.useEffect(()=>{if(g.current){let e=()=>{b(!1),m.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var e;(null===(e=document.getSelection())||void 0===e?void 0:e.toString())!==""&&(m.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),m.hasSelectionRef.current=!1,m.isPointerDownOnContentRef.current=!1}}},[m.isPointerDownOnContentRef,m.hasSelectionRef]),o.useEffect(()=>{g.current&&(function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)t.push(r.currentNode);return t})(g.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,v.jsx)(p.qW,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:d,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:(0,a.m)(c,e=>{e.preventDefault()}),onDismiss:m.onDismiss,children:(0,v.jsx)(s.UC,{...h,...f,onPointerDown:(0,a.m)(f.onPointerDown,e=>{e.currentTarget.contains(e.target)&&b(!0),m.hasSelectionRef.current=!1,m.isPointerDownOnContentRef.current=!0}),ref:y,style:{...f.style,userSelect:C?"text":void 0,WebkitUserSelect:C?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})});function _(e){return t=>"touch"===t.pointerType?void 0:e()}o.forwardRef((e,t)=>{let{__scopeHoverCard:r,...n}=e,o=w(r);return(0,v.jsx)(s.i3,{...o,...n,ref:t})}).displayName="HoverCardArrow";var k=C,O=R,L=N,A=M},2757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return i}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},2898:(e,t,r)=>{r.d(t,{UC:()=>eg,q7:()=>ev,N_:()=>eh,B8:()=>ep,bL:()=>ef,l9:()=>em,LM:()=>ew});var n=r(2115),o=r(7650),a=r(6081),i=r(5185),u=r(3655),l=r(5845),s=r(6101),c=r(5155),d=n.createContext(void 0),f=r(8905),p=r(1285),v=r(9708);function m(e){let t=e+"CollectionProvider",[r,o]=(0,a.A)(t),[i,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),l=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,c.jsx)(i,{scope:t,itemMap:a,collectionRef:o,children:r})};l.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=u(d,r),a=(0,s.s)(t,o.collectionRef);return(0,c.jsx)(v.DX,{ref:a,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",m="data-radix-collection-item",h=n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,i=n.useRef(null),l=(0,s.s)(t,i),d=u(p,r);return n.useEffect(()=>(d.itemMap.set(i,{ref:i,...a}),()=>void d.itemMap.delete(i))),(0,c.jsx)(v.DX,{[m]:"",ref:l,children:o})});return h.displayName=p,[{Provider:l,Slot:f,ItemSlot:h},function(t){let r=u(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},o]}var h=r(9178),g=r(2712),w=r(9033),y=r(2564),x="NavigationMenu",[C,b,R]=m(x),[E,P,j]=m(x),[N,T]=(0,a.A)(x,[R,j]),[M,S]=N(x),[_,k]=N(x),O=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,onValueChange:a,defaultValue:i,delayDuration:f=200,skipDelayDuration:p=300,orientation:v="horizontal",dir:m,...h}=e,[g,w]=n.useState(null),y=(0,s.s)(t,e=>w(e)),x=function(e){let t=n.useContext(d);return e||t||"ltr"}(m),C=n.useRef(0),b=n.useRef(0),R=n.useRef(0),[E,P]=n.useState(!0),[j="",N]=(0,l.i)({prop:o,onChange:e=>{let t=p>0;""!==e?(window.clearTimeout(R.current),t&&P(!1)):(window.clearTimeout(R.current),R.current=window.setTimeout(()=>P(!0),p)),null==a||a(e)},defaultProp:i}),T=n.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>N(""),150)},[N]),M=n.useCallback(e=>{window.clearTimeout(b.current),N(e)},[N]),S=n.useCallback(e=>{j===e?window.clearTimeout(b.current):C.current=window.setTimeout(()=>{window.clearTimeout(b.current),N(e)},f)},[j,N,f]);return n.useEffect(()=>()=>{window.clearTimeout(C.current),window.clearTimeout(b.current),window.clearTimeout(R.current)},[]),(0,c.jsx)(A,{scope:r,isRootMenu:!0,value:j,dir:x,orientation:v,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(C.current),E?S(e):M(e)},onTriggerLeave:()=>{window.clearTimeout(C.current),T()},onContentEnter:()=>window.clearTimeout(b.current),onContentLeave:T,onItemSelect:e=>{N(t=>t===e?"":e)},onItemDismiss:()=>N(""),children:(0,c.jsx)(u.sG.nav,{"aria-label":"Main","data-orientation":v,dir:x,...h,ref:y})})});O.displayName=x;var L="NavigationMenuSub";n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:n,onValueChange:o,defaultValue:a,orientation:i="horizontal",...s}=e,d=S(L,r),[f="",p]=(0,l.i)({prop:n,onChange:o,defaultProp:a});return(0,c.jsx)(A,{scope:r,isRootMenu:!1,value:f,dir:d.dir,orientation:i,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:e=>p(e),onItemSelect:e=>p(e),onItemDismiss:()=>p(""),children:(0,c.jsx)(u.sG.div,{"data-orientation":i,...s,ref:t})})}).displayName=L;var A=e=>{let{scope:t,isRootMenu:r,rootNavigationMenu:o,dir:a,orientation:i,children:u,value:l,onItemSelect:s,onItemDismiss:d,onTriggerEnter:f,onTriggerLeave:v,onContentEnter:m,onContentLeave:h}=e,[g,y]=n.useState(null),[x,b]=n.useState(new Map),[R,E]=n.useState(null);return(0,c.jsx)(M,{scope:t,isRootMenu:r,rootNavigationMenu:o,value:l,previousValue:function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(l),baseId:(0,p.B)(),dir:a,orientation:i,viewport:g,onViewportChange:y,indicatorTrack:R,onIndicatorTrackChange:E,onTriggerEnter:(0,w.c)(f),onTriggerLeave:(0,w.c)(v),onContentEnter:(0,w.c)(m),onContentLeave:(0,w.c)(h),onItemSelect:(0,w.c)(s),onItemDismiss:(0,w.c)(d),onViewportContentChange:n.useCallback((e,t)=>{b(r=>(r.set(e,t),new Map(r)))},[]),onViewportContentRemove:n.useCallback(e=>{b(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,c.jsx)(C.Provider,{scope:t,children:(0,c.jsx)(_,{scope:t,items:x,children:u})})})},I="NavigationMenuList",D=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=S(I,r),a=(0,c.jsx)(u.sG.ul,{"data-orientation":o.orientation,...n,ref:t});return(0,c.jsx)(u.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,c.jsx)(C.Slot,{scope:r,children:o.isRootMenu?(0,c.jsx)(er,{asChild:!0,children:a}):a})})});D.displayName=I;var F="NavigationMenuItem",[K,U]=N(F),G=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,...a}=e,i=(0,p.B)(),l=n.useRef(null),s=n.useRef(null),d=n.useRef(null),f=n.useRef(()=>{}),v=n.useRef(!1),m=n.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(l.current){f.current();let t=ea(l.current);t.length&&ei("start"===e?t:t.reverse())}},[]),h=n.useCallback(()=>{if(l.current){let e=ea(l.current);e.length&&(f.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,c.jsx)(K,{scope:r,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:l,focusProxyRef:d,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:h,onContentFocusOutside:h,children:(0,c.jsx)(u.sG.li,{...a,ref:t})})});G.displayName=F;var z="NavigationMenuTrigger",H=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,disabled:o,...a}=e,l=S(z,e.__scopeNavigationMenu),d=U(z,e.__scopeNavigationMenu),f=n.useRef(null),p=(0,s.s)(f,d.triggerRef,t),v=es(l.baseId,d.value),m=ec(l.baseId,d.value),h=n.useRef(!1),g=n.useRef(!1),w=d.value===l.value;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(C.ItemSlot,{scope:r,value:d.value,children:(0,c.jsx)(eo,{asChild:!0,children:(0,c.jsx)(u.sG.button,{id:v,disabled:o,"data-disabled":o?"":void 0,"data-state":el(w),"aria-expanded":w,"aria-controls":m,...a,ref:p,onPointerEnter:(0,i.m)(e.onPointerEnter,()=>{g.current=!1,d.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.m)(e.onPointerMove,ed(()=>{o||g.current||d.wasEscapeCloseRef.current||h.current||(l.onTriggerEnter(d.value),h.current=!0)})),onPointerLeave:(0,i.m)(e.onPointerLeave,ed(()=>{o||(l.onTriggerLeave(),h.current=!1)})),onClick:(0,i.m)(e.onClick,()=>{l.onItemSelect(d.value),g.current=w}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===l.dir?"ArrowLeft":"ArrowRight"}[l.orientation];w&&e.key===t&&(d.onEntryKeyDown(),e.preventDefault())})})})}),w&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y.b,{"aria-hidden":!0,tabIndex:0,ref:d.focusProxyRef,onFocus:e=>{let t=d.contentRef.current,r=e.relatedTarget,n=r===f.current,o=null==t?void 0:t.contains(r);(n||!o)&&d.onFocusProxyEnter(n?"start":"end")}}),l.viewport&&(0,c.jsx)("span",{"aria-owns":m})]})]})});H.displayName=z;var V="navigationMenu.linkSelect",B=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,active:n,onSelect:o,...a}=e;return(0,c.jsx)(eo,{asChild:!0,children:(0,c.jsx)(u.sG.a,{"data-active":n?"":void 0,"aria-current":n?"page":void 0,...a,ref:t,onClick:(0,i.m)(e.onClick,e=>{let t=e.target,r=new CustomEvent(V,{bubbles:!0,cancelable:!0});if(t.addEventListener(V,e=>null==o?void 0:o(e),{once:!0}),(0,u.hO)(t,r),!r.defaultPrevented&&!e.metaKey){let e=new CustomEvent(Y,{bubbles:!0,cancelable:!0});(0,u.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});B.displayName="NavigationMenuLink";var W="NavigationMenuIndicator";n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,a=S(W,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?o.createPortal((0,c.jsx)(f.C,{present:r||i,children:(0,c.jsx)(q,{...n,ref:t})}),a.indicatorTrack):null}).displayName=W;var q=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...o}=e,a=S(W,r),i=b(r),[l,s]=n.useState(null),[d,f]=n.useState(null),p="horizontal"===a.orientation,v=!!a.value;n.useEffect(()=>{var e;let t=null===(e=i().find(e=>e.value===a.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[i,a.value]);let m=()=>{l&&f({size:p?l.offsetWidth:l.offsetHeight,offset:p?l.offsetLeft:l.offsetTop})};return eu(l,m),eu(a.indicatorTrack,m),d?(0,c.jsx)(u.sG.div,{"aria-hidden":!0,"data-state":v?"visible":"hidden","data-orientation":a.orientation,...o,ref:t,style:{position:"absolute",...p?{left:0,width:d.size+"px",transform:"translateX(".concat(d.offset,"px)")}:{top:0,height:d.size+"px",transform:"translateY(".concat(d.offset,"px)")},...o.style}}):null}),X="NavigationMenuContent",Z=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=S(X,e.__scopeNavigationMenu),a=U(X,e.__scopeNavigationMenu),u=(0,s.s)(a.contentRef,t),l=a.value===o.value,d={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...n};return o.viewport?(0,c.jsx)(Q,{forceMount:r,...d,ref:u}):(0,c.jsx)(f.C,{present:r||l,children:(0,c.jsx)(J,{"data-state":el(l),...d,ref:u,onPointerEnter:(0,i.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ed(o.onContentLeave)),style:{pointerEvents:!l&&o.isRootMenu?"none":void 0,...d.style}})})});Z.displayName=X;var Q=n.forwardRef((e,t)=>{let{onViewportContentChange:r,onViewportContentRemove:n}=S(X,e.__scopeNavigationMenu);return(0,g.N)(()=>{r(e.value,{ref:t,...e})},[e,t,r]),(0,g.N)(()=>()=>n(e.value),[e.value,n]),null}),Y="navigationMenu.rootContentDismiss",J=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,triggerRef:a,focusProxyRef:u,wasEscapeCloseRef:l,onRootContentClose:d,onContentFocusOutside:f,...p}=e,v=S(X,r),m=n.useRef(null),g=(0,s.s)(m,t),w=es(v.baseId,o),y=ec(v.baseId,o),x=b(r),C=n.useRef(null),{onItemDismiss:R}=v;n.useEffect(()=>{let e=m.current;if(v.isRootMenu&&e){let t=()=>{var t;R(),d(),e.contains(document.activeElement)&&(null===(t=a.current)||void 0===t||t.focus())};return e.addEventListener(Y,t),()=>e.removeEventListener(Y,t)}},[v.isRootMenu,e.value,a,R,d]);let E=n.useMemo(()=>{let e=x().map(e=>e.value);"rtl"===v.dir&&e.reverse();let t=e.indexOf(v.value),r=e.indexOf(v.previousValue),n=o===v.value,a=r===e.indexOf(o);if(!n&&!a)return C.current;let i=(()=>{if(t!==r){if(n&&-1!==r)return t>r?"from-end":"from-start";if(a&&-1!==t)return t>r?"to-start":"to-end"}return null})();return C.current=i,i},[v.previousValue,v.value,v.dir,x,o]);return(0,c.jsx)(er,{asChild:!0,children:(0,c.jsx)(h.qW,{id:y,"aria-labelledby":w,"data-motion":E,"data-orientation":v.orientation,...p,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(Y,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,i.m)(e.onFocusOutside,e=>{var t;f();let r=e.target;(null===(t=v.rootNavigationMenu)||void 0===t?void 0:t.contains(r))&&e.preventDefault()}),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,e=>{var t;let r=e.target,n=x().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(r)}),o=v.isRootMenu&&(null===(t=v.viewport)||void 0===t?void 0:t.contains(r));(n||o||!v.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),n=document.activeElement,o=t.findIndex(e=>e===n);if(ei(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var r;null===(r=u.current)||void 0===r||r.focus()}}}),onEscapeKeyDown:(0,i.m)(e.onEscapeKeyDown,e=>{l.current=!0})})})}),$="NavigationMenuViewport",ee=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=!!S($,e.__scopeNavigationMenu).value;return(0,c.jsx)(f.C,{present:r||o,children:(0,c.jsx)(et,{...n,ref:t})})});ee.displayName=$;var et=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,children:o,...a}=e,l=S($,r),d=(0,s.s)(t,l.onViewportChange),p=k(X,e.__scopeNavigationMenu),[v,m]=n.useState(null),[h,g]=n.useState(null),w=v?(null==v?void 0:v.width)+"px":void 0,y=v?(null==v?void 0:v.height)+"px":void 0,x=!!l.value,C=x?l.value:l.previousValue;return eu(h,()=>{h&&m({width:h.offsetWidth,height:h.offsetHeight})}),(0,c.jsx)(u.sG.div,{"data-state":el(x),"data-orientation":l.orientation,...a,ref:d,style:{pointerEvents:!x&&l.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":w,"--radix-navigation-menu-viewport-height":y,...a.style},onPointerEnter:(0,i.m)(e.onPointerEnter,l.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ed(l.onContentLeave)),children:Array.from(p.items).map(e=>{let[t,{ref:r,forceMount:n,...o}]=e,a=C===t;return(0,c.jsx)(f.C,{present:n||a,children:(0,c.jsx)(J,{...o,ref:(0,s.t)(r,e=>{a&&e&&g(e)})})},t)})})}),er=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=S("FocusGroup",r);return(0,c.jsx)(E.Provider,{scope:r,children:(0,c.jsx)(E.Slot,{scope:r,children:(0,c.jsx)(u.sG.div,{dir:o.dir,...n,ref:t})})})}),en=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],eo=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=P(r),a=S("FocusGroupItem",r);return(0,c.jsx)(E.ItemSlot,{scope:r,children:(0,c.jsx)(u.sG.button,{...n,ref:t,onKeyDown:(0,i.m)(e.onKeyDown,e=>{if(["Home","End",...en].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),en.includes(e.key)){let r=t.indexOf(e.currentTarget);t=t.slice(r+1)}setTimeout(()=>ei(t)),e.preventDefault()}})})})});function ea(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function ei(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let r=(0,w.c)(t);(0,g.N)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}function el(e){return e?"open":"closed"}function es(e,t){return"".concat(e,"-trigger-").concat(t)}function ec(e,t){return"".concat(e,"-content-").concat(t)}function ed(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ef=O,ep=D,ev=G,em=H,eh=B,eg=Z,ew=ee},5977:(e,t,r)=>{r.d(t,{H4:()=>C,_V:()=>x,bL:()=>y});var n=r(2115),o=r(6081),a=r(9033),i=r(2712),u=r(3655),l=r(5155),s="Avatar",[c,d]=(0,o.A)(s),[f,p]=c(s),v=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...o}=e,[a,i]=n.useState("idle");return(0,l.jsx)(f,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:(0,l.jsx)(u.sG.span,{...o,ref:t})})});v.displayName=s;var m="AvatarImage",h=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:s=()=>{},...c}=e,d=p(m,r),f=function(e,t){let[r,o]=n.useState("idle");return(0,i.N)(()=>{if(!e){o("error");return}let r=!0,n=new window.Image,a=e=>()=>{r&&o(e)};return o("loading"),n.onload=a("loaded"),n.onerror=a("error"),n.src=e,t&&(n.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(o,c.referrerPolicy),v=(0,a.c)(e=>{s(e),d.onImageLoadingStatusChange(e)});return(0,i.N)(()=>{"idle"!==f&&v(f)},[f,v]),"loaded"===f?(0,l.jsx)(u.sG.img,{...c,ref:t,src:o}):null});h.displayName=m;var g="AvatarFallback",w=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:o,...a}=e,i=p(g,r),[s,c]=n.useState(void 0===o);return n.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>c(!0),o);return()=>window.clearTimeout(e)}},[o]),s&&"loaded"!==i.imageLoadingStatus?(0,l.jsx)(u.sG.span,{...a,ref:t}):null});w.displayName=g;var y=v,x=h,C=w},6474:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8229),o=r(5155),a=n._(r(2115)),i=r(2757),u=r(5227),l=r(9818),s=r(6654),c=r(9991),d=r(5929);r(3230);let f=r(4930);function p(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=a.default.forwardRef(function(e,t){let r,n;let{href:i,as:v,children:m,prefetch:h=null,passHref:g,replace:w,shallow:y,scroll:x,onClick:C,onMouseEnter:b,onTouchStart:R,legacyBehavior:E=!1,...P}=e;r=m,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let j=a.default.useContext(u.AppRouterContext),N=!1!==h,T=null===h?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:M,as:S}=a.default.useMemo(()=>{let e=p(i);return{href:e,as:v?p(v):e}},[i,v]);E&&(n=a.default.Children.only(r));let _=E?n&&"object"==typeof n&&n.ref:t,k=a.default.useCallback(e=>(N&&null!==j&&(0,f.mountLinkInstance)(e,M,j,T),()=>{(0,f.unmountLinkInstance)(e)}),[N,M,j,T]),O={ref:(0,s.useMergedRef)(k,_),onClick(e){E||"function"!=typeof C||C(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),j&&!e.defaultPrevented&&!function(e,t,r,n,o,i,u){let{nodeName:l}=e.currentTarget;!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),a.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,j,M,S,w,y,x)},onMouseEnter(e){E||"function"!=typeof b||b(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),j&&N&&(0,f.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){E||"function"!=typeof R||R(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),j&&N&&(0,f.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(S)?O.href=S:E&&!g&&("a"!==n.type||"href"in n.props)||(O.href=(0,d.addBasePath)(S)),E?a.default.cloneElement(n,O):(0,o.jsx)("a",{...P,...O,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8859:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9074:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},9991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return v},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return h},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class m extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);