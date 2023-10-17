"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29528],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"basics",title:"Debugging"},s=void 0,l={unversionedId:"Debugging/basics",id:"version-20/Debugging/basics",title:"Debugging",description:"Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!",source:"@site/versioned_docs/version-20/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/20/Debugging/basics",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"basics",title:"Debugging"},sidebar:"docs",previous:{title:"Transformation tags",permalink:"/docs/20/Tags/tags"},next:{title:"Debugger",permalink:"/docs/20/Debugging/debugger"}},u={},p=[{value:"Error types",id:"error-types",level:2},{value:"Typing errors",id:"typing-errors",level:3},{value:"Syntax Errors",id:"syntax-errors",level:3},{value:"Environmental Errors",id:"environmental-errors",level:3},{value:"Design or Logic Errors",id:"design-or-logic-errors",level:3},{value:"Runtime Errors",id:"runtime-errors",level:3},{value:"Syntax Error Window",id:"syntax-error-window",level:2},{value:"Debugger",id:"debugger",level:2},{value:"Breaks",id:"breaks",level:2}],c={toc:p};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!"),(0,n.kt)("p",null,"The 4D development environment provides several debugging tools for all types of errors."),(0,n.kt)("h2",o({},{id:"error-types"}),"Error types"),(0,n.kt)("h3",o({},{id:"typing-errors"}),"Typing errors"),(0,n.kt)("p",null,"Typing errors are detected by the Code Editor. They are displayed in red and additional information is provided at the bottom of the window. Here's a typing error:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"break-point",src:r(259163).Z,width:"1824",height:"980"})),(0,n.kt)("p",null,"Such typing errors usually cause syntax errors (in the above image, the name of the table is unknown). You get the description of the error when you validate the line of code. When this occurs, fix the typing error and type Enter to validate the fix."),(0,n.kt)("h3",o({},{id:"syntax-errors"}),"Syntax Errors"),(0,n.kt)("p",null,"Some errors can be caught only when you execute the method. The ",(0,n.kt)("a",o({parentName:"p"},{href:"#syntax-error-window"}),"Syntax Error Window")," appears when an error occurs during code execution. For example:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:r(859703).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"Expand the ",(0,n.kt)("strong",{parentName:"p"},"Details")," area to display the last error and its number."),(0,n.kt)("h3",o({},{id:"environmental-errors"}),"Environmental Errors"),(0,n.kt)("p",null,"Occasionally, there may not be enough memory to create a BLOB. Or, when you access a document on disk, the document may not exist or may already be opened by another application. These environmental errors do not directly occur because of your code or the way you wrote it. Most of the time, these errors are easy to treat with an ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/Concepts/error-handling"}),"error catching method")," installed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command."),(0,n.kt)("h3",o({},{id:"design-or-logic-errors"}),"Design or Logic Errors"),(0,n.kt)("p",null,'These are generally the most difficult type of error to find. Except for typing errors, all the error types listed above are to a certain extent covered by the expression "Design or logic error". Use the ',(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/Debugging/debugger"}),"Debugger")," to detect them. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("em",{parentName:"li"},"syntax error")," may occur when you try to use a variable that is not yet initialized."),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("em",{parentName:"li"},"environmental error")," can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.")),(0,n.kt)("p",null,"Design or logic errors also include such situations as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A record is not properly updated because, while calling ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE RECORD"),", you forgot to first test whether or not the record was locked."),(0,n.kt)("li",{parentName:"ul"},"A method does not do exactly what you expect, because the presence of an optional parameter is not tested.")),(0,n.kt)("p",null,"Sometimes the piece of code that displays the error may be different than the code that is actually the origin of the problem."),(0,n.kt)("h3",o({},{id:"runtime-errors"}),"Runtime Errors"),(0,n.kt)("p",null,"In Application mode, you might obtain errors that you don't see in interpreted mode. Here's an example:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"runtime-error",src:r(378002).Z,width:"662",height:"472"})),(0,n.kt)("p",null,"To quickly find the origin of the problem, reopen the interpreted version of the structure file, open the method and go to the corresponding line."),(0,n.kt)("h2",o({},{id:"syntax-error-window"}),"Syntax Error Window"),(0,n.kt)("p",null,"The Syntax error window automatically appears when the execution of a method is interrupted. This can happen when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an error prevents further code execution"),(0,n.kt)("li",{parentName:"ul"},"the method produces a false assertion (see the ",(0,n.kt)("inlineCode",{parentName:"li"},"ASSERT")," command)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:r(859703).Z,width:"642",height:"552"})),(0,n.kt)("p",null,'The upper text area displays a message describing the error. The lower text area shows the line that was executing when the error occurred; the area where the error occurred is highlighted. The expanded Details section contains the "stack" of errors related to the process.'),(0,n.kt)("p",null,"The syntax error window proposes several options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Edit"),": Stops all method execution. 4D switches to the Design environment and the method with the error opens in the Code Editor, allowing you to fix it. Use this option when you immediately recognize the mistake and can fix it without further investigation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trace"),": Enters Trace/Debugger mode. The ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/Debugging/debugger"}),"Debugger")," window is displayed. If the current line has only executed partially, you may have to click the ",(0,n.kt)("strong",{parentName:"p"},"Trace")," button several times.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Continue"),": Execution continues. The line with the error may be partially executed, depending on where the error is located. Continue with caution: the error may prevent the rest of your method from executing properly. We recommend clicking ",(0,n.kt)("strong",{parentName:"p"},"Continue")," only if the error is in a trivial call (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"SET WINDOW TITLE"),") that does not prevent executing and testing the rest of your code."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the ",(0,n.kt)("strong",{parentName:"p"},"Continue")," button into an ",(0,n.kt)("strong",{parentName:"p"},"Ignore")," button. Hold down ",(0,n.kt)("strong",{parentName:"p"},"Alt")," (Windows) or ",(0,n.kt)("strong",{parentName:"p"},"Option")," (macOS) key and click the ",(0,n.kt)("strong",{parentName:"p"},"Continue")," button the first time it appears. The button label changes to ",(0,n.kt)("strong",{parentName:"p"},"Ignore")," if the dialog is called again for the same error.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Abort"),": Stops method execution and returns to the state before the method started executing:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If a form method or object method is executing in response to an event, it is stopped and you return to the form."),(0,n.kt)("li",{parentName:"ul"},"If the method is executing from within the Application environment, you return to that environment."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copy"),": Copies the debugging information into the clipboard. The info describes the internal environment of the error (number, internal component, etc.). It is formatted as tabbed text.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Save..."),": Saves the contents of the syntax error window and the call chain in a ",(0,n.kt)("inlineCode",{parentName:"p"},".txt")," file."))),(0,n.kt)("h2",o({},{id:"debugger"}),"Debugger"),(0,n.kt)("p",null,"A common beginner mistake in dealing with error detection is to click ",(0,n.kt)("strong",{parentName:"p"},"Abort")," in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Do not do that! You will save plenty of time and energy by always using the ",(0,n.kt)("strong",{parentName:"p"},"Debugger"),"."),(0,n.kt)("p",null,"The Debugger allows you to step through methods slowly. It displays all the information you need in order to understand why an error occurred. Once you have this information, you know how to fix the error."),(0,n.kt)("p",null,'Another reason to use the Debugger is for developing code. Sometimes you may write an algorithm that is more complex than usual. Despite all feelings of accomplishment, you can\'t be totally sure that your coding is 100% correct. Instead of running it "blind", you can use the ',(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," command at the beginning of your code, then execute it step by step to keep an eye on what happens."),(0,n.kt)("h2",o({},{id:"breaks"}),"Breaks"),(0,n.kt)("p",null,'In the debugging process, you may need to skip the tracing of some parts of the code until a certain line. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.'),(0,n.kt)("p",null,"These needs are covered by ",(0,n.kt)("strong",{parentName:"p"},"breakpoints")," and ",(0,n.kt)("strong",{parentName:"p"},"command catching")," features. They can be configured from the Code Editor, the debugger, or the Runtime Explorer."))}d.isMDXComponent=!0},378002:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},859703:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},259163:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"}}]);