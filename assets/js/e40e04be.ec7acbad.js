"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1376"],{276264:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-arrays","title":"LISTBOX GET ARRAYS","description":"LISTBOX GET ARRAYS ( { ;} object ; arrColNames ; arrHeaderNames ; arrColVars ; arrHeaderVars ; arrColsVisible ; arrStyles {; arrFooterNames ; arrFooterVars*} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-get-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-arrays","permalink":"/docs/commands/listbox-get-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-arrays.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-arrays","title":"LISTBOX GET ARRAYS","slug":"/commands/listbox-get-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get array","permalink":"/docs/commands/listbox-get-array"},"next":{"title":"LISTBOX Get auto row height","permalink":"/docs/commands/listbox-get-auto-row-height"}}'),t=n("785893"),i=n("250065");let a={id:"listbox-get-arrays",title:"LISTBOX GET ARRAYS",slug:"/commands/listbox-get-arrays",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"LISTBOX GET ARRAYS"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"object"})," ; ",(0,t.jsx)(r.em,{children:"arrColNames"})," ; ",(0,t.jsx)(r.em,{children:"arrHeaderNames"})," ; ",(0,t.jsx)(r.em,{children:"arrColVars"})," ; ",(0,t.jsx)(r.em,{children:"arrHeaderVars"})," ; ",(0,t.jsx)(r.em,{children:"arrColsVisible"})," ; ",(0,t.jsx)(r.em,{children:"arrStyles"})," {; ",(0,t.jsx)(r.em,{children:"arrFooterNames"})," ; ",(0,t.jsx)(r.em,{children:"arrFooterVars"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Operator"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"object"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrColNames"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Column object names"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrHeaderNames"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Header object names"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrColVars"}),(0,t.jsx)(r.td,{children:"Pointer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Pointers to column variables or Pointers to column fields or Nil"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrHeaderVars"}),(0,t.jsx)(r.td,{children:"Pointer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Pointers to header variables"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrColsVisible"}),(0,t.jsx)(r.td,{children:"Boolean array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Visibility of each column"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrStyles"}),(0,t.jsx)(r.td,{children:"Pointer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Pointers to arrays, or style, color and row control variables, or Nil"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrFooterNames"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Column footer object names"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrFooterVars"}),(0,t.jsx)(r.td,{children:"Pointer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Pointers to column footer variables"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"LISTBOX GET ARRAYS"})," command returns a set of synchronized arrays providing information on each column (visible or invisible) in the list box set in the ",(0,t.jsx)(r.em,{children:"object"})," and ",(0,t.jsx)(r.em,{children:"*"})," parameters."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass the optional ",(0,t.jsx)(r.em,{children:"*"})," parameter, you indicate that the ",(0,t.jsx)(r.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,t.jsx)(r.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,t.jsx)(r.em,{children:"Object Properties"})," section."]}),"\n",(0,t.jsx)(r.p,{children:"Once the command is executed:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrColNames"})," array contains the list of object names for each column in the list box."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrHeaderNames"})," array contains the list of object names for each column header in the list box."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrColVars"})," array contains, for an array type list box, pointers toward variables (arrays) associated with each column of the list box. For a selection type list box, ",(0,t.jsx)(r.em,{children:"arrColVars"})," contains:\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"For a column associated with a field, a pointer to the associated field,"}),"\n",(0,t.jsx)(r.li,{children:"For a column associated with a variable, a pointer to the variable,"}),"\n",(0,t.jsx)(r.li,{children:"For a column associated with an expression, a Nil pointer."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrHeaderVars"})," array contains pointers toward variables associated with each column header of the list box."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrColsVisible"})," array contains a Boolean value for each column, indicating whether the column is visible (",(0,t.jsx)(r.a,{href:"/docs/commands/true",title:"True",children:"True"}),") or hidden (",(0,t.jsx)(r.a,{href:"/docs/commands/false",title:"False",children:"False"}),") in the list box."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.em,{children:"arrStyles"})," array contains, for an array type list box, four pointers to four arrays that allow the applying of a specific style, font color, background color and custom display control to each row of the list box. These arrays are associated with the list box in the Property List of the Design environment or using the ",(0,t.jsx)(r.a,{href:"/docs/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})," command. If an array is not specified for the list box, the corresponding item in ",(0,t.jsx)(r.em,{children:"arrStyles"})," will contain a Nil pointer.",(0,t.jsx)(r.br,{}),"\nThe fourth pointer corresponds either to a Boolean array (Hidden Rows Array), or to a longint array (array used to set hidden, disabled and non-selectable rows) based on the implementation used for the row control array (see ",(0,t.jsx)(r.em,{children:"List box specific properties"}),").",(0,t.jsx)(r.br,{}),"\nFor record selection, collection or entity selection type list boxes, ",(0,t.jsx)(r.em,{children:"arrStyles"})," contains:\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"For each configuration set via a variable, a pointer to the variable,"}),"\n",(0,t.jsx)(r.li,{children:"For each configuration set via an expression, a Nil pointer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"832"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var s=n(667294);let t={},i=s.createContext(t);function a(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);