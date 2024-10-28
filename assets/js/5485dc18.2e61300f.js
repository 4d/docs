"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22753],{109263:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=o(474848),t=o(28453);const s={id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},a=void 0,d={id:"WritePro/commands-legacy/wp-delete-bookmark",title:"WP DELETE BOOKMARK",description:"WP DELETE BOOKMARK ( wpDoc ; bkName )",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-delete-bookmark.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-delete-bookmark",permalink:"/docs/WritePro/commands/wp-delete-bookmark",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-bookmark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP COMPUTE FORMULAS",permalink:"/docs/WritePro/commands/wp-compute-formulas"},next:{title:"WP DELETE FOOTER",permalink:"/docs/WritePro/commands/wp-delete-footer"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function m(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," ; ",(0,r.jsx)(n.em,{children:"bkName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wpDoc"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bkName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name of bookmark to delete"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," command removes the bookmark named ",(0,r.jsx)(n.em,{children:"bkName"})," from ",(0,r.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"bkName"})," bookmark does not exist in ",(0,r.jsx)(n.em,{children:"wpDoc"}),", the command does nothing."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to rename an existing bookmark. To do this, you need to create a new bookmark with the same range, and then delete the old one:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var r=o(296540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);