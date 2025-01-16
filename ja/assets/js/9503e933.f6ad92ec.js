"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90998"],{511032:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/split-string","title":"Split string","description":"Split string ( stringToSplit ; separator {; options} ) : Collection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/split-string.md","sourceDirName":"commands-legacy","slug":"/commands/split-string","permalink":"/docs/ja/20-R7/commands/split-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsplit-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"split-string","title":"Split string","slug":"/commands/split-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Replace string","permalink":"/docs/ja/20-R7/commands/replace-string"},"next":{"title":"String","permalink":"/docs/ja/20-R7/commands/string"}}'),i=t("785893"),r=t("250065");let l={id:"split-string",title:"Split string",slug:"/commands/split-string",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Split string"})," ( ",(0,i.jsx)(e.em,{children:"stringToSplit"})," ; ",(0,i.jsx)(e.em,{children:"separator"})," {; ",(0,i.jsx)(e.em,{children:"options"}),"} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"stringToSplit"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u6587\u5B57\u5217\u306E\u5024"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"separator"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:'stringToSplit\u3092\u5206\u5272\u3059\u308B\u6587\u5B57\u5217\u3002\u7A7A\u306E\u6587\u5B57\u5217("")\u306E\u5834\u5408\u306B\u306F\u3001stringToSplit\u30921\u6587\u5B57\u305A\u3064\u306B\u5206\u5272\u3057\u307E\u3059'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"options"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u7A7A\u306E\u6587\u5B57\u5217\u3068\u7A7A\u767D\u306B\u95A2\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(e.td,{children:"Collection"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u5206\u5272\u3057\u305F\u6587\u5B57\u5217\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Split string"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(e.em,{children:"stringToSplit"})," \u5F15\u6570\u306E\u6587\u5B57\u5217\u3092\u3001",(0,i.jsx)(e.em,{children:"separator"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u533A\u5207\u308A\u6587\u5B57\u306B\u3088\u3063\u3066\u5206\u5272\u3057\u305F\u6587\u5B57\u5217\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002\u8FD4\u3055\u308C\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u6587\u5B57\u5217\u306B\u306F\u3001",(0,i.jsx)(e.em,{children:"separator"})," \u5F15\u6570\u306E\u533A\u5207\u308A\u6587\u5B57\u81EA\u8EAB\u306F\u542B\u307E\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"stringToSplit"})," \u5F15\u6570\u306E\u6587\u5B57\u5217\u5185\u306B",(0,i.jsx)(e.em,{children:"separator"})," \u5F15\u6570\u306E\u533A\u5207\u308A\u6587\u5B57\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"Split string"})," \u306F",(0,i.jsx)(e.em,{children:"stringToSplit"})," \u5F15\u6570\u3092\u5358\u4E00\u306E\u8981\u7D20\u3068\u3057\u3066\u683C\u7D0D\u3059\u308B\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,i.jsx)(e.em,{children:"separator"})," \u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"Split string"})," \u306F",(0,i.jsx)(e.em,{children:"stringToSplit"})," \u5F15\u6570\u30921\u6587\u5B57\u305A\u3064\u306B\u5206\u5272\u3057\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u306B\u306F\u3001",(0,i.jsx)(e.em,{children:"Strings"})," \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u4E00\u3064\u3001\u3042\u308B\u3044\u306F\u305D\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u5024"}),(0,i.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sk ignore empty strings"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u7D50\u679C\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u7A7A\u306E\u6587\u5B57\u5217\u3092\u524A\u9664\u3059\u308B(\u7A7A\u306E\u6587\u5B57\u5217\u3092\u7121\u8996)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sk trim spaces"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u5206\u5272\u3057\u305F\u6587\u5B57\u5217\u306E\u5148\u982D\u3068\u6700\u5F8C\u306B\u3042\u308B\u7A7A\u767D\u6587\u5B57(\u30B9\u30DA\u30FC\u30B9)\u306F\u5207\u308A\u53D6\u308B"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0var $vt : Text\n\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0\n\xa0$vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"\n\xa0$col:=Split string($vt;";")\xa0//["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]\n\xa0$col:=Split string($vt;";";sk ignore empty strings)\xa0//["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]\n\xa0$col:=Split string($vt;";";sk ignore empty strings+sk trim spaces)\xa0//["John","Doe","120 jefferson st.","Riverside","NJ","08075"]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"separator"})," \u5F15\u6570\u306B\u306F\u8907\u6570\u6587\u5B57\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0var $vt : Text\n\xa0var $col : Collection\n\xa0$vt:="NameSmithage40"\n\xa0$col:=Split string($vt;"")\n\xa0\xa0//$col=["Name","Smith","age","40"]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/text-to-array",children:"TEXT TO ARRAY"})}),"\n",(0,i.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(e.td,{children:"1554"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);