"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24942"],{939012:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/time","title":"Time","description":"Time ( timeValue ) : Time","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/time.md","sourceDirName":"commands-legacy","slug":"/commands/time","permalink":"/docs/ja/commands/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"time","title":"Time","slug":"/commands/time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tickcount","permalink":"/docs/ja/commands/tickcount"},"next":{"title":"Time string","permalink":"/docs/ja/commands/time-string"}}'),t=s("785893"),d=s("250065");let r={id:"time",title:"Time",slug:"/commands/time",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time"})," ( ",(0,t.jsx)(n.em,{children:"timeValue"})," ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeValue"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u6642\u9593\u3092\u8868\u3059\u6587\u5B57\u5217\u307E\u305F\u306F\u500D\u9577\u6574\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u6642\u9593"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["Time \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"timeValue"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u6642\u9593\u306B\u76F8\u5F53\u3059\u308B\u6642\u9593\u8868\u793A\u3092\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u30B7\u30B9\u30C6\u30E0\u306E\u8A00\u8A9E\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B4D\u6A19\u6E96\u306E\u6642\u9593\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8868\u3055\u308C\u305F\u6642\u523B\u3092\u542B\u3093\u3067\u3044\u308B\u6587\u5B57\u5217(\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/string",children:"String"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"00:00:00\u3092\u7D4C\u904E\u3057\u305F\u79D2\u6570\u3092\u8868\u3059\u500D\u9577\u6574\u6570"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,t.jsx)(n.em,{children:"timeValue"})," \u5F15\u6570\u306E\u5F0F\u304C\u672A\u5B9A\u7FA9\u306B\u8A55\u4FA1\u3055\u308C\u308B\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"Time"})," \u30B3\u30DE\u30F3\u30C9\u306F\u7A7A\u306E\u6587\u5B57\u5217(00:00:00)\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u5F0F\u306E\u7D50\u679C\u304C\u3001\u305F\u3068\u3048\u672A\u5B9A\u7FA9\u3067\u3042\u3063\u3066\u3082\u6642\u9593\u3068\u3057\u3066\u8FD4\u3055\u308C\u308B\u3053\u3068\u3092\u671F\u5F85\u3057\u305F\u3044\u5834\u5408\u306A\u3069\u306B\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u8B66\u544A\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u201C1:00 P.M. = 13 \u6642 0 \u5206\u201D\u3068\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,t.jsx)(n.p,{children:"\u3069\u3093\u306A\u6570\u5B57\u306E\u5024\u3082\u6642\u9593\u3068\u3057\u3066\u8868\u73FE\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0vTime:=Time(10000)\n\xa0\xa0//vTime \u306F 02:46:40\n\xa0vTime2:=Time((60*60)+(20*60)+5200)\n\xa0\xa0//vTime2 \u306F 02:46:40\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/array-time",children:"ARRAY TIME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/bool",children:"Bool"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/string",children:"String"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/time-string",children:"Time string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/timestamp",children:"Timestamp"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"179"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var i=s(667294);let t={},d=i.createContext(t);function r(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);