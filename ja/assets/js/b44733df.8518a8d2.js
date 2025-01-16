"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69140"],{741436:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>c,metadata:()=>d,assets:()=>i,toc:()=>h,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/screen-depth","title":"SCREEN DEPTH","description":"SCREEN DEPTH ( depth ; color {; screen} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/screen-depth.md","sourceDirName":"commands-legacy","slug":"/commands/screen-depth","permalink":"/docs/ja/20-R7/commands/screen-depth","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-depth.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"screen-depth","title":"SCREEN DEPTH","slug":"/commands/screen-depth","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCREEN COORDINATES","permalink":"/docs/ja/20-R7/commands/screen-coordinates"},"next":{"title":"Screen height","permalink":"/docs/ja/20-R7/commands/screen-height"}}'),r=s("785893"),t=s("250065");let c={id:"screen-depth",title:"SCREEN DEPTH",slug:"/commands/screen-depth",displayed_sidebar:"docs"},l=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SCREEN DEPTH"})," ( ",(0,r.jsx)(e.em,{children:"depth"})," ; ",(0,r.jsx)(e.em,{children:"color"})," {; ",(0,r.jsx)(e.em,{children:"screen"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"depth"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u753B\u9762\u306E\u6DF1\u5EA6 (\u30AB\u30E9\u30FC\u306E\u6570 = 2^\u6DF1\u5EA6)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"color"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"1 = \u30AB\u30E9\u30FC\u753B\u9762\u30010 = \u767D\u9ED2\u307E\u305F\u306F\u30B0\u30EC\u30A4\u30B9\u30B1\u30FC\u30EB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"screen"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u753B\u9762\u756A\u53F7\u3001\u307E\u305F\u306F\u7701\u7565\u3057\u305F\u5834\u5408\u306B\u306F\u4E3B\u753B\u9762(\u30E1\u30A4\u30F3\u30B9\u30AF\u30EA\u30FC\u30F3)"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["Screen depth\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E2\u30CB\u30BF\u30FC\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u3092\u5F15\u6570",(0,r.jsx)(e.em,{children:"depth"}),"\u3068",(0,r.jsx)(e.em,{children:"color"}),"\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u753B\u9762\u306E\u6DF1\u5EA6\u304C\u5F15\u6570",(0,r.jsx)(e.em,{children:"depth"}),"\u306B\u8FD4\u3055\u308C\u307E\u3059\u3002\u753B\u9762\u306E\u6DF1\u5EA6\u306F\u3001\u30E2\u30CB\u30BF\u30FC\u4E0A\u306B\u8868\u793A\u3055\u308C\u308B\u30AB\u30E9\u30FC\u306E\u6570\u3092\u8868\u30592\u306E\u3079\u304D\u4E57\u306E\u6307\u6570\u3067\u3059\u3002\u4F8B\u3048\u3070\u3001\u30E2\u30CB\u30BF\u30FC\u304C256\u8272(2^8) \u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u753B\u9762\u306E\u6DF1\u5EA6\u306F8\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"4D\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u8868\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Black and white"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Four colors"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Millions of colors 24 bit"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"24"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Millions of colors 32 bit"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Sixteen colors"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thousands of colors"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"16"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Two fifty six colors"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"8"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u30E2\u30CB\u30BF\u30FC\u304C\u30AB\u30E9\u30FC\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"color"}),"\u306B\u306F",(0,r.jsx)(e.em,{children:"1"}),"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30E2\u30CB\u30BF\u30FC\u304C\u30B0\u30EC\u30A4\u30B9\u30B1\u30FC\u30EB\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"color"}),"\u306B\u306F",(0,r.jsx)(e.em,{children:"0"}),"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5024\u306F\u3001Macintosh\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u91CD\u8981\u3067\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"4D\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u8868\u306E\u3088\u3046\u306B\u524D\u3082\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u5B9A\u6570\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Is color"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Is gray scale"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"0"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570",(0,r.jsx)(e.em,{children:"screen"}),"\u306F\u3001\u5F97\u305F\u3044\u60C5\u5831\u306E\u30E2\u30CB\u30BF\u30FC\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5F15\u6570",(0,r.jsx)(e.em,{children:"screen"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4E3B\u753B\u9762 (\u30E1\u30A4\u30F3\u30B9\u30AF\u30EA\u30FC\u30F3) \u306E\u6DF1\u5EA6\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u591A\u304F\u306E\u30AB\u30E9\u30FC\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3059\u308B\u3068\u3057\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u306B\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u3069\u3053\u304B\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0SCREEN DEPTH($vlDepth;$vlColor)\n\xa0If($vlDepth<8)\n\xa0\xa0\xa0\xa0ALERT("The forms will look better if the monitor"+" was set to display 256 colors or more.")\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/count-screens",children:"Count screens"})}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"439"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return c}});var d=s(667294);let r={},t=d.createContext(r);function c(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);