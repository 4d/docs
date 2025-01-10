"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18476"],{279422:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-header","title":"WP New header","description":"WP New header ( wpSection ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-new-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-header","permalink":"/docs/WritePro/commands/wp-new-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-header","title":"WP New header","slug":"/WritePro/commands/wp-new-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New footer","permalink":"/docs/WritePro/commands/wp-new-footer"},"next":{"title":"WP New style sheet","permalink":"/docs/WritePro/commands/wp-new-style-sheet"}}'),s=t("785893"),d=t("250065");let i={id:"wp-new-header",title:"WP New header",slug:"/WritePro/commands/wp-new-header",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP New header"})," ( ",(0,s.jsx)(n.em,{children:"wpSection"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpSection"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D Write Pro section or subsection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"4D Write Pro header"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP New header"})," command creates and returns the header associated to the section or subsection defined by the ",(0,s.jsx)(n.em,{children:"wpSection"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["If a header element is already defined for the section or subsection, an ",(0,s.jsx)(n.em,{children:"undefined"})," object is returned and an error is generated."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to create a header for the right pages of a section:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Retrieve the first section\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Retrieve the right subsection of the first section\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//If the subsection exists, set the header\n\xa0If($subsection#Null)\n\xa0\xa0\xa0\xa0$header:=WP New header($subsection)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);