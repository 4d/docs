"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"timeout",title:"$timeout"},l=void 0,u={unversionedId:"REST/timeout",id:"version-20/REST/timeout",title:"$timeout",description:"D\xe9finit le nombre de secondes pour enregistrer un ensemble d'entit\xe9s dans le cache de 4D Server (par exemple, $timeout=1800)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/fr/20/REST/timeout",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/fr/20/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/fr/20/REST/top_$limit"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],c={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"D\xe9finit le nombre de secondes pour enregistrer un ensemble d'entit\xe9s dans le cache de 4D Server (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout=1800"),")"),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/20/REST/method#methodentityset"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", passez le nombre de secondes \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),". Par exemple, si vous souhaitez d\xe9finir le timeout sur 20 minutes, passez 1200. Par d\xe9faut, le timeout est de deux (2) heures."),(0,r.kt)("p",null,"Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."),(0,r.kt)("p",null,"Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."),(0,r.kt)("h2",o({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Si un ensemble d'entit\xe9s est supprim\xe9 puis recr\xe9\xe9 \xe0 l'aide de ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset")," avec ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/20/REST/savedfilter"}),(0,r.kt)("inlineCode",{parentName:"a"},"$savedfilter")),", le nouveau timeout par d\xe9faut est de 10 minutes, quel que soit le timeout que vous avez d\xe9fini lors de l'appel de ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200')))}m.isMDXComponent=!0}}]);