"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56699"],{124060:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/method-get-names","title":"METHOD GET NAMES","description":"METHOD GET NAMES ( arrNames {; filter}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/method-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-names","permalink":"/docs/ja/commands/method-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-names.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"method-get-names","title":"METHOD GET NAMES","slug":"/commands/method-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/ja/commands/method-get-modification-date"},"next":{"title":"METHOD Get path","permalink":"/docs/ja/commands/method-get-path"}}'),d=t("785893"),r=t("250065");let i={id:"method-get-names",title:"METHOD GET NAMES",slug:"/commands/method-get-names",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET NAMES"})," ( ",(0,d.jsx)(n.em,{children:"arrNames"})," {; ",(0,d.jsx)(n.em,{children:"filter"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"arrNames"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u540D\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"filter"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u540D\u524D\u30D5\u30A3\u30EB\u30BF\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u6642 = \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9069\u7528\u3055\u308C\u308B (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u3067\u306F\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET NAMES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E2D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u3092",(0,d.jsx)(n.em,{children:"arrNames"}),"\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3059\u3079\u3066\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u30EA\u30B9\u30C8\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"filter"}),' \u5F15\u6570\u306B\u6BD4\u8F03\u6587\u5B57\u5217\u3092\u6E21\u3057\u3066\u3001\u3053\u306E\u30EA\u30B9\u30C8\u3092\u7D5E\u308A\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u30B3\u30DE\u30F3\u30C9\u306F\u540D\u524D\u304C\u30D5\u30A3\u30EB\u30BF\u30FC\u306B\u30DE\u30C3\u30C1\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002"@"\u3092\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u547C\u3070\u308C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u914D\u5217\u306B\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30B4\u30DF\u7BB1\u5185\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u542B\u307E\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u5178\u578B\u7684\u306A\u5229\u7528\u4F8B:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u30EA\u30B9\u30C8\u3059\u308B\n\xa0METHOD GET NAMES(t_Names)\n\xa0\n\xa0\xa0// \u7279\u5B9A\u306E\u6587\u5B57\u304B\u3089\u59CB\u307E\u308B\u30E1\u30BD\u30C3\u30C9\u306E\u307F\u3092\u30EA\u30B9\u30C8\u3059\u308B\n\xa0METHOD GET NAMES(t_Names;"web_@")\n\xa0\n\xa0\xa0// \u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u3067\u3001\u7279\u5B9A\u306E\u6587\u5B57\u304B\u3089\u59CB\u307E\u308B\u30E1\u30BD\u30C3\u30C9\u306E\u307F\u3092\u30EA\u30B9\u30C8\u3059\u308B\n\xa0METHOD GET NAMES(t_Names;"web_@";*)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1166"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);