"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59650"],{114488:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/compact-data-file","title":"Compact data file","description":"Compact data file ( structurePath ; dataPath {; archiveFolder {; option {; method}}} ) : Text","source":"@site/versioned_docs/version-20-R9/commands-legacy/compact-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/compact-data-file","permalink":"/docs/commands/compact-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompact-data-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"compact-data-file","title":"Compact data file","slug":"/commands/compact-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BUILD APPLICATION","permalink":"/docs/commands/build-application"},"next":{"title":"COMPONENT LIST","permalink":"/docs/commands/component-list"}}'),s=n("785893"),i=n("250065");let r={id:"compact-data-file",title:"Compact data file",slug:"/commands/compact-data-file",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Compact data file"})," ( ",(0,s.jsx)(t.em,{children:"structurePath"})," ; ",(0,s.jsx)(t.em,{children:"dataPath"})," {; ",(0,s.jsx)(t.em,{children:"archiveFolder"})," {; ",(0,s.jsx)(t.em,{children:"option"})," {; ",(0,s.jsx)(t.em,{children:"method"}),"}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"structurePath"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Pathname of structure file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dataPath"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Pathname of data file to be compacted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"archiveFolder"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Pathname of folder where original data file will be put"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"option"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Compacting options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"method"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name of 4D callback method"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Complete pathname of folder containing original data file"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Compact data file"})," command compacts the data file designated by the ",(0,s.jsx)(t.em,{children:"dataPath"})," parameter associated with the ",(0,s.jsx)(t.em,{children:"structurePath"})," structure file. For more information about compacting, refer to the Design Reference manual."]}),"\n",(0,s.jsx)(t.p,{children:"To ensure the continuity of the database operation, the new compacted data file automatically replaces the original file. For security, the original file is not modified and is moved into a special folder named \u201CReplaced files (compacting) YYYY-MM-DD HH-MM-SS\u201D where YYYY-MM-DD HH-MM-SS represents the date and time of the backup. For example: \u201CReplaced files (compacting) 2007-09-27 15-20-35\u201D."}),"\n",(0,s.jsxs)(t.p,{children:["The command returns the complete pathname of the folder actually created to store the original data file. This command can only be executed from 4D (local mode) or 4D Server (stored procedure). The data file to be compacted must correspond to the structure file designated by ",(0,s.jsx)(t.em,{children:"structurePath"}),". In addition, the data file must not be open when the command is executed; otherwise an error is generated.",(0,s.jsx)(t.br,{}),"\nIf an error occurs during the compacting process, the original files are kept in their initial location. If an index file (.4DIndx file) is associated with the data file, it is also compacted. As with the data file, the original file is saved and the new compacted version replaces the previous one."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.em,{children:"structurePath"})," parameter, pass the complete pathname of the structure file associated with the data file that you want to compact. This information is needed for the compacting procedure. The pathname must be expressed in the syntax of the operating system. You can also pass an empty string; in this case, the standard Open file dialog box appears so that you can designate the structure file to be used."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.em,{children:"dataPath"})," parameter, you can pass an empty string, a file name or a complete pathname, expressed in the syntax of the operating system. If you pass an empty string, the standard Open file dialog box appears so that the user can designate the data file to be compacted. This file must correspond to the structure file defined in the ",(0,s.jsx)(t.em,{children:"structurePath"})," parameter. If you only pass the name of the data file, 4D will look for it at the same level as the structure file."]}),"\n",(0,s.jsxs)(t.li,{children:["The optional ",(0,s.jsx)(t.em,{children:"archiveFolder"})," parameter can be used to specify the location of the \u201CReplaced files (compacting) DateTime\u201D folder intended to receive the original versions of the data files as well as any index files.",(0,s.jsx)(t.br,{}),"\nThe command returns the complete pathname of the folder actually created.",(0,s.jsx)(t.br,{}),"\n- If you omit this parameter, the original files are automatically put in a \u201CReplaced files (compacting) DateTime\u201D folder that is created next to the structure file.",(0,s.jsx)(t.br,{}),"\n- If you pass an empty string, a standard Open folder dialog box will appear so that the user can specify the location of the folder to be created.",(0,s.jsx)(t.br,{}),"\n- If you pass a pathname (expressed in the syntax of the operating system), the command will create a \u201CReplaced files (compacting) DateTime\u201D folder at this location."]}),"\n",(0,s.jsxs)(t.li,{children:["The optional ",(0,s.jsx)(t.em,{children:"options"})," parameter is used to set various compacting options. To do so, use the following constants, found in the \u201C",(0,s.jsx)(t.em,{children:"Data File Maintenance"}),"\u201D theme. You can pass several options by combining them:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Compact address table"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"131072"}),(0,s.jsx)(t.td,{children:"Force the address table of the records to be rewritten (slows down compacting). Note that in this case, record numbers are rewritten. If you only pass this option, 4D automatically enables the \u2019Update records\u2019 option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create process"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"32768"}),(0,s.jsx)(t.td,{children:"When this option is passed, compacting will be asynchronous and you will need to manage the results using the callback method (see below). 4D will not display the progress bar (it is possible to do so using the callback method). The OK system variable is set to 1 if the process has been launched correctly and 0 in all other cases. When this option is not passed, the OK variable is set to 1 if the compacting takes place correctly and 0 otherwise."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Do not create log file"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"16384"}),(0,s.jsx)(t.td,{children:"Generally, this command creates a log file in XML format (refer to the end of the command description). With this option, no log file will be created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Timestamp log file name"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"262144"}),(0,s.jsx)(t.td,{children:"When this option is passed, the name of the log file generated will contain the date and time of its creation; as a result, it will not replace any log file already generated previously. By default, if this option is not passed, log file names are not timestamped and each new file generated replaces the previous one."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Update records"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"65536"}),(0,s.jsx)(t.td,{children:"Force all records to be rewritten according to current definition of the fields in the structure"})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"method"})," parameter is used to set a callback method which will be called regularly during the compacting if the Create process option has been passed. Otherwise, the callback method is never called. For more information about this method, please refer to the description of the ",(0,s.jsx)(t.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the ",(0,s.jsx)(t.strong,{children:"Compact data file"})," command creates a log file in XML format (if you have not passed the Do not create log file option, see the ",(0,s.jsx)(t.em,{children:"options"})," parameter). This file is placed in the ",(0,s.jsx)(t.strong,{children:"Logs"})," folder of the database and its name is based on the structure file of the current database. For example, for a structure file named \u201CmyDB.4db,\u201D the log file will be named \u201CmyDB_Compact_Log.xml.\u201D",(0,s.jsx)(t.br,{}),'\nIf you have passed the Timestamp log file name option, the name of the log file includes the date and time of its creation in the form "YYYY-MM-DD HH-MM-SS", which gives us, for example: \u201CmyDB_Compact_Log_2015-09-27 15-20-35.xml\u201D. This means that each new log file does not replace the previous one, but it might require subsequent manual action to remove unnecessary files.',(0,s.jsx)(t.br,{}),"\nRegardless of the option selected, as soon as a log file is generated, its path is returned in the ",(0,s.jsx)(t.em,{children:"Document"})," system variable after execution of the command."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following example (Windows) carries out the compacting of a data file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$structFile:=Structure file\n\xa0$dataFile:="C:\\\\Databases\\\\Invoices\\\\January\\\\Invoices.4dd"\n\xa0$origFile:="C:\\\\Databases\\\\Invoices\\\\Archives\\\\January\\\\"\n\xa0$archFolder:=Compact data file($structFile;$dataFile;$origFile)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"If the compacting operation is carried out correctly, the OK system variable is set to 1; otherwise, it is set to 0. If a log file was generated, its complete pathname is returned in the Document system variable."}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/table-fragmentation",children:"Table fragmentation"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"937"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK, Document"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var a=n(667294);let s={},i=a.createContext(s);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);