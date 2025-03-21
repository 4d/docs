"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67479"],{416989:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-bookmark","title":"WP NEW BOOKMARK","description":"WP NEW BOOKMARK ( targetObj ; bkName )","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-new-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-bookmark","permalink":"/docs/20-R7/WritePro/commands/wp-new-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-bookmark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-bookmark","title":"WP NEW BOOKMARK","slug":"/WritePro/commands/wp-new-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New","permalink":"/docs/20-R7/WritePro/commands/wp-new"},"next":{"title":"WP New footer","permalink":"/docs/20-R7/WritePro/commands/wp-new-footer"}}'),t=r("785893"),o=r("250065");let s={id:"wp-new-bookmark",title:"WP NEW BOOKMARK",slug:"/WritePro/commands/wp-new-bookmark",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," ( ",(0,t.jsx)(n.em,{children:"targetObj"})," ; ",(0,t.jsx)(n.em,{children:"bkName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Range or element"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bkName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of bookmark to create"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," command creates a new bookmark named ",(0,t.jsx)(n.em,{children:"bkName"})," based upon the 4D Write Pro ",(0,t.jsx)(n.em,{children:"targetObj"})," in the parent document."]}),"\n",(0,t.jsxs)(n.p,{children:["Bookmarks are named references to ranges or elements, which allow you to access and reuse specific parts of the document, for example for templating purposes. For more information, please refer to the ",(0,t.jsx)(n.em,{children:"Bookmark commands"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"targetObj"}),", you can pass:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a range, or"}),"\n",(0,t.jsx)(n.li,{children:"an element (body / table / row / inline picture / paragraph)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": If you passed an element in ",(0,t.jsx)(n.em,{children:"targetObj"}),", the bookmark will contain only the specified element."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"bkName"}),", pass the name for the new bookmark. A bookmark name must be compliant with HTML/CSS names, ",(0,t.jsx)(n.em,{children:"i.e."})," it must only contain alphanumeric characters (invalid characters, such as space characters, are automatically removed). Bookmark names must be unique within the document. If a bookmark with the same name already exists in the document, it is overwritten."]}),"\n",(0,t.jsx)(n.p,{children:"You can create as many bookmarks as you want within the same document. Multiple bookmarks can be created using the exact same range. Once created, a bookmark is automatically stored in the parent document and is saved with the document itself."}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"You want to create a new bookmark referencing the currently selected text in the document. You can write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $range : Object\n\xa0$range:=WP Selection range(*;"WPDocument")\n\xa0WP NEW BOOKMARK($range;"my_bookmark")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"You want to rename an existing bookmark. To do this, you need to create a new bookmark with the same range, and then delete the old one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP NEW BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"})]})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var a=r(667294);let t={},o=a.createContext(t);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);