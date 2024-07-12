/*! For license information please see 77e144f2.e02c5bb5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31191],{968455:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=r(474848),i=r(28453);const l={id:"ZipArchiveClass",title:"ZIPArchive"},t=void 0,d={id:"API/ZipArchiveClass",title:"ZIPArchive",description:"Une archive ZIP 4D est un objet File ou Folder contenant un ou plusieurs fichiers ou dossiers, qui sont compress\xe9s afin d'\xeatre plus petits que leur taille d'origine. Ces archives sont cr\xe9\xe9es avec une extension \".zip\" et peuvent \xeatre utilis\xe9es pour \xe9conomiser de l'espace sur le disque ou transf\xe9rer des fichiers sur des supports de taille limit\xe9e (par exemple, l'email ou le r\xe9seau).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/fr/API/ZipArchiveClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebSocketServer",permalink:"/docs/fr/API/WebSocketServerClass"},next:{title:"ZIPFile",permalink:"/docs/fr/API/ZipFileClass"}},c={},o=[{value:"Exemple",id:"exemple",level:3},{value:"Sommaire",id:"sommaire",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Description",id:"description-1",level:4},{value:"Exemple",id:"exemple-6",level:4},{value:".root",id:"root",level:2},{value:"Description",id:"description-2",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Une archive ZIP 4D est un objet ",(0,s.jsx)(n.code,{children:"File"})," ou ",(0,s.jsx)(n.code,{children:"Folder"})," contenant un ou plusieurs fichiers ou dossiers, qui sont compress\xe9s afin d'\xeatre plus petits que leur taille d'origine. Ces archives sont cr\xe9\xe9es avec une extension \".zip\" et peuvent \xeatre utilis\xe9es pour \xe9conomiser de l'espace sur le disque ou transf\xe9rer des fichiers sur des supports de taille limit\xe9e (par exemple, l'email ou le r\xe9seau)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cr\xe9ez une archive ZIP 4D avec la commande ",(0,s.jsx)(n.a,{href:"#zip-create-archive",children:"ZIP Create archive"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Les instances ",(0,s.jsx)(n.a,{href:"/docs/fr/API/ZipFileClass",children:(0,s.jsx)(n.code,{children:"ZIPFile"})})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/API/ZipFolderClass",children:(0,s.jsx)(n.code,{children:"ZIPFolder"})})," de 4D sont disponibles via la propri\xe9t\xe9 ",(0,s.jsx)(n.a,{href:"#root",children:(0,s.jsx)(n.code,{children:"root"})})," (",(0,s.jsx)(n.code,{children:"ZIPFolder"}),") de l'objet retourn\xe9 par la commande ",(0,s.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour r\xe9cup\xe9rer et visualiser le contenu d'un objet ZIP file :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // store the zip main folder\n$zipFile:=$zipFolder.files()[0] //read the first zipped file\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#root",children:[(0,s.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),(0,s.jsx)(n.br,{}),"un dossier virtuel permettant d'acc\xe9der au contenu de l'archive ZIP"]})})})]}),"\n",(0,s.jsx)(n.h2,{id:"zip-create-archive",children:"ZIP Create archive"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R3"}),(0,s.jsxs)(n.td,{children:["Ajout des propri\xe9t\xe9s ",(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,s.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,s.jsx)(n.code,{children:".level"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileToZip"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folderToZip"}),(0,s.jsx)(n.td,{children:"4D.Folder"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipStructure"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destinationFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Fichier de destination de l'archive"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsxs)(n.td,{children:["Si ",(0,s.jsx)(n.em,{children:"folderToZip"})," utilis\xe9 : ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Objet statut"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"ZIP Create archive"})," cr\xe9e un objet d'archive ZIP compress\xe9e et renvoie le statut de l'op\xe9ration."]}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier param\xe8tre :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"fileToZip"})," : passez simplement un ",(0,s.jsx)(n.code,{children:"4D.File"})," \xe0 compresser."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"folderToZip"})," : passez un ",(0,s.jsx)(n.code,{children:"4D.Folder"})," \xe0 compresser. Dans ce cas, le param\xe8tre ",(0,s.jsx)(n.em,{children:"options"})," vous permet de compresser uniquement le contenu du dossier (c'est-\xe0-dire d'exclure le dossier parent). Par d\xe9faut, l'archive ",(0,s.jsx)(n.code,{children:"ZIP Create archive"})," compressera le dossier et son contenu, de sorte que l'op\xe9ration de d\xe9compression recr\xe9e un dossier. Si vous souhaitez que l'op\xe9ration de d\xe9compression ne restaure que le contenu du dossier, passez la constante ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})," dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"options"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipStructure"})," : passez un objet d\xe9crivant l'objet ZIP archive. Les propri\xe9t\xe9s suivantes sont disponibles pour d\xe9finir la structure :"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compression"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"})," : Compression Deflate (par d\xe9faut)"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"})," : Compression LZMA"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression XZ"})," : Compression XZ"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression none"})," : Pas de compression"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"level"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Niveau de compression. Valeurs possibles : 1 \xe0 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus \xe9lev\xe9e produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Valeurs par d\xe9faut si omis : ",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encryption"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Le chiffrement \xe0 utiliser si un mot de passe est d\xe9fini :",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES128"})," : chiffrement AES utilisant une cl\xe9 de 128 bits."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES192"})," : chiffrement AES utilisant une cl\xe9 de 192 bits."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES256"})," : chiffrement AES utilisant une cl\xe9 de 256 bits (par d\xe9faut si un mot de passe est d\xe9fini)."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption none"})," : les donn\xe9es ne sont pas chiffr\xe9es (par d\xe9faut si aucun mot de passe n'est d\xe9fini)"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Un mot de passe \xe0 d\xe9finir si le chiffrement est requis."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Historique"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:["une collection d'objets ",(0,s.jsx)(n.code,{children:"4D.File"})," ou ",(0,s.jsx)(n.code,{children:"4D.Folder"})," ou"]}),(0,s.jsx)(n.li,{children:"une collection d'objets avec les propri\xe9t\xe9s suivantes :"}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:"Description"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"4D.File ou 4D.Folder"}),(0,s.jsx)(n.td,{children:"Fichier ou dossier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destination"}),(0,s.jsx)(n.td,{children:"Texte"}),(0,s.jsx)(n.td,{children:"(facultatif) - Sp\xe9cifie un chemin relatif pour changer l'organisation du contenu de l'archive"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"nombre"}),(0,s.jsxs)(n.td,{children:["(facultatif) - ",(0,s.jsx)(n.code,{children:"ZIP Ignore invisible files"})," ou 0 pour compresser l'int\xe9gralit\xe9 du fichier"]})]})]})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsx)(n.td,{children:"Une formule de r\xe9tro-appel qui recevra la progression de la compression (0 \xe0 100) dans $1."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"destinationFile"}),", passez un objet ",(0,s.jsx)(n.code,{children:"4D.File"})," d\xe9crivant l'archive ZIP \xe0 cr\xe9er (nom, emplacement, etc.). Il est conseill\xe9 d'utiliser l'extension \".zip\" si vous souhaitez que l'archive ZIP soit trait\xe9e automatiquement par un logiciel."]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois que l'archive est cr\xe9\xe9e, vous pouvez utiliser la commande ",(0,s.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," pour y acc\xe9der."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Status object"})}),"\n",(0,s.jsx)(n.p,{children:"L'objet statut retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"statusText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Message d'erreur (le cas \xe9ch\xe9ant) :",(0,s.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,s.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,s.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"status"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Code d'\xe9tat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Vrai si l'archive a \xe9t\xe9 cr\xe9\xe9e avec succ\xe8s, sinon faux"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(n.p,{children:["Pour compresser un ",(0,s.jsx)(n.code,{children:"4D.File"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsxs)(n.p,{children:["Pour compresser un ",(0,s.jsx)(n.code,{children:"4D.Folder"})," sans le dossier lui-m\xeame :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Pour compresser une structure d'archive ZIP avec un mot de passe et une barre de progression :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //utilisation du composant 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsxs)(n.p,{children:["Vous souhaitez passer une collection de dossiers et de fichiers \xe0 compresser \xe0 l'objet ",(0,s.jsx)(n.em,{children:"zipStructure"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez utiliser un autre algorithme de compression \xe0 un niveau de compression \xe9lev\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //4 par d\xe9faut\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"zip-read-archive",children:"ZIP Read archive"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,s.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Fichier archive ZIP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Mot de passe de l'archive ZIP, le cas \xe9ch\xe9ant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"4D.ZipArchive"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Objet archive"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"ZIP Read archive"})," r\xe9cup\xe8re le contenu de ",(0,s.jsx)(n.em,{children:"zipFile"})," et le renvoie sous forme d'objet ",(0,s.jsx)(n.code,{children:"4D.ZipArchive"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Cette commande ne d\xe9compresse pas l'archive ZIP, elle fournit seulement un aper\xe7u de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des m\xe9thodes telles que ",(0,s.jsx)(n.a,{href:"/docs/fr/API/Document#copyto",children:"file.copyTo()"})," ou ",(0,s.jsx)(n.a,{href:"/docs/fr/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Passez un objet ",(0,s.jsx)(n.code,{children:"4D.File"})," r\xe9f\xe9ren\xe7ant l'archive ZIP compress\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"zipFile"}),". Le fichier d'archive cible est ouvert jusqu'\xe0 la fin de l'ex\xe9cution de la commande ",(0,s.jsx)(n.code,{children:"ZIP Read archive"})," et jusqu'\xe0 ce que tous les contenus/r\xe9f\xe9rences soient extrait(e)s/publi\xe9(e)s ; il est ensuite ferm\xe9 automatiquement."]}),"\n",(0,s.jsxs)(n.p,{children:["Si le ",(0,s.jsx)(n.em,{children:"zipFile"})," est prot\xe9g\xe9 par un mot de passe, vous devez utiliser le param\xe8tre ",(0,s.jsx)(n.em,{children:"password"})," pour fournir un mot de passe. Si un mot de passe est requis mais qu'il n'est pas pass\xe9 lorsque vous tentez de lire le contenu de l'archive, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Objet archive"})}),"\n",(0,s.jsxs)(n.p,{children:["L'objet retourn\xe9 ",(0,s.jsx)(n.code,{children:"4D.ZipArchive"})," contient une seule propri\xe9t\xe9 ",(0,s.jsx)(n.a,{href:"#root",children:(0,s.jsx)(n.code,{children:"root"})})," dont la valeur est un objet ",(0,s.jsx)(n.code,{children:"4D.ZipFolder"}),". Ce dossier d\xe9crit le contenu de l'archive ZIP."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-6",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour r\xe9cup\xe9rer et visualiser le contenu d'un objet ZIP file :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Pour r\xe9cup\xe9rer la liste des fichiers et dossiers de l'archive :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pour lire le contenu d'un fichier sans l'extraire du dossier root :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Pour extraire \xe0 partir du dossier root :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //extraire un fichier\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extraire tous les fichiers\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"root",children:".root"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),"\n",(0,s.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,s.jsx)(n.code,{children:".root"})," contient un dossier virtuel permettant d'acc\xe9der au contenu de l'archive ZIP."]}),"\n",(0,s.jsxs)(n.p,{children:["Le dossier ",(0,s.jsx)(n.code,{children:"root"})," et son contenu sont manipul\xe9s \xe0 l'aide des fonctions et propri\xe9t\xe9s des classes ",(0,s.jsx)(n.a,{href:"/docs/fr/API/ZipFileClass",children:"ZipFile"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/API/ZipFolderClass",children:"ZipFolder"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est en ",(0,s.jsx)(n.strong,{children:"lecture seule"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var s=r(296540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,l={},o=null,a=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:a,props:l,_owner:d.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(296540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);