"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29586"],{667385:function(e,t,a){a.r(t),a.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"commands-legacy/append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","description":"APPEND DATA TO PASTEBOARD ( dataType ; data )","source":"@site/versioned_docs/version-20-R7/commands-legacy/append-data-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/append-data-to-pasteboard","permalink":"/docs/20-R7/commands/append-data-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-data-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","slug":"/commands/append-data-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard","permalink":"/docs/20-R7/commands/theme/Pasteboard"},"next":{"title":"CLEAR PASTEBOARD","permalink":"/docs/20-R7/commands/clear-pasteboard"}}'),d=a("785893"),o=a("250065");let r={id:"append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",slug:"/commands/append-data-to-pasteboard",displayed_sidebar:"docs"},s=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function A(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"APPEND DATA TO PASTEBOARD"})," ( ",(0,d.jsx)(t.em,{children:"dataType"})," ; ",(0,d.jsx)(t.em,{children:"data"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"dataType"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Type of data to be added"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"Blob"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Data to append to the pasteboard"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(t.p,{children:["The APPEND DATA TO PASTEBOARD command appends to the pasteboard the data contained in the BLOB ",(0,d.jsx)(t.em,{children:"data"})," under the data type specified in ",(0,d.jsx)(t.em,{children:"dataType"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard."]}),"\n",(0,d.jsxs)(t.p,{children:["In ",(0,d.jsx)(t.em,{children:"dataType"}),", pass a value specifying the type of data to be added. You can pass a 4D signature, a UTI type (Mac OS), a format name/number (Windows), or a 4-character type (compatibility). For more information about these types, please refer to the ",(0,d.jsx)(t.em,{children:"Managing Pasteboards"})," section."]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note for Windows users:"})," When the command is used with Text type data (",(0,d.jsx)(t.em,{children:"dataType"}),' is "TEXT", com.4d.private.text.native or com.4d.private.text.utf16), the string contained in the BLOB parameter ',(0,d.jsx)(t.em,{children:"data"})," must end with the NULL character under Windows."]}),"\n",(0,d.jsxs)(t.p,{children:["Usually, you will use the APPEND DATA TO PASTEBOARD command to append multiple instances of the same data to the pasteboard or to append data that is not text or a picture. To append new data to the pasteboard, you must first clear the pasteboard using the ",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"})," command."]}),"\n",(0,d.jsx)(t.p,{children:"If you want to clear and append:"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:["text to the pasteboard, use the ",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})," command,"]}),"\n",(0,d.jsxs)(t.li,{children:["a picture to the pasteboard, use the ",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"})," command."]}),"\n",(0,d.jsxs)(t.li,{children:["a file pathname (drag and drop), use the ",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"})," command."]}),"\n"]}),"\n",(0,d.jsx)(t.p,{children:"However, note that if a BLOB actually contains some text or a picture, you can use the APPEND DATA TO PASTEBOARD command to append a text or a picture to the pasteboard."}),"\n",(0,d.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.p,{children:"Using Pasteboard commands and BLOBs, you can build sophisticated Cut/Copy/Paste schemes that deal with structured data rather than a unique piece of data. In the following example, the two project methods SET RECORD TO PASTEBOARD and GET RECORD FROM PASTEBOARD enable you to treat a whole record as one piece of data to be copied to or from the pasteboard."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// SET RECORD TO PASTEBOARD project method\n\xa0\xa0// SET RECORD TO PASTEBOARD ( Number )\n\xa0\xa0// SET RECORD TO PASTEBOARD ( Table number )\n\xa0\n #DECLARE ($tabNum : Integer)\n\xa0var $vlField;$vlFieldType : Integer\n\xa0var $vpTable;$vpField : Pointer\n\xa0var $vsDocName : Text\n\xa0var $vtRecordData;$vtFieldData : Text\n\xa0var $vxRecordData : Blob\n\xa0\n\xa0\xa0// Clear the pasteboard (it will stay empty if there is no current record)\n\xa0CLEAR PASTEBOARD\n\xa0\xa0// Get a pointer to the table whose number is passed as parameter\n\xa0"Server Import Services";Table($tablePtr);$form;$vxData)\n\xa0\xa0// If there is a current record for that table\n\xa0If((Record number($vpTable->)>=0)|(Is new record($vpTable->)))\n\xa0\xa0//Initialize the text variable that will hold the text image of the record\n\xa0\xa0\xa0\xa0$vtRecordData:=""\n\xa0\xa0// For each field of the record:\n\xa0\xa0\xa0\xa0For($vlField;1;Last field number($tabNum))\n\xa0\xa0//Get the type of the field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($tabNum;$vlField;$vlFieldType)\n\xa0\xa0// Get a pointer to the field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField:=Field($tabNum;$vlField)\n\xa0\xa0// Depending on the type of the field, copy (or not) its data in the appropriate manner\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlFieldType=Is alpha field)|($vlFieldType=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=$vpField->\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlFieldType=Is real)|($vlFieldType=Is integer)|($vlFieldType=Is longint)|($vlFieldType=Is date)|($vlFieldType=Is time))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=String($vpField->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldType=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=String(Num($vpField->);"Yes;;No")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Skip and ignore other field data types\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// Accumulate the field data into the text variable holding the text image of the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtRecordData:=$vtRecordData+Field name($tabNum;$vlField)+":"+Char(9)+$vtFieldData+CR\n\xa0\xa0// Note: The method CR returns Char(13) on Macintosh and Char(13)+Char(10) on Windows\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Put the text image of the record into the pasteboard\n\xa0\xa0\xa0\xa0SET TEXT TO PASTEBOARD($vtRecordData)\n\xa0\xa0// Name for scrap file in Temporary folder\n\xa0\xa0\xa0\xa0$vsDocName:=Temporary folder+"Scrap"+String(1+(Random%99))\n\xa0\xa0// Delete the scrap file if it exists (error should be tested here)\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// Create scrap file\n\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocName)\n\xa0\xa0// Send the whole record into the scrap file\n\xa0\xa0\xa0\xa0SEND RECORD($vpTable->)\n\xa0\xa0// Close the scrap file\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// Load the scrap file into a BLOB\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($vsDocName;$vxRecordData)\n\xa0\xa0// We longer need the scrap file\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// Append the full image of the record into the pasteboard\n\xa0\xa0// Note: We use arbitrarily "4Drc" as data type\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("4Drc";$vxRecordData)\n\xa0\xa0// At this point, the pasteboardcontains:\n\xa0\xa0// (1) A text image of the record (as shown in the screen shots below)\n\xa0\xa0// (2) A whole image of the record (Picture, Subfile and BLOB fields included)\n\xa0End if\n'})}),"\n",(0,d.jsx)(t.p,{children:"While entering the following record:"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{src:a(352861).Z+"",width:"620",height:"444"})}),"\n",(0,d.jsx)(t.p,{children:"If you apply the method SET RECORD TO PASTEBOARD to the [Employees] table, the pasteboard will contain the text image of the record, as shown, and also the whole image of the record."}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{src:a(723658).Z+"",width:"342",height:"314"})}),"\n",(0,d.jsx)(t.p,{children:"You can paste this image of the record to another record, using the method GET RECORD FROM PASTEBOARD, as follows:"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// GET RECORD FROM PASTEBOARD method\n\xa0\xa0// GET RECORD FROM PASTEBOARD( Number )\n\xa0\xa0// GET RECORD FROM PASTEBOARD( Table number )\n\xa0#DECLARE ($tabNum : Integer)\n var $vlField;$vlFieldType;$vlPosCR;$vlPosColon : Integer\n\xa0var $vpTable;$vpField : Pointer\n\xa0var $vsDocName : Text\n\xa0var $vxPasteboardData : Blob\n\xa0var $vtPasteboardData;$vtFieldData : Text\n\xa0\n\xa0\xa0// Get a pointer to the table whose number is passed as parameter\n\xa0"Server Import Services";Table($tablePtr);$form;$vxData)\n\xa0\xa0// If there is a current record\n\xa0If((Record number($vpTable->)>=0)|(Is new record($vpTable->)))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// Does the pasteboard contain a full image record?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("4Drc")>0)\n\xa0\xa0//\xa0 If so, extract the pasteboard contents\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("4Drc";$vxPasteboardData)\n\xa0\xa0// Name for scrap file in Temporary folder\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocName:=Temporary folder+"Scrap"+String(1+(Random%99))\xa0\xa0\n\xa0\xa0// Delete the scrap file if it exists (error should be tested here)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// Save the BLOB into the scrap file\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vsDocName;$vxPasteboardData)\n\xa0\xa0// Open the scrap file\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocName)\n\xa0\xa0// Receive the whole record from the scrap file\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD($vpTable->)\n\xa0\xa0// Close the scrap file\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// We longer need the scrap file\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// Does the pasteboard contain TEXT?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("TEXT")>0)\n\xa0\xa0// Extract the text from the pasteboard\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPasteboardData:=Get text from pasteboard\n\xa0\xa0// Initialize field number to be increment\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlField:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0// Look for the next field line in the text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosCR:=Position(CR;$vtPasteboardData)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosCR>0)\n\xa0\xa0// Extract the field line\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=Substring($vtPasteboardData;1;$vlPosCR-1)\n\xa0\xa0// If there is a colon ":"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosColon:=Position(":";$vtFieldData)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosColon>0)\n\xa0\xa0// Take only the field data (eliminate field name)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtFieldData:=Substring($vtFieldData;$vlPosColon+2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Increment field number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlField:=$vlField+1\n\xa0\xa0// Pasteboard may contain more data than we need...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlField<=Last field number($vpTable))\n\xa0\xa0// Get the type of the field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($tabNum;$vlField;$vlFieldType)\n\xa0\xa0// Get a pointer to the field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField:=Field($tabNum;$vlField)\n\xa0\xa0// Depending on the type of the field, copy (or not) the text in the appropriate manner\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlFieldType=Is alpha field)|($vlFieldType=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField->:=$vtFieldData\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlFieldType=Is real)|($vlFieldType=Is integer)|($vlFieldType=Is longint))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField->:=Num($vtFieldData)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldType=Is date)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField->:=Date($vtFieldData)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldType=Is time)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField->:=Time($vtFieldData)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldType=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpField->:=($vtFieldData="Yes")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Skip and ignore other field data types\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// All fields have been assigned, get out of the loop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPasteboardData:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Eliminate text that has just been extracted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPasteboardData:=Substring($vtPasteboardData;$vlPosCR+Length(CR))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// No delimiter found, get out of the loop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPasteboardData:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Repeat as long as we have data\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Length($vtPasteboardData)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The pasteboard does not any data that can be pasted as a record.")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})}),"\n",(0,d.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(t.p,{children:"If the BLOB data is correctly appended to the pasteboard, OK is set to 1; otherwise OK is set to 0 and an error may be generated."}),"\n",(0,d.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/20-R7/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})]}),"\n",(0,d.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Command number"}),(0,d.jsx)(t.td,{children:"403"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Thread safe"}),(0,d.jsx)(t.td,{children:"\u2717"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Modifies variables"}),(0,d.jsx)(t.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(A,{...e})}):A(e)}},352861:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/pict27501.en-cc942f97dc2671a0f59ff49bc2eb4a00.png"},723658:function(e,t,a){a.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return r}});var n=a(667294);let d={},o=n.createContext(d);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);