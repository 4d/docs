"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72104"],{705893:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/import-text","title":"IMPORT TEXT","description":"IMPORT TEXT ( {aTable ;} document )","source":"@site/versioned_docs/version-20-R7/commands-legacy/import-text.md","sourceDirName":"commands-legacy","slug":"/commands/import-text","permalink":"/docs/commands/import-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-text","title":"IMPORT TEXT","slug":"/commands/import-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT SYLK","permalink":"/docs/commands/import-sylk"},"next":{"title":"Interruptions","permalink":"/docs/category/interruptions"}}'),s=n("785893"),i=n("250065");let o={id:"import-text",title:"IMPORT TEXT",slug:"/commands/import-text",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"IMPORT TEXT"})," ( {",(0,s.jsx)(t.em,{children:"aTable"})," ;} ",(0,s.jsx)(t.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aTable"}),(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table into which to import data, or Default table, if omitted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"document"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Text document from which to import data"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"IMPORT TEXT"})," command reads data from ",(0,s.jsx)(t.em,{children:"document"}),", a Windows or Macintosh text document, into the table ",(0,s.jsx)(t.em,{children:"aTable"})," by creating new records for that table."]}),"\n",(0,s.jsx)(t.p,{children:"The import operation is performed through the current input form. The import operation reads fields and variables based on the layering of objects in the input form. For this reason, you should be very careful about the front-to-back order of text objects (fields and variables) in the form. The first object into which data will be imported should be in the back of the form, and so on. If the number of fields or variables in the form does not match the number of fields being imported, the extra ones are ignored. An input form used for importing cannot contain any buttons. Subform objects are ignored."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," One way to ensure that the data is imported into the correct objects is to select the object into which the first field should be imported and move it to the front. Continue to move fields and variables to the front in order, making sure that you have one field or variable for each field being imported."]}),"\n",(0,s.jsx)(t.p,{children:"An On Validate event is sent to the form method for each record that is imported. If you use variables in the import form, use this event to copy data from variables to fields."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"document"})," parameter can include a path that contains volume and folder names. If you pass an empty string, the standard Open File dialog box is displayed. If the user cancels this dialog, the import operation is canceled, and the OK system variable is set to 0."]}),"\n",(0,s.jsxs)(t.p,{children:["A progress thermometer is displayed during import. The user can cancel the operation by clicking a button labeled Stop. Records that have already been imported will not be removed if the user presses the Stop button. If the import is successfully completed, the OK system variable is set to 1. If an error occurs or the operation was interrupted, the OK variable is set to 0. The thermometer can be hidden with the ",(0,s.jsx)(t.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the command uses the UTF-8 character set. You can use the ",(0,s.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})," command to change this character set."]}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.strong,{children:"IMPORT TEXT"}),", the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return character (code 13). You can change these defaults by assigning values to the two delimiter ",(0,s.jsx)(t.em,{children:"System Variables"}),": ",(0,s.jsx)(t.em,{children:"FldDelimit"})," and ",(0,s.jsx)(t.em,{children:"RecDelimit"}),". The user can change the defaults in the Design environment\u2019s Import Data dialog box. Text fields may contain carriage returns, therefore, be careful when using a carriage return as a delimiter if you are importing text fields."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following example imports data from a text document. The method first sets the input form so that the data will be imported through the correct form, changes the 4D delimiter variables, then performs the import:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0FORM SET INPUT([People];"Import")\n\xa0FldDelimit:=27\xa0// Set field delimiter to Escape character\n\xa0RecDelimit:=10\xa0// Set record delimiter to Line Feed character\n\xa0IMPORT TEXT([People];"NewPeople.txt")\xa0// Import from \u201CNewPeople.txt\u201D document\n'})}),"\n",(0,s.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"OK is set to 1 if the import is successfully completed; otherwise, it is set to 0."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/import-dif",children:"IMPORT DIF"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/import-sylk",children:"IMPORT SYLK"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"168"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(667294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);