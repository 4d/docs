"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"directory",title:"$directory"},i=void 0,s={unversionedId:"REST/directory",id:"version-20-R3/REST/directory",title:"$directory",description:"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/fr/REST/directory",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/fr/REST/catalog"},next:{title:"$info",permalink:"/docs/fr/REST/info"}},p={},u=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST."),(0,n.kt)("h2",a({},{id:"directorylogin"}),"$directory/login"),(0,n.kt)("p",null,"Ouvre une session REST sur votre application 4D et connecte l'utilisateur."),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Utilisez ",(0,n.kt)("inlineCode",{parentName:"p"},"$directory/login")," pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez \xe9galement modifier le timeout par d\xe9faut de la session 4D."),(0,n.kt)("p",null,"Tous les param\xe8tres doivent \xeatre pass\xe9s dans les ",(0,n.kt)("strong",{parentName:"p"},"en-t\xeates")," d'une m\xe9thode POST :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Cl\xe9 de l'en-t\xeate"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeur de l'en-t\xeate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"username-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utilisateur - Non obligatoire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"password-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mot de passe - Non obligatoire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"hashed-password-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mot de passe h\xe2ch\xe9 - Non obligatoire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"session-4D-length"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Timeout d'inactivit\xe9 de la session (en minutes). Ne peut pas \xeatre inf\xe9rieur \xe0 60 - Non obligatoire")))),(0,n.kt)("h3",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,n.kt)("p",null,"Si la connexion a r\xe9ussi, le r\xe9sultat sera le suivant :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true\n}\n')),(0,n.kt)("p",null,"Sinon, la r\xe9ponse sera la suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n     "result": false\n}\n')))}d.isMDXComponent=!0}}]);