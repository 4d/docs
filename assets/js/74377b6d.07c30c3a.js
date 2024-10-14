"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27629],{665873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=s(474848),r=s(28453);const t={id:"variables",title:"Variables"},i=void 0,l={id:"Concepts/variables",title:"Variables",description:"Data in 4D is stored in two fundamentally different ways. Fields store data permanently on disk; variables store data temporarily in memory.",source:"@site/versioned_docs/version-20-R6/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/Concepts/arrays"}},o={},d=[{value:"Declaring Variables",id:"declaring-variables",level:2},{value:"Examples",id:"examples",level:3},{value:"Initializing Variables in the Declaration Line",id:"initializing-variables-in-the-declaration-line",level:2},{value:"Assigning Data",id:"assigning-data",level:2},{value:"Local, Process, and Interprocess variables",id:"local-process-and-interprocess-variables",level:2},{value:"Local variables",id:"local-variables",level:3},{value:"Process variables",id:"process-variables",level:3},{value:"Interprocess variables",id:"interprocess-variables",level:3},{value:"System Variables",id:"system-variables",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Data in 4D is stored in two fundamentally different ways. ",(0,a.jsx)(n.strong,{children:"Fields"})," store data permanently on disk; ",(0,a.jsx)(n.strong,{children:"variables"})," store data temporarily in memory."]}),"\n",(0,a.jsxs)(n.p,{children:["When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same\u2014you also give them names and different types (see ",(0,a.jsx)(n.a,{href:"/docs/Concepts/data-types",children:"Data types"}),")."]}),"\n",(0,a.jsx)(n.p,{children:"Once created, you can use a variable wherever you need it in your application. For example, you might need to store a text variable in a field of same type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,a.jsx)(n.p,{children:"Variables are language objects; you can create and use variables that will never appear on the screen. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved."}),"\n",(0,a.jsx)(n.h2,{id:"declaring-variables",children:"Declaring Variables"}),"\n",(0,a.jsx)(n.p,{children:"You usually create variables by declaring them. The 4D language offers two ways to declare variables:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["using the ",(0,a.jsx)(n.code,{children:"var"})," keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),"]}),"\n",(0,a.jsx)(n.li,{children:'using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When variables are declared, they are initialized to the ",(0,a.jsx)(n.a,{href:"/docs/Concepts/data-types#default-values",children:(0,a.jsx)(n.strong,{children:"default value corresponding to their type"})}),", which they will keep during the session as long as they have not been ",(0,a.jsx)(n.a,{href:"#assigning-data",children:"assigned"}),". Alternatively, when declaring variables, you can ",(0,a.jsx)(n.a,{href:"#initializing-variables-in-the-declaration-line",children:"initialize"})," their value along with their data type all within one line."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate is created  \n // 4D guesses it is of date type  \n // and assigns the current date plus 30 days\n"})}),(0,a.jsx)(n.p,{children:"When a variable is created before being declared, it is not initialized at the declaration step."})]}),"\n",(0,a.jsx)(n.p,{children:"To declare a variable of any type, use the following syntax:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D.File  //a file class object variable\nvar $myVar //a variant variable\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"varName"})," is the variable name, it must comply with the ",(0,a.jsx)(n.a,{href:"/docs/Concepts/identifiers",children:"4D rules"})," about identifiers.\nThis syntax only supports ",(0,a.jsx)(n.a,{href:"#local-process-and-interprocess-variables",children:"local and process variables"})," declarations, thus excluding ",(0,a.jsx)(n.a,{href:"#interprocess-variables",children:"interprocess variables"})," and ",(0,a.jsx)(n.a,{href:"/docs/Concepts/arrays",children:"arrays"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"varType"})," can be:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["a ",(0,a.jsx)(n.a,{href:"/docs/Concepts/data-types",children:"basic type"}),", in which case the variable contains a value of the declared type,"]}),"\n",(0,a.jsxs)(n.li,{children:["a ",(0,a.jsx)(n.a,{href:"/docs/Concepts/classes",children:"class reference"})," (4D class or user class), in which case the variable contains a reference to an object of the defined class."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"varType"})," is omitted, a variable of the ",(0,a.jsx)(n.strong,{children:"variant"})," type is created."]}),"\n",(0,a.jsxs)(n.p,{children:["The following table lists all supported ",(0,a.jsx)(n.code,{children:"varType"})," values:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"varType"}),(0,a.jsx)(n.th,{children:"Contents"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Text"})}),(0,a.jsx)(n.td,{children:"Text value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Date"})}),(0,a.jsx)(n.td,{children:"Date value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Time"})}),(0,a.jsx)(n.td,{children:"Time value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Boolean"})}),(0,a.jsx)(n.td,{children:"Boolean value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Integer"})}),(0,a.jsx)(n.td,{children:"Long integer value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Real"})}),(0,a.jsx)(n.td,{children:"Real value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Pointer"})}),(0,a.jsx)(n.td,{children:"Pointer value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Picture"})}),(0,a.jsx)(n.td,{children:"Picture value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Blob"})}),(0,a.jsx)(n.td,{children:"Scalar Blob value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Collection"})}),(0,a.jsx)(n.td,{children:"Collection value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Variant"})}),(0,a.jsx)(n.td,{children:"Variant value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Object"})}),(0,a.jsx)(n.td,{children:"Object with default class (4D.Object)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"4D.<className>"})}),(0,a.jsx)(n.td,{children:"Object of the 4D class name"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"cs.<className>"})}),(0,a.jsx)(n.td,{children:"Object of the user class name"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"cs.<namespace><className>"})}),(0,a.jsxs)(n.td,{children:["Object of the ",(0,a.jsx)(n.code,{children:"<namespace>"})," component class name"]})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To declare local and process basic variables:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \nvar $o : 4D.Object\n//also equivalent to C_OBJECT($o)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To declare object variables of 4D class:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To declare object variables of user class:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initializing-variables-in-the-declaration-line",children:"Initializing Variables in the Declaration Line"}),"\n",(0,a.jsx)(n.p,{children:"When declaring variables, you have the flexibility to specify their data type and provide an initial value in one statement. Here are some examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Variables can also be declared and initialized without explicitly mentioning their data type, in which case their type will be inferred by 4D. Here are some examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $text:="hello"  // Inferred as Text\nvar $number:=20  // Inferred as Real\nvar $obj:={}  // Inferred as an Object\nvar $mycol:=[]  // Inferred as a Collection  \n\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["The inferred type might be different between ",(0,a.jsx)(n.a,{href:"/docs/Concepts/interpreted-compiled",children:"interpreted and compiled mode"})," if the evaluation of the value is too ambiguous. In this case, a warning is generated by the compiler and a variant type is used. For example, in the following $a type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and $a will be typed as a variant for the compiled mode."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $class:={test: "a"}\nvar $a:=$class.test\n\n'})})]}),"\n",(0,a.jsxs)(n.p,{children:["4D tries to deduce the most general type. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., ",(0,a.jsx)(n.code,{children:"var $a:=10 //Real type is inferred"}),"). In such cases, or when initializing a variable with a complex type such as class instantiation, it is recommended to pass the type explicitly."]}),"\n",(0,a.jsx)(n.p,{children:"In most cases, all variable types are automatically determined. The exception is when you assign a value to a process or interprocess variable, which then triggers a warning message."}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Multiple assignments in one line are not supported:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $a; $b : Integer:=15 //error\n\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"assigning-data",children:"Assigning Data"}),"\n",(0,a.jsxs)(n.p,{children:["Data can be put into and copied out of variables and arrays. Putting data into a variable is called ",(0,a.jsx)(n.strong,{children:"assigning the data to the variable"})," and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields."]}),"\n",(0,a.jsx)(n.p,{children:"The assignment operator is a primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["creates the variable ",(0,a.jsx)(n.em,{children:"MyNumber"})," and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["It is usually not recommended to create variables without ",(0,a.jsx)(n.a,{href:"#declaring-variables",children:"declaring their type"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called [Products]Size, you would write ",(0,a.jsx)(n.em,{children:"MyNumber"})," on the right side of the assignment operator:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this case, ",(0,a.jsx)(n.em,{children:"[Products]Size"})," would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language."]}),"\n",(0,a.jsx)(n.p,{children:"You assign data to array elements by using curly braces ({...}):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"local-process-and-interprocess-variables",children:"Local, Process, and Interprocess variables"}),"\n",(0,a.jsxs)(n.p,{children:["You can create three types of variables: ",(0,a.jsx)(n.strong,{children:"local"}),", ",(0,a.jsx)(n.strong,{children:"process"}),", and ",(0,a.jsx)(n.strong,{children:"interprocess"}),". The difference between the three types of elements is their scope, or the objects to which they are available."]}),"\n",(0,a.jsx)(n.h3,{id:"local-variables",children:"Local variables"}),"\n",(0,a.jsx)(n.p,{children:"A local variable is, as its name implies, local to a method\u2014accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being \u201clocal in scope.\u201d Local variables are used to restrict a variable so that it works only within the method."}),"\n",(0,a.jsx)(n.p,{children:"You may want to use a local variable to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Avoid conflicts with the names of other variables"}),"\n",(0,a.jsx)(n.li,{children:"Use data temporarily"}),"\n",(0,a.jsx)(n.li,{children:"Reduce the number of process variables"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length."}),"\n",(0,a.jsx)(n.p,{children:"When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else."}),"\n",(0,a.jsxs)(n.p,{children:["Frequently, in an application, small pieces of information are needed from the user. The ",(0,a.jsx)(n.code,{children:"Request"})," command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $vsID:=Request("Please enter your ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,a.jsx)(n.p,{children:"This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," Parameters $1, $2... passed to methods are local variables. For more information, please refer to ",(0,a.jsx)(n.a,{href:"/docs/Concepts/parameters",children:"Parameters"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"process-variables",children:"Process variables"}),"\n",(0,a.jsx)(n.p,{children:"A process variable is available only within a process. It is accessible to the process method and any other method called from within the process."}),"\n",(0,a.jsx)(n.p,{children:"A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters."}),"\n",(0,a.jsx)(n.p,{children:"In interpreted mode, variables are maintained dynamically; they are created and erased from memory \u201con the fly.\u201d In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2."}),"\n",(0,a.jsxs)(n.p,{children:["A process can \u201cpeek and poke\u201d process variables from another process using the commands ",(0,a.jsx)(n.code,{children:"GET PROCESS VARIABLE"})," and ",(0,a.jsx)(n.code,{children:"SET PROCESS VARIABLE"}),". It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Interprocess communication at specific places or your code"}),"\n",(0,a.jsx)(n.li,{children:"Handling of interprocess drag and drop"}),"\n",(0,a.jsx)(n.li,{children:"In Client/Server, communication between processes on client machines and the stored procedures running on the server machines"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more information, see the chapter ",(0,a.jsx)(n.strong,{children:"Processes"})," and the description of these commands."]}),"\n",(0,a.jsx)(n.h3,{id:"interprocess-variables",children:"Interprocess variables"}),"\n",(0,a.jsx)(n.admonition,{title:"Deprecated",type:"warning",children:(0,a.jsxs)(n.p,{children:["Use of interprocess variables is not recommended since they are not available from ",(0,a.jsx)(n.a,{href:"/docs/Develop/preemptive-processes",children:"preemptive processes"})," and tend to make the code less maintainable."]})}),"\n",(0,a.jsx)(n.p,{children:"Interprocess variables are available throughout the project and are shared across all cooperative processes. They are primarily used to share information between processes."}),"\n",(0,a.jsxs)(n.p,{children:["The name of an interprocess variable always begins with the symbols ",(0,a.jsx)(n.code,{children:"<>"})," \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."]}),"\n",(0,a.jsx)(n.p,{children:"In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable."}),"\n",(0,a.jsx)(n.h2,{id:"system-variables",children:"System Variables"}),"\n",(0,a.jsxs)(n.p,{children:["The 4D language manages several ",(0,a.jsx)(n.strong,{children:"system variables"}),", which allow you to control the execution of different operations. You can test their values and use them as any variable. All system variables are ",(0,a.jsx)(n.a,{href:"#process-variables",children:"process variables"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["System variables are used by ",(0,a.jsx)(n.a,{href:"/docs/Concepts/commands",children:"4D commands"}),'. Refer to the "System variables and sets" paragraph in the description of a command to find out whether it affects a system variable.']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"System variable name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"OK"})}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Usually set to 1 after a command has displayed a dialog box and the user clicked the ",(0,a.jsx)(n.strong,{children:"OK"})," button, and 0 if they clicked ",(0,a.jsx)(n.strong,{children:"Cancel"}),". Some commands also modify the value of the ",(0,a.jsx)(n.code,{children:"OK"})," system variable when a operation is successfully executed."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Document"})}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsxs)(n.td,{children:['Contains the "long name" (full path+name) of the last file opened or created using commands such as ',(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page264.html",children:"Open document"})," or ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page345.html",children:"SELECT LOG FILE"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"FldDelimit"}),", ",(0,a.jsx)(n.code,{children:"RecDelimit"})]}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsxs)(n.td,{children:["Contain the character codes that will be used respectively as a field separator (default is ",(0,a.jsx)(n.strong,{children:"Tab"})," (9)) and record separator (default is ",(0,a.jsx)(n.strong,{children:"carriage return"})," (13)) when importing or exporting text. To use a different separator, assign a new value to the system variable."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"Error"}),", ",(0,a.jsx)(n.code,{children:"Error method"}),", ",(0,a.jsx)(n.code,{children:"Error line"}),", ",(0,a.jsx)(n.code,{children:"Error formula"})]}),(0,a.jsx)(n.td,{children:"Text, Longint"}),(0,a.jsxs)(n.td,{children:["Used in an error-catching method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page155.html",children:(0,a.jsx)(n.code,{children:"ON ERR CALL"})})," command. See ",(0,a.jsx)(n.a,{href:"/docs/Concepts/error-handling#handling-errors-within-the-method",children:"Handling errors within the method"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"MouseDown"})}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Used in a method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,a.jsx)(n.code,{children:"ON EVENT CALL"})})," command. Set to 1 when the mouse button is pushed, otherwise set to 0."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"MouseX"}),", ",(0,a.jsx)(n.code,{children:"MouseY"})]}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Used in a method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,a.jsx)(n.code,{children:"ON EVENT CALL"})})," command. ",(0,a.jsxs)(n.li,{children:["In a ",(0,a.jsx)(n.code,{children:"MouseDown=1"})," event, ",(0,a.jsx)(n.code,{children:"MouseX"})," and ",(0,a.jsx)(n.code,{children:"MouseY"})," are respectively set to the vertical and horizontal coordinates of the click. Both values are expressed in pixels and use the local coordinate system of the window. "]}),(0,a.jsxs)(n.li,{children:["In case of a picture field or variable, ",(0,a.jsx)(n.code,{children:"MouseX"})," and ",(0,a.jsx)(n.code,{children:"MouseY"})," return the local coordinates of a mouse click in the ",(0,a.jsx)(n.a,{href:"/docs/Events/onClicked",children:(0,a.jsx)(n.code,{children:"On Clicked"})}),", ",(0,a.jsx)(n.a,{href:"/docs/Events/onDoubleClicked",children:(0,a.jsx)(n.code,{children:"On Double Clicked"})})," and ",(0,a.jsx)(n.a,{href:"/docs/Events/onMouseUp",children:(0,a.jsx)(n.code,{children:"On Mouse Up"})})," form events. Local coordinates of the mouse cursor are also returned in the ",(0,a.jsx)(n.a,{href:"/docs/Events/onMouseEnter",children:(0,a.jsx)(n.code,{children:"On Mouse Enter"})})," and ",(0,a.jsx)(n.a,{href:"/docs/Events/onMouseMove",children:(0,a.jsx)(n.code,{children:"On Mouse Move"})})," form events. For more information, see the ",(0,a.jsx)(n.a,{href:"/docs/FormEditor/pictures#mouse-coordinates-in-a-picture",children:"Mouse Coordinates in a picture"})," section."]})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"KeyCode"})}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Used in a method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,a.jsx)(n.code,{children:"ON EVENT CALL"})})," command. Set to the character code of the key that was just pressed. If the key is a function key, ",(0,a.jsx)(n.code,{children:"KeyCode"})," is set to a special code."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Modifiers"})}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Used in a method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,a.jsx)(n.code,{children:"ON EVENT CALL"})})," command. Set to the keyboard modifier keys (Ctrl/Command, Alt/Option, Shift, Caps Lock)."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"MouseProc"})}),(0,a.jsx)(n.td,{children:"Longint"}),(0,a.jsxs)(n.td,{children:["Used in a method installed by the ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,a.jsx)(n.code,{children:"ON EVENT CALL"})})," command. Set to the process number in which the last event took place"]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Therefore, you cannot create a variable, method, or function using any of these variable names."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(296540);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);