"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4368],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},513378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"orderby",title:"$orderby"},i=void 0,s={unversionedId:"REST/orderby",id:"version-20-R3/REST/orderby",title:"$orderby",description:'Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby="lastName desc, salary asc")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/es/20-R3/REST/orderby",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/es/20-R3/REST/method"},next:{title:"$querypath",permalink:"/docs/es/20-R3/REST/querypath"}},p={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],d={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$orderby="lastName desc, salary asc"'),")"),(0,n.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,n.kt)("inlineCode",{parentName:"p"},"ASC")," (o ",(0,n.kt)("inlineCode",{parentName:"p"},"asc"),") para el orden ascendente y ",(0,n.kt)("inlineCode",{parentName:"p"},"DESC")," (",(0,n.kt)("inlineCode",{parentName:"p"},"desc"),") para el orden descendente. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order."),(0,n.kt)("h2",o({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"')),(0,n.kt)("p",null,"El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n')))}u.isMDXComponent=!0}}]);