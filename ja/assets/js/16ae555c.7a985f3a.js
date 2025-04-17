"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30293"],{451319:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/receive-buffer","title":"RECEIVE BUFFER","description":"RECEIVE BUFFER ( receiveVar )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/receive-buffer.md","sourceDirName":"commands-legacy","slug":"/commands/receive-buffer","permalink":"/docs/ja/20-R8/commands/receive-buffer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-buffer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"receive-buffer","title":"RECEIVE BUFFER","slug":"/commands/receive-buffer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET SERIAL PORT MAPPING","permalink":"/docs/ja/20-R8/commands/get-serial-port-mapping"},"next":{"title":"RECEIVE PACKET","permalink":"/docs/ja/20-R8/commands/receive-packet"}}'),c=r("785893"),t=r("250065");let d={id:"receive-buffer",title:"RECEIVE BUFFER",slug:"/commands/receive-buffer",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"RECEIVE BUFFER"})," ( ",(0,c.jsx)(n.em,{children:"receiveVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"receiveVar"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u3059\u308B\u5909\u6570"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"RECEIVE BUFFER"})," \u306F\u3001",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-channel",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u524D\u3082\u3063\u3066\u958B\u3044\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u304B\u3089\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u3067\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u307E\u3067\u5185\u5BB9\u3092\u4FDD\u6301\u3059\u308B\u30D0\u30C3\u30D5\u30A1\u3092\u6301\u3061\u307E\u3059\u3002",(0,c.jsx)(n.strong,{children:"RECEIVE BUFFER"}),"\u306F\u30B7\u30EA\u30A2\u30EB\u30D0\u30C3\u30D5\u30A1\u304B\u3089\u6587\u5B57\u3092\u8AAD\u307F\u8FBC\u307F\u3001",(0,c.jsx)(n.em,{children:"receiveVar"}),"\u306B\u683C\u7D0D\u3057\u3066\u3001\u30D0\u30C3\u30D5\u30A1\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002\u30D0\u30C3\u30D5\u30A1\u4E2D\u306B\u6587\u5B57\u304C\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u3001",(0,c.jsx)(n.em,{children:"receiveVar"}),"\u306F\u4F55\u3082\u542B\u307F\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Windows"}),(0,c.jsx)(n.br,{}),"\nWindows\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u306F10KB\u306B\u5236\u9650\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30D0\u30C3\u30D5\u30A1\u304C\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u30D0\u30C3\u30D5\u30A1\u304C\u3044\u3063\u3071\u3044\u306B\u306A\u3063\u305F\u5F8C\u3001\u65B0\u3057\u3044\u6587\u5B57\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u6700\u3082\u53E4\u3044\u3082\u306E\u3068\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002\u53E4\u304F\u306A\u3063\u305F\u6587\u5B57\u306F\u5931\u308F\u308C\u308B\u305F\u3081\u3001\u65B0\u3057\u3044\u6587\u5B57\u3092\u53D7\u4FE1\u3059\u308B\u969B\u306F\u3001\u3059\u307F\u3084\u304B\u306B\u30D0\u30C3\u30D5\u30A1\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Mac OS"}),(0,c.jsx)(n.br,{}),"\nMac OS X\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8 \u30D0\u30C3\u30D5\u30A1\u30FC\u30B5\u30A4\u30BA\u306F\u3001\u7406\u8AD6\u7684\u306B\u306F\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5B9F\u969B\u306B\u306F\u5229\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u91CF\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u3002\u30D0\u30C3\u30D5\u30A1\u30FC\u304C\u3044\u3063\u3071\u3044\u306B\u306A\u3063\u305F\u5F8C\u3001\u65B0\u3057\u3044\u6587\u5B57\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u6700\u3082\u53E4\u3044\u3082\u306E\u3068\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002\u53E4\u304F\u306A\u3063\u305F\u6587\u5B57\u306F\u5931\u308F\u308C\u308B\u305F\u3081\u3001\u65B0\u3057\u3044\u6587\u5B57\u3092\u53D7\u4FE1\u3059\u308B\u969B\u306F\u3001\u3059\u307F\u3084\u304B\u306B\u30D0\u30C3\u30D5\u30A1\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"RECEIVE BUFFER"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),"\u3068\u7570\u306A\u308A\u3001\u30D0\u30C3\u30D5\u30A1\u4E2D\u306E\u30C7\u30FC\u30BF\u304C\u4F55\u3067\u3042\u308C\u3001\u305D\u308C\u3092\u5373\u5EA7\u306B\u8FD4\u3057\u307E\u3059\u3002",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),"\u306F\u30D0\u30C3\u30D5\u30A1\u4E2D\u306B\u6307\u5B9A\u3057\u305F\u6587\u5B57\u3092\u767A\u898B\u3059\u308B\u307E\u3067\u3001\u307E\u305F\u306F\u6307\u5B9A\u3057\u305F\u6570\u306E\u6587\u5B57\u304C\u5165\u529B\u3055\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"RECEIVE BUFFER"}),"\u306E\u5B9F\u884C\u4E2D\u306B\u3001Ctrl-Alt-Shift (Windows) \u307E\u305F\u306F Command-Option-Shift (Macintosh) \u3092\u62BC\u3057\u3066\u3001\u53D7\u4FE1\u3092\u4E2D\u65AD\u3067\u304D\u307E\u3059\u3002\u4E2D\u65AD\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u30A8\u30E9\u30FC-9994\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u308A\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9LISTEN TO SERIAL PORT\u306F\u3001RECEIVE BUFFER\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u304B\u3089\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u3001\u305D\u308C\u3092\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306B\u8FFD\u52A0\u3057\u307E\u3059:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// LISTEN TO SERIAL PORT\n\xa0\xa0// \u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3092\u958B\u304F\n\xa0SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)\n\xa0<>IP_Listen_Serial_Port:=True\n\xa0While(<>IP_Listen_Serial_Port)\n\xa0\xa0\xa0\xa0RECEIVE BUFFER($vtBuffer)\n\xa0\xa0\xa0\xa0If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>vtBuffer:=""\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0<>vtBuffer:=<>vtBuffer+$Buffer\n\xa0End while\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306E\u6642\u70B9\u3067\u3001\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570<>vtBuffer\u3092\u8AAD\u307F\u8FBC\u307F\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u304B\u3089\u53D7\u4FE1\u3057\u305F\u30C7\u30FC\u30BF\u306E\u51E6\u7406\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u306E\u76E3\u8996\u3092\u4E2D\u65AD\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// \u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u306E\u5F85\u3061\u53D7\u3051\u3092\u505C\u6B62\u3059\u308B\n\xa0<>IP_Listen_Serial_Port:=False\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u306E\u30B3\u30F3\u30D5\u30EA\u30AF\u30C8\u3092\u907F\u3051\u308B\u305F\u3081\u306B\u3001\u30BB\u30DE\u30D5\u30A9\u3092\u5229\u7528\u3057\u3066\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570<>vtBuffer\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u4FDD\u8B77\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306F",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/semaphore",title:"Semaphore",children:"Semaphore"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",children:"ON ERR CALL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/semaphore",children:"Semaphore"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-channel",children:"SET CHANNEL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R8/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"172"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,c.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let c={},t=s.createContext(c);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);