"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33476],{603905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(667294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=s,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},149011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});r(667294);var n=r(603905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const a={id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},i=void 0,u={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"Usu\xe1rios e sess\xf5es",description:"Autentica\xe7\xe3o de usu\xe1rios",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/pt/18/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},sidebar:"docs",previous:{title:"Configura\xe7\xe3o do servidor",permalink:"/docs/pt/18/REST/configuration"},next:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/18/REST/genInfo"}},l={},d=[{value:"Autentica\xe7\xe3o de usu\xe1rios",id:"autentica\xe7\xe3o-de-usu\xe1rios",level:2},{value:"Cookie de sess\xe3o",id:"cookie-de-sess\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3}],c={toc:d};function p(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",s({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",s({},{id:"autentica\xe7\xe3o-de-usu\xe1rios"}),"Autentica\xe7\xe3o de usu\xe1rios"),(0,n.kt)("p",null,"Como primeiro passo para abrir uma sess\xe3o REST no servidor 4D, o usu\xe1rio que envia a solicitude deve estar autenticado."),(0,n.kt)("p",null,"You log in a user to your application by passing the user's name and password to ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/pt/18/REST/directory#directorylogin"}),(0,n.kt)("inlineCode",{parentName:"a"},"$directory/login")),"."),(0,n.kt)("p",null,"Quando um usu\xe1rio \xe9 registrado com sucesso, uma sess\xe3o \xe9 aberta. See below to know how to handle the session cookie in subsequent client requests, if necessary."),(0,n.kt)("p",null,"A sess\xe3o ser\xe1 encerrada automaticamente quando o tempo limite for atingido."),(0,n.kt)("h2",s({},{id:"cookie-de-sess\xe3o"}),"Cookie de sess\xe3o"),(0,n.kt)("p",null,"Each REST request is handled through a specific session on the 4D server."),(0,n.kt)("p",null,"When a first valid REST request is received, the server creates the session and sends a session cookie named ",(0,n.kt)("inlineCode",{parentName:"p"},"WASID4D")," in the ",(0,n.kt)("strong",{parentName:"p"},'"Set-Cookie" response header'),", containing the session UUID, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,n.kt)("p",null,"In the subsequent REST requests, make sure this cookie is included in the ",(0,n.kt)("strong",{parentName:"p"},'"Cookie" request header')," so that you will reuse the same session. Caso contr\xe1rio, uma nova sess\xe3o ser\xe1 aberta e outra licen\xe7a ser\xe1 usada."),(0,n.kt)("h3",s({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"The way to handle session cookies actually depends on your HTTP client. This example shows how to extract and resend the session cookie in the context of requests handled through the 4D ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP Request")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'// Creating headers\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n//This request opens a session for the user "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n//Build new arrays for headers with only the cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//This other request will not open a new session\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'// buildHeader project method  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}p.isMDXComponent=!0}}]);