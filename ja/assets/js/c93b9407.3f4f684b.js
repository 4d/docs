"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43740"],{631377:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-serial-port-mapping","title":"GET SERIAL PORT MAPPING","description":"GET SERIAL PORT MAPPING ( numArray ; nameArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-serial-port-mapping.md","sourceDirName":"commands-legacy","slug":"/commands/get-serial-port-mapping","permalink":"/docs/ja/commands/get-serial-port-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-serial-port-mapping.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-serial-port-mapping","title":"GET SERIAL PORT MAPPING","slug":"/commands/get-serial-port-mapping","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Communications","permalink":"/docs/ja/category/communications"},"next":{"title":"RECEIVE BUFFER","permalink":"/docs/ja/commands/receive-buffer"}}'),s=r("785893"),a=r("250065");let i={id:"get-serial-port-mapping",title:"GET SERIAL PORT MAPPING",slug:"/commands/get-serial-port-mapping",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"GET SERIAL PORT MAPPING"})," ( ",(0,s.jsx)(e.em,{children:"numArray"})," ; ",(0,s.jsx)(e.em,{children:"nameArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"numArray"}),(0,s.jsx)(e.td,{children:"Integer array"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30DD\u30FC\u30C8\u756A\u53F7\u306E\u914D\u5217"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"nameArray"}),(0,s.jsx)(e.td,{children:"Text array"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30DD\u30FC\u30C8\u540D\u306E\u914D\u5217"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:["GET SERIAL PORT MAPPING \u30B3\u30DE\u30F3\u30C9\u306F\u30DE\u30B7\u30F3\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u756A\u53F7\u3068\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u540D\u3092\u30012\u3064\u306E\u914D\u5217",(0,s.jsx)(e.em,{children:"numArray"})," \u3068 ",(0,s.jsx)(e.em,{children:"nameArray"}),"\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"Mac OS X\u3067\u306F\u3001USB\u30B7\u30EA\u30A2\u30EB\u30A2\u30C0\u30D7\u30BF\u30FC\u306E\u4F7F\u7528\u6642\u306B\u3001OS\u304C\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066\u308B\u305F\u3081\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u5F79\u7ACB\u3061\u307E\u3059\u3002\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u306E\u5B9F\u969B\u306EID\u3068\u306F\u95A2\u4FC2\u306A\u304F\u3001\u305D\u306E\u540D\u524D\uFF08\u56FA\u5B9A\uFF09\u3092\u7528\u3044\u3066\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3092\u53D6\u308A\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6A19\u6E96\u30DD\u30FC\u30C8\u3067\u306F\u3001\u610F\u5473\u3042\u308B\u5024\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002\u6A19\u6E96\u30DD\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u65E7\u65B9\u5F0F\u3067\u3042\u308B0\u307E\u305F\u306F1\u306E\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u756A\u53F7\u306B\u95A2\u4FC2\u306A\u304F\u540C\u3058\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY TEXT($arrPortNames;0)\n\xa0ARRAY LONGINT($arrPortNums;0)\n\xa0var $vPortNum;$vFinalPortNum : Integer\n\xa0\n\xa0\xa0// \u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u306E\u73FE\u5728\u306E\u756A\u53F7\u3092\u53D6\u5F97\n\xa0GET SERIAL PORT MAPPING($arrPortNums;$arrPortNames)\n\xa0$vPortNum:=Find in array($arrPortNames;vPortName)\n\xa0\xa0// vPortName \u306B\u306F\u4F7F\u7528\u3059\u308B\u30DD\u30FC\u30C8\u306E\u540D\u524D\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B;\n\xa0\xa0// \u3053\u306E\u5024\u306F\u30C0\u30A4\u30A2\u30ED\u30B0\u3067\u8A2D\u5B9A\u3057\u305F\u308A\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\n\xa0If(arrPortNums{$vPortNum}=0)\n\xa0\xa0\xa0\xa0$vFinalPortNum:=0\xa0// macOS \u74B0\u5883\u4E0B\u3067\u306E\u7279\u6B8A\u306A\u30B1\u30FC\u30B9\n\xa0Else\n\xa0\xa0\xa0\xa0$vFinalPortNum:=arrPortNums{$vPortNum}+100\n\xa0End if\n\xa0SET CHANNEL($vFinalPortNum;params)\xa0// params \u306B\u306F\u901A\u4FE1\u30D1\u30E9\u30E1\u30BF\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\n\xa0...\xa0// \u51E6\u7406\u3092\u5B9F\u884C\n\xa0SET CHANNEL(11)\xa0// \u30DD\u30FC\u30C8\u3092\u9589\u3058\u308B\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/ja/commands/set-channel",children:"SET CHANNEL"})}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"909"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);