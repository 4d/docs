"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8616"],{824636:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-footer","title":"WP DELETE FOOTER","description":"WP DELETE FOOTER ( wpSection )","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-delete-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-footer","permalink":"/docs/WritePro/commands/wp-delete-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-footer","title":"WP DELETE FOOTER","slug":"/WritePro/commands/wp-delete-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE BOOKMARK","permalink":"/docs/WritePro/commands/wp-delete-bookmark"},"next":{"title":"WP DELETE HEADER","permalink":"/docs/WritePro/commands/wp-delete-header"}}'),r=n("785893"),s=n("250065");let i={id:"wp-delete-footer",title:"WP DELETE FOOTER",slug:"/WritePro/commands/wp-delete-footer",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP DELETE FOOTER"})," ( ",(0,r.jsx)(t.em,{children:"wpSection"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpSection"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"4D Write Pro section or subsection"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP DELETE FOOTER"})," command deletes the footer element associated to the section or subsection defined by the ",(0,r.jsx)(t.em,{children:"wpSection"})," parameter."]}),"\n",(0,r.jsx)(t.p,{children:"If no footer element exists for the section or subsection, the command does nothing."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to delete the footer of the left pages of a section:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Retrieve the reference on the first section\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Retrieve the reference on left subsection of the first section\n\xa0$subsection:=WP Get subsection($section;wk left page)\n\xa0\n\xa0\xa0//Remove the footer\n\xa0WP DELETE FOOTER($subsection)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var o=n(667294);let r={},s=o.createContext(r);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);