"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58160],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?o.createElement(f,n(n({ref:t},l),{},{components:r})):o.createElement(f,n({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var p=2;p<i;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},659593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});r(667294);var o=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const n={id:"staticPicture",title:"Static picture"},s=void 0,c={unversionedId:"FormObjects/staticPicture",id:"version-20-R4/FormObjects/staticPicture",title:"Static picture",description:"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/docs/pt/FormObjects/staticPicture",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FstaticPicture.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/docs/pt/FormObjects/splitters"},next:{title:"Stepper",permalink:"/docs/pt/FormObjects/stepper"}},p={},l=[{value:"Formato e localiza\xe7\xe3o",id:"formato-e-localiza\xe7\xe3o",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}],m={toc:l};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Static pictures are ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/formObjectsOverview#active-and-static-objects"}),"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(338480).Z,width:"312",height:"332"})),(0,o.kt)("p",null,"As imagens est\xe1ticas s\xe3o armazenadas fora dos formul\xe1rios e inseridas por refer\xeancia. In the form editor, static picture objects are created by copy/paste or drag and drop operations."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. De qualquer maneira, seu banco de dados roda mais r\xe1pido se a imagem for colada em cada p\xe1gina.")),(0,o.kt)("h2",a({},{id:"formato-e-localiza\xe7\xe3o"}),"Formato e localiza\xe7\xe3o"),(0,o.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,o.kt)("p",null,"Podem ser utilizadas duas localiza\xe7\xf5es principais para o percurso da imagem est\xe1tica:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"na pasta ",(0,o.kt)("strong",{parentName:"li"},"Resources"),' do banco de dados projeto. Apropriado quando quiser compartir imagens est\xe1ticas entre v\xe1rios formul\xe1rios do banco de dados. Neste caso, o nome do caminho est\xe1 em "/RESOURCES/\\<picture path',">",'".'),(0,o.kt)("li",{parentName:"ul"},"numa pasta de imagens (por exemplo, ",(0,o.kt)("strong",{parentName:"li"},"Images"),') dentro da pasta do formul\xe1rio. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,o.kt)("h2",a({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#css-class"}),"CSS Class")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#display"}),"Display")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesDisplay#visibility"}),"Visibility"),"  - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},338480:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);