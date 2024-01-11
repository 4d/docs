"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82350],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(667294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(b,i(i({ref:r},p),{},{components:t})):a.createElement(b,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},254090:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});t(667294);var a=t(603905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"propertiesHierarchy",title:"Jerarqu\xeda"},s=void 0,c={unversionedId:"FormObjects/propertiesHierarchy",id:"version-19/FormObjects/propertiesHierarchy",title:"Jerarqu\xeda",description:"List box jer\xe1rquico",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/es/19/FormObjects/propertiesHierarchy",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Hierarchy.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"propertiesHierarchy",title:"Jerarqu\xeda"},sidebar:"docs",previous:{title:"Ayuda",permalink:"/docs/es/19/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/es/19/FormObjects/propertiesListBox"}},l={},p=[{value:"List box jer\xe1rquico",id:"list-box-jer\xe1rquico",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4}],u={toc:p};function d(e){var{components:r}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"list-box-jer\xe1rquico"}),"List box jer\xe1rquico"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"List box de tipo array")),(0,a.kt)("p",null,"Esta propiedad especifica que el list box debe mostrarse en forma jer\xe1rquica. En el formulario JSON, esta funcionalidad se activa ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#hierarchical-list-box"}),"cuando el valor de la propiedad ",(0,a.kt)("em",{parentName:"a"},"dataSource")," es un array"),", es decir, una colecci\xf3n."),(0,a.kt)("p",null,"Las opciones adicionales (",(0,a.kt)("strong",{parentName:"p"},"Variable 1...10"),") est\xe1n disponibles cuando se selecciona la opci\xf3n ",(0,a.kt)("em",{parentName:"p"},"List box jer\xe1rquico"),", correspondiente a cada elemento del array ",(0,a.kt)("em",{parentName:"p"},"dataSource")," a utilizar como columna de ruptura. Cada vez que se introduce un valor en un campo, se a\xf1ade una nueva l\xednea. Se pueden especificar hasta 10 variables. Estas variables definen los niveles jer\xe1rquicos a mostrar en la primera columna."),(0,a.kt)("p",null,"Ver ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/listboxOverview#hierarchical-list-boxes"}),"List box jer\xe1rquicos")),(0,a.kt)("h4",n({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"datasource"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"array cadena"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Colecci\xf3n de nombres de arrays que definen la jerarqu\xeda")))),(0,a.kt)("h4",n({},{id:"objetos-soportados"}),"Objetos soportados"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/listboxOverview"}),"List Box")))}d.isMDXComponent=!0}}]);