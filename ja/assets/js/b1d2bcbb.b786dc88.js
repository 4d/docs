/*! For license information please see b1d2bcbb.b786dc88.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[271],{89007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(474848),r=n(28453);const o={id:"sql",title:"SQL \u30da\u30fc\u30b8"},i=void 0,c={id:"settings/sql",title:"SQL \u30da\u30fc\u30b8",description:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f 4D SQL\u30b5\u30fc\u30d0\u30fc \u306e\u516c\u958b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3084\u30a2\u30af\u30bb\u30b9\u6a29\u3001\u304a\u3088\u3073 4D SQL\u30a8\u30f3\u30b8\u30f3\u306e\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3092\u304a\u3053\u306a\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/settings/sql.md",sourceDirName:"settings",slug:"/settings/sql",permalink:"/docs/ja/20-R4/settings/sql",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsql.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"sql",title:"SQL \u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"Web \u30da\u30fc\u30b8",permalink:"/docs/ja/20-R4/settings/web"},next:{title:"PHP \u30da\u30fc\u30b8",permalink:"/docs/ja/20-R4/settings/php"}},l={},d=[{value:"SQL\u30b5\u30fc\u30d0\u30fc\u516c\u958b",id:"SQL\u30b5\u30fc\u30d0\u30fc\u516c\u958b",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30ad\u30fc\u30de\u7528\u306eSQL\u30b5\u30fc\u30d0\u30fc\u30a2\u30af\u30bb\u30b9\u6a29",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30ad\u30fc\u30de\u7528\u306eSQL\u30b5\u30fc\u30d0\u30fc\u30a2\u30af\u30bb\u30b9\u6a29",level:2},{value:"SQL\u30a8\u30f3\u30b8\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3",id:"SQL\u30a8\u30f3\u30b8\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3",level:2}];function a(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/What-s-new/4D-SQL-Reference-19-R3/Using-SQL-in-4D.200-5680718.ja.html",children:"4D SQL\u30b5\u30fc\u30d0\u30fc"})," \u306e\u516c\u958b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3084\u30a2\u30af\u30bb\u30b9\u6a29\u3001\u304a\u3088\u3073 4D SQL\u30a8\u30f3\u30b8\u30f3\u306e\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3092\u304a\u3053\u306a\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"SQL\u30b5\u30fc\u30d0\u30fc\u516c\u958b",children:"SQL\u30b5\u30fc\u30d0\u30fc\u516c\u958b"}),"\n",(0,s.jsxs)(t.p,{children:["doc.4d.com \u306e ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.ja.html",children:(0,s.jsx)(t.strong,{children:"4D SQL\u30b5\u30fc\u30d0\u306e\u8a2d\u5b9a"})})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30ad\u30fc\u30de\u7528\u306eSQL\u30b5\u30fc\u30d0\u30fc\u30a2\u30af\u30bb\u30b9\u6a29",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30ad\u30fc\u30de\u7528\u306eSQL\u30b5\u30fc\u30d0\u30fc\u30a2\u30af\u30bb\u30b9\u6a29"}),"\n",(0,s.jsxs)(t.p,{children:["doc.4d.com \u306e ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.ja.html",children:(0,s.jsx)(t.strong,{children:"4D SQL\u30b5\u30fc\u30d0\u306e\u8a2d\u5b9a"})})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"SQL\u30a8\u30f3\u30b8\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3",children:"SQL\u30a8\u30f3\u30b8\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\n",(0,s.jsxs)(t.p,{children:["doc.4d.com \u306e ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SQL-engine-implementation.300-5680725.ja.html",children:(0,s.jsx)(t.strong,{children:"SQL\u30a8\u30f3\u30b8\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3"})})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,o={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:a,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(296540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);