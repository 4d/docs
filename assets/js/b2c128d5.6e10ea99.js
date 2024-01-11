"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39923],{603905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},928682:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});t(667294);var n=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={id:"variables",title:"Variables"},i=void 0,s={unversionedId:"Concepts/variables",id:"version-20/Concepts/variables",title:"Variables",description:"Data in 4D is stored in two fundamentally different ways. Fields store data permanently on disk; variables store data temporarily in memory.",source:"@site/versioned_docs/version-20/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/20/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/20/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/20/Concepts/arrays"}},p={},c=[{value:"Declaring Variables",id:"declaring-variables",level:2},{value:"Using the <code>var</code> keyword",id:"using-the-var-keyword",level:3},{value:"Examples",id:"examples",level:4},{value:"Using a C_ directive",id:"using-a-c_-directive",level:3},{value:"Assigning Data",id:"assigning-data",level:2},{value:"Local, Process, and Interprocess variables",id:"local-process-and-interprocess-variables",level:2},{value:"Local variables",id:"local-variables",level:3},{value:"Process variables",id:"process-variables",level:3},{value:"Interprocess variables",id:"interprocess-variables",level:3}],d={toc:c};function m(e){var{components:a}=e,t=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Data in 4D is stored in two fundamentally different ways. ",(0,n.kt)("strong",{parentName:"p"},"Fields")," store data permanently on disk; ",(0,n.kt)("strong",{parentName:"p"},"variables")," store data temporarily in memory."),(0,n.kt)("p",null,"When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same\u2014you also give them names and different types (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/data-types"}),"Data types"),")."),(0,n.kt)("p",null,"Once created, you can use a variable wherever you need it in your application. For example, you might need to store a text variable in a field of same type:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,n.kt)("p",null,"Variables are language objects; you can create and use variables that will never appear on the screen. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved."),(0,n.kt)("h2",r({},{id:"declaring-variables"}),"Declaring Variables"),(0,n.kt)("p",null,"You usually create variables by declaring them. The 4D language offers two ways to declare variables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using the ",(0,n.kt)("inlineCode",{parentName:"li"},"var")," keyword (recommended, specially if your code uses objects and classes),"),(0,n.kt)("li",{parentName:"ul"},'using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).')),(0,n.kt)("p",null,"When variables are declared, they are initialized to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/data-types#default-values"}),(0,n.kt)("strong",{parentName:"a"},"default value corresponding to their type")),", which they will keep during the session as long as they have not been ",(0,n.kt)("a",r({parentName:"p"},{href:"#assigning-data"}),"assigned"),". "),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate is created  \n // 4D guesses it is of date type  \n // and assigns the current date plus 30 days\n")),(0,n.kt)("p",{parentName:"admonition"},"When a variable is created before being declared, it is not initialized at the declaration step.")),(0,n.kt)("h3",r({},{id:"using-the-var-keyword"}),"Using the ",(0,n.kt)("inlineCode",{parentName:"h3"},"var")," keyword"),(0,n.kt)("p",null,"Declaring variables using the ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," keyword is recommended since this syntax allows you to bind object variables with classes. Using this syntax enhances code editor suggestions and type-ahead features."),(0,n.kt)("p",null,"To declare a variable of any type with the ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," keyword, use the following syntax:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"var <varName>{; <varName2>;...}{ : <varType>}")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D.File  //a file class object variable\nvar $myVar //a variant variable\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varName")," is the variable name, it must comply with the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/identifiers"}),"4D rules")," about identifiers.\nThis syntax only supports ",(0,n.kt)("a",r({parentName:"p"},{href:"#local-process-and-interprocess-variables"}),"local and process variables")," declarations, thus excluding ",(0,n.kt)("a",r({parentName:"p"},{href:"#interprocess-variables"}),"interprocess variables")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/arrays"}),"arrays"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varType")," can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/20/Concepts/data-types"}),"basic type"),", in which case the variable contains a value of the declared type,"),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/20/Concepts/classes"}),"class reference")," (4D class or user class), in which case the variable contains a reference to an object of the defined class.")),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," is omitted, a variable of the ",(0,n.kt)("strong",{parentName:"p"},"variant")," type is created."),(0,n.kt)("p",null,"The following table lists all supported ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"varType"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long integer value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pointer value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scalar Blob value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Variant")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Variant value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object with default class (4D.Object)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object of the 4D class name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object of the user class name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<namespace><className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object of the ",(0,n.kt)("inlineCode",{parentName:"td"},"<namespace>")," component class name")))),(0,n.kt)("h4",r({},{id:"examples"}),"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To declare local and process basic variables:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \nvar $o : 4D.Object\n//also equivalent to C_OBJECT($o)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To declare object variables of 4D class:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To declare object variables of user class:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n")),(0,n.kt)("h3",r({},{id:"using-a-c_-directive"}),"Using a C_ directive"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibility Note:")," This feature is not recommended to declare variables inside methods. It is recommended to use the ",(0,n.kt)("a",r({parentName:"p"},{href:"#using-the-var-keyword"}),"var")," keyword.")),(0,n.kt)("p",null,'Directives from the "Compiler" theme commands allow you to declare variables of basic types.'),(0,n.kt)("p",null,"For example, if you want to define a text variable, you write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,n.kt)("p",null,"The following are some basic variable declarations:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_BLOB(vxMyBlob) // The process variable vxMyBlob is declared as a variable of type BLOB\n C_DATE($vdCurDate) // The local variable $vdCurDate is declared as a variable of type Date\n C_LONGINT(vg1;vg2;vg3) // The 3 process variables vg1, vg2 and vg3 are declared as variables of type longint  \n C_OBJECT($vObj) // The local variable $vObj is declared as a variable of type Object\n C_COLLECTION($vCol) // The local variable $vCol is declared as a variable of type Collection\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Arrays are a particular type of variables (an array is an ordered series of variables of the same type). Arrays are declared with specific commands, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ARRAY LONGINT(alAnArray;10)"),". For more information, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/arrays"}),"Arrays"),"."),(0,n.kt)("h2",r({},{id:"assigning-data"}),"Assigning Data"),(0,n.kt)("p",null,"Data can be put into and copied out of variables and arrays. Putting data into a variable is called ",(0,n.kt)("strong",{parentName:"p"},"assigning the data to the variable")," and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields."),(0,n.kt)("p",null,"The assignment operator is a primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,n.kt)("p",null,"creates the variable ",(0,n.kt)("em",{parentName:"p"},"MyNumber")," and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is usually not recommended to create variables without ",(0,n.kt)("a",r({parentName:"p"},{href:"#declaring-variables"}),"declaring their type"),".")),(0,n.kt)("p",null,"Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called ","[Products]","Size, you would write ",(0,n.kt)("em",{parentName:"p"},"MyNumber")," on the right side of the assignment operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,n.kt)("p",null,"In this case, ",(0,n.kt)("em",{parentName:"p"},"[Products]","Size")," would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language."),(0,n.kt)("p",null,"You assign data to array elements by using curly braces ({...}):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,n.kt)("h2",r({},{id:"local-process-and-interprocess-variables"}),"Local, Process, and Interprocess variables"),(0,n.kt)("p",null,"You can create three types of variables: ",(0,n.kt)("strong",{parentName:"p"},"local"),", ",(0,n.kt)("strong",{parentName:"p"},"process"),", and ",(0,n.kt)("strong",{parentName:"p"},"interprocess"),". The difference between the three types of elements is their scope, or the objects to which they are available."),(0,n.kt)("h3",r({},{id:"local-variables"}),"Local variables"),(0,n.kt)("p",null,"A local variable is, as its name implies, local to a method\u2014accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being \u201clocal in scope.\u201d Local variables are used to restrict a variable so that it works only within the method."),(0,n.kt)("p",null,"You may want to use a local variable to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoid conflicts with the names of other variables"),(0,n.kt)("li",{parentName:"ul"},"Use data temporarily"),(0,n.kt)("li",{parentName:"ul"},"Reduce the number of process variables")),(0,n.kt)("p",null,"The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length."),(0,n.kt)("p",null,"When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else."),(0,n.kt)("p",null,"Frequently, in an application, small pieces of information are needed from the user. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Request")," command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Please enter your ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,n.kt)("p",null,"This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Parameters $1, $2... passed to methods are local variables. For more information, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/parameters"}),"Parameters"),"."),(0,n.kt)("h3",r({},{id:"process-variables"}),"Process variables"),(0,n.kt)("p",null,"A process variable is available only within a process. It is accessible to the process method and any other method called from within the process."),(0,n.kt)("p",null,"A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters."),(0,n.kt)("p",null,"In interpreted mode, variables are maintained dynamically; they are created and erased from memory \u201con the fly.\u201d In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2."),(0,n.kt)("p",null,"A process can \u201cpeek and poke\u201d process variables from another process using the commands ",(0,n.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interprocess communication at specific places or your code"),(0,n.kt)("li",{parentName:"ul"},"Handling of interprocess drag and drop"),(0,n.kt)("li",{parentName:"ul"},"In Client/Server, communication between processes on client machines and the stored procedures running on the server machines")),(0,n.kt)("p",null,"For more information, see the chapter ",(0,n.kt)("strong",{parentName:"p"},"Processes")," and the description of these commands."),(0,n.kt)("h3",r({},{id:"interprocess-variables"}),"Interprocess variables"),(0,n.kt)("p",null,"Interprocess variables are available throughout the project and are shared across all cooperative processes. They are primarily used to share information between processes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.  ")),(0,n.kt)("p",null,"The name of an interprocess variable always begins with the symbols ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."),(0,n.kt)("p",null,"In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable."))}m.isMDXComponent=!0}}]);