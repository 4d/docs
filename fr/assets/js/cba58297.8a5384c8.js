"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12930],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},650191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"directory",title:"$directory"},l=void 0,s={unversionedId:"REST/directory",id:"version-20/REST/directory",title:"$directory",description:"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/fr/20/REST/directory",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/fr/20/REST/catalog"},next:{title:"$info",permalink:"/docs/fr/20/REST/info"}},p={},u=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3}],c={toc:u};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST."),(0,n.kt)("h2",o({},{id:"directorylogin"}),"$directory/login"),(0,n.kt)("p",null,"Ouvre une session REST sur votre application 4D et connecte l'utilisateur."),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Utilisez ",(0,n.kt)("inlineCode",{parentName:"p"},"$directory/login")," pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez \xe9galement modifier le timeout par d\xe9faut de la session 4D."),(0,n.kt)("p",null,"Tous les param\xe8tres doivent \xeatre pass\xe9s dans les ",(0,n.kt)("strong",{parentName:"p"},"en-t\xeates")," d'une m\xe9thode POST :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Cl\xe9 de l'en-t\xeate"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valeur de l'en-t\xeate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"username-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Utilisateur - Non obligatoire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"password-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Password in plain text - Not mandatory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"session-4D-length"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Timeout d'inactivit\xe9 de la session (en minutes). Ne peut pas \xeatre inf\xe9rieur \xe0 60 - Non obligatoire")))),(0,n.kt)("admonition",o({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Since the password is transmitted in plain text, it is strongly recommended to use a secured https connection for the login request.")),(0,n.kt)("h3",o({},{id:"exemple"}),"Exemple"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,n.kt)("p",null,"Si la connexion a r\xe9ussi, le r\xe9sultat sera le suivant :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "result": true\n}\n')),(0,n.kt)("p",null,"Sinon, la r\xe9ponse sera la suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n     "result": false\n}\n')))}d.isMDXComponent=!0}}]);