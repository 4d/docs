"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38361"],{447615:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-get-html-template","title":"QR Get HTML template","description":"QR Get HTML template ( area ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-html-template.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-html-template","permalink":"/docs/ja/20-R7/commands/qr-get-html-template","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-html-template.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-html-template","title":"QR Get HTML template","slug":"/commands/qr-get-html-template","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET HEADER AND FOOTER","permalink":"/docs/ja/20-R7/commands/qr-get-header-and-footer"},"next":{"title":"QR GET INFO COLUMN","permalink":"/docs/ja/20-R7/commands/qr-get-info-column"}}'),r=n("785893"),d=n("250065");let l={id:"qr-get-html-template",title:"QR Get HTML template",slug:"/commands/qr-get-html-template",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"QR Get HTML template"})," ( ",(0,r.jsx)(t.em,{children:"area"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5F15\u6570"}),(0,r.jsx)(t.th,{children:"\u578B"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"area"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308BHTML\u30B3\u30FC\u30C9"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(t.p,{children:["QR Get HTML template \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8",(0,r.jsx)(t.em,{children:"area"}),"\u306B\u73FE\u5728\u4F7F\u7528\u3055\u308C\u3066\u3044\u308BHTML\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002\u623B\u308A\u5024\u306F\u30C6\u30AD\u30B9\u30C8\u5024\u3067\u3042\u308A\u3001HTML\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u5168\u5185\u5BB9\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u7279\u306B\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u624B\u52D5\u307E\u305F\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u308A\u51FA\u529B\u5148\u3092HTML\u30D5\u30A1\u30A4\u30EB\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u8FD4\u3055\u308C\u306A\u3044\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u7121\u52B9\u306A",(0,r.jsx)(t.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/ja/20-R7/commands/qr-set-html-template",children:"QR SET HTML TEMPLATE"})}),"\n",(0,r.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(t.td,{children:"751"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(t.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var s=n(667294);let r={},d=s.createContext(r);function l(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);