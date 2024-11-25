"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19232"],{853198:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>j,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/json-parse-array","title":"JSON PARSE ARRAY","description":"JSON PARSE ARRAY ( jsonString ; array )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-parse-array.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse-array","permalink":"/docs/ja/commands/json-parse-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-parse-array","title":"JSON PARSE ARRAY","slug":"/commands/json-parse-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Parse","permalink":"/docs/ja/commands/json-parse"},"next":{"title":"JSON Resolve pointers","permalink":"/docs/ja/commands/json-resolve-pointers"}}'),a=r("785893"),t=r("250065");let i={id:"json-parse-array",title:"JSON PARSE ARRAY",slug:"/commands/json-parse-array",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"JSON PARSE ARRAY"})," ( ",(0,a.jsx)(e.em,{children:"jsonString"})," ; ",(0,a.jsx)(e.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u5F15\u6570"}),(0,a.jsx)(e.th,{children:"\u578B"}),(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"jsonString"}),(0,a.jsx)(e.td,{children:"Text"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"\u89E3\u6790\u3057\u305F\u3044JSON\u6587\u5B57\u5217"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"array"}),(0,a.jsx)(e.td,{children:"Array"}),(0,a.jsx)(e.td,{children:"\u2190"}),(0,a.jsx)(e.td,{children:"JSON\u6587\u5B57\u5217\u3092\u89E3\u6790\u3057\u305F\u7D50\u679C\u3092\u542B\u3080\u914D\u5217"})]})]})]}),"\n",(0,a.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"JSON PARSE ARRAY"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001JSON\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6587\u5B57\u5217\u306E\u4E2D\u8EAB\u3092\u89E3\u6790\u3057\u3001\u53D6\u308A\u51FA\u3057\u305F\u30C7\u30FC\u30BF\u3092 ",(0,a.jsx)(e.em,{children:"array"})," \u5F15\u6570\u306E\u914D\u5217\u306E\u4E2D\u3078\u3068\u5165\u308C\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FJSON\u30C7\u30FC\u30BF\u3092\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3057\u307E\u3059\u3002 ",(0,a.jsx)(e.a,{href:"/docs/ja/commands/json-stringify-array",children:"JSON Stringify array"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u9006\u306E\u6319\u52D5\u3092\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"jsonString"})," \u5F15\u6570\u306B\u306F\u3001\u89E3\u6790\u3057\u305F\u3044JSON\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u6587\u5B57\u5217\u306F\u6B63\u3057\u3044\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304B\u308C\u3066\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"array"})," \u5F15\u6570\u306B\u306F\u3001\u89E3\u6790\u7D50\u679C\u3092\u53D7\u3051\u53D6\u308B\u3001\u5E0C\u671B\u3059\u308B\u578B\u306E\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6CE8:"})," 4D v16 R4\u4EE5\u964D\u3001",(0,a.jsx)(e.strong,{children:"JSON PARSE ARRAY"})," \u306F\u4E00\u822C\u7684\u306B",(0,a.jsx)(e.strong,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u3092\u8FD4\u3059",(0,a.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u3078\u306E\u547C\u3073\u51FA\u3057\u3067\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306FJSON\u914D\u5217\u306B\u57FA\u3065\u3044\u3066\u304A\u308A\u3001\u7570\u306A\u308B\u578B\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u305F\u3081\u3001\u914D\u5217\u3088\u308A\u67D4\u8EDF\u6027\u306B\u512A\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,a.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u3067\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u5185\u306E\u30EC\u30B3\u30FC\u30C9\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u306E\u30C7\u30FC\u30BF\u304C\u53D6\u308A\u51FA\u3055\u308C\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u914D\u5217\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0ARRAY OBJECT($sel;0)\n\xa0ARRAY OBJECT($sel2;0)\n\xa0var v_String : Text\n\xa0\n\xa0OB SET($ref;"name";->[Company]Company Name)\n\xa0OB SET($ref;"city";->[Company]City)\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0$ref_company:=OB Copy($ref;True)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel;$ref_company)\n\xa0\xa0// $sel{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0v_String:=JSON Stringify array($sel)\n\xa0\xa0// v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]\n\xa0JSON PARSE ARRAY(v_String;$sel2)\n\xa0\xa0// $sel2{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel2{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0//...\n'})}),"\n",(0,a.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/commands/json-stringify-array",children:"JSON Stringify array"})]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return i}});var s=r(667294);let a={},t=s.createContext(a);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);