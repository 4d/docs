"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27401"],{829859:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-file-from-pasteboard","title":"Get file from pasteboard","description":"Get file from pasteboard ( xIndex ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-file-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-file-from-pasteboard","permalink":"/docs/ja/20-R8/commands/get-file-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-file-from-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-file-from-pasteboard","title":"Get file from pasteboard","slug":"/commands/get-file-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR PASTEBOARD","permalink":"/docs/ja/20-R8/commands/clear-pasteboard"},"next":{"title":"GET PASTEBOARD DATA","permalink":"/docs/ja/20-R8/commands/get-pasteboard-data"}}'),s=t("785893"),d=t("250065");let a={id:"get-file-from-pasteboard",title:"Get file from pasteboard",slug:"/commands/get-file-from-pasteboard",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get file from pasteboard"})," ( ",(0,s.jsx)(n.em,{children:"xIndex"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xIndex"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30C9\u30E9\u30C3\u30B0\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u307E\u308C\u308Bx\u756A\u76EE\u306E\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["Get file from pasteboard \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406\u306B\u542B\u307E\u308C\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u5B8C\u5168\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u540C\u6642\u306B\u9078\u629E\u3057\u3001\u79FB\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"xIndex"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u9078\u629E\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u4E2D\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306BX\u756A\u76EE\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u3001\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406\u306B\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D\u3092\u914D\u5217\u306B\u683C\u7D0D\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filesArray;0)\n\xa0var $vfileArray : Text\n\xa0var $n : Integer\n\xa0$n:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vfileArray:=Get file from pasteboard($n)\n\xa0\xa0\xa0\xa0If($vfileArray#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($filesArray;$vfileArray)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$n:=$n+1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vfileArray="")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"976"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(667294);let s={},d=r.createContext(s);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);