"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[269],{206688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var c=t(474848),a=t(28453);const i={id:"call-chain",title:"Call chain",slug:"/commands/call-chain",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/call-chain",title:"Call chain",description:"Call chain -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/call-chain.md",sourceDirName:"commands-legacy",slug:"/commands/call-chain",permalink:"/docs/commands/call-chain",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-chain.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"call-chain",title:"Call chain",slug:"/commands/call-chain",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Action info",permalink:"/docs/commands/action-info"},next:{title:"Command name",permalink:"/docs/commands/command-name"}},d={},s=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function r(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Call chain"})," -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Function result"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Collection of objects describing the call chain within a process"})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.strong,{children:"Call chain"})," command returns a collection of objects describing each step of the method call chain within the current process. It provides the same information as the Debugger window. It has the added benefit of being able to be executed from any 4D environment, including compiled mode."]}),"\n",(0,c.jsx)(n.p,{children:"The command facilitates debugging by enabling the identification of the method called, the component that called it, and the line number where the call was made. Each object in the returned collection contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Property"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Type"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Description"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Example"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"database"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"Name of the database calling the method (to distinguish host methods and component methods)"}),(0,c.jsx)(n.td,{children:'"database":"contactInfo"'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"line"}),(0,c.jsx)(n.td,{children:"longint"}),(0,c.jsx)(n.td,{children:"Line number of call to the method"}),(0,c.jsx)(n.td,{children:'"line":6'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"name"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"Name of the called method"}),(0,c.jsx)(n.td,{children:'"name":"On Load"'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"type"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsxs)(n.td,{children:["Type of the method: ",(0,c.jsx)(n.br,{}),'"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the ',(0,c.jsx)(n.em,{children:"Execute on Server attribute"}),'.), "executeFormula" (when executing a formula via ',(0,c.jsx)(n.a,{href:"/docs/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' or the evaluation of a formula in a 4D Write Pro document.)"classFunction"</li<"formmethod",<>']}),(0,c.jsx)(n.td,{children:'"type":"formMethod"'})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Note:"})," For this command to be able to operate in compiled mode, the Range checking must not be disabled. See ",(0,c.jsx)(n.em,{children:"Range checking"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"The following code returns a collection of objects containing information about the method call chain:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $currentCallChain : Collection\n\xa0$currentCallChain:=Call chain\n"})}),"\n",(0,c.jsx)(n.p,{children:"If a project method is executed, the call chain could contain (for example):"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name":"detailForm",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0}]\n'})}),"\n",(0,c.jsx)(n.p,{children:"If a form object method is executed, the call chain could contain (for example):"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"formObjectMethod",\xa0 \xa0 "name":"detailForm.Button",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"formMethod",\xa0 \xa0 "name\u201d:"detailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name\u201d:"showDetailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase\u201d\xa0 \xa0}]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var c=t(296540);const a={},i=c.createContext(a);function o(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);