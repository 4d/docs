"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"overview",title:"A propos des fonctions de classes"},a=void 0,l={unversionedId:"API/overview",id:"version-20-R3/API/overview",title:"A propos des fonctions de classes",description:"Cette section d\xe9crit les fonctions de classe int\xe9gr\xe9es de 4D ainsi que les commandes des constructeurs associ\xe9s. Les propri\xe9t\xe9s et fonctions des classes 4D sont disponibles via les objets d'instance de classe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/fr/API/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"overview",title:"A propos des fonctions de classes"},sidebar:"docs",previous:{title:"Class Functions",permalink:"/docs/fr/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/fr/API/BlobClass"}},c={},p=[{value:"Conventions d&#39;\xe9criture",id:"conventions-d\xe9criture",level:2}],u={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cette section d\xe9crit les fonctions de classe int\xe9gr\xe9es de 4D ainsi que les commandes des constructeurs associ\xe9s. Les propri\xe9t\xe9s et fonctions des classes 4D sont disponibles via les objets d'instance de classe."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"les fonctions doivent \xeatre appel\xe9es sur des instances avec l'op\xe9rateur ",(0,r.kt)("inlineCode",{parentName:"li"},"()"),". Par exemple, ",(0,r.kt)("inlineCode",{parentName:"li"},"collection.sort()"),"."),(0,r.kt)("li",{parentName:"ul"},"les propri\xe9t\xe9s sont appel\xe9es sans parenth\xe8ses, par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},"file.creationTime"),". Vous pouvez \xe9galement utiliser la syntaxe ","[","], par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},'file["creationTime"]'),"."),(0,r.kt)("li",{parentName:"ul"},"les commandes peuvent \xeatre appel\xe9es ind\xe9pendamment, avec ou sans param\xe8tres. Par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder(fk database folder)"),".")),(0,r.kt)("h2",o({},{id:"conventions-d\xe9criture"}),"Conventions d'\xe9criture"),(0,r.kt)("p",null,"Les conventions suivantes sont utilis\xe9es dans la syntaxe de la fonction :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"les caract\xe8res ",(0,r.kt)("inlineCode",{parentName:"li"},"{ }")," (accolades) indiquent des param\xe8tres facultatifs. Par exemple, ",(0,r.kt)("inlineCode",{parentName:"li"},".delete( { option : Integer } )")," signifie que le param\xe8tre ",(0,r.kt)("em",{parentName:"li"},"option")," peut \xeatre omis lors de l'appel de la fonction."),(0,r.kt)("li",{parentName:"ul"},"la notation ",(0,r.kt)("inlineCode",{parentName:"li"},"{ ; ...param }")," indique un nombre illimit\xe9 de param\xe8tres. Par exemple, ",(0,r.kt)("inlineCode",{parentName:"li"},".concat( value : any { ;...valueN } ) : Collection")," signifie qu'un nombre illimit\xe9 de valeurs de n'importe quel type peut \xeatre pass\xe9 \xe0 la fonction."),(0,r.kt)("li",{parentName:"ul"},"le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," est utilis\xe9 pour d\xe9signer un param\xe8tre de tout type qui peut \xeatre stock\xe9 dans des attributs (nombre, texte, bool\xe9en, date, heure, objet, collection...).")))}d.isMDXComponent=!0}}]);