"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13838"],{723300:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"Project/architecture","title":"Architecture of a project","description":"A 4D project is made of several folders and files, stored within a single project root folder (package folder). For example:","source":"@site/versioned_docs/version-19/Project/architecture.md","sourceDirName":"Project","slug":"/Project/architecture","permalink":"/docs/19/Project/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"architecture","title":"Architecture of a project"},"sidebar":"docs","previous":{"title":"Working with a project","permalink":"/docs/19/Project/creating"},"next":{"title":"Documenting a project","permalink":"/docs/19/Project/documentation"}}'),t=s("785893"),i=s("250065");let d={id:"architecture",title:"Architecture of a project"},l=void 0,o={},c=[{value:"Project folder",id:"project-folder",level:2},{value:"<em>applicationName</em>.4DProject file",id:"applicationname4dproject-file",level:3},{value:"Sources folder",id:"sources-folder",level:3},{value:"DatabaseMethods folder",id:"databasemethods-folder",level:4},{value:"Methods folder",id:"methods-folder",level:4},{value:"Classes folder",id:"classes-folder",level:4},{value:"Forms folder",id:"forms-folder",level:4},{value:"TableForms folder",id:"tableforms-folder",level:4},{value:"Triggers folder",id:"triggers-folder",level:4},{value:"Trash folder",id:"trash-folder",level:3},{value:"DerivedData folder",id:"deriveddata-folder",level:3},{value:"Libraries folder",id:"libraries-folder",level:2},{value:"Resources folder",id:"resources-folder",level:2},{value:"Data folder",id:"data-folder",level:2},{value:"Settings folder",id:"settings-folder",level:3},{value:"Logs folder",id:"logs-folder",level:3},{value:"Settings folder",id:"settings-folder-1",level:2},{value:"userPreferences.<em>userName</em> folder",id:"userpreferencesusername-folder",level:2},{value:"Components folder",id:"components-folder",level:2},{value:"Plugins folder",id:"plugins-folder",level:2},{value:"Documentation folder",id:"documentation-folder",level:2},{value:"WebFolder",id:"webfolder",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A 4D project is made of several folders and files, stored within a single project root folder (package folder). For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MyPackage (",(0,t.jsx)(n.em,{children:"project root folder"}),")\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Components"}),"\n",(0,t.jsxs)(n.li,{children:["Data\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Logs"}),"\n",(0,t.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Documentation"}),"\n",(0,t.jsx)(n.li,{children:"Plugins"}),"\n",(0,t.jsxs)(n.li,{children:["Project\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DerivedData"}),"\n",(0,t.jsx)(n.li,{children:"Sources"}),"\n",(0,t.jsx)(n.li,{children:"Trash"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Resources"}),"\n",(0,t.jsx)(n.li,{children:"Settings"}),"\n",(0,t.jsx)(n.li,{children:"userPreferences.username"}),"\n",(0,t.jsx)(n.li,{children:"WebFolder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:['If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,t.jsx)(n.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-folder",children:"Project folder"}),"\n",(0,t.jsx)(n.p,{children:"The Project folder typically contains the following hierarchy:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"applicationName"}),".4DProject file"]}),"\n",(0,t.jsxs)(n.li,{children:["Sources\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Classes"}),"\n",(0,t.jsx)(n.li,{children:"DatabaseMethods"}),"\n",(0,t.jsx)(n.li,{children:"Methods"}),"\n",(0,t.jsx)(n.li,{children:"Forms"}),"\n",(0,t.jsx)(n.li,{children:"TableForms"}),"\n",(0,t.jsx)(n.li,{children:"Triggers"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"DerivedData"}),"\n",(0,t.jsx)(n.li,{children:"Trash (if any)"}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"applicationname4dproject-file",children:[(0,t.jsx)(n.em,{children:"applicationName"}),".4DProject file"]}),"\n",(0,t.jsx)(n.p,{children:"Project development file, used to designate and launch the project. This file can be opened by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"4D"}),"\n",(0,t.jsxs)(n.li,{children:["4D Server (read-only, see ",(0,t.jsx)(n.a,{href:"/docs/19/Desktop/clientServer#opening-a-remote-project",children:"Opening a remote project"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sources-folder",children:"Sources folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"catalog.4DCatalog"}),(0,t.jsx)(n.td,{children:"Table and field definitions"}),(0,t.jsx)(n.td,{children:"XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"folders.json"}),(0,t.jsx)(n.td,{children:"Explorer folder definitions"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menus.json"}),(0,t.jsx)(n.td,{children:"Menu definitions"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"settings.4DSettings"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"Structure"})," database settings. They are not taken into account if ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"#settings-folder-1",children:"user settings"})})," or ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"#settings-folder",children:"user settings for data"})})," are defined.",(0,t.jsx)(n.strong,{children:"Warning"}),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use ",(0,t.jsx)(n.em,{children:"user settings"})," or ",(0,t.jsx)(n.em,{children:"user settings for data"})," to define custom settings."]}),(0,t.jsx)(n.td,{children:"XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tips.json"}),(0,t.jsx)(n.td,{children:"Defined tips"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lists.json"}),(0,t.jsx)(n.td,{children:"Defined lists"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filters.json"}),(0,t.jsx)(n.td,{children:"Defined filters"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleSheets.css"}),(0,t.jsx)(n.td,{children:"CSS style sheets"}),(0,t.jsx)(n.td,{children:"CSS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleSheets_mac.css"}),(0,t.jsx)(n.td,{children:"Mac css style sheets (from converted binary database)"}),(0,t.jsx)(n.td,{children:"CSS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleSheets_windows.css"}),(0,t.jsx)(n.td,{children:"Windows css style sheets (from converted binary database)"}),(0,t.jsx)(n.td,{children:"CSS"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"databasemethods-folder",children:"DatabaseMethods folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"databaseMethodName"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Database methods defined in the project. One file per database method"}),(0,t.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"methods-folder",children:"Methods folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"methodName"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Project methods defined in the project. One file per method"}),(0,t.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"classes-folder",children:"Classes folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"className"}),".4dm"]}),(0,t.jsx)(n.td,{children:"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"}),(0,t.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"forms-folder",children:"Forms folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,t.jsx)(n.td,{children:"Project form description"}),(0,t.jsx)(n.td,{children:"json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,t.jsx)(n.td,{children:"Project form method"}),(0,t.jsx)(n.td,{children:"text"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"formName"}),"/Images/",(0,t.jsx)(n.em,{children:"pictureName"})]}),(0,t.jsx)(n.td,{children:"Project form static picture"}),(0,t.jsx)(n.td,{children:"picture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,t.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Object methods. One file per object method"}),(0,t.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"tableforms-folder",children:"TableForms folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Input/",(0,t.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,t.jsx)(n.td,{children:"Input table form description (n is the table number)"}),(0,t.jsx)(n.td,{children:"json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Input/",(0,t.jsx)(n.em,{children:"formName"}),"/Images/",(0,t.jsx)(n.em,{children:"pictureName"})]}),(0,t.jsx)(n.td,{children:"Input table form static pictures"}),(0,t.jsx)(n.td,{children:"picture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Input/",(0,t.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,t.jsx)(n.td,{children:"Input table form method"}),(0,t.jsx)(n.td,{children:"text"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Input/",(0,t.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,t.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Input form object methods. One file per object method"}),(0,t.jsx)(n.td,{children:"text"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Output/",(0,t.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,t.jsx)(n.td,{children:"Output table form description (n is the table number)"}),(0,t.jsx)(n.td,{children:"json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Output/",(0,t.jsx)(n.em,{children:"formName"}),"/Images/",(0,t.jsx)(n.em,{children:"pictureName"})]}),(0,t.jsx)(n.td,{children:"Output table form static pictures"}),(0,t.jsx)(n.td,{children:"picture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Output/",(0,t.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,t.jsx)(n.td,{children:"Output table form method"}),(0,t.jsx)(n.td,{children:"text"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"n"}),"/Output/",(0,t.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,t.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Output form object methods. One file per object method"}),(0,t.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"triggers-folder",children:"Triggers folder"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["table_",(0,t.jsx)(n.em,{children:"n"}),".4dm"]}),(0,t.jsx)(n.td,{children:"Trigger methods defined in the project. One trigger file per table (n is the table number)"}),(0,t.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"}),"\nThe .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools."]}),"\n",(0,t.jsx)(n.h3,{id:"trash-folder",children:"Trash folder"}),"\n",(0,t.jsx)(n.p,{children:"The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Methods"}),"\n",(0,t.jsx)(n.li,{children:"Forms"}),"\n",(0,t.jsx)(n.li,{children:"TableForms"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,t.jsx)(n.a,{href:"#sources",children:"Sources"})," folder."]}),"\n",(0,t.jsx)(n.h3,{id:"deriveddata-folder",children:"DerivedData folder"}),"\n",(0,t.jsx)(n.p,{children:"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder."}),"\n",(0,t.jsx)(n.h2,{id:"libraries-folder",children:"Libraries folder"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This folder is used on macOS only."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Librairies folder contains the file resulting from a compilation with the ",(0,t.jsx)(n.a,{href:"/docs/19/Project/compiler#silicon-compiler",children:"Silicon compiler"})," on macOS."]}),"\n",(0,t.jsx)(n.h2,{id:"resources-folder",children:"Resources folder"}),"\n",(0,t.jsxs)(n.p,{children:["The Resources folder contains any custom project resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,t.jsx)(n.em,{children:"4D Server Reference Manual"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"item"})}),(0,t.jsx)(n.td,{children:"Project resource files and folders"}),(0,t.jsx)(n.td,{children:"various"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Images/Library/",(0,t.jsx)(n.em,{children:"item"})]}),(0,t.jsx)(n.td,{children:"Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name."}),(0,t.jsx)(n.td,{children:"picture"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"(*) only if the project was exported from a .4db binary database."}),"\n",(0,t.jsx)(n.h2,{id:"data-folder",children:"Data folder"}),"\n",(0,t.jsx)(n.p,{children:"The data folder contains the data file and all files and folders relating to the data."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data.4dd(*)"}),(0,t.jsxs)(n.td,{children:["Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,t.jsx)(n.em,{children:"Open data file"})," dialog box will then appear so that you can select the data file to use or create a new one"]}),(0,t.jsx)(n.td,{children:"binary"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data.journal"}),(0,t.jsx)(n.td,{children:"Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created."}),(0,t.jsx)(n.td,{children:"binary"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data.match"}),(0,t.jsx)(n.td,{children:"(internal) UUID matching table number"}),(0,t.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."}),"\n",(0,t.jsx)(n.h3,{id:"settings-folder",children:"Settings folder"}),"\n",(0,t.jsxs)(n.p,{children:["This folder contains ",(0,t.jsx)(n.strong,{children:"user settings files for data"})," used for application administration."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["These settings take priority over ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#settings-folder-1",children:"user settings files"})})," and ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sources-folder",children:"structure settings"})})," files."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"directory.json"}),(0,t.jsx)(n.td,{children:"Description of 4D groups, users, and their access rights when the application is run with this data file."}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Backup.4DSettings"}),(0,t.jsxs)(n.td,{children:["Database backup settings, used to set the ",(0,t.jsx)(n.a,{href:"/docs/19/Backup/settings",children:"backup options"})," when the database is run with this data file. Keys concerning backup configuration are described in the ",(0,t.jsx)(n.em,{children:"4D XML Keys Backup"})," manual."]}),(0,t.jsx)(n.td,{children:"XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"settings.4DSettings"}),(0,t.jsx)(n.td,{children:"Custom database settings for this data file."}),(0,t.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"logs-folder",children:"Logs folder"}),"\n",(0,t.jsx)(n.p,{children:"The Logs folder contains all log files used by the project. Log files include, in particular:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"database conversion,"}),"\n",(0,t.jsx)(n.li,{children:"web server requests,"}),"\n",(0,t.jsxs)(n.li,{children:["backup/restore activities journal (",(0,t.jsx)(n.em,{children:"Backup Journal[xxx].txt"}),", see ",(0,t.jsx)(n.a,{href:"/docs/19/Backup/backup#backup-journal",children:"Backup journal"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"command debugging,"}),"\n",(0,t.jsx)(n.li,{children:"4D Server requests (generated on client machines and on the server)."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html",children:"Get 4D folder"})," command) for maintenance log files and in cases where data folder is read-only."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"settings-folder-1",children:"Settings folder"}),"\n",(0,t.jsxs)(n.p,{children:["This folder contains ",(0,t.jsx)(n.strong,{children:"user settings files"})," used for application administration."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["These settings take priority over ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sources-folder",children:"structure settings"})})," files. However, if a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#settings-folder",children:"user settings file for data"})})," exists, it takes priority over user settings file."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"directory.json"}),(0,t.jsx)(n.td,{children:"Description of 4D groups and users for the application, as well as their access rights"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Backup.4DSettings"}),(0,t.jsxs)(n.td,{children:["Database backup settings, used to set the ",(0,t.jsx)(n.a,{href:"/docs/19/Backup/settings",children:"backup options"}),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,t.jsx)(n.em,{children:"backup journal"}),". Keys concerning backup configuration are described in the ",(0,t.jsx)(n.em,{children:"4D XML Keys Backup"})," manual."]}),(0,t.jsx)(n.td,{children:"XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,t.jsxs)(n.td,{children:["Build settings file, created automatically when using the application builder dialog box or the ",(0,t.jsx)(n.code,{children:"BUILD APPLICATION"})," command"]}),(0,t.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"userpreferencesusername-folder",children:["userPreferences.",(0,t.jsx)(n.em,{children:"userName"})," folder"]}),"\n",(0,t.jsx)(n.p,{children:"This folder contains files that memorize user configurations, e.g. break point or window positions. You can just ignore this folder. It contains for example:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Contents"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"methodPreferences.json"}),(0,t.jsx)(n.td,{children:"Current user method editor preferences"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"methodWindowPositions.json"}),(0,t.jsx)(n.td,{children:"Current user window positions for methods"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formWindowPositions.json"}),(0,t.jsx)(n.td,{children:"Current user window positions for forms"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"workspace.json"}),(0,t.jsx)(n.td,{children:"List of opened windows; on macOS, order of tab windows"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"debuggerCatches.json"}),(0,t.jsx)(n.td,{children:"Caught calls to commands"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recentTables.json"}),(0,t.jsx)(n.td,{children:"Ordered list of tables"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"preferences.4DPreferences"}),(0,t.jsx)(n.td,{children:"Current data path and main window positions"}),(0,t.jsx)(n.td,{children:"XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CompilerIntermediateFiles"}),(0,t.jsx)(n.td,{children:"Intermediate files resulting from Apple Silicon compilation"}),(0,t.jsx)(n.td,{children:"Folder"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"components-folder",children:"Components folder"}),"\n",(0,t.jsx)(n.p,{children:"This folder contains the components to be available in the application project. It must be stored at the same level as the Project folder."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An application project can be used itself as a component:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"for development: put an alias of the .4dproject file in the Components folder of the host project."}),"\n",(0,t.jsxs)(n.li,{children:["for deployment: ",(0,t.jsx)(n.a,{href:"/docs/19/Desktop/building#build-component",children:"build the component"})," and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"plugins-folder",children:"Plugins folder"}),"\n",(0,t.jsx)(n.p,{children:"This folder contains the plug-ins to be available in the application project. It must be stored at the same level as the Project folder."}),"\n",(0,t.jsx)(n.h2,{id:"documentation-folder",children:"Documentation folder"}),"\n",(0,t.jsx)(n.p,{children:"This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, refer to ",(0,t.jsx)(n.a,{href:"/docs/19/Project/documentation",children:"Documenting a project"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"webfolder",children:"WebFolder"}),"\n",(0,t.jsx)(n.p,{children:"Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time."})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);