"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24046"],{340291:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"MSC/restore","title":"P\xe1gina Restaura\xe7\xe3o","description":"Puede restaurar manualmente un archivo de la aplicaci\xf3n actual utilizando la p\xe1gina Restaurar. This page provides several options that can be used to control the restoration:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/MSC/restore.md","sourceDirName":"MSC","slug":"/MSC/restore","permalink":"/docs/pt/MSC/restore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restore","title":"P\xe1gina Restaura\xe7\xe3o","sidebar_label":"P\xe1gina Restaura\xe7\xe3o"},"sidebar":"docs","previous":{"title":"P\xe1gina Retrocesso","permalink":"/docs/pt/MSC/rollback"},"next":{"title":"P\xe1gina de repara\xe7\xe3o","permalink":"/docs/pt/MSC/repair"}}'),s=r("785893"),t=r("250065");let i={id:"restore",title:"P\xe1gina Restaura\xe7\xe3o",sidebar_label:"P\xe1gina Restaura\xe7\xe3o"},d=void 0,o={},c=[{value:"Integra\xe7\xe3o sucessiva de v\xe1rios ficheiros de hist\xf3rico",id:"integra\xe7\xe3o-sucessiva-de-v\xe1rios-ficheiros-de-hist\xf3rico",level:2},{value:"Restaurar uma base de dados encriptada",id:"restaurar-uma-base-de-dados-encriptada",level:2}];function l(e){let n={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Puede restaurar manualmente un archivo de la aplicaci\xf3n actual utilizando la p\xe1gina ",(0,s.jsx)(n.strong,{children:"Restaurar"}),". This page provides several options that can be used to control the restoration:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(854989).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"4D automatic recovery systems restore applications and include data log file when necessary."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The list found in the left part of the window displays any existing backups of the application. Tambi\xe9n puede hacer clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Navegar..."})," que se encuentra justo debajo del \xe1rea para abrir cualquier otro archivo de una ubicaci\xf3n diferente. \xc9 ent\xe3o acrescentado \xe0 lista de arquivos."]}),"\n",(0,s.jsx)(n.p,{children:"When you select a backup in this list, the right part of the window displays the information concerning this particular backup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ruta"}),": ruta de acceso completa del archivo de copia de seguridad seleccionado. Clicar no bot\xe3o Mostrar abre o ficheiro de c\xf3pia de seguran\xe7a numa janela do sistema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fecha y hora"}),": fecha y hora de la copia de seguridad."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contenido"}),": contenido del archivo de copia de seguridad. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. Tambi\xe9n puede utilizar los botones ",(0,s.jsx)(n.strong,{children:"Seleccionar todo"})," o ",(0,s.jsx)(n.strong,{children:"Deseleccionar todo"})," para definir la lista de los elementos que deben restaurarse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Carpeta de destino de los archivos restaurados"}),": carpeta donde se colocar\xe1n los archivos restaurados. By default, 4D restores the files in a folder named \u201CArchivename\u201D (no extension) that is placed next to the Project folder. Para cambiar esta ubicaci\xf3n, haga clic en ",(0,s.jsx)(n.strong,{children:"[...]"})," y designe la carpeta en la que desea colocar los archivos restaurados."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El bot\xf3n ",(0,s.jsx)(n.strong,{children:"Restaurar"})," lanza la restauraci\xf3n manual del elemento o elementos seleccionados."]}),"\n",(0,s.jsx)(n.h2,{id:"integra\xe7\xe3o-sucessiva-de-v\xe1rios-ficheiros-de-hist\xf3rico",children:"Integra\xe7\xe3o sucessiva de v\xe1rios ficheiros de hist\xf3rico"}),"\n",(0,s.jsxs)(n.p,{children:["La opci\xf3n ",(0,s.jsx)(n.strong,{children:"Integrar uno o varios archivos de historial tras la restauraci\xf3n"})," permite integrar sucesivamente varios archivos de registro de datos en una aplicaci\xf3n. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. This means that you can, for example, recover a data file even when the last backup files are missing."]}),"\n",(0,s.jsx)(n.p,{children:"When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled."}),"\n",(0,s.jsx)(n.h2,{id:"restaurar-uma-base-de-dados-encriptada",children:"Restaurar uma base de dados encriptada"}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Devem ser sempre fornecidas chaves de encripta\xe7\xe3o correspondentes."}),"\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating the current log file in a encrypted database:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you restore a backup using an old passphrase, this passphrase will be required at the next database startup."}),"\n",(0,s.jsx)(n.li,{children:"After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A sequ\xeancia seguinte ilustra os princ\xedpios de uma opera\xe7\xe3o com v\xe1rias chaves de backup/restauro:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,s.jsx)(n.th,{children:"Ficheiros gerados"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Novo ficheiro de dados"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"0000.4BL e 0001.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 2)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"0001.4BL e 0002.4BK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 3)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Criptografar um arquivo de dados com key1"}),(0,s.jsx)(n.td,{children:"Ficheiro 0003.4BK (encriptado com key1)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo #4)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0003.4BL e 0004.4BK (encriptados com key1)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 5)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0004.4BL e 0005.4BK (encriptados com key1)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 6)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Encripta\xe7\xe3o de um arquivo de dados com key2"}),(0,s.jsx)(n.td,{children:"Ficheiro 0006.4BK (encriptado com key2)"}),(0,s.jsx)(n.td,{children:'Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 7)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0006.4BL e 0007.4BK (encriptados com key2)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adicionar dados (registo # 8)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C\xf3pia de seguran\xe7a do banco de dados"}),(0,s.jsx)(n.td,{children:"Ficheiros 0007.4BL e 0008.4BK (encriptados com key2)"}),(0,s.jsx)(n.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL"})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated."}),"\n",(0,s.jsx)(n.p,{children:"If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},854989:function(e,n,r){r.d(n,{Z:function(){return a}});let a=r.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var a=r(667294);let s={},t=a.createContext(s);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);