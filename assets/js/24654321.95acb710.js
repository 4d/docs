"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25614],{535183:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(474848),t=r(28453);const i={id:"error-handling",title:"Error handling"},s=void 0,l={id:"Concepts/error-handling",title:"Error handling",description:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.",source:"@site/versioned_docs/version-20/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/20/Concepts/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Control flow",permalink:"/docs/20/Concepts/control-flow"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/20/Concepts/interpreted-compiled"}},a={},d=[{value:"Error or status",id:"error-or-status",level:2},{value:"Installing an error-handling method",id:"installing-an-error-handling-method",level:2},{value:"Scope and components",id:"scope-and-components",level:3},{value:"Handling errors within the method",id:"handling-errors-within-the-method",level:3},{value:"Example",id:"example",level:4},{value:"Using an empty error-handling method",id:"using-an-empty-error-handling-method",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions."}),"\n",(0,o.jsx)(n.p,{children:"Error handling meets two main needs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"finding out and fixing potential errors and bugs in your code during the development phase,"}),"\n",(0,o.jsx)(n.li,{children:"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Good practice",type:"tip",children:(0,o.jsxs)(n.p,{children:["It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. When 4D Server is not running ",(0,o.jsx)(n.a,{href:"/docs/20/Admin/cli",children:"headless"})," (i.e. launched with its ",(0,o.jsx)(n.a,{href:"/docs/20/ServerWindow/overview",children:"administration window"}),"), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the ",(0,o.jsx)(n.a,{href:"/docs/20/Debugging/debugLogFiles#4ddebuglogtxt-standard",children:"4DDebugLog file"})," for further analysis."]})}),"\n",(0,o.jsx)(n.h2,{id:"error-or-status",children:"Error or status"}),"\n",(0,o.jsxs)(n.p,{children:["Many 4D class functions, such as ",(0,o.jsx)(n.code,{children:"entity.save()"})," or ",(0,o.jsx)(n.code,{children:"transporter.send()"}),", return a ",(0,o.jsx)(n.em,{children:"status"}),' object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.']}),"\n",(0,o.jsx)(n.p,{children:'Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.'}),"\n",(0,o.jsx)(n.h2,{id:"installing-an-error-handling-method",children:"Installing an error-handling method"}),"\n",(0,o.jsxs)(n.p,{children:["In 4D, all errors can be caught and handled by specific project methods, named ",(0,o.jsx)(n.strong,{children:"error-handling"})," (or ",(0,o.jsx)(n.strong,{children:"error-catching"}),") methods."]}),"\n",(0,o.jsx)(n.p,{children:"Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below)."}),"\n",(0,o.jsxs)(n.p,{children:["To ",(0,o.jsx)(n.em,{children:"install"})," an error-handling project method, you just need to call the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page155.html",children:(0,o.jsx)(n.code,{children:"ON ERR CALL"})})," command with the project method name and (optionnally) scope as parameters. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To stop catching errors for an execution context and give back hand, call ",(0,o.jsx)(n.code,{children:"ON ERR CALL"})," with an empty string:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("";ek local) //gives back control for the local process\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The  ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page704.html",children:(0,o.jsx)(n.code,{children:"Method called on error"})})," command allows you to know the name of the method installed by ",(0,o.jsx)(n.code,{children:"ON ERR CALL"})," for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent;ek local)\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"scope-and-components",children:"Scope and components"}),"\n",(0,o.jsx)(n.p,{children:"An error-handling method can be set for different execution contexts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["for the ",(0,o.jsx)(n.strong,{children:"current process"}),"- a local error handler will be only called for errors that occurred in the current process of the current project,"]}),"\n",(0,o.jsxs)(n.li,{children:["for the ",(0,o.jsx)(n.strong,{children:"whole application"}),"- a global error handler will be called for all errors that occurred in the application execution context of the current project,"]}),"\n",(0,o.jsxs)(n.li,{children:["from the ",(0,o.jsx)(n.strong,{children:"components"}),"- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method\nON ERR CALL("globalHandler";ek global) //Installs a global error-handling method\nON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components\n'})}),"\n",(0,o.jsx)(n.p,{children:'You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.'}),"\n",(0,o.jsx)(n.p,{children:"You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per execution context and per project."}),"\n",(0,o.jsx)(n.p,{children:"When an error occurs, only one method is called, as described in the following diagram:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"error management",src:r(244658).A+"",width:"1195",height:"578"})}),"\n",(0,o.jsx)(n.h3,{id:"handling-errors-within-the-method",children:"Handling errors within the method"}),"\n",(0,o.jsx)(n.p,{children:"Within a custom error method, you have access to several pieces of information that will help you identifying the error:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"dedicated system variables:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Error"})," (longint): error code"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Error method"})," (text): name of the method that triggered the error"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Error line"})," (longint): line number in the method that triggered the error"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Error formula"})," (text): formula of the 4D code (raw text) which is at the origin of the error."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["4D automatically maintains a number of variables called ",(0,o.jsx)(n.a,{href:"/docs/20/Concepts/variables#system-variables",children:(0,o.jsx)(n.strong,{children:"system variables"})}),", meeting different needs."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html",children:(0,o.jsx)(n.code,{children:"Last errors"})})," command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html",children:(0,o.jsx)(n.code,{children:"GET LAST ERROR STACK"})})," command that returns the same information as arrays."]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.code,{children:"Get call chain"})," command that returns a collection of objects describing each step of the method call chain within the current process."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Here is a simple error-handling system:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'//installing the error handling method\n ON ERR CALL("errorMethod")\n //... executing code\n ON ERR CALL("") //giving control back to 4D\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n'})}),"\n",(0,o.jsx)(n.h3,{id:"using-an-empty-error-handling-method",children:"Using an empty error-handling method"}),"\n",(0,o.jsxs)(n.p,{children:["If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The ",(0,o.jsx)(n.code,{children:"Error"})," system variable can be tested in any method, i.e. outside of the error-handling method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n\tALERT("File not found.")\nEnd if\nON ERR CALL("")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},244658:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(296540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);