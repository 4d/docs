/*! For license information please see 6c4315e2.d8c2d7a0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34322],{736782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(474848),a=t(28453);const i={id:"pointer",title:"Pointer"},o=void 0,s={id:"Concepts/pointer",title:"Pointer",description:"A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer.",source:"@site/versioned_docs/version-20-R4/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/docs/20-R4/Concepts/pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"pointer",title:"Pointer"},sidebar:"docs",previous:{title:"Picture",permalink:"/docs/20-R4/Concepts/picture"},next:{title:"String",permalink:"/docs/20-R4/Concepts/string"}},l={},d=[{value:"Using a pointer: Basic example",id:"Using-a-pointer-Basic-example",level:2},{value:"Pointer operators",id:"Pointer-operators",level:2},{value:"Main usages",id:"Main-usages",level:2},{value:"Pointers to tables",id:"Pointers-to-tables",level:3},{value:"Pointers to fields",id:"Pointers-to-fields",level:3},{value:"Pointers to local variables",id:"Pointers-to-local-variables",level:3},{value:"Pointers to array elements",id:"Pointers-to-array-elements",level:3},{value:"Pointers to arrays",id:"Pointers-to-arrays",level:3},{value:"Pointers as parameters to methods",id:"Pointers-as-parameters-to-methods",level:3},{value:"Pointers to pointers",id:"Pointers-to-pointers",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer."}),"\n",(0,r.jsx)(n.p,{children:"Pointers provide an advanced way (in programming) to refer to data. When you use the language, you access various objects\u2014in particular, tables, fields, variables, objects, and arrays\u2014by simply using their names. However, it is often useful to refer to these elements and access them without knowing their names. This is what pointers let you do."}),"\n",(0,r.jsx)(n.p,{children:"The concept behind pointers is not that uncommon in everyday life. You often refer to something without knowing its exact identity. For example, you might say to a friend, \u201cLet\u2019s go for a ride in your car\u201d instead of \u201cLet\u2019s go for a ride in the car with license plate 123ABD.\u201d In this case, you are referencing the car with license plate 123ABD by using the phrase \u201cyour car.\u201d The phrase \u201ccar with license plate 123ABD\u201d is like the name of an object, and using the phrase \u201cyour car\u201d is like using a pointer to reference the object."}),"\n",(0,r.jsx)(n.p,{children:"Being able to refer to something without knowing its exact identity is very useful. In fact, your friend could get a new car, and the phrase \u201cyour car\u201d would still be accurate\u2014it would still be a car and you could still take a ride in it. Pointers work the same way. For example, a pointer could at one time refer to a numeric field called Age, and later refer to a numeric variable called Old Age. In both cases, the pointer references numeric data that could be used in a calculation."}),"\n",(0,r.jsx)(n.p,{children:"You can use pointers to reference tables, fields, variables, arrays, array elements, and objects. The following table gives an example of each data type:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"To Reference"}),(0,r.jsx)(n.th,{children:"To Use"}),(0,r.jsx)(n.th,{children:"To Assign"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"vpTable:=->[Table]"}),(0,r.jsx)(n.td,{children:"DEFAULT TABLE(vpTable->)"}),(0,r.jsx)(n.td,{children:"n/a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"vpField:=->[Table]Field"}),(0,r.jsx)(n.td,{children:"ALERT(vpField->)"}),(0,r.jsx)(n.td,{children:'vpField->:="John"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"vpVar:=->Variable"}),(0,r.jsx)(n.td,{children:"ALERT(vpVar->)"}),(0,r.jsx)(n.td,{children:'vpVar->:="John"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"vpArr:=->Array"}),(0,r.jsx)(n.td,{children:"SORT ARRAY(vpArr->;>)"}),(0,r.jsx)(n.td,{children:"COPY ARRAY (Arr;vpArr->)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Array element"}),(0,r.jsx)(n.td,{children:"vpElem:=->Array{1}"}),(0,r.jsx)(n.td,{children:"ALERT (vpElem->)"}),(0,r.jsx)(n.td,{children:'vpElem->:="John"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"vpObj:=->myObject"}),(0,r.jsx)(n.td,{children:"ALERT (vpObj->myProp)"}),(0,r.jsx)(n.td,{children:'vpObj->myProp:="John"'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"Using-a-pointer-Basic-example",children:"Using a pointer: Basic example"}),"\n",(0,r.jsx)(n.p,{children:"It is easiest to explain the use of pointers through an example. This example shows how to access a variable through a pointer. We start by creating a variable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$MyVar:="Hello"\n'})}),"\n",(0,r.jsx)(n.p,{children:"$MyVar is now a variable containing the string \u201cHello.\u201d We can now create a pointer to $MyVar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n"})}),"\n",(0,r.jsx)(n.p,{children:"The -> symbol means \u201cget a pointer to.\u201d This symbol is formed by a dash followed by a \u201cgreater than\u201d sign. In this case, it gets the pointer that references or \u201cpoints to\u201d $MyVar. This pointer is assigned to MyPointer with the assignment operator."}),"\n",(0,r.jsx)(n.p,{children:"$MyPointer is now a variable that contains a pointer to $MyVar. $MyPointer does not contain \u201cHello\u201d, which is the value in $MyVar, but you can use $MyPointer to get this value. The following expression returns the value in $MyVar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$MyPointer->\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this case, it returns the string \u201cHello\u201d. The -> symbol, when it follows a pointer, references the object pointed to. This is called dereferencing."}),"\n",(0,r.jsx)(n.p,{children:"It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. This means that you could use the expression $MyPointer-> anywhere that you could use the original $MyVar variable. For example, the following line displays an alert box with the word Hello in it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\n"})}),"\n",(0,r.jsx)(n.p,{children:'You can also use $MyPointer to change the data in $MyVar. For example, the following statement stores the string "Goodbye" in the variable $MyVar:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you examine the two uses of the expression $MyPointer->, you will see that it acts just as if you had used $MyVar instead. In summary, the following two lines perform the same action\u2014both display an alert box containing the current value in the variable $MyVar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\nALERT($MyVar)\n"})}),"\n",(0,r.jsx)(n.p,{children:'The following two lines perform the same action\u2014 both assign the string "Goodbye" to $MyVar:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"Pointer-operators",children:"Pointer operators"}),"\n",(0,r.jsx)(n.p,{children:"With:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  ` vPtrA and vPtrB point to the same object\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC points to another object\n vPtrC:=->anotherObject\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operation"}),(0,r.jsx)(n.th,{children:"Syntax"}),(0,r.jsx)(n.th,{children:"Returns"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Equality"}),(0,r.jsx)(n.td,{children:"Pointer = Pointer"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"vPtrA = vPtrB"}),(0,r.jsx)(n.td,{children:"True"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\t|\t|||vPtrA = vPtrC\t|False|\n"})}),"\n",(0,r.jsx)(n.p,{children:"|Inequality\t|Pointer # Pointer\t|Boolean\t|vPtrA # vPtrC\t|True|\n||||\t\t\tvPtrA # vPtrB\t|False|"}),"\n",(0,r.jsx)(n.h2,{id:"Main-usages",children:"Main usages"}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-tables",children:"Pointers to tables"}),"\n",(0,r.jsx)(n.p,{children:"Anywhere that the language expects to see a table, you can use a dereferenced pointer to the table. You create a pointer to a table by using a line like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=->[anyTable]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also get a pointer to a table by using the ",(0,r.jsx)(n.code,{children:"Table"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=Table(20)\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can use the dereferenced pointer in commands, like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"DEFAULT TABLE($TablePtr->)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-fields",children:"Pointers to fields"}),"\n",(0,r.jsx)(n.p,{children:"Anywhere that the language expects to see a field, you can use a dereferenced pointer to reference the field. You create a pointer to a field by using a line like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$FieldPtr:=->[aTable]ThisField\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also get a pointer to a field by using the ",(0,r.jsx)(n.code,{children:"Field"})," command, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$FieldPtr:=Field(1;2)\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can use the dereferenced pointer in commands, like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'OBJECT SET FONT($FieldPtr->;"Arial")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-local-variables",children:"Pointers to local variables"}),"\n",(0,r.jsx)(n.p,{children:"When you use pointers to process or local variables, you must be sure that the variable pointed to is already set when the pointer is used. Keep in mind that local variables are deleted when the method that created them has completed its execution and process variables are deleted at the end of the process that created them. When a pointer calls a variable that no longer exists, this causes a syntax error in interpreted mode (variable not defined) but it can generate a more serious error in compiled mode."}),"\n",(0,r.jsx)(n.p,{children:"Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in Method1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello world"\n Method2(->$MyVar)\n'})}),"\n",(0,r.jsx)(n.p,{children:"In Method2, the debugger will display $1 as follows:"}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"$1"}),(0,r.jsx)(n.th,{children:"->$MyVar (Method1)"})]})})}),"\n",(0,r.jsx)(n.p,{children:"The value of $1 will be:"}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"$MyVar (Method1)"}),(0,r.jsx)(n.th,{children:'"Hello world"'})]})})}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-array-elements",children:"Pointers to array elements"}),"\n",(0,r.jsx)(n.p,{children:"You can create a pointer to an array element. For example, the following lines create an array and assign a pointer to the first array element to a variable called $ElemPtr:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Create an array\n$ElemPtr:=->$anArray{1} //Create a pointer to the array element\n"})}),"\n",(0,r.jsx)(n.p,{children:"You could use the dereferenced pointer to assign a value to the element, like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$ElemPtr->:=8\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-arrays",children:"Pointers to arrays"}),"\n",(0,r.jsx)(n.p,{children:"You can create a pointer to an array. For example, the following lines create an array and assign a pointer to the array to a variable called $ArrPtr:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Create an array\n$ArrPtr:=->$anArray //Create a pointer to the array\n"})}),"\n",(0,r.jsx)(n.p,{children:"It is important to understand that the pointer points to the array; it does not point to an element of the array. For example, you can use the dereferenced pointer from the preceding lines like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"SORT ARRAY($ArrPtr->;>) //Sort the array\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you need to refer to the fourth element in the array by using the pointer, you do this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" ArrPtr->{4}:=84\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-as-parameters-to-methods",children:"Pointers as parameters to methods"}),"\n",(0,r.jsxs)(n.p,{children:["You can pass a pointer as a parameter to a method. Inside the method, you can modify the object referenced by the pointer. For example, the following method, ",(0,r.jsx)(n.code,{children:"takeTwo"}),", takes two parameters that are pointers. It changes the object referenced by the first parameter to uppercase characters, and the object referenced by the second parameter to lowercase characters. Here is the project method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  //takeTwo project method\n  //$1 \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$2 \u2013 Pointer to a string field or variable. Change this to lowercase.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The following line uses the ",(0,r.jsx)(n.code,{children:"takeTwo"})," method to change a field to uppercase characters and to change a variable to lowercase characters:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"takeTwo(->[myTable]myField;->$MyVar)\n"})}),"\n",(0,r.jsx)(n.p,{children:'If the field [myTable]myField contained the string "jones", it would be changed to the string "JONES". If the variable $MyVar contained the string "HELLO", it would be changed to the string "hello".'}),"\n",(0,r.jsx)(n.p,{children:"In the takeTwo method, and in fact, whenever you use pointers, it is important that the data type of the object being referenced is correct. In the previous example, the pointers must point to something that contains a string or text."}),"\n",(0,r.jsx)(n.h3,{id:"Pointers-to-pointers",children:"Pointers to pointers"}),"\n",(0,r.jsx)(n.p,{children:"If you really like to complicate things, you can use pointers to reference other pointers. Consider this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n'})}),"\n",(0,r.jsx)(n.p,{children:"It displays an alert box with the word \u201cGoodbye\u201d in it."}),"\n",(0,r.jsx)(n.p,{children:"Here is an explanation of each line of the example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'$MyVar:="Hello"\n--\x3e This line puts the string "Hello" into the variable $MyVar.'}),"\n",(0,r.jsx)(n.li,{children:"$PointerOne:=->$MyVar\n--\x3e $PointerOne now contains a pointer to $MyVar."}),"\n",(0,r.jsx)(n.li,{children:"$PointerTwo:=->$PointerOne\n--\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."}),"\n",(0,r.jsx)(n.li,{children:'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".'}),"\n",(0,r.jsx)(n.li,{children:"ALERT (($PointerTwo->)->)\n--\x3e Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, the alert box displays the contents of $MyVar."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'The following line puts "Hello" into $MyVar:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'($PointerTwo->)->:="Hello"\n'})}),"\n",(0,r.jsx)(n.p,{children:'The following line gets "Hello" from $MyVar and puts it into $NewVar:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$NewVar:=($PointerTwo->)->\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," Multiple dereferencing requires parentheses."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:s.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(296540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);