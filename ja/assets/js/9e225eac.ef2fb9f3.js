"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83189"],{481228:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/method-get-comments","title":"METHOD GET COMMENTS","description":"METHOD GET COMMENTS ( path ; comments {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-comments.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-comments","permalink":"/docs/ja/commands/method-get-comments","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-comments.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-comments","title":"METHOD GET COMMENTS","slug":"/commands/method-get-comments","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET CODE","permalink":"/docs/ja/commands/method-get-code"},"next":{"title":"METHOD GET FOLDERS","permalink":"/docs/ja/commands/method-get-folders"}}'),d=t("785893"),c=t("250065");let r={id:"method-get-comments",title:"METHOD GET COMMENTS",slug:"/commands/method-get-comments",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET COMMENTS"})," ( ",(0,d.jsx)(n.em,{children:"path"})," ; ",(0,d.jsx)(n.em,{children:"comments"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text, Text\u914D\u5217"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30BD\u30C3\u30C9\u30D1\u30B9\u3092\u683C\u7D0D\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"comments"}),(0,d.jsx)(n.td,{children:"Text, Text\u914D\u5217"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30E1\u30BD\u30C3\u30C9\u306E\u30B3\u30E1\u30F3\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u6642 = \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u9069\u7528\u3059\u308B (\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u3067\u306F\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET COMMENTS"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.em,{children:"path"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092",(0,d.jsx)(n.em,{children:"comments"}),"\u5F15\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u53D6\u5F97\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u30014D\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u30B3\u30E1\u30F3\u30C8\u6B04\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u3082\u306E\u3067\u3059 (",(0,d.jsx)(n.a,{href:"/docs/ja/commands/method-get-code",children:"METHOD GET CODE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u53D6\u5F97\u3067\u304D\u308B\u30B3\u30FC\u30C9\u5185\u306E\u30B3\u30E1\u30F3\u30C8\u884C\u3067\u306F\u3042\u308A\u307E\u305B\u3093)\u3002\u30B3\u30E1\u30F3\u30C8\u306F\u30B9\u30BF\u30A4\u30EB\u4ED8\u304D\u30C6\u30AD\u30B9\u30C8\u3067\u3059:"]}),"\n",(0,d.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u683C\u7D0D\u3055\u308C\u308B\u3082\u306E\u304C\u7570\u306A\u308A\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306Fmarkdown\u30C6\u30AD\u30B9\u30C8"}),"\n",(0,d.jsx)(n.li,{children:"\u30D0\u30A4\u30CA\u30EA\u30FC\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u30B9\u30BF\u30A4\u30EB\u4ED8\u304D\u30C6\u30AD\u30B9\u30C8"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(332534).Z+"",width:"869",height:"271"})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30C8\u30EA\u30AC\u30FC\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3001\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3001\u30AF\u30E9\u30B9\u306B\u5BFE\u3057\u3066\u751F\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30D5\u30A9\u30FC\u30E0\u3068\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u306F\u540C\u3058\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u5171\u6709\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u306B\u57FA\u3065\u304F2\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// \u30C6\u30AD\u30B9\u30C8\u5909\u6570\n\xa0var tVcomments : Text\n\xa0METHOD GET COMMENTS(tVpath;tVcomments)\xa0// 1\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// \u30C6\u30AD\u30B9\u30C8\u914D\u5217\n\xa0ARRAY TEXT(arrComments;0)\n\xa0METHOD GET COMMENTS(arrPaths;arrComments)\xa0// \u8907\u6570\u30E1\u30BD\u30C3\u30C9\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\n"})}),"\n",(0,d.jsx)(n.p,{children:"2\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u6DF7\u5408\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u9069\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/method-set-comments",children:"METHOD SET COMMENTS"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},332534:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict4968699.en-4ba2c70a2c9224e453d4a0b950fced20.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let d={},c=s.createContext(d);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);