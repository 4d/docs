"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15692"],{304487:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/set-print-option","title":"SET PRINT OPTION","description":"SET PRINT OPTION ( option ; value1 {; value2} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-print-option.md","sourceDirName":"commands-legacy","slug":"/commands/set-print-option","permalink":"/docs/commands/set-print-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-print-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-print-option","title":"SET PRINT OPTION","slug":"/commands/set-print-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PRINT MARKER","permalink":"/docs/commands/set-print-marker"},"next":{"title":"SET PRINT PREVIEW","permalink":"/docs/commands/set-print-preview"}}'),s=t("785893"),r=t("250065");let o={id:"set-print-option",title:"SET PRINT OPTION",slug:"/commands/set-print-option",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"options and values",id:"options-and-values",level:3},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," ( ",(0,s.jsx)(n.em,{children:"option"})," ; ",(0,s.jsx)(n.em,{children:"value1"})," {; ",(0,s.jsx)(n.em,{children:"value2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Option number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value1"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Value 1 of the option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value2"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Value 2 of the option"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," command is used to modify, by programming, the value of a print option. Each option defined using this command is applied to the",(0,s.jsx)(n.a,{href:"/docs/settings/compatibility",children:" current 4D printing settings"})," as long as no other command that modifies print parameters (",(0,s.jsx)(n.a,{href:"/docs/commands/print-settings",children:"PRINT SETTINGS"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," without the ",(0,s.jsx)(n.em,{children:">"})," parameter, etc.) is called. If a print job has been opened (e.g. with ",(0,s.jsx)(n.a,{href:"/docs/commands/open-printing-job",children:"OPEN PRINTING JOB"}),"), the option is set for the job and cannot be modified as long as the job has not terminated (except for the Orientation option, see below)."]}),"\n",(0,s.jsx)(n.h3,{id:"options-and-values",children:"options and values"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"option"})," parameter allows you to indicate the option to be modified. You can pass one of the predefined constants of the \u201C",(0,s.jsx)(n.em,{children:"Print Options"}),"\u201D theme listed below. Pass the new value(s) of the specified ",(0,s.jsx)(n.em,{children:"option"})," in the ",(0,s.jsx)(n.em,{children:"value1"})," and (optionally) ",(0,s.jsx)(n.em,{children:"value2"})," parameters. The number and nature of the values to be passed depend on the type of option specified."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Paper option"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["If you use only ",(0,s.jsx)(n.em,{children:"value1"}),", it contains the name of the paper. If you use both parameters, ",(0,s.jsx)(n.em,{children:"value1"})," contains the paper width and ",(0,s.jsx)(n.em,{children:"value2"})," contains the paper height. The width and height are expressed in points. Use the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-option-values",children:"PRINT OPTION VALUES"})," command to get the name, height and width of all the paper formats offered by the printer."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation option"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"})," only: 1=Portrait, 2=Landscape. If a different orientation option is used, ",(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"})," returns 0 in ",(0,s.jsx)(n.em,{children:"value1"}),". This option can be called within a print job, which means that you can switch from portrait to landscape, or vice versa, during the same print job."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scale option"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"})," only: scale value in percentage. Be careful, some printers do not allow you to modify the scale. If you pass an invalid value, the property is reset to 100% at the time of printing."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Number of copies option"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"})," only: number of copies to be printed."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Paper source option"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:["(Windows only) ",(0,s.jsx)(n.em,{children:"value1"})," only: number corresponding to the index, in the array of trays returned by the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-option-values",children:"PRINT OPTION VALUES"})," command, of the paper tray to be used. This option can only be used under Windows."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Destination option"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"}),": code specifying the type of print destination: 1=Printer, 2=File (PS on Mac), 3=PDF file, 5=Screen (macOS driver option).",(0,s.jsx)(n.br,{}),"If ",(0,s.jsx)(n.em,{children:"value1"})," is different from 1 or 5, ",(0,s.jsx)(n.em,{children:"value2"})," contains pathname for resulting document. This path will be used until another path is specified. If a file with the same name already exists at the destination location, it will be replaced. With ",(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"}),", if the current value is not in the predefined list, ",(0,s.jsx)(n.em,{children:"value1"})," contains -1 and the system variable OK is set to 1. If an error occurs, ",(0,s.jsx)(n.em,{children:"value1"})," and the system variable OK are set to 0. ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.br,{}),"Note (Windows)"]}),": To print PDF on Windows, you have to call ",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"(Generic PDF driver) and set the printing destination to 2 (File) or 3 (PDF File). Setting 3 lets you write multi-platform code."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Double sided option"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"}),": 0=Single-sided or standard, 1=Double-sided. If ",(0,s.jsx)(n.em,{children:"value1"}),"=1, ",(0,s.jsx)(n.em,{children:"value2"})," contains the binding: 0=Left binding (default value), 1=Top binding."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Spooler document name option"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"})," only: name of the current print document, which appears in the list of spooler documents. The name defined by this statement will be used for all the print documents of the session for as long as a new name or an empty string is not passed. To use or restore standard operation (using the method name in the case of a method, the table name for a record, etc.), pass an empty string in ",(0,s.jsx)(n.em,{children:"value1"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Page range option"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"value1"}),"=first page to print (default value is 1) and (optional) ",(0,s.jsx)(n.em,{children:"value2"}),"=number of the last page to print (default value -1 = end of document)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Legacy printing layer option"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsxs)(n.td,{children:["(Windows only) ",(0,s.jsx)(n.em,{children:"value1"})," only: 1=select the GDI-based legacy printing layer for the subsequent printing jobs. 0=select the D2D printing layer (default). This selector is mainly intended to allow legacy plug-ins to print inside 4D jobs in 4D applications on Windows."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Print preview option"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsxs)(n.td,{children:["(Windows only) ",(0,s.jsx)(n.em,{children:"value1"}),": Format to use for print previews on Windows. Available values: kp preview automatic (default): Use XPS printer and viewer if available, otherwise use PDF printer or viewer if available, otherwise generate an error. kp preview XPS: Use XPS printer and viewer if available, otherwise generate an error. kp preview PDF: Use PDF printer and viewer if available, otherwise generate an error. ",(0,s.jsx)(n.em,{children:"value2"})," (can be used with ",(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"})," only): Print preview format actually used on Windows (can differ from ",(0,s.jsx)(n.em,{children:"value1"})," depending on the configuration). Available values: kp preview none: No format available. kp preview XPS: XPS printer and viewer used. kp preview PDF: PDF printer and viewer used."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Once set using this command, a print option is kept throughout the duration of the session for the entire 4D application. It will be used by the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/qr-report",children:"QR REPORT"})," and ",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-print",children:"WP PRINT"})," commands, as well as for all 4D printing, including that in Design mode."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It is indispensable to use the optional ",(0,s.jsx)(n.em,{children:">"})," parameter with the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," commands in order to avoid resetting the print options that were set using the ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," command mainly supports PostScript printers. You can use this command with other types of printers, such as PCL or Ink, but in this case, it is possible that some options may not be available."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The value of Orientation option can be modified within the same print job. Note that the option must have been set before the ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([People])\n\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;1)\xa0//portrait\n\xa0\xa0\xa0\xa0Print form([People];"Vertical_Form")\n\xa0\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;2)\xa0//landscape\n\xa0\xa0\xa0\xa0PAGE BREAK\xa0//must be called imperatively AFTER the option\n\xa0\xa0\xa0\xa0Print form([People];"Horiz_Form")\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"The system variable OK is set to 1 if the command has been executed correctly; otherwise, it is set to 0."}),"\n",(0,s.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(n.p,{children:["If the value passed for an ",(0,s.jsx)(n.em,{children:"option"})," is invalid or if it is not available on the printer, the command returns an error (that you can intercept using an error-handling method installed by the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command) and the current value of the option remains unchanged."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-print-option",children:"GET PRINT OPTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Print Options"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"733"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);