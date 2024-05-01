"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96545],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),f=a,d=c["".concat(p,".").concat(f)]||c[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},734844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(667294);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"imageformat",title:"$imageformat"},l=void 0,p={unversionedId:"REST/imageformat",id:"version-20-R4/REST/imageformat",title:"$imageformat",description:"D\xe9finit le format d'image \xe0 utiliser pour r\xe9cup\xe9rer des images (par exemple, $imageformat=png)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/fr/20-R4/REST/imageformat",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/fr/20-R4/REST/filter"},next:{title:"$lock",permalink:"/docs/fr/20-R4/REST/lock"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],s={toc:u};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"D\xe9finit le format d'image \xe0 utiliser pour r\xe9cup\xe9rer des images (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},"$imageformat=png"),")"),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"D\xe9finissez le format \xe0 utiliser pour afficher les images. You can use one of the following formats (extensions, mime types and OsType Mac are supported):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"best"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Meilleur format bas\xe9 sur l'image")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".gif" or "image/gif"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Format GIF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".png" or "image/png"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Format PNG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".jpeg" or "image/jpeg"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Format JPEG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".tiff" or "image/tiff"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Format TIFF")))),(0,n.kt)("p",null,"Une fois que vous avez d\xe9fini le format, vous devez passer l'attribut de l'image \xe0 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R4/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand"))," pour charger compl\xe8tement la photo."),(0,n.kt)("p",null,"If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object ",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,n.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"L'exemple suivant d\xe9finit le format d'image au format JPEG, quel que soit le v\xe9ritable type de la photo et passe le v\xe9ritable num\xe9ro de version envoy\xe9 par le serveur :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo")))}c.isMDXComponent=!0}}]);