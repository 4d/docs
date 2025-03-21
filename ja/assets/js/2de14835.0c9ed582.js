"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89362"],{398415:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>t,toc:()=>a,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/dom-parse-xml-source","title":"DOM Parse XML source","description":"DOM Parse XML source ( document {; validation {; dtd | schema}} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-parse-xml-source.md","sourceDirName":"commands-legacy","slug":"/commands/dom-parse-xml-source","permalink":"/docs/ja/20-R7/commands/dom-parse-xml-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-parse-xml-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-parse-xml-source","title":"DOM Parse XML source","slug":"/commands/dom-parse-xml-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Insert XML element","permalink":"/docs/ja/20-R7/commands/dom-insert-xml-element"},"next":{"title":"DOM Parse XML variable","permalink":"/docs/ja/20-R7/commands/dom-parse-xml-variable"}}'),r=s("785893"),l=s("250065");let c={id:"dom-parse-xml-source",title:"DOM Parse XML source",slug:"/commands/dom-parse-xml-source",displayed_sidebar:"docs"},i=void 0,t={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Parse XML source"})," ( ",(0,r.jsx)(n.em,{children:"document"})," {; ",(0,r.jsx)(n.em,{children:"validation"})," {; dtd | schema}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30D1\u30B9\u540D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"validation"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"True = \u691C\u8A3C\u3092\u884C\u3046 False = \u691C\u8A3C\u3092\u884C\u308F\u306A\u3044"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dtd | schema"}),(0,r.jsx)(n.td,{children:"\u6587\u5B57"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"DTD\u307E\u305F\u306FXML\u30B9\u30AD\u30FC\u30DE\u306E\u5834\u6240"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"XML\u8981\u7D20\u53C2\u7167"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["DOM Parse XML source\u30B3\u30DE\u30F3\u30C9\u306FXML\u69CB\u9020\u3092\u542B\u3080\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u89E3\u6790\u3057\u3001XML\u30C4\u30EA\u30FC\u3078\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FDTD\u3084XML\u30B9\u30AD\u30FC\u30DE (XML Schema Definition (XSD) \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8) \u3092\u4F7F\u7528\u3057\u3066\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u691C\u8A3C\u3057\u305F\u308A\u3001\u3042\u308B\u3044\u306F\u3057\u306A\u3044\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30C7\u30A3\u30B9\u30AF\u4E0A\u3042\u308B\u3044\u306F\u30A4\u30F3\u30C8\u30E9\u30CD\u30C3\u30C8\u3084\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u306B\u5B58\u5728\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5099\u8003:"})," DOM Parse XML source\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u306F\u540C\u671F\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"document"})," \u5F15\u6570\u5F15\u6570\u306B\u306F\u4EE5\u4E0B\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6A19\u6E96\u306E\u5B8C\u5168\u30D1\u30B9\u540D (Windows\u3067\u306EC:\\\\Folder\\\\File\\\\...\u3084Mac OS\u3067\u306EMacintoshHD:Folder:File)\u3001"}),"\n",(0,r.jsx)(n.li,{children:"\u307E\u305F\u306FMsc OS\u4E0A\u3067\u306FUnix\u30D1\u30B9\u540D (/\u3067\u59CB\u307E\u3089\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093)\u3001"}),"\n",(0,r.jsxs)(n.li,{children:["\u307E\u305F\u306F",(0,r.jsx)(n.a,{href:"http://www.site.com/File",children:"http://www.site.com/File"})," \u3084 ftp://public.ftp.com...\u306E\u3088\u3046\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30D1\u30B9\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30D6\u30FC\u30EB\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"validation"})," \u306B\u306F\u69CB\u9020\u3092\u691C\u8A3C\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"validation"})," \u304CTrue\u306E\u5834\u5408\u3001\u69CB\u9020\u306F\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30D1\u30FC\u30B5\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306EXML\u69CB\u9020\u3092\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u542B\u307E\u308C\u308BDTD\u307E\u305F\u306FXSD\u53C2\u7167\u3001\u307E\u305F\u306F\uFF13\u756A\u76EE\u306E\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u306BDTD\u307E\u305F\u306FXSD\u53C2\u7167\u57FA\u3065\u3044\u3066\u691C\u8A3C\u3092\u8A66\u307F\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"validation"})," \u304CFalse\u306E\u5834\u5408\u3001\u69CB\u9020\u306F\u691C\u8A3C\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"validation"})," \u306BTrue\u3092\u6E21\u3057\u3001\uFF13\u756A\u76EE\u306E\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u69CB\u9020\u81EA\u8EAB\u306E\u4E2D\u3067\u898B\u3064\u3051\u308BDTD\u3084XSD\u53C2\u7167\u3092\u4F7F\u7528\u3057\u3066\u691C\u8A3C\u3092\u884C\u3044\u307E\u3059\u3002\u691C\u8A3C\u3092\u9593\u63A5\u7684\u306B\u884C\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u69CB\u9020\u304CDTD\u3078\u306E\u53C2\u7167\u3092\u542B\u3093\u3067\u304A\u308A\u3001\u305D\u308C\u81EA\u8EAB\u306BXSD\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u53C2\u7167\u3082\u542B\u3080\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4E21\u65B9\u306E\u691C\u8A3C\u3092\u8A66\u307F\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"3\u756A\u76EE\u306E\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u89E3\u6790\u306B\u4F7F\u7528\u3059\u308B\u7279\u5B9A\u306EDTD\u3084XML\u30B9\u30AD\u30FC\u30DE\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306FXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u3067\u53C2\u7167\u3055\u308C\u308BDTD\u3092\u8003\u616E\u3057\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"DTD\u306B\u3088\u308B\u691C\u8A3C"})}),"\n",(0,r.jsx)(n.p,{children:"DTD\u3092\u6307\u5B9A\u3059\u308B\u65B9\u6CD5\u306F2\u3064\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53C2\u7167\u3068\u3057\u3066: \u3053\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"dtd"}),' \u5F15\u6570\u306B".dtd"\u62E1\u5F35\u5B50\u3092\u6301\u3064DTD\u306E\u5B8C\u5168\u30D1\u30B9\u540D\u3092\u6E21\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u6709\u52B9\u306ADTD\u304C\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001',(0,r.jsx)(n.em,{children:"dtd"})," \u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30C6\u30AD\u30B9\u30C8\u306B\u76F4\u63A5: \u3053\u306E\u5834\u5408\u3001\u5F15\u6570\u306E\u5185\u5BB9\u304C\u201C<?xml\u201D\u3067\u59CB\u307E\u3063\u3066\u3044\u308C\u3070\u30014D\u306F\u305D\u308C\u3092DTD\u3068\u3057\u3066\u6271\u3044\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30704D\u306F\u305D\u308C\u3092\u30D1\u30B9\u540D\u3068\u3057\u3066\u6271\u3044\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u30B9\u30AD\u30FC\u30DE\u306B\u3088\u308B\u691C\u8A3C"})}),"\n",(0,r.jsxs)(n.p,{children:["XML\u30B9\u30AD\u30FC\u30DE\u3067\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u691C\u8A3C\u3059\u308B\u306B\u306F\u30013\u756A\u76EE\u306E\u5F15\u6570\u306B.dtd\u62E1\u5F35\u5B50\u306E\u4EE3\u308F\u308A\u306B.xsd\u62E1\u5F35\u5B50\u3092\u6301\u3064\u30D5\u30A1\u30A4\u30EB\u3084URL\u306E\u30D1\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002XML\u30B9\u30AD\u30FC\u30DE\u306B\u3088\u308B\u691C\u8A3C\u306FDTD\u306B\u3088\u308B\u305D\u308C\u3088\u308A\u3082\u81EA\u7531\u5EA6\u304C\u9AD8\u304F\u30D1\u30EF\u30D5\u30EB\u3067\u3059\u3002XSD\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u306FXML\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u7279\u306BXML\u30B9\u30AD\u30FC\u30DE\u306F\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002XML\u30B9\u30AD\u30FC\u30DE\u306B\u95A2\u3059\u308B\u60C5\u5831\u306F\u4EE5\u4E0B\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"http://www.w3.org/XML/Schema",children:"http://www.w3.org/XML/Schema"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["DTD\u3084XSD\u304C\u5B58\u5728\u3057\u306A\u304B\u3063\u305F\u308AURL\u304C\u6B63\u3057\u304F\u306A\u3044\u5834\u5408\u306A\u3069\u691C\u8A3C\u304C\u884C\u3048\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002Error\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F\u30A8\u30E9\u30FC\u756A\u53F7\u3092\u793A\u3057\u307E\u3059\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E1\u30E2\u30EA\u4E2D\u306B\u5C55\u958B\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4EEE\u60F3\u69CB\u9020\u3078\u306E\u53C2\u7167\u3092\u8868\u305916-\u6587\u5B57\u306E\u6587\u5B57\u5217 (ElementRef) \u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u53C2\u7167\u3092\u4ED6\u306EXML\u89E3\u6790\u30B3\u30DE\u30F3\u30C9\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91CD\u8981"}),": \u53C2\u7167\u306E\u5229\u7528\u304C\u7D42\u4E86\u3057\u305F\u3089\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/dom-close-xml",title:"DOM CLOSE XML",children:"DOM CLOSE XML"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3053\u306E\u53C2\u7167\u304C\u4F7F\u7528\u3057\u3066\u3044\u308B\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u691C\u8A3C\u306A\u3057\u3067\u30C7\u30A3\u30B9\u30AF\u4E0A\u306EXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Struct_Ref:=DOM Parse XML source("C:\\\\import.xml")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u691C\u8A3C\u306A\u3057\u3067\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3068\u540C\u968E\u5C64\u306B\u3042\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Struct_Ref:=DOM Parse XML source("import.xml")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30A3\u30B9\u30AF\u4E0A\u306EDTD\u3092\u4F7F\u7528\u3057\u305F\u691C\u8A3C\u3092\u884C\u3044\u3001\u30C7\u30A3\u30B9\u30AF\u4E0A\u306EXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Struct_Ref:=DOM Parse XML source("C:\\\\import.xml";True;"C:\\\\import_dtd.xml")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,r.jsx)(n.p,{children:"\u691C\u8A3C\u306A\u3057\u3067\u7279\u5B9A\u306EURL\u306B\u5B58\u5728\u3059\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Struct_Ref:=DOM Parse XML source("http://www.4D.com/xml/import.xml")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/dom-parse-xml-variable",children:"DOM Parse XML variable"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"719"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var d=s(667294);let r={},l=d.createContext(r);function c(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);