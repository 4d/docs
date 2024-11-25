"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23378"],{269885:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/array-to-list","title":"ARRAY TO LIST","description":"ARRAY TO LIST ( array ; list {; itemRefs} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-list","permalink":"/docs/ja/commands/array-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-to-list","title":"ARRAY TO LIST","slug":"/commands/array-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TIME","permalink":"/docs/ja/commands/array-time"},"next":{"title":"ARRAY TO SELECTION","permalink":"/docs/ja/commands/array-to-selection"}}'),t=s("785893"),i=s("250065");let l={id:"array-to-list",title:"ARRAY TO LIST",slug:"/commands/array-to-list",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C-1",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," ( ",(0,t.jsx)(n.em,{children:"array"})," ; ",(0,t.jsx)(n.em,{children:"list"})," {; ",(0,t.jsx)(n.em,{children:"itemRefs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u914D\u5217\u8981\u7D20\u306E\u30B3\u30D4\u30FC\u5143\u914D\u5217"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u914D\u5217\u8981\u7D20\u306E\u30B3\u30D4\u30FC\u5148\u30EA\u30B9\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"itemRefs"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7\u306E\u6570\u5024\u914D\u5217"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["ARRAY TO LIST \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u914D\u5217",(0,t.jsx)(n.em,{children:"array"}),"\u306E\u8981\u7D20\u3092\u4F7F\u7528\u3057\u3066\u3001(\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30EA\u30B9\u30C8\u30A8\u30C7\u30A3\u30BF\u3067\u4F5C\u6210\u3055\u308C\u308B)\u968E\u5C64\u30EA\u30B9\u30C8\u307E\u305F\u306F\u9078\u629E\u30EA\u30B9\u30C8",(0,t.jsx)(n.em,{children:"list"}),"\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u307E\u305F\u306F\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306B\u306F\u3001\u9078\u629E\u30EA\u30B9\u30C8(\u6587\u5B57\u5217)\u307E\u305F\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u53C2\u7167(",(0,t.jsx)(n.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),") \u3092\u6E21\u3059\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002\u5F8C\u8005\u306E\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u52D5\u304F\u305F\u3081\u306B\u306F\u3001\u6E21\u3059\u30EA\u30B9\u30C8\u306F (\u4F8B\u3048\u3070 ",(0,t.jsx)(n.a,{href:"/docs/ja/commands/new-list",children:"New list"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u306A\u3069\u3057\u3066) \u4E8B\u524D\u306B\u4F5C\u6210\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570",(0,t.jsx)(n.em,{children:"itemRefs"}),"\u304C\u6E21\u3055\u308C\u308B\u5834\u5408\u3001\u3053\u306E\u914D\u5217\u306F\u6570\u5024\u914D\u5217\u3067\u3001",(0,t.jsx)(n.em,{children:"array"}),"\u914D\u5217\u3068\u540C\u671F\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u5404\u8981\u7D20\u306F\u3001",(0,t.jsx)(n.em,{children:"array"}),"\u306E\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E\u30EA\u30B9\u30C8\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u8868\u308F\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u30014D\u306B\u3088\u308A\u81EA\u52D5\u7684\u306B1\u30012...N\u3068\u3044\u3046\u9805\u76EE\u53C2\u7167\u756A\u53F7\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," ",(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E\u69D8\u306A\u5236\u9650\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u306E\u7B2C1\u30EC\u30D9\u30EB\u306E\u9805\u76EE\u306E\u307F\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u9078\u629E\u30EA\u30B9\u30C8\u306B\u4F7F\u7528\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u5909\u66F4\u3059\u308B(\u30EA\u30B9\u30C8\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059)\u306E\u3067\u3001\u88FD\u54C1\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u304C\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3055\u308C\u305F\u969B\u306B\u30ED\u30FC\u30AB\u30EB\u306A\u5909\u66F4\u306F\u5168\u3066\u5931\u308F\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.strong,{children:"\u8AAD\u307F\u51FA\u3057\u306E\u307F"}),"\u3067\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC(\u305F\u3068\u3048\u3070.4dz \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8)\u5185\u306E\u9078\u629E\u30EA\u30B9\u30C8\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["ARRAY TO LIST \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u914D\u5217\u306E\u8981\u7D20\u306B\u57FA\u3065\u304F\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u3053\u308C\u3089\u306E\u5236\u7D04\u306B\u7E1B\u3089\u308C\u305A\u306B\u30EA\u30B9\u30C8\u306E\u5024\u3092\u81EA\u7531\u306B\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,t.jsx)(n.em,{children:"\u968E\u5C64\u30EA\u30B9\u30C8"})," \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u914D\u5217",(0,t.jsx)(n.em,{children:"atRegions"}),"\u306E\u8981\u7D20\u304B\u3089\u69CB\u6210\u3055\u308C\u308B\u201CRegions\u201D\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TO LIST(atRegions;"Regions")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u7570\u306A\u308B\u5024\u3092\u30EA\u30B9\u30C8\u306B\u5165\u308C\u3066\u3001\u4F8B\u3048\u3070\u968E\u5C64\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3057\u305F\u3044\u5834\u5408:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Company])\n\xa0DISTINCT VALUES([Company]country;$arrCountries)\n\xa0CountryList:=New list\n\xa0ARRAY TO LIST($arrCountries;CountryList)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30EA\u30B9\u30C8\u30A8\u30C7\u30A3\u30BF\u3067\u73FE\u5728\u7DE8\u96C6\u4E2D\u306E\u30EA\u30B9\u30C8\u306BARRAY TO LIST\u3092\u9069\u7528\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC ",(0,t.jsx)(n.em,{children:"-9957"})," \u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/list-to-array",children:"LIST TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/load-list",children:"Load list"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/save-list",children:"SAVE LIST"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);