"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6478"],{1869:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/new-process","title":"New process","description":"New process ( method ; stack {; name {; param {; param2 ; ... ; paramN}}}{; *} ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/new-process.md","sourceDirName":"commands-legacy","slug":"/commands/new-process","permalink":"/docs/20-R8/commands/new-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-process","title":"New process","slug":"/commands/new-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET REGISTERED CLIENTS","permalink":"/docs/20-R8/commands/get-registered-clients"},"next":{"title":"PAUSE PROCESS","permalink":"/docs/20-R8/commands/pause-process"}}'),r=n("785893"),o=n("250065");let c={id:"new-process",title:"New process",slug:"/commands/new-process",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Process Method",id:"process-method",level:3},{value:"Process Stack",id:"process-stack",level:3},{value:"Process Name",id:"process-name",level:3},{value:"Parameters to Process Method",id:"parameters-to-process-method",level:3},{value:"Optional * Parameter",id:"optional--parameter",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"New process"})," ( ",(0,r.jsx)(s.em,{children:"method"})," ; ",(0,r.jsx)(s.em,{children:"stack"})," {; ",(0,r.jsx)(s.em,{children:"name"})," {; ",(0,r.jsx)(s.em,{children:"param"})," {; ",(0,r.jsx)(s.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(s.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"method"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Method to be executed within the process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"stack"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Stack size in bytes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Name of the process created"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"param"}),(0,r.jsx)(s.td,{children:"Expression"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Parameter(s) to the method"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Unique process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Function result"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Process number for newly created process or already executing process"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"New process"})," command starts a new process (on the same machine) and returns the process number for that process."]}),"\n",(0,r.jsxs)(s.p,{children:["If the process could not be created (for example, if there is not enough memory), ",(0,r.jsx)(s.strong,{children:"New process"})," returns zero (0) and an error is generated. You can catch this error using an error-handling method installed using ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"process-method",children:"Process Method"}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.em,{children:"method"}),", you pass the name of the process method for the new process. After 4D has set up the context for the new process, it starts executing this method, which therefore becomes the process method."]}),"\n",(0,r.jsxs)(s.p,{children:["If the execution context supports preemptive mode and if ",(0,r.jsx)(s.em,{children:"method"}),' is declared "thread-safe", the new 4D process will be executed in a preemptive thread when the application will run in compiled mode. For more information, please reter to the ',(0,r.jsx)(s.em,{children:"Preemptive 4D processes"})," page."]}),"\n",(0,r.jsx)(s.h3,{id:"process-stack",children:"Process Stack"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"stack"})," parameter allows you to indicate the amount of memory allocated for the stack of the process. This is the space in memory used to \u201Cpile up\u201D method calls, local variables, parameters in subroutines, and stacked records."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Pass 0 in ",(0,r.jsx)(s.em,{children:"stack"})," to use a default stack size, suitable for most applications (recommended setting)."]}),"\n",(0,r.jsx)(s.li,{children:"In certain particular cases, you may want to set a custom value. It must be expressed in bytes. This setting should be used with precaution, it depends on the process chain call and the platform."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," The stack is NOT the total memory for the process. Processes share memory for records, interprocess variables, and so on. A process also uses extra memory for storing its process variables. The stack contains various items of 4D information; the amount of information kept on the stack depends on the number of nested method calls the process will employ, the number of forms that it will open before closing them and the number and size of local variables used in each nested method call."]}),"\n",(0,r.jsx)(s.h3,{id:"process-name",children:"Process Name"}),"\n",(0,r.jsxs)(s.p,{children:["You pass the name of the new process in ",(0,r.jsx)(s.em,{children:"name"}),". This name will appear in the list of processes of the Runtime Explorer and will be returned by the ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/process-info",children:"Process info"})," command when applied to this new process. You can omit this parameter; if you do so, the name of the process will be the empty string. You can make a process local in scope by prefixing its name with the dollar sign (",(0,r.jsx)(s.em,{children:"$"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Important:"})," Remember that local processes should not access data in Client/Server. For more information, please refer to the ",(0,r.jsx)(s.em,{children:"Global and Local Processes"})," section."]}),"\n",(0,r.jsx)(s.h3,{id:"parameters-to-process-method",children:"Parameters to Process Method"}),"\n",(0,r.jsxs)(s.p,{children:["You can pass parameters to the process method using one or more ",(0,r.jsx)(s.em,{children:"param"})," parameters. You pass parameters in the same way as you would pass them to a subroutine (see the section). Upon starting execution in the context of the new process, the process method receives the parameters values in ",(0,r.jsx)(s.em,{children:"$1"}),", ",(0,r.jsx)(s.em,{children:"$2"}),", etc. Remember that arrays cannot be passed as parameters to a method. Furthermore, these additional considerations are to be taken into account in the context of the ",(0,r.jsx)(s.strong,{children:"New process"})," command:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"pointers to tables or fields are allowed."}),"\n",(0,r.jsx)(s.li,{children:"pointers to variables, particularly local and process variables, are not recommended since these variables may be undefined at the time when they are being accessed by the process method."}),"\n",(0,r.jsxs)(s.li,{children:["standard object or collection type parameters are passed ",(0,r.jsx)(s.strong,{children:"by copy"}),", ",(0,r.jsx)(s.em,{children:"i.e."})," 4D will create a copy of the object or the collection in the destination process instead of a reference. If you want to pass an object or a collection parameter ",(0,r.jsx)(s.strong,{children:"by reference"}),", you must use a shared object or collection (see ",(0,r.jsx)(s.em,{children:"Shared objects and shared collections"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," If you pass parameters to the process method, you must pass the ",(0,r.jsx)(s.em,{children:"name"})," parameter; it cannot be omitted in this case."]}),"\n",(0,r.jsx)(s.h3,{id:"optional--parameter",children:"Optional * Parameter"}),"\n",(0,r.jsxs)(s.p,{children:["Specifying this last parameter tells 4D to first check whether or not a process with the name you passed in ",(0,r.jsx)(s.em,{children:"name"})," is already running. If it is, 4D does not start a new process and returns the process number of the process with that name."]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"Given the following project method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// ADD CUSTOMERS\n\xa0SET MENU BAR(1)\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Customers];*)\n\xa0Until(OK=0)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you attach this project method to a custom menu item ",(0,r.jsx)(s.strong,{children:"Menu Bar Editor"})," window whose ",(0,r.jsx)(s.strong,{children:"Start a New Process"})," property is set, 4D will automatically start a new process running that method. The call ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/set-menu-bar",children:"SET MENU BAR"}),"(1) adds a menu bar to the new process. In the absence of any window (that you could open with ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/open-window",children:"Open window"}),"), the call to ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/add-record",children:"ADD RECORD"})," will automatically open one."]}),"\n",(0,r.jsx)(s.p,{children:"To be able to start this Add Customers process when you click on a button in a custom control panel, you can write:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// bAddCustomers button object method\n\xa0$vlProcessID:=New process("Add Customers";0;"Adding Customers")\n'})}),"\n",(0,r.jsx)(s.p,{children:"The button does the same thing as the custom menu item."}),"\n",(0,r.jsx)(s.p,{children:"While choosing the menu item or clicking the button, if you want to start the process (if it does not exist) or bring it to the front (if it is already running), you can create the method START ADD CUSTOMERS:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// START ADD CUSTOMERS\n\xa0$vlProcessID:=New process("Add Customers";0;"Adding Customers";*)\n\xa0If($vlProcessID#0)\n\xa0\xa0\xa0\xa0BRING TO FRONT($vlProcessID)\n\xa0End if\n'})}),"\n",(0,r.jsxs)(s.p,{children:["The object method of the ",(0,r.jsx)(s.em,{children:"bAddCustomers"})," becomes:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// bAddCustomers button object method\n\xa0START ADD CUSTOMERS\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In the Menu Bar editor, you replace the method ADD CUSTOMERS with the method START ADD CUSTOMERS, and you deselect the ",(0,r.jsx)(s.strong,{children:"Start a New Process"})," property for the menu item."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/execute-on-server",children:"Execute on server"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Preemptive 4D processes"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Processes"})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"317"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return c}});var t=n(667294);let r={},o=t.createContext(r);function c(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);