"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94157"],{450770:function(e,n,l){l.r(n),l.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/table","title":"Table","description":"Table ( tableNum\xa0|\xa0aPtr ) : any","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/table.md","sourceDirName":"commands-legacy","slug":"/commands/table","permalink":"/docs/ja/20-R7/commands/table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"table","title":"Table","slug":"/commands/table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX","permalink":"/docs/ja/20-R7/commands/set-index"},"next":{"title":"Table name","permalink":"/docs/ja/20-R7/commands/table-name"}}'),d=l("785893"),t=l("250065");let a={id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Table"})," ( tableNum\xa0|\xa0aPtr ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tableNum\xa0|\xa0aPtr"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570, \u30DD\u30A4\u30F3\u30BF\u30FC"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3001\u307E\u305F\u306F \u30C6\u30FC\u30D6\u30EB\u30DD\u30A4\u30F3\u30BF\u3001\u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Pointer, Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u30C6\u30FC\u30D6\u30EB\u30DD\u30A4\u30F3\u30BF \u30C6\u30FC\u30D6\u30EB\u30DD\u30A4\u30F3\u30BF\u3092\u6E21\u3057\u305F\u5834\u5408\u30C6\u30FC\u30D6\u30EB\u756A\u53F7 \u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF\u3092\u6E21\u3057\u305F\u5834\u5408\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"Table\u30B3\u30DE\u30F3\u30C9\u306B\u306F\u30013\u3064\u306E\u5F62\u5F0F\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"tableNum"}),"\u306B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"aPtr"}),"\u306B\u30C6\u30FC\u30D6\u30EB\u30DD\u30A4\u30F3\u30BF\u3092\u6E21\u3057\u305F\u5834\u5408\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"aPtr"}),"\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF\u3092\u6E21\u3057\u305F\u5834\u5408\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u5909\u6570",(0,d.jsx)(n.em,{children:"tablePtr"}),"\u306B3\u756A\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0TablePtr:=Table(3)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(n.p,{children:["\u5909\u6570",(0,d.jsx)(n.em,{children:"tablePtr"}),"( 3\u756A\u76EE\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30DD\u30A4\u30F3\u30BF) \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Table\u95A2\u6570\u306F\u6570\u5024\u306E3\u3092\u8FD4\u3057\u307E",(0,d.jsx)(n.br,{}),"\n\u3059\u3002\u4EE5\u4E0B\u306E\u4F8B\u3092\u5B9F\u884C\u3059\u308B\u3068\u5909\u6570TableNum\u306B3\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(TablePtr)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u5909\u6570",(0,d.jsx)(n.em,{children:"tableNum"}),"\u306B\u30C6\u30FC\u30D6\u30EB*[Table3]*\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3])\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u5909\u6570",(0,d.jsx)(n.em,{children:"tableNum"}),"\u306B\u30D5\u30A3\u30FC\u30EB\u30C9*[Table3]Field1*\u306E\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3]Field1)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/field",children:"Field"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/last-table-number",children:"Last table number"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"252"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return a}});var s=l(667294);let d={},t=s.createContext(d);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);