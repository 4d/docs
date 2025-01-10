"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61785"],{667204:function(e,n,a){a.r(n),a.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"Concepts/arrays","title":"Arrays","description":"An array is an ordered series of variables of the same type. Each variable is called an element of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special element zero. Arrays are 4D variables. Like any variable, an array has a scope and follows the rules of the 4D language, though with some unique differences.","source":"@site/versioned_docs/version-20/Concepts/arrays.md","sourceDirName":"Concepts","slug":"/Concepts/arrays","permalink":"/docs/20/Concepts/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"arrays","title":"Arrays"},"sidebar":"docs","previous":{"title":"Variables","permalink":"/docs/20/Concepts/variables"},"next":{"title":"Methods","permalink":"/docs/20/Concepts/methods"}}'),t=a("785893"),s=a("250065");let i={id:"arrays",title:"Arrays"},o=void 0,l={},d=[{value:"Creating Arrays",id:"creating-arrays",level:2},{value:"Assigning values in arrays",id:"assigning-values-in-arrays",level:2},{value:"Assigning an array to another array",id:"assigning-an-array-to-another-array",level:3},{value:"Using the element zero of an array",id:"using-the-element-zero-of-an-array",level:2},{value:"Two-dimensional Arrays",id:"two-dimensional-arrays",level:2},{value:"Arrays and Memory",id:"arrays-and-memory",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"array"})," is an ordered series of ",(0,t.jsx)(n.strong,{children:"variables"})," of the same type. Each variable is called an ",(0,t.jsx)(n.strong,{children:"element"})," of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special ",(0,t.jsx)(n.a,{href:"#using-the-element-zero-of-an-array",children:"element zero"}),". Arrays are 4D variables. Like any variable, an array has a scope and follows the rules of the 4D language, though with some unique differences."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In most cases, it is recommended to use ",(0,t.jsx)(n.strong,{children:"collections"})," instead of ",(0,t.jsx)(n.strong,{children:"arrays"}),". Collections are more flexible and provide a wide range of dedicated methods. For more information, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/20/Concepts/collection",children:"Collection"})," section."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-arrays",children:"Creating Arrays"}),"\n",(0,t.jsxs)(n.p,{children:['You create an array with one of the array declaration commands from the "Array" theme. Each array declaration command can create or resize one-dimensional or two-dimensional arrays. For more information about two-dimensional arrays, see the ',(0,t.jsx)(n.a,{href:"#two-dimensional-arrays",children:"two dimensional arrays"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"The following line of code creates (declares) an Integer array of 10 elements:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" ARRAY INTEGER(aiAnArray;10)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, the following code resizes that same array to 20 elements:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;20)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, the following code resizes that same array to no elements:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;0)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"assigning-values-in-arrays",children:"Assigning values in arrays"}),"\n",(0,t.jsx)(n.p,{children:"You reference the elements in an array by using curly braces ({\u2026}). A number is used within the braces to address a particular element; this number is called the element number. The following lines put five names into the array called atNames and then display them in alert windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note the syntax atNames{$vlElem}. Rather than specifying a numeric literal such as atNames{3}, you can use a numeric variable to indicate which element of an array you are addressing. Using the iteration provided by a loop structure (",(0,t.jsx)(n.code,{children:"For...End for"}),", ",(0,t.jsx)(n.code,{children:"Repeat...Until"})," or ",(0,t.jsx)(n.code,{children:"While...End while"}),"), compact pieces of code can address all or part of the elements in an array."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important:"})," Be careful not to confuse the assignment operator (:=) with the comparison operator, equal (=). Assignment and comparison are very different operations."]}),"\n",(0,t.jsx)(n.h3,{id:"assigning-an-array-to-another-array",children:"Assigning an array to another array"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike text or string variables, you cannot assign one array to another. To copy (assign) an array to another one, use ",(0,t.jsx)(n.code,{children:"COPY ARRAY"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-element-zero-of-an-array",children:"Using the element zero of an array"}),"\n",(0,t.jsx)(n.p,{children:"An array always has an element zero. While element zero is not shown when an array supports a form object, there is no restriction(*) in using it with the language."}),"\n",(0,t.jsx)(n.p,{children:"Here is another example: you want to initialize a form object with a text value but without setting a default value. You can use the element zero of the array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  // method for a combo box or drop-down list  \n  // bound to atName variable array\n Case of\n    :(Form event code=On Load)\n  // Initialize the array (as shown further above)  \n  // But use the element zero\n		ARRAY TEXT(atName;5)\n		atName{0}:=Please select an item"\n		atName{1}:="Text1"\n		atName{2}:="Text2"\n		atName{3}:="Text3"\n		atName{4}:="Text4"\n		atName{5}:="Text5"\n	// Position the array to element 0\n  		atName:=0\n End case\n'})}),"\n",(0,t.jsx)(n.p,{children:"(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context."}),"\n",(0,t.jsx)(n.h2,{id:"two-dimensional-arrays",children:"Two-dimensional Arrays"}),"\n",(0,t.jsx)(n.p,{children:"Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns\n"})}),"\n",(0,t.jsx)(n.p,{children:"Two-dimensional arrays are essentially language objects; you can neither display nor print them."}),"\n",(0,t.jsx)(n.p,{children:"In the previous example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"atTopics is a two-dimensional array"}),"\n",(0,t.jsx)(n.li,{children:"atTopics{8}{5} is the 5th element (5th column...) of the 8th row"}),"\n",(0,t.jsx)(n.li,{children:"atTopics{20} is the 20th row and is itself a one-dimensional array"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Size of array(atTopics)"})," returns 100, which is the number of rows"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Size of array(atTopics{17})"})," returns 50, which the number of columns for the 17th row"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the following example, a pointer to each field of each table in the database is stored in a two-dimensional array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Create as many rows (empty and without columns) as there are tables\n $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns\n  // For each table\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // Give value of elements\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Insert a column in a row of the table underway\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Assign the "cell" with the pointer\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n'})}),"\n",(0,t.jsx)(n.p,{children:"Provided that this two-dimensional array has been initialized, you can obtain the pointers to the fields for a particular table in the following way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"  // Get the pointers to the fields for the table currently displayed at the screen:\n COPY ARRAY(\u25CAapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Initialize Boolean and Date fields\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes."]}),"\n",(0,t.jsx)(n.h2,{id:"arrays-and-memory",children:"Arrays and Memory"}),"\n",(0,t.jsx)(n.p,{children:"Unlike the data you store on disk using tables and records, an array is always held in memory in its entirety."}),"\n",(0,t.jsx)(n.p,{children:"For example, if all US zip codes were entered in the [Zip Codes] table, it would contain about 100,000 records. In addition, that table would include several fields: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the 4D database engine creates the corresponding selection of records within the [Zip Codes] table, and then loads the records only when they are needed (i.e., when they are displayed or printed). In order words, you work with an ordered series of values (of the same type for each field) that is partially loaded from the disk into the memory by the database engine of 4D."}),"\n",(0,t.jsx)(n.p,{children:"Doing the same thing with arrays would be prohibitive for the following reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory."}),"\n",(0,t.jsx)(n.li,{children:"Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use."}),"\n",(0,t.jsx)(n.li,{children:"Again, because an array is always held in memory in its entirety, each time the application is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conclusion:"})," Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate."]}),"\n",(0,t.jsx)(n.p,{children:"However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Array Type"}),(0,t.jsx)(n.th,{children:"Formula for determining Memory Usage in Bytes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 12 + Sum of the size of each blob"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"(31+number of elements)\\8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Long Integer"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 8 + Sum of the size of each object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 8 + Sum of the size of each picture"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pointer"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 8 + Sum of the size of each pointer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 20 + (Sum of the length of each text) * 2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Two-dimensional"}),(0,t.jsx)(n.td,{children:"(1+number of elements) * 16 + Sum of the size of each array"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The size of a text in memory is calculated using this formula: ((Length + 1) * 2)"}),"\n",(0,t.jsx)(n.li,{children:"A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself."}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);