"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79098],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(t),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},219408:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});t(667294);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={id:"errorPages",title:"Pages d'erreur HTTP personnalis\xe9es"},l=void 0,p={unversionedId:"WebServer/errorPages",id:"version-20-R2/WebServer/errorPages",title:"Pages d'erreur HTTP personnalis\xe9es",description:"4D Web Server vous permet de personnaliser les pages d'erreur HTTP envoy\xe9es aux clients, en fonction du code d'\xe9tat de la r\xe9ponse du serveur. Les pages d'erreur font r\xe9f\xe9rence \xe0 :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/fr/20-R2/WebServer/errorPages",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"errorPages",title:"Pages d'erreur HTTP personnalis\xe9es"},sidebar:"docs",previous:{title:"M\xe9thodes projet",permalink:"/docs/fr/20-R2/WebServer/allowProject"},next:{title:"Authentification",permalink:"/docs/fr/20-R2/WebServer/authentication"}},i={},u=[{value:"Remplacement des pages par d\xe9faut",id:"remplacement-des-pages-par-d\xe9faut",level:2},{value:"Exemple",id:"exemple",level:2}],d={toc:u};function c(e){var{components:r}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",a({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D Web Server vous permet de personnaliser les pages d'erreur HTTP envoy\xe9es aux clients, en fonction du code d'\xe9tat de la r\xe9ponse du serveur. Les pages d'erreur font r\xe9f\xe9rence \xe0 :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"les codes d'\xe9tat commen\xe7ant par 4 (erreurs du client), par exemple 404")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"les codes d'\xe9tat commen\xe7ant par 5 (erreurs du serveur), par exemple 501."))),(0,n.kt)("p",null,"Pour une description compl\xe8te des codes d'\xe9tat d'erreur HTTP, vous pouvez vous reporter \xe0 la ",(0,n.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"liste des codes d'\xe9tat HTTP")," (Wikipedia)."),(0,n.kt)("h2",a({},{id:"remplacement-des-pages-par-d\xe9faut"}),"Remplacement des pages par d\xe9faut"),(0,n.kt)("p",null,"Pour remplacer les pages d'erreur par d\xe9faut de 4D Web Server par vos propres pages, il vous suffit de :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"placer des pages HTML personnalis\xe9es au premier niveau du dossier web de l'application,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'nommer les pages personnalis\xe9es "{statusCode}.html" (par exemple, "404.html").'))),(0,n.kt)("p",null,"Vous pouvez d\xe9finir une page d'erreur par code d'\xe9tat et/ou une page d'erreur g\xe9n\xe9rique pour une s\xe9rie d'erreurs, nomm\xe9e \"{number}xx.html\". Par exemple, vous pouvez cr\xe9er \"4xx.html\" pour les erreurs g\xe9n\xe9riques du client. 4D Web Server recherchera d'abord une page {statusCode}.html puis, si elle n'existe pas, une page g\xe9n\xe9rique."),(0,n.kt)("p",null,"Par exemple, lorsqu'une r\xe9ponse HTTP retourne un code d'\xe9tat 404 :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"4D Web Server essaie d'envoyer une page \"404.html\" situ\xe9e dans le dossier web de l'application.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si elle n'est pas trouv\xe9e, 4D Web Server essaie d'envoyer une page \"4xx.html\" situ\xe9e dans le dossier Web de l'application.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si elle n'est pas trouv\xe9e, 4D Web Server utilise alors sa page d'erreur par d\xe9faut."))),(0,n.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Si vous d\xe9finissez les pages personnalis\xe9es suivantes dans votre dossier web :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(317594).Z,width:"166",height:"287"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'les pages "403.html" ou "404.html" seront servies lorsque des r\xe9ponses HTTP 403 ou 404 sont retourn\xe9es respectivement,')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'la page "4xx.html" sera servie pour tout autre \xe9tat d\'erreur 4xx (400, 401, etc.),')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'la page "5xx.html" sera servie pour tout \xe9tat d\'erreur 5xx.'))))}c.isMDXComponent=!0},317594:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);