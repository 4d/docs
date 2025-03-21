"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61757"],{21416:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/volume-attributes","title":"VOLUME ATTRIBUTES","description":"VOLUME ATTRIBUTES ( volume ; size ; used ; free )","source":"@site/versioned_docs/version-20-R8/commands-legacy/volume-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/volume-attributes","permalink":"/docs/commands/volume-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"volume-attributes","title":"VOLUME ATTRIBUTES","slug":"/commands/volume-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TEXT TO DOCUMENT","permalink":"/docs/commands/text-to-document"},"next":{"title":"VOLUME LIST","permalink":"/docs/commands/volume-list"}}'),r=s("785893"),l=s("250065");let o={id:"volume-attributes",title:"VOLUME ATTRIBUTES",slug:"/commands/volume-attributes",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VOLUME ATTRIBUTES"})," ( ",(0,r.jsx)(n.em,{children:"volume"})," ; ",(0,r.jsx)(n.em,{children:"size"})," ; ",(0,r.jsx)(n.em,{children:"used"})," ; ",(0,r.jsx)(n.em,{children:"free"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"volume"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Volume name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Volume size expressed in bytes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"used"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Used space expressed in bytes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"free"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Free space expressed in bytes"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The VOLUME ATTRIBUTES command returns, expressed in bytes, the size, the used space and the free space for the volume whose name you pass in ",(0,r.jsx)(n.em,{children:"volume"}),".If ",(0,r.jsx)(n.em,{children:"volume"})," indicates a non-mounted remote volume, the OK variable is set to 0 and the three parameters return -1."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Your application includes some batch operations running the night or the week-end that store huge temporary files on disk. To make this process as automatic and flexible as possible, you write a routine that will automatically find the first volume whose free space is sufficient for your temporary files. You might write the following project method:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Find volume for space Project Method\n\xa0\xa0// Find volume for space ( Real ) -> String\n\xa0\xa0// Find volume for space ( Space needed in bytes ) -> Volume name or Empty string\n\xa0\n\xa0C_STRING(31;$0)\n\xa0C_STRING(255;$vsDocName)\n\xa0var $vlNbVolumes;$vlVolume : Integer\n\xa0var $1;$vlSize;$vlUsed;$vlFree : Real\n\xa0var $vhDocRef : Time\n\xa0\n\xa0\xa0// Initialize function result\n\xa0$0:=""\n\xa0\xa0// Protect all I/O operations with an error interruption method\n\xa0ON ERR CALL("ERROR METHOD")\n\xa0\xa0// Get the list of the volumes\n\xa0ARRAY STRING(31;$asVolumes;0)\n\xa0gError:=0\n\xa0VOLUME LIST($asVolumes)\n\xa0If(gError=0)\n\xa0\xa0// If running on windows, skip the (usual) two floppy drives\n\xa0\xa0\xa0\xa0If(On Windows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($asVolumes;"A:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asVolumes;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($asVolumes;"B:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asVolumes;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$vlNbVolumes:=Size of array($asVolumes)\n\xa0\xa0// For each volume\n\xa0\xa0\xa0\xa0For($vlVolume;1;$vlNbVolumes)\n\xa0\xa0// Get the size, used space and free space\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME ATTRIBUTES($asVolumes{$vlVolume};$vlSize;$vlUsed;$vlFree)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gError=0)\n\xa0\xa0// Is the free space large enough (plus an extra 32K) ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlFree>=($1+32768))\n\xa0\xa0// If so, check if the volume is unlocked...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocName:=$asVolumes{$vlVolume}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocName)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocName)\n\xa0\xa0// If everything\'s fine, return the name of the volume\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$asVolumes{$vlVolume}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=$vlNbVolumes+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once this project method is added to your application, you can for instance write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsVolume:=Find volume for space(100*1024*1024)\n\xa0If($vsVolume#"")\n\xa0\xa0// Continue\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("A volume with at least 100 MB of free space is required!")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/volume-list",children:"VOLUME LIST"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"472"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},l=t.createContext(r);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);