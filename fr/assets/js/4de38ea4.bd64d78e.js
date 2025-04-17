"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12942"],{860017:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands/zip-create-archive","title":"ZIP Create archive","description":"ZIP Create archive ( fileToZip 4D.File ) 4D.Folder ; destinationFile Integer }) Object ; destinationFile Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/zip-create-archive.md","sourceDirName":"commands","slug":"/commands/zip-create-archive","permalink":"/docs/fr/commands/zip-create-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-create-archive.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"zip-create-archive","title":"ZIP Create archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/fr/commands/folder"},"next":{"title":"ZIP Read archive","permalink":"/docs/fr/commands/zip-read-archive"}}'),i=s("785893"),d=s("250065");let t={id:"zip-create-archive",title:"ZIP Create archive",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileToZip"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderToZip"}),(0,i.jsx)(n.td,{children:"4D.Folder"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipStructure"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet fichier ou dossier \xe0 compresser"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationFile"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fichier de destination de l'archive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si ",(0,i.jsx)(n.em,{children:"folderToZip"})," utilis\xe9 : ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Objet statut"})]})]})]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R3"}),(0,i.jsxs)(n.td,{children:["Ajout des propri\xe9t\xe9s ",(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,i.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,i.jsx)(n.code,{children:".level"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," cr\xe9e un objet d'archive ZIP compress\xe9e et renvoie le statut de l'op\xe9ration."]}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier param\xe8tre :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fileToZip"})," : passez simplement un ",(0,i.jsx)(n.code,{children:"4D.File"})," \xe0 compresser."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"folderToZip"})," : passez un ",(0,i.jsx)(n.code,{children:"4D.Folder"})," \xe0 compresser. Dans ce cas, le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"})," vous permet de compresser uniquement le contenu du dossier (c'est-\xe0-dire d'exclure le dossier parent). Par d\xe9faut, l'archive ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," compressera le dossier et son contenu, de sorte que l'op\xe9ration de d\xe9compression recr\xe9e un dossier. Si vous souhaitez que l'op\xe9ration de d\xe9compression ne restaure que le contenu du dossier, passez la constante ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})," dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipStructure"})," : passez un objet d\xe9crivant l'objet ZIP archive. Les propri\xe9t\xe9s suivantes sont disponibles pour d\xe9finir la structure :"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"})," : Compression Deflate (par d\xe9faut)"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"})," : Compression LZMA"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"})," : Compression XZ"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression none"})," : Pas de compression"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"level"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["Niveau de compression. Valeurs possibles : 1 \xe0 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus \xe9lev\xe9e produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Valeurs par d\xe9faut si omis : ",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryption"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["Le chiffrement \xe0 utiliser si un mot de passe est d\xe9fini :",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES128"})," : chiffrement AES utilisant une cl\xe9 de 128 bits."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES192"})," : chiffrement AES utilisant une cl\xe9 de 192 bits."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES256"})," : chiffrement AES utilisant une cl\xe9 de 256 bits (par d\xe9faut si un mot de passe est d\xe9fini)."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption none"})," : les donn\xe9es ne sont pas chiffr\xe9es (par d\xe9faut si aucun mot de passe n'est d\xe9fini)"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Un mot de passe \xe0 d\xe9finir si le chiffrement est requis."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Historique"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:["une collection d'objets ",(0,i.jsx)(n.code,{children:"4D.File"})," ou ",(0,i.jsx)(n.code,{children:"4D.Folder"})," ou"]}),(0,i.jsx)(n.li,{children:"une collection d'objets avec les propri\xe9t\xe9s suivantes :"}),(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:"Description"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"4D.File ou 4D.Folder"}),(0,i.jsx)(n.td,{children:"Fichier ou dossier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destination"}),(0,i.jsx)(n.td,{children:"Texte"}),(0,i.jsx)(n.td,{children:"(facultatif) - Sp\xe9cifie un chemin relatif pour changer l'organisation du contenu de l'archive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"nombre"}),(0,i.jsxs)(n.td,{children:["(facultatif) - ",(0,i.jsx)(n.code,{children:"ZIP Ignore invisible files"})," ou 0 pour compresser l'int\xe9gralit\xe9 du fichier"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"4D.Function"}),(0,i.jsx)(n.td,{children:"Une formule de r\xe9tro-appel qui recevra la progression de la compression (0 \xe0 100) dans $1."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"destinationFile"}),", passez un objet ",(0,i.jsx)(n.code,{children:"4D.File"})," d\xe9crivant l'archive ZIP \xe0 cr\xe9er (nom, emplacement, etc.). Il est conseill\xe9 d'utiliser l'extension \".zip\" si vous souhaitez que l'archive ZIP soit trait\xe9e automatiquement par un logiciel."]}),"\n",(0,i.jsxs)(n.p,{children:["Une fois que l'archive est cr\xe9\xe9e, vous pouvez utiliser la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/zip-read-archive",children:"ZIP Read archive"})," pour y acc\xe9der."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Status object"})}),"\n",(0,i.jsx)(n.p,{children:"L'objet statut retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Message d'erreur (le cas \xe9ch\xe9ant) :",(0,i.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,i.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,i.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"Code d'\xe9tat"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Vrai si l'archive a \xe9t\xe9 cr\xe9\xe9e avec succ\xe8s, sinon faux"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["Pour compresser un ",(0,i.jsx)(n.code,{children:"4D.File"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["Pour compresser un ",(0,i.jsx)(n.code,{children:"4D.Folder"})," sans le dossier lui-m\xeame :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(n.p,{children:"Pour compresser une structure d'archive ZIP avec un mot de passe et une barre de progression :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //utilisation du composant 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($current : Integer)\n Progress SET PROGRESS(progID;Num($current /100))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsxs)(n.p,{children:["Vous souhaitez passer une collection de dossiers et de fichiers \xe0 compresser \xe0 l'objet ",(0,i.jsx)(n.em,{children:"zipStructure"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,i.jsx)(n.p,{children:"Vous souhaitez utiliser un autre algorithme de compression \xe0 un niveau de compression \xe9lev\xe9 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //4 par d\xe9faut\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/zip-read-archive",children:(0,i.jsx)(n.code,{children:"ZIP Read archive"})})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1640"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var r=s(667294);let i={},d=r.createContext(i);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);