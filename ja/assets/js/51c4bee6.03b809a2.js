"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60229"],{140096:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","description":"MOBILE APP REFRESH SESSIONS","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/mobile-app-refresh-sessions.md","sourceDirName":"commands-legacy","slug":"/commands/mobile-app-refresh-sessions","permalink":"/docs/ja/20-R7/commands/mobile-app-refresh-sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmobile-app-refresh-sessions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","slug":"/commands/mobile-app-refresh-sessions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load 4D View document","permalink":"/docs/ja/20-R7/commands/load-4d-view-document"},"next":{"title":"Monitored activity","permalink":"/docs/ja/20-R7/commands/monitored-activity"}}'),r=s("785893"),d=s("250065");let i={id:"mobile-app-refresh-sessions",title:"MOBILE APP REFRESH SESSIONS",slug:"/commands/mobile-app-refresh-sessions",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"MOBILE APP REFRESH SESSIONS"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(e.table,{children:(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,r.jsx)(e.th,{})]})})}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"MOBILE APP REFRESH SESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u306EMobileApps \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u3042\u308B\u5168\u3066\u306E\u30E2\u30D0\u30A4\u30EB\u30A2\u30D7\u30EA\u30BB\u30C3\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u7DE8\u96C6\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u30E1\u30E2\u30EA\u5185\u306B\u3042\u308B\u65E2\u5B58\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:['\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30014D for iOS \u304A\u3088\u3073 4D for Android \u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u304C\u30ED\u30FC\u30AB\u30EB\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u7DE8\u96C6\u3055\u308C\u305F\u3042\u3068\u306B\u3001\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u60C5\u5831\u3092"\u5F37\u5236\u7684\u306B"\u518D\u8AAD\u307F\u8FBC\u307F\u3055\u305B\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u5FF5\u982D\u306B\u30C7\u30B6\u30A4\u30F3\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u30EA\u30BB\u30C3\u30C8\u304C\u5FC5\u8981\u3067\u3042\u308C\u3070\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u305F\u4E0A\u3067',(0,r.jsx)(e.strong,{children:"MOBILE APP REFRESH SESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u30E2\u30D0\u30A4\u30EB\u30A2\u30D7\u30EA\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.a,{href:"https://developer.4d.com/go-mobile",children:"Go mobile \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306FMobileApps\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u5404\u30BB\u30C3\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E(json \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3001json \u30B9\u30AD\u30FC\u30DE\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u30C7\u30FC\u30BF\u7B49\u306E)\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306B\u4E0D\u5099\u304C\u306A\u304F\u3001\u304B\u3064\u7DE8\u96C6\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u3001\u30E1\u30E2\u30EA\u5185\u306B\u3042\u308B\u5BFE\u5FDC\u3059\u308B\u30BB\u30C3\u30B7\u30E7\u30F3(\u3059\u3067\u306B\u3042\u308C\u3070)\u306F\u7DE8\u96C6\u3055\u308C\u305F\u4E2D\u8EAB\u3067\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u6709\u52B9\u3067\u306A\u3044\u3001\u3042\u308B\u3044\u306F\u524A\u9664\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u30E1\u30E2\u30EA\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/on-err-call",children:"ON ERR CALL"})," \u304A\u3088\u3073 ",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/last-errors",children:"Last errors"}),"  \u30B3\u30DE\u30F3\u30C9\u3092\u901A\u3057\u3066\u7BA1\u7406\u53EF\u80FD\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u540D"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u8A73\u7D30"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mobi"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"json \u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u304C\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u4E00\u81F4\u3057\u307E\u305B\u3093"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mobi"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"json \u30D5\u30A1\u30A4\u30EB\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mobi"}),(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"json \u30D5\u30A1\u30A4\u30EB\u306Fjson \u30B9\u30AD\u30FC\u30DE\u306B\u5247\u3057\u3066\u3044\u307E\u305B\u3093"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mobi"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"\u63A5\u7D9A\u30C8\u30FC\u30AF\u30F3\u304C\u30AB\u30EC\u30F3\u30C8\u306E\u60C5\u5831\u3068\u5408\u81F4\u3057\u307E\u305B\u3093"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u5168\u3066\u306E\u30E2\u30D1\u30A4\u30EB\u30A2\u30D7\u30EA\u306E\u3001\u5168\u3066\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0var $sessionsPath : Text\n\xa0$sessionsPath:=Get 4D folder(MobileApps folder)\n\xa0DELETE FOLDER(sessionsPath;Delete with contents)\n\xa0MOBILE APP REFRESH SESSIONS\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/on-mobile-app-authentication-database-method",children:"On Mobile App Authentication \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1596"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);