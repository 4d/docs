/*! For license information please see c907b11f.a782744c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82070],{871414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(474848),o=t(28453);const s={id:"expand",title:"$expand"},i=void 0,d={id:"REST/expand",title:"$expand",description:"\u753b\u50cf\u5c5e\u6027\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30c1\u30e3\u30fc\u3092\u5c55\u958b\u3057\u307e\u3059 (\u4f8b: Employee(1)/photo?$imageformat=best&$expand=photo)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/ja/20-R5/REST/expand",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/ja/20-R5/REST/entityset"},next:{title:"$filter",permalink:"/docs/ja/20-R5/REST/filter"}},a={},c=[{value:"\u753b\u50cf\u5c5e\u6027\u306e\u8868\u793a",id:"\u753b\u50cf\u5c5e\u6027\u306e\u8868\u793a",level:2},{value:"BLOB\u5c5e\u6027\u306e\u30c7\u30a3\u30b9\u30af\u4fdd\u5b58",id:"blob\u5c5e\u6027\u306e\u30c7\u30a3\u30b9\u30af\u4fdd\u5b58",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u753b\u50cf\u5c5e\u6027\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30c1\u30e3\u30fc\u3092\u5c55\u958b\u3057\u307e\u3059 (",(0,r.jsx)(n.em,{children:"\u4f8b"}),": ",(0,r.jsx)(n.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,r.jsx)(n.br,{}),"\n\u307e\u305f\u306f ",(0,r.jsx)(n.br,{}),"\n\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b BLOB\u5c5e\u6027\u3092\u5c55\u958b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4e92\u63db\u6027\u306b\u95a2\u3059\u308b\u6ce8\u8a18"}),": \u4e92\u63db\u6027\u306e\u305f\u3081\u3001$expand \u306f\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u5c5e\u6027\u3092\u5c55\u958b\u3059\u308b\u306e\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059 (",(0,r.jsx)(n.em,{children:"\u4f8b"}),": ",(0,r.jsx)(n.code,{children:"Company(1)?$expand=staff"})," \u307e\u305f\u306f ",(0,r.jsx)(n.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),")\u3002 \u3057\u304b\u3057\u306a\u304c\u3089\u3001\u3053\u308c\u3089\u306e\u5834\u5408\u306b\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/REST/attributes",children:(0,r.jsx)(n.code,{children:"$attributes"})})," \u3092\u4f7f\u7528\u3059\u308b\u306e\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u753b\u50cf\u5c5e\u6027\u306e\u8868\u793a",children:"\u753b\u50cf\u5c5e\u6027\u306e\u8868\u793a"}),"\n",(0,r.jsx)(n.p,{children:"\u753b\u50cf\u5c5e\u6027\u306e\u5168\u4f53\u50cf\u3092\u8868\u793a\u3055\u305b\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(n.p,{children:["\u753b\u50cf\u5f62\u5f0f\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/REST/imageformat",children:(0,r.jsx)(n.code,{children:"$imageformat"})})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002 \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/REST/version",children:(0,r.jsx)(n.code,{children:"$version"})})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"blob\u5c5e\u6027\u306e\u30c7\u30a3\u30b9\u30af\u4fdd\u5b58",children:"BLOB\u5c5e\u6027\u306e\u30c7\u30a3\u30b9\u30af\u4fdd\u5b58"}),"\n",(0,r.jsx)(n.p,{children:'\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b BLOB \u3092\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58\u3059\u308b\u306b\u306f\u3001$binary \u306b "true" \u3092\u6e21\u3059\u3053\u3068\u3067\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u3051\u307e\u3059:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);