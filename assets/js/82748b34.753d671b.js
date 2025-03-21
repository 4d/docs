"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86491"],{163286:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"Concepts/parameters","title":"Parameters","description":"You\'ll often find that you need to pass data to your methods and functions. This is easily done with parameters.","source":"@site/versioned_docs/version-20-R8/Concepts/parameters.md","sourceDirName":"Concepts","slug":"/Concepts/parameters","permalink":"/docs/Concepts/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fparameters.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"parameters","title":"Parameters"},"sidebar":"docs","previous":{"title":"Methods","permalink":"/docs/Concepts/methods"},"next":{"title":"Shared objects and collections","permalink":"/docs/Concepts/shared"}}'),t=a("785893"),s=a("250065");let i={id:"parameters",title:"Parameters"},o=void 0,d={},l=[{value:"Overview",id:"overview",level:2},{value:"Declaring parameters",id:"declaring-parameters",level:2},{value:"Returned value",id:"returned-value",level:3},{value:"Supported data types",id:"supported-data-types",level:3},{value:"Initialization",id:"initialization",level:3},{value:"<code>return {expression}</code>",id:"return-expression",level:2},{value:"Parameter indirection (${N})",id:"parameter-indirection-n",level:2},{value:"Using variadic parameters",id:"using-variadic-parameters",level:3},{value:"Declaring variadic parameters",id:"declaring-variadic-parameters",level:3},{value:"Example",id:"example",level:4},{value:"Triggers and On Drag Over",id:"triggers-and-on-drag-over",level:2},{value:"Wrong parameter type",id:"wrong-parameter-type",level:2},{value:"Using object properties as named parameters",id:"using-object-properties-as-named-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Values or references",id:"values-or-references",level:2},{value:"Particular cases: objects and collections",id:"particular-cases-objects-and-collections",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You'll often find that you need to pass data to your methods and functions. This is easily done with parameters."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"})," (or ",(0,t.jsx)(n.strong,{children:"arguments"}),") are pieces of data that a method or a class function needs in order to perform its task. The terms ",(0,t.jsx)(n.em,{children:"parameter"})," and ",(0,t.jsx)(n.em,{children:"argument"})," are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string \u201CHello\u201D is an argument to the ",(0,t.jsx)(n.code,{children:"ALERT"})," built-in command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'ALERT("Hello")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Parameters are passed to methods or class functions in the same way. For example, if a class function named ",(0,t.jsx)(n.code,{children:"getArea()"})," accepts two parameters, a call to the class function might look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or, if a project method named ",(0,t.jsx)(n.code,{children:"DO_SOMETHING"})," accepts three parameters, a call to the method might look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"DO_SOMETHING($WithThis;$AndThat;$ThisWay)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The input parameters are separated by semicolons (;)."}),"\n",(0,t.jsx)(n.p,{children:"The same principles are used when methods are executed through dedicated commands, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  \n//pass the !05/05/20! date as parameter to the SetCalendarDate  \n//in the context of a subform\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Data can also be ",(0,t.jsx)(n.strong,{children:"returned"})," from methods and class functions. For example, the following line is a statement that uses the built-in command, ",(0,t.jsx)(n.code,{children:"Length"}),", to return the length of a string. The statement puts the value returned by ",(0,t.jsx)(n.code,{children:"Length"})," in a variable called ",(0,t.jsx)(n.em,{children:"MyLength"}),". Here is the statement:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'MyLength:=Length("How did I get here?")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Any subroutine can return a value. Only one single output parameter can be declared per method or class function."}),"\n",(0,t.jsxs)(n.p,{children:["Input and output values are ",(0,t.jsx)(n.a,{href:"#values-or-references",children:"evaluated"})," at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be ",(0,t.jsx)(n.a,{href:"#declaring-parameters",children:"declared"})," in the called code."]}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibility",type:"info",children:(0,t.jsxs)(n.p,{children:["The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as ",(0,t.jsx)(n.code,{children:"C_TEXT($1;$2)"}),", is ",(0,t.jsx)(n.strong,{children:"deprecated"})," as of 4D 20 R7."]})}),"\n",(0,t.jsx)(n.h2,{id:"declaring-parameters",children:"Declaring parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Inside called methods or class functions, parameter values are assigned to local variables. You usually declare parameters using a ",(0,t.jsx)(n.strong,{children:"parameter name"})," along with a ",(0,t.jsx)(n.strong,{children:"parameter type"}),", separated by colon."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For class functions, parameters are declared along with the function prototype, i.e. when using the ",(0,t.jsx)(n.code,{children:"Function"})," or ",(0,t.jsx)(n.code,{children:"Class Constructor"})," keywords."]}),"\n",(0,t.jsxs)(n.li,{children:["For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the ",(0,t.jsx)(n.code,{children:"#DECLARE"})," keyword at the beginning of the method code."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer) -> $area : Integer\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" //myProjectMethod\n#DECLARE ($i : Integer) -> $myResult : Object\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following rules apply:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration)."}),"\n",(0,t.jsxs)(n.li,{children:["Parameter names must start with a ",(0,t.jsx)(n.code,{children:"$"})," character and be compliant with ",(0,t.jsx)(n.a,{href:"/docs/Concepts/identifiers#object-properties",children:"property naming rules"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Multiple parameters (and types) are separated by semicolons (;)."}),"\n",(0,t.jsx)(n.li,{children:'Multiline syntaxes are supported (using "\\" character).'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, when you call a ",(0,t.jsx)(n.code,{children:"getArea()"})," function with two parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the class function code, the value of each parameter is copied into the corresponding declared parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// Class: Polygon\nFunction getArea($width : Integer; $height : Integer)-> $area : Integer\n	$area:=$width*$height\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the type is not defined, the parameter will be defined as ",(0,t.jsx)(n.a,{href:"/docs/Concepts/variant",children:(0,t.jsx)(n.code,{children:"Variant"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All 4D method kinds support the ",(0,t.jsx)(n.code,{children:"#DECLARE"})," keyword, including database methods. For example, in the ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," database method, you can declare named parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'	// On Web Authentication database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n$entitySelection:=ds.User.query("login=:1"; $user)\n// Check hash password...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"returned-value",children:"Returned value"}),"\n",(0,t.jsx)(n.p,{children:"You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer) -> $result : Integer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also declare the return parameter only by adding ",(0,t.jsx)(n.code,{children:": type"}),", in which case it can be handled by a ",(0,t.jsx)(n.a,{href:"#return-expression",children:"return statement"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer): Integer\n	return $x+$y\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"Parameters, which include the returned value, must be declared only once. In particular, you cannot declare the same parameter as input and output, even with the same type. For example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-qs",children:"	//invalid declaration\nFunction myTransform ($x : Integer) -> $x : Integer\n	//error: $x is declared twice\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"supported-data-types",children:"Supported data types"}),"\n",(0,t.jsxs)(n.p,{children:["With named parameters, you can use the same data types as those which are ",(0,t.jsxs)(n.a,{href:"/docs/Concepts/variables",children:["supported by the ",(0,t.jsx)(n.code,{children:"var"})," keyword"]}),", including class objects. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Tables or array expressions can only be passed ",(0,t.jsx)(n.a,{href:"/docs/Concepts/pointer#pointers-as-parameters-to-methods",children:"as reference using a pointer"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsxs)(n.p,{children:["When parameters are declared, they are initialized to the ",(0,t.jsx)(n.a,{href:"/docs/Concepts/data-types#default-values",children:(0,t.jsx)(n.strong,{children:"default value corresponding to their type"})}),", which they will keep during the session as long as they have not been assigned."]}),"\n",(0,t.jsx)(n.h2,{id:"return-expression",children:(0,t.jsx)(n.code,{children:"return {expression}"})}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"return"})," statement ends function or method execution and can be used to return an expression to the caller."]}),"\n",(0,t.jsx)(n.p,{children:"For example, the following function returns the square of its argument, $x, where $x is a number."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function square($x : Integer) -> $result : Integer\n   return $x * $x\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Internally, ",(0,t.jsx)(n.code,{children:"return x"})," executes ",(0,t.jsx)(n.code,{children:"myReturnValue:=x"}),", and returns to the caller. If ",(0,t.jsx)(n.code,{children:"return"})," is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise ",(0,t.jsx)(n.em,{children:"undefined"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"return"})," statement can be used along with the standard syntax for ",(0,t.jsx)(n.a,{href:"#returned-value",children:"returned values"})," (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function getValue -> $v : Integer\n	$v:=10\n	return 20\n	// returns 20\n\nFunction getValue -> $v : Integer\n	return 10\n	$v:=20 // never executed\n	// returns 10\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameter-indirection-n",children:"Parameter indirection (${N})"}),"\n",(0,t.jsxs)(n.p,{children:["4D methods and functions accept a variable number of parameters. You can address those parameters with a ",(0,t.jsx)(n.code,{children:"For...End for"})," loop, the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,t.jsx)(n.code,{children:"Count parameters"})})," command and the ",(0,t.jsx)(n.strong,{children:"parameter indirection syntax"}),". Within the method, an indirection address is formatted ",(0,t.jsx)(n.code,{children:"${N}"}),", where ",(0,t.jsx)(n.code,{children:"N"})," is a numeric expression."]}),"\n",(0,t.jsx)(n.h3,{id:"using-variadic-parameters",children:"Using variadic parameters"}),"\n",(0,t.jsx)(n.p,{children:"For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call."}),"\n",(0,t.jsxs)(n.p,{children:["Here is the method, named ",(0,t.jsx)(n.code,{children:"MySum"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" #DECLARE($format : Text) -> $result : Text\n $sum:=0\n For($i;2;Count parameters)\n    $sum:=$sum+${$i}\n End for\n $result:=String($sum;$format)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The method's parameters must be passed in the correct order, first the format and then a variable number of values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24) //"182.70"\n Result:=MySum("000";1;2;200) //"203"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that even if you declared 0, 1, or more parameters, you can always pass the number of parameters that you want. Parameters are all available within the called code through the ",(0,t.jsx)(n.code,{children:"${N}"})," syntax and extra parameters type is ",(0,t.jsx)(n.a,{href:"/docs/Concepts/variant",children:"Variant"})," by default (you can declare them using the ",(0,t.jsx)(n.a,{href:"#declaring-variadic-parameters",children:"variadic notation"}),"). You just need to make sure parameters exist, thanks to the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,t.jsx)(n.code,{children:"Count parameters"})})," command. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//foo method\n#DECLARE($p1: Text;$p2 : Text; $p3 : Date)\nFor($i;1;Count parameters)\n	ALERT("param "+String($i)+" = "+String(${$i}))\nEnd for\n'})}),"\n",(0,t.jsx)(n.p,{children:"This method can be called:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"declaring-variadic-parameters",children:"Declaring variadic parameters"}),"\n",(0,t.jsxs)(n.p,{children:["It is not mandatory to declare variadic parameters. Non-declared variadic parameters automatically get the ",(0,t.jsx)(n.a,{href:"/docs/Concepts/variant",children:"Variant"})," type."]}),"\n",(0,t.jsx)(n.p,{children:'However, to avoid type mismatch errors during code execution, you can declare a variable number of parameters using the "..." notation in the prototypes of your functions, class constructors and methods (variadic parameters). You specify the parameter\'s type following notation "..." with the desired type.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function myfunction ( ... : Text)\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"When declaring multiple parameters, variadic notation must be employed at last position, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"#DECLARE ( param: Real ; ... : Text )\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Function myfunction (var1: Integer ; ... : Text)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here we have a method called ",(0,t.jsx)(n.code,{children:"SumNumbers"})," that returns the calculated total for all the numbers passed as parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\n#DECLARE( ... : Real) : Real\n\n\n\nvar $number; $total : Real\n\nFor each ($number; 1; Count parameters)\n	$total+=${$number}\nEnd for each\n\nreturn $total\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"This method can be called with a variable number of Real parameters. In case of wrong parameter type, an error will be returned before the method is executed :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\n$total1:=SumNumbers // returns 0\n$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15\n$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error\n\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibility",type:"note",children:(0,t.jsxs)(n.p,{children:["The legacy syntax for declaring variadic parameters (",(0,t.jsx)(n.code,{children:"C_TEXT(${4})"}),") is deprecated as of 4D 20 R7."]})}),"\n",(0,t.jsx)(n.h2,{id:"triggers-and-on-drag-over",children:"Triggers and On Drag Over"}),"\n",(0,t.jsx)(n.p,{children:'Some contexts do not support declaration in a "Compiler_" method, thus they are handled specifically:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wrong-parameter-type",children:"Wrong parameter type"}),"\n",(0,t.jsxs)(n.p,{children:["Calling a parameter with an wrong type is an ",(0,t.jsx)(n.a,{href:"/docs/Concepts/error-handling",children:"error"})," that prevents correct execution. For example, if you write the following methods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// method1\n#DECLARE($value : Text)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// method2\nmethod1(42) //wrong type, text expected\n"})}),"\n",(0,t.jsx)(n.p,{children:"This case is handled by 4D depending on the context:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["in ",(0,t.jsx)(n.a,{href:"/docs/Concepts/interpreted-compiled",children:"compiled projects"}),", an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called."]}),"\n",(0,t.jsxs)(n.li,{children:["in interpreted projects:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["if the parameter was declared using the named syntax (",(0,t.jsx)(n.code,{children:"#DECLARE"})," or ",(0,t.jsx)(n.code,{children:"Function"}),"), an error is generated when the method is called."]}),"\n",(0,t.jsxs)(n.li,{children:["if the parameter was declared using a legacy (",(0,t.jsx)(n.code,{children:"_C_XXX"}),") syntax, no error is generated, the called method receives an empty value of the expected type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-object-properties-as-named-parameters",children:"Using object properties as named parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Using objects as parameters allow you to handle ",(0,t.jsx)(n.strong,{children:"named parameters"}),". This programming style is simple, flexible, and easy to read."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, using the ",(0,t.jsx)(n.code,{children:"CreatePerson"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"ChangeAge"})," method you can write:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This provides a powerful way to define ",(0,t.jsx)(n.a,{href:"#optional-parameters",children:"optional parameters"})," (see also below). To handle missing parameters, you can either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["check if all expected parameters are provided by comparing them to the ",(0,t.jsx)(n.code,{children:"Null"})," value, or"]}),"\n",(0,t.jsx)(n.li,{children:"preset parameter values, or"}),"\n",(0,t.jsx)(n.li,{children:"use them as empty values."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"ChangeAge"})," method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,t.jsx)(n.p,{children:'Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.'}),"\n",(0,t.jsx)(n.p,{children:"Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\n#DECLARE ($para : Object)  \nIf ($para.toAdd=Null)\n	$para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,t.jsx)(n.p,{children:"The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years."}),"\n",(0,t.jsx)(n.p,{children:"With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order."}),"\n",(0,t.jsx)(n.h2,{id:"optional-parameters",children:"Optional parameters"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"4D Language Reference"})," manual, the { } characters (braces) indicate optional parameters. For example, ",(0,t.jsx)(n.code,{children:"ALERT (message{; okButtonTitle})"})," means that the ",(0,t.jsx)(n.em,{children:"okButtonTitle"})," parameter may be omitted when calling the command. You can call it in the following ways:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'ALERT("Are you sure?";"Yes I am") //2 parameters\nALERT("Time is over") //1 parameter\n'})}),"\n",(0,t.jsxs)(n.p,{children:["4D methods and functions also accept such optional parameters. You can declare any number of parameters. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, ",(0,t.jsx)(n.a,{href:"/docs/Concepts/data-types#default-values",children:"according to their type"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// "concate" function of myClass\nFunction concate ($param1 : Text ; $param2 : Text)->$result : Text\n$result:=$param1+" "+$param2\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  // Calling method\n $class:=cs.myClass.new()\n $class.concate("Hello") // "Hello "\n $class.concate() // Displays " "\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can also call a method or function with more parameters than declared. They will be available within the called code through the ",(0,t.jsx)(n.a,{href:"#parameter-indirection-n",children:"${N} syntax"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"Count parameters"})," command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received."]}),"\n",(0,t.jsx)(n.p,{children:"The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n #DECLARE ($message : Text; $path : Text; $wpArea : Object)\n\n ALERT($message)\n If(Count parameters>=3)\n    WP SET TEXT($wpArea;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($path;$message)\n    End if\n End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"After this project method has been added to your application, you can write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'APPEND TEXT(vtSomeText) //Will only display the  message\nAPPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path\nAPPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When optional parameters are needed in your methods, you might also consider using ",(0,t.jsx)(n.a,{href:"#using-object-properties-as-named-parameters",children:"object properties as named parameters"})," which provide a flexible way to handle variable numbers of parameters."]})}),"\n",(0,t.jsx)(n.h2,{id:"values-or-references",children:"Values or references"}),"\n",(0,t.jsxs)(n.p,{children:["When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the ",(0,t.jsx)(n.strong,{children:"resulting value"})," to the local variables in the class function or subroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'	//Here is some code from the method MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n\n	//Here is the code of the method DO_SOMETHING\n #DECLARE($param : Text)\n $param:=Uppercase($param)\n ALERT($param)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The alert box displayed by ",(0,t.jsx)(n.code,{children:"DO_SOMETHING"}),' will read "WILLIAMS" and the alert box displayed by ',(0,t.jsx)(n.code,{children:"MY_METHOD"}),' will read "williams". The method locally changed the value of the parameter $param, but this does not affect the value of the field ',(0,t.jsx)(n.code,{children:"[People]Name"})," passed as parameter by the method ",(0,t.jsx)(n.code,{children:"MY_METHOD"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to make the method ",(0,t.jsx)(n.code,{children:"DO_SOMETHING"})," change the value of the field:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Rather than passing the field to the method, you pass a pointer to it, so you would write:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //Here is some code from the method MY_METHOD\nDO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Last Name)\n\n  //Here the code of the method DO_SOMETHING\n#DECLARE($param : Text)\n$param->:=Uppercase($param->)\nALERT($param->)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here the parameter is not the field, but a pointer to it. Therefore, within the ",(0,t.jsx)(n.code,{children:"DO SOMETHING"})," method, $param is no longer the value of the field but a pointer to the field. The object ",(0,t.jsx)(n.strong,{children:"referenced"}),' by $param ($param-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".']}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Rather than having the method ",(0,t.jsx)(n.code,{children:"DO_SOMETHING"}),' "doing something," you can rewrite the method so it returns a value. Thus you would write:']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'	//Here is some code from the method MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n	//Here the code of the method DO SOMETHING\n #DECLARE ($param : Text) -> ($result : Text)\n $result:=Uppercase($param)\n ALERT($result)\n'})}),"\n",(0,t.jsxs)(n.p,{children:['This second technique of returning a value by a subroutine is called "using a function". This is described in the ',(0,t.jsx)(n.a,{href:"#returned-value",children:"Returning values"})," paragraph."]}),"\n",(0,t.jsx)(n.h3,{id:"particular-cases-objects-and-collections",children:"Particular cases: objects and collections"}),"\n",(0,t.jsxs)(n.p,{children:["You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal ",(0,t.jsx)(n.em,{children:"pointer"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Consequently, when using such data types as parameters, ",(0,t.jsx)(n.code,{children:"$param, $return..."})," do not contain ",(0,t.jsx)(n.em,{children:"values"})," but ",(0,t.jsx)(n.em,{children:"references"}),". Modifying the value of the ",(0,t.jsx)(n.code,{children:"$param, $return..."})," parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for ",(0,t.jsx)(n.a,{href:"/docs/Concepts/pointer#pointers-as-parameters-to-methods",children:"pointers"}),", except that ",(0,t.jsx)(n.code,{children:"$param, $return..."})," parameters do not need to be dereferenced in the subroutine."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, consider the ",(0,t.jsx)(n.code,{children:"CreatePerson"})," method that creates an object and sends it as a parameter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ChangeAge"})," method adds 10 to the Age attribute of the received object"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"  //ChangeAge\n #DECLARE ($person : Object)\n $person.Age:=$person.Age+10\n ALERT(String($person.Age))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you execute the ",(0,t.jsx)(n.code,{children:"CreatePerson"}),' method, both alert boxes will read "50" since the same object reference is handled by both methods.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server:"}),' When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.']})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);