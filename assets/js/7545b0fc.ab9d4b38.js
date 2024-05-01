"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14666],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||c[m]||a;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69833:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});t(667294);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"errorPages",title:"Custom HTTP Error Pages"},s=void 0,i={unversionedId:"WebServer/errorPages",id:"version-20-R4/WebServer/errorPages",title:"Custom HTTP Error Pages",description:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:",source:"@site/versioned_docs/version-20-R4/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/20-R4/WebServer/errorPages",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"errorPages",title:"Custom HTTP Error Pages"},sidebar:"docs",previous:{title:"Allowing project methods",permalink:"/docs/20-R4/WebServer/allowProject"},next:{title:"Authentication",permalink:"/docs/20-R4/WebServer/authentication"}},p={},u=[{value:"Replacing default pages",id:"replacing-default-pages",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function f(e){var{components:r}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"status codes starting with 4 (client errors), for example 404")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"status codes starting with 5 (server errors), for example 501. "))),(0,n.kt)("p",null,"For a full description of HTTP error status codes, you can refer to the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"List of HTTP status codes")," (Wikipedia)."),(0,n.kt)("h2",o({},{id:"replacing-default-pages"}),"Replacing default pages"),(0,n.kt)("p",null,"To replace default 4D Web Server error pages with your own pages you just need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"put custom HTML pages at the first level of the application's web folder,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'name the custom pages "{statusCode}.html" (for example, "404.html"). '))),(0,n.kt)("p",null,'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'),(0,n.kt)("p",null,"For example, when an HTTP response returns a status code 404:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'4D Web Server tries to send a "404.html" page located in the application\'s web folder.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If not found, 4D Web Server then uses its default error page."))),(0,n.kt)("h2",o({},{id:"example"}),"Example"),(0,n.kt)("p",null,"If you define the following custom pages in your web folder:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(582547).Z,width:"166",height:"287"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'the "5xx.html" page will be served for any 5xx error status.'))))}f.isMDXComponent=!0},582547:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);