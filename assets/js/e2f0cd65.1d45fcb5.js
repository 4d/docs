"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22550],{785758:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(474848),r=s(28453);const o={id:"export-sylk",title:"EXPORT SYLK",slug:"/commands/export-sylk",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/export-sylk",title:"EXPORT SYLK",description:"EXPORT SYLK ( {aTable ;} document )",source:"@site/versioned_docs/version-20-R7/commands-legacy/export-sylk.md",sourceDirName:"commands-legacy",slug:"/commands/export-sylk",permalink:"/docs/commands/export-sylk",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-sylk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"export-sylk",title:"EXPORT SYLK",slug:"/commands/export-sylk",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXPORT DIF",permalink:"/docs/commands/export-dif"},next:{title:"EXPORT TEXT",permalink:"/docs/commands/export-text"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"EXPORT SYLK"})," ( {",(0,n.jsx)(t.em,{children:"aTable"})," ;} ",(0,n.jsx)(t.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aTable"}),(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Table from which to export data, or Default table, if omitted"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"document"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"SYLK document to receive the data"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The EXPORT SYLK command writes data from the records of the current selection of ",(0,n.jsx)(t.em,{children:"aTable"})," in the current process. The data is written to ",(0,n.jsx)(t.em,{children:"document"}),", a Windows or Macintosh Sylk document on the disk."]}),"\n",(0,n.jsx)(t.p,{children:"The export operation is performed through the current output form. The export operation writes fields and variables based on the entry order of the output form. For this reason, you should use an output form that contains only the fields or enterable objects that you wish to export. Do not place buttons or other extraneous objects on the export form.Subform objects are ignored."}),"\n",(0,n.jsx)(t.p,{children:"An On Load event is sent to the form method for each record that is exported. Use this event to set the variables you may use in the export form."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"document"})," parameter can name a new or existing document. If ",(0,n.jsx)(t.em,{children:"document"})," is given the same name as an existing document, the existing document is overwritten. The ",(0,n.jsx)(t.em,{children:"document"})," can include a path that contains volume and folder names. If you pass an empty string, the standard Save File dialog box is displayed. If the user cancels this dialog, the export operation is canceled, and the OK system variable is set to 0."]}),"\n",(0,n.jsxs)(t.p,{children:["A progress thermometer is displayed during export. The user can cancel the operation by clicking a Stop button. If the export is successfully completed, the OK system variable is set to 1. If the operation is canceled or an error occurs, the OK system variable is set to 0. The thermometer can be hidden with the ",(0,n.jsx)(t.a,{href:"/docs/commands/messages-off",title:"MESSAGES OFF",children:"MESSAGES OFF"})," command."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the command uses the UTF-8 character set. Since SYLK format documents generally use the ISO-8859-1 character set, you may need to use the ",(0,n.jsx)(t.a,{href:"/docs/commands/use-character-set",title:"USE CHARACTER SET",children:"USE CHARACTER SET"})," command to specify the appropriate character set."]}),"\n",(0,n.jsxs)(t.p,{children:["When using ",(0,n.jsx)(t.strong,{children:"EXPORT SYLK"}),", the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return (code 13) under OS X and the carriage return+line feed (code 13 + code 10) under Windows. You can modify these values by assigning new values to the two ",(0,n.jsx)(t.em,{children:"System Variables"})," ",(0,n.jsx)(t.em,{children:"FldDelimit"})," and ",(0,n.jsx)(t.em,{children:"RecDelimit"}),". The user can change these default values in the export dialog box of the Design mode. Note that if exported fields contain characters defined as field or record delimiters, these characters are automatically replaced with spaces in the exported file, in order to avoid disrupting the importing process."]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"The following example exports data to a SYLK document. The method first sets the output form so that the data will be exported through the correct form, then performs the export:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([People];"Export")\n\xa0EXPORT SYLK([People];"NewPeople.slk")\xa0// Export to the "NewPeople.slk" document\n'})}),"\n",(0,n.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,n.jsx)(t.p,{children:"OK is set to 1 if the export is successfully completed; otherwise, it is set to 0."}),"\n",(0,n.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/commands/export-dif",children:"EXPORT DIF"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/commands/import-sylk",children:"IMPORT SYLK"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>a});var n=s(296540);const r={},o=n.createContext(r);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);