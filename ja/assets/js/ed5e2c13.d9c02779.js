"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41596"],{971890:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>r,metadata:()=>c,assets:()=>o,toc:()=>l,contentTitle:()=>i});var c=JSON.parse('{"id":"commands-legacy/object-get-action","title":"OBJECT Get action","description":"OBJECT Get action ( { ;} object* ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-action","permalink":"/docs/ja/commands/object-get-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-action","title":"OBJECT Get action","slug":"/commands/object-get-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT DUPLICATE","permalink":"/docs/ja/commands/object-duplicate"},"next":{"title":"OBJECT Get auto spellcheck","permalink":"/docs/ja/commands/object-get-auto-spellcheck"}}'),s=t("785893"),d=t("250065");let r={id:"object-get-action",title:"OBJECT Get action",slug:"/commands/object-get-action",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get action"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u3068(\u3042\u308C\u3070)\u5F15\u6570\u306E\u6587\u5B57\u5217"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get action"})," \u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3068*** \u5F15\u6570\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u540D\u524D\u3068\u5F15\u6570(\u3042\u308C\u3070)\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,s.jsx)(n.em,{children:"object"})," \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059(\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,s.jsx)(n.em,{children:"object"})," \u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u53C2\u7167(\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u307F)\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30E0\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3001\u3042\u308B\u3044\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/object-set-action",children:"OBJECT SET ACTION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,s.jsx)(n.strong,{children:"OBJECT Get action"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u540D\u524D\u3092\u542B\u3080\u6587\u5B57\u5217(\u306B\u52A0\u3048\u3066\u3001\u3042\u308C\u3070\u5F15\u6570\u3082)\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5168\u4F53\u7684\u306A\u4E00\u89A7\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(n.em,{children:"\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"}),"\u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,s.jsx)(n.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:'\u30D5\u30A9\u30FC\u30E0\u5185\u306B\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u3046\u3061\u3001\u307E\u3060\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u306A\u3044\u3082\u306E\u5168\u3066\u306B\u5BFE\u3057\u3066\u3001"\u30AD\u30E3\u30F3\u30BB\u30EB"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($arrObjects;0)\n\xa0\n\xa0FORM GET OBJECTS($arrObjects)\n\xa0For($i;1;Size of array($arrObjects))\n\xa0\xa0\xa0\xa0If(OBJECT Get action(*;$arrObjects{$i})=ak none)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/commands/object-set-action",children:"OBJECT SET ACTION"})}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1457"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var c=t(667294);let s={},d=c.createContext(s);function r(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);