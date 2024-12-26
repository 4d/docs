"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43277"],{118393:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var n=JSON.parse('{"id":"commands-legacy/set-process-variable","title":"SET PROCESS VARIABLE","description":"SET PROCESS VARIABLE ( process ; dstVar ; expr {; dstVar2 ; expr2 ; ... ; dstVarN ; exprN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/set-process-variable","permalink":"/docs/commands/set-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-process-variable","title":"SET PROCESS VARIABLE","slug":"/commands/set-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Semaphore","permalink":"/docs/commands/semaphore"},"next":{"title":"Test semaphore","permalink":"/docs/commands/test-semaphore"}}'),t=r("785893"),i=r("250065");let a={id:"set-process-variable",title:"SET PROCESS VARIABLE",slug:"/commands/set-process-variable",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Restrictions",id:"restrictions",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," ( ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"dstVar"})," ; ",(0,t.jsx)(s.em,{children:"expr"})," {; ",(0,t.jsx)(s.em,{children:"dstVar2"})," ; ",(0,t.jsx)(s.em,{children:"expr2"})," ; ... ; ",(0,t.jsx)(s.em,{children:"dstVarN"})," ; ",(0,t.jsx)(s.em,{children:"exprN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Destination process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dstVar"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Destination variable"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"expr"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Source expression (or source variable)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," command writes the ",(0,t.jsx)(s.em,{children:"dstVar"})," process variables (",(0,t.jsx)(s.em,{children:"dstVar2"}),", etc.) of the destination process whose number is passed in ",(0,t.jsx)(s.em,{children:"process"})," using the values passed in ",(0,t.jsx)(s.em,{children:"expr1"})," (",(0,t.jsx)(s.em,{children:"expr2"}),", etc.)."]}),"\n",(0,t.jsx)(s.p,{children:"Each destination variable can be a variable or an array element. However, see the restrictions listed later in this section."}),"\n",(0,t.jsxs)(s.p,{children:["For each couple of ",(0,t.jsx)(s.em,{children:"dstVar;expr"})," variables, the expression must be of a type compatible with the destination variable, otherwise you may end up with a meaningless value in the variable. In interpreted mode, if a destination variable does not exist, it is created and assigned with the expression."]}),"\n",(0,t.jsx)(s.p,{children:"The current process \u201Cpokes\u201D the variables of the destination process\u2014the destination process is not warned in any way that another process is writing the instance of its variables."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"4D Server:"})," Using 4D Client, you can write variables in a destination process executed on the server machine (stored procedure). To do so, put a minus sign before the process ID number in the ",(0,t.jsx)(s.em,{children:"process"})," parameter.",(0,t.jsx)(s.br,{}),"\n\u201CIntermachine\u201D process communication, provided by the commands ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," and ",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"}),", is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," If you do not know the ID number of the server process, you can still use the interprocess variables of the server. To do so, use any negative value in ",(0,t.jsx)(s.em,{children:"process"}),". In other words, it is not necessary to know the ID number of the process to be able to use the ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," command with the interprocess variables of the server. This is useful when a stored procedure is launched using the ",(0,t.jsx)(s.a,{href:"/docs/commands/on-server-startup-database-method",children:"On Server Startup database method"}),". As client machines do not automatically know the ID number of that process, any negative value can be passed in the ",(0,t.jsx)(s.em,{children:"process"})," parameter."]}),"\n",(0,t.jsx)(s.h5,{id:"restrictions",children:"Restrictions"}),"\n",(0,t.jsx)(s.p,{children:"SET PROCESS VARIABLE does not accept local variables as destination variables."}),"\n",(0,t.jsx)(s.p,{children:"SET PROCESS VARIABLE accepts any type of destination process or interprocess variable, except:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Pointers"}),"\n",(0,t.jsxs)(s.li,{children:["Arrays of any type. To write an array as a whole from one process to another one, use the command ",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"}),". Note, however, that SET PROCESS VARIABLE allows you to write the element of an array."]}),"\n",(0,t.jsx)(s.li,{children:"You cannot write the element of an array of pointers or the element of a two-dimensional array."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The destination process must be a user process; it cannot be a kernel process. If the destination process does not exist, an error is generated. You can catch this error using an error-handling method installed with ",(0,t.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code sets (to the empty string) the text variable ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," of the process whose number is ",(0,t.jsx)(s.em,{children:"$vlProcess"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;"")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code sets the text variable ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," of the process whose number is ",(0,t.jsx)(s.em,{children:"$vlProcess"})," to the value of the variable ",(0,t.jsx)(s.em,{children:"$vtInfo"})," from the executing method in the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(s.p,{children:["This line of code sets the text variable ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," of the process whose number is ",(0,t.jsx)(s.em,{children:"$vlProcess"})," to the value of the same variable in the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The first ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," designates the instance of the variable in the destination process. The second ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," designates the instance of the variable in the current process."]}),"\n",(0,t.jsx)(s.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsxs)(s.p,{children:["This example sequentially sets to uppercase all elements of a process array from the process indicated by ",(0,t.jsx)(s.em,{children:"$vlProcess"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)\n\xa0For($vlElem;1;$vlSize)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0\xa0\xa0SET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};Uppercase($vtElem))\n\xa0End for\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," In this example, the process variable ",(0,t.jsx)(s.em,{children:"vl_IPCom_Array"})," contains the size of the array ",(0,t.jsx)(s.em,{children:"at_IPCom_Array"})," and must be maintained by the source/destination process."]}),"\n",(0,t.jsx)(s.h4,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsxs)(s.p,{children:["This example writes the destination process instance of the variables ",(0,t.jsx)(s.em,{children:"v1"}),", ",(0,t.jsx)(s.em,{children:"v2"})," and ",(0,t.jsx)(s.em,{children:"v3"})," using the instance of the same variables from the current process:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Processes"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"370"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return a}});var n=r(667294);let t={},i=n.createContext(t);function a(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);