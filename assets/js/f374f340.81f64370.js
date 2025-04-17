"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66775"],{705708:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-compute-formulas","title":"WP COMPUTE FORMULAS","description":"WP COMPUTE FORMULAS ( targetObj )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-compute-formulas.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-compute-formulas","permalink":"/docs/20-R8/WritePro/commands/wp-compute-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-compute-formulas.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-compute-formulas","title":"WP COMPUTE FORMULAS","slug":"/WritePro/commands/wp-compute-formulas","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Bookmark range","permalink":"/docs/20-R8/WritePro/commands/wp-bookmark-range"},"next":{"title":"WP DELETE BOOKMARK","permalink":"/docs/20-R8/WritePro/commands/wp-delete-bookmark"}}'),o=n("785893"),s=n("250065");let a={id:"wp-compute-formulas",title:"WP COMPUTE FORMULAS",slug:"/WritePro/commands/wp-compute-formulas",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function d(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WP COMPUTE FORMULAS"})," ( ",(0,o.jsx)(r.em,{children:"targetObj"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"targetObj"}),(0,o.jsx)(r.td,{children:"Object"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Range or element or 4D Write Pro document"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.strong,{children:"WP COMPUTE FORMULAS"})," command evaluates the formulas in ",(0,o.jsx)(r.em,{children:"targetObj"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["The command computes or updates the result of formulas found in the ",(0,o.jsx)(r.em,{children:"targetObj"})," based on the current context and displays the result obtained. For example, if the formula inserted is the time, the value will be modified each time the ",(0,o.jsx)(r.strong,{children:"WP COMPUTE FORMULAS"})," command is called. For more information on formula evaluation, please refer to the ",(0,o.jsx)(r.em,{children:"Managing formulas"})," section."]}),"\n",(0,o.jsxs)(r.p,{children:["In the ",(0,o.jsx)(r.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"a range, or"}),"\n",(0,o.jsx)(r.li,{children:"an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or"}),"\n",(0,o.jsx)(r.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note:"})," When you pass a section in ",(0,o.jsx)(r.em,{children:"targetObj"}),", only image formulas or formulas in text boxes anchored to this section or all sections are computed. If anchored to a page or to the embedded view, their formulas are not computed. Pass the document in ",(0,o.jsx)(r.em,{children:"targetObj"})," to compute all anchored element formulas."]}),"\n",(0,o.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(r.p,{children:"To update the formulas in a document:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0WP COMPUTE FORMULAS(WriteProArea)\n"})}),"\n",(0,o.jsx)(r.p,{children:"To update all formulas in the first section of a document:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))\n"})}),"\n",(0,o.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"Managing formulas"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/20-R8/WritePro/commands/wp-freeze-formulas",children:"WP FREEZE FORMULAS"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/20-R8/WritePro/commands/wp-get-formulas",children:"WP Get formulas"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/20-R8/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/20-R8/WritePro/commands/wp-set-data-context",children:"WP SET DATA CONTEXT"})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return a}});var t=n(667294);let o={},s=t.createContext(o);function a(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);