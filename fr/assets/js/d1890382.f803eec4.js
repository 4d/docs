"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onLoadRecord",title:"Sur chargement ligne"},l=void 0,c={unversionedId:"Events/onLoadRecord",id:"version-20-R3/Events/onLoadRecord",title:"Sur chargement ligne",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                                                                           |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Events/onLoadRecord.md",sourceDirName:"Events",slug:"/Events/onLoadRecord",permalink:"/docs/fr/Events/onLoadRecord",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoadRecord.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"onLoadRecord",title:"Sur chargement ligne"},sidebar:"docs",previous:{title:"On Load",permalink:"/docs/fr/Events/onLoad"},next:{title:"Sur clic long",permalink:"/docs/fr/Events/onLongClick"}},s={},p=[{value:"Description",id:"description",level:2}],u={toc:p};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"40"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Formulaire"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Lors de la saisie de l'utilisateur dans la liste, un enregistrement est charg\xe9 et un champ est \xe9dit\xe9")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"L'\xe9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"p"},"On Load Record")," ne peut \xeatre utilis\xe9 que dans le contexte d'un ",(0,r.kt)("strong",{parentName:"p"},"formulaire de sortie"),". Il est d\xe9clench\xe9 lors de la saisie des donn\xe9es dans la liste, apr\xe8s la mise en surbrillance d'un enregistrement et le passage d'un champ en mode d'\xe9dition."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cet \xe9v\xe9nement ne peut pas \xeatre s\xe9lectionn\xe9 pour les formulaires projet, il est uniquement disponible avec les ",(0,r.kt)("strong",{parentName:"p"},"formulaires table"),".")))}d.isMDXComponent=!0}}]);