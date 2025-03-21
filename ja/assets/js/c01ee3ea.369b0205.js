"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66696"],{609145:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-text-from-pasteboard","title":"Get text from pasteboard","description":"Get text from pasteboard  : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-text-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-from-pasteboard","permalink":"/docs/ja/commands/get-text-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-from-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-text-from-pasteboard","title":"Get text from pasteboard","slug":"/commands/get-text-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/ja/commands/get-picture-from-pasteboard"},"next":{"title":"Pasteboard data size","permalink":"/docs/ja/commands/pasteboard-data-size"}}'),r=n("785893"),d=n("250065");let a={id:"get-text-from-pasteboard",title:"Get text from pasteboard",slug:"/commands/get-text-from-pasteboard",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(e){let t={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Get text from pasteboard"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5F15\u6570"}),(0,r.jsx)(t.th,{children:"\u578B"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u4E2D\u306E\u30C6\u30AD\u30B9\u30C8 (\u3042\u308C\u3070)"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(t.p,{children:"Get text from pasteboard \u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306B\u5B58\u5728\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," \u30B3\u30D4\u30FC/\u30DA\u30FC\u30B9\u30C8\u64CD\u4F5C\u3067\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306BRTF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306A\u3069\u306E\u30EA\u30C3\u30C1\u30C6\u30AD\u30B9\u30C8\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u30B3\u30D4\u30FC\u5148\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308C\u3070\u3001\u30C9\u30ED\u30C3\u30D7\u3084\u30DA\u30FC\u30B9\u30C8\u3055\u308C\u305F\u3068\u304D\u30C6\u30AD\u30B9\u30C8\u306E\u5C5E\u6027\u306F\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(t.p,{children:"4D\u306E\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30012GB\u307E\u3067\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(t.p,{children:"\u30C6\u30AD\u30B9\u30C8\u304C\u6B63\u3057\u304F\u53D6\u308A\u51FA\u3055\u308C\u308B\u3068OK\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ja/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ja/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ja/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(t.td,{children:"524"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(667294);let r={},d=s.createContext(r);function a(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);