"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93357],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},862878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"overview",title:"Sauvegarde et restitution"},u=void 0,s={unversionedId:"Backup/overview",id:"version-20-R4/Backup/overview",title:"Sauvegarde et restitution",description:"4D inclut un module complet de sauvegarde et de r\xe9cup\xe9ration de l'application en cas d\u2019incident.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/fr/Backup/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"overview",title:"Sauvegarde et restitution"},sidebar:"docs",previous:{title:"Page chiffrement",permalink:"/docs/fr/MSC/encrypt"},next:{title:"Sauvegarde",permalink:"/docs/fr/Backup/backup"}},c={},l=[],p={toc:l};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D inclut un module complet de sauvegarde et de r\xe9cup\xe9ration de l'application en cas d\u2019incident."),(0,n.kt)("p",null,"Ce module permet de sauvegarder une application en cours d\u2019exploitation, sans qu\u2019il soit n\xe9cessaire de quitter l\u2019application. Chaque sauvegarde peut inclure le dossier du projet, le fichier de donn\xe9es et tout fichier ou dossier suppl\xe9mentaire. Ces param\xe8tres sont d\xe9finis au pr\xe9alable dans les Propri\xe9t\xe9s."),(0,n.kt)("p",null,"Les sauvegardes peuvent \xeatre d\xe9clench\xe9es manuellement ou automatiquement, \xe0 intervalles r\xe9guliers et sans intervention de l\u2019utilisateur. Des commandes de langage ainsi que des m\xe9thodes base sp\xe9cifiques permettent d\u2019int\xe9grer les fonctions de sauvegarde \xe0 une interface personnalis\xe9e."),(0,n.kt)("p",null,"La restitution d\u2019une application apr\xe8s incident peut s\u2019effectuer automatiquement lors de l\u2019ouverture d\u2019une application endommag\xe9e."),(0,n.kt)("p",null,"En outre, le module de sauvegarde int\xe9gr\xe9 tire parti du fichier .journal (",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/Backup/log"})," d\u2019historique"),"). Ce fichier conserve une trace de chaque op\xe9ration effectu\xe9e sur les donn\xe9es et assure ainsi une s\xe9curit\xe9 totale entre deux sauvegardes. Vous pouvez visualiser \xe0 tout moment le contenu du fichier d\u2019historique. Vous pouvez visualiser \xe0 tout moment le contenu du fichier d\u2019historique."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement mettre en place des solutions alternatives de r\xe9plication et de synchronisation des donn\xe9es permettant de maintenir des versions identiques des applications \xe0 des fins de sauvegarde. These solutions can be based on the following mechanisms and technologies:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,n.kt)("li",{parentName:"ul"},"Synchronization using SQL - Synchronization using HTTP (/rest/url)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Consultez le document ",(0,n.kt)("a",o({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide")," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D.")))}d.isMDXComponent=!0}}]);