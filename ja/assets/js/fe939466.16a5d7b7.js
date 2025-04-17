"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3712"],{328319:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/load-variables","title":"LOAD VARIABLES","description":"LOAD VARIABLES ( document ; variable {; variable2 ; ... ; variableN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/load-variables.md","sourceDirName":"commands-legacy","slug":"/commands/load-variables","permalink":"/docs/ja/20-R8/commands/load-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"load-variables","title":"LOAD VARIABLES","slug":"/commands/load-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR VARIABLE","permalink":"/docs/ja/20-R8/commands/clear-variable"},"next":{"title":"SAVE VARIABLES","permalink":"/docs/ja/20-R8/commands/save-variables"}}'),r=s("785893"),l=s("250065");let a={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOAD VARIABLES"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"variable"})," {; ",(0,r.jsx)(n.em,{children:"variable2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D\u5909\u6570\u3092\u4FDD\u5B58\u3057\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variable"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u5024\u3092\u53D7\u3051\u53D6\u308B\u5909\u6570"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["LOAD VARIABLES \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"document"}),"\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u30891\u3064\u307E\u305F\u306F\u3044\u304F\u3064\u304B\u306E\u5909\u6570\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002\u305D\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/save-variables",title:"SAVE VARIABLES",children:"SAVE VARIABLES"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u3082\u306E\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5909\u6570 ",(0,r.jsx)(n.em,{children:"variable"})," \u3001",(0,r.jsx)(n.em,{children:"variable2"}),"...",(0,r.jsx)(n.em,{children:"variableN"})," \u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u304C\u65E2\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"document"}),"\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u6A19\u6E96\u7684\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u3001\u30E6\u30FC\u30B6\u306F\u958B\u304F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u9078\u629E\u3055\u308C\u308B\u3068\u30014D\u30B7\u30B9\u30C6\u30E0\u5909\u6570Document\u306B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u540D\u304C\u5165\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u5909\u6570\u306F\u30C7\u30A3\u30B9\u30AF\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u5909\u6570\u3068\u540C\u3058\u30BF\u30A4\u30D7\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u914D\u5217\u5909\u6570\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002\u65B0\u3057\u304F\u5C0E\u5165\u3055\u308C\u305FBLOB\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u3092\u4F7F\u7528\u3057\u3066\u3001UserPrefs\u3068\u3044\u3046\u540D\u524D\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u30893\u3064\u306E\u5909\u6570\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("User Prefs";vsName;vlCode;vgIconpicture)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u304C\u6B63\u3057\u304F\u30ED\u30FC\u30C9\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"74"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK\u3001Document"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var d=s(667294);let r={},l=d.createContext(r);function a(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);