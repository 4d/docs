"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24056"],{696693:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u3068\u4E26\u3079\u66FF\u3048\u9806\u306B\u57FA\u3065\u3044\u3066\u3001\u8FD4\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u4E26\u3079\u66FF\u3048\u307E\u3059 (\u4F8B: $orderby=\\"lastName desc, salary asc\\")","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/ja/20-R8/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/ja/20-R8/REST/method"},"next":{"title":"$querypath","permalink":"/docs/ja/20-R8/REST/querypath"}}'),s=r("785893"),o=r("250065");let d={id:"orderby",title:"$orderby"},c=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u3068\u4E26\u3079\u66FF\u3048\u9806\u306B\u57FA\u3065\u3044\u3066\u3001\u8FD4\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u4E26\u3079\u66FF\u3048\u307E\u3059 (",(0,s.jsx)(n.em,{children:"\u4F8B"}),": ",(0,s.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$orderby"})," \u306F REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u4E26\u3079\u66FF\u3048\u307E\u3059\u3002 \u4E26\u3079\u66FF\u3048\u306E\u57FA\u6E96\u3068\u3059\u308B\u5404\u5C5E\u6027\u306B\u3064\u3044\u3066\u3001\u4E26\u3079\u66FF\u3048\u9806\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002",(0,s.jsx)(n.code,{children:"ASC"})," ( ",(0,s.jsx)(n.code,{children:"asc"}),") \u304C\u6607\u9806\u3001",(0,s.jsx)(n.code,{children:"DESC"})," (",(0,s.jsx)(n.code,{children:"desc"}),") \u304C\u964D\u9806\u3067\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30C7\u30FC\u30BF\u306F\u6607\u9806\u306B\u4E26\u3079\u66FF\u3048\u3089\u308C\u307E\u3059\u3002 \u5C5E\u6027\u3092\u8907\u6570\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u3057\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"\u4F8B"}),": ",(0,s.jsx)(n.code,{children:'$orderby="lastName desc, firstName asc"'}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u53D6\u5F97\u3068\u540C\u6642\u306B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u4E26\u3079\u66FF\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u306E\u4F8B\u3067\u306F\u3001lastName\u5C5E\u6027\u3092\u57FA\u6E96\u306B\u3057\u3066\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u6607\u9806\u306B\u4E26\u3079\u66FF\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u7D9A\u304D\u307E\u3059\n    ]\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);