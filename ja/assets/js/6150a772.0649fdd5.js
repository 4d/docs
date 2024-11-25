"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95819"],{73228:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/is-in-set","title":"Is in set","description":"Is in set ( set ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-in-set.md","sourceDirName":"commands-legacy","slug":"/commands/is-in-set","permalink":"/docs/ja/commands/is-in-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-in-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-in-set","title":"Is in set","slug":"/commands/is-in-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTERSECTION","permalink":"/docs/ja/commands/intersection"},"next":{"title":"LOAD SET","permalink":"/docs/ja/commands/load-set"}}'),i=s("785893"),d=s("250065");let r={id:"is-in-set",title:"Is in set",slug:"/commands/is-in-set",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Is in set"})," ( ",(0,i.jsx)(n.em,{children:"set"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"set"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30C6\u30B9\u30C8\u3059\u308B\u30BB\u30C3\u30C8\u306E\u540D\u524D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True\uFF1D\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B False\uFF1D\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u306A\u3044"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["Is in set\u95A2\u6570\u306F\u3001",(0,i.jsx)(n.em,{children:"set"}),"\u306E\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C",(0,i.jsx)(n.em,{children:"set"}),"\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u307E\u3059\u3002Is in set\u95A2\u6570\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C",(0,i.jsx)(n.em,{children:"set"}),"\u306B\u542B\u307E\u308C\u3066\u3044\u308C\u3070 True\u3092\u8FD4\u3057\u3001\u542B\u307E\u308C\u3066\u3044\u306A\u3051\u308C\u3070 False\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsxs)(n.p,{children:['\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30DC\u30BF\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002\u3053\u308C\u306F\u3001\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u304C "Best" \u306E\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u307E\u3059\u3002',(0,i.jsx)(n.br,{}),"\n:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is in set("Best"))\xa0//\u304A\u5F97\u610F\u69D8\u304B\u3069\u3046\u304B\u8ABF\u3079\u308B\n\xa0\xa0\xa0\xa0ALERT("\u304A\u5F97\u610F\u69D8"")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("\u304A\u5F97\u610F\u69D8\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002")\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/commands/add-to-set",children:"ADD TO SET"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/remove-from-set",children:"REMOVE FROM SET"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let i={},d=t.createContext(i);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);