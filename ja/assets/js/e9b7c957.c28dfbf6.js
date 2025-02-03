"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31948"],{93605:function(n,d,e){e.r(d),e.d(d,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"Events/overview","title":"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8","description":"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3068\u306F\u3001\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3084\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u306B\u3064\u306A\u304C\u308B\u30A4\u30D9\u30F3\u30C8\u306E\u3053\u3068\u3067\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6D41\u308C\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u305F\u308A\u3001\u7279\u5B9A\u306E\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u3068\u304D\u306B\u306E\u307F\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Events/overview.md","sourceDirName":"Events","slug":"/Events/overview","permalink":"/docs/ja/20/Events/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"overview","title":"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8"},"sidebar":"docs","previous":{"title":"Web\u30A8\u30EA\u30A2","permalink":"/docs/ja/20/FormObjects/propertiesWebArea"},"next":{"title":"On Activate","permalink":"/docs/ja/20/Events/onActivate"}}'),s=e("785893"),t=e("250065");let i={id:"overview",title:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8"},l=void 0,c={},h=[{value:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:2},{value:"\u30A4\u30D9\u30F3\u30C8\u3068\u30E1\u30BD\u30C3\u30C9",id:"\u30A4\u30D9\u30F3\u30C8\u3068\u30E1\u30BD\u30C3\u30C9",level:2},{value:"\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7",id:"\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7",level:2}];function j(n){let d={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3068\u306F\u3001\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3084\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u306B\u3064\u306A\u304C\u308B\u30A4\u30D9\u30F3\u30C8\u306E\u3053\u3068\u3067\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306B\u3088\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6D41\u308C\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u305F\u308A\u3001\u7279\u5B9A\u306E\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u3068\u304D\u306B\u306E\u307F\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(d.p,{children:["\u30B3\u30FC\u30C9\u306E\u4E2D\u3067\u306F\u3001\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u3092\u8FD4\u3059 ",(0,s.jsx)(d.code,{children:"FORM Event"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30D9\u30F3\u30C8\u3092\u5236\u5FA1\u3057\u307E\u3059\u3002 \u4F8B:"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-4d",children:"// \u30DC\u30BF\u30F3\u306E\u30B3\u30FC\u30C9\nIf(FORM Event.code=On Clicked) \n// \u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306E\u52D5\u4F5C\nEnd if\n"})}),"\n",(0,s.jsxs)(d.blockquote,{children:["\n",(0,s.jsx)(d.p,{children:"\u3059\u3079\u3066\u306E\u30D5\u30A9\u30FC\u30E0\u3068\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u3059\u3079\u3066\u306E\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u4E8B\u524D\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u306E\u30BB\u30C3\u30C8\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u30D5\u30A9\u30FC\u30E0\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u6BCE\u306B\u6709\u52B9\u306B\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u3060\u3051\u304C\u5B9F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,s.jsxs)(d.p,{children:["\u5404\u30A4\u30D9\u30F3\u30C8\u306F\u3001",(0,s.jsx)(d.code,{children:"FORM Event"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,s.jsx)(d.th,{children:"\u578B"}),(0,s.jsx)(d.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"objectName"}),(0,s.jsx)(d.td,{children:"text"}),(0,s.jsx)(d.td,{children:"\u30A4\u30D9\u30F3\u30C8\u3092\u30C8\u30EA\u30AC\u30FC\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3002\u30D5\u30A9\u30FC\u30E0\u306B\u3088\u3063\u3066\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"Form event code"}),' \u306B\u3088\u3063\u3066\u3082\u8FD4\u3055\u308C\u307E\u3059\u3002| |description|text|\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u540D (\u4F8B: "On After Edit")|']}),"\n",(0,s.jsx)(d.p,{children:"\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u306F\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u7279\u306B:"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.a,{href:"/docs/ja/20/FormObjects/listboxOverview#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF"})," \u304A\u3088\u3073 ",(0,s.jsx)(d.a,{href:"/docs/ja/20/FormObjects/listboxOverview#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-1",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217"})," \u306F\u3001",(0,s.jsx)(d.code,{children:"columnName"})," \u3084 ",(0,s.jsx)(d.code,{children:"isRowSelected"})," \u3068\u3044\u3063\u305F\u3001",(0,s.jsx)(d.a,{href:"/docs/ja/20/FormObjects/listboxOverview#%E8%BF%BD%E5%8A%A0%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3",children:"\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.a,{href:"/docs/ja/20/FormObjects/viewProAreaOverview",children:"4D View Pro \u30A8\u30EA\u30A2"})," \u306F\u3001",(0,s.jsx)(d.code,{children:"sheetName"})," \u3084 ",(0,s.jsx)(d.code,{children:"action"})," \u3068\u3044\u3063\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3092 ",(0,s.jsx)(d.a,{href:"/docs/ja/20/Events/onAfterEdit",children:"On After Edit"})," \u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u30A4\u30D9\u30F3\u30C8\u3068\u30E1\u30BD\u30C3\u30C9",children:"\u30A4\u30D9\u30F3\u30C8\u3068\u30E1\u30BD\u30C3\u30C9"}),"\n",(0,s.jsx)(d.p,{children:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u3068\u30014D \u306F\u4EE5\u4E0B\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u304A\u3053\u306A\u3044\u307E\u3059:"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"\u307E\u305A 4D \u306F\u3001\u30D5\u30A9\u30FC\u30E0\u4E2D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30D6\u30E9\u30A6\u30BA\u3057\u3001\u767A\u751F\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30A4\u30D9\u30F3\u30C8\u304C\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u6B21\u306B\u3001\u767A\u751F\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u5FDC\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304C\u30D5\u30A9\u30FC\u30E0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u308C\u3070\u3001\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(d.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u7279\u5B9A\u306E\u9806\u5E8F\u3067\u547C\u3073\u51FA\u3055\u308C\u308B\u3053\u3068\u3092\u671F\u5F85\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u304A\u304A\u307E\u304B\u306B\u8A00\u3063\u3066\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u5E38\u306B\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3088\u308A\u3082\u524D\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u5834\u5408\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u3001\u6B21\u306B\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u305D\u3057\u3066 4D \u306F\u5F15\u304D\u7D9A\u304D\u3001\u89AA\u30D5\u30A9\u30FC\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u6642\u3001 4D \u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3068\u540C\u3058\u30EB\u30FC\u30EB\u3092\u9069\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/docs/ja/20/Events/onLoad",children:"On Load"})," \u3068 ",(0,s.jsx)(d.a,{href:"/docs/ja/20/Events/onUnload",children:"On Unload"})," \u30A4\u30D9\u30F3\u30C8\u3092\u9664\u304D (\u5F8C\u8FF0\u53C2\u7167)\u3001\u767A\u751F\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u304C\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u3068\u3057\u3066\u3082\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u308C\u3070\u3001\u305D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057\u304C\u59A8\u3052\u3089\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u8A00\u3044\u63DB\u3048\u308C\u3070\u3001\u30D5\u30A9\u30FC\u30E0\u30EC\u30D9\u30EB\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u6709\u52B9\u3042\u308B\u3044\u306F\u7121\u52B9\u306B\u3057\u3066\u3082\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30A4\u30D9\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F\u5F71\u97FF\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u7279\u5B9A\u306E\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u9023\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6570\u306F\u3001\u30A4\u30D9\u30F3\u30C8\u306E\u6027\u8CEA\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsx)(d.h2,{id:"\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7",children:"\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7"}),"\n",(0,s.jsx)(d.p,{children:"\u4EE5\u4E0B\u306E\u8868\u306F\u3001\u305D\u308C\u305E\u308C\u306E\u30A4\u30D9\u30F3\u30C8\u3054\u3068\u306B\u3069\u306E\u3088\u3046\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3068\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3070\u308C\u308B\u304B\u3092\u6982\u8AAC\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u30A4\u30D9\u30F3\u30C8"}),(0,s.jsx)(d.th,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9"}),(0,s.jsx)(d.th,{children:"\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9"}),(0,s.jsx)(d.th,{children:"\u5BFE\u8C61\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Load"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Unload"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Validate"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Clicked"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Double Clicked"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Before Keystroke"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On After Keystroke"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On After Edit"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Getting Focus"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Losing Focus"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Activate"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Deactivate"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Outside Call"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Page Change"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Begin Drag Over"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Drop"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Drag Over"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Mouse Enter"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Mouse Move"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Mouse Leave"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Mouse Up"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Menu Selected"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Bound variable change"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Data Change"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Plug in Area"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Header"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Printing Detail"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Printing Break"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Printing Footer"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Close Box"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Display Detail"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Open Detail"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Close Detail"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Resize"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Selection Change"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Load Record"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Timer"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u306A\u3057"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Scroll"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Before Data Entry"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Column Moved"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Row Moved"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Column Resize"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3068 4D View Pro \u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Header Click"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3068 4D View Pro \u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Footer Click"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On After Sort"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Long Click"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30DC\u30BF\u30F3)"}),(0,s.jsx)(d.td,{children:"\u25EF"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Alternative Click"}),(0,s.jsx)(d.td,{children:"\u25EF (\u30DC\u30BF\u30F3\u3068\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Expand"}),(0,s.jsx)(d.td,{children:"\u25EF (\u968E\u5C64 \u30EA\u30B9\u30C8\u3068\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Collapse"}),(0,s.jsx)(d.td,{children:"\u25EF (\u968E\u5C64 \u30EA\u30B9\u30C8\u3068\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Delete Action"}),(0,s.jsx)(d.td,{children:"\u25EF (\u968E\u5C64 \u30EA\u30B9\u30C8\u3068\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On URL Resource Loading"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Begin URL Loading"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On URL Loading Error"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On URL Filtering"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On End URL Loading"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Open External Link"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Window Opening Denied"}),(0,s.jsx)(d.td,{children:"\u25EF (Web\u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On VP Range Changed"}),(0,s.jsx)(d.td,{children:"\u25EF (4D View Pro \u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On VP Ready"}),(0,s.jsx)(d.td,{children:"\u25EF (4D View Pro \u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On Row Resize"}),(0,s.jsx)(d.td,{children:"\u25EF (4D View Pro \u30A8\u30EA\u30A2)"}),(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"\u95A2\u4FC2\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F"})]})]})]}),"\n",(0,s.jsx)(d.p,{children:"\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u5FDC\u3059\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u3001\u30D5\u30A9\u30FC\u30E0\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30E0\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u7121\u52B9\u306B\u3059\u308B\u3068\u3001\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u56DE\u6570\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u3001\u30D5\u30A9\u30FC\u30E0\u306E\u5B9F\u884C\u901F\u5EA6\u3092\u6700\u9069\u5316\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(d.blockquote,{children:["\n",(0,s.jsxs)(d.p,{children:["\u8B66\u544A: \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,s.jsx)(d.a,{href:"/docs/ja/20/Events/onLoad",children:"On Load"})," \u3068 ",(0,s.jsx)(d.a,{href:"/docs/ja/20/Events/onUnload",children:"On Unload"})," \u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u308B\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5C5E\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u306E\u4E21\u65B9\u3067\u6709\u52B9\u306B\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F\u3067\u30A4\u30D9\u30F3\u30C8\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u30A4\u30D9\u30F3\u30C8\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u3089 2\u3064\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u30D5\u30A9\u30FC\u30E0\u30EC\u30D9\u30EB\u3067\u3082\u6709\u52B9\u306B\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n"]})]})}function x(n={}){let{wrapper:d}={...(0,t.a)(),...n.components};return d?(0,s.jsx)(d,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},250065:function(n,d,e){e.d(d,{Z:function(){return l},a:function(){return i}});var r=e(667294);let s={},t=r.createContext(s);function i(n){let d=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function l(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:d},n.children)}}}]);