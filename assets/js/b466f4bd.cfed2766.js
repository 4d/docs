"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99568],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},209803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"backup",slug:"backup",title:"Backup"},c=void 0,u={unversionedId:"Backup/backup",id:"version-20-R2/Backup/backup",title:"Backup",description:"A backup can be started in three ways:",source:"@site/versioned_docs/version-20-R2/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/20-R2/Backup/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"backup",slug:"backup",title:"Backup"},sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/docs/20-R2/Backup/overview"},next:{title:"Backup Settings",permalink:"/docs/20-R2/Backup/settings"}},l={},s=[{value:"Manual backup",id:"manual-backup",level:2},{value:"Scheduled automatic backup",id:"scheduled-automatic-backup",level:2},{value:"BACKUP command",id:"backup-command",level:2},{value:"Managing the backup processing",id:"managing-the-backup-processing",level:2},{value:"Accessing the application during backup",id:"accessing-the-application-during-backup",level:3},{value:"Handling backup issues",id:"handling-backup-issues",level:3},{value:"Backup Journal",id:"backup-journal",level:2},{value:"Management of backup journal size",id:"management-of-backup-journal-size",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}],p={toc:s};function d(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",r({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A backup can be started in three ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Manually, using the ",(0,n.kt)("strong",{parentName:"li"},"Backup...")," item of the 4D ",(0,n.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,n.kt)("strong",{parentName:"li"},"Backup")," button of the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/20-R2/MSC/backup"}),"Maintenance and Security Center"),"."),(0,n.kt)("li",{parentName:"ul"},"Automatically, using the scheduler that can be set in the Settings,"),(0,n.kt)("li",{parentName:"ul"},"Programmatically, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"BACKUP")," command.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D Server: A backup can be started manually from a remote machine using a method that calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"BACKUP")," command. The command will be executed, in all cases, on the server.")),(0,n.kt)("h2",r({},{id:"manual-backup"}),"Manual backup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Backup...")," command in the 4D ",(0,n.kt)("strong",{parentName:"li"},"File")," menu.\nThe backup window appears:\n",(0,n.kt)("img",{src:a(541257).Z,width:"564",height:"192"}),'\nYou can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the ',(0,n.kt)("strong",{parentName:"li"},"Backup/Configuration")," page of the Database Settings.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can also open the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/20-R2/MSC/overview"}),"Maintenance and Security Center")," of 4D and display the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/20-R2/MSC/backup"}),"Backup page"),".")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Database properties...")," button causes the Backup/Configuration page of the Structure Settings to be displayed."),(0,n.kt)("ol",r({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Backup")," to start the backup using current parameters.")),(0,n.kt)("h2",r({},{id:"scheduled-automatic-backup"}),"Scheduled automatic backup"),(0,n.kt)("p",null,"Scheduled backups are started automatically. They are configured in the ",(0,n.kt)("strong",{parentName:"p"},"Backup/Scheduler")," page of the ",(0,n.kt)("strong",{parentName:"p"},"Settings"),"."),(0,n.kt)("p",null,"Backups are automatically performed at the times defined on this page without any type of user intervention. For more information on using this dialog box, refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20-R2/Backup/settings#scheduler"}),"Scheduler in backup settings"),"."),(0,n.kt)("h2",r({},{id:"backup-command"}),"BACKUP command"),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"BACKUP")," 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Backup Startup")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"On Backup Shutdown")," database methods for handling the backup process (see the ",(0,n.kt)("em",{parentName:"p"},"4D Language Reference")," manual)."),(0,n.kt)("h2",r({},{id:"managing-the-backup-processing"}),"Managing the backup processing"),(0,n.kt)("p",null,"Once a backup is started, 4D displays a dialog box with a thermometer indicating the progress of the backup:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(49384).Z,width:"408",height:"168"})),(0,n.kt)("p",null,"This thermometer is also displayed on the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20-R2/MSC/backup"}),"Backup page of the MSC")," if you have used this dialog box."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Stop")," button lets the user interrupt the backup at any time (refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20-R2/Backup/backup#handling-backup-issues"}),"Handling backup issues")," below)."),(0,n.kt)("p",null,"The status of the last backup (successful or failed) is stored in the Last Backup Information area of the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20-R2/MSC/backup"}),"Backup page in the MSC")," or in the ",(0,n.kt)("strong",{parentName:"p"},"Maintenance page")," of 4D Server. It is also recorded in the database ",(0,n.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,n.kt)("h3",r({},{id:"accessing-the-application-during-backup"}),"Accessing the application during backup"),(0,n.kt)("p",null,"During a backup, access to the application is restricted by 4D according to the context. 4D locks any processes related to the types of files included in the backup: if only the project files are being backed up, access to the structure is not possible but access to the data will be allowed."),(0,n.kt)("p",null,"Conversely, if only the data file is being backed up, access to the structure is still allowed. In this case, the application access possibilities are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With the 4D single-user version, the application is locked for both read and write; all processes are frozen. No actions can be performed."),(0,n.kt)("li",{parentName:"ul"},"With 4D Server, the application is only write locked; client machines can view data. If a client machine sends an add, remove or change request to the server, a window appears asking the user to wait until the end of the backup. Once the application is saved, the window disappears and the action is performed. To cancel the request in process and not wait for the end of the backup, simply click the ",(0,n.kt)("strong",{parentName:"li"},"Cancel operation")," button. However, if the action waiting to be executed comes from a method launched prior to the backup, you should not cancel it because only operations remaining to be performed are cancelled. Also, a partially executed method can cause logical inconsistencies in the data.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the action waiting to be executed comes from a method and the user clicks the ",(0,n.kt)("strong",{parentName:"p"},"Cancel operation")," button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).")),(0,n.kt)("h3",r({},{id:"handling-backup-issues"}),"Handling backup issues"),(0,n.kt)("p",null,"It may happen that a backup is not executed properly. There may be several causes of a failed backup: user interruption, attached file not found, destination disk problems, incomplete transaction, etc. 4D processes the incident according to the cause."),(0,n.kt)("p",null,"In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20-R2/MSC/backup"}),"Backup page in the MSC")," or in the ",(0,n.kt)("strong",{parentName:"p"},"Maintenance page")," of 4D Server, as well as in the ",(0,n.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User interruption"),": The ",(0,n.kt)("strong",{parentName:"li"},"Stop")," button in the progress dialog box allows users to interrupt the backup at any time. In this case, the copying of elements is stopped and the error 1406 is generated. You can intercept this error in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown")," database method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attached file not found"),": When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Backup impossible")," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):\nIf this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the ",(0,n.kt)("strong",{parentName:"li"},"Backup/Backup & Restore")," page of the Settings.\nIf the second attempt fails, a system alert dialog box is displayed and an error is generated. You can intercept this error in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown")," database method.")),(0,n.kt)("h2",r({},{id:"backup-journal"}),"Backup Journal"),(0,n.kt)("p",null,"To make following up and verifying backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Like an on-board manual, all database operations (backups, restores, log file integrations) are logged in this file whether they were scheduled or performed manually. The date and time that these operations occurred are also noted in the journal."),(0,n.kt)("p",null,'The backup journal is named "Backup Journal',"[001]",'.txt" and is placed in the "Logs" folder of the project. The backup journal can be opened with any text editor.'),(0,n.kt)("h4",r({},{id:"management-of-backup-journal-size"}),"Management of backup journal size"),(0,n.kt)("p",null,"In certain backup strategies (for example, in the case where numerous attached files are being backed up), the backup journal can quickly grow to a large size. Two mechanisms can be used to control this size:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatic backup"),": Before each backup, the application examines the size of the current backup journal file. If it is greater than 10 MB, the current file is archived and a new file is created with the ","[xxx]",' number incremented, for example "Backup Journal',"[002]",".txt\u201d. Once file number 999 is reached, the numbering begins at 1 again and the existing files will be replaced."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possibility of reducing the amount of information recorded"),": To do this, simply modify the value of the ",(0,n.kt)("inlineCode",{parentName:"li"},"VerboseMode")," key in the ",(0,n.kt)("em",{parentName:"li"},"Backup.4DSettings")," file of the project. By default, this key is set to True. If you change the value of this key to False, only the main information will be stored in the backup journal: date and time of start of operation and any errors encountered. The XML keys concerning backup configuration are described in the ",(0,n.kt)("em",{parentName:"li"},"4D XML Keys Backup")," manual.")),(0,n.kt)("h2",r({},{id:"backuphistoryjson"}),"backupHistory.json"),(0,n.kt)("p",null,"All information regarding the latest backup and restore operations are stored in the application's ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json"),' file. It logs the path of each saved file (including attachments) as well as number, date, time, duration, and status of each operation. To limit the size of the file, the number of logged operations is the same as the number of available backups ("Keep only the last X backup files") defined in the backup settings.'),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file is created in the current backup destination folder. You can get the actual path for this file using the following statement:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$backupHistory:=Get 4D file(Backup history file)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING"),(0,n.kt)("br",{parentName:"p"}),"\n","Deleting or moving the ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file will cause the next backup number to be reset.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file is formatted to be used by the 4D application. If you are looking for a human-readable report on backup operations, you might find the Backup journal more accurate.")))}d.isMDXComponent=!0},541257:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},49384:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);