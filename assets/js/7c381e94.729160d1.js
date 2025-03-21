"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97715"],{857620:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/variable-to-variable","title":"VARIABLE TO VARIABLE","description":"VARIABLE TO VARIABLE ( process ; dstVar ; srcVar {; dstVar2 ; srcVar2 ; ... ; dstVarN ; srcVarN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/variable-to-variable.md","sourceDirName":"commands-legacy","slug":"/commands/variable-to-variable","permalink":"/docs/20-R7/commands/variable-to-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariable-to-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"variable-to-variable","title":"VARIABLE TO VARIABLE","slug":"/commands/variable-to-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Test semaphore","permalink":"/docs/20-R7/commands/test-semaphore"},"next":{"title":"Process (User Interface)","permalink":"/docs/20-R7/commands/theme/Process-User-Interface"}}'),a=r("785893"),t=r("250065");let i={id:"variable-to-variable",title:"VARIABLE TO VARIABLE",slug:"/commands/variable-to-variable",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Restrictions",id:"restrictions",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," ( ",(0,a.jsx)(s.em,{children:"process"})," ; ",(0,a.jsx)(s.em,{children:"dstVar"})," ; ",(0,a.jsx)(s.em,{children:"srcVar"})," {; ",(0,a.jsx)(s.em,{children:"dstVar2"})," ; ",(0,a.jsx)(s.em,{children:"srcVar2"})," ; ... ; ",(0,a.jsx)(s.em,{children:"dstVarN"})," ; ",(0,a.jsx)(s.em,{children:"srcVarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"process"}),(0,a.jsx)(s.td,{children:"Integer"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Destination process number"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"dstVar"}),(0,a.jsx)(s.td,{children:"Variable"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Destination variable"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"srcVar"}),(0,a.jsx)(s.td,{children:"Variable"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Source variable"})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," command writes the ",(0,a.jsx)(s.em,{children:"dstVar"})," process variables (",(0,a.jsx)(s.em,{children:"dstVar2"}),", etc.) of the destination process whose number is passed in ",(0,a.jsx)(s.em,{children:"process"})," using the values of the variables ",(0,a.jsx)(s.em,{children:"srcVar1"})," ",(0,a.jsx)(s.em,{children:"srcVar2"}),", etc."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," has the same action as ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),", with the following differences:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["You pass source expressions to ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),", and therefore cannot pass an array as a whole. You must exclusively pass source variables to ",(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"}),", and therefore can pass an array as a whole."]}),"\n",(0,a.jsxs)(s.li,{children:["Each destination variable of ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," can be a variable or an array element, but cannot be an array as a whole. Each destination variable of ",(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," can be a variable or an array or an array element."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"4D Server:"})," \u201CIntermachine\u201D process communication, provided by the commands ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),", ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," and ",(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"}),", is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure."]}),"\n",(0,a.jsxs)(s.p,{children:["For each couple of ",(0,a.jsx)(s.em,{children:"dstVar;expr"})," variables, the source variable must be of a type compatible with the destination variable, otherwise you may end up with a meaningless value in the variable. In interpreted mode, if a destination variable does not exist, it is created and assigned with the type and value of the source variable."]}),"\n",(0,a.jsx)(s.p,{children:"The current process \u201Cpokes\u201D the variables of the destination process\u2014the destination process is not warned in any way that another process is writing the instance of its variables."}),"\n",(0,a.jsx)(s.h3,{id:"restrictions",children:"Restrictions"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," does not accept local variables as destination variables."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"VARIABLE TO VARIABLE"})," accepts any type of destination process or interprocess variables except:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Pointers"}),"\n",(0,a.jsx)(s.li,{children:"Array of pointers"}),"\n",(0,a.jsx)(s.li,{children:"Two-dimensional arrays"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The destination process must be a user process; it cannot be a kernel process. If the destination process does not exist, an error is generated. You can catch this error using an error-handling method installed with ",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(s.p,{children:["The following example reads a process array from the process indicated by ",(0,a.jsx)(s.em,{children:"$vlProcess"}),", sequentially sets the elements to uppercase and then writes back the array as a whole:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0\xa0\xa0$anArray{$vlElem}:=Uppercase($anArray{$vlElem})\n\xa0End for\n\xa0VARIABLE TO VARIABLE($vlProcess;at_IPCom_Array;$anArray)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.em,{children:"Processes"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]}),"\n",(0,a.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Command number"}),(0,a.jsx)(s.td,{children:"635"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread safe"}),(0,a.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return i}});var n=r(667294);let a={},t=n.createContext(a);function i(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);