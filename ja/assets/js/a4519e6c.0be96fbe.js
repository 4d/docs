"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85845"],{669841:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-reset-selection","title":"VP RESET SELECTION","description":"VP RESET SELECTION ( vpAreaName Integer } )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-reset-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-reset-selection","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-reset-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-reset-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-reset-selection","title":"VP RESET SELECTION"},"sidebar":"docs","previous":{"title":"VP REMOVE TABLE ROWS","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-remove-table-rows"},"next":{"title":"VP RESIZE TABLE","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-resize-table"}}'),r=s("785893"),c=s("250065");let i={id:"vp-reset-selection",title:"VP RESET SELECTION"},d=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP RESET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP RESET SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u3059\u3079\u3066\u306E\u30BB\u30EB\u9078\u629E\u3092\u89E3\u9664\u3057\u3001\u305D\u306E\u7D50\u679C\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3 (\u307E\u305F\u306F\u30A2\u30AF\u30C6\u30A3\u30D6\u30BB\u30EB) \u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"4D View Pro \u30B3\u30DE\u30F3\u30C9\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A2\u30AF\u30C6\u30A3\u30D6\u30BB\u30EB (A1 \u30BB\u30EB) \u306F\u6B8B\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"sheet"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u5B9A\u7FA9\u3055\u308C\u308B\u30EC\u30F3\u30B8\u304C\u5C5E\u3059\u308B\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30AB\u30EC\u30F3\u30C8\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30AB\u30EC\u30F3\u30C8\u306E\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u660E\u793A\u7684\u306B\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30BB\u30EB\u9078\u629E (\u30A2\u30AF\u30C6\u30A3\u30D6\u30BB\u30EB\u3068\u9078\u629E\u30BB\u30EB) \u3092\u3059\u3079\u3066\u89E3\u9664\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP RESET SELECTION("myVPArea")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},c=t.createContext(r);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);