"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22949"],{435398:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"Events/onCloseBox","title":"On Close Box","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143 | \u5B9A\u7FA9                     |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Events/onCloseBox.md","sourceDirName":"Events","slug":"/Events/onCloseBox","permalink":"/docs/ja/20-R7/Events/onCloseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onCloseBox","title":"On Close Box"},"sidebar":"docs","previous":{"title":"On Clicked","permalink":"/docs/ja/20-R7/Events/onClicked"},"next":{"title":"On Close Detail","permalink":"/docs/ja/20-R7/Events/onCloseDetail"}}'),s=t("785893"),l=t("250065");let r={id:"onCloseBox",title:"On Close Box"},d=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30B3\u30FC\u30C9"}),(0,s.jsx)(n.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,s.jsx)(n.th,{children:"\u5B9A\u7FA9"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30E0"}),(0,s.jsx)(n.td,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30AF\u30ED\u30FC\u30BA\u30DC\u30C3\u30AF\u30B9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"On Close Box"})," \u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30AF\u30ED\u30FC\u30BA\u30DC\u30C3\u30AF\u30B9\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u306E\u30C7\u30FC\u30BF\u5165\u529B\u306B\u4F7F\u308F\u308C\u308B\u30D5\u30A9\u30FC\u30E0\u3067\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u9589\u3058\u308B\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // \u5165\u529B\u30D5\u30A9\u30FC\u30E0\u306E\u30E1\u30BD\u30C3\u30C9\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("\u30EC\u30B3\u30FC\u30C9\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002 \u5909\u66F4\u3092\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var o=t(667294);let s={},l=o.createContext(s);function r(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);