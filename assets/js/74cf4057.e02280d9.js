"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55375],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"restore",title:"Restore Page"},o=void 0,s={unversionedId:"MSC/restore",id:"version-20-R4/MSC/restore",title:"Restore Page",description:"You can manually restore an archive of the current application using the Restore page. This page provides several options that can be used to control the restoration:",source:"@site/versioned_docs/version-20-R4/MSC/restore.md",sourceDirName:"MSC",slug:"/MSC/restore",permalink:"/docs/MSC/restore",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"restore",title:"Restore Page"},sidebar:"docs",previous:{title:"Rollback Page",permalink:"/docs/MSC/rollback"},next:{title:"Repair Page",permalink:"/docs/MSC/repair"}},p={},d=[{value:"Successive integration of several data log files",id:"successive-integration-of-several-data-log-files",level:2},{value:"Restoring an encrypted database",id:"restoring-an-encrypted-database",level:2}],c={toc:d};function u(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can manually restore an archive of the current application using the ",(0,n.kt)("strong",{parentName:"p"},"Restore")," page. This page provides several options that can be used to control the restoration:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4152).Z,width:"882",height:"666"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D automatic recovery systems restore applications and include data log file when necessary.")),(0,n.kt)("p",null,"The list found in the left part of the window displays any existing backups of the application. You can also click on the ",(0,n.kt)("strong",{parentName:"p"},"Browse...")," button found just under the area in order to open any other archive file from a different location. It is then added to the list of archives."),(0,n.kt)("p",null,"When you select a backup in this list, the right part of the window displays the information concerning this particular backup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Path"),": Complete pathname of the selected backup file. Clicking the Show button opens the backup file in a system window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date and Time"),": Date and time of backup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content"),": Contents of the backup file. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. You can also use the ",(0,n.kt)("strong",{parentName:"li"},"Check All")," or ",(0,n.kt)("strong",{parentName:"li"},"Uncheck All")," buttons to set the list of items to be restored."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Destination folder of the restored files"),": Folder where the restored files will be placed. By default, 4D restores the files in a folder named \u201cArchivename\u201d (no extension) that is placed next to the Project folder. To change this location, click on ",(0,n.kt)("strong",{parentName:"li"},"[...]")," and specify the folder where you want the restored files to be placed.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Restore")," button launches the manual restoration of the selected element(s)."),(0,n.kt)("h2",r({},{id:"successive-integration-of-several-data-log-files"}),"Successive integration of several data log files"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Integrate one or more log file(s) after restore")," option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. This means that you can, for example, recover a data file even when the last backup files are missing."),(0,n.kt)("p",null,"When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled."),(0,n.kt)("h2",r({},{id:"restoring-an-encrypted-database"}),"Restoring an encrypted database"),(0,n.kt)("p",null,"Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Matching encryption keys must always be provided."),(0,n.kt)("p",null,"When restoring a backup and integrating the current log file in a encrypted database:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you restore a backup using an old passphrase, this passphrase will be required at the next database startup."),(0,n.kt)("li",{parentName:"ul"},"After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key.")),(0,n.kt)("p",null,"The following sequence illustrates the principles of a multi-key backup/restore operation:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operation"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Generated files"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"New data file"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0000.4BL and 0001.4BK"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0001.4BL and 0002.4BK"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encrypt data file with key1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0003.4BK file (encrypted with key1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record #4)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0003.4BL and 0004.4BK files (encrypted with key1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"We can restore 0003.4BK and integrate 0003.4BL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 5)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0004.4BL and 0005.4BK files (encrypted with key1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"We can restore 0003.4BK and integrate 0003.4BL + 0004.4BL. We can restore 0004.4BK and integrate 0004.4BL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 6)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encrypt data file with key2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0006.4BK file (encrypted with key2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 7)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0006.4BL and 0007.4BK files (encrypted with key2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"We can restore 0006.4BK and integrate 0006.4BL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add data (record # 8)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0007.4BL and 0008.4BK files (encrypted with key2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"We can restore 0006.4BK and integrate 0006.4BL + 0007.4BL. We can restore 0007.4BK and integrate 0007.4BL")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated.    "),(0,n.kt)("p",{parentName:"blockquote"},"If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected.")))}u.isMDXComponent=!0},4152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"}}]);