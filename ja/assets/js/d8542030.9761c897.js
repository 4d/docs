"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48306"],{958563:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-get-array","title":"LISTBOX Get array","description":"LISTBOX Get array ( { ;} object ; arrType* ) : Pointer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-array","permalink":"/docs/ja/commands/listbox-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-array","title":"LISTBOX Get array","slug":"/commands/listbox-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX EXPAND","permalink":"/docs/ja/commands/listbox-expand"},"next":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/ja/commands/listbox-get-arrays"}}'),t=r("785893"),d=r("250065");let l={id:"listbox-get-array",title:"LISTBOX Get array",slug:"/commands/listbox-get-array",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"LISTBOX Get array"})," ( {* ;} ",(0,t.jsx)(e.em,{children:"object"})," ; ",(0,t.jsx)(e.em,{children:"arrType"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6642:object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57\u5217)\u7701\u7565\u6642:object\u306F\u5909\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"object"}),(0,t.jsx)(e.td,{children:"any"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(* \u6307\u5B9A\u6642)\u3001\u307E\u305F\u306F\u5909\u6570(* \u7701\u7565\u6642)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"arrType"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u914D\u5217\u306E\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Pointer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u306E\u307F\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"LISTBOX Get array"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u3068 ",(0,t.jsx)(e.em,{children:"*"})," \u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30B3\u30E9\u30E0\u306E\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092",(0,t.jsx)(e.em,{children:"arrType"})," \u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30B9\u30BF\u30A4\u30EB\u3001\u30AB\u30E9\u30FC\u3001\u80CC\u666F\u8272\u3001\u307E\u305F\u306F\u884C\u7BA1\u7406\u914D\u5217\u306F\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3001\u3042\u308B\u3044\u306F ",(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u914D\u5217\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u307E\u305F\u306F (\u884C\u7BA1\u7406\u914D\u5217\u4EE5\u5916\u306E\u307F) \u914D\u5217\u578B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30AB\u30E9\u30E0\u3068\u95A2\u9023\u4ED8\u3051\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4EFB\u610F\u306E * \u6F14\u7B97\u5B50\u3092\u6E21\u3057\u305F\u5834\u5408\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6587\u5B57\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u6642\u306B\u306F ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5BFE\u8C61\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306A\u306E\u304B\u5217\u306A\u306E\u304B\u3092\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"arrType"}),' \u5F15\u6570\u306B\u306F\u3001\u53D6\u5F97\u3057\u305F\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u914D\u5217\u306E\u578B\u3092\u6E21\u3057\u307E\u3059\u3002 "',(0,t.jsx)(e.em,{children:"List Box"}),'" \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk background color array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk control array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk font color array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk row height array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk style array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u623B\u308A\u5024\u306F\u4EE5\u4E0B\u306E\u3069\u308C\u304B\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u8981\u6C42\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u914D\u5217\u304C\u305D\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u5217\u306B\u95A2\u9023\u4ED8\u3051\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/is-nil-pointer",children:"Is nil pointer"}),"\u304C\u8FD4\u3063\u3066\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})," \u3084 ",(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u5178\u578B\u7684\u306A\u4F7F\u7528\u4F8B:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)\n\xa0\xa0// "MyLB" \u3068\u3044\u3046\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u95A2\u9023\u4ED8\u3051\u3055\u308C\u305F\n\xa0\xa0// \u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u914D\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002\n\xa0\n\xa0vPtr:=LISTBOX Get array(*;"Col4";lk style array)\n\xa0\xa0// "Col4" \u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5217\u306B\u95A2\u9023\u4ED8\u3051\u3055\u308C\u305F\n\xa0\xa0// \u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u914D\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002\n'})}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1278"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},d=s.createContext(t);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);