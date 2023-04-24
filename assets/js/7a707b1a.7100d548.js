"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"paths",title:"Pathnames"},s=void 0,i={unversionedId:"Concepts/paths",id:"version-20/Concepts/paths",title:"Pathnames",description:"File and Folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:",source:"@site/versioned_docs/version-20/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/Concepts/paths",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"paths",title:"Pathnames"},sidebar:"docs",previous:{title:"Identifiers",permalink:"/docs/Concepts/identifiers"},next:{title:"ORDA",permalink:"/docs/ORDA/overview"}},p={},d=[{value:"Filesystem pathnames",id:"filesystem-pathnames",level:2},{value:"POSIX syntax",id:"posix-syntax",level:2},{value:"Platform-specific syntax",id:"platform-specific-syntax",level:2},{value:"Windows",id:"windows",level:3},{value:"Windows pathnames and escape sequences",id:"windows-pathnames-and-escape-sequences",level:4},{value:"macOS",id:"macos",level:3},{value:"Absolute and relative pathnames",id:"absolute-and-relative-pathnames",level:2},{value:"<code>File</code> and <code>Folder</code> constructors",id:"file-and-folder-constructors",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder functions",id:"file-and-folder-folder-functions",level:3},{value:"Examples",id:"examples",level:2}],c={toc:d};function u(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"File and Folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n')),(0,n.kt)("p",null,"In addition, file and folder objects support ",(0,n.kt)("inlineCode",{parentName:"p"},"fileSystems"),", which provide contextual path to main application folders."),(0,n.kt)("h2",r({},{id:"filesystem-pathnames"}),"Filesystem pathnames"),(0,n.kt)("p",null,"4D accepts several ",(0,n.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames that designate specific 4D folders with variable location on macOS and Windows. Filesystem pathnames are useful for two main reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Independence: You can move your solution from one place to another regardless of the OS, without having to worry about paths,"),(0,n.kt)("li",{parentName:"ul"},"Security: No code can access elements located above the file system root on the disk (sandboxing).")),(0,n.kt)("p",null,"The following filesystem pathnames are supported: "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"filesystem"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Designates"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/DATA"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current data folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/LOGS"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Logs folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/PACKAGE"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database folder (with or without 4dbase extension)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/PROJECT"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Project folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/RESOURCES"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current database resources folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"/SOURCES"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current project resources folder")))),(0,n.kt)("h2",r({},{id:"posix-syntax"}),"POSIX syntax"),(0,n.kt)("p",null,"The POSIX syntax is supported on all platforms. ",(0,n.kt)("strong",{parentName:"p"},"POSIX syntax is recommended")," since it is the most flexible. It is used by default (returned by ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#path"}),"file.path")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#path"}),"folder.path")," properties)."),(0,n.kt)("p",null,"With this syntax:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'folders are separated by "/"'),(0,n.kt)("li",{parentName:"ul"},'absolute pathnames start with a "/"'),(0,n.kt)("li",{parentName:"ul"},'to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).')),(0,n.kt)("p",null,"In POSIX syntax, you will generally use ",(0,n.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames with ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#file"}),(0,n.kt)("inlineCode",{parentName:"a"},"File"))," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder"))," commands, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n')),(0,n.kt)("h2",r({},{id:"platform-specific-syntax"}),"Platform-specific syntax"),(0,n.kt)("p",null,"Platform-specific syntax depends on the operating system on which the command is executed. Note that when creating a file or folder object with this syntax, you must declare it using the ",(0,n.kt)("inlineCode",{parentName:"p"},"fk platform path")," constant as parameter. "),(0,n.kt)("h3",r({},{id:"windows"}),"Windows"),(0,n.kt)("p",null,"The following patterns are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'folder separators are "\\"'),(0,n.kt)("li",{parentName:"ul"},'the text contains ":" and "\\" as the second and third character,'),(0,n.kt)("li",{parentName:"ul"},'the text starts with "',"\\",'".')),(0,n.kt)("p",null,"Examples with ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n')),(0,n.kt)("h4",r({},{id:"windows-pathnames-and-escape-sequences"}),"Windows pathnames and escape sequences"),(0,n.kt)("p",null,"The 4D language allows the use of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/quick-tour#escape-sequences"}),"escape sequences"),". Escape sequences begin with a backslash ",(0,n.kt)("inlineCode",{parentName:"p"},"\\"),", followed by a character. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"\\t")," is the escape sequence for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," character."),(0,n.kt)("p",null,"Since the ",(0,n.kt)("inlineCode",{parentName:"p"},"\\")," character is also used as the separator in pathnames in Windows, you need to enter a double ",(0,n.kt)("inlineCode",{parentName:"p"},"\\\\")," in windows pathnames."),(0,n.kt)("h3",r({},{id:"macos"}),"macOS"),(0,n.kt)("p",null,"The following patterns are supported (HFS+ syntax):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'folder separators are ":"'),(0,n.kt)("li",{parentName:"ul"},'the path must not start with a ":"')),(0,n.kt)("p",null,"Examples with ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume must be called Monday\n')),(0,n.kt)("h2",r({},{id:"absolute-and-relative-pathnames"}),"Absolute and relative pathnames"),(0,n.kt)("h3",r({},{id:"file-and-folder-constructors"}),(0,n.kt)("inlineCode",{parentName:"h3"},"File")," and ",(0,n.kt)("inlineCode",{parentName:"h3"},"Folder")," constructors"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#file"}),(0,n.kt)("inlineCode",{parentName:"a"},"File"))," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder"))," commands only accept ",(0,n.kt)("strong",{parentName:"p"},"absolute pathnames"),". Relative pathnames are not supported and will return errors. For example, the following code is not allowed:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    //ERROR\n$ko:=Folder("myFolder").create() //relative pathname with constructor\n')),(0,n.kt)("p",null,"If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"filesystems")," (see above). For example, you can write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder\n')),(0,n.kt)("h3",r({},{id:"file-and-folder-folder-functions"}),(0,n.kt)("inlineCode",{parentName:"h3"},".file()")," and ",(0,n.kt)("inlineCode",{parentName:"h3"},".folder()")," folder functions"),(0,n.kt)("p",null,"Functions of folder objects such as ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#file"}),(0,n.kt)("inlineCode",{parentName:"a"},"folder.file()"))," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FolderClass#folder-1"}),(0,n.kt)("inlineCode",{parentName:"a"},"folder.folder()"))," expect relative POSIX pathnames. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //to reference a "Picture" folder within the user documents folder\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //to create a folder on the desktop\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n')),(0,n.kt)("p",null,"Absolute pathnames are not supported and will return errors."),(0,n.kt)("h2",r({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n \n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n \n$f3:=Folder("/DATA/archive/jan2019")\n \n$f4:=File("/DATA/info.txt")\n \n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n \n$f6:=File(fk backup log file)\n')))}u.isMDXComponent=!0}}]);