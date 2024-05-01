"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15895],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(v,a(a({ref:r},c),{},{components:t})):n.createElement(v,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5163:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});t(667294);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"version",title:"$version"},l=void 0,p={unversionedId:"REST/version",id:"version-20-R4/REST/version",title:"$version",description:"N\xfamero de versi\xf3n de la imagen",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/docs/es/20-R4/REST/version",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24version.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/docs/es/20-R4/REST/top_$limit"},next:{title:"Desktop Applications",permalink:"/docs/es/20-R4/category/desktop-applications"}},s={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:c};function d(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"N\xfamero de versi\xf3n de la imagen"),(0,n.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$version")," es el n\xfamero de versi\xf3n de la imagen devuelto por el servidor. El n\xfamero de versi\xf3n, que es enviado por el servidor, funciona en torno a la memoria cach\xe9 del navegador para que usted est\xe9 seguro de recuperar la imagen correcta."),(0,n.kt)("p",null,"El valor del par\xe1metro de versi\xf3n de la imagen es modificado por el servidor."),(0,n.kt)("h2",o({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el n\xfamero de versi\xf3n real enviado por el servidor:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}d.isMDXComponent=!0}}]);