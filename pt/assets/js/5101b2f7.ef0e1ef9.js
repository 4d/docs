"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"upload",title:"$upload"},p=void 0,l={unversionedId:"REST/upload",id:"version-18/REST/upload",title:"$upload",description:"Devolve um ID do ficheiro carregado para o servidor",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/pt/18/REST/upload",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/pt/18/REST/info"},next:{title:"{dataClass}",permalink:"/docs/pt/18/REST/{dataClass}"}},u={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo de carregamento de imagens",id:"exemplo-de-carregamento-de-imagens",level:2}],c={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Devolve um ID do ficheiro carregado para o servidor"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe ",(0,n.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Para todos os outros ficheiros, deve passar ",(0,n.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,n.kt)("p",null,"You can modify the timeout, which by default is 120 seconds, by passing a value to the ",(0,n.kt)("inlineCode",{parentName:"p"},"$timeout parameter"),"."),(0,n.kt)("h2",o({},{id:"exemplo-de-carregamento-de-imagens"}),"Exemplo de carregamento de imagens"),(0,n.kt)("p",null,"To upload an image, you must first select the file object on the client using the HTML 5 built-in API for using file from a web application. 4D uses the MIME type attribute of the file object so it can handle it appropriately."),(0,n.kt)("p",null,"Depois, carregamos a imagem selecionada para 4D Server:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,n.kt)("p",null," Afterwards, you use this ID to add it to an attribute using ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update"))," to add the image to an entity:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dados POST"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("p",null,"A entidade modificada \xe9 devolvida:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')))}d.isMDXComponent=!0}}]);