"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45986],{404405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const a={id:"restore",title:"P\xe1gina Restaura\xe7\xe3o",sidebar_label:"P\xe1gina Restaura\xe7\xe3o"},i=void 0,d={id:"MSC/restore",title:"P\xe1gina Restaura\xe7\xe3o",description:"Restaura\xe7\xe3o de um backup",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/MSC/restore.md",sourceDirName:"MSC",slug:"/MSC/restore",permalink:"/docs/pt/18/MSC/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"restore",title:"P\xe1gina Restaura\xe7\xe3o",sidebar_label:"P\xe1gina Restaura\xe7\xe3o"},sidebar:"docs",previous:{title:"P\xe1gina Retrocesso",permalink:"/docs/pt/18/MSC/rollback"},next:{title:"P\xe1gina de repara\xe7\xe3o",permalink:"/docs/pt/18/MSC/repair"}},o={},c=[{value:"Restaura\xe7\xe3o de um backup",id:"restaura\xe7\xe3o-de-um-backup",level:2},{value:"Integra\xe7\xe3o sucessiva de v\xe1rios ficheiros de hist\xf3rico",id:"integra\xe7\xe3o-sucessiva-de-v\xe1rios-ficheiros-de-hist\xf3rico",level:2},{value:"Restaurar uma base de dados encriptada",id:"restaurar-uma-base-de-dados-encriptada",level:2}];function l(e){const n={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"restaura\xe7\xe3o-de-um-backup",children:"Restaura\xe7\xe3o de um backup"}),"\n",(0,s.jsxs)(n.p,{children:["You can manually restore an archive of the current database using the ",(0,s.jsx)(n.strong,{children:"Restore"})," page. This page provides several options that can be used to control the database restoration:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(387984).A+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"4D automatic recovery systems restore databases and include data log file when necessary."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The list found in the left part of the window displays any existing backups of the database. You can also click on the Browse... button found just under the area in order to open any other archive file from a different location. \xc9 ent\xe3o acrescentado \xe0 lista de arquivos."}),"\n",(0,s.jsx)(n.p,{children:"When you select a backup in this list, the right part of the window displays the information concerning this particular backup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Path"}),": Complete pathname of the selected backup file. Clicar no bot\xe3o Mostrar abre o ficheiro de c\xf3pia de seguran\xe7a numa janela do sistema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data e hora"}),": data e hora da c\xf3pia de seguran\xe7a."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conte\xfado"}),": conte\xfado do ficheiro de c\xf3pia de seguran\xe7a. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. You can also use the ",(0,s.jsx)(n.strong,{children:"Check All"})," or ",(0,s.jsx)(n.strong,{children:"Uncheck All"})," buttons to set the list of items to be restored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Destination folder of the restored files"}),": Folder where the restored files will be placed. By default, 4D restores the files in a folder named \u201cArchivename\u201d (no extension) that is placed next to the database structure file. To change this location, click on ",(0,s.jsx)(n.strong,{children:"[...]"})," and specify the folder where you want the restored files to be placed."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Restore"})," button launches the manual restoration of the selected element(s)."]}),"\n",(0,s.jsx)(n.h2,{id:"integra\xe7\xe3o-sucessiva-de-v\xe1rios-ficheiros-de-hist\xf3rico",children:"Integra\xe7\xe3o sucessiva de v\xe1rios ficheiros de hist\xf3rico"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Integrate one or more log file(s) after restore"})," option allows you to integrate several data log files successively into a database. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 database backups, you can restore the first backup then integrate the journal (data log) archives one by one. This means that you can, for example, recover a data file even when the last backup files are missing."]}),"\n",(0,s.jsx)(n.p,{children:"When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled."}),"\n",(0,s.jsx)(n.h2,{id:"restaurar-uma-base-de-dados-encriptada",children:"Restaurar uma base de dados encriptada"}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current database. Devem ser sempre fornecidas chaves de encripta\xe7\xe3o correspondentes."}),"\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating the current log file in a encrypted database:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you restore a backup using an old passphrase, this passphrase will be required at the next database startup."}),"\n",(0,s.jsx)(n.li,{children:"After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A sequ\xeancia seguinte ilustra os princ\xedpios de uma opera\xe7\xe3o com v\xe1rias chaves de backup/restauro:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,s.jsx)(n.th,{children:"Ficheiros gerados"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nova base"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"0000.4BL e 0001.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 2)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"0001.4BL e 0002.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 3)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Criptografar um arquivo de dados com key1"}),(0,s.jsx)(n.td,{children:"Ficheiro 0003.4BK (encriptado com key1)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo #4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0003.4BL e 0004.4BK (encriptados com key1)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 5)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0004.4BL e 0005.4BK (encriptados com key1)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Encripta\xe7\xe3o de um arquivo de dados com key2"}),(0,s.jsx)(n.td,{children:"Ficheiro 0006.4BK (encriptado com key2)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 7)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0006.4BL e 0007.4BK (encriptados com key2)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 8)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0007.4BL e 0008.4BK (encriptados com key2)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL"})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated."}),"\n",(0,s.jsx)(n.p,{children:"If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},387984:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);