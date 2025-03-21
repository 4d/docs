"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61940"],{517471:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-static-columns","title":"LISTBOX Get static columns","description":"LISTBOX Get static columns ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-get-static-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-static-columns","permalink":"/docs/commands/listbox-get-static-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-static-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-static-columns","title":"LISTBOX Get static columns","slug":"/commands/listbox-get-static-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get rows height","permalink":"/docs/commands/listbox-get-rows-height"},"next":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/commands/listbox-get-table-source"}}'),i=n("785893"),c=n("250065");let r={id:"listbox-get-static-columns",title:"LISTBOX Get static columns",slug:"/commands/listbox-get-static-columns",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LISTBOX Get static columns"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Number of static columns"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"LISTBOX Get static columns"})," command returns the number of static columns in the list box designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsxs)(t.p,{children:["Static columns can be set through the Property List or using the ",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["If a column is inserted or deleted by programming within a set of static columns, the number of columns returned by this command takes this change into account.",(0,i.jsx)(t.br,{}),"\nHowever, the command does not take into account the visible/invisible status of columns."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Static columns and locked columns are two independent functions. For more information, refer to the ",(0,i.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1154"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var s=n(667294);let i={},c=s.createContext(i);function r(e){let t=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);