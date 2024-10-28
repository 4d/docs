"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38482],{227633:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(474848),n=s(28453);const i={id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/get-resource-properties",title:"Get resource properties",description:"Get resource properties ( resType ; resID {; resFile} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-resource-properties.md",sourceDirName:"commands-legacy",slug:"/commands/get-resource-properties",permalink:"/docs/commands/get-resource-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get resource name",permalink:"/docs/commands/get-resource-name"},next:{title:"Get string resource",permalink:"/docs/commands/get-string-resource"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4}];function a(e){const r={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource properties"})," ( ",(0,t.jsx)(r.em,{children:"resType"})," ; ",(0,t.jsx)(r.em,{children:"resID"})," {; ",(0,t.jsx)(r.em,{children:"resFile"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resType"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"4-character resource type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resID"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Resource ID number"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resFile"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Resource file reference number, or all open resource files, if omitted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Function result"}),(0,t.jsx)(r.td,{children:"Longint"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Resource attributes"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"Get resource properties"})," command returns the attributes of the resource whose type is passed in ",(0,t.jsx)(r.em,{children:"resType"})," and whose ID number is passed in ",(0,t.jsx)(r.em,{children:"resID"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass a valid resource file reference number in the parameter ",(0,t.jsx)(r.em,{children:"resFile"}),", the resource is searched for within that file only. If you do not pass the parameter ",(0,t.jsx)(r.em,{children:"resFile"}),", the resource is searched for within the current open resource files."]}),"\n",(0,t.jsxs)(r.p,{children:["If the resource does not exist, the command returns ",(0,t.jsx)(r.em,{children:"0"})," (zero) and sets the OK variable to ",(0,t.jsx)(r.em,{children:"0"})," (zero)."]}),"\n",(0,t.jsxs)(r.p,{children:["The numeric value returned by ",(0,t.jsx)(r.strong,{children:"Get resource properties"})," must be seen as a bit field value whose bits have special meaning."]}),"\n",(0,t.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["See example for the ",(0,t.jsx)(r.a,{href:"/docs/commands/get-resource-name",children:"Get resource name"})," command."]}),"\n",(0,t.jsx)(r.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(r.p,{children:"The OK variable is set to 0 if the resource does not exist; otherwise, it is set to 1."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>c});var t=s(296540);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);