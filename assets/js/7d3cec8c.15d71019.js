"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52903"],{642417:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-subform","title":"OBJECT SET SUBFORM","description":"OBJECT SET SUBFORM ( { ;} object {; aTable}; detailSubform {; listSubform*} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-subform","permalink":"/docs/20-R8/commands/object-set-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-subform.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-subform","title":"OBJECT SET SUBFORM","slug":"/commands/object-set-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET STYLE SHEET","permalink":"/docs/20-R8/commands/object-set-style-sheet"},"next":{"title":"OBJECT SET SUBFORM CONTAINER VALUE","permalink":"/docs/20-R8/commands/object-set-subform-container-value"}}'),r=n("785893"),i=n("250065");let o={id:"object-set-subform",title:"OBJECT SET SUBFORM",slug:"/commands/object-set-subform",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET SUBFORM"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," {; ",(0,r.jsx)(t.em,{children:"aTable"}),"}; ",(0,r.jsx)(t.em,{children:"detailSubform"})," {; ",(0,r.jsx)(t.em,{children:"listSubform"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table of form (if table form)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"detailSubform"}),(0,r.jsx)(t.td,{children:"Text, Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name (text) of the detail form, or a POSIX path (text) to a .json file describing the detail form, or an object describing the detail form of the subform"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listSubform"}),(0,r.jsx)(t.td,{children:"Text, Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name (text) of the list form, ora POSIX path (text) to a .json file describing the list form, or an object describing the list form of the subform (table form)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT SET SUBFORM"})," command dynamically modifies the detail form as well as, optionally, the screen list form associated with the subform object designated by the ",(0,r.jsx)(t.em,{children:"*"}),", ",(0,r.jsx)(t.em,{children:"object"})," parameters."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," This command cannot change the type of the subform itself (list or page). This property can only be set in Design mode."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"aTable"})," parameter, pass the table of the forms to be used. This parameter is optional; you can omit it when you specify a project form as detail subform."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"detailSubform"})," and ",(0,r.jsx)(t.em,{children:"listSubform"})," parameters, pass either :"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the name of a form, or"}),"\n",(0,r.jsxs)(t.li,{children:["the path* (in POSIX syntax) to a valid .json file containing a description of the form to use (see ",(0,r.jsx)(t.em,{children:"Form file path"}),"), or"]}),"\n",(0,r.jsx)(t.li,{children:"an object containing a description of the form."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["*Unlike other dynamic form-related commands, ",(0,r.jsx)(t.strong,{children:"OBJECT SET SUBFORM"})," filepaths are relative to the subform's parent form."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": The ",(0,r.jsx)(t.em,{children:"listSubform"})," parameter can only be passed when you modify a list type subform."]}),"\n",(0,r.jsx)(t.p,{children:"When you modify a page subform, the command can be executed at any time; current selections are not modified. However, when you modify a list subform, it can only be modified when it displays the list. If the command is executed when the detail form is displayed following a double-click in the list, an error is generated."}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1138"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);