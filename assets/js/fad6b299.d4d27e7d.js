"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23603],{444412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var l=s(474848),t=s(28453);const r={id:"paths",title:"Pathnames"},d=void 0,o={id:"Concepts/paths",title:"Pathnames",description:"File and Folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:",source:"@site/versioned_docs/version-20-R6/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/20-R6/Concepts/paths",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"paths",title:"Pathnames"},sidebar:"docs",previous:{title:"Identifiers",permalink:"/docs/20-R6/Concepts/identifiers"},next:{title:"Classes",permalink:"/docs/20-R6/category/class-API-reference"}},a={},i=[{value:"Filesystem pathnames",id:"filesystem-pathnames",level:2},{value:"POSIX syntax",id:"posix-syntax",level:2},{value:"Platform-specific syntax",id:"platform-specific-syntax",level:2},{value:"Windows",id:"windows",level:3},{value:"Windows pathnames and escape sequences",id:"windows-pathnames-and-escape-sequences",level:4},{value:"macOS",id:"macos",level:3},{value:"Absolute and relative pathnames",id:"absolute-and-relative-pathnames",level:2},{value:"<code>File</code> and <code>Folder</code> constructors",id:"file-and-folder-constructors",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder functions",id:"file-and-folder-folder-functions",level:3},{value:"Examples",id:"examples",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"File and Folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,l.jsxs)(n.p,{children:["In addition, file and folder objects support ",(0,l.jsx)(n.code,{children:"fileSystems"}),", which provide contextual path to main application folders."]}),"\n",(0,l.jsx)(n.h2,{id:"filesystem-pathnames",children:"Filesystem pathnames"}),"\n",(0,l.jsxs)(n.p,{children:["4D accepts several ",(0,l.jsx)(n.code,{children:"filesystem"})," pathnames that designate specific 4D folders with variable location on macOS and Windows. A filesystem path is evaluated with regards to the context and is returned as an absolute path."]}),"\n",(0,l.jsx)(n.p,{children:"Filesystem pathnames are useful for two main reasons:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Independence: You can move your solution from one place to another regardless of the OS, without having to worry about paths,"}),"\n",(0,l.jsx)(n.li,{children:"Security: No code can access elements located above the file system root on the disk (sandboxing)."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The following filesystem pathnames are supported:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"filesystem"}),(0,l.jsx)(n.th,{children:"Designates"}),(0,l.jsx)(n.th,{children:"Example"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/DATA"'}),(0,l.jsx)(n.td,{children:"Current data folder"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Data\\"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/LOGS"'}),(0,l.jsx)(n.td,{children:"Logs folder"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Data\\Logs\\"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/PACKAGE"'}),(0,l.jsx)(n.td,{children:"Project root folder (with or without 4dbase extension)"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/PROJECT"'}),(0,l.jsx)(n.td,{children:"Project folder"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Project\\"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/RESOURCES"'}),(0,l.jsx)(n.td,{children:"Current project resources folder"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Resources\\"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:'"/SOURCES"'}),(0,l.jsx)(n.td,{children:"Current project sources folder"}),(0,l.jsx)(n.td,{children:'"C:\\MyApps\\Students\\Project\\Sources\\"'})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"posix-syntax",children:"POSIX syntax"}),"\n",(0,l.jsxs)(n.p,{children:["The POSIX syntax is supported on all platforms. ",(0,l.jsx)(n.strong,{children:"POSIX syntax is recommended"})," since it is the most flexible. It is used by default (returned by ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#path",children:"file.path"})," and ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#path",children:"folder.path"})," properties)."]}),"\n",(0,l.jsx)(n.p,{children:"With this syntax:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'folders are separated by "/"'}),"\n",(0,l.jsx)(n.li,{children:'absolute pathnames start with a "/"'}),"\n",(0,l.jsx)(n.li,{children:'to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["In POSIX syntax, you will generally use ",(0,l.jsx)(n.code,{children:"filesystem"})," pathnames with ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#file",children:(0,l.jsx)(n.code,{children:"File"})})," and ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," commands, for example:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $pathFile : 4D.File\nvar $pathFolder : 4D.Folder\n$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"platform-specific-syntax",children:"Platform-specific syntax"}),"\n",(0,l.jsxs)(n.p,{children:["Platform-specific syntax depends on the operating system on which the command is executed. Note that when creating a file or folder object with this syntax, you must declare it using the ",(0,l.jsx)(n.code,{children:"fk platform path"})," constant as parameter."]}),"\n",(0,l.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,l.jsx)(n.p,{children:"The following patterns are supported:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'folder separators are ""'}),"\n",(0,l.jsx)(n.li,{children:'the text contains ":" and "" as the second and third character,'}),"\n",(0,l.jsx)(n.li,{children:'the text starts with "\\".'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Examples with ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,l.jsx)(n.h4,{id:"windows-pathnames-and-escape-sequences",children:"Windows pathnames and escape sequences"}),"\n",(0,l.jsxs)(n.p,{children:["The 4D language allows the use of ",(0,l.jsx)(n.a,{href:"/docs/20-R6/Concepts/quick-tour#escape-sequences",children:"escape sequences"}),". Escape sequences begin with a backslash ",(0,l.jsx)(n.code,{children:"\\"}),", followed by a character. For example, ",(0,l.jsx)(n.code,{children:"\\t"})," is the escape sequence for the ",(0,l.jsx)(n.code,{children:"Tab"})," character."]}),"\n",(0,l.jsxs)(n.p,{children:["Since the ",(0,l.jsx)(n.code,{children:"\\"})," character is also used as the separator in pathnames in Windows, you need to enter a double ",(0,l.jsx)(n.code,{children:"\\\\"})," in windows pathnames."]}),"\n",(0,l.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,l.jsx)(n.p,{children:"The following patterns are supported (HFS+ syntax):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'folder separators are ":"'}),"\n",(0,l.jsx)(n.li,{children:'the path must not start with a ":"'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Examples with ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume must be called Monday\n'})}),"\n",(0,l.jsx)(n.h2,{id:"absolute-and-relative-pathnames",children:"Absolute and relative pathnames"}),"\n",(0,l.jsxs)(n.h3,{id:"file-and-folder-constructors",children:[(0,l.jsx)(n.code,{children:"File"})," and ",(0,l.jsx)(n.code,{children:"Folder"})," constructors"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#file",children:(0,l.jsx)(n.code,{children:"File"})})," and ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#folder",children:(0,l.jsx)(n.code,{children:"Folder"})})," commands only accept ",(0,l.jsx)(n.strong,{children:"absolute pathnames"}),". Relative pathnames are not supported and will return errors. For example, the following code is not allowed:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\t//ERROR\n$ko:=Folder("myFolder").create() //relative pathname with constructor\n'})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use ",(0,l.jsx)(n.code,{children:"filesystems"})," (see above). For example, you can write:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"file-and-folder-folder-functions",children:[(0,l.jsx)(n.code,{children:".file()"})," and ",(0,l.jsx)(n.code,{children:".folder()"})," folder functions"]}),"\n",(0,l.jsxs)(n.p,{children:["Functions of folder objects such as ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#file",children:(0,l.jsx)(n.code,{children:"folder.file()"})})," and ",(0,l.jsx)(n.a,{href:"/docs/20-R6/API/FolderClass#folder-1",children:(0,l.jsx)(n.code,{children:"folder.folder()"})})," expect relative POSIX pathnames. For example:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $userImages : 4D.Folder\nvar $ok : Boolean\n  //to reference a "Picture" folder within the user documents folder\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //to create a folder on the desktop\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,l.jsx)(n.p,{children:"Absolute pathnames are not supported and will return errors."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $fold : 4D.Folder\nvar $file : 4D.File\n\n$fold:=Folder(fk desktop folder).folder("archive/jan2019")\n$fold:=Folder("/DATA/archive/jan2019")\n$file:=Folder("/DATA/archive/jan2019").file("total.txt")\n$file:=File("/DATA/info.txt")\n$file:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n$file:=File(fk backup log file)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var l=s(296540);const t={},r=l.createContext(t);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);