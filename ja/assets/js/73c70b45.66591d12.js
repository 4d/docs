"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71503"],{86076:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/show-on-disk","title":"SHOW ON DISK","description":"SHOW ON DISK ( pathname {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/show-on-disk.md","sourceDirName":"commands-legacy","slug":"/commands/show-on-disk","permalink":"/docs/ja/commands/show-on-disk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshow-on-disk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"show-on-disk","title":"SHOW ON DISK","slug":"/commands/show-on-disk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DOCUMENT SIZE","permalink":"/docs/ja/commands/set-document-size"},"next":{"title":"Test path name","permalink":"/docs/ja/commands/test-path-name"}}'),d=s("785893"),i=s("250065");let r={id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SHOW ON DISK"})," ( ",(0,d.jsx)(e.em,{children:"pathname"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"pathname"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8868\u793A\u3059\u308B\u30A2\u30A4\u30C6\u30E0\u306E\u30D1\u30B9\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A2\u30A4\u30C6\u30E0\u304C\u30D5\u30A9\u30EB\u30C0\u306E\u5834\u5408\u3001\u305D\u306E\u5185\u5BB9\u3092\u8868\u793A"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["SHOW ON DISK\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u306E\u6A19\u6E96\u30A6\u30A3\u30F3\u30C9\u30A6\u4E0A\u306B\u3001\u5F15\u6570",(0,d.jsx)(e.em,{children:"pathname"})," \u306B\u6E21\u3057\u305F\u30D1\u30B9\u540D\u3092\u6301\u3064\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u30D5\u30A9\u30EB\u30C0\u3092\u8868\u793A\u3057\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u30E6\u30FC\u30B6\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3067\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u7279\u5B9A\u306E\u30D5\u30A1\u30A4\u30EB\u3084\u30D5\u30A9\u30EB\u30C0\u306E\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001",(0,d.jsx)(e.em,{children:"pathname"}),"\u304C\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30EB\u30C0\u81EA\u4F53\u306E\u30EC\u30D9\u30EB\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u4EFB\u610F\u306E\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9 \u306F\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304D\u3001\u305D\u306E\u5185\u5BB9\u3092\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u8868\u793A\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"pathname"})," \u304C\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u6B21\u306E\u4F8B\u3067\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u6A5F\u80FD\u3092\u8868\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\MyFile.txt")\xa0//\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3059\u308B\u3002\n'})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:s(527739).Z+"",width:"356",height:"287"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2")\xa0//\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u3092\u8868\u793A\u3059\u308B\u3002\n'})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:s(864663).Z+"",width:"356",height:"287"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2";*)\xa0//\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u306E\u5185\u5BB9\u3092\u8868\u793A\u3059\u308B\u3002\n'})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:s(120277).Z+"",width:"364",height:"274"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"922"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK\u3001error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},527739:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict35007.ja-1dd323118e13d5b6b0506176f9039703.png"},864663:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict35008.ja-a527a94ed1b3f846704ee0bdab317474.png"},120277:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict35009.ja-f546af00a7465c8e73ca7c3569913080.png"},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let d={},i=t.createContext(d);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);