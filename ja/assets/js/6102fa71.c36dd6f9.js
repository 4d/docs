"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11018"],{57758:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>l,assets:()=>i,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"ViewPro/commands/vp-set-values","title":"VP SET VALUES","description":"VP SET VALUES ( rangeObj Collection )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-values","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-values.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-values","title":"VP SET VALUES"},"sidebar":"docs","previous":{"title":"VP SET VALUE","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-value"},"next":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-set-workbook-options"}}'),r=s("785893"),t=s("250065");let c={id:"vp-set-values",title:"VP SET VALUES"},d=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET VALUES"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"valuesCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valuesCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u5024\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP SET VALUES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u306E\u30BB\u30EB\u30EC\u30F3\u30B8\u304B\u3089\u958B\u59CB\u3057\u3066\u5024\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5272\u308A\u5F53\u3066\u3066\u3044\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5024\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8 (\u305F\u3068\u3048\u3070 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-cell",children:(0,r.jsx)(n.code,{children:"VP Cell"})})," \u3042\u308B\u3044\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-column",children:(0,r.jsx)(n.code,{children:"VP Column"})})," \u3067\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30F3\u30B8) \u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30BB\u30EB\u306F\u3001\u958B\u59CB\u30DD\u30A4\u30F3\u30C8\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u304C\u30BB\u30EB\u30EC\u30F3\u30B8\u3067\u306F\u306A\u3044\u5834\u5408\u3001\u30EC\u30F3\u30B8\u306E\u6700\u521D\u306E\u30BB\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u304C\u8907\u6570\u30EC\u30F3\u30B8\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u6700\u521D\u306E\u30EC\u30F3\u30B8\u306E\u5148\u982D\u30BB\u30EB\u306E\u307F\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"valuesCol"})," \u5F15\u6570\u306F 2\u6B21\u5143\u69CB\u9020\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7B2C1\u30EC\u30D9\u30EB\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u5024\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\u3002 \u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u884C\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u884C\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u306B\u306F\u7A7A\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u884C\u306B\u304A\u3051\u308B\u30BB\u30EB\u306E\u5024\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u5024\u306F\u6574\u6570\u3001\u5B9F\u6570\u3001\u30D6\u30FC\u30EB\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u65E5\u4ED8\u3001Null\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u3044\u305A\u308C\u304B\u3067\u3059\u3002 \u5024\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,r.jsx)(n.td,{children:"\u30BB\u30EB\u306E\u5024 (\u6642\u9593\u90E8\u5206\u3092\u9664\u304F)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u6642\u9593\u5024 (\u79D2\u5358\u4F4D)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$param:=New collection\n$param.push(New collection(1;2;3;False)) // 1\u884C\u76EE\u7528\u306B 4\u3064\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\n$param.push(New collection) // 2\u884C\u76EE\u306F\u7A7A\u884C\u3067\u3059\n$param.push(New collection(4;5;Null;"hello";"world")) // 3\u884C\u76EE\u7528\u306B 5\u3064\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\n$param.push(New collection(6;7;8;9)) // 4\u884C\u76EE\u7528\u306B 4\u3064\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\n$param.push(New collection(Null;New object("value";Current date;"time";42))) // 5\u884C\u76EE\u7528\u306B 1\u3064\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\n\nVP SET VALUES(VP Cell("ViewProArea";2;1);$param)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(764983).Z+"",width:"756",height:"270"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-values",children:"VP Get Values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},764983:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/cmd_vpSetValues-b67ff95f1ff17766f7646ad11eff9028.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var l=s(667294);let r={},t=l.createContext(r);function c(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);