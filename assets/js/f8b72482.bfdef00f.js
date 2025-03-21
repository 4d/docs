"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53605"],{298199:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/import-data","title":"IMPORT DATA","description":"IMPORT DATA ( fileName {; project {; *}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/import-data.md","sourceDirName":"commands-legacy","slug":"/commands/import-data","permalink":"/docs/20-R7/commands/import-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-data","title":"IMPORT DATA","slug":"/commands/import-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT TEXT","permalink":"/docs/20-R7/commands/export-text"},"next":{"title":"IMPORT DIF","permalink":"/docs/20-R7/commands/import-dif"}}'),r=n("785893"),i=n("250065");let o={id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"IMPORT DATA"})," ( ",(0,r.jsx)(t.em,{children:"fileName"})," {; ",(0,r.jsx)(t.em,{children:"project"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fileName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Access path and name of the import file"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"project"}),(0,r.jsx)(t.td,{children:"Text, Blob"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Contents of the import project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"New contents of the import project (if the * parameter has been passed)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Displays the import dialog box and updates the project"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"IMPORT DATA"})," command imports the data located in the ",(0,r.jsx)(t.em,{children:"fileName"})," file. 4D can import the data in the following formats: Text, Fixed length text, XML, SYLK, DIF, DBF (dBase), and 4D."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass an empty string to ",(0,r.jsx)(t.em,{children:"fileName"}),", ",(0,r.jsx)(t.strong,{children:"IMPORT DATA"})," displays the standard save file dialog box, allowing the user to define the name, type, and location of the import file. Once the dialog box has been accepted, the Document system variable contains the access path and the name of the file. If the user clicks ",(0,r.jsx)(t.strong,{children:"Cancel"}),", the execution of the command is stopped and the OK system variable is set to 0."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"project"})," parameter lets you use a project to import data. When you pass this parameter, the import is carried out directly, without any user intervention (unless you use the ",(0,r.jsx)(t.em,{children:"*"})," option, see below). If you don\u2019t pass this parameter, the import dialog box is displayed. The user can define the import parameters or load an existing import project."]}),"\n",(0,r.jsxs)(t.p,{children:["An import project contains all the import parameters such as the tables and fields in which to import, the delimiters to use, and so on. In the ",(0,r.jsx)(t.em,{children:"project"})," parameter, you can pass either a Text variable containing XML or a Text variable containing a reference to a pre-existing DOM element, or a BLOB. Projects may have been created by programming (XML format projects only) or by loading parameters that were previously defined in the import dialog box.In the latter case, you have two solutions available:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use the ",(0,r.jsx)(t.strong,{children:"IMPORT DATA"})," command with an empty project parameter and the optional parameter ",(0,r.jsx)(t.em,{children:"*"}),", then store the resulting ",(0,r.jsx)(t.em,{children:"project"})," parameter in a Text or BLOB field (see below). This solution allows you to save the project with the data file."]}),"\n",(0,r.jsxs)(t.li,{children:["Save the project to disk, then load it for example using the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/dom-parse-xml-source",children:"DOM Parse XML source"})," command, and pass its reference in the ",(0,r.jsx)(t.em,{children:"project"})," parameter."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compatibility note:"})," Beginning with version 12 of 4D, import projects are encoded in XML. 4D can open import projects generated with previous 4D versions (BLOB format) but any projects created starting with v12 can no longer be opened with v11 or earlier versions. We now recommend that you use Text variables for handling import files."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, if it is specified, forces the display of the import dialog box with the import parameters set as they were defined in ",(0,r.jsx)(t.em,{children:"project"}),". This feature allows you to use a predefined project, while still having the possibility to modify one or more of the parameters. Furthermore, the ",(0,r.jsx)(t.em,{children:"project"})," parameter contains, after closing the import dialog box, the parameters of the \u201Cnew\u201D project. You can then store the new project in a BLOB field, on disk, and so on."]}),"\n",(0,r.jsx)(t.p,{children:"If the import was successful, the OK system variable is set to 1."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Refer to the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/export-data",children:"EXPORT DATA"})," command for an example concerning the definition of an empty project."]}),"\n",(0,r.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(t.p,{children:["If the user clicks ",(0,r.jsx)(t.strong,{children:"Cancel"})," in the standard save file dialog box or in the import dialog box, the OK system variable is set to 0. If the import was successful, the OK system variable is set to 1."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/export-data",children:"EXPORT DATA"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/import-sylk",children:"IMPORT SYLK"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/import-text",children:"IMPORT TEXT"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"665"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);