"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17993"],{62382:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/soap-send-fault","title":"SOAP SEND FAULT","description":"SOAP SEND FAULT ( faultType ; description )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-send-fault.md","sourceDirName":"commands-legacy","slug":"/commands/soap-send-fault","permalink":"/docs/ja/commands/soap-send-fault","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-send-fault.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-send-fault","title":"SOAP SEND FAULT","slug":"/commands/soap-send-fault","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP Request","permalink":"/docs/ja/commands/soap-request"},"next":{"title":"Windows","permalink":"/docs/ja/category/windows"}}'),d=s("785893"),r=s("250065");let l={id:"soap-send-fault",title:"SOAP SEND FAULT",slug:"/commands/soap-send-fault",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SOAP SEND FAULT"})," ( ",(0,d.jsx)(e.em,{children:"faultType"})," ; ",(0,d.jsx)(e.em,{children:"description"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"faultType"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"1 = \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5074\u306E\u30A8\u30E9\u30FC, 2 = \u30B5\u30FC\u30D0\u30FC\u5074\u306E\u30A8\u30E9\u30FC"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"description"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"SOAP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3059\u308B\u3001\u30A8\u30E9\u30FC\u306E\u8AAC\u660E"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SOAP SEND FAULT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001SOAP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u30A8\u30E9\u30FC\u306E\u767A\u751F\u5143 (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u307E\u305F\u306F\u30B5\u30FC\u30D0) \u3092\u793A\u3059\u30A8\u30E9\u30FC\u3092\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u7D50\u679C\u3092\u8FD4\u3055\u306A\u304F\u3066\u3082\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u30A8\u30E9\u30FC\u793A\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u4F8B\u3048\u3070\u3001\u201CSquare_root\u201D Web\u30B5\u30FC\u30D3\u30B9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u6642\u306B\u8CA0\u6570\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u9001\u4FE1\u3055\u308C\u305F\u5834\u5408\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u308B\u30A8\u30E9\u30FC\u304C\u691C\u77E5\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3001\u6B63\u6570\u304C\u5FC5\u8981\u3067\u3042\u308B\u3053\u3068\u3092\u901A\u77E5\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u30B5\u30FC\u30D0\u5074\u306E\u30A8\u30E9\u30FC\u3068\u3057\u3066\u306F\u3001\u4F8B\u3048\u3070\u3001\u30E1\u30BD\u30C3\u30C9\u5B9F\u884C\u6642\u306E\u30E1\u30E2\u30EA\u4E0D\u8DB3\u306A\u3069\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"faultType"}),"\u306B\u30A8\u30E9\u30FC\u306E\u767A\u751F\u5143\u3092\u6E21\u3057\u307E\u3059\u3002*Web Services (Server)*\u30C6\u30FC\u30DE\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SOAP client fault"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SOAP server fault"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"description"}),"\u306B\u306F\u30A8\u30E9\u30FC\u306E\u8AAC\u660E\u3092\u6E21\u3057\u307E\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u5B9F\u88C5\u304C\u5BFE\u5FDC\u3057\u3066\u3044\u308C\u3070\u3001\u30A8\u30E9\u30FC\u3092\u51E6\u7406\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u201CSquare_root\u201D Web\u30B5\u30FC\u30D3\u30B9\u306E\u4F8B\u984C\u306B\u304A\u3044\u3066\u3001\u8CA0\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0SOAP SEND FAULT(SOAP client fault;"Positive values required")\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/soap-declaration",children:"SOAP DECLARATION"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/soap-get-info",children:"SOAP Get info"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"781"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);