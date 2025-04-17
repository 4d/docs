"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35083"],{590526:function(e,s,n){n.r(s),n.d(s,{default:()=>x,frontMatter:()=>c,metadata:()=>r,assets:()=>m,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands/theme/XML_SAX_theme","title":"XML SAX","description":"|                                                                                                                                           |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands/theme/XML_SAX.md","sourceDirName":"commands/theme","slug":"/commands/theme/XML-SAX","permalink":"/docs/ja/commands/theme/XML-SAX","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FXML_SAX.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"XML_SAX_theme","title":"XML SAX","slug":"/commands/theme/XML-SAX"},"sidebar":"docs","previous":{"title":"DOM SET XML ELEMENT VALUE","permalink":"/docs/ja/commands/dom-set-xml-element-value"},"next":{"title":"SAX ADD PROCESSING INSTRUCTION","permalink":"/docs/ja/commands/sax-add-processing-instruction"}}'),d=n("785893"),t=n("250065");let c={id:"XML_SAX_theme",title:"XML SAX",slug:"/commands/theme/XML-SAX"},l=void 0,m={},i=[];function a(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsx)(s.tr,{children:(0,d.jsx)(s.th,{})})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-add-processing-instruction",children:[(0,d.jsx)(s.strong,{children:"SAX ADD PROCESSING INSTRUCTION"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"statement"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-add-xml-cdata",children:[(0,d.jsx)(s.strong,{children:"SAX ADD XML CDATA"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"data"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-add-xml-comment",children:[(0,d.jsx)(s.strong,{children:"SAX ADD XML COMMENT"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"comment"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-add-xml-doctype",children:[(0,d.jsx)(s.strong,{children:"SAX ADD XML DOCTYPE"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"docType"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-add-xml-element-value",children:[(0,d.jsx)(s.strong,{children:"SAX ADD XML ELEMENT VALUE"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"data"})," {; *} )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-close-xml-element",children:[(0,d.jsx)(s.strong,{children:"SAX CLOSE XML ELEMENT"})," ( ",(0,d.jsx)(s.em,{children:"document"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-cdata",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML CDATA"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"value"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-comment",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML COMMENT"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"comment"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-document-values",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML DOCUMENT VALUES"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"encoding"})," ; ",(0,d.jsx)(s.em,{children:"version"})," ; ",(0,d.jsx)(s.em,{children:"standalone"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-element",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML ELEMENT"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"name"})," ; ",(0,d.jsx)(s.em,{children:"prefix"})," ; ",(0,d.jsx)(s.em,{children:"attrNames"})," ; ",(0,d.jsx)(s.em,{children:"attrValues"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-element-value",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML ELEMENT VALUE"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"value"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-entity",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML ENTITY"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"name"})," ; ",(0,d.jsx)(s.em,{children:"value"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-node",children:[(0,d.jsx)(s.strong,{children:"SAX Get XML node"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ) : Integer"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-get-xml-processing-instruction",children:[(0,d.jsx)(s.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"name"})," ; ",(0,d.jsx)(s.em,{children:"value"})," )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-open-xml-element",children:[(0,d.jsx)(s.strong,{children:"SAX OPEN XML ELEMENT"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"tag"})," {; ",(0,d.jsx)(s.em,{children:"attribName"})," ; ",(0,d.jsx)(s.em,{children:"attribValue"}),"} {; ",(0,d.jsx)(s.em,{children:"attribName2"})," ; ",(0,d.jsx)(s.em,{children:"attribValue2"})," ; ... ; ",(0,d.jsx)(s.em,{children:"attribNameN"})," ; ",(0,d.jsx)(s.em,{children:"attribValueN"}),"} )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-open-xml-element-arrays",children:[(0,d.jsx)(s.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"tag"})," {; ",(0,d.jsx)(s.em,{children:"attribNamesArray"})," ; ",(0,d.jsx)(s.em,{children:"attribValuesArray"}),"} {; ",(0,d.jsx)(s.em,{children:"attribNamesArray2"})," ; ",(0,d.jsx)(s.em,{children:"attribValuesArray2"})," ; ... ; ",(0,d.jsx)(s.em,{children:"attribNamesArrayN"})," ; ",(0,d.jsx)(s.em,{children:"attribValuesArrayN"}),"} )"]}),(0,d.jsx)(s.br,{})]})}),(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.a,{href:"/docs/ja/commands/sax-set-xml-declaration",children:[(0,d.jsx)(s.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,d.jsx)(s.em,{children:"document"})," ; ",(0,d.jsx)(s.em,{children:"encoding"})," {; ",(0,d.jsx)(s.em,{children:"standalone"}),"} )"]}),(0,d.jsx)(s.br,{})]})})]})]})}function x(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return c}});var r=n(667294);let d={},t=r.createContext(d);function c(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);