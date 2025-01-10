"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14446"],{683086:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/json-validate","title":"JSON Validate","description":"JSON Validate ( vJson ; vSchema ) : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-validate.md","sourceDirName":"commands-legacy","slug":"/commands/json-validate","permalink":"/docs/ja/commands/json-validate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-validate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-validate","title":"JSON Validate","slug":"/commands/json-validate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON TO SELECTION","permalink":"/docs/ja/commands/json-to-selection"},"next":{"title":"Selection to JSON","permalink":"/docs/ja/commands/selection-to-json"}}'),r=s("785893"),t=s("250065");let i={id:"json-validate",title:"JSON Validate",slug:"/commands/json-validate",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON Validate"})," ( ",(0,r.jsx)(e.em,{children:"vJson"})," ; ",(0,r.jsx)(e.em,{children:"vSchema"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vJson"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u8A55\u4FA1\u3059\u308BJSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vSchema"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8A55\u4FA1\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308BJSON\u30B9\u30AD\u30FC\u30DE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u8A55\u4FA1\u30B9\u30C6\u30FC\u30BF\u30B9\u3042\u308B\u3044\u306F\u30A8\u30E9\u30FC(\u3042\u308C\u3070)"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON Validate"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"vJson"})," \u5F15\u6570\u306B\u6E21\u3055\u308C\u305FJSON \u30B3\u30F3\u30C6\u30F3\u30C4\u3092",(0,r.jsx)(e.em,{children:"vSchema"})," \u5F15\u6570\u306B\u6E21\u3057\u305FJSON \u30B9\u30AD\u30FC\u30DE\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30EB\u30FC\u30EB\u306B\u5BFE\u3057\u3066\u306E\u9069\u5408\u6027\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002JSON \u304C\u5411\u3053\u3046\u3067\u3042\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u306A\u8AAC\u660E\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"vJson"})," \u5F15\u6570\u306B\u306F\u8A55\u4FA1\u3092\u3057\u305F\u3044JSON \u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u542B\u3080JSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," JSON \u6587\u5B57\u5217\u3092\u8A55\u4FA1\u3059\u308B\u3053\u3068\u3068\u306F\u3001JSON \u30B9\u30AD\u30FC\u30DE\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30EB\u30FC\u30EB\u306B\u5247\u3063\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u3059\u3002JSON \u304C\u6574\u5F62\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u3068\u306F\u5225\u3067\u3001\u3053\u308C\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"vSchema"})," \u5F15\u6570\u306B\u306F\u8A55\u4FA1\u306B\u4F7F\u7528\u3059\u308BJSON \u30B9\u30AD\u30FC\u30DE\u3092\u6E21\u3057\u307E\u3059\u3002JSON \u30B9\u30AD\u30FC\u30DE\u3092\u4F5C\u6210\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.a,{href:"http://json-schema.org/",children:"json-schema.org"})," \u306EWeb \u30B5\u30A4\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," JSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8A55\u4FA1\u3059\u308B\u305F\u3081\u306B\u306F\u30014D\u306F",(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00",children:"JSON Schema Validation"})," \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u8AAC\u660E\u3055\u308C\u3066\u3044\u308B\u898F\u7BC4\u3092\u4F7F\u7528\u3057\u307E\u3059(\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u4E0B\u66F8\u304D\u3067\u3042\u308A\u3001\u5C06\u6765\u5909\u5316\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059)\u30024D\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u5B9F\u88C5\u306F\u3001\u3053\u306E\u4E0B\u66F8\u304D\u306E\u30D0\u30FC\u30B8\u30E7\u30F34 \u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["JSON \u30B9\u30AD\u30FC\u30DE\u304C\u6709\u52B9\u3067\u306A\u3044\u5834\u5408\u30014D \u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/null",children:"Null"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u3001On error call \u30E1\u30BD\u30C3\u30C9\u3067\u30AD\u30E3\u30C3\u30C1\u53EF\u80FD\u306A\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON Validate"})," \u306F\u8A55\u4FA1\u306E\u72B6\u614B\u3092\u63D0\u4F9B\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u540D"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u578B"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u8A73\u7D30"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"success"})}),(0,r.jsx)(e.td,{children:"\u30D6\u30FC\u30EB"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"vJson"})," \u304C\u6709\u52B9\u3067\u3042\u308C\u3070True\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFalse \u3067\u3059\u3002False \u306E\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"errors"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3082\u540C\u6642\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"errors"})}),(0,r.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"vJson"})," \u5F15\u6570\u304C\u8A55\u4FA1\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306E\u30A8\u30E9\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E00\u89A7\u3067\u3059(\u4EE5\u4E0B\u53C2\u7167)\u3002"]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"errors"})," \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5404\u30A8\u30E9\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u540D"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u578B"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u8A73\u7D30"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"code"})}),(0,r.jsx)(e.td,{children:"\u6570\u5024"}),(0,r.jsx)(e.td,{children:"\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"jsonPath"})}),(0,r.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"vJson"})," \u5185\u3067\u8A55\u4FA1\u3067\u304D\u306A\u304B\u3063\u305FJSON \u30D1\u30B9"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"line"})}),(0,r.jsx)(e.td,{children:"\u6570\u5024"}),(0,r.jsxs)(e.td,{children:["JSON \u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u30A8\u30E9\u30FC\u306E\u884C\u6570\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306FJSON \u304C",(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u306B ",(0,r.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u72B6\u614B\u3067\u89E3\u6790\u3055\u308C\u305F\u5834\u5408\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u7701\u7565\u3055\u308C\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"message"})}),(0,r.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,r.jsx)(e.td,{children:"\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"offset"})}),(0,r.jsx)(e.td,{children:"\u6570\u5024"}),(0,r.jsxs)(e.td,{children:["JSON \u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u30A8\u30E9\u30FC\u306E\u884C\u30AA\u30D5\u30BB\u30C3\u30C8\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306FJSON \u304C",(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u306B ",(0,r.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u72B6\u614B\u3067\u89E3\u6790\u3055\u308C\u305F\u5834\u5408\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u7701\u7565\u3055\u308C\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.em,{children:"schemaPaths"})}),(0,r.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,r.jsx)(e.td,{children:"\u8A55\u4FA1\u30A8\u30E9\u30FC\u306E\u539F\u56E0\u3068\u306A\u3063\u305F\u30B9\u30AD\u30FC\u30DE\u5185\u306EJSON \u30D1\u30B9"})]})]})]}),"\n",(0,r.jsx)(e.h5,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u3063\u3066\u304F\u308B\u53EF\u80FD\u6027\u3042\u308B\u30A8\u30E9\u30FC\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30B3\u30FC\u30C9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"JSON\u30AD\u30FC\u30EF\u30FC\u30C9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u88DC\u8DB3"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"multipleOf"}),(0,r.jsx)(e.td,{children:"'multipleOf' \u30AD\u30FC\u306B\u5BFE\u3057\u3066\u306E\u691C\u8A3C\u4E2D\u306E\u30A8\u30E9\u30FC"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"maximum"}),(0,r.jsx)(e.td,{children:'\u63D0\u4F9B\u3055\u308C\u305F\u5024\u306F\u30B9\u30AD\u30FC\u30DE ("{s1}")\u5185\u3067\u306E\u6307\u5B9A\u3092\u8D85\u3048\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"exclusiveMaximum"}),(0,r.jsx)(e.td,{children:'\u63D0\u4F9B\u3055\u308C\u305F\u5024\u306F\u30B9\u30AD\u30FC\u30DE ("{s1}")\u5185\u3067\u306E\u6307\u5B9A\u672A\u6E80\u3067\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:"minimum"}),(0,r.jsx)(e.td,{children:'\u63D0\u4F9B\u3055\u308C\u305F\u5024\u306F\u30B9\u30AD\u30FC\u30DE ("{s1}")\u5185\u3067\u306E\u6307\u5B9A\u3092\u4E0B\u56DE\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:"exclusiveMinimum"}),(0,r.jsx)(e.td,{children:'\u63D0\u4F9B\u3055\u308C\u305F\u5024\u306F\u30B9\u30AD\u30FC\u30DE ("{s1}")\u5185\u3067\u306E\u6307\u5B9A\u3092\u8D85\u3048\u3066\u3044\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:"maxLength"}),(0,r.jsx)(e.td,{children:"\u6587\u5B57\u5217\u304C\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u9577\u3044\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"minLength"}),(0,r.jsx)(e.td,{children:"\u6587\u5B57\u5217\u304C\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u77ED\u3044\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"9"}),(0,r.jsx)(e.td,{children:"pattern"}),(0,r.jsx)(e.td,{children:'\u6587\u5B57\u5217"{s1}" \u306F\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u30D1\u30BF\u30FC\u30F3{s2}\u306B\u5408\u81F4\u3057\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"10"}),(0,r.jsx)(e.td,{children:"additionalItems"}),(0,r.jsx)(e.td,{children:"\u914D\u5217\u306E\u691C\u8A3C\u4E2D\u306E\u30A8\u30E9\u30FC\u3002JSON\u306B\u306F\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u591A\u3044\u8981\u7D20\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"11"}),(0,r.jsx)(e.td,{children:"maxItems"}),(0,r.jsx)(e.td,{children:"\u914D\u5217\u306B\u306F\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u591A\u3044\u9805\u76EE\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"12"}),(0,r.jsx)(e.td,{children:"minItems"}),(0,r.jsx)(e.td,{children:"\u914D\u5217\u306B\u306F\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u5C11\u306A\u3044\u9805\u76EE\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"13"}),(0,r.jsx)(e.td,{children:"uniqueItems"}),(0,r.jsx)(e.td,{children:'\u914D\u5217\u306E\u691C\u8A3C\u4E2D\u306E\u30A8\u30E9\u30FC\u3002\u8981\u7D20\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002"{s1}"\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u3059\u3067\u306B\u914D\u5217\u5185\u306B\u3042\u308A\u307E\u3059\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"14"}),(0,r.jsx)(e.td,{children:"maxProperties"}),(0,r.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u6570\u304C\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u591A\u3044\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"15"}),(0,r.jsx)(e.td,{children:"minProperties"}),(0,r.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u6570\u304C\u30B9\u30AD\u30FC\u30DE\u3067\u306E\u6307\u5B9A\u3088\u308A\u5C11\u306A\u3044\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"required"}),(0,r.jsx)(e.td,{children:'\u5FC5\u9808\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"{s1}" \u304C\u3042\u308A\u307E\u305B\u3093\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"17"}),(0,r.jsx)(e.td,{children:"additionalProperties"}),(0,r.jsx)(e.td,{children:"\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30B9\u30AD\u30FC\u30DE\u306B\u3088\u3063\u3066\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u30D7\u30ED\u30D1\u30C6\u30A3{s1} \u306F\u524A\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"18"}),(0,r.jsx)(e.td,{children:"dependencies"}),(0,r.jsx)(e.td,{children:'"{s1}" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F"{s2}" \u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5FC5\u8981\u3067\u3059\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"19"}),(0,r.jsx)(e.td,{children:"enum"}),(0,r.jsx)(e.td,{children:"'enum' \u30AD\u30FC\u306B\u5BFE\u3057\u3066\u306E\u691C\u8A3C\u4E2D\u306E\u30A8\u30E9\u30FC\u3002\"{s1}\"\u306F\u30B9\u30AD\u30FC\u30DE\u306A\u3044\u306E\u3069\u306Eenum\u8981\u7D20\u3068\u3082\u5408\u81F4\u3057\u307E\u305B\u3093\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"20"}),(0,r.jsx)(e.td,{children:"type"}),(0,r.jsx)(e.td,{children:"\u4E0D\u6B63\u306A\u578B\u3067\u3059\u3002\u4E88\u671F\u3055\u308C\u308B\u578B\u306F{s1}"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"21"}),(0,r.jsx)(e.td,{children:"oneOf"}),(0,r.jsx)(e.td,{children:"JSON\u306F\u3072\u3068\u3064\u4EE5\u4E0A\u306E\u5024\u3068\u5408\u81F4\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"22"}),(0,r.jsx)(e.td,{children:"oneOf"}),(0,r.jsx)(e.td,{children:"JSON\u306F\u3069\u306E\u5024\u306B\u3082\u5408\u81F4\u3057\u307E\u305B\u3093\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"23"}),(0,r.jsx)(e.td,{children:"not"}),(0,r.jsx)(e.td,{children:"JSON\u306F'not'\u306E\u5024\u306B\u5BFE\u3057\u3066\u6709\u52B9\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"24"}),(0,r.jsx)(e.td,{children:"format."}),(0,r.jsx)(e.td,{children:'\u6587\u5B57\u5217\u304C("{s1}")\u306B\u5408\u81F4\u3057\u307E\u305B\u3093\u3002'})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"JSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B9\u30AD\u30FC\u30DE\u3067\u8A55\u4FA1\u3057\u3066\u3001\u305D\u306E\u8A55\u4FA1\u30A8\u30E9\u30FC\u306E\u4E00\u89A7\u304C\u3042\u308C\u3070\u305D\u308C\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u30A8\u30E9\u30FC\u884C\u3068\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u306B\u4FDD\u5B58\u3057\u305F\u3044\u3068\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $oResult : Object\n\xa0$oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)\n\xa0If($oResult.success)\xa0//\u8A55\u4FA1\u306B\u6210\u529F\n\xa0\xa0\xa0\xa0...\n\xa0Else\xa0//\u8A55\u4FA1\u306B\u5931\u6557\n\xa0\xa0\xa0\xa0var $vLNbErr : Integer\n\xa0\xa0\xa0\xa0var $vTerrLine : Text\n\xa0\xa0\xa0\xa0$vLNbErr:=$oResult.errors.length\xa0///\u30A8\u30E9\u30FC\u306E\u884C\u6570\u3092\u53D6\u5F97\n\xa0\xa0\xa0\xa0ALERT(String($vLNbErr)+" validation error(s) found.")\n\xa0\xa0\xa0\xa0For($i;0;$vLNbErr)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u4F8B\u984C\u3067\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8A18\u6CD5\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u524D\u63D0\u3068\u306A\u3063\u3066\u3044\u307E\u3059(",(0,r.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1456"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);