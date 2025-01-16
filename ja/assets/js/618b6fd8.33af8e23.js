"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1363"],{279126:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"ServerWindow/sql-server","title":"SQL\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","description":"SQL\u30B5\u30FC\u30D0\u30FC \u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u306B\u7D71\u5408\u3055\u308C\u305F SQL\u30B5\u30FC\u30D0\u30FC\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u307E\u305F\u3001SQL\u30B5\u30FC\u30D0\u30FC\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u306E\u30DC\u30BF\u30F3\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ServerWindow/sql-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/sql-server","permalink":"/docs/ja/ServerWindow/sql-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-server","title":"SQL\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/ServerWindow/application-server"},"next":{"title":"HTTP\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/ServerWindow/http-server"}}'),i=r("785893"),t=r("250065");let l={id:"sql-server",title:"SQL\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},d=void 0,o={},c=[{value:"SQL\u30B5\u30FC\u30D0\u30FC\u958B\u59CB/\u505C\u6B62",id:"sql\u30B5\u30FC\u30D0\u30FC\u958B\u59CB\u505C\u6B62",level:2},{value:"\u60C5\u5831",id:"\u60C5\u5831",level:2},{value:"\u8A2D\u5B9A",id:"\u8A2D\u5B9A",level:3},{value:"\u63A5\u7D9A",id:"\u63A5\u7D9A",level:3},{value:"\u6700\u5927\u63A5\u7D9A\u6570",id:"\u6700\u5927\u63A5\u7D9A\u6570",level:3}];function u(e){let n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL\u30B5\u30FC\u30D0\u30FC"})," \u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u306B\u7D71\u5408\u3055\u308C\u305F SQL\u30B5\u30FC\u30D0\u30FC\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 \u307E\u305F\u3001SQL\u30B5\u30FC\u30D0\u30FC\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u306E\u30DC\u30BF\u30F3\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(683146).Z+"",width:"1036",height:"498"})}),"\n",(0,i.jsx)(n.p,{children:"\u30DA\u30FC\u30B8\u306E\u4E0A\u90E8\u306B\u306F\u30014D Server \u306E SQL\u30B5\u30FC\u30D0\u30FC\u306E\u73FE\u5728\u306E\u72B6\u6CC1\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u72B6\u6CC1"}),": \u958B\u59CB\u307E\u305F\u306F\u505C\u6B62"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u958B\u59CB\u6642\u523B"}),": SQL\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5\u65E5\u3068\u6642\u523B\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u52D5\u4F5C\u6642\u9593"}),": SQL\u30B5\u30FC\u30D0\u30FC\u304C\u6700\u5F8C\u306B\u958B\u59CB\u3055\u308C\u3066\u304B\u3089\u306E\u7D4C\u904E\u6642\u9593\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sql\u30B5\u30FC\u30D0\u30FC\u958B\u59CB\u505C\u6B62",children:"SQL\u30B5\u30FC\u30D0\u30FC\u958B\u59CB/\u505C\u6B62"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30DC\u30BF\u30F3\u306F\u5207\u308A\u66FF\u3048\u8868\u793A\u3055\u308C\u30014D Server SQL\u30B5\u30FC\u30D0\u30FC\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['SQL\u30B5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u304C "\u958B\u59CB" \u306E\u5834\u5408\u3001\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30C8\u30EB\u306F ',(0,i.jsx)(n.strong,{children:"SQL\u30B5\u30FC\u30D0\u30FC\u505C\u6B62"})," \u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D Server SQL\u30B5\u30FC\u30D0\u30FC\u306F\u5373\u5EA7\u306B\u505C\u6B62\u3057\u3001\u6307\u5B9A\u3057\u305F TCP\u30DD\u30FC\u30C8\u3067\u53D7\u4FE1\u3055\u308C\u308B\u5916\u90E8\u304B\u3089\u306E SQL\u30AF\u30A8\u30EA\u306B\u306F\u5FDC\u7B54\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:['SQL\u30B5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u304C "\u505C\u6B62" \u306E\u5834\u5408\u3001\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30C8\u30EB\u306F ',(0,i.jsx)(n.strong,{children:"SQL\u30B5\u30FC\u30D0\u30FC\u958B\u59CB"})," \u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D Server SQL\u30B5\u30FC\u30D0\u30FC\u306F\u5373\u5EA7\u306B\u958B\u59CB\u3057\u3001\u6307\u5B9A\u3057\u305F TCP\u30DD\u30FC\u30C8\u3067\u53D7\u4FE1\u3055\u308C\u308B\u5916\u90E8\u304B\u3089\u306E SQL\u30AF\u30A8\u30EA\u306B\u5FDC\u7B54\u3057\u307E\u3059\u3002 4D SQL\u30B5\u30FC\u30D0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u9069\u5207\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u8A2D\u5B9A\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8D77\u52D5\u3068\u540C\u6642\u306B\u3001\u307E\u305F\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F7F\u7528\u3057\u3066\u5FC5\u8981\u306A\u6642\u306B\u3001SQL\u30B5\u30FC\u30D0\u30FC\u3092\u81EA\u52D5\u3067\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u60C5\u5831",children:"\u60C5\u5831"}),"\n",(0,i.jsx)(n.h3,{id:"\u8A2D\u5B9A",children:"\u8A2D\u5B9A"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u3001SQL\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059: \u958B\u59CB\u6642\u306E\u81EA\u52D5\u8D77\u52D5\u3001\u5F85\u53D7IP\u30A2\u30C9\u30EC\u30B9\u3001\u5F85\u53D7TCP\u30DD\u30FC\u30C8 (\u30C7\u30D5\u30A9\u30EB\u30C8\u3067 19812)\u3001\u305D\u3057\u3066 SQL\u63A5\u7D9A\u7528\u306E TSL \u306E\u72B6\u614B (4D \u3084 Web\u63A5\u7D9A\u306F\u5225\u8A2D\u5B9A)\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308C\u3089\u306E\u5024\u306F 4D \u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u63A5\u7D9A",children:"\u63A5\u7D9A"}),"\n",(0,i.jsx)(n.p,{children:"4D Server\u4E0A\u3067\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B SQL\u63A5\u7D9A\u306E\u6570\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6700\u5927\u63A5\u7D9A\u6570",children:"\u6700\u5927\u63A5\u7D9A\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u8A31\u53EF\u3055\u308C\u308B\u540C\u6642SQL\u63A5\u7D9A\u306E\u6700\u5927\u6570\u3002 \u3053\u306E\u5024\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u3088\u308A\u307E\u3059\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},683146:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);