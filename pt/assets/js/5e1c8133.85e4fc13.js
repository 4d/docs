"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84576],{603905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(v,a(a({ref:r},s),{},{components:t})):n.createElement(v,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},525616:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});t(667294);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"version",title:"$version"},l=void 0,p={unversionedId:"REST/version",id:"version-20-R4/REST/version",title:"$version",description:"N\xfamero da vers\xe3o da imagem",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/docs/pt/20-R4/REST/version",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24version.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/docs/pt/20-R4/REST/top_$limit"},next:{title:"Desktop Applications",permalink:"/docs/pt/20-R4/category/desktop-applications"}},c={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],d={toc:s};function u(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"N\xfamero da vers\xe3o da imagem"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$version")," \xe9 o n\xfamero da vers\xe3o da imagem devolvido pelo servidor. O n\xfamero da vers\xe3o, enviado pelo servidor, contorna a cache do navegador para que tenha a certeza de obter a imagem correta."),(0,n.kt)("p",null,"O valor do par\xe2metro de vers\xe3o da imagem \xe9 modificado pelo servidor."),(0,n.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"O exemplo seguinte define o formato de imagem como JPEG, independentemente do tipo real da fotografia, e passa o n\xfamero de vers\xe3o real enviado pelo servidor:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}u.isMDXComponent=!0}}]);