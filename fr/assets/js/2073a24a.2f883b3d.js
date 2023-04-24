"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"skip",title:"$skip"},a=void 0,p={unversionedId:"REST/skip",id:"version-20/REST/skip",title:"$skip",description:"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, $skip=10)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/fr/REST/skip",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24skip.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/fr/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/fr/REST/timeout"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],u={toc:s};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},"$skip=10"),")"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$skip")," d\xe9finit l'entit\xe9 de la collection par laquelle commencer. Par d\xe9faut, la collection envoy\xe9e commence par la premi\xe8re entit\xe9. Pour commencer avec la 10e entit\xe9 de la collection, passez 10."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$skip")," est g\xe9n\xe9ralement utilis\xe9 avec"),(0,n.kt)("h2",o({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," pour naviguer dans une entity collection."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}m.isMDXComponent=!0}}]);