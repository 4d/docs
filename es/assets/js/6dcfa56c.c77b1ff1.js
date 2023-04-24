"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"boolean",title:"Boolean"},p=void 0,i={unversionedId:"Concepts/boolean",id:"version-19-R8/Concepts/boolean",title:"Boolean",description:"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/es/19-R8/Concepts/boolean",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/es/19-R8/Concepts/blob"},next:{title:"Collection",permalink:"/docs/es/19-R8/Concepts/collection"}},u={},s=[{value:"Funciones booleanas",id:"funciones-booleanas",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Operadores l\xf3gicos",id:"operadores-l\xf3gicos",level:2}],d={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE."),(0,a.kt)("h2",r({},{id:"funciones-booleanas"}),"Funciones booleanas"),(0,a.kt)("p",null,"4D ofrece las funciones booleanas ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Not")," en el tema dedicado ",(0,a.kt)("strong",{parentName:"p"},"Booleanos"),". Para m\xe1s informaci\xf3n, consulte las descripciones de estos comandos."),(0,a.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"Este ejemplo define una variable booleana basada en el valor de un bot\xf3n. Devuelve True en myBoolean si el bot\xf3n myButton fue presionado y False si el bot\xf3n no fue presionado. Cuando se hace clic en un bot\xf3n, la variable del bot\xf3n toma el valor 1."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(myButton=1) //Si se ha presionado el bot\xf3n\n    myBoolean:=True //myBoolean toma el valor True\n Else //Si el bot\xf3n no fue pulsado\n    myBoolean:=False //myBoolean toma el valor False\n End if\n")),(0,a.kt)("p",null,"El ejemplo anterior puede simplificarse en una l\xednea."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"myBoolean:=(myButton=1)\n")),(0,a.kt)("h2",r({},{id:"operadores-l\xf3gicos"}),"Operadores l\xf3gicos"),(0,a.kt)("p",null,"4D soporta dos operadores l\xf3gicos que trabajan sobre expresiones booleanas: la conjunci\xf3n (AND) y la disyunci\xf3n inclusiva (OR). Un AND l\xf3gico devuelve TRUE si ambas expresiones son TRUE. Un OR l\xf3gico devuelve TRUE si al menos una de las expresiones es TRUE. La siguiente tabla muestra los operadores l\xf3gicos:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"AND"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Booleano & Booleano"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Booleano  ","|"," Booleano"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"La siguiente es la tabla de verdad del operador l\xf3gico AND:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"La siguiente es la tabla de verdad del operador l\xf3gico OR:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consejo:")," si necesita calcular la conjunci\xf3n exclusiva entre Expr1 y Expr2, escriba:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En contextos booleanos, el lenguaje 4D tambi\xe9n soporta los operadores ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/Concepts/operators#short-circuit-operators"}),"cortocircuitos")," (",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),") y el concepto ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/Concepts/operators#truthy-and-falsy"}),"truthy y falsy"),".")))}m.isMDXComponent=!0}}]);