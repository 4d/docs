"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61877"],{486910:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-stylesheet","title":"VP Get stylesheets","description":"VP Get stylesheets ( vpAreaName Integer } ) : Collection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-stylesheets.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-stylesheet","permalink":"/docs/ja/ViewPro/commands/vp-get-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-stylesheet","title":"VP Get stylesheets"},"sidebar":"docs","previous":{"title":"VP Get spans","permalink":"/docs/ja/ViewPro/commands/vp-get-spans"},"next":{"title":"VP Get stylesheet","permalink":"/docs/ja/ViewPro/commands/vp-get-stylesheets"}}'),r=t("785893"),l=t("250065");let d={id:"vp-get-stylesheet",title:"VP Get stylesheets"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get stylesheets"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30B9\u30B3\u30FC\u30D7 (\u30C7\u30D5\u30A9\u30EB\u30C8 = \u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP Get stylesheets"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"sheet"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30B3\u30FC\u30D7\u306B\u304A\u3044\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"sheet"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3092\u3069\u3053\u304B\u3089\u53D6\u5F97\u3059\u308B\u304B\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B7\u30FC\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u304B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8\u5185\u306B\u3042\u308B\u5168\u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$styles:=VP Get stylesheets("ViewProArea")\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8\u304C 2\u3064\u306E\u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u305F\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"[\n   {\n     backColor:green,\n     borderLeft:{color:green,style:10}, \n     borderTop:{color:green,style:10}, \n     borderRight:{color:green,style:10}, \n     borderBottom:{color:green,style:10}, \n     name:GreenDashDotStyle\n   },\n   {\n     backColor:red,\n     textIndent:10,\n     name:RedIndent\n   }\n]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);