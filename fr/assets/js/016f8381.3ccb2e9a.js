"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10565],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),c=a,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},447651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(667294);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"print",title:"Imprimer"},l=void 0,p={unversionedId:"FormEditor/print",id:"version-20-R3/FormEditor/print",title:"Imprimer",description:"Settings",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/fr/FormEditor/print",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"print",title:"Imprimer"},sidebar:"docs",previous:{title:"Menu",permalink:"/docs/fr/FormEditor/menu"},next:{title:"Window Size",permalink:"/docs/fr/FormEditor/windowSize"}},m={},s=[{value:"Settings",id:"settings",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}],u={toc:s};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"settings"}),"Settings"),(0,n.kt)("p",null,"Permet de d\xe9finir des param\xe8tres d'impression sp\xe9cifiques pour le formulaire. Cette fonctionnalit\xe9 est utile pour afficher les limites de pages d'impression dans l'\xe9diteur de formulaire."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibilit\xe9")," : M\xeame si ces param\xe8tres sont pris en compte lors de l'impression du formulaire en mode Application, il est d\xe9conseill\xe9 de s'appuyer sur cette fonctionnalit\xe9 pour stocker les param\xe8tres d'impression du formulaire, en raison des limitations li\xe9es \xe0 la plateforme et au pilote. It is highly recommended to use the 4D commands ",(0,n.kt)("inlineCode",{parentName:"p"},"Print settings to BLOB"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB to print settings")," which are more powerful.")),(0,n.kt)("p",null,"You can modify the following print settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Paper format"),(0,n.kt)("li",{parentName:"ul"},"Paper orientation"),(0,n.kt)("li",{parentName:"ul"},"Page scaling")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Available options depend on the system configuration.")),(0,n.kt)("h4",a({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"pageFormat"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Available print properties: paperName, paperWidth, paperHeight, orientation, scale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperName"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"A4", "US Letter"...')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"orientation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"landscape" (default is "portrait")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"scale"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"minimum : 0")))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);