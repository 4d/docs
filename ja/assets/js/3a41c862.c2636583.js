"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86266"],{660392:function(e,n,r){r.r(n),r.d(n,{default:()=>R,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","description":"REMOVE PICTURE FROM LIBRARY ( picRef | picName )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/remove-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/remove-picture-from-library","permalink":"/docs/ja/20-R7/commands/remove-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fremove-picture-from-library.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","slug":"/commands/remove-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ PICTURE FILE","permalink":"/docs/ja/20-R7/commands/read-picture-file"},"next":{"title":"SET PICTURE FILE NAME","permalink":"/docs/ja/20-R7/commands/set-picture-file-name"}}'),i=r("785893"),t=r("250065");let c={id:"remove-picture-from-library",title:"REMOVE PICTURE FROM LIBRARY",slug:"/commands/remove-picture-from-library",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REMOVE PICTURE FROM LIBRARY"})," ( picRef | picName )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picRef | picName"}),(0,i.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570, \u6587\u5B57"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u753B\u50CF\u306E\u53C2\u7167\u756A\u53F7 \u307E\u305F\u306F \u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u753B\u50CF\u306E\u540D\u524D"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["REMOVE PICTURE FROM LIBRARY \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"picRef"}),"\u5F15\u6570\u306B\u6E21\u3057\u305F\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F",(0,i.jsx)(n.em,{children:"picName"}),"\u5F15\u6570\u306E\u540D\u524D\u3092\u6301\u3064\u30D4\u30AF\u30C1\u30E3\u3092\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u6D88\u53BB\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F\u540D\u524D\u3092\u6301\u3064\u30D4\u30AF\u30C1\u30E3\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server:"})," REMOVE PICTURE FROM LIBRARY\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u308B (\u30B9\u30C8\u30A2\u30FC\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u3084\u30C8\u30EA\u30AC) \u30E1\u30BD\u30C3\u30C9\u306E\u4E2D\u304B\u3089\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002REMOVE PICTURE FROM LIBRARY\u30B3\u30DE\u30F3\u30C9\u3092\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u547C\u3073\u51FA\u3057\u3066\u3082\u3001\u7121\u8996\u3055\u308C\u3001\u4F55\u3082\u884C\u308F\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u30C7\u30B6\u30A4\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u968E\u5C64\u30EA\u30B9\u30C8\u9805\u76EE\u3001\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u7B49) \u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u3063\u3066\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u4FEE\u6B63\u3059\u308B\u969B\u306F\u3001\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u53C2\u7167\u756A\u53F74444\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u524A\u9664\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0REMOVE PICTURE FROM LIBRARY(4444)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30C9\u30EB\u8A18\u53F7 (",(0,i.jsx)(n.em,{children:"$"}),") \u3067\u59CB\u307E\u308B\u540D\u524D\u3092\u6301\u3064\u30D4\u30AF\u30C1\u30E3\u3092\u30D4\u30AF\u30C1\u30E3\u30E9\u30A4\u30D6\u30E9\u30EA\u304B\u3089\u524A\u9664\u3057\u307E\u3059:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alPicRef;$asPicName)\n\xa0For($vlPicture;1;Size of array($alPicRef))\n\xa0\xa0\xa0\xa0If($asPicName{$vlPicture}="$@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REMOVE PICTURE FROM LIBRARY($alPicRef{$vlPicture})\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"567"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306E\u4F7F\u7528\u306F\u4E0D\u53EF"}),(0,i.jsx)(n.td,{})]})]})]})]})}function R(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var s=r(667294);let i={},t=s.createContext(i);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);