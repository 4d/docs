"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23933"],{865183:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"WebServer/errorPages","title":"\u30AB\u30B9\u30BF\u30E0 HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8","description":"4D Web Server \u3092\u4F7F\u3063\u3066\u3001\u30B5\u30FC\u30D0\u30FC\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u308B HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3068\u306F\u3001\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u6307\u3057\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/WebServer/errorPages.md","sourceDirName":"WebServer","slug":"/WebServer/errorPages","permalink":"/docs/ja/WebServer/errorPages","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"errorPages","title":"\u30AB\u30B9\u30BF\u30E0 HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u8A31\u53EF","permalink":"/docs/ja/WebServer/allowProject"},"next":{"title":"\u8A8D\u8A3C","permalink":"/docs/ja/WebServer/authentication"}}'),t=r("785893"),i=r("250065");let l={id:"errorPages",title:"\u30AB\u30B9\u30BF\u30E0 HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8"},d=void 0,c={},o=[{value:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30DA\u30FC\u30B8\u306E\u7F6E\u63DB",id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30DA\u30FC\u30B8\u306E\u7F6E\u63DB",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function h(e){let n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"4D Web Server \u3092\u4F7F\u3063\u3066\u3001\u30B5\u30FC\u30D0\u30FC\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u308B HTTP\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3068\u306F\u3001\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u6307\u3057\u307E\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"4 \u304B\u3089\u59CB\u307E\u308B\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9 (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A8\u30E9\u30FC)\u3002\u305F\u3068\u3048\u3070 404 \u306A\u3069\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"5 \u304B\u3089\u59CB\u307E\u308B\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9 (\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC)\u3002\u305F\u3068\u3048\u3070 501 \u306A\u3069\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["HTTP\u30A8\u30E9\u30FC\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9\u306E\u5B8C\u5168\u306A\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(n.a,{href:"https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89",children:"HTTP\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9"})," (Wikipedia) \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30DA\u30FC\u30B8\u306E\u7F6E\u63DB",children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u30DA\u30FC\u30B8\u306E\u7F6E\u63DB"}),"\n",(0,t.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u306E 4D Web Server \u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u72EC\u81EA\u306E\u30DA\u30FC\u30B8\u3067\u7F6E\u304D\u63DB\u3048\u308B\u305F\u3081\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u3057\u307E\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u30AB\u30B9\u30BF\u30E0 HTML\u30DA\u30FC\u30B8\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E WebFolder \u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u7B2C1\u30EC\u30D9\u30EB\u306B\u7F6E\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u30AB\u30B9\u30BF\u30E0\u30DA\u30FC\u30B8\u3092 "{statusCode}.html" (\u4F8B: "404.html") \u3068\u3044\u3046\u540D\u524D\u306B\u3057\u307E\u3059\u3002'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'\u4E00\u3064\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9\u306B\u3064\u304D\u3001\u4E00\u3064\u306E\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u307B\u304B\u3001"{number}xx.html" \u3068\u540D\u524D\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u8907\u6570\u306E\u30A8\u30E9\u30FC\u306B\u6C4E\u7528\u7684\u306A\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A8\u30E9\u30FC\u5168\u822C\u306B\u5BFE\u3059\u308B\u30DA\u30FC\u30B8\u3068\u3057\u3066\u3001"4xx.html" \u3068\u3044\u3046\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002 4D Web Server \u306F\u6700\u521D\u306B {statusCode}.html \u306E\u30DA\u30FC\u30B8\u3092\u63A2\u3057\u3001\u305D\u308C\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u6C4E\u7528\u7684\u306A\u30DA\u30FC\u30B8\u3092\u63A2\u3057\u307E\u3059\u3002'}),"\n",(0,t.jsx)(n.p,{children:"\u305F\u3068\u3048\u3070\u3001HTTP\u30EC\u30B9\u30DD\u30F3\u30B9\u304C\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9 404 \u3092\u8FD4\u3059\u5834\u5408:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'4D Web Server \u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E WebFolder \u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u3042\u308B "404.html" \u30DA\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u3088\u3046\u3068\u3057\u307E\u3059\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u305D\u308C\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u30014D Web Server \u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E WebFolder \u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u3042\u308B "4xx.html" \u30DA\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u3088\u3046\u3068\u3057\u307E\u3059\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u305D\u308C\u3082\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u30014D Web Server \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"WebFolder \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30AB\u30B9\u30BF\u30E0\u30DA\u30FC\u30B8\u3092\u5B9A\u7FA9\u3057\u3066\u3044\u308B\u5834\u5408:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(768084).Z+"",width:"166",height:"287"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'403\u3001404 HTTP\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u5BFE\u3057\u3066\u306F\u3001"403.html" \u304A\u3088\u3073 "404.html" \u30DA\u30FC\u30B8\u304C\u305D\u308C\u305E\u308C\u8FD4\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u4ED6\u306E 4xx \u30A8\u30E9\u30FC\u30B9\u30C6\u30FC\u30BF\u30B9 (400\u3001401\u306A\u3069) \u306B\u5BFE\u3057\u3066\u306F\u3001"4xx.html" \u30DA\u30FC\u30B8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'5xx \u30A8\u30E9\u30FC\u30B9\u30C6\u30FC\u30BF\u30B9\u5168\u822C\u306B\u5BFE\u3057\u3066\u306F"5xx.html" \u30DA\u30FC\u30B8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},768084:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);