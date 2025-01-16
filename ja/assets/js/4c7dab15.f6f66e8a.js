"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43620"],{984216:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/get-registered-clients","title":"GET REGISTERED CLIENTS","description":"GET REGISTERED CLIENTS ( clientList ; methods )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-registered-clients.md","sourceDirName":"commands-legacy","slug":"/commands/get-registered-clients","permalink":"/docs/ja/20-R7/commands/get-registered-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-registered-clients.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-registered-clients","title":"GET REGISTERED CLIENTS","slug":"/commands/get-registered-clients","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Execute on server","permalink":"/docs/ja/20-R7/commands/execute-on-server"},"next":{"title":"New process","permalink":"/docs/ja/20-R7/commands/new-process"}}'),d=s("785893"),r=s("250065");let i={id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,d.jsx)(n.em,{children:"clientList"})," ; ",(0,d.jsx)(n.em,{children:"methods"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"clientList"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u767B\u9332\u3055\u308C\u3066\u3044\u308B4D Client\u306E\u30EA\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"methods"}),(0,d.jsx)(n.td,{children:"Integer array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5B9F\u884C\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u306E\u30EA\u30B9\u30C8"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"GET REGISTERED CLIENTS \u30B3\u30DE\u30F3\u30C9\u306F2\u3064\u306E\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"clientLists"}),"\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"}),'\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066"\u767B\u9332\u3055\u308C\u305F"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u767B\u9332\u540D\u306E\u914D\u5217\u3068\u306A\u308A\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"methods"}),'\u306F\u3001\u5404\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E"\u30EF\u30FC\u30AF\u30ED\u30FC\u30C9"\u306E\u914D\u5217\u3068\u306A\u308A\u307E\u3059\u3002\u30EF\u30FC\u30AF\u30ED\u30FC\u30C9\u3068\u306F\u3001',(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/execute-on-client",title:"EXECUTE ON CLIENT",children:"EXECUTE ON CLIENT"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30B9\u30BF\u30C3\u30AF\u3055\u308C\u305F\u30014D Client\u304C\u3053\u308C\u304B\u3089\u5B9F\u884C\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u30E1\u30BD\u30C3\u30C9\u306E\u6570\u3067\u3059 (\u3088\u308A\u8A73\u3057\u3044\u60C5\u5831\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/execute-on-client",title:"EXECUTE ON CLIENT",children:"EXECUTE ON CLIENT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u51E6\u7406\u306B\u6210\u529F\u3059\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u3059\u3079\u3066\u306E\u767B\u9332\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u914D\u5217\u3068\u3001\u307E\u3060\u5B9F\u884C\u3055\u308C\u305A\u306B\u6B8B\u3063\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u6570\u306E\u914D\u5217\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($clients;0)\n\xa0ARRAY LONGINT($methods;0)\n\xa0GET REGISTERED CLIENTS($clients;$methods)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u51E6\u7406\u304C\u6210\u529F\u3059\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/register-client",children:"REGISTER CLIENT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"650"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);