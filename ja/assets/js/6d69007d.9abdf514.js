"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61252"],{420553:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/soap-get-info","title":"SOAP Get info","description":"SOAP Get info ( infoNum ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/soap-get-info","permalink":"/docs/ja/20-R7/commands/soap-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-get-info","title":"SOAP Get info","slug":"/commands/soap-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP DECLARATION","permalink":"/docs/ja/20-R7/commands/soap-declaration"},"next":{"title":"SOAP REJECT NEW REQUESTS","permalink":"/docs/ja/20-R7/commands/soap-reject-new-requests"}}'),d=s("785893"),r=s("250065");let i={id:"soap-get-info",title:"SOAP Get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SOAP Get info"})," ( ",(0,d.jsx)(e.em,{children:"infoNum"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"infoNum"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u53D6\u5F97\u3059\u308BSOAP\u60C5\u5831\u306E\u30BF\u30A4\u30D7\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"SOAP\u60C5\u5831"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SOAP Get info"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u95A2\u3059\u308B\u3055\u307E\u3056\u307E\u60C5\u5831\u3092\u6587\u5B57\u5217\u3067\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u969B\u3001RPC\u5F15\u6570\u306E\u307B\u304B\u306B\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u95A2\u3059\u308B\u8FFD\u52A0\u306E\u60C5\u5831\u3092\u5F97\u3089\u308C\u308B\u3068\u4FBF\u5229\u3067\u3059\u3002\u4F8B\u3048\u3070\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u305F\u3081\u3001",(0,d.jsx)(e.em,{children:"On Web Authentication\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u5185\u3067\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u305FWeb\u30B5\u30FC\u30D3\u30B9\u306E\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u77E5\u308A\u305F\u3044SOAP\u60C5\u5831\u306E\u30BF\u30A4\u30D7\u756A\u53F7\u3092",(0,d.jsx)(e.em,{children:"infoNum"})," \u5F15\u6570\u306B\u6E21\u3057\u307E\u3059\u3002*Web Services (Server)*\u30C6\u30FC\u30DE\u3067\u5B9A\u7FA9\u6E08\u307F\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SOAP method name"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u5B9F\u884C\u3055\u308C\u3088\u3046\u3068\u3057\u3066\u3044\u308BWeb\u30B5\u30FC\u30D3\u30B9\u30E1\u30BD\u30C3\u30C9\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SOAP service name"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"\u30E1\u30BD\u30C3\u30C9\u304C\u5C5E\u3057\u3066\u3044\u308BWeb\u30B5\u30FC\u30D3\u30B9\u306E\u540D\u524D"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," \u307E\u305F\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u305F\u3081\u30014D\u306B\u9001\u4FE1\u3055\u308C\u308BWeb\u30B5\u30FC\u30D3\u30B9\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6700\u5927\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u884C\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"784"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);