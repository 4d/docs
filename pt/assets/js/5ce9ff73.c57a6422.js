"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74363"],{750723:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands/dialog","title":"DIALOG","description":"DIALOG ( {aTable ;} form {; formData}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/dialog.md","sourceDirName":"commands","slug":"/commands/dialog","permalink":"/docs/pt/commands/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fdialog.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dialog","title":"DIALOG","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL","permalink":"/docs/pt/commands/cancel"},"next":{"title":"Modified","permalink":"/docs/pt/commands/modified"}}'),o=s("785893"),r=s("250065");let i={id:"dialog",title:"DIALOG",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DIALOG"})," ( {",(0,o.jsx)(n.em,{children:"aTable"})," ;} ",(0,o.jsx)(n.em,{children:"form"})," {; ",(0,o.jsx)(n.em,{children:"formData"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"aTable"}),(0,o.jsx)(n.td,{children:"Tabela"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Table owning the form or If omitted: default table or use of project form"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"form"}),(0,o.jsx)(n.td,{children:"Text, Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, or an object describing the form"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"formData"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Data to associate to the form"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Use the same process"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"DIALOG"})," command presents the ",(0,o.jsx)(n.em,{children:"form"})," to the user, along with ",(0,o.jsx)(n.em,{children:"formData"})," parameter(s) (optional)."]}),"\n",(0,o.jsxs)(n.p,{children:["This command is designed to work with customized and advanced user interfaces based on forms. You can use it to display information coming from the database or other locations, or to provide data entry features. Unlike ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"})," or ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/modify-record",children:"MODIFY RECORD"}),", ",(0,o.jsx)(n.strong,{children:"DIALOG"})," gives you full control over the form, its contents and the navigation and validation buttons."]}),"\n",(0,o.jsxs)(n.p,{children:["This command is typically called along with the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"})," to display sophisticated forms, as shown in the following example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(482383).Z+"",width:"976",height:"679"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"DIALOG"})," command can also be used instead of ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/alert",children:"ALERT"}),", ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/confirm",children:"CONFIRM"})," or ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/request",children:"Request"})," when the information to be presented or gathered is more complex than those commands can manage."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"form"})," parameter, you can pass:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the name of a form (project form or table form) to use;"}),"\n",(0,o.jsx)(n.li,{children:"the path (in POSIX syntax) to a valid .json file containing a description of the form to use;"}),"\n",(0,o.jsx)(n.li,{children:"an object containing a description of the form to use."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Optionally, you can pass parameter(s) to the ",(0,o.jsx)(n.em,{children:"form"}),' using a "form data" object. Any properties of the form data object will then be available from within the form context through the ',(0,o.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"}),' command. For example, if you use a form data object containing {"version";"12"}, you will be able to get or set the value of the "version" property in the form by calling:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $v:=Form.version //"12"\n Form.version:=13\n'})}),"\n",(0,o.jsx)(n.p,{children:'To fill the "form data" object, you have two possibilities:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["use the ",(0,o.jsx)(n.em,{children:"formData"})," parameter. Using a local variable for ",(0,o.jsx)(n.em,{children:"formData"})," allows you to safely pass parameters to your forms, whatever the calling context. In particular, if the same form is called from different places in the same process, you will always be able to access its specific values by simply calling ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"}),".myProperty. Moreover, since objects are passed by reference, if the user modifies a property value in the form, it will automatically be saved in the object itself."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/FormEditor/propertiesForm#form-class",children:"associate a user class to the form"}),", in which case 4D will automatically instantiate an object of this class when the form will be loaded. The object properties and functions will be automatically available through the object returned by ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"}),". You could write for example ",(0,o.jsx)(n.code,{children:"Form.myFunction()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"formData"})," parameter has priority over a form class (the class object is not instantiated if a ",(0,o.jsx)(n.em,{children:"formData"})," parameter is passed)."]}),"\n",(0,o.jsxs)(n.li,{children:["If you do not pass the ",(0,o.jsx)(n.em,{children:"formData"})," parameter (or if you pass an undefined object) and no user class is associated to the form, ",(0,o.jsx)(n.strong,{children:"DIALOG"})," creates a new empty object bound to the ",(0,o.jsx)(n.em,{children:"form"}),"."]}),"\n"]})}),"\n",(0,o.jsxs)(n.p,{children:['The dialog is closed by the user either with an "accept" action (triggered by the ak accept standard action, the Enter key, or the ',(0,o.jsx)(n.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"}),' command), or with a "cancel" action (triggered by the ak cancel standard action, the Escape key, or the ',(0,o.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," command). An accept action will set the OK system variable to 1, while a cancel action will set OK to 0."]}),"\n",(0,o.jsxs)(n.p,{children:["Keep in mind that validation does not equal saving: if the dialog includes fields, you must explicitly call the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/save-record",children:"SAVE RECORD"})," command to save any data that has been modified."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.",(0,o.jsx)(n.br,{}),"\nIf you pass the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.",(0,o.jsx)(n.br,{}),"\nThis form then reacts \u201Cnormally\u201D to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," or ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"})," command. If the current process terminates, the forms created in this way are automatically closed in the same way as if a ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," command had been called. This opening mode is particularly useful for displaying a floating palette with a document, without necessarily requiring another process."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can combine the use of the ",(0,o.jsx)(n.strong,{children:"DIALOG"}),"(form;*) syntax with the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/call-form",children:"CALL FORM"})," command to establish communication between the forms."]}),"\n",(0,o.jsxs)(n.li,{children:["You must create a window before calling the ",(0,o.jsx)(n.strong,{children:"DIALOG"}),"(form;*) statement. It is not possible to use the current dialog window in the process nor the window created by default for each process. Otherwise, error -9909 is generated."]}),"\n",(0,o.jsxs)(n.li,{children:["When the ",(0,o.jsx)(n.em,{children:"*"})," parameter is used, the window is closed automatically following a standard action or a call to the ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," or ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"})," command. You do not have to manage the closing of the window itself."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"The following example can be used to create a tool palette:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'  //Display tool palette\n $palette_window:=Open form window("tools";Palette form window)\n DIALOG("tools";*) //Give back the control immediately\n  //Display main document windowl\n $document_window:=Open form window("doc";Plain form window)\n DIALOG("doc")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:'In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(587415).Z+"",width:"748",height:"423"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"}),' The "Children" object field is represented only to show its structure for this example.']}),"\n",(0,o.jsxs)(n.p,{children:["No formul\xe1rio de verifica\xe7\xe3o, voc\xea atribuiu algumas propriedades do objeto ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"})," a vari\xe1veis:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(746377).Z+"",width:"744",height:"275"})}),"\n",(0,o.jsx)(n.p,{children:'Here is the code for the "Check children" button:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $win;$n;$i : Integer\n var $save : Boolean\n ARRAY OBJECT($children;0)\n OB GET ARRAY([Person]Children;"children";$children) //get the children collection\n $save:=False //initialize the save variable\n \n $n:=Size of array($children)\n If($n>0)\n    $win:=Open form window("Edit_Children";Movable form dialog box)\n    SET WINDOW TITLE("Check children for "+[Person]Name)\n    For($i;1;$n) //for each child\n       DIALOG("Edit_Children";$children{$i}) //displays dialog filled with values\n       If(OK=1) //the user clicked OK\n          $save:=True\n       End if\n    End for\n    If($save=True)\n       [Person]Children:=[Person]Children //forces object field update\n    End if\n    CLOSE WINDOW($win)\n Else\n    ALERT("No child to check.")\n End if\n'})}),"\n",(0,o.jsx)(n.p,{children:"The form displays information for each child:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(237425).Z+"",width:"522",height:"268"})}),"\n",(0,o.jsx)(n.p,{children:"If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards)."}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"The following example uses the path to a .json form to display the records in an employee list:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n ALL RECORDS([Personnel])\n DIALOG("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,o.jsx)(n.p,{children:"which displays:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(764439).Z+"",width:"301",height:"363"})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"The following example uses a .json file as an object and modifies a few properties:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $form : Object\n $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))\n $form.windowTitle:="The Avengers"\n $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"\n $form.pages[1].objects.myListBox.borderStyle:="double"\n Open form window($form;Plain form window)\n DIALOG($form;*)\n'})}),"\n",(0,o.jsx)(n.p,{children:"The altered form is displayed with the title, logo and border modified:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(854381).Z+"",width:"379",height:"459"})}),"\n",(0,o.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,o.jsxs)(n.p,{children:["After a call to ",(0,o.jsx)(n.strong,{children:"DIALOG"}),", if the dialog is accepted, OK is set to 1; if it is canceled, OK is set to 0."]}),"\n",(0,o.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/call-form",children:"CALL FORM"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/open-window",children:"Open window"})]}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"40"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"&cross;"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifies variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},237425:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},482383:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3541609.en-1872c62d67cf7b1512478e54d3e53352.png"},746377:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},587415:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},764439:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},854381:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict3688356.en-9c5782b31277d5244713fc620ff3d496.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);