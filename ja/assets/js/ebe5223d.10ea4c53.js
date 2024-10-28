"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13525],{539142:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=d(474848),s=d(28453);const o={id:"is-record-loaded",title:"Is record loaded",slug:"/commands/is-record-loaded",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/is-record-loaded",title:"Is record loaded",description:"Is record loaded {( aTable )} -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-record-loaded.md",sourceDirName:"commands-legacy",slug:"/commands/is-record-loaded",permalink:"/docs/ja/commands/is-record-loaded",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-record-loaded.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"is-record-loaded",title:"Is record loaded",slug:"/commands/is-record-loaded",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is new record",permalink:"/docs/ja/commands/is-new-record"},next:{title:"Modified record",permalink:"/docs/ja/commands/modified-record"}},l={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is record loaded"})," {( ",(0,r.jsx)(n.em,{children:"aTable"})," )} -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30ec\u30b3\u30fc\u30c9\u3092\u691c\u67fb\u3059\u308b\u30c6\u30fc\u30d6\u30eb \u307e\u305f\u306f \u7701\u7565\u6642\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30c6\u30fc\u30d6\u30eb"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True: \u30ec\u30b3\u30fc\u30c9\u306f\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b \u305d\u3046\u3067\u306a\u3051\u308c\u3070False"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is record loaded"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,r.jsx)(n.em,{children:"aTable"}),"\u306e\u30ab\u30ec\u30f3\u30c8\u30ec\u30b3\u30fc\u30c9\u304c\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u5185\u306b\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308c\u3070",(0,r.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server"}),": \u539f\u7406\u7684\u306b\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u304c\u81ea\u52d5\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30ea\u30ec\u30fc\u30c8\u5148\u30c6\u30fc\u30d6\u30eb\u306e\u30ab\u30ec\u30f3\u30c8\u30ec\u30b3\u30fc\u30c9\u306f\u81ea\u52d5\u3067\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059 (",(0,r.jsx)(n.em,{children:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"})," \u53c2\u7167)\u3002\u3057\u304b\u3057 4D Server \u306f\u6700\u9069\u5316\u306e\u305f\u3081\u3001\u30ea\u30ec\u30fc\u30c8\u30ec\u30b3\u30fc\u30c9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u8aad\u307f\u8fbc\u307f\u3084\u7de8\u96c6\u306a\u3069\u306e\u5fc5\u8981\u306a\u3068\u304d\u306b\u3060\u3051\u3001\u3053\u308c\u3089\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u30e2\u30fc\u30c9\u3067\u306f ",(0,r.jsx)(n.strong,{children:"Is record loaded"})," \u30b3\u30de\u30f3\u30c9\u304c True \u3092\u8fd4\u3059\u3088\u3046\u306a\u5834\u5408\u3067\u3082\u3001\u30ea\u30e2\u30fc\u30c8\u30e2\u30fc\u30c9\u3067\u306f\u540c\u30b3\u30de\u30f3\u30c9\u306f False \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:'\u201c\u6b21\u30ec\u30b3\u30fc\u30c9\u201d\u307e\u305f\u306f\u201c\u524d\u30ec\u30b3\u30fc\u30c9\u201d\u306e\u81ea\u52d5\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u304b\u308f\u308a\u306b\u3001\u3053\u308c\u30892\u3064\u306e\u30dc\u30bf\u30f3\u7528\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3092\u66f8\u3044\u3066\u3001\u3053\u308c\u3089\u306e\u52d5\u4f5c\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"\u6b21\u3078"\u30dc\u30bf\u30f3\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30ec\u30b3\u30fc\u30c9\u304c\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u5f8c\u306e\u30ec\u30b3\u30fc\u30c9\u3067\u3042\u308c\u3070\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u3001"\u524d\u3078"\u30dc\u30bf\u30f3\u306f\u3001\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u30ec\u30b3\u30fc\u30c9\u3067\u3042\u308c\u3070\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u5f8c\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// \u201c\u524d\u3078\u201d \u30dc\u30bf\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9 (\u81ea\u52d5\u30a2\u30af\u30b7\u30e7\u30f3\u306a\u3057)\n\xa0If(Form event code=On Clicked)\xa0//v17 \u4ee5\u524d\u3067\u306fForm event \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\n\xa0\xa0\xa0\xa0PREVIOUS RECORD([Group])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Group])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Group];Records in selection([Group]))\n\xa0\xa0//\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u5f8c\u306e\u30ec\u30b3\u30fc\u30c9\u306b\u79fb\u52d5\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// \u201c\u6b21\u3078\u201d \u30dc\u30bf\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9 (\u81ea\u52d5\u30a2\u30af\u30b7\u30e7\u30f3\u306a\u3057)\n\xa0If(Form event code=On Clicked)\xa0//v17 \u4ee5\u524d\u3067\u306fForm event \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\n\xa0\xa0\xa0\xa0NEXT RECORD([Group])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Group])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Groups];1)\n\xa0\xa0//\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u30ec\u30b3\u30fc\u30c9\u306b\u79fb\u52d5\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>c});var r=d(296540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);