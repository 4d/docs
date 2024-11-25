"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3176"],{450319:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-picture-keywords","title":"GET PICTURE KEYWORDS","description":"GET PICTURE KEYWORDS ( picture ; arrKeywords {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-picture-keywords.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-keywords","permalink":"/docs/ja/commands/get-picture-keywords","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-keywords.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-keywords","title":"GET PICTURE KEYWORDS","slug":"/commands/get-picture-keywords","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FROM LIBRARY","permalink":"/docs/ja/commands/get-picture-from-library"},"next":{"title":"GET PICTURE METADATA","permalink":"/docs/ja/commands/get-picture-metadata"}}'),s=t("785893"),d=t("250065");let c={id:"get-picture-keywords",title:"GET PICTURE KEYWORDS",slug:"/commands/get-picture-keywords",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET PICTURE KEYWORDS"})," ( ",(0,s.jsx)(n.em,{children:"picture"})," ; ",(0,s.jsx)(n.em,{children:"arrKeywords"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"picture"}),(0,s.jsx)(n.td,{children:"Picture, Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53D6\u5F97\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrKeywords"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53D7\u3051\u53D6\u308B\u914D\u5217"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6307\u5B9A\u6642: \u91CD\u8907\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53D6\u308A\u9664\u304F"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET PICTURE KEYWORDS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u306B\u6E21\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u306E\u30EA\u30B9\u30C8\u3092",(0,s.jsx)(n.em,{children:"arrKeywords"}),"\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IPTC/Keywords"})," \u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u3060\u3051\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u30BF\u30A4\u30D7\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u3053\u306E\u30BF\u30A4\u30D7\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC (JPEG, TIFF, \u7B49) \u306B\u5BFE\u3057\u3066\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," 4D\u306FIPTC/Keywords\u30BF\u30A4\u30D7\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059 (\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AD\u30FC\u30EF\u30FC\u30C9\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u30EA\u30B9\u30C8\u4E2D\u306E\u3059\u3079\u3066\u306E\u5024\u304C\u30E6\u30CB\u30FC\u30AF\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u306BIPTC/Keywords\u30E1\u30BF\u30FC\u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7A7A\u306E\u914D\u5217\u3092\u8FD4\u3057\u3001\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"}),' \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u308B\u7D50\u679C\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E"\u975E\u6587\u5B57\u30FB\u975E\u6570\u5B57\u306E\u307F\u3092\u30AD\u30FC\u30EF\u30FC\u30C9\u533A\u5207\u308A\u6587\u5B57\u3068\u3059\u308B"\u306E\u73FE\u5728\u5024\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059 (',(0,s.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"}),"\u53C2\u7167)\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-picture-metadata",children:"GET PICTURE METADATA"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-picture-metadata",children:"SET PICTURE METADATA"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var r=t(667294);let s={},d=r.createContext(s);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);