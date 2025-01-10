"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89840"],{884431:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/export-dif","title":"EXPORT DIF","description":"EXPORT DIF ( {aTable ;} document )","source":"@site/versioned_docs/version-20-R7/commands-legacy/export-dif.md","sourceDirName":"commands-legacy","slug":"/commands/export-dif","permalink":"/docs/commands/export-dif","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-dif.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-dif","title":"EXPORT DIF","slug":"/commands/export-dif","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT DATA","permalink":"/docs/commands/export-data"},"next":{"title":"EXPORT SYLK","permalink":"/docs/commands/export-sylk"}}'),r=n("785893"),o=n("250065");let d={id:"export-dif",title:"EXPORT DIF",slug:"/commands/export-dif",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"EXPORT DIF"})," ( {",(0,r.jsx)(t.em,{children:"aTable"})," ;} ",(0,r.jsx)(t.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table from which to export data,or Default table, if omitted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"document"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"DIF document to receive the data"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The EXPORT DIF command writes data from the records of the current selection of ",(0,r.jsx)(t.em,{children:"aTable"})," in the current process. The data is written to ",(0,r.jsx)(t.em,{children:"document"}),", a Windows or Macintosh DIF document on the disk."]}),"\n",(0,r.jsx)(t.p,{children:"The export operation is performed through the current output form. The export operation writes fields and variables based on the entry order of the output form. For this reason, you should use an output form that contains only the fields or enterable objects that you wish to export. Do not place buttons or other extraneous objects on the export form.Subform objects are ignored."}),"\n",(0,r.jsx)(t.p,{children:"An On Load event is sent to the form method for each record that is exported. Use this event to set the variables you may use in the export form."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"document"})," parameter can name a new or existing document. If ",(0,r.jsx)(t.em,{children:"document"})," is given the same name as an existing document, the existing document is overwritten. The ",(0,r.jsx)(t.em,{children:"document"})," can include a path that contains volume and folder names. If you pass an empty string, the standard Save File dialog box is displayed. If the user cancels this dialog, the export operation is canceled, and the OK system variable is set to 0."]}),"\n",(0,r.jsxs)(t.p,{children:["A progress thermometer is displayed during export. The user can cancel the operation by clicking a Stop button. If the export is successfully completed, the OK system variable is set to 1. If the operation is canceled or an error occurs, the OK system variable is set to 0. The thermometer can be hidden with the ",(0,r.jsx)(t.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the command uses the UTF-8 character set. Since DIF format documents generally use the IBM437 character set, you may need to use the ",(0,r.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})," command to specify the appropriate character set."]}),"\n",(0,r.jsxs)(t.p,{children:["When using EXPORT DIF, the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return (code 13). You can modify these values by assigning new values to the two ",(0,r.jsx)(t.em,{children:"System Variables"})," FldDelimit and RecDelimit. The user can change these default values in the export dialog box of the Design mode. Since Text fields can contain carriage returns, be careful if you use the carriage return as the field delimiter for fields to be exported."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following example exports data to a DIF document. The method first sets the output form so that the data will be exported through the correct form, then performs the export:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([People];"Export")\n\xa0EXPORT DIF([People];"NewPeople.dif"") \xa0// Export to the "NewPeople.dif" document\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"OK is set to 1 if the export is successfully completed; otherwise, it is set to 0."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"84"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},o=s.createContext(r);function d(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);