"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32345"],{947319:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>E,assets:()=>a,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/set-timeout","title":"SET TIMEOUT","description":"SET TIMEOUT ( seconds )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-timeout.md","sourceDirName":"commands-legacy","slug":"/commands/set-timeout","permalink":"/docs/ja/commands/set-timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timeout.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-timeout","title":"SET TIMEOUT","slug":"/commands/set-timeout","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CHANNEL","permalink":"/docs/ja/commands/set-channel"},"next":{"title":"USE CHARACTER SET","permalink":"/docs/ja/commands/use-character-set"}}'),r=s("785893"),c=s("250065");let d={id:"set-timeout",title:"SET TIMEOUT",slug:"/commands/set-timeout",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMEOUT"})," ( ",(0,r.jsx)(n.em,{children:"seconds"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"seconds"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u79D2\u6570"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["SET TIMEOUT \u306F\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30B3\u30DE\u30F3\u30C9\u306E\u8A31\u5BB9\u3055\u308C\u308B\u5F85\u3061\u6642\u9593\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30B3\u30DE\u30F3\u30C9\u304C\u6307\u5B9A\u3057\u305F\u6642\u9593",(0,r.jsx)(n.em,{children:"seconds"}),"\u4EE5\u5185\u306B\u7D42\u4E86\u3057\u306A\u3044\u3068\u3001\u305D\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30B3\u30DE\u30F3\u30C9\u306F\u53D6\u308A\u6D88\u3055\u308C\u3001\u30A8\u30E9\u30FC-9990\u304C\u751F\u6210\u3055\u308C\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F85\u3061\u6642\u9593\u306F\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u306B\u4E0E\u3048\u3089\u308C\u305F\u30C8\u30FC\u30BF\u30EB\u6642\u9593\u3067\u3059\u3002\u30C7\u30FC\u30BF\u306E\u9001\u53D7\u4FE1\u306B\u8981\u3059\u308B\u6642\u9593\u3067\u306F\u306A\u3044\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4EE5\u524D\u306E\u8A2D\u5B9A\u5024\u3092\u53D6\u308A\u6D88\u3057\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u901A\u4FE1\u306E\u30E2\u30CB\u30BF\u3092\u505C\u6B62\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"seconds"}),"\u306B0\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306E\u8A2D\u5B9A\u304C\u5F71\u97FF\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u3057\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u8A2D\u5B9A\u3057\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"}),"\u3067\u30C7\u30FC\u30BF\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u8A2D\u5B9A\u3057\u305F\u6642\u9593\u5185\u306B\u30C7\u30FC\u30BF\u3092\u53D7\u3051\u53D6\u308C\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none)\xa0// \u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3092\u958B\u304F\n\xa0SET TIMEOUT(10)\xa0// \u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u309210\u79D2\u306B\u8A2D\u5B9A\n\xa0ON ERR CALL("CATCH COM ERRORS")\xa0// \u30E1\u30BD\u30C3\u30C9\u304C\u4E2D\u65AD\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\n\xa0RECEIVE PACKET(vtBuffer;Char(13))\xa0// \u6539\u884C\u307E\u3067\u8AAD\u307F\u8FBC\u307F\n\xa0If(OK=0)\n\xa0\xa0\xa0\xa0ALERT("Error receiving data.")\n\xa0Else\n\xa0\xa0\xa0\xa0[People]Name:=vtBuffer\xa0// \u53D7\u4FE1\u3057\u305F\u30C7\u30FC\u30BF\u3092\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u4FDD\u5B58\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",children:"RECEIVE VARIABLE"})]})]})}function E(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},c=t.createContext(r);function d(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);