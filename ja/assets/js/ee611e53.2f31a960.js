"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23656"],{593286:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/delete-from-array","title":"DELETE FROM ARRAY","description":"DELETE FROM ARRAY ( array ; where {; howMany} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-array","permalink":"/docs/ja/commands/delete-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-from-array","title":"DELETE FROM ARRAY","slug":"/commands/delete-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count in array","permalink":"/docs/ja/commands/count-in-array"},"next":{"title":"DISTINCT ATTRIBUTE PATHS","permalink":"/docs/ja/commands/distinct-attribute-paths"}}'),d=r("785893"),s=r("250065");let a={id:"delete-from-array",title:"DELETE FROM ARRAY",slug:"/commands/delete-from-array",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM ARRAY"})," ( ",(0,d.jsx)(n.em,{children:"array"})," ; ",(0,d.jsx)(n.em,{children:"where"})," {; ",(0,d.jsx)(n.em,{children:"howMany"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"array"}),(0,d.jsx)(n.td,{children:"Array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u8981\u7D20\u3092\u524A\u9664\u3059\u308B\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"where"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u524A\u9664\u3092\u958B\u59CB\u3059\u308B\u8981\u7D20\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"howMany"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u8981\u7D20\u6570, \u307E\u305F\u306F \u7701\u7565\u6642\u306F1\u8981\u7D20"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM ARRAY"})," \u30B3\u30DE\u30F3\u30C9\u306F1\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u8981\u7D20\u3092",(0,d.jsx)(n.em,{children:"array"}),"\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"where"}),"\u5F15\u6570\u306E\u793A\u3059\u4F4D\u7F6E\u304B\u3089\u8981\u7D20\u306E\u524A\u9664\u3092\u958B\u59CB\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"howMany"}),"\u5F15\u6570\u306F\u524A\u9664\u3059\u308B\u8981\u7D20\u6570\u3067\u3059\u3002",(0,d.jsx)(n.em,{children:"howMany"}),"\u304C\u6307\u5B9A\u3055\u308C\u306A\u3044\u5834\u5408\u30011\u3064\u306E\u8981\u7D20\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u914D\u5217\u306E\u30B5\u30A4\u30BA\u306F",(0,d.jsx)(n.em,{children:"howMany"}),"\u3060\u3051\u5C0F\u3055\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217\u306E5\u756A\u76EE\u306E\u8981\u7D20\u304B\u30893\u3064\u306E\u8981\u7D20\u3092\u524A\u9664\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0DELETE FROM ARRAY(anArray;5;3)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217\u306E\u6700\u5F8C\u306E\u8981\u7D20\u3092\u524A\u9664\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$vlElem:=Size of array(anArray)\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0DELETE FROM ARRAY(anArray;$vlElem)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/insert-in-array",children:"INSERT IN ARRAY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/size-of-array",children:"Size of array"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(667294);let d={},s=t.createContext(d);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);