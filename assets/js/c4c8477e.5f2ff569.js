"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91008"],{383261:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-insert-table-columns","title":"VP INSERT TABLE COLUMNS","description":"History","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-insert-table-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-insert-table-columns","permalink":"/docs/20-R6/ViewPro/commands/vp-insert-table-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-table-columns.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-insert-table-columns","title":"VP INSERT TABLE COLUMNS"},"sidebar":"docs","previous":{"title":"VP INSERT ROWS","permalink":"/docs/20-R6/ViewPro/commands/vp-insert-rows"},"next":{"title":"VP INSERT TABLE ROWS","permalink":"/docs/20-R6/ViewPro/commands/vp-insert-table-rows"}}'),r=t("785893"),i=t("250065");let d={id:"vp-insert-table-columns",title:"VP INSERT TABLE COLUMNS"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP INSERT TABLE COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"column"})," : Integer {; ",(0,r.jsx)(n.em,{children:"count"})," : Integer {; ",(0,r.jsx)(n.em,{children:"insertAfter"})," : Integer {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Index in the table of the starting column to insert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Number of columns to add (must be >0)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insertAfter"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"vk table insert before"})," or ",(0,r.jsx)(n.code,{children:"vk table insert after"})," ",(0,r.jsx)(n.em,{children:"column"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP INSERT TABLE COLUMNS"})," command inserts one or ",(0,r.jsx)(n.em,{children:"count"})," empty column(s) in the specified ",(0,r.jsx)(n.em,{children:"tableName"})," at the specified ",(0,r.jsx)(n.em,{children:"column"})," index."]}),"\n",(0,r.jsxs)(n.p,{children:["When a column has been inserted with this command, you typically modify its contents using the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"insertAfter"})," parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the ",(0,r.jsx)(n.em,{children:"column"})," index:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert before"})}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Insert column(s) before the ",(0,r.jsx)(n.em,{children:"column"})," (default if omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert after"})}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Insert column(s) after the ",(0,r.jsx)(n.em,{children:"column"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This command inserts some columns in the ",(0,r.jsx)(n.em,{children:"tableName"})," table, NOT in the sheet. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"tableName"})," does not exist or if there is not enough space in the sheet, nothing happens."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See examples for ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);