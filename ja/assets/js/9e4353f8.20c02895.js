"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90898"],{428667:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/invoke-action","title":"INVOKE ACTION","description":"INVOKE ACTION ( action {; target} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/invoke-action.md","sourceDirName":"commands-legacy","slug":"/commands/invoke-action","permalink":"/docs/ja/commands/invoke-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finvoke-action.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"invoke-action","title":"INVOKE ACTION","slug":"/commands/invoke-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get pointer","permalink":"/docs/ja/commands/get-pointer"},"next":{"title":"Is a variable","permalink":"/docs/ja/commands/is-a-variable"}}'),t=s("785893"),i=s("250065");let d={id:"invoke-action",title:"INVOKE ACTION",slug:"/commands/invoke-action",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"INVOKE ACTION"})," ( ",(0,t.jsx)(e.em,{children:"action"})," {; ",(0,t.jsx)(e.em,{children:"target"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"action"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u3001\u3042\u308B\u3044\u306F(\u5FC5\u8981\u3067\u3042\u308C\u3070)\u5F15\u6570\u3092\u542B\u3081\u305F\u30D1\u30BF\u30FC\u30F3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"target"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u5834\u6240\u3092\u5B9A\u7FA9: \u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3042\u308B\u3044\u306F\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"INVOKE ACTION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(e.em,{children:"action"})," \u5F15\u6570\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u3001\u4EFB\u610F\u306E",(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u30C8\u30EA\u30AC\u30FC\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"action"})," \u5F15\u6570\u306B\u306F\u3001\u5B9F\u884C\u3057\u305F\u3044\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u307E\u3059\u3002\u6587\u5B57\u5217\u3001\u3042\u308B\u3044\u306F",(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4E00\u90E8\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u8981\u7D20\u304A\u3088\u3073\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u4F8B\u3048\u3070 ",(0,t.jsx)(e.em,{children:'"gotoPage?value=2"'})," or ",(0,t.jsx)(e.em,{children:"paragraph/backgroundPositionV?value=top"})," \u306A\u3069\u306E\u30D1\u30BF\u30FC\u30F3\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5229\u7528\u53EF\u80FD\u306A4D \u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(e.em,{children:"4D \u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB"}),"\u306E",(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u306E\u7AE0\u306B\u4E00\u89A7\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8\u610F:"})," 4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u306F\u3001\u7279\u5B9A\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306B\u3064\u3044\u3066\u306F\u30014D Write Pro \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u5185\u306E ",(0,t.jsx)(e.em,{children:"4D Write Pro\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F7F\u7528"})," \u306E\u7AE0\u306B\u8A73\u7D30\u306A\u8AAC\u660E\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:""}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u306B\u306F\u3001",(0,t.jsx)(e.em,{children:"action"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u305F\u3044\u30D5\u30A9\u30FC\u30E0\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,t.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u3069\u308C\u304B\u4E00\u3064\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak current form"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u306F\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3001\u3042\u308B\u3044\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u306E\u524D\u9762\u306B\u3042\u308B\u30D1\u30EC\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u3069\u3061\u3089\u304B\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ak main form"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{children:"\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3068\u306F\u6700\u524D\u9762\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3042\u308B\u3044\u306F\u30D7\u30ED\u30BB\u30B9\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u30D5\u30A9\u30FC\u30E0\u3067\u3042\u308A\u3001\u30D5\u30ED\u30FC\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6\u3084\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30A6\u30A3\u30F3\u30C9\u30A6\u306A\u3069\u306F\u9664\u304D\u307E\u3059\u3002"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067ak current form \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u306B\u3088\u3063\u3066\u3001",(0,t.jsx)(e.strong,{children:"INVOKE ACTION"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u306F\u540C\u671F\u3042\u308B\u3044\u306F\u975E\u540C\u671F\u3067\u884C\u308F\u308C\u307E\u3059:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u306Bak current form \u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,t.jsx)(e.strong,{children:"INVOKE ACTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u540C\u671F\u3067\u884C\u308F\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u305D\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30AB\u30EC\u30F3\u30C8\u30B5\u30A4\u30AF\u30EB\u306B\u304A\u3044\u3066\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u77AC\u9593\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u306Bak main form \u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,t.jsx)(e.strong,{children:"INVOKE ACTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u975E\u540C\u671F\u3067\u884C\u308F\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u305D\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5B9F\u884C\u304C\u5B8C\u4E86\u3057\u305F\u5F8C\u306B\u6B21\u306E\u30B5\u30A4\u30AF\u30EB\u306B\u304A\u3044\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u6A19\u6E96\u306E\u7DE8\u96C6\u30A2\u30AF\u30B7\u30E7\u30F3(\u30AB\u30C3\u30C8\u3001\u30B3\u30D4\u30FC\u3001\u30DA\u30FC\u30B9\u30C8\u3001\u3059\u3079\u3066\u3092\u9078\u629E\u3001\u524A\u9664\u3001\u53D6\u308A\u6D88\u3059/\u3084\u308A\u76F4\u3059)\u306F",(0,t.jsx)(e.em,{children:"target"})," \u5F15\u6570\u3092\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u7121\u8996\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5E38\u306B\u3001\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u7DE8\u96C6\u53EF\u80FD\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u540C\u671F\u3067\u5B9F\u884C\u3055\u308C\u308B\u304B\u3089\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"INVOKE ACTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001\u6307\u5B9A\u3057\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u30AB\u30EC\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u5229\u7528\u4E0D\u53EF\u80FD\u306A\u5834\u5408\u306A\u3069\u306B\u304A\u3044\u3066\u3082\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002",(0,t.jsx)(e.a,{href:"/docs/ja/commands/action-info",children:"Action info"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u4E88\u5B9A\u3057\u3066\u3044\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8A55\u4FA1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,t.jsxs)(e.p,{children:["\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066",(0,t.jsx)(e.strong,{children:"\u30B3\u30D4\u30FC"}),"\u306E\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0INVOKE ACTION(ak copy;ak current form)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,t.jsxs)(e.p,{children:["\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066",(0,t.jsx)(e.strong,{children:"\u6307\u5B9A\u3057\u305F\u30DA\u30FC\u30B8\u3078\u79FB\u52D5"}),"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3(3\u30DA\u30FC\u30B8)\u3092\u5B9F\u884C\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0INVOKE ACTION(ak goto page+"?value=3";ak main form)\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/commands/action-info",children:"Action info"})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1439"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);