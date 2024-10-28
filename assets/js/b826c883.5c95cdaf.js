"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35635],{537836:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(474848),o=r(28453);const i={id:"open-resource-file",title:"Open resource file",slug:"/commands/open-resource-file",displayed_sidebar:"docs"},t=void 0,l={id:"commands-legacy/open-resource-file",title:"Open resource file",description:"Open resource file ( resFilename {; fileType} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/open-resource-file.md",sourceDirName:"commands-legacy",slug:"/commands/open-resource-file",permalink:"/docs/commands/open-resource-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-resource-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"open-resource-file",title:"Open resource file",slug:"/commands/open-resource-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get text resource",permalink:"/docs/commands/get-text-resource"},next:{title:"RESOURCE LIST",permalink:"/docs/commands/resource-list"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Open resource file"})," ( ",(0,n.jsx)(s.em,{children:"resFilename"})," {; ",(0,n.jsx)(s.em,{children:"fileType"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"resFilename"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Short or long name of resource file, or Empty string for standard Open File dialog box"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"fileType"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Mac OS file type (4-character string), or Windows file extension (1- to 3-character string), or All files, if omitted"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Function result"}),(0,n.jsx)(s.td,{children:"DocRef"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Resource file reference number"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Open resource file"})," command opens the resource file whose name or pathname you pass in ",(0,n.jsx)(s.em,{children:"resFileName"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"If you pass a file name, the file should be located in the same folder as the structure file of the database. Pass a pathname to open a resource file located in another folder."}),"\n",(0,n.jsxs)(s.p,{children:["If you pass an empty string in ",(0,n.jsx)(s.em,{children:"resFileName"}),", the Open File dialog box is presented. You can then select the resource file to open. If you cancel the dialog, no resource file is open; ",(0,n.jsx)(s.strong,{children:"Open resource file"})," returns a null DocRef and sets the OK variable to 0."]}),"\n",(0,n.jsxs)(s.p,{children:["If the resource file is opened correctly, ",(0,n.jsx)(s.strong,{children:"Open resource file"})," returns its resource file reference number and sets the OK variable to 1. If the resource file does not exist, or if the file you try to open is not a resource file, an error is generated."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["On Macintosh, if you use the Open File dialog box, all files are presented by default. To show a particular type of file, specify the file type in the optional ",(0,n.jsx)(s.em,{children:"fileType"})," parameter."]}),"\n",(0,n.jsxs)(s.li,{children:["On Windows, if you use the Open File dialog box, all files are presented by default. To show a particular type of file, in ",(0,n.jsx)(s.em,{children:"fileType"}),", pass a 1- to 3-character Windows file extension or a Macintosh file type mapped using the ",(0,n.jsx)(s.em,{children:"_o_MAP FILE TYPES"})," command."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Remember to call ",(0,n.jsx)(s.a,{href:"/docs/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," for the resource file. Note, however, that when you quit the application (or open another database), 4D automatically closes all the resource files you opened using ",(0,n.jsx)(s.strong,{children:"Open resource file"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Unlike the ",(0,n.jsx)(s.a,{href:"/docs/commands/open-document",children:"Open document"})," command, which opens a document with exclusive read-write access by default, ",(0,n.jsx)(s.strong,{children:"Open resource file"})," does not prevent you from opening a resource file already open from within the 4D session. For example, if you try to open the same document twice using ",(0,n.jsx)(s.a,{href:"/docs/commands/open-document",children:"Open document"}),", an I/O error will be returned at second attempt. On the other hand, if you try to open a resource file already open from within the 4D session, ",(0,n.jsx)(s.strong,{children:"Open resource file"})," will return the resource file reference number to the file already open. Even if you open a resource file several times, you need to call ",(0,n.jsx)(s.a,{href:"/docs/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," once in order to close that file. Note that this is permitted if the resource file is open from within the 4D session; if you try open a resource file already opened by another application, you will get an I/O error."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"WARNING:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It is forbidden to access a 4D application resource file as well as a 4D Desktop merged database resource file."}),"\n",(0,n.jsxs)(s.li,{children:["Although it is technically possible, you are advised not to use the database structure resource file because your code will not work if the database is compiled and merged with 4D Desktop.",(0,n.jsx)(s.br,{}),"\nHowever, if you access and intend to programmatically add, delete or modify its resources, be sure to test the environment in which you are running. With 4D Server, this will probably lead to serious issues. For example, if you modify a resource on the server machine (via a database method or a stored procedure), you will definitely affect the built-in 4D Server administration service that distributes resources (transparently) to the workstations. Note that with 4D Client, you do not have direct access to the structure file; it is located on the server machine."]}),"\n",(0,n.jsx)(s.li,{children:"For these reasons, if you use resources, store them in your own files."}),"\n",(0,n.jsxs)(s.li,{children:["When working with your own resources, do NOT use negative resource IDs; they are reserved for use by the Operating System. Do NOT use resource IDs in the range 0..14,999; this range is reserved for use by 4D. Use the range 15,000..32,767 for your own resources. Remember that once you have opened a resource file, it will be the first file to be searched in the resource files chain. If you store a resource in that file with an ID in the range of system or 4D resources, this resource will be found by commands such as ",(0,n.jsx)(s.a,{href:"/docs/commands/get-resource",children:"GET RESOURCE"})," and also by internal routines of the 4D application. This may be the result you want to achieve, but if you are not sure, do NOT use these ranges, as they may lead to system errors."]}),"\n",(0,n.jsxs)(s.li,{children:["Resource files are highly structured files and cannot accept more than 2,700 resources per file. If you work with files containing a large number of resources, it is a good idea to test that number before adding new resources to a file. See the Count resources method listed for the ",(0,n.jsx)(s.a,{href:"/docs/commands/resource-type-list",children:"RESOURCE TYPE LIST"})," command."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["After you have opened a resource file, you can analyze the contents of the file using the ",(0,n.jsx)(s.a,{href:"/docs/commands/resource-type-list",children:"RESOURCE TYPE LIST"})," and ",(0,n.jsx)(s.a,{href:"/docs/commands/resource-list",children:"RESOURCE LIST"})," commands."]}),"\n",(0,n.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(s.p,{children:"The following example tries to open, on Windows, the resource file \u201cMyPrefs.res\u201d located in the database folder:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("MyPrefs";"res ")\n'})}),"\n",(0,n.jsx)(s.p,{children:"On Macintosh, the example tries to open the file \u201cMyPrefs\u201d."}),"\n",(0,n.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(s.p,{children:"The following example tries to open, on Windows. the resource file \u201cMyPrefs.rsr\u201d located in the database folder:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("MyPrefs";"rsr")\n'})}),"\n",(0,n.jsx)(s.p,{children:"On Macintosh, the example tries to open the file \u201cMyPrefs\u201d."}),"\n",(0,n.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(s.p,{children:"The following example displays the Open file dialog box showing all types of files:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("")\n'})}),"\n",(0,n.jsx)(s.h4,{id:"example-4",children:"Example 4"}),"\n",(0,n.jsx)(s.p,{children:"The following example displays the Open file dialog box showing files created by the  command, using the default file type:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("";"res ")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("You just opened "+Document+\u201d.")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResFile)\n\xa0End if\n'})}),"\n",(0,n.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,n.jsx)(s.p,{children:"If the resource file is successfully opened, the OK variable is set to 1. If the resource file could not be opened or if the user clicked Cancel in the Open file dialog box, the OK variable is set to 0 (zero)."}),"\n",(0,n.jsx)(s.p,{children:"If the resource file is successfully opened using the Open file dialog box, the Document variable is set to the pathname of the file."}),"\n",(0,n.jsx)(s.h4,{id:"error-management",children:"Error management"}),"\n",(0,n.jsxs)(s.p,{children:["If the resource file could not be opened due to a resource or I/O problem, an error is generated. You can catch this error with an error-handling method installed using ",(0,n.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/commands/close-resource-file",children:"CLOSE RESOURCE FILE"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.em,{children:"Resources"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>l});var n=r(296540);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);