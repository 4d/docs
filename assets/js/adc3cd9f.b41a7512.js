"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6782],{126916:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=s(474848),n=s(28453);const i={id:"settings",title:"Backup Settings"},o=void 0,r={id:"Backup/settings",title:"Backup Settings",description:"Backup settings are defined through three pages in the Database Settings dialog box. You can set:",source:"@site/versioned_docs/version-18/Backup/settings.md",sourceDirName:"Backup",slug:"/Backup/settings",permalink:"/docs/18/Backup/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fsettings.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"settings",title:"Backup Settings"},sidebar:"docs",previous:{title:"Backup",permalink:"/docs/18/Backup/backup"},next:{title:"Log file (.journal)",permalink:"/docs/18/Backup/log"}},l={},c=[{value:"Scheduler",id:"scheduler",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Content",id:"content",level:3},{value:"Backup File Destination Folder",id:"backup-file-destination-folder",level:3},{value:"Log management",id:"log-management",level:3},{value:"Backup &amp; Restore",id:"backup--restore",level:2},{value:"General settings",id:"general-settings",level:3},{value:"Archive",id:"archive",level:3},{value:"Automatic Restore",id:"automatic-restore",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Backup settings are defined through three pages in the Database Settings dialog box. You can set:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"the scheduler for automatic backups"}),"\n",(0,a.jsx)(t.li,{children:"the files to include in every backup"}),"\n",(0,a.jsx)(t.li,{children:"the advanced features allowing to execute automatic tasks"}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Settings defined in this dialog box are written in the ",(0,a.jsx)(t.em,{children:"Backup.4DSettings"})," file, stored in the ",(0,a.jsx)(t.a,{href:"/docs/18/Project/architecture#settings-folder",children:"Settings folder"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"scheduler",children:"Scheduler"}),"\n",(0,a.jsx)(t.p,{children:"You can automate the backup of databases opened with 4D or 4D Server (even when no client machines are connected). This involves setting a backup frequency (in hours, days, weeks or months); for each session, 4D automatically starts a backup using the current backup settings."}),"\n",(0,a.jsxs)(t.p,{children:["If this application was not launched at the theoretical moment of the backup, the next time 4D is launched, it considers the backup as having failed and proceeds as set in the Database Settings (refer to ",(0,a.jsx)(t.a,{href:"/docs/18/Backup/backup#handling-backup-issues",children:"Handling backup issues"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["The scheduler backup settings are defined on the ",(0,a.jsx)(t.strong,{children:"Backup/Scheduler"})," page of the Database Settings:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(333798).A+"",width:"862",height:"293"})}),"\n",(0,a.jsxs)(t.p,{children:["The options found on this tab let you set and configure scheduled automatic backups of the database. You can choose a standard quick configuration or you can completely customize it. Various options appear depending on the choice made in the ",(0,a.jsx)(t.strong,{children:"Automatic Backup"})," menu:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Never"}),": The scheduled backup feature is disabled."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every Hour"}),": Programs an automatic backup every hour, starting with the next hour."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every Day"}),": Programs an automatic backup every day. You can then enter the time when the backup should start."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every Week"}),": Programs an automatic backup every week. Two additional entry areas let you indicate the day and time when the backup should start."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every Month"}),": Programs an automatic backup every month. Two additional entry areas let you indicate the day of the month and the time when the backup should start."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Personalized"}),': Used to configure "tailormade" automatic backups. When you select this option, several additional entry areas appear:\n',(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every X hour(s)"}),": Allows programming backups on an hourly basis. You can enter a value between 1 and 24."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every X day(s) at x"}),": Allows programming backups on a daily basis. For example, enter 1 if you want to perform a daily backup. When this option is checked, you must enter the time when the backup should start."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every X week(s) day at x"}),": Allows programming backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must enter the day(s) of the week and the time when the backup should start. You can select several days of the week, if desired. For example, you can use this option to set two weekly backups: one on Wednesday and one on Friday."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Every X month(s), Xth Day at x"}),": Allows programming backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup should start."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Switches back and forth from Standard time to Daylight saving time could temporarily affect the automatic scheduler and trigger the next backup with a one-hour time shift. This happens only once and subsequent backups are run at the expected scheduled time."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"The Backup/Configuration page of the Database Settings lets you set the backup files and their location, as well as that of the log file. These parameters are specific to each database opened by the 4D application."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(372815).A+"",width:"862",height:"659"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"4D Server:"})," These parameters can only be set from the 4D Server machine."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"content",children:"Content"}),"\n",(0,a.jsx)(t.p,{children:"This area allows you to set which files and/or folders to copy during the next backup."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Data"}),": Database data file. When this option is checked, the current log file of the database, if it exists, is backed up at the same time as the data."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Structure"}),": Database project folders and files. In cases where databases are compiled, this option allows you to backup the .4dz file."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"User Structure File (only for binary database)"}),": ",(0,a.jsx)(t.em,{children:"deprecated feature"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Attachments"}),": This area allows you to specify a set of files and/or folders to be backed up at the same time as the database. These files can be of any type (documents or plug-in templates, labels, reports, pictures, etc.). You can set either individual files or folders whose contents will be fully backed up. Each attached element is listed with its full access path in the \u201cAttachments\u201d area.\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Delete"}),": Removes the selected file from the list of attached files."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Add folder..."}),": Displays a dialog box that allows selecting a folder to add to the backup. In the case of a restore, the folder will be recovered with its internal structure. You can select any folder or volume connected to the machine, with the exception of the folder containing the database files."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Add file..."}),": Displays a dialog box that allows you to select a file to add to the backup."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"backup-file-destination-folder",children:"Backup File Destination Folder"}),"\n",(0,a.jsx)(t.p,{children:"This area lets you view and change the location where backup files as well as log backup files (where applicable) will be stored."}),"\n",(0,a.jsx)(t.p,{children:"To view the location of the files, click in the area in order to display their pathname as a pop-up menu."}),"\n",(0,a.jsxs)(t.p,{children:["To modify the location where these files are stored, click the ",(0,a.jsx)(t.strong,{children:"..."}),' button. A selection dialog box appears, which allows you to select a folder or disk where the backups will be placed. The "Used Space" and "Free Space" areas are updated automatically and indicate the remaining space on the disk of the selected folder.']}),"\n",(0,a.jsx)(t.h3,{id:"log-management",children:"Log management"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Use Log"})," option, when checked, indicates that the database uses a log file. Its pathname is specified below the option. When this option is checked, it is not possible to open the database without a log file."]}),"\n",(0,a.jsxs)(t.p,{children:["By default, any database created with 4D uses a log file (option checked in the ",(0,a.jsx)(t.strong,{children:"General Page"})," of the ",(0,a.jsx)(t.strong,{children:"Preferences"}),"). The log file is named ",(0,a.jsx)(t.em,{children:"data.journal"})," and is placed in the Data folder."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Activating a new log file requires the data of the database to be backed up beforehand. When you check this option, a warning message informs you that a backup is necessary. The creation of the log file is postponed and it will actually be created only after the next backup of the database."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"backup--restore",children:"Backup & Restore"}),"\n",(0,a.jsx)(t.p,{children:"Modifying backup and restore options is optional. Their default values correspond to a standard use of the function."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(929968).A+"",width:"862",height:"644"})}),"\n",(0,a.jsx)(t.h3,{id:"general-settings",children:"General settings"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Keep only the last X backup files"}),": This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space).\nIf, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets.\nTo disable the mechanism, simply deselect the option."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"This parameter concerns both database and log file backups."}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Backup only if the data file has been modified"}),": When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted in the database since the last backup. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. This option also allows saving machine time for the backup of databases principally used for viewing purposes. Please note that enabling this option does not take any modifications made to the project files or attached files into account."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"This parameter concerns both database and log file backups."}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Delete oldest backup file before/after backup"}),': This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (',(0,a.jsx)(t.strong,{children:"before"})," option) or whether the deletion should take place once the backup is completed (",(0,a.jsx)(t.strong,{children:"after"})," option). In order for this mechanism to work, the oldest archive must not have been renamed or moved."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"If backup fails"}),": This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Retry at the next scheduled date and time"}),": This option only makes sense when working with scheduled automatic backups. It amounts to cancelling the failed backup. An error is generated."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Retry after X second(s), minute(s) or hour(s)"}),": When this option is checked, a new backup attempt is executed after the wait period. This mechanism allows anticipating certain circumstances that may block the backup. You can set a wait period in seconds, minutes or hours using the corresponding menu. If the new attempt also fails, an error is generated and the failure is noted in the status area of the last backup and in the backup journal file."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Cancel the operation after X attempts"}),': This parameter is used to set the maximum number of failed backup attempts. If the backup has not been carried out successfully after the maximum number of attempts set has been reached, it is cancelled and the error 1401 is generated ("The maximum number of backup attempts has been reached; automatic backup is temporarily disabled"). In this case, no new automatic backup will be attempted as long as the application has not been restarted, or a manual backup has been carried out successfully.\nThis parameter is useful in order to avoid a case where an extended problem (requiring human intervention) that prevented a backup from being carried out would have led to the application repeatedly attempting the backup to the detriment of its overall performance. By default, this parameter is not checked.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"4D considers a backup as failed if the database was not launched at the time when the scheduled automatic backup was set to be carried out."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"archive",children:"Archive"}),"\n",(0,a.jsx)(t.p,{children:"These options apply to main backup files and to log backup files."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Segment Size (Mb)"}),"\n4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). During restore, 4D will automatically merge the segments. Each segment is called MyDatabase[xxxx-yyyy].4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyDatabase database backup are called MyDatabase[0006-0001].4BK, MyDatabase[0006-0002].4BK and MyDatabase[0006-0003].4BK.\nThe ",(0,a.jsx)(t.strong,{children:"Segment Size"})," menu is a combo box that allows you to set the size in MB for each segment of the backup. You can choose one of the preset sizes or enter a specific size between 0 and 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing ",(0,a.jsx)(t.strong,{children:"None"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Compression Rate"}),"\nBy default, 4D compresses backups to help save disk space. However, the file compression phase can noticeably slow down backups when dealing with large volumes of data. The ",(0,a.jsx)(t.strong,{children:"Compression Rate"})," option allows you to adjust file compression:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"None:"})," No file compression is applied. The backup is faster but the archive files are considerably larger."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fast"})," (default): This option is a compromise between backup speed and archive size."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Compact"}),": The maximum compression rate is applied to archives. The archive files take up the least amount of space possible on the disk, but the backup is noticeable slowed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Interlacing Rate and Redundancy Rate"}),"\n4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. You can set these mechanisms according to your needs. The menus for these options contain rates of ",(0,a.jsx)(t.strong,{children:"Low"}),", ",(0,a.jsx)(t.strong,{children:"Medium"}),", ",(0,a.jsx)(t.strong,{children:"High"})," and ",(0,a.jsx)(t.strong,{children:"None"})," (default)."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Interlacing Rate"}),": Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. The higher the rate, the higher the security; however, data processing will use more memory."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Redundancy Rate"}),": Redundancy allows securing data present in a file by repeating the same information several times. The higher the redundancy rate, the better the file security; however, storage will be slower and the file size will increase accordingly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"automatic-restore",children:"Automatic Restore"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Restore last backup if database is damaged"}),": When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the database, if an anomaly is detected (corrupted file, for example) during database launch. No intervention is required on the part of the user; however, the operation is logged in the backup journal."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"In the case of an automatic restore, only the data file is restored. If you wish to get the attached files or the project files, you must perform a manual restore."}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Integrate last log file if database is incomplete"}),": When this option is checked, the program automatically integrates the log file when opening or restoring the database.\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"When opening a database, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk."}),"\n",(0,a.jsx)(t.li,{children:"When restoring a database, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not found in the data file, the program automatically integrates it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The user does not see any dialog box; the operation is completely automatic. The goal is to make use as easy as possible. The operation is logged in the backup journal."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},333798:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},372815:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/backup03-49b5b70c7c84c962daad433a29bbc583.png"},929968:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var a=s(296540);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);