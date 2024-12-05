"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7804"],{134782:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"REST/querypath","title":"$querypath","description":"4D Server \u306B\u3088\u3063\u3066\u5B9F\u969B\u306B\u5B9F\u884C\u3055\u308C\u305F\u30AF\u30A8\u30EA\u3092\u8FD4\u3057\u307E\u3059 (\u4F8B: $querypath=true)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/$querypath.md","sourceDirName":"REST","slug":"/REST/querypath","permalink":"/docs/ja/REST/querypath","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"querypath","title":"$querypath"},"sidebar":"docs","previous":{"title":"$orderby","permalink":"/docs/ja/REST/orderby"},"next":{"title":"$queryplan","permalink":"/docs/ja/REST/queryplan"}}'),s=r("785893"),d=r("250065");let i={id:"querypath",title:"$querypath"},c=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["4D Server \u306B\u3088\u3063\u3066\u5B9F\u969B\u306B\u5B9F\u884C\u3055\u308C\u305F\u30AF\u30A8\u30EA\u3092\u8FD4\u3057\u307E\u3059 (",(0,s.jsx)(n.em,{children:"\u4F8B"}),": ",(0,s.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$querypath"})," \u306F\u30014D Server \u306B\u3088\u3063\u3066\u5B9F\u969B\u306B\u5B9F\u884C\u3055\u308C\u305F\u30AF\u30A8\u30EA\u3092\u8FD4\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30AF\u30A8\u30EA\u306E\u4E00\u90E8\u304C\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u8FD4\u3055\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u6B8B\u308A\u306E\u30AF\u30A8\u30EA\u306F\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093\u3002 ",(0,s.jsx)(n.code,{children:"$querypath"})," \u3067\u78BA\u8A8D\u3055\u308C\u308B\u3068\u304A\u308A\u3001\u30AF\u30A8\u30EA\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u6700\u9069\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30AF\u30A8\u30EA\u30D1\u30B9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,s.jsx)(n.a,{href:"/docs/ja/REST/genInfo#querypath-%E3%81%A8-queryplan",children:"queryPlan \u3068 queryPath"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5B9F\u884C\u3055\u308C\u305F\u30AF\u30A8\u30EA\u3092\u5B9A\u7FA9\u3059\u308B\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u305F steps \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:'\u5B9F\u969B\u306B\u5B9F\u884C\u3055\u308C\u305F\u30AF\u30A8\u30EA\u3001\u307E\u305F\u306F\u8907\u6570\u30B9\u30C6\u30C3\u30D7\u306E\u5834\u5408\u306F "AND"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"\u30AF\u30A8\u30EA\u306E\u5B9F\u884C\u306B\u8981\u3057\u305F\u6642\u9593 (\u30DF\u30EA\u79D2\u5358\u4F4D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordsfounds"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u691C\u51FA\u4EF6\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"steps"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u30AF\u30A8\u30EA\u30D1\u30B9\u306E\u5F8C\u7D9A\u30B9\u30C6\u30C3\u30D7\u3092\u5B9A\u7FA9\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30AF\u30A8\u30EA\u3092\u6E21\u3057\u305F\u5834\u5408:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3068\u3001\u5F8C\u8FF0\u306E\u30AF\u30A8\u30EA\u30D1\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u521D\u306E\u30AF\u30A8\u30EA\u304C\u4E00\u3064\u4EE5\u4E0A\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u8FD4\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u4E8C\u3064\u3081\u306E\u30AF\u30A8\u30EA\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u30AF\u30A8\u30EA\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"\u5C11\u306A\u304F\u3068\u30821\u4EF6\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3068\u3001\u5F8C\u8FF0\u306E\u30AF\u30A8\u30EA\u30D1\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);