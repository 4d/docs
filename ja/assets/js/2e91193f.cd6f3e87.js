"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33760"],{171249:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-insert-columns","title":"VP INSERT COLUMNS","description":"VP INSERT COLUMNS ( rangeObj : Object )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-insert-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-insert-columns","permalink":"/docs/ja/ViewPro/commands/vp-insert-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-columns.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-insert-columns","title":"VP INSERT COLUMNS"},"sidebar":"docs","previous":{"title":"VP IMPORT FROM OBJECT","permalink":"/docs/ja/ViewPro/commands/vp-import-from-object"},"next":{"title":"VP INSERT ROWS","permalink":"/docs/ja/ViewPro/commands/vp-insert-rows"}}'),r=s("785893"),i=s("250065");let c={id:"vp-insert-columns",title:"VP INSERT COLUMNS"},d=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP INSERT COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP INSERT COLUMNS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EC\u30F3\u30B8\u306B\u30AB\u30E9\u30E0\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u958B\u59CB\u30AB\u30E9\u30E0 (\u65B0\u3057\u3044\u30AB\u30E9\u30E0\u304C\u633F\u5165\u3055\u308C\u308B\u5834\u6240\u3092\u6307\u5B9A\u3059\u308B\u30AB\u30E9\u30E0) \u3068\u633F\u5165\u3059\u308B\u30AB\u30E9\u30E0\u306E\u6570\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u633F\u5165\u3059\u308B\u30AB\u30E9\u30E0\u306E\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408 (\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408)\u3001\u30AB\u30E9\u30E0\u306F 1\u5217\u3060\u3051\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u65B0\u3057\u3044\u30AB\u30E9\u30E0\u306F\u3001",(0,r.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u958B\u59CB\u30AB\u30E9\u30E0\u306E\u76F4\u524D (\u3059\u3050\u5DE6\u5074) \u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"2\u756A\u76EE\u306E\u30AB\u30E9\u30E0\u306E\u524D\u306B\u30AB\u30E9\u30E0\u30923\u5217\u633F\u5165\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP INSERT COLUMNS(VP Column("ViewProArea";1;3))\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(466201).Z+"",width:"964",height:"367"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-insert-rows",children:"VP INSERT ROWS"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},466201:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpInsertColumns-b1621dfbcabbe89a2e3db933745e1d03.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);