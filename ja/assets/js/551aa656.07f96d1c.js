"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41742"],{841291:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>r,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-document-size","title":"Get document size","description":"Get document size ( document {; *} ) : Real","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-document-size.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-size","permalink":"/docs/ja/commands/get-document-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-document-size","title":"Get document size","slug":"/commands/get-document-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET DOCUMENT PROPERTIES","permalink":"/docs/ja/commands/get-document-properties"},"next":{"title":"Localized document path","permalink":"/docs/ja/commands/localized-document-path"}}'),d=t("785893"),c=t("250065");let i={id:"get-document-size",title:"Get document size",slug:"/commands/get-document-size",displayed_sidebar:"docs"},o=void 0,r={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get document size"})," ( ",(0,d.jsx)(n.em,{children:"document"})," {; *} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Text, Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u53C2\u7167\u756A\u53F7 \u307E\u305F\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u540D\u524D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Mac OS\u306E\u307F: \u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D5\u30A9\u30FC\u30AF\u306E\u30B5\u30A4\u30BA \u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30EA\u30BD\u30FC\u30B9\u30D5\u30A9\u30FC\u30AF\u306E\u30B5\u30A4\u30BA"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B5\u30A4\u30BA(\u30D0\u30A4\u30C8\u5358\u4F4D)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"Get document size\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u30D0\u30A4\u30C8\u5358\u4F4D\u3067\u8868\u793A\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u3044\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u53C2\u7167\u756A\u53F7\u3092",(0,d.jsx)(n.em,{children:"document"}),"\u306B\u6E21\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u3044\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u305D\u306E\u540D\u524D\u307E\u305F\u306F\u30D1\u30B9\u540D",(0,d.jsx)(n.em,{children:"document"}),"\u306B\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["Macintosh\u3067\u306F\u3001\u4EFB\u610F\u306E\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D5\u30A9\u30FC\u30AF\u306E\u30B5\u30A4\u30BA\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001\u30EA\u30BD\u30FC\u30B9\u30D5\u30A9\u30FC\u30AF\u306E\u30B5\u30A4\u30BA\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-document-position",children:"Get document position"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-document-position",children:"SET DOCUMENT POSITION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-document-size",children:"SET DOCUMENT SIZE"})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let d={},c=s.createContext(d);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);