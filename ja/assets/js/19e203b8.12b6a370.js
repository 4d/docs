"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70555"],{657730:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","description":"GET PICTURE FROM PASTEBOARD ( picture )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-picture-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-pasteboard","permalink":"/docs/ja/commands/get-picture-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-pasteboard.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","slug":"/commands/get-picture-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/ja/commands/get-pasteboard-data-type"},"next":{"title":"Get text from pasteboard","permalink":"/docs/ja/commands/get-text-from-pasteboard"}}'),s=n("785893"),d=n("250065");let a={id:"get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",slug:"/commands/get-picture-from-pasteboard",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," ( ",(0,s.jsx)(t.em,{children:"picture"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5F15\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"picture"}),(0,s.jsx)(t.td,{children:"Picture"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u30D4\u30AF\u30C1\u30E3"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," \u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u5185\u306B\u5B58\u5728\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092",(0,s.jsx)(t.em,{children:"picture"}),"\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u6CE8:"})," \u30B3\u30D4\u30FC/\u30DA\u30FC\u30B9\u30C8\u64CD\u4F5C\u3067\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(t.p,{children:"\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30DA\u30FC\u30B9\u30C8\u30DC\u30FC\u30C9\u4E2D\u306B\u30D4\u30AF\u30C1\u30E3 (jpeg \u307E\u305F\u306F gif \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8)\u304C\u3042\u308C\u3070\u3001\u30D5\u30A3\u30FC\u30EB\u30C9 [Employees]Photo\u306B\u4EE3\u5165\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0If(Pasteboard data size("com.4d.private.picuture.jpeg")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD([Employees]Photo)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("The pasteboard does not contain any pictures.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(t.p,{children:"\u30D4\u30AF\u30C1\u30E3\u304C\u6B63\u3057\u304F\u53D6\u308A\u51FA\u3055\u308C\u308B\u3068OK\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ja/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ja/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ja/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,s.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(t.td,{children:"522"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(667294);let s={},d=r.createContext(s);function a(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);