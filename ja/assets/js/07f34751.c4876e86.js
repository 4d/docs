"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88553"],{908129:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/unregister-client","title":"UNREGISTER CLIENT","description":"UNREGISTER CLIENT","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/unregister-client.md","sourceDirName":"commands-legacy","slug":"/commands/unregister-client","permalink":"/docs/ja/commands/unregister-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funregister-client.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"unregister-client","title":"UNREGISTER CLIENT","slug":"/commands/unregister-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session storage","permalink":"/docs/ja/commands/session-storage"},"next":{"title":"\u30AF\u30A8\u30EA","permalink":"/docs/ja/commands/theme/Queries"}}'),r=t("785893"),i=t("250065");let d={id:"unregister-client",title:"UNREGISTER CLIENT",slug:"/commands/unregister-client",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"UNREGISTER CLIENT"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["UNREGISTER CLIENT \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u306E\u767B\u9332\u3092\u89E3\u9664\u3057\u307E\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u3082\u306E\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," 4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u3001\u30E6\u30FC\u30B6\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3059\u308B\u3068\u81EA\u52D5\u7684\u306B\u767B\u9332\u3092\u89E3\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u524D\u3082\u3063\u3066\u767B\u9332\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u308A\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u306E4D\u3067\u5B9F\u884C\u3057\u3066\u3082\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u306A\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u767B\u9332\u304C\u6B63\u3057\u304F\u89E3\u9664\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u306A\u308A\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u306A\u3044\u3068OK\u306F0\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u6B63\u3057\u304F\u767B\u9332\u89E3\u9664\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/register-client",children:"REGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"649"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);