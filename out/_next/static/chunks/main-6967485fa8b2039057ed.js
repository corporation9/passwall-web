_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,n){n("oSxo"),e.exports=n("BMP1")},"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{get:function(){return/\((.+)\)/.exec(this)[1]}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))})},BMP1:function(e,t,n){"use strict";var r=n("284h")(n("IKlv"));window.next=r,(0,r.default)().catch(console.error)},DqTX:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],n=new Set(t.children);a(n,e.map((function(e){var t=r(e,2),n=t[0],i=t[1];return(0,o.createElement)(n,i)})),!1);var i=null;return{mountedInstances:new Set,updateHead:function(e){var t=i=Promise.resolve().then((function(){t===i&&(i=null,a(n,e,!0))}))}}};var o=n("q1tI"),i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function a(e,t,n){var r=document.getElementsByTagName("head")[0],o=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var n=function(e){var t=e.type,n=e.props,r=document.createElement(t);for(var o in n)if(n.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==n[o]){var a=i[o]||o.toLowerCase();r.setAttribute(a,n[o])}var c=n.children,u=n.dangerouslySetInnerHTML;return u?r.innerHTML=u.__html||"":c&&(r.textContent="string"===typeof c?c:Array.isArray(c)?c.join(""):""),r}(t),a=e.values();;){var c=a.next(),u=c.done,s=c.value;if(null==s?void 0:s.isEqualNode(n))return void o.delete(s);if(u)break}e.add(n),r.appendChild(n)}else{var f="";if(t){var l=t.props.children;f="string"===typeof l?l:Array.isArray(l)?l.join(""):""}f!==document.title&&(document.title=f)}})),o.forEach((function(t){n&&t.parentNode.removeChild(t),e.delete(t)}))}},IKlv:function(e,t,n){"use strict";var r=n("o0o1"),o=n("yXPU"),i=n("lwsE"),a=n("W8MJ"),c=n("7W2i"),u=n("a1gu"),s=n("Nsbk"),f=n("J4zp");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var d=n("284h"),p=n("TqRt");t.__esModule=!0,t.render=ne,t.renderError=oe,t.default=t.emitter=t.router=t.version=void 0;var h=p(n("pVnL"));p(n("284h"));n("0sNQ");var v=p(n("q1tI")),m=p(n("i8i4")),g=n("FYa8"),y=p(n("dZ6Y")),w=n("qOIg"),S=n("elyg"),E=n("/jkW"),_=d(n("3WeD")),b=d(n("yLiY")),P=n("g/15"),k=p(n("DqTX")),T=d(n("zmvN")),x=p(n("bGXG")),R=n("nOHt"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="9.5.4";var C=A.props,N=A.err,L=A.page,M=A.query,I=A.buildId,D=A.assetPrefix,F=A.runtimeConfig,j=A.dynamicIds,B=A.isFallback,U=A.head,q=D||"";n.p="".concat(q,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var W=(0,P.getURL)();(0,S.hasBasePath)(W)&&(W=(0,S.delBasePath)(W));var O=new T.default(I,q,L),H=function(e){var t=f(e,2),n=t[0],r=t[1];return O.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return H(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=H;var X,G,J,Y,V,z,K,Q=(0,k.default)(U),Z=document.getElementById("__next");t.router=J;var $=function(e){c(n,e);var t=l(n);function n(){return i(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),J.isSsr&&(B||A.nextExport&&((0,E.isDynamicRoute)(J.pathname)||location.search)||C&&C.__N_SSG&&location.search)&&J.replace(J.pathname+"?"+String(_.assign(_.urlQueryToSearchParams(J.query),new URLSearchParams(location.search))),W,{_h:1,shallow:!B})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(v.default.Component),ee=(0,y.default)();t.emitter=ee;var te=function(){var e=o(r.mark((function e(){var n,o,i,a,c,u,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,O.loadPage("/_app");case 4:return n=e.sent,o=n.page,i=n.mod,z=o,i&&i.reportWebVitals&&(K=function(e){var t,n=e.id,r=e.name,o=e.startTime,a=e.value,c=e.duration,u=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),i.reportWebVitals({id:n||f,name:r,startTime:o||t,value:null==a?c:a,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),a=N,e.prev=10,e.next=14,O.loadPage(L);case 14:c=e.sent,Y=c.page,V=c.styleSheets,e.next=21;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),a=e.t0;case 26:if(!window.__NEXT_PRELOADREADY){e.next=30;break}return e.next=30,window.__NEXT_PRELOADREADY(j);case 30:return t.router=J=(0,R.createRouter)(L,M,W,{initialProps:C,pageLoader:O,App:z,Component:Y,initialStyleSheets:V,wrapApp:fe,err:a,isFallback:Boolean(B),subscription:function(e,t){return ne({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})}}),ne(u={App:z,Component:Y,styleSheets:V,props:C,err:a}),e.abrupt("return",ee);case 38:return e.abrupt("return",{emitter:ee,render:ne,renderCtx:u});case 39:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function ne(e){return re.apply(this,arguments)}function re(){return(re=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,oe(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,le(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,oe((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function oe(e){var t=e.App,n=e.err;return console.error(n),O.loadPage("/_error").then((function(r){var o=r.page,i=r.styleSheets,a=fe(t),c={Component:o,AppTree:a,router:J,ctx:{err:n,pathname:L,query:M,asPath:W,AppTree:a}};return Promise.resolve(e.props?e.props:(0,P.loadGetInitialProps)(t,c)).then((function(t){return le((0,h.default)({},e,{err:n,Component:o,styleSheets:i,props:t}))}))}))}t.default=te;var ie="function"===typeof m.default.hydrate;function ae(){P.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),K&&performance.getEntriesByName("Next.js-hydration").forEach(K),ue())}function ce(){if(P.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),K&&(performance.getEntriesByName("Next.js-render").forEach(K),performance.getEntriesByName("Next.js-route-change-to-render").forEach(K)),ue(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ue(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function se(e){var t=e.children;return v.default.createElement($,{fn:function(e){return oe({App:z,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},v.default.createElement(w.RouterContext.Provider,{value:(0,R.makePublicRouterInstance)(J)},v.default.createElement(g.HeadManagerContext.Provider,{value:Q},t)))}var fe=function(e){return function(t){var n=(0,h.default)({},t,{Component:Y,err:N,router:J});return v.default.createElement(se,null,v.default.createElement(e,n))}};function le(e){var t=e.App,n=e.Component,r=e.props,o=e.err,i=e.styleSheets;n=n||X.Component,r=r||X.props;var a=(0,h.default)({},r,{Component:n,err:o,router:J});X=a;var c,u=!1,s=new Promise((function(e,t){G&&G(),c=function(){G=null,e()},G=function(){u=!0,G=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var f,l,d=v.default.createElement(de,{callback:function(){if(!ie&&!u){for(var e=new Set(i.map((function(e){return e.href}))),t=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),n=t.map((function(e){return e.getAttribute("data-n-href")})),r=0;r<n.length;++r)e.has(n[r])?t[r].removeAttribute("media"):t[r].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&i.forEach((function(e){var t=e.href,n=document.querySelector('style[data-n-href="'.concat(t,'"]'));n&&(o.parentNode.insertBefore(n,o.nextSibling),o=n)})),(0,T.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}c()}},v.default.createElement(se,null,v.default.createElement(t,a)));return function(){if(ie)return!1;var e=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));i.forEach((function(e){var n=e.href,r=e.text;if(!t.has(n)){var o=document.createElement("style");o.setAttribute("data-n-href",n),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(r))}}))}(),f=d,l=Z,P.ST&&performance.mark("beforeRender"),ie?(m.default.hydrate(f,l,ae),ie=!1,K&&P.ST&&(0,x.default)(K)):m.default.render(f,l,ce),s}function de(e){var t=e.callback,n=e.children;return v.default.useLayoutEffect((function(){return t()}),[t]),n}},Lab5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return n+t}},bGXG:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("w6Sm");t.default=function(e){(0,r.getCLS)(e),(0,r.getFID)(e),(0,r.getFCP)(e),(0,r.getLCP)(e),(0,r.getTTFB)(e)}},oSxo:function(e,t,n){"use strict";n.r(t);try{self["workbox:window:5.1.3"]&&_()}catch(l){}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}try{self["workbox:core:5.1.3"]&&_()}catch(l){}var o=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function i(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var a=function(e,t){this.type=e,Object.assign(this,t)};function c(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function u(){}var s=function(e){var t,n;function u(t,n){var r,u;return void 0===n&&(n={}),(r=e.call(this)||this).t={},r.i=0,r.o=new o,r.u=new o,r.s=new o,r.v=0,r.h=new Set,r.l=function(){var e=r.g,t=e.installing;r.i>0||!i(t.scriptURL,r.m)||performance.now()>r.v+6e4?(r.P=t,e.removeEventListener("updatefound",r.l)):(r.p=t,r.h.add(t),r.o.resolve(t)),++r.i,t.addEventListener("statechange",r.k)},r.k=function(e){var t=r.g,n=e.target,o=n.state,i=n===r.P,c=i?"external":"",u={sw:n,originalEvent:e};!i&&r.j&&(u.isUpdate=!0),r.dispatchEvent(new a(c+o,u)),"installed"===o?r.O=self.setTimeout((function(){"installed"===o&&t.waiting===n&&r.dispatchEvent(new a(c+"waiting",u))}),200):"activating"===o&&(clearTimeout(r.O),i||r.u.resolve(n))},r.R=function(e){var t=r.p;t===navigator.serviceWorker.controller&&(r.dispatchEvent(new a("controlling",{sw:t,originalEvent:e,isUpdate:r.j})),r.s.resolve(t))},r.S=(u=function(e){var t=e.data,n=e.source;return c(r.getSW(),(function(){r.h.has(n)&&r.dispatchEvent(new a("message",{data:t,sw:n,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(u.apply(this,e))}catch(e){return Promise.reject(e)}}),r.m=t,r.t=n,navigator.serviceWorker.addEventListener("message",r.S),r}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s,d,p=u.prototype;return p.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return f(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.j=Boolean(navigator.serviceWorker.controller),r.U=r.B(),c(r.L(),(function(e){r.g=e,r.U&&(r.p=r.U,r.u.resolve(r.U),r.s.resolve(r.U),r.U.addEventListener("statechange",r.k,{once:!0}));var t=r.g.waiting;return t&&i(t.scriptURL,r.m)&&(r.p=t,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.p&&(r.o.resolve(r.p),r.h.add(r.p)),r.g.addEventListener("updatefound",r.l),navigator.serviceWorker.addEventListener("controllerchange",r.R,{once:!0}),r.g}))}))}catch(e){return Promise.reject(e)}},p.update=function(){try{return this.g?f(this.g.update()):void 0}catch(l){return Promise.reject(l)}},p.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(l){return Promise.reject(l)}},p.messageSW=function(e){try{return c(this.getSW(),(function(t){return function(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}(t,e)}))}catch(l){return Promise.reject(l)}},p.B=function(){var e=navigator.serviceWorker.controller;return e&&i(e.scriptURL,this.m)?e:void 0},p.L=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return c(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},s=u,(d=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&r(s.prototype,d),u}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if((r=t.next()).done)break;o=r.value}o(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function f(e,t){if(!t)return e&&e.then?e.then(u):Promise.resolve()}"undefined"!==typeof window&&"serviceWorker"in navigator&&(window.workbox=new s("/sw.js",{scope:"/"}),window.workbox.addEventListener("activated",async e=>{if(!e.isUpdate){(await caches.keys()).includes("start-url")||fetch("/")}}),window.workbox.register())},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},w6Sm:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return h})),n.d(t,"getFCP",(function(){return m})),n.d(t,"getFID",(function(){return g})),n.d(t,"getLCP",(function(){return w})),n.d(t,"getTTFB",(function(){return S}));var r,o,i=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:i(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,s=!1,f=function(e){u=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:u})}),{capture:!0,once:t})},p=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=a("CLS",0),o=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},i=c("layout-shift",o);i&&(t=p(e,r,i,n),d((function(e){var n=e.isUnloading;i.takeRecords().map(o),n&&(r.isFinal=!0),t()})))},v=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},m=function(e){var t,n=a("FCP"),r=v(),o=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(n.value=e.startTime,n.isFinal=!0,n.entries.push(e),t())}));o&&(t=p(e,n,o))},g=function(e){var t=a("FID"),n=v(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,i())},o=c("first-input",r),i=p(e,t,o);o?d((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],i())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=a("LCP"),o=v(),i=function(e){var n=e.startTime;n<o.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},u=c("largest-contentful-paint",i);if(u){t=p(e,r,u,n);var s=function(){r.isFinal||(u.takeRecords().map(i),r.isFinal=!0,t())};y().then(s),d(s,!0)}},S=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},zmvN:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("TqRt");t.__esModule=!0,t.default=t.looseToArray=void 0;var a=i(n("dZ6Y")),c=n("elyg"),u=i(n("Lab5")),s=n("/jkW"),f=n("hS4m"),l=function(e){return[].slice.call(e)};function d(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}function p(e){return(0,c.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=l;var h=d("preload")&&!d("prefetch")?"preload":"prefetch",v=d("preload")?"preload":h;document.createElement("script");function m(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function g(e,t,n,r){return new Promise((function(o,i){r=document.createElement("link"),n&&(r.as=n),r.rel=t,r.crossOrigin=void 0,r.onload=o,r.onerror=i,r.href=e,document.head.appendChild(r)}))}var y=function(){function e(t,n,o){r(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=o,this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,a.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]?n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(p(e))}))}},{key:"getDataHref",value:function(e,t,n){var r=this,o=(0,f.parseRelativeUrl)(e),i=o.pathname,a=o.query,l=o.search,d=(0,f.parseRelativeUrl)(t).pathname,p=m(i),h=function(e){var t=(0,u.default)(e,".json");return(0,c.addBasePath)("/_next/data/".concat(r.buildId).concat(t).concat(n?"":l))},v=(0,s.isDynamicRoute)(p),g=v?(0,c.interpolateAs)(i,d,a).result:"";return v?g&&h(g):h(p)}},{key:"prefetchData",value:function(e,t){var n=this,r=m((0,f.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,i){return o.has(r)&&(i=n.getDataHref(e,t,!0))&&!document.querySelector('link[rel="'.concat(h,'"][href^="').concat(i,'"]'))&&g(i,h,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=m(e),new Promise((function(n,r){var o=t.pageCache[e];if(o)"error"in o?r(o.error):n(o);else{var i=function o(i){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in i?r(i.error):n(i)};if(t.pageRegisterEvents.on(e,i),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,n){var r=document.createElement("script");r.crossOrigin=void 0,r.src=e,r.onload=t,r.onerror=function(){return n(p(e))},document.body.appendChild(r)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(v,'"][href^="').concat(e,'"]'))&&g(e,v,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(n){t.pageCache[e]={error:n},i({error:n})}))}}))}},{key:"registerPage",value:function(e,t){var n=this;var r=e===this.initialPage;("/_app"===e?Promise.resolve([]):(r?Promise.resolve(l(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw p(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){if(r)return l(document.styleSheets).filter((function(e){return e.ownerNode&&"LINK"===e.ownerNode.tagName&&e.ownerNode.hasAttribute("data-n-p")})).map((function(e){return{href:e.ownerNode.getAttribute("href"),text:l(e.cssRules).map((function(e){return e.cssText})).join("")}}));throw e}))}))).then((function(r){return function(r){try{var o=t(),i={page:o.default||o,mod:o,styleSheets:r};n.pageCache[e]=i,n.pageRegisterEvents.emit(e,i)}catch(a){n.pageCache[e]={error:a},n.pageRegisterEvents.emit(e,{error:a})}}(r)}),(function(t){n.pageCache[e]={error:t},n.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var n,r,o=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else;return Promise.all(document.querySelector('link[rel="'.concat(h,'"][href^="').concat(r,'"]'))?[]:[r&&g(r,h,r.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=y}},[[0,0,2,1]]]);