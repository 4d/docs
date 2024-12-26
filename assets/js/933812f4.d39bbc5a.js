"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14935"],{979015:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/dialog","title":"DIALOG","description":"DIALOG ( {aTable ;} form {; formData}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/dialog.md","sourceDirName":"commands-legacy","slug":"/commands/dialog","permalink":"/docs/commands/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdialog.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dialog","title":"DIALOG","slug":"/commands/dialog","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL","permalink":"/docs/commands/cancel"},"next":{"title":"Modified","permalink":"/docs/commands/modified"}}'),r=s("785893"),o=s("250065");let i={id:"dialog",title:"DIALOG",slug:"/commands/dialog",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DIALOG"})," ( {",(0,r.jsx)(n.em,{children:"aTable"})," ;} ",(0,r.jsx)(n.em,{children:"form"})," {; ",(0,r.jsx)(n.em,{children:"formData"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table owning the form or If omitted: default table or use of project form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"form"}),(0,r.jsx)(n.td,{children:"Text, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, oran object describing the form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formData"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Data to associate to the form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Use the same process"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"DIALOG"})," command presents the ",(0,r.jsx)(n.em,{children:"form"})," to the user, along with ",(0,r.jsx)(n.em,{children:"formData"})," parameter(s) (optional)."]}),"\n",(0,r.jsxs)(n.p,{children:["This command is designed to work with customized and advanced user interfaces based on forms. You can use it to display information coming from the database or other locations, or to provide data entry features. Unlike ",(0,r.jsx)(n.a,{href:"/docs/commands/add-record",children:"ADD RECORD"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/modify-record",children:"MODIFY RECORD"}),", ",(0,r.jsx)(n.strong,{children:"DIALOG"})," gives you full control over the form, its contents and the navigation and validation buttons."]}),"\n",(0,r.jsxs)(n.p,{children:["This command is typically called along with the ",(0,r.jsx)(n.a,{href:"/docs/commands/open-form-window",children:"Open form window"})," to display sophisticated forms, as shown in the following example:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(822957).Z+"",width:"976",height:"679"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"DIALOG"})," command can also be used instead of ",(0,r.jsx)(n.a,{href:"/docs/commands/alert",children:"ALERT"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/confirm",children:"CONFIRM"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/request",children:"Request"})," when the information to be presented or gathered is more complex than those commands can manage."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," In converted databases, it's possible to prohibit data entry in dialog boxes (thus limiting data entry to variables only) using an option in the 4D Database Settings (Compatibility page). This restriction corresponds to the operation of former versions of 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"form"})," parameter, you can pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the name of a form (project form or table form) to use;"}),"\n",(0,r.jsxs)(n.li,{children:["the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See ",(0,r.jsx)(n.em,{children:"Form file path"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"an object containing a description of the form to use."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, you can pass parameter(s) to the ",(0,r.jsx)(n.em,{children:"form"})," using the ",(0,r.jsx)(n.em,{children:"formData"})," object. Any properties of the ",(0,r.jsx)(n.em,{children:"formData"})," object will then be available from within the form context through the ",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"}),' command. For example, if you pass an object containing {"version","12"} in ',(0,r.jsx)(n.em,{children:"formData"}),', you will be able to get the value of the "version" property in the form by calling:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$v:=Form.version\xa0//"12"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using a local variable for ",(0,r.jsx)(n.em,{children:"formData"}),", this feature allows you to safely pass parameters to your forms, whatever the calling context. In particular, if the same form is called from different places in the same process, you will always be able to access its specific values by simply calling ",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"}),".myProperty. Moreover, since objects are passed by reference, if the user modifies a property value in the form, it will automatically be saved in the object itself.",(0,r.jsx)(n.br,{}),"\nBy combining the ",(0,r.jsx)(n.em,{children:"formData"})," object and the ",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"})," command, you can send parameters to the form or read parameters from the form at any moment with clean and safe code."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you do not pass the ",(0,r.jsx)(n.em,{children:"formData"})," parameter or if you pass an undefined object, ",(0,r.jsx)(n.strong,{children:"DIALOG"})," automatically creates a new empty object bound to the ",(0,r.jsx)(n.em,{children:"form"}),", available through the ",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:['The dialog is closed by the user either with an "accept" action (triggered by the ak accept standard action, the Enter key, or the ',(0,r.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"}),' command), or with a "cancel" action (triggered by the ak cancel standard action, the Escape key, or the ',(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," command). An accept action will set the OK system variable to 1, while a cancel action will set OK to 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Keep in mind that validation does not equal saving: if the dialog includes fields, you must explicitly call the ",(0,r.jsx)(n.a,{href:"/docs/commands/save-record",children:"SAVE RECORD"})," command to save any data that has been modified."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.",(0,r.jsx)(n.br,{}),"\nThis form then reacts \u201Cnormally\u201D to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the ",(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"})," command. If the current process terminates, the forms created in this way are automatically closed in the same way as if a ",(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," command had been called. This opening mode is particularly useful for displaying a floating palette with a document, without necessarily requiring another process."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can combine the use of the ",(0,r.jsx)(n.strong,{children:"DIALOG"}),"(form;*) syntax with the ",(0,r.jsx)(n.a,{href:"/docs/commands/call-form",children:"CALL FORM"})," command to establish communication between the forms."]}),"\n",(0,r.jsxs)(n.li,{children:["You must create a window before calling the ",(0,r.jsx)(n.strong,{children:"DIALOG"}),"(form;*) statement. It is not possible to use the current dialog window in the process nor the window created by default for each process. Otherwise, error -9909 is generated."]}),"\n",(0,r.jsxs)(n.li,{children:["When the ",(0,r.jsx)(n.em,{children:"*"})," parameter is used, the window is closed automatically following a standard action or a call to the ",(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"})," command. You do not have to manage the closing of the window itself."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"The following example can be used to create a tool palette:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Display tool palette\n\xa0$palette_window:=Open form window("tools";Palette form window)\n\xa0DIALOG("tools";*)\xa0//Give back the control immediately\n\xa0\xa0//Display main document windowl\n\xa0$document_window:=Open form window("doc";Plain form window)\n\xa0DIALOG("doc")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:'In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(974883).Z+"",width:"748",height:"423"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' The "Children" object field is represented only to show its structure for this example.']}),"\n",(0,r.jsxs)(n.p,{children:["In the verification form, you have assigned some ",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"})," object properties to variables:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(71030).Z+"",width:"744",height:"275"})}),"\n",(0,r.jsx)(n.p,{children:'Here is the code for the "Check children" button:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $win;$n;$i : Integer\n\xa0var $save : Boolean\n\xa0ARRAY OBJECT($children;0)\n\xa0OB GET ARRAY([Person]Children;"children";$children)\xa0//get the children collection\n\xa0$save:=False\xa0//initialize the save variable\n\xa0\n\xa0$n:=Size of array($children)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$win:=Open form window("Edit_Children";Movable form dialog box)\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Check children for "+[Person]Name)\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0//for each child\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Edit_Children";$children{$i})\xa0//displays dialog filled with values\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\xa0//the user clicked OK\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$save:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0If($save=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Person]Children:=[Person]Children\xa0//forces object field update\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0CLOSE WINDOW($win)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("No child to check.")\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This example requires that object notation be enabled in the database (see ",(0,r.jsx)(n.em,{children:"Compatibility page"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"The form displays information for each child:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(502268).Z+"",width:"522",height:"268"})}),"\n",(0,r.jsx)(n.p,{children:"If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards)."}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"The following example uses the path to a .json form to display the records in an employee list:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n\xa0ALL RECORDS([Personnel])\n\xa0DIALOG("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,r.jsx)(n.p,{children:"which displays:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(585564).Z+"",width:"301",height:"363"})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.p,{children:"The following example uses a .json file as an object and modifies a few properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $form : Object\n\xa0$form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))\n\xa0$form.windowTitle:="The Avengers"\n\xa0$form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"\n\xa0$form.pages[1].objects.myListBox.borderStyle:="double"\n\xa0Open form window($form;Plain form window)\n\xa0DIALOG($form;*)\n'})}),"\n",(0,r.jsx)(n.p,{children:"The altered form is displayed with the title, logo and border modified:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(184694).Z+"",width:"379",height:"459"})}),"\n",(0,r.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(n.p,{children:["After a call to ",(0,r.jsx)(n.strong,{children:"DIALOG"}),", if the dialog is accepted, OK is set to 1; if it is canceled, OK is set to 0."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/add-record",children:"ADD RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/call-form",children:"CALL FORM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/form",children:"Form"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/open-window",children:"Open window"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"40"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},502268:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},822957:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3541609.en-1872c62d67cf7b1512478e54d3e53352.png"},71030:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},974883:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},585564:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},184694:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3688356.en-9c5782b31277d5244713fc620ff3d496.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);