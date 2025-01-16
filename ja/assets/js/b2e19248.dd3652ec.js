"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9389"],{850697:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/parse-formula","title":"Parse formula","description":"Parse formula ( formula {; options}{; errorMessage} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/parse-formula.md","sourceDirName":"commands-legacy","slug":"/commands/parse-formula","permalink":"/docs/ja/20-R7/commands/parse-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fparse-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"parse-formula","title":"Parse formula","slug":"/commands/parse-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET ALLOWED METHODS","permalink":"/docs/ja/20-R7/commands/get-allowed-methods"},"next":{"title":"SET ALLOWED METHODS","permalink":"/docs/ja/20-R7/commands/set-allowed-methods"}}'),l=r("785893"),t=r("250065");let d={id:"parse-formula",title:"Parse formula",slug:"/commands/parse-formula",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Parse formula"})," ( ",(0,l.jsx)(n.em,{children:"formula"})," {; ",(0,l.jsx)(n.em,{children:"options"}),"}{; ",(0,l.jsx)(n.em,{children:"errorMessage"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formula"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"options"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5165\u529B/\u51FA\u529B\u306E\u5F62\u5F0F\u306E\u6307\u793A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"errorMessage"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8(\u30A8\u30E9\u30FC\u306A\u3057\u306E\u5834\u5408\u306B\u306F\u7A7A\u306E\u6587\u5B57\u5217)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"\u5909\u63DB\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9(\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8)"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Parse formula"})," \u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u306F\u3001",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F4D \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u89E3\u6790\u3057\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u6B63\u898F\u5316\u3055\u308C\u305F\u5F62\u5F0F\u3067\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u30014D \u30E9\u30F3\u30B2\u30FC\u30B8\u3042\u308B\u3044\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8981\u7D20(\u30B3\u30DE\u30F3\u30C9\u3001\u5B9A\u6570\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u30014D \u30D7\u30E9\u30B0\u30A4\u30F3\u306A\u3069)\u306E\u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u5F15\u304D\u7D9A\u304D\u6709\u52B9\u306A\u72B6\u614B\u3092\u7DAD\u6301\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Parse formula"})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u8A55\u4FA1\u3057\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC* \u540D(\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D)\u3042\u308B\u3044\u306F\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F** \u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F\u306E\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u540D\u3042\u308B\u3044\u306F\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3042\u308B\u3044\u306F\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"4D \u30E9\u30F3\u30B2\u30FC\u30B8\u8981\u7D20\u3092\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u5F62\u5F0F\u306E4D \u30E9\u30F3\u30B2\u30FC\u30B8\u3078\u3068\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u5F62\u5F0F\u306E4D \u30E9\u30F3\u30B2\u30FC\u30B8\u30924D \u30E9\u30F3\u30B2\u30FC\u30B8\u8981\u7D20\u3078\u3068\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.em,{children:"*"})," \u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306F"]})," ",(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"})," and ",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059("]})," ",(0,l.jsx)(n.em,{children:"* \u5F15\u6570\u5FC5\u9808)\u3002"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.em,{children:"**"})," \u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F\u3068\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30C8\u30FC\u30AF\u30F3\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u5F62\u5F0F\u306E\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u3067\u8868\u73FE\u3055\u308C\u305F4D \u30E9\u30F3\u30B2\u30FC\u30B8\u304A\u3088\u3073\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8981\u7D20\u3067\u3059("]})," ",(0,l.jsx)(n.em,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067\u306E\u30C8\u30FC\u30AF\u30F3\u306E\u4F7F\u7528 \u53C2\u7167)"})," ",(0,l.jsx)(n.em,{children:":"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-RAW",children:"[Table:1]Field:1+String:C10(1)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u306B\u306F\u3001\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u5B9F\u969B\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u540D/\u30D0\u30FC\u30C1\u30E3\u30EB\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u540D\u3001\u3042\u308B\u3044\u306F\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u3067\u4F7F\u7528\u3055\u308C\u305F\u540D\u524D\u306E\u578B\u306B\u95A2\u4FC2\u306A\u304F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F",(0,l.jsx)(n.strong,{children:"Parse formula"})," \u306F\u30C6\u30AD\u30B9\u30C8\u30C8\u30FC\u30AF\u30F3\u3092\u7528\u3044\u306A\u3044\u3001\u5B9F\u969B\u306E4D \u30E9\u30F3\u30B2\u30FC\u30B8\u8981\u7D20/\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8981\u7D20\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4EFB\u610F\u306E",(0,l.jsx)(n.em,{children:"options"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u3069\u306E\u3088\u3046\u306B\u8868\u73FE\u3055\u308C\u3066\u3044\u308B\u304B\u3001\u3042\u308B\u3044\u306F\u305D\u308C\u3092\u3069\u306E\u3088\u3046\u306B\u8FD4\u3059\u304B\u3092\u3001\u4EE5\u4E0B\u306E",(0,l.jsx)(n.em,{children:"Formulas"})," \u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5B9A\u6570\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001\u8FD4\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5165\u529B/\u51FA\u529B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4E21\u65B9\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,l.jsx)(n.th,{children:"\u5024"}),(0,l.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Formula in with virtual structure"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC(\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D)\u3092\u4F7F\u7528\u3057\u3066\u8868\u73FE\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Formula out with tokens"}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30C6\u30AD\u30B9\u30C8\u30C8\u30FC\u30AF\u30F3\u5F62\u5F0F\u3092\u4F7F\u7528\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059(\u4F8B:Cxx)\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Formula out with virtual structure"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:'\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F"\u30D0\u30FC\u30C1\u30E3\u30EB"\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC(\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D)\u3092\u4F7F\u7528\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002'})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4EFB\u610F\u306E",(0,l.jsx)(n.em,{children:"errorMessage"})," \u5F15\u6570\u306F\u3001",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306B\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u304C\u3042\u3063\u305F\u5834\u5408\u306B\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u30A8\u30E9\u30FC\u304C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($t1;1)\n\xa0ARRAY LONGINT($t2;1)\n\xa0$t1{1}:="Virtual table"\n\xa0$t2{1}:=1\n\xa0SET TABLE TITLES($t1;$t2;*)\n\xa0\n\xa0ARRAY TEXT($tf1;1)\n\xa0ARRAY LONGINT($tf2;1)\n\xa0$tf1{1}:="Virtual field"\n\xa0$tf2{1}:=2\n\xa0SET FIELD TITLES([Table_1];$tf1;$tf2;*)\n\xa0\n\xa0\xa0//\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3078\u3068\u5909\u63DB\n\xa0$parsedFormula:=Parse formula("[Table_1]Champ_2";Formula out with virtual structure;$errorMessage)\n\xa0\xa0//\u7D50\u679C\u306F [Virtual table]Virtual field\n\xa0\n\xa0\xa0//\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u5F0F\u3078\u3068\u5909\u63DB\n\xa0$parsedFormula:=Parse formula("String([Table_1]Champ_2)";Formula out with tokens;$errorMessage)\n\xa0\xa0//\u7D50\u679C\u306F String:C10([Table_1:1]Champ_2:2)\n\xa0\n\xa0\xa0//\u30D0\u30FC\u30C1\u30E3\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u30C6\u30FC\u30D6\u30EB/\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3078\u3068\u5909\u63DB\n\xa0$parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)\n\xa0\xa0//\u7D50\u679C\u306F [Table_1]Champ_2\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,l.jsxs)(n.p,{children:["\u5F15\u304D\u7D9A\u304D",(0,l.jsx)(n.strong,{children:"\u4F8B\u984C 1"}),"\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//\u30E6\u30FC\u30B6\u30FC\u306B\u304A\u6C17\u306B\u5165\u308A\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5165\u529B\u3059\u308B\u3088\u3046\u305F\u305A\u306D\u308B\n\xa0$formula:=""\n\xa0EDIT FORMULA([Table_1];$formula)\n\xa0\n\xa0\xa0//\u30E6\u30FC\u30B6\u30FC\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5F8C\u3067\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u4FDD\u5B58\n\xa0CREATE RECORD([users_preferences])\n\xa0$persistentFormula:=Parse formula($formula;Formula out with tokens)\n\xa0[users_preferences]formula:=$persistentFormula\n\xa0\n\xa0\xa0//\u5F8C\u3067\u3001\u4E8B\u524D\u306B\u4FDD\u5B58\u3057\u3066\u304A\u3044\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5B9F\u884C\n\xa0CREATE RECORD([Table_1])\n\xa0EXECUTE FORMULA([users_preferences]formula)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"formula-from-string.md",children:"Formula from string"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067\u306E\u30C8\u30FC\u30AF\u30F3\u306E\u4F7F\u7528"})]}),"\n",(0,l.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"1576"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let l={},t=s.createContext(l);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);