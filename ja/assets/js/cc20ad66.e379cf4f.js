"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90705"],{70925:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/web-send-file","title":"WEB SEND FILE","description":"WEB SEND FILE ( htmlFile )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-file.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-file","permalink":"/docs/ja/commands/web-send-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-file","title":"WEB SEND FILE","slug":"/commands/web-send-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND BLOB","permalink":"/docs/ja/commands/web-send-blob"},"next":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/ja/commands/web-send-http-redirect"}}'),l=s("785893"),t=s("250065");let r={id:"web-send-file",title:"WEB SEND FILE",slug:"/commands/web-send-file",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WEB SEND FILE"})," ( ",(0,l.jsx)(n.em,{children:"htmlFile"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"htmlFile"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"HTML\u30D5\u30A1\u30A4\u30EB\u3078\u306EHTML\u30D1\u30B9\u540D \u307E\u305F\u306F\u3001WEB SEND FILE\u3092\u7D42\u4E86\u3055\u305B\u308B\u5834\u5408\u7A7A\u306E\u6587\u5B57\u5217"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WEB SEND FILE"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(n.em,{children:"htmlFile"}),"\u306B\u6E21\u3059\u30D1\u30B9\u540D\u3092\u6301\u3064HTML\u30DA\u30FC\u30B8\u3084Web\u30D5\u30A1\u30A4\u30EB\u3092Web\u30D6\u30E9\u30A6\u30B6\u3078\u9001\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30014D\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308BHTML\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u5185\u3067\u691C\u7D22\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F (\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u304C\u30B9\u30E9\u30C3\u30B7\u30E5\u3067\u533A\u5207\u3089\u308C\u308B) Posix\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u307E\u305F\u306F\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002",(0,l.jsx)(n.br,{}),"\n\u7121\u52B9\u306A\u30D1\u30B9\u540D\u3092\u6307\u5B9A\u3059\u308B\u3068\u30014D\u306FOS\u306E\u30D5\u30A1\u30A4\u30EB\u7BA1\u7406\u306B\u95A2\u9023\u3059\u308B\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u3092",(0,l.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),"\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30E1\u30BD\u30C3\u30C9\u304C\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3084\u8B66\u544A\u3092\u8868\u793A\u3059\u308B\u3068\u3001\u305D\u308C\u306FWeb\u30D6\u30E9\u30A6\u30B6\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WEB SEND FILE"}),"\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002\u9001\u308B\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u3066\u3044\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306B\u306A\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u306A\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\u306F0\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,l.jsx)(n.strong,{children:"WEB SEND FILE"}),"\u30B3\u30DE\u30F3\u30C9\u3092Web\u30D7\u30ED\u30BB\u30B9\u3067\u306A\u3044\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u547C\u3073\u51FA\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u308F\u305A\u3001\u30A8\u30E9\u30FC\u3082\u8FD4\u3057\u307E\u305B\u3093\u3002\u547C\u3073\u51FA\u3057\u306F\u7121\u52B9\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30BF\u30A4\u30D7\u304C\u5BFE\u5FDC\u3059\u308B\u5834\u5408\u3001\u9001\u4FE1\u524D\u306B",(0,l.jsx)(n.em,{children:"4DSCRIPT"}),"\u7B49\u306E\u30BF\u30B0\u304C\u89E3\u6790\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306EHTML\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3068\u540C\u968E\u5C64\u306E",(0,l.jsx)(n.strong,{children:"WebFolder"}),"\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u3066\u3001\u4EE5\u4E0B\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30D5\u30A1\u30A4\u30EB\u304C\u7F6E\u304B\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0../WebFolder/HTM\\MyPage.HTM\n"})}),"\n",(0,l.jsx)(n.p,{children:'Web\u30DA\u30FC\u30B8 "MyPage.HTM"\u3092\u9001\u4FE1\u3059\u308B\u306B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u3057\u307E\u3059\u3002'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND FILE("HTM/MyPage.HTM")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,l.jsx)(n.p,{children:"\u9001\u3089\u308C\u308B\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u3084\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3067\u306A\u3044\u5834\u5408\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\u306F0\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/ja/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,l.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"619"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var d=s(667294);let l={},t=d.createContext(l);function r(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);