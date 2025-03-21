"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31960"],{917322:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/qr-report","title":"QR REPORT","description":"QR REPORT ( {aTable ;} document {; methodName}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-report","permalink":"/docs/commands/qr-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-report.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-report","title":"QR REPORT","slug":"/commands/qr-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR ON COMMAND","permalink":"/docs/commands/qr-on-command"},"next":{"title":"QR REPORT TO BLOB","permalink":"/docs/commands/qr-report-to-blob"}}'),s=t("785893"),d=t("250065");let i={id:"qr-report",title:"QR REPORT",slug:"/commands/qr-report",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR REPORT"})," ( {",(0,s.jsx)(n.em,{children:"aTable"})," ;} ",(0,s.jsx)(n.em,{children:"document"})," {; ",(0,s.jsx)(n.em,{children:"methodName"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table to use for the report, or Default table if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Quick Report document to load"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of method to call"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Deletion of printing dialog boxes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR REPORT"})," prints a report for ",(0,s.jsx)(n.em,{children:"aTable"}),", created with the Quick Report editor. This editor allows users to create their own reports. For more information about creating reports with the Quick Report editor, refer to the ",(0,s.jsx)(n.em,{children:"Quick reports"})," section of the 4D ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The editor does not appear if the ",(0,s.jsx)(n.em,{children:"table"})," has been declared \u201CInvisible.\u201D"]}),"\n",(0,s.jsxs)(n.li,{children:["When the editor is called using the ",(0,s.jsx)(n.strong,{children:"QR REPORT"})," command, relations between tables keep their manual status, where applicable. This allows the developer to manage this status himself using the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})," command. However, keep in mind that automatic features are disabled when related tables are being viewed in a list form displayed using ",(0,s.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"}),", or a subform. See ",(0,s.jsx)(n.em,{children:"Automatic and manual relations"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The editor is called in an external window and it is not possible to use the ",(0,s.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})," command in this context. However, you can use the ",(0,s.jsx)(n.em,{children:"methodName"})," parameter to execute custom code when an interface command is activated (see below)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"document"})," parameter is a report document that was created with the Quick Report editor and saved on disk. The document stores the specifications of the report, not the records to be printed.",(0,s.jsx)(n.br,{}),'\nIf an empty string ("") is specified for ',(0,s.jsx)(n.em,{children:"document"}),", ",(0,s.jsx)(n.strong,{children:"QR REPORT"})," displays an Open File dialog box and the user can select the report to print.",(0,s.jsx)(n.br,{}),"\nIf the ",(0,s.jsx)(n.em,{children:"document"})," parameter specifies a document that does not exist (for example, pass ",(0,s.jsx)(n.a,{href:"/docs/commands/char",children:"Char"}),(0,s.jsx)(n.strong,{children:"(1)"})," in ",(0,s.jsx)(n.em,{children:"document"}),"), the Quick Report editor is displayed."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"methodName"})," parameter designates a 4D project method that will be executed each time a document management command of the Quick Report editor is called by a user click on a button. Using this parameter is equivalent to using ",(0,s.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})," in the context of the Quick Report editor window (",(0,s.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})," only works within the context of an included area). For example, you can use this parameter to change the character set used by the quick report. The ",(0,s.jsx)(n.em,{children:"methodName"})," method receives two parameters:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Area reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Number of the command selected. To compare with the following constants of the ",(0,s.jsx)(n.em,{children:"QR Commands"})," theme (only listed events are supported):                                    ",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Constant"}),(0,s.jsx)(n.td,{children:"Value"}),(0,s.jsx)(n.td,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd generate"}),(0,s.jsx)(n.td,{children:"2008"}),(0,s.jsxs)(n.td,{children:["Use of command ",(0,s.jsx)(n.a,{href:"/docs/commands/qr-run",children:"QR RUN"})," recommended"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd open"}),(0,s.jsx)(n.td,{children:"2001"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd page setup"}),(0,s.jsx)(n.td,{children:"2006"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd print preview"}),(0,s.jsx)(n.td,{children:"2007"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd save"}),(0,s.jsx)(n.td,{children:"2002"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd save as"}),(0,s.jsx)(n.td,{children:"2003"}),(0,s.jsx)(n.td,{})]})]})]})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you want to compile your database, you must declare the $1 et $2 parameters explicitly as longints, even if you do not use them."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to execute the initial command chosen by the user, use the following statement in the ",(0,s.jsx)(n.em,{children:"methodName"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR EXECUTE COMMAND($1;$2)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"methodName"}),' parameter is an empty string ("") or is omitted, no method is called and the standard operation of ',(0,s.jsx)(n.strong,{children:"QR REPORT"})," is applied."]}),"\n",(0,s.jsxs)(n.p,{children:["After a report is selected, the dialog boxes for printing are displayed, unless the ",(0,s.jsx)(n.em,{children:"*"})," parameter is specified. If this parameter is specified, these dialog boxes are not displayed. The report is then printed."]}),"\n",(0,s.jsxs)(n.p,{children:["If the Quick Report editor is not involved, the OK variable is set to 1 if a report is printed; otherwise, it is set to 0 (zero) (i.e., if the user clicked ",(0,s.jsx)(n.strong,{children:"Cancel"})," in the printing dialog boxes)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," This command can be executed on 4D Server within the framework of a stored procedure. In this context:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the ",(0,s.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,s.jsx)(n.li,{children:"The syntax which makes the Quick Report editor appear does not work with 4D Server; in this case, the system variable OK is set to 0."}),"\n",(0,s.jsx)(n.li,{children:"In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then automatically prints the report \u201CDetailed Listing\u201D:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"Detailed Listing";*)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then lets the user choose which report to print:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then displays the Quick Report editor so the user can design, save, load and print any reports:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];Char(1))\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the example of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsxs)(n.p,{children:["You want to convert the character set used in a quick report called using ",(0,s.jsx)(n.strong,{children:"QR REPORT"})," into Mac Roman:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QR REPORT([MyTable];Char(1);"myCallbackMeth")\n'})}),"\n",(0,s.jsx)(n.p,{children:"The myCallbackMeth method converts the report when it is generated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $1;$2 : Integer\n\xa0If($2=qr cmd generate)\xa0//if we generated a report\n\xa0\xa0\xa0\xa0var $myblob : Blob\n\xa0\xa0\xa0\xa0var $path;$text : Text\n\xa0\xa0\xa0\xa0var $type : Integer\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\xa0//execution of command\n\xa0\xa0\xa0\xa0QR GET DESTINATION($1;$type;$path)\xa0//retrieval of destination\n\xa0\xa0\xa0\xa0If(($type=qr HTML file)|($type=qr text file))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($path;$myblob)\n\xa0\xa0//conversion to text using UTF-8\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=Convert to text($myblob;"UTF-8")\n\xa0\xa0//use of MacRoman set\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONVERT FROM TEXT($text;"MacRoman";$myblob)\n\xa0\xa0//Return of converted report\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($path;$myblob)\n\xa0\xa0\xa0\xa0End if\n\xa0Else\xa0//otherwise, execution of the command\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/print-label",children:"PRINT LABEL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"197"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);