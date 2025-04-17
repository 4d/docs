"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74662"],{576300:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-header","title":"WP DELETE HEADER","description":"WP DELETE HEADER ( wpSection )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-delete-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-header","permalink":"/docs/20-R8/WritePro/commands/wp-delete-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-header.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-delete-header","title":"WP DELETE HEADER","slug":"/WritePro/commands/wp-delete-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE FOOTER","permalink":"/docs/20-R8/WritePro/commands/wp-delete-footer"},"next":{"title":"WP DELETE PICTURE","permalink":"/docs/20-R8/WritePro/commands/wp-delete-picture"}}'),s=n("785893"),o=n("250065");let d={id:"wp-delete-header",title:"WP DELETE HEADER",slug:"/WritePro/commands/wp-delete-header",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP DELETE HEADER"})," ( ",(0,s.jsx)(t.em,{children:"wpSection"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wpSection"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"4D Write Pro section or subsection"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP DELETE HEADER"})," command deletes the header element associated to the section or subsection defined by the ",(0,s.jsx)(t.em,{children:"wpSection"})," parameter."]}),"\n",(0,s.jsx)(t.p,{children:"If no header element exists for the section or subsection, the command does nothing."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to delete the header of the right pages of a section:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Retrieve the reference on the first section\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Retrieve the reference on right subsection of the first section\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//Remove the header\n\xa0WP DELETE HEADER($subsection)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R8/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R8/WritePro/commands/wp-new-header",children:"WP New header"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var r=n(667294);let s={},o=r.createContext(s);function d(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);