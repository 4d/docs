"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51498],{603905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(t),c=r,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},951198:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});t(667294);var n=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={id:"arrays",title:"Arrays"},i=void 0,s={unversionedId:"Concepts/arrays",id:"version-20-R5/Concepts/arrays",title:"Arrays",description:"An array is an ordered series of variables of the same type. Each variable is called an element of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special element zero. Arrays are 4D variables. Like any variable, an array has a scope and follows the rules of the 4D language, though with some unique differences.",source:"@site/versioned_docs/version-20-R5/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/Concepts/arrays",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"arrays",title:"Arrays"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/Concepts/variables"},next:{title:"Methods",permalink:"/docs/Concepts/methods"}},m={},d=[{value:"Creating Arrays",id:"creating-arrays",level:2},{value:"Assigning values in arrays",id:"assigning-values-in-arrays",level:2},{value:"Assigning an array to another array",id:"assigning-an-array-to-another-array",level:3},{value:"Using the element zero of an array",id:"using-the-element-zero-of-an-array",level:2},{value:"Two-dimensional Arrays",id:"two-dimensional-arrays",level:2},{value:"Arrays and Memory",id:"arrays-and-memory",level:2}],u={toc:d};function p(e){var{components:a}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"array")," is an ordered series of ",(0,n.kt)("strong",{parentName:"p"},"variables")," of the same type. Each variable is called an ",(0,n.kt)("strong",{parentName:"p"},"element")," of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special ",(0,n.kt)("a",r({parentName:"p"},{href:"#using-the-element-zero-of-an-array"}),"element zero"),". Arrays are 4D variables. Like any variable, an array has a scope and follows the rules of the 4D language, though with some unique differences. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In most cases, it is recommended to use ",(0,n.kt)("strong",{parentName:"p"},"collections")," instead of ",(0,n.kt)("strong",{parentName:"p"},"arrays"),". Collections are more flexible and provide a wide range of dedicated methods. For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/collection"}),"Collection")," section.")),(0,n.kt)("h2",r({},{id:"creating-arrays"}),"Creating Arrays"),(0,n.kt)("p",null,'You create an array with one of the array declaration commands from the "Array" theme. Each array declaration command can create or resize one-dimensional or two-dimensional arrays. For more information about two-dimensional arrays, see the ',(0,n.kt)("a",r({parentName:"p"},{href:"#two-dimensional-arrays"}),"two dimensional arrays")," section."),(0,n.kt)("p",null,"The following line of code creates (declares) an Integer array of 10 elements:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY INTEGER(aiAnArray;10)\n")),(0,n.kt)("p",null,"Then, the following code resizes that same array to 20 elements:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;20)\n")),(0,n.kt)("p",null,"Then, the following code resizes that same array to no elements:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;0)\n")),(0,n.kt)("h2",r({},{id:"assigning-values-in-arrays"}),"Assigning values in arrays"),(0,n.kt)("p",null,"You reference the elements in an array by using curly braces ({\u2026}). A number is used within the braces to address a particular element; this number is called the element number. The following lines put five names into the array called atNames and then display them in alert windows:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n')),(0,n.kt)("p",null,"Note the syntax atNames{$vlElem}. Rather than specifying a numeric literal such as atNames{3}, you can use a numeric variable to indicate which element of an array you are addressing. Using the iteration provided by a loop structure (",(0,n.kt)("inlineCode",{parentName:"p"},"For...End for"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"While...End while"),"), compact pieces of code can address all or part of the elements in an array."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," Be careful not to confuse the assignment operator (:=) with the comparison operator, equal (=). Assignment and comparison are very different operations. "),(0,n.kt)("h3",r({},{id:"assigning-an-array-to-another-array"}),"Assigning an array to another array"),(0,n.kt)("p",null,"Unlike text or string variables, you cannot assign one array to another. To copy (assign) an array to another one, use ",(0,n.kt)("inlineCode",{parentName:"p"},"COPY ARRAY"),"."),(0,n.kt)("h2",r({},{id:"using-the-element-zero-of-an-array"}),"Using the element zero of an array"),(0,n.kt)("p",null,"An array always has an element zero. While element zero is not shown when an array supports a form object, there is no restriction(*) in using it with the language."),(0,n.kt)("p",null,"Here is another example: you want to initialize a form object with a text value but without setting a default value. You can use the element zero of the array:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // method for a combo box or drop-down list  \n  // bound to atName variable array\n Case of\n    :(Form event code=On Load)\n  // Initialize the array (as shown further above)  \n  // But use the element zero\n        ARRAY TEXT(atName;5)\n        atName{0}:=Please select an item"\n        atName{1}:="Text1"\n        atName{2}:="Text2"\n        atName{3}:="Text3"\n        atName{4}:="Text4"\n        atName{5}:="Text5"\n    // Position the array to element 0\n        atName:=0\n End case\n')),(0,n.kt)("p",null,"(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context."),(0,n.kt)("h2",r({},{id:"two-dimensional-arrays"}),"Two-dimensional Arrays"),(0,n.kt)("p",null,"Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns\n")),(0,n.kt)("p",null,"Two-dimensional arrays are essentially language objects; you can neither display nor print them."),(0,n.kt)("p",null,"In the previous example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"atTopics is a two-dimensional array"),(0,n.kt)("li",{parentName:"ul"},"atTopics{8}{5} is the 5th element (5th column...) of the 8th row"),(0,n.kt)("li",{parentName:"ul"},"atTopics{20} is the 20th row and is itself a one-dimensional array"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics)")," returns 100, which is the number of rows"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics{17})")," returns 50, which the number of columns for the 17th row")),(0,n.kt)("p",null,"In the following example, a pointer to each field of each table in the database is stored in a two-dimensional array:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Create as many rows (empty and without columns) as there are tables\n $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns\n  // For each table\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // Give value of elements\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Insert a column in a row of the table underway\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Assign the "cell" with the pointer\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n')),(0,n.kt)("p",null,"Provided that this two-dimensional array has been initialized, you can obtain the pointers to the fields for a particular table in the following way:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // Get the pointers to the fields for the table currently displayed at the screen:\n COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Initialize Boolean and Date fields\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes."),(0,n.kt)("h2",r({},{id:"arrays-and-memory"}),"Arrays and Memory"),(0,n.kt)("p",null,"Unlike the data you store on disk using tables and records, an array is always held in memory in its entirety."),(0,n.kt)("p",null,"For example, if all US zip codes were entered in the ","[Zip Codes]"," table, it would contain about 100,000 records. In addition, that table would include several fields: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the 4D database engine creates the corresponding selection of records within the ","[Zip Codes]"," table, and then loads the records only when they are needed (i.e., when they are displayed or printed). In order words, you work with an ordered series of values (of the same type for each field) that is partially loaded from the disk into the memory by the database engine of 4D."),(0,n.kt)("p",null,"Doing the same thing with arrays would be prohibitive for the following reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory."),(0,n.kt)("li",{parentName:"ul"},"Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use."),(0,n.kt)("li",{parentName:"ul"},"Again, because an array is always held in memory in its entirety, each time the application is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Conclusion:")," Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate."),(0,n.kt)("p",null,"However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Array Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Formula for determining Memory Usage in Bytes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 12 + Sum of the size of each blob")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(31+number of elements)\\8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 8 + Sum of the size of each object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 8 + Sum of the size of each picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pointer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 8 + Sum of the size of each pointer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) ",(0,n.kt)("em",{parentName:"td"}," 20 + (Sum of the length of each text) ")," 2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Two-dimensional"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(1+number of elements) * 16 + Sum of the size of each array")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The size of a text in memory is calculated using this formula: ((Length + 1) * 2)"),(0,n.kt)("li",{parentName:"ul"},"A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself.")))}p.isMDXComponent=!0}}]);