"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31849"],{69737:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-font","title":"OBJECT SET FONT","description":"OBJECT SET FONT ( { ;} object ; font* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-font.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font","permalink":"/docs/ja/commands/object-set-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font","title":"OBJECT SET FONT","slug":"/commands/object-set-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/ja/commands/object-set-focus-rectangle-invisible"},"next":{"title":"OBJECT SET FONT SIZE","permalink":"/docs/ja/commands/object-set-font-size"}}'),d=s("785893"),c=s("250065");let r={id:"object-set-font",title:"OBJECT SET FONT",slug:"/commands/object-set-font",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT SET FONT"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"object"})," ; ",(0,d.jsx)(n.em,{children:"font"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"font"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A9\u30F3\u30C8\u540D\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["OBJECT SET FONT \u306F",(0,d.jsx)(n.em,{children:"object"})," \u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3001",(0,d.jsx)(n.em,{children:"font"})," \u306B\u6E21\u3057\u305F\u30D5\u30A9\u30F3\u30C8\u540D\u307E\u305F\u306F\u30D5\u30A9\u30F3\u30C8\u756A\u53F7\u306E\u30D5\u30A9\u30F3\u30C8\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u8A2D\u5B9A\u3057\u307E\u3059\u3002 ",(0,d.jsx)(n.em,{children:"font"})," \u5F15\u6570\u306B\u306F\u6709\u52B9\u306A\u30D5\u30A9\u30F3\u30C8\u540D\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"object"}),"\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059 (\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,d.jsx)(n.em,{children:"object"}),"\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u53C2\u7167 (\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u307F) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8\u610F:"})," ",(0,d.jsx)(n.em,{children:"object"})," \u5F15\u6570\u306B\u3001\u65E2\u306B\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304B\u3089\u305D\u306E\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3078\u306E\u53C2\u7167\u306F\u81EA\u52D5\u7684\u306B\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u30B3\u30DE\u30F3\u30C9\u3067\u5272\u308A\u5F53\u3066\u305F\u5C5E\u6027\u304C\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u306E\u3082\u306E\u3068\u540C\u3058\u3067\u3082\u53C2\u7167\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F",(0,d.jsx)(n.em,{children:"bOK"}),"\u3068\u3044\u3046\u540D\u524D\u306E\u30DC\u30BF\u30F3\u306B\u5BFE\u3057\u3066\u30D5\u30A9\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(bOK;"Arial")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:'\u4EE5\u4E0B\u306E\u4F8B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B"info"\u3092\u542B\u3080\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(*;"@info@";"Times")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsxs)(n.p,{children:['\u4EE5\u4E0B\u306E\u4F8B\u306F"\u30D1\u30B9\u30EF\u30FC\u30C9"\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u5165\u529B\u30FB\u8868\u793A\u306E\u305F\u3081\u306B\u8A2D\u8A08\u3055\u308C\u305F\u7279\u6B8A\u306A ',(0,d.jsx)(n.em,{children:"%password"}),' \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002"%password"\u3092 ',(0,d.jsx)(n.em,{children:"font"})," \u5F15\u6570\u306B\u6E21\u3059\u3068:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5165\u529B\u3055\u308C\u305F\u6587\u5B57\u306F\u5168\u3066\u540C\u3058\u8A18\u53F7\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.li,{children:'\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u306E"\u30AB\u30C3\u30C8"\u3068"\u30B3\u30D4\u30FC"\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\u3002'}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(n.em,{children:"%password"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u305D\u3057\u3066\u30B3\u30F3\u30DC\u30DC\u30C3\u30AF\u30B9\u578B\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT([Users]Password;"%password")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/font-file",children:"Font file"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/font-list",children:"FONT LIST"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/object-get-font",children:"OBJECT Get font"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306B\u95A2\u3059\u308B\u6CE8\u610F"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"164"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let d={},c=t.createContext(d);function r(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);