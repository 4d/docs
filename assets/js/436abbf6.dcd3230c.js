"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88906"],{913428:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-set-code","title":"METHOD SET CODE","description":"METHOD SET CODE ( path ; code {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-set-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-code","permalink":"/docs/commands/method-set-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-code.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-set-code","title":"METHOD SET CODE","slug":"/commands/method-set-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/commands/method-set-attributes"},"next":{"title":"METHOD SET COMMENTS","permalink":"/docs/commands/method-set-comments"}}'),o=n("785893"),r=n("250065");let d={id:"method-set-code",title:"METHOD SET CODE",slug:"/commands/method-set-code",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"METHOD SET CODE"})," ( ",(0,o.jsx)(t.em,{children:"path"})," ; ",(0,o.jsx)(t.em,{children:"code"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"path"}),(0,o.jsx)(t.td,{children:"Text, Text array"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Text or Text array containing one or more method path(s)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"code"}),(0,o.jsx)(t.td,{children:"Text, Text array"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Code of designated method(s)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operator"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"METHOD SET CODE"})," command modifies the code of the method(s) designated by the ",(0,o.jsx)(t.em,{children:"path"})," parameter with the contents passed in the ",(0,o.jsx)(t.em,{children:"code"})," parameter."]}),"\n",(0,o.jsx)(t.p,{children:"The command can access the existing code of all types of methods: database methods, class definitions, triggers, project methods, form methods and object methods."}),"\n",(0,o.jsxs)(t.p,{children:["If a method does not exist, it is created with the ",(0,o.jsx)(t.em,{children:"code"})," contents."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Note for projects:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Creating a new method with this command is only possible for database methods, triggers, and project methods."}),"\n",(0,o.jsxs)(t.li,{children:["The code is saved with or without tokens in newly created projects depending on the ",(0,o.jsx)(t.em,{children:"Include tokens in project source files"})," option in the Preferences."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You can use two types of syntaxes, based either on text arrays, or text variables:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// text variables\n\xa0var tVcode : Text\n\xa0METHOD SET CODE(tVpath;tVcode)\xa0// code of a single method\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// text arrays\n\xa0ARRAY TEXT(arrCodes;0)\n\xa0METHOD SET CODE(arrPaths;arrCodes)\xa0// code of several methods\n"})}),"\n",(0,o.jsx)(t.p,{children:"You cannot mix the two syntaxes."}),"\n",(0,o.jsx)(t.p,{children:"If you pass an invalid pathname, the command does nothing."}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.strong,{children:"METHOD SET CODE"})," is called, the method attributes are reset by default. However, if the first line of the method ",(0,o.jsx)(t.em,{children:"code"})," contains valid metadata (expressed in JSON), they are used to specify the method attributes and the first line is not inserted. Example of metadata:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"invisible":true,"lang":"fr","folder":"Security"}\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," These metadata are generated automatically by the ",(0,o.jsx)(t.a,{href:"/docs/commands/method-get-code",children:"METHOD GET CODE"})," command. For more information about supported attributes, refer to the description of the ",(0,o.jsx)(t.a,{href:"/docs/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})," command."]}),"\n",(0,o.jsx)(t.p,{children:'Concerning the "folder" property of the metadata:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"When this property is present and corresponds to a valid folder, the method is placed in its parent folder,"}),"\n",(0,o.jsx)(t.li,{children:"If this property is not present or if the folder does not exist, the command makes no changes at the parent folder level,"}),"\n",(0,o.jsx)(t.li,{children:"When this property contains an empty string, the method is placed at the root level."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You can execute this command from a component, but in this case, you must pass the ",(0,o.jsx)(t.em,{children:"*"})," parameter because access to the component code is read-only. If you omit the ",(0,o.jsx)(t.em,{children:"*"})," parameter in this context, the error -9763 is generated."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"This example exports and imports all the project methods of an application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0$root_t:=Get 4D folder(Database folder)+"methods"+Folder separator\n\xa0ARRAY TEXT($fileNames_at;0)\n\xa0CONFIRM("Import or export methods?";"Import";"Export")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0DOCUMENT LIST($root_t;$fileNames_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0If(Test path name($root_t)#Is a folder)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE FOLDER($root_t;*)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0METHOD GET PATHS(Path project method;$fileNames_at)\n\xa0\xa0\xa0\xa0METHOD GET CODE($fileNames_at;$code_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET BLOB SIZE($blob_x;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0SHOW ON DISK($root_t)\n'})}),"\n",(0,o.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/commands/method-get-code",children:"METHOD GET CODE"})}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command number"}),(0,o.jsx)(t.td,{children:"1194"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread safe"}),(0,o.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let o={},r=s.createContext(o);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);