"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53663"],{143956:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-document-position","title":"SET DOCUMENT POSITION","description":"SET DOCUMENT POSITION ( DocRef ; offset {; anchor} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-document-position.md","sourceDirName":"commands-legacy","slug":"/commands/set-document-position","permalink":"/docs/ja/commands/set-document-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-document-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-document-position","title":"SET DOCUMENT POSITION","slug":"/commands/set-document-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select folder","permalink":"/docs/ja/commands/select-folder"},"next":{"title":"SET DOCUMENT PROPERTIES","permalink":"/docs/ja/commands/set-document-properties"}}'),d=t("785893"),c=t("250065");let r={id:"set-document-position",title:"SET DOCUMENT POSITION",slug:"/commands/set-document-position",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET DOCUMENT POSITION"})," ( ",(0,d.jsx)(n.em,{children:"DocRef"})," ; ",(0,d.jsx)(n.em,{children:"offset"})," {; ",(0,d.jsx)(n.em,{children:"anchor"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"offset"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u4F4D\u7F6E(\u30D0\u30A4\u30C8\u3067\u6307\u5B9A)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"anchor"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"1 = \u30D5\u30A1\u30A4\u30EB\u5148\u982D\u304B\u3089\u306E\u76F8\u5BFE\u4F4D\u7F6E 2 = \u30D5\u30A1\u30A4\u30EB\u6700\u5F8C\u304B\u3089\u306E\u76F8\u5BFE\u4F4D\u7F6E 3 = \u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u306E\u76F8\u5BFE\u4F4D\u7F6E"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"DocRef"}),"\u306B\u6E21\u3057\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u3001\u73FE\u5728\u958B\u3044\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3060\u3051\u306B\u6A5F\u80FD\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["SET DOCUMENT POSITION \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570",(0,d.jsx)(n.em,{children:"offset"}),"\u306B\u6E21\u3059\u3001\u4EE5\u4E0B\u306E\u8AAD\u307F\u8FBC\u307F(",(0,d.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"}),") \u307E\u305F\u306F\u66F8\u304D\u8FBC\u307F(",(0,d.jsx)(n.a,{href:"/docs/ja/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"}),") \u304C\u767A\u751F\u3059\u308B\u4F4D\u7F6E\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570",(0,d.jsx)(n.em,{children:"anchor"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u4F4D\u7F6E\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u5148\u982D\u304B\u3089\u76F8\u5BFE\u7684\u306B\u8868\u308F\u3055\u308C\u307E\u3059\u3002\u5F15\u6570",(0,d.jsx)(n.em,{children:"anchor"}),"\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u306F\u3053\u3053\u306B\u30EA\u30B9\u30C8\u3055\u308C\u3066\u3044\u308B\u5024\u306E\u3046\u3061\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"anchor"}),"\u306B\u3088\u3063\u3066\u306F\u3001\u5F15\u6570",(0,d.jsx)(n.em,{children:"offset"}),"\u306B\u6B63\u306E\u5024\u307E\u305F\u306F\u8CA0\u306E\u5024\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-document-position",children:"Get document position"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",children:"RECEIVE PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"482"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let d={},c=s.createContext(d);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);