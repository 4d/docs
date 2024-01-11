"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93461],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},936583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});t(667294);var r=t(603905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"overview",title:"Acerca de las funciones clase"},l=void 0,s={unversionedId:"API/overview",id:"version-20/API/overview",title:"Acerca de las funciones clase",description:"En este apartado se describen las funciones integradas en la clase 4D, as\xed como los comandos constructores asociados. Las funciones y propiedades de clase 4D est\xe1n disponibles a trav\xe9s de los objetos de instancia de clase.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/es/20/API/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"Acerca de las funciones clase"},sidebar:"docs",previous:{title:"Class Functions",permalink:"/docs/es/20/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/es/20/API/BlobClass"}},c={},p=[{value:"Convenciones de escritura",id:"convenciones-de-escritura",level:2}],u={toc:p};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En este apartado se describen las funciones integradas en la clase 4D, as\xed como los comandos constructores asociados. Las funciones y propiedades de clase 4D est\xe1n disponibles a trav\xe9s de los objetos de instancia de clase."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"las funciones deben llamarse en las instancias con el operador ",(0,r.kt)("inlineCode",{parentName:"li"},"()"),". Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"li"},"collection.sort()"),"."),(0,r.kt)("li",{parentName:"ul"},"se accede a las propiedades sin par\xe9ntesis, por ejemplo ",(0,r.kt)("inlineCode",{parentName:"li"},"file.creationTime"),". Tambi\xe9n puede utilizar la sintaxis ","[","], por ejemplo ",(0,r.kt)("inlineCode",{parentName:"li"},'file["creationTime"]'),"."),(0,r.kt)("li",{parentName:"ul"},"pueden ejecutarse de forma independiente, con o sin par\xe1metros. Por ejemplo ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder(fk database folder)"),".")),(0,r.kt)("h2",a({},{id:"convenciones-de-escritura"}),"Convenciones de escritura"),(0,r.kt)("p",null,"En la sintaxis de la funci\xf3n se utilizan las siguientes convenciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"los caracteres ",(0,r.kt)("inlineCode",{parentName:"li"},"{ }")," indican los par\xe1metros opcionales. Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"li"},".delete( { option : Integer } )")," significa que el par\xe1metro ",(0,r.kt)("em",{parentName:"li"},"option")," puede omitirse al llamar a la funci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"la notaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"{ ; ...param }")," indica un n\xfamero ilimitado de par\xe1metros. Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"li"},".concat( value : any { ;...valueN } ) : Collection")," significa que se puede pasar a la funci\xf3n un n\xfamero ilimitado de valores de cualquier tipo."),(0,r.kt)("li",{parentName:"ul"},"la palabra clave ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," se utiliza para par\xe1metros que pueden ser de cualquier tipo que se pueda almacenar dentro de los atributos (n\xfamero, texto, booleano, fecha, hora, objeto, colecci\xf3n...).")))}d.isMDXComponent=!0}}]);