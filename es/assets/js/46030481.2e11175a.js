"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83508],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},350314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(667294);var r=n(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"top_$limit",title:"$top/$limit"},a=void 0,p={unversionedId:"REST/top_$limit",id:"version-20-R5/REST/top_$limit",title:"$top/$limit",description:"Limits the number of entities to return (e.g., $top=50)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/es/REST/top_$limit",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/es/REST/timeout"},next:{title:"$version",permalink:"/docs/es/REST/version"}},c={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:s};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Limits the number of entities to return (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"$top=50"),")"),(0,r.kt)("h2",i({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$top/$limit")," defines the limit of entities to return. Por defecto, el n\xfamero est\xe1 limitado a 100. You can use either keyword: ",(0,r.kt)("inlineCode",{parentName:"p"},"$top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$limit"),"."),(0,r.kt)("p",null,"When used in conjunction with ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/es/REST/skip"}),(0,r.kt)("inlineCode",{parentName:"a"},"$skip")),", you can navigate through the entity selection returned by the REST request."),(0,r.kt)("h2",i({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"En el siguiente ejemplo, solicitamos las diez entidades siguientes a la vig\xe9sima entidad:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10")))}m.isMDXComponent=!0}}]);