"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50388],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6908:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={id:"time",title:"Hora"},i=void 0,p={unversionedId:"Concepts/time",id:"version-20-R2/Concepts/time",title:"Hora",description:"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 0000 y 596,00000.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/es/20-R2/Concepts/time",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"time",title:"Hora"},sidebar:"docs",previous:{title:"String",permalink:"/docs/es/20-R2/Concepts/string"},next:{title:"Variant",permalink:"/docs/es/20-R2/Concepts/variant"}},u={},d=[{value:"Constantes literales de tipo hora",id:"constantes-literales-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:3},{value:"Ejemplo 2",id:"ejemplo-2",level:3}],m={toc:d};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00."),(0,a.kt)("p",null,"Las horas est\xe1n en formato de 24 horas."),(0,a.kt)("p",null,"Un valor de tiempo puede ser tratado como un n\xfamero. El n\xfamero devuelto de una hora es el n\xfamero de segundos desde la medianoche (00:00:00) que representa esa hora."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nota:")," en el manual de ",(0,a.kt)("em",{parentName:"p"},"referencia del lenguaje 4D"),", los par\xe1metros de tipo Hora en las descripciones de los comandos se llaman Hora, excepto cuando se indique lo contrario."),(0,a.kt)("h2",r({},{id:"constantes-literales-de-tipo-hora"}),"Constantes literales de tipo hora"),(0,a.kt)("p",null,"Una constante hora est\xe1 rodeada de signos de interrogaci\xf3n (?...?)."),(0,a.kt)("p",null,"Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas."),(0,a.kt)("p",null,"Estos son algunos ejemplos de constantes de tipo hora:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"?00:00:00? ?00:00:00? ?00:00:00? ` media noche\n?09:30:00? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n")),(0,a.kt)("p",null,"Una hora nula se escribe ?00:00:00?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consejo:")," el Editor de c\xf3digo incluye un acceso directo para introducir una hora null. Para escribir una hora nula, introduzca el car\xe1cter de interrogante (?) y pulse Intro."),(0,a.kt)("h2",r({},{id:"operadores-de-horas"}),"Operadores de horas"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora + Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? + ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?03:05:07?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \u2013 ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:01:01?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora + N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? + 65"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"7449")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \u2013 65"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"7319")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Multiplicaci\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora * N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? * 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"14768")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora / N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? / 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n entera"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \\ N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \\ 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora % Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:50:00?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora % N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? % 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora = Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? = ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? = ?01:02:04?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdad"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora # Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? # ?01:02:04?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? # ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mayor que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora > Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? # ?01:02:04? ?01:02:03? ?01:02:04? > ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? ?01:02:04? > ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora < Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? < ?01:02:04?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? < ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mayor o igual que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora >= Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? >=?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:04? > ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Menor o igual que"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora <= Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? <=?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? # ?01:02:04? ?01:02:03? <=?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("h3",r({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,a.kt)("p",null,"Para obtener una expresi\xf3n de tipo hora a partir de una expresi\xf3n que combina una expresi\xf3n de hora con un n\xfamero, utilice los comandos ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,a.kt)("p",null,"Puede combinar expresiones de los tipos hora y n\xfamero utilizando las funciones ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"Current time"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"    //La siguiente l\xednea asigna a $vlSeconds el n\xfamero de segundos   \n    //que transcurrir\xe1n entre la medianoche y una hora a partir de ahora\n$vlSeconds:=Current time+3600\n    //La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 dentro de una hora\n$vhSoon:=Time(Current time+3600)\n")),(0,a.kt)("p",null,"La segunda l\xednea podr\xeda escribirse de forma m\xe1s sencilla:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 en una hora\n $vhSoon:=Current time+?01:00:00?\n")),(0,a.kt)("h3",r({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,a.kt)("p",null,"El operador Modulo puede utilizarse, m\xe1s concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$t1:=?23:00:00? // Son las 23:00 p.m. $t1:=?23:00:00? // It is 23:00 hours\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning // Con una simple adici\xf3n, $t2 es ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 es ?01:30:00? y es la 1:30 de la ma\xf1ana siguiente\n")))}s.isMDXComponent=!0}}]);