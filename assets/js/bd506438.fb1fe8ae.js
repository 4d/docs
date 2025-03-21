"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48670"],{616354:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/structure-file","title":"Structure file","description":"Structure file {( * )} : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/structure-file.md","sourceDirName":"commands-legacy","slug":"/commands/structure-file","permalink":"/docs/commands/structure-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstructure-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"structure-file","title":"Structure file","slug":"/commands/structure-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET UPDATE FOLDER","permalink":"/docs/commands/set-update-folder"},"next":{"title":"Table fragmentation","permalink":"/docs/commands/table-fragmentation"}}'),s=n("785893"),a=n("250065");let i={id:"structure-file",title:"Structure file",slug:"/commands/structure-file",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Structure file"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Returns structure file of host database"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Long name of the database structure file"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Structure file"})," command returns the pathname of the structure file for the database with which you are currently working.file."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["With project databases, the command returns the pathname of the ",(0,s.jsx)(t.strong,{children:".4dproject"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In the particular case of a database that has been compiled and merged with 4D Volume Desktop, this command returns the pathname of the application file (executable application) under Windows and macOS. Under macOS, this file is located inside the software package, in the [Contents:Mac OS] folder. This stems from a former mechanism and is kept for compatibility reasons. If you want to get the full name of the software package itself, it is preferable to use the ",(0,s.jsx)(t.a,{href:"/docs/commands/application-file",children:"Application file"})," command. The technique consists of testing the application using the ",(0,s.jsx)(t.a,{href:"/docs/commands/application-type",children:"Application type"})," command, then executing ",(0,s.jsx)(t.strong,{children:"Structure file"})," or ",(0,s.jsx)(t.a,{href:"/docs/commands/application-file",children:"Application file"})," depending on the context."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WARNING:"})," If you call this command when using 4D in remote mode, only the name of the structure/project file is returned; the pathname is not returned."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"*"})," parameter is useful in the case of an architecture using components: it can be used to determine the structure (host or component) for which you want to get the pathname depending on the context in which the command is called:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When the command is called from a component:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the ",(0,s.jsx)(t.em,{children:"*"})," parameter is passed, the command returns the pathname of the structure file of the host database,"]}),"\n",(0,s.jsxs)(t.li,{children:["If the ",(0,s.jsx)(t.em,{children:"*"})," parameter is not passed, the command returns the pathname of the structure file of the component.",(0,s.jsx)(t.br,{}),"\nThe structure file of the component corresponds to the structure file (.4db, .4dc, .4dproject, .4dz) of the component found in the \u201CComponents\u201D folder of the database. However, a component can also be installed as an alias/shortcut or a .4dbase folder/package:",(0,s.jsx)(t.br,{}),"\n* In the case of a component installed as an alias/shortcut, the command returns the pathname of the original file (the alias or shortcut is resolved).",(0,s.jsx)(t.br,{}),"\n* In the case of a component installed as a .4dbase folder/package, the command returns the pathname of the file located within this folder/package."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["When the command is called from a method of the host database, it always returns the pathname of the structure/project file of the host database, regardless of whether or not the ",(0,s.jsx)(t.em,{children:"*"})," parameter is passed."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"This example displays the name and the location of the structure file currently in use:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $fullpath : Object\n\xa0var $name;$path : Text\n\xa0If(Application type#4D Remote mode)\n\xa0\xa0\xa0\xa0$fullpath:=Path to object(Structure file)\n\xa0\xa0\xa0\xa0$name:=$fullpath.name\n\xa0\xa0\xa0\xa0$path:=$fullpath.parentFolder\n\xa0\xa0\xa0\xa0ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"The following example can be used to find out whether the method is called from a component:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $0 : Boolean\n\xa0$0:=(Structure file#Structure file(*))\n\xa0\xa0// $0=True if method is called from a component\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/application-file",children:"Application file"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/component-list",children:"COMPONENT LIST"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/data-file",children:"Data file"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"489"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(667294);let s={},a=r.createContext(s);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);