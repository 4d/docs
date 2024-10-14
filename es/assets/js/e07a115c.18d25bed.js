"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75830],{890678:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var i=r(474848),s=r(28453);const d={id:"ZipArchiveClass",title:"ZIPArchive"},l=void 0,c={id:"API/ZipArchiveClass",title:"ZIPArchive",description:'Un archivo ZIP 4D es un objeto File o Folder que contiene uno o m\xe1s archivos o carpetas, que se comprimen para ser m\xe1s peque\xf1os que su tama\xf1o original. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/es/20-R5/API/ZipArchiveClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebSocketServer",permalink:"/docs/es/20-R5/API/WebSocketServerClass"},next:{title:"ZIPFile",permalink:"/docs/es/20-R5/API/ZipFileClass"}},o={},t=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplo",id:"ejemplo-6",level:4},{value:".root",id:"root",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Un archivo ZIP 4D es un objeto ",(0,i.jsx)(n.code,{children:"File"})," o ",(0,i.jsx)(n.code,{children:"Folder"}),' que contiene uno o m\xe1s archivos o carpetas, que se comprimen para ser m\xe1s peque\xf1os que su tama\xf1o original. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cree un archivo ZIP 4D con el comando ",(0,i.jsx)(n.a,{href:"#zip-create-archive",children:"ZIP Create archive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Las instancias 4D ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/ZipFileClass",children:(0,i.jsx)(n.code,{children:"ZIPFile"})})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/ZipFolderClass",children:(0,i.jsx)(n.code,{children:"ZIPFolder"})})," est\xe1n disponibles a trav\xe9s de la propiedad ",(0,i.jsx)(n.a,{href:"#root",children:(0,i.jsx)(n.code,{children:"root"})})," (",(0,i.jsx)(n.code,{children:"ZIPFolder"}),") del objeto devuelto por el comando ",(0,i.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar y ver el contenido de un objeto ZIP file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // guardar la carpeta principal del zip\n$zipFile:=$zipFolder.files()[0] //leer la primera carpeta comprimida\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n'})}),"\n",(0,i.jsx)(n.h3,{id:"resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#root",children:[(0,i.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),(0,i.jsx)(n.br,{}),"una carpeta virtual que permite acceder al contenido del archivo ZIP"]})})})]}),"\n",(0,i.jsx)(n.h2,{id:"zip-create-archive",children:"ZIP Create archive"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R3"}),(0,i.jsxs)(n.td,{children:["Adici\xf3n de las propiedades ",(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,i.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,i.jsx)(n.code,{children:".level"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileToZip"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderToZip"}),(0,i.jsx)(n.td,{children:"4D.Folder"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipStructure"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationFile"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Archivo de destino del archivo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsxs)(n.td,{children:["Opci\xf3n ",(0,i.jsx)(n.em,{children:"folderToZip"}),": ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto estado"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," crea un objeto archivo ZIP comprimido y devuelve el estado de la operaci\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer par\xe1metro:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fileToZip"}),": pase simplemente un ",(0,i.jsx)(n.code,{children:"4D.File"})," a comprimir."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"folderToZip"}),": pase un ",(0,i.jsx)(n.code,{children:"4D.Folder"})," para comprimir. En este caso, el par\xe1metro ",(0,i.jsx)(n.em,{children:"options"})," permite comprimir s\xf3lo el contenido de la carpeta (es decir, excluir la carpeta padre). Por defecto, ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," comprimir\xe1 la carpeta y su contenido, de modo que la operaci\xf3n de descompresi\xf3n volver\xe1 a crear una carpeta. Si desea que la operaci\xf3n de descompresi\xf3n restaure s\xf3lo el contenido de la carpeta, pase la constante ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})," en el par\xe1metro ",(0,i.jsx)(n.em,{children:"options"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipStructure"}),": pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades est\xe1n disponibles para definir la estructura:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": Compresi\xf3n Deflate (por defecto)"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": Compression LZMA"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compresi\xf3n XZ"}),": Compression XZ"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compresi\xf3n"}),": sin compresi\xf3n"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"level"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["Nivel de compresi\xf3n. Valores posibles: 1 a 10. Un valor m\xe1s bajo producir\xe1 un archivo m\xe1s grande, mientras que un valor m\xe1s alto producir\xe1 un archivo m\xe1s peque\xf1o. Sin embargo, el nivel de compresi\xf3n influye en el rendimiento. Valores por defecto si se omite: ",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryption"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["El cifrado a usar si se define una contrase\xf1a:",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES128"}),": encriptaci\xf3n AES utilizando llave de 128 bits."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES192"}),": encriptaci\xf3n AES utilizando llave de 192 bits."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES256"}),": encriptaci\xf3n AES utilizando llave de 256 bits (por defecto si se define la contrase\xf1a)."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption none"}),": los datos no est\xe1n cifrados (por defecto si no se define una contrase\xf1a)"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"contrase\xf1a"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Una contrase\xf1a a utilizar si se requiere encriptaci\xf3n."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hist\xf3rico"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:["una colecci\xf3n de objetos ",(0,i.jsx)(n.code,{children:"4D.File"})," o ",(0,i.jsx)(n.code,{children:"4D.Folder"})," o"]}),(0,i.jsx)(n.li,{children:"una colecci\xf3n de objetos con las siguientes propiedades:"}),(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Propiedad"}),(0,i.jsx)(n.td,{children:"Tipo"}),(0,i.jsx)(n.td,{children:"Descripci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"4D.Archivo o 4D.Carpeta"}),(0,i.jsx)(n.td,{children:"Archivo o Carpeta"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destino"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"(opcional) - Especifique una ruta de archivo relativa para cambiar la organizaci\xf3n del contenido del archivo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsxs)(n.td,{children:["(opcional) - ",(0,i.jsx)(n.code,{children:"ZIP Ignore invisible files"})," o 0 para comprimir todo el archivo"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"retrollamada"}),(0,i.jsx)(n.td,{children:"4D.Function"}),(0,i.jsx)(n.td,{children:"Una f\xf3rmula de retrollamada que recibir\xe1 la progresi\xf3n de la compresi\xf3n (0 - 100) en $1."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"destinationFile"}),", pase un objeto ",(0,i.jsx)(n.code,{children:"4D.File"}),' que describa el archivo ZIP a crear (nombre, ubicaci\xf3n, etc.). Se aconseja utilizar la extensi\xf3n ".zip" si quiere que el archivo ZIP sea procesado autom\xe1ticamente por cualquier software.']}),"\n",(0,i.jsxs)(n.p,{children:["Una vez creado un archivo, puede utilizar el comando ",(0,i.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," para acceder a \xe9l."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Status object"})}),"\n",(0,i.jsx)(n.p,{children:"El objeto status devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Mensaje de error (si lo hay):",(0,i.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,i.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,i.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si el archivo se ha creado con \xe9xito, si no, false"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["Para comprimir un archivo ",(0,i.jsx)(n.code,{children:"4D.File"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Para comprimir una carpeta ",(0,i.jsx)(n.code,{children:"4D.Folder"})," sin la carpeta en s\xed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Para comprimir una estructura de archivo ZIP con una contrase\xf1a y una barra de progreso:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //utilizamos el componente 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,i.jsxs)(n.p,{children:["Quiere pasar una colecci\xf3n de carpetas y archivos para comprimir al objeto ",(0,i.jsx)(n.em,{children:"zipStructure"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,i.jsx)(n.p,{children:"Desea utilizar un algoritmo de compresi\xf3n alternativo con un alto nivel de compresi\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //por defecto es 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"zip-read-archive",children:"ZIP Read archive"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zIPFile"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Archivos Zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"contrase\xf1a"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Contrase\xf1a del archivo ZIP, si la hay"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"4D.ZipArchive"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto archivo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," recupera el contenido de ",(0,i.jsx)(n.em,{children:"zipFile"})," y lo devuelve como un objeto ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Este comando no descomprime el archivo ZIP, s\xf3lo ofrece una vista de su contenido. Para extraer el contenido de un archivo, es necesario utilizar m\xe9todos como ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/Document#copyto",children:"file.copyTo()"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pase un objeto ",(0,i.jsx)(n.code,{children:"4D.File"})," que haga referencia al archivo ZIP comprimido en el par\xe1metro ",(0,i.jsx)(n.em,{children:"zipFile"}),". El archivo de destino se abrir\xe1 hasta que el ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," haya terminado de ejecutarse y todos los contenidos/referencias hayan sido extra\xeddos/liberados, entonces se cerrar\xe1 autom\xe1ticamente."]}),"\n",(0,i.jsxs)(n.p,{children:["Si el ",(0,i.jsx)(n.em,{children:"zipFile"})," est\xe1 protegido por contrase\xf1a, es necesario utilizar el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"password"})," para suministrar una contrase\xf1a. Si se requiere una contrase\xf1a pero no se pasa al intentar leer el contenido del archivo, se genera un error."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Objeto archivo"})}),"\n",(0,i.jsxs)(n.p,{children:["El objeto ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," devuelto contiene una \xfanica propiedad ",(0,i.jsx)(n.a,{href:"#root",children:(0,i.jsx)(n.code,{children:"root"})})," cuyo valor es un objeto ",(0,i.jsx)(n.code,{children:"4D.ZipFolder"}),". Esta carpeta describe todo el contenido del archivo ZIP."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar y ver el contenido de un objeto ZIP file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar la lista de los archivos y carpetas del archivo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Para leer el contenido de un archivo sin extraerlo de la carpeta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para extraer desde la carpeta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  //extraer un archivo\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extraer todos los archivos\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"root",children:".root"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".root"})," contiene una carpeta virtual que permite acceder al contenido del archivo ZIP."]}),"\n",(0,i.jsxs)(n.p,{children:["La carpeta ",(0,i.jsx)(n.code,{children:"root"})," y su contenido se pueden manipular con las funciones y propiedades ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/ZipFileClass",children:"ZipFile"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/API/ZipFolderClass",children:"ZipFolder"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Esta propiedad es de ",(0,i.jsx)(n.strong,{children:"solo lectura"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(296540);const s={},d=i.createContext(s);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);