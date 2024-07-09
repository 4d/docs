/*! For license information please see 03f89cc8.7fd8f764.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87463],{97019:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(474848),t=n(28453);const i={id:"errorPages",title:"\u30ab\u30b9\u30bf\u30e0 HTTP\u30a8\u30e9\u30fc\u30da\u30fc\u30b8"},l=void 0,o={id:"WebServer/errorPages",title:"\u30ab\u30b9\u30bf\u30e0 HTTP\u30a8\u30e9\u30fc\u30da\u30fc\u30b8",description:"4D Web Server \u3092\u4f7f\u3063\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306b\u57fa\u3065\u3044\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u308b HTTP\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3068\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u6307\u3057\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/ja/WebServer/errorPages",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"errorPages",title:"\u30ab\u30b9\u30bf\u30e0 HTTP\u30a8\u30e9\u30fc\u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306e\u8a31\u53ef",permalink:"/docs/ja/WebServer/allowProject"},next:{title:"\u8a8d\u8a3c",permalink:"/docs/ja/WebServer/authentication"}},c={},d=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30da\u30fc\u30b8\u306e\u7f6e\u63db",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30da\u30fc\u30b8\u306e\u7f6e\u63db",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function a(e){const r={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"4D Web Server \u3092\u4f7f\u3063\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306b\u57fa\u3065\u3044\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u308b HTTP\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3068\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u6307\u3057\u307e\u3059:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"4 \u304b\u3089\u59cb\u307e\u308b\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9 (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a8\u30e9\u30fc)\u3002\u305f\u3068\u3048\u3070 404 \u306a\u3069\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"5 \u304b\u3089\u59cb\u307e\u308b\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9 (\u30b5\u30fc\u30d0\u30fc\u30a8\u30e9\u30fc)\u3002\u305f\u3068\u3048\u3070 501 \u306a\u3069\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["HTTP\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306e\u5b8c\u5168\u306a\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(r.a,{href:"https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89",children:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"})," (Wikipedia) \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30da\u30fc\u30b8\u306e\u7f6e\u63db",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30da\u30fc\u30b8\u306e\u7f6e\u63db"}),"\n",(0,s.jsx)(r.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e 4D Web Server \u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u72ec\u81ea\u306e\u30da\u30fc\u30b8\u3067\u7f6e\u304d\u63db\u3048\u308b\u305f\u3081\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u30ab\u30b9\u30bf\u30e0 HTML\u30da\u30fc\u30b8\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e WebFolder \u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u7b2c1\u30ec\u30d9\u30eb\u306b\u7f6e\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'\u30ab\u30b9\u30bf\u30e0\u30da\u30fc\u30b8\u3092 "{statusCode}.html" (\u4f8b: "404.html") \u3068\u3044\u3046\u540d\u524d\u306b\u3057\u307e\u3059\u3002'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:'\u4e00\u3064\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306b\u3064\u304d\u3001\u4e00\u3064\u306e\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u307b\u304b\u3001"{number}xx.html" \u3068\u540d\u524d\u3092\u3064\u3051\u308b\u3053\u3068\u3067\u8907\u6570\u306e\u30a8\u30e9\u30fc\u306b\u6c4e\u7528\u7684\u306a\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a8\u30e9\u30fc\u5168\u822c\u306b\u5bfe\u3059\u308b\u30da\u30fc\u30b8\u3068\u3057\u3066\u3001"4xx.html" \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 4D Web Server \u306f\u6700\u521d\u306b {statusCode}.html \u306e\u30da\u30fc\u30b8\u3092\u63a2\u3057\u3001\u305d\u308c\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u306f\u6c4e\u7528\u7684\u306a\u30da\u30fc\u30b8\u3092\u63a2\u3057\u307e\u3059\u3002'}),"\n",(0,s.jsx)(r.p,{children:"\u305f\u3068\u3048\u3070\u3001HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9 404 \u3092\u8fd4\u3059\u5834\u5408:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'4D Web Server \u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e WebFolder \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u3042\u308b "404.html" \u30da\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'\u305d\u308c\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u30014D Web Server \u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e WebFolder \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u3042\u308b "4xx.html" \u30da\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u305d\u308c\u3082\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u30014D Web Server \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(r.p,{children:"WebFolder \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30ab\u30b9\u30bf\u30e0\u30da\u30fc\u30b8\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u308b\u5834\u5408:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(575727).A+"",width:"166",height:"287"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'403\u3001404 HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u5bfe\u3057\u3066\u306f\u3001"403.html" \u304a\u3088\u3073 "404.html" \u30da\u30fc\u30b8\u304c\u305d\u308c\u305e\u308c\u8fd4\u3055\u308c\u307e\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'\u4ed6\u306e 4xx \u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9 (400\u3001401\u306a\u3069) \u306b\u5bfe\u3057\u3066\u306f\u3001"4xx.html" \u30da\u30fc\u30b8\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002'}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:'5xx \u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9\u5168\u822c\u306b\u5bfe\u3057\u3066\u306f"5xx.html" \u30da\u30fc\u30b8\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002'}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,i={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},575727:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(296540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);