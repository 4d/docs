"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3516"],{525546:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"Events/onDataChange","title":"On Data Change","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | \u5B9A\u7FA9               |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Events/onDataChange.md","sourceDirName":"Events","slug":"/Events/onDataChange","permalink":"/docs/ja/20-R6/Events/onDataChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDataChange.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onDataChange","title":"On Data Change"},"sidebar":"docs","previous":{"title":"On Column Resize","permalink":"/docs/ja/20-R6/Events/onColumnResize"},"next":{"title":"On Deactivate","permalink":"/docs/ja/20-R6/Events/onDeactivate"}}'),s=n("785893"),o=n("250065");let a={id:"onDataChange",title:"On Data Change"},c=void 0,i={},d=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u30B3\u30FC\u30C9"}),(0,s.jsx)(t.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,s.jsx)(t.th,{children:"\u5B9A\u7FA9"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"20"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro \u30A8\u30EA\u30A2"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/dropdownListOverview",children:"\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30EA\u30B9\u30C8"})," - \u30D5\u30A9\u30FC\u30E0 - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listOverview",children:"\u968E\u5C64\u30EA\u30B9\u30C8"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/inputOverview",children:"\u5165\u529B"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listboxOverview",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%88%97",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/pluginAreaOverview#overview",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u30A8\u30EA\u30A2"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/progressIndicator",children:"\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/ruler",children:"\u30EB\u30FC\u30E9\u30FC"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/spinner",children:"\u30B9\u30D4\u30CA\u30FC"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/stepper",children:"\u30B9\u30C6\u30C3\u30D1\u30FC"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/subformOverview",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"})]}),(0,s.jsx)(t.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30FC\u30BF\u304C\u5909\u66F4\u3055\u308C\u305F"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"On Data Change"})," \u30A4\u30D9\u30F3\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,s.jsx)(t.code,{children:"FORM Event"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306E\u5024\u306E\u5909\u5316\u3092\u691C\u51FA\u3057\u3001\u51E6\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u7D50\u3073\u4ED8\u3051\u3089\u308C\u305F\u5909\u6570\u304C 4D \u306B\u3088\u308A\u5185\u90E8\u7684\u306B\u66F4\u65B0\u3055\u308C\u6B21\u7B2C\u3001\u751F\u6210\u3055\u308C\u307E\u3059 (\u4E00\u822C\u7684\u306B\u306F\u3001\u5165\u529B\u30A8\u30EA\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u5931\u3063\u305F\u6642)\u3002"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/subformOverview",children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"})," \u306B\u304A\u3044\u3066\u306F\u3001",(0,s.jsx)(t.code,{children:"On Data Change"})," \u30A4\u30D9\u30F3\u30C8\u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5909\u6570\u306E\u5024\u304C\u66F4\u65B0\u3055\u308C\u305F\u3068\u304D\u306B\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u307E\u3059\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(667294);let s={},o=r.createContext(s);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);