"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75229"],{13157:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/select-list-items-by-reference","title":"SELECT LIST ITEMS BY REFERENCE","description":"SELECT LIST ITEMS BY REFERENCE ( list ; itemRef {; refArray} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-list-items-by-reference.md","sourceDirName":"commands-legacy","slug":"/commands/select-list-items-by-reference","permalink":"/docs/ja/commands/select-list-items-by-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-list-items-by-reference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-list-items-by-reference","title":"SELECT LIST ITEMS BY REFERENCE","slug":"/commands/select-list-items-by-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECT LIST ITEMS BY POSITION","permalink":"/docs/ja/commands/select-list-items-by-position"},"next":{"title":"Selected list items","permalink":"/docs/ja/commands/selected-list-items"}}'),r=s("785893"),i=s("250065");let d={id:"select-list-items-by-reference",title:"SELECT LIST ITEMS BY REFERENCE",slug:"/commands/select-list-items-by-reference",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SELECT LIST ITEMS BY REFERENCE"})," ( ",(0,r.jsx)(n.em,{children:"list"})," ; ",(0,r.jsx)(n.em,{children:"itemRef"})," {; ",(0,r.jsx)(n.em,{children:"refArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"list"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemRef"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7 \u307E\u305F\u306F 0: \u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refArray"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7\u914D\u5217"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["SELECT LIST ITEMS BY REFERENCE \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"list"}),"\u306B\u6E21\u3055\u308C\u305F\u53C2\u7167\u756A\u53F7\u306E\u30EA\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001",(0,r.jsx)(n.em,{children:"itemRef"}),"\u306A\u3089\u3073\u306B\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066",(0,r.jsx)(n.em,{children:"refArray"}),"\u306B\u6E21\u3055\u308C\u305F\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6E21\u3057\u305F\u9805\u76EE\u53C2\u7167\u756A\u53F7\u306E\u9805\u76EE\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9805\u76EE\u304C\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\uFF08\u3064\u307E\u308A\u3001\u7E2E\u5C0F\u3055\u308C\u3066\u3044\u308B\u30B5\u30D6\u30EA\u30B9\u30C8\u5185\u306B\u305D\u306E\u9805\u76EE\u304C\u3042\u308B\u5834\u5408\uFF09\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5FC5\u8981\u306A\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u5C55\u958B\u3057\u3001\u305D\u306E\u9805\u76EE\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"refArray"}),"\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"itemRef"}),"\u5F15\u6570\u306F\u9078\u629E\u3055\u308C\u308B\u9805\u76EE\u306E\u53C2\u7167\u756A\u53F7\u3092\u793A\u3057\u307E\u3059\u3002\u9805\u76EE\u756A\u53F7\u304C\u305D\u306E\u30EA\u30B9\u30C8\u4E2D\u306E\u9805\u76EE\u306B\u5BFE\u5FDC\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u3092\u793A\u3059\u305F\u3081\u306B\u50240\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570\u3067\u3042\u308B",(0,r.jsx)(n.em,{children:"refArray"}),"\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30EA\u30B9\u30C8\u4E2D\u3067\u8907\u6570\u306E\u9805\u76EE\u3092\u540C\u6642\u306B\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"refArray"}),"\u306B\u306F\u5FC5\u305A\u914D\u5217\u3092\u6E21\u3057\u3001\u305D\u306E\u5404\u8981\u7D20\u306F\u9078\u629E\u3059\u308B\u9805\u76EE\u306E\u56FA\u5B9A\u53C2\u7167\u756A\u53F7\u3092\u793A\u3057\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n\u305D\u306E\u5834\u5408\u3001\u7D50\u679C\u3068\u3057\u3066\u9078\u629E\u3055\u308C\u305F\u5404\u9805\u76EE\u306E\u4E2D\u3067\u3001",(0,r.jsx)(n.em,{children:"itemRef"})," \u5F15\u6570\u306B\u6307\u5B9A\u3057\u305F\u9805\u76EE\u304C\u305D\u306E\u30EA\u30B9\u30C8\u306E\u65B0\u3057\u3044\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u9805\u76EE\u306F\u3001\u914D\u5217\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3057\u305F\u4E00\u9023\u306E\u9805\u76EE\u306B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u3068\u306F\u3001\u5177\u4F53\u7684\u306B\u8A00\u3046\u3068\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/edit-item",title:"EDIT ITEM",children:"EDIT ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306B\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u79FB\u884C\u3055\u308C\u308B\u9805\u76EE\u306E\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u968E\u5C64\u30EA\u30B9\u30C8\u5185\u3067\u8907\u6570\u306E\u30EA\u30B9\u30C8\u9805\u76EE\u3092\u540C\u6642\u306B\u9078\u629E\u3059\u308B\u306B\u306F\uFF08\u624B\u52D5\u3001\u3042\u308B\u3044\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\uFF09\u3001\u305D\u306E\u30EA\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u8907\u6570\u9078\u629E\u53EF\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6709\u52B9\u306B\u8A2D\u5B9A\u3057\u3066\u304A\u304B\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A2D\u5B9A\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-list-properties",title:"SET LIST PROPERTIES",children:"SET LIST PROPERTIES"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u884C\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u3001\u9805\u76EE\u304C\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u9805\u76EE\u3092\u533A\u5225\u3067\u304D\u307E\u305B\u3093\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"hList"}),"\u306F\u4E00\u610F\u306E\u53C2\u7167\u756A\u53F7\u304C\u4ED8\u3044\u305F\u9805\u76EE\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u306B\u89AA\u9805\u76EE\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u306B\u306F\u305D\u306E\u89AA\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// \u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u306E\u4F4D\u7F6E\u3092\u53D6\u5F97\n\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText)\xa0// \u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u306E\u53C2\u7167\u756A\u53F7\u3092\u53D6\u5F97\n\xa0$vlParentItemRef:=List item parent(hList;$vlItemRef)\xa0// \u89AA\u9805\u76EE\u306E\u53C2\u7167\u3092\u53D6\u5F97 (\u3042\u308C\u3070)\n\xa0If($vlParentItemRef>0)\n\xa0\xa0\xa0\xa0SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef))\xa0// \u89AA\u9805\u76EE\u3092\u9078\u629E\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/edit-item",children:"EDIT ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/selected-list-items",children:"Selected list items"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"630"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);