"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41081"],{555361:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/encrypt-data-file","title":"Encrypt data file","description":"Encrypt data file ( structurePath ; dataPath {; newPassPhrase | newDataKey {; archiveFolder {; curPassPhrase | curDataKey {; methodName}}}} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/encrypt-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-file","permalink":"/docs/commands/encrypt-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"encrypt-data-file","title":"Encrypt data file","slug":"/commands/encrypt-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data BLOB","permalink":"/docs/commands/encrypt-data-blob"},"next":{"title":"New data key","permalink":"/docs/commands/new-data-key"}}'),s=t("785893"),a=t("250065");let d={id:"encrypt-data-file",title:"Encrypt data file",slug:"/commands/encrypt-data-file",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Encrypt data file"})," ( ",(0,s.jsx)(n.em,{children:"structurePath"})," ; ",(0,s.jsx)(n.em,{children:"dataPath"})," {; newPassPhrase | newDataKey {; ",(0,s.jsx)(n.em,{children:"archiveFolder"})," {; curPassPhrase | curDataKey {; ",(0,s.jsx)(n.em,{children:"methodName"}),"}}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"structurePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname of structure file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataPath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname of data file to encrypt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"newPassPhrase | newDataKey"}),(0,s.jsx)(n.td,{children:"Text, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"In case of replacement: new passPhrase (text) or new encryption key (object)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"archiveFolder"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pathname of folder where original files will be stored"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"curPassPhrase | curDataKey"}),(0,s.jsx)(n.td,{children:"Text, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Current passPhrase (text) or current encryption key (object)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of 4D callback method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Full pathname of folder where original files have been stored"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Encrypt data file"})," command is used to encrypt or re-encrypt the data file designated by the ",(0,s.jsx)(n.em,{children:"dataPath"})," parameter associated to the ",(0,s.jsx)(n.em,{children:"structurePath"})," parameter. It can also be used to remove encryption from the database. The command does not modify the original files, it returns the full path name of the folder created to backup the original data file."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This command cannot be used with the currently opened data file."}),"\n",(0,s.jsxs)(n.li,{children:["This command can only be executed from 4D (local mode) or 4D Server (stored procedure). The data file to be encrypted must correspond to the structure file designated by ",(0,s.jsx)(n.em,{children:"structurePath"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['Executing this command will encrypt or modify the encryption of all tables of the database that have been set as "encryptable". For more information, please refer to the ',(0,s.jsx)(n.em,{children:"Encryptable"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Encrypting a database is a lengthy operation. It displays a progress indicator (which could be interrupted by the user). Note also that database encryption sequence includes a compacting step."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"structurePath"})," parameter, you can pass an empty string or the full pathname of the structure file associated with the data file that you want to encrypt. This information is needed for the encrypting procedure. If you pass an empty string, a standard ",(0,s.jsx)(n.strong,{children:"Open file"})," dialog appears so that the user can designate the structure file to be used. Otherwise, you can pass a full pathname, expressed in the syntax of the operating system."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"dataPath"})," parameter, you can pass an empty string, a file name, or a full pathname (must expressed in the syntax of the operating system). If you pass an empty string, a standard ",(0,s.jsx)(n.strong,{children:"Open file"})," dialog appears so that the user can designate the data file to be encrypted. This file must correspond to the structure file defined in the ",(0,s.jsx)(n.em,{children:"structurePath"})," parameter. If you only pass the name of the data file, 4D will look for it at the same level as the structure file."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"To encrypt the database for the first time"}),", you only need to pass the ",(0,s.jsx)(n.em,{children:"newPassPhrase"})," or ",(0,s.jsx)(n.em,{children:"newDataKey"})," parameter (The ",(0,s.jsx)(n.em,{children:"curPassPhrase"})," or ",(0,s.jsx)(n.em,{children:"curDataKey"})," parameters must not be provided):\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"newPassPhrase"}),": String used to generate the encryption key (SHA 256-bit)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"newDataKey"}),": Object (with ",(0,s.jsx)(n.em,{children:"encodedKey"})," property) that contains a new data encryption key. This key should have been generated with the ",(0,s.jsx)(n.a,{href:"/docs/commands/new-data-key",children:"New data key"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.em,{children:"newPassPhrase"})," (or ",(0,s.jsx)(n.em,{children:"newDataKey"}),") is not added to the 4D keychain."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"To re-encrypt a database"})," (",(0,s.jsx)(n.em,{children:"i.e."})," the database has already been encrypted), you must pass both the ",(0,s.jsx)(n.em,{children:"newPassPhrase"})," (or ",(0,s.jsx)(n.em,{children:"newDataKey"}),") parameter, as well as the current passphrase (or current data key). This is necessary to decrypt the database before re-encrypting it. This information can be provided in the following ways:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["by passing valid ",(0,s.jsx)(n.em,{children:"curPassPhrase"})," (or ",(0,s.jsx)(n.em,{children:"curDataKey"}),") parameters to the command,"]}),"\n",(0,s.jsx)(n.li,{children:"in the 4D keychain."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"To remove encryption from all tables"}),", pass an empty passphrase or a ",(0,s.jsx)(n.em,{children:"null"})," data key as ",(0,s.jsx)(n.em,{children:"newPassPhrase"})," (or ",(0,s.jsx)(n.em,{children:"newDataKey"}),'). The current passphrase or data key must have already been provided. Decrypted files will be generated/copied in folders named \u201CReplaced files (Decrypting) YYYY-MM-DD HH-MM-SS\u201D/"Decrypted files YYYY-MM-DD HH-MM-SS".']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command does not modifiy the original files. They are moved in the ",(0,s.jsx)(n.em,{children:"archiveFolder"})," folder (if passed) into a special folder named ",(0,s.jsx)(n.em,{children:"Replaced files (Encrypting) YYYY-MM-DD HH-MM-SS"})," or ",(0,s.jsx)(n.em,{children:"Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS"}),' where YYYY-MM-DD HH-MM-SS represents the date and time of the operation. For example: "Replaced files (Encrypting) 2018-09-29 13-00-35". New encrypted or decrypted data file automatically replaces the original file.',(0,s.jsx)(n.br,{}),'\nIf you passed "" in ',(0,s.jsx)(n.em,{children:"archiveFolder"}),", a standard ",(0,s.jsx)(n.strong,{children:"Open folder"})," dialog will appear so that the user can specify the location of the folder to be created. If ",(0,s.jsx)(n.em,{children:"archiveFolder"})," is omitted, the original files are automatically stored in a timestamped folder created next to the structure file."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"method"})," parameter is used to set a callback method that will be called regularly during the encryption process. If you pass an empty string or an invalid method name, this parameter is ignored (no method is called). When it is called, this method receives up to 5 parameters depending on the event type originating the call (see below). It is imperative to declare these parameters in the method:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Event"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"$1 (Longint)"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"$2 (Longint)"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"$3 (Text)"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"$4 (Longint)"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"$5 (Longint)"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Message"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Progress message (",(0,s.jsx)(n.em,{children:"e.g."}),' "Encrypting BLOBs in table Documents")']}),(0,s.jsxs)(n.td,{children:["Percentage done (",(0,s.jsx)(n.em,{children:"e.g."})," 50)"]}),(0,s.jsx)(n.td,{children:"Reserved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Encryption finished"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["OK message (",(0,s.jsx)(n.em,{children:"e.g."}),' "Done")']}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Reserved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Error"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Error message (",(0,s.jsx)(n.em,{children:"e.g."}),' "Problem on the XX data table: Encryption key has not been provided")']}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Reserved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"End of execution"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:'"Done"'}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Reserved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Warning(*)"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Object type"}),(0,s.jsx)(n.td,{children:"Text of error"}),(0,s.jsx)(n.td,{children:"Table or index number"}),(0,s.jsx)(n.td,{children:"Reserved"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) Warning returned at the verification step (see ",(0,s.jsx)(n.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})," command)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returned value"})}),"\n",(0,s.jsx)(n.p,{children:"Actual path of the destination folder of the original files."}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Encrypt a data file for the first time:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$passphrase : Text\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0//Because the data file is not encrypted, no current encryption key is provided\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Re-encrypt an encrypted data file (change the passphrase):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase;$newPassphrase : Text\n\xa0$passphrase:=Request("Enter the current passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$newPassphrase:=Request("Enter the new passphrase")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator\n\xa0\xa0//As the data file is encrypted, the current encryption key must be provided\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Remove encryption from an encrypted data file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase : Text\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator\n\xa0\xa0//The new passphrase is set to an empty string to decrypt all data\n\xa0\xa0//The current passphrase must be provided\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Re-encrypt an encrypted data file with the current key (for example, when the encryptable status has been changed for some tables)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$passPhrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\xa0//The data key is now in the 4D keychain\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/",children:"4D Blog - New 4D commands to work with encrypted data"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/data-file-encryption-status",children:"Data file encryption status"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/new-data-key",children:"New data key"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1610"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},a=r.createContext(s);function d(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);