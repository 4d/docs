"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84872"],{797491:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"Events/onSelectionChange","title":"On Selection Change","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                                                                                                                                                                            | \u5B9A\u7FA9               |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Events/onSelectionChange.md","sourceDirName":"Events","slug":"/Events/onSelectionChange","permalink":"/docs/ja/20/Events/onSelectionChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onSelectionChange","title":"On Selection Change"},"sidebar":"docs","previous":{"title":"On Scroll","permalink":"/docs/ja/20/Events/onScroll"},"next":{"title":"On Timer","permalink":"/docs/ja/20/Events/onTimer"}}'),i=t("785893"),d=t("250065");let s={id:"onSelectionChange",title:"On Selection Change"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0",id:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0",level:3},{value:"\u968E\u5C64\u30EA\u30B9\u30C8",id:"\u968E\u5C64\u30EA\u30B9\u30C8",level:3},{value:"\u5165\u529B &amp; 4D Write Pro",id:"\u5165\u529B--4d-write-pro",level:3},{value:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9",id:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30B3\u30FC\u30C9"}),(0,i.jsx)(n.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,i.jsx)(n.th,{children:"\u5B9A\u7FA9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"31"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20/FormObjects/viewProAreaOverview",children:"4D View Pro \u30A8\u30EA\u30A2"})," - ",(0,i.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro \u30A8\u30EA\u30A2"})," - \u30D5\u30A9\u30FC\u30E0 - ",(0,i.jsx)(n.a,{href:"/docs/ja/20/FormObjects/listOverview",children:"\u968E\u5C64\u30EA\u30B9\u30C8"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/20/FormObjects/inputOverview",children:"\u5165\u529B"})," - ",(0,i.jsx)(n.a,{href:"/docs/ja/20/FormObjects/listboxOverview",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"})]}),(0,i.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u9078\u629E\u304C\u5909\u66F4\u3055\u308C\u305F"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u69D8\u3005\u306A\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u767A\u751F\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,i.jsxs)(n.p,{children:["\u73FE\u5728\u306E\u884C\u3084\u5217\u306E\u9078\u629E\u304C\u5909\u66F4\u3055\u308C\u305F\u3002 \u3053\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001",(0,i.jsx)(n.code,{children:"FORM Event"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B ",(0,i.jsx)(n.a,{href:"/docs/ja/20/Events/overview#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u306B\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsx)(n.td,{children:"31"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"4D View Pro \u30A8\u30EA\u30A2\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheetName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u30B7\u30FC\u30C8\u540D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oldSelections"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"\u5909\u66F4\u524D\u306E\u30BB\u30EB\u30EC\u30F3\u30B8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newSelections"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"\u5909\u66F4\u5F8C\u306E\u30BB\u30EB\u30EC\u30F3\u30B8"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0",children:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0"}),"\n",(0,i.jsx)(n.p,{children:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3042\u308B\u3044\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u884C\u9078\u629E\u304C\u5909\u66F4\u3055\u308C\u305F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u968E\u5C64\u30EA\u30B9\u30C8",children:"\u968E\u5C64\u30EA\u30B9\u30C8"}),"\n",(0,i.jsx)(n.p,{children:"\u968E\u5C64\u30EA\u30B9\u30C8\u4E2D\u306E\u9078\u629E\u304C\u30AF\u30EA\u30C3\u30AF\u3084\u30AD\u30FC\u30B9\u30C8\u30ED\u30FC\u30AF\u306A\u3069\u3067\u5909\u66F4\u3055\u308C\u305F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5165\u529B--4d-write-pro",children:"\u5165\u529B & 4D Write Pro"}),"\n",(0,i.jsx)(n.p,{children:"\u30AF\u30EA\u30C3\u30AF\u3084\u30AD\u30FC\u30B9\u30C8\u30ED\u30FC\u30AF\u306B\u3088\u308A\u3001\u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3084\u30AB\u30FC\u30BD\u30EB\u306E\u4F4D\u7F6E\u304C\u30A8\u30EA\u30A2\u5185\u3067\u5909\u66F4\u3055\u308C\u305F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u3067\u73FE\u5728\u306E\u884C\u3084\u5217\u306E\u9078\u629E\u304C\u5909\u66F4\u3055\u308C\u308B\u305F\u3073\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(667294);let i={},d=r.createContext(i);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);