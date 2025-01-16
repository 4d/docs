"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43108"],{852561:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/show-on-disk","title":"SHOW ON DISK","description":"SHOW ON DISK ( pathname {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/show-on-disk.md","sourceDirName":"commands-legacy","slug":"/commands/show-on-disk","permalink":"/docs/commands/show-on-disk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshow-on-disk.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"show-on-disk","title":"SHOW ON DISK","slug":"/commands/show-on-disk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DOCUMENT SIZE","permalink":"/docs/commands/set-document-size"},"next":{"title":"Test path name","permalink":"/docs/commands/test-path-name"}}'),d=s("785893"),i=s("250065");let r={id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SHOW ON DISK"})," ( ",(0,d.jsx)(n.em,{children:"pathname"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pathname"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Pathname of item to show"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"If the item is a folder, show its contents"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The SHOW ON DISK command displays the file or folder whose pathname was passed in the ",(0,d.jsx)(n.em,{children:"pathname"})," parameter in a standard window of the operating system.",(0,d.jsx)(n.br,{}),"\nIn a user interface, this command lets you designate the location of a specific file or folder."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, if ",(0,d.jsx)(n.em,{children:"pathname"})," designates a folder, the command displays the level of the folder itself. If you pass the optional ",(0,d.jsx)(n.em,{children:"*"})," parameter, the command opens the folder and displays its contents in the window. If ",(0,d.jsx)(n.em,{children:"pathname"})," designates a file, the ",(0,d.jsx)(n.em,{children:"*"})," parameter is ignored."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"The following examples illustrate the operation of this command:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\MyFile.txt")\xa0// Displays the designated file\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(111183).Z+"",width:"356",height:"287"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2")\xa0// Displays the designated folder\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(988766).Z+"",width:"356",height:"287"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2";*)\xa0// Displays the contents of the designated folder\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(779125).Z+"",width:"364",height:"274"})}),"\n",(0,d.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"The system variable OK is set to 1 if the command is executed correctly."}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"922"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},111183:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict35007.en-2c7bdca89d46296734727474b018a53b.png"},988766:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict35008.en-33fb1afdbb0f542d336cde83117efc01.png"},779125:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict35009.en-470c1aff5b19d734834f73845135a32f.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let d={},i=t.createContext(d);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);