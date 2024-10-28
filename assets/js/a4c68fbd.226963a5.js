"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42831],{908823:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(474848),r=n(28453);const o={id:"test-semaphore",title:"Test semaphore",slug:"/commands/test-semaphore",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/test-semaphore",title:"Test semaphore",description:"Test semaphore ( semaphore ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/test-semaphore.md",sourceDirName:"commands-legacy",slug:"/commands/test-semaphore",permalink:"/docs/commands/test-semaphore",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftest-semaphore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"test-semaphore",title:"Test semaphore",slug:"/commands/test-semaphore",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PROCESS VARIABLE",permalink:"/docs/commands/set-process-variable"},next:{title:"VARIABLE TO VARIABLE",permalink:"/docs/commands/variable-to-variable"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Test semaphore"})," ( ",(0,t.jsx)(s.em,{children:"semaphore"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"semaphore"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Name of the semaphore to test"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Function result"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"True = the semaphore exists, False = the semaphore doesn\u2019t exist"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Test semaphore"})," command tests for the existence of a semaphore."]}),"\n",(0,t.jsxs)(s.p,{children:["The difference between the ",(0,t.jsx)(s.a,{href:"/docs/commands/semaphore",children:"Semaphore"})," function and the ",(0,t.jsx)(s.strong,{children:"Test semaphore"})," function is that ",(0,t.jsx)(s.strong,{children:"Test semaphore"})," doesn\u2019t create the ",(0,t.jsx)(s.em,{children:"semaphore"})," if it doesn\u2019t exist. If the ",(0,t.jsx)(s.em,{children:"semaphore"})," exists, the function returns ",(0,t.jsx)(s.strong,{children:"True"}),". Otherwise, it returns ",(0,t.jsx)(s.strong,{children:"False"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["The following example allows you to know the state of a process (in our case, while modifying the code) without modifying ",(0,t.jsx)(s.em,{children:"semaphore"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$Win:=Open window(x1;x2;y1;y2;-Palette window)\n\xa0Repeat\n\xa0\xa0\xa0\xa0If(Test semaphore("Encrypting code"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0POSITION MESSAGE($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Encrypting code being modified.")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0POSITION MESSAGE($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Modification of the encrypting code authorized.")\n\xa0\xa0\xa0\xa0End if\n\xa0Until(StopInfo)\n\xa0CLOSE WINDOW\n'})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/semaphore",children:"Semaphore"})]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var t=n(296540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);