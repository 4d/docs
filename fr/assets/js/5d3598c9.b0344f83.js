"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57261],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57936:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"spinner",title:"Spinner"},a=void 0,p={unversionedId:"FormObjects/spinner",id:"version-20-R2/FormObjects/spinner",title:"Spinner",description:"Le spinner est un indicateur circulaire qui affiche une animation continue, telle que le Barber shop.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/fr/20-R2/FormObjects/spinner",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fspinner.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Formes",permalink:"/docs/fr/20-R2/FormObjects/shapesOverview"},next:{title:"S\xe9parateur",permalink:"/docs/fr/20-R2/FormObjects/splitters"}},c={},l=[{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:3}],u={toc:l};function f(e){var{components:r}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le spinner est un indicateur circulaire qui affiche une animation continue, telle que le ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(41754).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"Ce type d'objet vous permet d'indiquer une op\xe9ration telle que la recherche de connexion r\xe9seau ou le calcul est en cours. Lorsque cet indicateur est s\xe9lectionn\xe9, ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesScale"}),'les propri\xe9t\xe9s "Graduations"')," ne sont pas disponibles."),(0,n.kt)("p",null,"A l\u2019ex\xe9cution du formulaire, l'objet n\u2019est pas anim\xe9. Vous devez g\xe9rer l\u2019animation en passant une valeur \xe0 ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#variable-or-expression"}),"la variable ou expression qui lui est associ\xe9e")," :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (ou toute valeur diff\xe9rente de 0) = D\xe9marrer l\u2019animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stopper l\u2019animation")),(0,n.kt)("h3",o({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Style de la bordure")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#expression-type"}),"Type d'expression")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," -",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesHelp#help-tip"}),"Message d'aide")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. horizontal")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesObject#variable-or-expression"}),"Variable ou expression")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dim. vertical")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/20-R2/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")))}f.isMDXComponent=!0},41754:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);