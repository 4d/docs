"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10674"],{202378:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/st-get-options","title":"ST GET OPTIONS","description":"ST GET OPTIONS ( { ;} object ; option ; value {; option2 ; value2 ; ... ; optionN ; valueN*} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/st-get-options.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-options","permalink":"/docs/commands/st-get-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-get-options","title":"ST GET OPTIONS","slug":"/commands/st-get-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get expression","permalink":"/docs/commands/st-get-expression"},"next":{"title":"ST Get plain text","permalink":"/docs/commands/st-get-plain-text"}}'),r=t("785893"),i=t("250065");let d={id:"st-get-options",title:"ST GET OPTIONS",slug:"/commands/st-get-options",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST GET OPTIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"option"})," ; ",(0,r.jsx)(n.em,{children:"value"})," {; ",(0,r.jsx)(n.em,{children:"option2"})," ; ",(0,r.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"optionN"})," ; ",(0,r.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Option to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Current value of option"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ST GET OPTIONS"})," command gets the current value of one or more operating options for the styled text field or variable designated by the ",(0,r.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object\u2019s data source (variable or field).",(0,r.jsx)(n.br,{}),"\nIf you omit the ",(0,r.jsx)(n.em,{children:"*"})," parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the code of the option to get in the ",(0,r.jsx)(n.em,{children:"option"})," parameter. The command returns the current value of this option in ",(0,r.jsx)(n.em,{children:"value"}),'. For both these parameters, you can use the following constants, found in the "',(0,r.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Expressions display mode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.em,{children:"value"})," parameter can contain ST Values or ST References"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST References"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Display source strings of expressions"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Values"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Display computed values of expressions"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/st-set-options",children:"ST SET OPTIONS"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1290"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);