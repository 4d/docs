"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98877"],{870626:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/highlight-records","title":"HIGHLIGHT RECORDS","description":"HIGHLIGHT RECORDS ( {aTable }{;}{ setName {; *}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/highlight-records.md","sourceDirName":"commands-legacy","slug":"/commands/highlight-records","permalink":"/docs/ja/20-R7/commands/highlight-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhighlight-records.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"highlight-records","title":"HIGHLIGHT RECORDS","slug":"/commands/highlight-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO SELECTED RECORD","permalink":"/docs/ja/20-R7/commands/goto-selected-record"},"next":{"title":"LAST RECORD","permalink":"/docs/ja/20-R7/commands/last-record"}}'),d=s("785893"),r=s("250065");let c={id:"highlight-records",title:"HIGHLIGHT RECORDS",slug:"/commands/highlight-records",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"HIGHLIGHT RECORDS"})," ( {",(0,d.jsx)(n.em,{children:"aTable"})," }{;}{ ",(0,d.jsx)(n.em,{children:"setName"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3059\u308B\u30C6\u30FC\u30D6\u30EB \u7701\u7565\u6642\u3001\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30C6\u30FC\u30D6\u30EB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"setName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u305B\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u30BB\u30C3\u30C8\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001Userset"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u306E\u81EA\u52D5\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u7121\u52B9"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["HIGHLIGHT RECORDS \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u51FA\u529B\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u6307\u5B9A\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u307E\u3059\u3002\u3053\u306E\u52D5\u4F5C\u306F\u3001\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F",(0,d.jsx)(n.strong,{children:"Shift+\u30AF\u30EA\u30C3\u30AF"}),"\u3001",(0,d.jsx)(n.strong,{children:"Ctrl+\u30AF\u30EA\u30C3\u30AF"})," (Windows) \u3084",(0,d.jsx)(n.strong,{children:"Command+\u30AF\u30EA\u30C3\u30AF"})," (Mac OS) \u30AD\u30FC\u30B3\u30F3\u30D3\u30CD\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3001\u30EA\u30B9\u30C8\u30E2\u30FC\u30C9\u3067\u30EC\u30B3\u30FC\u30C9\u3092\u624B\u52D5\u3067\u9078\u629E\u3059\u308B\u5834\u5408\u3068\u540C\u3058\u3067\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"}),' "\u9078\u629E"\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u30BB\u30C3\u30C8\u306F\u3001\u518D\u63CF\u753B\u5F8C\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u30E1\u30BD\u30C3\u30C9\u5168\u4F53\u304C\u5B9F\u884C\u7D42\u4E86\u3057\u305F\u5F8C\u3067\u3042\u308A\u3001HIGHLIGHT RECORDS\u3092\u5B9F\u884C\u3057\u305F\u76F4\u5F8C\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"aTable"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3001\u201C\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u201D\u3055\u308C\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u3001\u7279\u306B\u30AB\u30EC\u30F3\u30C8\u30C6\u30FC\u30D6\u30EB\u306B\u5C5E\u3057\u3066\u3044\u306A\u3044\u7D44\u307F\u8FBC\u307F\u30B5\u30D6\u30D5\u30A9\uFF0D\u30E0\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u5F8C\u8FF0\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"setName"}),"\u306B\u6709\u52B9\u306A\u30BB\u30C3\u30C8\u540D\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5B9A\u7FA9\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u3001\u305D\u306E\u30BB\u30C3\u30C8\u5185\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"setName"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u73FE\u5728\u306EUserSet\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u30BB\u30C3\u30C8\u306F\u30E6\u30FC\u30B6\u30FC\u30E2\u30FC\u30C9\u3068",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"})," / ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"}),"\u3092\u547C\u3073\u51FA\u3057\u305F\u3068\u304D\u306B\u306E\u307F\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306B\u5BFE\u3057\u3066\u30EC\u30B3\u30FC\u30C9\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u884C\u3044\u305F\u3044\u5834\u5408\u3001\u30C6\u30FC\u30D6\u30EB\u540D\u3068\u30BB\u30C3\u30C8\u540D\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002UserSet\u30BB\u30C3\u30C8\u306B\u3064\u3044\u3066\u306F",(0,d.jsx)(n.em,{children:"\u30BB\u30C3\u30C8"}),"\u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u3001\u305D\u306E\u30EA\u30B9\u30C8\u306E\u81EA\u52D5\u30B9\u30AF\u30ED\u30FC\u30EB\u6A5F\u80FD\u304C\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306B\u3088\u308A\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-set-scroll-position",title:"OBJECT SET SCROLL POSITION",children:"OBJECT SET SCROLL POSITION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u72EC\u81EA\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u7BA1\u7406\u3092\u884C\u3048\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u7D44\u307F\u8FBC\u307F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u5834\u5408\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u9078\u629E\u30E2\u30FC\u30C9\u30D7\u30ED\u30D1\u30C6\u30A3\u3067",(0,d.jsx)(n.strong,{children:"\u8907\u6570"}),"\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001HIGHLIGHT RECORDS \u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u884C\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3059\u308B\u306B\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/goto-selected-record",title:"GOTO SELECTED RECORD",children:"GOTO SELECTED RECORD"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8868\u793A\u3055\u308C\u308B\u51FA\u529B\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u30E6\u30FC\u30B6\u304C\u691C\u7D22\u3092\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u3068\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u30D5\u30A9\u30FC\u30E0\u5185\u306B",(0,d.jsx)(n.strong,{children:"\u691C\u7D22"}),"\u30DC\u30BF\u30F3\u3092\u7F6E\u3044\u3066\u3001\u62BC\u3055\u308C\u305F\u6642\u306B\u4E0B\u8A18\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"UserSet")\n\xa0QUERY\n\xa0SET QUERY DESTINATION(Into current selection)\n\xa0HIGHLIGHT RECORDS\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u30E6\u30FC\u30B6\u304C\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6A19\u6E96\u306E\u691C\u7D22\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u3001\u691C\u7D22\u304C\u5B9F\u884C\u3055\u308C\u305F\u5F8C\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u53CD\u8EE2\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-highlighted-records",children:"GET HIGHLIGHTED RECORDS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"656"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let d={},r=t.createContext(d);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);