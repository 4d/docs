"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57697"],{903910:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-resource","title":"GET RESOURCE","description":"GET RESOURCE ( resType ; resID ; resData {; resFile} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource","permalink":"/docs/commands/get-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-resource","title":"GET RESOURCE","slug":"/commands/get-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE RESOURCE","permalink":"/docs/commands/get-picture-resource"},"next":{"title":"Get resource name","permalink":"/docs/commands/get-resource-name"}}'),t=r("785893"),i=r("250065");let d={id:"get-resource",title:"GET RESOURCE",slug:"/commands/get-resource",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Platform independence",id:"platform-independence",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET RESOURCE"})," ( ",(0,t.jsx)(n.em,{children:"resType"})," ; ",(0,t.jsx)(n.em,{children:"resID"})," ; ",(0,t.jsx)(n.em,{children:"resData"})," {; ",(0,t.jsx)(n.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4-character resource type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Resource ID number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resData"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB field or variable to receive the data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contents of the resource"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resFile"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Resource file reference number, or all open resource files, if omitted"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"GET RESOURCE"})," command returns in the BLOB field or variable ",(0,t.jsx)(n.em,{children:"resData"})," the contents of the resource whose type and ID is passed in ",(0,t.jsx)(n.em,{children:"resType"})," and ",(0,t.jsx)(n.em,{children:"resID"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important:"})," You must pass a 4-character string in ",(0,t.jsx)(n.em,{children:"resType"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the resource is not found, the ",(0,t.jsx)(n.em,{children:"resData"})," parameter is left unchanged and the OK variable is set to 0 (zero)."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass a valid resource file reference number in ",(0,t.jsx)(n.em,{children:"resFile"}),", the resource is searched for in that file only. If you do not pass ",(0,t.jsx)(n.em,{children:"resFile"}),", the first occurrence of the resource found in the resource files chain is returned."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," A resource can be at least several megabytes in size."]}),"\n",(0,t.jsx)(n.h4,{id:"platform-independence",children:"Platform independence"}),"\n",(0,t.jsxs)(n.p,{children:["Remember that you are working with Mac OS-based resources. No matter what the platform, internal resource data such as Long Integer is stored using Macintosh byte ordering. On Windows, the data for standard resources (such as string list and pictures resources) is automatically byte swapped when necessary. On the other hand, if you create and use your own internal data structures, it is up to you to byte swap the data you extract from the BLOB (i.e., passing Macintosh byte ordering to a command such as ",(0,t.jsx)(n.a,{href:"/docs/commands/blob-to-longint",children:"BLOB to longint"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"See the example for the  command."}),"\n",(0,t.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(n.p,{children:"If the resource is found, OK is set to 1. Otherwise, it is set to 0 (zero)."}),"\n",(0,t.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(n.p,{children:["If there is not enough memory to load the resource, an error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Resources"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"508"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);