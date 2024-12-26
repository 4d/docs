"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36740"],{19033:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/qr-move-column","title":"QR MOVE COLUMN","description":"QR MOVE COLUMN ( area ; column ; newPos )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-move-column","permalink":"/docs/ja/commands/qr-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-move-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-move-column","title":"QR MOVE COLUMN","slug":"/commands/qr-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR INSERT COLUMN","permalink":"/docs/ja/commands/qr-insert-column"},"next":{"title":"QR NEW AREA","permalink":"/docs/ja/commands/qr-new-area"}}'),r=s("785893"),d=s("250065");let c={id:"qr-move-column",title:"QR MOVE COLUMN",slug:"/commands/qr-move-column",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"QR MOVE COLUMN"})," ( ",(0,r.jsx)(e.em,{children:"area"})," ; ",(0,r.jsx)(e.em,{children:"column"})," ; ",(0,r.jsx)(e.em,{children:"newPos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"area"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Reference of the area"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"column"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Column number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"newPos"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"New position for column"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"QR MOVE COLUMN"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"column"})," \u5909\u6570\u306E\u4F4D\u7F6E\u306B\u3042\u308B\u30AB\u30E9\u30E0\u3092",(0,r.jsx)(e.em,{children:"newPos"})," \u5909\u6570\u3067\u6307\u5B9A\u3057\u305F\u4F4D\u7F6E\u3078\u3068\u79FB\u52D5\u3055\u305B\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"column"})," \u3068",(0,r.jsx)(e.em,{children:"newPos"})," \u5909\u6570\u306F\u3069\u3061\u3089\u3082\u6709\u52B9\u306A\u30AB\u30E9\u30E0\u4F4D\u7F6E(1\u3068\u30EC\u30DD\u30FC\u30C8\u5185\u306B\u3042\u308B\u30AB\u30E9\u30E0\u306E\u7DCF\u6570\u306E\u9593\u306E\u6570)\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC-9852\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u578B\u306E\u30EC\u30DD\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30EC\u30DD\u30FC\u30C8\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u305F\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(129288).Z+"",width:"676",height:"196"})}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0QR MOVE COLUMN(area;3;4)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(666247).Z+"",width:"675",height:"192"})}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1325"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},129288:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict2569470.en-d5be9d143bb6e93a9019fb35f2364173.png"},666247:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict2569472.en-6b0c9a6ead2b092b4d9cfba913f7d59a.png"},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);