"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7417],{684072:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=r(474848),s=r(28453);const o={id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/level",title:"Level",description:"Level  -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/level.md",sourceDirName:"commands-legacy",slug:"/commands/level",permalink:"/docs/commands/level",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flevel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is in print preview",permalink:"/docs/commands/is-in-print-preview"},next:{title:"OPEN PRINTING JOB",permalink:"/docs/commands/open-printing-job"}},l={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Level"}),"  -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Current break or header level"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Level is used to determine the current header or break level. It returns the level number during the On Header and On Printing Break events."}),"\n",(0,t.jsx)(n.p,{children:"Level 0 is the last level to be printed and is appropriate for printing a grand total. Level returns 1 when 4D prints a break on the first sorted field, 2 when 4D prints a break on the second sorted field, and so on."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example is a template for a form method. It shows each of the possible events that can occur while a summary report uses a form as an output form. Level is called when a header or a break is printed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Method of a form being used as output form for a summary report\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Header)\n\xa0\xa0// A header area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// Code for the first break header goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Code for a break header level 1 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0// Code for a break header level 2 goes here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Detail)\n\xa0\xa0// A record is about to be printed\n\xa0\xa0// Code for each record goes here\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0// A break area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0// Code for a break level 0 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Code for a break level 1 goes here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0// Code for the last footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Code for a footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(296540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);