"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72314"],{305092:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-pointer","title":"Get pointer","description":"Get pointer ( varName ) : Pointer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/get-pointer","permalink":"/docs/ja/20-R7/commands/get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pointer","title":"Get pointer","slug":"/commands/get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD","permalink":"/docs/ja/20-R7/commands/execute-method"},"next":{"title":"INVOKE ACTION","permalink":"/docs/ja/20-R7/commands/invoke-action"}}'),s=t("785893"),d=t("250065");let i={id:"get-pointer",title:"Get pointer",slug:"/commands/get-pointer",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get pointer"})," ( ",(0,s.jsx)(n.em,{children:"varName"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"varName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u540D\u524D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get pointer"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"varName"}),"\u306B\u6E21\u3057\u305F\u540D\u524D\u3092\u6301\u3064\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/field",children:"Field"}),"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/table",children:"Table"}),"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," ",(0,s.jsx)(n.strong,{children:"Get pointer"})," \u306F\u3001\u4F8B\u3048\u3070",(0,s.jsx)(n.em,{children:'ArrName+"{3}"'})," \u306E\u3088\u3046\u306A\u5F0F\u3084\u3001\u4E8C\u6B21\u5143\u914D\u5217\u8981\u7D20 (",(0,s.jsx)(n.em,{children:'ArrName+"{3}{5}"'}),") \u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n\u3057\u304B\u3057\u306A\u304C\u3089\u5909\u6570\u8981\u7D20\u53C2\u7167(",(0,s.jsx)(n.em,{children:'ArrName+"{myVar}"'}),") \u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(n.p,{children:"\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30015 x 10\u306E\u30B0\u30EA\u30C3\u30C9\u306E\u5165\u529B\u53EF\u80FD\u306A\u5909\u6570\u3092\u4F5C\u6210\u3057\u3001\u305D\u308C\u305E\u308Cv1, v2... v50\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u3092\u3059\u3079\u3066\u521D\u671F\u5316\u3059\u308B\u306B\u306F\u6B21\u306E\u3088\u3046\u306B\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0For($vlVar;1;50)\n\xa0\xa0\xa0\xa0$vpVar:=Get pointer("v"+String($vlVar))\n\xa0\xa0\xa0\xa0$vpVar->:=""\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(n.p,{children:"2\u6B21\u5143\u914D\u5217\u306E\u8981\u7D20\u306B\u5BFE\u3057\u3066\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$pt:=Get pointer("a{1}{2}")\n\xa0\xa0//$pt=->a{1}{2}\n\xa0$pt2:=Get pointer("atCities"+"{2}{6}")\n\xa0\xa0//$pt2=->atCities{2}{6}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/table",children:"Table"})]}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"304"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);