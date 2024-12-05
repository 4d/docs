"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10239"],{577079:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>a,assets:()=>h,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"API/FileHandleClass","title":"FileHandle","description":"The FileHandle class has functions that allow you to sequentially read from or append contents to an opened File object. A file handle can access any part of a document.","source":"@site/versioned_docs/version-20-R6/API/FileHandleClass.md","sourceDirName":"API","slug":"/API/FileHandleClass","permalink":"/docs/20-R6/API/FileHandleClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFileHandleClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"FileHandleClass","title":"FileHandle"},"sidebar":"docs","previous":{"title":"File","permalink":"/docs/20-R6/API/FileClass"},"next":{"title":"Folder","permalink":"/docs/20-R6/API/FolderClass"}}'),r=s("785893"),t=s("250065");let d={id:"FileHandleClass",title:"FileHandle"},l=void 0,h={},c=[{value:"Example",id:"example",level:3},{value:"FileHandle object",id:"filehandle-object",level:3},{value:".breakModeRead",id:"breakmoderead",level:2},{value:"Description",id:"description",level:4},{value:".breakModeWrite",id:"breakmodewrite",level:2},{value:"Description",id:"description-1",level:4},{value:".charset",id:"charset",level:2},{value:"Description",id:"description-2",level:4},{value:".eof",id:"eof",level:2},{value:"Description",id:"description-3",level:4},{value:".file",id:"file",level:2},{value:"Description",id:"description-4",level:4},{value:".getSize()",id:"getsize",level:2},{value:"Description",id:"description-5",level:4},{value:"See also",id:"see-also",level:4},{value:".mode",id:"mode",level:2},{value:"Description",id:"description-6",level:4},{value:".offset",id:"offset",level:2},{value:"Description",id:"description-7",level:4},{value:".readBlob()",id:"readblob",level:2},{value:"Description",id:"description-8",level:4},{value:"See also",id:"see-also-1",level:4},{value:".readLine()",id:"readline",level:2},{value:"Description",id:"description-9",level:4},{value:"See also",id:"see-also-2",level:4},{value:".readText()",id:"readtext",level:2},{value:"Description",id:"description-10",level:4},{value:"See also",id:"see-also-3",level:4},{value:".setSize()",id:"setsize",level:2},{value:"Description",id:"description-11",level:4},{value:"See also",id:"see-also-4",level:4},{value:".writeBlob()",id:"writeblob",level:2},{value:"Description",id:"description-12",level:4},{value:"See also",id:"see-also-5",level:4},{value:".writeLine()",id:"writeline",level:2},{value:"Description",id:"description-13",level:4},{value:"See also",id:"see-also-6",level:4},{value:".writeText()",id:"writetext",level:2},{value:"Description",id:"description-14",level:4},{value:"See also",id:"see-also-7",level:4}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FileHandle"})," class has functions that allow you to sequentially read from or append contents to an opened ",(0,r.jsx)(n.a,{href:"FileClass",children:(0,r.jsx)(n.code,{children:"File"})})," object. A file handle can access any part of a document."]}),"\n",(0,r.jsxs)(n.p,{children:["File handle objects are created with the ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["To read or write a whole document at once, you might consider using the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#gettext",children:"file.getText()"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#settext",children:"file.setText()"})," functions."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Thanks to the standard 4D object ",(0,r.jsx)(n.em,{children:"refcounting"}),", a file handle is automatically deleted when it is no longer referenced and thus, the requested ",(0,r.jsx)(n.a,{href:"FileClass",children:(0,r.jsx)(n.code,{children:"File"})})," object is automatically closed. Consequently, with file handles you don't need to worry about closing documents."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:['Object resources, such as documents, are released when no more references exist in memory, which occurs for example at the end of the method execution for local variables. If you want to "force" the release of object resources at any moment, you can ',(0,r.jsx)(n.a,{href:"/docs/20-R6/Concepts/object#resources",children:"nullify its references"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-code4d",children:'var $f : 4D.File\nvar $fhandle : 4D.FileHandle\n$f:=Folder(Database folder).file("example.txt")\n\n//Writing line by line from the start\n$fhandle:=$f.open("write")\n$text:="Hello World"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Writing line by line from the end\n$fhandle:=$f.open("append")\n$text:="Hello New World!"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Reading using a stop character and an object parameter\n$o:=New object()\n$o.mode:="read"\n$o.charset:="UTF-8"\n$o.breakModeRead:=Document with CRLF\n$stopChar:="!"\n$fhandle:=$f.open($o)\n$text:=$fhandle.readText($stopChar)\n\n//Reading line by line\n$lines:=New collection\n$fhandle:=$f.open("read")\nWhile (Not($fhandle.eof))\n	$lines.push($fhandle.readLine())\nEnd while\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"filehandle-object",children:"FileHandle object"}),"\n",(0,r.jsx)(n.p,{children:"File handle objects cannot be shared."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#breakmoderead",children:[(0,r.jsx)(n.strong,{children:".breakModeRead"})," : Text"]}),(0,r.jsx)(n.br,{}),"the processing mode for line breaks used when reading the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#breakmodewrite",children:[(0,r.jsx)(n.strong,{children:".breakModeWrite"})," : Text"]}),(0,r.jsx)(n.br,{}),"the processing mode for line breaks used when writing to the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#charset",children:[(0,r.jsx)(n.strong,{children:".charset"})," : Text"]}),(0,r.jsx)(n.br,{}),"the charset used when reading from or writing to the file"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#eof",children:[(0,r.jsx)(n.strong,{children:".eof"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"True is the ",(0,r.jsx)(n.code,{children:"offset"})," has reached the end of the file, and False otherwise"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#file",children:[(0,r.jsx)(n.strong,{children:".file"})," : 4D.File"]}),(0,r.jsx)(n.br,{}),"the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass",children:"4D.File"})," object on which the handle has been created"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getsize",children:[(0,r.jsx)(n.strong,{children:".getSize()"})," : Real "]}),(0,r.jsx)(n.br,{}),"returns the current size of the document, expressed in bytes"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#mode",children:[(0,r.jsx)(n.strong,{children:".mode"})," : Text"]}),(0,r.jsx)(n.br,{}),'the mode in which the file handle was created: "read", "write", or "append"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#offset",children:[(0,r.jsx)(n.strong,{children:".offset"})," : Real"]}),(0,r.jsx)(n.br,{}),"the current offset of the data stream (position inside the document)"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#readblob",children:[(0,r.jsx)(n.strong,{children:".readBlob"}),"( ",(0,r.jsx)(n.em,{children:"bytes"})," : Real ) : 4D.Blob "]}),(0,r.jsx)(n.br,{}),"returns a blob a ",(0,r.jsx)(n.em,{children:"bytes"})," size from the file, starting from the current position"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#readline",children:[(0,r.jsx)(n.strong,{children:".readLine()"})," : Text "]}),(0,r.jsx)(n.br,{}),"returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#readtext",children:[(0,r.jsx)(n.strong,{children:".readText"}),"( { ",(0,r.jsx)(n.em,{children:"stopChar"})," : Text } ) : Text "]}),(0,r.jsx)(n.br,{}),"returns text from the file, starting from the current position until the first ",(0,r.jsx)(n.em,{children:"stopChar"})," string is encountered (if passed) or the end of file is reached"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setsize",children:[(0,r.jsx)(n.strong,{children:".setSize"}),"( ",(0,r.jsx)(n.em,{children:"size"})," : Real )"]}),(0,r.jsx)(n.br,{}),"sets a new ",(0,r.jsx)(n.em,{children:"size"})," in bytes for the document"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writeblob",children:[(0,r.jsx)(n.strong,{children:".writeBlob"}),"( ",(0,r.jsx)(n.em,{children:"blob"})," : 4D.Blob ) "]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"blob"})," into the file, starting from the current position"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writeline",children:[(0,r.jsx)(n.strong,{children:".writeLine"}),"( ",(0,r.jsx)(n.em,{children:"lineOfText"})," : Text ) "]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"lineOfText"})," content at the current position and inserts an end-of-line delimiter"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#writetext",children:[(0,r.jsx)(n.strong,{children:".writeText"}),"( ",(0,r.jsx)(n.em,{children:"textToWrite"})," : Text )"]}),(0,r.jsx)(n.br,{}),"writes ",(0,r.jsx)(n.em,{children:"textToWrite"})," content at the current position and does not insert a final end-of-line delimiter"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"breakmoderead",children:".breakModeRead"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".breakModeRead"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property returns the processing mode for line breaks used when reading the file."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function (see ",(0,r.jsxs)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:["the ",(0,r.jsx)(n.code,{children:".open()"})," function"]}),' for more information). Default is "native".']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeRead"})," property always contains a text value, even if the ",(0,r.jsx)(n.code,{children:".open()"})," option was set using a number (constant)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"breakmodewrite",children:".breakModeWrite"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".breakModeWrite"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property returns the processing mode for line breaks used when writing to the file."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})})," function (see ",(0,r.jsxs)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:["the ",(0,r.jsx)(n.code,{children:".open()"})," function"]}),' for more information). Default is "native".']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".breakModeWrite"})," property always contains a text value, even if the ",(0,r.jsx)(n.code,{children:".open()"})," option was set using a number (constant)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"charset",children:".charset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".charset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".charset"})," property returns the charset used when reading from or writing to the file."]}),"\n",(0,r.jsxs)(n.p,{children:["The charset can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})}),' function. Default is "UTF-8".']}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"eof",children:".eof"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".eof"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".eof"})," property returns True is the ",(0,r.jsx)(n.code,{children:"offset"})," has reached the end of the file, and False otherwise."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"file",children:".file"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".file"})," : 4D.File"]}),"\n",(0,r.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".file"})," property returns the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass",children:"4D.File"})," object on which the handle has been created."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"getsize",children:".getSize()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getSize()"})," : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Size of the document in bytes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".getSize()"})," function returns the current size of the document, expressed in bytes."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This function returns the same value as the (",(0,r.jsx)(n.a,{href:"FileClass#size",children:".size"}),") property of the ",(0,r.jsx)(n.code,{children:"File"})," class."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#setsize",children:".setSize()"}),", ",(0,r.jsx)(n.a,{href:"FileClass#size",children:"file.size"})]}),"\n",(0,r.jsx)(n.h2,{id:"mode",children:".mode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".mode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".mode"}),' property returns the mode in which the file handle was created: "read", "write", or "append".']}),"\n",(0,r.jsxs)(n.p,{children:["The mode can be defined at the handle creation with the ",(0,r.jsx)(n.a,{href:"FileClass#open",children:(0,r.jsx)(n.code,{children:"file.open()"})}),' function. Default is "read".']}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"offset",children:".offset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".offset"})," : Real"]}),"\n",(0,r.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".offset"})," property returns the current offset of the data stream (position inside the document). The offset value is automatically updated after read and write operations."]}),"\n",(0,r.jsxs)(n.p,{children:["Setting the ",(0,r.jsx)(n.code,{children:".offset"})," will change its current value at the moment of the next read or write operation."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the passed value is negative, the ",(0,r.jsx)(n.code,{children:".offset"})," is set to the start of the file (zero)."]}),"\n",(0,r.jsxs)(n.li,{children:["If the passed value is higher than the size of the file,  the ",(0,r.jsx)(n.code,{children:".offset"})," is set to the end of the file (size of file)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read/write"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["When a file handle is created, the ",(0,r.jsx)(n.code,{children:".offset"})," value is a number of bytes. However, the unit of offset measurement differs according to the reading function: with ",(0,r.jsx)(n.a,{href:"#readblob",children:(0,r.jsx)(n.code,{children:"readBlob()"})}),", ",(0,r.jsx)(n.code,{children:".offset"})," is a number of bytes, whereas with ",(0,r.jsx)(n.a,{href:"#readtext",children:(0,r.jsx)(n.code,{children:"readText()"})}),"/",(0,r.jsx)(n.a,{href:"#readline",children:(0,r.jsx)(n.code,{children:"readLine()"})})," it is a number of characters. Depending on the file's character set, a character corresponds to one or more bytes. So, if you start reading with ",(0,r.jsx)(n.code,{children:"readBlob()"})," and then call ",(0,r.jsx)(n.code,{children:"readText()"}),", text reading will start at an inconsistent position. It is therefore essential to set the ",(0,r.jsx)(n.code,{children:".offset"})," property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. For example:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // Open a european text file using utf-16 encoding (two bytes per character)\n  // We want to read the first 10 characters as bytes, then the remaining as text.\n$fh:=File(\"/RESOURCES/sample_utf_16.txt\").open()\n  // read the 20 first bytes (i.e. 10 characters)\n$b:=$fh.readBlob(20) // $fh.offset=20\n  // then read all text skipping the first 10 characters we just read in previous blob\n  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.\n  // We need to translate it from bytes to characters.\n$fh.offset:=10 // ask to skip 10 utf-16 characters (20 bytes)\n$s:=$fh.readText()\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"readblob",children:".readBlob()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readBlob"}),"( ",(0,r.jsx)(n.em,{children:"bytes"})," : Real ) : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Number of bytes to be read"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Bytes read from the file"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readBlob()"})," function returns a blob a ",(0,r.jsx)(n.em,{children:"bytes"})," size from the file, starting from the current position ."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the last byte read."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-1",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#writeblob",children:".writeBlob()"})}),"\n",(0,r.jsx)(n.h2,{id:"readline",children:".readLine()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readLine()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Line of text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readLine()"})," function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})}),") is updated."]}),"\n",(0,r.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["This function assumes that the ",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})})," property is a number of characters, not a number of bytes. For more information, see the ",(0,r.jsx)(n.a,{href:"#offset",children:".offset description"}),"."]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-2",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#readtext",children:".readText()"}),", ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})]}),"\n",(0,r.jsx)(n.h2,{id:"readtext",children:".readText()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".readText"}),"( { ",(0,r.jsx)(n.em,{children:"stopChar"})," : Text } ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"stopChar"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Character(s) at which to stop reading"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Text from the file"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".readText()"})," function returns text from the file, starting from the current position until the first ",(0,r.jsx)(n.em,{children:"stopChar"})," string is encountered (if passed) or the end of file is reached."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"stopChar"})," character string is not included in the returned text. If you omit the ",(0,r.jsx)(n.em,{children:"stopChar"})," parameter, the whole document text is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is placed just after the ",(0,r.jsx)(n.em,{children:"stopChar"})," string."]}),"\n",(0,r.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["This function assumes that the ",(0,r.jsx)(n.a,{href:"#offset",children:(0,r.jsx)(n.code,{children:".offset"})})," property is a number of characters, not a number of bytes. For more information, see the ",(0,r.jsx)(n.a,{href:"#offset",children:".offset description"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"stopChar"})," parameter is passed and not found, ",(0,r.jsx)(n.code,{children:".readText()"})," returns an empty string and the ",(0,r.jsx)(n.a,{href:"#offset",children:".offset"})," is left untouched."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-3",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#readline",children:".readLine()"}),", ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})]}),"\n",(0,r.jsx)(n.h2,{id:"setsize",children:".setSize()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setSize"}),"( ",(0,r.jsx)(n.em,{children:"size"})," : Real )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"New size of the document in bytes"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setSize()"})," function sets a new ",(0,r.jsx)(n.em,{children:"size"})," in bytes for the document."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"size"})," value is less than the current document size, the document content is truncated from the beginning to get the new ",(0,r.jsx)(n.em,{children:"size"})," ."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-4",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#getsize",children:".getSize()"}),", ",(0,r.jsx)(n.a,{href:"FileClass#size",children:"file.size"})]}),"\n",(0,r.jsx)(n.h2,{id:"writeblob",children:".writeBlob()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeBlob"}),"( ",(0,r.jsx)(n.em,{children:"blob"})," : 4D.Blob )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"blob"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"BlobClass",children:"4D.Blob"})}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Blob to write in the file"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-12",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeBlob()"})," function writes ",(0,r.jsx)(n.em,{children:"blob"})," into the file, starting from the current position ."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the last byte written."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-5",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#readblob",children:".readBlob()"})}),"\n",(0,r.jsx)(n.h2,{id:"writeline",children:".writeLine()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeLine"}),"( ",(0,r.jsx)(n.em,{children:"lineOfText"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"lineOfText"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Text to write"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-13",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeLine()"})," function writes ",(0,r.jsx)(n.em,{children:"lineOfText"})," content at the current position and inserts an end-of-line delimiter (unlike the ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})," function). By default, a native end-of-line delimiter is used, but you can define another delimiter when ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:"opening the file handle"})," by setting the ",(0,r.jsx)(n.a,{href:"#breakmodewrite",children:(0,r.jsx)(n.code,{children:".breakModeWrite"})})," property."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the end-of-line delimiter."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-6",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#breakmodewrite",children:".breakModeWrite"}),", ",(0,r.jsx)(n.a,{href:"#readline",children:".readLine()"}),", ",(0,r.jsx)(n.a,{href:"#writetext",children:".writeText()"})]}),"\n",(0,r.jsx)(n.h2,{id:"writetext",children:".writeText()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".writeText"}),"( ",(0,r.jsx)(n.em,{children:"textToWrite"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"textToWrite"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Text to write"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-14",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".writeText()"})," function writes ",(0,r.jsx)(n.em,{children:"textToWrite"})," content at the current position and does not insert a final end-of-line delimiter (unlike the ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})," function). By default, the native delimiter is used, but you can define another delimiter when ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/FileClass#open",children:"opening the file handle"})," by setting the ",(0,r.jsx)(n.a,{href:"#breakmodewrite",children:(0,r.jsx)(n.code,{children:".breakModeWrite"})})," property."]}),"\n",(0,r.jsxs)(n.p,{children:["When this function is executed, the current position (",(0,r.jsx)(n.a,{href:"#offset",children:".offset"}),") is updated after the next end-of-line delimiter."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also-7",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#breakmodewrite",children:".breakModeWrite"}),", ",(0,r.jsx)(n.a,{href:"#readtext",children:".readText()"}),", ",(0,r.jsx)(n.a,{href:"#writeline",children:".writeLine()"})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);