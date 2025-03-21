"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30800"],{545986:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/zip-create-archive","title":"ZIP Create archive","description":"ZIP Create archive ( fileToZip 4D.File ) 4D.Folder ; destinationFile Integer }) Object ; destinationFile Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/zip-create-archive.md","sourceDirName":"commands","slug":"/commands/zip-create-archive","permalink":"/docs/pt/commands/zip-create-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-create-archive.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"zip-create-archive","title":"ZIP Create archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/pt/commands/folder"},"next":{"title":"ZIP Read archive","permalink":"/docs/pt/commands/zip-read-archive"}}'),i=s("785893"),d=s("250065");let t={id:"zip-create-archive",title:"ZIP Create archive",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Exemplo 2",id:"exemplo-2-1",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"fileToZip"})," : 4D.File ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"folderToZip"})," : 4D.Folder ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"options"})," : Integer }) : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ZIP Create archive"})," ( ",(0,i.jsx)(n.em,{children:"zipStructure"})," : Object ; ",(0,i.jsx)(n.em,{children:"destinationFile"})," : 4D.File ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileToZip"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderToZip"}),(0,i.jsx)(n.td,{children:"4D. Folder"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipStructure"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objeto File ou Folder a comprimir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destinationFile"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Arquivo destino para o arquivo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Op\xe7\xe3o ",(0,i.jsx)(n.em,{children:"folderToZip"}),": ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Objeto de estado"})]})]})]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R3"}),(0,i.jsxs)(n.td,{children:["Adi\xe7\xe3o das propriedades ",(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),", ",(0,i.jsx)(n.code,{children:"ZIP Compression xy"}),", ",(0,i.jsx)(n.code,{children:".level"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," command creates a compressed ZIP archive object and returns the status of the operation."]}),"\n",(0,i.jsx)(n.p,{children:"You can pass a 4D. File, a 4D. Folder, or a zip structure object as first parameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fileToZip"}),": You simply pass a ",(0,i.jsx)(n.code,{children:"4D.File"})," to compress."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"folderToZip"}),": voc\xea passa um ",(0,i.jsx)(n.code,{children:"4D.Folder"})," para compactar. In this case, the ",(0,i.jsx)(n.em,{children:"options"})," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,i.jsx)(n.code,{children:"ZIP Create archive"})," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,i.jsx)(n.code,{children:"ZIP Without enclosing folder"})," constant in the ",(0,i.jsx)(n.em,{children:"options"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"zipStructure"}),": pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo est\xe3o dispon\xedveis para definir a estrutura:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propriedade"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": Deflate compression (default)"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": LZMA compression"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": XZ compression"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression none"}),": No compression"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"level"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["N\xedvel de compress\xe3o. Valores poss\xedveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O n\xedvel de compacta\xe7\xe3o tem um impacto na performance. Default values if omitted: ",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression standard"}),": 6"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression LZMA"}),": 4"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Compression XZ"}),": 4"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryption"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["The encryption to use if a password is set:",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES128"}),": AES encryption using 128-bit key."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES192"}),": AES encryption using 192-bit key."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption AES256"}),": AES encryption using 256-bit key (default if password is set)."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ZIP Encryption none"}),": Data is not encrypted (default if no password is set)"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"senha"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Uma senha a usar se a criptografia for necess\xe1ria."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"files"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.li,{children:["a collection of ",(0,i.jsx)(n.code,{children:"4D.File"})," or ",(0,i.jsx)(n.code,{children:"4D.Folder"})," objects or"]}),(0,i.jsx)(n.li,{children:"a collection of objects with the following properties:"}),(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Property"}),(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:"Description"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"4D.File or 4D.Folder"}),(0,i.jsx)(n.td,{children:"File or Folder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"destination"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"(optional) - Specify a relative filepath to change the organization of the contents of the archive"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsxs)(n.td,{children:["(optional) - ",(0,i.jsx)(n.code,{children:"ZIP Ignore invisible files"})," or 0 to compress all of the file"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"4D. Function"}),(0,i.jsx)(n.td,{children:"Uma f\xf3rmula de callback (retrochamada) que recebe o progresso da compacta\xe7\xe3o (0-100) em $1."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"destinationFile"})," parameter, pass a ",(0,i.jsx)(n.code,{children:"4D.File"}),' object describing the ZIP archive to create (name, location, etc.). \xc9 recomendado usar a extens\xe3o ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.']}),"\n",(0,i.jsxs)(n.p,{children:["Depois que um arquivo \xe9 criado, voc\xea pode usar o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/zip-read-archive",children:"ZIP Read archive"})," para acess\xe1-lo."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Status object"})}),"\n",(0,i.jsx)(n.p,{children:"O estado do objeto retornado cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propriedade"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Error message (if any):",(0,i.jsx)(n.li,{children:"Cannot open ZIP archive"}),(0,i.jsx)(n.li,{children:"Cannot create ZIP archive"}),(0,i.jsx)(n.li,{children:"Password is required for encryption"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"True se o arquivo for criado com sucesso, sen\xe3o false"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["Para compactar um ",(0,i.jsx)(n.code,{children:"4D.File"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Para comprimir uma ",(0,i.jsx)(n.code,{children:"4D.Folder"})," sem a pr\xf3pria pasta:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"myFormulaCompressingMethod"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsxs)(n.p,{children:["You want to pass a collection of folders and files to compress to the ",(0,i.jsx)(n.em,{children:"zipStructure"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Deseja utilizar um algoritmo de compress\xe3o alternativo com um elevado n\xedvel de compress\xe3o:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $destination : 4D. File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //padr\xe3o \xe9 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/zip-read-archive",children:(0,i.jsx)(n.code,{children:"ZIP Read archive"})})]}),"\n",(0,i.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1640"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(667294);let i={},d=r.createContext(i);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);