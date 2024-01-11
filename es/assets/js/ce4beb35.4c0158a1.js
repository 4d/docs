"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15238],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},686764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});n(667294);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"skip",title:"$skip"},c=void 0,l={unversionedId:"REST/skip",id:"version-20-R3/REST/skip",title:"$skip",description:"Inicia la entidad definida por este n\xfamero en la colecci\xf3n (por ejemplo, $skip=10)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/es/20-R3/REST/skip",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24skip.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/es/20-R3/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/es/20-R3/REST/timeout"}},p={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inicia la entidad definida por este n\xfamero en la colecci\xf3n (",(0,r.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip=10"),")"),(0,r.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," define la entidad de la colecci\xf3n por la que se va a comenzar. Por defecto, la colecci\xf3n enviada comienza con la primera entidad. Para comenzar con la d\xe9cima entidad de la colecci\xf3n, pase 10."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," se utiliza generalmente junto con ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R3/REST/top_$limit"}),(0,r.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," para navegar por una colecci\xf3n de entidades."),(0,r.kt)("h2",o({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"En el siguiente ejemplo, vamos a la vig\xe9sima entidad de nuestro conjunto de entidades:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}d.isMDXComponent=!0}}]);