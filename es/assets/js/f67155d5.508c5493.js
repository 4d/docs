"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"print",title:"Imprimir"},l=void 0,p={unversionedId:"FormEditor/print",id:"version-20/FormEditor/print",title:"Imprimir",description:"Settings",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/es/FormEditor/print",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"print",title:"Imprimir"},sidebar:"docs",previous:{title:"Men\xfa",permalink:"/docs/es/FormEditor/menu"},next:{title:"Tama\xf1o de la ventana",permalink:"/docs/es/FormEditor/windowSize"}},s={},m=[{value:"Settings",id:"settings",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}],d={toc:m};function u(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"settings"}),"Settings"),(0,n.kt)("p",null,"Permite definir los par\xe1metros de impresi\xf3n espec\xedficos para el formulario. Esta funcionalidad es \xfatil para ver los l\xedmites de p\xe1ginas de impresi\xf3n en el editor de formularios."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibilidad:")," aunque estos par\xe1metros se tengan en cuenta cuando se imprime el formulario en modo Aplicaci\xf3n, se desaconseja confiar en esta funcionalidad para almacenar los par\xe1metros de impresi\xf3n del formulario, debido a las limitaciones relativas a la plataforma y al driver. Es muy recomendable utilizar los comandos 4D ",(0,n.kt)("inlineCode",{parentName:"p"},"Print settings to BLOB"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB to print settings")," que son m\xe1s poderosos.")),(0,n.kt)("p",null,"Puede modificar los siguientes par\xe1metros de impresi\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Formato del papel"),(0,n.kt)("li",{parentName:"ul"},"Orientaci\xf3n del papel"),(0,n.kt)("li",{parentName:"ul"},"Escala de la p\xe1gina")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Las opciones disponibles dependen de la configuraci\xf3n del sistema.")),(0,n.kt)("h4",a({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nombre"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valores posibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"pageFormat"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Propiedades de impresi\xf3n disponibles: paperName, paperWidth, paperHeight, orientation, scale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperName"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"A4", "US Letter"...')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperWidth"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"paperHeight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"orientation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"landscape" (por defecto es "portrait")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"scale"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"m\xednimo: 0")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);