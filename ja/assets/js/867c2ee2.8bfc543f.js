"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24924"],{264245:function(e,t,r){r.r(t),r.d(t,{default:()=>f,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"REST/savedfilter","title":"$savedfilter","description":"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u4F5C\u6210\u6642\u306B\u3001$filter \u306B\u5B9A\u7FA9\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u4FDD\u5B58\u3057\u307E\u3059 (\u4F8B: $savedfilter=\\"\\")","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/REST/$savedfilter.md","sourceDirName":"REST","slug":"/REST/savedfilter","permalink":"/docs/ja/20/REST/savedfilter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"savedfilter","title":"$savedfilter"},"sidebar":"docs","previous":{"title":"$queryplan","permalink":"/docs/ja/20/REST/queryplan"},"next":{"title":"$savedorderby","permalink":"/docs/ja/20/REST/savedorderby"}}'),s=r("785893"),d=r("250065");let i={id:"savedfilter",title:"$savedfilter"},l=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function a(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u4F5C\u6210\u6642\u306B\u3001$filter \u306B\u5B9A\u7FA9\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u4FDD\u5B58\u3057\u307E\u3059 (",(0,s.jsx)(t.em,{children:"\u4F8B"}),": ",(0,s.jsx)(t.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u4F7F\u7528\u3057\u305F\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u5FF5\u306E\u305F\u3081\u306B\u4FDD\u5B58\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3063\u3066\u3082 (\u305F\u3068\u3048\u3070\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3084\u5BB9\u91CF\u306E\u554F\u984C\u3001",(0,s.jsx)(t.a,{href:"/docs/ja/20/REST/method#methodrelease",children:(0,s.jsx)(t.code,{children:"$method=release"})})," \u64CD\u4F5C\u306B\u3088\u3063\u3066) \u3001\u540C\u3058\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u53D6\u308A\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$savedfilter"})," \u3092\u4F7F\u7528\u3057\u3066\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u4F5C\u6210\u6642\u306B\u4F7F\u3063\u305F\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u4FDD\u5B58\u3057\u305F\u3042\u3068\u306F\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u53D6\u5F97\u3059\u308B\u5EA6\u306B ",(0,s.jsx)(t.code,{children:"$savedfilter"})," \u3082\u53D7\u3051\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u6D88\u3048\u3066\u3044\u305F\u5834\u5408\u300110\u5206\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3067\u518D\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u6D88\u3048\u3066\u3044\u305F\u5834\u5408\u3001\u518D\u4F5C\u6210\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u5185\u5BB9\u306F\u66F4\u65B0\u3055\u308C\u305F\u3082\u306E\u3067\u3059 (\u65B0\u3057\u304F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u305F\u308A\u3001\u5B58\u5728\u3057\u3066\u3044\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u524A\u9664\u3055\u308C\u3066\u3044\u305F\u308A\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u3048\u307E\u3059)\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210\u6642\u306B ",(0,s.jsx)(t.code,{children:"$savedfilter"})," \u3068 ",(0,s.jsx)(t.a,{href:"/docs/ja/20/REST/savedorderby",children:(0,s.jsx)(t.code,{children:"$savedorderby"})})," \u306E\u4E21\u65B9\u3092\u4F7F\u7528\u3057\u305F\u306B\u3082\u95A2\u308F\u3089\u305A\u3001\u6B21\u306E\u547C\u3073\u51FA\u3057\u3067\u306F\u7247\u65B9\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u8FD4\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306F\u540C\u3058\u53C2\u7167\u756A\u53F7\u3092\u6301\u3061\u306A\u304C\u3089\u3001\u3053\u306E\u5909\u66F4\u3092\u53CD\u6620\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(t.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B ",(0,s.jsx)(t.code,{children:"$savedfilter"})," \u3092\u4F7F\u3044\u307E\u3059:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,s.jsx)(t.p,{children:"\u4F5C\u6210\u3057\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u969B\u3001\u305D\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u6709\u52B9\u306A\u306E\u3092\u78BA\u5B9F\u306B\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function f(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(667294);let s={},d=n.createContext(s);function i(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);