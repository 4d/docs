"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8398"],{485297:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-set-sorts","title":"QR SET SORTS","description":"QR SET SORTS ( area ; aColumns {; aOrders} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-sorts.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-sorts","permalink":"/docs/ja/20-R7/commands/qr-set-sorts","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-sorts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-sorts","title":"QR SET SORTS","slug":"/commands/qr-set-sorts","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET SELECTION","permalink":"/docs/ja/20-R7/commands/qr-set-selection"},"next":{"title":"QR SET TEXT PROPERTY","permalink":"/docs/ja/20-R7/commands/qr-set-text-property"}}'),t=s("785893"),d=s("250065");let l={id:"qr-set-sorts",title:"QR SET SORTS",slug:"/commands/qr-set-sorts",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",level:5},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET SORTS"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"aColumns"})," {; ",(0,t.jsx)(n.em,{children:"aOrders"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aColumns"}),(0,t.jsx)(n.td,{children:"Real array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30AB\u30E9\u30E0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aOrders"}),(0,t.jsx)(n.td,{children:"Real array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30BD\u30FC\u30C8\u65B9\u5411"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["QR SET SORTS \u30B3\u30DE\u30F3\u30C9\u4F7F\u7528\u3057\u3001",(0,t.jsx)(n.em,{children:"area"}),"\u306B\u6E21\u3057\u305F\u53C2\u7167\u306E\u30EC\u30DD\u30FC\u30C8\u5185\u306B\u3042\u308B\u30AB\u30E9\u30E0\u306E\u30BD\u30FC\u30C8\u9806\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"aColumns"}),"\u306B\u306F\u3001\u30BD\u30FC\u30C8\u9806\u3092\u8A2D\u5B9A\u3057\u3088\u3046\u3068\u3059\u308B\u5404\u30AB\u30E9\u30E0\u306E\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"aOrders"}),"\u306B\u306F\u3001",(0,t.jsx)(n.em,{children:"aColumns"}),"\u914D\u5217\u5185\u306E\u5BFE\u5FDC\u3059\u308B\u30AB\u30E9\u30E0\u306E\u30BD\u30FC\u30C8\u9806\u3092\u683C\u7D0D\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"*aOrders{$i}*\u304C1\u306E\u5834\u5408\u3001\u30BD\u30FC\u30C8\u9806\u306F\u6607\u9806\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"*aOrders{$i}*\u304C-1\u306E\u5834\u5408\u3001\u30BD\u30FC\u30C8\u9806\u306F\u964D\u9806\u3067\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",children:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9"}),"\n",(0,t.jsx)(n.p,{children:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9\u306E\u5834\u5408\u30012\u3064\u3088\u308A\u591A\u304F\u306E\u9805\u76EE\u3092\u914D\u5217\u306B\u7D0D\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30BD\u30FC\u30C8\u3055\u308C\u308B\u306E\u306F\u3001\u30AB\u30E9\u30E0 (1) \u3068\u884C (2) \u3060\u3051\u3067\u3059\u3002\u30C7\u30FC\u30BF (\u30AB\u30E9\u30E0\u3068\u884C\u306E\u4EA4\u5DEE\u3059\u308B\u5834\u6240\u306B\u4F4D\u7F6E\u3059\u308B) \u3092\u30BD\u30FC\u30C8\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6B21\u306B\u793A\u3059\u30B3\u30FC\u30C9\u306F\u3001\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30EC\u30DD\u30FC\u30C8\u306B\u304A\u3044\u3066\u884C\u3060\u3051\u3092\u4E26\u3073\u66FF\u3048\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($aColumns;1)\n\xa0$aColumns{1}:=2\n\xa0ARRAY REAL($aOrders;1)\n\xa0$aOrders{1}:=-1\xa0//Alphabetic sort for rows\n\xa0QR SET SORTS(qr_area;$aColumns;$aOrders)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7121\u52B9\u306A",(0,t.jsx)(n.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/qr-get-sorts",children:"QR GET SORTS"})}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"752"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);