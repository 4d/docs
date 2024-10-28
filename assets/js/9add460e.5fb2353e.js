"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80122],{306881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(474848),i=t(28453);const r={id:"st-get-options",title:"ST GET OPTIONS",slug:"/commands/st-get-options",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/st-get-options",title:"ST GET OPTIONS",description:"ST GET OPTIONS ( { ;} object ; option ; value {; option2 ; value2 ; ... ; optionN ; valueN*} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/st-get-options.md",sourceDirName:"commands-legacy",slug:"/commands/st-get-options",permalink:"/docs/commands/st-get-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"st-get-options",title:"ST GET OPTIONS",slug:"/commands/st-get-options",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ST Get expression",permalink:"/docs/commands/st-get-expression"},next:{title:"ST Get plain text",permalink:"/docs/commands/st-get-plain-text"}},c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ST GET OPTIONS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"option"})," ; ",(0,s.jsx)(n.em,{children:"value"})," {; ",(0,s.jsx)(n.em,{children:"option2"})," ; ",(0,s.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"optionN"})," ; ",(0,s.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Option to get"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Current value of option"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ST GET OPTIONS"})," command gets the current value of one or more operating options for the styled text field or variable designated by the ",(0,s.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object\u2019s data source (variable or field).",(0,s.jsx)(n.br,{}),"\nIf you omit the ",(0,s.jsx)(n.em,{children:"*"})," parameter, it indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the code of the option to get in the ",(0,s.jsx)(n.em,{children:"option"})," parameter. The command returns the current value of this option in ",(0,s.jsx)(n.em,{children:"value"}),'. For both these parameters, you can use the following constants, found in the "',(0,s.jsx)(n.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Expressions display mode"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," parameter can contain ST Values or ST References"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST References"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Display source strings of expressions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Values"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Display computed values of expressions"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/st-set-options",children:"ST SET OPTIONS"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);