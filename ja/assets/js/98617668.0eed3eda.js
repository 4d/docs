"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34031"],{32127:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-subform","title":"OBJECT SET SUBFORM","description":"OBJECT SET SUBFORM ( { ;} object {; aTable}; detailSubform {; listSubform*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-subform","permalink":"/docs/ja/20-R7/commands/object-set-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-subform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-subform","title":"OBJECT SET SUBFORM","slug":"/commands/object-set-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET STYLE SHEET","permalink":"/docs/ja/20-R7/commands/object-set-style-sheet"},"next":{"title":"OBJECT SET SUBFORM CONTAINER VALUE","permalink":"/docs/ja/20-R7/commands/object-set-subform-container-value"}}'),r=s("785893"),d=s("250065");let c={id:"object-set-subform",title:"OBJECT SET SUBFORM",slug:"/commands/object-set-subform",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET SUBFORM"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"aTable"}),"}; ",(0,r.jsx)(n.em,{children:"detailSubform"})," {; ",(0,r.jsx)(n.em,{children:"listSubform"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5B9A\u6642object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217)\u7701\u7565\u6642object\u306F\u5909\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30E0\u306E\u30C6\u30FC\u30D6\u30EB (\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0\u306E\u5834\u5408)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"detailSubform"}),(0,r.jsx)(n.td,{children:"Text, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8A73\u7D30\u30D5\u30A9\u30FC\u30E0\u540D(\u30C6\u30AD\u30B9\u30C8)\u3042\u308B\u3044\u306F\u8A73\u7D30\u30D5\u30A9\u30FC\u30E0\u3092\u5B9A\u7FA9\u3057\u305F.json\u30D5\u30A1\u30A4\u30EB\u3078\u306EPOSIX\u30D1\u30B9(\u30C6\u30AD\u30B9\u30C8)\u3001\u3042\u308B\u3044\u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u8A73\u7D30\u30D5\u30A9\u30FC\u30E0\u3092\u5B9A\u7FA9\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"listSubform"}),(0,r.jsx)(n.td,{children:"Text, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u540D(\u30C6\u30AD\u30B9\u30C8)\u3001\u3042\u308B\u3044\u306F\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u5B9A\u7FA9\u3057\u305F.json\u30D5\u30A1\u30A4\u30EB\u3078\u306EPOSIX\u30D1\u30B9(\u30C6\u30AD\u30B9\u30C8)\u3001\u3042\u308B\u3044\u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0(\u30C6\u30FC\u30D6\u30EB\u30D5\u30A9\u30FC\u30E0)\u3092\u5B9A\u7FA9\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET SUBFORM"}),"\u30B3\u30DE\u30F3\u30C9\u306F*** \u5F15\u6570\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u8A73\u7D30\u30D5\u30A9\u30FC\u30E0\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u52D5\u7684\u306B\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30BF\u30A4\u30D7 (\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u306E\u51FA\u529B\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30D7\u30ED\u30D1\u30C6\u30A3) \u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"})," \u306F\u5909\u6570\u3067\u3042\u308A\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"aTable"})," \u5F15\u6570\u306B\u306F\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u304C\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u6E21\u3057\u307E\u3059\u3002\u30DA\u30FC\u30B8\u30E2\u30FC\u30C9\u306E\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"detailSubform"})," \u5F15\u6570\u304A\u3088\u3073 ",(0,r.jsx)(n.em,{children:"listSubform"})," \u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3044\u3065\u308C\u304B\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30D5\u30A9\u30FC\u30E0\u540D"}),"\n",(0,r.jsxs)(n.li,{children:["\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u306E\u8A73\u7D30\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u6709\u52B9\u306A.josn \u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9(POSIX \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3001",(0,r.jsx)(n.em,{children:"\u30D5\u30A9\u30FC\u30E0\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9"}),"\u53C2\u7167)"]}),"\n",(0,r.jsx)(n.li,{children:"\u30D5\u30A9\u30FC\u30E0\u306E\u8A73\u7D30\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8"}),": ",(0,r.jsx)(n.em,{children:"listSubform"})," \u5F15\u6570\u306F\u30EA\u30B9\u30C8\u30BF\u30A4\u30D7\u306E\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306E\u307F\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30DA\u30FC\u30B8\u30E2\u30FC\u30C9\u306E\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u3044\u3064\u3067\u3082\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u30EA\u30B9\u30C8\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u3001\u30EA\u30B9\u30C8\u3092\u8868\u793A\u3057\u3066\u3044\u308B\u3068\u304D\u306E\u307F\u5909\u66F4\u53EF\u80FD\u3067\u3059\u3002\u30EA\u30B9\u30C8\u4E2D\u304C\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u8A73\u7D30\u30D5\u30A9\u30FC\u30E0\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u72B6\u614B\u3067\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1138"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);