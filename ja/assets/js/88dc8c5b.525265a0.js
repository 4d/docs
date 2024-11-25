"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91721"],{922803:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-group-access","title":"Get group access","description":"Get group access : Collection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-access","permalink":"/docs/ja/commands/get-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-group-access","title":"Get group access","slug":"/commands/get-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get default user","permalink":"/docs/ja/commands/get-default-user"},"next":{"title":"GET GROUP LIST","permalink":"/docs/ja/commands/get-group-list"}}'),c=s("785893"),r=s("250065");let o={id:"get-group-access",title:"Get group access",slug:"/commands/get-group-access",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function i(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Get group access"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"\u30E6\u30FC\u30B6\u30FC\u304C\u6240\u5C5E\u3059\u308B\u30B0\u30EB\u30FC\u30D7\u540D\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Get group access"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B4D \u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u6240\u5C5E\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002\u30E6\u30FC\u30B6\u30FC\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u5185\u306B\u304A\u3044\u3066\u3069\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u3082\u6240\u5C5E\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8FD4\u3055\u308C\u308B\u5024"})}),"\n",(0,c.jsx)(n.p,{children:"\u6587\u5B57\u5217\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3: 4D \u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u6240\u5C5E\u3057\u3066\u3044\u308B\u30B0\u30EB\u30FC\u30D7\u306E\u540D\u524D"}),"\n",(0,c.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.p,{children:'\u30AB\u30EC\u30F3\u30C8\u306E\u30E6\u30FC\u30B6\u30FC\u304C"plugins" \u30B0\u30EB\u30FC\u30D7\u306B\u6240\u5C5E\u3057\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0$groups:=Get group access\n\xa0If($groups.countValues("plugins")#0)\xa0// \u30E6\u30FC\u30B6\u30FC\u304Cplugins \u30B0\u30EB\u30FC\u30D7\u306B\u6240\u5C5E\u3057\u3066\u3044\u308B\n\xa0\xa0\xa0\xa0...\xa0//\n\xa0End if\n'})}),"\n",(0,c.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/ja/commands/set-group-access",children:"SET GROUP ACCESS"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(667294);let c={},r=t.createContext(c);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);