"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32081"],{768463:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"REST/configuration","title":"\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A","description":"4D \u306E REST\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u6A19\u6E96\u306E HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u7528\u3044\u3066\u5916\u90E8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u60C5\u5831\u3092\u53D6\u5F97\u3057\u305F\u308A\u3001\u30C7\u30FC\u30BF\u3092\u64CD\u4F5C\u3057\u305F\u308A\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u308A\u3001\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/ja/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"configuration","title":"\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A"},"sidebar":"docs","previous":{"title":"\u306F\u3058\u3081\u306B","permalink":"/docs/ja/REST/gettingStarted"},"next":{"title":"\u30E6\u30FC\u30B6\u30FC\u3068\u30BB\u30C3\u30B7\u30E7\u30F3","permalink":"/docs/ja/REST/authUsers"}}'),t=s("785893"),r=s("250065");let c={id:"configuration",title:"\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A"},o=void 0,l={},d=[{value:"REST\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B",id:"rest\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B",level:2},{value:"REST\u30A2\u30AF\u30BB\u30B9\u306E\u5236\u5FA1",id:"rest\u30A2\u30AF\u30BB\u30B9\u306E\u5236\u5FA1",level:2},{value:"\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",id:"\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",level:2},{value:"\u30C6\u30FC\u30D6\u30EB\u306E\u516C\u958B",id:"\u30C6\u30FC\u30D6\u30EB\u306E\u516C\u958B",level:3},{value:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",id:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",level:3},{value:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9",id:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9",level:2}];function a(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"4D \u306E REST\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u6A19\u6E96\u306E HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u7528\u3044\u3066\u5916\u90E8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u60C5\u5831\u3092\u53D6\u5F97\u3057\u305F\u308A\u3001\u30C7\u30FC\u30BF\u3092\u64CD\u4F5C\u3057\u305F\u308A\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u308A\u3001\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"REST\u6A5F\u80FD\u3092\u4F7F\u3044\u59CB\u3081\u308B\u307E\u3048\u306B\u3001\u307E\u305A\u306F 4D REST \u30B5\u30FC\u30D0\u30FC\u306E\u8A2D\u5B9A\u3092\u304A\u3053\u306A\u3044\u3001\u3053\u308C\u3092\u8D77\u52D5\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"rest\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B",children:"REST\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B"}),"\n",(0,t.jsxs)(n.p,{children:["\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u306B\u3088\u308A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30014D \u306F REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5FDC\u7B54\u3057\u307E\u305B\u3093\u3002 REST\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3057\u3001REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u306B\u306F\u3001",(0,t.jsx)(n.strong,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A"})," \u306E ",(0,t.jsx)(n.strong,{children:"Web"})," \uFF1E ",(0,t.jsx)(n.strong,{children:"Web\u6A5F\u80FD"})," \u30DA\u30FC\u30B8\u306B\u3066\u3001",(0,t.jsx)(n.strong,{children:"REST\u30B5\u30FC\u30D0\u30FC\u3068\u3057\u3066\u516C\u958B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt-text",src:s(986972).Z+"",width:"855",height:"381"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"REST\u30B5\u30FC\u30D3\u30B9\u306F 4D \u306E HTTP\u30B5\u30FC\u30D0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u30014D Web\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u308B\u3068\u3001\u300C\u8B66\u544A: \u30A2\u30AF\u30BB\u30B9\u6A29\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u300D\u3068\u3044\u3046\u8B66\u544A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F REST\u63A5\u7D9A\u306E\u8A8D\u8A3C\u8A2D\u5B9A\u304C\u3055\u308C\u3066\u3044\u306A\u3044\u9650\u308A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u81EA\u7531\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u3066\u3057\u307E\u3046\u305F\u3081\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5909\u66F4\u3092\u53CD\u6620\u3059\u308B\u306B\u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rest\u30A2\u30AF\u30BB\u30B9\u306E\u5236\u5FA1",children:"REST\u30A2\u30AF\u30BB\u30B9\u306E\u5236\u5FA1"}),"\n",(0,t.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001REST\u63A5\u7D9A\u306F\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3066\u30AA\u30FC\u30D7\u30F3\u3067\u3059\u304C\u3001\u3053\u306E\u72B6\u614B\u306F\u30E9\u30A4\u30BB\u30F3\u30B9\u7BA1\u7406\u4E0A\u3082\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u3082\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["As of 4D 20 R6, you configure REST accesses by enabling the ",(0,t.jsxs)(n.a,{href:"/docs/ja/REST/authUsers#force-login-mode",children:[(0,t.jsx)(n.strong,{children:"force login"})," mode"]})," and create an ",(0,t.jsx)(n.a,{href:"/docs/ja/REST/authUsers#function-authentify",children:(0,t.jsx)(n.code,{children:"authentify()"})})," datastore class function to authenticate users and assign privileges to their web session."]}),"\n",(0,t.jsx)(n.admonition,{title:"\u4E92\u63DB\u6027",type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Access"})," area in the Settings dialog box is only available in converted projects for compatibility. See ",(0,t.jsx)(n.a,{href:"/docs/ja/settings/web#access",children:"Access"})," for more information."]})}),"\n",(0,t.jsx)(n.h2,{id:"\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",children:"\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B"}),"\n",(0,t.jsxs)(n.p,{children:["4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E REST\u30B5\u30FC\u30D3\u30B9\u304C\u6709\u52B9\u5316\u3055\u308C\u308B\u3068\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2",children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"})," \u3092\u901A\u3057\u3066 4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u3059\u3079\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u304A\u3088\u3073\u683C\u7D0D\u30C7\u30FC\u30BF\u304C REST\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B [Employee] \u30C6\u30FC\u30D6\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u3001salary (\u7D66\u4E0E) \u30D5\u30A3\u30FC\u30EB\u30C9\u304C 10000\u4EE5\u4E0A\u306E\u793E\u54E1\u30C7\u30FC\u30BF\u304C\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'"\u975E\u8868\u793A" \u5C5E\u6027\u3092\u9078\u629E\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3082\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067 REST \u306B\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u3059\u3002'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'REST \u7D4C\u7531\u3067\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5236\u9650\u3059\u308B\u306B\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u4E0D\u53EF\u306B\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u3064\u3044\u3066 "REST\u30EA\u30BD\u30FC\u30B9\u3068\u3057\u3066\u516C\u958B" \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u89E3\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30EA\u30BD\u30FC\u30B9\u3078\u306E REST\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u3063\u305F\u5834\u5408\u30014D\u306F\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002'}),"\n",(0,t.jsx)(n.h3,{id:"\u30C6\u30FC\u30D6\u30EB\u306E\u516C\u958B",children:"\u30C6\u30FC\u30D6\u30EB\u306E\u516C\u958B"}),"\n",(0,t.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u304C REST \u306B\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E00\u90E8\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u307F\u3092\u516C\u958B\u3057\u305F\u3044\u72B6\u6CC1\u3082\u3042\u308B\u3067\u3057\u3087\u3046\u3002 \u305F\u3068\u3048\u3070\u3001[Users] \u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u4E2D\u306B\u30E6\u30FC\u30B6\u30FC\u540D\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u516C\u958B\u3057\u306A\u3044\u65B9\u304C\u8CE2\u660E\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30C6\u30FC\u30D6\u30EB\u3092\u516C\u958B\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u3066\u5BFE\u8C61\u3068\u306A\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u9078\u629E\u3057\u3001\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u3044\u3066\u30C6\u30FC\u30D6\u30EB\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REST\u30EA\u30BD\u30FC\u30B9\u3068\u3057\u3066\u516C\u958B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u9078\u629E\u3092\u89E3\u9664\u3057\u307E\u3059:\n",(0,t.jsx)(n.img,{alt:"alt-text",src:s(909713).Z+"",width:"279",height:"330"}),"\n\u516C\u958B\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u5404\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u3057\u3066\u3001\u3053\u306E\u624B\u9806\u3092\u7E70\u308A\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B",children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B"}),"\n",(0,t.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3059\u3079\u3066\u306E 4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\u304C REST \u306B\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30C6\u30FC\u30D6\u30EB\u306E\u4E00\u90E8\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u307F\u3092\u975E\u516C\u958B\u306B\u3057\u305F\u3044\u72B6\u6CC1\u3082\u3042\u308B\u3067\u3057\u3087\u3046\u3002 \u305F\u3068\u3048\u3070\u3001[Employees]Salary \u306E\u3088\u3046\u306A\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u975E\u516C\u958B\u306E\u65B9\u304C\u3088\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u975E\u516C\u958B\u306B\u3059\u308B\u306B\u306F:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u3066\u5BFE\u8C61\u3068\u306A\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u9078\u629E\u3057\u3001\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u3044\u3066\u30D5\u30A3\u30FC\u30EB\u30C9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u30D5\u30A3\u30FC\u30EB\u30C9\u306E ",(0,t.jsx)(n.strong,{children:"REST\u30EA\u30BD\u30FC\u30B9\u3068\u3057\u3066\u516C\u958B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u9078\u629E\u3092\u89E3\u9664\u3057\u307E\u3059:\n",(0,t.jsx)(n.img,{alt:"alt-text",src:s(483922).Z+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u3042\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u304C REST \u3092\u901A\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3042\u308B\u305F\u3081\u306B\u306F\u3001\u305D\u306E\u89AA\u30C6\u30FC\u30D6\u30EB\u3082\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u89AA\u30C6\u30FC\u30D6\u30EB\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5404\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u516C\u958B\u8A2D\u5B9A\u306B\u95A2\u308F\u3089\u305A\u3001\u3059\u3079\u3066\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u30A2\u30AF\u30BB\u30B9\u4E0D\u53EF\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9",children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9"}),"\n",(0,t.jsxs)(n.p,{children:["4D Server\u4E0A\u3067\u306F\u3001",(0,t.jsx)(n.strong,{children:"\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u3067\u3042\u3063\u3066\u3082"}),"\u3001REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u81EA\u52D5\u7684\u306B\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3067\u51E6\u7406\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u30B3\u30FC\u30C9\u306F ",(0,t.jsx)(n.a,{href:"/docs/ja/WebServer/preemptiveWeb#%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E3%82%BB%E3%83%BC%E3%83%95%E3%81%AAWeb%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9",children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u5B9F\u884C\u306B\u6E96\u62E0"})," \u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To debug interpreted web code on the server machine, make sure the debugger is ",(0,t.jsx)(n.a,{href:"/docs/ja/Debugging/debugging-remote",children:"attached to the server"})," or ",(0,t.jsx)(n.a,{href:"/docs/ja/Debugging/debugging-remote",children:"to a remote machine"}),". \u3053\u308C\u306B\u3088\u308A\u3001Web\u30D7\u30ED\u30BB\u30B9\u304C\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u308F\u308A\u3001Web\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u30C7\u30D0\u30C3\u30B0\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u306E 4D \u3067\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30B3\u30FC\u30C9\u306F\u5E38\u306B\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},986972:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},483922:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},909713:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var i=s(667294);let t={},r=i.createContext(t);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);