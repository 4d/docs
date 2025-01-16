"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28956"],{677048:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/get-field-properties","title":"GET FIELD PROPERTIES","description":"GET FIELD PROPERTIES ( fieldPtr\xa0|\xa0tableNum {; fieldNum}; fieldType {; fieldLength {; indexed {; unique {; invisible}}}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-properties","permalink":"/docs/ja/20-R7/commands/get-field-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-properties","title":"GET FIELD PROPERTIES","slug":"/commands/get-field-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD ENTRY PROPERTIES","permalink":"/docs/ja/20-R7/commands/get-field-entry-properties"},"next":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/ja/20-R7/commands/get-missing-table-names"}}'),i=s("785893"),l=s("250065");let r={id:"get-field-properties",title:"GET FIELD PROPERTIES",slug:"/commands/get-field-properties",displayed_sidebar:"docs"},t=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," ( fieldPtr\xa0|\xa0tableNum {; ",(0,i.jsx)(n.em,{children:"fieldNum"}),"}; ",(0,i.jsx)(n.em,{children:"fieldType"})," {; ",(0,i.jsx)(n.em,{children:"fieldLength"})," {; ",(0,i.jsx)(n.em,{children:"indexed"})," {; ",(0,i.jsx)(n.em,{children:"unique"})," {; ",(0,i.jsx)(n.em,{children:"invisible"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldPtr\xa0|\xa0tableNum"}),(0,i.jsx)(n.td,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC, \u500D\u9577\u6574\u6570"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3001\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldType"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30BF\u30A4\u30D7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldLength"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"\u6587\u5B57\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5834\u5408\u3001\u9577\u3055"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexed"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u304D\u3001False = \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306A\u3057"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unique"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = \u91CD\u8907\u4E0D\u53EF\u3001 False = \u91CD\u8907\u3042\u308A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"invisible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = \u975E\u8868\u793A\u3001 False = \u8868\u793A"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["GET FIELD PROPERTIES\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"tableNum"}),"\u3068",(0,i.jsx)(n.em,{children:"fieldNum"}),"\u307E\u305F\u306F",(0,i.jsx)(n.em,{children:"fieldPtr"}),"\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u5F15\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5F15\u6570",(0,i.jsx)(n.em,{children:"tableNum"}),"\u3068",(0,i.jsx)(n.em,{children:"fieldNum"}),"\u3001\u307E\u305F\u306F"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"fieldPtr"}),"\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u4EE5\u4E0B\u306E\u60C5\u5831\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"fieldType"}),"\u306B\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30BF\u30A4\u30D7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5B9A\u7FA9\u6E08\u307F\u306E\u5B9A\u6570\u5024(",(0,i.jsx)(n.em,{children:"Field and Variable Types"})," \u30C6\u30FC\u30DE)\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(n.br,{}),"\n| \u5B9A\u6570                 | \u578B    | \u5024  |",(0,i.jsx)(n.br,{}),"\n| ------------------ | ---- | -- |",(0,i.jsx)(n.br,{}),"\n| Is alpha field     | \u500D\u9577\u6574\u6570 | 0  |",(0,i.jsx)(n.br,{}),"\n| Is BLOB            | \u500D\u9577\u6574\u6570 | 30 |",(0,i.jsx)(n.br,{}),"\n| Is Boolean         | \u500D\u9577\u6574\u6570 | 6  |",(0,i.jsx)(n.br,{}),"\n| Is date            | \u500D\u9577\u6574\u6570 | 4  |",(0,i.jsx)(n.br,{}),"\n| Is float           | \u500D\u9577\u6574\u6570 | 35 |",(0,i.jsx)(n.br,{}),"\n| Is integer         | \u500D\u9577\u6574\u6570 | 8  |",(0,i.jsx)(n.br,{}),"\n| Is integer 64 bits | \u500D\u9577\u6574\u6570 | 25 |",(0,i.jsx)(n.br,{}),"\n| Is longint         | \u500D\u9577\u6574\u6570 | 9  |",(0,i.jsx)(n.br,{}),"\n| Is object          | \u500D\u9577\u6574\u6570 | 38 |",(0,i.jsx)(n.br,{}),"\n| Is picture         | \u500D\u9577\u6574\u6570 | 3  |",(0,i.jsx)(n.br,{}),"\n| Is real            | \u500D\u9577\u6574\u6570 | 1  |",(0,i.jsx)(n.br,{}),"\n| Is subtable        | \u500D\u9577\u6574\u6570 | 7  |",(0,i.jsx)(n.br,{}),"\n| Is text            | \u500D\u9577\u6574\u6570 | 2  |",(0,i.jsx)(n.br,{}),"\n| Is time            | \u500D\u9577\u6574\u6570 | 11 |"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F15\u6570",(0,i.jsx)(n.em,{children:"fieldLen"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u304C\u6587\u5B57 (\u3064\u307E\u308A\u3001",(0,i.jsx)(n.em,{children:"fieldType=Is Alpha Field"}),") \u306E\u5834\u5408\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u9577\u3055\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u306B\u5BFE\u3057\u3066\u306F\u3001",(0,i.jsx)(n.em,{children:"fieldLen"}),"\u306E\u5024\u306F\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F15\u6570",(0,i.jsx)(n.em,{children:"indexed"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306FFalse\u304C\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306FTrue\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(n.em,{children:"indexed"}),"\u306E\u5024\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u304C\u6587\u5B57\u3001\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u3001\u65E5\u4ED8\u3001\u6642\u9593\u3001\u30D6\u30FC\u30EB\u306E\u5834\u5408\u306B\u3060\u3051\u610F\u5473\u3092\u6301\u3061\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F15\u6570",(0,i.jsx)(n.em,{children:"unique"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u91CD\u8907\u4E0D\u53EF\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306FTrue\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u3068\u304D\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F15\u6570",(0,i.jsx)(n.em,{children:"invisible"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u975E\u8868\u793A\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306FTrue\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u3068\u304D\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u975E\u8868\u793A\u8A2D\u5B9A\u306F4D\u6A19\u6E96\u306E\uFF08\u30E9\u30D9\u30EB\u3084\u30C1\u30E3\u30FC\u30C8\u306A\u3069\uFF09\u30A8\u30C7\u30A3\u30BF\u3067\u6240\u5B9A\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u96A0\u3059\u305F\u3081\u306B\u4F7F\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u5909\u6570",(0,i.jsx)(n.em,{children:"vType"}),"\u3001",(0,i.jsx)(n.em,{children:"vLength"}),"\u3001",(0,i.jsx)(n.em,{children:"vIndex"}),"\u3001",(0,i.jsx)(n.em,{children:"vUnique"}),"\u3001",(0,i.jsx)(n.em,{children:"vInvisible"}),"\u306B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7=1\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7=3\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5C5E\u6027\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(1;3;vType;vLength;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u5909\u6570",(0,i.jsx)(n.em,{children:"vType"}),"\u3001",(0,i.jsx)(n.em,{children:"vLength"}),"\u3001",(0,i.jsx)(n.em,{children:"vIndex"}),"\u3001",(0,i.jsx)(n.em,{children:"vUnique"}),"\u3001",(0,i.jsx)(n.em,{children:"vInvisible"}),"\u306B[Table3]Field2\u3068\u3044\u3046\u540D\u524D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5C5E\u6027\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(->[Table3]Field2;vType;vLength;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/field",children:"Field"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/field-name",children:"Field name"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-index",children:"SET INDEX"})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"258"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return r}});var d=s(667294);let i={},l=d.createContext(i);function r(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);