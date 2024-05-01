"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93144],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=a(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var a=2;a<i;a++)s[a]=t[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},294875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});t(667294);var r=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"plug-ins",title:"Plug-ins"},u=void 0,l={unversionedId:"Concepts/plug-ins",id:"version-20-R5/Concepts/plug-ins",title:"Plug-ins",description:"En d\xe9veloppant une application 4D, vous d\xe9couvrirez de nombreuses fonctionnalit\xe9s que vous n'aviez pas remarqu\xe9es au d\xe9but. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/fr/Concepts/plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Composants",permalink:"/docs/fr/Concepts/components"},next:{title:"Identifiants",permalink:"/docs/fr/Concepts/identifiers"}},a={},p=[{value:"Qu&#39;est-ce qu&#39;un plug-in et \xe0 quoi sert-il ?",id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",level:2},{value:"O\xf9 se trouvent les plug-ins ?",id:"o\xf9-se-trouvent-les-plug-ins-",level:2},{value:"Installer un plug-in",id:"installer-un-plug-in",level:2},{value:"Utilisation des plug-ins",id:"utilisation-des-plug-ins",level:2}],c={toc:p};function d(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En d\xe9veloppant une application 4D, vous d\xe9couvrirez de nombreuses fonctionnalit\xe9s que vous n'aviez pas remarqu\xe9es au d\xe9but. You can even augment the standard version of 4D by adding ",(0,r.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,r.kt)("h2",o({},{id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-"}),"Qu'est-ce qu'un plug-in et \xe0 quoi sert-il ?"),(0,r.kt)("p",null,"Un plug-in est un morceau de code, \xe9crit dans n'importe quel langage tel que C ou C++, que 4D lance au d\xe9marrage. Il ajoute des fonctionnalit\xe9s \xe0 4D et augmente ainsi sa capacit\xe9. Un plug-in contient g\xe9n\xe9ralement un ensemble de routines fournies au d\xe9veloppeur 4D. Il peut g\xe9rer des zones externes et ex\xe9cuter des process externes."),(0,r.kt)("h2",o({},{id:"o\xf9-se-trouvent-les-plug-ins-"}),"O\xf9 se trouvent les plug-ins ?"),(0,r.kt)("p",null,"De nombreux plug-ins ont d\xe9j\xe0 \xe9t\xe9 \xe9crits par la communaut\xe9 4D. Published plug-ins ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/search?q=4d-plugin%5C&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/Extensions/develop-plug-ins"}),"develop your own plug-ins"),"."),(0,r.kt)("h2",o({},{id:"installer-un-plug-in"}),"Installer un plug-in"),(0,r.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," folder, at the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/Project/architecture#plugins"}),"same level as the Project folder"),"."),(0,r.kt)("p",null,"Les plug-ins et les composants sont charg\xe9s par 4D lors du lancement de l\u2019application. Vous devez donc quitter votre application 4D avant d\u2019effectuer vos copies de fichiers ou dossiers. Si l\u2019utilisation d'un plug-in n\xe9cessite une licence sp\xe9cifique, le plug-in est charg\xe9 mais n\u2019est pas actif."),(0,r.kt)("h2",o({},{id:"utilisation-des-plug-ins"}),"Utilisation des plug-ins"),(0,r.kt)("p",null,"Les commandes de plug-ins peuvent \xeatre utilis\xe9es comme des commandes 4D classiques de votre d\xe9veloppement 4D. Plug-in commands appear in the ",(0,r.kt)("strong",{parentName:"p"},"Plug-ins")," page of the Explorer."))}d.isMDXComponent=!0}}]);