"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59580"],{133724:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>l,metadata:()=>d,assets:()=>t,toc:()=>c,contentTitle:()=>E});var d=JSON.parse('{"id":"commands/set-allowed-methods","title":"SET ALLOWED METHODS","description":"SET ALLOWED METHODS ( methodsArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/set-allowed-methods.md","sourceDirName":"commands","slug":"/commands/set-allowed-methods","permalink":"/docs/ja/commands/set-allowed-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fset-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-allowed-methods","title":"SET ALLOWED METHODS","slug":"/commands/set-allowed-methods","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Parse formula","permalink":"/docs/ja/commands/parse-formula"},"next":{"title":"Graphs","permalink":"/docs/ja/category/graphs"}}'),r=n("785893"),o=n("250065");let l={id:"set-allowed-methods",title:"SET ALLOWED METHODS",slug:"/commands/set-allowed-methods",displayed_sidebar:"docs"},E=void 0,t={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function i(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"})," ( ",(0,r.jsx)(s.em,{children:"methodsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5F15\u6570"}),(0,r.jsx)(s.th,{children:"\u578B"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodsArray"}),(0,r.jsx)(s.td,{children:"\u30C6\u30AD\u30B9\u30C8\u914D\u5217"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"\u30E1\u30BD\u30C3\u30C9\u540D\u306E\u914D\u5217"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"})," command designates the project methods that can be entered via the application."]}),"\n",(0,r.jsx)(s.p,{children:"4D\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u306E\u547C\u3073\u51FA\u3057\u53EF\u80FD\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3059\u308B\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6A5F\u69CB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC - \u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u30B3\u30DE\u30F3\u30C9\u306E\u4E00\u89A7\u306E\u6700\u5F8C\u306B\u8868\u793A\u3055\u308C\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30FC\u5185\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059(",(0,r.jsx)(s.em,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u30FC"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u30E9\u30D9\u30EB\u30A8\u30C7\u30A3\u30BF\u30FC - \u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u3082\u5171\u6709\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u30E1\u30BD\u30C3\u30C9\u306F",(0,r.jsx)(s.strong,{children:"\u8A31\u53EF"}),"\u30E1\u30CB\u30E5\u30FC\u5185\u306B\u8868\u793A\u3055\u308C\u307E\u3059(",(0,r.jsx)(s.em,{children:"\u30E9\u30D9\u30EB\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u8A73\u7D30"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/ja/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u901A\u3057\u3066\u30B9\u30BF\u30A4\u30EB\u4ED8\u304D\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u307E\u305F\u306F4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u633F\u5165\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9 - \u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30E1\u30BD\u30C3\u30C9\u306F\u81EA\u52D5\u7684\u306B\u6392\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["4D View Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8 - \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u4E00\u5EA6\u3082\u5B9F\u884C\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u30014D View Pro \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30FC\u306F",(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"})," \u3067\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3067\u3059\u304C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(s.a,{href:"/docs/ja/ViewPro/formulas#%E8%A8%B1%E5%8F%AF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u8A31\u53EF\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5BA3\u8A00"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001",(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3001\u5165\u529B\u53EF\u80FD\u306A\u30E1\u30BD\u30C3\u30C9\u306F\u3042\u308A\u307E\u305B\u3093 (\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30E1\u30BD\u30C3\u30C9\u3092\u5F0F\u306E\u4E2D\u3067\u4F7F\u7528\u3059\u308B\u3068\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059)\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"methodsArray"})," \u5F15\u6570\u306B\u306F\u3001\u8A31\u53EF\u3057\u305F\u3044\u30E1\u30BD\u30C3\u30C9\u306E\u4E00\u89A7\u3092\u683C\u7D0D\u3057\u305F\u540D\u524D\u306E\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u30E1\u30BD\u30C3\u30C9\u540D\u306B\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u8A18\u53F7 (@) \u3092\u4F7F\u7528\u3057\u3001\u8A31\u53EF\u3055\u308C\u308B\u30E1\u30BD\u30C3\u30C9\u30B0\u30EB\u30FC\u30D7\u3092\u8907\u6570\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u30444D\u30B3\u30DE\u30F3\u30C9\u3084\u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9\u3092\u30E6\u30FC\u30B6\u30FC\u304C\u547C\u3073\u51FA\u305B\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u5834\u5408\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u53D6\u308A\u6271\u3046\u7279\u5B9A\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u6CE8"}),": ",(0,r.jsx)(s.a,{href:"/docs/ja/settings/security#%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3",children:'\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3"\u30DA\u30FC\u30B8\u306E\u30AA\u30D7\u30B7\u30E7\u30F3'}),' \u306B\u3088\u3063\u3066\u3001\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u307E\u305F\u306FDesigner\u3068Administrator\u306B\u5BFE\u3057\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30FC\u3067\u306E\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u30A2\u30AF\u30BB\u30B9\u3092\u7121\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002 "\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5236\u9650\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C \u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001',(0,r.jsx)(s.strong,{children:"SET ALLOWED METHODS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u52B9\u679C\u304C\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30E1\u30BD\u30C3\u30C9\u306E",(0,r.jsx)(s.strong,{children:"\u5165\u529B"})," \u3092\u5236\u9650\u3059\u308B\u3082\u306E\u3067\u3001",(0,r.jsx)(s.strong,{children:"\u5B9F\u884C"})," \u3092\u5236\u9650\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5916\u3067\u4F5C\u6210\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u306F\u7BA1\u7406\u3057\u307E\u305B\u3093\u3002"]})}),"\n",(0,r.jsx)(s.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(s.p,{children:"\u3053\u306E\u4F8B\u306F\u3001\u540D\u524D\u304C\u201Cformula\u201D\u3067\u59CB\u307E\u308B\u3059\u3079\u3066\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u3001\u201CTotal_general\u201D \u30E1\u30BD\u30C3\u30C9\u3092\u3001\u4FDD\u8B77\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4E0B\u306B\u304A\u3044\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u5165\u529B\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT(methodsArray;2)\n\xa0methodsArray{1}:="formula@"\n\xa0methodsArray{2}:="Total_general"\n\xa0SET ALLOWED METHODS(methodsArray)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/ja/commands/edit-formula",children:"EDIT FORMULA"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/ja/commands/get-allowed-methods",children:"GET ALLOWED METHODS"})]}),"\n",(0,r.jsx)(s.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(s.td,{children:"805"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,r.jsx)(s.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;cross;"})]})]})]})]})}function a(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return E},a:function(){return l}});var d=n(667294);let r={},o=d.createContext(r);function l(e){let s=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function E(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(o.Provider,{value:s},e.children)}}}]);