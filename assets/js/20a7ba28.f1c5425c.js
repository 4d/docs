"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99680],{587393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=s(474848),i=s(28453);const t={id:"zip-create-archive",title:"ZIP Create archive",displayed_sidebar:"docs"},l=void 0,d={id:"commands/zip-create-archive",title:"ZIP Create archive",description:"ZIP Create archive ( fileToZip 4D.File ) 4D.Folder ; destinationFile Integer }) Object ; destinationFile Object",source:"@site/versioned_docs/version-20-R7/commands/zip-create-archive.md",sourceDirName:"commands",slug:"/commands/zip-create-archive",permalink:"/docs/commands/zip-create-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-create-archive.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"zip-create-archive",title:"ZIP Create archive",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Folder",permalink:"/docs/commands/folder"},next:{title:"ZIP Read archive",permalink:"/docs/commands/zip-read-archive"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,r.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,r.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,r.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,r.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,r.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,r.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,r.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fileToZip"}),(0,r.jsx)(n.td,{children:"4D.File"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"File or Folder object to compress"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folderToZip"}),(0,r.jsx)(n.td,{children:"4D.Folder"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"File or Folder object to compress"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zipStructure"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"File or Folder object to compress"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinationFile"}),(0,r.jsx)(n.td,{children:"4D.File"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Destination file for the archive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"folderToZip"})," option: ",(0,r.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(n.td,{children:"Status object"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R3"}),(0,r.jsxs)(n.td,{children:["Added ",(0,r.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,r.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,r.jsx)(n.code,{children:".level"})," property"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ZIP Create archive"})," command creates a compressed ZIP archive object and returns the status of the operation."]}),"\n",(0,r.jsx)(n.p,{children:"You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"fileToZip"}),": You simply pass a ",(0,r.jsx)(n.code,{children:"4D.File"})," to compress."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"folderToZip"}),": You pass a ",(0,r.jsx)(n.code,{children:"4D.Folder"})," to compress. In this case, the ",(0,r.jsx)(n.em,{children:"options"})," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,r.jsx)(n.code,{children:"ZIP Create archive"})," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,r.jsx)(n.code,{children:"ZIP Without enclosing folder"})," constant in the ",(0,r.jsx)(n.em,{children:"options"})," parameter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"zipStructure"}),": You pass an object describing the ZIP archive object. The following properties are available to define the structure:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compression"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression standard"}),": Deflate compression (default)"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression LZMA"}),": LZMA compression"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression XZ"}),": XZ compression"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression none"}),": No compression"]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"level"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: ",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encryption"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["The encryption to use if a password is set:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Encryption AES128"}),": AES encryption using 128-bit key."]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Encryption AES192"}),": AES encryption using 192-bit key."]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Encryption AES256"}),": AES encryption using 256-bit key (default if password is set)."]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ZIP Encryption none"}),": Data is not encrypted (default if no password is set)"]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"A password to use if encryption is required."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"files"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.li,{children:["a collection of ",(0,r.jsx)(n.code,{children:"4D.File"})," or ",(0,r.jsx)(n.code,{children:"4D.Folder"})," objects or"]}),(0,r.jsx)(n.li,{children:"a collection of objects with the following properties:"}),(0,r.jsx)(n.table,{children:(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Property"}),(0,r.jsx)(n.td,{children:"Type"}),(0,r.jsx)(n.td,{children:"Description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"4D.File or 4D.Folder"}),(0,r.jsx)(n.td,{children:"File or Folder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destination"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"(optional) - Specify a relative filepath to change the organization of the contents of the archive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsxs)(n.td,{children:["(optional) - ",(0,r.jsx)(n.code,{children:"ZIP Ignore invisible files"})," or 0 to compress all of the file"]})]})]})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"callback"}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsx)(n.td,{children:"A callback formula that will receive the compression progress (0 - 100) in $1."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"destinationFile"})," parameter, pass a ",(0,r.jsx)(n.code,{children:"4D.File"}),' object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.']}),"\n",(0,r.jsxs)(n.p,{children:["Once an archive is created, you can use the ",(0,r.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," command to access it."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Status object"})}),"\n",(0,r.jsx)(n.p,{children:"The returned status object contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Error message (if any):",(0,r.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,r.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,r.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Status code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"True if archive created successfully, else false"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["To compress a ",(0,r.jsx)(n.code,{children:"4D.File"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["To compress a ",(0,r.jsx)(n.code,{children:"4D.Folder"})," without the folder itself:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"To compress a ZIP archive structure with a password and progress bar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsxs)(n.p,{children:["You want to pass a collection of folders and files to compress to the ",(0,r.jsx)(n.em,{children:"zipStructure"})," object:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,r.jsx)(n.p,{children:"You want to use an alternative compression algorithm with a high compression level:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //default is 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,r.jsx)(n.a,{href:"/docs/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,r.jsx)(n.a,{href:"/docs/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/zip-read-archive",children:(0,r.jsx)(n.code,{children:"ZIP Read archive"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(296540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);