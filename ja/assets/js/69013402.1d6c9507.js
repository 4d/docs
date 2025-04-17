"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48466"],{429214:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-bookmark-range","title":"WP Bookmark range","description":"WP Bookmark range ( wpDoc ; bkName ) -> \u623B\u308A\u5024","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-bookmark-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-bookmark-range","permalink":"/docs/ja/WritePro/commands/wp-bookmark-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-bookmark-range.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-bookmark-range","title":"WP Bookmark range","slug":"/WritePro/commands/wp-bookmark-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Add picture","permalink":"/docs/ja/WritePro/commands/wp-add-picture"},"next":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/ja/WritePro/commands/wp-compute-formulas"}}'),t=r("785893"),s=r("250065");let a={id:"wp-bookmark-range",title:"WP Bookmark range",slug:"/WritePro/commands/wp-bookmark-range",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," ( ",(0,t.jsx)(n.em,{children:"wpDoc"})," ; ",(0,t.jsx)(n.em,{children:"bkName"})," ) -> \u623B\u308A\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpDoc"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4D Write Pro\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bkName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u3092\u53D6\u5F97\u3057\u305F\u3044\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u540D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u30EC\u30F3\u30B8"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," was named ",(0,t.jsx)(n.strong,{children:"WP Get bookmark range"})," in previous versions of 4D Write Pro. It has been renamed for clarity."]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"wpDoc"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F4D Write Pro\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E\u3001",(0,t.jsx)(n.em,{children:"bkName"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u30EC\u30F3\u30B8\u3092\u683C\u7D0D\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(rangeObj)\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"bkName"})," \u306E\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u304C",(0,t.jsx)(n.em,{children:"wpDoc"})," \u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306B\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u7A7A\u306ErangeObj\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:'\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E"MyBookmark"\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u30EC\u30F3\u30B8\u3092\u8868\u793A\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Bookmark range(WParea;"MyBookmark")\n\xa0WP SELECT(WParea;$wpRange)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var o=r(667294);let t={},s=o.createContext(t);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);