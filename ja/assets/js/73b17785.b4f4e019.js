"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26646"],{502701:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","description":"SEND MESSAGE TO REMOTE USER ( message {; userSession} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-message-to-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/send-message-to-remote-user","permalink":"/docs/ja/20-R8/commands/send-message-to-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-message-to-remote-user.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","slug":"/commands/send-message-to-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTART 4D","permalink":"/docs/ja/20-R8/commands/restart-4d"},"next":{"title":"SET DATABASE LOCALIZATION","permalink":"/docs/ja/20-R8/commands/set-database-localization"}}'),r=n("785893"),d=n("250065");let o={id:"send-message-to-remote-user",title:"SEND MESSAGE TO REMOTE USER",slug:"/commands/send-message-to-remote-user",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," ( ",(0,r.jsx)(s.em,{children:"message"})," {; ",(0,r.jsx)(s.em,{children:"userSession"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5F15\u6570"}),(0,r.jsx)(s.th,{children:"\u578B"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"message"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Text sent to user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userSession"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"User's session ID"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5168\u3066\u306E\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u3001\u3042\u308B\u3044\u306F\u7279\u5B9A\u306E\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3066\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u3001\u8868\u793A\u3055\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u30E6\u30FC\u30B6\u30FC\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u3001\u30A2\u30E9\u30FC\u30C8\u753B\u9762\u3042\u308B\u3044\u306F\u901A\u77E5\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4EFB\u610F\u306E",(0,r.jsx)(s.em,{children:"userSession"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30BB\u30C3\u30B7\u30E7\u30F3ID\u3092\u6E21\u3059\u3053\u3068\u3067\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u7279\u5B9A\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30BB\u30C3\u30B7\u30E7\u30F3ID\u306F",(0,r.jsx)(s.a,{href:"/docs/ja/20-R8/commands/process-activity",children:"Process activity"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(s.em,{children:"userSession"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u5168\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u6CE8"}),": \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D Server \u4E0A\u3067\u306E\u307F\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u304C\u3001\u30EA\u30E2\u30FC\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u30ED\u30FC\u30AB\u30EB\u306B\u5B9F\u884C\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u72484D \u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001",(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," \u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(s.p,{children:"\u5168\u30E6\u30FC\u30B6\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u305F\u5F8C\u306B\u3001\u7279\u5B9A\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u5225\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// \u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u3059\u3079\u304D\u30E1\u30BD\u30C3\u30C9\n\xa0var $message : Text\n\xa0var $element : Object\n\xa0var $userCol : Collection\n\xa0\n\xa0\xa0// \u30BB\u30C3\u30B7\u30E7\u30F3\u60C5\u5831\u3092\u53D6\u5F97\n\xa0$userCol:=(Get process activity(Sessions only)).sessions\n\xa0\n\xa0\xa0// \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5168\u30E6\u30FC\u30B6\u30FC\u306B\u9001\u4FE1\n\xa0$message:="A maintenance operation is scheduled for 10pm. The server will be restarted. Please log out before 10pm."\n\xa0SEND MESSAGE TO REMOTE USER($message)\n\xa0\n\xa0\xa0// \u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u3001"Vanessa" \u3068\u3044\u3046\u5358\u4E00\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u9001\u4FE1\n\xa0$message:="Hello Vanessa"\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0SEND MESSAGE TO REMOTE USER($message;$element.ID)\n\xa0End for each\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/ja/20-R8/commands/drop-remote-user",children:"DROP REMOTE USER"})}),"\n",(0,r.jsx)(s.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(s.td,{children:"1632"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var t=n(667294);let r={},d=t.createContext(r);function o(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);