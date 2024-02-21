"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44697],{603905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},422741:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});a(667294);var n=a(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"data-types",title:"Tipos de datos"},i=void 0,d={unversionedId:"Concepts/data-types",id:"version-20-R4/Concepts/data-types",title:"Tipos de datos",description:"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/es/Concepts/data-types",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"data-types",title:"Tipos de datos"},sidebar:"docs",previous:{title:"Operators",permalink:"/docs/es/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/es/Concepts/blob"}},p={},m=[{value:"Valores por defecto",id:"valores-por-defecto",level:2},{value:"Null como valor por defecto",id:"null-como-valor-por-defecto",level:3},{value:"Convertir los tipos de datos",id:"convertir-los-tipos-de-datos",level:2}],s={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"En 4D, los datos se manejan seg\xfan su tipo en dos lugares: los campos de la base y el lenguaje 4D."),(0,n.kt)("p",null,"Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no est\xe1n disponibles directamente en el lenguaje y se convierten autom\xe1ticamente. Por el contrario, algunos tipos de datos s\xf3lo pueden manejarse a trav\xe9s del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y c\xf3mo se soportan/declaran:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Soporte para la base (1)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Soporte para el lenguaje"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/es/Concepts/variables#using-the-var-keyword"}),(0,n.kt)("inlineCode",{parentName:"a"},"var")," declaration")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/es/Concepts/variables#using-a-c_-directive"}),(0,n.kt)("inlineCode",{parentName:"a"},"C_")," or ",(0,n.kt)("inlineCode",{parentName:"a"},"ARRAY")," declaration")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/string"}),"Alphanumeric")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido en texto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/string"}),"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TEXT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TEXT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/date"}),"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_DATE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY DATE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/time"}),"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TIME"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TIME"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/boolean"}),"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BOOLEAN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BOOLEAN"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/number"}),"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido en entero largo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY INTEGER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/number"}),"Longint")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY LONGINT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/number"}),"Longint 64 bits")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed (SQL)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Convertido en real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/number"}),"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_REAL"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY REAL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/null-undefined"}),"Undefined")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/null-undefined"}),"Null")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/pointer"}),"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_POINTER"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY POINTER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/picture"}),"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_PICTURE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY PICTURE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/blob"}),"BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BLOB"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BLOB"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/object"}),"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_OBJECT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY OBJECT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/collection"}),"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_COLLECTION"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/es/Concepts/variant"}),"Variant"),"(2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Variant")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_VARIANT"))))),(0,n.kt)("p",null,"(1) Tenga en cuenta que ORDA maneja los campos de la base a trav\xe9s de objetos (entidades) y por lo tanto, s\xf3lo soporta los tipos de datos disponibles para estos objetos. For more information, see the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/object"}),"Object")," data type description."),(0,n.kt)("p",null,"(2) Variant is actually not a ",(0,n.kt)("em",{parentName:"p"},"data")," type but a ",(0,n.kt)("em",{parentName:"p"},"variable")," type that can contain a value of any other data type."),(0,n.kt)("h2",r({},{id:"valores-por-defecto"}),"Valores por defecto"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/variables"}),"variables")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/parameters"}),"parameters")," are typed by means of an ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/variables#declaring-variables"}),"explicit declaration"),", they receive a default value, which they will keep during the session as long as they have not been assigned."),(0,n.kt)("p",null,"El valor por defecto depende del tipo de variable:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor por defecto"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00-00-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Longint"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture size=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Puntero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nil=true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tama\xf1o Blob=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Variant"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"indefinido")))),(0,n.kt)("h3",r({},{id:"null-como-valor-por-defecto"}),"Null como valor por defecto"),(0,n.kt)("p",null,"Variables of type Object, Collection, Pointer, and Picture have ",(0,n.kt)("strong",{parentName:"p"},"null")," as default value, but actually get an intermediary status when declared and not assigned. They ",(0,n.kt)("em",{parentName:"p"},"behave like")," ",(0,n.kt)("strong",{parentName:"p"},"null")," values, but with some differences, generating less errors when the code tries do access them."),(0,n.kt)("h2",r({},{id:"convertir-los-tipos-de-datos"}),"Convertir los tipos de datos"),(0,n.kt)("p",null,'El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificaci\xf3n de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generar\xe1 errores de sintaxis.'),(0,n.kt)("p",null,"La siguiente tabla lista los tipos de datos b\xe1sicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos a convertir"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"en Cadena"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"en N\xfamero"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"en Fecha"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"en Hora"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"en Booleano"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String (1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero (2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,"(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON Parse")," command."),(0,n.kt)("p",null,"(2) Los valores de tipo Hora pueden tratarse como n\xfameros."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands."))}u.isMDXComponent=!0}}]);