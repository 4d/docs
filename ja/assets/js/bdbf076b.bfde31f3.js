"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91575"],{324508:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","description":"BOOLEAN ARRAY FROM SET ( booleanArr {; set} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/boolean-array-from-set.md","sourceDirName":"commands-legacy","slug":"/commands/boolean-array-from-set","permalink":"/docs/ja/20-R8/commands/boolean-array-from-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","slug":"/commands/boolean-array-from-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO SELECTION","permalink":"/docs/ja/20-R8/commands/array-to-selection"},"next":{"title":"COPY ARRAY","permalink":"/docs/ja/20-R8/commands/copy-array"}}'),t=r("785893"),l=r("250065");let d={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function i(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,t.jsx)(n.em,{children:"booleanArr"})," {; ",(0,t.jsx)(n.em,{children:"set"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"booleanArr"}),(0,t.jsx)(n.td,{children:"Boolean array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u304C\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3044\u306A\u3044\u304B\u3092\u793A\u3059\u914D\u5217"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"set"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30BB\u30C3\u30C8\u540D\u3001\u307E\u305F\u306F \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408UserSet"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(n.p,{children:"BOOLEAN ARRAY FROM SET\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u5185\u306E\u5404\u30EC\u30B3\u30FC\u30C9\u304C\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B\u304B\u542B\u307E\u308C\u306A\u3044\u304B\u3092\u793A\u3059\u30D6\u30FC\u30EB\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u914D\u5217\u306E\u5404\u8981\u7D20\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u306B\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3068\u540C\u3058\u9806\u5E8F\uFF08\u7D76\u5BFE\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u9806\uFF09\u3067\u6574\u5217\u3055\u308C\u307E\u3059\u3002\u914D\u5217\u306E\uFF10\u756A\u76EE\u306E\u8981\u7D20\u306F\u30EC\u30B3\u30FC\u30C9\u756A\u53F70\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u3042\u305F\u308A\u3001\u914D\u5217\u306E\u8981\u7D20N\u306F\u30EC\u30B3\u30FC\u30C9\u756A\u53F7N\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u3042\u305F\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u914D\u5217\u306E\u5404\u8981\u7D20\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5BFE\u5FDC\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B\u5834\u5408\u306FTrue"}),"\n",(0,t.jsx)(n.li,{children:"\u5BFE\u5FDC\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u306A\u3044\u5834\u5408\u306FFalse"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8B66\u544A\uFF1A"})," ",(0,t.jsx)(n.em,{children:"booleanArr"}),"\u914D\u5217\u306E\u7DCF\u8981\u7D20\u6570\u306B\u610F\u5473\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u69CB\u9020\u4E0A\u306E\u7406\u7531\u306B\u3088\u308A\u3001\u3053\u306E\u6570\u306F\u30C6\u30FC\u30D6\u30EB\u4E0A\u306E\u5B9F\u5B58\u306E\u30EC\u30B3\u30FC\u30C9\u6570\u3068\u7570\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u8D77\u3053\u308A\u3046\u308B\u4F59\u5206\u306E\u8981\u7D20\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/false",title:"False",children:"False"}),"\u306B\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"set"}),"\u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306EUserSet\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"646"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);