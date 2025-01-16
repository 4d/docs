"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93062"],{859980:function(n,e,r){r.r(e),r.d(e,{default:()=>j,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/qr-set-document-property","title":"QR SET DOCUMENT PROPERTY","description":"QR SET DOCUMENT PROPERTY ( area ; property ; value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-document-property","permalink":"/docs/ja/commands/qr-set-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-document-property.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-document-property","title":"QR SET DOCUMENT PROPERTY","slug":"/commands/qr-set-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET DESTINATION","permalink":"/docs/ja/commands/qr-set-destination"},"next":{"title":"QR SET HEADER AND FOOTER","permalink":"/docs/ja/commands/qr-set-header-and-footer"}}'),d=r("785893"),s=r("250065");let c={id:"qr-set-document-property",title:"QR SET DOCUMENT PROPERTY",slug:"/commands/qr-set-document-property",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR SET DOCUMENT PROPERTY"})," ( ",(0,d.jsx)(e.em,{children:"area"})," ; ",(0,d.jsx)(e.em,{children:"property"})," ; ",(0,d.jsx)(e.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"area"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"property"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"1 = \u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0, 2 = \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5358\u4F4D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"value"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(e.p,{children:"QR SET DOCUMENT PROPERTY \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u8868\u793A\u306E\u6709\u7121\u3001\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u4F7F\u7528\u3059\u308B\u5358\u4F4D\u306E\u6307\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"property"})," \u306B\u306F\u3001",(0,d.jsx)(e.em,{children:"QR Document Properties"}),"\u5B9A\u6570\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u6B21\u306E\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr field separator"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u533A\u5207\u308A\u6587\u5B57\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5024\u306F\u30B7\u30B9\u30C6\u30E0\u5909\u6570FldDelimit \u3067\u3059(\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306FTab)\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr printing dialog"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsxs)(e.td,{children:["\u30D7\u30EA\u30F3\u30C8\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E\u8868\u793A",(0,d.jsx)(e.br,{}),"\u5024\u304C1\u306E\u5834\u5408\u3001\u5370\u5237\u306E\u524D\u306B\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002(\u30C7\u30D5\u30A9\u30EB\u30C8)\u5024\u304C0\u306E\u5834\u5408\u3001\u5370\u5237\u306E\u524D\u306B\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr record separator"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"\u30EC\u30B3\u30FC\u30C9\u533A\u5207\u308A\u6587\u5B57\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5024\u306F\u30B7\u30B9\u30C6\u30E0\u5909\u6570RecDelimit \u3067\u3059(\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3)\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"qr unit"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsxs)(e.td,{children:["\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5358\u4F4D",(0,d.jsx)(e.br,{}),"\u5024\u304C0\u306E\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5358\u4F4D\u306F\u30DD\u30A4\u30F3\u30C8\u3067\u3059\u3002\u5024\u304C1\u306E\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5358\u4F4D\u306F\u30BB\u30F3\u30C1\u3067\u3059\u3002\u5024\u304C2\u306E\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5358\u4F4D\u306F\u30A4\u30F3\u30C1\u3067\u3059\u3002"]})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"area"})," \u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52B9\u306A\u5024\u3092",(0,d.jsx)(e.em,{children:"property"})," \u307E\u305F\u306F",(0,d.jsx)(e.em,{children:"value"})," \u5F15\u6570\u306B\u6E21\u3057\u305F\u5834\u5408\u3001\u305D\u308C\u305E\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u30A8\u30E9\u30FC\u756A\u53F7(-9852 \u307E\u305F\u306F -9853)\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/qr-get-document-property",children:"QR Get document property"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"772"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return c}});var t=r(667294);let d={},s=t.createContext(d);function c(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);