/*! For license information please see bd213891.fd9edad0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18989],{134116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=t(474848),s=t(28453);const l={id:"vp-get-value",title:"VP Get value"},d=void 0,c={id:"ViewPro/commands/vp-get-value",title:"VP Get value",description:"VP Get value ( rangeObj Object",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-value",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-value",title:"VP Get value"},sidebar:"docs",previous:{title:"VP Get tables",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-tables"},next:{title:"VP Get values",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-values"}},i={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"\u30bb\u30eb\u306e\u5024\u3092\u683c\u7d0d\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP Get value"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30eb\u30ec\u30f3\u30b8\u304b\u3089\u30bb\u30eb\u306e\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u5f15\u6570\u3067\u3001\u5024\u3092\u53d6\u5f97\u3057\u305f\u3044\u30ec\u30f3\u30b8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:"\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f ",(0,r.jsx)(n.code,{children:"value"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3001JS\u65e5\u4ed8\u5024\u306e\u5834\u5408\u306b\u8fd4\u3055\u308c\u308b ",(0,r.jsx)(n.code,{children:"time"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u30ec\u30f3\u30b8\u306e\u5024 (\u305f\u3060\u3057\u6642\u9593\u578b\u3092\u9664\u304f)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u5024\u304c js \u65e5\u4ed8\u578b\u306e\u5834\u5408\u3001\u6642\u9593\u5024 (\u79d2\u5358\u4f4d)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u65e5\u4ed8\u307e\u305f\u306f\u6642\u9593\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u308c\u306f "\u65e5\u4ed8\u6642\u9593"\u3068\u3057\u3066\u6271\u308f\u308c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u88dc\u5b8c\u3055\u308c\u307e\u3059:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6642\u9593\u5024 - \u65e5\u4ed8\u90e8\u5206\u306f DD/MM/YYYY \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30011899\u5e7412\u670830\u65e5 (30/12/1899) \u3068\u3057\u3066\u88dc\u5b8c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u65e5\u4ed8\u5024 - \u6642\u9593\u90e8\u5206\u306f HH:MM:SS \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u3001\u771f\u591c\u4e2d (00:00:00) \u3068\u3057\u3066\u88dc\u5b8c\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306e\u30ec\u30f3\u30b8\u304c\u8907\u6570\u30bb\u30eb\u3042\u308b\u3044\u306f\u8907\u6570\u30ec\u30f3\u30b8\u3092\u542b\u3093\u3067\u3044\u308b\u5834\u5408\u3001\u6700\u521d\u306e\u30bb\u30eb\u306e\u5024\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002 \u30bb\u30eb\u304c\u7a7a\u306e\u5834\u5408\u306b\u306f\u3001\u30b3\u30de\u30f3\u30c9\u306f null \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET VALUE($cell;New object("value";Uppercase($value.value)))\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,l={},a=null,o=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)d.call(n,r)&&!i.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:o,props:l,_owner:c.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(296540);const s={},l=r.createContext(s);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);