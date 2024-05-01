"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80618],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});t(667294);var r=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"plug-ins",title:"Plug-ins"},s=void 0,l={unversionedId:"Concepts/plug-ins",id:"version-20-R5/Concepts/plug-ins",title:"Plug-ins",description:"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/Concepts/plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/Concepts/identifiers"}},u={},p=[{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Instala\xe7\xe3o de plug-ins",id:"instala\xe7\xe3o-de-plug-ins",level:2},{value:"Como instalar um plug-in?",id:"como-instalar-um-plug-in",level:2}],c={toc:p};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. You can even augment the standard version of 4D by adding ",(0,r.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,r.kt)("h2",o({},{id:"por-que-a-necessidade-de-um-plug-in"}),"Por que a necessidade de um plug-in?"),(0,r.kt)("p",null,"A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."),(0,r.kt)("h2",o({},{id:"como-criar-um-plug-in"}),"Como criar um plug-in?"),(0,r.kt)("p",null,"V\xe1rios plug-ins j\xe1 foram escritos pela comunidade 4D. Published plug-ins ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/search?q=4d-plugin%5C&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Extensions/develop-plug-ins"}),"develop your own plug-ins"),"."),(0,r.kt)("h2",o({},{id:"instala\xe7\xe3o-de-plug-ins"}),"Instala\xe7\xe3o de plug-ins"),(0,r.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," folder, at the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Project/architecture#plugins"}),"same level as the Project folder"),"."),(0,r.kt)("p",null,"Os plug-ins s\xe3o carregados por 4D quando a aplica\xe7\xe3o for lan\xe7ada, pelo que ter\xe1 de abandonar a sua aplica\xe7\xe3o 4D antes de os instalar. Se qualquer plug-in necessitar de uma licen\xe7a espec\xedfica para utiliza\xe7\xe3o, ser\xe1 carregado mas n\xe3o estar\xe1 dispon\xedvel para utiliza\xe7\xe3o."),(0,r.kt)("h2",o({},{id:"como-instalar-um-plug-in"}),"Como instalar um plug-in?"),(0,r.kt)("p",null,"Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Plug-in commands appear in the ",(0,r.kt)("strong",{parentName:"p"},"Plug-ins")," page of the Explorer."))}d.isMDXComponent=!0}}]);