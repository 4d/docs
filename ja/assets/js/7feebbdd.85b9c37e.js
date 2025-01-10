"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68247"],{745635:function(e,A,n){n.r(A),n.d(A,{default:()=>l,frontMatter:()=>s,metadata:()=>i,assets:()=>g,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"Debugging/debugging-remote","title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u30C7\u30D0\u30C3\u30B0","description":"\u6982\u8981","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Debugging/debugging-remote.md","sourceDirName":"Debugging","slug":"/Debugging/debugging-remote","permalink":"/docs/ja/20-R6/Debugging/debugging-remote","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fdebugging-remote.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"debugging-remote","title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u30C7\u30D0\u30C3\u30B0"},"sidebar":"docs","previous":{"title":"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8\u3068\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9","permalink":"/docs/ja/20-R6/Debugging/breakpoints"},"next":{"title":"\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB","permalink":"/docs/ja/20-R6/Debugging/debugLogFiles"}}'),t=n("785893"),r=n("250065");let s={id:"debugging-remote",title:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u30C7\u30D0\u30C3\u30B0"},c=void 0,g={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC",id:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC",level:2},{value:"\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u6709\u52B9\u5316",id:"\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u6709\u52B9\u5316",level:2},{value:"\u30C7\u30D0\u30C3\u30AC\u3092\u958B\u59CB\u6642\u306B\u6709\u52B9\u5316\u3059\u308B",id:"\u30C7\u30D0\u30C3\u30AC\u3092\u958B\u59CB\u6642\u306B\u6709\u52B9\u5316\u3059\u308B",level:2},{value:"\u6709\u52B9\u5316\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u62D2\u5426",id:"\u6709\u52B9\u5316\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u62D2\u5426",level:2}];function h(e){let A={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(A.p,{children:"4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C 4D Server \u4E0A\u3067\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u3067\u52D5\u3044\u3066\u3044\u308B\u5834\u5408\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u4E2D\u306E 4D\u30B3\u30FC\u30C9\u3092\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u3067\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u8D77\u52D5\u3059\u308B\u3068\u3001\u305D\u306E\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u76F4\u63A5\u3001\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3092\u30E2\u30CB\u30BF\u30FC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(A.p,{children:["\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u8D77\u52D5\u3055\u308C\u305F ",(0,t.jsx)(A.a,{href:"/docs/ja/20-R6/Debugging/debugger",children:"\u30C7\u30D0\u30C3\u30AC\u30FC"})," \u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u30C7\u30D0\u30C3\u30B0\u4E2D\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3059\u30B5\u30FC\u30D0\u30FC\u30A2\u30A4\u30B3\u30F3\u3068\u9752\u3044\u80CC\u666F\u8272\u306E\u30C7\u30D0\u30C3\u30B0\u30A2\u30A4\u30B3\u30F3\u304C\u8868\u793A\u3055\u308C\u308B\u307B\u304B\u3001\u547C\u3073\u51FA\u3057\u9023\u9396\u3068\u5F0F\u306E\u30DA\u30A4\u30F3\u306E\u80CC\u666F\u304C\u8584\u3063\u3059\u3089\u3068\u9752\u304F\u8272\u3065\u304D\u307E\u3059:"]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"debugger-window-remote",src:n(162423).Z+"",width:"754",height:"511"})}),"\n",(0,t.jsxs)(A.p,{children:["\u3053\u306E\u6A5F\u80FD\u306F\u30014D Server \u304C\u30D8\u30C3\u30C9\u30EC\u30B9\u30E2\u30FC\u30C9 (",(0,t.jsx)(A.a,{href:"/docs/ja/20-R6/Admin/cli",children:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"})," \u53C2\u7167) \u3067\u5B9F\u884C\u4E2D\u3001\u3042\u308B\u3044\u306F\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u96E3\u3057\u3044\u5834\u5408\u306A\u3069\u306B\u7279\u306B\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(A.h2,{id:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC",children:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC"}),"\n",(0,t.jsxs)(A.p,{children:["4D Server\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C7\u30D0\u30C3\u30B0\u306F\u3001\u4E00\u5EA6\u306B\u4E00\u3064\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u307F\u304C\u304A\u3053\u306A\u3048\u307E\u3059\u3002 \u3053\u308C\u3092 ",(0,t.jsx)(A.strong,{children:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC"})," \u3068\u547C\u3073\u307E\u3059\u3002 \u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u5229\u7528\u3067\u304D\u307E\u3059:"]}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"\u30ED\u30FC\u30AB\u30EB\u306E 4D Server\u30C7\u30D0\u30C3\u30AC\u30FC (\u30C7\u30D5\u30A9\u30EB\u30C8) - \u30B5\u30FC\u30D0\u30FC\u304C\u30D8\u30C3\u30C9\u30EC\u30B9\u5B9F\u884C\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408"}),"\n",(0,t.jsx)(A.li,{children:"\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30C7\u30D0\u30C3\u30AC\u30FC - \u30EA\u30E2\u30FC\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306B\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u306A\u5834\u5408"}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u30014D Server \u304C\u6B21\u306E\u3044\u305A\u308C\u304B\u306B\u906D\u9047\u3057\u305F\u5834\u5408\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"\u30D6\u30EC\u30FC\u30AF\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,t.jsxs)(A.li,{children:["a ",(0,t.jsx)(A.code,{children:"TRACE"})," command"]}),"\n",(0,t.jsx)(A.li,{children:"\u30AD\u30E3\u30C3\u30C1\u30B3\u30DE\u30F3\u30C9"}),"\n",(0,t.jsx)(A.li,{children:"\u30A8\u30E9\u30FC"}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u30DE\u30B7\u30F3\u306B\u9001\u3089\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u306F\u3064\u307E\u308A\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u5834\u5408\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4E0A\u3067\u8868\u793A\u3055\u308C\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,t.jsx)(A.p,{children:"\u6CE8:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["The code executed in the ",(0,t.jsx)(A.code,{children:"On Server Startup Database"})," Method cannot be debugged remotely. \u3053\u308C\u306F\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u3057\u304B\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(A.li,{children:"\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5B9F\u884C\u4E2D\u306E\u30B3\u30FC\u30C9\u304C\u30C7\u30D0\u30C3\u30B0\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4E2D\u65AD\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u6709\u52B9\u5316",children:"\u30C7\u30D0\u30C3\u30AC\u30FC\u306E\u6709\u52B9\u5316"}),"\n",(0,t.jsx)(A.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u305F\u3068\u304D\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"4D Server \u304C\u30D8\u30C3\u30C9\u30EC\u30B9\u5B9F\u884C\u4E2D\u3067\u306A\u3044\u5834\u5408\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsx)(A.li,{children:"4D Server \u304C\u30D8\u30C3\u30C9\u30EC\u30B9\u5B9F\u884C\u4E2D\u306E\u5834\u5408\u306B\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"4D Server\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u63A5\u7D9A\u3067\u304D\u308B\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u3042\u308C\u3070\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u6709\u52B9\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(A.blockquote,{children:["\n",(0,t.jsx)(A.p,{children:"\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30B6\u30A4\u30F3\u74B0\u5883\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"\u30B5\u30FC\u30D0\u30FC\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u6709\u52B9\u5316\u3059\u308B\u306B\u306F:"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:["In the 4D Server menu bar, select ",(0,t.jsx)(A.strong,{children:"Edit"})," > ",(0,t.jsx)(A.strong,{children:"Detach Debugger"})," so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless)."]}),"\n",(0,t.jsxs)(A.li,{children:["In a remote 4D client connected to the server, select ",(0,t.jsx)(A.strong,{children:"Run"})," > ",(0,t.jsx)(A.strong,{children:"Attach Remote Debugger"})]}),"\n"]}),"\n",(0,t.jsxs)(A.p,{children:["If the attachment is accepted (see ",(0,t.jsx)(A.a,{href:"#rejected-attachment-requests",children:"Rejected attachment requests"}),"), the menu command becomes ",(0,t.jsx)(A.strong,{children:"Detach Remote Debugger"}),"."]}),"\n",(0,t.jsx)(A.p,{children:"\u3053\u308C\u3067\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u6709\u52B9\u5316\u3055\u308C\u3001\u4EE5\u4E0B\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u307E\u3067\u6709\u52B9\u5316\u3055\u308C\u305F\u307E\u307E\u3067\u3059:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3059\u308B\u307E\u3067"}),"\n",(0,t.jsxs)(A.li,{children:["until you select ",(0,t.jsx)(A.code,{children:"Detach Remote Debugger"})]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:"\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u518D\u5EA6\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u6709\u52B9\u5316\u3059\u308B\u306B\u306F:"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:["On the remote 4D client that has the debugger attached, select ",(0,t.jsx)(A.strong,{children:"Run"})," > ",(0,t.jsx)(A.strong,{children:"Detach Remote Debugger"}),"."]}),"\n",(0,t.jsxs)(A.li,{children:["In the 4D Server menu bar, select ",(0,t.jsx)(A.strong,{children:"Edit"})," > ",(0,t.jsx)(A.strong,{children:"Attach debugger"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(A.blockquote,{children:["\n",(0,t.jsx)(A.p,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u3068 (\u30C7\u30D5\u30A9\u30EB\u30C8)\u3001\u30C7\u30D0\u30C3\u30B0\u3092\u53EF\u80FD\u306B\u3059\u308B\u305F\u3081\u3001\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30BB\u30B9\u306F\u3059\u3079\u3066\u81EA\u52D5\u7684\u306B\u30B3\u30AA\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5927\u304D\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u304B\u306D\u307E\u305B\u3093\u3002 \u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u4E0A\u3067\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u7121\u52B9\u5316\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u3067\u6709\u52B9\u5316\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"\u30C7\u30D0\u30C3\u30AC\u3092\u958B\u59CB\u6642\u306B\u6709\u52B9\u5316\u3059\u308B",children:"\u30C7\u30D0\u30C3\u30AC\u3092\u958B\u59CB\u6642\u306B\u6709\u52B9\u5316\u3059\u308B"}),"\n",(0,t.jsx)(A.p,{children:"\u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u3001\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u307E\u305F\u306F\u30B5\u30FC\u30D0\u30FC\u306E\u958B\u59CB\u6642\u306B\u81EA\u52D5\u7684\u306B\u6709\u52B9\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["On the server (if not headless), this option is named ",(0,t.jsx)(A.strong,{children:"Attach Debugger At Startup"}),". \u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u308B\u3068\u3001\u81EA\u52D5\u7684\u306B\u30C7\u30D0\u30C3\u30AC\u30FC\u304C\u6709\u52B9\u5316\u3055\u308C\u307E\u3059 (\u30C7\u30D5\u30A9\u30EB\u30C8):"]}),"\n"]}),"\n",(0,t.jsxs)(A.blockquote,{children:["\n",(0,t.jsxs)(A.p,{children:[(0,t.jsx)(A.strong,{children:"Warning"}),": If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server."]}),"\n"]}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["On a remote 4D client, this option is named ",(0,t.jsx)(A.strong,{children:"Attach Remote Debugger At Startup"}),". \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u3001\u305D\u306E\u5F8C\u540C\u3058 4D Server\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u63A5\u7D9A\u3059\u308B\u305F\u3073\u306B\u3001\u81EA\u52D5\u7684\u306B\u30EA\u30E2\u30FC\u30C8\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u6709\u52B9\u5316\u3057\u3088\u3046\u3068\u3057\u307E\u3059\u3002 If the attachment is accepted (see ",(0,t.jsx)(A.a,{href:"#rejected-attachment-requests",children:"Rejected attachment requests"}),"), the remote debugger is automatically attached to the remote 4D client and the ",(0,t.jsx)(A.strong,{children:"Detach Remote Debugger option is displayed"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(A.blockquote,{children:["\n",(0,t.jsxs)(A.p,{children:["This setting is applied per project and is stored locally in the ",(0,t.jsx)(A.a,{href:"/docs/ja/20-R6/Project/architecture#userpreferencesusername",children:(0,t.jsx)(A.code,{children:".4DPreferences"})})," file."]}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"\u6709\u52B9\u5316\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u62D2\u5426",children:"\u6709\u52B9\u5316\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u62D2\u5426"}),"\n",(0,t.jsx)(A.p,{children:"\u307B\u304B\u306E\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u307E\u305F\u306F 4D Server \u306B\u3066\u3059\u3067\u306B\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u4ED6\u306E\u30DE\u30B7\u30F3\u3067\u30B5\u30FC\u30D0\u30FC\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u6709\u52B9\u5316\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsx)(A.p,{children:"\u5225\u30DE\u30B7\u30F3\u306B\u3066\u6709\u52B9\u5316\u6E08\u306E\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u6709\u52B9\u5316\u3057\u3088\u3046\u3068\u3057\u305F\u5834\u5408\u3001\u305D\u306E\u6709\u52B9\u5316\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u62D2\u5426\u3055\u308C\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"attach-debugger-dialog",src:n(871212).Z+"",width:"482",height:"231"})}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"attach-debugger-dialog-2",src:n(891030).Z+"",width:"482",height:"168"})}),"\n",(0,t.jsx)(A.p,{children:"\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u6709\u52B9\u5316\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3069\u3061\u3089\u304B\u306E\u6761\u4EF6\u304C\u5FC5\u8981\u3067\u3059:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["the attached debugger is detached from the server or from the remote 4D client using respectively the ",(0,t.jsx)(A.strong,{children:"Detach debugger"})," or ",(0,t.jsx)(A.strong,{children:"Detach remote debugger"})," menu command,"]}),"\n",(0,t.jsx)(A.li,{children:"\u6709\u52B9\u5316\u6E08\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C84D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u9589\u3058\u3089\u308C\u308B\u3002"}),"\n"]})]})}function l(e={}){let{wrapper:A}={...(0,r.a)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},891030:function(e,A,n){n.d(A,{Z:function(){return i}});let i="data:image/png;base64,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"},871212:function(e,A,n){n.d(A,{Z:function(){return i}});let i="data:image/png;base64,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"},162423:function(e,A,n){n.d(A,{Z:function(){return i}});let i=n.p+"assets/images/debuggerWindowRemote-7031fc37327ed258c4104052ae225c7a.png"},250065:function(e,A,n){n.d(A,{Z:function(){return c},a:function(){return s}});var i=n(667294);let t={},r=i.createContext(t);function s(e){let A=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function c(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:A},e.children)}}}]);