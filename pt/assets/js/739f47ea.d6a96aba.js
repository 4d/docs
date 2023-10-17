"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89184],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),s=o,f=c["".concat(l,".").concat(s)]||c[s]||d[s]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},615928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});n(667294);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"timeout",title:"$timeout"},p=void 0,l={unversionedId:"REST/timeout",id:"version-20/REST/timeout",title:"$timeout",description:"Define o n\xfamero de segundos para guardar um conjunto de entidades na cache do 4D Server (e.g., $timeout=1800)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/pt/20/REST/timeout",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/pt/20/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/pt/20/REST/top_$limit"}},m={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],d={toc:u};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Define o n\xfamero de segundos para guardar um conjunto de entidades na cache do 4D Server (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout=1800"),")"),(0,r.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"Para definir um timeout para um conjunto de entidades criado com ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/20/REST/method#methodentityset"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", passar o n\xfamero de segundos para ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),". Por exemplo, se pretender definir o tempo limite para 20 minutos, introduza 1200. Por defeito, o tempo limite \xe9 de duas (2) horas."),(0,r.kt)("p",null,"Uma vez definido o tempo limite, sempre que um conjunto de entidades \xe9 chamado (utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), o tempo limite \xe9 recalculado com base na hora atual e no tempo limite."),(0,r.kt)("p",null,"Se um conjunto de entidades for removido e depois recriado utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset")," com ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/20/REST/savedfilter"}),(0,r.kt)("inlineCode",{parentName:"a"},"$savedfilter")),", o novo tempo limite predefinido \xe9 de 10 minutos, independentemente do tempo limite definido ao chamar ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"No nosso conjunto de entidades que criamos, definimos o tempo limite para 20 minutos:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200')))}c.isMDXComponent=!0}}]);