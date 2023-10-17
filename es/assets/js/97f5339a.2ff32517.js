"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87028],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},761572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"upload",title:"$upload"},l=void 0,p={unversionedId:"REST/upload",id:"version-18/REST/upload",title:"$upload",description:"Devuelve un ID del archivo subido al servidor",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/es/18/REST/upload",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/es/18/REST/info"},next:{title:"{dataClass}",permalink:"/docs/es/18/REST/{dataClass}"}},u={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo de carga de imagen",id:"ejemplo-de-carga-de-imagen",level:2}],d={toc:c};function s(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Devuelve un ID del archivo subido al servidor"),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Publique esta petici\xf3n cuando tenga un archivo que quiera subir al Servidor. Si tiene una imagen, pase ",(0,r.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Para todos los dem\xe1s archivos, se pasa ",(0,r.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,r.kt)("p",null,"Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("h2",a({},{id:"ejemplo-de-carga-de-imagen"}),"Ejemplo de carga de imagen"),(0,r.kt)("p",null,"Para subir una imagen, primero hay que seleccionar el objeto archivo en el cliente utilizando la API integrada HTML 5 para utilizar el archivo desde una aplicaci\xf3n web. 4D utiliza el atributo de tipo MIME del objeto archivo para poder manejarlo adecuadamente."),(0,r.kt)("p",null,"A continuaci\xf3n, subimos la imagen seleccionada a 4D Server:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,r.kt)("p",null," Despu\xe9s, se utiliza este ID para a\xf1adirlo a un atributo utilizando ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/REST/method#methodupdate"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=update")),"para a\xf1adir la imagen a una entidad:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datos POST"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("p",null,"Se devuelve la entidad modificada:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')))}s.isMDXComponent=!0}}]);