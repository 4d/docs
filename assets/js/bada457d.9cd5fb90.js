"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70099"],{730825:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>l});var o=JSON.parse('{"id":"commands-legacy/on-err-call","title":"ON ERR CALL","description":"ON ERR CALL ( errorMethod {; scope} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-err-call.md","sourceDirName":"commands-legacy","slug":"/commands/on-err-call","permalink":"/docs/commands/on-err-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-err-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-err-call","title":"ON ERR CALL","slug":"/commands/on-err-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Method called on event","permalink":"/docs/commands/method-called-on-event"},"next":{"title":"ON EVENT CALL","permalink":"/docs/commands/on-event-call"}}'),t=n("785893"),s=n("250065");let d={id:"on-err-call",title:"ON ERR CALL",slug:"/commands/on-err-call",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ON ERR CALL"})," ( ",(0,t.jsx)(r.em,{children:"errorMethod"})," {; ",(0,t.jsx)(r.em,{children:"scope"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"errorMethod"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Error method to be invoked, or Empty string to stop trapping errors"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"scope"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Scope for the error method"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"ON ERR CALL"})," command installs the project method, whose name you pass in ",(0,t.jsx)(r.em,{children:"errorMethod"}),", as the method for catching (trapping) errors for the defined execution context in the current project. This method is called the ",(0,t.jsx)(r.strong,{children:"error-handling method"})," or ",(0,t.jsx)(r.strong,{children:"error-catching method"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Error-handling methods are installed per project: components and host projects can define their own error-catching methods, only the method of the project where the error occured will be called."}),"\n",(0,t.jsx)(r.p,{children:"Once an error-handling project is installed, 4D calls the method each time an error occurs during the execution of a 4D language command in the defined execution context."}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"scope"})," of the command designates the execution context from where an error will trigger the call of the errorMethod. By default, if the ",(0,t.jsx)(r.em,{children:"scope"})," parameter is omitted, the scope of the command is the local execution context, i.e. the current process. You can pass one of the following constants in the ",(0,t.jsx)(r.em,{children:"scope"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constant"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ek errors from components"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"Errors that occurred in components"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ek global"}),(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"Errors that occurred in the global execution context of the project"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ek local"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsxs)(r.td,{children:["Errors that occurred in the local execution context (default if ",(0,t.jsx)(r.em,{children:"scope"})," parameter is omitted)"]})]})]})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["if ",(0,t.jsx)(r.em,{children:"scope"})," = ek local (or if ",(0,t.jsx)(r.em,{children:"scope"})," is omitted), only errors that occurred in the current process will call errorMethod. You can have one error-handling method per process at a time, but you can have different error-handling methods for several processes."]}),"\n",(0,t.jsxs)(r.li,{children:["if ",(0,t.jsx)(r.em,{children:"scope"})," = ek global, all errors that occurred in the application, whatever the process (except components), will call errorMethod. Note that, if a ek local error handler is also defined for a process, the ek global error handler is not called. This principle allows you to define a generic error-handling method that will catch all errors, while local error-handling methods can be set for some specific processes.",(0,t.jsx)(r.br,{}),"\nNote also that a global error-handling method is useful on the server, where it can be handle errors in server-side functions."]}),"\n",(0,t.jsxs)(r.li,{children:["if ",(0,t.jsx)(r.em,{children:"scope"})," = ek errors from components, only errors generated from the components installed in the application will call errorMethod. Note that, if an error-handling method is defined in a component, it is called in case of error in the component, and the ek errors from components error handler set in the host application is not called."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," If ",(0,t.jsx)(r.strong,{children:"ON ERR CALL"})," is called from a process for which you requested preemptive execution (in compiled mode), the compiler checks whether ",(0,t.jsx)(r.em,{children:"errorMethod"})," is thread-safe and returns errors if it is not compatible with the preemptive mode. For more information, refer to the ",(0,t.jsx)(r.em,{children:"Preemptive 4D processes"})," section."]}),"\n",(0,t.jsxs)(r.p,{children:["To stop the trapping of errors, call ",(0,t.jsx)(r.strong,{children:"ON ERR CALL"})," again with the desired ",(0,t.jsx)(r.em,{children:"scope"})," parameter (if any) and pass an empty string in ",(0,t.jsx)(r.em,{children:"errorMethod"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["You can identify errors by reading the Error system variable, which contains the code number of the error. Error codes are listed in the ",(0,t.jsx)(r.em,{children:"Error Codes"})," theme. For example, you can see the section ",(0,t.jsx)(r.em,{children:"Syntax Errors (1 -> 81)"}),". The Error variable value is significant only within the error-handling method; if you need the error code within the method that provoked the error, copy the Error variable to your own process variable. You can also access the Error method, Error line and Error formula system variables which contain, respectively, the name of the method, the line number and the text of the formula where the error occurred (see ",(0,t.jsx)(r.a,{href:"https://developer.4d.com/docs/Concepts/error-handling#handling-errors-within-the-method",children:"Handling errors within the method"}),")."]}),"\n",(0,t.jsxs)(r.p,{children:["You can use the ",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"})," or ",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"}),'  command to obtain the error sequence (i.e., the error "stack") at the origin of the interruption.']}),"\n",(0,t.jsx)(r.p,{children:"The error-handling method should manage the error in an appropriate way or present an error message to the user. Errors can be generated during processing performed by:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The 4D database engine; for example, when saving a record causes the violation of a trigger rule."}),"\n",(0,t.jsx)(r.li,{children:"The 4D environment; for example, when you do not have enough memory for allocating an array."}),"\n",(0,t.jsx)(r.li,{children:"The operating system on which the database is run; for example, disk full or I/O errors."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"/docs/commands/abort",children:"ABORT"})," command can be used to terminate processing. If you don\u2019t call ",(0,t.jsx)(r.a,{href:"/docs/commands/abort",children:"ABORT"})," in the error-handling method, 4D returns to the interrupted method and continues to execute the method. Use the ",(0,t.jsx)(r.a,{href:"/docs/commands/abort",children:"ABORT"})," command when an error cannot be recovered."]}),"\n",(0,t.jsxs)(r.p,{children:["If an error occurs in the error-handling method itself, 4D takes over error handling. Therefore, you should make sure that the error-handling method cannot generate an error. Also, you cannot use ",(0,t.jsx)(r.strong,{children:"ON ERR CALL"})," inside the error-handling method."]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["You want to define a global error handler, for example in the ",(0,t.jsx)(r.strong,{children:"On Startup"})," database method:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0ON ERR CALL("myGlobalErrorHandler";ek global)\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.p,{children:"The following project method tries to create a document whose name is received as parameter. If the document cannot be created, the project metod returns 0 (zero) or the error code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//Create doc project method\n\xa0\xa0//Create doc ( String ; Pointer ) -> LongInt\n\xa0\xa0//Create doc ( DocName ; ->DocRef ) -> Error code result\n\xa0\n\xa0gError:=0\n\xa0ON ERR CALL("IO ERROR HANDLER")\n\xa0$2->:=Create document($1)\n\xa0ON ERR CALL("")\n\xa0$0:=gError\n'})}),"\n",(0,t.jsx)(r.p,{children:"The IO ERROR HANDLER project method is listed here:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0//IO ERROR HANDLER project method\n\xa0gError:=Error\xa0//just copy the error code to the process variable gError\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Note the use of the ",(0,t.jsx)(r.em,{children:"gError"})," process variable to get the error code result within the current executing method. Once these methods are present in your database, you can write:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0var vhDocRef : Time\n\xa0$vlErrCode:=Create doc($vsDocumentName;->vhDocRef)\n\xa0If($vlErrCode=0)\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlErrCode)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("The document could not be created, I/O error "+String($vlErrCode))\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(r.p,{children:["While implementing a complex set of operations, you may end up with various subroutines that require different error-handling methods. You can have only one error-handling method per process at a time, so you have two choices:",(0,t.jsx)(r.br,{}),"\n- Keep track of the current one each time you call ",(0,t.jsx)(r.strong,{children:"ON ERR CALL"}),", or",(0,t.jsx)(r.br,{}),"\n- Use a process array variable (in this case, ",(0,t.jsx)(r.em,{children:"asErrorMethod"}),") to \u201Cpile up\u201D the error-handling methods and a project method (in this case, ON ERROR CALL) to install and deinstall the error-handling methods."]}),"\n",(0,t.jsx)(r.p,{children:"You must initialize the array at the very beginning of the process execution:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Do NOT forget to initialize the array at the beginning\n\xa0\xa0// of the process method (the project method that runs the process)\n\xa0ARRAY STRING(63;asErrorMethod;0)\n"})}),"\n",(0,t.jsx)(r.p,{children:"Here is the custom ON ERROR CALL method:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// ON ERROR CALL project method\n\xa0\xa0// ON ERROR CALL { ( String ) }\n\xa0\xa0// ON ERROR CALL { ( Method Name ) }\n\xa0\n\xa0C_STRING(63;$1;$ErrorMethod)\n\xa0var $vlElem : Integer\n\xa0\n\xa0If(Count parameters>0)\n\xa0\xa0\xa0\xa0$ErrorMethod:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$ErrorMethod:=""\n\xa0End if\n\xa0\n\xa0If($ErrorMethod#"")\n\xa0\xa0\xa0\xa0var gError : Integer\n\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0$vlElem:=1+Size of array(asErrorMethod)\n\xa0\xa0\xa0\xa0INSERT IN ARRAY(asErrorMethod;$vlElem)\n\xa0\xa0\xa0\xa0asErrorMethod{$vlElem}:=$1\n\xa0\xa0\xa0\xa0ON ERR CALL($1)\n\xa0Else\n\xa0\xa0\xa0\xa0ON ERR CALL("")\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(asErrorMethod)\n\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asErrorMethod;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON ERR CALL(asErrorMethod{$vlElem-1})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.p,{children:"Then, you can call it this way:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0gError:=0\n\xa0ON ERROR CALL("IO ERRORS")\xa0// Installs the IO ERRORS error-handling method\n\xa0\xa0// ...\n\xa0ON ERROR CALL("ALL ERRORS")\xa0// Installs the ALL ERRORS error-handling method\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// Deinstalls ALL ERRORS error-handling method and reinstalls IO ERRORS\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// Deinstalls the IO ERRORS error-handling method\n\xa0\xa0// ...\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(r.p,{children:"The following error-handling method ignores the user interruptions and displays the error text:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//Show_errors_only project method\n\xa0If(Error#1006)\xa0//this is not a user interruption\n\xa0\xa0\xa0\xa0ALERT("The error "+String(Error)+" occurred. The code in question is: \\""+Error formula+"\\"")\n\xa0End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/abort",children:"ABORT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"Error Handler"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/method-called-on-error",children:"Method called on error"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"System Variables"})]}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"155"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var o=n(667294);let t={},s=o.createContext(t);function d(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);