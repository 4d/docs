"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30842],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return t?a.createElement(b,i(i({ref:r},l),{},{components:t})):a.createElement(b,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},696960:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});t(667294);var a=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"propertiesHierarchy",title:"Hierarquia"},s=void 0,c={unversionedId:"FormObjects/propertiesHierarchy",id:"version-20-R3/FormObjects/propertiesHierarchy",title:"Hierarquia",description:"List box hier\xe1rquica",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/pt/20-R3/FormObjects/propertiesHierarchy",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Hierarchy.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"propertiesHierarchy",title:"Hierarquia"},sidebar:"docs",previous:{title:"Ajuda",permalink:"/docs/pt/20-R3/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/pt/20-R3/FormObjects/propertiesListBox"}},p={},l=[{value:"List box hier\xe1rquica",id:"list-box-hier\xe1rquica",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4}],u={toc:l};function d(e){var{components:r}=e,t=n(e,["components"]);return(0,a.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"list-box-hier\xe1rquica"}),"List box hier\xe1rquica"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"List box de tipo array")),(0,a.kt)("p",null,"Essa propriedade especifica que o list box deve ser exibido em forma hier\xe1rquica. No formul\xe1rio JSON essa funcionalidade \xe9 ativada ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/FormObjects/propertiesObject#hierarchical-list-box"}),"quando o ",(0,a.kt)("em",{parentName:"a"},"dataSource")," valor de propriedade for um array"),", ou seja uma cole\xe7\xe3o."),(0,a.kt)("p",null,"Op\xe7\xf5es adicionais (",(0,a.kt)("strong",{parentName:"p"},"Variable 1...10"),") est\xe3o dispon\xedveis quando a op\xe7\xe3o ",(0,a.kt)("em",{parentName:"p"},"List box hier\xe1rquica")," for selecionada, correspondendo a cada array ",(0,a.kt)("em",{parentName:"p"},"dataSource")," para usar como quebra de coluna. A cada vez que um valor \xe9 digitado em um campo, uma nova linha \xe9 adicionada. Podem ser especificadas at\xe9 10 vari\xe1veis. Essas vari\xe1veis estabelecem os n\xedveis hier\xe1rquicos a serem exibidos na primeira coluna."),(0,a.kt)("p",null,"Ver ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/FormObjects/listboxOverview#hierarchical-list-boxes"}),"List box hier\xe1rquicos")),(0,a.kt)("h4",o({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Nome"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Tipo de dados"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"datasource"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"array string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de nomes de matriz que definem a hierarquia")))),(0,a.kt)("h4",o({},{id:"objectos-suportados"}),"Objectos suportados"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/FormObjects/listboxOverview"}),"List Box")))}d.isMDXComponent=!0}}]);