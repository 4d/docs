"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7495"],{66150:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"REST/timeout","title":"$timeout","description":"4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u6642\u9593 (\u79D2\u5358\u4F4D) \u3092\u6307\u5B9A\u3057\u307E\u3059 (\u4F8B: $timeout=1800)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/$timeout.md","sourceDirName":"REST","slug":"/REST/timeout","permalink":"/docs/ja/REST/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"timeout","title":"$timeout"},"sidebar":"docs","previous":{"title":"$skip","permalink":"/docs/ja/REST/skip"},"next":{"title":"$top/$limit","permalink":"/docs/ja/REST/top_$limit"}}'),o=n("785893"),s=n("250065");let r={id:"timeout",title:"$timeout"},d=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function u(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u6642\u9593 (\u79D2\u5358\u4F4D) \u3092\u6307\u5B9A\u3057\u307E\u3059 (",(0,o.jsx)(t.em,{children:"\u4F8B"}),": ",(0,o.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/ja/REST/method#methodentityset",children:(0,o.jsx)(t.code,{children:"$method=entityset"})})," \u3092\u4F7F\u3063\u3066\u4F5C\u6210\u3059\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u3064\u3044\u3066\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u4EFB\u610F\u306E\u79D2\u6570\u3092 ",(0,o.jsx)(t.code,{children:"$timeout"})," \u306B\u6E21\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u300120\u5206\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u30011200\u3092\u6E21\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 2\u6642\u9593\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u4E00\u65E6\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u304C\u5B9A\u7FA9\u3055\u308C\u308B\u3068\u3001(",(0,o.jsx)(t.code,{children:"$method=entityset"})," \u306B\u3088\u3063\u3066) \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u5EA6\u306B\u73FE\u6642\u523B\u3068\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306B\u57FA\u3065\u3044\u3066\u6709\u52B9\u671F\u9650\u304C\u518D\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u4E00\u5EA6\u524A\u9664\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C ",(0,o.jsx)(t.code,{children:"$method=entityset"})," \u3068 ",(0,o.jsx)(t.a,{href:"/docs/ja/REST/savedfilter",children:(0,o.jsx)(t.code,{children:"$savedfilter"})})," \u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u518D\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u3001",(0,o.jsx)(t.code,{children:"$timeout"})," \u3067\u6307\u5B9A\u3057\u3066\u3044\u305F\u6570\u5024\u306B\u95A2\u308F\u3089\u305A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 10\u5206\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,o.jsx)(t.p,{children:"\u4F5C\u6210\u3059\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092 20\u5206\u306B\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(667294);let o={},s=i.createContext(o);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);