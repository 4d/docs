"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82842"],{451772:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"API/SignalClass","title":"Signal","description":"Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.","source":"@site/versioned_docs/version-20-R7/API/SignalClass.md","sourceDirName":"API","slug":"/API/SignalClass","permalink":"/docs/API/SignalClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"SignalClass","title":"Signal"},"sidebar":"docs","previous":{"title":"Session","permalink":"/docs/API/SessionClass"},"next":{"title":"SMTPTransporter","permalink":"/docs/API/SMTPTransporterClass"}}'),r=s("785893"),t=s("250065");let l={id:"SignalClass",title:"Signal"},d=void 0,c={},o=[{value:"Signal Object",id:"signal-object",level:3},{value:"Working with signals",id:"working-with-signals",level:3},{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:3},{value:".description",id:"description",level:2},{value:"Description",id:"description-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Description",id:"description-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Description",id:"description-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-4",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Semaphores can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"signal-object",children:"Signal Object"}),"\n",(0,r.jsx)(n.p,{children:"A signal is a shared object that must be passed as a parameter to commands that call or create workers or processes."}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"4D.Signal"})," object contains the following built-in methods and properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#wait",children:(0,r.jsx)(n.code,{children:".wait()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.code,{children:".trigger()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signaled",children:(0,r.jsx)(n.code,{children:".signaled"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Any worker/process calling the ",(0,r.jsx)(n.code,{children:".wait()"})," method will suspend its execution until the ",(0,r.jsx)(n.code,{children:".signaled"})," property is true. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The ",(0,r.jsx)(n.code,{children:".signaled"})," property becomes true when any worker/process calls the ",(0,r.jsx)(n.code,{children:".trigger()"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that to avoid blocking situations, the ",(0,r.jsx)(n.code,{children:".wait()"})," can also return after a defined timeout has been reached."]}),"\n",(0,r.jsxs)(n.p,{children:["Signal objects are created with the ",(0,r.jsx)(n.a,{href:"/docs/commands/new-signal",children:(0,r.jsx)(n.code,{children:"New signal"})})," command."]}),"\n",(0,r.jsx)(n.h3,{id:"working-with-signals",children:"Working with signals"}),"\n",(0,r.jsxs)(n.p,{children:["In 4D, you create a new signal object by calling the ",(0,r.jsx)(n.a,{href:"/docs/commands/new-signal",children:(0,r.jsx)(n.code,{children:"New signal"})})," command. Once created, this signal must be passed as a parameter to the ",(0,r.jsx)(n.code,{children:"New process"})," or ",(0,r.jsx)(n.code,{children:"CALL WORKER"})," commands so that they can modify it when they have finished the task you want to wait for."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.wait()"})," must be called from the worker/process that needs another worker/process to finish a task in order to continue."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.trigger()"})," must be called from the worker/process that finished its execution in order to release all others."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(904055).Z+"",width:"813",height:"324"})}),"\n",(0,r.jsxs)(n.p,{children:["Once a signal has been released using a ",(0,r.jsx)(n.code,{children:"signal.trigger()"})," call, it cannot be reused again. If you want to set another signal, you need to call the ",(0,r.jsx)(n.code,{children:"New signal"})," command again."]}),"\n",(0,r.jsxs)(n.p,{children:["Since a signal object is a ",(0,r.jsx)(n.a,{href:"/docs/Concepts/shared",children:"shared object"}),", you can use it to return results from called workers/processes, provided that you do not forget to write values within a ",(0,r.jsx)(n.code,{children:"Use...End use"})," structure (see example)."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n\n  // Creation of a signal\n $signal:=New signal\n\n  // call main process and execute OpenForm method\n CALL WORKER(1;"OpenForm";$signal)\n  // do another calculation\n ...\n  // Waiting for the end of the process\n $signaled:=$signal.wait()\n\n  // Processing of the results\n $calc:=$signal.result+...\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"OpenForm"})})," method :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Open the form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Add a new attribute to your $signal shared object to pass your result to the other process:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Trigger the signal to the waiting process\n $signal.trigger()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#description",children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),(0,r.jsx)(n.br,{}),"contains a custom description for the ",(0,r.jsx)(n.code,{children:"Signal"})," object."]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#signaled",children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"contains the current state of the ",(0,r.jsx)(n.code,{children:"Signal"})," object"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),(0,r.jsx)(n.br,{}),"sets the ",(0,r.jsx)(n.code,{children:"signaled"})," property of the signal object to ",(0,r.jsx)(n.strong,{children:"true"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wait",children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean "]}),(0,r.jsx)(n.br,{}),"makes the current process wait until the ",(0,r.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,r.jsx)(n.strong,{children:"true"})," or the optional ",(0,r.jsx)(n.em,{children:"timeout"})," to expire"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:".description"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".description"})," property contains a custom description for the ",(0,r.jsx)(n.code,{children:"Signal"})," object.."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".description"})," can be set at the creation of the signal object or at any moment. Note that since the ",(0,r.jsx)(n.code,{children:"Signal"})," object is a shared object, any write-mode access to the ",(0,r.jsx)(n.code,{children:".description"})," property must be surrounded by a ",(0,r.jsx)(n.code,{children:"Use...End use"})," structure."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-write"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"signaled",children:".signaled"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".signaled"})," property contains the current state of the ",(0,r.jsx)(n.code,{children:"Signal"})," object. When the signal is created, ",(0,r.jsx)(n.code,{children:".signaled"})," is ",(0,r.jsx)(n.strong,{children:"False"}),". It becomes ",(0,r.jsx)(n.strong,{children:"True"})," when the ",(0,r.jsx)(n.code,{children:".trigger( )"})," is called on the object."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"trigger",children:".trigger()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Does not require any parameters"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".trigger( )"})," function sets the ",(0,r.jsx)(n.code,{children:"signaled"})," property of the signal object to ",(0,r.jsx)(n.strong,{children:"true"})," and awakens all workers or processes waiting for this signal."]}),"\n",(0,r.jsxs)(n.p,{children:["If the signal is already in the signaled state (i.e., the ",(0,r.jsx)(n.code,{children:"signaled"})," property is already ",(0,r.jsx)(n.strong,{children:"true"}),"), the function does nothing."]}),"\n",(0,r.jsx)(n.h2,{id:"wait",children:".wait()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeout"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Maximum waiting time for the signal in seconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["State of the ",(0,r.jsx)(n.code,{children:".signaled"})," property"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".wait( )"})," function makes the current process wait until the ",(0,r.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,r.jsx)(n.strong,{children:"true"})," or the optional ",(0,r.jsx)(n.em,{children:"timeout"})," to expire."]}),"\n",(0,r.jsxs)(n.p,{children:["To prevent blocking code, you can pass a maximum waiting time in seconds in the ",(0,r.jsx)(n.em,{children:"timeout"})," parameter (decimals are accepted)."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning"}),": Calling ",(0,r.jsx)(n.code,{children:".wait( )"})," without a ",(0,r.jsx)(n.em,{children:"timeout"})," in the 4D main process is not recommended because it could freeze the whole 4D application."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the signal is already in the signaled state (i.e. the ",(0,r.jsx)(n.code,{children:".signaled"})," property is already ",(0,r.jsx)(n.strong,{children:"true"}),"), the function returns immediately, without waiting."]}),"\n",(0,r.jsxs)(n.p,{children:["The function returns the value of the ",(0,r.jsx)(n.code,{children:".signaled"})," property. Evaluating this value allows knowing if the function returned because the ",(0,r.jsx)(n.code,{children:".trigger( )"})," has been called (",(0,r.jsx)(n.code,{children:".signaled"})," is ",(0,r.jsx)(n.strong,{children:"true"}),") or if the ",(0,r.jsx)(n.em,{children:"timeout"})," expired (",(0,r.jsx)(n.code,{children:".signaled"})," is ",(0,r.jsx)(n.strong,{children:"false"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The state of a process that waits for a signal is ",(0,r.jsx)(n.code,{children:"Waiting for internal flag"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},904055:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);