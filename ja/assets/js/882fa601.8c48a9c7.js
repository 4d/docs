"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58951"],{648604:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/is-nil-pointer","title":"Is nil pointer","description":"Is nil pointer ( aPointer ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-nil-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/is-nil-pointer","permalink":"/docs/ja/commands/is-nil-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-nil-pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-nil-pointer","title":"Is nil pointer","slug":"/commands/is-nil-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is a variable","permalink":"/docs/ja/commands/is-a-variable"},"next":{"title":"Null","permalink":"/docs/ja/commands/null"}}'),t=s("785893"),r=s("250065");let l={id:"is-nil-pointer",title:"Is nil pointer",slug:"/commands/is-nil-pointer",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Is nil pointer"})," ( ",(0,t.jsx)(e.em,{children:"aPointer"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"aPointer"}),(0,t.jsx)(e.td,{children:"Pointer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30C6\u30B9\u30C8\u3059\u308B\u30DD\u30A4\u30F3\u30BF"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Boolean"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"TRUE = Nil \u30DD\u30A4\u30F3\u30BF (->[]) FALSE = \u65E2\u5B58\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u6709\u52B9\u306A\u30DD\u30A4\u30F3\u30BF"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Is nil pointer"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(e.em,{children:"aPointer"}),"\u304CNil\u30DD\u30A4\u30F3\u30BF (->[]) \u306E\u5834\u5408\u306B",(0,t.jsx)(e.strong,{children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u30C6\u30FC\u30D6\u30EB\u3001\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\uFF09\u3001\u3053\u306E\u95A2\u6570\u306FFalse\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u53C2\u7167\u5148\u3067\u3042\u308B\u5909\u6570\u306E\u540D\u524D\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u3092\u77E5\u308A\u305F\u3044\u5834\u5408\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/resolve-pointer",children:"RESOLVE POINTER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0var $ptr : Pointer\n\xa0...\n\xa0If(Is nil pointer($ptr))\n\xa0End if\n\xa0\xa0// \u3053\u308C\u306F\u4E0B\u8A18\u306B\u76F8\u5F53\u3059\u308B\n\xa0If($ptr=Null)\n\xa0End if\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/is-a-variable",children:"Is a variable"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/resolve-pointer",children:"RESOLVE POINTER"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"315"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var i=s(667294);let t={},r=i.createContext(t);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);