"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19664"],{437042:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/push-record","title":"PUSH RECORD","description":"PUSH RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/push-record.md","sourceDirName":"commands-legacy","slug":"/commands/push-record","permalink":"/docs/ja/commands/push-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpush-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"push-record","title":"PUSH RECORD","slug":"/commands/push-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP RECORD","permalink":"/docs/ja/commands/pop-record"},"next":{"title":"Record number","permalink":"/docs/ja/commands/record-number"}}'),d=s("785893"),t=s("250065");let c={id:"push-record",title:"PUSH RECORD",slug:"/commands/push-record",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"PUSH RECORD"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u30D7\u30C3\u30B7\u30E5\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["PUSH RECORD\u306F\u3001",(0,d.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9 (\u305D\u308C\u306B\u4ED8\u968F\u3059\u308B\u30B5\u30D6\u30EC\u30B3\u30FC\u30C9\u3082\u542B\u3081\u3066) \u3092\u3001\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u30B9\u30BF\u30C3\u30AF\u306B\u30D7\u30C3\u30B7\u30E5\u3057\u307E\u3059\u3002PUSH RECORD\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u304C\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3055\u308C\u308B\u524D\u3067\u3082\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5909\u66F4\u53EF\u80FD (\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u305F) \u306A\u30EC\u30B3\uFF0D\u30C9\u3092\u30D7\u30C3\u30B7\u30E5\u3057\u305F\u5834\u5408\u3001\u30DD\u30C3\u30D7\u3057\u3066\u30A2\u30F3\u30ED\uFF0D\u30C9\u3059\u308B\u307E\u3067\u3001\u305D\u306E\u30EC\u30B3\uFF0D\u30C9\u306F\u3059\u3079\u3066\u306E\u30E6\uFF0D\u30B6\u3084\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u5909\u66F4\u4E0D\u53EF (\u30ED\u30C3\u30AF) \u306E\u307E\u307E\u3067\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," 4D\u30D0\u30FC\u30B8\u30E7\u30F311\u3088\u308A\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001[Customer]\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u30EC\u30B3\u30FC\u30C9\u30B9\u30BF\u30C3\u30AF\u306B\u30D7\u30C3\u30B7\u30E5\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0PUSH RECORD([Customer])\xa0// \u9867\u5BA2\u30EC\u30B3\u30FC\u30C9\u3092\u30B9\u30BF\u30C3\u30AF\u306B\u30D7\u30C3\u30B7\u30E5\u3059\u308B\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/pop-record",children:"POP RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u30B9\u30BF\u30C3\u30AF\u306E\u4F7F\u7528"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"176"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);