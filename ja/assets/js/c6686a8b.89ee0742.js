"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69335"],{805655:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/qr-delete-column","title":"QR DELETE COLUMN","description":"QR DELETE COLUMN ( area ; colNumber )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-delete-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-delete-column","permalink":"/docs/ja/20-R8/commands/qr-delete-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-delete-column.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-delete-column","title":"QR DELETE COLUMN","slug":"/commands/qr-delete-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Count columns","permalink":"/docs/ja/20-R8/commands/qr-count-columns"},"next":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/ja/20-R8/commands/qr-delete-offscreen-area"}}'),d=r("785893"),s=r("250065");let l={id:"qr-delete-column",title:"QR DELETE COLUMN",slug:"/commands/qr-delete-column",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR DELETE COLUMN"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"colNumber"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"colNumber"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AB\u30E9\u30E0\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["QR DELETE COLUMN\u306F\u3001",(0,d.jsx)(n.em,{children:"area"}),"\u306B\u3042\u308B",(0,d.jsx)(n.em,{children:"colNumber"}),"\u306B\u6E21\u3055\u308C\u305F\u756A\u53F7\u306E\u30AB\u30E9\u30E0\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30EC\u30DD\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(n.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u7121\u52B9\u306A",(0,d.jsx)(n.em,{children:"column"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u4F8B\u984C\u306F\u3001\u30EC\u30DD\u30FC\u30C8\u304C\u30EA\u30B9\u30C8\u30EC\u30DD\u30FC\u30C8\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u30013\u756A\u76EE\u306E\u30AB\u30E9\u30E0\u3092\u524A\u9664\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(QR Get report kind(MyArea)=qr list report)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MyArea;3)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/qr-insert-column",children:"QR INSERT COLUMN"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"749"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(667294);let d={},s=t.createContext(d);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);