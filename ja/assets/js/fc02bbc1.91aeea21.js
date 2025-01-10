"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43581"],{645352:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"Concepts/control-flow","title":"\u5236\u5FA1\u30D5\u30ED\u30FC","description":"\u30E1\u30BD\u30C3\u30C9\u304C\u5358\u7D14\u304B\u8907\u96D1\u304B\u306B\u95A2\u4FC2\u306A\u304F\u3001\u958B\u767A\u8005\u306F3\u3064\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u69CB\u9020\u306E\u3046\u3061\u30011\u3064\u4EE5\u4E0A\u3092\u5E38\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u69CB\u9020\u306F\u3001\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u304C\u5B9F\u884C\u3055\u308C\u308B\u9806\u5E8F\u3092\u6C7A\u5B9A\u3059\u308B\u5B9F\u884C\u30D5\u30ED\u30FC\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u307E\u3059\u3002 3\u3064\u306E\u30BF\u30A4\u30D7\u306E\u69CB\u9020\u304C\u3042\u308A\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Concepts/flow-control.md","sourceDirName":"Concepts","slug":"/Concepts/control-flow","permalink":"/docs/ja/19/Concepts/control-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fflow-control.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"control-flow","title":"\u5236\u5FA1\u30D5\u30ED\u30FC"},"sidebar":"docs","previous":{"title":"\u30AF\u30E9\u30B9","permalink":"/docs/ja/19/Concepts/classes"},"next":{"title":"\u5206\u5C90\u69CB\u9020","permalink":"/docs/ja/19/Concepts/branching"}}'),s=o("785893"),c=o("250065");let r={id:"control-flow",title:"\u5236\u5FA1\u30D5\u30ED\u30FC"},l=void 0,i={},d=[];function a(e){let n={a:"a",br:"br",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30E1\u30BD\u30C3\u30C9\u304C\u5358\u7D14\u304B\u8907\u96D1\u304B\u306B\u95A2\u4FC2\u306A\u304F\u3001\u958B\u767A\u8005\u306F3\u3064\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u69CB\u9020\u306E\u3046\u3061\u30011\u3064\u4EE5\u4E0A\u3092\u5E38\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u69CB\u9020\u306F\u3001\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u304C\u5B9F\u884C\u3055\u308C\u308B\u9806\u5E8F\u3092\u6C7A\u5B9A\u3059\u308B\u5B9F\u884C\u30D5\u30ED\u30FC\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u307E\u3059\u3002 3\u3064\u306E\u30BF\u30A4\u30D7\u306E\u69CB\u9020\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB"}),": \u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u69CB\u9020\u306F\u5358\u7D14\u306A\u7DDA\u5F62\u69CB\u9020\u3067\u3059\u3002 \u30B7\u30FC\u30B1\u30F3\u30B9\u3068\u306F\u30014D\u304C\u6700\u521D\u304B\u3089\u6700\u5F8C\u307E\u3067\u6B21\u3005\u306B\u5B9F\u884C\u3059\u308B\u4E00\u9023\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3067\u3059\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u983B\u7E41\u306B\u4F7F\u7528\u3055\u308C\u308B1\u884C\u304B\u3089\u6210\u308B\u30EB\u30FC\u30C1\u30F3\u306F\u3082\u3063\u3068\u3082\u7C21\u5358\u306A\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u69CB\u9020\u306E\u4F8B\u3067\u3059\u3002 \u4F8B: ",(0,s.jsx)(n.code,{children:"[People]lastName:=Uppercase([People]lastName)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/ja/19/Concepts/branching",children:"\u5206\u5C90"})}),": \u5206\u5C90\u69CB\u9020\u306F\u3001\u6761\u4EF6\u3092\u30C6\u30B9\u30C8\u3057\u3001\u305D\u306E\u7D50\u679C\u306B\u57FA\u3065\u3044\u3066\u7570\u306A\u308B\u6D41\u308C\u306B\u30E1\u30BD\u30C3\u30C9\u3092\u5C0E\u304D\u307E\u3059\u3002 \u6761\u4EF6\u306F true \u307E\u305F\u306F false \u306B\u8A55\u4FA1\u3055\u308C\u308B\u30D6\u30FC\u30EB\u5F0F\u3067\u3059\u3002 ",(0,s.jsx)(n.code,{children:"If...Else...End if"})," \u69CB\u6587\u306F\u5206\u5C90\u69CB\u9020\u306E\u4E00\u4F8B\u3067\u3001\u51E6\u7406\u30D5\u30ED\u30FC\u3092\u4E8C\u3064\u306B\u5206\u5C90\u3057\u307E\u3059\u3002 ",(0,s.jsx)(n.code,{children:"Case of...Else...End case"})," \u69CB\u6587\u3082\u5206\u5C90\u69CB\u9020\u306E\u4E00\u3064\u3067\u3001\u51E6\u7406\u30D5\u30ED\u30FC\u3092\u3082\u3063\u3068\u305F\u304F\u3055\u3093\u5206\u5C90\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/ja/19/Concepts/looping",children:"\u30EB\u30FC\u30D7"})}),": \u30E1\u30BD\u30C3\u30C9\u306E\u4F5C\u6210\u306B\u3042\u305F\u3063\u3066\u3001\u4F55\u5EA6\u3082\u540C\u3058\u51E6\u7406\u3092\u7E70\u308A\u8FD4\u3059\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306B\u30014D \u306F\u4EE5\u4E0B\u306E\u30EB\u30FC\u30D7\u69CB\u9020\u3092\u5099\u3048\u3066\u3044\u307E\u3059:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"While...End while"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Repeat...Until"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"For...End for"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"For each...End for each"}),(0,s.jsx)(n.br,{})," \u30EB\u30FC\u30D7\u3092\u5236\u5FA1\u3059\u308B\u65B9\u6CD5\u306B\u306F\u3001\u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u308B\u307E\u3067\u30EB\u30FC\u30D7\u3059\u308B\u65B9\u6CD5\u3068\u3001\u6307\u5B9A\u3057\u305F\u56DE\u6570\u3060\u3051\u30EB\u30FC\u30D7\u3059\u308B\u65B9\u6CD5\u306E 2\u901A\u308A\u304C\u3042\u308A\u307E\u3059\u3002 \u5404\u30EB\u30FC\u30D7\u69CB\u9020\u306F\u3044\u305A\u308C\u306E\u65B9\u6CD5\u306B\u3082\u7528\u3044\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001",(0,s.jsx)(n.code,{children:"While"})," \u30EB\u30FC\u30D7\u3068 ",(0,s.jsx)(n.code,{children:"Repeat"})," \u30EB\u30FC\u30D7\u306F\u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u308B\u307E\u3067\u7E70\u308A\u8FD4\u3059\u5834\u5408\u306B\u3001",(0,s.jsx)(n.code,{children:"For"})," \u30EB\u30FC\u30D7\u306F\u6307\u5B9A\u3057\u305F\u56DE\u6570\u3060\u3051\u30EB\u30FC\u30D7\u3059\u308B\u5834\u5408\u306E\u5229\u7528\u306B\u9069\u5207\u3067\u3059\u3002  ",(0,s.jsx)(n.code,{children:"For each...End for each"})," \u30EB\u30FC\u30D7\u306F\u4E21\u65B9\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u30EB\u30FC\u30D7\u3059\u308B\u305F\u3081\u306B\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," 4D\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u69CB\u9020 (If/While/For/Caes of/Repeat/For each) \u3092512\u30EC\u30D9\u30EB\u307E\u3067\u5165\u308C\u5B50\u3067\u8A18\u8FF0\u3067\u304D\u307E\u3059\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return r}});var t=o(667294);let s={},c=t.createContext(s);function r(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);