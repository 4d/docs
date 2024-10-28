"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69431],{85141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(474848),s=t(28453);const r={id:"object-get-vertical-alignment",title:"OBJECT Get vertical alignment",slug:"/commands/object-get-vertical-alignment",displayed_sidebar:"docs"},c=void 0,l={id:"commands-legacy/object-get-vertical-alignment",title:"OBJECT Get vertical alignment",description:"OBJECT Get vertical alignment ( { ;} object* ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/object-get-vertical-alignment.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-vertical-alignment",permalink:"/docs/commands/object-get-vertical-alignment",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-vertical-alignment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-vertical-alignment",title:"OBJECT Get vertical alignment",slug:"/commands/object-get-vertical-alignment",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT Get value",permalink:"/docs/commands/object-get-value"},next:{title:"OBJECT Get visible",permalink:"/docs/commands/object-get-visible"}},d={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get vertical alignment"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Longint"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Type of alignment"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT Get vertical alignment"})," command returns a value indicating the type of vertical alignment applied to the object designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If you apply this command to a set of objects, only the alignment value for the last object is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["The value returned corresponds to one of the following constants, found in the ",(0,i.jsx)(n.em,{children:"Form Objects (Properties)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align bottom"}),(0,i.jsx)(n.td,{children:"Longint"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align center"}),(0,i.jsx)(n.td,{children:"Longint"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align top"}),(0,i.jsx)(n.td,{children:"Longint"}),(0,i.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Vertical alignment can be applied to the following types of form objects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"list boxes,"}),"\n",(0,i.jsx)(n.li,{children:"list box columns,"}),"\n",(0,i.jsx)(n.li,{children:"list box headers and footers."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/object-get-horizontal-alignment",children:"OBJECT Get horizontal alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-horizontal-alignment",children:"OBJECT SET HORIZONTAL ALIGNMENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-vertical-alignment",children:"OBJECT SET VERTICAL ALIGNMENT"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(296540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);