"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36037],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"action",title:"Action"},l=void 0,s={unversionedId:"FormEditor/action",id:"version-20-R5/FormEditor/action",title:"Action",description:"M\xe9thode",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/fr/FormEditor/action",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"Form JSON property list",permalink:"/docs/fr/FormEditor/jsonReference"},next:{title:"Propri\xe9t\xe9s des formulaires",permalink:"/docs/fr/FormEditor/propertiesForm"}},p={},m=[{value:"M\xe9thode",id:"m\xe9thode",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}],u={toc:m};function c(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"m\xe9thode"}),"M\xe9thode"),(0,n.kt)("p",null,"R\xe9f\xe9rence d'une m\xe9thode associ\xe9e au formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure. See ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/Concepts/methods#specialized-methods"}),"Specialized methods"),"."),(0,n.kt)("p",null,"Vous n'appelez pas de m\xe9thode formulaire - 4D l'appelle automatiquement lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e."),(0,n.kt)("p",null,"Plusieurs types de r\xe9f\xe9rences de m\xe9thode sont pris en charge :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a standard project method file path, i.e. that uses the following pattern:\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"method.4dm"),'\\\nThis type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,n.kt)("em",{parentName:"p"},"numTable"),"} | {Forms}/",(0,n.kt)("em",{parentName:"p"},"formName"),'/"). Dans ce cas, 4D g\xe8re automatiquement la m\xe9thode formulaire lorsque des op\xe9rations sont ex\xe9cut\xe9es sur le formulaire (renommage, duplication, copier/coller, etc.)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.:\n",(0,n.kt)("inlineCode",{parentName:"p"},"myMethod"),"\nIn this case, 4D does not provide automatic support for form operations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"MyMethods/myFormMethod.4dm"),"\nYou can also use a filesystem:\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Forms/FormMethod.4dm"),"\nIn this case, 4D does not provide automatic support for object operations."))),(0,n.kt)("h4",o({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"method"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Chemin standard ou personnalis\xe9 de la m\xe9thode formulaire ou nom de la m\xe9thode projet")))))}c.isMDXComponent=!0}}]);