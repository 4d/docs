"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95292"],{514382:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/receive-record","title":"RECEIVE RECORD","description":"RECEIVE RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/receive-record.md","sourceDirName":"commands-legacy","slug":"/commands/receive-record","permalink":"/docs/commands/receive-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-record","title":"RECEIVE RECORD","slug":"/commands/receive-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE PACKET","permalink":"/docs/commands/receive-packet"},"next":{"title":"RECEIVE VARIABLE","permalink":"/docs/commands/receive-variable"}}'),s=r("785893"),a=r("250065");let i={id:"receive-record",title:"RECEIVE RECORD",slug:"/commands/receive-record",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RECEIVE RECORD"})," {( ",(0,s.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table into which to receive the record, or Default table, if omitted"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["RECEIVE RECORD receives a record into ",(0,s.jsx)(n.em,{children:"table"})," from the serial port or document opened by the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"})," command. The record must have been sent with ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"}),". When you execute RECEIVE RECORD, a new record is automatically created for ",(0,s.jsx)(n.em,{children:"table"}),". If the record is received correctly, you must then use ",(0,s.jsx)(n.a,{href:"/docs/commands/save-record",children:"SAVE RECORD"})," to save the new record."]}),"\n",(0,s.jsx)(n.p,{children:"The complete record is received. This means that pictures and BLOBs stored in or with the record are also received."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," When records are being sent and received using ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"})," and RECEIVE RECORD, the source table structure and the destination table structure must be compatible. If they are not, 4D will convert values according to the table definitions when RECEIVE RECORD is executed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If you receive a record from a document using this command, the document must have been opened using the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"})," command. You cannot use RECEIVE RECORD with a document opened with ",(0,s.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["During the execution of RECEIVE RECORD, the user can interrupt the reception by pressing ",(0,s.jsx)(n.strong,{children:"Ctrl-Alt-Shift"})," (Windows) or ",(0,s.jsx)(n.strong,{children:"Command-Option-Shift"})," (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),". Usually, you only need to handle the interruption of a reception while communicating over a serial port."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["A combined use of ",(0,s.jsx)(n.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/receive-variable",children:"RECEIVE VARIABLE"})," and ",(0,s.jsx)(n.strong,{children:"RECEIVE RECORD"})," is ideal for archiving data or for exchanging data between identical single-user databases used in different places. You can exchange data between 4D databases using the import/export commands such as ",(0,s.jsx)(n.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/import-text",children:"IMPORT TEXT"}),". However, if your data contains graphics and/or related tables, using ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"})," and RECEIVE RECORD is far more convenient."]}),"\n",(0,s.jsx)(n.p,{children:"For instance, consider a documentation system based on 4D and 4D Write. Since several writers in different locations wordwide work on it, we need a simple way to exchange data between the different databases. Here is a simplified view of the database structure:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(356827).Z+"",width:"434",height:"295"})}),"\n",(0,s.jsxs)(n.p,{children:["The table ",(0,s.jsx)(n.em,{children:"[Commands]"})," contains the description of each command or topic. The tables ",(0,s.jsx)(n.em,{children:"[CM US Params]"})," and ",(0,s.jsx)(n.em,{children:"[CM FR Params]"})," respectivily contain the parameter list for each command in English and in French. The table ",(0,s.jsx)(n.em,{children:"[CM See Also]"})," contains the commands listed as reference (See Also section) for each command. Exchanging documentation between databases therefore consists in sending the ",(0,s.jsx)(n.em,{children:"[Commands]"})," records and their related records. To do so, we use ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"})," and RECEIVE RECORD. In addition, we use ",(0,s.jsx)(n.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"})," in order to mark the import/export document with tags."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the (simplified) project method for exporting the documentation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// CM_EXPORT_SEL project method\n\xa0\xa0// This method works with the current selection of the [Commands] table\n\xa0\n\xa0SET CHANNEL(12;"")\xa0// Let\'s the user create an open a channel document\n\xa0If(OK=1)\n\xa0\xa0//\xa0 Tag the document with a variable that indicates its contents\n\xa0\xa0//\xa0 Note: the BUILD_LANG process variable indicates if US (English) or FR (French) data is sent\n\xa0\xa0\xa0\xa0$vsTag:="4DV6COMMAND"+BUILD_LANG\n\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0//\xa0 Send a variable indicationg how many [Commands] are sent\n\xa0\xa0\xa0\xa0$vlNbCmd:=Records in selection([Commands])\n\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbCmd)\n\xa0\xa0\xa0\xa0FIRST RECORD([Commands])\n\xa0\xa0//\xa0 For each command\n\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\n\xa0\xa0//\xa0 Send the [Commands] record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([Commands])\n\xa0\xa0//\xa0 Select all the related records\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Commands])\n\xa0\xa0//\xa0 Depending on the language, send a variable indicating\n\xa0\xa0//\xa0 the number of parameters that will follow\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbParm)\n\xa0\xa0//\xa0 Send the parameter records (if any)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlParm;1;$vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0//\xa0 Send a variable indicating how many \u201CSee Also\u201D will follow\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbSee:=Records in selection([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbSee)\n\xa0\xa0//\xa0 Send the [See Also] records (if any)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlSee;1;$vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Go to the next [Commands] record and continue the export\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Commands])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here is the (simplified) project method for importing the documentation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// CM_IMPORT_SEL project method\n\xa0\n\xa0SET CHANNEL(10;"")\xa0// Let\'s user open an existing document\n\xa0If(OK=1)\xa0// If a document was open\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\xa0// Try receiving the expected tag variable\n\xa0\xa0\xa0\xa0If($vsTag="4DV6COMMAND@")\xa0// Did we get the right tag?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CurLang:=Substring($vsTag;Length($vsTag)-1)\xa0// Extract language from the tag\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($CurLang="US")|($CurLang="FR"))\xa0// Did we get a valid language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbCmd)\xa0// How many commands are there in this document?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbCmd>0)\xa0// If at least one\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\xa0// For each archived [Commands] record\n\xa0\xa0// Receive the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD([Commands])\n\xa0\xa0// Call a subroutine that saves the new record or copies its values\n\xa0\xa0// into an already existing record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_CMD($CurLang)\n\xa0\xa0// Receive the number of parameters (if any)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbParm>=0)\n\xa0\xa0// Call a subroutine that calls RECEIVE RECORD then saves the new records\n\xa0\xa0// or copies them into already existing records\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_PARM($vlNbParm;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Receive the number of \u201CSee Also\u201D (if any)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbSee>0)\n\xa0\xa0// Call a subroutine that calls RECEIVE RECORD then saves the new records\n\xa0\xa0// or copies them into already existing records\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_SEEA($vlNbSee;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The number of commands in this export document is invalid.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The language of this export document is unkown.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("This document is NOT a Commands export document.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Close document\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that we do not test the OK variable while receiving the data nor try to catch the errors. However, because we stored variables in the document that describes the document itself, if these variables, once received, made sense, the probability for an error is very low. If for instance a user opens a wrong document, the first test stops the operation right away."}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"The OK system variable is set to 1 if the record is received. Otherwise, the OK system variable is set to 0."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"79"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},356827:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);