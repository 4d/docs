"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53757"],{10756:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-resource-name","title":"Get resource name","description":"Get resource name ( resType ; resID {; resFile} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-resource-name.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource-name","permalink":"/docs/ja/20-R7/commands/get-resource-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-resource-name","title":"Get resource name","slug":"/commands/get-resource-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RESOURCE","permalink":"/docs/ja/20-R7/commands/get-resource"},"next":{"title":"Get resource properties","permalink":"/docs/ja/20-R7/commands/get-resource-properties"}}'),t=s("785893"),d=s("250065");let c={id:"get-resource-name",title:"Get resource name",slug:"/commands/get-resource-name",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get resource name"})," ( ",(0,t.jsx)(n.em,{children:"resType"})," ; ",(0,t.jsx)(n.em,{children:"resID"})," {; ",(0,t.jsx)(n.em,{children:"resFile"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4\u6587\u5B57\u306E\u30EA\u30BD\u30FC\u30B9\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EA\u30BD\u30FC\u30B9ID\u756A\u53F7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resFile"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u958B\u304B\u308C\u3066\u3044\u308B\u5168\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30EA\u30BD\u30FC\u30B9\u306E\u540D\u524D"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get resource name"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"resType"}),"\u306E\u30BF\u30A4\u30D7\u3067",(0,t.jsx)(n.em,{children:"resID"}),"\u306EID\u3092\u6301\u3064\u30EA\u30BD\u30FC\u30B9\u306E\u540D\u524D\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"resFile"}),"\u306B\u6709\u52B9\u306A\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3068\u3001\u30EA\u30BD\u30FC\u30B9\u306F\u305D\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u307F\u691C\u7D22\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"resFile"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u3001\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u691C\u7D22\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30EA\u30BD\u30FC\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"Get resource name"}),"\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"513"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);