"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72305"],{218910:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/set-text-to-pasteboard","title":"SET TEXT TO PASTEBOARD","description":"SET TEXT TO PASTEBOARD ( text )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-text-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-text-to-pasteboard","permalink":"/docs/ja/commands/set-text-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-text-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-text-to-pasteboard","title":"SET TEXT TO PASTEBOARD","slug":"/commands/set-text-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE TO PASTEBOARD","permalink":"/docs/ja/commands/set-picture-to-pasteboard"},"next":{"title":"Pictures","permalink":"/docs/ja/category/pictures"}}'),d=n("785893"),r=n("250065");let a={id:"set-text-to-pasteboard",title:"SET TEXT TO PASTEBOARD",slug:"/commands/set-text-to-pasteboard",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"SET TEXT TO PASTEBOARD"})," ( ",(0,d.jsx)(t.em,{children:"text"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u5F15\u6570"}),(0,d.jsx)(t.th,{children:"\u578B"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u7F6E\u304F\u30C6\u30AD\u30B9\u30C8"})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(t.p,{children:["SET TEXT TO PASTEBOARD \u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u3092\u6D88\u53BB\u3057\u3001",(0,d.jsx)(t.em,{children:"text"}),"\u306B\u6E21\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u306E\u30B3\u30D4\u30FC\u3092\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u7F6E\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," \u30B3\u30D4\u30FC/\u30DA\u30FC\u30B9\u30C8\u64CD\u4F5C\u3067\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:["\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u7F6E\u3044\u305F\u5F8C\u3001",(0,d.jsx)(t.a,{href:"/docs/ja/commands/get-text-from-pasteboard",title:"Get text from pasteboard",children:"Get text from pasteboard"})," \u30B3\u30DE\u30F3\u30C9 \u307E\u305F\u306F\u4F8B\u3048\u3070 GET PASTEBOARD DATA ",(0,d.jsx)(t.strong,{children:'("com.4d.private.text.native";...)'})," \u3092\u4F7F\u7528\u3057\u3066\u3001\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(t.p,{children:"4D\u306E\u30C6\u30AD\u30B9\u30C8\u5F0F\u306F\u6700\u59272 GB\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," On Drag Over \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u4E2D\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306F\u8AAD\u307F\u8FBC\u307F\u306E\u307F\u30E2\u30FC\u30C9\u3067\u3059\u3002\u3053\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(t.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/ja/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(t.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsxs)(t.p,{children:["\u30C6\u30AD\u30B9\u30C8\u306E\u30B3\u30D4\u30FC\u304C\u6B63\u3057\u304F\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u7F6E\u304B\u308C\u308B\u3068\u3001OK\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(t.br,{}),"\n\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u7F6E\u304F\u305F\u3081\u306E\u30E1\u30E2\u30EA\u304C\u5341\u5206\u306B\u306A\u3044\u5834\u5408\u3001OK\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u304C\u3001\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/ja/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,d.jsx)(t.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(t.td,{children:"523"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(t.td,{children:"\u2717"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(t.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(667294);let d={},r=s.createContext(d);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);