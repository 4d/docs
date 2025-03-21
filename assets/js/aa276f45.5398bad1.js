"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80"],{94492:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>i,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/send-packet","title":"SEND PACKET","description":"SEND PACKET ( {docRef ;} packet )","source":"@site/versioned_docs/version-20-R7/commands-legacy/send-packet.md","sourceDirName":"commands-legacy","slug":"/commands/send-packet","permalink":"/docs/20-R7/commands/send-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-packet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-packet","title":"SEND PACKET","slug":"/commands/send-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE VARIABLE","permalink":"/docs/20-R7/commands/receive-variable"},"next":{"title":"SEND RECORD","permalink":"/docs/20-R7/commands/send-record"}}'),d=t("785893"),o=t("250065");let c={id:"send-packet",title:"SEND PACKET",slug:"/commands/send-packet",displayed_sidebar:"docs"},r=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND PACKET"})," ( {",(0,d.jsx)(n.em,{children:"docRef"})," ;} ",(0,d.jsx)(n.em,{children:"packet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"docRef"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Document reference number, or Current channel (serial port or document)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"packet"}),(0,d.jsx)(n.td,{children:"Text, Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"String or BLOB to be sent"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND PACKET"})," sends a packet to a serial port or to a document. If ",(0,d.jsx)(n.em,{children:"docRef"})," is specified, the packet is written to the document referenced by ",(0,d.jsx)(n.em,{children:"docRef"}),". If ",(0,d.jsx)(n.em,{children:"docRef"})," is not specified, the packet is written to the serial port or document previously opened by the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"})," command."]}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.em,{children:"packet"})," is just a piece of data, generally a string of characters.",(0,d.jsx)(n.br,{}),"\nYou can also pass a BLOB in ",(0,d.jsx)(n.em,{children:"packet"}),". This allows you to bypass the constraints related to encoding for characters sent in text mode (see example 2)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," When you pass a BLOB in ",(0,d.jsx)(n.em,{children:"packet"}),", the command does not take into account any character set defined by the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/use-character-set",children:"USE CHARACTER SET"})," command. The BLOB is sent without any modification."]}),"\n",(0,d.jsxs)(n.p,{children:["Before you use SEND PACKET, you must open a serial port or a document with ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"}),", or open a document with one of the document commands."]}),"\n",(0,d.jsxs)(n.p,{children:["When writing to a document, the first SEND PACKET begins writing at the beginning of the document unless the document was opened with ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/use-character-set",children:"USE CHARACTER SET"}),". Until the document is closed, each subsequent packet is appended to any previously sent packets."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," This command is useful for a document opened with ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"}),". On the other hand, for a document opened with ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"})," or ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/append-document",children:"Append document"}),", you can use the commands ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/get-document-position",children:"Get document position"})," and ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-document-position",children:"SET DOCUMENT POSITION"})," to get and change the location in the document where the next writing (SEND PACKET) or reading (",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),") will occur."]}),"\n",(0,d.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsx)(n.p,{children:"The following example writes data from fields to a document. It writes the fields as fixed-length fields. Fixed-length fields are always of a specific length. If a field is shorter than the specified length, the field is padded with spaces. (That is, spaces are added to make up the specified length.) Although the use of fixed-length fields is an inefficient method of storing data, some computer systems and applications still use them:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Create document("")\xa0// Create a document\n\xa0If(OK=1)\xa0// Was the document created?\n\xa0\xa0\xa0\xa0For($vlRecord;1;Records in selection([People]))\xa0// Loop once for each record\n\xa0\xa0// Send a packet. Create the packet from a string of 15 spaces containing the first name field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]First;1))\n\xa0\xa0// Send a second packet. Create the packet from a string of 15 spaces containing the last name field\n\xa0\xa0// This could be in the first SEND PACKET, but is separated for clarity\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]Last;1))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([People])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Send a Char(26), which is used as an end-of-file marker for some computers\n\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Char(SUB ASCII code))\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(n.p,{children:"This example illustrates the sending and retrieval of extended characters via a BLOB in a document:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $send_blob : Blob\n\xa0var $receive_blob : Blob\n\xa0TEXT TO BLOB("\xe2z\xe9rt\xff";$send_blob;UTF8 text without length)\n\xa0SET BLOB SIZE($send_blob;16;255)\n\xa0$send_blob{6}:=0\n\xa0$send_blob{7}:=1\n\xa0$send_blob{8}:=2\n\xa0$send_blob{9}:=3\n\xa0$send_blob{10}:=0\n\xa0$vlDocRef:=Create document("blob.test")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET($vlDocRef;$send_blob)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n\xa0$vlDocRef:=Open document(document)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE PACKET($vlDocRef;$receive_blob;65536)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/get-document-position",children:"Get document position"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-document-position",children:"SET DOCUMENT POSITION"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"103"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(667294);let d={},o=s.createContext(d);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);