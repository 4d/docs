"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48565"],{630081:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"commands-legacy/resource-list","title":"RESOURCE LIST","description":"RESOURCE LIST ( resType ; resIDs ; resNames {; resFile} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/resource-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-list","permalink":"/docs/commands/resource-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-list","title":"RESOURCE LIST","slug":"/commands/resource-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open resource file","permalink":"/docs/commands/open-resource-file"},"next":{"title":"RESOURCE TYPE LIST","permalink":"/docs/commands/resource-type-list"}}'),t=s("785893"),i=s("250065");let l={id:"resource-list",title:"RESOURCE LIST",slug:"/commands/resource-list",displayed_sidebar:"docs"},c=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let r={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"RESOURCE LIST"})," ( ",(0,t.jsx)(r.em,{children:"resType"})," ; ",(0,t.jsx)(r.em,{children:"resIDs"})," ; ",(0,t.jsx)(r.em,{children:"resNames"})," {; ",(0,t.jsx)(r.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resType"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"4-character resource type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resIDs"}),(0,t.jsx)(r.td,{children:"Array integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Resource ID numbers for resources of this type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNames"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Resource names for resources of this type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resFile"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Resource file reference number, or all open resource files, if omitted"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"RESOURCE LIST"})," command populates the arrays ",(0,t.jsx)(r.em,{children:"resIDs"})," and ",(0,t.jsx)(r.em,{children:"resNames"})," with the resource IDs and names of the resources whose type is passed in ",(0,t.jsx)(r.em,{children:"resType"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Important:"})," You must pass a 4-character string in ",(0,t.jsx)(r.em,{children:"resType"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass a valid resource file reference number in the optional parameter ",(0,t.jsx)(r.em,{children:"resFile"}),", only the resources from that file are listed. If you do not pass the parameter ",(0,t.jsx)(r.em,{children:"resFile"}),", all resources from the current open resource files are listed."]}),"\n",(0,t.jsxs)(r.p,{children:["If you predeclare the arrays before calling ",(0,t.jsx)(r.strong,{children:"RESOURCE LIST"}),", you must predeclare ",(0,t.jsx)(r.em,{children:"resIDs"})," as a Longint array and ",(0,t.jsx)(r.em,{children:"resNames"})," as a String or Text array. If you do not predeclare the arrays, the command creates ",(0,t.jsx)(r.em,{children:"resIDs"})," as a Longint array and ",(0,t.jsx)(r.em,{children:"resNames"})," as a Text array."]}),"\n",(0,t.jsxs)(r.p,{children:["After the call, you can test the number of resources found by applying the ",(0,t.jsx)(r.a,{href:"/docs/commands/size-of-array",children:"Size of array"})," command to the array ",(0,t.jsx)(r.em,{children:"resIDs"})," or ",(0,t.jsx)(r.em,{children:"resNames"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["The following example populates the arrays ",(0,t.jsx)(r.em,{children:"$alResID"})," and ",(0,t.jsx)(r.em,{children:"$atResName"})," with the IDs and names of the string list resources present in the structure file of the database:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0If(On Windows)\n\xa0\xa0\xa0\xa0$vhStructureResFile:=Open resource file(Replace string(Structure file;".4DB";".RSR"))\n\xa0Else\n\xa0\xa0\xa0\xa0$vhStructureResFile:=Open resource file(Structure file)\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RESOURCE LIST("STR#";$alResID;$atResName;$vhStructureResFile)\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.p,{children:"The following example copies the picture resources present in all currently open resource files into the Picture Library of the database:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$alResID;$atResName)\n\xa0Open window(50;50;550;120;5;"Copying PICT resources...")\n\xa0For($vlElem;1;Size of array($alResID))\n\xa0\xa0\xa0\xa0GET PICTURE RESOURCE($alResID{$vlElem};$vgPicture)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsName:=$atResName{$vlElem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vsName="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsName:="PICT resID="+String($alResID{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(2;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Adding picture \u201C"+$vsName+"\u201D to the DB Picture library.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgPicture;$alResID{$vlElem};$vsName)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/commands/resource-type-list",children:"RESOURCE TYPE LIST"})}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"500"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return l}});var n=s(667294);let t={},i=n.createContext(t);function l(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);