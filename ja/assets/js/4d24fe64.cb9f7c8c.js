"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46353"],{394219:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/on-drop-database-method","title":"On Drop database method","description":"On Drop\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-drop-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-drop-database-method","permalink":"/docs/ja/commands/on-drop-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-drop-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-drop-database-method","title":"On Drop database method","slug":"/commands/on-drop-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Startup database method","permalink":"/docs/ja/commands/on-backup-startup-database-method"},"next":{"title":"On Exit database method","permalink":"/docs/ja/commands/on-exit-database-method"}}'),s=t("785893"),o=t("250065");let r={id:"on-drop-database-method",title:"On Drop database method",slug:"/commands/on-drop-database-method",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Drop\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:""}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Drop\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u30ED\u30FC\u30AB\u30EB\u304A\u3088\u3073\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30A9\u30FC\u30E0\u3084\u30A6\u30A3\u30F3\u30C9\u30A6\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u5916\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u308B\u3068\u81EA\u52D5\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3068\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30BF\u30A4\u30D7\u306B\u5FDC\u3058\u3066\u3001\u7570\u306A\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u88DC\u8DB3"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MDI\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7A7A\u306E\u30A8\u30EA\u30A2\u3078\u306E\u30C9\u30ED\u30C3\u30D7"}),(0,s.jsx)(n.td,{children:"Windows"}),(0,s.jsxs)(n.td,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304CSDI\u30E2\u30FC\u30C9\u306E\u5834\u5408\u306B\u306FMDI\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u5B58\u5728\u3057\u306A\u3044\u305F\u3081\u3001\u5229\u7528\u3067\u304D\u307E\u305B\u3093(",(0,s.jsx)(n.em,{children:"SDI mode on Windows"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Dock\u306E4D\u30A2\u30A4\u30B3\u30F3\u3078\u306E\u30C9\u30ED\u30C3\u30D7"}),(0,s.jsx)(n.td,{children:"macOS"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306E4D\u30A2\u30A4\u30B3\u30F3\u3078\u306E\u30C9\u30ED\u30C3\u30D7"}),(0,s.jsx)(n.td,{children:"Windows(*) & macOS"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"On Drop\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3059\u3067\u306B\u8D77\u52D5\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u547C\u3073\u51FA\u3055\u308C\u307E\u3059(\u305F\u3060\u30574D Desktop\u306B\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u5408\u3092\u9664\u304F)\u30024D Desktop\u306B\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u8D77\u52D5\u3057\u3066\u3044\u306A\u304F\u3066\u3082\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u30AB\u30B9\u30BF\u30E0\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u7F72\u540D\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3068\u3044\u3046\u3053\u3068\u3067\u3059"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"(*) Windows\u752864-bit\u72484D Developer\u3067\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u8D77\u52D5\u3057\u3066\u3057\u307E\u3046\u304B\u3089\u3067\u3059(\u30B7\u30B9\u30C6\u30E0\u6A5F\u80FD)\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Mac\u3067\u306F\u3001\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u305F\u3081\u306B\u306F\u30C9\u30ED\u30C3\u30D7\u4E2D",(0,s.jsx)(n.strong,{children:"Option"}),"+",(0,s.jsx)(n.strong,{children:"Command"})," \u30AD\u30FC\u3092\u62BC\u3055\u3048\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u306F\u3001\u30D5\u30A9\u30FC\u30E0\u5916\u5074\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u305F4D Write\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//On Drop database method\n\xa0droppedFile:=Get file from pasteboard(1)\n\xa0If(Position(".4W7";droppedFile)=Length(droppedFile)-3)\n\xa0\xa0\xa0\xa0externalArea:=Open external window(100;100;500;500;0;droppedFile;"_4D Write")\n\xa0\xa0\xa0\xa0WR OPEN DOCUMENT(externalArea;droppedFile)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var d=t(667294);let s={},o=d.createContext(s);function r(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);