"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56010"],{282364:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"Concepts/quick-tour","title":"A Quick Tour","description":"Using the 4D language, printing the traditional \\"Hello, world!\\" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:","source":"@site/versioned_docs/version-19/Concepts/quick-tour.md","sourceDirName":"Concepts","slug":"/Concepts/quick-tour","permalink":"/docs/19/Concepts/quick-tour","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fquick-tour.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"quick-tour","title":"A Quick Tour","sidebar_label":"A Quick Tour"},"sidebar":"docs","previous":{"title":"About the 4D Language","permalink":"/docs/19/Concepts/about"},"next":{"title":"Data types overview","permalink":"/docs/19/Concepts/data-types"}}'),a=s("785893"),r=s("250065");let i={id:"quick-tour",title:"A Quick Tour",sidebar_label:"A Quick Tour"},o=void 0,l={},d=[{value:"Assigning Values",id:"assigning-values",level:2},{value:"Variables",id:"variables",level:2},{value:"Commands",id:"commands",level:2},{value:"Constants",id:"constants",level:2},{value:"Methods",id:"methods",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Objects and collections",id:"objects-and-collections",level:2},{value:"Classes",id:"classes",level:2},{value:"Operators",id:"operators",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Expression types",id:"expression-types",level:3},{value:"Assignable vs non-assignable expressions",id:"assignable-vs-non-assignable-expressions",level:3},{value:"Pointers",id:"pointers",level:2},{value:"Code on several lines",id:"code-on-several-lines",level:2},{value:"Comments",id:"comments",level:2},{value:"Single line comments (<code>//comment</code>)",id:"single-line-comments-comment",level:4},{value:"Inline or multiline comments (<code>/*comment*/</code>)",id:"inline-or-multiline-comments-comment",level:4},{value:"Escape sequences",id:"escape-sequences",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",u:"u",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Using the 4D language, printing the traditional "Hello, world!" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'ALERT("Hello, World!")\n'})}),"\n",(0,a.jsx)(n.p,{children:'This code will display a platform-standard alert dialog box with the "Hello, World!" message, containing an OK button. To execute the code, you just need to click on the execution button in the Code Editor:'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"hello-world",src:s(407484).Z+"",width:"613",height:"322"})}),"\n",(0,a.jsx)(n.p,{children:"Or, you could attach this code to a button in a form and execute the form, in which case clicking on the button would display the alert dialog box. In any cases, you have just executed your first line of 4D code!"}),"\n",(0,a.jsx)(n.h2,{id:"assigning-values",children:"Assigning Values"}),"\n",(0,a.jsx)(n.p,{children:"Data can be put into and copied out of variables, fields, array elements... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields or array elements."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$MyNumber:=3 //assigns 3 to MyNumber variable  \n[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field\narrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element\nMyVar:=Length("Acme") //assigns the result of the function (4) to MyVar\n$myDate:=!2018/01/21! //assigns a date literal\n$myHour:=?08:12:55? //assigns a time literal\n'})}),"\n",(0,a.jsx)(n.p,{children:"You MUST distinguish the assignment operator := from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or field to the left of the operator."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Important:"})," Do NOT confuse the assignment operator := with the equality comparison operator =. A different assignment operator (and not =) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting."]}),"\n",(0,a.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,a.jsxs)(n.p,{children:["The 4D language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the ",(0,a.jsx)(n.code,{children:"var"})," keyword. For example, to create a variable of the date type, you can write:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var MyDate : Date\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"var"})," keyword allows declaring object variables of a defined class type, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var myPerson : cs.Person\n//variable of the Person user class\n"})}),"\n",(0,a.jsx)(n.p,{children:"Even if it is usually not recommended, you can declare variables simply by using them; you do not necessarily need to formally define them. For example, if you want a variable that will hold the current date plus 30 days, you can write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"MyOtherDate:=Current date+30\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The line of code reads \u201CMyOtherDate gets the current date plus 30 days.\u201D This line declares the variable, assigns it with both the (temporary) date type and a content. A variable declared by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with ",(0,a.jsx)(n.code,{children:"var"})," cannot change the type. In ",(0,a.jsx)(n.a,{href:"/docs/19/Concepts/interpreted-compiled",children:"compiled mode"})," however, the type can never be changed, regardless of how the variable was declared."]}),"\n",(0,a.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,a.jsx)(n.p,{children:"4D commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by semicolons (;). Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can use 4D plug-ins or 4D components that add new commands to your 4D development environment."}),"\n",(0,a.jsxs)(n.p,{children:["There are many plug-ins proposed by the 4D user community or 3rd-party developers on the market. For example, using the ",(0,a.jsx)(n.a,{href:"https://github.com/miyako/4d-plugin-pdf-pages",children:"4d-plugin-pdf-pages"})," on macOS:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"PDF REMOVE PAGE(path;page)\n"})}),"\n",(0,a.jsx)(n.p,{children:"4D SVG is an example of a utility component extending the capabilities of your application:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"//drawing a picture\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n"})}),"\n",(0,a.jsx)(n.p,{children:"4D SVG is included in 4D."}),"\n",(0,a.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,a.jsxs)(n.p,{children:["4D proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, ",(0,a.jsx)(n.code,{children:"Read Mode"})," is a constant (value 2)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Predefined constants appear ",(0,a.jsx)(n.u,{children:"underlined"})," by default in the 4D Code Editor."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsxs)(n.p,{children:["4D provides a large number of built-in methods (or commands) but also lets you can create your own ",(0,a.jsx)(n.strong,{children:"project methods"}),". Project methods are user-defined methods that contain commands, operators, and other parts of the language.\nProject methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods."]}),"\n",(0,a.jsx)(n.p,{children:"A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex."}),"\n",(0,a.jsx)(n.p,{children:"For example, the following line is a statement that will display a confirmation dialog box:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'CONFIRM("Do you really want to close this account?";"Yes";"No")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["A method also contains tests and loops that control the flow of the execution. 4D methods support ",(0,a.jsx)(n.code,{children:"If...Else...End if"})," and ",(0,a.jsx)(n.code,{children:"Case of...Else...End case"})," branching structures as well as looping structures: ",(0,a.jsx)(n.code,{children:"While...End while"}),", ",(0,a.jsx)(n.code,{children:"Repeat...Until"}),", ",(0,a.jsx)(n.code,{children:"For...End for"}),", and ",(0,a.jsx)(n.code,{children:"For each...End for each"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"The following example goes through all the characters of the text vtSomeText:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"For($vlChar;1;Length(vtSomeText))\n	//Do something with the character if it is a TAB\n\n\n	If(Character code(vtSomeText[[$vlChar]])=Tab)\n		//...\n	End if\nEnd for\n"})}),"\n",(0,a.jsx)(n.p,{children:"A project method can call another project method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are directly available within the called method if they have been declared. A method can return a single value in a parameter, which have to be declared. When you call a method, you just type its name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$myText:="hello"\n$myText:=Do_Something($myText) //Call the Do_Something method\nALERT($myText) //"HELLO"\n\n  //Here the code of the method Do_Something  \n#DECLARE ($in : Text) -> $out : Text\n$out:=Uppercase($in)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"data-types",children:"Data Types"}),"\n",(0,a.jsx)(n.p,{children:"In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections)."}),"\n",(0,a.jsx)(n.p,{children:"Note that string and numeric data types can be associated with more than one type of field. When data is put into a field, the language automatically converts the data to the correct type for the field. For example, if an integer field is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar field types when using the language; it will manage them for you."}),"\n",(0,a.jsx)(n.p,{children:"However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store \u201CABC\u201D in a Date field, it makes no sense to put \u201CABC\u201D in a variable used for dates. In most cases, 4D is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work."}),"\n",(0,a.jsx)(n.p,{children:"There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as \u201Cabc\u201D. In this case, you might write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'[Products]Part Number:=String(Number)+"abc"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"Number"})," is 17, then ",(0,a.jsx)(n.em,{children:"[Products]Part Number"})," will get the string \u201C17abc\u201D."]}),"\n",(0,a.jsxs)(n.p,{children:["The data types are fully defined in the section ",(0,a.jsx)(n.a,{href:"/docs/19/Concepts/data-types",children:"Data Types"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"objects-and-collections",children:"Objects and collections"}),"\n",(0,a.jsx)(n.p,{children:"You can handle 4D language objects and collections using the object notation to get or to set their values. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'employee.name:="Smith"\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also use a string within square brackets, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$vName:=employee["name"]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"$vAge:=employee.children[2].age\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$f:=New object\n$f.message:=Formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n'})}),"\n",(0,a.jsx)(n.p,{children:"To access a collection element, you have to pass the element number embedded in square brackets:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var myColl : Collection\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //access to 4th element of the collection\n'})}),"\n",(0,a.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,a.jsxs)(n.p,{children:["The 4D language supports object classes. Add a ",(0,a.jsx)(n.code,{children:"myClass.4dm"}),' file in the Project/Sources/Classes folder of a project to create a class named "myClass".']}),"\n",(0,a.jsxs)(n.p,{children:["To instantiate an object of the class in a method, call the user class from the ",(0,a.jsx)(n.em,{children:"class store"})," (",(0,a.jsx)(n.code,{children:"cs"}),") and use the ",(0,a.jsx)(n.code,{children:"new()"})," member function. You can pass parameters."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"// in a 4D method\n$o:=cs.myClass.new()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"myClass"})," class method, use the ",(0,a.jsx)(n.code,{children:"Function <methodName>"})," statement to define the ",(0,a.jsx)(n.em,{children:"methodName"})," class member function. A class member function can receive and return parameters like any method, and use ",(0,a.jsx)(n.code,{children:"This"})," as the object instance."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'//in the myClass.4dm file\nFunction hello -> $welcome : Text\n  $welcome:="Hello "+This.who\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To execute a class member function, just use the ",(0,a.jsx)(n.code,{children:"()"})," operator on the member function of the object instance."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$o:=cs.myClass.new()\n$o.who:="World"\n$message:=$o.myClass.hello()  \n//$message: "Hello World"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Optionally, use the ",(0,a.jsx)(n.code,{children:"Class constructor"})," keyword to declare properties of the object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'//in the Rectangle.4dm file\nClass constructor ($height: Integer; $width : Integer)\nThis.height:=$height\nThis.width:=$width\nThis.name:="Rectangle"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["A class can extend another class by using ",(0,a.jsx)(n.code,{children:"Class extends <ClassName>"}),". Superclasses can be called using the ",(0,a.jsx)(n.code,{children:"Super"})," command. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"//in the Square.4dm file\nClass extends rectangle\n\nClass constructor($length : Integer)\n\n  // It calls the parent class's constructor with lengths   \n  // provided for the Rectangle's width and height\nSuper($length;$length)\n\nThis.name:=\"Square\"\n"})}),"\n",(0,a.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,a.jsx)(n.p,{children:"When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Operator"}),(0,a.jsx)(n.th,{children:"Operation"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"+"}),(0,a.jsx)(n.td,{children:"Addition"}),(0,a.jsx)(n.td,{children:"1 + 2 results in 3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u2013"}),(0,a.jsx)(n.td,{children:"Subtraction"}),(0,a.jsx)(n.td,{children:"3 \u2013 2 results in 1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Multiplication"}),(0,a.jsx)(n.td,{children:"2 * 3 results in 6"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"/"}),(0,a.jsx)(n.td,{children:"Division"}),(0,a.jsx)(n.td,{children:"6 / 2 results in 3"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types."}),"\n",(0,a.jsx)(n.p,{children:"The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Data Type"}),(0,a.jsx)(n.th,{children:"Operation"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"Addition"}),(0,a.jsx)(n.td,{children:"1 + 2 adds the numbers and results in 3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Concatenation"}),(0,a.jsx)(n.td,{children:"\u201CHello \u201D + \u201Cthere\u201D concatenates (joins together) the strings and results in \u201CHello there\u201D"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Date and Number"}),(0,a.jsx)(n.td,{children:"Date addition"}),(0,a.jsx)(n.td,{children:"!1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"expressions",children:"Expressions"}),"\n",(0,a.jsx)(n.p,{children:"Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas."}),"\n",(0,a.jsx)(n.p,{children:"Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data."}),"\n",(0,a.jsx)(n.p,{children:"Expressions rarely \u201Cstand alone.\u201D There are several places in 4D where an expression can be used by itself. It includes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Formula editor (apply formula, query with formula, order by formula)"}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"EXECUTE FORMULA"})," command"]}),"\n",(0,a.jsx)(n.li,{children:"The Property list, where an expression can be used as a data source for most of widgets"}),"\n",(0,a.jsx)(n.li,{children:"Debugger where the value of expressions can be checked"}),"\n",(0,a.jsx)(n.li,{children:"Quick Report editor as a formula for a column"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"expression-types",children:"Expression types"}),"\n",(0,a.jsx)(n.p,{children:"You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Expression"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u201CHello\u201D"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"The word Hello is a string constant, indicated by the double quotation marks."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u201CHello \u201D + \u201Cthere\u201D"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Two strings, \u201CHello \u201D and \u201Cthere\u201D, are added together (concatenated) with the string concatenation operator (+). The string \u201CHello there\u201D is returned."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u201CMr. \u201D + [People]Name"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Two strings are concatenated: the string \u201CMr. \u201D and the current value of the Name field in the People table. If the field contains \u201CSmith\u201D, the expression returns \u201CMr. Smith\u201D."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:'Uppercase("smith")'}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsxs)(n.td,{children:["This expression uses ",(0,a.jsx)(n.code,{children:"Uppercase"}),", a command from the language, to convert the string \u201Csmith\u201D to uppercase. It returns \u201CSMITH\u201D."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"This is a number constant, 4."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4 * 2"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"myButton"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"!1997-01-25!"}),(0,a.jsx)(n.td,{children:"Date"}),(0,a.jsx)(n.td,{children:"This is a date constant for the date 1/25/97 (January 25, 1997)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Current date+ 30"}),(0,a.jsx)(n.td,{children:"Date"}),(0,a.jsxs)(n.td,{children:["This is a date expression that uses the ",(0,a.jsx)(n.code,{children:"Current date"})," command to get today\u2019s date. It adds 30 days to today\u2019s date and returns the new date."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"?8:05:30?"}),(0,a.jsx)(n.td,{children:"Time"}),(0,a.jsx)(n.td,{children:"This is a time constant that represents 8 hours, 5 minutes, and 30 seconds."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"?2:03:04? + ?1:02:03?"}),(0,a.jsx)(n.td,{children:"Time"}),(0,a.jsx)(n.td,{children:"This expression adds two times together and returns the time 3:05:07."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"This command returns the Boolean value TRUE."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"10 # 20"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"This is a logical comparison between two numbers. The number sign (#) means \u201Cis not equal to\u201D. Since 10 \u201Cis not equal to\u201D 20, the expression returns TRUE."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u201CABC\u201D = \u201CXYZ\u201D"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"This is a logical comparison between two strings. They are not equal, so the expression returns FALSE."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"My Picture + 50"}),(0,a.jsx)(n.td,{children:"Picture"}),(0,a.jsx)(n.td,{children:"This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"->[People]Name"}),(0,a.jsx)(n.td,{children:"Pointer"}),(0,a.jsx)(n.td,{children:"This expression returns a pointer to the field called [People]Name."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Table (1)"}),(0,a.jsx)(n.td,{children:"Pointer"}),(0,a.jsx)(n.td,{children:"This is a command that returns a pointer to the first table."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"JSON Parse (MyString)"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"This is a command that returns MyString as an object (if proper format)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"JSON Parse (MyJSONArray)"}),(0,a.jsx)(n.td,{children:"Collection"}),(0,a.jsx)(n.td,{children:"This is a command that returns MyJSONArray as a collection (if proper format)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Form.pageNumber"}),(0,a.jsx)(n.td,{children:"Object property"}),(0,a.jsx)(n.td,{children:"An object property is an expression that can be of any supported type"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Col[5]"}),(0,a.jsx)(n.td,{children:"Collection element"}),(0,a.jsx)(n.td,{children:"A collection element is an expression that can be of any supported type"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$entitySel[0]"}),(0,a.jsx)(n.td,{children:"Entity"}),(0,a.jsxs)(n.td,{children:["A element of an ORDA entity selection is an expression of the entity type. This kind of expression is ",(0,a.jsx)(n.strong,{children:"non-assignable"})]})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"assignable-vs-non-assignable-expressions",children:"Assignable vs non-assignable expressions"}),"\n",(0,a.jsxs)(n.p,{children:['An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like ',(0,a.jsx)(n.code,{children:"$myButton"}),". It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are ",(0,a.jsx)(n.strong,{children:"non-assignable"}),", which means that you cannot assign a value to them.\nIn 4D, expressions can be ",(0,a.jsx)(n.strong,{children:"assignable"}),". An expression is assignable when it can be used on the left side of an assignation. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write:  \nForm.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable:\nForm.pageTotal- Form.pageNumber:=10 //error, non-assignable\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In general, expressions that use an operator are non-assignable. For example, ",(0,a.jsx)(n.code,{children:'[Person]FirstName+" "+[Person]LastName'})," is not assignable."]}),"\n",(0,a.jsx)(n.h2,{id:"pointers",children:"Pointers"}),"\n",(0,a.jsx)(n.p,{children:"The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements."}),"\n",(0,a.jsx)(n.p,{children:'A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'MyVar:="Hello"\nMyPointer:=->MyVar\nALERT(MyPointer->)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"code-on-several-lines",children:"Code on several lines"}),"\n",(0,a.jsxs)(n.p,{children:["You can write a single statement on several lines by terminating each line of the statement with a trailing backslash ",(0,a.jsx)(n.code,{children:"\\"})," character. The 4D language will consider all the lines at once. For example, both the following statements are equivalent:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$str:=String("hello world!")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$str:=String("hello"+\\\n" world"+\\\n"!")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,a.jsx)(n.p,{children:"Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called."}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to create comments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"//"})," for single line comments"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/*...*/"})," for inline or multiline commnents."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Both styles of comments can be used simultaneously."}),"\n",(0,a.jsxs)(n.h4,{id:"single-line-comments-comment",children:["Single line comments (",(0,a.jsx)(n.code,{children:"//comment"}),")"]}),"\n",(0,a.jsxs)(n.p,{children:["Insert ",(0,a.jsx)(n.code,{children:"//"})," at the beginning of a line or after a statement to add a single line comment. Example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"//This is a comment\nFor($vCounter;1;100) //Starting loop\n  //comment\n  //comment\n  //comment\nEnd for\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"inline-or-multiline-comments-comment",children:["Inline or multiline comments (",(0,a.jsx)(n.code,{children:"/*comment*/"}),")"]}),"\n",(0,a.jsxs)(n.p,{children:["Surround contents with ",(0,a.jsx)(n.code,{children:"/*"})," ... ",(0,a.jsx)(n.code,{children:"*/"})," characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with ",(0,a.jsx)(n.code,{children:"/*"})," and end with ",(0,a.jsx)(n.code,{children:"*/"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Inline comments"})," can be inserted anywhere in the code. Example:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"For /* inline comment */ ($vCounter;1;100)\n	...\nEnd for\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Multiline comment blocks"})," allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Example:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"For ($vCounter;1;100)\n/*\ncomments  \n	/*\n	other comments\n	*/\n*/\n...\nEnd for\n"})}),"\n",(0,a.jsx)(n.h2,{id:"escape-sequences",children:"Escape sequences"}),"\n",(0,a.jsx)(n.p,{children:'The 4D language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.'}),"\n",(0,a.jsxs)(n.p,{children:["The sequence consists of a backslash ",(0,a.jsx)(n.code,{children:"\\"}),", followed by a character. For instance, ",(0,a.jsx)(n.code,{children:"\\t"})," is an escape sequence for the ",(0,a.jsx)(n.strong,{children:"Tab"})," character. Escape sequences facilitate the entry of special characters: the previous example (",(0,a.jsx)(n.code,{children:"\\t"}),') replaces the entry "Character(Tab)".']}),"\n",(0,a.jsx)(n.p,{children:"In 4D, the following escape sequences can be used:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Escape sequence"}),(0,a.jsx)(n.th,{children:"Character replaced"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"\\n"})}),(0,a.jsx)(n.td,{children:"LF (Line feed)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"\\t"})}),(0,a.jsx)(n.td,{children:"HT (Tab)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"\\r"})}),(0,a.jsx)(n.td,{children:"CR (Carriage return)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"\\\\"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"\\"})," (Backslash)"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:'\\"'})}),(0,a.jsx)(n.td,{children:'" (Quotation marks)'})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"It is possible to use either upper or lower case in escape sequences."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In the following example, the ",(0,a.jsx)(n.strong,{children:"Carriage return"})," character (escape sequence ",(0,a.jsx)(n.code,{children:"\\r"}),") is inserted in a statement in order to obtain a dialog box:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'ALERT("The operation has been completed successfully.\\rYou may now disconnect.")'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},407484:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);