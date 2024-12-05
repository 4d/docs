"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84994"],{915834:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>l,default:()=>j,assets:()=>t,toc:()=>a,frontMatter:()=>i});var d=JSON.parse('{"id":"Admin/cli","title":"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9","description":"macOS \u306E\u30BF\u30FC\u30DF\u30CA\u30EB\u307E\u305F\u306F Windows \u306E\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u306B\u3088\u308B 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 (4D \u304A\u3088\u3073 4D Server) \u306E\u8D77\u52D5\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306B\u3088\u308A\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/ja/19/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"cli","title":"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"},"sidebar":"docs","previous":{"title":"TLS\u30D7\u30ED\u30C8\u30B3\u30EB (HTTPS)","permalink":"/docs/ja/19/Admin/tls"},"next":{"title":"\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u8A73\u7D30","permalink":"/docs/ja/19/Admin/debugLogFiles"}}'),c=s("785893"),r=s("250065");let i={id:"cli",title:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"},l=void 0,t={},a=[{value:"\u57FA\u672C\u60C5\u5831",id:"\u57FA\u672C\u60C5\u5831",level:2},{value:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5",id:"4d\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"macOS \u306E\u30BF\u30FC\u30DF\u30CA\u30EB\u307E\u305F\u306F Windows \u306E\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u306B\u3088\u308B 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 (4D \u304A\u3088\u3073 4D Server) \u306E\u8D77\u52D5\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306B\u3088\u308A\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30EA\u30E2\u30FC\u30C8\u304B\u3089\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u3002\u3053\u308C\u306F\u7279\u306B Web\u30B5\u30FC\u30D0\u30FC\u3068\u3057\u3066\u52D5\u4F5C\u3059\u308B 4D \u306E\u7BA1\u7406\u306B\u4FBF\u5229\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u81EA\u52D5\u30C6\u30B9\u30C8\u306E\u5B9F\u884C"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u57FA\u672C\u60C5\u5831",children:"\u57FA\u672C\u60C5\u5831"}),"\n",(0,c.jsx)(n.p,{children:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u306F\u3001macOS \u306E\u30BF\u30FC\u30DF\u30CA\u30EB\u307E\u305F\u306F Windows \u306E\u30B3\u30F3\u30BD\u30FC\u30EB\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["macOS \u3067\u306F\u3001",(0,c.jsx)(n.code,{children:"open"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"Windows \u3067\u306F\u3001\u5F15\u6570\u3092\u76F4\u63A5\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["macOS \u3067\u3082\u3001\u30D1\u30C3\u30B1\u30FC\u30B8\u5185\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3042\u308B\u30D5\u30A9\u30EB\u30C0\u30FC (Contents/MacOS \u30D1\u30B9) \u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u5F15\u6570\u3092\u76F4\u63A5\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u3001\u30A8\u30E9\u30FC\u30B9\u30C8\u30EA\u30FC\u30E0 (stderr) \u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u30014D\u30D1\u30C3\u30B1\u30FC\u30B8\u304C ",(0,c.jsx)(n.code,{children:"MyFolder"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u3042\u308B\u5834\u5408\u3001\u6B21\u306E\u3088\u3046\u306B\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3092\u66F8\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: ",(0,c.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),"\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u30A8\u30E9\u30FC\u30B9\u30C8\u30EA\u30FC\u30E0(stderr) \u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u5834\u5408\u306B\u306F\u3001",(0,c.jsx)(n.code,{children:"open"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"4d\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5",children:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5"}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u3053\u3067\u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3059\u308B\u305F\u3081\u306E\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3068\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u5F15\u6570\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u5024"}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"applicationPath"})}),(0,c.jsx)(n.td,{children:"4D\u30014D Server\u3001\u307E\u305F\u306F\u7D44\u307F\u8FBC\u307F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30D1\u30B9\u3002"}),(0,c.jsx)(n.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u307E\u3059\u3002 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u306E\u3068\u540C\u3058\u52D5\u4F5C\u3092\u3057\u307E\u3059\u3002 \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u5F15\u6570\u306A\u3057\u3067\u547C\u3073\u51FA\u3055\u308C\u305F\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9078\u629E\u3059\u308B\u305F\u3081\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--version"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u8868\u793A\u3057\u3066\u7D42\u4E86\u3057\u307E\u3059\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--help"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"\u30D8\u30EB\u30D7\u3092\u8868\u793A\u3057\u3066\u7D42\u4E86\u3057\u307E\u3059\u3002 \u4EE3\u66FF\u5F15\u6570: -?, -h"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--project"})}),(0,c.jsx)(n.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,c.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3002 \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--data"})}),(0,c.jsx)(n.td,{children:"dataPath"}),(0,c.jsx)(n.td,{children:"\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3067\u958B\u304F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3002 \u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u30014D \u306F\u6700\u5F8C\u306B\u958B\u3044\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--opening-mode"})}),(0,c.jsx)(n.td,{children:"interpreted | compiled"}),(0,c.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u307E\u305F\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u958B\u304F\u3088\u3046\u306B\u6307\u793A\u3057\u307E\u3059\u3002 \u6307\u5B9A\u306E\u30E2\u30FC\u30C9\u304C\u5229\u7528\u3067\u304D\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u30A8\u30E9\u30FC\u306F\u767A\u751F\u3057\u307E\u305B\u3093\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--create-data"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:'\u6709\u52B9\u306A\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3057\u307E\u3059\u3002 \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002 "-data" \u5F15\u6570\u3067\u6E21\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308C\u3070\u30014D \u306F\u305D\u308C\u3092\u4F7F\u7528\u3057\u307E\u3059 (\u540C\u3058\u540D\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u65E2\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059)\u3002'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--user-param"})}),(0,c.jsx)(n.td,{children:"\u30AB\u30B9\u30BF\u30E0\u306E\u30E6\u30FC\u30B6\u30FC\u6587\u5B57\u5217"}),(0,c.jsx)(n.td,{children:'Get database parameter \u30B3\u30DE\u30F3\u30C9\u3092\u901A\u3057\u3066 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5229\u7528\u53EF\u80FD\u306A\u4EFB\u610F\u306E\u6587\u5B57\u5217 (\u305F\u3060\u3057\u6587\u5B57\u5217\u306F\u4E88\u7D04\u6587\u5B57\u3067\u3042\u308B "-" \u304B\u3089\u59CB\u307E\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093)\u3002'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--headless"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["4D\u30014D Server\u3001\u307E\u305F\u306F\u7D44\u307F\u8FBC\u307F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306A\u3057 (\u30D8\u30C3\u30C9\u30EC\u30B9\u30E2\u30FC\u30C9) \u3067\u8D77\u52D5\u3057\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F:",(0,c.jsx)(n.li,{children:" \u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u3067\u8D77\u52D5\u3057\u307E\u3059\u3002"}),(0,c.jsx)(n.li,{children:" \u30C4\u30FC\u30EB\u30D0\u30FC\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3001MDI \u30A6\u30A3\u30F3\u30C9\u30A6\u3084\u30B9\u30D7\u30E9\u30C3\u30B7\u30E5\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),(0,c.jsx)(n.li,{children:"Dock \u307E\u305F\u306F\u30BF\u30B9\u30AF\u30D0\u30FC\u306B\u306F\u30A2\u30A4\u30B3\u30F3\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),(0,c.jsx)(n.li,{children:'\u958B\u304B\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306F\u3001"\u6700\u8FD1\u4F7F\u7528\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9" \u30E1\u30CB\u30E5\u30FC\u306B\u767B\u9332\u3055\u308C\u307E\u305B\u3093\u3002'}),(0,c.jsxs)(n.li,{children:["4D\u8A3A\u65AD\u30D5\u30A1\u30A4\u30EB\u306E\u8A18\u9332\u304C\u81EA\u52D5\u7684\u306B\u958B\u59CB\u3055\u308C\u307E\u3059 (",(0,c.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page642.html",children:"SET DATABASE PARAMETER"}),"\u3001\u502479 \u53C2\u7167)"]}),(0,c.jsxs)(n.li,{children:["\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3078\u306E\u30B3\u30FC\u30EB\u306F\u3059\u3079\u3066\u30A4\u30F3\u30BF\u30FC\u30BB\u30D7\u30C8\u3055\u308C\u3001\u81EA\u52D5\u7684\u306B\u30EC\u30B9\u30DD\u30F3\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059 (\u4F8B: ",(0,c.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page41.html",children:"ALERT"})," \u30B3\u30DE\u30F3\u30C9\u306E\u5834\u5408\u306F OK\u3001\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u5834\u5408\u306F Abort \u306A\u3069)\u3002 \u30A4\u30F3\u30BF\u30FC\u30BB\u30D7\u30C8\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9 (*) \u306F\u3001\u8A3A\u65AD\u30D5\u30A1\u30A4\u30EB\u306B\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"]}),(0,c.jsx)(n.br,{}),"\u4FDD\u5B88\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001",(0,c.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page667.html",children:"LOG EVENT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4EFB\u610F\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6A19\u6E96\u306E\u51FA\u529B\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30D8\u30C3\u30C9\u30EC\u30B9\u30E2\u30FC\u30C9\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001",(0,c.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page291.html",children:"QUIT 4D"})," \u3092\u547C\u3073\u51FA\u3059\u304B OS\u30BF\u30B9\u30AF\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3057\u304B\u7D42\u4E86\u3067\u304D\u306A\u3044\u70B9\u306B\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--dataless"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["4D\u30014D Server\u3001\u307E\u305F\u306F\u7D44\u307F\u8FBC\u307F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C7\u30FC\u30BF\u30EC\u30B9\u30E2\u30FC\u30C9\u3067\u8D77\u52D5\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30EC\u30B9\u30E2\u30FC\u30C9\u306F\u30014D \u304C\u30C7\u30FC\u30BF\u3092\u5FC5\u8981\u3068\u3057\u306A\u3044\u30BF\u30B9\u30AF (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u306A\u3069) \u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F: ",(0,c.jsxs)(n.li,{children:["\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3084 ",(0,c.jsx)(n.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3067\u6307\u5B9A\u3055\u308C\u3066\u3044\u3066\u3082\u3001\u307E\u305F ",(0,c.jsx)(n.code,{children:"CREATE DATA FILE"})," \u3084 ",(0,c.jsx)(n.code,{children:"OPEN DATA FILE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u3066\u3082\u3001\u30C7\u30FC\u30BF\u3092\u542B\u3080\u30D5\u30A1\u30A4\u30EB\u306F\u958B\u304B\u308C\u307E\u305B\u3093\u3002"]}),(0,c.jsxs)(n.li,{children:["\u30C7\u30FC\u30BF\u3092\u64CD\u4F5C\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001",(0,c.jsx)(n.code,{children:"CREATE RECORD"}),' \u306F "\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u5BFE\u8C61\u3068\u306A\u308B\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308A\u307E\u305B\u3093" \u3068\u3044\u3046\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002']}),(0,c.jsx)(n.br,{}),(0,c.jsx)(n.strong,{children:"\u6CE8\u8A18"}),":",(0,c.jsx)(n.li,{children:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3067\u5F15\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3057\u306A\u3044\u9650\u308A\u30014D \u3067\u958B\u304B\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30C7\u30FC\u30BF\u30EC\u30B9\u30E2\u30FC\u30C9\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002"}),(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u5F15\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u30C7\u30FC\u30BF\u30EC\u30B9\u30E2\u30FC\u30C9\u306F ",(0,c.jsx)(n.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3067\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002 ",(0,c.jsx)(n.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,c.jsx)(n.a,{href:"/docs/ja/19/Project/creating#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E9%96%8B%E3%81%8F-%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%96%B9%E6%B3%95",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F (\u305D\u306E\u4ED6\u306E\u65B9\u6CD5)"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--webadmin-settings-file"})}),(0,c.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/19/Admin/webAdmin",children:"WebAdmin Web\u30B5\u30FC\u30D0\u30FC"})," \u7528\u306E\u30AB\u30B9\u30BF\u30E0 WebAdmin ",(0,c.jsx)(n.code,{children:".4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--webadmin-access-key"})}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/19/Admin/webAdmin",children:"WebAdmin Web\u30B5\u30FC\u30D0\u30FC"})," \u7528\u306E\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--webadmin-auto-start"})}),(0,c.jsx)(n.td,{children:"Boolean"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/19/Admin/webAdmin",children:"WebAdmin Web\u30B5\u30FC\u30D0\u30FC"})," \u7528\u306E\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u8A2D\u5B9A\u306E\u72B6\u614B"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"--webadmin-store-settings"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u3068\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u3001\u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB (\u30C7\u30D5\u30A9\u30EB\u30C8\u306E ",(0,c.jsx)(n.a,{href:"/docs/ja/19/Admin/webAdmin#webadmin-%E8%A8%AD%E5%AE%9A",children:(0,c.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," \u30D5\u30A1\u30A4\u30EB\u3001\u307E\u305F\u306F ",(0,c.jsx)(n.code,{children:"--webadmin-settings-path"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3067\u6307\u5B9A\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u30D5\u30A1\u30A4\u30EB) \u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u5FC5\u8981\u306B\u5FDC\u3058\u3066 ",(0,c.jsx)(n.code,{children:"--webadmin-store-settings"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u3053\u308C\u3089\u306E\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"(*) \u4E00\u90E8\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u524D\u306B\u8868\u793A\u3055\u308C\u308B\u305F\u3081\u3001"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/19/Admin/debugLogFiles#4ddiagnosticlogtxt",children:"\u8A3A\u65AD\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB"})," \u306B\u8A18\u9332\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093 (\u30E9\u30A4\u30BB\u30F3\u30B9\u8B66\u544A\u3001\u5909\u63DB\u30C0\u30A4\u30A2\u30ED\u30B0\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9078\u629E\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u9078\u629E)\u3002 \u3053\u306E\u3088\u3046\u306A\u5834\u5408\u3001\u30A8\u30E9\u30FC\u30B9\u30C8\u30EA\u30FC\u30E0 (stderr) \u3068\u30B7\u30B9\u30C6\u30E0\u306E\u30A4\u30D9\u30F3\u30C8\u30ED\u30B0\u306B\u30A8\u30E9\u30FC\u304C\u6295\u3052\u3089\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:'\u30E6\u30FC\u30B6\u30FC\u306E\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u3001macOS \u3067\u306F "~" \u30B3\u30DE\u30F3\u30C9\u3092\u3001Windows \u3067\u306F "%HOMEPATH%" \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u4E0A\u306B\u7F6E\u304B\u308C\u305F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,c.jsx)(n.p,{children:"macOS\u4E0A\u3067\u30D1\u30C3\u30B1\u30FC\u30B8\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\n\u307E\u305F\u306F:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,c.jsx)(n.p,{children:".4DLink \u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u8D77\u52D5\u3057\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304C\u5229\u7528\u3067\u304D\u306A\u3044\u5834\u5408\u306B\u306F\u4F5C\u6210\u3059\u308B:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u30E6\u30FC\u30B6\u30FC\u5F15\u6570\u3068\u3057\u3066\u6587\u5B57\u5217\u3092\u6E21\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306A\u3057\u3067\u8D77\u52D5\u3059\u308B (\u30D8\u30C3\u30C9\u30EC\u30B9\u30E2\u30FC\u30C9):"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var d=s(667294);let c={},r=d.createContext(c);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);