"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36497"],{960733:function(e,n,d){d.r(n),d.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/is-field-number-valid","title":"Is field number valid","description":"Is field number valid ( tableNum\xa0|\xa0tablePtr ; fieldNum ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-field-number-valid.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-number-valid","permalink":"/docs/ja/commands/is-field-number-valid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-field-number-valid","title":"Is field number valid","slug":"/commands/is-field-number-valid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT STRUCTURE","permalink":"/docs/ja/commands/import-structure"},"next":{"title":"Is table number valid","permalink":"/docs/ja/commands/is-table-number-valid"}}'),s=d("785893"),l=d("250065");let i={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},r=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is field number valid"})," ( tableNum\xa0|\xa0tablePtr ; ",(0,s.jsx)(n.em,{children:"fieldNum"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum\xa0|\xa0tablePtr"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570, \u30DD\u30A4\u30F3\u30BF\u30FC"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u307E\u305F\u306F\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = \u30C6\u30FC\u30D6\u30EB\u306B\u3042\u308B\u30D5\u30A3\u30FC\u30EB\u30C9 False = \u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u30C6\u30FC\u30D6\u30EB\u306B\u5B58\u5728\u3057\u306A\u3044"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["Is field number valid\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570",(0,s.jsx)(n.em,{children:"fieldNum"}),"\u306B\u6E21\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u3001\u5F15\u6570",(0,s.jsx)(n.em,{children:"tableNum"}),"\u307E\u305F\u306F",(0,s.jsx)(n.em,{children:"tablePtr"}),"\u306B\u6E21\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u307E\u305F\u306F\u30DD\u30A4\u30F3\u30BF\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001True\u3092\u8FD4\u3057\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306FFales\u3092\u8FD4\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6301\u3064\u30C6\u30FC\u30D6\u30EB\u304C\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u3054\u307F\u7BB1\u306B\u3042\u308B\u5834\u5408\u3082\u3001\u30B3\u30DE\u30F3\u30C9\u306FFales\u3092\u8FD4\u3057\u307E\u3059\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u524A\u9664\u306B\u3088\u308A\u751F\u3058\u308B\u4E00\u9023\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u306E\u6B20\u756A\u3092\u691C\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/is-table-number-valid",children:"Is table number valid"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return i}});var t=d(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);