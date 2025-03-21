"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86656"],{422363:function(n,e,r){r.r(e),r.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>d,assets:()=>i,toc:()=>x,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/qr-set-text-property","title":"QR SET TEXT PROPERTY","description":"QR SET TEXT PROPERTY ( area ; colNum ; rowNum ; property ; value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-text-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-text-property","permalink":"/docs/ja/20-R7/commands/qr-set-text-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-text-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-text-property","title":"QR SET TEXT PROPERTY","slug":"/commands/qr-set-text-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET SORTS","permalink":"/docs/ja/20-R7/commands/qr-set-sorts"},"next":{"title":"QR SET TOTALS DATA","permalink":"/docs/ja/20-R7/commands/qr-set-totals-data"}}'),t=r("785893"),s=r("250065");let l={id:"qr-set-text-property",title:"QR SET TEXT PROPERTY",slug:"/commands/qr-set-text-property",displayed_sidebar:"docs"},c=void 0,i={},x=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"QR SET TEXT PROPERTY"})," ( ",(0,t.jsx)(e.em,{children:"area"})," ; ",(0,t.jsx)(e.em,{children:"colNum"})," ; ",(0,t.jsx)(e.em,{children:"rowNum"})," ; ",(0,t.jsx)(e.em,{children:"property"})," ; ",(0,t.jsx)(e.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"area"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"colNum"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AB\u30E9\u30E0\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"rowNum"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u884C\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"property"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"value"}),(0,t.jsx)(e.td,{children:"Integer, Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u9078\u629E\u3057\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["QR SET TEXT PROPERTY \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001",(0,t.jsx)(e.em,{children:"colNum"})," \u3068 ",(0,t.jsx)(e.em,{children:"rowNum"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30EB\u306E\u30C6\u30AD\u30B9\u30C8\u5C5E\u6027\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"area"})," \u306B\u306F\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u306E\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"colNum"})," \u306B\u306F\u30BB\u30EB\u306E\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"rowNum"})," \u306B\u306F\u30BB\u30EB\u306E\u884C\u306E\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6B63\u306E\u5024\u3067\u3042\u308B\u5834\u5408\u3001\u5BFE\u5FDC\u3059\u308B\u5C0F\u8A08 (\u30D6\u30EC\u30FC\u30AF\u30EC\u30D9\u30EB) \u3092\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.li,{children:["\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u3001\u884C\u30A2\u30A4\u30C6\u30E0\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n| \u5B9A\u6570             | \u578B    | \u5024   | \u30B3\u30E1\u30F3\u30C8       |",(0,t.jsx)(e.br,{}),"\n| -------------- | ---- | --- | ---------- |",(0,t.jsx)(e.br,{}),"\n| qr detail      | \u500D\u9577\u6574\u6570 | -2 | \u30EC\u30DD\u30FC\u30C8\u306E\u8A73\u7D30\u30A8\u30EA\u30A2 |",(0,t.jsx)(e.br,{}),"\n| qr footer      | \u500D\u9577\u6574\u6570 | -5 | \u30DA\u30FC\u30B8\u30D5\u30C3\u30BF     |",(0,t.jsx)(e.br,{}),"\n| qr grand total | \u500D\u9577\u6574\u6570 | -3 | \u7DCF\u8A08\u30A8\u30EA\u30A2      |",(0,t.jsx)(e.br,{}),"\n| qr header      | \u500D\u9577\u6574\u6570 | -4 | \u30DA\u30FC\u30B8\u30D8\u30C3\u30C0     |",(0,t.jsx)(e.br,{}),"\n| qr title       | \u500D\u9577\u6574\u6570 | -1 | \u30EC\u30DD\u30FC\u30C8\u30BF\u30A4\u30C8\u30EB   |"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," ",(0,t.jsx)(e.em,{children:"rowNum"})," \u306B-4\u307E\u305F\u306F-5\u3092\u6E21\u3059\u5834\u5408\u3001\u4F7F\u7528\u3055\u308C\u306A\u304F\u3066\u3082 ",(0,t.jsx)(e.em,{children:"colNum"})," \u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," \u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9\u3067\u306F\u3001\u884C\u306E\u5024\u304C\u5E38\u306B\u6B63\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u9664\u304D\u3001\u539F\u5247\u306F\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"property"})," \u306B\u306F\u3001\u5272\u308A\u5F53\u3066\u308B\u30C6\u30AD\u30B9\u30C8\u5C5E\u6027\u306E\u5024\u307E\u305F\u306F\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u3001\u6B21\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"_o_qr font"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"4D v14R3 \u4EE5\u964D\u5EC3\u6B62\u4E88\u5B9A(qr font name \u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr alternate background color"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"9"}),(0,t.jsx)(e.td,{children:"\u4EE3\u66FF\u80CC\u666F\u8272"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr background color"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"8"}),(0,t.jsx)(e.td,{children:"\u80CC\u666F\u8272\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr bold"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"\u592A\u5B57\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027 (0 \u307E\u305F\u306F 1)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr font name"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"10"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/font-list",children:"FONT LIST"})," \u30B3\u30DE\u30F3\u30C9\u306A\u3069\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u540D"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr font size"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{children:"\u30DD\u30A4\u30F3\u30C8\u5358\u4F4D\u306E\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA (9 ~ 255)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr italic"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"4"}),(0,t.jsx)(e.td,{children:"\u30A4\u30BF\u30EA\u30C3\u30AF\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027 (0 \u307E\u305F\u306F1)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr justification"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"7"}),(0,t.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u6574\u5217\u5C5E\u6027 (0 = \u30C7\u30D5\u30A9\u30EB\u30C8, 1 = \u5DE6, 2 = \u4E2D\u592E, 3 = \u53F3)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr text color"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"6"}),(0,t.jsx)(e.td,{children:"\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u5C5E\u6027 (\u30AB\u30E9\u30FC\u756A\u53F7)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"qr underline"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"5"}),(0,t.jsx)(e.td,{children:"\u4E0B\u7DDA\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027 (0 \u307E\u305F\u306F1)"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"area"})," \u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"colNum"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"rowNum"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9853\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"property"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9854\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u6700\u521D\u306E\u30AB\u30E9\u30E0\u306E\u30BF\u30A4\u30C8\u30EB\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u5C5E\u6027\u3092\u5B9A\u7FA9\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0//Times \u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")\n\xa0\xa0//10\u30DD\u30A4\u30F3\u30C8\u306E\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)\n\xa0\xa0//\u592A\u5B57\u30B9\u30BF\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)\n\xa0\xa0//\u659C\u4F53\u30B9\u30BF\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)\n\xa0\xa0//\u4E0B\u7DDA\u4ED8\u304D\u30B9\u30BF\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)\n\xa0\xa0//\u9EC4\u7DD1\u8272\u306E\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u3092\u6307\u5B9A\u3057\u307E\u3059:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-get-text-property",children:"QR Get text property"})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"759"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"error"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return l}});var d=r(667294);let t={},s=d.createContext(t);function l(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);