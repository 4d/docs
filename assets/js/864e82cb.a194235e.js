"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92779"],{460033:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-section","title":"WP Get section","description":"WP Get section ( targetObj ) | (wpDoc ; sectionIndex ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-get-section.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-section","permalink":"/docs/20-R7/WritePro/commands/wp-get-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-section.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-section","title":"WP Get section","slug":"/WritePro/commands/wp-get-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get position","permalink":"/docs/20-R7/WritePro/commands/wp-get-position"},"next":{"title":"WP Get sections","permalink":"/docs/20-R7/WritePro/commands/wp-get-sections"}}'),r=n("785893"),i=n("250065");let o={id:"wp-get-section",title:"WP Get section",slug:"/WritePro/commands/wp-get-section",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get section"})," ( ",(0,r.jsx)(t.em,{children:"targetObj"})," ) | (",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"sectionIndex"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Range or element"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sectionIndex"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Section index"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"4D Write Pro section"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP Get section"})," command returns the first section intersected by the ",(0,r.jsx)(t.em,{children:"targetObj"})," range or element, or to the specified ",(0,r.jsx)(t.em,{children:"sectionIndex"})," of the ",(0,r.jsx)(t.em,{children:"wpDoc"})," document."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["With the first syntax (using the ",(0,r.jsx)(t.em,{children:"targetObj"})," parameter), the command returns the first section intersected by the range or the element. You can pass in ",(0,r.jsx)(t.em,{children:"targetObj"}),":\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"a range, or"}),"\n",(0,r.jsxs)(t.li,{children:["an element (table / row / paragraph / body / text box / header / footer). You cannot pass a subsection, nor an anchored picture (an error is returned in this case).",(0,r.jsx)(t.br,{}),"\nIf the range or element belongs to a header or a footer, ",(0,r.jsx)(t.strong,{children:"WP Get section"})," returns the section to which the header or footer is attached. If the range or element is or belongs to a text box, ",(0,r.jsx)(t.strong,{children:"WP Get section"})," always returns the first section, except if it is anchored to a section (in which case the section is returned)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["With the second syntax (using the ",(0,r.jsx)(t.em,{children:"wpDoc"})," parameter), the command returns the section corresponding to the specified ",(0,r.jsx)(t.em,{children:"sectionIndex"})," section (",(0,r.jsx)(t.em,{children:"sectionIndex"})," value must be >=1).",(0,r.jsx)(t.br,{}),"\nIf no section is defined for the specified ",(0,r.jsx)(t.em,{children:"sectionIndex"}),", the command returns an undefined object (no error is returned)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Use the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})," command to get a subsection from a section or from a range."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to get the first section:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $section : Object\n\xa0\xa0// get reference of the first section\n\xa0$section:=WP Get section(wpDoc;1)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-sections",children:"WP Get sections"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);