"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82326"],{798013:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-get-table-source","title":"LISTBOX GET TABLE SOURCE","description":"LISTBOX GET TABLE SOURCE ( { ;} object ; tableNum {; name {; highlightName*}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-table-source","permalink":"/docs/ja/commands/listbox-get-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-table-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-table-source","title":"LISTBOX GET TABLE SOURCE","slug":"/commands/listbox-get-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get static columns","permalink":"/docs/ja/commands/listbox-get-static-columns"},"next":{"title":"LISTBOX INSERT COLUMN","permalink":"/docs/ja/commands/listbox-insert-column"}}'),l=t("785893"),c=t("250065");let d={id:"listbox-get-table-source",title:"LISTBOX GET TABLE SOURCE",slug:"/commands/listbox-get-table-source",displayed_sidebar:"docs"},r=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX GET TABLE SOURCE"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"object"})," ; ",(0,l.jsx)(n.em,{children:"tableNum"})," {; ",(0,l.jsx)(n.em,{children:"name"})," {; ",(0,l.jsx)(n.em,{children:"highlightName"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableNum"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:'\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u540D \u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5834\u5408""'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"highlightName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"\u30CF\u30A4\u30E9\u30A4\u30C8\u30BB\u30C3\u30C8\u540D"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX GET TABLE SOURCE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u3068 ",(0,l.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u8868\u793A\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u73FE\u5728\u306E\u30BD\u30FC\u30B9\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,l.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,l.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30E1\u30A4\u30F3\u30C6\u30FC\u30D6\u30EB\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092",(0,l.jsx)(n.em,{children:"tableNum"}),"\u5F15\u6570\u306B\u3001\u4F7F\u7528\u3055\u308C\u308B\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u540D\u3092\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,l.jsx)(n.em,{children:"name"})," \u5F15\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002",(0,l.jsx)(n.br,{}),"\n\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u884C\u304C\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"name"})," \u5F15\u6570\u306B\u306F\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u884C\u304C\u30C6\u30FC\u30D6\u30EB\u306E\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"name"})," \u5F15\u6570\u306B\u306F\u3053\u306E\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u540D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304C\u914D\u5217\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"tableNum"})," \u306B\u306F -1\u304C\u3001",(0,l.jsx)(n.em,{children:"name"}),"\u304C\u6E21\u3055\u308C\u3066\u3044\u308C\u3070\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/ja/commands/listbox-set-table-source",children:"LISTBOX SET TABLE SOURCE"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let l={},c=s.createContext(l);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);