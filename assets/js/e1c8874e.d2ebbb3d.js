"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23707"],{703818:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"Concepts/methods","title":"Methods","description":"A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).","source":"@site/versioned_docs/version-19/Concepts/methods.md","sourceDirName":"Concepts","slug":"/Concepts/methods","permalink":"/docs/19/Concepts/methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"methods","title":"Methods"},"sidebar":"docs","previous":{"title":"Arrays","permalink":"/docs/19/Concepts/arrays"},"next":{"title":"Parameters","permalink":"/docs/19/Concepts/parameters"}}'),s=n("785893"),r=n("250065");let i={id:"methods",title:"Methods"},a=void 0,l={},d=[{value:"Method Types",id:"method-types",level:2},{value:"Calling Project Methods",id:"calling-project-methods",level:2},{value:"Subroutines",id:"subroutines",level:3},{value:"Object formulas",id:"object-formulas",level:3},{value:"Menu Methods",id:"menu-methods",level:3},{value:"Process Methods",id:"process-methods",level:3},{value:"Event and Error catching Methods",id:"event-and-error-catching-methods",level:3},{value:"Recursive Project Methods",id:"recursive-project-methods",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks)."}),"\n",(0,s.jsx)(t.p,{children:"The maximum size of a method is limited to 2 GB of text or 32,000 lines of code."}),"\n",(0,s.jsx)(t.h2,{id:"method-types",children:"Method Types"}),"\n",(0,s.jsx)(t.p,{children:"In the 4D Language, there are several categories of methods. The category depends on how they can be called:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Calling context"}),(0,s.jsx)(t.th,{children:"Accepts parameters"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Project method"})}),(0,s.jsxs)(t.td,{children:["On demand, when the project method name is called (see ",(0,s.jsx)(t.a,{href:"#calling-project-methods",children:"Calling project methods"}),")"]}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object (widget) method"})}),(0,s.jsx)(t.td,{children:"Automatic, when an event involves the object to which the method is attached"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Property of a form object (also called widget)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Form method"})}),(0,s.jsx)(t.td,{children:"Automatic, when an event involves the form to which the method is attached"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Trigger"})," (aka ",(0,s.jsx)(t.em,{children:"Table method"}),")"]}),(0,s.jsx)(t.td,{children:"Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Property of a table. Triggers are methods that can prevent \u201Cillegal\u201D operations with the records of your database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Database method"})}),(0,s.jsx)(t.td,{children:"Automatic, when a working session event occurs"}),(0,s.jsx)(t.td,{children:"Yes (predefined)"}),(0,s.jsx)(t.td,{children:"There are 16 database methods in 4D. See Database methods section"})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The 4D Language also supports ",(0,s.jsx)(t.strong,{children:"Class functions"}),", that can be called in the context of an object instance. Class functions can be built-in (",(0,s.jsx)(t.em,{children:"e.g."})," ",(0,s.jsx)(t.code,{children:"collection.orderBy()"})," or ",(0,s.jsx)(t.code,{children:"entity.save()"}),"), or ",(0,s.jsx)(t.a,{href:"/docs/19/Concepts/classes#function",children:"created by the 4D developer"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"calling-project-methods",children:"Calling Project Methods"}),"\n",(0,s.jsx)(t.p,{children:"A project method can have one of the following roles, depending on how it is executed and used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Subroutine"}),"\n",(0,s.jsx)(t.li,{children:"Object formula"}),"\n",(0,s.jsx)(t.li,{children:"Menu method"}),"\n",(0,s.jsx)(t.li,{children:"Process method"}),"\n",(0,s.jsx)(t.li,{children:"Event or Error catching method"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"subroutines",children:"Subroutines"}),"\n",(0,s.jsx)(t.p,{children:"A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it."}),"\n",(0,s.jsx)(t.p,{children:"When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D\u2019s built-in commands. A project method used in this way is called a subroutine."}),"\n",(0,s.jsx)(t.p,{children:"You use subroutines to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Reduce repetitive coding"}),"\n",(0,s.jsx)(t.li,{children:"Clarify your methods"}),"\n",(0,s.jsx)(t.li,{children:"Facilitate changes to your methods"}),"\n",(0,s.jsx)(t.li,{children:"Modularize your code"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, let\u2019s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'  // Look for a customer\n QUERY BY EXAMPLE([Customers])\n  // Select the input form\n FORM SET INPUT([Customers];"Data Entry")\n  // Modify the customer\'s record\n MODIFY RECORD([Customers])\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you do not use subroutines, you will have to write the code each time you want to modify a customer\u2019s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines\u2014to reduce the amount of code."}),"\n",(0,s.jsxs)(t.p,{children:["If the previously described code was a method called ",(0,s.jsx)(t.code,{children:"MODIFY_CUSTOMER"}),", you would execute it simply by using the name of the method in another method. For example, to modify a customer\u2019s record and then print the record, you would write this method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" MODIFY_CUSTOMER\n PRINT SELECTION([Customers])\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This capability simplifies your methods dramatically. In the example, you do not need to know how the ",(0,s.jsx)(t.code,{children:"MODIFY_CUSTOMER"})," method works, just what it does. This is the second reason for using subroutines\u2014to clarify your methods. In this way, your methods become extensions to the 4D language."]}),"\n",(0,s.jsx)(t.p,{children:"If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines\u2014to facilitate changes to your methods."}),"\n",(0,s.jsx)(t.p,{children:"Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" FIND_CLEARED_CHECKS //Find the cleared checks\n RECONCILE_ACCOUNT //Reconcile the account\n PRINT_CHECK_BOOK_REPORT //Print a checkbook report\n"})}),"\n",(0,s.jsx)(t.p,{children:"Even for someone who doesn\u2019t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible."}),"\n",(0,s.jsx)(t.h3,{id:"object-formulas",children:"Object formulas"}),"\n",(0,s.jsxs)(t.p,{children:["You can encapsulate your project methods in ",(0,s.jsx)(t.strong,{children:"formula"})," objects and call them from your objects."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Formula"})," or ",(0,s.jsx)(t.code,{children:"Formula from string"})," commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods."]}),"\n",(0,s.jsxs)(t.p,{children:["To execute a method stored in an object property, use the ",(0,s.jsx)(t.strong,{children:"( )"})," operator after the property name. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'//myAlert\nALERT("Hello world!")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Then ",(0,s.jsx)(t.code,{children:"myAlert"})," can be encapsulated in any object and called:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Syntax with brackets is also supported:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$o["custom_Alert"]() //displays "Hello world!"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can also ",(0,s.jsx)(t.a,{href:"/docs/19/Concepts/parameters",children:"pass parameters"})," to your formula when you call it by using $1, $2\u2026 just like with 4D project methods:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'//fullName method\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can encapsulate ",(0,s.jsx)(t.code,{children:"fullName"})," in an object:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Combined with the ",(0,s.jsx)(t.code,{children:"This"}),"function, such object methods allow writing powerful generic code. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'//fullName2 method\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,s.jsx)(t.p,{children:"Then the method acts like a new, calculated attribute that can be added to other attributes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"$o:=$f.message //returns the formula object in $o\n"})}),"\n",(0,s.jsx)(t.h3,{id:"menu-methods",children:"Menu Methods"}),"\n",(0,s.jsx)(t.p,{children:'A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.'}),"\n",(0,s.jsxs)(t.p,{children:["Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the ",(0,s.jsx)(t.code,{children:"ADD RECORD"})," command until the user cancels the data entry activity."]}),"\n",(0,s.jsx)(t.p,{children:"Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application."}),"\n",(0,s.jsx)(t.h3,{id:"process-methods",children:"Process Methods"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"process method"})," is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with ",(0,s.jsx)(t.em,{children:"Start a New Process"})," property is also the process method for the newly started process."]}),"\n",(0,s.jsx)(t.h3,{id:"event-and-error-catching-methods",children:"Event and Error catching Methods"}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.strong,{children:"event catching method"})," runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command ",(0,s.jsx)(t.code,{children:"ON EVENT CALL"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.strong,{children:"error catching method"})," is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,s.jsx)(t.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"recursive-project-methods",children:"Recursive Project Methods"}),"\n",(0,s.jsx)(t.p,{children:"Project methods can call themselves. For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The method A may call the method B which may call A, so A will call B again and so on."}),"\n",(0,s.jsx)(t.li,{children:"A method can call itself."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This is called recursion. The 4D language fully supports recursion."}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example. Let\u2019s say you have a ",(0,s.jsx)(t.code,{children:"[Friends and Relatives]"})," table composed of this extremely simplified set of fields:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"[Friends and Relatives]Name"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"[Friends and Relatives]ChildrensName"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence \u201CA friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!\u201D:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"You can build the sentence in this way:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"You can also build it this way:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(t.p,{children:["with the recursive function ",(0,s.jsx)(t.code,{children:"Genealogy of"})," listed here:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n \n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note the ",(0,s.jsx)(t.code,{children:"Genealogy of"})," method which calls itself."]}),"\n",(0,s.jsxs)(t.p,{children:["The first way is an ",(0,s.jsx)(t.strong,{children:"iterative algorithm"}),". The second way is a ",(0,s.jsx)(t.strong,{children:"recursive algorithm"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory."}),"\n",(0,s.jsx)(t.p,{children:"Some typical uses of recursion in 4D are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Treating records within tables that relate to each other in the same way as in the example."}),"\n",(0,s.jsxs)(t.li,{children:["Browsing documents and folders on your disk, using the commands ",(0,s.jsx)(t.code,{children:"FOLDER LIST"})," and ",(0,s.jsx)(t.code,{children:"DOCUMENT LIST"}),". A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important:"})," Recursive calls should always end at some point. In the example, the method ",(0,s.jsx)(t.code,{children:"Genealogy of"})," stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a \u201CStack Full\u201D error becuase it would no longer have space to \u201Cpile up\u201D the calls (as well as parameters and local variables used in the method)."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var o=n(667294);let s={},r=o.createContext(s);function i(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);