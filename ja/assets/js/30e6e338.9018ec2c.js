"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26795"],{59813:function(n,e,r){r.r(e),r.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-set-array","title":"LISTBOX SET ARRAY","description":"LISTBOX SET ARRAY ( { ;} object ; arrType ; arrPtr* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-array","permalink":"/docs/ja/commands/listbox-set-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-array","title":"LISTBOX SET ARRAY","slug":"/commands/listbox-set-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT ROWS","permalink":"/docs/ja/commands/listbox-select-rows"},"next":{"title":"LISTBOX SET AUTO ROW HEIGHT","permalink":"/docs/ja/commands/listbox-set-auto-row-height"}}'),t=r("785893"),d=r("250065");let l={id:"listbox-set-array",title:"LISTBOX SET ARRAY",slug:"/commands/listbox-set-array",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"LISTBOX SET ARRAY"})," ( {* ;} ",(0,t.jsx)(e.em,{children:"object"})," ; ",(0,t.jsx)(e.em,{children:"arrType"})," ; ",(0,t.jsx)(e.em,{children:"arrPtr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6642:object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57\u5217)\u7701\u7565\u6642:object\u306F\u5909\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"object"}),(0,t.jsx)(e.td,{children:"any"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(* \u6307\u5B9A\u6642)\u3001\u307E\u305F\u306F\u5909\u6570(* \u7701\u7565\u6642)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"arrType"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u914D\u5217\u306E\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"arrPtr"}),(0,t.jsx)(e.td,{children:"Pointer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u95A2\u9023\u4ED8\u3051\u308B\u914D\u5217\u3092\u6307\u5B9A"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u306E\u307F\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"LISTBOX SET ARRAY"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,t.jsx)(e.em,{children:"object"})," and ",(0,t.jsx)(e.em,{children:"*"})," \u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3082\u3057\u304F\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30B3\u30E9\u30E0\u306B\u3001",(0,t.jsx)(e.em,{children:"arrType"}),"\u914D\u5217\u3092\u95A2\u9023\u4ED8\u3051\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u914D\u5217\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u30B9\u30BF\u30A4\u30EB\u3001\u6587\u5B57\u8272\u3001\u80CC\u666F\u8272\u3001\u884C\u7BA1\u7406\u306E\u914D\u5217\u3092\u95A2\u9023\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u6F14\u7B97\u5B50\u3092\u6E21\u3057\u305F\u5834\u5408\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6587\u5B57\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u6642\u306B\u306F ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5BFE\u8C61\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306A\u306E\u304B\u5217\u306A\u306E\u304B\u3092\u3001 ",(0,t.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"arrType"}),' \u5F15\u6570\u306B\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u5217\u306B\u95A2\u9023\u4ED8\u3051\u305F\u3044\u914D\u5217\u306E\u7A2E\u985E\u3092\u3001 "',(0,t.jsx)(e.em,{children:"List Box"}),'" \u306E\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u3063\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk background color array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk control array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk font color array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk row height array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"4"}),(0,t.jsx)(e.td,{children:"(4D View Pro \u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lk style array"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"arrPtr"})," \u5F15\u6570\u306B\u306F\u3001\u5236\u5FA1\u3057\u305F\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u914D\u5217\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,t.jsx)(e.p,{children:"4\u5217\u76EE\u306E\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u914D\u5217\u309210\u5217\u76EE\u306B\u3082\u4F7F\u3044\u305F\u3044\u3068\u3044\u3046\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// 4\u5217\u76EE\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u914D\u5217\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\n\xa0$Pointer:=LISTBOX Get array(*;"Col4";lk font color array)\n\xa0\xa0// \u5B58\u5728\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\n\xa0If(Not(Nil($Pointer)))\n\xa0\xa0// 10\u5217\u76EE\u3078\u9069\u7528\u3057\u307E\u3059\u3002\n\xa0\xa0\xa0\xa0LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)\n\xa0End if\n'})}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,t.jsx)(e.p,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u7528\u306B\u884C\u9AD8\u3055\u914D\u5217\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)\n'})}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"})]}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1279"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},d=s.createContext(t);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);