"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(r),c=a,f=s["".concat(u,".").concat(c)]||s[c]||d[c]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},11663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"windowSize",title:"Window Size"},o=void 0,u={unversionedId:"FormEditor/windowSize",id:"version-20-R2/FormEditor/windowSize",title:"Window Size",description:"Hauteur fixe",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/fr/20-R2/FormEditor/windowSize",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_WindowSize.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"windowSize",title:"Window Size"},sidebar:"docs",previous:{title:"Imprimer",permalink:"/docs/fr/20-R2/FormEditor/print"},next:{title:"Objets de formulaire",permalink:"/docs/fr/20-R2/FormObjects/formObjectsOverview"}},m={},p=[{value:"Hauteur fixe",id:"hauteur-fixe",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Largeur fixe",id:"largeur-fixe",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Hauteur maxi, Hauteur mini",id:"hauteur-maxi-hauteur-mini",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:5},{value:"Largeur maxi, Largeur mini",id:"largeur-maxi-largeur-mini",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4}],d={toc:p};function s(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"hauteur-fixe"}),"Hauteur fixe"),(0,n.kt)("p",null,"Si vous cochez cette option, la hauteur de la fen\xeatre sera verrouill\xe9e et l'utilisateur ne pourra plus la redimensionner."),(0,n.kt)("p",null,"Si cette option n'est pas coch\xe9e, la largeur de la fen\xeatre du formulaire peut \xeatre modifi\xe9e. Dans ce cas, les propri\xe9t\xe9s ",(0,n.kt)("a",a({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Hauteur mini et Hauteur maxi")," peuvent \xeatre utilis\xe9es pour d\xe9terminer les limites de redimensionnement."),(0,n.kt)("h4",a({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowSizingY"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"largeur-fixe"}),"Largeur fixe"),(0,n.kt)("p",null,"Si vous cochez cette option, la largeur de la fen\xeatre sera verrouill\xe9e et l'utilisateur ne pourra plus la redimensionner."),(0,n.kt)("p",null,"Si cette option n'est pas coch\xe9e, la largeur de la fen\xeatre du formulaire peut \xeatre modifi\xe9e. Dans ce cas, les propri\xe9t\xe9s ",(0,n.kt)("a",a({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Largeur mini et Largeur maxi")," peuvent \xeatre utilis\xe9es pour d\xe9terminer les limites de redimensionnement."),(0,n.kt)("h4",a({},{id:"grammaire-json-1"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowSizingX"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"hauteur-maxi-hauteur-mini"}),"Hauteur maxi, Hauteur mini"),(0,n.kt)("p",null,"Hauteur maximale et minimale (en pixels) d'une fen\xeatre de formulaire redimensionnable si l'option ",(0,n.kt)("a",a({parentName:"p"},{href:"#fixed-height"}),"Hauteur fixe")," n'est pas d\xe9finie."),(0,n.kt)("h5",a({},{id:"grammaire-json-2"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowMinHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"valeur entier long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"valeur entier long")))),(0,n.kt)("h2",a({},{id:"largeur-maxi-largeur-mini"}),"Largeur maxi, Largeur mini"),(0,n.kt)("p",null,"Largeur maximale et minimale (en pixels) d'une fen\xeatre de formulaire redimensionnable si l'option ",(0,n.kt)("a",a({parentName:"p"},{href:"#fixed-width"}),"Largeur fixe")," n'est pas d\xe9finie."),(0,n.kt)("h4",a({},{id:"grammaire-json-3"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowMinWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"valeur entier long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"valeur entier long")))))}s.isMDXComponent=!0}}]);