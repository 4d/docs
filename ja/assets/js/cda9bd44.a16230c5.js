"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91769"],{214009:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/wa-set-preference","title":"WA SET PREFERENCE","description":"WA SET PREFERENCE ( { ;} object ; selector ; value* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-set-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-preference","permalink":"/docs/ja/commands/wa-set-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-preference.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-set-preference","title":"WA SET PREFERENCE","slug":"/commands/wa-set-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PAGE CONTENT","permalink":"/docs/ja/commands/wa-set-page-content"},"next":{"title":"WA SET URL FILTERS","permalink":"/docs/ja/commands/wa-set-url-filters"}}'),d=s("785893"),t=s("250065");let c={id:"wa-set-preference",title:"WA SET PREFERENCE",slug:"/commands/wa-set-preference",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WA SET PREFERENCE"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"object"})," ; ",(0,d.jsx)(n.em,{children:"selector"})," ; ",(0,d.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D (\u6587\u5B57\u5217) \u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5909\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D ( * \u3092\u6307\u5B9A\u3057\u305F\u5834\u5408) \u307E\u305F\u306F\u3001\u5909\u6570 ( * \u3092\u7701\u7565\u3057\u305F\u5834\u5408)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selector"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u4FEE\u6B63\u3055\u308C\u308B\u74B0\u5883\u8A2D\u5B9A"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"value"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u74B0\u5883\u8A2D\u5B9A\u306E\u5024 (True = \u8A31\u53EF,  False = \u4E0D\u8A31\u53EF)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["WA SET PREFERENCE \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3068 ",(0,d.jsx)(n.em,{children:"object"})," \u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305FWeb\u30A8\u30EA\u30A2\u306B\u5BFE\u3057\u3066\u3001\u3055\u307E\u3056\u307E\u306A\u74B0\u5883\u8A2D\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F15\u6570",(0,d.jsx)(n.em,{children:"selector"}),"\u306B\u4FEE\u6B63\u3059\u308B\u74B0\u5883\u8A2D\u5B9A\u3092\u6E21\u3057\u3001\u5F15\u6570",(0,d.jsx)(n.em,{children:"value"}),"\u306B\u305D\u306E\u74B0\u5883\u8A2D\u5B9A\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u5F15\u6570",(0,d.jsx)(n.em,{children:"selector"})," \u306B\u306F\u3001 ",(0,d.jsx)(n.em,{children:"Web Area"})," \u30C6\u30FC\u30DE\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E1\u3064\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable contextual menu"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Web\u30A8\u30EA\u30A2\u5185\u3067\u6A19\u6E96\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u306E\u8868\u793A\u3092\u8A31\u53EF\u3059\u308B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024(\u3069\u306E\u30A8\u30F3\u30B8\u30F3\u3067\u3082) = False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable URL drop"}),(0,d.jsx)(n.td,{children:"101"}),(0,d.jsxs)(n.td,{children:["URL \u307E\u305F\u306F\u30D5\u30A1\u30A4\u30EB\u304CWeb \u30A8\u30EA\u30A2\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u308B\u5834\u5408\u306B\u3001\u30C9\u30ED\u30C3\u30D7\u30A2\u30A4\u30B3\u30F3\u3092\u5909\u66F4\u3057\u3001 ",(0,d.jsx)(n.em,{children:"On Window Opening Denied"})," \u30A4\u30D9\u30F3\u30C8\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024(\u3069\u306E\u30A8\u30F3\u30B8\u30F3\u3067\u3082) = False"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable Web inspector"}),(0,d.jsx)(n.td,{children:"100"}),(0,d.jsx)(n.td,{children:"Web \u30A8\u30EA\u30A2\u5185\u3067\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u306E\u8868\u793A\u3092\u8A31\u53EF\u3059\u308B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024(\u3069\u306E\u30A8\u30F3\u30B8\u30F3\u3067\u3082) = False"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5404\u74B0\u5883\u8A2D\u5B9A\u3092\u8D77\u52D5\u3059\u308B\u306B\u306F",(0,d.jsx)(n.em,{children:"value"})," \u5F15\u6570\u306B ",(0,d.jsx)(n.strong,{children:"True"})," \u3092\u6E21\u3057\u3001\u7121\u52B9\u306B\u3059\u308B\u306B\u306F",(0,d.jsx)(n.strong,{children:"False"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"'myarea' \u3068\u3044\u3046Web\u30A8\u30EA\u30A2\u5185\u3067URL\u30C9\u30ED\u30C3\u30D7\u3092\u6709\u52B9\u5316\u3057\u305F\u3044\u5834\u5408:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u5185\n\xa0WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Web\u30A8\u30EA\u30A2\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u5185\n\xa0If(FORM Event.code=On Window Opening Denied)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/wa-get-preference",children:"WA GET PREFERENCE"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1041"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);