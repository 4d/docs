/*! For license information please see 48cfb479.1f9fb2e1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72330],{845518:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=t(474848),s=t(28453);const d={id:"boolean",title:"\u30d6\u30fc\u30eb"},l=void 0,c={id:"Concepts/boolean",title:"\u30d6\u30fc\u30eb",description:"\u30d6\u30fc\u30eb\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u5909\u6570\u3001\u5f0f\u306f\u3001true\uff08\u771f\uff09\u307e\u305f\u306ffalse\uff08\u507d\uff09\u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/ja/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"boolean",title:"\u30d6\u30fc\u30eb"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/ja/Concepts/blob"},next:{title:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",permalink:"/docs/ja/Concepts/collection"}},i={},o=[{value:"\u30d6\u30fc\u30eb\u95a2\u6570",id:"\u30d6\u30fc\u30eb\u95a2\u6570",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"\u8ad6\u7406\u6f14\u7b97\u5b50",id:"\u8ad6\u7406\u6f14\u7b97\u5b50",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u30d6\u30fc\u30eb\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u5909\u6570\u3001\u5f0f\u306f\u3001true\uff08\u771f\uff09\u307e\u305f\u306ffalse\uff08\u507d\uff09\u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30d6\u30fc\u30eb\u95a2\u6570",children:"\u30d6\u30fc\u30eb\u95a2\u6570"}),"\n",(0,r.jsxs)(e.p,{children:["4D\u306b\u306f\u30d6\u30fc\u30eb\u6f14\u7b97\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u3001\u30d6\u30fc\u30eb\u95a2\u6570\u304c\u3042\u308a\u307e\u3059: ",(0,r.jsx)(e.code,{children:"True"}),", ",(0,r.jsx)(e.code,{children:"False"}),", ",(0,r.jsx)(e.code,{children:"Not"}),"\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u308c\u3089\u306e\u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(e.p,{children:"\u30dc\u30bf\u30f3\u306e\u5024\u306b\u57fa\u3065\u3044\u3066\u3001\u30d6\u30fc\u30eb\u5909\u6570\u306b\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 myButton \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3089 myBoolean \u306b true \u3092\u3001\u30af\u30ea\u30c3\u30af\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070 false \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3068\u30dc\u30bf\u30f3\u5909\u6570\u306e\u5024\u306f1\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" If(myButton=1) // \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3089\n    myBoolean:=True // myBoolean \u3092 true \u306b\u8a2d\u5b9a\n Else // \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\n    myBoolean:=False // myBoolean \u3092 false \u306b\u8a2d\u5b9a\n End if\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u306e\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4e00\u884c\u3067\u66f8\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u8ad6\u7406\u6f14\u7b97\u5b50",children:"\u8ad6\u7406\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(e.p,{children:"4D\u306f\u3001\u30d6\u30fc\u30eb\u5f0f\u306b\u5bfe\u3057\u3066\u6a5f\u80fd\u3059\u308b\u6b21\u306e\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059: \u8ad6\u7406\u7a4d (AND) \u3068\u8ad6\u7406\u548c (OR)\u3002 \u8ad6\u7406\u7a4d (AND) \u306f\u4e21\u65b9\u306e\u5f0f\u304c true \u3067\u3042\u308b\u5834\u5408\u306b true \u3092\u8fd4\u3057\u307e\u3059\u3002 \u8ad6\u7406\u548c (OR) \u306f\u5c11\u306a\u304f\u3068\u3082\u4e00\u65b9\u306e\u5f0f\u304c true \u306e\u6642\u306b true \u3092\u8fd4\u3057\u307e\u3059\u3002 \u6b21\u306e\u8868\u306b\u3001\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u793a\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6f14\u7b97"}),(0,r.jsx)(e.th,{children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9"}),(0,r.jsx)(e.th,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(e.th,{children:"\u5f0f"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AND"}),(0,r.jsx)(e.td,{children:"Boolean & Boolean"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OR"}),(0,r.jsx)(e.td,{children:"Boolean  | Boolean"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u8ad6\u7406\u6f14\u7b97\u5b50 (AND) \u306e\u771f\u507d\u8868\u3092\u793a\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Expr1"}),(0,r.jsx)(e.th,{children:"Expr2"}),(0,r.jsx)(e.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u8ad6\u7406\u6f14\u7b97\u5b50 (OR) \u306e\u771f\u507d\u8868\u3092\u793a\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Expr1"}),(0,r.jsx)(e.th,{children:"Expr2"}),(0,r.jsx)(e.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Tip:"})," \u5f0f1\u3068\u5f0f2\u306e\u6392\u4ed6\u7684\u7d50\u5408\u5b50\u6f14\u7b97\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u6b21\u306e\u8a55\u4fa1\u5f0f\u3092\u4f7f\u7528\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["4D\u30e9\u30f3\u30b2\u30fc\u30b8\u306f\u30d6\u30fc\u30eb\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/operators#%E7%9F%AD%E7%B5%A1%E6%BC%94%E7%AE%97%E5%AD%90",children:"\u77ed\u7d61\u6f14\u7b97\u5b50"})," (",(0,r.jsx)(e.code,{children:"&&"})," \u3068 ",(0,r.jsx)(e.code,{children:"||"}),") \u304a\u3088\u3073 ",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/operators#truthy-%E3%81%A8-falsy",children:"Truthy (\u771f\u7684) \u3068 Falsy (\u507d\u7684)"})," \u306e\u6982\u5ff5\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},221020:(n,e,t)=>{var r=t(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,t){var r,d={},o=null,h=null;for(r in void 0!==t&&(o=""+t),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(h=e.ref),e)l.call(e,r)&&!i.hasOwnProperty(r)&&(d[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===d[r]&&(d[r]=e[r]);return{$$typeof:s,type:n,key:o,ref:h,props:d,_owner:c.current}}e.Fragment=d,e.jsx=o,e.jsxs=o},474848:(n,e,t)=>{n.exports=t(221020)},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(296540);const s={},d=r.createContext(s);function l(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);