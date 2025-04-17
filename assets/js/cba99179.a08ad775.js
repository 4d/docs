"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14443"],{147214:function(e,A,n){n.r(A),n.d(A,{default:()=>l,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/call-form","title":"CALL FORM","description":"CALL FORM ( window ; formula {; param}{; param2 ; ... ; paramN} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/call-form.md","sourceDirName":"commands-legacy","slug":"/commands/call-form","permalink":"/docs/commands/call-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-form.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"call-form","title":"CALL FORM","slug":"/commands/call-form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before","permalink":"/docs/commands/before"},"next":{"title":"CALL SUBFORM CONTAINER","permalink":"/docs/commands/call-subform-container"}}'),s=n("785893"),t=n("250065");let o={id:"call-form",title:"CALL FORM",slug:"/commands/call-form",displayed_sidebar:"docs"},i=void 0,a={},d=[{value:"Error management",id:"error-management",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let A={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.strong,{children:"CALL FORM"})," ( ",(0,s.jsx)(A.em,{children:"window"})," ; ",(0,s.jsx)(A.em,{children:"formula"})," {; ",(0,s.jsx)(A.em,{children:"param"}),"}{; ",(0,s.jsx)(A.em,{children:"param2"})," ; ... ; ",(0,s.jsx)(A.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(A.table,{children:[(0,s.jsx)(A.thead,{children:(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.th,{children:"Parameter"}),(0,s.jsx)(A.th,{children:"Type"}),(0,s.jsx)(A.th,{}),(0,s.jsx)(A.th,{children:"Description"})]})}),(0,s.jsxs)(A.tbody,{children:[(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"window"}),(0,s.jsx)(A.td,{children:"Integer"}),(0,s.jsx)(A.td,{children:"\u2192"}),(0,s.jsx)(A.td,{children:"Window reference number"})]}),(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"formula"}),(0,s.jsx)(A.td,{children:"Object, Text"}),(0,s.jsx)(A.td,{children:"\u2192"}),(0,s.jsx)(A.td,{children:"Formula object or Name of project method"})]}),(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"param"}),(0,s.jsx)(A.td,{children:"Expression"}),(0,s.jsx)(A.td,{children:"\u2192"}),(0,s.jsx)(A.td,{children:"Parameter(s) passed to formula"})]})]})]}),"\n",(0,s.jsx)(A.h2,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(A.p,{children:["The ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," command executes the 4D code designated in ",(0,s.jsx)(A.em,{children:"formula"})," with the optional ",(0,s.jsx)(A.em,{children:"param"}),"(s) in the context of a form displayed in a ",(0,s.jsx)(A.em,{children:"window"}),", regardless of the process owning the window."]}),"\n",(0,s.jsxs)(A.p,{children:["Just like in the worker-based interprocess communication feature (see ",(0,s.jsx)(A.em,{children:"About workers"}),"), a message box is associated with the window and can be used when the window displays a form (after the On Load form event). ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," encapsulates the formula and its arguments in a message that is posted in the window's message box. The form then executes the message in its own process. The calling process can be cooperative or preemptive, thus this feature allows a preemptive process to exchange information with forms."]}),"\n",(0,s.jsxs)(A.p,{children:["In ",(0,s.jsx)(A.em,{children:"window"}),", you pass the window reference number of the window displaying the called form."]}),"\n",(0,s.jsxs)(A.p,{children:["In ",(0,s.jsx)(A.em,{children:"formula"}),", you designate the 4D code to be executed in the context of the ",(0,s.jsx)(A.em,{children:"window"})," parent process. You can pass either:"]}),"\n",(0,s.jsxs)(A.ul,{children:["\n",(0,s.jsxs)(A.li,{children:["a ",(0,s.jsx)(A.strong,{children:"formula object"})," (see ",(0,s.jsx)(A.em,{children:"Formula Objects"}),"). Formula objects can encapsulate any executable expressions, including functions and project methods;"]}),"\n",(0,s.jsxs)(A.li,{children:["a ",(0,s.jsx)(A.strong,{children:"string"})," containing the name of a project method."]}),"\n"]}),"\n",(0,s.jsxs)(A.p,{children:["You can also pass parameters to the formula using one or more ",(0,s.jsx)(A.em,{children:"param"})," parameters. You can use ",(0,s.jsx)(A.em,{children:"sequential parameters"})," or, if the formula expression is a function or a project method, ",(0,s.jsx)(A.em,{children:"named parameters"}),". Upon starting execution in the context of the form, the process formula receives the parameter values either in the named parameters, or in ",(0,s.jsx)(A.em,{children:"$1"}),", ",(0,s.jsx)(A.em,{children:"$2"}),", and so on. Remember that arrays cannot be passed as parameters. Furthermore, in the context of the ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," command, the following additional considerations need to be taken into account:"]}),"\n",(0,s.jsxs)(A.ul,{children:["\n",(0,s.jsx)(A.li,{children:"Pointers to tables or fields are allowed."}),"\n",(0,s.jsx)(A.li,{children:"Pointers to variables, particularly local and process variables, are not recommended since these variables may be undefined at the moment they are being accessed by the process method."}),"\n",(0,s.jsxs)(A.li,{children:["If you pass an Object or a Collection type parameter, 4D creates a copy of the object or the collection in the destination process (instead of a reference) if the form is in a process different from the one calling the ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," command."]}),"\n"]}),"\n",(0,s.jsx)(A.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(A.p,{children:["You can use the ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," command to pass custom settings to a form, for example configuration values, without having to use process variables:"]}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-4d",children:'\xa0$win:=Open form window("form")\n\xa0CALL FORM($win;Formula(configure);param1;param2)\n\xa0DIALOG("form")\n'})}),"\n",(0,s.jsx)(A.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(A.p,{children:"You want to open two different dialog windows from the same form, but with different background colors and different messages. You also want to send messages afterwards and display them in each dialog window."}),"\n",(0,s.jsx)(A.p,{children:"In the main form, a button opens the two dialogs:"}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-4d",children:'\xa0\xa0//Object method to create forms\n\xa0\xa0//First window\n\xa0formRef1:=Open form window("FormMessage";Palette form window;On the left)\n\xa0SET WINDOW TITLE("MyForm1";formRef1)\n\xa0DIALOG("FormMessage";*)\n\xa0SHOW WINDOW(formRef1)\n\xa0\n\xa0\xa0//Second window\n\xa0formRef2:=Open form window("FormMessage";Palette form window;On the left+500)\n\xa0SET WINDOW TITLE("MyForm2";formRef2)\n\xa0DIALOG("FormMessage";*)\n\xa0SHOW WINDOW(formRef2)\n\xa0\n\xa0\xa0//Send colors\n\xa0CALL FORM(formRef1;"doSetColor";0x00E6F2FF)\n\xa0CALL FORM(formRef2;"doSetColor";0x00F2E6FF)\n\xa0\xa0//Create messages\n\xa0CALL FORM(formRef1;"doAddMessage";Current process name;"Hello Form 1")\n\xa0CALL FORM(formRef2;"doAddMessage";Current process name;"Hello Form 2")\n'})}),"\n",(0,s.jsxs)(A.p,{children:["The ",(0,s.jsx)(A.em,{children:"doAddMessage"}),' method only adds a row in the list box in the "FormMessage" form:']}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-4d",children:'\xa0#DECLARE ($caller : Text ; $message : Text)\xa0//Caller name\n\xa0\xa0//Message to display\n\xa0\xa0//Receive message from $message and log the message in the list box\n\xa0$p:=OBJECT Get pointer(Object named;"Column1")\n\xa0INSERT IN ARRAY($p->;1)\n\xa0$p->{1}:=$caller+" sends "+$message\n'})}),"\n",(0,s.jsx)(A.p,{children:"At runtime, you get the following result:"}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{src:n(958029).Z+"",width:"728",height:"339"})}),"\n",(0,s.jsxs)(A.p,{children:["You can then add other messages by executing the ",(0,s.jsx)(A.strong,{children:"CALL FORM"})," command again:"]}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-4d",children:'\xa0CALL FORM(formRef1;"doAddMessage";Current process name;"Hello 2 Form 1")\n\xa0CALL FORM(formRef2;"doAddMessage";Current process name;"Hello 2 Form 2")\n'})}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{src:n(976366).Z+"",width:"730",height:"343"})}),"\n",(0,s.jsx)(A.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"}),(0,s.jsx)(A.br,{}),"\n",(0,s.jsx)(A.a,{href:"/docs/commands/dialog",children:"DIALOG"})]}),"\n",(0,s.jsx)(A.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(A.table,{children:[(0,s.jsx)(A.thead,{children:(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.th,{}),(0,s.jsx)(A.th,{})]})}),(0,s.jsxs)(A.tbody,{children:[(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"Command number"}),(0,s.jsx)(A.td,{children:"1391"})]}),(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"Thread safe"}),(0,s.jsx)(A.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:A}={...(0,t.a)(),...e.components};return A?(0,s.jsx)(A,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},958029:function(e,A,n){n.d(A,{Z:function(){return r}});let r="data:image/png;base64,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"},976366:function(e,A,n){n.d(A,{Z:function(){return r}});let r=n.p+"assets/images/pict2896833.en-bb285df41f1a94c3545469d7f96eb922.png"},250065:function(e,A,n){n.d(A,{Z:function(){return i},a:function(){return o}});var r=n(667294);let s={},t=r.createContext(s);function o(e){let A=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:A},e.children)}}}]);