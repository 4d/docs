"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2593],{859733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(474848),i=s(28453);const d={id:"FileHandleClass",title:"FileHandle"},t=void 0,l={id:"API/FileHandleClass",title:"FileHandle",description:"The FileHandle class has functions that allow you to sequentially read from or append contents to an opened File object. O manuseamento de um arquivo pode acessar a qualquer parte de um documento.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/FileHandleClass.md",sourceDirName:"API",slug:"/API/FileHandleClass",permalink:"/docs/pt/API/FileHandleClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFileHandleClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"FileHandleClass",title:"FileHandle"},sidebar:"docs",previous:{title:"File",permalink:"/docs/pt/API/FileClass"},next:{title:"Folder",permalink:"/docs/pt/API/FolderClass"}},h={},c=[{value:"Exemplo",id:"exemplo",level:3},{value:"Objeto FileHandle",id:"objeto-filehandle",level:3},{value:".breakModeRead",id:"breakmoderead",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".breakModeWrite",id:"breakmodewrite",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".charset",id:"charset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".eof",id:"eof",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".file",id:"file",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".getSize()",id:"getsize",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:".mode",id:"mode",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".offset",id:"offset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".readBlob()",id:"readblob",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-1",level:4},{value:".readLine()",id:"readline",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-2",level:4},{value:".readText()",id:"readtext",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-10",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-3",level:4},{value:".setSize()",id:"setsize",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-11",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-4",level:4},{value:".writeBlob()",id:"writeblob",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-12",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-5",level:4},{value:".writeLine()",id:"writeline",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-13",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-6",level:4},{value:".writeText()",id:"writetext",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-14",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m-7",level:4}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FileHandle"})," class has functions that allow you to sequentially read from or append contents to an opened ",(0,r.jsx)(n.a,{href:"FileClass",children:(0,r.jsx)(n.code,{children:"File"})})," object. O manuseamento de um arquivo pode acessar a qualquer parte de um documento."]}),"\n",(0,r.jsxs)(n.p,{children:["File handle objects are created with the ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["To read or write a whole document at once, you might consider using the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#gettext",children:"file.getText()"})," and ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#settext",children:"file.setText()"})," functions."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Thanks to the standard 4D object ",(0,r.jsx)(n.em,{children:"refcounting"}),", a file handle is automatically deleted when it is no longer referenced and thus, the requested ",(0,r.jsx)(n.a,{href:"FileClass",children:(0,r.jsx)(n.code,{children:"File"})})," object is automatically closed. Consequentemente, com os handles dos arquivos n\xe3o precisa de se preocupar com o encerramento de documentos."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:['Os recursos de um objeto, como documentos, s\xe3o liberados quando n\xe3o existem mais refer\xeancias na mem\xf3ria, que acontece, por exemplo, no final do m\xe9todo de execu\xe7\xe3o das vari\xe1veis locais. If you want to "force" the release of object resources at any moment, you can ',(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/object#resources",children:"nullify its references"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-code4d",children:'var $f : 4D.File\nvar $fhandle : 4D.FileHandle\n$f:=Folder(Database folder).file("example.txt")\n\n//Writing line by line from the start\n$fhandle:=$f.open("write")\n$text:="Hello World"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Writing line by line from the end\n$fhandle:=$f.open("append")\n$text:="Hello New World!"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Reading using a stop character and an object parameter\n$o:=New object()\n$o.mode:="read"\n$o.charset:="UTF-8"\n$o.breakModeRead:=Document with CRLF\n$stopChar:="!"\n$fhandle:=$f.open($o)\n$text:=$fhandle.readText($stopChar)\n\n//Reading line by line\n$lines:=New collection\n$fhandle:=$f.open("read")\nWhile (Not($fhandle.eof))\n\t$lines.push($fhandle.readLine())\nEnd while\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"objeto-filehandle",children:"Objeto FileHandle"}),"\n",(0,r.jsx)(n.p,{children:"Os objectos handle de arquivos n\xe3o podem ser partilhados."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#breakmoderead",children:[(0,r.jsx)(n.strong,{children:".breakModeRead"})," : Text"]}),(0,r.jsx)(n.br,{}),"the processing mode for line breaks used when reading the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#breakmodewrite",children:[(0,r.jsx)(n.strong,{children:".breakModeWrite"})," : Text"]}),(0,r.jsx)(n.br,{}),"the processing mode for line breaks used when writing to the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#charset",children:[(0,r.jsx)(n.strong,{children:".charset"})," : Text"]}),(0,r.jsx)(n.br,{}),"the charset used when reading from or writing to the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#eof",children:[(0,r.jsx)(n.strong,{children:".eof"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"True is the ",(0,r.jsx)(n.code,{children:"offset"})," has reached the end of the file, and False otherwise"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#file",children:[(0,r.jsx)(n.strong,{children:".file"})," : 4D.File"]}),(0,r.jsx)(n.br,{}),"the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass",children:"4D.File"})," object on which the handle has been created"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getsize",children:[(0,r.jsx)(n.strong,{children:".getSize()"})," : Real "]}),(0,r.jsx)(n.br,{}),"returns the current size of the document, expressed in bytes"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#mode",children:[(0,r.jsx)(n.strong,{children:".mode"})," : Text"]}),(0,r.jsx)(n.br,{}),'the mode in which the file handle was created: "read", "write", or "append"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#offset",children:[(0,r.jsx)(n.strong,{children:".offset"})," : Real"]}),(0,r.jsx)(n.br,{}),"the current offset of the data stream (position inside the document)"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.strong,{children:".readBlob"}),"( ",(0,r.jsx)(n.em,{children:"bytes"})," : Real ) : ",(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})," ](#readblob)",(0,r.jsx)(n.br,{}),"returns a blob a ",(0,r.jsx)(n.em,{children:"bytes"})," size from the file, starting from the current position"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#readline",children:[(0,r.jsx)(n.strong,{children:".readLine()"})," : Text "]}),(0,r.jsx)(n.br,{}),"returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#readtext",children:[(0,r.jsx)(n.strong,{children:".readText"}),"( { ",(0,r.jsx)(n.em,{children:"stopChar"})," : Text } ) : Text "]}),(0,r.jsx)(n.br,{}),"returns text from the file, starting from the current position until the first ",(0,r.jsx)(n.em,{children:"stopChar"})," string is encountered (if passed) or the end of file is reached"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setsize",children:[(0,r.jsx)(n.strong,{children:".setSize"}),"( ",(0,r.jsx)(n.em,{children:"size"})," : Real )"]}),(0,r.jsx)(n.br,{}),"sets a new ",(0,r.jsx)(n.em,{children:"size"})," in bytes for the document"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writeblob",children:[(0,r.jsx)(n.strong,{children:".writeBlob"}),"( ",(0,r.jsx)(n.em,{children:"blob"})," : 4D.Blob ) "]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"blob"})," into the file, starting from the current position"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writeline",children:[(0,r.jsx)(n.strong,{children:".writeLine"}),"( ",(0,r.jsx)(n.em,{children:"lineOfText"})," : Text ) "]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"lineOfText"})," content at the current position and inserts an end-of-line delimiter"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writetext",children:[(0,r.jsx)(n.strong,{children:".writeText"}),"( ",(0,r.jsx)(n.em,{children:"textToWrite"})," : Text )"]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"textToWrite"})," content at the current position and does not insert a final end-of-line delimiter"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"breakmoderead",children:".breakModeRead"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".breakModeRead"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property returns the processing mode for line breaks used when reading the file."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function (see ",(0,r.jsxs)(n.a,{href:"/docs/pt/API/FileClass#open",children:["the ",(0,r.jsx)(n.code,{children:".open()"})," function"]}),' for more information). O padr\xe3o \xe9 "nativo".']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property always contains a text value, even if the ",(0,r.jsx)(n.code,{children:".open()"})," option was set using a number (constant)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"breakmodewrite",children:".breakModeWrite"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".breakModeWrite"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property returns the processing mode for line breaks used when writing to the file."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function (see ",(0,r.jsxs)(n.a,{href:"/docs/pt/API/FileClass#open",children:["the ",(0,r.jsx)(n.code,{children:".open()"})," function"]}),' for more information). O padr\xe3o \xe9 "nativo".']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property always contains a text value, even if the ",(0,r.jsx)(n.code,{children:".open()"})," option was set using a number (constant)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"charset",children:".charset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".charset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".charset"})," property returns the charset used when reading from or writing to the file."]}),"\n",(0,r.jsxs)(n.p,{children:["O conjunto de caracteres pode ser definido na cria\xe7\xe3o do identificador com a fun\xe7\xe3o ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})}),'. Por padr\xe3o \xe9 "UTF-8".']}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"eof",children:".eof"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".eof"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".eof"})," property returns True is the ",(0,r.jsx)(n.code,{children:"offset"})," has reached the end of the file, and False otherwise."]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"file",children:".file"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".file"})," : 4D.File"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".file"})," property returns the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass",children:"4D.File"})," object on which the handle has been created."]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"getsize",children:".getSize()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getSize()"})," : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Tamanho do documento em bytes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".getSize()"})," function returns the current size of the document, expressed in bytes."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This function returns the same value as the (",(0,r.jsx)(n.a,{href:"FileClass#size",children:".size"}),") property of the ",(0,r.jsx)(n.code,{children:"File"})," class."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#setsize",children:".setSize()"}),", ",(0,r.jsx)(n.a,{href:"FileClass#size",children:"file.size"})]}),"\n",(0,r.jsx)(n.h2,{id:"mode",children:".mode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".mode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".mode"}),' property returns the mode in which the file handle was created: "read", "write", or "append".']}),"\n",(0,r.jsxs)(n.p,{children:["O modo pode ser definido na cria\xe7\xe3o do identificador com a fun\xe7\xe3o ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})}),'. O padr\xe3o \xe9 "read".']}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"offset",children:".offset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".offset"})," : Real"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".offset"})," property returns the current offset of the data stream (position inside the document). O valor do offset \xe9 automaticamente atualizado ap\xf3s as opera\xe7\xf5es de leitura e escrita."]}),"\n",(0,r.jsxs)(n.p,{children:["Setting the ",(0,r.jsx)(n.code,{children:".offset"})," will change its current value at the moment of the next read or write operation."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Se o valor passado for negativo, o ",(0,r.jsx)(n.code,{children:".offset"})," \xe9 definido para o in\xedcio do arquivo (zero)."]}),"\n",(0,r.jsxs)(n.li,{children:["If the passed value is higher than the size of the file,  the ",(0,r.jsx)(n.code,{children:".offset"})," is set to the end of the file (size of file)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"leitura/escrita"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["Quando um identificador de arquivo \xe9 criado, o valor ",(0,r.jsx)(n.code,{children:".offset"})," \xe9 um n\xfamero de bytes. However, the unit of offset measurement differs according to the reading function: with ",(0,r.jsx)(n.a,{href:"#readblob",children:(0,r.jsx)(n.code,{children:"readBlob()"})}),", ",(0,r.jsx)(n.code,{children:".offset"})," is a number of bytes, whereas with ",(0,r.jsx)(n.a,{href:"#readtext",children:(0,r.jsx)(n.code,{children:"readText()"})}),"/",(0,r.jsx)(n.a,{href:"#readline",children:(0,r.jsx)(n.code,{children:"readLine()"})})," it is a number of characters. Dependendo do conjunto de caracteres do arquivo, um caractere corresponde a um ou mais bytes. So, if you start reading with ",(0,r.jsx)(n.code,{children:"readBlob()"})," and then call ",(0,r.jsx)(n.code,{children:"readText()"}),", text reading will start at an inconsistent position. It is therefore essential to set the ",(0,r.jsx)(n.code,{children:".offset"})," property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. Por exemplo:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // Open a european text file using utf-16 encoding (two bytes per character)\n  // We want to read the first 10 characters as bytes, then the remaining as text.\n$fh:=File(\"/RESOURCES/sample_utf_16.txt\").open()\n  // read the 20 first bytes (i.e. 10 characters)\n$b:=$fh.readBlob(20) // $fh.offset=20\n  // then read all text skipping the first 10 characters we just read in previous blob\n  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.\n  // We need to translate it from bytes to characters.\n$fh.offset:=10 // ask to skip 10 utf-16 characters (20 bytes)\n$s:=$fh.readText()\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"readblob",children:".readBlob()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readBlob"}),"( ",(0,r.jsx)(n.em,{children:"bytes"})," : Real ) : ",(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"N\xfamero de bytes a ler"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Bytes lidos do arquivo"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readBlob()"})," function returns a blob a ",(0,r.jsx)(n.em,{children:"bytes"})," size from the file, starting from the current position ."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the last byte read."]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-1",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#writeblob",children:".writeBlob()"})}),"\n",(0,r.jsx)(n.h2,{id:"readline",children:".readLine()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readLine()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Linha de texto"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-9",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readLine()"})," function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})}),") is updated."]}),"\n",(0,r.jsx)(n.admonition,{title:"Aviso",type:"caution",children:(0,r.jsxs)(n.p,{children:["This function assumes that the ",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})})," property is a number of characters, not a number of bytes. Para obter mais informa\xe7\xf5es, consulte ",(0,r.jsx)(n.a,{href:"#offset",children:"descri\xe7\xe3o de .offset"}),"."]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Quando esta fun\xe7\xe3o \xe9 executada pela primeira vez num handle de arquivo, todo o conte\xfado do documento \xe9 carregado num buffer."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-2",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#readtext",children:".readText()"}),", ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})]}),"\n",(0,r.jsx)(n.h2,{id:"readtext",children:".readText()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readText"}),"( { ",(0,r.jsx)(n.em,{children:"stopChar"})," : Text } ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"stopChar"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Caracter no qual parar a leitura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Texto do arquivo"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-10",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readText()"})," function returns text from the file, starting from the current position until the first ",(0,r.jsx)(n.em,{children:"stopChar"})," string is encountered (if passed) or the end of file is reached."]}),"\n",(0,r.jsxs)(n.p,{children:["A string de caracteres ",(0,r.jsx)(n.em,{children:"stopChar"})," n\xe3o est\xe1 inclu\xedda no texto devolvido. Se omitir o par\xe2metro ",(0,r.jsx)(n.em,{children:"stopChar"}),", todo o texto do documento \xe9 devolvido."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is placed just after the ",(0,r.jsx)(n.em,{children:"stopChar"})," string."]}),"\n",(0,r.jsx)(n.admonition,{title:"Aviso",type:"caution",children:(0,r.jsxs)(n.p,{children:["This function assumes that the ",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})})," property is a number of characters, not a number of bytes. Para obter mais informa\xe7\xf5es, consulte ",(0,r.jsx)(n.a,{href:"#offset",children:"descri\xe7\xe3o de .offset"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"stopChar"})," parameter is passed and not found, ",(0,r.jsx)(n.code,{children:".readText()"})," returns an empty string and the ",(0,r.jsx)(n.a,{href:"#offset",children:".offset"})," is left untouched."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Quando esta fun\xe7\xe3o \xe9 executada pela primeira vez num handle de arquivo, todo o conte\xfado do documento \xe9 carregado num buffer."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-3",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#readline",children:".readLine()"}),", ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})]}),"\n",(0,r.jsx)(n.h2,{id:"setsize",children:".setSize()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setSize"}),"( ",(0,r.jsx)(n.em,{children:"size"})," : Real )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Novo tamanho do documento em bytes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-11",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setSize()"})," function sets a new ",(0,r.jsx)(n.em,{children:"size"})," in bytes for the document."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"size"})," value is less than the current document size, the document content is truncated from the beginning to get the new ",(0,r.jsx)(n.em,{children:"size"})," ."]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-4",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#getsize",children:".getSize()"}),", ",(0,r.jsx)(n.a,{href:"FileClass#size",children:"file.size"})]}),"\n",(0,r.jsx)(n.h2,{id:"writeblob",children:".writeBlob()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeBlob"}),"( ",(0,r.jsx)(n.em,{children:"blob"})," : 4D.Blob )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"blob"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Blob para escrever no arquivo"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-12",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeBlob()"})," function writes ",(0,r.jsx)(n.em,{children:"blob"})," into the file, starting from the current position ."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the last byte written."]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-5",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#readblob",children:".readBlob()"})}),"\n",(0,r.jsx)(n.h2,{id:"writeline",children:".writeLine()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeLine"}),"( ",(0,r.jsx)(n.em,{children:"lineOfText"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"lineOfText"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Texto para string"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-13",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeLine()"})," function writes ",(0,r.jsx)(n.em,{children:"lineOfText"})," content at the current position and inserts an end-of-line delimiter (unlike the ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})," function). By default, a native end-of-line delimiter is used, but you can define another delimiter when ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#open",children:"opening the file handle"})," by setting the ",(0,r.jsx)(n.a,{href:"#breakmodewrite",children:(0,r.jsx)(n.code,{children:".breakModeWrite"})})," property."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the end-of-line delimiter."]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-6",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#breakmodewrite",children:".breakModeWrite"}),", ",(0,r.jsx)(n.a,{href:"#readline",children:".readLine()"}),", ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})]}),"\n",(0,r.jsx)(n.h2,{id:"writetext",children:".writeText()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeText"}),"( ",(0,r.jsx)(n.em,{children:"textToWrite"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"textToWrite"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Texto para string"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-14",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeText()"})," function writes ",(0,r.jsx)(n.em,{children:"textToWrite"})," content at the current position and does not insert a final end-of-line delimiter (unlike the ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})," function). By default, the native delimiter is used, but you can define another delimiter when ",(0,r.jsx)(n.a,{href:"/docs/pt/API/FileClass#open",children:"opening the file handle"})," by setting the ",(0,r.jsx)(n.a,{href:"#breakmodewrite",children:(0,r.jsx)(n.code,{children:".breakModeWrite"})})," property."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the next end-of-line delimiter."]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m-7",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#breakmodewrite",children:".breakModeWrite"}),", ",(0,r.jsx)(n.a,{href:"#readtext",children:".readText()"}),", ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(296540);const i={},d=r.createContext(i);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);