"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54510"],{526007:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/method-get-folders","title":"METHOD GET FOLDERS","description":"METHOD GET FOLDERS ( arrNames {; filter}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-folders.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-folders","permalink":"/docs/ja/commands/method-get-folders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-folders.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-folders","title":"METHOD GET FOLDERS","slug":"/commands/method-get-folders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET COMMENTS","permalink":"/docs/ja/commands/method-get-comments"},"next":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/ja/commands/method-get-modification-date"}}'),d=t("785893"),r=t("250065");let i={id:"method-get-folders",title:"METHOD GET FOLDERS",slug:"/commands/method-get-folders",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",em:"em",h4:"h4",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET FOLDERS"})," ( ",(0,d.jsx)(n.em,{children:"arrNames"})," {; ",(0,d.jsx)(n.em,{children:"filter"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"arrNames"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"filter"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u540D\u524D\u30D5\u30A3\u30EB\u30BF\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u6642 = \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9069\u7528\u3055\u308C\u308B (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u3067\u306F\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET FOLDERS"}),"\u30B3\u30DE\u30F3\u30C9\u306F4D\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u306B\u4F5C\u6210\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u3092",(0,d.jsx)(n.em,{children:"arrNames"}),"\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(983775).Z+"",width:"412",height:"199"})}),"\n",(0,d.jsx)(n.p,{children:"\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u306F\u30E6\u30CB\u30FC\u30AF\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u914D\u5217\u306B\u968E\u5C64\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"filter"}),'\u5F15\u6570\u306B\u6BD4\u8F03\u6587\u5B57\u5217\u3092\u6E21\u3057\u3066\u3001\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u30EA\u30B9\u30C8\u3092\u7D5E\u308A\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u30B3\u30DE\u30F3\u30C9\u306F\u540D\u524D\u304C\u30D5\u30A3\u30EB\u30BF\u30FC\u306B\u30DE\u30C3\u30C1\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002"@"\u3092\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068',(0,d.jsx)(n.em,{children:"filter"}),"\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u547C\u3070\u308C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u914D\u5217\u306B\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/method-get-paths",children:"METHOD GET PATHS"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1206"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},983775:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict837666.en-9c130d4be6c1369318d9aa15a0073fc3.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);