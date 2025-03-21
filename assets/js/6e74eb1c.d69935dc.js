"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68684"],{511952:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","description":"OBJECT GET PRINT VARIABLE FRAME ( { ;} object ; variableFrame {; fixedSubform*} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-print-variable-frame.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-print-variable-frame","permalink":"/docs/commands/object-get-print-variable-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-print-variable-frame.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","slug":"/commands/object-get-print-variable-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get pointer","permalink":"/docs/commands/object-get-pointer"},"next":{"title":"OBJECT GET RESIZING OPTIONS","permalink":"/docs/commands/object-get-resizing-options"}}'),i=r("785893"),s=r("250065");let d={id:"object-get-print-variable-frame",title:"OBJECT GET PRINT VARIABLE FRAME",slug:"/commands/object-get-print-variable-frame",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"variableFrame"})," {; ",(0,i.jsx)(n.em,{children:"fixedSubform"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,i.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variableFrame"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = Variable frame printing, False = Fixed frame printing"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fixedSubform"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Option for printing subforms in fixed size"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," command gets the current configuration of the variable frame print options for the object(s) designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["Variable frame printing properties can be defined using the Property List, or using the ",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Passing the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"variableFrame"})," parameter, the command returns a Boolean variable whose value indicates the enabled (",(0,i.jsx)(n.strong,{children:"True"}),") or disabled (",(0,i.jsx)(n.strong,{children:"False"}),") state of variable frame printing."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"object"})," is a subform and if variable frame printing is disabled (",(0,i.jsx)(n.strong,{children:"False"}),"), the command also returns, in the ",(0,i.jsx)(n.em,{children:"fixedSubform"}),' parameter, the fixed frame print option of the subform. You can compare the value returned with the following constants, found in the "',(0,i.jsx)(n.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print Frame fixed with multiple records"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:["The frame remains the same size, but 4D prints the form several times to include all the records.",(0,i.jsx)(n.br,{})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print Frame fixed with truncation"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"4D prints only the records that fit into the area of the subform. The form is printed only once and those records that are not printed are ignored."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1241"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);