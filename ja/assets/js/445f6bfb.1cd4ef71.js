"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48887"],{743227:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/change-password","title":"CHANGE PASSWORD","description":"CHANGE PASSWORD ( password )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/change-password.md","sourceDirName":"commands-legacy","slug":"/commands/change-password","permalink":"/docs/ja/20-R8/commands/change-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-password.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"change-password","title":"CHANGE PASSWORD","slug":"/commands/change-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE CURRENT USER","permalink":"/docs/ja/20-R8/commands/change-current-user"},"next":{"title":"Current user","permalink":"/docs/ja/20-R8/commands/current-user"}}'),t=s("785893"),d=s("250065");let c={id:"change-password",title:"CHANGE PASSWORD",slug:"/commands/change-password",displayed_sidebar:"docs"},a=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"CHANGE PASSWORD"})," ( ",(0,t.jsx)(e.em,{children:"password"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["CHANGE PASSWORD \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u3001\u5F15\u6570 ",(0,t.jsx)(e.em,{children:"password"})," \u306B\u6E21\u3057\u305F\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8B66\u544A:"})," \u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u306F\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u304C\u533A\u5225\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E6\u30FC\u30B6\u304C\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5909\u66F4\u3092\u884C\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0CHANGE CURRENT USER\xa0//\u30E6\u30FC\u30B6\u306B\u30D1\u30B9\u30EF\u30FC\u30C9\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3059\u308B\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$pw1:=Request("Enter new password for "+Current user)\n\xa0\xa0//\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u5C11\u306A\u304F\u3068\u30825\u6587\u5B57\u4EE5\u4E0A\u306B\u3059\u308B\n\xa0\xa0\xa0\xa0If(((OK=1)&($pw1#""))&(Length($pw1)>5))\n\xa0\xa0//\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u78BA\u306B\u5165\u529B\u3055\u308C\u305F\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pw2:=Request("Enter password again")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((OK=1)&($pw1=$pw2))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE PASSWORD($pw2)\xa0//\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5909\u66F4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-set-font",children:"OBJECT SET FONT"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"186"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);