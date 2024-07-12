/*! For license information please see 6dd3804b.36188517.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79572],{178728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(474848),r=t(28453);const o={id:"plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3"},i=void 0,c={id:"Concepts/plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3",description:"4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3092\u9032\u3081\u3066\u3044\u304f\u3068\u3001\u6700\u521d\u306f\u6c17\u4ed8\u304b\u306a\u304b\u3063\u305f\u6570\u591a\u304f\u306e\u6a5f\u80fd\u3092\u767a\u898b\u3059\u308b\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305d\u308c\u3060\u3051\u3067\u306a\u304f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3 \u30924D\u958b\u767a\u74b0\u5883\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u6a19\u6e96\u306e4D\u306e\u6a5f\u80fd\u3092\u9ad8\u3081\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/ja/20/Concepts/plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3"},sidebar:"docs",previous:{title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",permalink:"/docs/ja/20/Concepts/components"},next:{title:"\u8b58\u5225\u5b50\u306e\u547d\u540d\u898f\u5247",permalink:"/docs/ja/20/Concepts/identifiers"}},l={},d=[{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u898b\u3064\u3051\u65b9",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u898b\u3064\u3051\u65b9",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f7f\u3044\u65b9",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f7f\u3044\u65b9",level:2}];function p(e){const n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3092\u9032\u3081\u3066\u3044\u304f\u3068\u3001\u6700\u521d\u306f\u6c17\u4ed8\u304b\u306a\u304b\u3063\u305f\u6570\u591a\u304f\u306e\u6a5f\u80fd\u3092\u767a\u898b\u3059\u308b\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305d\u308c\u3060\u3051\u3067\u306a\u304f\u3001",(0,s.jsx)(n.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3"})," \u30924D\u958b\u767a\u74b0\u5883\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u6a19\u6e96\u306e4D\u306e\u6a5f\u80fd\u3092\u9ad8\u3081\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b"}),"\n",(0,s.jsx)(n.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u3001C \u3084 C++ \u306a\u3069\u306e\u8a00\u8a9e\u3067\u66f8\u304b\u308c\u305f\u30014D \u8d77\u52d5\u6642\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u3053\u3068\u3067\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30014D \u306b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f\u901a\u5e38\u8907\u6570\u306e\u30eb\u30fc\u30c1\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u5916\u90e8\u30a8\u30ea\u30a2\u3092\u64cd\u4f5c\u3067\u304d\u3001\u5916\u90e8\u30d7\u30ed\u30bb\u30b9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u898b\u3064\u3051\u65b9",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u898b\u3064\u3051\u65b9"}),"\n",(0,s.jsxs)(n.p,{children:["4D\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u3063\u3066\u591a\u6570\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u516c\u958b\u3055\u308c\u305f\u30d7\u30e9\u30b0\u30a4\u30f3\u306f ",(0,s.jsx)(n.a,{href:"https://github.com/search?q=4d-plugin&type=Repositories",children:"GitHub"})," \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20/Extensions/develop-plug-ins",children:"\u72ec\u81ea\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u958b\u767a"})," \u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,s.jsxs)(n.p,{children:["4D\u74b0\u5883\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u30d5\u30a1\u30a4\u30eb\u3092 ",(0,s.jsx)(n.a,{href:"/docs/ja/20/Project/architecture#plugins",children:"Project\u30d5\u30a9\u30eb\u30c0\u30fc\u3068\u540c\u3058\u968e\u5c64"})," \u306e ",(0,s.jsx)(n.strong,{children:"Plugins"})," \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306f 4D \u8d77\u52d5\u6642\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u306e\u3067\u3001\u3053\u308c\u3089\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u969b\u306b\u306f 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7d42\u4e86\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5229\u7528\u306b\u7279\u5225\u306a\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5fc5\u8981\u306a\u5834\u5408\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u304c\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u307e\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f7f\u3044\u65b9",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f7f\u3044\u65b9"}),"\n",(0,s.jsxs)(n.p,{children:["\u30d7\u30e9\u30b0\u30a4\u30f3\u30b3\u30de\u30f3\u30c9\u306f\u30014D\u958b\u767a\u306b\u304a\u3044\u3066\u901a\u5e38\u306e 4D\u30b3\u30de\u30f3\u30c9\u3068\u540c\u69d8\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e ",(0,s.jsx)(n.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3"})," \u30da\u30fc\u30b8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,o={},d=null,p=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:p,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);