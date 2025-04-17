"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95169"],{849893:function(e,n,o){o.r(n),o.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-bookmark","title":"WP DELETE BOOKMARK","description":"WP DELETE BOOKMARK ( wpDoc ; bkName )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-delete-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-bookmark","permalink":"/docs/20-R8/WritePro/commands/wp-delete-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-bookmark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-delete-bookmark","title":"WP DELETE BOOKMARK","slug":"/WritePro/commands/wp-delete-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/20-R8/WritePro/commands/wp-compute-formulas"},"next":{"title":"WP DELETE FOOTER","permalink":"/docs/20-R8/WritePro/commands/wp-delete-footer"}}'),t=o("785893"),a=o("250065");let s={id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," ( ",(0,t.jsx)(n.em,{children:"wpDoc"})," ; ",(0,t.jsx)(n.em,{children:"bkName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpDoc"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bkName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of bookmark to delete"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," command removes the bookmark named ",(0,t.jsx)(n.em,{children:"bkName"})," from ",(0,t.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:"bkName"})," bookmark does not exist in ",(0,t.jsx)(n.em,{children:"wpDoc"}),", the command does nothing."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to rename an existing bookmark. To do this, you need to create a new bookmark with the same range, and then delete the old one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return s}});var r=o(667294);let t={},a=r.createContext(t);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);