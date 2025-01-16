"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80935"],{829311:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/drop-remote-user","title":"DROP REMOTE USER","description":"DROP REMOTE USER ( userSession )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/drop-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/drop-remote-user","permalink":"/docs/ja/commands/drop-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-remote-user.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"drop-remote-user","title":"DROP REMOTE USER","slug":"/commands/drop-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Database measures","permalink":"/docs/ja/commands/database-measures"},"next":{"title":"ds","permalink":"/docs/ja/commands/ds"}}'),t=s("785893"),d=s("250065");let o={id:"drop-remote-user",title:"DROP REMOTE USER",slug:"/commands/drop-remote-user",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DROP REMOTE USER"})," ( ",(0,t.jsx)(n.em,{children:"userSession"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"userSession"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30E6\u30FC\u30B6\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3ID"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DROP REMOTE USER"})," \u30B3\u30DE\u30F3\u30C9\u306F4D Server \u306B\u30EA\u30E2\u30FC\u30C8\u3067\u63A5\u7D9A\u3057\u3066\u3044\u308B\u7279\u5B9A\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u63A5\u7D9A\u3092\u89E3\u9664\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u63A5\u7D9A\u3092\u89E3\u9664\u3057\u305F\u3044\u30E6\u30FC\u30B6\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3ID \u3092\u6E21\u3057\u307E\u3059\u3002\u30BB\u30C3\u30B7\u30E7\u30F3ID \u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/commands/process-activity",children:"Process activity"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u975E\u540C\u671F\u306B\u5B9F\u884C\u3055\u308C\u3001\u307E\u305F4D Server \u3067\u3057\u304B\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u304C\u30EA\u30E2\u30FC\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u30ED\u30FC\u30AB\u30EB\u306B\u5B9F\u884C\u3055\u308C\u308B\u304B\u3001\u3042\u308B\u3044\u306F\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u72484D \u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"DROP REMOTE USER"})," \u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u7279\u5B9A\u306E\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u3059\u3079\u304D\u30E1\u30BD\u30C3\u30C9\n\xa0var $userCol : Collection\n\xa0var $element : Object\n\xa0\n\xa0\xa0//Vanessa \u3068\u3044\u3046\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u63A5\u7D9A\u3092\u89E3\u9664\u3059\u308B\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0DROP REMOTE USER($element.ID)\n\xa0End for each\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/reject-new-remote-connections",children:"REJECT NEW REMOTE CONNECTIONS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/send-message-to-remote-user",children:"SEND MESSAGE TO REMOTE USER"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"1633"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);