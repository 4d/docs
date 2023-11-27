"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"savedfilter",title:"$savedfilter"},d=void 0,l={unversionedId:"REST/savedfilter",id:"version-20-R2/REST/savedfilter",title:"$savedfilter",description:'Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (e.g., $savedfilter="")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/pt/20-R2/REST/savedfilter",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/pt/20-R2/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/pt/20-R2/REST/savedorderby"}},s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],p={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Guarda o filtro definido por $filter aquando da cria\xe7\xe3o de um conjunto de entidades (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},'$savedfilter="{filter}"'),")"),(0,o.kt)("h2",n({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,o.kt)("p",null,"Ao criar um conjunto de entidades, voc\xea pode salvar o filtro usado para cri\xe1-lo por motivos de seguran\xe7a. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, \xe0 necessidade de espa\xe7o do servidor, ou ao facto de o remover chamando ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methodrelease"}),(0,o.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,o.kt)("p",null,"Utiliza-se ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedfilter")," para guardar o filtro definido ao criar o conjunto de entidades e, em seguida, passa-se ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedfilter")," com a chamada para recuperar o conjunto de entidades de cada vez."),(0,o.kt)("p",null,"Se o conjunto de entidades n\xe3o est\xe1 mais no cache do 4D Server, ele ser\xe1 recriado com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."),(0,o.kt)("p",null,"Se tiver utilizado tanto ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedfilter")," como ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R2/REST/savedorderby"}),(0,o.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, que ter\xe1 o mesmo n\xfamero de refer\xeancia, refletir\xe1 esse facto."),(0,o.kt)("h2",n({},{id:"exemplo"}),"Exemplo"),(0,o.kt)("p",null,"No nosso exemplo, chamamos primeiro `",(0,o.kt)("inlineCode",{parentName:"p"},"$savedfilter")," com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset')),(0,o.kt)("p",null,"Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades \xe9 sempre v\xe1lido:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"')))}u.isMDXComponent=!0}}]);