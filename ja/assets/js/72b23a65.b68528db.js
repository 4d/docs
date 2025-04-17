"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35359"],{307822:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/php-get-full-response","title":"PHP GET FULL RESPONSE","description":"PHP GET FULL RESPONSE ( stdOut {; errLabels ; errValues} {; httpHeaderFields {; httpHeaderValues}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/php-get-full-response.md","sourceDirName":"commands-legacy","slug":"/commands/php-get-full-response","permalink":"/docs/ja/20-R8/commands/php-get-full-response","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-full-response.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"php-get-full-response","title":"PHP GET FULL RESPONSE","slug":"/commands/php-get-full-response","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP Execute","permalink":"/docs/ja/20-R8/commands/php-execute"},"next":{"title":"PHP GET OPTION","permalink":"/docs/ja/20-R8/commands/php-get-option"}}'),r=s("785893"),d=s("250065");let l={id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},c=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP GET FULL RESPONSE"})," ( ",(0,r.jsx)(n.em,{children:"stdOut"})," {; ",(0,r.jsx)(n.em,{children:"errLabels"})," ; ",(0,r.jsx)(n.em,{children:"errValues"}),"} {; ",(0,r.jsx)(n.em,{children:"httpHeaderFields"})," {; ",(0,r.jsx)(n.em,{children:"httpHeaderValues"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stdOut"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"stdout\u30D0\u30C3\u30D5\u30A1\u30FC\u306E\u5185\u5BB9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errLabels"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u306E\u30E9\u30D9\u30EB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errValues"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u306E\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"httpHeaderFields"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"HTTP\u30D8\u30C3\u30C0\u30FC\u306E\u540D\u524D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"httpHeaderValues"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"HTTP\u30D8\u30C3\u30C0\u30FC\u306E\u5024"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D \u306E\u30D3\u30EB\u30C8\u30A4\u30F3PHP\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u306F\u524A\u9664\u3055\u308C\u307E\u3057\u305F"}),"\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/API/SystemWorkerClass",children:(0,r.jsx)(n.code,{children:"4D.SystemWorker\u30AF\u30E9\u30B9"})})," \u3092\u4F7F\u7528\u3057\u3066\u5916\u90E8PHP\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"PHP GET FULL RESPONSE \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066 PHP\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u304B\u3089\u8FD4\u3055\u308C\u308B\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u95A2\u3059\u308B\u8FFD\u52A0\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u7279\u306B\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u5B9F\u884C\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u3068\u304D\u306B\u6709\u52B9\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["PHP\u30B9\u30AF\u30EA\u30D7\u30C8\u306Fstdout\u30D0\u30C3\u30D5\u30A1\u30FC\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3042\u308A\u307E\u3059 (echo, print\u7B49)\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u3092\u76F4\u63A5",(0,r.jsx)(n.em,{children:"stdout"}),"\u5909\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002\u305D\u3057\u3066",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/php-execute",children:"PHP Execute"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u8AAC\u660E\u3055\u308C\u3066\u3044\u308B\u539F\u5247\u3068\u540C\u3058\u5909\u63DB\u3092\u9069\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540C\u671F\u3055\u308C\u308B",(0,r.jsx)(n.em,{children:"errLabels"}),"\u3068",(0,r.jsx)(n.em,{children:"errValues"}),"\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u306F\u3001PHP\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u5B9F\u884C\u304C\u30A8\u30E9\u30FC\u306E\u539F\u56E0\u3067\u3042\u308B\u3068\u304D\u306B\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u914D\u5217\u306B\u306F\u7279\u306B\u3001\u30A8\u30E9\u30FC\u306E\u3082\u3068\u3001\u30B9\u30AF\u30EA\u30D7\u30C8\u3001\u305D\u3057\u3066\u884C\u306A\u3069\u306E\u60C5\u5831\u304C\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u30892\u3064\u306E\u914D\u5217\u306F\u3068\u3082\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"errLabels"}),"\u3092\u6E21\u3059\u3068\u304D\u306F\u5408\u308F\u305B\u3066",(0,r.jsx)(n.em,{children:"errValues"}),"\u3082\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["4D\u3068PHP\u9593\u306E\u4EA4\u63DB\u306FFastCGI\u7D4C\u7531\u3067\u5B9F\u884C\u3055\u308C\u308B\u305F\u3081\u3001PHP\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u306F\u3001\u305D\u308C\u304CHTTP\u30B5\u30FC\u30D0\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u305F\u304B\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3057\u3001\u3057\u305F\u304C\u3063\u3066HTTP\u30D8\u30C3\u30C0\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"httpHeaderFields"}),"\u3068",(0,r.jsx)(n.em,{children:"httpHeaderValues"}),"\u914D\u5217\u3092\u4F7F\u7528\u3057\u3066\u3053\u308C\u3089\u306E\u30D8\u30C3\u30C0\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/php-execute",children:"PHP Execute"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/php-get-option",children:"PHP GET OPTION"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1061"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);