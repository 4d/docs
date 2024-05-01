"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47433],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},518699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"directory",title:"$directory"},l=void 0,s={unversionedId:"REST/directory",id:"version-20-R4/REST/directory",title:"$directory",description:"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/es/20-R4/REST/directory",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/es/20-R4/REST/catalog"},next:{title:"$info",permalink:"/docs/es/20-R4/REST/info"}},c={},p=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3}],u={toc:p};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST."),(0,n.kt)("h2",o({},{id:"directorylogin"}),"$directory/login"),(0,n.kt)("p",null,"Abre una sesi\xf3n REST en su aplicaci\xf3n 4D y conecta al usuario."),(0,n.kt)("h3",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Utilice ",(0,n.kt)("inlineCode",{parentName:"p"},"$directory/login")," para abrir una sesi\xf3n en su aplicaci\xf3n 4D a trav\xe9s de REST y conecte un usuario. Tambi\xe9n puede modificar el tiempo de espera por defecto de la sesi\xf3n 4D."),(0,n.kt)("p",null,"Todos los par\xe1metros deben pasarse en ",(0,n.kt)("strong",{parentName:"p"},"encabezados"),"de un m\xe9todo POST:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Llave de encabezado"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valor del encabezado"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"username-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Usuario - No obligatorio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"password-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Contrase\xf1a en texto plano - No es obligatorio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"session-4D-length"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tiempo de inactividad de la sesi\xf3n (minutos). No puede ser inferior a 60 - No es obligatorio")))),(0,n.kt)("admonition",o({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Dado que la contrase\xf1a se transmite en texto plano, se recomienda utilizar una conexi\xf3n https segura para la solicitud de acceso.")),(0,n.kt)("h3",o({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("p",null,"Si la conexi\xf3n fue exitosa, el resultado ser\xe1:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "result": true\n}\n')),(0,n.kt)("p",null,"De lo contrario, la respuesta ser\xe1:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n     "result": false\n}\n')))}d.isMDXComponent=!0}}]);