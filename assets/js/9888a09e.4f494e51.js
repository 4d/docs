"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82928"],{999875:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-picture-resource","title":"GET PICTURE RESOURCE","description":"GET PICTURE RESOURCE ( resID ; resData {; resFile} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-picture-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-resource","permalink":"/docs/20-R7/commands/get-picture-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-resource","title":"GET PICTURE RESOURCE","slug":"/commands/get-picture-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get indexed string","permalink":"/docs/20-R7/commands/get-indexed-string"},"next":{"title":"GET RESOURCE","permalink":"/docs/20-R7/commands/get-resource"}}'),t=n("785893"),i=n("250065");let d={id:"get-picture-resource",title:"GET PICTURE RESOURCE",slug:"/commands/get-picture-resource",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let r={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET PICTURE RESOURCE"})," ( ",(0,t.jsx)(r.em,{children:"resID"})," ; ",(0,t.jsx)(r.em,{children:"resData"})," {; ",(0,t.jsx)(r.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resID"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Resource ID number"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resData"}),(0,t.jsx)(r.td,{children:"Field, Variable"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Picture field or variable to receive the picture"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Contents of the PICT resource"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resFile"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Resource file reference number, or all open resource files, if omitted"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"GET PICTURE RESOURCE"})," command returns in the picture field or variable ",(0,t.jsx)(r.em,{children:"resData"})," the picture stored in the picture (\u201CPICT\u201D) resource whose ID is passed in ",(0,t.jsx)(r.em,{children:"resID"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If the resource is not found, the ",(0,t.jsx)(r.em,{children:"resData"})," parameter is left unchanged, and the OK variable is set to 0 (zero)."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass a valid resource file reference number in ",(0,t.jsx)(r.em,{children:"resFile"}),", the resource is searched for in that file only. If you do not pass ",(0,t.jsx)(r.em,{children:"resFile"}),", the first occurrence of the resource found in the resource files chain is returned."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," A picture resource can be at least several megabytes in size."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["See example for the ",(0,t.jsx)(r.a,{href:"/docs/20-R7/commands/resource-list",children:"RESOURCE LIST"})," command."]}),"\n",(0,t.jsx)(r.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(r.p,{children:"If the resource is found, OK is set to 1. Otherwise, it is set to 0 (zero)."}),"\n",(0,t.jsx)(r.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(r.p,{children:["If there is not enough memory to load the picture, an error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(r.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"502"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifies variables"}),(0,t.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var s=n(667294);let t={},i=s.createContext(t);function d(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);