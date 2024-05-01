"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36271],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},774175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"from-qodlyscript-to-4d",title:"De QodlyScript al lenguaje 4D"},i=void 0,d={unversionedId:"WebServer/from-qodlyscript-to-4d",id:"version-20-R5/WebServer/from-qodlyscript-to-4d",title:"De QodlyScript al lenguaje 4D",description:"4D developers use the Qodly Studio documentation to learn how to design their Qodly forms in Qodly Studio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/WebServer/from-qodlyscript-to-4d.md",sourceDirName:"WebServer",slug:"/WebServer/from-qodlyscript-to-4d",permalink:"/docs/es/WebServer/from-qodlyscript-to-4d",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"from-qodlyscript-to-4d",title:"De QodlyScript al lenguaje 4D"},sidebar:"docs",previous:{title:"Qodly Studio for 4D",permalink:"/docs/es/WebServer/qodly-studio"},next:{title:"REST API",permalink:"/docs/es/category/rest-api"}},s={},p=[{value:"Nombres de variables",id:"nombres-de-variables",level:2},{value:"S\xedmbolos y palabras clave",id:"s\xedmbolos-y-palabras-clave",level:2},{value:"Command and Constant names",id:"command-and-constant-names",level:2},{value:"Ejemplo",id:"ejemplo",level:3}],c={toc:p};function u(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D developers use the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/overview"}),"Qodly Studio documentation")," to learn how to design their Qodly forms in Qodly Studio."),(0,a.kt)("p",null,"Code examples are provided in ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/category/qodlyscript"}),"QodlyScript"),", but since QodlyScript inherits from the 4D Language, you won't be lost. Convertir c\xf3digo QodlyScript a lenguaje 4D es f\xe1cil, s\xf3lo requiere algunas adaptaciones."),(0,a.kt)("h2",r({},{id:"nombres-de-variables"}),"Nombres de variables"),(0,a.kt)("p",null,"QodlyScript solo admite variables locales, por lo que las variables en los ejemplos de QodlyScript no llevan el prefijo ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),". En el c\xf3digo 4D, aseg\xfarese de ",(0,a.kt)("strong",{parentName:"p"},"prefijar los nombres de las variables con $")," para que sean identificadas como variables locales por 4D."),(0,a.kt)("h2",r({},{id:"s\xedmbolos-y-palabras-clave"}),"S\xedmbolos y palabras clave"),(0,a.kt)("p",null,"Algunos s\xedmbolos b\xe1sicos, operadores y palabras clave difieren en QodlyScript y deben adaptarse al Lenguaje 4D. Estas se listan a continuaci\xf3n:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"QodlyScript"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Lenguaje 4D"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),","),(0,a.kt)("td",r({parentName:"tr"},{align:null}),";"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"separador de argumentos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",r({parentName:"tr"},{align:null}),":="),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"operador de asignaci\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"operador de comparaci\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"declare"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"#Declare"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"switch"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Case of"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"constructor"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Class constructor"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"extends"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Class extends"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"end"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"End for, End For each, End if, End case, End use, End while"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"forEach"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"For each"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"tipo de variable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"tipo de variable")))),(0,a.kt)("p",null,"Algunos otros elementos tienen una capitalizaci\xf3n diferente (por ejemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"This"),"), pero se pueden pegar directamente en c\xf3digo de 4D."),(0,a.kt)("h2",r({},{id:"command-and-constant-names"}),"Command and Constant names"),(0,a.kt)("p",null,"Los nombres de comandos y constantes de QodlyScript se escriben en may\xfasculas y sin espacios. Adem\xe1s, los nombres de las constantes de QodlyScript comienzan con la letra ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),". Puede que necesite adaptar estos elementos de QodlyScript al lenguaje 4D."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Normalmente, s\xf3lo tendr\xe1 que convertir los nombres. Por ejemplo, ",(0,a.kt)("inlineCode",{parentName:"li"},"newCollection")," en QodlyScript es ",(0,a.kt)("inlineCode",{parentName:"li"},"New collection")," en lenguaje 4D."),(0,a.kt)("li",{parentName:"ul"},"However, some commands have been renamed for a better compliance, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"atan")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"sqrt")," are QodlyScript names for ",(0,a.kt)("inlineCode",{parentName:"li"},"Arctan")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Square root")," commands in 4D Language.")),(0,a.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xf3digo QodlyScript:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-qs"})," declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C\xf3digo 4D equivalente:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n")))}u.isMDXComponent=!0}}]);