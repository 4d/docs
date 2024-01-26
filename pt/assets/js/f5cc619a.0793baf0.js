"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14837],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),N=r,k=s["".concat(d,".").concat(N)]||s[N]||m[N]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},209108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"null-undefined",title:"Null e indefinido"},i=void 0,d={unversionedId:"Concepts/null-undefined",id:"version-20-R4/Concepts/null-undefined",title:"Null e indefinido",description:"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/pt/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"null-undefined",title:"Null e indefinido"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/pt/Concepts/date"},next:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/Concepts/number"}},p={},u=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Operadores Null",id:"operadores-null",level:2},{value:"Operadores indefinidos",id:"operadores-indefinidos",level:2},{value:"Exemplos",id:"exemplos",level:2}],m={toc:u};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido."),(0,a.kt)("h2",r({},{id:"null"}),"Null"),(0,a.kt)("p",null,"Null is a special data type with only one possible value: ",(0,a.kt)("strong",{parentName:"p"},"null"),". Este valor \xe9 devolvido por uma express\xe3o que n\xe3o cont\xe9m nenhum valor. Trying to read a property of a ",(0,a.kt)("strong",{parentName:"p"},"null")," value returns an error."),(0,a.kt)("p",null,"In the 4D language and for object field attributes, null values are managed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," function. Esta fun\xe7\xe3o pode ser usada com as express\xf5es abaixo para definir ou comparar o valor nulo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"atributos de objetos"),(0,a.kt)("li",{parentName:"ul"},"elementos da cole\xe7\xe3o"),(0,a.kt)("li",{parentName:"ul"},"variables of the object, collection, pointer, picture, or variant type (see also ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/Concepts/data-types#null-as-default-value"}),"Null as default value"),".")),(0,a.kt)("h2",r({},{id:"indefinido"}),"Indefinido"),(0,a.kt)("p",null,"Indefinido n\xe3o \xe9 realmente um tipo de dados. Denota uma vari\xe1vel que ainda n\xe3o foi definida. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"A variant variable has ",(0,a.kt)("strong",{parentName:"p"},"undefined")," as ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/data-types#default-values"}),"default value"),"."),(0,a.kt)("p",null,"A field cannot be undefined (the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command always returns False for a field)."),(0,a.kt)("p",null,"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Atribuindo um valor indefinido para vari\xe1veis (exceto arrays) tem o mesmo efeito que chamar ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/en/page89.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," com eles:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A atribui\xe7\xe3o de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Objecto, colec\xe7\xe3o, ponteiro: Null"),(0,a.kt)("li",{parentName:"ul"},"Imagem: Imagem vazia"),(0,a.kt)("li",{parentName:"ul"},"Booleano: Falso"),(0,a.kt)("li",{parentName:"ul"},'String: ""'),(0,a.kt)("li",{parentName:"ul"},"N\xfamero: 0"),(0,a.kt)("li",{parentName:"ul"},'Data: !00-00-00-00! se a configura\xe7\xe3o "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contr\xe1rio ""'),(0,a.kt)("li",{parentName:"ul"},"Hora: 0 (n\xfamero de ms)"),(0,a.kt)("li",{parentName:"ul"},"Indefinido, Null: sem mudan\xe7a")))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Um valor indefinido passado como par\xe2metro para um m\xe9todo de projecto \xe9 automaticamente convertido em 0 ou "" de acordo com o tipo de par\xe2metro declarado.'))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uma express\xe3o de condi\xe7\xe3o \xe9 automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". Estes comandos devolvem um valor vazio de tipo especificado quando a express\xe3o \xe9 avaliada como indefinida. Por exemplo:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined\n  //to avoid errors in the code\n"))),(0,a.kt)("h2",r({},{id:"operadores-null"}),"Operadores Null"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"scalar values")," are values of type string, Date, Time, Boolean, number, or Blob. When declared, their ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/data-types#default-values"}),"default value")," is neither undefined nor null. Outros tipos (Ponteiro, Imagem, Objecto, Colec\xe7\xe3o) t\xeam valor por defeito indefinido ou nulo. Ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n')),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Comparisons with Greater than (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported with Null values and return an error.")),(0,a.kt)("h2",r({},{id:"operadores-indefinidos"}),"Operadores indefinidos"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," c.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"outros valores")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"outros valores")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maior que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"other values")," are expressions of any type with a value neither Undefined nor Null."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported and return an error.")),(0,a.kt)("h2",r({},{id:"exemplos"}),"Exemplos"),(0,a.kt)("p",null,"Here are the different results of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," command with object properties, depending on the context:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n')),(0,a.kt)("p",null,"Exemplos de resultados de compara\xe7\xe3o com valores indefinidos e nulos:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n')))}s.isMDXComponent=!0}}]);