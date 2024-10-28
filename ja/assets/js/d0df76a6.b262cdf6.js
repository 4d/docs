"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46291],{80305:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(474848),c=n(28453);const a={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/flush-cache",title:"FLUSH CACHE",description:"FLUSH CACHE {( size | * )}",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/flush-cache.md",sourceDirName:"commands-legacy",slug:"/commands/flush-cache",permalink:"/docs/ja/commands/flush-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Cache info",permalink:"/docs/ja/commands/cache-info"},next:{title:"Get adjusted blobs cache priority",permalink:"/docs/ja/commands/get-adjusted-blobs-cache-priority"}},i={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"FLUSH CACHE"})," {( size | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u5f15\u6570"}),(0,t.jsx)(s.th,{children:"\u578b"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"size | *"}),(0,t.jsx)(s.td,{children:"\u5b9f\u6570, \u6f14\u7b97\u5b50"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"\u89e3\u653e\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30b5\u30a4\u30ba(\u30d0\u30a4\u30c8\u5358\u4f4d)\u3001* \u6307\u5b9a\u6642\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea\u3092\u5b8c\u5168\u306b\u7a7a\u306b\u3059\u308b"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsx)(s.p,{children:"FLUSH CACHE \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5373\u5ea7\u306b\u30c7\u30fc\u30bf\u30d0\u30c3\u30d5\u30a1\u306e\u5185\u5bb9\u3092\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u3059\u3079\u3066\u306e\u5909\u66f4\u3092\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea\u306f\u305d\u306e\u307e\u307e\u306e\u72b6\u614b\u3067\u6b8b\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u305d\u306e\u5f8c\u306e\u8aad\u307f\u51fa\u3057\u30a2\u30af\u30bb\u30b9\u306b\u304a\u3044\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306f\u5f15\u304d\u7d9a\u304d\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u3057\u3066\u3001\u305d\u306e\u4e2d\u8eab\u3092\u5909\u66f4\u3059\u308b\u5f15\u6570\u3092\u6e21\u3059\u4e8b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"*"})," \u3092\u6e21\u3059\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea\u5168\u4f53\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"size"})," \u5024\u3092\u6e21\u3059\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4fdd\u5b58\u3057\u305f\u306e\u3061\u3001\u6307\u5b9a\u3057\u305f\u5024\u306e\u30d0\u30a4\u30c8\u6570\u3060\u3051\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u89e3\u653e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u6ce8:"})," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u3078\u306e\u5f15\u6570\u306e\u53d7\u3051\u6e21\u3057\u306f\u30c6\u30b9\u30c8\u76ee\u7684\u3067\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3067\u3059\u3002\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001\u904b\u7528\u74b0\u5883\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30c7\u30fc\u30bf\u306e\u5909\u66f4\u5185\u5bb9\u306f 4D\u306b\u3088\u3063\u3066\u5b9a\u671f\u7684\u306b\u4fdd\u5b58\u3055\u308c\u308b\u305f\u3081\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u901a\u5e38\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u4e00\u822c\u7684\u306b\u306f\u3001\u74b0\u5883\u8a2d\u5b9a\u306e ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/ja/settings/database/",children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30da\u30fc\u30b8"})," \u306b\u3042\u308b\u3001",(0,t.jsx)(s.strong,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58: X\u79d2(\u5206)\u6bce"}),"\u30aa\u30d7\u30b7\u30e7\u30f3 (\u4fdd\u5b58\u306e\u983b\u5ea6\u3092\u6307\u5b9a) \u3092\u4f7f\u7528\u3057\u3066\u3001\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30e9\u30c3\u30b7\u30e5\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059 (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e20\u79d2\u304c\u8a2d\u5b9a\u3068\u3057\u3066\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059)\u3002\u307e\u305fCache flush periodicity \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092 ",(0,t.jsx)(s.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," \u3042\u308b\u3044\u306f ",(0,t.jsx)(s.a,{href:"/docs/ja/commands/get-database-parameter",children:"Get database parameter"})," \u30b3\u30de\u30f3\u30c9\u3067\u8a2d\u5b9a\u30fb\u53d6\u5f97\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/ja/commands/get-database-parameter",children:"Get database parameter"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>r});var t=n(296540);const c={},a=t.createContext(c);function d(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);