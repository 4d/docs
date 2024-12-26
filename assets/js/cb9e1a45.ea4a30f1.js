"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52318"],{351058:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/receive-packet","title":"RECEIVE PACKET","description":"RECEIVE PACKET ( {docRef ;} receiveVar ; stopChar | numBytes )","source":"@site/versioned_docs/version-20-R7/commands-legacy/receive-packet.md","sourceDirName":"commands-legacy","slug":"/commands/receive-packet","permalink":"/docs/commands/receive-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-packet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-packet","title":"RECEIVE PACKET","slug":"/commands/receive-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE BUFFER","permalink":"/docs/commands/receive-buffer"},"next":{"title":"RECEIVE RECORD","permalink":"/docs/commands/receive-record"}}'),s=t("785893"),a=t("250065");let i={id:"receive-packet",title:"RECEIVE PACKET",slug:"/commands/receive-packet",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RECEIVE PACKET"})," ( {",(0,s.jsx)(n.em,{children:"docRef"})," ;} ",(0,s.jsx)(n.em,{children:"receiveVar"})," ; stopChar | numBytes )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docRef"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Document reference number, or Current channel (serial port or document)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"receiveVar"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Variable to receive data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stopChar | numBytes"}),(0,s.jsx)(n.td,{children:"String, Longint"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Character(s) at which to stop receiving, or Number of bytes to receive"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RECEIVE PACKET"})," reads characters from a serial port or from a document."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"docRef"})," is specified, this command retrieves data from a document opened using ",(0,s.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),". If ",(0,s.jsx)(n.em,{children:"docRef"})," is omitted, this command retrieves data from the serial port or the document opened using ",(0,s.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Whatever the source, the characters read are returned in ",(0,s.jsx)(n.em,{children:"receiveVar"}),", which must be a Text, String or BLOB variable. If the characters have been sent by the ",(0,s.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"})," command, the type must correspond to that of the packet sent."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When the package received is of the BLOB type, the command does not take into account any character set defined by the ",(0,s.jsx)(n.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})," command. The BLOB is returned without any modification."]}),"\n",(0,s.jsxs)(n.li,{children:["When the package received is of the Text type, the RECEIVE PACKET command supports Byte Order Marks (BOMs). In this case, if the current character set is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the ",(0,s.jsx)(n.em,{children:"receiveVar"})," variable and 4D uses the character set that it defines instead of the current character set."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To read a particular number of characters, pass this number in ",(0,s.jsx)(n.em,{children:"numBytes"}),". If the ",(0,s.jsx)(n.em,{children:"receiveVar"})," variable is of the Text type, in a single call you can read up to 2 GB of text (theoretical value)."]}),"\n",(0,s.jsxs)(n.p,{children:["To receive data until a particular string (composed of one or more characters) is encountered, pass this string in ",(0,s.jsx)(n.em,{children:"stopChar"})," (the string is not returned in ",(0,s.jsx)(n.em,{children:"receiveVar"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["In this case, if the character string specified by ",(0,s.jsx)(n.em,{children:"stopChar"})," is not found:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When RECEIVE PACKET is reading a document, it will stop reading at the end of the document."}),"\n",(0,s.jsxs)(n.li,{children:["When RECEIVE PACKET is reading from a serial port, it will attempt to wait indefinitely until the timeout (if any) has elapsed (see ",(0,s.jsx)(n.a,{href:"/docs/commands/set-timeout",children:"SET TIMEOUT"}),") or until the user interrupts the reception (see below)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["During execution of RECEIVE PACKET, the user can interrupt the reception by pressing ",(0,s.jsx)(n.strong,{children:"Ctrl-Alt-Shift"})," (Windows) or ",(0,s.jsx)(n.strong,{children:"Command-Option-Shift"})," (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),". Usually, you will only have to handle interruption of a reception when communicating over a serial port."]}),"\n",(0,s.jsx)(n.p,{children:"When reading a document, the first RECEIVE PACKET begins reading at the beginning of the document. The reading of each subsequent packet begins at the character following the last byte read."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command is useful for document opened with ",(0,s.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"}),". On the other hand, for a document opened with ",(0,s.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),", you can use the ",(0,s.jsx)(n.a,{href:"/docs/commands/get-document-position",children:"Get document position"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/set-document-position",children:"SET DOCUMENT POSITION"})," commands to get and change the location in the document where the next writing (",(0,s.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"}),") or reading (RECEIVE PACKET) will occur."]}),"\n",(0,s.jsx)(n.p,{children:"When attempting to read past the end of a file, RECEIVE PACKET will return with the data read up to that point and the variable OK will be set to 1. Then, the next RECEIVE PACKET will return an empty string and set the OK variable to zero."}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["The following example reads 20 characters from a serial port into the variable ",(0,s.jsx)(n.em,{children:"getTwenty"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(getTwenty;20)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The following example reads data from the document referenced by the variable ",(0,s.jsx)(n.em,{children:"myDoc"})," into the variable ",(0,s.jsx)(n.em,{children:"vData"}),". It reads until it encounters a carriage return:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(myDoc;vData;Char(Carriage return))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["The following example reads data from the document referenced by the variable ",(0,s.jsx)(n.em,{children:"myDoc"})," into the variable ",(0,s.jsx)(n.em,{children:"vData"}),". It reads until it encounters the ",(0,s.jsx)(n.em,{})," (end of table cell) HTML tag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0RECEIVE PACKET(myDoc;vData;"")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"The following example reads data from a document into fields. The data is stored as fixed-length fields. The method calls a subroutine to strip any trailing spaces (spaces at the end of the string). The subroutine follows the method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("";"TEXT")\xa0// Open a TEXT document\n\xa0If(OK=1)\xa0// If the document was opened\n\xa0\xa0\xa0\xa0Repeat\xa0// Loop until no more data\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var1;15)\xa0// Read 15 characters\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var2;15)\xa0// Do same as above for second field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($Var1#"")|($Var2#""))\xa0// If at least one of the fields is not empty\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([People])\xa0// Create a new record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[People]First :=Strip($Var1)\xa0// Save the first name\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[People]Last :=Strip($Var2)\xa0// Save the last name\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([People])\xa0// Save the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until(OK=0)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"The spaces at the end of the data are stripped by the following method, called Strip:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0For($i;Length($1);1;-1)\xa0// Loop from end of string to start\n\xa0\xa0\xa0\xa0If($1[[$i]]#" ")\xa0// If it is not a space\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$i :=-$i \xa0// Force the loop to end\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0$0:=Delete string($1;-$i;Length($1))\xa0// Delete the spaces\n'})}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(n.p,{children:["After a call to ",(0,s.jsx)(n.strong,{children:"RECEIVE PACKET"}),", the OK system variable is set to 1 if the packet is received without error. Otherwise, the OK system variable is set to 0."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-document-position",children:"Get document position"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-document-position",children:"SET DOCUMENT POSITION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-timeout",children:"SET TIMEOUT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"104"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);