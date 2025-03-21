"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80303"],{109470:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/qr-set-header-and-footer","title":"QR SET HEADER AND FOOTER","description":"QR SET HEADER AND FOOTER ( area ; selector ; leftTitle ; centerTitle ; rightTitle ; height {; picture {; pictAlignment}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-header-and-footer.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-header-and-footer","permalink":"/docs/ja/20-R7/commands/qr-set-header-and-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-header-and-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-header-and-footer","title":"QR SET HEADER AND FOOTER","slug":"/commands/qr-set-header-and-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/ja/20-R7/commands/qr-set-document-property"},"next":{"title":"QR SET HTML TEMPLATE","permalink":"/docs/ja/20-R7/commands/qr-set-html-template"}}'),d=t("785893"),s=t("250065");let i={id:"qr-set-header-and-footer",title:"QR SET HEADER AND FOOTER",slug:"/commands/qr-set-header-and-footer",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR SET HEADER AND FOOTER"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"selector"})," ; ",(0,d.jsx)(n.em,{children:"leftTitle"})," ; ",(0,d.jsx)(n.em,{children:"centerTitle"})," ; ",(0,d.jsx)(n.em,{children:"rightTitle"})," ; ",(0,d.jsx)(n.em,{children:"height"})," {; ",(0,d.jsx)(n.em,{children:"picture"})," {; ",(0,d.jsx)(n.em,{children:"pictAlignment"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selector"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"1 = \u30D8\u30C3\u30C0, 2 = \u30D5\u30C3\u30BF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"leftTitle"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5DE6\u5074\u306B\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"centerTitle"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u4E2D\u592E\u306B\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rightTitle"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u53F3\u5074\u306B\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"height"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u306E\u9AD8\u3055"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"picture"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u8868\u793A\u3059\u308B\u30D4\u30AF\u30C1\u30E3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pictAlignment"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3\u306E\u6574\u5217\u5C5E\u6027"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"QR SET HEADER AND FOOTER \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u306E\u5185\u5BB9\u3068\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"selector"}),"\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u3092\u9078\u629E\u3057\u307E\u3059:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"selector"}),"\u306B1\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D8\u30C3\u30C0\u60C5\u5831\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"selector"}),"\u306B2\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D5\u30C3\u30BF\u60C5\u5831\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"leftTitle"}),", ",(0,d.jsx)(n.em,{children:"centerTitle"})," \u304A\u3088\u3073 ",(0,d.jsx)(n.em,{children:"rightTitle"}),"\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u5DE6\u5074\u3001\u4E2D\u592E\u3001\u53F3\u5074\u306B\u3042\u308B\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u306E\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"height"}),"\u306B\u306F\u3001\u305D\u306E\u30EC\u30DD\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u9078\u629E\u3057\u305F\u5358\u4F4D\u3067\u8868\u308F\u3055\u308C\u305F\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"picture"}),"\u306B\u306F\u3001\u30D8\u30C3\u30C0\u307E\u305F\u306F\u30D5\u30C3\u30BF\u306B\u8868\u793A\u3055\u308C\u308B\u30D4\u30AF\u30C1\u30E3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"pictAlignment"}),"\u306B\u306F\u3001",(0,d.jsx)(n.em,{children:"picture"}),"\u306B\u6E21\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u306E\u6574\u5217\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"pictAlignment"}),"\u304C1\u306E\u5834\u5408\u3001\u305D\u306E\u30D4\u30AF\u30C1\u30E3\u306F\u5DE6\u63C3\u3048\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"pictAlignment"}),"\u304C2\u306E\u5834\u5408\u3001\u305D\u306E\u30D4\u30AF\u30C1\u30E3\u306F\u4E2D\u592E\u63C3\u3048\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"pictAlignment"}),"\u304C3\u306E\u5834\u5408\u3001\u305D\u306E\u30D4\u30AF\u30C1\u30E3\u306F\u53F3\u63C3\u3048\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(n.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u7121\u52B9\u306A",(0,d.jsx)(n.em,{children:"selector"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001MyArea\u306E\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u306E\u30D8\u30C3\u30C0\u30BF\u30A4\u30C8\u30EB\u3068\u3057\u3066\u201CCenter title\u201D\u3092\u8A2D\u5B9A\u3057\u3001\u30D8\u30C3\u30C0\u306E\u9AD8\u3055\u3092200\u30D4\u30AF\u30BB\u30EB\u306B\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0QR SET HEADER AND FOOTER(MyArea;1;"";"Center title";"";200)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/qr-get-header-and-footer",children:"QR GET HEADER AND FOOTER"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"774"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);