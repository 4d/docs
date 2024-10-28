"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87414],{193146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var s=t(474848),r=t(28453);const d={id:"document-list",title:"DOCUMENT LIST",slug:"/commands/document-list",displayed_sidebar:"docs"},l=void 0,i={id:"commands-legacy/document-list",title:"DOCUMENT LIST",description:"DOCUMENT LIST ( pathname ; documents {; options} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/document-list.md",sourceDirName:"commands-legacy",slug:"/commands/document-list",permalink:"/docs/commands/document-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"document-list",title:"DOCUMENT LIST",slug:"/commands/document-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DELETE FOLDER",permalink:"/docs/commands/delete-folder"},next:{title:"Document to text",permalink:"/docs/commands/document-to-text"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOCUMENT LIST"})," ( ",(0,s.jsx)(n.em,{children:"pathname"})," ; ",(0,s.jsx)(n.em,{children:"documents"})," {; ",(0,s.jsx)(n.em,{children:"options"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pathname"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname to volume, directory or folder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documents"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Names of the documents present at this location"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Options for building list"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"DOCUMENT LIST"})," command populates the Text array ",(0,s.jsx)(n.em,{children:"documents"})," with the names of the documents located at the location you pass in ",(0,s.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You must pass an absolute pathname in the ",(0,s.jsx)(n.em,{children:"pathname"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, if you omit the ",(0,s.jsx)(n.em,{children:"options"})," parameter, only the names of documents are returned in the ",(0,s.jsx)(n.em,{children:"documents"})," array. You can modify this by passing, in the ",(0,s.jsx)(n.em,{children:"options"})," parameter, one or more of the following constants, found in the ",(0,s.jsx)(n.em,{children:"System Documents"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Absolute path"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.em,{children:"documents"})," array contains absolute pathnames"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ignore invisible"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Invisible documents are not listed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Posix path"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.em,{children:"documents"})," array contains Posix format pathnames"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Recursive parsing"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.em,{children:"documents"})," array contains all files and subfolders of the specified folder"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'With the Recursive parsing option in relative mode (option 1 only), the paths of documents located in subfolders begin with the ":" or "\\" characters depending on the platform.'}),"\n",(0,s.jsx)(n.li,{children:'With the Posix path option in relative mode (option 4 only), paths do not start with "/".'}),"\n",(0,s.jsx)(n.li,{children:'With the Posix path option in absolute mode (option 4 + 2), paths always begin with "/".'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If there are no documents at the specified location, the command returns an empty array. If the pathname you pass in ",(0,s.jsx)(n.em,{children:"pathname"})," is invalid, ",(0,s.jsx)(n.strong,{children:"DOCUMENT LIST"})," generates a file manager error that you can intercept using an ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"List of all documents in a folder (default syntax):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["-> arrFiles:",(0,s.jsx)(n.br,{}),"\nText1.txt",(0,s.jsx)(n.br,{}),"\nText2.txt"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"List of all documents in a folder in absolute mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles; Absolute path)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["-> arrFiles:",(0,s.jsx)(n.br,{}),"\nC:\\Text1.txt",(0,s.jsx)(n.br,{}),"\nC:\\Text2.txt"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"List of all documents in recursive (relative) mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles;Recursive parsing)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["-> arrFiles:",(0,s.jsx)(n.br,{}),"\nText1.txt",(0,s.jsx)(n.br,{}),"\nText2.txt",(0,s.jsx)(n.br,{}),"\n\\Folder1\\Text3.txt",(0,s.jsx)(n.br,{}),"\n\\Folder1\\Text4.txt",(0,s.jsx)(n.br,{}),"\n\\Folder2\\Text5.txt",(0,s.jsx)(n.br,{}),"\n\\Folder2\\Folder3\\Picture1.png"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"List of all documents in recursive absolute mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\MyFolder\\\\";arrFiles;Recursive parsing+Absolute path)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["-> arrFiles:",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\MyText1.txt",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\MyText2.txt",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder1\\MyText3.txt",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder1\\MyText4.txt",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder2\\MyText5.txt",(0,s.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png"]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"List of all documents in recursive Posix (relative) mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\MyFolder\\\\";arrFiles;Recursive parsing+Posix path)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["-> arrFiles:",(0,s.jsx)(n.br,{}),"\nMyText1.txt",(0,s.jsx)(n.br,{}),"\nMyText2.txt",(0,s.jsx)(n.br,{}),"\nFolder1/MyText3.txt",(0,s.jsx)(n.br,{}),"\nFolder1/MyText4.txt",(0,s.jsx)(n.br,{}),"\nFolder2/MyText5.txt",(0,s.jsx)(n.br,{}),"\nFolder2/Folder3/MyPicture1.png"]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/folder-list",children:"FOLDER LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/volume-list",children:"VOLUME LIST"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(296540);const r={},d=s.createContext(r);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);