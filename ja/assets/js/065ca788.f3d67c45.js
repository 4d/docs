"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35369"],{813939:function(e,n,l){l.r(n),l.d(n,{metadata:()=>c,contentTitle:()=>s,default:()=>h,assets:()=>d,toc:()=>r,frontMatter:()=>i});var c=JSON.parse('{"id":"commands/new-collection","title":"New collection","description":"New collection {( ...value Collection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/new-collection.md","sourceDirName":"commands","slug":"/commands/new-collection","permalink":"/docs/ja/commands/new-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-collection","title":"New collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COLLECTION TO ARRAY","permalink":"/docs/ja/commands/collection-to-array"},"next":{"title":"New shared collection","permalink":"/docs/ja/commands/new-shared-collection"}}'),o=l("785893"),t=l("250065");let i={id:"new-collection",title:"New collection",displayed_sidebar:"docs"},s=void 0,d={},r=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"New collection"})," {( ",(0,o.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5F15\u6570"}),(0,o.jsx)(n.th,{children:"\u578B"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"value"}),(0,o.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5024"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"New collection"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"New collection"})," command creates a new empty or prefilled collection and returns its reference. Collections can be handled using properties and functions of the ",(0,o.jsx)(n.a,{href:"/docs/ja/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["\u5F15\u6570\u3092\u6E21\u3055\u306A\u304B\u3063\u305F\u5834\u5408\u3001",(0,o.jsx)(n.code,{children:"New collection"})," \u306F\u7A7A\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u53C2\u7167\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u8FD4\u3055\u308C\u305F\u53C2\u7167\u306F\u3001\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u306E 4D\u5909\u6570\u306B\u4EE3\u5165\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Keep in mind that ",(0,o.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,o.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4EFB\u610F\u3067\u3001\u4E00\u3064\u4EE5\u4E0A\u306E ",(0,o.jsx)(n.em,{children:"value"})," \u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u3042\u3089\u304B\u3058\u3081\u5024\u306E\u5165\u3063\u305F\u65B0\u3057\u3044\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u307E\u305F\u306F\u3001\u3042\u3068\u304B\u3089\u4EE3\u5165\u306B\u3088\u3063\u3066\u8981\u7D20\u3092\u4E00\u3064\u305A\u3064\u8FFD\u52A0\u30FB\u7DE8\u96C6\u3057\u3066\u3044\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u7D42\u8981\u7D20\u3092\u8D85\u3048\u308B\u8981\u7D20\u756A\u53F7 (\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9) \u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u81EA\u52D5\u7684\u306B\u30EA\u30B5\u30A4\u30BA\u3055\u308C\u3001\u5408\u3044\u9593\u306E\u8981\u7D20\u306B\u306F\u3059\u3079\u3066 ",(0,o.jsx)(n.strong,{children:"null"})," \u5024\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3089\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u578B (\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u65E5\u4ED8\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u7B49) \u3067\u3042\u308C\u3070\u3001\u500B\u6570\u306B\u5236\u9650\u306A\u304F\u5024\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u914D\u5217\u3068\u306F\u7570\u306A\u308A\u3001\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u7570\u306A\u308B\u578B\u306E\u30C7\u30FC\u30BF\u3092\u6DF7\u305C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u305F\u3060\u3057\u4EE5\u4E0B\u306E\u5909\u63DB\u554F\u984C\u306B\u3064\u3044\u3066\u306F\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u6E21\u3055\u308C\u305F\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u305D\u306E\u307E\u307E\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u30DD\u30A4\u30F3\u30BF\u30FC\u306F ",(0,o.jsx)(n.code,{children:"JSON Stringify"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u8A55\u4FA1\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:['\u65E5\u4ED8\u306F\u3001"dates inside objects" \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u3001"yyyy-mm-dd" \u3068\u3044\u3046\u65E5\u4ED8\u3001\u307E\u305F\u306F "YYYY-MM-DDTHH:mm:ss.SSSZ" \u3068\u3044\u3046\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6587\u5B57\u5217\u3067\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u4FDD\u5B58\u3059\u308B\u524D\u306B 4D\u65E5\u4ED8\u3092\u30C6\u30AD\u30B9\u30C8\u306B\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30ED\u30FC\u30AB\u30EB\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u3075\u308B\u307E\u3044\u306F ',(0,o.jsx)(n.code,{children:"SET DATABASE PARAMETER"})," \u30B3\u30DE\u30F3\u30C9\u3067 ",(0,o.jsx)(n.code,{children:"Dates inside objects"})," \u30BB\u30EC\u30AF\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u5909\u66F4\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u6642\u9593\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u305D\u308C\u306F\u30DF\u30EA\u79D2\u306E\u6570 (\u5B9F\u6570) \u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,o.jsx)(n.p,{children:"\u65B0\u3057\u3044\u7A7A\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u305D\u308C\u3092 4D\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5909\u6570\u306B\u4EE3\u5165\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" var $myCol : Collection\n $myCol:=New collection\n  // $myCol=[]\n"})}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,o.jsx)(n.p,{children:"\u3042\u3089\u304B\u3058\u3081\u5024\u306E\u5165\u3063\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $filledColl : Collection\n $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)\n  // $filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,o.jsx)(n.p,{children:"\u65B0\u3057\u3044\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3001\u305D\u3053\u306B\u65B0\u3057\u3044\u8981\u7D20\u3092\u8FFD\u52A0\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $coll : Collection\n $coll:=New collection("a";"b";"c")\n  // $coll=["a","b","c"]\n $coll[9]:="z" // \u5024 "z" \u309210\u756A\u76EE\u306E\u8981\u7D20\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\n $vcolSize:=$coll.length // 10\n  // $coll=["a","b","c",null,null,null,null,null,null,"z"]\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ja/commands/new-shared-collection",children:"New shared collection"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ja/commands/type",children:"Type"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return i}});var c=l(667294);let o={},t=c.createContext(o);function i(e){let n=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);