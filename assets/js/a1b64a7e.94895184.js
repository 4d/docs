"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38108],{416928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=t(474848),r=t(28453);const i={id:"length",title:"Length",slug:"/commands/length",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/length",title:"Length",description:"Length ( string ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/length.md",sourceDirName:"commands-legacy",slug:"/commands/length",permalink:"/docs/commands/length",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flength.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"length",title:"Length",slug:"/commands/length",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Insert string",permalink:"/docs/commands/insert-string"},next:{title:"Localized string",permalink:"/docs/commands/localized-string"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function h(e){const n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Length"})," ( ",(0,s.jsx)(n.em,{children:"string"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"String for which to return length"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Length of string"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Length"})," is used to find the length of ",(0,s.jsx)(n.em,{children:"aString"}),". ",(0,s.jsx)(n.strong,{children:"Length"})," returns the number of characters that are in ",(0,s.jsx)(n.em,{children:"aString"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' In Unicode mode, when you want to check whether a string contains any characters, including ignorable characters, you must use the test If(Length(vtAnyText)=0) rather than If(vtAnyText=""). If the string contains for example Char(1), which is an ignorable character, Length(vtAnyText) does return 1 but vtAnyText="" returns True.']}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["This example illustrates the use of ",(0,s.jsx)(n.strong,{children:"Length"}),". The results, described in the comments, are assigned to the variable ",(0,s.jsx)(n.em,{children:"vlResult"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vlResult:=Length("Topaz")\xa0// vlResult gets 5\n\xa0vlResult:=Length("Citizen")\xa0// vlResult gets 7\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);