"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27476],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},582917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"menu",title:"Men\xfa"},l=void 0,u={unversionedId:"FormEditor/menu",id:"version-20-R2/FormEditor/menu",title:"Men\xfa",description:"Barra do menu associada",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/pt/20-R2/FormEditor/menu",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Menu.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"menu",title:"Men\xfa"},sidebar:"docs",previous:{title:"Marcadores",permalink:"/docs/pt/20-R2/FormEditor/markers"},next:{title:"Imprimir",permalink:"/docs/pt/20-R2/FormEditor/print"}},c={},s=[{value:"Barra do menu associada",id:"barra-do-menu-associada",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}],m={toc:s};function p(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"barra-do-menu-associada"}),"Barra do menu associada"),(0,n.kt)("p",null,"When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment."),(0,n.kt)("p",null,"The selection of a menu command causes an ",(0,n.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event to be sent to the form method; you can then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu selected")," command to test the selected menu."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the menu bar of the form is identical to the current menu bar, it is not added.")),(0,n.kt)("p",null,"A barra de menu do formul\xe1rio funciona tanto para os formul\xe1rios de entrada como para os de sa\xedda."),(0,n.kt)("h4",o({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Nome"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Tipo de dados"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"menuBar"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Nome de uma barra de menu")))))}p.isMDXComponent=!0}}]);