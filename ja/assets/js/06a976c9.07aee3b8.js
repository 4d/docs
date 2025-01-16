"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87409"],{404841:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/dom-insert-xml-element","title":"DOM Insert XML element","description":"DOM Insert XML element ( targetElementRef ; sourceElementRef ; childIndex ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-insert-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-insert-xml-element","permalink":"/docs/ja/20-R7/commands/dom-insert-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-insert-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-insert-xml-element","title":"DOM Insert XML element","slug":"/commands/dom-insert-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML information","permalink":"/docs/ja/20-R7/commands/dom-get-xml-information"},"next":{"title":"DOM Parse XML source","permalink":"/docs/ja/20-R7/commands/dom-parse-xml-source"}}'),s=t("785893"),l=t("250065");let d={id:"dom-insert-xml-element",title:"DOM Insert XML element",slug:"/commands/dom-insert-xml-element",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Insert XML element"})," ( ",(0,s.jsx)(n.em,{children:"targetElementRef"})," ; ",(0,s.jsx)(n.em,{children:"sourceElementRef"})," ; ",(0,s.jsx)(n.em,{children:"childIndex"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetElementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u89AAXML\u8981\u7D20\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sourceElementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u633F\u5165\u3059\u308BXML\u8981\u7D20\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"childIndex"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u65B0\u3057\u3044\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u30BF\u30FC\u30B2\u30C3\u30C8\u3068\u306A\u308B\u5B50\u8981\u7D20\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u65B0\u3057\u3044XML\u8981\u7D20\u306E\u53C2\u7167"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["DOM Insert XML element \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066",(0,s.jsx)(n.em,{children:"targetElementRef"}),"\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u53C2\u7167\u3092\u6301\u3064XML\u8981\u7D20\u306E\u5B50\u8981\u7D20\u306E\u9593\u306B\u3001\u65B0\u3057\u3044XML\u8981\u7D20\u3092\u633F\u5165\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"sourceElementRef"}),"\u306B\u633F\u5165\u3059\u308B\u8981\u7D20\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u8981\u7D20\u306F\u3001DOM\u30C4\u30EA\u30FC\u306E\u4E2D\u306E\u65E2\u5B58\u306EXML\u8981\u7D20\u306E\u53C2\u7167\u3068\u3057\u3066\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"childIndex"}),"\u5F15\u6570\u306F\u3001\u65B0\u3057\u3044\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u3001\u89AA\u8981\u7D20\u306E\u5B50\u8981\u7D20\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u756A\u53F7\u304C\u6709\u52B9\u3067\u306A\u3044\u5834\u5408 (\u4F8B\u3048\u3070\u3053\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7\u3092\u6301\u3064\u5B50\u8981\u7D20\u304C\u5B58\u5728\u3057\u306A\u3044)\u3001\u65B0\u3057\u3044\u8981\u7D20\u306F\u89AA\u8981\u7D20\u306E\u6700\u521D\u306E\u5B50\u8981\u7D20\u306E\u524D\u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F\u53D6\u5F97\u3057\u305FXML\u8981\u7D20\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306EXML\u69CB\u9020\u3067\u30011\u756A\u76EE\u30682\u756A\u76EE\u306E\u672C\u3092\u5165\u308C\u66FF\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"  standalone="no" ?>\n<BookCatalog>\n\xa0 <Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Title>Open Source Web Services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Author>Collective</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Date>2003</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <ISBN>2-7440-1507-5</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Publisher>Wrox</Publisher>\n\xa0\xa0\xa0 </Book>\n<Book>\n\xa0\xa0\xa0  \xa0\xa0\xa0 \xa0 <Title>Building XML Web services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Author>Scott Short</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Date>2002</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <ISBN>2-10-006476-2</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0  <Publisher>Microsoft Press</Publisher>\n\xa0\xa0\xa0 </Book>\n</BookCatalog>  \n'})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $rootRef : Text\n\xa0$rootRef:=DOM Parse XML source("")\xa0// XML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9078\u629E\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $newStruct : Text\n\xa0\xa0\xa0\xa0$newStruct:=DOM Create XML Ref("BookCatalog")\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Append XML element($newStruct;$bookRef)\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")\n\xa0\xa0\xa0\xa0var $newElementRef : Text\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)\n\xa0\n\xa0\xa0\xa0\xa0DOM CLOSE XML($newStruct)\n\xa0\xa0\xa0\xa0DOM CLOSE XML($rootRef)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/dom-append-xml-element",children:"DOM Append XML element"})}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1083"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);