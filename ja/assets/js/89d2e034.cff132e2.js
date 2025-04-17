"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70"],{467771:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-field","title":"VP SET FIELD","description":"VP SET FIELD ( rangeObj Pointer { ; formatPattern : Text } )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-set-field.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-field","permalink":"/docs/ja/ViewPro/commands/vp-set-field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-field.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-field","title":"VP SET FIELD"},"sidebar":"docs","previous":{"title":"VP SET DEFAULT STYLE","permalink":"/docs/ja/ViewPro/commands/vp-set-default-style"},"next":{"title":"VP SET FORMULA","permalink":"/docs/ja/ViewPro/commands/vp-set-formula"}}'),s=t("785893"),d=t("250065");let i={id:"vp-set-field",title:"VP SET FIELD"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET FIELD"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"field"})," : Pointer { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u4EEE\u60F3\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u53C2\u7167"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP SET FIELD"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30EB\u30EC\u30F3\u30B8\u306B\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4EEE\u60F3\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5024\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u8907\u6570\u306E\u30BB\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u305D\u308C\u305E\u308C\u306E\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u7E70\u308A\u8FD4\u3057\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"field"})," \u5F15\u6570\u306F\u3001",(0,s.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u3089\u308C\u308B 4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/formulas#%E4%BB%AE%E6%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E5%8F%82%E7%85%A7",children:"\u4EEE\u60F3\u30D5\u30A3\u30FC\u30EB\u30C9"})," \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30D0\u30FC\u306B\u306F\u3001",(0,s.jsx)(n.em,{children:"field"})," \u306E\u4EEE\u60F3\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u540D\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u306B\u542B\u307E\u308C\u308B\u30BB\u30EB\u306B\u65E2\u5B58\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u305D\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306F ",(0,s.jsx)(n.em,{children:"field"})," \u3067\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"formatPattern"})," \u5F15\u6570\u306F\u3001",(0,s.jsx)(n.em,{children:"field"})," \u5F15\u6570\u306B\u5BFE\u3059\u308B\u30D1\u30BF\u30FC\u30F3\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u6709\u52B9\u306A ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30AB\u30B9\u30BF\u30E0\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);