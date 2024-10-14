"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89967],{823877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"restore",title:"Restore Page",sidebar_label:"Restore Page"},a=void 0,d={id:"MSC/restore",title:"Restore Page",description:"You can manually restore an archive of the current application using the Restore page. This page provides several options that can be used to control the restoration:",source:"@site/versioned_docs/version-20/MSC/restore.md",sourceDirName:"MSC",slug:"/MSC/restore",permalink:"/docs/20/MSC/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"restore",title:"Restore Page",sidebar_label:"Restore Page"},sidebar:"docs",previous:{title:"Rollback Page",permalink:"/docs/20/MSC/rollback"},next:{title:"Repair Page",permalink:"/docs/20/MSC/repair"}},o={},l=[{value:"Successive integration of several data log files",id:"successive-integration-of-several-data-log-files",level:2},{value:"Restoring an encrypted database",id:"restoring-an-encrypted-database",level:2}];function c(e){const n={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can manually restore an archive of the current application using the ",(0,s.jsx)(n.strong,{children:"Restore"})," page. This page provides several options that can be used to control the restoration:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(375020).A+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"4D automatic recovery systems restore applications and include data log file when necessary."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The list found in the left part of the window displays any existing backups of the application. You can also click on the ",(0,s.jsx)(n.strong,{children:"Browse..."})," button found just under the area in order to open any other archive file from a different location. It is then added to the list of archives."]}),"\n",(0,s.jsx)(n.p,{children:"When you select a backup in this list, the right part of the window displays the information concerning this particular backup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Path"}),": Complete pathname of the selected backup file. Clicking the Show button opens the backup file in a system window."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Date and Time"}),": Date and time of backup."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content"}),": Contents of the backup file. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. You can also use the ",(0,s.jsx)(n.strong,{children:"Check All"})," or ",(0,s.jsx)(n.strong,{children:"Uncheck All"})," buttons to set the list of items to be restored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Destination folder of the restored files"}),": Folder where the restored files will be placed. By default, 4D restores the files in a folder named \u201cArchivename\u201d (no extension) that is placed next to the Project folder. To change this location, click on ",(0,s.jsx)(n.strong,{children:"[...]"})," and specify the folder where you want the restored files to be placed."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Restore"})," button launches the manual restoration of the selected element(s)."]}),"\n",(0,s.jsx)(n.h2,{id:"successive-integration-of-several-data-log-files",children:"Successive integration of several data log files"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Integrate one or more log file(s) after restore"})," option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. This means that you can, for example, recover a data file even when the last backup files are missing."]}),"\n",(0,s.jsx)(n.p,{children:"When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled."}),"\n",(0,s.jsx)(n.h2,{id:"restoring-an-encrypted-database",children:"Restoring an encrypted database"}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Matching encryption keys must always be provided."}),"\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating the current log file in a encrypted database:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you restore a backup using an old passphrase, this passphrase will be required at the next database startup."}),"\n",(0,s.jsx)(n.li,{children:"After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following sequence illustrates the principles of a multi-key backup/restore operation:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Generated files"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"New data file"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0000.4BL and 0001.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 2)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0001.4BL and 0002.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 3)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Encrypt data file with key1"}),(0,s.jsx)(n.td,{children:"0003.4BK file (encrypted with key1)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record #4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0003.4BL and 0004.4BK files (encrypted with key1)"}),(0,s.jsx)(n.td,{children:"We can restore 0003.4BK and integrate 0003.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 5)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0004.4BL and 0005.4BK files (encrypted with key1)"}),(0,s.jsx)(n.td,{children:"We can restore 0003.4BK and integrate 0003.4BL + 0004.4BL. We can restore 0004.4BK and integrate 0004.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Encrypt data file with key2"}),(0,s.jsx)(n.td,{children:"0006.4BK file (encrypted with key2)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 7)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0006.4BL and 0007.4BK files (encrypted with key2)"}),(0,s.jsx)(n.td,{children:"We can restore 0006.4BK and integrate 0006.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add data (record # 8)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup database"}),(0,s.jsx)(n.td,{children:"0007.4BL and 0008.4BK files (encrypted with key2)"}),(0,s.jsx)(n.td,{children:"We can restore 0006.4BK and integrate 0006.4BL + 0007.4BL. We can restore 0007.4BK and integrate 0007.4BL"})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated."}),"\n",(0,s.jsx)(n.p,{children:"If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},375020:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);