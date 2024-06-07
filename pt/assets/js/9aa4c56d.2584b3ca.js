"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98550],{603905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},658017:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});a(667294);var n=a(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"date",title:"Date"},i=void 0,d={unversionedId:"Concepts/date",id:"version-19/Concepts/date",title:"Date",description:"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/pt/19/Concepts/date",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/pt/19/Concepts/collection"},next:{title:"Null e indefinido",permalink:"/docs/pt/19/Concepts/null-undefined"}},p={},u=[{value:"Constantes literais de tipo hora",id:"constantes-literais-de-tipo-hora",level:2},{value:"Operadores de data",id:"operadores-de-data",level:2}],s={toc:u};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767."),(0,n.kt)("p",null,"Apesar do modo de representa\xe7\xe3o de datas de C_DATE permitir trabalhar com datas at\xe9 o ano 32 767, certas opera\xe7\xf5es que passam pelo sistema imp\xf5e um limite inferior."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," No manual 4D Language Reference, par\xe2metros Data em descri\xe7\xf5es de comando s\xe3o  denominadas como Data, exceto quando marcadas de outra forma."),(0,n.kt)("h2",r({},{id:"constantes-literais-de-tipo-hora"}),"Constantes literais de tipo hora"),(0,n.kt)("p",null,"Uma constante literal de tipo data est\xe1 cercada de sinais de exclama\xe7\xe3o (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n")),(0,n.kt)("p",null,"Uma data nula \xe9 especificada por ",(0,n.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," O editor de m\xe9todos inclui um acesso direto para introduzir uma data nula. Para escrever uma data nula, introduza o caractere de exclama\xe7\xe3o (!) e aperte Enter.."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. Se pressup\xf5e que um ano com apenas dois digitos esteja no s\xe9culo XX ou XXI, dependendo se for maior ou menor de 30, a menos que mude essa configura\xe7\xe3o com o comando ",(0,n.kt)("inlineCode",{parentName:"li"},"SET DEFAULT CENTURY"),"."),(0,n.kt)("li",{parentName:"ul"},'Se marcou a op\xe7\xe3o "Utilizar a configura\xe7\xe3o regional del sistema" ( ver P\xe1gina M\xe9todos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas s\xe3o digitadas no formato m\xeas/dia/ano, com uma barra "/" separando os valores.')),(0,n.kt)("h2",r({},{id:"operadores-de-data"}),"Operadores de data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Diferen\xe7a de data"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date - Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Acr\xe9scimo de dia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Data + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-29!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtrair dia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Data - N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-11!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date = Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! = !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date # Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date > Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date < Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date >= Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!>=!2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date <= Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! <= !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! <= !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))))}m.isMDXComponent=!0}}]);