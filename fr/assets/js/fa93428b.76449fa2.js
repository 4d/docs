"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77410],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=o(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60918:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={id:"data-types",title:"Types de donn\xe9es"},d=void 0,p={unversionedId:"Concepts/data-types",id:"version-19-R8/Concepts/data-types",title:"Types de donn\xe9es",description:"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/fr/Concepts/data-types",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"data-types",title:"Types de donn\xe9es"},sidebar:"docs",previous:{title:"Op\xe9rateurs",permalink:"/docs/fr/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/fr/Concepts/blob"}},o={},u=[{value:"Valeurs par d\xe9faut",id:"valeurs-par-d\xe9faut",level:2},{value:"Convertir les types de donn\xe9es",id:"convertir-les-types-de-donn\xe9es",level:2}],m={toc:u};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans 4D, les donn\xe9es sont g\xe9r\xe9es selon leur type \xe0 deux endroits : dans les champs de la base et dans le langage 4D."),(0,a.kt)("p",null,"Bien qu'ils soient g\xe9n\xe9ralement \xe9quivalents, certains types de donn\xe9es de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de donn\xe9es sont g\xe9r\xe9s uniquement par le langage. Le tableau suivant liste tous les types de donn\xe9es disponibles, leur prise en charge et leur d\xe9claration :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Types de donn\xe9es"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Pris en charge par la base(1)"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Pris en charge par le langage"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"th"},{href:"/docs/fr/Concepts/variables#using-the-var-keyword"}),"d\xe9claration ",(0,a.kt)("inlineCode",{parentName:"a"},"var"))),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"th"},{href:"/docs/fr/Concepts/variables#using-a-c_-directive"}),"d\xe9claration ",(0,a.kt)("inlineCode",{parentName:"a"},"C_")," ou ",(0,a.kt)("inlineCode",{parentName:"a"},"ARRAY"))))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/string"}),"Alphanum\xe9rique")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Converti en texte"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/string"}),"Text")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Text")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_TEXT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY TEXT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/date"}),"Date")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Date")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_DATE"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY DATE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/time"}),"Time")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Time")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_TIME"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY TIME"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/boolean"}),"Boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_BOOLEAN"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY BOOLEAN"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/number"}),"Integer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Converti en entier long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY INTEGER"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/number"}),"Longint")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY LONGINT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/number"}),"Longint 64 bits")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (SQL)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Converti en r\xe9el"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/number"}),"Real")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Real")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_REAL"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY REAL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/null-undefined"}),"Undefined")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/null-undefined"}),"Null")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/pointer"}),"Pointer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Pointer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_POINTER"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY POINTER"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/picture"}),"Picture")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Picture")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_PICTURE"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY PICTURE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/blob"}),"BLOB")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Blob"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_BLOB"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY BLOB"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/object"}),"Object")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_OBJECT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ARRAY OBJECT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/collection"}),"Collection")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Collection")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_COLLECTION"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/fr/Concepts/variant"}),"Variant"),"(2)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Variant")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"C_VARIANT"))))),(0,a.kt)("p",null,"(1) A noter que ORDA g\xe8re les champs de la base via des objets (entit\xe9s). Par cons\xe9quent, seuls les types de donn\xe9es disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter \xe0 la description du type ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/object"}),"Objet"),"."),(0,a.kt)("p",null,"(2) Le variant n'est pas un type de ",(0,a.kt)("em",{parentName:"p"},"donn\xe9es")," un type de ",(0,a.kt)("em",{parentName:"p"},"variable")," qui peut contenir une valeur de n'importe quel autre type."),(0,a.kt)("h2",r({},{id:"valeurs-par-d\xe9faut"}),"Valeurs par d\xe9faut"),(0,a.kt)("p",null,"Lorsque les variables ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/variables"}))," ou les param\xe8tres ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/parameters"}))," sont typ\xe9s au moyen d'une d\xe9claration explicite ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/variables#declaration-des-variables"})),", ils re\xe7oivent une valeur par d\xe9faut, qu'ils conserveront pendant la session tant qu'ils n'auront pas \xe9t\xe9 assign\xe9s."),(0,a.kt)("p",null,"La valeur par d\xe9faut d\xe9pend du type de variable :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"La valeur par d\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Bool\xe9en"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"00-00-00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Longint"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"00:00:00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"picture size=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Pointer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nil=true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob size=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Variant"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")))),(0,a.kt)("h2",r({},{id:"convertir-les-types-de-donn\xe9es"}),"Convertir les types de donn\xe9es"),(0,a.kt)("p",null,'Le langage de 4D comporte des fonctions et des op\xe9rateurs vous permettant de convertir des types de donn\xe9es en d\u2019autres types, dans la mesure o\xf9 de telles conversions ont un sens. 4D assure la v\xe9rification des types de donn\xe9es. Ainsi, vous ne pouvez pas \xe9crire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette op\xe9ration g\xe9n\xe8re une erreur de syntaxe.'),(0,a.kt)("p",null,"Le tableau ci-dessous liste les types de donn\xe9es pouvant \xeatre convertis, le type dans lequel ils peuvent \xeatre convertis, ainsi que les fonctions 4D \xe0 utiliser :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Types \xe0 convertir"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"en Cha\xeene"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"en Num\xe9rique"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"en Date"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"en Heure"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"en Bool\xe9en"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cha\xeene (1)"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Num")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Date")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Time")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Num\xe9rique (2)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Num")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,"(1) Les cha\xeenes format\xe9es en JSON peuvent \xeatre converties en donn\xe9es scalaires, objets ou collections \xe0 l'aide de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON Parse"),"."),(0,a.kt)("p",null,"(2) Les valeurs de type Heure peuvent \xeatre utilis\xe9es en tant que num\xe9riques."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Ce tableau ne traite pas les conversions de donn\xe9es plus complexes obtenues \xe0 l'aide d'une combinaison d'op\xe9rateurs et d'autres commandes."))}s.isMDXComponent=!0}}]);