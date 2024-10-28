"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53686],{665640:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=r(474848),s=r(28453);const t={id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/clear-variable",title:"CLEAR VARIABLE",description:"CLEAR VARIABLE ( variable )",source:"@site/versioned_docs/version-20-R7/commands-legacy/clear-variable.md",sourceDirName:"commands-legacy",slug:"/commands/clear-variable",permalink:"/docs/commands/clear-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Validate password",permalink:"/docs/commands/validate-password"},next:{title:"LOAD VARIABLES",permalink:"/docs/commands/load-variables"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CLEAR VARIABLE"})," ( ",(0,a.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Variable to clear"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["CLEAR VARIABLE resets ",(0,a.jsx)(n.em,{children:"variable"})," to its default type value (",(0,a.jsx)(n.em,{children:"i.e."}),", empty string for Text variables, ",(0,a.jsx)(n.em,{children:"0"})," for numeric variables, no elements for arrays, etc.). The variable still exists in memory."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," For more information on default type values, please refer to the ",(0,a.jsx)(n.em,{children:"Default values"})," paragraph."]}),"\n",(0,a.jsxs)(n.p,{children:["The variable you pass in ",(0,a.jsx)(n.em,{children:"variable"})," can be a local, process or interprocess variable."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," You do not need to clear process variables when a process ends; 4D clears them automatically. Similarly, each local variable is automatically cleared when the method in which it was created completes execution."]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["In a form, you are using the drop-down list ",(0,a.jsx)(n.em,{children:"asMyDropDown"})," whose sole purpose is user interface. In other words, you use that array during data entry, but once you are done with the form, you will no longer use that array. Consequently, during the On Unload event, you just get rid of the array:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//asMyDropDown drop-drop list object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0//Initialize the array one way or another\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asMyDropDown;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0//No longer need the array\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asMyDropDown)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/commands/undefined",children:"Undefined"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var a=r(296540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);