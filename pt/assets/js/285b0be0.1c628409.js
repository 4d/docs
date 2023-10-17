"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65168],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(r),c=n,b=s["".concat(l,".").concat(c)]||s[c]||d[c]||o;return r?a.createElement(b,i(i({ref:t},m),{},{components:r})):a.createElement(b,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},657571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});r(667294);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"expand",title:"$expand"},p=void 0,l={unversionedId:"REST/expand",id:"version-20-R2/REST/expand",title:"$expand",description:"Expande uma imagem armazenada num atributo Image (, por exemplo,, Employee(1)/photo?$imageformat=best&$expand=photo) ou Expande um atributo BLOB para o guardar.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/pt/20-R2/REST/expand",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/pt/20-R2/REST/entityset"},next:{title:"$filter",permalink:"/docs/pt/20-R2/REST/filter"}},u={},m=[{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2}],d={toc:m};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Expande uma imagem armazenada num atributo Image (",(0,a.kt)("em",{parentName:"p"},", por exemplo,"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,a.kt)("br",null)," ou",(0,a.kt)("br",null)," Expande um atributo BLOB para o guardar."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Compatibilidade"),": Por raz\xf5es de compatibilidade, $expand pode ser utilizado para expandir um atributo relacional (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand=staff")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},'Employee/?$filter="firstName BEGIN a"&$expand=employer'),"). No entanto, recomenda-se a utiliza\xe7\xe3o do endere\xe7o ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R2/REST/attributes"}),(0,a.kt)("inlineCode",{parentName:"a"},"$attributes"))," para esta funcionalidade.")),(0,a.kt)("h2",n({},{id:"vendo-um-atributo-de-imagem"}),"Vendo um atributo de imagem"),(0,a.kt)("p",null,"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,a.kt)("p",null,"Para saber mais sobre formatos de imagem, veja ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R2/REST/imageformat"}),(0,a.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R2/REST/version"}),(0,a.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,a.kt)("h2",n({},{id:"salvar-um-atributo-blob-ao-disco"}),"Salvar um atributo BLOB ao disco"),(0,a.kt)("p",null,'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}s.isMDXComponent=!0}}]);