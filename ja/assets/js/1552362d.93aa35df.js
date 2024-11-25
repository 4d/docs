"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68305"],{722660:function(n,s,e){e.r(s),e.d(s,{metadata:()=>r,contentTitle:()=>i,default:()=>j,assets:()=>t,toc:()=>A,frontMatter:()=>c});var r=JSON.parse('{"id":"Debugging/breakpoints","title":"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9","description":"\u6982\u8981","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Debugging/breakpoints.md","sourceDirName":"Debugging","slug":"/Debugging/breakpoints","permalink":"/docs/ja/20/Debugging/breakpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbreakpoints.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"breakpoints","title":"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9"},"sidebar":"docs","previous":{"title":"\u30C7\u30D0\u30C3\u30AC\u30FC","permalink":"/docs/ja/20/Debugging/debugger"},"next":{"title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u30C7\u30D0\u30C3\u30B0","permalink":"/docs/ja/20/Debugging/debugging-remote"}}'),l=e("785893"),d=e("250065");let c={id:"breakpoints",title:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9"},i=void 0,t={},A=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",id:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",level:2},{value:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3",level:3},{value:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30B0\u3067\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",id:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30B0\u3067\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",level:3},{value:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8",id:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8",level:3},{value:"\u30B3\u30DE\u30F3\u30C9\u306E\u30AD\u30E3\u30C3\u30C1",id:"\u30B3\u30DE\u30F3\u30C9\u306E\u30AD\u30E3\u30C3\u30C1",level:2},{value:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306B\u6761\u4EF6\u3092\u8A2D\u5B9A\u3059\u308B",id:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306B\u6761\u4EF6\u3092\u8A2D\u5B9A\u3059\u308B",level:3}];function h(n){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u975E\u5E38\u306B\u52B9\u7387\u7684\u306A\u30C7\u30D0\u30C3\u30B0\u624B\u6CD5\u3067\u3059\u3002 \u3069\u3061\u3089\u3082\u3001\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3092\u4EFB\u610F\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u4E00\u6642\u505C\u6B62\u3055\u305B\u308B (\u307E\u3060\u8868\u793A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u30C7\u30D0\u30C3\u30AC\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u8868\u793A\u3055\u305B\u308B) \u3068\u3044\u3046\u540C\u3058\u52B9\u679C\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u3001\u5B9F\u884C\u3092\u4E00\u6642\u505C\u6B62\u3055\u305B\u305F\u3044\u30B3\u30FC\u30C9\u306E\u4EFB\u610F\u306E\u884C\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u6761\u4EF6\u3092\u95A2\u9023\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u7279\u5B9A\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u547C\u3073\u51FA\u3057\u5143\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u3092\u30C8\u30EC\u30FC\u30B9\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u307E\u305F\u306F\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u30A8\u30EA\u30A2\u306E\u5DE6\u30DE\u30FC\u30B8\u30F3\u5185\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(s.p,{children:["\u6B21\u306E\u56F3\u3067\u306F\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8 (\u8D64\u3044\u70B9) \u304C\u30C7\u30D0\u30C3\u30AC\u30FC\u5185\u3067\u3001",(0,l.jsx)(s.code,{children:"If ($in.dataClass#Null)"})," \u306E\u884C\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059:"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",src:e(722867).Z+"",width:"672",height:"227"})}),"\n",(0,l.jsxs)(s.p,{children:["\u4E0A\u306E\u72B6\u614B\u3067 ",(0,l.jsx)(s.a,{href:"./debugger.md/#%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B9%E7%B5%82%E4%BA%86",children:(0,l.jsx)(s.strong,{children:"\u30C8\u30EC\u30FC\u30B9\u7D42\u4E86"})})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u305F\u884C\u307E\u3067\u5B9F\u884C\u304C\u518D\u958B\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3067\u793A\u3055\u308C\u305F\u884C\u306F\u5B9F\u884C\u3055\u308C\u305A\u306B\u3001\u30C8\u30EC\u30FC\u30B9\u30E2\u30FC\u30C9\u3078 \u623B\u308A\u307E\u3059\u3002 \u30D7\u30ED\u30B0\u30E9\u30E0\u30AB\u30A6\u30F3\u30BF\u30FC\u3088\u308A\u4E0B\u65B9\u306E (\u5F8C\u306B\u5B9F\u884C\u3055\u308C\u308B) \u884C\u306B\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u3001",(0,l.jsx)(s.strong,{children:"\u30C8\u30EC\u30FC\u30B9\u7D42\u4E86"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u307E\u3067\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u8D64\u8272\u306E\u70B9\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4F7F\u3063\u3066\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306E\u3075\u308B\u307E\u3044\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3",src:e(451980).Z+"",width:"457",height:"337"})}),"\n",(0,l.jsxs)(s.p,{children:["\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u304A\u3088\u3073\u30C7\u30D0\u30C3\u30AC\u30FC\u306E ",(0,l.jsx)(s.a,{href:"/docs/ja/20/Debugging/debugger#%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%82%A8%E3%83%AA%E3%82%A2",children:"\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u30A8\u30EA\u30A2"})," \u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002 \u6B21\u306E\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u4EFB\u610F\u306E\u884C\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,l.jsx)(s.strong,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u7DE8\u96C6..."})," \u3092\u9078\u629E\u3059\u308B\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:["\u5DE6\u30DE\u30FC\u30B8\u30F3\u5185\u3067 ",(0,l.jsx)(s.code,{children:"Alt+\u30AF\u30EA\u30C3\u30AF"})," (Windows) \u307E\u305F\u306F ",(0,l.jsx)(s.code,{children:"Option+\u30AF\u30EA\u30C3\u30AF"})," (macOS) \u3092\u5B9F\u884C\u3059\u308B\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u65E2\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306B\u3064\u3044\u3066\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u65B0\u898F\u4F5C\u6210\u3055\u308C\u3001\u305D\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306B\u95A2\u3059\u308B\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u6B21\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u5834\u6240"}),": \u30E1\u30BD\u30C3\u30C9\u540D\u3068\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u884C\u756A\u53F7\u3092\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u6B21\u306E\u5F0F\u304C\u771F\u306E\u3068\u304D\u30D6\u30EC\u30FC\u30AF"}),": ",(0,l.jsx)(s.code,{children:"True"})," \u307E\u305F\u306F ",(0,l.jsx)(s.code,{children:"False"})," \u3092\u8FD4\u3059 4D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5165\u529B\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001",(0,l.jsx)(s.strong,{children:"\u6761\u4EF6\u4ED8\u304D\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8"})," \u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001",(0,l.jsx)(s.code,{children:"Records in selection(\\[aTable])=0"})," \u3068\u5165\u529B\u3059\u308B\u3068\u3001\u30C6\u30FC\u30D6\u30EB [aTable] \u306E\u30EC\u30B3\u30FC\u30C9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u9650\u3063\u3066\u30D6\u30EC\u30FC\u30AF\u304C\u767A\u751F\u3057\u307E\u3059\u3002 \u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306E\u6761\u4EF6\u306F\u3001",(0,l.jsx)(s.a,{href:"#%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88",children:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8"}),"\u306E ",(0,l.jsx)(s.strong,{children:"\u6761\u4EF6"})," \u30AB\u30E9\u30E0\u3067\u3082\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u30D6\u30EC\u30FC\u30AF\u306E\u524D\u306B\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u56DE\u6570"}),": \u30EB\u30FC\u30D7\u69CB\u9020 (While\u3001Repeat\u3001For) \u5185\u3001\u307E\u305F\u306F\u30EB\u30FC\u30D7\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u3066\u3044\u308B\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u3084\u95A2\u6570\u5185\u306E\u30B3\u30FC\u30C9\u884C\u306B\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u7121\u52B9\u3067\u3059"}),": \u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u73FE\u5728\u306F\u5FC5\u8981\u3067\u306A\u3044\u3082\u306E\u306E\u3001\u5F8C\u3067\u5FC5\u8981\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4E00\u6642\u7684\u306B\u7121\u52B9\u306B\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7121\u52B9\u306A\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u3001\u70B9 (\uFF65) \u3067\u306F\u306A\u304F\u30C0\u30C3\u30B7\u30E5\u8A18\u53F7 (-) \u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30B0\u3067\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8",children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30B0\u3067\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306E\u4E00\u89A7\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30B0\u30E2\u30FC\u30C9\u3067\u306F\u3001\u8D77\u52D5\u3057\u305F\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u30EA\u30E2\u30FC\u30C84D \u3060\u3063\u305F\u5834\u5408\u3001\u30C7\u30D0\u30C3\u30B0\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u9593\u306F\u30EA\u30E2\u30FC\u30C8\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u4E00\u89A7\u304C\u30B5\u30FC\u30D0\u30FC\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u4E00\u89A7\u3092\u4E00\u6642\u7684\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u30B5\u30FC\u30D0\u30FC\u306E\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u4E00\u89A7\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u8D77\u52D5\u3057\u305F\u5834\u5408\u306B\u306F\u81EA\u52D5\u7684\u306B\u5FA9\u5143\u3055\u308C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8",children:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8"}),"\n",(0,l.jsxs)(s.p,{children:["\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u53C8\u306F\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u4F5C\u6210\u3057\u305F\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u308B\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u306E\u30DA\u30FC\u30B8\u3067\u3059\u3002 \u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,l.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.ja.html",children:"\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8\u306E\u30DA\u30FC\u30B8\u3092\u958B\u304F\u306B\u306F:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u5B9F\u884C"})," \u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,l.jsx)(s.strong,{children:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC..."})," \u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u30D6\u30EC\u30FC\u30AF"})," \u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8\u3092\u8868\u793A\u3055\u305B\u307E\u3059:"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u30D6\u30EC\u30FC\u30AF\u30EA\u30B9\u30C8",src:e(608619).Z+"",width:"1928",height:"1160"})}),"\n",(0,l.jsx)(s.p,{children:"\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4F7F\u7528\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306E ",(0,l.jsx)(s.strong,{children:"\u6761\u4EF6"})," \u3092\u8A2D\u5B9A\u3059\u308B\u3002"]}),"\n",(0,l.jsx)(s.li,{children:"\u30DE\u30FC\u30B8\u30F3\u306E\u8D64\u3044\u70B9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u305D\u308C\u305E\u308C\u6709\u52B9\u30FB\u7121\u52B9\u5316\u3059\u308B\u3002 \u7121\u52B9\u5316\u3055\u308C\u305F\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u900F\u660E\u306A (\u8584\u3044\u8D64\u306E) \u70B9\u3067\u8868\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"Delete"})," \u307E\u305F\u306F ",(0,l.jsx)(s.code,{children:"Backspace"})," \u30AD\u30FC\u3092\u62BC\u3059\u304B\u3001\u30EA\u30B9\u30C8\u4E0B\u306E",(0,l.jsx)(s.strong,{children:"\u524A\u9664"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u524A\u9664\u3059\u308B\u3002"]}),"\n",(0,l.jsx)(s.li,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u5BFE\u8C61\u30E1\u30BD\u30C3\u30C9\u3092\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u958B\u304F\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u304B\u3089\u65B0\u3057\u3044\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u304B\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u306E\u307F\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u30B3\u30DE\u30F3\u30C9\u306E\u30AD\u30E3\u30C3\u30C1",children:"\u30B3\u30DE\u30F3\u30C9\u306E\u30AD\u30E3\u30C3\u30C1"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u30AD\u30E3\u30C3\u30C1"})," \u30B3\u30DE\u30F3\u30C9\u30EA\u30B9\u30C8\u306F\u30014D\u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057\u3092\u6355\u6349\u3057\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u6307\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u306E\u30DA\u30FC\u30B8\u3067\u3059\u3002 \u7279\u5B9A\u30E1\u30BD\u30C3\u30C9\u306E\u7279\u5B9A\u884C\u306B\u52B9\u679C\u304C\u9650\u5B9A\u3055\u308C\u308B\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u306F\u7570\u306A\u308A\u3001\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u304A\u3088\u3073\u30E1\u30BD\u30C3\u30C9\u304C\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(s.p,{children:["\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9 (\u30B3\u30DE\u30F3\u30C9\u6355\u6349) \u306F\u3001\u5404\u6240\u306B\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u5927\u304D\u306A\u7BC4\u56F2\u3067\u30C8\u30EC\u30FC\u30B9\u3092\u304A\u3053\u306A\u3048\u308B\u4FBF\u5229\u306A\u65B9\u6CD5\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u3044\u304F\u3064\u304B\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u5B9F\u884C\u3057\u305F\u5F8C\u306B\u3001\u524A\u9664\u3059\u3079\u304D\u3067\u306A\u3044\u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3046\u5834\u5408\u306B\u306F\u3001",(0,l.jsx)(s.code,{children:"DELETE RECORD"})," \u3084 ",(0,l.jsx)(s.code,{children:"DELETE SELECTION"})," \u3068\u3044\u3063\u305F\u30B3\u30DE\u30F3\u30C9\u306E\u51E6\u7406\u3092\u30AD\u30E3\u30C3\u30C1\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u8ABF\u67FB\u306E\u7BC4\u56F2\u3092\u72ED\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30AD\u30E3\u30C3\u30C1\u5BFE\u8C61\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u305F\u3073\u306B\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u8D77\u52D5\u3055\u308C\u308B\u306E\u3067\u3001\u554F\u984C\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3046\u7D4C\u7DEF\u3092\u8ABF\u3079\u3001\u30B3\u30FC\u30C9\u306E\u8AA4\u3063\u305F\u7B87\u6240\u3092\u7A81\u304D\u6B62\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306F\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u30DA\u30FC\u30B8\u3092\u958B\u304F\u306B\u306F:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u5B9F\u884C"})," \u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,l.jsx)(s.strong,{children:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9..."})," \u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u30AD\u30E3\u30C3\u30C1"})," \u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u30EA\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",src:e(1584).Z+"",width:"868",height:"479"})}),"\n",(0,l.jsx)(s.p,{children:"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u3001\u5B9F\u884C\u4E2D\u306B\u30AD\u30E3\u30C3\u30C1\u3055\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u30EA\u30B9\u30C8\u8868\u793A\u3057\u307E\u3059\u3002 \u30EA\u30B9\u30C8\u306F 2\u3064\u306E\u5217\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u5DE6\u306E\u5217\u306B\u306F\u3001\u30AD\u30E3\u30C3\u30C1\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u306E\u6709\u52B9/\u7121\u52B9\u72B6\u6CC1\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u540D\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u53F3\u306E\u5217\u306B\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306B\u95A2\u9023\u3059\u308B\u6761\u4EF6 (\u3042\u308C\u3070) \u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u30AD\u30E3\u30C3\u30C1\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u65B0\u3057\u304F\u8FFD\u52A0\u3059\u308B\u306B\u306F:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\u30EA\u30B9\u30C8\u4E0B\u90E8\u306B\u3042\u308B ",(0,l.jsx)(s.strong,{children:"\u65B0\u898F\u30AD\u30E3\u30C3\u30C1\u3092\u8FFD\u52A0"})," \u30DC\u30BF\u30F3 (\uFF0B) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 ",(0,l.jsx)(s.code,{children:"ALERT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066\u65B0\u3057\u3044\u30A8\u30F3\u30C8\u30EA\u30FC\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:["\u6B21\u306B ",(0,l.jsx)(s.strong,{children:"ALERT"})," \u30E9\u30D9\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30AD\u30E3\u30C3\u30C1\u3057\u305F\u3044\u30B3\u30DE\u30F3\u30C9\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u307E\u3059\u3002\u5165\u529B\u3057\u305F\u3089\u3001",(0,l.jsx)(s.strong,{children:"Enter"}),"\u30AD\u30FC\u3092\u62BC\u3057\u3066\u9078\u629E\u3092\u78BA\u5B9A\u3055\u305B\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u3092\u7121\u52B9\u3001\u3042\u308B\u3044\u306F\u6709\u52B9\u306B\u3059\u308B\u306B\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u30E9\u30D9\u30EB\u306E\u524D\u306B\u3042\u308B\u70B9 (\u2022) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u900F\u660E\u306A (\u8584\u3044\u8D64\u306E) \u70B9\u306F\u3001\u30AD\u30E3\u30C3\u30C1\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u8868\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u30B3\u30DE\u30F3\u30C9\u30AD\u30E3\u30C3\u30C1\u306E\u7121\u52B9\u5316\u306F\u3001\u524A\u9664\u3059\u308B\u306E\u3068\u307B\u307C\u540C\u7B49\u306E\u52B9\u679C\u304C\u3042\u308A\u307E\u3059\u3002 \u5B9F\u884C\u4E2D\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u307B\u307C\u5168\u304F\u3068\u8A00\u3063\u3066\u3044\u3044\u307B\u3069\u30A8\u30F3\u30C8\u30EA\u30FC\u306B\u6642\u9593\u3092\u4F7F\u3044\u307E\u305B\u3093\u3002 \u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u7121\u52B9\u5316\u3059\u308B\u3053\u3068\u306E\u5229\u70B9\u306F\u3001\u305D\u308C\u304C\u518D\u3073\u5FC5\u8981\u306B\u306A\u3063\u305F\u3068\u304D\u4E00\u304B\u3089\u4F5C\u308A\u76F4\u3055\u306A\u304F\u3066\u826F\u3044\u3068\u3044\u3046\u70B9\u3067\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u3092\u524A\u9664\u3059\u308B\u306B\u306F:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u30EA\u30B9\u30C8\u4E2D\u306E\u30B3\u30DE\u30F3\u30C9\u9078\u629E\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Backspace"})," \u307E\u305F\u306F ",(0,l.jsx)(s.strong,{children:"Delete"})," \u30AD\u30FC\u3092\u62BC\u3059\u304B\u3001\u30EA\u30B9\u30C8\u4E0B\u90E8\u306B\u3042\u308B ",(0,l.jsx)(s.strong,{children:"\u524A\u9664"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u3092\u3059\u3079\u3066\u524A\u9664\u3059\u308B\u306B\u306F\u3001",(0,l.jsx)(s.strong,{children:"\u3059\u3079\u3066\u3092\u524A\u9664"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306B\u6761\u4EF6\u3092\u8A2D\u5B9A\u3059\u308B",children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306B\u6761\u4EF6\u3092\u8A2D\u5B9A\u3059\u308B"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u30A8\u30F3\u30C8\u30EA\u30FC\u306E\u53F3\u306E\u5217\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u30D6\u30FC\u30EB\u5024\u3092\u8FD4\u3059 4D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9 (\u5F0F\u3001\u30B3\u30DE\u30F3\u30C9\u3084\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9) \u3092\u5165\u529B\u3059\u308B\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u6761\u4EF6\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u524A\u9664\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["\u6761\u4EF6\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001\u30B3\u30DE\u30F3\u30C9\u547C\u3073\u51FA\u3057\u6642\u306B\u7279\u5B9A\u306E\u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u3001\u5B9F\u884C\u3092\u4E2D\u6B62\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001",(0,l.jsx)(s.code,{children:"DELETE SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306E\u30AD\u30E3\u30C3\u30C1\u306B ",(0,l.jsx)(s.code,{children:"Records in selection(\\[Emp]>10)"})," \u3068\u3044\u3046\u6761\u4EF6\u3092\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u3001[Emp]\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C 9\u30EC\u30B3\u30FC\u30C9\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u306F ",(0,l.jsx)(s.code,{children:"DELETE SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057\u3067\u5B9F\u884C\u304C\u4E2D\u65AD\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u4F8B\u5916\u306E\u305F\u3073\u306B\u6761\u4EF6\u3092\u8A55\u4FA1\u3059\u308B\u3053\u3068\u306B\u306A\u308B\u305F\u3081\u3001\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9\u306B\u6761\u4EF6\u3092\u8FFD\u52A0\u3059\u308B\u3068\u5B9F\u884C\u901F\u5EA6\u306F\u9045\u304F\u306A\u308A\u307E\u3059\u3002 \u305D\u306E\u4E00\u65B9\u3067\u3001\u6761\u4EF6\u3092\u8FFD\u52A0\u3059\u308B\u3068\u30C7\u30D0\u30C3\u30B0\u30D7\u30ED\u30BB\u30B9\u306F\u65E9\u304F\u306A\u308A\u307E\u3059\u3002\u6761\u4EF6\u306B\u5408\u81F4\u3057\u306A\u3044\u30AA\u30AB\u30EC\u30F3\u30B9\u3092\u30014D \u304C\u81EA\u52D5\u7684\u306B\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u3044\u304F\u304B\u3089\u3067\u3059\u3002"})]})}function j(n={}){let{wrapper:s}={...(0,d.a)(),...n.components};return s?(0,l.jsx)(s,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},608619:function(n,s,e){e.d(s,{Z:function(){return r}});let r=e.p+"assets/images/break-list-b89efee46224eee9896fd3573d311ece.png"},722867:function(n,s,e){e.d(s,{Z:function(){return r}});let r=e.p+"assets/images/break-dac3aff61c89edd51b1dc219bcce2aaa.png"},451980:function(n,s,e){e.d(s,{Z:function(){return r}});let r="data:image/png;base64,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"},1584:function(n,s,e){e.d(s,{Z:function(){return r}});let r=e.p+"assets/images/catch-command-fd399840ad542aad76ae489a5e9de658.png"},250065:function(n,s,e){e.d(s,{Z:function(){return i},a:function(){return c}});var r=e(667294);let l={},d=r.createContext(l);function c(n){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function i(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(d.Provider,{value:s},n.children)}}}]);