"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19864"],{919597:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/font-style-list","title":"FONT STYLE LIST","description":"FONT STYLE LIST ( fontFamily ; fontStyleList ; fontNameList )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/font-style-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-style-list","permalink":"/docs/ja/commands/font-style-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-style-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"font-style-list","title":"FONT STYLE LIST","slug":"/commands/font-style-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT LIST","permalink":"/docs/ja/commands/font-list"},"next":{"title":"GET SYSTEM FORMAT","permalink":"/docs/ja/commands/get-system-format"}}'),l=t("785893"),d=t("250065");let i={id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},r=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"FONT STYLE LIST"})," ( ",(0,l.jsx)(e.em,{children:"fontFamily"})," ; ",(0,l.jsx)(e.em,{children:"fontStyleList"})," ; ",(0,l.jsx)(e.em,{children:"fontNameList"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"fontFamily"}),(0,l.jsx)(e.td,{children:"Text"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u540D"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"fontStyleList"}),(0,l.jsx)(e.td,{children:"Text array"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u306E\u4E00\u89A7"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"fontNameList"}),(0,l.jsx)(e.td,{children:"Text array"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u540D\u306E\u5B8C\u5168\u306A\u4E00\u89A7"})]})]})]}),"\n",(0,l.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"FONT STYLE LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(e.em,{children:"fontFamily"}),"\u5F15\u6570\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u306E\u4E00\u89A7\u3068\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30F3\u30C8\u540D\u306E\u5B8C\u5168\u306A\u4E00\u89A7\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u7279\u306B4D Write Pro\u30A8\u30EA\u30A2\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001\u30D5\u30A9\u30F3\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u3092\u7BA1\u7406\u3059\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u30C7\u30B6\u30A4\u30F3\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059(",(0,l.jsx)(e.em,{children:"4D Write Pro\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"}),")\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"fontFamily"}),"\u5F15\u6570\u306B\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u3068\u30D5\u30A9\u30F3\u30C8\u540D\u3092\u77E5\u308A\u305F\u3044\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"fontStyleList"}),"\u5F15\u6570\u306B\u306F\u3001",(0,l.jsx)(e.em,{children:"fontFamily"}),'\u5F15\u6570\u306E\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u4E00\u89A7\u3092\u53D7\u3051\u53D6\u308B\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u30B9\u30BF\u30A4\u30EB\u306F\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u540D\u524D\u3067\u8FD4\u3055\u308C\u307E\u3059(\u4F8B\u3048\u3070"Italic"\u8981\u7D20\u306F\u30B9\u30DA\u30A4\u30F3\u8A9E\u306E\u30B7\u30B9\u30C6\u30E0\u3067\u306F"It\xe1lico"\u3068\u8FD4\u3055\u308C\u307E\u3059)\u306E\u3067\u3001\u4F8B\u3048\u3070\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F"Style"\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u4E8B\u3082\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"fontNameList"}),"\u5F15\u6570\u306B\u306F\u3001",(0,l.jsx)(e.em,{children:"fontFamily"}),"\u5F15\u6570\u306E\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u540D\u306E\u5B8C\u5168\u306A\u4E00\u89A7\u3092\u53D7\u3051\u53D6\u308B\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002",(0,l.jsx)(e.em,{children:"fontStyleList"}),"\u914D\u5217\u3068\u306F\u7570\u306A\u308A\u3001",(0,l.jsx)(e.em,{children:"fontNameList"}),"\u914D\u5217\u306F\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u3066\u3044\u306A\u3044\u5024\u3001\u3064\u307E\u308A\u30B7\u30B9\u30C6\u30E0\u8A8D\u8A3C\u306B\u57FA\u3065\u3044\u305F\u30D5\u30A9\u30F3\u30C8\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u8FD4\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u540D\u306F\u30B7\u30B9\u30C6\u30E0\u8A00\u8A9E\u3068\u306F\u72EC\u7ACB\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u914D\u5217\u306E\u8981\u7D20\u306F\u3001",(0,l.jsx)(e.em,{children:"WP SET ATTRIBUTES"}),"\u30B3\u30DE\u30F3\u30C9\u306Ewk font4D Write Pro\u5C5E\u6027\u3067\u4F7F\u7528\u3055\u308C\u308B\u4E8B\u3092\u60F3\u5B9A\u3057\u3066\u3044\u308B\u6587\u5B57\u5217\u3067\u3059\u3002\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308C\u3070\u30014D Write Pro\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30D5\u30A9\u30F3\u30C8\u540D\u3092\u4FDD\u5B58\u3057\u3001\u305D\u306E\u5F8C\u3069\u306E\u3088\u3046\u306A\u30B7\u30B9\u30C6\u30E0\u8A00\u8A9E\u306E\u30DE\u30B7\u30F3\u3067\u958B\u3044\u3066\u3082\u30D5\u30A9\u30F3\u30C8\u306E\u554F\u984C\u3092\u5F15\u304D\u8D77\u3053\u3059\u4E8B\u306A\u304F\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"fontFamily"}),"\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u304C\u30DE\u30B7\u30F3\u4E0A\u306B\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u914D\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30DE\u30B7\u30F3\u4E0A\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,l.jsx)(e.a,{href:"/docs/ja/commands/font-list",children:"FONT LIST"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(e.p,{children:'"Verdana"\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC(\u4F7F\u7528\u53EF\u80FD\u3067\u3042\u308C\u3070)\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u9078\u629E\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY TEXT($aTfonts;0)\n\xa0ARRAY TEXT($aTStyles;0)\n\xa0ARRAY TEXT($aTnames;0)\n\xa0var $numStyle : Integer\n\xa0\n\xa0FONT LIST($aTfonts)\n\xa0$numStyle:=Find in array($aTfonts;"Verdana")\n\xa0If($numStyle#0)\n\xa0\xa0\xa0\xa0FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)\n\xa0End if\n\xa0\n\xa0\xa0//\u4E00\u4F8B\u3068\u3057\u3066\u3001\u8FD4\u3055\u308C\u308B\u914D\u5217\u306F\u4EE5\u4E0B\u306E\u69D8\u306A\u3082\u306E\u306B\u306A\u308A\u307E\u3059:\n\xa0\xa0//$aTStyles{1}="Normal"\n\xa0\xa0//$aTStyles{1}="Italic"\n\xa0\xa0//$aTStyles{1}="Bold"\n\xa0\xa0//$aTStyles{1}="Bold Italic"\n\xa0\n\xa0\xa0// $aTnames{1}="Verdana"\n\xa0\xa0// $aTnames{1}="Verdana Italic"\n\xa0\xa0// $aTnames{1}="Verdana Bold"\n\xa0\xa0// $aTnames{1}="Verdana Bold Italic"\n'})}),"\n",(0,l.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"/docs/ja/commands/font-list",children:"FONT LIST"})}),"\n",(0,l.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"1362"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},d=s.createContext(l);function i(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);