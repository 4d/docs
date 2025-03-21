"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80677"],{621585:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands/zip-create-archive","title":"ZIP Create archive","description":"ZIP Create archive ( fileToZip 4D.File ) 4D.Folder ; destinationFile Integer }) Object ; destinationFile Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/zip-create-archive.md","sourceDirName":"commands","slug":"/commands/zip-create-archive","permalink":"/docs/es/20-R7/commands/zip-create-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-create-archive.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"zip-create-archive","title":"ZIP Create archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/es/20-R7/commands/folder"},"next":{"title":"ZIP Read archive","permalink":"/docs/es/20-R7/commands/zip-read-archive"}}'),s=i("785893"),d=i("250065");let l={id:"zip-create-archive",title:"ZIP Create archive",displayed_sidebar:"docs"},c=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,s.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,s.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileToZip"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folderToZip"}),(0,s.jsx)(n.td,{children:"4D.Folder"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipStructure"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto archivo o carpeta a comprimir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destinationFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Archivo de destino del archivo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Opci\xf3n ",(0,s.jsx)(n.em,{children:"folderToZip"}),": ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objeto estado"})]})]})]}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R3"}),(0,s.jsxs)(n.td,{children:["Adici\xf3n de las propiedades ",(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,s.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,s.jsx)(n.code,{children:".level"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"ZIP Create archive"})," crea un objeto archivo ZIP comprimido y devuelve el estado de la operaci\xf3n."]}),"\n",(0,s.jsx)(n.p,{children:"Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer par\xe1metro:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"fileToZip"}),": pase simplemente un ",(0,s.jsx)(n.code,{children:"4D.File"})," a comprimir."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"folderToZip"}),": pase un ",(0,s.jsx)(n.code,{children:"4D.Folder"})," para comprimir. En este caso, el par\xe1metro ",(0,s.jsx)(n.em,{children:"options"})," permite comprimir s\xf3lo el contenido de la carpeta (es decir, excluir la carpeta padre). Por defecto, ",(0,s.jsx)(n.code,{children:"ZIP Create archive"})," comprimir\xe1 la carpeta y su contenido, de modo que la operaci\xf3n de descompresi\xf3n volver\xe1 a crear una carpeta. Si desea que la operaci\xf3n de descompresi\xf3n restaure s\xf3lo el contenido de la carpeta, pase la constante ",(0,s.jsx)(n.code,{children:"ZIP Without enclosing folder"})," en el par\xe1metro ",(0,s.jsx)(n.em,{children:"options"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"zipStructure"}),": pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades est\xe1n disponibles para definir la estructura:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"compression"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"}),": Compresi\xf3n Deflate (por defecto)"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),": Compression LZMA"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compresi\xf3n XZ"}),": Compression XZ"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compresi\xf3n"}),": sin compresi\xf3n"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"level"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Nivel de compresi\xf3n. Valores posibles: 1 a 10. Un valor m\xe1s bajo producir\xe1 un archivo m\xe1s grande, mientras que un valor m\xe1s alto producir\xe1 un archivo m\xe1s peque\xf1o. Sin embargo, el nivel de compresi\xf3n influye en el rendimiento. Valores por defecto si se omite: ",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encryption"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["El cifrado a usar si se define una contrase\xf1a:",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES128"}),": encriptaci\xf3n AES utilizando llave de 128 bits."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES192"}),": encriptaci\xf3n AES utilizando llave de 192 bits."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption AES256"}),": encriptaci\xf3n AES utilizando llave de 256 bits (por defecto si se define la contrase\xf1a)."]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZIP Encryption none"}),": los datos no est\xe1n cifrados (por defecto si no se define una contrase\xf1a)"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contrase\xf1a"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Una contrase\xf1a a utilizar si se requiere encriptaci\xf3n."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hist\xf3rico"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:["una colecci\xf3n de objetos ",(0,s.jsx)(n.code,{children:"4D.File"})," o ",(0,s.jsx)(n.code,{children:"4D.Folder"})," o"]}),(0,s.jsx)(n.li,{children:"una colecci\xf3n de objetos con las siguientes propiedades:"}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Propiedad"}),(0,s.jsx)(n.td,{children:"Tipo"}),(0,s.jsx)(n.td,{children:"Descripci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"4D.Archivo o 4D.Carpeta"}),(0,s.jsx)(n.td,{children:"Archivo o Carpeta"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destino"}),(0,s.jsx)(n.td,{children:"Texto"}),(0,s.jsx)(n.td,{children:"(opcional) - Especifique una ruta de archivo relativa para cambiar la organizaci\xf3n del contenido del archivo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["(opcional) - ",(0,s.jsx)(n.code,{children:"ZIP Ignore invisible files"})," o 0 para comprimir todo el archivo"]})]})]})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"retrollamada"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsx)(n.td,{children:"Una f\xf3rmula de retrollamada que recibir\xe1 la progresi\xf3n de la compresi\xf3n (0 - 100) en $1."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"destinationFile"}),", pase un objeto ",(0,s.jsx)(n.code,{children:"4D.File"}),' que describa el archivo ZIP a crear (nombre, ubicaci\xf3n, etc.). Se aconseja utilizar la extensi\xf3n ".zip" si quiere que el archivo ZIP sea procesado autom\xe1ticamente por cualquier software.']}),"\n",(0,s.jsxs)(n.p,{children:["Una vez creado un archivo, puede utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/zip-read-archive",children:"ZIP Read archive"})," para acceder a \xe9l."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Status object"})}),"\n",(0,s.jsx)(n.p,{children:"El objeto status devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"statusText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Mensaje de error (si lo hay):",(0,s.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,s.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,s.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"status"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"True si el archivo se ha creado con \xe9xito, si no, false"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Para comprimir un archivo ",(0,s.jsx)(n.code,{children:"4D.File"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Para comprimir una carpeta ",(0,s.jsx)(n.code,{children:"4D.Folder"})," sin la carpeta en s\xed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Para comprimir una estructura de archivo ZIP con una contrase\xf1a y una barra de progreso:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //utilizamos el componente 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsxs)(n.p,{children:["Quiere pasar una colecci\xf3n de carpetas y archivos para comprimir al objeto ",(0,s.jsx)(n.em,{children:"zipStructure"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Desea utilizar un algoritmo de compresi\xf3n alternativo con un alto nivel de compresi\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //por defecto es 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/zip-read-archive",children:(0,s.jsx)(n.code,{children:"ZIP Read archive"})})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1640"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var r=i(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);