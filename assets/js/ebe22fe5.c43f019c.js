"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42036"],{758716:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","description":"LISTBOX SET TABLE SOURCE ( { ;} object ; tableNum {; highlightName} )LISTBOX SET TABLE SOURCE ( { ;} object ; selName {; highlightName} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-set-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-table-source","permalink":"/docs/commands/listbox-set-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-table-source.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","slug":"/commands/listbox-set-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET STATIC COLUMNS","permalink":"/docs/commands/listbox-set-static-columns"},"next":{"title":"LISTBOX SORT COLUMNS","permalink":"/docs/commands/listbox-sort-columns"}}'),i=s("785893"),r=s("250065");let o={id:"listbox-set-table-source",title:"LISTBOX SET TABLE SOURCE",slug:"/commands/listbox-set-table-source",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LISTBOX SET TABLE SOURCE"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"tableNum"})," {; ",(0,i.jsx)(t.em,{children:"highlightName"}),"} )",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.strong,{children:"LISTBOX SET TABLE SOURCE"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"selName"})," {; ",(0,i.jsx)(t.em,{children:"highlightName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tableNum | selName"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Number of table whose current selection is to be used or Named selection to be used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"highlightName"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Name of highlight set"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"LISTBOX SET TABLE SOURCE"})," command can be used to modify the source of the data displayed in the listbox that is designated by the ",(0,i.jsx)(t.em,{children:"*"})," and ",(0,i.jsx)(t.em,{children:"object"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," This command can only be used when the \u201CData Source\u201D property of the list box is set to ",(0,i.jsx)(t.strong,{children:"Current Selection"})," or ",(0,i.jsx)(t.strong,{children:"Named Selection"})," (for more information about this, please refer to the ",(0,i.jsx)(t.em,{children:"Managing List Box Objects"})," section). It does nothing if you use it with a listbox that is associated with an array, a collection or an entity selection."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, please refer to the ",(0,i.jsx)(t.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass a table number as the ",(0,i.jsx)(t.em,{children:"tableNum"})," parameter, the listbox will be filled in with the data of the records in the current selection of the table."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass a named selection as the ",(0,i.jsx)(t.em,{children:"selName"})," parameter, the listbox will be filled in with the data of the records belonging to the named selection."]}),"\n",(0,i.jsxs)(t.p,{children:["The optional ",(0,i.jsx)(t.em,{children:"highlightName"})," parameter associates a highlight set with the list box. The highlight set manages record highlighting by the user in the list box."]}),"\n",(0,i.jsx)(t.p,{children:"If the listbox already contains columns, their contents will be updated after the command is executed."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," For optimization purposes, this command is processed in an asynchronous manner; in other words, the source of the listbox is changed only after the complete execution of the method in which the command is called."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/listbox-get-table-source",children:"LISTBOX GET TABLE SOURCE"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1013"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return o}});var n=s(667294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);