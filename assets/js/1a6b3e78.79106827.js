"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70576],{493215:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(474848),r=s(28453);const a={id:"set-environment-variable",title:"SET ENVIRONMENT VARIABLE",slug:"/commands/set-environment-variable",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/set-environment-variable",title:"SET ENVIRONMENT VARIABLE",description:"SET ENVIRONMENT VARIABLE ( varName ; varValue )",source:"@site/versioned_docs/version-20-R7/commands-legacy/set-environment-variable.md",sourceDirName:"commands-legacy",slug:"/commands/set-environment-variable",permalink:"/docs/commands/set-environment-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-environment-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-environment-variable",title:"SET ENVIRONMENT VARIABLE",slug:"/commands/set-environment-variable",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PROCESS 4D TAGS",permalink:"/docs/commands/process-4d-tags"},next:{title:"SET MACRO PARAMETER",permalink:"/docs/commands/set-macro-parameter"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET ENVIRONMENT VARIABLE"})," ( ",(0,t.jsx)(n.em,{children:"varName"})," ; ",(0,t.jsx)(n.em,{children:"varValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"varName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Variable name to set"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"varValue"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:'Value of the variable or  "" to reset default value'})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibility",type:"info",children:(0,t.jsxs)(n.p,{children:["This command is maintained for compatibility reasons only. It is now recommended to use the ",(0,t.jsx)(n.a,{href:"/docs/API/SystemWorkerClass",children:(0,t.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SET ENVIRONMENT VARIABLE"})," command allows you to set the value of an environment variable under macOS and Windows. It is meant to be used with the ",(0,t.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," command. It also works with the ",(0,t.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the name of the variable to define in ",(0,t.jsx)(n.em,{children:"varName"})," and its value in ",(0,t.jsx)(n.em,{children:"varValue"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To get the general list of environment variables and possible values, please refer to the technical documentation of your operating system."}),"\n",(0,t.jsxs)(n.li,{children:["Three specific environment variables are available for use in the context of the ",(0,t.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," command:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"_4D_OPTION_CURRENT_DIRECTORY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"_4D_OPTION_HIDE_CONSOLE"})," (Windows only)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For information on these variables, please refer to the documentation for the ",(0,t.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to examples of the ",(0,t.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(296540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);