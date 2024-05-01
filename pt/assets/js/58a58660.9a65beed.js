"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59646],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},489092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"date",title:"Date"},s=void 0,i={unversionedId:"Concepts/date",id:"version-20-R5/Concepts/date",title:"Date",description:"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/pt/Concepts/date",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/pt/Concepts/collection"},next:{title:"Null e indefinido",permalink:"/docs/pt/Concepts/null-undefined"}},d={},p=[{value:"Constantes literais de tipo hora",id:"constantes-literais-de-tipo-hora",level:2},{value:"Operadores de data",id:"operadores-de-data",level:2}],u={toc:p};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767."),(0,n.kt)("p",null,"Apesar do modo de representa\xe7\xe3o de datas de C_DATE permitir trabalhar com datas at\xe9 o ano 32 767, certas opera\xe7\xf5es que passam pelo sistema imp\xf5e um limite inferior."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise."),(0,n.kt)("h2",r({},{id:"constantes-literais-de-tipo-hora"}),"Constantes literais de tipo hora"),(0,n.kt)("p",null,"Uma constante literal de tipo data est\xe1 cercada de sinais de exclama\xe7\xe3o (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n")),(0,n.kt)("p",null,"A null date is specified by ",(0,n.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tip:")," The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Por raz\xf5es de compatibilidade, 4D aceita que coloque anos como datas com apenas dois d\xedgitos. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,n.kt)("inlineCode",{parentName:"li"},"SET DEFAULT CENTURY")," command."),(0,n.kt)("li",{parentName:"ul"},'Se marcou a op\xe7\xe3o "Utilizar a configura\xe7\xe3o regional del sistema" ( ver P\xe1gina M\xe9todos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas s\xe3o digitadas no formato m\xeas/dia/ano, com uma barra "/" separando os valores.')),(0,n.kt)("h2",r({},{id:"operadores-de-data"}),"Operadores de data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Diferen\xe7a de data"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date - Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Acr\xe9scimo de dia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Data + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-29!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtrair dia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Data - N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-11!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date = Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! = !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"    ||  ||!2017-01-20! = !2017-01-01!   |False|\n")),(0,n.kt)("p",null,"|Inequality\t|Date # Date\t|Boolean\t|!2017-01-20! !2017-01-20!\t|True|\n||||!2017-01-20! !2017-01-20!\t|False|\n|Greater than\t|Date > Date\t|Boolean\t|!2017-01-20! > !2017-01-01!\t|True|\n||||!2017-01-20! > !2017-01-20!\t|False|\n|Less than\t|Date < Date\t|Boolean\t|!2017-01-01! < !2017-01-20!\t|True|\n||||!2017-01-20! < !2017-01-20!\t|False|\n|Greater than or equal to\t|Date >= Date\t|Boolean\t|!2017-01-20! >=!2017-01-01!\t|True|\n||||!2017-01-01!>=!2017-01-20!\t|False|\n|Less than or equal to\t|Date <= Date\t|Boolean\t|!2017-01-01! <= !2017-01-20!|\tTrue|\n||||\t!2017-01-20! <= !2017-01-01!|\tFalse|"))}c.isMDXComponent=!0}}]);