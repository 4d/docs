"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49434"],{850814:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>s,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"commands/call-chain","title":"Call chain","description":"Call chain : Collection","source":"@site/versioned_docs/version-20-R9/commands/call-chain.md","sourceDirName":"commands","slug":"/commands/call-chain","permalink":"/docs/es/commands/call-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcall-chain.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"call-chain","title":"Call chain","slug":"/commands/call-chain","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Action info","permalink":"/docs/es/commands/action-info"},"next":{"title":"Command name","permalink":"/docs/es/commands/command-name"}}'),l=t("785893"),d=t("250065");let r={id:"call-chain",title:"Call chain",slug:"/commands/call-chain",displayed_sidebar:"docs"},c=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Call chain"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function result"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Collection of objects describing the call chain within a process"})]})})]}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Changes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"20 R9"}),(0,l.jsxs)(n.td,{children:["Support of ",(0,l.jsx)(n.code,{children:"formula"})," property"]})]})})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Call chain"})," command returns a collection of objects describing each step of the method call chain within the current process. It provides the same information as the Debugger window. It has the added benefit of being able to be executed from any 4D environment, including compiled mode."]}),"\n",(0,l.jsx)(n.p,{children:"The command facilitates debugging by enabling the identification of the method or formula called, the component that called it, and the line number where the call was made. Each object in the returned collection contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Property"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Type"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Description"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Example"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"database"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Name of the database calling the method (to distinguish host methods and component methods)"}),(0,l.jsx)(n.td,{children:'"database":"contactInfo"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formula"}),(0,l.jsx)(n.td,{children:"Text (if any)"}),(0,l.jsxs)(n.td,{children:["Contents of the current line of code at the current level of the call chain (raw text). Corresponds to the contents of the line referenced by the ",(0,l.jsx)(n.code,{children:"line"})," property in the source file indicated by method. If the source code is not available, ",(0,l.jsx)(n.code,{children:"formula"})," property is omitted (Undefined)."]}),(0,l.jsx)(n.td,{children:'"var $stack:=Call chain"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"line"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"Line number of call to the method"}),(0,l.jsx)(n.td,{children:'"line":6'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"Ttext"}),(0,l.jsx)(n.td,{children:"Name of the called method"}),(0,l.jsx)(n.td,{children:'"name":"On Load"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsxs)(n.td,{children:["Type of the method: ",(0,l.jsx)(n.li,{children:'"projectMethod"'}),(0,l.jsx)(n.li,{children:'"formObjectMethod"'}),(0,l.jsx)(n.li,{children:'"formmethod"'}),(0,l.jsx)(n.li,{children:'"databaseMethod"'}),(0,l.jsx)(n.li,{children:'"triggerMethod"'}),(0,l.jsxs)(n.li,{children:['"executeOnServer" (when calling a project method with the ',(0,l.jsx)(n.em,{children:"Execute on Server attribute"}),")"]}),(0,l.jsxs)(n.li,{children:[' "executeFormula" (when executing a formula via ',(0,l.jsx)(n.a,{href:"../commands-legacy/process-4d-tags.md",children:"PROCESS 4D TAGS"})," or the evaluation of a formula in a 4D Write Pro document)"]}),(0,l.jsx)(n.li,{children:'"classFunction"'}),(0,l.jsx)(n.li,{children:'"formMethod"'})]}),(0,l.jsx)(n.td,{children:'"type":"formMethod"'})]})]})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["For this command to be able to operate in compiled mode, the ",(0,l.jsx)(n.a,{href:"../Project/compiler.md#range-checking",children:"Range checking"})," must not be disabled."]})}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"The following code returns a collection of objects containing information about the method call chain:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"var $currentCallChain : Collection\n$currentCallChain:=Call chain\n"})}),"\n",(0,l.jsx)(n.p,{children:"If a project method is executed, the call chain could contain (for example):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "type":"projectMethod",\n        "name":"detailForm",\n        "line":1,\n        "database":"myDatabase"\n    }\n]\n'})}),"\n",(0,l.jsx)(n.p,{children:"If a form object method is executed, the call chain could contain (for example):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "type":"formObjectMethod",\n        "name":"detailForm.Button",\n        "line":1,\n        "database":"myDatabase"\n    },\n    {\n        "type":"formMethod",\n        "name":"detailForm",\n        "line":2,\n        "database":"myDatabase"\n    },\n    {\n        "type":"projectMethod",\n        "name":"showDetailForm",\n        "line":2,\n        "database":"myDatabase"\n    }\n]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"1662"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(667294);let l={},d=i.createContext(l);function r(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);