"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84679"],{431453:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-process-variable","title":"GET PROCESS VARIABLE","description":"GET PROCESS VARIABLE ( process ; srcVar ; dstVar {; srcVar2 ; dstVar2 ; ... ; srcVarN ; dstVarN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/get-process-variable","permalink":"/docs/commands/get-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-process-variable","title":"GET PROCESS VARIABLE","slug":"/commands/get-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SEMAPHORE","permalink":"/docs/commands/clear-semaphore"},"next":{"title":"KILL WORKER","permalink":"/docs/commands/kill-worker"}}'),t=r("785893"),a=r("250065");let i={id:"get-process-variable",title:"GET PROCESS VARIABLE",slug:"/commands/get-process-variable",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Restrictions",id:"restrictions",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," ( ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"srcVar"})," ; ",(0,t.jsx)(s.em,{children:"dstVar"})," {; ",(0,t.jsx)(s.em,{children:"srcVar2"})," ; ",(0,t.jsx)(s.em,{children:"dstVar2"})," ; ... ; ",(0,t.jsx)(s.em,{children:"srcVarN"})," ; ",(0,t.jsx)(s.em,{children:"dstVarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Source process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcVar"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Source variable"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dstVar"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Destination variable"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," command reads the ",(0,t.jsx)(s.em,{children:"srcVar"})," process variables (",(0,t.jsx)(s.em,{children:"srvVar2"}),", etc.) from the source process whose number is passed in ",(0,t.jsx)(s.em,{children:"process"}),", and returns their current values in the ",(0,t.jsx)(s.em,{children:"dstVar"})," variables ( ",(0,t.jsx)(s.em,{children:"dstVar2"}),", etc.) of the current process."]}),"\n",(0,t.jsx)(s.p,{children:"Each source variable can be a variable, an array or an array element. However, see the restrictions listed later in this section."}),"\n",(0,t.jsxs)(s.p,{children:["In each couple of ",(0,t.jsx)(s.em,{children:"srcVar;dstVar"})," variables, the two variables must be of compatible types, otherwise the values you obtain may be meaningless."]}),"\n",(0,t.jsx)(s.p,{children:"The current process \u201Cpeeks\u201D the variables from the source process\u2014the source process is not warned in any way that another process is reading the instance of its variables."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"4D Server:"})," Using 4D Client, you can read variables in a destination process executed on the server machine (stored procedure). To do so, put a minus sign before the process ID number in the ",(0,t.jsx)(s.em,{children:"process"})," parameter.",(0,t.jsx)(s.br,{}),"\n\u201CIntermachine\u201D process communication, provided by the commands ",(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," and ",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"}),", is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," If you do not know the ID number of the server process, you can still use the interprocess variables of the server. To do so, you can use any negative value in ",(0,t.jsx)(s.em,{children:"process"}),". In other words, it is not necessary to know the ID number of the process to be able to use the ",(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," command with the interprocess variables of the server. This is useful when a stored procedure is launched using the ",(0,t.jsx)(s.a,{href:"/docs/commands/on-server-startup-database-method",children:"On Server Startup database method"}),". As clients machines do not automatically know the ID number of that process, any negative value can be passed in the ",(0,t.jsx)(s.em,{children:"process"})," parameter."]}),"\n",(0,t.jsx)(s.h5,{id:"restrictions",children:"Restrictions"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," does not accept local variables as source variables."]}),"\n",(0,t.jsx)(s.p,{children:"On the other hand, the destination variables can be interprocess, process or local variables. You \u201Creceive\u201D the values only into variables, not into fields."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," accepts any type of source process or interprocess variable, except:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Pointers"}),"\n",(0,t.jsx)(s.li,{children:"Array of pointers"}),"\n",(0,t.jsx)(s.li,{children:"Two-dimensional arrays"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The source process must be a user process; it cannot be a kernel process. If the source process does not exist, this command has no effect."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," In interpreted mode, if a source variable does not exist, the undefined value is returned. You can detect this by using the ",(0,t.jsx)(s.a,{href:"/docs/commands/type",children:"Type"})," function to test the corresponding destination variable."]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code reads the value of the text variable ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," from the process whose number is ",(0,t.jsx)(s.em,{children:"$vlProcess"}),". It returns the value in the process variable ",(0,t.jsx)(s.em,{children:"vtInfo"})," of the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtInfo)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code does the same thing, but returns the value in the local variable ",(0,t.jsx)(s.em,{children:"$vtInfo"})," for the method executing in the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code does the same thing, but returns the value in the variable ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," of the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The first ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," designates the instance of the variable in the source process The second ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," designates the instance of the variable in the current process."]}),"\n",(0,t.jsx)(s.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsxs)(s.p,{children:["This example sequentially reads the elements of a process array from the process indicated by ",(0,t.jsx)(s.em,{children:"$vlProcess"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)\n\xa0For($vlElem;1;$vlSize)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0// Do something with $vtElem\n\xa0End for\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," In this example, the process variable ",(0,t.jsx)(s.em,{children:"vl_IPCom_Array"})," contains the size of the array ",(0,t.jsx)(s.em,{children:"at_IPCom_Array"}),", and must be maintained by the source process."]}),"\n",(0,t.jsx)(s.h4,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(s.p,{children:"This example does the same thing as the previous one, but reads the array as a whole, instead of reading the elements sequentially:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0// Do something with $anArray{$vlElem}\n\xa0End for\n"})}),"\n",(0,t.jsx)(s.h4,{id:"example-6",children:"Example 6"}),"\n",(0,t.jsxs)(s.p,{children:["This example reads the source process instances of the variables ",(0,t.jsx)(s.em,{children:"v1"}),",",(0,t.jsx)(s.em,{children:"v2"}),",",(0,t.jsx)(s.em,{children:"v3"})," and returns their values in the instance of the same variables for the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"example-7",children:"Example 7"}),"\n",(0,t.jsxs)(s.p,{children:["See the example for the ",(0,t.jsx)(s.em,{children:"_o_DRAG AND DROP PROPERTIES"})," command."]}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"_o_DRAG AND DROP PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Drag and Drop"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Processes"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return i}});var n=r(667294);let t={},a=n.createContext(t);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);