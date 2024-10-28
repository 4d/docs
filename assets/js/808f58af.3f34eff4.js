"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19811],{736617:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(474848),d=n(28453);const i={id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},a=void 0,o={id:"commands-legacy/show-on-disk",title:"SHOW ON DISK",description:"SHOW ON DISK ( pathname {; *} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/show-on-disk.md",sourceDirName:"commands-legacy",slug:"/commands/show-on-disk",permalink:"/docs/commands/show-on-disk",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshow-on-disk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET DOCUMENT SIZE",permalink:"/docs/commands/set-document-size"},next:{title:"Test path name",permalink:"/docs/commands/test-path-name"}},r={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4}];function l(e){const s={br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SHOW ON DISK"})," ( ",(0,t.jsx)(s.em,{children:"pathname"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pathname"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Pathname of item to show"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"If the item is a folder, show its contents"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The SHOW ON DISK command displays the file or folder whose pathname was passed in the ",(0,t.jsx)(s.em,{children:"pathname"})," parameter in a standard window of the operating system.",(0,t.jsx)(s.br,{}),"\nIn a user interface, this command lets you designate the location of a specific file or folder."]}),"\n",(0,t.jsxs)(s.p,{children:["By default, if ",(0,t.jsx)(s.em,{children:"pathname"})," designates a folder, the command displays the level of the folder itself. If you pass the optional ",(0,t.jsx)(s.em,{children:"*"})," parameter, the command opens the folder and displays its contents in the window. If ",(0,t.jsx)(s.em,{children:"pathname"})," designates a file, the ",(0,t.jsx)(s.em,{children:"*"})," parameter is ignored."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"The following examples illustrate the operation of this command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\MyFile.txt")\xa0// Displays the designated file\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(403269).A+"",width:"356",height:"287"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2")\xa0// Displays the designated folder\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(153796).A+"",width:"356",height:"287"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MyFolder\\\\Folder2";*)\xa0// Displays the contents of the designated folder\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(506423).A+"",width:"364",height:"274"})}),"\n",(0,t.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(s.p,{children:"The system variable OK is set to 1 if the command is executed correctly."})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},403269:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/pict35007.en-2c7bdca89d46296734727474b018a53b.png"},153796:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/pict35008.en-33fb1afdbb0f542d336cde83117efc01.png"},506423:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/pict35009.en-470c1aff5b19d734834f73845135a32f.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(296540);const d={},i=t.createContext(d);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);