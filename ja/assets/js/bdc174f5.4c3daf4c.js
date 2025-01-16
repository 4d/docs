"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22244"],{124875:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/assert","title":"ASSERT","description":"ASSERT ( boolExpression {; messageText} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/assert.md","sourceDirName":"commands-legacy","slug":"/commands/assert","permalink":"/docs/ja/commands/assert","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fassert.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"assert","title":"ASSERT","slug":"/commands/assert","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT","permalink":"/docs/ja/commands/abort"},"next":{"title":"Asserted","permalink":"/docs/ja/commands/asserted"}}'),d=s("785893"),t=s("250065");let l={id:"assert",title:"ASSERT",slug:"/commands/assert",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ASSERT"})," ( ",(0,d.jsx)(n.em,{children:"boolExpression"})," {; ",(0,d.jsx)(n.em,{children:"messageText"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"boolExpression"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB\u5F0F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"messageText"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u30C6\u30AD\u30B9\u30C8"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ASSERT"})," \u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.em,{children:"boolExpression"})," \u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u3092\u8A55\u4FA1\u3057\u3001False\u3092\u8FD4\u3059\u5834\u5408\u306B\u306F\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3092\u4E2D\u6B62\u3059\u308B\u3068\u3068\u3082\u306B\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u51FA\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u3067\u3082\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u3082\u52D5\u4F5C\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"boolExpression"}),' \u5F15\u6570\u304CTrue\u306E\u5834\u5408\u306F\u3001\u4F55\u3082\u8D77\u3053\u308A\u307E\u305B\u3093\u3002False\u306B\u306A\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC-10518\u3092\u30C8\u30EA\u30AC\u30FC\u3057\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u305D\u306E\u5F8C\u306B"\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u9055\u53CD:"\u3068\u3044\u3046\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F',(0,d.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u5B9F\u88C5\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u3046\u4E8B\u306B\u3088\u308A\u5272\u308A\u8FBC\u307F\u53EF\u80FD\u3067\u3001\u305D\u308C\u306B\u3088\u308A\u3001\u4F8B\u3048\u3070\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306B\u60C5\u5831\u3092\u8A18\u9332\u3059\u308B\u306A\u3069\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570",(0,d.jsx)(n.em,{children:"messageText"})," \u3092\u4F7F\u7528\u3059\u308B\u4E8B\u3067\u3001\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u4EE3\u308F\u308A\u306B\u30AB\u30B9\u30BF\u30E0\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306F\u30B3\u30FC\u30C9\u306B\u633F\u5165\u3055\u308C\u305F\u6307\u793A\u547D\u4EE4\u3067\u3001\u30B3\u30FC\u30C9\u5B9F\u884C\u4E2D\u306E\u4F8B\u5916\u3092\u691C\u77E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3042\u308B\u6642\u70B9\u306B\u304A\u3044\u3066\u5F0F\u306E\u691C\u8A3C\u3092\u3057\u305F\u3068\u304D\u306B",(0,d.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3067\u3042\u308C\u3070\u6B63\u5E38\u3067\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u4F8B\u5916\u304C\u767A\u751F\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306F\u306A\u306B\u3088\u308A\u3001\u767A\u751F\u3059\u308B\u306F\u305A\u306E\u306A\u3044\u30B1\u30FC\u30B9\u3092\u691C\u77E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u4E3B\u306B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30D0\u30B0\u3092\u691C\u77E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001(\u4F8B\u3048\u3070\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3088\u308A)\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u3059\u3079\u3066\u306E\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u3092\u5168\u4F53\u3068\u3057\u3066\u6709\u52B9\u306B\u3057\u305F\u308A\u7121\u52B9\u306B\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306B\u304A\u3051\u308B\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001Wikipedia\u306E\u95A2\u9023\u60C5\u5831\u3092\u3054\u89A7\u304F\u3060\u3055\u3044: ",(0,d.jsx)(n.a,{href:"http://ja.wikipedia.org/wiki/%E8%A1%A8%E6%98%8E",children:"http://ja.wikipedia.org/wiki/\u8868\u660E"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u3059\u308B\u51E6\u7406\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u3001\u958B\u767A\u8005\u306F\u30EC\u30B3\u30FC\u30C9\u304C\u6B63\u3057\u304F\u8AAD\u307F/\u66F8\u304D\u30E2\u30FC\u30C9\u3067\u30ED\u30FC\u30C9\u3055\u308C\u305F\u304B\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0READ WRITE([Table 1])\n\xa0LOAD RECORD([Table 1])\n\xa0ASSERT(Not(Locked([Table 1])))\n\xa0\xa0// \u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068 -10518 \u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u308B\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3055\u308C\u305F\u5F15\u6570\u3092\u30C6\u30B9\u30C8\u3057\u3066\u3001\u7570\u5E38\u306A\u5024\u3092\u691C\u77E5\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u4F8B\u984C\u3067\u306F\u3001\u30AB\u30B9\u30BF\u30E0\u8B66\u544A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $1\u306B\u6E21\u3055\u308C\u305F\u540D\u524D\u306B\u57FA\u3065\u304D\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u756A\u53F7\u3092\u8FD4\u3059\n\xa0var $1 : Text\xa0// \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u540D\u524D\n\xa0ASSERT($1#"";"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u540D\u304C\u7A7A\u3067\u3059")\n\xa0\xa0// \u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u7A7A\u306E\u540D\u524D\u306F\u7570\u5E38\u306A\u5024\u3067\u3059\n\xa0\xa0// \u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u304Cfalse\u306E\u5834\u5408\u3001\u4EE5\u4E0B\u304C\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u8868\u793A\u3055\u308C\u307E\u3059:\n\xa0\xa0//"\u30A2\u30B5\u30FC\u30B7\u30E7\u30F3\u9055\u53CD: \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u540D\u304C\u7A7A\u3067\u3059"\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/asserted",children:"Asserted"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-assert-enabled",children:"Get assert enabled"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1129"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let d={},t=r.createContext(d);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);