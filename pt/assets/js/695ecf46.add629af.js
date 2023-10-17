"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58035],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},549087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"top_$limit",title:"$top/$limit"},l=void 0,p={unversionedId:"REST/top_$limit",id:"version-20-R2/REST/top_$limit",title:"$top/$limit",description:"Limita o n\xfamero de entidades a devolver (por exemplo, $top=50)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/pt/20-R2/REST/top_$limit",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/pt/20-R2/REST/timeout"},next:{title:"$version",permalink:"/docs/pt/20-R2/REST/version"}},c={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],u={toc:s};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Limita o n\xfamero de entidades a devolver (por exemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"$top=50"),")"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$top/$limit")," define o limite de entidades a devolver. Por defeito, o n\xfamero \xe9 limitado a 100. Pode utilizar qualquer uma das palavras-chave: ",(0,n.kt)("inlineCode",{parentName:"p"},"$top")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"$limit"),"."),(0,n.kt)("p",null,"Quando utilizado em conjunto com ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/skip"}),(0,n.kt)("inlineCode",{parentName:"a"},"$skip")),", pode navegar atrav\xe9s da sele\xe7\xe3o de entidades devolvida pelo pedido REST."),(0,n.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"No exemplo seguinte, pedimos as dez entidades seguintes ap\xf3s a 20.\xaa entidade:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10")))}d.isMDXComponent=!0}}]);