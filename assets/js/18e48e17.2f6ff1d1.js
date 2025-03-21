"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1332"],{593255:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-sort-columns","title":"LISTBOX SORT COLUMNS","description":"LISTBOX SORT COLUMNS ( { ;} object ; colNum ; order {; colNum2 ; order2 ; ... ; colNumN ; orderN*} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-sort-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-sort-columns","permalink":"/docs/commands/listbox-sort-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-sort-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-sort-columns","title":"LISTBOX SORT COLUMNS","slug":"/commands/listbox-sort-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET TABLE SOURCE","permalink":"/docs/commands/listbox-set-table-source"},"next":{"title":"Mail","permalink":"/docs/commands/theme/Mail"}}'),r=s("785893"),o=s("250065");let i={id:"listbox-sort-columns",title:"LISTBOX SORT COLUMNS",slug:"/commands/listbox-sort-columns",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SORT COLUMNS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"colNum"})," ; ",(0,r.jsx)(n.em,{children:"order"})," {; ",(0,r.jsx)(n.em,{children:"colNum2"})," ; ",(0,r.jsx)(n.em,{children:"order2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"colNumN"})," ; ",(0,r.jsx)(n.em,{children:"orderN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"colNum"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Column number(s) to sort"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"order"}),(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'">" to sort in ascending order or "<" to sort in descending order'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The LISTBOX SORT COLUMNS command applies a standard sort to the rows of the list box defined by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters on the basis of one or more column value(s)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," A standard sort is applied on the basis of a single column value when the user clicks on the column header (see ",(0,r.jsx)(n.em,{children:"Standard sorts"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,r.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"colNum"}),", pass the column number of the column whose values you want to use as the sort criteria. You can use any type of array data, except pictures and pointers."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"order"}),", pass the symbol > or < to indicate the sort order. If ",(0,r.jsx)(n.em,{children:"order"})," contains the \u201Cgreater than\u201D symbol (>), the sort order is ascending. If ",(0,r.jsx)(n.em,{children:"order"})," contains the \u201Cless than\u201D symbol (<), the sort oder is descending."]}),"\n",(0,r.jsxs)(n.p,{children:["You can define multi-level sorts: to do so, pass as many pairs (",(0,r.jsx)(n.em,{children:"colNum;order"}),") as necessary. The sorting level is defined by the position of the parameter in the call."]}),"\n",(0,r.jsx)(n.p,{children:"In conformity with the principle of list box operation, the columns are synchronized which means that the sorting of a column is automatically passed on to all the other columns of the object."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.strong,{children:"LISTBOX SORT COLUMNS"})," command does not take the ",(0,r.jsx)(n.em,{children:"Sortable"})," listbox property into account."]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"916"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);