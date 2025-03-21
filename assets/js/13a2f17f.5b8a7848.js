"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82429"],{959926:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/create-alias","title":"CREATE ALIAS","description":"CREATE ALIAS ( targetPath ; aliasPath )","source":"@site/versioned_docs/version-20-R7/commands-legacy/create-alias.md","sourceDirName":"commands-legacy","slug":"/commands/create-alias","permalink":"/docs/20-R7/commands/create-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-alias","title":"CREATE ALIAS","slug":"/commands/create-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY DOCUMENT","permalink":"/docs/20-R7/commands/copy-document"},"next":{"title":"Create document","permalink":"/docs/20-R7/commands/create-document"}}'),s=n("785893"),r=n("250065");let i={id:"create-alias",title:"CREATE ALIAS",slug:"/commands/create-alias",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"CREATE ALIAS"})," ( ",(0,s.jsx)(t.em,{children:"targetPath"})," ; ",(0,s.jsx)(t.em,{children:"aliasPath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"targetPath"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name or access path of the alias/shortcut target"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aliasPath"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name or full pathname for the alias or shortcut"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The CREATE ALIAS command creates an alias (named \u201Cshortcut\u201D under Windows) for the target file or folder passed in ",(0,s.jsx)(t.em,{children:"targetPath"}),". The name and location are defined by the ",(0,s.jsx)(t.em,{children:"targetPath"})," parameter."]}),"\n",(0,s.jsx)(t.p,{children:"An alias can be made for any kind of document or folder. The alias icon will be the same as the target item. The icon contains a small arrow at the bottom left side. Under Mac OS, the icon name is also displayed in italics characters."}),"\n",(0,s.jsxs)(t.p,{children:["This command does not assign a name by default, the name has to be passed in the ",(0,s.jsx)(t.em,{children:"aliasPath"})," parameter. If just a name is passed in this parameter, the alias is created in the current working folder (usually the folder containing the structure file)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Under Windows, the shortcuts are designated by a \u201C.LNK\u201D extension (invisible). If this extension is not passed, it is automatically added by the command."]}),"\n",(0,s.jsxs)(t.p,{children:["If an empty string is passed in the ",(0,s.jsx)(t.em,{children:"targetPath"}),", the command does nothing."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Your database generates text files called \u201CReport Number\u201D sorted in the database folder. The user would like to create shortcuts to these reports and to store them at a convenient location:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//Method CREATE_REPORT\n\xa0var $vtRport : Text\n\xa0C_STRING(250;$vtpath)\n\xa0C_STRING(80;$vaname)\n\xa0var vDoc : Time\n\xa0C_INTEGER($ReportNber)\n\xa0\n\xa0$vTReport:=...\xa0//Create report\n\xa0$ReportNber:=...\xa0//Compute the report number\n\xa0$vaName:="Report"+String($ReportNber)+".txt"\xa0//File name\n\xa0vDoc:=Create document($vaName)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;$vTReport)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\n\xa0\xa0//Add the alias\n\xa0\xa0\xa0\xa0CONFIRM("Create an alias for this report?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPath:=Select folder("Where do you want the alias to be created?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE ALIAS($vaName;$vtPath+$vaName)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW ON DISK($vtPath+$vaName)\n\xa0\xa0//Show the alias location\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"The OK system variable is set to 1 if the command execution was successful; otherwise it is set to 0."}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/resolve-alias",children:"RESOLVE ALIAS"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"694"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);