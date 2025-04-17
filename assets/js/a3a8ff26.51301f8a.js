"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59217"],{609677:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","description":"LISTBOX SET COLUMN FORMULA ( { ;} object ; formula ; dataType* )","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-set-column-formula.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-column-formula","permalink":"/docs/commands/listbox-set-column-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-formula.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","slug":"/commands/listbox-set-column-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET AUTO ROW HEIGHT","permalink":"/docs/commands/listbox-set-auto-row-height"},"next":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/commands/listbox-set-column-width"}}'),r=t("785893"),i=t("250065");let o={id:"listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",slug:"/commands/listbox-set-column-formula",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"formula"})," ; ",(0,r.jsx)(n.em,{children:"dataType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object Name (if * is specified) or  Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D formula associated with column"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of formula result"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," command modifies the ",(0,r.jsx)(n.em,{children:"formula"})," associated with the column of the list box designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters. Formulas can only be used when the \u201CData Source\u201D property of the list box is either ",(0,r.jsx)(n.strong,{children:"Current Selection"}),", ",(0,r.jsx)(n.strong,{children:"Named Selection"}),", or ",(0,r.jsx)(n.strong,{children:"Collection or Entity Selection"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," You can use the ",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})," command to define the data source of an array type list box."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string. This parameter must designate a list box column."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"formula"})," parameter can contain any valid expression, i.e.:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"an instruction,"}),"\n",(0,r.jsx)(n.li,{children:"a formula generated using the formula editor,"}),"\n",(0,r.jsx)(n.li,{children:"a call to a 4D command,"}),"\n",(0,r.jsx)(n.li,{children:"a call to a project method."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When the command is called, the formula is parsed and then executed."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Use the ",(0,r.jsx)(n.a,{href:"/docs/commands/command-name",children:"Command name"})," command to specify formulas independent from the application language (when they call 4D commands)."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"dataType"})," parameter designates the type of data resulting from the execution of the formula. In this parameter, you pass one of the constants from the ",(0,r.jsx)(n.em,{children:"Field and Variable Types"})," theme. If the formula result does not match the expected data type, an error is generated."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/listbox-get-column-formula",children:"LISTBOX Get column formula"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1203"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);