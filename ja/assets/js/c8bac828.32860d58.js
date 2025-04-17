"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17380"],{516354:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","description":"DISTINCT ATTRIBUTE PATHS ( objectField ; pathArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/distinct-attribute-paths.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-paths","permalink":"/docs/ja/20-R8/commands/distinct-attribute-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-paths.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","slug":"/commands/distinct-attribute-paths","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM ARRAY","permalink":"/docs/ja/20-R8/commands/delete-from-array"},"next":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/ja/20-R8/commands/distinct-attribute-values"}}'),d=t("785893"),r=t("250065");let i={id:"distinct-attribute-paths",title:"DISTINCT ATTRIBUTE PATHS",slug:"/commands/distinct-attribute-paths",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," ( ",(0,d.jsx)(e.em,{children:"objectField"})," ; ",(0,d.jsx)(e.em,{children:"pathArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"objectField"}),(0,d.jsx)(e.td,{children:"Field"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"pathArray"}),(0,d.jsx)(e.td,{children:"Text array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u91CD\u8907\u3057\u306A\u3044\u30D1\u30B9\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3055\u305B\u308B\u914D\u5217"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"objectField"})," \u306B\u53D7\u3051\u6E21\u3057\u305F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u3064\u3044\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u6240\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u3001\u540C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u691C\u51FA\u3055\u308C\u308B\u3001\u91CD\u8907\u3057\u306A\u3044\u30D1\u30B9\u306E\u30EA\u30B9\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002\u306B\u53D7\u3051\u6E21\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"pathArray"}),' \u306F\u5B9F\u884C\u5F8C\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u304B\u3089\u691C\u51FA\u3055\u308C\u305F\u91CD\u8907\u3057\u306A\u3044\u30D1\u30B9\u306E\u6570\u3068\u540C\u3058\u8981\u7D20\u6570\u3092\u6301\u3061\u307E\u3059\u3002\u30CD\u30B9\u30C8\u3055\u308C\u305F\u5C5E\u6027\u3078\u306E\u30D1\u30B9\u306F\u6A19\u6E96\u306E\u30C9\u30C3\u30C8\u8868\u8A18\u3067\u53D6\u5F97\u3055\u308C\u307E\u3059 (\u4F8B: "company.address.number")\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5C5E\u6027\u540D\u306F\u6587\u5B57\u306E\u5927\u5C0F\u3092\u533A\u5225\u3059\u308B\u3053\u3068\u306B\u7559\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002']}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"pathArray"})," \u306B\u8FD4\u3055\u308C\u308B\u91CD\u8907\u3057\u306A\u3044\u30D1\u30B9\u306E\u30EA\u30B9\u30C8\u306F\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u9806\u306B\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u6CE8:"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"objectField"})," \u306E\u5024\u304C\u672A\u5B9A\u7FA9\u306E\u30EC\u30B3\u30FC\u30C9\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.li,{children:"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u4F5C\u6210\u3055\u308C\u305F\u5C5E\u6027\u30D1\u30B9\u3082\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u691C\u51FA\u3055\u308C\u307E\u3059\u3002\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u306F\u4F5C\u6210\u3055\u308C\u305F\u30D1\u30B9\u304C\u6B8B\u308B\u3053\u3068\u306B\u7559\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3055\u308C\u305F [Customer]full_Data \u3068\u3044\u3046\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u3042\u308A\u300115\u4EF6\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u6301\u3064\u3068\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:t(247029).Z+"",width:"892",height:"416"})}),"\n",(0,d.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY TEXT(aTPaths;0)\n\xa0ALL RECORDS([Customer])\n\xa0DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"aTPaths"})," \u914D\u5217\u306E\u8981\u7D20\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Element"}),(0,d.jsx)(e.th,{children:"Value"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:'"age"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:'"Children"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:'"Children[]"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:'"Children[].age"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"5"}),(0,d.jsx)(e.td,{children:'"Children[].Name"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"6"}),(0,d.jsx)(e.td,{children:'"Children.length"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{children:'"client"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:'"FirstName"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:'"LastName"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:'"Sex"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"11"}),(0,d.jsx)(e.td,{children:'"telephone"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"12"}),(0,d.jsx)(e.td,{children:'"telephone[]"'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"13"}),(0,d.jsx)(e.td,{children:'"telephone.length"'})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"}),' "length"\u306F\u5168\u3066\u306E\u914D\u5217\u578B\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u81EA\u52D5\u7684\u306B\u5229\u7528\u53EF\u80FD\u306A',(0,d.jsx)(e.em,{children:"\u4EEE\u60F3\u7684\u306A\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3067\u3059\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u6C0F\u306F\u914D\u5217\u3092\u306E\u30B5\u30A4\u30BA\u3001\u3064\u307E\u308A\u8981\u7D20\u306E\u6570\u3092\u63D0\u4F9B\u3057\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u30AF\u30A8\u30EA\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(e.em,{children:".length \u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/distinct-attribute-values",children:"DISTINCT ATTRIBUTE VALUES"})}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1395"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},247029:function(n,e,t){t.d(e,{Z:function(){return s}});let s=t.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);