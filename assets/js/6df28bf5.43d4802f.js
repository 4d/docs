"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42468"],{871808:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/display-selection","title":"DISPLAY SELECTION","description":"DISPLAY SELECTION ( {; selectMode}{; enterList}{; }{; } )","source":"@site/versioned_docs/version-20-R8/commands-legacy/display-selection.md","sourceDirName":"commands-legacy","slug":"/commands/display-selection","permalink":"/docs/commands/display-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"display-selection","title":"DISPLAY SELECTION","slug":"/commands/display-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE SELECTION","permalink":"/docs/commands/delete-selection"},"next":{"title":"Displayed line number","permalink":"/docs/commands/displayed-line-number"}}'),r=t("785893"),o=t("250065");let i={id:"display-selection",title:"DISPLAY SELECTION",slug:"/commands/display-selection",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," ( {",(0,r.jsx)(n.em,{children:"aTable"}),"}{; ",(0,r.jsx)(n.em,{children:"selectMode"}),"}{; ",(0,r.jsx)(n.em,{children:"enterList"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table to display, or Default table, if omitted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selectMode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Selection mode"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enterList"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Authorize Enter in list option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Use output form for one record selection and hide scroll bars in the input form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Show scroll bars in the input form (overrides second option of first optional *)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," displays the selection of ",(0,r.jsx)(n.em,{children:"aTable"}),", using the output form. The records are displayed in a scrollable list similar to that of the Design environment. If the user double-clicks a record, by default the record is displayed in the current input form. The list is displayed in the frontmost window."]}),"\n",(0,r.jsxs)(n.p,{children:["To display a selection and also modify a record in the current input form after you have double-clicked on it (as you do in the Design environment window), or via the Enter in list mode, use ",(0,r.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," instead of ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"}),".",(0,r.jsx)(n.br,{}),"\nAll of the following information applies to both commands, except for the information on modifying records."]}),"\n",(0,r.jsxs)(n.p,{children:["After ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," is executed, there may not be a current record. Use a command such as ",(0,r.jsx)(n.a,{href:"/docs/commands/first-record",children:"FIRST RECORD"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/last-record",children:"LAST RECORD"})," to select one."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"selectMode"})," parameter is used to set the possibilities for selecting records in the list using the mouse. You can pass one of the following constants of the \u201C",(0,r.jsx)(n.em,{children:"Form Parameters"}),"\u201D theme in this parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Multiple selection"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["The user can select several records at once. To select adjacent records, click on the first record to be selected, then press the ",(0,r.jsx)(n.strong,{children:"Shift"})," key before clicking on the last record you want to include in the selection. To select non-adjacent records, click on each record separately while holding down the ",(0,r.jsx)(n.strong,{children:"Ctrl"})," (under Windows) or ",(0,r.jsx)(n.strong,{children:"Command"})," (under Mac OS) key."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No selection"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"It is not be possible to select a record in the list"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Single selection"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Only one record can be selected at a time"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not pass the ",(0,r.jsx)(n.em,{children:"selectMode"})," parameter, the \u201CMultiple Selection\u201D mode is used by default."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"enterList"})," parameter lets you authorize the \u201CEnter in List\u201D mode for the displayed list. This lets the user select and modify the record values directly in the output form. Pass ",(0,r.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"})," to enable this mode or ",(0,r.jsx)(n.a,{href:"/docs/commands/false",title:"False",children:"False"})," to disable it. By default, if you do not pass the ",(0,r.jsx)(n.em,{children:"enterList"})," parameter, the \u201CEnter in List\u201D mode is disabled.",(0,r.jsx)(n.br,{}),"\nKeep in mind that with the ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," command, this parameter only allows the selection of the values in the list and not their modification. In fact, the ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," command loads the records of the current selection in Read only in the current process. Only the ",(0,r.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," command allows the actual entry of values."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," command can be used to enable or disable the Enter in list mode on the fly."]}),"\n",(0,r.jsxs)(n.p,{children:["If the selection contains only one record and the first optional ",(0,r.jsx)(n.em,{children:"*"})," is not used, the record appears in the input form instead of the output form. If the first optional ",(0,r.jsx)(n.em,{children:"*"})," is specified, a one-record selection is displayed, using the output form. If the first optional ",(0,r.jsx)(n.em,{children:"*"})," is specified and the user displays the record in the input form by double-clicking on it, the scroll bars will be hidden in the input form. To reverse this effect, pass the second optional *."]}),"\n",(0,r.jsxs)(n.p,{children:["Custom buttons may be put in the Footer or Header area of the output form in order to terminate the execution of the ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," command. You can use automatic Accept or Cancel buttons to exit, or use an object method that calls ",(0,r.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"}),". When an output form called by the ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," command has no buttons, only the ",(0,r.jsx)(n.strong,{children:"Escape"})," (Windows) or ",(0,r.jsx)(n.strong,{children:"Esc"})," (Mac OS) key can be used to exit the list."]}),"\n",(0,r.jsxs)(n.p,{children:["During and after execution of ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"}),", the records that the user highlighted (selected) are kept in a set named UserSet. The UserSet is available within the selection display for object methods when a button is clicked or a menu item is chosen. It is also available to the project method that called ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," after the command was completed."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["The following example selects all the records in the [People] table. It then uses ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," to display the records, and allows the user to select the records to print. Finally, it selects the records with ",(0,r.jsx)(n.a,{href:"/docs/commands/use-set",children:"USE SET"}),", and prints them with ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([People])\xa0// Select all records\n\xa0DISPLAY SELECTION([People];*)\xa0// Display the records\n\xa0USE SET("UserSet")\xa0// Use only records picked by user\n\xa0PRINT SELECTION([People])\xa0// Print the records that the user picked\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["See example #6 for the ",(0,r.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})," command. This example shows all the tests you may need to check in order to fully monitor the events that occur during a DISPLAY SELECTION."]}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsxs)(n.p,{children:["To reproduce the functionality provided by, for example, the ",(0,r.jsx)(n.strong,{children:"Records"})," menu of the Design environment when you use ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," in the Application environment, proceed as follows:"]}),"\n",(0,r.jsx)(n.p,{children:"a. In the Design environment, create a menu bar with the menu commands you want, for example, Show All, Query and Order By."}),"\n",(0,r.jsxs)(n.p,{children:["b. Associate this menu bar (using the \u201CAssociated menu bar\u201D menu in the form properties dialog box) with the output form used with ",(0,r.jsx)(n.strong,{children:"DISPLAY SELECTION"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"c. Associate the following project methods to your menu commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M_SHOW_ALL (attached to menu item Show All)\n\xa0$vpCurTable:=Current form table\n\xa0ALL RECORDS($vpCurTable->)\n\xa0\n\xa0\xa0// M_QUERY (attached to menu item Query)\n\xa0$vpCurTable:=Current form table\n\xa0QUERY($vpCurTable->)\n\xa0\n\xa0\xa0// M_ORDER_BY (attached to menu item Order By)\n\xa0$vpCurTable:=Current form table\n\xa0ORDER BY($vpCurTable->)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use other commands, such as ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-report",children:"QR REPORT"}),", and so on, to provide all the \u201Cstandard\u201D menu options you may want each time you display or modify a selection in the Application environment. Thanks to the ",(0,r.jsx)(n.a,{href:"/docs/commands/current-form-table",children:"Current form table"})," command, these methods are generic, and the menu bar they support can be attached to any output form of any table."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Sets"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"59"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);