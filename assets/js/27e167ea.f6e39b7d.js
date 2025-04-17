"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10899"],{795090:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/get-document-properties","title":"GET DOCUMENT PROPERTIES","description":"GET DOCUMENT PROPERTIES ( document ; locked ; invisible ; created\xa0on ; created\xa0at ; modified\xa0on ; modified\xa0at )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-document-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-properties","permalink":"/docs/20-R8/commands/get-document-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-document-properties","title":"GET DOCUMENT PROPERTIES","slug":"/commands/get-document-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get document position","permalink":"/docs/20-R8/commands/get-document-position"},"next":{"title":"Get document size","permalink":"/docs/20-R8/commands/get-document-size"}}'),d=t("785893"),i=t("250065");let s={id:"get-document-properties",title:"GET DOCUMENT PROPERTIES",slug:"/commands/get-document-properties",displayed_sidebar:"docs"},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"locked"})," ; ",(0,d.jsx)(n.em,{children:"invisible"})," ; created\xa0on ; created\xa0at ; modified\xa0on ; modified\xa0at )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Document name"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"locked"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Locked (True) or unlocked (False)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"invisible"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Invisible (True) or visible (False)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"created\xa0on"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Creation date"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"created\xa0at"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Creation time"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modified\xa0on"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Last modification date"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modified\xa0at"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Last modification time"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," command returns information about the document whose name or pathname you pass in ",(0,d.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"After the call:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"locked"})," returns True if the document is locked. A locked document cannot be modified."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"invisible"})," returns True if the document is hidden."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"created on"})," and ",(0,d.jsx)(n.em,{children:"created at"})," return the date and time when the document was created."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"modified on"})," and ",(0,d.jsx)(n.em,{children:"modified at"})," return the date and time when the document modified for the last time."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"You have created a documentation database and you would like to export all the records you created in the database to documents on disk. Because the database is regularly updated you want to write an export algorithm that create or recreate each document on disk if the document does not exist or if the corresponding record has been modified after the document was saved for the last time. Consequently, you need to compare the date and time of modification of a document (if it exists) with its corresponding record. For illustrating this example, we use the table whose definition is shown below:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(376062).Z+"",width:"171",height:"180"})}),"\n",(0,d.jsx)(n.p,{children:"Rather than saving both a date and time values into each record, you can save a \u201Ctime stamp\u201D value which expresses the number of seconds elapsed between an arbitrary anterior date and time (in this example we use Jan, 1st 1995 at 00:00:00) and the date and time when the record was saved."}),"\n",(0,d.jsxs)(n.p,{children:["In our example, the field ",(0,d.jsx)(n.em,{children:"[Documents]Creation Stamp"})," holds the time stamp when the record was first created and the field ",(0,d.jsx)(n.em,{children:"[Documents]Modification Stamp"})," holds the time stamp when the record was last modified."]}),"\n",(0,d.jsx)(n.p,{children:"The Time stamp project method listed below calculates the time stamp for a specific date and time or for the current date and time if no parameters are passed:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0[\xa0// Time stamp Project Method\n\xa0\xa0// Time stamp { ( date ; Time ) } -> Long\n\xa0\xa0// Time stamp { ( date ; Time ) } -> Number of seconds since Jan, 1st 1995\n\xa0\n\xa0#DECLARE ($vdDate : Date ; $vhTime : Time) : Integer\n\xa0\n\xa0If(Count parameters=0)\n\xa0\xa0\xa0\xa0$vdDate:=Current date\n\xa0\xa0\xa0\xa0$vhTime:=Current time\n\xa0End if\n return (($vdDate-!01/01/95!)*86400)+$vhTime\n\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," Using this method, you can encode dates and times from the ",(0,d.jsx)(n.em,{children:"01/01/95"})," at ",(0,d.jsx)(n.em,{children:"00:00:00"})," to the ",(0,d.jsx)(n.em,{children:"01/19/2063"})," at ",(0,d.jsx)(n.em,{children:"03:14:07"})," which cover the long integer range ",(0,d.jsx)(n.em,{children:"0"})," to ",(0,d.jsx)(n.em,{children:"2^31"})," minus one."]}),"\n",(0,d.jsx)(n.p,{children:"Conversely, the Time stamp to date and Time stamp to time project methods listed below allow extracting the date and the time stored into a time stamp:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Time stamp to date Project Method\n\xa0\xa0// Time stamp to date ( Long ) -> Date\n\xa0\xa0// Time stamp to date ( Time stamp ) -> Extracted date\n\xa0\n#DECLARE ($timeStamp : Integer) : Date\n\nreturn !01/01/95!+($timeStamp\\86400)\n\xa0\n\xa0\xa0// Time stamp to time Project Method\n\xa0\xa0// Time stamp to time ( Long ) -> Date\n\xa0\xa0// Time stamp to time ( Time stamp ) -> Extracted time\n\xa0\n#DECLARE ($timeStamp : Integer) : Time\n\nreturn Time(Time string(?00:00:00?+($timeStamp %86400)))\n"})}),"\n",(0,d.jsxs)(n.p,{children:["For ensuring that the records have their time stamps correctly updated no matter the way they are created or modified, we just need to enforce that rule using the trigger of the table ",(0,d.jsx)(n.em,{children:"[Documents]"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Trigger for table [Documents]\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=Save New Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Creation Stamp:=Time stamp\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Modification Stamp:=Time stamp\n\xa0\xa0\xa0\xa0:(Trigger event=Save Existing Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Modification Stamp:=Time stamp\n\xa0End case\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Once this is implemented in the database, we have all we need to write the project method CREATE DOCUMENTATION listed below. We use of ",(0,d.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," and ",(0,d.jsx)(n.a,{href:"/docs/20-R8/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})," for handling the date and time of creation and modification of the documents."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// CREATE DOCUMENTATION Project Method\n\xa0\n\xa0C_TEXT($vsPath;$vsDocPathName;$vsDocName)\n\xa0var $vlDoc : Integer\n\xa0var $vbOnWindows;$vbDoIt;$vbLocked;$vbInvisible : Boolean\n\xa0var $vhDocRef;$vhCreatedAt;$vhModifiedAt : Time\n\xa0var $vdCreatedOn;$vdModifiedOn : Date\n\xa0\n\xa0If(Application type=4D Client)\n\xa0\xa0// If we are running 4D Client, save the documents\n\xa0\xa0// locally on the Client machine where 4D Client is located\n\xa0\xa0\xa0\xa0$vsPath:=Long name to path name(Application file)\n\xa0Else\n\xa0\xa0// Otherwise, save the documents where the data file is located\n\xa0\xa0\xa0\xa0$vsPath:=Long name to path name(Data file)\n\xa0End if\n\xa0\xa0// Save the documents in a directory we arbitrarily name "Documentation"\n\xa0$vsPath:=$vsPath+"Documentation"+Char(Directory symbol)\n\xa0\xa0// If this directory does not exist, create it\n\xa0If(Test path name($vsPath)#Is a folder)\n\xa0\xa0\xa0\xa0CREATE FOLDER($vsPath)\n\xa0End if\n\xa0\xa0// Establish the list of the already existing documents\n\xa0\xa0// because we\'ll have to delete the obsolete ones, in other words,\n\xa0\xa0// the documents whose corresponding records have been deleted.\n\xa0ARRAY STRING(255;$asDocument;0)\n\xa0DOCUMENT LIST($vsPath;$asDocument)\n\xa0\xa0// Select all the records from the [Documents] table\n\xa0ALL RECORDS([Documents])\n\xa0\xa0// For each record\n\xa0$vlNbRecords:=Records in selection([Documents])\n\xa0$vlNbDocs:=0\n\xa0$vbOnWindows:=On Windows\n\xa0For($vlDoc;1;$vlNbRecords)\n\xa0\xa0// Assume we will have to (re)create the document on disk\n\xa0\xa0\xa0\xa0$vbDoIt:=True\n\xa0\xa0// Calculate the name and the path name of the document\n\xa0\xa0\xa0\xa0$vsDocName:="DOC"+String([Documents]Number;"00000")\n\xa0\xa0\xa0\xa0$vsDocPathName:=$vsPath+$vsDocName\n\xa0\xa0// Does this document already exist?\n\xa0\xa0\xa0\xa0If(Test path name($vsDocPathName+".HTM")=Is a document)\n\xa0\xa0// If so, remove the document from the list of the documents\n\xa0\xa0// that may end up deleted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlElem:=Find in array($asDocument;$vsDocName+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asDocument;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Was the document saved after the last time the record was modified?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;$vdCreatedOn;$vhCreatedAt;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn;$vhModifiedAt)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Time stamp($vdModifiedOn;$vhModifiedAt)>=[Documents]Modification Stamp)\n\xa0\xa0// If so, we do not need to recreate the document\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vbDoIt:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// The document does not exist, reset these two variables so\n\xa0\xa0// we know we\'ll have to compute them before setting the final properties\n\xa0\xa0// of the document\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn:=!00/00/00!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModifiedAt:=\u202000:00:00\u2020\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Do we need to (re)create the document?\n\xa0\xa0\xa0\xa0If($vbDoIt)\n\xa0\xa0// If so, increment the number of updated documents\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbDocs:=$vlNbDocs+1\n\xa0\xa0// Delete the document if it already exists\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocPathName+".HTM")\n\xa0\xa0// And create it again\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vbOnWindows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocPathName;"HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocPathName+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// Here write the contents of the document\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vdModifiedOn=!00/00/00!)\n\xa0\xa0// The document did not exist, set the modification date and time\n\xa0\xa0// to their right values\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn:=Current date\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModifiedAt:=Current time\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Change the properties of the document so its date and time of creation\n\xa0\xa0// are made equal to those of the corresponding record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Time stamp to date([Documents]Creation Stamp);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Time stamp to time([Documents]Creation Stamp);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModifiedOn;$vhModifiedAt)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Just to know what\'s going on\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Processing Document "+String($vlDoc)+" of "+String($vlNbRecords))\n\xa0\xa0\xa0\xa0NEXT RECORD([Documents])\n\xa0End for\n\xa0\xa0// Delete the obsolete documents, in other words\n\xa0\xa0// those which are still in the array $asDocument\n\xa0For($vlDoc;1;Size of array($asDocument))\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsPath+$asDocument{$vlDoc})\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Deleting obsolete document: "+Char(34)+$asDocument{$vlDoc}+Char(34))\n\xa0End for\n\xa0\xa0// We\'re done\n\xa0ALERT("Number of documents processed: "+String($vlNbRecords)+Char(13)+"Number of documents updated: "+String($vlNbDocs)+Char(13)+"Number of documents deleted: "+String(Size of array($asDocument)))\n'})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/20-R8/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"477"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},376062:function(e,n,t){t.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(667294);let d={},i=o.createContext(d);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);