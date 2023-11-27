"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28629],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61386:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"errorPages",title:"P\xe1ginas de erro HTTP personalizadas"},i=void 0,l={unversionedId:"WebServer/errorPages",id:"version-19/WebServer/errorPages",title:"P\xe1ginas de erro HTTP personalizadas",description:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. As p\xe1ginas de erro referem-se a:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/pt/19/WebServer/errorPages",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"errorPages",title:"P\xe1ginas de erro HTTP personalizadas"},sidebar:"docs",previous:{title:"Permitir m\xe9todos projeto",permalink:"/docs/pt/19/WebServer/allowProject"},next:{title:"Autentica\xe7\xe3o",permalink:"/docs/pt/19/WebServer/authentication"}},p={},u=[{value:"Substituir p\xe1ginas predefinidas",id:"substituir-p\xe1ginas-predefinidas",level:2},{value:"Exemplo",id:"exemplo",level:2}],c={toc:u};function d(e){var{components:r}=e,s=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. As p\xe1ginas de erro referem-se a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"os c\xf3digos de estado que come\xe7am por 4 (erros do cliente), por exemplo, 404")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"os c\xf3digos de estado que come\xe7am por 5 (erros do servidor), por exemplo, 501."))),(0,n.kt)("p",null,"For a full description of HTTP error status codes, you can refer to the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"List of HTTP status codes")," (Wikipedia)."),(0,n.kt)("h2",o({},{id:"substituir-p\xe1ginas-predefinidas"}),"Substituir p\xe1ginas predefinidas"),(0,n.kt)("p",null,"To replace default 4D Web Server error pages with your own pages you just need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"put custom HTML pages at the first level of the application's web folder,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'name the custom pages "{statusCode}.html" (for example, "404.html").'))),(0,n.kt)("p",null,'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'),(0,n.kt)("p",null,"Por exemplo, quando uma resposta HTTP devolve um c\xf3digo de estado 404:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'4D Web Server tries to send a "404.html" page located in the application\'s web folder.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se n\xe3o for encontrado, 4D Web Server usa sua p\xe1gina de erro padr\xe3o."))),(0,n.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Se definir as seguintes p\xe1ginas personalizadas na sua pasta Web:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(98663).Z,width:"166",height:"287"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'a p\xe1gina "5xx.html" ser\xe1 apresentada para qualquer estado de erro 5xx.'))))}d.isMDXComponent=!0},98663:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);