"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96714"],{596943:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"ViewPro/commands/vp-get-formula-by-name","title":"VP Get formula by name","description":"VP Get formula by name ( vpAreaName Text { ; scope Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-formula-by-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formula-by-name","permalink":"/docs/ja/ViewPro/commands/vp-get-formula-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula-by-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-formula-by-name","title":"VP Get formula by name"},"sidebar":"docs","previous":{"title":"VP Get formula","permalink":"/docs/ja/ViewPro/commands/vp-get-formula"},"next":{"title":"VP Get formulas","permalink":"/docs/ja/ViewPro/commands/vp-get-formulas"}}'),s=r("785893"),d=r("250065");let l={id:"vp-get-formula-by-name",title:"VP Get formula by name"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get formula by name"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"name"})," : Text { ; ",(0,s.jsx)(n.em,{children:"scope"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u547D\u540D\u30EC\u30F3\u30B8\u306E\u540D\u524D"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30B9\u30B3\u30FC\u30D7 (\u30C7\u30D5\u30A9\u30EB\u30C8=\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"\u547D\u540D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3001\u307E\u305F\u306F\u547D\u540D\u30EC\u30F3\u30B8\u306E\u5B9A\u7FA9"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP Get formula by name"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,s.jsx)(n.em,{children:"name"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u540D\u524D\u306E\u547D\u540D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3001\u3042\u308B\u3044\u306F\u547D\u540D\u30EC\u30F3\u30B8\u306B\u5BFE\u5FDC\u3057\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3068\u30B3\u30E1\u30F3\u30C8\u3092\u8FD4\u3057\u307E\u3059 (\u5B9A\u7FA9\u3055\u308C\u305F\u30B9\u30B3\u30FC\u30D7\u306B\u305D\u308C\u3089\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u306F ",(0,s.jsx)(n.strong,{children:"null"})," \u304C\u8FD4\u3055\u308C\u307E\u3059)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"name"})," \u306B\u306F\u3001\u53D6\u5F97\u3057\u305F\u3044\u547D\u540D\u30EC\u30F3\u30B8\u3042\u308B\u3044\u306F\u547D\u540D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u547D\u540D\u30EC\u30F3\u30B8\u306F\u3001\u7D76\u5BFE\u30BB\u30EB\u53C2\u7167\u3092\u683C\u7D0D\u3057\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3068\u3057\u3066\u8FD4\u3055\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u53D6\u5F97\u3059\u308B\u30B9\u30B3\u30FC\u30D7\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u969B\u3001\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u3092\u6E21\u3059\u304B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,s.jsx)(n.p,{children:"\u623B\u308A\u5024\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u547D\u540D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u307E\u305F\u306F\u547D\u540D\u30EC\u30F3\u30B8\u306B\u5BFE\u5FDC\u3057\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30C6\u30AD\u30B9\u30C8\u3002 \u547D\u540D\u30EC\u30F3\u30B8\u306E\u5834\u5408\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u9023\u7D9A\u3057\u305F\u7D76\u5BFE\u30BB\u30EB\u53C2\u7167\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u547D\u540D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u307E\u305F\u306F\u547D\u540D\u30EC\u30F3\u30B8\u306B\u5BFE\u5FDC\u3057\u305F\u30B3\u30E1\u30F3\u30C8"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n\n$formula:=VP Get formula by name("ViewProArea";"Total1")\n  //$formula.formula=Sheet1!$A$1\n\n$formula:=VP Get formula by name("ViewProArea";"Total")\n  //$formula=null (\u5B58\u5728\u3057\u306A\u3044\u5834\u5408)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let s={},d=t.createContext(s);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);