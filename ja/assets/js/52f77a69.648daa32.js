"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5569"],{627175:function(e,n,r){r.r(n),r.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"Desktop/clientServer","title":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406","description":"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5F62\u3067\u30014D\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u69CB\u6210\u3067\u904B\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Desktop/clientServer.md","sourceDirName":"Desktop","slug":"/Desktop/clientServer","permalink":"/docs/ja/20-R6/Desktop/clientServer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"clientServer","title":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406"},"sidebar":"docs","previous":{"title":"Desktop Applications","permalink":"/docs/ja/20-R6/category/desktop-applications"},"next":{"title":"Access Rights","permalink":"/docs/ja/20-R6/category/access-rights"}}'),i=r("785893"),c=r("250065");let l={id:"clientServer",title:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406"},d=void 0,t={},o=[{value:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F",id:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F",level:2},{value:"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",id:"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",level:2},{value:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",id:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",level:3},{value:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",id:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",level:3},{value:"4D \u3068 4D Server \u306E\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067\u306E\u4F7F\u7528",id:"4d-\u3068-4d-server-\u306E\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067\u306E\u4F7F\u7528",level:2},{value:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",id:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",level:2},{value:"\u52B9\u679C",id:"\u52B9\u679C",level:3},{value:"\u5229\u7528\u53EF\u80FD\u6027",id:"\u5229\u7528\u53EF\u80FD\u6027",level:3},{value:"\u95A2\u9023\u9805\u76EE (\u30D6\u30ED\u30B0\u8A18\u4E8B)",id:"\u95A2\u9023\u9805\u76EE-\u30D6\u30ED\u30B0\u8A18\u4E8B",level:3}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5F62\u3067\u30014D\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u69CB\u6210\u3067\u904B\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"})," \u306F ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%9A%E3%83%BC%E3%82%B8",children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D3\u30EB\u30C0\u30FC"})," \u3092\u4F7F\u3063\u3066\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u904B\u7528\u306B\u4F7F\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"})," \u3068\u306F\u30014D Server \u4E0A\u3067\u958B\u3044\u305F ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Project/architecture",children:".4DProject"})," \u30D5\u30A1\u30A4\u30EB\u306E\u3053\u3068\u3067\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E 4D \u3092\u4F7F\u3063\u3066\u63A5\u7D9A\u3057\u307E\u3059\u3002 4D Server \u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Desktop/building#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%B8%88%E3%81%BF%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E3%83%93%E3%83%AB%E3%83%89",children:"\u5727\u7E2E\u5F62\u5F0F"})," \u3067\u3042\u308B .4dz \u30D5\u30A1\u30A4\u30EB\u3092\u30EA\u30E2\u30FC\u30C8\u306E 4D \u306B\u9001\u4FE1\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u3059\u3002 \u3053\u306E\u69CB\u6210\u306F\u901A\u5E38\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30B9\u30C8\u306B\u4F7F\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(316036).Z+"",width:"581",height:"249"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u305F\u3060\u3057\u3001",(0,i.jsx)(n.strong,{children:"4D Server \u3068\u540C\u3058\u30DE\u30B7\u30F3"})," \u304B\u3089\u63A5\u7D9A\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u5909\u66F4\u304C\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E ",(0,i.jsx)(n.a,{href:"#4d-%E3%81%A8-4d-server-%E3%81%AE%E5%90%8C%E3%81%98%E3%83%9E%E3%82%B7%E3%83%B3%E4%B8%8A%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8",children:"\u7279\u6B8A\u6A5F\u80FD"})," \u306B\u3088\u308A\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u904B\u7528\u6642\u3068\u540C\u3058\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u958B\u767A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F",children:"\u7D44\u307F\u8FBC\u307F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F"}),"\n",(0,i.jsx)(n.p,{children:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u8D77\u52D5\u3084\u63A5\u7D9A\u51E6\u7406\u304C\u7C21\u6613\u3067\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3059\u308B\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u8D77\u52D5\u3059\u308B\u306B\u3082\u3001\u540C\u69D8\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002\u3059\u308B\u3068\u3001\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u63A5\u7D9A\u304C\u76F4\u63A5\u304A\u3053\u306A\u308F\u308C\u308B\u305F\u3081\u3001"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88/%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%81%AF",children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D3\u30EB\u30C9"})," \u30DA\u30FC\u30B8\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",children:"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"}),"\n",(0,i.jsxs)(n.p,{children:["4D Server \u4E0A\u3067\u52D5\u3044\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u521D\u3081\u3066\u63A5\u7D9A\u3059\u308B\u5834\u5408\u306F\u3001\u901A\u5E38\u306F\u6A19\u6E96\u306E\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u4F7F\u3044\u307E\u3059\u3002 \u4EE5\u964D\u306F\u3001",(0,i.jsx)(n.strong,{children:"\u6700\u8FD1\u4F7F\u7528\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"})," \u30E1\u30CB\u30E5\u30FC\u3084\u30014DLink \u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u76F4\u63A5\u63A5\u7D9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"4D Server \u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u63A5\u7D9A\u3059\u308B\u306B\u306F:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u65B9\u6CD5\u3092\u304A\u3053\u306A\u3044\u307E\u3059:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Welcome \u30A6\u30A3\u30B6\u30FC\u30C9\u306B\u3066 ",(0,i.jsx)(n.strong,{children:"4D Server\u306B\u63A5\u7D9A"})," \u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u3088\u308A **\u958B\u304F \uFF1E \u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8...**\u3092\u9078\u629E\u3059\u308B\u304B\u3001",(0,i.jsx)(n.strong,{children:"\u958B\u304F"})," \u30C4\u30FC\u30EB\u30D0\u30FC\u30DC\u30BF\u30F3\u3088\u308A\u540C\u69D8\u306B\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["4D Server \u306B\u63A5\u7D9A\u3059\u308B\u305F\u3081\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u306F ",(0,i.jsx)(n.strong,{children:"\u6700\u8FD1\u4F7F\u7528"}),"\u3001",(0,i.jsx)(n.strong,{children:"\u5229\u7528\u53EF"}),"\u3001\u304A\u3088\u3073 ",(0,i.jsx)(n.strong,{children:"\u30AB\u30B9\u30BF\u30E0"})," \u3068\u3044\u3046\u30013\u3064\u306E\u30BF\u30D6\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30EA\u30E2\u30FC\u30C8\u306E 4D \u3068\u540C\u3058\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306B 4D Server \u304C\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F ",(0,i.jsx)(n.strong,{children:"\u5229\u7528\u53EF"})," \u30BF\u30D6\u3092\u9078\u629E\u3057\u307E\u3059\u3002 4D Server \u306B\u306F\u7D44\u307F\u8FBC\u307F\u306E\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30B7\u30B9\u30C6\u30E0\u304C\u3042\u308A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306B\u5229\u7528\u53EF\u80FD\u306A 4D Server \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u540D\u524D\u3092\u516C\u958B\u3057\u307E\u3059\u3002 \u3053\u306E\u30EA\u30B9\u30C8\u306F\u3001\u540D\u524D\u304C\u898B\u3064\u304B\u3063\u305F\u9806\u306B\u8868\u793A\u3055\u308C\u3001\u52D5\u7684\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(198275).Z+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306E\u30EA\u30B9\u30C8\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3059\u308B\u306B\u306F\u3001\u540D\u524D\u4E0A\u3067\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u540D\u524D\u3092\u9078\u629E\u3057\u3066 ",(0,i.jsx)(n.strong,{children:"OK"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C ",(0,i.jsx)(n.strong,{children:"\u5229\u7528\u53EF"})," \u30BF\u30D6\u306B\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306B\u306F\u3001",(0,i.jsx)(n.strong,{children:"\u30AB\u30B9\u30BF\u30E0"})," \u30BF\u30D6\u3092\u958B\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\u30DA\u30FC\u30B8\u3067\u306F\u3001IP\u30A2\u30C9\u30EC\u30B9\u3067\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306E\u30B5\u30FC\u30D0\u30FC\u3092\u6307\u5B9A\u3057\u3001\u305D\u308C\u306B\u4EFB\u610F\u306E\u540D\u524D\u3092\u3064\u3051\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(180741).Z+"",width:"522",height:"522"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D"}),": 4D Server \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30ED\u30FC\u30AB\u30EB\u540D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u540D\u524D\u306F ",(0,i.jsx)(n.strong,{children:"\u6700\u8FD1\u4F7F\u7528"})," \u30DA\u30FC\u30B8\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u53C2\u7167\u3059\u308B\u969B\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9"}),": 4D Server \u304C\u8D77\u52D5\u3055\u308C\u305F\u30DE\u30B7\u30F3\u306E IP\u30A2\u30C9\u30EC\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["2\u3064\u306E\u30B5\u30FC\u30D0\u30FC\u304C\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067\u540C\u6642\u306B\u8D77\u52D5\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306F\u3001IP\u30A2\u30C9\u30EC\u30B9\u306E\u5F8C\u306B\u30B3\u30ED\u30F3\u3068\u30DD\u30FC\u30C8\u756A\u53F7\u3092\u7D9A\u3051\u307E\u3059\u3002\u4F8B: ",(0,i.jsx)(n.code,{children:"192.168.92.104:19820"}),"\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30014D Server \u306E\u516C\u958B\u30DD\u30FC\u30C8\u306F 19813 \u3067\u3059\u3002 \u3053\u306E\u756A\u53F7\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u958B\u767A\u30E2\u30FC\u30C9\u3092\u6709\u52B9\u5316\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u7279\u5225\u306A\u8AAD\u307F\u53D6\u308A/\u66F8\u304D\u8FBC\u307F\u30E2\u30FC\u30C9\u3067\u30EA\u30E2\u30FC\u30C8\u63A5\u7D9A\u3092\u958B\u304D\u307E\u3059 (\u4E92\u63DB\u6027\u30AA\u30D7\u30B7\u30E7\u30F3)\u3002\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u3001\u30EA\u30E2\u30FC\u30C84D \u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u78BA\u4FDD\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306E\u30DA\u30FC\u30B8\u3067\u30B5\u30FC\u30D0\u30FC\u3092\u6307\u5B9A\u3057\u305F\u3089\u3001",(0,i.jsx)(n.strong,{children:"OK"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u63A5\u7D9A\u304C\u78BA\u7ACB\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F ",(0,i.jsx)(n.strong,{children:"\u6700\u8FD1\u4F7F\u7528"})," \u30BF\u30D6\u306E\u30EA\u30B9\u30C8\u306B\u52A0\u3048\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0"}),"\n",(0,i.jsxs)(n.p,{children:["\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u306E\u5834\u5408\u30014D Server \u306F ",(0,i.jsx)(n.em,{children:".4DProject"})," \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB (\u975E\u5727\u7E2E) \u306E ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Desktop/building#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%B8%88%E3%81%BF%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E3%83%93%E3%83%AB%E3%83%89",children:".4dz"})," \u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3057\u3001\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306B\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u7DE8\u96C6\u3055\u308C 4D Server \u306B\u30EA\u30ED\u30FC\u30C9\u3055\u308C\u305F\u5834\u5408\u306A\u3069\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E .4dz\u30D5\u30A1\u30A4\u30EB\u306F\u81EA\u52D5\u7684\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B21\u306E\u5834\u5408\u306B\u30EA\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A6\u30A3\u30F3\u30C9\u30A6\u304C OS \u306E\u6700\u524D\u9762\u306B\u6765\u305F\u308A\u3001\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u306E 4D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u7DE8\u96C6\u3092\u4FDD\u5B58\u3057\u305F\u5834\u5408 (\u5F8C\u8FF0\u53C2\u7167) \u306B\u81EA\u52D5\u3067\u30EA\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RELOAD PROJECT"})," \u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u306B\u30EA\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30BD\u30FC\u30B9\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u3088\u308A\u30D7\u30EB\u3057\u305F\u3068\u304D\u306A\u3069\u306B\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0",children:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0"}),"\n",(0,i.jsx)(n.p,{children:"4D Server \u4E0A\u3067 .4dz \u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0\u7248\u304C\u751F\u6210\u3055\u308C\u305F\u5834\u5408\u3001\u305D\u306E\u66F4\u65B0\u7248\u3092\u5229\u7528\u3059\u308B\u306B\u306F\u3001\u63A5\u7D9A\u4E2D\u306E\u30EA\u30E2\u30FC\u30C8 4D \u30DE\u30B7\u30F3\u306F\u4E00\u5EA6\u30ED\u30B0\u30A2\u30A6\u30C8\u3057\u30014D Server \u306B\u518D\u63A5\u7D9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"4d-\u3068-4d-server-\u306E\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067\u306E\u4F7F\u7528",children:"4D \u3068 4D Server \u306E\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067\u306E\u4F7F\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067 4D \u304C 4D Server \u306B\u63A5\u7D9A\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u30E2\u30FC\u30C9\u306E 4D \u306E\u3088\u3046\u306B\u3075\u308B\u307E\u3044\u3001\u30C7\u30B6\u30A4\u30F3\u74B0\u5883\u306B\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6\u304C\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306B\u3088\u308A\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u904B\u7528\u6642\u3068\u540C\u3058\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u958B\u767A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067 4D Server \u306B 4D \u3092\u63A5\u7D9A\u3059\u308B\u5834\u5408\u306B\u306F\u3001 ",(0,i.jsx)(n.a,{href:"#%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E9%96%8B%E3%81%8F",children:"\u63A5\u7D9A\u6642\u306E\u30AA\u30D7\u30B7\u30E7\u30F3"})," \u306E\u8A2D\u5B9A\u306B\u304B\u304B\u308F\u3089\u305A ",(0,i.jsx)(n.strong,{children:"\u958B\u767A\u30E2\u30FC\u30C9"})," \u304C\u81EA\u52D5\u7684\u306B\u6709\u52B9\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30C7\u30B6\u30A4\u30F3\u74B0\u5883\u306B\u3066 4D \u304C ",(0,i.jsx)(n.strong,{children:"\u3059\u3079\u3066\u3092\u4FDD\u5B58"})," \u30A2\u30AF\u30B7\u30E7\u30F3\u3092 (",(0,i.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u3063\u3066\u660E\u793A\u7684\u306B\u3001\u307E\u305F\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u3078\u306E\u79FB\u884C\u306B\u3088\u308A\u6697\u793A\u7684\u306B) \u304A\u3053\u306A\u3046\u3068\u30014D Server \u306F\u540C\u671F\u7684\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u30EA\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002 4D Server \u306B\u3088\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u30EA\u30ED\u30FC\u30C9\u304C\u5B8C\u4E86\u3059\u308B\u306E\u3092\u5F85\u3063\u3066\u30014D \u306F\u7D9A\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u305F\u3060\u3057\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Project/architecture",children:"\u6A19\u6E96\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC"})," \u3068\u306F\u6B21\u306E\u3075\u308B\u307E\u3044\u306B\u304A\u3044\u3066\u7570\u306A\u308A\u307E\u3059\u306E\u3067\u3001\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'4D \u304C\u4F7F\u7528\u3059\u308B userPreferences.{username} \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30014D Server \u304C\u4F7F\u7528\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306E\u3082\u306E\u3068\u540C\u4E00\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u5C02\u7528\u306E "userPreferences" \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30EB\u30C0\u30FC\u5185 (\u3064\u307E\u308A\u3001.4dz\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u5834\u5408\u3068\u540C\u3058\u5834\u6240) \u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,i.jsx)(n.li,{children:'4D \u304C\u4F7F\u7528\u3059\u308B DerivedData \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30014D Server \u304C\u4F7F\u7528\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306E\u3082\u306E\u3068\u540C\u4E00\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u5C02\u7528\u306E "DerivedDataRemote" \u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,i.jsx)(n.li,{children:"catalog.4DCatalog \u30D5\u30A1\u30A4\u30EB\u306F 4D \u3067\u306F\u306A\u304F 4D Server \u306B\u3088\u3063\u3066\u7DE8\u96C6\u3055\u308C\u307E\u3059\u3002 catalog \u306E\u60C5\u5831\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3088\u3063\u3066\u540C\u671F\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"directory.json \u30D5\u30A1\u30A4\u30EB\u306F 4D \u3067\u306F\u306A\u304F 4D Server \u306B\u3088\u3063\u3066\u7DE8\u96C6\u3055\u308C\u307E\u3059\u3002 directory \u306E\u60C5\u5831\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3088\u3063\u3066\u540C\u671F\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"4D \u306F\u30014D Server \u4E0A\u306E\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u72EC\u81EA\u306E\u5185\u90E8\u7684\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3084\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3084\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092 4D \u3042\u308B\u3044\u306F 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30EC\u30D9\u30EB\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u306F\u3001\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",children:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3"}),"\n",(0,i.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/API/SessionClass#session",children:(0,i.jsx)(n.code,{children:"Session"})})," \u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u60C5\u5831\u3092\u683C\u7D0D\u3059\u308B ",(0,i.jsx)(n.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6271\u3046\u306B\u306F\u3001",(0,i.jsxs)(n.a,{href:"/docs/ja/20-R6/API/SessionClass",children:[(0,i.jsx)(n.code,{children:"Session"})," \u30AF\u30E9\u30B9"]})," \u306E\u95A2\u6570\u3068\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u52B9\u679C",children:"\u52B9\u679C"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Session"}),"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u30C7\u30FC\u30BF\u3092\u5171\u6709\u3059\u308B\u306B\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/API/SessionClass#storage",children:(0,i.jsx)(n.code,{children:"Session.storage"})})," \u5171\u6709\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u305F\u3068\u3048\u3070\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306B\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C\u624B\u7D9A\u304D\u3092\u958B\u59CB\u3057\u3001\u30E1\u30FC\u30EB\u3084 SMS \u3067\u9001\u4FE1\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5165\u529B\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u6B21\u306B\u3001\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u30BB\u30C3\u30B7\u30E7\u30F3\u306E storage \u306B\u8FFD\u52A0\u3057\u3001\u30B5\u30FC\u30D0\u30FC\u304C\u30E6\u30FC\u30B6\u30FC\u3092\u8B58\u5225\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306B\u3088\u308A\u30014D\u30B5\u30FC\u30D0\u30FC\u306F\u3059\u3079\u3066\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u305F\u3081\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u5F79\u5272\u306B\u5FDC\u3058\u3066\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3092\u7528\u610F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5229\u7528\u53EF\u80FD\u6027",children:"\u5229\u7528\u53EF\u80FD\u6027"}),"\n",(0,i.jsxs)(n.p,{children:["\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC ",(0,i.jsx)(n.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4EE5\u4E0B\u304B\u3089\u5229\u7528\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Project/code-overview#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E4%B8%8A%E3%81%A7%E5%AE%9F%E8%A1%8C",children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C"}),' \u5C5E\u6027\u3092\u6301\u3064\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9 (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E "\u53CC\u5B50" \u30D7\u30ED\u30BB\u30B9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059)']}),"\n",(0,i.jsx)(n.li,{children:"\u30C8\u30EA\u30AC\u30FC"}),"\n",(0,i.jsxs)(n.li,{children:["ORDA ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/ORDA/ordaClasses",children:"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u95A2\u6570"})," (",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/ORDA/ordaClasses#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E9%96%A2%E6%95%B0",children:(0,i.jsx)(n.code,{children:"local"})})," \u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u5BA3\u8A00\u3055\u308C\u305F\u3082\u306E\u3092\u9664\u304F)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"On Server Open Connection"})," \u304A\u3088\u3073 ",(0,i.jsx)(n.code,{children:"On Server Shutdown Connection"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u3059\u3079\u3066\u306E\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u306F\u3001\u540C\u3058\u4EEE\u60F3\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u5171\u6709\u3057\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html",children:"doc.4d.com"})," \u306E\u3053\u306E\u30DA\u30FC\u30B8 \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u95A2\u9023\u9805\u76EE-\u30D6\u30ED\u30B0\u8A18\u4E8B",children:"\u95A2\u9023\u9805\u76EE (\u30D6\u30ED\u30B0\u8A18\u4E8B)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://blog.4d.com/ja/new-4d-remote-session-object-with-client-server-connection-and-stored-procedure/",children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u3068\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u306B\u5BFE\u5FDC\u3057\u305F\u65B0\u3057\u3044 4D\u30EA\u30E2\u30FC\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\u3002"]})]})}function j(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},180741:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/serverConnect2-2617f5a73a8b33f5ebfac1b36a006c1c.png"},316036:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},198275:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let i={},c=s.createContext(i);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);