"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83469"],{454786:function(e,r,t){t.r(r),t.d(r,{default:()=>j,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"Events/onValidate","title":"On Validate","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \u5B9A\u7FA9                 |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/Events/onValidate.md","sourceDirName":"Events","slug":"/Events/onValidate","permalink":"/docs/ja/Events/onValidate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonValidate.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onValidate","title":"On Validate"},"sidebar":"docs","previous":{"title":"On URL Resource Loading","permalink":"/docs/ja/Events/onUrlResourceLoading"},"next":{"title":"On VP Range Changed","permalink":"/docs/ja/Events/onVpRangeChanged"}}'),s=t("785893"),o=t("250065");let i={id:"onValidate",title:"On Validate"},c=void 0,d={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",id:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",level:3}];function l(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u30B3\u30FC\u30C9"}),(0,s.jsx)(r.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,s.jsx)(r.th,{children:"\u5B9A\u7FA9"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/subformOverview",children:"Subform"})," - ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(r.td,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u30C7\u30FC\u30BF\u5165\u529B\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u305F"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(r.p,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001",(0,s.jsx)(r.code,{children:"SAVE RECORD"})," \u30B3\u30DE\u30F3\u30C9\u30B3\u30FC\u30EB\u3084 ",(0,s.jsx)(r.code,{children:"accept"})," ",(0,s.jsx)(r.a,{href:"/docs/ja/FormObjects/propertiesAction#%E6%A8%99%E6%BA%96%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3",children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5F8C"})," \u306A\u3069\u3001\u30EC\u30B3\u30FC\u30C9\u30C7\u30FC\u30BF\u306E\u5165\u529B\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u305F\u3068\u304D\u306B\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"On Validate"})," \u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u4E2D\u3067\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u5165\u308C\u3092\u304A\u3053\u306A\u3046\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002"]})]})}function j(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return i}});var n=t(667294);let s={},o=n.createContext(s);function i(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);