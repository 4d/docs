"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43996"],{106776:function(s,n,e){e.r(n),e.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>h});var r=JSON.parse('{"id":"commands-legacy/verify-password-hash","title":"Verify password hash","description":"Verify password hash ( password ; hash ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/verify-password-hash.md","sourceDirName":"commands-legacy","slug":"/commands/verify-password-hash","permalink":"/docs/ja/commands/verify-password-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"verify-password-hash","title":"Verify password hash","slug":"/commands/verify-password-hash","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/ja/commands/stop-monitoring-activity"},"next":{"title":"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3","permalink":"/docs/ja/commands/theme/Transactions"}}'),d=e("785893"),t=e("250065");let a={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},h=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(s){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...s.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Verify password hash"})," ( ",(0,d.jsx)(n.em,{children:"password"})," ; ",(0,d.jsx)(n.em,{children:"hash"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"password"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E6\u30FC\u30B6\u30FC\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3002\u6700\u521D\u306E72\u6587\u5B57\u306E\u307F\u4F7F\u7528\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hash"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u30CF\u30C3\u30B7\u30E5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3068\u30CF\u30C3\u30B7\u30E5\u304C\u5408\u81F4\u3059\u308B\u5834\u5408\u306B\u306FTRUE\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFALSE\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Verify password hash"})," \u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u306F\u3001",(0,d.jsx)(n.em,{children:"hash"})," \u5F15\u6570\u3067\u6E21\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u5024\u304C\u3001",(0,d.jsx)(n.em,{children:"password"})," \u5F15\u6570\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3068\u5408\u81F4\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u691C\u8A3C\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u306F",(0,d.jsx)(n.em,{children:"password"})," \u5F15\u6570\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})," \u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u3067\u751F\u6210\u3055\u308C\u305F",(0,d.jsx)(n.em,{children:"hash"})," \u5F15\u6570\u306E\u30CF\u30C3\u30B7\u30E5\u3068\u6BD4\u8F03\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30A8\u30E9\u30FC\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"}),"  \u304A\u3088\u3073 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3067\u5206\u6790\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u756A\u53F7"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"850"}),(0,d.jsx)(n.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9-\u30CF\u30C3\u30B7\u30E5: \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3067\u3059\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"851"}),(0,d.jsx)(n.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9-\u30CF\u30C3\u30B7\u30E5: \u4E00\u8CAB\u6027\u306E\u30C1\u30A7\u30C3\u30AF\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306Fbcrypt \u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u307F\u3067\u3059\u3002\u30CF\u30C3\u30B7\u30E5\u304Cbcrypt \u3092\u4F7F\u7528\u3057\u3066\u751F\u6210\u3055\u308C\u305F\u3082\u306E\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u4F8B\u984C\u3067\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u6E08\u307F\u3067[Users] \u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D1\u30B9\u30EF\u30FC\u30C9\u30CF\u30C3\u30B7\u30E5\u3092\u3001\u65B0\u305F\u306B\u5165\u529B\u3055\u308C\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u3068\u691C\u8A3C\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Please enter your password")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Good password")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Password error")\n\xa0End if\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u4FDD\u5B58\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4FDD\u5B58\u3055\u308C\u308B\u306E\u306F\u30CF\u30C3\u30B7\u30E5\u306E\u307F\u3067\u3059\u3002\u30EA\u30E2\u30FC\u30C84D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30CF\u30C3\u30B7\u30E5\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5074\u3067\u751F\u6210\u3055\u308C\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u30024D \u306E\u4EE3\u308F\u308A\u306B\u4F8B\u3048\u3070JavaScript\u30D9\u30FC\u30B9\u306E(\u3042\u308B\u3044\u306F\u305D\u308C\u306B\u985E\u4F3C\u3057\u305F)\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u7684\u306A\u89B3\u70B9\u304B\u3089\u307F\u305F\u6700\u9069\u306A\u65B9\u6CD5\u306F\u3001\u30CF\u30C3\u30B7\u30E5\u3092\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u751F\u6210\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u7121\u8AD6\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u305F\u3081\u306BTLS \u6697\u53F7\u5316\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u4F7F\u7528\u3059\u308B\u3079\u304D\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u3067\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u901A\u4FE1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1534"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(s={}){let{wrapper:n}={...(0,t.a)(),...s.components};return n?(0,d.jsx)(n,{...s,children:(0,d.jsx)(l,{...s})}):l(s)}},250065:function(s,n,e){e.d(n,{Z:function(){return h},a:function(){return a}});var r=e(667294);let d={},t=r.createContext(d);function a(s){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof s?s(n):{...n,...s}},[n,s])}function h(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(d):s.components||d:a(s.components),r.createElement(t.Provider,{value:n},s.children)}}}]);