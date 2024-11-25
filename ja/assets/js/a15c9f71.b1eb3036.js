"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84368"],{407009:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/backup","title":"BACKUP","description":"BACKUP","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup.md","sourceDirName":"commands-legacy","slug":"/commands/backup","permalink":"/docs/ja/commands/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup","title":"BACKUP","slug":"/commands/backup","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Backup","permalink":"/docs/ja/category/backup"},"next":{"title":"BACKUP INFO","permalink":"/docs/ja/commands/backup-info"}}'),c=s("785893"),r=s("250065");let a={id:"backup",title:"BACKUP",slug:"/commands/backup",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"BACKUP"})}),"\n\n\n\n\n\n\n\n",(0,c.jsx)(n.table,{children:(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,c.jsx)(n.th,{})]})})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,c.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"BACKUP"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u3092\u7528\u3044\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u304C\u3001\u9032\u6357\u30D0\u30FC\u304C\u753B\u9762\u4E0A\u306B\u73FE\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306ESettings\u30D5\u30A9\u30EB\u30C0\u30FC\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30D5\u30A9\u30EB\u30C0\u30FC\u306E",(0,c.jsx)(n.em,{children:"Backup.xml"}),"\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059 (",(0,c.jsx)(n.em,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"})," \u53C2\u7167)\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"BACKUP"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5B9F\u884C\u958B\u59CB\u6642\u306B",(0,c.jsx)(n.em,{children:"On Backup Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3092\u547C\u3073\u51FA\u3057\u3001\u5B9F\u884C\u7D42\u4E86\u6642\u306B",(0,c.jsx)(n.em,{children:"On Backup Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002",(0,c.jsx)(n.br,{}),"\n\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306E\u305F\u3081\u3001\u3053\u308C\u3089\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3079\u304D\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"4D Server:"})," \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001",(0,c.jsx)(n.strong,{children:"BACKUP"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u3068\u307F\u306A\u3055\u308C\u3001\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,c.jsx)(n.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,c.jsxs)(n.p,{children:["\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u3001\u305D\u306E\u554F\u984C\u306B\u95A2\u3059\u308B\u60C5\u5831\u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30ED\u30B0\u306B\u66F8\u304D\u8FBC\u307E\u308C\u3001\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u30A8\u30E9\u30FC\u3060\u3051\u304C",(0,c.jsx)(n.a,{href:"/docs/ja/commands/on-backup-shutdown-database-method",children:"On Backup Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306B\u9001\u3089\u308C\u307E\u3059\u3002\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30A8\u30E9\u30FC\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F\u3001\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/commands/backup-info",children:"BACKUP INFO"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.em,{children:"On Backup Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/restore",children:"RESTORE"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let c={},r=t.createContext(c);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);