"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46043"],{26407:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-print","title":"VP PRINT","description":"VP PRINT ( vpAreaName Integer } )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-print.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-print","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-print.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-print","title":"VP PRINT"},"sidebar":"docs","previous":{"title":"VP PASTE FROM OBJECT","permalink":"/docs/ja/20-R6/ViewPro/commands/vp-paste-from-object"},"next":{"title":"R","permalink":"/docs/ja/20-R6/commands/R"}}'),t=r("785893"),i=r("250065");let d={id:"vp-print",title:"VP PRINT"},c=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP PRINT"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VP PRINT"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"vpAreaName"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30A8\u30EA\u30A2\u3092\u5370\u5237\u3059\u308B\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u958B\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"vpAreaName"})," \u306B\u306F\u3001\u5370\u5237\u3059\u308B 4D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u958B\u304B\u308C\u3001\u30D7\u30EA\u30F3\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u305F\u308A\u30DA\u30FC\u30B8\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5B9A\u7FA9\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u5B9A\u7FA9\u3055\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30D7\u30EA\u30F3\u30BF\u30FC\u7528\u7D19\u306E\u305F\u3081\u306E\u3082\u306E\u3067\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u5370\u5237\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 4D View Pro \u30A8\u30EA\u30A2\u306E\u5370\u5237\u30D7\u30ED\u30D1\u30C6\u30A3\u306F ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," \u30B3\u30DE\u30F3\u30C9\u3067\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u30D7\u30EA\u30F3\u30BF\u30FC\u3068 4D View Pro \u30A8\u30EA\u30A2\u306E\u4E21\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5408\u81F4\u3059\u308B\u3053\u3068\u304C\u5F37\u304F\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u671F\u5F85\u901A\u308A\u306B\u5370\u5237\u3055\u308C\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,t.jsx)(n.em,{children:"sheet"})," \u5F15\u6570\u3068\u3057\u3066\u3001\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u5370\u5237\u3059\u308B\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u30AB\u30EC\u30F3\u30C8\u306E\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3042\u308B\u3044\u306F\u30EF\u30FC\u30AF\u30D6\u30C3\u30AF\u5168\u4F53\u3092\u660E\u793A\u7684\u306B\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["4D View Pro \u30A8\u30EA\u30A2\u306F\u3001",(0,t.jsx)(n.code,{children:"VP PRINT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u306E\u307F\u5370\u5237\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["4D\u30B3\u30DE\u30F3\u30C9\u306E ",(0,t.jsx)(n.strong,{children:"\u5370\u5237"})," \u30C6\u30FC\u30DE\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.code,{children:"VP PRINT"})," \u3067\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6700\u7D42\u7684\u306A\u30A8\u30F3\u30C9\u30E6\u30FC\u30B6\u30FC\u304C\u500B\u5225\u306B\u5370\u5237\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002 \u81EA\u52D5\u5316\u5370\u5237\u30B8\u30E7\u30D6\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u3067 4D View Pro \u30A8\u30EA\u30A2\u3092 PDF \u306B\u66F8\u304D\u51FA\u3059\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' VP PRINT("myVPArea")\n'})}),"\n",(0,t.jsx)(n.p,{children:"... \u5370\u5237\u30C0\u30A4\u30A2\u30ED\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u958B\u304D\u307E\u3059:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(418141).Z+"",width:"747",height:"660"})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R6/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},418141:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/cmd_vpPrint-2d4304e96d5c2169b69457627cd893fc.PNG"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);