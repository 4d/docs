"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29969"],{363571:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Variables, fields or expressions of the Object type can contain various types of data. The structure of native 4D objects is based on the classic principle of \\"property/value\\" pairs. The syntax of these objects is based on JSON notation:","source":"@site/versioned_docs/version-20-R7/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"Number (Real, Integer)","permalink":"/docs/Concepts/number"},"next":{"title":"Picture","permalink":"/docs/Concepts/picture"}}'),o=s("785893"),r=s("250065");let i={id:"object",title:"Object"},c=void 0,a={},l=[{value:"Instantiation",id:"instantiation",level:2},{value:"<code>New object</code> command",id:"new-object-command",level:3},{value:"<code>{}</code> operator",id:"-operator",level:3},{value:"Regular or shared object",id:"regular-or-shared-object",level:3},{value:"Properties",id:"properties",level:2},{value:"Null value",id:"null-value",level:3},{value:"Undefined value",id:"undefined-value",level:3},{value:"Pointers",id:"pointers",level:3},{value:"Object operators",id:"object-operators",level:2},{value:"Resources",id:"resources",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Variables, fields or expressions of the Object type can contain various types of data. The structure of native 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['A property name is always a text, for example "Name". It must follow ',(0,o.jsx)(n.a,{href:"/docs/Concepts/identifiers#object-properties",children:"specific rules"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A property value can be of the following type:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"number (Real, Integer, etc.)"}),"\n",(0,o.jsx)(n.li,{children:"text"}),"\n",(0,o.jsx)(n.li,{children:"null"}),"\n",(0,o.jsx)(n.li,{children:"boolean"}),"\n",(0,o.jsxs)(n.li,{children:["pointer (stored as such, evaluated using the ",(0,o.jsx)(n.code,{children:"JSON Stringify"})," command or when copying),"]}),"\n",(0,o.jsx)(n.li,{children:"date (date type or ISO date format string)"}),"\n",(0,o.jsx)(n.li,{children:"object(1) (objects can be nested on several levels)"}),"\n",(0,o.jsx)(n.li,{children:"picture(2)"}),"\n",(0,o.jsx)(n.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["(1) ",(0,o.jsx)(n.strong,{children:"Non-streamable objects"})," such as ORDA objects (",(0,o.jsx)(n.a,{href:"/docs/ORDA/dsmapping#entity",children:"entities"}),", ",(0,o.jsx)(n.a,{href:"/docs/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,o.jsx)(n.a,{href:"/docs/API/FileHandleClass",children:"file handles"}),", ",(0,o.jsx)(n.a,{href:"/docs/API/WebServerClass",children:"web server"}),"... cannot be stored in ",(0,o.jsx)(n.strong,{children:"object fields"}),". An error is returned if you try to do it; however, they are fully supported in ",(0,o.jsx)(n.strong,{children:"object variables"})," in memory."]}),"\n",(0,o.jsx)(n.p,{children:'(2) When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".'}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Keep in mind that property names differentiate between upper and lower case."})}),"\n",(0,o.jsxs)(n.p,{children:["You manage Object type variables, fields or expressions using the standard ",(0,o.jsx)(n.a,{href:"#properties",children:"object notation"})," or the commands available in the ",(0,o.jsx)(n.strong,{children:"Objects (Language)"})," theme. Note that specific commands of the ",(0,o.jsx)(n.strong,{children:"Queries"})," theme such as ",(0,o.jsx)(n.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,o.jsx)(n.code,{children:"QUERY SELECTION BY ATTRIBUTE"}),", or ",(0,o.jsx)(n.code,{children:"ORDER BY ATTRIBUTE"})," can be used to carry out processing on object fields."]}),"\n",(0,o.jsx)(n.p,{children:"Each property value accessed through the object notation is considered an expression. You can use such values wherever 4D expressions are expected:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by ",(0,o.jsx)(n.code,{children:"PROCESS 4D TAGS"})," or the Web Server, export files, 4D Write Pro documents...),"]}),"\n",(0,o.jsx)(n.li,{children:"in the Expression areas of the Debugger and the Runtime explorer,"}),"\n",(0,o.jsx)(n.li,{children:"in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color)."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,o.jsx)(n.p,{children:"Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error."}),"\n",(0,o.jsx)(n.p,{children:"Object instantiation can be done in one of the following ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["using the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:(0,o.jsx)(n.code,{children:"New object"})})," command,"]}),"\n",(0,o.jsxs)(n.li,{children:["using the ",(0,o.jsx)(n.code,{children:"{}"})," operator."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Several 4D commands and functions return objects, for example ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/database-measures.301-5945423.en.html",children:(0,o.jsx)(n.code,{children:"Database measures"})})," or ",(0,o.jsx)(n.a,{href:"/docs/commands/file",children:(0,o.jsx)(n.code,{children:"File"})}),". In this case, it is not necessary to instantiate explicitely the object, the 4D language does it for you."]})}),"\n",(0,o.jsxs)(n.h3,{id:"new-object-command",children:[(0,o.jsx)(n.code,{children:"New object"})," command"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:(0,o.jsx)(n.code,{children:"New object"})})," command creates a new empty or prefilled object and returns its reference."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $obVar : Object //declaration of an object type 4D variable\n $obVar:=New object //instantiation of an object and assignment to the 4D variable\n \n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"-operator",children:[(0,o.jsx)(n.code,{children:"{}"})," operator"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"{}"})," operator allows you to create an ",(0,o.jsx)(n.strong,{children:"object literal"}),". An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (",(0,o.jsx)(n.code,{children:"{}"}),"). The object literal syntax creates empty or filled objects."]}),"\n",(0,o.jsxs)(n.p,{children:["Since any property value is considered an expression, you can create sub-objects using ",(0,o.jsx)(n.code,{children:"{}"})," in property values.  You can also create and reference ",(0,o.jsx)(n.strong,{children:"collection literals"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $o ; $o2 ; $o3 : Object //declaration of object variables\n $o := {} // instantiation of an empty object \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object\n 		// with properties {"a":"foo","b":42,"c":{},"d":false})\n\n	// same properties using variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can mix the ",(0,o.jsx)(n.code,{children:"New object"})," and literal syntaxes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$o:={\\\n	ob1: {age: 42}; \\\n	ob2: New object("message"; "Hello"); \\\n	form1: Formula(return This.ob1.age+10); \\\n	form2 : Formula(ALERT($1)); \\\n	col: [1; 2; 3; 4; 5; 6]\\\n	}\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // displays Hello\n$col:=$o.col[5] //6\n'})}),"\n",(0,o.jsx)(n.h3,{id:"regular-or-shared-object",children:"Regular or shared object"}),"\n",(0,o.jsx)(n.p,{children:"You can create two types of objects:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["regular (non-shared) objects, using the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html",children:(0,o.jsx)(n.code,{children:"New object"})})," command or object literal syntax (",(0,o.jsx)(n.code,{children:"{}"}),"). These objects can be edited without any specific access control but cannot be shared between processes."]}),"\n",(0,o.jsxs)(n.li,{children:["shared objects, using the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html",children:(0,o.jsx)(n.code,{children:"New shared object"})})," command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by ",(0,o.jsx)(n.code,{children:"Use...End use"})," structures.\nFor more information, refer to the ",(0,o.jsx)(n.a,{href:"/docs/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.p,{children:"You access object property values through a chain of tokens. Object properties can be accessed in two ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['using a "dot" symbol:\n',(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"object.propertyName"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["using a string within square brackets:\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'object["propertyName"]'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //or also:\n     $property:="name"\n	 $vName:=employee[$property]\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Since an object property value can be an object or a collection, you can use a sequence of symbols to access sub-properties, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,o.jsx)(n.p,{children:"Object notation is available on any language element that can contains or returns an object, i.e:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Objects"})," themselves (stored in variables, fields, object properties, object arrays, or collection elements).\nExamples:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //field\n     $city:=$addr.city //property of an object\n     $pop:=$aObjCountries{2}.population //object array\n     $val:=$myCollection[3].subvalue //collection element\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"4D commands"})," that return objects.\nExample:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"     $measures:=Database measures.DB.tables\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Project methods"})," or ",(0,o.jsx)(n.strong,{children:"Functions"})," that return objects.\nExample:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Collections"}),"\nExample:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"     myColl.length //size of the collection\n"})}),"\n",(0,o.jsx)(n.h3,{id:"null-value",children:"Null value"}),"\n",(0,o.jsxs)(n.p,{children:["When using the objects, the ",(0,o.jsx)(n.strong,{children:"null"})," value is supported though the ",(0,o.jsx)(n.strong,{children:"Null"})," command. This command can be used to assign or compare the null value to object properties, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information, please refer to ",(0,o.jsx)(n.a,{href:"/docs/Concepts/null-undefined",children:"Null and Undefined"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"undefined-value",children:"Undefined value"}),"\n",(0,o.jsx)(n.p,{children:"Evaluating an object property can sometimes produce an undefined value. Assigning an undefined value to an existing object property reinitializes or clears its value. Assigning an undefined value to a non existing object property does nothing."}),"\n",(0,o.jsxs)(n.p,{children:["For more information, please refer to ",(0,o.jsx)(n.a,{href:"/docs/Concepts/null-undefined",children:"Null and Undefined"})]}),"\n",(0,o.jsx)(n.h3,{id:"pointers",children:"Pointers"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Preliminary Note:"})," Since objects are always passed by reference, there is usually no need to use pointers. While just passing the object, internally 4D automatically uses a mechanism similar to a pointer, minimizing memory need and allowing you to modify the parameter and to return modifications. As a result, you should not need to use pointers. However, in case you want to use pointers, property values can be accessed through pointers."]}),"\n",(0,o.jsx)(n.p,{children:'Using object notation with pointers is very similar to using object notation directly with objects, except that the "dot" symbol must be omitted.'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Direct access:"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Access by name:"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,o.jsx)(n.h2,{id:"object-operators",children:"Object operators"}),"\n",(0,o.jsxs)(n.p,{children:["You can use comparison operators with ",(0,o.jsx)(n.strong,{children:"object references"}),", which means that you can evaluate if two or more references point to the same instance of an object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"var $o1:={a: 42} //reference to an instance\nvar $o2:={a: 42} //reference to a different instance\nvar $o3:=$o1 //reference to the same instance\n"})}),"\n",(0,o.jsx)(n.p,{children:"Based upon the code above, the comparison table is:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Operation"}),(0,o.jsx)(n.th,{children:"Syntax"}),(0,o.jsx)(n.th,{children:"Returns"}),(0,o.jsx)(n.th,{children:"Expression"}),(0,o.jsx)(n.th,{children:"Value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Equality"}),(0,o.jsx)(n.td,{children:"objectRef = objectRef"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"$o1 = $o3"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"$o1 = $o2"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Inequality"}),(0,o.jsx)(n.td,{children:"objectRef # objectRef"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"$o1 # $o3"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"$o1 # $o2"}),(0,o.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(n.p,{children:["Objects use ",(0,o.jsx)(n.em,{children:"resources"})," such a documents, entity locks, and of course, memory. These resources are retained as long as objects need them. Usually, you do not have to worry about them, 4D automatically releases all resources attached to an object when it detects that the object itself is no longer referenced by any variable or other object."]}),"\n",(0,o.jsxs)(n.p,{children:["For instance, when there is no more references to an entity on which you have set a lock with ",(0,o.jsx)(n.a,{href:"/docs/API/EntityClass#lock",children:(0,o.jsx)(n.code,{children:"$entity.lock()"})}),", 4D will free the memory but also automatically release the associated lock, a call to ",(0,o.jsx)(n.a,{href:"/docs/API/EntityClass#unlock",children:(0,o.jsx)(n.code,{children:"$entity.unlock()"})})," is useless."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to ",(0,o.jsx)(n.strong,{children:"nullify all its references"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\n$doc:=WP Import document("large_novel.4wp")\n	... // do something with $doc\n$doc:=Null  // free resources occupied by $doc\n	... // continue execution with more free memory\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Using object notation simplifies the 4D code while handling objects. Note however that the command-based notation is still fully supported."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Writing and reading objects (this example compares object notation and command notation):"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'  // Using the object notation\n var $myObj : Object //declares a 4D variable object\n $myObj:={} //creates an object literal and assigns it to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n \n  // Using the command notation\n var $myObj2 : Object //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n \n  // Of course, both notations can be mixed\n var $myObj3 : Object\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Create a property and assign values, including objects:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Get a value in a sub-object is very simple using the object notation:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can access properties as strings using the ",(0,o.jsx)(n.code,{children:"[]"})," operator"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);