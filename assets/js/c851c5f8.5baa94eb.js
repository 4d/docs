"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79495"],{73781:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-bookmark-range","title":"WP Bookmark range","description":"WP Bookmark range ( wpDoc ; bkName ) : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-bookmark-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-bookmark-range","permalink":"/docs/WritePro/commands/wp-bookmark-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-bookmark-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-bookmark-range","title":"WP Bookmark range","slug":"/WritePro/commands/wp-bookmark-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Add picture","permalink":"/docs/WritePro/commands/wp-add-picture"},"next":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/WritePro/commands/wp-compute-formulas"}}'),t=r("785893"),a=r("250065");let s={id:"wp-bookmark-range",title:"WP Bookmark range",slug:"/WritePro/commands/wp-bookmark-range",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Compatibility",id:"compatibility",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," ( ",(0,t.jsx)(n.em,{children:"wpDoc"})," ; ",(0,t.jsx)(n.em,{children:"bkName"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpDoc"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bkName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of bookmark whose range you want to get"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Range of bookmark"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," was named ",(0,t.jsx)(n.strong,{children:"WP Get bookmark range"})," in previous versions of 4D Write Pro. It has been renamed for clarity."]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WP Bookmark range"})," command returns a text range object (rangeObj) containing the range for the bookmark with the specified ",(0,t.jsx)(n.em,{children:"bkName"})," in ",(0,t.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:"bkName"})," bookmark does not exist in ",(0,t.jsx)(n.em,{children:"wpDoc"}),", an empty rangeObj object is returned."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:'You want to show the range of the "MyBookmark" bookmark in your document:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Bookmark range(WParea;"MyBookmark")\n\xa0WP SELECT(WParea;$wpRange)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var o=r(667294);let t={},a=o.createContext(t);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);