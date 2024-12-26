"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20650"],{501605:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/open-database","title":"OPEN DATABASE","description":"OPEN DATABASE ( filePath )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-database.md","sourceDirName":"commands-legacy","slug":"/commands/open-database","permalink":"/docs/ja/commands/open-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-database","title":"OPEN DATABASE","slug":"/commands/open-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATA FILE","permalink":"/docs/ja/commands/open-data-file"},"next":{"title":"Open datastore","permalink":"/docs/ja/commands/open-datastore"}}'),d=s("785893"),a=s("250065");let r={id:"open-database",title:"OPEN DATABASE",slug:"/commands/open-database",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"\u6CE8",id:"\u6CE8",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"OPEN DATABASE"})," ( ",(0,d.jsx)(e.em,{children:"filePath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"filePath"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsxs)(e.td,{children:["\u958B\u304D\u305F\u3044\u30D5\u30A1\u30A4\u30EB\u540D(.4db\u3001.4dc\u3001.4dbase \u307E\u305F\u306F .4dlink)\u3001",(0,d.jsx)(e.br,{}),"\u307E\u305F\u306F\u958B\u304D\u305F\u3044\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u306E\u5B8C\u5168\u306A\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9"]})]})})]}),"\n",(0,d.jsx)(e.h4,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"OPEN DATABASE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u958B\u3044\u3066\u3044\u308B4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9589\u3058\u3001",(0,d.jsx)(e.em,{children:"filePath"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u5373\u5EA7\u306B\u958B\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u81EA\u52D5\u7684\u306B\u30C6\u30B9\u30C8\u3092\u3059\u308B\u76EE\u7684\u3084\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u5F8C\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u81EA\u52D5\u7684\u306B\u958B\u3044\u305F\u308A\u3001\u7D44\u307F\u8FBC\u307F 4D\u30EA\u30E2\u30FC\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u63A5\u7D9A\u3059\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B5\u30FC\u30D0\u30FC\u3092\u9078\u629E\u3055\u305B\u305F\u308A\u3059\u308B\u306E\u306B\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"filePath"})," \u5F15\u6570\u306B\u306F\u3001\u958B\u304D\u305F\u3044\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u540D\u524D\u307E\u305F\u306F\u5B8C\u5168\u306A\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u62E1\u5F35\u5B50\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:".4db (\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB)"}),"\n",(0,d.jsx)(e.li,{children:".4dc (\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB)"}),"\n",(0,d.jsx)(e.li,{children:".4dbase (OS X \u30D1\u30C3\u30B1\u30FC\u30B8)"}),"\n",(0,d.jsx)(e.li,{children:".4dproject (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB)"}),"\n",(0,d.jsx)(e.li,{children:".4dz (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u904B\u7528\u30D5\u30A1\u30A4\u30EB)"}),"\n",(0,d.jsx)(e.li,{children:".4dlink (\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30D5\u30A1\u30A4\u30EB)"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F\u3092\u6E21\u3059\u5834\u5408\u3001\u73FE\u5728\u958B\u3044\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u968E\u5C64\u306B\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u7F6E\u304B\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u30A2 \u30AF\u30BB\u30B9\u30D1\u30B9\u304C\u6709\u52B9\u306A\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8A2D\u5B9A\u3057\u3066\u3044\u305F\u5834\u5408\u30014D\u306F\u958B\u3044\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9589\u3058\u3001\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304D\u307E\u3059\u3002\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u30E2\u30FC\u30C9\u306B \u304A\u3044\u3066\u306F\u3001\u9589\u3058\u3089\u308C\u305F\u65B9\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-exit-database-method",children:"On Exit\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u3068\u3001\u65B0\u305F\u306B\u958B\u304B\u308C\u305F\u65B9\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-startup-database-method",children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," (\u307E\u305F\u306F ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-server-open-connection-database-method",children:"On Server Open Connection\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),") \u304C\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u8B66\u544A"})," ",(0,d.jsx)(e.strong,{children:":"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u524D\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5F37\u5236\u7684\u306B\u9589\u3058\u308B\u305F\u3081\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-startup-database-method",children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u306E\u4E2D\u3084\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u308B\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u306F\u901A\u5E38\u306F\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u975E\u540C\u671F\u7684\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u547C\u3073\u51FA\u3057\u306E\u5F8C\u30014D\u306F\u4ED6\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u7D9A\u3051\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F",(0,d.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"}),"\u30E1\u30CB\u30E5\u30FC\u306E",(0,d.jsx)(e.strong,{children:"4D\u3092\u7D42\u4E86"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u9078\u629E\u3057\u305F\u306E\u3068\u540C\u3058\u6319\u52D5\u3092\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u3001\u958B\u3044\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u306F\u5168\u306610\u79D2\u9593\u306E\u7336\u4E88\u306E\u5F8C\u306B\u7D42\u4E86\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u304B\u7121\u52B9\u3067\u3042\u308B\u6642\u3001\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u30014D\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0OPEN DATABASE("C:\\\\databases\\\\Invoices\\\\Invoices.4db")\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(e.p,{children:["\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u3092\u9078\u629E\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-startup-database-method",children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u304B\u3089\u7ACB\u3061\u4E0A\u3052\u305F\u30D7\u30ED\u30BB\u30B9\u3067\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u305D\u308C\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $xml : Text\n\n$xml:=""\n\xa0$databaseName:="myServer"\n\xa0$IP:="192.168.6.7:19813"\n\nIf(Shift down)\n\xa0$IP:=Request("IP address to connect to "+$databaseName;$IP)\nElse\n\xa0ok:=1\nEnd if\n\xa0\nIf(ok=1)\n\xa0$xml:=Replace string($xml;"{databaseName}";$databaseName)\n\xa0$xml:=Replace string($xml;"{IP}";$IP)\n\xa0var $link : Object\n\xa0$link:=Folder(fk user preferences folder).file("server.4dlink")\n\xa0$link.setText($xml)\n\xa0OPEN DATABASE($link.platformPath)\nElse\n\xa0QUIT 4D\nEnd if\n\n\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1321"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var t=s(667294);let d={},a=t.createContext(d);function r(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);