"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45216"],{141282:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/backup-info","title":"BACKUP INFO","description":"BACKUP INFO ( selector ; info1 ; info2 )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup-info.md","sourceDirName":"commands-legacy","slug":"/commands/backup-info","permalink":"/docs/ja/commands/backup-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup-info","title":"BACKUP INFO","slug":"/commands/backup-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP","permalink":"/docs/ja/commands/backup"},"next":{"title":"CHECK LOG FILE","permalink":"/docs/ja/commands/check-log-file"}}'),t=s("785893"),i=s("250065");let c={id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},r=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"BACKUP INFO"})," ( ",(0,t.jsx)(e.em,{children:"selector"})," ; ",(0,t.jsx)(e.em,{children:"info1"})," ; ",(0,t.jsx)(e.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"selector"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u53D6\u5F97\u3059\u308B\u60C5\u5831\u306E\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"info1"}),(0,t.jsx)(e.td,{children:"Integer, Date"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30BB\u30EC\u30AF\u30BF\u306E\u50241"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"info2"}),(0,t.jsx)(e.td,{children:"Time, Text"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30BB\u30EC\u30AF\u30BF\u306E\u50242"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["BACKUP INFO \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u305F\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306B\u95A2\u9023\u3059\u308B\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u3068 ",(0,t.jsx)(e.em,{children:"info2"})," \u306E\u578B\u304A\u3088\u3073\u5185\u5BB9\u306F\u3001",(0,t.jsx)(e.em,{children:"selector"})," \u306E\u5024\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002\u201C",(0,t.jsx)(e.em,{children:"Backup and Restore"}),"\u201D\u30C6\u30FC\u30DE\u306E\u6B21\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Last backup date"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsxs)(e.td,{children:["\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u65E5\u4ED8\u3092 ",(0,t.jsx)(e.em,{children:"info1"})," \u306B\u3001\u6642\u9593\u3092 ",(0,t.jsx)(e.em,{children:"info2"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Last backup information"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"5"}),(0,t.jsxs)(e.td,{children:["\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u6240\u8981\u6642\u9593 (\u500D\u9577\u6574\u6570\u3001\u30DF\u30EA\u79D2\u5358\u4F4D) \u3092 ",(0,t.jsx)(e.em,{children:"info1"})," \u306B\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u958B\u59CB\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7 (\u6587\u5B57\u5217\u3001\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,t.jsx)(e.a,{href:"/docs/ja/commands/timestamp",children:"Timestamp"})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u304F\u3060\u3055\u3044) \u3092 ",(0,t.jsx)(e.em,{children:"info2"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Last backup status"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsxs)(e.td,{children:["\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u756A\u53F7\u3092 ",(0,t.jsx)(e.em,{children:"info1"}),"\u306B\u3001\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u3092 ",(0,t.jsx)(e.em,{children:"info2"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Next backup date"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"4"}),(0,t.jsxs)(e.td,{children:["\u6B21\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u65E5\u4ED8\u3092 ",(0,t.jsx)(e.em,{children:"info1"})," \u306B\u3001\u6642\u9593\u3092 ",(0,t.jsx)(e.em,{children:"info2"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/commands/restore",children:"RESTORE"})}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"888"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var d=s(667294);let t={},i=d.createContext(t);function c(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);