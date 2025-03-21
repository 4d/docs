"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39111"],{315359:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/list-to-array","title":"LIST TO ARRAY","description":"LIST TO ARRAY ( list ; array {; itemRefs} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/list-to-array","permalink":"/docs/ja/20-R7/commands/list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"list-to-array","title":"LIST TO ARRAY","slug":"/commands/list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT IN ARRAY","permalink":"/docs/ja/20-R7/commands/insert-in-array"},"next":{"title":"LONGINT ARRAY FROM SELECTION","permalink":"/docs/ja/20-R7/commands/longint-array-from-selection"}}'),r=s("785893"),d=s("250065");let i={id:"list-to-array",title:"LIST TO ARRAY",slug:"/commands/list-to-array",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"LIST TO ARRAY"})," ( ",(0,r.jsx)(e.em,{children:"list"})," ; ",(0,r.jsx)(e.em,{children:"array"})," {; ",(0,r.jsx)(e.em,{children:"itemRefs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{children:"Text, Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u4E00\u756A\u76EE\u306E\u9805\u76EE\u3092\u30B3\u30D4\u30FC\u3059\u308B\u30B3\u30D4\u30FC\u5143\u306E\u30EA\u30B9\u30C8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"array"}),(0,r.jsx)(e.td,{children:"Array"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30B3\u30D4\u30FC\u5148\u306E\u914D\u5217"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"itemRefs"}),(0,r.jsx)(e.td,{children:"Array"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30EA\u30B9\u30C8\u9805\u76EE\u306E\u53C2\u7167\u756A\u53F7"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["LIST TO ARRAY \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"list"})," \u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u307E\u305F\u306F\u9078\u629E\u30EA\u30B9\u30C8\u306E\u7B2C\u4E00\u30EC\u30D9\u30EB\u306E\u9805\u76EE\u3067\u3001\u914D\u5217",(0,r.jsx)(e.em,{children:"array"}),"\u3092\u4F5C\u6210\u307E\u305F\u306F\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"list"})," \u5F15\u6570\u306B\u306F\u3001\u9078\u629E\u30EA\u30B9\u30C8\u306E\u540D\u524D(\u6587\u5B57\u5217)\u3001\u307E\u305F\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167(",(0,r.jsx)(e.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),")\u3092\u6E21\u3059\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30D4\u30FC\u5148\u306E\u914D\u5217\u3092\u6587\u5B57\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u578B\u3068\u3057\u3066\u4E8B\u524D\u306B\u8A2D\u5B9A\u3092\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u5834\u5408\u3001 LIST TO ARRAY \u306F\u81EA\u52D5\u7684\u306B\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30E2\u30FC\u30C9\u3067\u306F\u3001",(0,r.jsx)(e.em,{children:"array"})," \u5F15\u6570\u306E\u914D\u5217\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u578B\u3092\u5909\u63DB\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,r.jsx)(e.em,{children:"itemRefs"}),"\u5F15\u6570(\u6570\u5024\u914D\u5217)\u306B\u306F\u3001\u30EA\u30B9\u30C8\u9805\u76EE\u306E\u53C2\u7167\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5F15\u304D\u7D9A\u304D LIST TO ARRAY \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u968E\u5C64\u30EA\u30B9\u30C8\u306E\u7B2C\u4E00\u30EC\u30D9\u30EB\u8981\u7D20\u306B\u57FA\u3065\u304F\u914D\u5217\u3092\u69CB\u7BC9\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5B50\u9805\u76EE\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002\u968E\u5C64\u30EA\u30B9\u30C8\u3067\u4F5C\u696D\u3059\u308B\u5834\u5408\u3001\u968E\u5C64\u30EA\u30B9\u30C8\u30B3\u30DE\u30F3\u30C9\u3001\u7279\u306B ",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/load-list",children:"Load list"})," \u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30EA\u30B9\u30C8Regions\u306E\u9805\u76EE\u3092\u914D\u5217",(0,r.jsx)(e.em,{children:"atRegions"}),"\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0LIST TO ARRAY("Regions";atRegions)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u968E\u5C64\u30EA\u30B9\u30C8\u306B\u3064\u3044\u3066\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0myList2:=New list\n\xa0APPEND TO LIST(myList2;"Scotland";1)\n\xa0APPEND TO LIST(myList2;"England";2)\n\xa0APPEND TO LIST(myList2;"Wales";3)\n\xa0myList1:=New list\n\xa0APPEND TO LIST(myList1;"France";1)\n\xa0APPEND TO LIST(myList1;"Germany";2)\n\xa0APPEND TO LIST(myList1;"Spain";3)\n\xa0APPEND TO LIST(myList1;"Great Britain";4;myList2;True)\n\xa0APPEND TO LIST(myList1;"Portugal";5)\n\xa0APPEND TO LIST(myList1;"Belgium";6)\n\xa0APPEND TO LIST(myList1;"Italy";7)\n\xa0APPEND TO LIST(myList1;"Netherlands";8)\n\xa0APPEND TO LIST(myList1;"Ireland";9)\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30EA\u30B9\u30C8\u306F\u4EE5\u4E0B\u306E\u69D8\u306B\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(621300).Z+"",width:"223",height:"258"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308C\u306B\u5BFE\u3057\u4EE5\u4E0B\u306E\u5BA3\u8A00\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0LIST TO ARRAY(myList1;$MyArray)\n"})}),"\n",(0,r.jsx)(e.p,{children:"......\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u69D8\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$MyArray{1}="France"\n\xa0$MyArray{2}="Germany"\n\xa0$MyArray{3}="Spain"\n\xa0$MyArray{4}="Great Britain"\n\xa0$MyArray{5}="Portugal"\n\xa0...\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/array-to-list",children:"ARRAY TO LIST"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/load-list",children:"Load list"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"288"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},621300:function(n,e,s){s.d(e,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);