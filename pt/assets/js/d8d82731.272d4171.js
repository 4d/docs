"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=n,g=s["".concat(m,".").concat(c)]||s[c]||p[c]||i;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"windowSize",title:"Tamanho da janela"},o=void 0,m={unversionedId:"FormEditor/windowSize",id:"version-20/FormEditor/windowSize",title:"Tamanho da janela",description:"Altura fixa",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/pt/FormEditor/windowSize",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_WindowSize.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"windowSize",title:"Tamanho da janela"},sidebar:"docs",previous:{title:"Imprimir",permalink:"/docs/pt/FormEditor/print"},next:{title:"Form Objects",permalink:"/docs/pt/FormObjects/formObjectsOverview"}},d={},u=[{value:"Altura fixa",id:"altura-fixa",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Largura fixa",id:"largura-fixa",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Altura m\xe1xima, Altura m\xednima",id:"altura-m\xe1xima-altura-m\xednima",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:5},{value:"Largura m\xe1xima, Largura m\xednima",id:"largura-m\xe1xima-largura-m\xednima",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4}],p={toc:u};function s(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",n({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"altura-fixa"}),"Altura fixa"),(0,r.kt)("p",null,"Se seleccionar esta op\xe7\xe3o, a altura da janela ser\xe1 bloqueada e n\xe3o ser\xe1 poss\xedvel para o utilizador redimension\xe1-la."),(0,r.kt)("p",null,"Se esta op\xe7\xe3o n\xe3o for seleccionada, a largura da janela do formul\xe1rio pode ser modificada. Neste caso, as propriedades ",(0,r.kt)("a",n({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Altura M\xednima e Altura M\xe1xima")," podem ser utilizadas para determinar os limites de redimensionamento."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowSizingY"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"largura-fixa"}),"Largura fixa"),(0,r.kt)("p",null,"Se seleccionar esta op\xe7\xe3o, a largura da janela ser\xe1 bloqueada e n\xe3o ser\xe1 poss\xedvel para o utilizador redimension\xe1-la."),(0,r.kt)("p",null,"Se esta op\xe7\xe3o n\xe3o for seleccionada, a largura da janela do formul\xe1rio pode ser modificada. Neste caso, as propriedades ",(0,r.kt)("a",n({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Largura M\xednima e Largura M\xe1xima")," podem ser utilizadas para determinar os limites de redimensionamento."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-1"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowSizingX"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"altura-m\xe1xima-altura-m\xednima"}),"Altura m\xe1xima, Altura m\xednima"),(0,r.kt)("p",null,"Altura m\xe1xima e m\xednima (em pixels) de uma janela de forma redimension\xe1vel se a op\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"#fixed-height"}),"Altura fixa")," n\xe3o estiver definida."),(0,r.kt)("h5",n({},{id:"gram\xe1tica-json-2"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowMinHeight"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor inteiro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor inteiro")))),(0,r.kt)("h2",n({},{id:"largura-m\xe1xima-largura-m\xednima"}),"Largura m\xe1xima, Largura m\xednima"),(0,r.kt)("p",null,"Largura m\xe1xima e m\xednima (em pixels) de uma janela de forma redimension\xe1vel se a op\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"#fixed-width"}),"Largura fixa")," n\xe3o estiver definida."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-3"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowMinWidth"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor inteiro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor inteiro")))))}s.isMDXComponent=!0}}]);