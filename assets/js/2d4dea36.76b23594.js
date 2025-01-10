"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95640"],{309456:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"Debugging/basics","title":"Debugging","description":"Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!","source":"@site/versioned_docs/version-20/Debugging/basics.md","sourceDirName":"Debugging","slug":"/Debugging/basics","permalink":"/docs/20/Debugging/basics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"basics","title":"Debugging"},"sidebar":"docs","previous":{"title":"Transformation tags","permalink":"/docs/20/Tags/tags"},"next":{"title":"Debugger","permalink":"/docs/20/Debugging/debugger"}}'),o=n("785893"),i=n("250065");let s={id:"basics",title:"Debugging"},a=void 0,d={},c=[{value:"Error types",id:"error-types",level:2},{value:"Typing errors",id:"typing-errors",level:3},{value:"Syntax Errors",id:"syntax-errors",level:3},{value:"Environmental Errors",id:"environmental-errors",level:3},{value:"Design or Logic Errors",id:"design-or-logic-errors",level:3},{value:"Runtime Errors",id:"runtime-errors",level:3},{value:"Syntax Error Window",id:"syntax-error-window",level:2},{value:"Debugger",id:"debugger",level:2},{value:"Breaks",id:"breaks",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!"}),"\n",(0,o.jsx)(r.p,{children:"The 4D development environment provides several debugging tools for all types of errors."}),"\n",(0,o.jsx)(r.h2,{id:"error-types",children:"Error types"}),"\n",(0,o.jsx)(r.h3,{id:"typing-errors",children:"Typing errors"}),"\n",(0,o.jsx)(r.p,{children:"Typing errors are detected by the Code Editor. They are displayed in red and additional information is provided at the bottom of the window. Here's a typing error:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"break-point",src:n(367625).Z+"",width:"1824",height:"980"})}),"\n",(0,o.jsx)(r.p,{children:"Such typing errors usually cause syntax errors (in the above image, the name of the table is unknown). You get the description of the error when you validate the line of code. When this occurs, fix the typing error and type Enter to validate the fix."}),"\n",(0,o.jsx)(r.h3,{id:"syntax-errors",children:"Syntax Errors"}),"\n",(0,o.jsxs)(r.p,{children:["Some errors can be caught only when you execute the method. The ",(0,o.jsx)(r.a,{href:"#syntax-error-window",children:"Syntax Error Window"})," appears when an error occurs during code execution. For example:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"syntax-error",src:n(400217).Z+"",width:"642",height:"552"})}),"\n",(0,o.jsxs)(r.p,{children:["Expand the ",(0,o.jsx)(r.strong,{children:"Details"})," area to display the last error and its number."]}),"\n",(0,o.jsx)(r.h3,{id:"environmental-errors",children:"Environmental Errors"}),"\n",(0,o.jsxs)(r.p,{children:["Occasionally, there may not be enough memory to create a BLOB. Or, when you access a document on disk, the document may not exist or may already be opened by another application. These environmental errors do not directly occur because of your code or the way you wrote it. Most of the time, these errors are easy to treat with an ",(0,o.jsx)(r.a,{href:"/docs/20/Concepts/error-handling",children:"error catching method"})," installed using the ",(0,o.jsx)(r.code,{children:"ON ERR CALL"})," command."]}),"\n",(0,o.jsx)(r.h3,{id:"design-or-logic-errors",children:"Design or Logic Errors"}),"\n",(0,o.jsxs)(r.p,{children:['These are generally the most difficult type of error to find. Except for typing errors, all the error types listed above are to a certain extent covered by the expression "Design or logic error". Use the ',(0,o.jsx)(r.a,{href:"/docs/20/Debugging/debugger",children:"Debugger"})," to detect them. For example:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["A ",(0,o.jsx)(r.em,{children:"syntax error"})," may occur when you try to use a variable that is not yet initialized."]}),"\n",(0,o.jsxs)(r.li,{children:["An ",(0,o.jsx)(r.em,{children:"environmental error"})," can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Design or logic errors also include such situations as:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["A record is not properly updated because, while calling ",(0,o.jsx)(r.code,{children:"SAVE RECORD"}),", you forgot to first test whether or not the record was locked."]}),"\n",(0,o.jsx)(r.li,{children:"A method does not do exactly what you expect, because the presence of an optional parameter is not tested."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Sometimes the piece of code that displays the error may be different than the code that is actually the origin of the problem."}),"\n",(0,o.jsx)(r.h3,{id:"runtime-errors",children:"Runtime Errors"}),"\n",(0,o.jsx)(r.p,{children:"In Application mode, you might obtain errors that you don't see in interpreted mode. Here's an example:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"runtime-error",src:n(975579).Z+"",width:"662",height:"472"})}),"\n",(0,o.jsx)(r.p,{children:"To quickly find the origin of the problem, reopen the interpreted version of the structure file, open the method and go to the corresponding line."}),"\n",(0,o.jsx)(r.h2,{id:"syntax-error-window",children:"Syntax Error Window"}),"\n",(0,o.jsx)(r.p,{children:"The Syntax error window automatically appears when the execution of a method is interrupted. This can happen when:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"an error prevents further code execution"}),"\n",(0,o.jsxs)(r.li,{children:["the method produces a false assertion (see the ",(0,o.jsx)(r.code,{children:"ASSERT"})," command)"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"syntax-error",src:n(400217).Z+"",width:"642",height:"552"})}),"\n",(0,o.jsx)(r.p,{children:'The upper text area displays a message describing the error. The lower text area shows the line that was executing when the error occurred; the area where the error occurred is highlighted. The expanded Details section contains the "stack" of errors related to the process.'}),"\n",(0,o.jsx)(r.p,{children:"The syntax error window proposes several options:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Edit"}),": Stops all method execution. 4D switches to the Design environment and the method with the error opens in the Code Editor, allowing you to fix it. Use this option when you immediately recognize the mistake and can fix it without further investigation."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Trace"}),": Enters Trace/Debugger mode. The ",(0,o.jsx)(r.a,{href:"/docs/20/Debugging/debugger",children:"Debugger"})," window is displayed. If the current line has only executed partially, you may have to click the ",(0,o.jsx)(r.strong,{children:"Trace"})," button several times."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Continue"}),": Execution continues. The line with the error may be partially executed, depending on where the error is located. Continue with caution: the error may prevent the rest of your method from executing properly. We recommend clicking ",(0,o.jsx)(r.strong,{children:"Continue"})," only if the error is in a trivial call (such as ",(0,o.jsx)(r.code,{children:"SET WINDOW TITLE"}),") that does not prevent executing and testing the rest of your code."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the ",(0,o.jsx)(r.strong,{children:"Continue"})," button into an ",(0,o.jsx)(r.strong,{children:"Ignore"})," button. Hold down ",(0,o.jsx)(r.strong,{children:"Alt"})," (Windows) or ",(0,o.jsx)(r.strong,{children:"Option"})," (macOS) key and click the ",(0,o.jsx)(r.strong,{children:"Continue"})," button the first time it appears. The button label changes to ",(0,o.jsx)(r.strong,{children:"Ignore"})," if the dialog is called again for the same error."]}),"\n"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Abort"}),": Stops method execution and returns to the state before the method started executing:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"If a form method or object method is executing in response to an event, it is stopped and you return to the form."}),"\n",(0,o.jsx)(r.li,{children:"If the method is executing from within the Application environment, you return to that environment."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Copy"}),": Copies the debugging information into the clipboard. The info describes the internal environment of the error (number, internal component, etc.). It is formatted as tabbed text."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Save..."}),": Saves the contents of the syntax error window and the call chain in a ",(0,o.jsx)(r.code,{children:".txt"})," file."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"debugger",children:"Debugger"}),"\n",(0,o.jsxs)(r.p,{children:["A common beginner mistake in dealing with error detection is to click ",(0,o.jsx)(r.strong,{children:"Abort"})," in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Do not do that! You will save plenty of time and energy by always using the ",(0,o.jsx)(r.strong,{children:"Debugger"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"The Debugger allows you to step through methods slowly. It displays all the information you need in order to understand why an error occurred. Once you have this information, you know how to fix the error."}),"\n",(0,o.jsxs)(r.p,{children:['Another reason to use the Debugger is for developing code. Sometimes you may write an algorithm that is more complex than usual. Despite all feelings of accomplishment, you can\'t be totally sure that your coding is 100% correct. Instead of running it "blind", you can use the ',(0,o.jsx)(r.code,{children:"TRACE"})," command at the beginning of your code, then execute it step by step to keep an eye on what happens."]}),"\n",(0,o.jsx)(r.h2,{id:"breaks",children:"Breaks"}),"\n",(0,o.jsx)(r.p,{children:'In the debugging process, you may need to skip the tracing of some parts of the code until a certain line. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.'}),"\n",(0,o.jsxs)(r.p,{children:["These needs are covered by ",(0,o.jsx)(r.strong,{children:"breakpoints"})," and ",(0,o.jsx)(r.strong,{children:"command catching"})," features. They can be configured from the Code Editor, the debugger, or the Runtime Explorer."]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},975579:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},400217:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},367625:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return s}});var t=n(667294);let o={},i=t.createContext(o);function s(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);