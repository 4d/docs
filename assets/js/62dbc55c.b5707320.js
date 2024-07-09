/*! For license information please see 62dbc55c.b5707320.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20225],{200416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(474848),s=n(28453);const r={id:"methods",title:"Methods"},i=void 0,a={id:"Concepts/methods",title:"Methods",description:"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:",source:"@site/versioned_docs/version-18/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/18/Concepts/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"methods",title:"Methods"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/18/Concepts/arrays"},next:{title:"Parameters",permalink:"/docs/18/Concepts/parameters"}},d={},c=[{value:"Calling Project Methods",id:"Calling-Project-Methods",level:2},{value:"Subroutines and functions",id:"Subroutines-and-functions",level:3},{value:"Methods attached to objects",id:"Methods-attached-to-objects",level:3},{value:"Menu Methods",id:"Menu-Methods",level:3},{value:"Process Methods",id:"Process-Methods",level:3},{value:"Event and Error catching Methods",id:"Event-and-Error-catching-Methods",level:3},{value:"Recursive Project Methods",id:"Recursive-Project-Methods",level:2},{value:"Specialized Methods",id:"Specialized-Methods",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"built-in methods"}),", which are provided by 4D or third-party developers and can be only called in your code. Built-in methods include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Commands and functions of the 4D API, such as ",(0,o.jsx)(t.code,{children:"ALERT"})," or ",(0,o.jsx)(t.code,{children:"Current date"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Methods attached to collections or native objects, such as ",(0,o.jsx)(t.code,{children:"collection.orderBy()"})," or ",(0,o.jsx)(t.code,{children:"entity.save()"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Commands from plug-ins or components, provided by 4D or third-party developers, such as ",(0,o.jsx)(t.code,{children:"SVG_New_arc"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Built-in methods are detailed in the ",(0,o.jsx)(t.em,{children:"4D Language reference"})," manual or dedicated manuals for plug-ins or components."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"project methods"}),", where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).\nThe maximum size of a project method is limited to 2 GB of text or 32,000 lines of command."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," 4D also provides specific methods that are automatically executed depending on database or form events. See ",(0,o.jsx)(t.a,{href:"#specialized-methods",children:"Specialized methods"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"Calling-Project-Methods",children:"Calling Project Methods"}),"\n",(0,o.jsx)(t.p,{children:"A project method can have one of the following roles, depending on how it is executed and used:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Subroutine and function"}),"\n",(0,o.jsx)(t.li,{children:"Method attached to object"}),"\n",(0,o.jsx)(t.li,{children:"Menu method"}),"\n",(0,o.jsx)(t.li,{children:"Process method"}),"\n",(0,o.jsx)(t.li,{children:"Event or Error catching method"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"Subroutines-and-functions",children:"Subroutines and functions"}),"\n",(0,o.jsx)(t.p,{children:"A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it."}),"\n",(0,o.jsxs)(t.p,{children:["When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method from other project methods, or from ",(0,o.jsx)(t.a,{href:"#predefined-methods",children:"predefined methods"})," in the same way that you call 4D\u2019s built-in commands. A project method used in this way is called a subroutine."]}),"\n",(0,o.jsx)(t.p,{children:"You use subroutines to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Reduce repetitive coding"}),"\n",(0,o.jsx)(t.li,{children:"Clarify your methods"}),"\n",(0,o.jsx)(t.li,{children:"Facilitate changes to your methods"}),"\n",(0,o.jsx)(t.li,{children:"Modularize your code"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example, let\u2019s say you have a database of customers. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'  // Look for a customer\n QUERY BY EXAMPLE([Customers])\n  // Select the input form\n FORM SET INPUT([Customers];"Data Entry")\n  // Modify the customer\'s record\n MODIFY RECORD([Customers])\n'})}),"\n",(0,o.jsx)(t.p,{children:"If you do not use subroutines, you will have to write the code each time you want to modify a customer\u2019s record. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines\u2014to reduce the amount of code."}),"\n",(0,o.jsxs)(t.p,{children:["If the previously described code was a method called ",(0,o.jsx)(t.code,{children:"MODIFY CUSTOMER"}),", you would execute it simply by using the name of the method in another method. For example, to modify a customer\u2019s record and then print the record, you would write this method:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:" MODIFY CUSTOMER\n PRINT SELECTION([Customers])\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This capability simplifies your methods dramatically. In the example, you do not need to know how the ",(0,o.jsx)(t.code,{children:"MODIFY CUSTOMER"})," method works, just what it does. This is the second reason for using subroutines\u2014to clarify your methods. In this way, your methods become extensions to the 4D language."]}),"\n",(0,o.jsx)(t.p,{children:"If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. This is the next reason to use subroutines\u2014to facilitate changes to your methods."}),"\n",(0,o.jsx)(t.p,{children:"Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account database:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:" FIND CLEARED CHECKS ` Find the cleared checks\n RECONCILE ACCOUNT ` Reconcile the account\n PRINT CHECK BOOK REPORT ` Print a checkbook report\n"})}),"\n",(0,o.jsx)(t.p,{children:"Even for someone who doesn\u2019t know the database, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible."}),"\n",(0,o.jsx)(t.h3,{id:"Methods-attached-to-objects",children:"Methods attached to objects"}),"\n",(0,o.jsxs)(t.p,{children:["You can encapsulate your project methods in ",(0,o.jsx)(t.strong,{children:"formula"})," objects and call them from your objects."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Formula"})," or ",(0,o.jsx)(t.code,{children:"Formula from string"})," commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods."]}),"\n",(0,o.jsxs)(t.p,{children:["To execute a method stored in an object property, use the ",(0,o.jsx)(t.strong,{children:"( )"})," operator after the property name. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'//myAlert\nALERT("Hello world!")\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Then ",(0,o.jsx)(t.code,{children:"myAlert"})," can be encapsulated in any object and called:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Syntax with brackets is also supported:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'$o["custom_Alert"]() //displays "Hello world!"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can also ",(0,o.jsx)(t.a,{href:"/docs/18/Concepts/parameters",children:"pass parameters"})," to your formula when you call it by using $1, $2\u2026 just like with 4D project methods:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'//fullName method\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can encapsulate ",(0,o.jsx)(t.code,{children:"fullName"})," in an object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith")\n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Combined with the ",(0,o.jsx)(t.code,{children:"This"}),"function, such object methods allow writing powerful generic code. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'//fullName2 method\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,o.jsx)(t.p,{children:"Then the method acts like a new, calculated attribute that can be added to other attributes:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName()\n//$result = "Jim Wesson"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"$o:=$f.message //returns the formula object in $o\n"})}),"\n",(0,o.jsx)(t.h3,{id:"Menu-Methods",children:"Menu Methods"}),"\n",(0,o.jsx)(t.p,{children:'A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. This process is one of the major aspects of customizing a database. By creating custom menus with menu methods that perform specific actions, you personalize your database.'}),"\n",(0,o.jsxs)(t.p,{children:["Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the ",(0,o.jsx)(t.code,{children:"ADD RECORD"})," command until the user cancels the data entry activity."]}),"\n",(0,o.jsx)(t.p,{children:"Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database."}),"\n",(0,o.jsx)(t.h3,{id:"Process-Methods",children:"Process Methods"}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.strong,{children:"process method"})," is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with ",(0,o.jsx)(t.em,{children:"Start a New Process"})," property is also the process method for the newly started process."]}),"\n",(0,o.jsx)(t.h3,{id:"Event-and-Error-catching-Methods",children:"Event and Error catching Methods"}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.strong,{children:"event catching method"})," runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command ",(0,o.jsx)(t.code,{children:"ON EVENT CALL"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.strong,{children:"error catching method"})," is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,o.jsx)(t.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"Recursive-Project-Methods",children:"Recursive Project Methods"}),"\n",(0,o.jsx)(t.p,{children:"Project methods can call themselves. For example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The method A may call the method B which may call A, so A will call B again and so on."}),"\n",(0,o.jsx)(t.li,{children:"A method can call itself."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This is called recursion. The 4D language fully supports recursion."}),"\n",(0,o.jsxs)(t.p,{children:["Here is an example. Let\u2019s say you have a ",(0,o.jsx)(t.code,{children:"[Friends and Relatives]"})," table composed of this extremely simplified set of fields:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"[Friends and Relatives]Name"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"[Friends and Relatives]ChildrensName"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence \u201cA friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!\u201d:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"You can build the sentence in this way:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n'})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"You can also build it this way:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n'})}),"\n",(0,o.jsxs)(t.p,{children:["with the recursive function ",(0,o.jsx)(t.code,{children:"Genealogy of"})," listed here:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n\n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Note the ",(0,o.jsx)(t.code,{children:"Genealogy of"})," method which calls itself."]}),"\n",(0,o.jsxs)(t.p,{children:["The first way is an ",(0,o.jsx)(t.strong,{children:"iterative algorithm"}),". The second way is a ",(0,o.jsx)(t.strong,{children:"recursive algorithm"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory."}),"\n",(0,o.jsx)(t.p,{children:"Some typical uses of recursion in 4D are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Treating records within tables that relate to each other in the same way as in the example."}),"\n",(0,o.jsxs)(t.li,{children:["Browsing documents and folders on your disk, using the commands ",(0,o.jsx)(t.code,{children:"FOLDER LIST"})," and ",(0,o.jsx)(t.code,{children:"DOCUMENT LIST"}),". A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Important:"})," Recursive calls should always end at some point. In the example, the method ",(0,o.jsx)(t.code,{children:"Genealogy of"})," stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a \u201cStack Full\u201d error becuase it would no longer have space to \u201cpile up\u201d the calls (as well as parameters and local variables used in the method)."]}),"\n",(0,o.jsx)(t.h2,{id:"Specialized-Methods",children:"Specialized Methods"}),"\n",(0,o.jsxs)(t.p,{children:["In addition to generic ",(0,o.jsx)(t.strong,{children:"project methods"}),", 4D supports several specific method types, that are automatically called depending on events:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Calling context"}),(0,o.jsx)(t.th,{children:"Accepts parameters"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"Object (widget) method"})}),(0,o.jsx)(t.td,{children:"Automatic, when an event involves the object to which the method is attached"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"Property of a form object (also called widget)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"Form method"})}),(0,o.jsx)(t.td,{children:"Automatic, when an event involves the form to which the method is attached"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.strong,{children:"Trigger"})," (aka ",(0,o.jsx)(t.em,{children:"Table method"}),")"]}),(0,o.jsx)(t.td,{children:"Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)"}),(0,o.jsx)(t.td,{children:"No"}),(0,o.jsx)(t.td,{children:"Property of a table. Triggers are methods that can prevent \u201cillegal\u201d operations with the records of your database."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"Database method"})}),(0,o.jsx)(t.td,{children:"Automatic, when a working session event occurs"}),(0,o.jsx)(t.td,{children:"Yes (predefined)"}),(0,o.jsx)(t.td,{children:"There are 16 database methods in 4D. See Database methods section"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!d.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);