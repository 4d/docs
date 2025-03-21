"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10531"],{501481:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/get-table-titles","title":"GET TABLE TITLES","description":"GET TABLE TITLES ( tableTitles ; tableNums )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-titles","permalink":"/docs/ja/20-R7/commands/get-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-table-titles","title":"GET TABLE TITLES","slug":"/commands/get-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD TITLES","permalink":"/docs/ja/20-R7/commands/get-field-titles"},"next":{"title":"HIDE MENU BAR","permalink":"/docs/ja/20-R7/commands/hide-menu-bar"}}'),l=n("785893"),d=n("250065");let i={id:"get-table-titles",title:"GET TABLE TITLES",slug:"/commands/get-table-titles",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"GET TABLE TITLES"})," ( ",(0,l.jsx)(t.em,{children:"tableTitles"})," ; ",(0,l.jsx)(t.em,{children:"tableNums"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u5F15\u6570"}),(0,l.jsx)(t.th,{children:"\u578B"}),(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"tableTitles"}),(0,l.jsx)(t.td,{children:"Text array"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"tableNums"}),(0,l.jsx)(t.td,{children:"Integer array"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(t.p,{children:["GET TABLE TITLES \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u3001\u307E\u305F\u306F",(0,l.jsx)(t.a,{href:"/docs/ja/20-R7/commands/set-table-titles",title:"SET TABLE TITLES",children:"SET TABLE TITLES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u306E\u756A\u53F7\u3068\u540D\u524D\u3092\u914D\u5217 ",(0,l.jsx)(t.em,{children:"tableTitles"})," \u3068 ",(0,l.jsx)(t.em,{children:"tableNums"})," \u306B\u53D6\u5F97\u3057\u307E\u3059\u3002\u3053\u308C\u30892\u3064\u306E\u914D\u5217\u306E\u5185\u5BB9\u306F\u540C\u671F\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(t.p,{children:["\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B ",(0,l.jsx)(t.a,{href:"/docs/ja/20-R7/commands/set-table-titles",title:"SET TABLE TITLES",children:"SET TABLE TITLES"}),' \u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u3001GET TABLE TITLES \u30B3\u30DE\u30F3\u30C9\u306F "\u4FEE\u6B63\u3055\u308C\u305F" \u540D\u524D\u3068\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\u3001GET TABLE TITLES \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002',(0,l.jsx)(t.br,{}),"\n\u3053\u308C\u3089\u4E21\u65B9\u306E\u5834\u5408\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u975E\u8868\u793A\u30C6\u30FC\u30D6\u30EB\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/docs/ja/20-R7/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/ja/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"})]}),"\n",(0,l.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(t.td,{children:"803"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let l={},d=s.createContext(l);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);