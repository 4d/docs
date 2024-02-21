"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3177],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),N=r,k=s["".concat(d,".").concat(N)]||s[N]||m[N]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},683309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"null-undefined",title:"Null e indefinido"},i=void 0,d={unversionedId:"Concepts/null-undefined",id:"version-20-R3/Concepts/null-undefined",title:"Null e indefinido",description:"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/pt/20-R3/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"null-undefined",title:"Null e indefinido"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/pt/20-R3/Concepts/date"},next:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/20-R3/Concepts/number"}},p={},u=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Operadores Null",id:"operadores-null",level:2},{value:"Operadores indefinidos",id:"operadores-indefinidos",level:2},{value:"Exemplos",id:"exemplos",level:2}],m={toc:u};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido."),(0,a.kt)("h2",r({},{id:"null"}),"Null"),(0,a.kt)("p",null,"Null \xe9 um tipo de dados especial com um \xfanico valor poss\xedvel: ",(0,a.kt)("strong",{parentName:"p"},"null"),". Este valor \xe9 devolvido por uma express\xe3o que n\xe3o cont\xe9m nenhum valor. Tentar ler uma propriedade de um valor ",(0,a.kt)("strong",{parentName:"p"},"null")," retorna um erro."),(0,a.kt)("p",null,"Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos s\xe3o gerenciados atrav\xe9s da fun\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),". Esta fun\xe7\xe3o pode ser usada com as express\xf5es abaixo para definir ou comparar o valor nulo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"atributos de objetos"),(0,a.kt)("li",{parentName:"ul"},"elementos da cole\xe7\xe3o"),(0,a.kt)("li",{parentName:"ul"},"vari\xe1veis do objeto, cole\xe7\xe3o, ponteiro, imagem ou tipo variante (ver tamb\xe9m ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/20-R3/Concepts/data-types#null-as-default-value"}),"Null como valor padr\xe3o"),".")),(0,a.kt)("h2",r({},{id:"indefinido"}),"Indefinido"),(0,a.kt)("p",null,"Indefinido n\xe3o \xe9 realmente um tipo de dados. Denota uma vari\xe1vel que ainda n\xe3o foi definida. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"A variant variable has ",(0,a.kt)("strong",{parentName:"p"},"undefined")," as ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/data-types#default-values"}),"default value"),"."),(0,a.kt)("p",null,"Um campo n\xe3o pode ser indefinido (o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," sempre devolve False para um campo)."),(0,a.kt)("p",null,"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Atribuir um valor indefinido a vari\xe1veis (exceto arrays) tem o mesmo efeito que chamar ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/en/page89.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," com elas:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o. //$o.a \xe9 indefinido (sem erro), e atribuir este valor limpa a vari\xe1vel\n      //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A atribui\xe7\xe3o de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Objecto, colec\xe7\xe3o, ponteiro: Null"),(0,a.kt)("li",{parentName:"ul"},"Imagem: Imagem vazia"),(0,a.kt)("li",{parentName:"ul"},"Booleano: Falso"),(0,a.kt)("li",{parentName:"ul"},'String: ""'),(0,a.kt)("li",{parentName:"ul"},"N\xfamero: 0"),(0,a.kt)("li",{parentName:"ul"},'Data: !00-00-00-00! se a configura\xe7\xe3o "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contr\xe1rio ""'),(0,a.kt)("li",{parentName:"ul"},"Hora: 0 (n\xfamero de ms)"),(0,a.kt)("li",{parentName:"ul"},"Indefinido, Null: sem mudan\xe7a")))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Um valor indefinido passado como par\xe2metro para um m\xe9todo de projecto \xe9 automaticamente convertido em 0 ou "" de acordo com o tipo de par\xe2metro declarado.'))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     C_OBJECT($o)\n     meum\xe9todo($o. ) //passa um par\xe2metro indefinido\n\n      //In mymethod\n     C_TEXT($1) //parameter type \xe9 texto\n      // $1 cont\xe9m ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uma express\xe3o de condi\xe7\xe3o \xe9 automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Quando express\xf5es de um certo tipo s\xe3o esperadas em seu c\xf3digo 4D, pode garantir que tenha o tipo correto mesmo quando s\xe3o avaliadas como indefinidas, cercando-as com o comando de transforma\xe7\xe3o 4D apropriado: ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". Estes comandos devolvem um valor vazio de tipo especificado quando a express\xe3o \xe9 avaliada como indefinida. Por exemplo:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myString:=Caixa min\xfascula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que n\xe3o esteja definido\n  // para evitar erros no c\xf3digo\n"))),(0,a.kt)("h2",r({},{id:"operadores-null"}),"Operadores Null"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"valor escalar")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"valor escalar")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("p",null,"Os ",(0,a.kt)("em",{parentName:"p"},"valores escalares")," s\xe3o valores do tipo string, Date, Time, Boolean, number, ou Blob. Quando declarado, o seu  ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/data-types#default-values"}),"valor por padr\xe3o")," n\xe3o \xe9 indefinido nem nulo. Outros tipos (Ponteiro, Imagem, Objecto, Colec\xe7\xe3o) t\xeam valor por defeito indefinido ou nulo. Ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n')),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Compara\xe7\xf5es com os operadores Maior que (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Menor que (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Maior ou igual a (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), e Menor ou igual a (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") n\xe3o s\xe3o suportados com valores Nulos e devolvem um erro.")),(0,a.kt)("h2",r({},{id:"operadores-indefinidos"}),"Operadores indefinidos"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," c.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"outros valores")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"outros valores")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maior que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"outros valores")," s\xe3o express\xf5es de qualquer tipo com um valor nem Indefinido nem Null."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Compara\xe7\xf5es de valores Indefinidos com Pontos, Imagem, Blob, Objecto, Colec\xe7\xe3o, Valores Indefinidos ou Nulos utilizando valores Maiores que (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Menos que (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Maiores ou iguais a (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), e Menos ou iguais a (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") os operadores n\xe3o s\xe3o suportados e devolvem um erro.")),(0,a.kt)("h2",r({},{id:"exemplos"}),"Exemplos"),(0,a.kt)("p",null,"Aqu\xed est\xe3o os diferentes resultados do comando ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," assim como do comando ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," com as propriedades dos objetos, dependendo do contexto:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // False\n$null:=($vEmp.name=Null) //False\n\n$undefined:=Undefined($vEmp.children) // False\n$null:=($vEmp.children=Null) //True\n\n$undefined:=Undefined($vEmp.parent) // True\n$null:=($vEmp.parent=Null) //True\n')),(0,a.kt)("p",null,"Exemplos de resultados de compara\xe7\xe3o com valores indefinidos e nulos:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $result : Booleano\nvar $vObj : Objecto\nvar $vVar : Variante\n\n$vObj:=Novo objecto\n$vObj.null:=Nulo\n// nota que $vVar n\xe3o est\xe1 atribu\xeddo \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar) //True\n\n$result:=($vObj.indefinido#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.indefinido>"ol\xe1") //Falso\n$result:=($vObj.indefinido>$vVar) //Error\n$result:=($vObj.indefinido>$vObj.nulo) //Error\n$result:=($vVar < 42) //Falso\n\n')))}s.isMDXComponent=!0}}]);