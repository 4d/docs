"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37032"],{858608:function(e,n,l){l.r(n),l.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"commands/formula","title":"Formula","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/formula.md","sourceDirName":"commands","slug":"/commands/formula","permalink":"/docs/ja/commands/formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fformula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"formula","title":"Formula","slug":"/commands/formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE FORMULA","permalink":"/docs/ja/commands/execute-formula"},"next":{"title":"Formula from string","permalink":"/docs/ja/commands/formula-from-string"}}'),s=l("785893"),t=l("250065");let c={id:"formula",title:"Formula",slug:"/commands/formula",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function i(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R6"}),(0,s.jsx)(n.td,{children:"\u540D\u79F0\u5909\u66F4 (New formula -> Formula)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R3"}),(0,s.jsx)(n.td,{children:"\u8FFD\u52A0"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Formula"})," ( ",(0,s.jsx)(n.em,{children:"formulaExp"})," : Expression ) : 4D.Function"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formulaExp"}),(0,s.jsx)(n.td,{children:"\u5F0F"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3055\u308C\u308B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30CD\u30A4\u30C6\u30A3\u30D6\u306A Function \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Formula"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"formulaExp"})," \u306E\u5F0F\u306B\u57FA\u3065\u3044\u305F ",(0,s.jsx)(n.code,{children:"4D Function"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 ",(0,s.jsx)(n.em,{children:"formulaExp"})," \u306B\u306F\u5358\u4E00\u306E\u5024\u306E\u3088\u3046\u306B\u30B7\u30F3\u30D7\u30EB\u306A\u3082\u306E\u304B\u3089\u3001\u5F15\u6570\u3092\u6301\u3064\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u3088\u3046\u306B\u8907\u96D1\u306A\u3082\u306E\u307E\u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:'\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u5B58\u5728\u3059\u308B\u3053\u3068\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u3084\u30E1\u30BD\u30C3\u30C9\u306B\u5BFE\u3057\u3066\u5F15\u6570 (\u8A08\u7B97\u3055\u308C\u305F\u5C5E\u6027) \u3068\u3057\u3066\u6E21\u3057\u305F\u308A\u3001"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u9593\u3067\u5171\u6709" \u3068\u3057\u3066\u5BA3\u8A00\u305B\u305A\u3068\u3082\u69D8\u3005\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B9F\u884C\u3057\u305F\u308A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u547C\u3073\u51FA\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u305D\u308C\u3092\u4F5C\u6210\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3042\u308B\u3044\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u8A55\u4FA1\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#call",children:(0,s.jsx)(n.code,{children:".call()"})})," \u3042\u308B\u3044\u306F ",(0,s.jsx)(n.a,{href:"#apply",children:(0,s.jsx)(n.code,{children:".apply()"})})," \u95A2\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8A18\u6CD5\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9 (",(0,s.jsx)(n.a,{href:"#formula-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"Formula \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u53C2\u7167)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n $o:=New object("myFormula";$f)\n\n  // \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u547C\u3073\u51FA\u3059 3\u3064\u306E\u65B9\u6CD5\n $f.call($o) // 3 \u3092\u8FD4\u3057\u307E\u3059\n $f.apply($o) // 3 \u3092\u8FD4\u3057\u307E\u3059\n $o.myFormula() // 3 \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306B\u306F ",(0,s.jsx)(n.a,{href:"#%E5%BC%95%E6%95%B0%E3%81%AE%E5%8F%97%E3%81%91%E6%B8%A1%E3%81%97",children:"\u5F15\u6570"})," \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,s.jsx)(n.a,{href:"#%E4%BE%8B%E9%A1%8C-4",children:"\u4F8B\u984C4"})," \u53C2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u5BFE\u8C61\u3068\u306A\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,s.jsx)(n.a,{href:"#%E4%BE%8B%E9%A1%8C-5",children:"\u4F8B\u984C5"})," \u53C2\u7167)\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001",(0,s.jsx)(n.code,{children:"This"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"formulaExp"})," \u304C\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u8FD4\u3055\u308C\u308B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u6642\u306B\u305D\u306E\u5024\u304C\u305D\u3053\u306B\u30B3\u30D4\u30FC\u3055\u308C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u5B9F\u884C\u6642\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u305D\u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u73FE\u5728\u5024\u3067\u306F\u306A\u304F\u3001\u30B3\u30D4\u30FC\u3055\u308C\u305F\u5024\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3068\u3057\u3066\u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Formula"})," \u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u305F\u3068\u3048\u3070\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3084 Blob \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u306B\u4FDD\u5B58\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(n.p,{children:"\u5358\u7D14\u306A\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u4F8B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n\n var $o : Object\n $o:=New object("f";$f)\n\n $result:=$o.f() // 3 \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(n.p,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u4F8B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n\n $value:=10\n $o:=New object("f";Formula($value))\n $value:=20\n\n $result:=$o.f() // 10 \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,s.jsx)(n.p,{children:"\u5F15\u6570\u3092\u7528\u3044\u305F\u30B7\u30F3\u30D7\u30EB\u306A\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u4F8B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula($1+$2))\n $result:=$o.f(10;20) // 30 \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,s.jsx)(n.p,{children:"\u5F15\u6570\u3092\u7528\u3044\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u4F8B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula(myMethod))\n $result:=$o.f("param1";"param2") // $result:=myMethod("param1";"param2") \u3068\u540C\u7B49\u3067\u3059\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"This"})," \u3092\u4F7F\u7528\u3059\u308B\u4F8B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))\n $o.firstName:="John"\n $o.lastName:="Smith"\n $result:=$o.fullName() // "John Smith" \u3092\u8FD4\u3057\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,s.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8A18\u6CD5\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u547C\u3073\u51FA\u3059\u4F8B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $feta; $robot : Object\n var $calc : 4D.Function\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n  // \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u8A2D\u5B9A\u3057\u307E\u3059\n $feta.calc:=$calc\n $robot.calc:=$calc\n\n  // \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\n $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}\n $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/ja/new-formula-more-power-behind-simplicity/",children:"4D Blog - \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9: \u30B7\u30F3\u30D7\u30EB\u3055\u306E\u88CF\u306B\u3042\u308B\u3001\u3055\u3089\u306A\u308B\u30D1\u30EF\u30FC"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://blog.4d.com/ja/new-formula-think-outside-the-box/",children:"4D Blog - \u30D5\u30A9\u30FC\u30DF\u30E5\u30E9: \u65E2\u6210\u6982\u5FF5\u306B\u3068\u3089\u308F\u308C\u306A\u3044\u767A\u60F3"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://blog.4d.com/ja/write-your-own-methods-for-objects/",children:"4D Blog - \u72EC\u81EA\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30AB\u30D7\u30BB\u30EB\u5316\u3059\u308B"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/formula-from-string",children:"Formula from string"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return c}});var r=l(667294);let s={},t=r.createContext(s);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);