"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11740],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var o=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return t?o.createElement(f,d(d({ref:r},l),{},{components:t})):o.createElement(f,d({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,d=new Array(n);d[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var c=2;c<n;c++)d[c]=t[c];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},158691:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});t(667294);var o=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const d={id:"savedorderby",title:"$savedorderby"},i=void 0,s={unversionedId:"REST/savedorderby",id:"version-20-R3/REST/savedorderby",title:"$savedorderby",description:'Guarda a ordem definida por $orderby aquando da cria\xe7\xe3o de um conjunto de entidades (e.g., $savedorderby="")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/docs/pt/20-R3/REST/savedorderby",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/docs/pt/20-R3/REST/savedfilter"},next:{title:"$skip",permalink:"/docs/pt/20-R3/REST/skip"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],p={toc:l};function u(e){var{components:r}=e,t=n(e,["components"]);return(0,o.kt)("wrapper",a({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Guarda a ordem definida por ",(0,o.kt)("inlineCode",{parentName:"p"},"$orderby")," aquando da cria\xe7\xe3o de um conjunto de entidades (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},'$savedorderby="{orderby}"'),")"),(0,o.kt)("h2",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,o.kt)("p",null,"Quando se cria um conjunto de entidades, \xe9 poss\xedvel gravar a ordem de ordena\xe7\xe3o com o filtro utilizado para o criar, como medida de seguran\xe7a. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, \xe0 necessidade de espa\xe7o do servidor, ou ao facto de o remover chamando ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20-R3/REST/method#methodrelease"}),(0,o.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,o.kt)("p",null,"Utiliza-se ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," para guardar a ordem que se definiu ao criar o conjunto de entidades e, em seguida, passa-se ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," com a chamada para recuperar o conjunto de entidades de cada vez."),(0,o.kt)("p",null,"Se o conjunto de entidades n\xe3o est\xe1 mais no cache do 4D Server, ele ser\xe1 recriado com um novo timeout padr\xe3o de 10 minutos. Se tiver utilizado tanto ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20-R3/REST/savedfilter"}),(0,o.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," como ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, com o mesmo n\xfamero de refer\xeancia, refletir\xe1 esse facto."),(0,o.kt)("h2",a({},{id:"exemplo"}),"Exemplo"),(0,o.kt)("p",null,"Primeiro, chama-se ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," com a chamada inicial para criar um conjunto de entidades:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset')),(0,o.kt)("p",null,"Depois, quando acede ao seu conjunto de entidades, escreve o seguinte (utilizando tanto $savedfilter como $savedorderby) para garantir que o filtro e a sua ordem de ordena\xe7\xe3o existem sempre:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"')))}u.isMDXComponent=!0}}]);