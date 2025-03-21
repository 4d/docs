"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76727"],{719176:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/copy-set","title":"COPY SET","description":"COPY SET ( srcSet ; dstSet )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-set.md","sourceDirName":"commands-legacy","slug":"/commands/copy-set","permalink":"/docs/ja/20-R7/commands/copy-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-set","title":"COPY SET","slug":"/commands/copy-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SET","permalink":"/docs/ja/20-R7/commands/clear-set"},"next":{"title":"CREATE EMPTY SET","permalink":"/docs/ja/20-R7/commands/create-empty-set"}}'),d=t("785893"),c=t("250065");let r={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"COPY SET"})," ( ",(0,d.jsx)(n.em,{children:"srcSet"})," ; ",(0,d.jsx)(n.em,{children:"dstSet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"srcSet"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30B3\u30D4\u30FC\u5143\u306E\u30BB\u30C3\u30C8\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dstSet"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30B3\u30D4\u30FC\u5148\u30BB\u30C3\u30C8\u540D"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["COPY SET \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"dstSet"}),"\u30BB\u30C3\u30C8\u306E\u4E2D\u306B",(0,d.jsx)(n.em,{children:"srcSet"}),"\u30BB\u30C3\u30C8\u306E\u5185\u5BB9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:['\u305D\u308C\u305E\u308C\u306E\u30BB\u30C3\u30C8\u3068\u3082\u30D7\u30ED\u30BB\u30B9\u30BB\u30C3\u30C8\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u30BB\u30C3\u30C8\u3001\u307E\u305F\u306F\u30ED\u30FC\u30AB\u30EB\u30BB\u30C3\u30C8\u304C\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3069\u3061\u3089\u3082\u30DE\u30B7\u30F3\u4E0A\u3067\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u72B6\u614B\u306B\u306A\u3063\u3066\u3044\u308B\u9650\u308A\u3001\u4E8C\u3064\u306E\u30BB\u30C3\u30C8\u306F\u540C\u3058\u578B\u3067\u3042\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093(\u4EE5\u4E0B\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002\u3053\u306E\u70B9\u306B\u3064\u3044\u3066\u306E\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001"',(0,d.jsx)(n.em,{children:"\u30BB\u30C3\u30C8\u306E\u53EF\u8996\u6027"}),'"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:'\u4EE5\u4E0B\u306E\u4F8B\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u306B\u304A\u3044\u3066\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u7BA1\u7406\u3055\u308C\u308B\u30ED\u30FC\u30AB\u30EB\u30BB\u30C3\u30C8"$SetA"\u3092\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u7BA1\u7406\u3055\u308C\u308B\u30D7\u30ED\u30BB\u30B9\u30BB\u30C3\u30C8"SetB"\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("$SetA";"SetB")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:'\u4EE5\u4E0B\u306E\u4F8B\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u306B\u304A\u3044\u3066\u3001\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u7BA1\u7406\u3055\u308C\u308B\u30D7\u30ED\u30BB\u30B9\u30BB\u30C3\u30C8"SetA"\u3092\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u7BA1\u7406\u3055\u308C\u308B\u30ED\u30FC\u30AB\u30EB\u30BB\u30C3\u30C8"$SetB"\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("SetA";"$SetB")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u30BB\u30C3\u30C8"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"600"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let d={},c=s.createContext(d);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);