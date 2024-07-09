/*! For license information please see 53bd4146.4f28ee72.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97834],{921757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(474848),r=n(28453);const o={id:"php",title:"PHP \u30da\u30fc\u30b8"},i=void 0,c={id:"settings/php",title:"PHP \u30da\u30fc\u30b8",description:"4D \u3067\u306f PHP \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u305d\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/ja/settings/php",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fphp.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"php",title:"PHP \u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"SQL \u30da\u30fc\u30b8",permalink:"/docs/ja/settings/sql"},next:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30da\u30fc\u30b8",permalink:"/docs/ja/settings/security"}},d={},l=[{value:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc",id:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc",level:2},{value:"IP\u30a2\u30c9\u30ec\u30b9",id:"IP\u30a2\u30c9\u30ec\u30b9",level:3},{value:"\u30dd\u30fc\u30c8\u756a\u53f7",id:"\u30dd\u30fc\u30c8\u756a\u53f7",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["4D \u3067\u306f ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.ja.html",children:"PHP \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059"}),"\u3002 \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u305d\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u8a2d\u5b9a\u306f\u3001\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30de\u30b7\u30f3\u3068\u3059\u3079\u3066\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u5404\u30de\u30b7\u30f3\u304a\u3088\u3073\u5404\u30bb\u30c3\u30b7\u30e7\u30f3\u3067\u7570\u306a\u308b\u8a2d\u5b9a\u3092\u9069\u7528\u3059\u308b\u305f\u3081\u306b <",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page642.html",children:(0,s.jsx)(t.code,{children:"SET DATABASE PARAMETER"})})," \u3068 ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page643.html",children:(0,s.jsx)(t.code,{children:"Get database parameter"})})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 ",(0,s.jsx)(t.code,{children:"SET DATABASE PARAMETER"})," \u30b3\u30de\u30f3\u30c9\u3067\u5909\u66f4\u3055\u308c\u305f\u5024\u306f\u30ab\u30ec\u30f3\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u512a\u5148\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc",children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc"}),"\n",(0,s.jsx)(t.h3,{id:"IP\u30a2\u30c9\u30ec\u30b9",children:"IP\u30a2\u30c9\u30ec\u30b9"}),"\n",(0,s.jsx)(t.p,{children:"PHP \u5b9f\u884c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u308b PHP\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u306e\u30a2\u30c9\u30ec\u30b9\u3002 4D \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a2\u30c9\u30ec\u30b9 127.0.0.1 \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"HTTP\u30a2\u30c9\u30ec\u30b9\u304c 4D \u3068\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u306b\u5b58\u5728\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u30dd\u30fc\u30c8\u756a\u53f7",children:"\u30dd\u30fc\u30c8\u756a\u53f7"}),"\n",(0,s.jsx)(t.p,{children:"PHP\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u306e\u30dd\u30fc\u30c8\u756a\u53f7\u3002 4D \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30dd\u30fc\u30c8 8002 \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30a2\u30c9\u30ec\u30b9\u3084\u30dd\u30fc\u30c8\u304c\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3042\u308b\u3044\u306f\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u304c\u52d5\u4f5c\u3059\u308b\u5834\u5408\u3001\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:a,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(296540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);