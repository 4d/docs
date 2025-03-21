"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55952"],{316511:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","description":"REJECT NEW REMOTE CONNECTIONS ( rejectStatus )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/reject-new-remote-connections.md","sourceDirName":"commands-legacy","slug":"/commands/reject-new-remote-connections","permalink":"/docs/ja/commands/reject-new-remote-connections","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject-new-remote-connections.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","slug":"/commands/reject-new-remote-connections","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUIT 4D","permalink":"/docs/ja/commands/quit-4d"},"next":{"title":"RELOAD PROJECT","permalink":"/docs/ja/commands/reload-project"}}'),r=t("785893"),c=t("250065");let d={id:"reject-new-remote-connections",title:"REJECT NEW REMOTE CONNECTIONS",slug:"/commands/reject-new-remote-connections",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," ( ",(0,r.jsx)(n.em,{children:"rejectStatus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rejectStatus"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u63A5\u7D9A\u3092\u62D2\u5426\u3057\u305F\u3044\u5834\u5408\u306B\u306FTrue\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306FFalse"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u304C\u65B0\u898F\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u3001\u30EA\u30E2\u30FC\u30C8\u63A5\u7D9A\u3092\u62D2\u5426\u3059\u308B\u305F\u3081\u306B\u306F",(0,r.jsx)(n.strong,{children:"true"})," \u3092\u6E21\u3057\u307E\u3059\u3002",(0,r.jsx)(n.strong,{children:"false"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u65B0\u898F\u30EA\u30E2\u30FC\u30C8\u63A5\u7D9A\u3092\u8A31\u53EF\u3059\u308B\u3053\u3068\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8"}),": \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D Server \u4E0A\u3067\u306E\u307F\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u304C\u3001\u30EA\u30E2\u30FC\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u30ED\u30FC\u30AB\u30EB\u306B\u5B9F\u884C\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u72484D \u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," \u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u65B0\u898F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u3092\u62D2\u5426\u3057\u305F\u3044\u3001\u3042\u308B\u3044\u306F\u8A31\u53EF\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// \u65B0\u898F\u63A5\u7D9A\u3092\u62D2\u5426\n\xa0REJECT NEW REMOTE CONNECTIONS(True)\n\xa0\xa0// \u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\n\xa0...\n\xa0\xa0// \u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF\n\xa0REJECT NEW REMOTE CONNECTIONS(False)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/drop-remote-user",children:"DROP REMOTE USER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/application-info",children:"Application info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1635"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},c=s.createContext(r);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);