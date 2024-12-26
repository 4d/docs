"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50944"],{571553:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/import-sylk","title":"IMPORT SYLK","description":"IMPORT SYLK ( {aTable ;} document )","source":"@site/versioned_docs/version-20-R7/commands-legacy/import-sylk.md","sourceDirName":"commands-legacy","slug":"/commands/import-sylk","permalink":"/docs/commands/import-sylk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-sylk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-sylk","title":"IMPORT SYLK","slug":"/commands/import-sylk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT DIF","permalink":"/docs/commands/import-dif"},"next":{"title":"IMPORT TEXT","permalink":"/docs/commands/import-text"}}'),r=n("785893"),o=n("250065");let i={id:"import-sylk",title:"IMPORT SYLK",slug:"/commands/import-sylk",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"IMPORT SYLK"})," ( {",(0,r.jsx)(t.em,{children:"aTable"})," ;} ",(0,r.jsx)(t.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table into which to import data, or Default table, if omitted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"document"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"SYLK document from which to import data"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"IMPORT SYLK"})," command reads data from ",(0,r.jsx)(t.em,{children:"document"}),", a Windows or Macintosh SYLK document, into the table ",(0,r.jsx)(t.em,{children:"aTable"})," by creating new records for that table."]}),"\n",(0,r.jsx)(t.p,{children:"The import operation is performed through the current input form. The import operation reads fields and variables based on the layering of objects in the input form. For this reason, you should be very careful about the front-to-back order of text objects (fields and variables) in the form. The first object into which data will be imported should be in the back of the form, and so on. If the number of fields or variables in the form does not match the number of fields being imported, the extra ones are ignored. An input form used for importing cannot contain any buttons. Subform objects are ignored."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," One way to ensure that the data is imported into the correct objects is to select the object into which the first field should be imported and move it to the front. Continue to move the fields and variables to the front, in order, making sure that you have one field or variable for each field being imported."]}),"\n",(0,r.jsx)(t.p,{children:"An On Validate event is sent to the form method for each record that is imported. If you use variables in the import form, use this event to copy data from variables to fields."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"document"})," parameter can include a path that contains volume and folder names. If you pass an empty string, the standard Open File dialog box is displayed. If the user cancels this dialog, the import operation is canceled, and the OK system variable is set to 0."]}),"\n",(0,r.jsxs)(t.p,{children:["A progress thermometer is displayed during the import. The user can cancel the operation by clicking a Stop button. Records that have already been imported will not be removed if the user presses the Stop button. If the import is successfully completed, the OK system variable is set to 1. If an error occurs or the operation was interrupted, the OK variable is set to 0. The thermometer can be hidden with the ",(0,r.jsx)(t.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the command uses the UTF-8 character set. Since SYLK format documents generally use the ISO-8859-1 character set, you may need to use the ",(0,r.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})," command to specify the appropriate character set."]}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.strong,{children:"IMPORT SYLK"}),", the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return (code 13). You can modify these values by assigning new values to the two ",(0,r.jsx)(t.em,{children:"System Variables"})," ",(0,r.jsx)(t.em,{children:"FldDelimit"})," and ",(0,r.jsx)(t.em,{children:"RecDelimit"}),". The user can change these default values in the export dialog box of the Design mode. Since Text fields can contain carriage returns, be careful if you use the carriage return as the field delimiter for fields to be exported."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following example imports data from a SYLK document. The method first sets the input form so the data will be imported through the correct form, then performs the import:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0FORM SET INPUT([People];"Import")\n\xa0IMPORT SYLK([People];"NewPeople.slk")\xa0// Import from \u201CNewPeople.slk\u201D document\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"OK is set to 1 if the import is successfully complete; otherwise, it is set to 0."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/import-text",children:"IMPORT TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"87"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var s=n(667294);let r={},o=s.createContext(r);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);