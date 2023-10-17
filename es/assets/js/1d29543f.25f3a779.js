"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20633],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},217332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});r(667294);var o=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"action",title:"Acci\xf3n"},l=void 0,p={unversionedId:"FormEditor/action",id:"version-19/FormEditor/action",title:"Acci\xf3n",description:"M\xe9todo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/es/19/FormEditor/action",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"action",title:"Acci\xf3n"},sidebar:"docs",previous:{title:"Lista de propiedades JSON",permalink:"/docs/es/19/FormEditor/jsonReference"},next:{title:"Propiedades de los formularios",permalink:"/docs/es/19/FormEditor/propertiesForm"}},c={},m=[{value:"M\xe9todo",id:"m\xe9todo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}],s={toc:m};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",n({},{id:"m\xe9todo"}),"M\xe9todo"),(0,o.kt)("p",null,"Referencia de un m\xe9todo adjunto al formulario. Puede utilizar un m\xe9todo formulario para gestionar datos y objetos, pero generalmente es m\xe1s sencillo y eficiente utilizar un m\xe9todo objeto para estos fines. Ver ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/19/Concepts/methods#specialized-methods"}),"M\xe9todos especializados"),"."),(0,o.kt)("p",null,"No llame a un m\xe9todo formulario - 4D lo llama autom\xe1ticamente cuando un evento implica el formulario al que el m\xe9todo est\xe1 asociado."),(0,o.kt)("p",null,"Se soportan varios tipos de referencias de m\xe9todos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"una ruta de archivo de m\xe9todo proyecto est\xe1ndar, es decir, que utilice el siguiente modelo:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"method.4dm"),(0,o.kt)("br",{parentName:"p"}),"\n",'Este tipo de referencia indica que el archivo de m\xe9todo se encuentra en la ubicaci\xf3n por defecto ("sources/{TableForms/',(0,o.kt)("em",{parentName:"p"},"numTable"),"} | {Forms}/",(0,o.kt)("em",{parentName:"p"},"formName"),'/"). En este caso, 4D maneja autom\xe1ticamente el m\xe9todo formulario cuando se ejecutan operaciones en el formulario (renombrar, duplicar, copiar/pegar...)')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.: ",(0,o.kt)("inlineCode",{parentName:"p"},"myMethod")," In this case, 4D does not provide automatic support for form operations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"MyMethods/myFormMethod.4dm")," You can also use a filesystem:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Forms/FormMethod.4dm")," In this case, 4D does not provide automatic support for object operations."))),(0,o.kt)("h4",n({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:null}),"method"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"text"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Ruta est\xe1ndar o personalizada del m\xe9todo formulario, o nombre del m\xe9todo proyecto")))))}d.isMDXComponent=!0}}]);