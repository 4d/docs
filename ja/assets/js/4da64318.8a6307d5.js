/*! For license information please see 4da64318.8a6307d5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27130],{569440:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(474848),t=r(28453);const s={id:"overview",title:"\u30af\u30e9\u30b9\u95a2\u6570\u306b\u3064\u3044\u3066"},i=void 0,c={id:"API/overview",title:"\u30af\u30e9\u30b9\u95a2\u6570\u306b\u3064\u3044\u3066",description:"\u3053\u306e\u7ae0\u3067\u306f\u3001\u30d3\u30eb\u30c8\u30a4\u30f3\u306e 4D \u30af\u30e9\u30b9\u95a2\u6570\u304a\u3088\u3073\u95a2\u9023\u3059\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u30b3\u30de\u30f3\u30c9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002 4D\u30af\u30e9\u30b9\u95a2\u6570\u304a\u3088\u3073\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30af\u30e9\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/ja/20-R4/API/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"overview",title:"\u30af\u30e9\u30b9\u95a2\u6570\u306b\u3064\u3044\u3066"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/ja/20-R4/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/ja/20-R4/API/BlobClass"}},l={},d=[{value:"\u8868\u8a18\u898f\u5247",id:"\u8868\u8a18\u898f\u5247",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u3053\u306e\u7ae0\u3067\u306f\u3001\u30d3\u30eb\u30c8\u30a4\u30f3\u306e 4D \u30af\u30e9\u30b9\u95a2\u6570\u304a\u3088\u3073\u95a2\u9023\u3059\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u30b3\u30de\u30f3\u30c9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002 4D\u30af\u30e9\u30b9\u95a2\u6570\u304a\u3088\u3073\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30af\u30e9\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u95a2\u6570\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5bfe\u3057\u3001",(0,o.jsx)(n.code,{children:"()"})," \u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u3066\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u4f8b: ",(0,o.jsx)(n.code,{children:"collection.sort()"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u306f\u3001\u30ab\u30c3\u30b3\u3092\u4f7f\u3044\u307e\u305b\u3093\u3002 \u4f8b: ",(0,o.jsx)(n.code,{children:"file.creationTime"}),"\u3002 \u307e\u305f\u3001[] \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3082\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002 \u4f8b: ",(0,o.jsx)(n.code,{children:'file["creationTime"]'}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u30b3\u30de\u30f3\u30c9\u306f\u72ec\u7acb\u3057\u3066\u3001\u5f15\u6570\u4ed8\u304d\u3042\u308b\u3044\u306f\u5f15\u6570\u306a\u3057\u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4f8b: ",(0,o.jsx)(n.code,{children:"Folder(fk database folder)"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8868\u8a18\u898f\u5247",children:"\u8868\u8a18\u898f\u5247"}),"\n",(0,o.jsx)(n.p,{children:"\u95a2\u6570\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u306f\u3001\u6b21\u306e\u8868\u8a18\u304c\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4e2d\u30ab\u30c3\u30b3 ",(0,o.jsx)(n.code,{children:"{ }"})," \u306f\u3001\u4efb\u610f\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u793a\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,o.jsx)(n.code,{children:".delete( { option : Integer } )"})," \u3068\u3044\u3046\u8868\u8a18\u306e\u5834\u5408\u3001\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u969b\u306b ",(0,o.jsx)(n.em,{children:"option"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u7701\u7565\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"{ ; ...param }"})," \u3068\u3044\u3046\u8868\u8a18\u306f\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u6570\u306b\u5236\u9650\u304c\u306a\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,o.jsx)(n.code,{children:".concat( value : any { ;...valueN } ) : Collection"})," \u3068\u3044\u3046\u8868\u8a18\u306e\u5834\u5408\u3001\u30c7\u30fc\u30bf\u578b\u304a\u3088\u3073\u6570\u306b\u5236\u9650\u306a\u304f\u95a2\u6570\u306b\u5f15\u6570\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"any"})," \u30ad\u30fc\u30ef\u30fc\u30c9\u306f\u3001\u5c5e\u6027\u3068\u3057\u3066\u4fdd\u5b58\u53ef\u80fd\u306a\u7bc4\u56f2 (\u6570\u5024\u3001\u30c6\u30ad\u30b9\u30c8\u3001\u30d6\u30fc\u30eb\u3001\u65e5\u4ed8\u3001\u6642\u9593\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3) \u3067\u30c7\u30fc\u30bf\u578b\u306b\u5236\u9650\u306e\u306a\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u793a\u3059\u306e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var o=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var o,s={},d=null,a=null;for(o in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:d,ref:a,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var o=r(296540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);