"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90602"],{202831:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-get-subform","title":"OBJECT GET SUBFORM","description":"OBJECT GET SUBFORM ( { ;} object ; tablePtr ; detailSubform {; listSubform*} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/object-get-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform","permalink":"/docs/commands/object-get-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-subform","title":"OBJECT GET SUBFORM","slug":"/commands/object-get-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get style sheet","permalink":"/docs/commands/object-get-style-sheet"},"next":{"title":"OBJECT GET SUBFORM CONTAINER SIZE","permalink":"/docs/commands/object-get-subform-container-size"}}'),r=n("785893"),i=n("250065");let o={id:"object-get-subform",title:"OBJECT GET SUBFORM",slug:"/commands/object-get-subform",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT GET SUBFORM"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"tablePtr"})," ; ",(0,r.jsx)(t.em,{children:"detailSubform"})," {; ",(0,r.jsx)(t.em,{children:"listSubform"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tablePtr"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Pointer to table of form"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"detailSubform"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Name of detail form of subform"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listSubform"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Name of list form of subform (table form)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT GET SUBFORM"})," command gets the name(s) of the form(s) associated with the subform object designated by the ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"tablePtr"})," parameter, the command returns a pointer to the table of the form(s) used. If the subform uses a project form, this parameter contains ",(0,r.jsx)(t.a,{href:"/docs/commands/is-nil-pointer",children:"Is nil pointer"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"detailSubform"})," and (optionally) ",(0,r.jsx)(t.em,{children:"listSubform"})," parameters, the command returns:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the form name if the subform was created in the 4D form editor."}),"\n",(0,r.jsxs)(t.li,{children:['the subform\'s "name" attribute if the subform was created from a .json file or a 4D object.',(0,r.jsx)(t.br,{}),'\nIn both cases, if the "name" attribute is undefined, the command will return:\n',(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"for a .json file, the name of the .json file (without extension)"}),"\n",(0,r.jsx)(t.li,{children:'for an object, "untitled"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If there is no list form, an empty string is returned in the ",(0,r.jsx)(t.em,{children:"listSubform"})," parameter."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1139"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);