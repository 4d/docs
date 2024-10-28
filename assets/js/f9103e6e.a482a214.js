"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42320],{960378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"get-indexed-string",title:"Get indexed string",slug:"/commands/get-indexed-string",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/get-indexed-string",title:"Get indexed string",description:"Get indexed string ( resID ; strID {; resFile} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-indexed-string.md",sourceDirName:"commands-legacy",slug:"/commands/get-indexed-string",permalink:"/docs/commands/get-indexed-string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-indexed-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-indexed-string",title:"Get indexed string",slug:"/commands/get-indexed-string",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CLOSE RESOURCE FILE",permalink:"/docs/commands/close-resource-file"},next:{title:"GET PICTURE RESOURCE",permalink:"/docs/commands/get-picture-resource"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Compatibility with XLIFF architecture",id:"compatibility-with-xliff-architecture",level:5},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get indexed string"})," ( ",(0,s.jsx)(n.em,{children:"resID"})," ; ",(0,s.jsx)(n.em,{children:"strID"})," {; ",(0,s.jsx)(n.em,{children:"resFile"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resID"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Resource ID number or 'id' attribute of the 'group' element (XLIFF)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"strID"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"String number or 'id' attribute of the 'trans-unit' element (XLIFF)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resFile"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Resource file reference number If omitted: all the XLIFF files or open resource files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value of the indexed string"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Get indexed string"})," command returns:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Either one of the strings stored in the string list (\u201cSTR#\u201d) resource whose ID is passed in ",(0,s.jsx)(n.em,{children:"resID"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Or a string stored in an open XLIFF file whose 'id' attribute of the 'group' element is passed in ",(0,s.jsx)(n.em,{children:"resID"}),' (see "Compatibility with XLIFF architecture" below).']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You pass the number of the string in ",(0,s.jsx)(n.em,{children:"strID"}),". The strings of a string list resource are numbered from 1 to N. To get all the strings (and their numbers) of a string list resource, use the ",(0,s.jsx)(n.a,{href:"/docs/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})," command."]}),"\n",(0,s.jsx)(n.p,{children:"If the resource or the string within the resource is not found, an empty string is returned and the OK variable is set to 0 (zero)."}),"\n",(0,s.jsxs)(n.p,{children:["If you pass a valid resource file reference number in ",(0,s.jsx)(n.em,{children:"resFile"}),", the resource is searched for in that file only. If you do not pass ",(0,s.jsx)(n.em,{children:"resFile"}),", the first occurrence of the resource found in the resource files chain is returned."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," A string of a string list resource can contain up to 255 characters."]}),"\n",(0,s.jsx)(n.h5,{id:"compatibility-with-xliff-architecture",children:"Compatibility with XLIFF architecture"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Get indexed string"})," command is compatible with the XLIFF architecture of 4D beginning with version 11: the command first looks for values corresponding to ",(0,s.jsx)(n.em,{children:"resID"})," and ",(0,s.jsx)(n.em,{children:"strID"})," in all the open XLIFF files (when the ",(0,s.jsx)(n.em,{children:"resFile"})," parameter is omitted). In this case, ",(0,s.jsx)(n.em,{children:"resID"})," specifies the ",(0,s.jsx)(n.strong,{children:"id"})," attribute of the ",(0,s.jsx)(n.strong,{children:"group"})," element and ",(0,s.jsx)(n.em,{children:"strID"})," specifies the ",(0,s.jsx)(n.strong,{children:"id"})," attribute of the ",(0,s.jsx)(n.strong,{children:"trans-unit"})," element. If the value is not found, the command continues searching in the open resources files. For more information about XLIFF architecture in 4D, refer to the Design Reference manual."]}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the resource is found, OK is set to 1. Otherwise, it is set to 0 (zero)."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-string-resource",children:"Get string resource"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-text-resource",children:"Get text resource"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);