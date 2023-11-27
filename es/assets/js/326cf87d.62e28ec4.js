"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95150],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,i(i({ref:r},d),{},{components:t})):a.createElement(g,i({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38020:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"errorPages",title:"P\xe1ginas de error HTTP personalizadas"},l=void 0,s={unversionedId:"WebServer/errorPages",id:"version-20-R3/WebServer/errorPages",title:"P\xe1ginas de error HTTP personalizadas",description:"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/es/WebServer/errorPages",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"errorPages",title:"P\xe1ginas de error HTTP personalizadas"},sidebar:"docs",previous:{title:"Permitir m\xe9todos proyecto",permalink:"/docs/es/WebServer/allowProject"},next:{title:"Autenticaci\xf3n",permalink:"/docs/es/WebServer/authentication"}},p={},d=[{value:"Reemplazo de las p\xe1ginas por defecto",id:"reemplazo-de-las-p\xe1ginas-por-defecto",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:d};function u(e){var{components:r}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",n({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"los c\xf3digos de estado que empiezan por 4 (errores del cliente), por ejemplo 404")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"los c\xf3digos de estado que empiezan por 5 (errores del servidor), por ejemplo 501."))),(0,a.kt)("p",null,"Para una descripci\xf3n completa de los c\xf3digos de estado de error HTTP, puede consultar la ",(0,a.kt)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"lista de c\xf3digos de estado HTTP")," (Wikipedia)."),(0,a.kt)("h2",n({},{id:"reemplazo-de-las-p\xe1ginas-por-defecto"}),"Reemplazo de las p\xe1ginas por defecto"),(0,a.kt)("p",null,"Para reemplazar las p\xe1ginas de error predeterminadas de 4D Web Server por sus propias p\xe1ginas, s\xf3lo tiene que:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"poner las p\xe1ginas HTML personalizadas en el primer nivel de la carpeta web de la aplicaci\xf3n,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'nombrar las p\xe1ginas personalizadas "{statusCode}.html" (por ejemplo, "404.html").'))),(0,a.kt)("p",null,'Puede definir una p\xe1gina de error por c\xf3digo de estado y/o una p\xe1gina de error gen\xe9rica para un rango de errores, llamada "{number}xx.html". Por ejemplo, puede crear "4xx.html" para los errores gen\xe9ricos del cliente. El servidor web de 4D buscar\xe1 primero una p\xe1gina {statusCode}.html y, si no existe, una p\xe1gina gen\xe9rica.'),(0,a.kt)("p",null,"Por ejemplo, cuando una respuesta HTTP devuelve un c\xf3digo de estado 404:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Si no se encuentra, 4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Si no se encuentra, 4D Web Server utiliza su p\xe1gina de error por defecto."))),(0,a.kt)("h2",n({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"Si define las siguientes p\xe1ginas personalizadas en su carpeta web:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(52489).Z,width:"166",height:"287"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'se servir\xe1n las p\xe1ginas "403.html" o "404.html" cuando se devuelvan respuestas HTTP 403 o 404 respectivamente,')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'la p\xe1gina "4xx.html" se servir\xe1 para cualquier otro estado de error 4xx (400, 401, etc.),')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'la p\xe1gina "5xx.html" se servir\xe1 para cualquier estado de error 5xx.'))))}u.isMDXComponent=!0},52489:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);