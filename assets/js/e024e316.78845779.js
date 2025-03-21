"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41995"],{999268:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-4d-folder","title":"Get 4D folder","description":"Get 4D folder {( folder {; options} {; *})} : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-4d-folder.md","sourceDirName":"commands-legacy","slug":"/commands/get-4d-folder","permalink":"/docs/commands/get-4d-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-4d-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-4d-folder","title":"Get 4D folder","slug":"/commands/get-4d-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get 4D file","permalink":"/docs/commands/get-4d-file"},"next":{"title":"Get database localization","permalink":"/docs/commands/get-database-localization"}}'),r=t("785893"),d=t("250065");let i={id:"get-4d-folder",title:"Get 4D folder",slug:"/commands/get-4d-folder",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Active 4D Folder",id:"active-4d-folder",level:3},{value:"Licenses Folder",id:"licenses-folder",level:3},{value:"Data Folder",id:"data-folder",level:3},{value:"4D Client Database Folder",id:"4d-client-database-folder",level:3},{value:"Database Folder",id:"database-folder",level:3},{value:"Database Folder Unix Syntax",id:"database-folder-unix-syntax",level:3},{value:"Current Resources folder",id:"current-resources-folder",level:3},{value:"Logs Folder",id:"logs-folder",level:3},{value:"HTML Root Folder",id:"html-root-folder",level:3},{value:"MobileApps Folder",id:"mobileapps-folder",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get 4D folder"})," {( ",(0,r.jsx)(n.em,{children:"folder"})," {; ",(0,r.jsx)(n.em,{children:"options"}),"} {; *})} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Folder type (if omitted = active 4D folder)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Client database folder path configuration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Return folder of host database"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Pathname to 4D Folder"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Get 4D folder"})," command returns the pathname to the active 4D folder of the current application, or to the 4D environment folder specified by the ",(0,r.jsx)(n.em,{children:"folder"})," and ",(0,r.jsx)(n.em,{children:"options"})," parameters, if passed. This command allows you to get the actual pathname of the folders used by the 4D application. By using this command, you ensure that your code will work on any platform running any localized system."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"folder"}),', you can pass one of the following constants, which are located in the "',(0,r.jsx)(n.em,{children:"4D Environment"}),'" theme (you will find below a description of each folder):']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D Client database folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Active 4D Folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Current resources folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Data folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Database folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Database folder Unix syntax"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTML Root folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Licenses folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Logs folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MobileApps folder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"10"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"options"})," parameter allows you to customize the local resources folder path. It is only taken into account when using the 4D Client database folder constant (see below)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the ",(0,r.jsx)(n.strong,{children:"Get 4D folder"})," command is called from a remote 4D, the path returned is that of the remote machine, not that of 4D Server."]}),"\n",(0,r.jsx)(n.h3,{id:"active-4d-folder",children:"Active 4D Folder"}),"\n",(0,r.jsx)(n.p,{children:"The 4D environment uses a specific folder to store the following information:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Preferences files used by the 4D environment applications"}),"\n",(0,r.jsx)(n.li,{children:"Shortcuts.xml file (custom keyboard shortcuts)"}),"\n",(0,r.jsx)(n.li,{children:"Macros v2 folder (macro commands of Method editor)"}),"\n",(0,r.jsx)(n.li,{children:"Favorites v1x folder, for example Favorites v13 (pathnames for local and remote databases that have been opened)"}),"\n",(0,r.jsx)(n.li,{children:"Logs folder for maintenance logs and when the data is read-only"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The active 4D folder is created by default at the following location:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On Windows: ",(0,r.jsx)(n.em,{children:"{Disk}:\\Users\\{userName}\\AppData\\Roaming\\{applicationName}"})]}),"\n",(0,r.jsxs)(n.li,{children:["On macOS: ",(0,r.jsx)(n.em,{children:"{Disk}:Users:{userName}:Library:Application Support:{applicationName}"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"licenses-folder",children:"Licenses Folder"}),"\n",(0,r.jsx)(n.p,{children:"Folder containing the Licenses files of the machine."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," In the case of an application merged with 4D Volume Desktop, the licenses folder is included in the package of the application."]}),"\n",(0,r.jsx)(n.h3,{id:"data-folder",children:"Data Folder"}),"\n",(0,r.jsx)(n.p,{children:"Path of the folder containing the current data file. The pathname is expressed using the standard syntax of the current platform."}),"\n",(0,r.jsx)(n.h3,{id:"4d-client-database-folder",children:"4D Client Database Folder"}),"\n",(0,r.jsx)(n.p,{children:"Path of the 4D folder automatically created on 4D remote machines for storing files and folders related to the database (resources, plug-ins, Resources folder, etc.). The command can return:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the path for the current application when it is called on a remote machine and the ",(0,r.jsx)(n.em,{children:"options"})," parameter is omitted,"]}),"\n",(0,r.jsxs)(n.li,{children:["the path for any application when the ",(0,r.jsx)(n.em,{children:"options"})," parameter is used (in which case ",(0,r.jsx)(n.strong,{children:"Get 4D folder"})," can be called on any machine)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, the path is:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On Windows: {*",(0,r.jsx)(n.em,{children:"Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName_IP_Port_key}"}),(0,r.jsx)(n.br,{}),"\neg: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp_192_168_2_134_19813_157"]}),"\n",(0,r.jsxs)(n.li,{children:["On macOS: ",(0,r.jsx)(n.em,{children:"{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName_IP_Port_key}."}),(0,r.jsx)(n.br,{}),"\neg: :Users:John Doe:Library:Caches:myApp Client:myApp_192_168_2_134_19813_933"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Different folders are used if multiple ",(0,r.jsx)(n.em,{children:"instances of the client application are launched simultaneously on the same machine"})," ",(0,r.jsx)(n.em,{children:"."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note: O"}),"n Windows, in merged client projects, the location of this folder is modified if the ",(0,r.jsx)(n.em,{children:"ShareLocalResourcesOnWindowsClient"})," BuildApp key is used."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Using 4D Client Database Folder with ",(0,r.jsx)(n.em,{children:"options"})," parameter"]})}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.em,{children:"options"})," parameter if you want to compute any ",(0,r.jsx)(n.em,{children:"4D database local folder path."})," In this case, the path is built upon information you provided in the ",(0,r.jsx)(n.em,{children:"options"})," object, and the command can be used of a 4D, 4D Server, or remote application. Thanks to this feature, you can precompute your resource folder paths, for example to preload contents."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass the following properties in the ",(0,r.jsx)(n.em,{children:"options"})," object:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"remoteAppPath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Optional - Remote application executable system path. Default is current application executable path."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buildApplicationName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Optional - Name of the application (same as the ",(0,r.jsx)(n.em,{children:"BuildApplicationName"})," BuildApp xml key value). Default is name of the current application."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"structureName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Mandatory except if the ",(0,r.jsx)(n.em,{children:"clientServerSystemFolderName"})," attribute is defined - Name of the structure."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ipAddress"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Mandatory except if the ",(0,r.jsx)(n.em,{children:"clientServerSystemFolderName"})," attribute is defined - IP address of the server (same as the ",(0,r.jsx)(n.em,{children:"IPAddress"})," BuildApp xml key value)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"portNumber"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["Mandatory except if the ",(0,r.jsx)(n.em,{children:"clientServerSystemFolderName"})," attribute is defined - Publication port of the server (same as the ",(0,r.jsx)(n.em,{children:"PortNumber"})," BuildApp xml key value)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientServerSystemFolderName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:["Optional - Custom name of the local resources final folder (same as the ",(0,r.jsx)(n.em,{children:"ClientServerSystemFolderName"})," BuildApp xml key value)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shareLocalResourcesOnWindowsClient"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["Optional - Shared local resources folder (same as the ",(0,r.jsx)(n.em,{children:"ShareLocalResourcesOnWindowsClient"})," BuildApp xml key value)."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The returned path is expressed using the system syntax of the machine running the command."]}),"\n",(0,r.jsx)(n.h3,{id:"database-folder",children:"Database Folder"}),"\n",(0,r.jsxs)(n.p,{children:["Folder containing the database structure file. The pathname is expressed using the standard syntax of the current platform.",(0,r.jsx)(n.br,{}),"\nWith the 4D Client application, this constant is strictly equivalent to the previous 4D Client database folder constant: the command returns the pathname of the folder created locally."]}),"\n",(0,r.jsx)(n.h3,{id:"database-folder-unix-syntax",children:"Database Folder Unix Syntax"}),"\n",(0,r.jsxs)(n.p,{children:["Folder containing the database structure file. This constant designates the same folder as the previous one but the pathname returned is expressed using the Unix syntax (Posix), of the type /Users/... This syntax is mainly used when you use the ",(0,r.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," command under macOS."]}),"\n",(0,r.jsx)(n.h3,{id:"current-resources-folder",children:"Current Resources folder"}),"\n",(0,r.jsx)(n.p,{children:"Resources folder of the database. This folder contains the additional items (pictures, texts) used for the database interface. A component can have its own Resources folder."}),"\n",(0,r.jsx)(n.p,{children:"In client/server mode, this folder can be used to organize the transfer of custom data (pictures, files, subfolders, etc.) between the server machine and the client machines. The contents of this folder are automatically updated on each client machine when it connects. All referencing mechanisms associated with the Resources folder are supported in client/server mode (.lproj folder, XLIFF, pictures, and so on). In addition, 4D provides various tools that can be used to manage and update this folder dynamically, more particularly a resources explorer."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the Resources folder does not exist for the database, executing the Get 4D folder command with the Current resources folder constant will create it."}),"\n",(0,r.jsxs)(n.li,{children:["On Windows, in merged client projects, the location of this folder is modified if the ",(0,r.jsx)(n.em,{children:"ShareLocalResourcesOnWindowsClient"})," BuildApp key is used."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"logs-folder",children:"Logs Folder"}),"\n",(0,r.jsx)(n.p,{children:"The Logs folder of the database, located at the same level as the data file. This folder centralizes the following log files of the current database:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"database conversion,"}),"\n",(0,r.jsx)(n.li,{children:"Web server requests,"}),"\n",(0,r.jsx)(n.li,{children:"backup/restore activities journal,"}),"\n",(0,r.jsx)(n.li,{children:"command debugging,"}),"\n",(0,r.jsx)(n.li,{children:"4D Server requests (generated on client machines and on the server)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An additional Logs folder, located in the system user preferences folder (Active 4D Folder), is used for maintenance log files (compact, verify, repair). It recommended to call ",(0,r.jsx)(n.a,{href:"/docs/commands/get-4d-file",children:"Get 4D file"}),"(Compacting log file) for example when you want to access such log files. This Logs folder is also used in cases where regular Logs folder cannot be written."]}),"\n",(0,r.jsxs)(n.li,{children:["If the Logs folder does not exist for the database, executing the ",(0,r.jsx)(n.strong,{children:"Get 4D folder"})," command with the Logs folder constant will create it in the appropriate location."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"html-root-folder",children:"HTML Root Folder"}),"\n",(0,r.jsxs)(n.p,{children:["Current HTML root folder of the database. The pathname returned is expressed with the standard syntax of the current platform. The HTML root folder is the folder in which the 4D Web server looks for the requested Web pages and files. By default, it is named ",(0,r.jsx)(n.strong,{children:"WebFolder"})," and is placed next to the structure file (or its local copy in the case of 4D in remote mode). Its location can be set on the Web/Configuration page of the Preferences or dynamically via the ",(0,r.jsx)(n.a,{href:"/docs/commands/web-set-root-folder",children:"WEB SET ROOT FOLDER"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," On Windows, in merged client projects, the location of this folder is modified if the ",(0,r.jsx)(n.em,{children:"ShareLocalResourcesOnWindowsClient"})," BuildApp key is used."]}),"\n",(0,r.jsx)(n.h3,{id:"mobileapps-folder",children:"MobileApps Folder"}),"\n",(0,r.jsxs)(n.p,{children:["Folder containing all existing session files (.json) used by the 4D application to reference mobile app user sessions (i.e. sessions from 4D for iOS or 4D for Android apps). Session files are grouped in application subfolders and are automatically created. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"https://developer.4d.com/go-mobile/",children:"go mobile documentation"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This folder is located at the same level as the current 4D data file."}),"\n",(0,r.jsx)(n.h3,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"*"})," parameter is useful in the case of an architecture using components: it can be used to determine the database (host or component) for which you want to get the folder pathname. This parameter is only valid for Database folder, Database folder UNIX syntax and Current resources folder folders. It is ignored in all other cases."]}),"\n",(0,r.jsx)(n.p,{children:"When the command is called from a component:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.em,{children:"*"})," parameter is passed, the command returns the pathname of the host database folder,"]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.em,{children:"*"})," parameter is not passed, the command returns the pathname of the component folder.",(0,r.jsx)(n.br,{}),"\nThe database folder (Database folder and Database folder UNIX syntax) returned differs according to the type of the component architecture:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the case of a .4dbase folder/package, the command returns the pathname of the .4dbase folder/package,"}),"\n",(0,r.jsx)(n.li,{children:"In the case of a .4db or .4dc file, the command returns the pathname of the \u201CComponents\u201D folder,"}),"\n",(0,r.jsxs)(n.li,{children:["In the case of an alias or shortcut, the command returns the pathname of the folder containing the original matrix database. The result differs according to the format of this database (.4dbase folder/package or .4db/.4dc file), as described above.",(0,r.jsx)(n.br,{}),"\nWhen the command is called from the host database, it always returns the pathname of the host database folder, regardless of whether or not the ",(0,r.jsx)(n.em,{children:"*"})," parameter is passed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["During the startup of a single-user database, you want to load (or create) your own settings in a file located in the 4D folder. To do so, in the ",(0,r.jsx)(n.a,{href:"/docs/commands/on-startup-database-method",children:"On Startup database method"}),", you can write code similar to this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsPrefDocName:=Get 4D folder+"MyPrefs.prf"\xa0//Build pathname to the Preferences file\n\xa0\xa0// Check if the file exists\n\xa0If(Test path name($vsPrefDocName)#Is a document)\n\xa0\xa0\xa0\xa0$vtPrefDocRef:=Create document($vsPrefDocName.prf)\xa0//If not, create it\n\xa0Else\n\xa0\xa0\xa0\xa0$vtPrefDocRef:=Open document($vsPrefDocName.prf)\xa0//If so, open it\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0//Process document contents\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtPrefDocRef)\n\xa0Else\n\xa0\xa0//Handle error\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example illustrates the use of the Database folder UNIX syntax constant under Mac OS to list the contents of the database folder:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$posixpath:="\\""+Get 4D folder(Database folder Unix syntax)+"\\""\n\xa0$myfolder:="ls -l "+$posixpath\n\xa0$in:=""\n\xa0$out:=""\n\xa0$err:=""\n\xa0LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' Under Mac OS, it is necessary to put pathnames in quotes when they contain the names of files or folders with spaces in them. The escape sequence "\\" can be used to insert the quotation mark character into the string. You can also use the statement Char(Double quote).']}),"\n",(0,r.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"folder"})," parameter is invalid or if the pathname returned is empty, the OK system variable is set to 0."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/component-list",children:"COMPONENT LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/system-folder",children:"System folder"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/temporary-folder",children:"Temporary folder"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/test-path-name",children:"Test path name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/web-set-root-folder",children:"WEB SET ROOT FOLDER"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"485"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);