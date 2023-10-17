"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21401],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},859604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"binary",title:"$binary"},c=void 0,p={unversionedId:"REST/binary",id:"version-20-R2/REST/binary",title:"$binary",description:'Passe "true" para guardar o BLOB como um documento (deve tamb\xe9m passar $expand=)',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/pt/20-R2/REST/binary",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24binary.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/pt/20-R2/REST/attributes"},next:{title:"$compute",permalink:"/docs/pt/20-R2/REST/compute"}},l={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}],s={toc:u};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Passe "true" para guardar o BLOB como um documento (deve tamb\xe9m passar ',(0,n.kt)("inlineCode",{parentName:"p"},"$expand={blobAttributeName}"),")"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$binary")," permite-lhe guardar o BLOB como um documento.  Tamb\xe9m \xe9 necess\xe1rio utilizar o comando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand"))," em conjunto com ele."),(0,n.kt)("p",null,"Quando fizer o seguinte pedido:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n")),(0,n.kt)("p",null,"Ser-lhe-\xe1 perguntado onde guardar o BLOB no disco:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(360488).Z,width:"459",height:"353"})))}d.isMDXComponent=!0},360488:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"}}]);