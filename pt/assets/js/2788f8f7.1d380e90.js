"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20],{603905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(i,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},483217:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(667294);var n=a(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"data-types",title:"Tipos de dados"},d=void 0,i={unversionedId:"Concepts/data-types",id:"version-20-R3/Concepts/data-types",title:"Tipos de dados",description:"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/pt/20-R3/Concepts/data-types",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"data-types",title:"Tipos de dados"},sidebar:"docs",previous:{title:"Operadores",permalink:"/docs/pt/20-R3/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/pt/20-R3/Concepts/blob"}},p={},m=[{value:"Valor padr\xe3o",id:"valor-padr\xe3o",level:2},{value:"Null as default value",id:"null-as-default-value",level:3},{value:"Convers\xe3o de tipos de dados",id:"convers\xe3o-de-tipos-de-dados",level:2}],s={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D."),(0,n.kt)("p",null,"Apesar de geralmente serem equivalentes, alguns tipos de dados dispon\xedveis no n\xedvel do banco de dados n\xe3o est\xe3o diretamente dispon\xedveis na linguagem e s\xe3o convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados atrav\xe9s da linguagem. A tabela lista todos os tipos de dados dispon\xedveis e sua compatibilidade/declara\xe7\xf5es:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de dados"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Suporte para o banco (1)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Suporte Linguagem"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/pt/20-R3/Concepts/variables#using-the-var-keyword"}),"Declara\xe7\xe3o de vari\xe1veis")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/pt/20-R3/Concepts/variables#using-a-c_-directive"}),'"a um valor aleat\xf3rio": 0x72677267 para n\xfameros e horas, sempre True para booleanos, igual que "em zero" para os outros,')))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/string"}),"Alfanum\xe9rico")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido em texto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/string"}),"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TEXT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TEXTO"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/date"}),"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_DATE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY DATE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/time"}),"Hora")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Hora")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TIME"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TIME"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/boolean"}),"Par\xe2metros")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Par\xe2metros")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BOOLEAN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BOOLEAN"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/number"}),"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido para longInt"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY INTEGER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/number"}),"Longint")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY LONGINT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/number"}),"Inteiro longo 64 bits")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim (SQL)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido para real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/number"}),"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_REAL"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY REAL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/null-undefined"}),"Indefinido")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/null-undefined"}),"Null")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/pointer"}),"Ponteiro")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Ponteiro")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_POINTER"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY POINTER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/picture"}),"Imagem")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Imagem")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_PICTURE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY PICTURE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/blob"}),"BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"4D. Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BLOB"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BLOB"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/object"}),"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_OBJECT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY OBJECT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/collection"}),"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_COLLECTION"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20-R3/Concepts/variant"}),"Variant"),"(2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Diferente de")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_VARIANT"))))),(0,n.kt)("p",null,"(1) Note que ORDA maneja campos de bancos de dados atrav\xe9s de objetos (entidades) e assim, s\xf3 \xe9 compat\xedvel com tipos de dados dispon\xedveis a esses objetos. Para saber mais, veja a descri\xe7\xe3o de tipo de dados ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/object"}),"Object"),"."),(0,n.kt)("p",null,"(2) Variante n\xe3o \xe9 um tipo ",(0,n.kt)("em",{parentName:"p"},"data")," mas um tipo ",(0,n.kt)("em",{parentName:"p"},"vari\xe1vel")," que cont\xe9m um valor de qualquer outro tipo de dados."),(0,n.kt)("h2",r({},{id:"valor-padr\xe3o"}),"Valor padr\xe3o"),(0,n.kt)("p",null,"Quando as ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/variables"}),"vari\xe1veis")," ou ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/parameters"}),"par\xe2metros")," s\xe3o digitados por meio de uma ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R3/Concepts/variables#declaring-variables"}),"declara\xe7\xe3o expl\xedcita"),", recebem um valor por defeito, que manter\xe3o durante a sess\xe3o enquanto n\xe3o lhes for atribu\xeddo."),(0,n.kt)("p",null,"O valor por defeito depende do tipo de vari\xe1vel:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor padr\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00-00-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Longint"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Imagem"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tamanho da imagem=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ponteiro"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nil=true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tamanho do Blob =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Diferente de"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"indefinido")))),(0,n.kt)("h3",r({},{id:"null-as-default-value"}),"Null as default value"),(0,n.kt)("p",null,"Variables of type Object, Collection, Pointer, and Picture have ",(0,n.kt)("strong",{parentName:"p"},"null")," as default value, but actually get an intermediary status when declared and not assigned. They ",(0,n.kt)("em",{parentName:"p"},"behave like")," ",(0,n.kt)("strong",{parentName:"p"},"null")," values, but with some differences, generating less errors when the code tries do access them."),(0,n.kt)("h2",r({},{id:"convers\xe3o-de-tipos-de-dados"}),"Convers\xe3o de tipos de dados"),(0,n.kt)("p",null,'A linguagem 4D cont\xe9m operadores e comandos para converter entre tipos de dados, onde tais convers\xf5es s\xe3o significativas. A l\xedngua 4D obriga \xe0 verifica\xe7\xe3o do tipo de dados. Por exemplo, n\xe3o se pode escrever: "abc"+0.5+!12/25/96!-?00:30:45?. Isto ir\xe1 gerar erros de sintaxe.'),(0,n.kt)("p",null,"O quadro seguinte lista os tipos de dados b\xe1sicos, os tipos de dados para os quais podem ser convertidos, e os comandos utilizados para o fazer:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados a converter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"para String"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"para N\xfamero"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"para Data"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"para Tempo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"para Booleano"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String (1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Hora")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero (2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,"(1) Strings formatadas em JSON podem ser convertidas em dados escalares, objetos ou cole\xe7\xf5es, usando o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON Parse")),(0,n.kt)("p",null,"(2) Os valores de tempo podem ser tratados como n\xfameros."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," Al\xe9m das convers\xf5es de dados listadas nesta tabela. Convers\xf5es de dados mais sofisticadas podem ser obtidas combinando operadores e outros comandos."))}u.isMDXComponent=!0}}]);