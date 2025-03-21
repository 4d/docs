"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50979"],{896608:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands/print-form","title":"Print form","description":"Print form ( {aTable ;} form {; formData} {; areaStart{; areaEnd}} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/print-form.md","sourceDirName":"commands","slug":"/commands/print-form","permalink":"/docs/es/commands/print-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprint-form.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print-form","title":"Print form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PAGE BREAK","permalink":"/docs/es/commands/page-break"},"next":{"title":"PRINT LABEL","permalink":"/docs/es/commands/print-label"}}'),i=r("785893"),t=r("250065");let d={id:"print-form",title:"Print form",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Print form"})," ( {",(0,i.jsx)(n.em,{children:"aTable"})," ;} ",(0,i.jsx)(n.em,{children:"form"})," {; ",(0,i.jsx)(n.em,{children:"formData"}),"} {; ",(0,i.jsx)(n.em,{children:"areaStart"}),"{; ",(0,i.jsx)(n.em,{children:"areaEnd"}),"}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Tabla"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table owning the form, or Default table, if omitted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"form"}),(0,i.jsx)(n.td,{children:"Text, Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name (string) of the form, or a POSIX path (string) to a .json file describing the form, or an object describing the form to print"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formData"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Data to associate to the form"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"areaStart"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Print marker, or Beginning area (if areaEnd is specified)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"areaEnd"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ending area (if areaStart specified)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Height of printed section"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),".",(0,i.jsx)(n.strong,{children:"Print form"})," simply prints ",(0,i.jsx)(n.em,{children:"form"})," with the current values of fields and variables of ",(0,i.jsx)(n.em,{children:"aTable"}),". It is usually used to print very complex reports that require complete control over the printing process. ",(0,i.jsx)(n.strong,{children:"Print form"})," does not do any record processing, break processing or page breaks. These operations are your responsibility. ",(0,i.jsx)(n.strong,{children:"Print form"})," prints fields and variables in a fixed size frame only."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"form"})," parameter, you can pass:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the name of a form, or"}),"\n",(0,i.jsxs)(n.li,{children:["the path (in POSIX syntax) to a valid .json file containing a description of the form to use (see ",(0,i.jsx)(n.em,{children:"Form file path"}),"), or"]}),"\n",(0,i.jsx)(n.li,{children:"an object containing a description of the form."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.strong,{children:"Print form"})," does not issue a page break after printing the form, it is easy to combine different forms on the same page. Thus, ",(0,i.jsx)(n.strong,{children:"Print form"})," is perfect for complex printing tasks that involve different tables and different forms. To force a page break between forms, use the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"})," command. In order to carry printing over to the next page for a form whose height is greater than the available space, call the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"})," command before the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"})," command."]}),"\n",(0,i.jsx)(n.p,{children:"Three different syntaxes may be used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Detail area printing"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sintaxis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0height:=Print form(myTable;myForm)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, ",(0,i.jsx)(n.strong,{children:"Print form"})," only prints the Detail area (the area between the Header line and the Detail line) of the form."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Form area printing"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sintaxis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0height:=Print form(myTable;myForm;marker)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, the command will print the section designated by the ",(0,i.jsx)(n.em,{children:"marker"}),". Pass one of the constants of the ",(0,i.jsx)(n.em,{children:"Form Area"})," theme in the marker parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break0"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"300"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break1"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"301"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break2"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"302"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break3"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"303"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break4"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"304"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break5"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"305"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break6"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"306"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break7"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"307"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break8"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"308"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form break9"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"309"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form detail"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form footer"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"200"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header1"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"201"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header10"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"210"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header2"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"202"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header3"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"203"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header4"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"204"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header5"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"205"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header6"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"206"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header7"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"207"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header8"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"208"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Form header9"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"209"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Section printing"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sintaxis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0height:=Print form(myTable;myForm;areaStart;areaEnd)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, the command will print the section included between the ",(0,i.jsx)(n.em,{children:"areaStart"})," and ",(0,i.jsx)(n.em,{children:"areaEnd"})," parameters. The values entered must be expressed in pixels."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"formData"})}),"\n",(0,i.jsxs)(n.p,{children:["Opcionalmente, puede pasar par\xe1metros al ",(0,i.jsx)(n.em,{children:"form"})," usando el objeto ",(0,i.jsx)(n.em,{children:"formData"})," o el objeto de clase form autom\xe1ticamente instanciado por 4D si has ",(0,i.jsx)(n.a,{href:"/docs/es/FormEditor/propertiesForm#form-class",children:"asociado una clase de usuario al formulario"}),". Any properties of the form data object will then be available from within the form context through the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/form",children:"Form"})," command. Optionally, you can pass parameters to the ",(0,i.jsx)(n.em,{children:"form"})," using either the ",(0,i.jsx)(n.em,{children:"formData"})," object or the form class object automatically instantiated by 4D if you have ",(0,i.jsx)(n.a,{href:"/docs/es/FormEditor/propertiesForm#form-class",children:"associated a user class to the form"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para obtener informaci\xf3n detallada sobre el objeto de datos del formulario, consulte el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/dialog",children:(0,i.jsx)(n.code,{children:"DIALOG"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,i.jsxs)(n.p,{children:["The value returned by ",(0,i.jsx)(n.strong,{children:"Print form"})," indicates the height of the printable area. This value will be automatically taken into account by the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-printed-height",children:"Get printed height"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["The printer dialog boxes do not appear when you use ",(0,i.jsx)(n.strong,{children:"Print form"}),". The report does not use the print settings that were assigned to the form in the Design environment. There are two ways to specify the print settings before issuing a series of calls to ",(0,i.jsx)(n.strong,{children:"Print form"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Call ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-settings",children:"PRINT SETTINGS"}),". In this case, you let the user choose the settings."]}),"\n",(0,i.jsxs)(n.li,{children:["Call ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"})," and ",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-print-option",children:"GET PRINT OPTION"}),". In this case, print settings are specified programmatically."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Print form"})," builds each printed page in memory. Each page is printed when the page in memory is full or when you call ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"}),". To ensure the printing of the last page after any use of ",(0,i.jsx)(n.strong,{children:"Print form"}),", you must conclude with the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"})," command (except in the context of an ",(0,i.jsx)(n.a,{href:"/docs/es/commands/open-printing-job",children:"OPEN PRINTING JOB"}),", see note). Otherwise, if the last page is not full, it stays in memory and is not printed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," If the command is called in the context of a printing job opened with ",(0,i.jsx)(n.a,{href:"/docs/es/commands/open-printing-job",children:"OPEN PRINTING JOB"}),", you must NOT call ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"})," for the last page because it is automatically printed by the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," command. If you call ",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"})," in this case, a blank page is printed."]}),"\n",(0,i.jsx)(n.p,{children:"This command prints external areas and objects (for example, 4D Write or 4D View areas). The area is reset for each execution of the command."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," Subforms are not printed with ",(0,i.jsx)(n.strong,{children:"Print form"}),". To print only one form with such objects, use ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-record",children:"PRINT RECORD"})," instead."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Print form"})," generates only one ",(0,i.jsxs)(n.a,{href:"/docs/es/Events/onPrintingDetail",children:[(0,i.jsx)(n.code,{children:"On Printing Detail"})," event"]})," for the form method."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server:"})," This command can be executed on 4D Server within the framework of a stored procedure. In this context:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure that no dialog box appears on the server machine (except for a specific requirement)."}),"\n",(0,i.jsx)(n.li,{children:"In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["The following example performs as a ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"})," command would. However, the report uses one of two different forms, depending on whether the record is for a check or a deposit:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Register])\xa0// Seleccionar los registros\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ORDER BY([Register])\xa0// Ordenar los registros\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PRINT SETTINGS\xa0// Mostrar cuadros de di\xe1logo de impresi\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRecord;1;Records in selection([Register]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Register]Type ="Check")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Register];"Check Out")\xa0// Utilice un formulario para cheques\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Register];"Deposit Out")\xa0// Utilice otro formulario para dep\xf3sitos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Register])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK\xa0// Aseg\xfarese de que se imprime la \xfaltima p\xe1gina\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the example of the ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-marker",children:"SET PRINT MARKER"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"This form is used as dialog, then printed with modifications:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(940530).Z+"",width:"810",height:"558"})}),"\n",(0,i.jsx)(n.p,{children:"The form method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Printing Detail)\n\xa0\xa0\xa0\xa0Form.lastname:=Uppercase(Form.lastname)\n\xa0\xa0\xa0\xa0Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))\n\xa0\xa0\xa0\xa0Form.request:=Lowercase(Form.request)\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.p,{children:"The code that calls the dialog then prints its body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$formData:=New object\n\xa0$formData.lastname:="Smith"\n\xa0$formData.firstname:="john"\n\xa0$formData.request:="I need more COFFEE"\n\xa0$win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)\n\xa0DIALOG("Request_obj";$formData)\n\xa0$h:=Print form("Request_var";$formData;Form detail)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-settings",children:"PRINT SETTINGS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},940530:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict6264975.en-46a893baeaa9ea703dc9ca1a2c70ff41.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);