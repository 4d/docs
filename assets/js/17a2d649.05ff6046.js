"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99117],{642361:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(474848),r=o(28453);const s={id:"reload-project",title:"RELOAD PROJECT",slug:"/commands/reload-project",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/reload-project",title:"RELOAD PROJECT",description:"RELOAD PROJECT",source:"@site/versioned_docs/version-20-R7/commands-legacy/reload-project.md",sourceDirName:"commands-legacy",slug:"/commands/reload-project",permalink:"/docs/commands/reload-project",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-project.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"reload-project",title:"RELOAD PROJECT",slug:"/commands/reload-project",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"REJECT NEW REMOTE CONNECTIONS",permalink:"/docs/commands/reject-new-remote-connections"},next:{title:"RESTART 4D",permalink:"/docs/commands/restart-4d"}},d={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RELOAD PROJECT"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Does not require any parameters"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"RELOAD PROJECT"})," command reloads the source file definitions (methods, forms, etc.) from the disk for the running project in the current 4D environment. It can only be used with 4D projects executed in ",(0,t.jsx)(n.strong,{children:"interpreted mode"}),". The command execution is asynchronous."]}),"\n",(0,t.jsx)(n.p,{children:"Usually, a project is automatically reloaded when the 4D application detects that a source file has been added, modified, or deleted. It is the case when a file was directly edited from the 4D Developer IDE, or after the 4D application window is moved from the background to the foreground of the OS."}),"\n",(0,t.jsxs)(n.p,{children:["Calling ",(0,t.jsx)(n.strong,{children:"RELOAD PROJECT"})," command is necessary when the automatic project reload mechanisms could not apply, i.e. in the following contexts:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the project is run by 4D Server or 4D Developer and source files are modified by an external means, for example by a ",(0,t.jsx)(n.em,{children:"pull"})," action from a source control repository; and you cannot (or you don't want to) manually move the application window, for example because you want to to have an automatic execution."]}),"\n",(0,t.jsx)(n.li,{children:"the project is run by 4D Server in headless mode and source files have been modified."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command does nothing if the Design environnement is not opened."}),"\n",(0,t.jsx)(n.p,{children:"When the command is called from:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a 4D Developer connected to a 4D Server on the same machine, it is executed on 4D Server first, then on the 4D Developer side."}),"\n",(0,t.jsx)(n.li,{children:"a 4D Developer connected remotely to a 4D Server, it is executed on 4D Server only."}),"\n",(0,t.jsx)(n.li,{children:"a 4D single-user or a 4D Server, it is executed locally."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Developing a project"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(296540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);