"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"object",title:"Object"},i=void 0,s={unversionedId:"Concepts/object",id:"version-20/Concepts/object",title:"Object",description:'Variables, fields or expressions of the Object type can contain various types of data. The structure of native 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:',source:"@site/versioned_docs/version-20/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/Concepts/object",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"Number (Real, Longint, Integer)",permalink:"/docs/Concepts/number"},next:{title:"Picture",permalink:"/docs/Concepts/picture"}},p={},c=[{value:"Instantiation",id:"instantiation",level:2},{value:"<code>New object</code> command",id:"new-object-command",level:3},{value:"<code>{}</code> operator",id:"-operator",level:3},{value:"Regular or shared object",id:"regular-or-shared-object",level:3},{value:"Syntax basics",id:"syntax-basics",level:2},{value:"Object properties",id:"object-properties",level:3},{value:"Pointers",id:"pointers",level:3},{value:"Null value",id:"null-value",level:3},{value:"Undefined value",id:"undefined-value",level:3},{value:"Examples",id:"examples",level:2}],u={toc:c};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Variables, fields or expressions of the Object type can contain various types of data. The structure of native 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation: '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'A property name is always a text, for example "Name". It must follow ',(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/identifiers#object-properties"}),"specific rules"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A property value can be of the following type:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"number (Real, Integer, etc.)"),(0,a.kt)("li",{parentName:"ul"},"text"),(0,a.kt)("li",{parentName:"ul"},"null"),(0,a.kt)("li",{parentName:"ul"},"boolean"),(0,a.kt)("li",{parentName:"ul"},"pointer (stored as such, evaluated using the ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON Stringify")," command or when copying),"),(0,a.kt)("li",{parentName:"ul"},"date (date type or ISO date format string)"),(0,a.kt)("li",{parentName:"ul"},"object(1) (objects can be nested on several levels)"),(0,a.kt)("li",{parentName:"ul"},"picture(2)"),(0,a.kt)("li",{parentName:"ul"},"collection")))),(0,a.kt)("p",null,"(1)ORDA objects such as ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ORDA/dsmapping#entity"}),"entities")," or ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ORDA/dsmapping#entity-selection"}),"entity selections")," cannot be stored in ",(0,a.kt)("strong",{parentName:"p"},"object fields"),"; however, they are fully supported in ",(0,a.kt)("strong",{parentName:"p"},"object variables")," in memory. "),(0,a.kt)("p",null,'(2)When exposed as text in the debugger or exported to JSON, picture object properties print "',"[object Picture]",'". '),(0,a.kt)("admonition",o({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that property names differentiate between upper and lower case.")),(0,a.kt)("p",null,"You manage Object type variables, fields or expressions using the ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/object#syntax-basics"}),"object notation")," or the commands available in the ",(0,a.kt)("strong",{parentName:"p"},"Objects (Language)")," theme. Note that specific commands of the ",(0,a.kt)("strong",{parentName:"p"},"Queries")," theme such as ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY BY ATTRIBUTE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY SELECTION BY ATTRIBUTE"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY ATTRIBUTE")," can be used to carry out processing on object fields. "),(0,a.kt)("p",null,"Each property value accessed through the object notation is considered an expression. You can use such values wherever 4D expressions are expected:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," or the Web Server, export files, 4D Write Pro documents...),"),(0,a.kt)("li",{parentName:"ul"},"in the Expression areas of the Debugger and the Runtime explorer,"),(0,a.kt)("li",{parentName:"ul"},"in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).")),(0,a.kt)("h2",o({},{id:"instantiation"}),"Instantiation"),(0,a.kt)("p",null,"Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error."),(0,a.kt)("p",null,"Object instantiation can be done in one of the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New object"))," command,"),(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," operator.")),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Several 4D commands and functions return objects, for example ",(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"Get database measures"))," or ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/API/FileClass#file"}),(0,a.kt)("inlineCode",{parentName:"a"},"File")),". In this case, it is not necessary to instantiate explicitely the object, the 4D language does it for you.")),(0,a.kt)("h3",o({},{id:"new-object-command"}),(0,a.kt)("inlineCode",{parentName:"h3"},"New object")," command"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New object"))," command creates a new empty or prefilled object and returns its reference. "),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' var $obVar : Object //declaration of an object type 4D variable\n $obVar:=New object //instantiation of an object and assignment to the 4D variable\n \n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object\n')),(0,a.kt)("h3",o({},{id:"-operator"}),(0,a.kt)("inlineCode",{parentName:"h3"},"{}")," operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," operator allows you to create an ",(0,a.kt)("strong",{parentName:"p"},"object literal"),". An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"). The object literal syntax creates empty or filled objects. "),(0,a.kt)("p",null,"Since any property value is considered an expression, you can create sub-objects using ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," in property values.  You can also create and reference ",(0,a.kt)("strong",{parentName:"p"},"collection literals"),"."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' var $o ; $o2 ; $o3 : Object //declaration of object variables\n $o := {} // instantiation of an empty object \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object\n        // with properties {"a":"foo","b":42,"c":{},"d":false})\n\n    // same properties using variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n')),(0,a.kt)("p",null,"You can mix the ",(0,a.kt)("inlineCode",{parentName:"p"},"New object")," and literal syntaxes:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$o:={\\\n    ob1: {age: 42}; \\\n    ob2: New object("message"; "Hello"); \\\n    form1: Formula(return This.ob1.age+10); \\\n    form2 : Formula(ALERT($1)); \\\n    col: [1; 2; 3; 4; 5; 6]\\\n    }\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // displays Hello\n$col:=$o.col[5] //6\n')),(0,a.kt)("h3",o({},{id:"regular-or-shared-object"}),"Regular or shared object"),(0,a.kt)("p",null,"You can create two types of objects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"regular (non-shared) objects, using the ","[",(0,a.kt)("inlineCode",{parentName:"li"},"New object"),"]"," command or object literal syntax (",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"). These objects can be edited without any specific access control but cannot be shared between processes. "),(0,a.kt)("li",{parentName:"ul"},"shared objects, using the ",(0,a.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1526.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New shared object"))," command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by ",(0,a.kt)("inlineCode",{parentName:"li"},"Use...End use")," structures.\nFor more information, refer to the ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/Concepts/shared"}),"Shared objects and collections")," section.")),(0,a.kt)("h2",o({},{id:"syntax-basics"}),"Syntax basics"),(0,a.kt)("p",null,"Object notation can be used to access object property values through a chain of tokens."),(0,a.kt)("h3",o({},{id:"object-properties"}),"Object properties"),(0,a.kt)("p",null,"With object notation, object properties can be accessed in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'using a "dot" symbol:',(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"object.propertyName")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'     employee.name:="Smith"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using a string within square brackets:",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"object",'["propertyName"]')))),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'     $vName:=employee["name"]\n     //or also:\n     $property:="name"\n     $vName:=employee[$property]\n\n')),(0,a.kt)("p",null,"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $vAge:=employee.children[2].age\n")),(0,a.kt)("p",null,"Object notation is available on any language element that can contains or returns an object, i.e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Objects")," themselves (stored in variables, fields, object properties, object arrays, or collection elements).\nExamples:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //field\n     $city:=$addr.city //property of an object\n     $pop:=$aObjCountries{2}.population //object array\n     $val:=$myCollection[3].subvalue //collection element\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"4D commands")," that return objects.\nExample:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     $measures:=Get database measures.DB.tables\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project methods")," that return objects.\nExample:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Collections"),"\nExample:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     myColl.length //size of the collection\n")),(0,a.kt)("h3",o({},{id:"pointers"}),"Pointers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Preliminary Note:")," Since objects are always passed by reference, there is usually no need to use pointers. While just passing the object, internally 4D automatically uses a mechanism similar to a pointer, minimizing memory need and allowing you to modify the parameter and to return modifications. As a result, you should not need to use pointers. However, in case you want to use pointers, property values can be accessed through pointers. "),(0,a.kt)("p",null,'Using object notation with pointers is very similar to using object notation directly with objects, except that the "dot" symbol must be omitted.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Direct access:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointerOnObject->propertyName"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Access by name:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointerOnObject->",'["propertyName"]')))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n")),(0,a.kt)("h3",o({},{id:"null-value"}),"Null value"),(0,a.kt)("p",null,"When using the object notation, the ",(0,a.kt)("strong",{parentName:"p"},"null")," value is supported though the ",(0,a.kt)("strong",{parentName:"p"},"Null")," command. This command can be used to assign or compare the null value to object properties or collection elements, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," myObject.address.zip:=Null\n If(myColl[2]=Null)\n")),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/null-undefined"}),"Null and Undefined"),"."),(0,a.kt)("h3",o({},{id:"undefined-value"}),"Undefined value"),(0,a.kt)("p",null,"Evaluating an object property can sometimes produce an undefined value. Typically when trying to read or assign undefined expressions, 4D will generate errors. This does not happen in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,a.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page89.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," with them:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reading the ",(0,a.kt)("strong",{parentName:"li"},"length")," property of an undefined collection produces 0:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     var $c : Collection //variable created but no collection is defined\n     $size:=$c.length //$size = 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.')),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:"),(0,a.kt)("li",{parentName:"ul"},"Object, collection, pointer: Null"),(0,a.kt)("li",{parentName:"ul"},"Picture: Empty picture"),(0,a.kt)("li",{parentName:"ul"},"Boolean: False"),(0,a.kt)("li",{parentName:"ul"},'String: ""'),(0,a.kt)("li",{parentName:"ul"},"Number: 0"),(0,a.kt)("li",{parentName:"ul"},'Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'),(0,a.kt)("li",{parentName:"ul"},"Time: 0 (number of ms)"),(0,a.kt)("li",{parentName:"ul"},"Undefined, Null: no change")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assigning an undefined value to a non existing object property does nothing.")),(0,a.kt)("p",null,"When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". These commands return an empty value of the specified type when the expression evaluates to undefined. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined\n  //to avoid errors in the code\n")),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/null-undefined"}),"Null and Undefined")),(0,a.kt)("h2",o({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Using object notation simplifies the 4D code while handling objects. Note however that the command-based notation is still fully supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Writing and reading objects (this example compares object notation and command notation):")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'  // Using the object notation\n var $myObj : Object //declares a 4D variable object\n $myObj:={} //creates an object literal and assigns it to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n \n  // Using the command notation\n var $myObj2 : Object //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n \n  // Of course, both notations can be mixed\n var $myObj3 : Object\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a property and assign values, including objects:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get a value in a sub-object is very simple using the object notation:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can access properties as strings using the ","[ ]"," operator ")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n')))}m.isMDXComponent=!0}}]);