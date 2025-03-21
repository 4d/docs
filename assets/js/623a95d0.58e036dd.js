"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64046"],{108870:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-insert-columns","title":"VP INSERT COLUMNS","description":"VP INSERT COLUMNS ( rangeObj : Object )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-insert-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-insert-columns","permalink":"/docs/20-R7/ViewPro/commands/vp-insert-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-insert-columns","title":"VP INSERT COLUMNS"},"sidebar":"docs","previous":{"title":"VP IMPORT FROM OBJECT","permalink":"/docs/20-R7/ViewPro/commands/vp-import-from-object"},"next":{"title":"VP INSERT ROWS","permalink":"/docs/20-R7/ViewPro/commands/vp-insert-rows"}}'),r=t("785893"),i=t("250065");let o={id:"vp-insert-columns",title:"VP INSERT COLUMNS"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP INSERT COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Range object"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP INSERT COLUMNS"})," command inserts columns into the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. If the number of column to insert is omitted (not defined), a single column is inserted."]}),"\n",(0,r.jsxs)(n.p,{children:["New columns are inserted on the left, directly before the starting column in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"To insert three columns before the second column:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP INSERT COLUMNS(VP Column("ViewProArea";1;3))\n'})}),"\n",(0,r.jsx)(n.p,{children:"The results is:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(739866).Z+"",width:"964",height:"367"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-insert-rows",children:"VP INSERT ROWS"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},739866:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpInsertColumns-b1621dfbcabbe89a2e3db933745e1d03.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);