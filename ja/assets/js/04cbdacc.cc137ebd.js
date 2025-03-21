"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71903"],{306102:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"ORDA/datastores","title":"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2","description":"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2 \u3068\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 (4D \u307E\u305F\u306F4D Server) \u4E0A\u3067\u4F7F\u7528\u3055\u308C\u308B\u3001\u5225\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E \u30C7\u30FC\u30BF\u30B9\u30C8\u30A2 \u3078\u306E\u53C2\u7167\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/ja/20-R7/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"datastores","title":"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"},"sidebar":"docs","previous":{"title":"\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30F3\u30D7\u306E\u4F7F\u3044\u65B9","permalink":"/docs/ja/20-R7/ORDA/global-stamp"},"next":{"title":"\u6A29\u9650","permalink":"/docs/ja/20-R7/ORDA/privileges"}}'),c=s("785893"),d=s("250065");let t={id:"datastores",title:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"},a=void 0,i={},o=[{value:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4F7F\u7528",id:"web\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4F7F\u7528",level:2},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u76E3\u8996",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u76E3\u8996",level:3},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u7D42\u4E86",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u7D42\u4E86",level:2},{value:"\u30ED\u30C3\u30AD\u30F3\u30B0\u3068\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3",id:"\u30ED\u30C3\u30AD\u30F3\u30B0\u3068\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"})," \u3068\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 (4D \u307E\u305F\u306F4D Server) \u4E0A\u3067\u4F7F\u7528\u3055\u308C\u308B\u3001\u5225\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2",children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"})," \u3078\u306E\u53C2\u7167\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30ED\u30FC\u30AB\u30EB\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/open-datastore",children:(0,c.jsx)(n.code,{children:"Open datastore"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u53C2\u7167\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u30014D \u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/WebServer/sessions",children:"\u30BB\u30C3\u30B7\u30E7\u30F3"})," \u3092\u958B\u3044\u3066\u3001",(0,c.jsx)(n.code,{children:"Open datastore"})," \u3092\u547C\u3073\u51FA\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5185\u90E8\u3067 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/gettingStarted",children:"REST API"})," \u3092\u4F7F\u7528\u3057\u3001\u3053\u308C\u306B\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/REST/authUsers",children:"\u5229\u7528\u53EF\u80FD\u306A\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"web\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4F7F\u7528",children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4F7F\u7528"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/open-datastore",children:(0,c.jsx)(n.code,{children:"Open datastore"})})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u53C2\u7167\u3055\u308C\u308B\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u5834\u5408\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u5143\u30D7\u30ED\u30BB\u30B9\u3068\u306E\u63A5\u7D9A\u306F\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/WebServer/sessions",children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3"})," \u306B\u3088\u308A\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u4E0A\u3067\u4F5C\u6210\u3055\u308C\u308B Web\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u5185\u90E8\u7684\u306B\u30BB\u30C3\u30B7\u30E7\u30F3ID \u306B\u3088\u3063\u3066\u8B58\u5225\u3055\u308C\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E0A\u3067\u306F ",(0,c.jsx)(n.code,{children:"localID"})," \u3068\u7D10\u3065\u3044\u3066\u3044\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"localID"})," \u306F\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u3066\u3044\u308B\u30DE\u30B7\u30F3\u306B\u304A\u3051\u308B\u30ED\u30FC\u30AB\u30EB\u306A\u8B58\u5225ID\u3067\u3059:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u540C\u3058\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5225\u30D7\u30ED\u30BB\u30B9\u304C\u540C\u3058\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3059\u308B\u5834\u5408\u3001",(0,c.jsx)(n.code,{children:"localID"})," \u3068\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u5171\u6709\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u540C\u3058\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5225\u30D7\u30ED\u30BB\u30B9\u304C\u5225\u306E ",(0,c.jsx)(n.code,{children:"localID"})," \u3092\u4F7F\u3063\u3066\u540C\u3058\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u305F\u5834\u5408\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3067\u306F\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ED6\u306E\u30DE\u30B7\u30F3\u304C\u540C\u3058 ",(0,c.jsx)(n.code,{children:"localID"})," \u3092\u4F7F\u3063\u3066\u540C\u3058\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u63A5\u7D9A\u3057\u305F\u5834\u5408\u3001\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u65B0\u3057\u3044 cookie \u3067\u958B\u59CB\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u308C\u3089\u306E\u539F\u5247\u3092\u4E0B\u56F3\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(194601).Z+"",width:"962",height:"719"})}),"\n",(0,c.jsx)(n.h3,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u76E3\u8996",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u76E3\u8996"}),"\n",(0,c.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30A2\u30AF\u30BB\u30B9\u3092\u7BA1\u7406\u3057\u3066\u3044\u308B\u30BB\u30C3\u30B7\u30E7\u30F3\u306F 4D Server \u306E\u7BA1\u7406\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'\u30D7\u30ED\u30BB\u30B9\u540D: "REST Handler: <process name>"'}),"\n",(0,c.jsx)(n.li,{children:"\u30BF\u30A4\u30D7: HTTP Server Worker"}),"\n",(0,c.jsxs)(n.li,{children:["\u30BB\u30C3\u30B7\u30E7\u30F3: ",(0,c.jsx)(n.code,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u540D"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6B21\u306E\u4F8B\u3067\u306F\u30011\u3064\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u4E0A\u3067 2\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u5B9F\u884C\u4E2D\u3067\u3059:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(667698).Z+"",width:"1402",height:"708"})}),"\n",(0,c.jsx)(n.h2,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u7D42\u4E86",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u7D42\u4E86"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E6%9C%9F%E9%99%90",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u671F\u9650"})," \u306E\u6BB5\u843D\u3067\u8AAC\u660E\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B\u3001\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u306A\u3057\u306B\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u304C\u7D4C\u904E\u3059\u308B\u3068\u30014D \u306F\u81EA\u52D5\u7684\u306B\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u306F 60\u5206\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"Open datastore"})," \u30B3\u30DE\u30F3\u30C9\u306E ",(0,c.jsx)(n.code,{children:"connectionInfo"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u3066\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u7D42\u4E86\u5F8C\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u9001\u4FE1\u3055\u308C\u305F\u5834\u5408\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u53EF\u80FD\u306A\u9650\u308A (\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u3042\u308A\u3001\u30B5\u30FC\u30D0\u30FC\u304C\u505C\u6B62\u3057\u3066\u3044\u306A\u3044\u3001\u306A\u3069) \u518D\u958B\u3055\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u518D\u958B\u3057\u3066\u3082\u3001\u30ED\u30C3\u30AF\u3084\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u308F\u308B\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306F\u5931\u308F\u308C\u3066\u3044\u308B\u3053\u3068\u306B\u7559\u610F\u304C\u5FC5\u8981\u3067\u3059 (\u5F8C\u8FF0\u53C2\u7167)\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30ED\u30C3\u30AD\u30F3\u30B0\u3068\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3",children:"\u30ED\u30C3\u30AD\u30F3\u30B0\u3068\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3"}),"\n",(0,c.jsx)(n.p,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30ED\u30C3\u30AD\u30F3\u30B0\u3084\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F ORDA \u6A5F\u80FD\u306F\u3001ORDA \u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 / \u30B5\u30FC\u30D0\u30FC\u30E2\u30FC\u30C9\u3068\u540C\u69D8\u306B\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u304A\u3044\u3066\u3082\u30D7\u30ED\u30BB\u30B9\u30EC\u30D9\u30EB\u3067\u7BA1\u7406\u3055\u308C\u307E\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u3042\u308B\u30D7\u30ED\u30BB\u30B9\u304C\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u30ED\u30C3\u30AF\u3057\u305F\u5834\u5408\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5171\u6709\u5982\u4F55\u306B\u95A2\u308F\u3089\u305A\u3001\u4ED6\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u305D\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306F\u30ED\u30C3\u30AF\u3055\u308C\u305F\u72B6\u614B\u3067\u3059 (",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/entities#%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%83%AD%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30ED\u30C3\u30AD\u30F3\u30B0"})," \u53C2\u7167)\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002 \u540C\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u8907\u6570\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C 1\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u540C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u305D\u308C\u3089\u304C\u3059\u3079\u3066\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u306A\u3044\u3068\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u305B\u3093\u3002 \u306A\u304A\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u5BFE\u3059\u308B\u53C2\u7167\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3082\u3001\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F ",(0,c.jsx)(n.code,{children:"dataStore.startTransaction( )"}),"\u3001",(0,c.jsx)(n.code,{children:"dataStore.cancelTransaction( )"}),"\u3001",(0,c.jsx)(n.code,{children:"dataStore.validateTransaction( )"})," \u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u3063\u3066\u3001\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3054\u3068\u306B\u500B\u5225\u306B\u958B\u59CB\u30FB\u8A8D\u8A3C\u30FB\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306E\u64CD\u4F5C\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["Classic 4D language commands (",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/start-transaction",children:(0,c.jsx)(n.code,{children:"START TRANSACTION"})}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/validate-transaction",children:(0,c.jsx)(n.code,{children:"VALIDATE TRANSACTION"})}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/cancel-transaction",children:(0,c.jsx)(n.code,{children:"CANCEL TRANSACTION"})}),") only apply to the main datastore (returned by ",(0,c.jsx)(n.code,{children:"ds"}),").\n\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u3042\u308B\u30D7\u30ED\u30BB\u30B9\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5171\u6709\u5982\u4F55\u306B\u95A2\u308F\u3089\u305A\u3001\u4ED6\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u305D\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u66F4\u65B0\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6B21\u306E\u5834\u5408\u306B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30ED\u30C3\u30AF\u306F\u89E3\u9664\u3055\u308C\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u307E\u3059:\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30D7\u30ED\u30BB\u30B9\u304C\u5F37\u5236\u7D42\u4E86\u3055\u308C\u305F"}),"\n",(0,c.jsx)(n.li,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u9589\u3058\u3089\u308C\u305F"}),"\n",(0,c.jsx)(n.li,{children:"\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u30A6\u30A3\u30F3\u30C9\u30A6\u304B\u3089\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5F37\u5236\u7D42\u4E86\u3055\u308C\u305F"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},667698:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},194601:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let c={},d=r.createContext(c);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);