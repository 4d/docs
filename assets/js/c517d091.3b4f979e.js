"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81062"],{380174:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"Backup/log","title":"Log file (.journal)","description":"A continuously-used application is always recording changes, additions or deletions. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. This file allows ensuring permanent security of data.","source":"@site/versioned_docs/version-20-R9/Backup/log.md","sourceDirName":"Backup","slug":"/Backup/log","permalink":"/docs/Backup/log","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Flog.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"log","title":"Log file (.journal)"},"sidebar":"docs","previous":{"title":"Backup Settings","permalink":"/docs/Backup/settings"},"next":{"title":"Restore","permalink":"/docs/Backup/restore"}}'),a=n("785893"),o=n("250065");let l={id:"log",title:"Log file (.journal)"},s=void 0,r={},c=[{value:"How the log file works",id:"how-the-log-file-works",level:2},{value:"Creating the log file",id:"creating-the-log-file",level:2},{value:"Log file settings",id:"log-file-settings",level:2},{value:"Stopping a log file",id:"stopping-a-log-file",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A continuously-used application is always recording changes, additions or deletions. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. This file allows ensuring permanent security of data."}),"\n",(0,a.jsx)(t.p,{children:"In addition, 4D works continuously with a data cache in memory. Any changes made to the application data are stored temporarily in the cache before being written to the hard disk. This accelerates the operation of applications; in fact, accessing memory is faster than accessing the hard disk. If an incident occurs in the application before the data stored in the cache could be written to the disk, you must include the current log file in order to restore the application entirely."}),"\n",(0,a.jsxs)(t.p,{children:["Finally, 4D has functions that analyze the contents of the log file, making it possible to rollback the operations carried out on the application data. These functions area available in the MSC: refer to the ",(0,a.jsx)(t.a,{href:"/docs/MSC/analysis",children:"Activity analysis"})," page and the ",(0,a.jsx)(t.a,{href:"/docs/MSC/rollback",children:"Rollback"})," page."]}),"\n",(0,a.jsx)(t.h2,{id:"how-the-log-file-works",children:"How the log file works"}),"\n",(0,a.jsxs)(t.p,{children:["The log file generated by 4D contains a description of all operations performed on the data of journaled tables, which are logged sequentially. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the ",(0,a.jsx)(t.strong,{children:"Include in Log File"})," table property."]}),"\n",(0,a.jsx)(t.p,{children:"As such, each operation performed by a user causes two simultaneous actions: the first one in the data file (instruction is executed normally) and the second one in the log file (the description of the operation is recorded). The log file is created independently without disturbing or slowing down the work of the user. An application can only work with one log file at a time. The log file records the following action types:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Opening and closing of the data file,"}),"\n",(0,a.jsx)(t.li,{children:"Opening and closing of the process (contexts),"}),"\n",(0,a.jsx)(t.li,{children:"Adding of records or BLOBs,"}),"\n",(0,a.jsx)(t.li,{children:"Modifying of records,"}),"\n",(0,a.jsx)(t.li,{children:"Deleting of records,"}),"\n",(0,a.jsx)(t.li,{children:"Creating and closing of transactions."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["For more information about these actions, refer to the ",(0,a.jsx)(t.a,{href:"/docs/MSC/analysis",children:"Activity analysis"})," page of the MSC."]}),"\n",(0,a.jsx)(t.p,{children:"4D manages the log file. It takes into account all operations that affect the data file equally, regardless of any manipulations performed by a user, a 4D method, the SQL engine, plug-ins, or from a Web browser or a mobile applicaton."}),"\n",(0,a.jsx)(t.p,{children:"The following illustration sums up how the log file works:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(67677).Z+"",width:"523",height:"448"})}),"\n",(0,a.jsx)(t.p,{children:"The current log file is automatically saved with the current data file. This mechanism has two distinct advantages:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Its avoids saturating the disk volume where the log file is stored. Without a backup, the log file would get bigger and bigger with use, and would eventually use all available disk space. For each data file backup, 4D or 4D Server closes the current log file and immediately starts a new, empty file, thereby avoiding the risk of saturation. The old log file is then archived and eventually destroyed depending on the mechanism for managing the backup sets."}),"\n",(0,a.jsx)(t.li,{children:"It keeps log files corresponding to backups in order to be able to parse or repair an application at a later point in time. The integration of a log file can only be done in the application to which it corresponds. It is important, in order to be able to properly integrate a log file into a backup, to have backups and log files archived simultaneously."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-log-file",children:"Creating the log file"}),"\n",(0,a.jsxs)(t.p,{children:["By default, any application project created with 4D uses a log file (option set in the ",(0,a.jsx)(t.strong,{children:"General"})," page of the Preferences). The log file is named ",(0,a.jsx)(t.em,{children:"data.journal"})," and is placed in the Data folder."]}),"\n",(0,a.jsxs)(t.p,{children:["You can find out if your application uses a log file at any time: just check whether the ",(0,a.jsx)(t.strong,{children:"Use Log"})," option is selected on the ",(0,a.jsx)(t.strong,{children:"Backup/Configuration"})," page of the Settings. If you deselected this option, or if you use an application without a log file and wish to set up a backup strategy with a log file, you will have to create one."]}),"\n",(0,a.jsx)(t.p,{children:"To create a log file:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["On the ",(0,a.jsx)(t.strong,{children:"Backup/Configuration"})," page of the Structure Settings, check the ",(0,a.jsx)(t.strong,{children:"Use Log"})," option.\nThe program displays a standard open/new file dialog box. By default, the log file is named ",(0,a.jsx)(t.em,{children:"data.journal"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Keep the default name or rename it, and then select the file location.\nIf you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the application project. If the application hard drive is lost, you can still recall your log file."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"Save"}),".\nThe disk and the name of the open log file are now displayed in the ",(0,a.jsx)(t.strong,{children:"Use Log"})," area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Validate the Settings dialog box."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In order for you to be able to create a log file directly, the data must be in one of the following situations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The data file is blank,"}),"\n",(0,a.jsx)(t.li,{children:"You just performed a backup and no changes have yet been made to the data."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In all other cases, when you validate the Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. If you click ",(0,a.jsx)(t.strong,{children:"OK"}),", the backup begins immediately, then the log file is activated. If you click ",(0,a.jsx)(t.strong,{children:"Cancel"}),", the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the application. This precaution is indispensable because, in order to restore an application after any incidents, you will need a copy of the application into which the operations recorded in the log file will be integrated."]}),"\n",(0,a.jsx)(t.p,{children:"Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the application is opened."}),"\n",(0,a.jsx)(t.p,{children:"You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing)."}),"\n",(0,a.jsx)(t.h2,{id:"log-file-settings",children:"Log file settings"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/Backup/settings#log-management",children:"log file settings"})," are based on two pieces of information: a boolean value and a path."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Boolean Value"}),': indicating whether the "Use Log File" feature is enabled or disabled within the application. By default, the boolean value is stored in ',(0,a.jsx)(t.em,{children:"catalog.4DCatalog"}),". However, when the ",(0,a.jsx)(t.a,{href:"/docs/Desktop/user-settings",children:"user settings"})," are activated, the ",(0,a.jsx)(t.em,{children:"catalog.4DCatalog"})," file configuration is overriden, and the boolean value can then be set either in the ",(0,a.jsx)(t.em,{children:"Backup.4DSettings"})," file ",(0,a.jsx)(t.a,{href:"/docs/Project/architecture#settings-user-data",children:"next to the data file"})," or the ",(0,a.jsx)(t.em,{children:"Backup.4DSettings"})," file ",(0,a.jsx)(t.a,{href:"/docs/Project/architecture#settings-user",children:"in the project folder"})," (see also the ",(0,a.jsx)(t.code,{children:"JournalFileEnabled"})," xml backup key documentation on ",(0,a.jsx)(t.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Path"}),": a string pointing to where the log file is located. The log file path is always stored in the linked data file."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"stopping-a-log-file",children:"Stopping a log file"}),"\n",(0,a.jsxs)(t.p,{children:["If you would like to stop logging operations to the current log file, simply deselect the ",(0,a.jsx)(t.strong,{children:"Use Log"})," option on the ",(0,a.jsx)(t.strong,{children:"Backup/Configuration"})," page of the Settings."]}),"\n",(0,a.jsx)(t.p,{children:"4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(973366).Z+"",width:"482",height:"188"})}),"\n",(0,a.jsxs)(t.p,{children:["If you click ",(0,a.jsx)(t.strong,{children:"Stop"}),", the current log file is immediately closed (the Settings dialog box does not need to be validated afterwards)."]}),"\n",(0,a.jsx)(t.p,{children:"If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"4D Server:"})," The ",(0,a.jsx)(t.code,{children:"New log file"})," command automatically closes the current log file and starts a new one.\nIf for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},67677:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},973366:function(e,t,n){n.d(t,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var i=n(667294);let a={},o=i.createContext(a);function l(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);