"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6956"],{70999:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"commands/file","title":"File","description":"History","source":"@site/versioned_docs/version-20-R7/commands/file.md","sourceDirName":"commands","slug":"/commands/file","permalink":"/docs/commands/file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffile.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"file","title":"File","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"File and Folder","permalink":"/docs/category/file-and-folder"},"next":{"title":"Folder","permalink":"/docs/commands/folder"}}'),d=t("785893"),r=t("250065");let i={id:"file",title:"File",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Changes"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R4"}),(0,d.jsxs)(n.td,{children:["New ",(0,d.jsx)(n.code,{children:"HTTP Client log file"})," constant"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"17 R5"}),(0,d.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"File"})," ( ",(0,d.jsx)(n.em,{children:"path"})," : Text { ; ",(0,d.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.File",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"File"})," ( ",(0,d.jsx)(n.em,{children:"fileConstant"})," : Integer { ; * } ) : 4D.File"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"File path"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fileConstant"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"4D file constant"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pathType"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"fk posix path"})," (default) or ",(0,d.jsx)(n.code,{children:"fk platform path"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"operator"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"* to return file of host database"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Result"}),(0,d.jsx)(n.td,{children:"4D.File"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,d.jsx)(n.td,{children:"New file object"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"File"})," command creates and returns a new object of the ",(0,d.jsx)(n.code,{children:"4D.File"})," type. The command accepts two syntaxes:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"File ( path { ; pathType } { ; * })"})}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"path"})," parameter, pass a file path string. You can use a custom string or a ",(0,d.jsx)(n.a,{href:"/docs/Concepts/paths#filesystem-pathnames",children:"filesystem"}),' (e.g., "/DATA/myfile.txt").']}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Only absolute pathnames are supported with the ",(0,d.jsx)(n.code,{children:"File"})," command."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the ",(0,d.jsx)(n.em,{children:"pathType"})," parameter. The following constants are available:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk platform path"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Path expressed with a platform-specific syntax (mandatory in case of platform pathname)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk posix path"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Path expressed with POSIX syntax (default)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"File ( fileConstant { ; * } )"})}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"fileConstant"})," parameter, pass a 4D built-in or system file, using one of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup history file"}),(0,d.jsx)(n.td,{children:"19"}),(0,d.jsx)(n.td,{children:"Backup history file (see Configuration and trace files). Stored in the backup destination folder."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup log file"}),(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:"Current backup journal file. Stored in the application Logs folder."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup settings file"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Default backup.4DSettings file (xml format), stored in the Settings folder of the project"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup settings file for data"}),(0,d.jsx)(n.td,{children:"17"}),(0,d.jsx)(n.td,{children:"backup.4DSettings file (xml format) for the data file, stored in the Settings folder of the data folder"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Build application log file"}),(0,d.jsx)(n.td,{children:"14"}),(0,d.jsx)(n.td,{children:"Current log file in xml format of the application builder. Stored in the Logs folder."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Build application settings file"}),(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:'Default settings file of the application builder ("buildApp.4DSettings"). Stored in the Settings folder of the project.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Compacting log file"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:"Log file of the most recent compacting done with the Compact data file command or the Maintenance and security center. Stored in the Logs folder."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Current backup settings file"}),(0,d.jsx)(n.td,{children:"18"}),(0,d.jsx)(n.td,{children:"backup.4DSettings file currently used by the application. It can be the backup settings file (default) or a custom user backup settings file defined for the data file"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Debug log file"}),(0,d.jsx)(n.td,{children:"12"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(Debug log recording)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Diagnostic log file"}),(0,d.jsx)(n.td,{children:"11"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(Diagnostic log recording)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Directory file"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"directory.json file, containing the description of users and groups (if any) for the project application. It can be located either in the user settings folder (default, global to the project), or in the data settings folder (specific to a data file)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP Client log file"}),(0,d.jsx)(n.td,{children:"24"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"HTTP SET OPTION(HTTP client log)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP debug log file"}),(0,d.jsx)(n.td,{children:"9"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"WEB SET OPTION(Web debug log)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP log file"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"WEB SET OPTION(Web log recording)"})," command. Stored in Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IMAP Log file"}),(0,d.jsx)(n.td,{children:"23"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(IMAP Log)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last backup file"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["Last backup file, named ",(0,d.jsx)(n.code,{children:"\\<applicationName>[bkpNum].4BK"}),", stored at a custom location."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last journal integration log file"}),(0,d.jsx)(n.td,{children:"22"}),(0,d.jsx)(n.td,{children:"Full pathname of the last journal integration log file (stored in the Logs folder of the restored application), if any. This file is created, in auto-repair mode, as soon as a log file integration occurred"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Repair log file"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:"Log file of database repairs made on the database in the Maintenance and Security Center (MSC). Stored in the Logs folder."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Request log file"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsxs)(n.td,{children:["Standard client/server request log file (excluding Web requests) created by the ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(4D Server log recording)"})," or ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(Client log recording)"})," commands. If executed on the server, the server log file is returned (stored in the Logs folder on the server). If executed on the client, the client log file is returned (stored in the client local Logs folder)."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP log file"}),(0,d.jsx)(n.td,{children:"15"}),(0,d.jsxs)(n.td,{children:["Log file created by the ",(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER(SMTP Log)"})," command. Stored in the Logs folder."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"User settings file"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"settings.4DSettings file for all data files, stored in Preferences folder next to structure file if enabled."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"User settings file for data"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"settings.4DSettings file for current data file, stored in Preferences folder next to the data file."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Verification log file"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsxs)(n.td,{children:["Log files created by the ",(0,d.jsx)(n.code,{children:"VERIFY CURRENT DATA FILE"})," and ",(0,d.jsx)(n.code,{children:"VERIFY DATA FILE"})," commands or the Maintenance and Security Center (MSC). Stored in the Logs folder."]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["If the target ",(0,d.jsx)(n.em,{children:"fileConstant"})," does not exist, a null object is returned. No errors are raised."]}),"\n",(0,d.jsxs)(n.p,{children:["If the command is called from a component, pass the optional ",(0,d.jsx)(n.code,{children:"*"})," parameter to get the path of the host database. Otherwise, if you omit the ",(0,d.jsx)(n.code,{children:"*"})," parameter, a null object is always returned."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/folder",children:"Folder"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/get-4d-file",children:"Get 4D file"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/object-to-path",children:"Object to path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/path-to-object",children:"Path to object"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1566"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);