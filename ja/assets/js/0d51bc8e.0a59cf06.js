"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33046"],{842542:function(n,e,d){d.r(e),d.d(e,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/mod","title":"Mod","description":"Mod ( number1 ; number2 ) : Real","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/mod.md","sourceDirName":"commands-legacy","slug":"/commands/mod","permalink":"/docs/ja/commands/mod","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmod.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mod","title":"Mod","slug":"/commands/mod","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log","permalink":"/docs/ja/commands/log"},"next":{"title":"Random","permalink":"/docs/ja/commands/random"}}'),t=d("785893"),r=d("250065");let l={id:"mod",title:"Mod",slug:"/commands/mod",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Mod"})," ( ",(0,t.jsx)(e.em,{children:"number1"})," ; ",(0,t.jsx)(e.em,{children:"number2"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"number1"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u9664\u7B97\u3055\u308C\u308B\u6570\u5024"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"number2"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u9664\u7B97\u3059\u308B\u6570\u5024"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Real"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u4F59\u308A"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Mod"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(e.em,{children:"number1"}),"\u3092",(0,t.jsx)(e.em,{children:"number2"}),"\u3067\u5272\u308A\u7B97\u3057\u3001\u305D\u306E\u4F59\u308A\u306E\u6574\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Mod"}),"\u306F\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002\u3057\u304B\u3057",(0,t.jsx)(e.em,{children:"number1"}),"\u307E\u305F\u306F",(0,t.jsx)(e.em,{children:"number2"}),"\u304C\u5B9F\u6570\u306E\u5834\u5408\u3001\u305D\u308C\u3089\u306E\u5024\u306F\u4E38\u3081\u3089\u308C\u3066\u304B\u3089",(0,t.jsx)(e.strong,{children:"Mod"}),"\u8A08\u7B97\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"(2^31\u3092\u8D85\u3048\u308B) \u30B5\u30A4\u30BA\u306E\u5927\u304D\u306A\u5B9F\u6570\u3092\u7528\u3044\u3066Mod\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u51E6\u7406\u304C\u6A19\u6E96\u7684\u306A\u30D7\u30ED\u30BB\u30C3\u30B5\u306E\u8A08\u7B97\u80FD\u529B\u306E\u9650\u754C\u306B\u9054\u3057\u3066\u3057\u307E\u3046\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u306A\u304A\u4F59\u308A\u3092\u8A08\u7B97\u3059\u308B\u305F\u3081\u306B\u30E2\u30B8\u30E5\u30FC\u30ED\u6F14\u7B97\u5B50\uFF08%\uFF09\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059 (",(0,t.jsx)(e.a,{href:"c-time.md",children:"C_TIME"}),"\u3092\u53C2\u7167)\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8B66\u544A:"})," *%*\u6F14\u7B97\u5B50\u306F\u6574\u6570\u307E\u305F\u306F\u500D\u9577\u6574\u6570\u5F0F\u3092\u7528\u3044\u3066\u6709\u52B9\u306A\u7D50\u679C\u3092\u8FD4\u3057\u307E\u3059\u3002\u5B9F\u6570\u5024\u306E\u30E2\u30B8\u30E5\u30FC\u30ED\u3092\u8A08\u7B97\u3059\u308B\u306B\u306F\u3001",(0,t.jsx)(e.strong,{children:"Mod"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001Mod\u304C\u7570\u306A\u308B\u5F15\u6570\u3067\u3069\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3059\u308B\u304B\u3092\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059\u3002\u5404\u884C\u306F",(0,t.jsx)(e.em,{children:"vlResult"}),"\u306B\u5024\u3092\u4EE3\u5165\u3057\u3001\u30B3\u30E1\u30F3\u30C8\u884C\u306B\u305D\u306E\u7D50\u679C\u3092\u8A18\u8FF0\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0vlResult:=Mod(3;2)\xa0// vlResult gets 1\n\xa0vlResult:=Mod(4;2)\xa0// vlResult gets 0\n\xa0vlResult:=Mod(3.5;2)\xa0// vlResult gets 0\n"})}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"98"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return c},a:function(){return l}});var s=d(667294);let t={},r=s.createContext(t);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);