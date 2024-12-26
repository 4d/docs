"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9588"],{960600:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"API/ZipArchiveClass","title":"ZIPArchive","description":"A 4D ZIP archive is a File or Folder object containing one or more files or folders, which are compressed to be smaller than their original size. Esses arquivos s\xe3o criados com uma extens\xe3o \\".zip\\" e podem ser usados para poupar espa\xe7o em disco ou transferir arquivos via meios que tenham limita\xe7\xf5es de tamanho (por exemplo, um email ou por uma rede).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/API/ZipArchiveClass.md","sourceDirName":"API","slug":"/API/ZipArchiveClass","permalink":"/docs/pt/20-R6/API/ZipArchiveClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"ZipArchiveClass","title":"ZIPArchive"},"sidebar":"docs","previous":{"title":"WebSocketServer","permalink":"/docs/pt/20-R6/API/WebSocketServerClass"},"next":{"title":"ZIPFile","permalink":"/docs/pt/20-R6/API/ZipFileClass"}}'),i=r("785893"),o=r("250065");let d={id:"ZipArchiveClass",title:"ZIPArchive"},l=void 0,t={},c=[{value:"Exemplo",id:"exemplo",level:3},{value:"Resumo",id:"resumo",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo",id:"exemplo-4",level:4},{value:"Exemplo 2",id:"exemplo-2-1",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:"Exemplo",id:"exemplo-5",level:4},{value:".root",id:"root",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["A 4D ZIP archive is a ",(0,i.jsx)(n.code,{children:"File"})," or ",(0,i.jsx)(n.code,{children:"Folder"}),' object containing one or more files or folders, which are compressed to be smaller than their original size. Esses arquivos s\xe3o criados com uma extens\xe3o ".zip" e podem ser usados para poupar espa\xe7o em disco ou transferir arquivos via meios que tenham limita\xe7\xf5es de tamanho (por exemplo, um email ou por uma rede).']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Voc\xea cria um arquivo ZIP 4D com o comando ",(0,i.jsx)(n.a,{href:"#zip-create-archive",children:"ZIP Create archive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["4D ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/ZipFileClass",children:(0,i.jsx)(n.code,{children:"ZIPFile"})})," and ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/ZipFolderClass",children:(0,i.jsx)(n.code,{children:"ZIPFolder"})})," instances are available through the ",(0,i.jsx)(n.a,{href:"#root",children:(0,i.jsx)(n.code,{children:"root"})})," property (",(0,i.jsx)(n.code,{children:"ZIPFolder"}),") of the object returned by ",(0,i.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," command."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar e ver os conte\xfados de um objeto ZIP file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $path; $archive : 4D. File\nvar $zipFile : 4D. ZipFile\nvar $zipFolder : 4D. ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // store the zip main folder\n$zipFile:=$zipFolder.files()[0] //read the first zipped file If($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n'})}),"\n",(0,i.jsx)(n.h3,{id:"resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#root",children:[(0,i.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),(0,i.jsx)(n.br,{}),"a virtual folder providing access to the contents of the ZIP archive"]})})})]}),"\n",(0,i.jsx)(n.h2,{id:"zip-create-archive",children:"ZIP Create archive"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R3"}),(0,i.jsxs)(n.td,{children:["Adi\xe7\xe3o das propriedades ",(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,i.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,i.jsx)(n.code,{children:".level"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileToZip"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderToZip"}),(0,i.jsx)(n.td,{children:"4D. Folder"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipStructure"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationFile"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Arquivo destino para o arquivo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsxs)(n.td,{children:["Op\xe7\xe3o ",(0,i.jsx)(n.em,{children:"folderToZip"}),": ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto de estado"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," command creates a compressed ZIP archive object and returns the status of the operation."]}),"\n",(0,i.jsx)(n.p,{children:"You can pass a 4D. File, a 4D. Folder, or a zip structure object as first parameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fileToZip"}),": You simply pass a ",(0,i.jsx)(n.code,{children:"4D.File"})," to compress."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"folderToZip"}),": voc\xea passa um ",(0,i.jsx)(n.code,{children:"4D.Folder"})," para compactar. In this case, the ",(0,i.jsx)(n.em,{children:"options"})," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})," constant in the ",(0,i.jsx)(n.em,{children:"options"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipStructure"}),": pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo est\xe3o dispon\xedveis para definir a estrutura:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propriedade"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": Deflate compression (default)"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": LZMA compression"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": XZ compression"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression none"}),": No compression"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"level"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["N\xedvel de compress\xe3o. Valores poss\xedveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O n\xedvel de compacta\xe7\xe3o tem um impacto na performance. Default values if omitted: ",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryption"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["The encryption to use if a password is set:",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES128"}),": AES encryption using 128-bit key."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES192"}),": AES encryption using 192-bit key."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES256"}),": AES encryption using 256-bit key (default if password is set)."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption none"}),": Data is not encrypted (default if no password is set)"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"senha"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Uma senha a usar se a criptografia for necess\xe1ria."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"files"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:["a collection of ",(0,i.jsx)(n.code,{children:"4D.File"})," or ",(0,i.jsx)(n.code,{children:"4D.Folder"})," objects or"]}),(0,i.jsx)(n.li,{children:"a collection of objects with the following properties:"}),(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Property"}),(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:"Description"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"4D.File or 4D.Folder"}),(0,i.jsx)(n.td,{children:"File or Folder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destination"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"(optional) - Specify a relative filepath to change the organization of the contents of the archive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsxs)(n.td,{children:["(optional) - ",(0,i.jsx)(n.code,{children:"ZIP Ignore invisible files"})," or 0 to compress all of the file"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"4D. Function"}),(0,i.jsx)(n.td,{children:"Uma f\xf3rmula de callback (retrochamada) que recebe o progresso da compacta\xe7\xe3o (0-100) em $1."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"destinationFile"})," parameter, pass a ",(0,i.jsx)(n.code,{children:"4D.File"}),' object describing the ZIP archive to create (name, location, etc.). \xc9 recomendado usar a extens\xe3o ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.']}),"\n",(0,i.jsxs)(n.p,{children:["Once an archive is created, you can use the ",(0,i.jsx)(n.a,{href:"#zip-read-archive",children:"ZIP Read archive"})," command to access it."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Status object"})}),"\n",(0,i.jsx)(n.p,{children:"O estado do objeto retornado cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propriedade"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Error message (if any):",(0,i.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,i.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,i.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"True se o arquivo for criado com sucesso, sen\xe3o false"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["Para compactar um ",(0,i.jsx)(n.code,{children:"4D.File"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Para comprimir uma ",(0,i.jsx)(n.code,{children:"4D.Folder"})," sem a pr\xf3pria pasta:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo"}),"\n",(0,i.jsxs)(n.p,{children:["You want to pass a collection of folders and files to compress to the ",(0,i.jsx)(n.em,{children:"zipStructure"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Deseja utilizar um algoritmo de compress\xe3o alternativo com um elevado n\xedvel de compress\xe3o:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D. File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //padr\xe3o \xe9 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"zip-read-archive",children:"ZIP Read archive"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Arquivos Zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"senha"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Senha do arquivo ZIP, se houver"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto arquivo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," command retrieves the contents of ",(0,i.jsx)(n.em,{children:"zipFile"})," and returns it as a ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," object."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["O comando n\xe3o descompacta o arquivo ZIP, apenas oferece uma vis\xe3o de seus conte\xfados. To extract the contents of an archive, you need to use methods such as ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/Document#copyto",children:"file.copyTo()"})," or ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pass a ",(0,i.jsx)(n.code,{children:"4D.File"})," object referencing the compressed ZIP archive in the ",(0,i.jsx)(n.em,{children:"zipFile"})," parameter. The target archive file will be opened until the ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"zipFile"})," is password protected, you need to use the optional ",(0,i.jsx)(n.em,{children:"password"})," parameter to provide a password. Se uma senha for exigida mas n\xe3o for passada, quando tentar ler os conte\xfados do arquivo um erro ser\xe1 gerado."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Objeto arquivo"})}),"\n",(0,i.jsxs)(n.p,{children:["O objeto retornado ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," cont\xe9m uma \xfanica propriedade ",(0,i.jsx)(n.a,{href:"#root",children:(0,i.jsx)(n.code,{children:"root"})})," cujo valor \xe9 um objeto ",(0,i.jsx)(n.code,{children:"4D.ZipFolder"}),". Esta pasta descreve todo o conte\xfado do ficheiro ZIP."]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-5",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar e ver os conte\xfados de um objeto ZIP file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar a lista dos arquivos e pastas no arquivo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Para extrair da pasta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para ler todos os conte\xfados de um arquivo sem extra\xed-lo da pasta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"root",children:".root"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".root"})," : 4D.ZipFolder"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".root"})," property contains a virtual folder providing access to the contents of the ZIP archive."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"root"})," folder and its contents can be manipulated with the ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/ZipFileClass",children:"ZipFile"})," and ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/ZipFolderClass",children:"ZipFolder"})," functions and properties."]}),"\n",(0,i.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,i.jsx)(n.strong,{children:"somente leitura"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let i={},o=s.createContext(i);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);