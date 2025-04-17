"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87399"],{98879:function(n,e,t){t.r(e),t.d(e,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"REST/format","title":"$format","description":"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u30C7\u30FC\u30BF\u3092\u8FD4\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059 (\u4F8B: $format=looker)\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/REST/$format.md","sourceDirName":"REST","slug":"/REST/format","permalink":"/docs/ja/REST/format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"format","title":"$format"},"sidebar":"docs","previous":{"title":"$filter","permalink":"/docs/ja/REST/filter"},"next":{"title":"$imageformat","permalink":"/docs/ja/REST/imageformat"}}'),s=t("785893"),o=t("250065");let a={id:"format",title:"$format"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function d(n){let e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u30C7\u30FC\u30BF\u3092\u8FD4\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059 (",(0,s.jsx)(e.em,{children:"\u4F8B:"})," ",(0,s.jsx)(e.code,{children:"$format=looker"}),")\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u304C\u30C7\u30FC\u30BF\u3092\u8FD4\u3059\u5F62\u5F0F\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F62\u5F0F"}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"json"})}),(0,s.jsx)(e.td,{children:"\u6A19\u6E96\u306E 4D REST \u30B5\u30FC\u30D0\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8 (\u30C7\u30D5\u30A9\u30EB\u30C8)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"looker"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"})," \u306B\u6E96\u62E0\u3057\u305F JSON\u5F62\u5F0F\u3002"]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,s.jsx)(e.p,{children:"REST\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30B9\u30AD\u30FC\u30DE\u3068\u30C7\u30FC\u30BF\u3092\u542B\u3080 JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      	1,\n      	"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      	2,\n      	"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      	3,\n      	"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);