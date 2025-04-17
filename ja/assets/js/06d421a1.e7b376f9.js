"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87329"],{565519:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/process-4d-tags","title":"PROCESS 4D TAGS","description":"PROCESS 4D TAGS ( inputData ; outputData {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/process-4d-tags.md","sourceDirName":"commands-legacy","slug":"/commands/process-4d-tags","permalink":"/docs/ja/20-R8/commands/process-4d-tags","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-4d-tags.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"process-4d-tags","title":"PROCESS 4D TAGS","slug":"/commands/process-4d-tags","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN URL","permalink":"/docs/ja/20-R8/commands/open-url"},"next":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/ja/20-R8/commands/set-environment-variable"}}'),r=t("785893"),d=t("250065");let l={id:"process-4d-tags",title:"PROCESS 4D TAGS",slug:"/commands/process-4d-tags",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," ( ",(0,r.jsx)(n.em,{children:"inputData"})," ; ",(0,r.jsx)(n.em,{children:"outputData"})," {; ",(0,r.jsx)(n.em,{children:"param"}),"}{; ",(0,r.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inputData"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u51E6\u7406\u3059\u308B4D\u30BF\u30B0\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outputData"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u51E6\u7406\u3055\u308C\u305F\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5B9F\u884C\u3055\u308C\u308B\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3078\u3068\u6E21\u3055\u308C\u308B\u5F15\u6570"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PROCESS 4D TAGS"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001",(0,r.jsx)(n.em,{children:"inputTemplate"})," \u5F15\u6570\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B4D\u5909\u63DB\u30BF\u30B0\u306E\u51E6\u7406\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u5024\u3092\u633F\u5165\u3057(\u4EFB\u610F)\u3001\u305D\u306E\u7D50\u679C\u304C",(0,r.jsx)(n.em,{children:"outputResult"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30BF\u30B0\u306E\u5B8C\u5168\u306A\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(n.em,{children:"4D \u5909\u63DB\u30BF\u30B0"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:['\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u3001\u30BF\u30B0\u3084\u30014D\u5F0F\u3084\u5909\u6570\u3078\u306E\u53C2\u7167\u3092\u542B\u3093\u3060"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"\u578B\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u5B9F\u884C\u3067\u304D\u3001\u305D\u308C\u306B\u3088\u308A\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3084\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u5024\u306B\u5FDC\u3058\u305F\u7570\u306A\u308B\u7D50\u679C\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002',(0,r.jsx)(n.br,{}),"\n\u4F8B \u3048\u3070\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u30014D\u5909\u63DB\u30BF\u30B0\u3092\u542B\u3093\u3060\u30BB\u30DF\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30DA\u30FC\u30B8\u306B\u57FA\u3065\u3044\u305FHTML\u30DA\u30FC\u30B8\u3092\u751F\u6210\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059(\u3053\u306E\u3068\u304D4D Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093)\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u30C7\u30FC\u30BF\u3078\u306E\u53C2\u7167\u306E\u51E6\u7406\u3092(4D Internet\u30B3\u30DE\u30F3\u30C9\u7D4C\u7531\u3067)\u542B\u3093\u3060HTML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306EE\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u306B\u57FA\u3065\u3044\u305F\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3067\u3042\u308C\u3070\u3001XML\u3001 SVG\u3001\u30DE\u30EB\u30C1\u30B9\u30BF\u30A4\u30EB\u30C6\u30AD\u30B9\u30C8\u306A\u3069\u3001\u3069\u3093\u306A\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3067\u3082\u51E6\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u51E6\u7406\u3055\u308C\u308B\u30BF\u30B0\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3092\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"inputTemplate"})," \u306B\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u305B\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["4D\u306E\u5168\u3066\u306E\u5909\u63DB\u30BF\u30B0\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059 (",(0,r.jsx)(n.em,{children:"4DTEXT"}),"\u3001",(0,r.jsx)(n.em,{children:"4DHTML"}),"\u3001",(0,r.jsx)(n.em,{children:"4DSCRIPT"}),"\u3001",(0,r.jsx)(n.em,{children:"4DLOOP"}),"\u3001",(0,r.jsx)(n.em,{children:"4DEVAL"}),"\u306A\u3069) \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," Web\u30B5\u30FC\u30D0\u30FC (Web\u30D7\u30ED\u30BB\u30B9) \u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u4EE5\u5916\u3067 ",(0,r.jsx)(n.em,{children:"4DINCLUDE"})," \u30BF\u30B0\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D\u306E\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u307E\u305F\u306F4D Server\u306E\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"4D\u306E\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E\u5834\u5408\u30014D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5B9F\u884C\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306B\u4E0D\u5B9A\u6570\u306E",(0,r.jsx)(n.em,{children:"param"})," \u5F15\u6570\u3092\u633F\u5165\u3059\u308B\u4E8B\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u540C\u69D8\u3001\u3053\u308C\u3089\u306E\u5F15\u6570\u306F\u69D8\u3005\u306A\u30BF\u30A4\u30D7\u306E\u30B9\u30AB\u30E9\u30FC\u5024(\u30C6\u30AD\u30B9\u30C8\u3001\u65E5\u4ED8\u3001\u6642 \u9593\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u3001\u7B49)\u306B\u52A0\u3048\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3082\u683C\u7D0D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3001\u914D\u5217\u30DD\u30A4\u30F3\u30BF\u30FC\u306B\u3088\u3063\u3066\u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u30024D\u30BF\u30B0\u306B\u3088\u3063\u3066\u51E6\u7406\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u4E2D\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u5F15\u6570\u306F4D \u30E1\u30BD\u30C3\u30C9\u540C\u69D8\u3001\u6A19\u6E96\u306E\u5F15\u6570($1\u3001$2\u7B49)\u3092\u901A\u3058\u3066\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3059(\u4F8B\u984C\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," \u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001\u5C02\u7528\u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u30BB\u30C3\u30C8\u304C\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u306F\u51E6\u7406\u4E2D\u3001\u8AAD\u307F\u51FA\u3057\u30FB\u66F8\u304D\u8FBC\u307F\u3068\u3082\u306B\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"outputResult"})," \u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"inputTemplate"})," \u5F15\u6570\u306E\u7D50\u679C\u3068\u3068\u3082\u306B\u3001\u305D\u3053\u306B\u542B\u307E\u308C\u308B4D\u30BF\u30B0\u304C\u51E6\u7406\u3055\u308C\u305F\u7D50\u679C\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3082\u3057",(0,r.jsx)(n.em,{children:"inputTemplate"})," \u5F15\u6570\u304C4D\u30BF\u30B0\u3092\u542B\u307E\u306A\u3044\u3001\u307E\u305F\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u751F\u6210\u3059\u308B\u5834\u5408\u3001\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"outputResult"})," \u306E\u5185\u5BB9\u306F\u5F15\u6570",(0,r.jsx)(n.em,{children:"inputTemplate"})," \u306E\u5185\u5BB9\u3068\u4E00\u81F4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"outputResult"})," \u306F\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-web-authentication-database-method",children:"On Web Authentication\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3092\u547C\u3073\u51FA\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u306F'template' \u578B\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u3001\u305D\u308C\u306B\u683C\u7D0D\u3055\u308C\u308B\u30BF\u30B0\u3092\u51E6\u7406\u3057\u3001\u305D\u306E\u7D50\u679C\u3092\u4FDD\u5B58\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $inputText_t : Text\n\xa0var $outputText_t : Text\n\xa0\n\xa0$inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)\n\xa0PROCESS 4D TAGS($inputText_t;$outputText_t)\n\xa0TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217\u306E\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u751F\u6210\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($array;2)\n\xa0$array{1}:="hello"\n\xa0$array{2}:="world"\n\xa0$input:=""\n\xa0$input:=$input+""\n\xa0$input:=$input+" "\n\xa0$input:=$input+""\n\xa0PROCESS 4D TAGS($input;$output;"elements = ";->$array)\n\xa0\xa0// $output = "elements = hello world"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"4D \u5909\u63DB\u30BF\u30B0"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"816"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);