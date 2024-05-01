"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54387],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},212489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"format",title:"$format"},i=void 0,p={unversionedId:"REST/format",id:"version-20-R5/REST/format",title:"$format",description:"Define un formato espec\xedfico para devolver datos de una clase de datos, (e.g., $format=looker)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$format.md",sourceDirName:"REST",slug:"/REST/format",permalink:"/docs/es/REST/format",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"format",title:"$format"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/es/REST/filter"},next:{title:"$imageformat",permalink:"/docs/es/REST/imageformat"}},c={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],m={toc:s};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Define un formato espec\xedfico para devolver datos de una clase de datos, (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$format=looker"),")"),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este par\xe1metro permite definir el formato que se utilizar\xe1 para devolver los datos de la clase de datos."),(0,r.kt)("p",null,"Se soportan los siguientes formatos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Formato"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formato est\xe1ndar del servidor 4D REST (utilizado por defecto)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"looker")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formato JSON compatible con ",(0,r.kt)("a",a({parentName:"td"},{href:"https://lookerstudio.google.com/"}),"Looker Studio"),".")))),(0,r.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker')),(0,r.kt)("p",null,"El servidor REST devuelve un objeto JSON que contiene el esquema y los datos de la petici\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n        1,\n        "Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n        2,\n        "Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n        3,\n        "Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n')))}u.isMDXComponent=!0}}]);