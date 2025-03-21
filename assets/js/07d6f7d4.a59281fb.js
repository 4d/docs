"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95998"],{753582:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-page-count","title":"WP Get page count","description":"WP Get page count ( targetObj ) : Integer","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-get-page-count.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-page-count","permalink":"/docs/20-R7/WritePro/commands/wp-get-page-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-page-count.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-page-count","title":"WP Get page count","slug":"/WritePro/commands/wp-get-page-count","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get links","permalink":"/docs/20-R7/WritePro/commands/wp-get-links"},"next":{"title":"WP Get position","permalink":"/docs/20-R7/WritePro/commands/wp-get-position"}}'),o=n("785893"),s=n("250065");let i={id:"wp-get-page-count",title:"WP Get page count",slug:"/WritePro/commands/wp-get-page-count",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP Get page count"})," ( ",(0,o.jsx)(t.em,{children:"targetObj"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"targetObj"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"4D Write Pro document or section"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Function result"}),(0,o.jsx)(t.td,{children:"Integer"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Number of pages in document"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"WP Get page count"})," command returns the total number of pages defined in the ",(0,o.jsx)(t.em,{children:"targetObj"})," you passed in parameter."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.em,{children:"targetObj"}),", you can pass:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"a section / subsection, or"}),"\n",(0,o.jsx)(t.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The command returns the number of pages of the ",(0,o.jsx)(t.em,{children:"targetObj"}),". If you pass a subsection, the number of pages of the parent section is returned."]}),"\n",(0,o.jsxs)(t.p,{children:["The same viewing settings as for the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-print",children:"WP PRINT"})," command are used with ",(0,o.jsx)(t.strong,{children:"WP Get page count"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"headers: visible"}),"\n",(0,o.jsx)(t.li,{children:"footers: visible"}),"\n",(0,o.jsx)(t.li,{children:"expressions: computed and displayed"}),"\n",(0,o.jsx)(t.li,{children:"page mode: page or draft"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.em,{children:"targetObj"}),' is displayed in a 4D Write Pro form area, make sure that viewing settings of the area match the command viewing settings to get consistent information. Note also that if these settings are different in the area, 4D Write Pro will have to "clone" the document to calculate the layout at each call of the command, which can be time consuming. For performance reasons, it is recommended in this case to build the document offline and to copy it to the form object area only when the build is complete.']}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:'You want to know the total number of 4D Write Pro document pages stored in the "Manual" field within the current selection of items. You can write:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0var $pageCount : Integer\n\xa0var $totalCount : Integer\n\xa0FIRST RECORD([Items])\n\xa0While(Not(End selection([Items]))\n\xa0\xa0\xa0\xa0$pageCount:=WP Get page count([Items]Manual)\n\xa0\xa0\xa0\xa0$totalCount:=$totalCount+$pageCount\n\xa0\xa0\xa0\xa0NEXT RECORD([Items])\n\xa0End while\n\xa0ALERT("Total number of manual pages: "+String($totalCount))\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(667294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);