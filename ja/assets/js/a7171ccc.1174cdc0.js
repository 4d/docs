"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67516"],{642953:function(e,r,n){n.r(r),n.d(r,{default:()=>j,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onDrop","title":"On Drop","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | \u5B9A\u7FA9                 |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/Events/onDrop.md","sourceDirName":"Events","slug":"/Events/onDrop","permalink":"/docs/ja/Events/onDrop","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onDrop","title":"On Drop"},"sidebar":"docs","previous":{"title":"On Drag Over","permalink":"/docs/ja/Events/onDragOver"},"next":{"title":"On End URL Loading","permalink":"/docs/ja/Events/onEndUrlLoading"}}'),o=n("785893"),s=n("250065");let c={id:"onDrop",title:"On Drop"},i=void 0,d={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(e){let r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"\u30B3\u30FC\u30C9"}),(0,o.jsx)(r.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,o.jsx)(r.th,{children:"\u5B9A\u7FA9"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"16"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/ja/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(r.td,{children:"\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u305F"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"On Drop"})," \u30A4\u30D9\u30F3\u30C8\u306F\u30DE\u30A6\u30B9\u30DD\u30A4\u30F3\u30BF\u30FC\u304C\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u4E0A\u3067\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305F\u3068\u304D\u306B\u305D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u4E00\u5EA6\u9001\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406\u306E\u7B2C2\u6BB5\u968E\u3067\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5FDC\u7B54\u3068\u3057\u3066\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406\u306E\u7B2C2\u6BB5\u968E\u3067\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5FDC\u7B54\u3068\u3057\u3066\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406\u306E\u7B2C2\u6BB5\u968E\u3067\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5FDC\u7B54\u3068\u3057\u3066\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001",(0,o.jsx)(r.a,{href:"/docs/ja/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30C9\u30E9\u30C3\u30B0\u304C\u53D7\u3051\u4ED8\u3051\u3089\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u9001\u3089\u308C\u307E\u305B\u3093\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001",(0,o.jsx)(r.a,{href:"/docs/ja/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30C9\u30E9\u30C3\u30B0\u304C\u53D7\u3051\u4ED8\u3051\u3089\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u9001\u3089\u308C\u307E\u305B\u3093\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001",(0,o.jsx)(r.a,{href:"/docs/ja/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30C9\u30E9\u30C3\u30B0\u304C\u53D7\u3051\u4ED8\u3051\u3089\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u9001\u3089\u308C\u307E\u305B\u3093\u3002 \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066 ",(0,o.jsx)(r.code,{children:"On Drag Over"})," \u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3057\u3001\u30C9\u30E9\u30C3\u30B0\u3092\u62D2\u5426\u3057\u305F\u5834\u5408\u306B\u306F\u3001",(0,o.jsx)(r.code,{children:"On Drop"})," \u30A4\u30D9\u30F3\u30C8\u306F\u767A\u751F\u3057\u307E\u305B\u3093\u3002 \u3064\u307E\u308A\u3001",(0,o.jsx)(r.code,{children:"On Drag Over"})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30BD\u30FC\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u9593\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u4E92\u63DB\u6027\u3092\u30C6\u30B9\u30C8\u3057\u3066\u3001\u6709\u52B9\u306A\u30C9\u30ED\u30C3\u30D7\u3092\u53D7\u3051\u4ED8\u3051\u305F\u5834\u5408\u306B\u306F\u3001",(0,o.jsx)(r.code,{children:"On Drop"})," \u4E2D\u306B\u30C7\u30FC\u30BF\u306E\u518D\u30C6\u30B9\u30C8\u3092\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30C7\u30FC\u30BF\u304C\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u9069\u5207\u3067\u3042\u308B\u3053\u3068\u306F\u65E2\u306B\u308F\u304B\u3063\u3066\u3044\u308B\u305F\u3081\u3067\u3059\u3002 \u3064\u307E\u308A\u3001",(0,o.jsx)(r.code,{children:"On Drag Over"})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30BD\u30FC\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u9593\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u4E92\u63DB\u6027\u3092\u30C6\u30B9\u30C8\u3057\u3066\u3001\u6709\u52B9\u306A\u30C9\u30ED\u30C3\u30D7\u3092\u53D7\u3051\u4ED8\u3051\u305F\u5834\u5408\u306B\u306F\u3001",(0,o.jsx)(r.code,{children:"On Drop"})," \u4E2D\u306B\u30C7\u30FC\u30BF\u306E\u518D\u30C6\u30B9\u30C8\u3092\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30C7\u30FC\u30BF\u304C\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u9069\u5207\u3067\u3042\u308B\u3053\u3068\u306F\u65E2\u306B\u308F\u304B\u3063\u3066\u3044\u308B\u305F\u3081\u3067\u3059\u3002 \u3064\u307E\u308A\u3001",(0,o.jsx)(r.code,{children:"On Drag Over"})," \u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30BD\u30FC\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u9593\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u4E92\u63DB\u6027\u3092\u30C6\u30B9\u30C8\u3057\u3066\u3001\u6709\u52B9\u306A\u30C9\u30ED\u30C3\u30D7\u3092\u53D7\u3051\u4ED8\u3051\u305F\u5834\u5408\u306B\u306F\u3001",(0,o.jsx)(r.code,{children:"On Drop"})," \u4E2D\u306B\u30C7\u30FC\u30BF\u306E\u518D\u30C6\u30B9\u30C8\u3092\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30C7\u30FC\u30BF\u304C\u30C9\u30ED\u30C3\u30D7\u5148\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u9069\u5207\u3067\u3042\u308B\u3053\u3068\u306F\u65E2\u306B\u308F\u304B\u3063\u3066\u3044\u308B\u305F\u3081\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(r.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/ja/Events/onBeginDragOver",children:(0,o.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function j(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return c}});var t=n(667294);let o={},s=t.createContext(o);function c(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);