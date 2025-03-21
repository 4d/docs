"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58249"],{596792:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/current-form-table","title":"Current form table","description":"Current form table  : Pointer","source":"@site/versioned_docs/version-20-R8/commands-legacy/current-form-table.md","sourceDirName":"commands-legacy","slug":"/commands/current-form-table","permalink":"/docs/commands/current-form-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-form-table","title":"Current form table","slug":"/commands/current-form-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current default table","permalink":"/docs/commands/current-default-table"},"next":{"title":"DEFAULT TABLE","permalink":"/docs/commands/default-table"}}'),o=r("785893"),s=r("250065");let i={id:"current-form-table",title:"Current form table",slug:"/commands/current-form-table",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Current form table"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Pointer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Pointer to the table of the currently displayed form"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"The Current form table command returns the pointer to the table of the form being displayed or printed in the current process."}),"\n",(0,o.jsxs)(n.p,{children:["The function returns ",(0,o.jsx)(n.a,{href:"/docs/commands/is-nil-pointer",children:"Is nil pointer"})," in the following cases:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"There is no form being displayed or printed in the current process,"}),"\n",(0,o.jsx)(n.li,{children:"The current form is a project form."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If there are several windows open for the current process (which means that the window opened last is the current active window), the command returns the pointer to the table of the form displayed in the active window."}),"\n",(0,o.jsx)(n.p,{children:"If the currently displayed form is the Detail form for a subform area, you are in data entry and you double-clicked on a record or a subrecord of a double-clickable subform area. In this case, the command returns:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The pointer to the table shown in the subform area, if the subform displays a table."}),"\n",(0,o.jsx)(n.li,{children:"A non-significant pointer, if the subform area displays a subtable."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["Throughout your application, you use the following convention when displaying a record:",(0,o.jsx)(n.br,{}),"\nIf the variable ",(0,o.jsx)(n.em,{children:"vsCurrentRecord"})," is present in a form, it displays \u201CNew Record\u201D if you are working with a new record. If you are working with the 56th record of a selection composed of 5200 records, it displays \u201C56 of 5200\u201D."]}),"\n",(0,o.jsxs)(n.p,{children:["To do so, use the object method to create the variable ",(0,o.jsx)(n.em,{children:"vsCurrentRecord"}),", then copy and paste it into all of your forms:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// vsCurrentRecord non-enterable variable object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(31;vsCurrentRecord)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vpParentTable : Pointer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vlRecordNum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpParentTable:=Current form table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlRecordNum:=Record number($vpParentTable->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlRecordNum=-3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsCurrentRecord:="New Record"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlRecordNum=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsCurrentRecord:="No Record"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlRecordNum>=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsCurrentRecord:=String(Selected record number($vpParentTable->))+" of "+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0String(Records in selection($vpParentTable->))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/dialog",children:"DIALOG"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/form-set-output",children:"FORM SET OUTPUT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"627"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);