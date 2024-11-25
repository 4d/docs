"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10558"],{541369:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"Concepts/interpreted-compiled","title":"Interpreted and Compiled modes","description":"4D applications can work in interpreted or compiled mode:","source":"@site/versioned_docs/version-19/Concepts/interpreted.md","sourceDirName":"Concepts","slug":"/Concepts/interpreted-compiled","permalink":"/docs/19/Concepts/interpreted-compiled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"interpreted-compiled","title":"Interpreted and Compiled modes"},"sidebar":"docs","previous":{"title":"Error handling","permalink":"/docs/19/Concepts/error-handling"},"next":{"title":"Components","permalink":"/docs/19/Concepts/components"}}'),r=t("785893"),o=t("250065");let a={id:"interpreted-compiled",title:"Interpreted and Compiled modes"},s=void 0,d={},l=[{value:"Differences between interpreted and compiled code",id:"differences-between-interpreted-and-compiled-code",level:2},{value:"Using Compiler Directives with the Interpreter",id:"using-compiler-directives-with-the-interpreter",level:2},{value:"Using pointers to avoid retyping",id:"using-pointers-to-avoid-retyping",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["4D applications can work in ",(0,r.jsx)(n.strong,{children:"interpreted"})," or ",(0,r.jsx)(n.strong,{children:"compiled"})," mode:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated."}),"\n",(0,r.jsx)(n.li,{children:"in compiled mode, all methods are read and translated once, at the compilation step. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The advantages of the compilation are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Speed"}),": Your application can run from 3 to 1,000 times faster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Code checking"}),": Your application is scanned for the consistency of code. Both logical and syntactical conflicts are detected."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Protection"}),": Once your application is compiled, you can delete the interpreted code. Then, the compiled application is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Stand-alone double-clickable applications"}),": compiled applications can also be transformed into stand-alone applications (.EXE files) with their own icon."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Preemptive mode"}),": only compiled code can be executed in preemptive processes."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"differences-between-interpreted-and-compiled-code",children:"Differences between interpreted and compiled code"}),"\n",(0,r.jsx)(n.p,{children:"Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Compiled"}),(0,r.jsx)(n.th,{children:"Interpreted"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"You cannot have a method with the same name as a variable."}),(0,r.jsx)(n.td,{children:"No error is generated, but priority is given to the method"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["All variables must by typed, either through a compiler directive (ex: ",(0,r.jsx)(n.code,{children:"C_LONGINT"}),"), or by the compiler at compilation time."]}),(0,r.jsx)(n.td,{children:"Variables can be typed on-the-fly (not recommended)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"You cannot change the data type of any variable or array."}),(0,r.jsx)(n.td,{children:"Changing the data type of a variable or an array is possible (not recommended)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array."}),(0,r.jsx)(n.td,{children:"Possible"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"Undefined"})," function always returns False for variables. Variables are always defined."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.'}),(0,r.jsx)(n.td,{children:"Preemptive process properties are ignored"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"IDLE"})," command is necessary to call 4D in specific loops"]}),(0,r.jsx)(n.td,{children:"It is always possible to interrupt 4D"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"using-compiler-directives-with-the-interpreter",children:"Using Compiler Directives with the Interpreter"}),"\n",(0,r.jsx)(n.p,{children:"Compiler directives are not required for uncompiled applications. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project."}),"\n",(0,r.jsx)(n.p,{children:"Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes."}),"\n",(0,r.jsx)(n.p,{children:"For example, if you write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_LONGINT(MyInt)\n"})}),"\n",(0,r.jsx)(n.p,{children:"and elsewhere in the project, you write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"MyInt:=3.1416\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"MyInt"})," is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted ",(0,r.jsx)(n.em,{children:"prior"})," to the assignment statement."]}),"\n",(0,r.jsx)(n.p,{children:"The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error."}),"\n",(0,r.jsx)(n.p,{children:"The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire project for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your project so that your compiler directives are executed prior to any statements containing declared variables."}),"\n",(0,r.jsx)(n.h2,{id:"using-pointers-to-avoid-retyping",children:"Using pointers to avoid retyping"}),"\n",(0,r.jsx)(n.p,{children:"A variable cannot be retyped. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //text target for the pointer\n$p->:="Wesson" //assigns a text value\n\n$p:=->$age  \n// new target of different type for the pointer\n$p->:=55 //assigns a number value\n'})}),"\n",(0,r.jsx)(n.p,{children:"Imagine a function that returns the length (number of charaters) of values that can be of any type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // Calc_Length (how many characters)\n  // $1 = pointer to flexible variable type, numeric, text, time, boolean\n\nC_POINTER($1)\nC_TEXT($result)  \nC_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then this method can be called:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(667294);let r={},o=i.createContext(r);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);