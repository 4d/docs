"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43461"],{379902:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/qr-set-destination","title":"QR SET DESTINATION","description":"QR SET DESTINATION ( area ; type {; specifics} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-destination.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-destination","permalink":"/docs/ja/commands/qr-set-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-destination","title":"QR SET DESTINATION","slug":"/commands/qr-set-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET BORDERS","permalink":"/docs/ja/commands/qr-set-borders"},"next":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/ja/commands/qr-set-document-property"}}'),d=s("785893"),r=s("250065");let i={id:"qr-set-destination",title:"QR SET DESTINATION",slug:"/commands/qr-set-destination",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR SET DESTINATION"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"type"})," {; ",(0,d.jsx)(n.em,{children:"specifics"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"type"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30EC\u30DD\u30FC\u30C8\u306E\u51FA\u529B\u5148"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"specifics"}),(0,d.jsx)(n.td,{children:"Text, Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u51FA\u529B\u5148\u306E\u8A73\u7D30"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR SET DESTINATION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"area"})," \u306B\u6E21\u3055\u308C\u305F\u53C2\u7167\u756A\u53F7\u306E\u30A8\u30EA\u30A2\u7528\u306E\u30EC\u30DD\u30FC\u30C8\u51FA\u529B\u30BF\u30A4\u30D7\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"type"})," \u5F15\u6570\u306B\u306F\u3001 ",(0,d.jsx)(n.em,{children:"QR Output Destination"})," \u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"specifics"})," \u5F15\u6570\u306E\u5185\u5BB9\u306F",(0,d.jsx)(n.em,{children:"type"})," \u306E\u5024\u306B\u57FA\u3065\u304D\u307E\u3059\u3002\u6B21\u306E\u8868\u306F",(0,d.jsx)(n.em,{children:"type"})," \u304A\u3088\u3073",(0,d.jsx)(n.em,{children:"specifics"})," \u306E\u4E21\u5F15\u6570\u3078\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B\u5024\u3092\u793A\u3057\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr HTML file"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr printer"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:'"*" \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u306A\u3044'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr text file"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9\u540D"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"qr printer"})," (1): ",(0,d.jsx)(n.em,{children:"specifics"}),' \u5F15\u6570\u306B\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF("*")\u3092\u542B\u3080\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5370\u5237\u306E\u9014\u4E2D\u306B\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8868\u793A\u3055\u308C\u305A\u30AB\u30EC\u30F3\u30C8\u306E\u5370\u5237\u8A2D\u5B9A\u304C\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3059\u308B\u969B\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"qr text file"})," (2): ",(0,d.jsx)(n.em,{children:"specifics"}),"\u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u4FDD\u5B58\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u30D1\u30B9\u540D\u3067\u6307\u5B9A\u3055\u308C\u305F\u5834\u6240\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u533A\u5207\u308A\u306F\u30BF\u30D6\u8A18\u53F7 (\u6587\u5B57\u30B3\u30FC\u30C99) \u3067\u3059\u3002\u307E\u305F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30EC\u30B3\u30FC\u30C9\u533A\u5207\u308A\u306F\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3 (\u6587\u5B57\u30B3\u30FC\u30C913) \u3067\u3059\u3002\u533A\u5207\u308A\u6587\u5B57\u7528\u306E2\u3064\u306E\u30B7\u30B9\u30C6\u30E0\u5909\u6570 (FldDelimit\u3068RecDelimit) \u306B\u5024\u3092\u6307\u5B9A\u3057\u3066\u3001\u3053\u308C\u3089\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002Windows\u306B\u304A\u3044\u3066\u3001FldDelimit\u304C13\u3067\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3\u306E\u5F8C\u306B\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9 (\u6587\u5B57\u30B3\u30FC\u30C910) \u304C\u4ED8\u52A0\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u306F\u3001 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/import-text",children:"IMPORT TEXT"})," \u306A\u3069\u306E\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u3082\u4F7F\u7528\u3055\u308C\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30C7\u30A3\u30BF\u306E\u305F\u3081\u306B\u3053\u308C\u3089\u306E\u5909\u6570\u306E\u5024\u3092\u5909\u66F4\u3059\u308B\u3068\u3001\u305D\u306E\u5909\u66F4\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u3042\u3089\u3086\u308B\u7B87\u6240\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"qr HTML file"})," (5): ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/qr-set-html-template",children:"QR SET HTML TEMPLATE"})," \u3067\u8A2D\u5B9A\u3055\u308C\u305F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001HTML\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5909\u63DB\u306E\u5B9F\u884C\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u30014D Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(n.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u7121\u52B9\u306A\u51FA\u529B\u5148",(0,d.jsx)(n.em,{children:"type"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u51FA\u529B\u5148\u3092\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EBMydoc.txt\u306B\u8A2D\u5B9A\u3057\u3001\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0QR SET DESTINATION(MyArea;2;"MyDoc.txt")\n\xa0QR RUN(MyArea)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/qr-get-destination",children:"QR GET DESTINATION"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"745"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);