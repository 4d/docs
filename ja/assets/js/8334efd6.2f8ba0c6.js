"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65483"],{16826:function(n,e,t){t.r(e),t.d(e,{default:()=>_,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"REST/clean","title":"$clean","description":"\u65E2\u5B58\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u57FA\u3065\u3044\u3066\u3001\u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u9664\u3044\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u65B0\u898F\u4F5C\u6210\u3057\u307E\u3059 (\u4F8B: $clean=true)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/$clean.md","sourceDirName":"REST","slug":"/REST/clean","permalink":"/docs/ja/REST/clean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24clean.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clean","title":"$clean"},"sidebar":"docs","previous":{"title":"$binary","permalink":"/docs/ja/REST/binary"},"next":{"title":"$compute","permalink":"/docs/ja/REST/compute"}}'),s=t("785893"),r=t("250065");let l={id:"clean",title:"$clean"},c=void 0,d={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function a(n){let e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u65E2\u5B58\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u57FA\u3065\u3044\u3066\u3001\u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u9664\u3044\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u65B0\u898F\u4F5C\u6210\u3057\u307E\u3059 (\u4F8B: ",(0,s.jsx)(e.code,{children:"$clean=true"}),")"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"$clean"}),"\u306F\u3001",(0,s.jsx)(e.code,{children:"entitySetID"})," \u3068\u540C\u3058\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u542B\u3080\u65B0\u3057\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u304C\u3001\u305D\u306E\u969B\u306B\u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u53C2\u7167\u304C\u3042\u308C\u3070\u53D6\u308A\u9664\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3042\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C ",(0,s.jsx)(e.a,{href:"/docs/ja/REST/method#methoddelete",children:"\u524A\u9664"})," \u3055\u308C\u305F\u5834\u5408\u3001\u65E2\u5B58\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u3053\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u53C2\u7167\u306F ",(0,s.jsx)(e.em,{children:"undefined"}),' \u306B\u306A\u308A\u307E\u3059\u304C\u3001\u53C2\u7167\u305D\u306E\u3082\u306E\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u307E\u305F\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E "count" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3082\u542B\u307E\u308C\u305F\u307E\u307E\u3067\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u5BFE\u3057\u3066 ',(0,s.jsx)(e.code,{children:"$clean"})," \u3092\u547C\u3073\u51FA\u3059\u3068\u3001",(0,s.jsx)(e.em,{children:"undefined"})," \u306A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u53C2\u7167\u304C\u542B\u307E\u308C\u306A\u3044\u3001\u6700\u65B0\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u65B0\u898F\u306B\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"$clean"})," \u306E\u5F8C\u306B\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/REST/method#methodentityset",children:(0,s.jsx)(e.code,{children:"$method=entityset"})})," \u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30B5\u30FC\u30D0\u30FC\u4E0A\u306B\u65B0\u3057\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'GET /rest/Speciality?$filter="ID<=3"&$method=entityset'})}),"\n",(0,s.jsxs)(e.p,{children:["3\u3064\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u542B\u3080\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8 ",(0,s.jsx)(e.code,{children:"DF6903FB5879404A9A818884CFC6F62A"})," \u3092\u53D6\u5F97\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "2",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 2,\n      "name": "Otolaryngology",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[2]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"KEY=2"})," \u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u524A\u9664\u3057 (",(0,s.jsx)(e.a,{href:"/docs/ja/REST/method#methoddelete",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u524A\u9664"})," \u53C2\u7167)\u3001\u6B21\u306B\u4E0B\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3059:"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A"})}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u306F\u3001\u307E\u3060 3\u3064\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u5FDC\u3059\u308B\u3001\u672A\u5B9A\u7FA9\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u3042\u308A\u307E\u3059 (__STAMP = 0):"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__STAMP": 0\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3059\u308B\u3068:"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(e.p,{children:'\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8 DF6903FB5879404A9A818884CFC6F62A \u304C "\u6383\u9664" \u3055\u308C\u3001\u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u542B\u307E\u306A\u3044\u65B0\u3057\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8 (\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8D7BFBC49375B4FE5A94CDD17AA535F73) \u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 2,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    }\n  ],\n  "__SENT": 2\n}\n'})})]})}function _(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);