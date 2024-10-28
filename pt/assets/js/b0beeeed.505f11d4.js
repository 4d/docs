"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51231],{56893:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=s(474848),r=s(28453);const d={id:"resume-indexes",title:"RESUME INDEXES",slug:"/commands/resume-indexes",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/resume-indexes",title:"RESUME INDEXES",description:"RESUME INDEXES ( aTable {; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resume-indexes.md",sourceDirName:"commands-legacy",slug:"/commands/resume-indexes",permalink:"/docs/pt/commands/resume-indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresume-indexes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"resume-indexes",title:"RESUME INDEXES",slug:"/commands/resume-indexes",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"RELOAD EXTERNAL DATA",permalink:"/docs/pt/commands/reload-external-data"},next:{title:"SET EXTERNAL DATA PATH",permalink:"/docs/pt/commands/set-external-data-path"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RESUME INDEXES"})," ( ",(0,t.jsx)(n.em,{children:"aTable"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table for which to resume indexes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If passed = asynchronous indexing"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"RESUME INDEXES"})," command reactivates all the indexes of ",(0,t.jsx)(n.em,{children:"aTable"})," when they have been paused previously using the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/pause-indexes",children:"PAUSE INDEXES"})," command. If the indexes of ",(0,t.jsx)(n.em,{children:"aTable"})," have not been paused, this command does nothing."]}),"\n",(0,t.jsxs)(n.p,{children:["In most cases, executing this command triggers the rebuilding of the indexes for ",(0,t.jsx)(n.em,{children:"aTable"}),".",(0,t.jsx)(n.br,{}),"\nIf you pass the optional ",(0,t.jsx)(n.em,{children:"*"})," parameter, the rebuilding of the indexes is performed in asynchronous mode. This means that the method calling the command continues its execution after this call, regardless of whether the indexing is finished or not. If you omit this parameter, the rebuilding of the indexes blocks the execution of the method until the rebuilding operation is completed."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"RESUME INDEXES"})," command can only be called from 4D Server or a local 4D. If this command is executed from a remote 4D machine, the error -10513 is generated. This error can be intercepted using a method installed by the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/create-index",children:"CREATE INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/pause-indexes",children:"PAUSE INDEXES"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);