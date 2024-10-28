"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15553],{885170:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(474848),s=t(28453);const o={id:"format",title:"$format"},a=void 0,i={id:"REST/format",title:"$format",description:"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u30c7\u30fc\u30bf\u3092\u8fd4\u3059\u305f\u3081\u306e\u7279\u5b9a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059 (\u4f8b: $format=looker)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/REST/$format.md",sourceDirName:"REST",slug:"/REST/format",permalink:"/docs/ja/20-R6/REST/format",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"format",title:"$format"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/ja/20-R6/REST/filter"},next:{title:"$imageformat",permalink:"/docs/ja/20-R6/REST/imageformat"}},c={},d=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function l(n){const e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u30c7\u30fc\u30bf\u3092\u8fd4\u3059\u305f\u3081\u306e\u7279\u5b9a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059 (",(0,r.jsx)(e.em,{children:"\u4f8b:"})," ",(0,r.jsx)(e.code,{children:"$format=looker"}),")\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u304c\u30c7\u30fc\u30bf\u3092\u8fd4\u3059\u5f62\u5f0f\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5f62\u5f0f"}),(0,r.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"json"})}),(0,r.jsx)(e.td,{children:"\u6a19\u6e96\u306e 4D REST \u30b5\u30fc\u30d0\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8 (\u30c7\u30d5\u30a9\u30eb\u30c8)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"looker"})}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"})," \u306b\u6e96\u62e0\u3057\u305f JSON\u5f62\u5f0f\u3002"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,r.jsx)(e.p,{children:"REST\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30b9\u30ad\u30fc\u30de\u3068\u30c7\u30fc\u30bf\u3092\u542b\u3080 JSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      \t1,\n      \t"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      \t2,\n      \t"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      \t3,\n      \t"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function a(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);