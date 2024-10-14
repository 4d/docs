"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33814],{281256:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=r(474848),t=r(28453);const o={id:"orderby",title:"$orderby"},d=void 0,c={id:"REST/orderby",title:"$orderby",description:'\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3068\u4e26\u3079\u66ff\u3048\u9806\u306b\u57fa\u3065\u3044\u3066\u3001\u8fd4\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4e26\u3079\u66ff\u3048\u307e\u3059 (\u4f8b: $orderby="lastName desc, salary asc")',source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/ja/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/ja/REST/method"},next:{title:"$querypath",permalink:"/docs/ja/REST/querypath"}},i={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3068\u4e26\u3079\u66ff\u3048\u9806\u306b\u57fa\u3065\u3044\u3066\u3001\u8fd4\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4e26\u3079\u66ff\u3048\u307e\u3059 (",(0,s.jsx)(n.em,{children:"\u4f8b"}),": ",(0,s.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$orderby"})," \u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4e26\u3079\u66ff\u3048\u307e\u3059\u3002 \u4e26\u3079\u66ff\u3048\u306e\u57fa\u6e96\u3068\u3059\u308b\u5404\u5c5e\u6027\u306b\u3064\u3044\u3066\u3001\u4e26\u3079\u66ff\u3048\u9806\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,s.jsx)(n.code,{children:"ASC"})," ( ",(0,s.jsx)(n.code,{children:"asc"}),") \u304c\u6607\u9806\u3001",(0,s.jsx)(n.code,{children:"DESC"})," (",(0,s.jsx)(n.code,{children:"desc"}),") \u304c\u964d\u9806\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30c7\u30fc\u30bf\u306f\u6607\u9806\u306b\u4e26\u3079\u66ff\u3048\u3089\u308c\u307e\u3059\u3002 \u5c5e\u6027\u3092\u8907\u6570\u6307\u5b9a\u3059\u308b\u306b\u306f\u3001\u30ab\u30f3\u30de\u533a\u5207\u308a\u306b\u3057\u307e\u3059\u3002",(0,s.jsx)(n.em,{children:"\u4f8b"}),": ",(0,s.jsx)(n.code,{children:'$orderby="lastName desc, firstName asc"'}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u53d6\u5f97\u3068\u540c\u6642\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4e26\u3079\u66ff\u3048\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u306e\u4f8b\u3067\u306f\u3001lastName\u5c5e\u6027\u3092\u57fa\u6e96\u306b\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30c3\u30c8\u3092\u6607\u9806\u306b\u4e26\u3079\u66ff\u3048\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7d50\u679c"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u7d9a\u304d\u307e\u3059\n    ]\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(296540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);