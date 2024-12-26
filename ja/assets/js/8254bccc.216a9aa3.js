"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32556"],{649219:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/insert-in-array","title":"INSERT IN ARRAY","description":"INSERT IN ARRAY ( array ; where {; howMany} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-array","permalink":"/docs/ja/commands/insert-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-in-array","title":"INSERT IN ARRAY","slug":"/commands/insert-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in sorted array","permalink":"/docs/ja/commands/find-in-sorted-array"},"next":{"title":"LIST TO ARRAY","permalink":"/docs/ja/commands/list-to-array"}}'),d=r("785893"),t=r("250065");let i={id:"insert-in-array",title:"INSERT IN ARRAY",slug:"/commands/insert-in-array",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"INSERT IN ARRAY"})," ( ",(0,d.jsx)(e.em,{children:"array"})," ; ",(0,d.jsx)(e.em,{children:"where"})," {; ",(0,d.jsx)(e.em,{children:"howMany"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"array"}),(0,d.jsx)(e.td,{children:"Array"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u914D\u5217\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"where"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"howMany"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u633F\u5165\u3059\u308B\u8981\u7D20\u6570, \u307E\u305F\u306F \u7701\u7565\u6642\u306F1"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["INSERT IN ARRAY\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"array"}),"\u306B1\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u8981\u7D20\u3092\u633F\u5165\u3057\u307E\u3059\u3002\u5F15\u6570",(0,d.jsx)(e.em,{children:"where"}),"\u3067\u6307\u5B9A\u3057\u305F\u8981\u7D20\u306E\u524D\u306B\u65B0\u3057\u3044\u8981\u7D20\u3092\u633F\u5165\u3057\u307E\u3059\u3002\u65B0\u3057\u304F\u633F\u5165\u3055\u308C\u305F\u8981\u7D20\u306B\u306F\u3001\u914D\u5217\u30BF\u30A4\u30D7\u306B\u5FDC\u3058\u305F\u7A7A\u306E\u5024\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"where"}),"\u3088\u308A\u5F8C\u308D\u306E\u8981\u7D20\u306F\u3001",(0,d.jsx)(e.em,{children:"howMany"}),"\u3067\u6307\u5B9A\u3057\u305F\u6570\u3060\u3051\u5F8C\u308D\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"where"}),"\u304C\u914D\u5217\u30B5\u30A4\u30BA\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u8981\u7D20\u306F\u914D\u5217\u306E\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5F15\u6570",(0,d.jsx)(e.em,{children:"howMany"}),"\u306F\u633F\u5165\u3059\u308B\u8981\u7D20\u306E\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"howMany"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u30011\u3064\u306E\u8981\u7D20\u304C\u633F\u5165\u3055\u308C\u307E\u3059\u3002\u914D\u5217\u30B5\u30A4\u30BA\u306F\u3001",(0,d.jsx)(e.em,{children:"howMany"}),"\u3060\u3051\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217\u306E10\u756A\u76EE\u306E\u8981\u7D20\u4F4D\u7F6E\u306B\u65B0\u3057\u30445\u3064\u306E\u8981\u7D20\u3092\u633F\u5165\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY(anArray;10;5)\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217\u306B\u8981\u7D20\u3092\u8FFD\u52A0\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0$vlElem:=Size of array(anArray)+1\n\xa0INSERT IN ARRAY(anArray;$vlElem)\n\xa0anArray{$vlElem}:=...\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/size-of-array",children:"Size of array"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"227"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return a},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);