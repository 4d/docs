"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37092:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"stepper",title:"Stepper"},a=void 0,p={unversionedId:"FormObjects/stepper",id:"version-19-R8/FormObjects/stepper",title:"Stepper",description:"Un stepper permet \xe0 l'utilisateur de faire d\xe9filer des valeurs num\xe9riques, des dur\xe9es (heures) ou des dates par des \xe9tapes pr\xe9-d\xe9finies en cliquant sur les boutons de direction.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/FormObjects/stepper.md",sourceDirName:"FormObjects",slug:"/FormObjects/stepper",permalink:"/docs/fr/19-R8/FormObjects/stepper",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fstepper.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"stepper",title:"Stepper"},sidebar:"docs",previous:{title:"Image statique",permalink:"/docs/fr/19-R8/FormObjects/staticPicture"},next:{title:"Sous-formulaire",permalink:"/docs/fr/19-R8/FormObjects/subformOverview"}},c={},l=[{value:"Utilisation du stepper",id:"utilisation-du-stepper",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}],u={toc:l};function m(e){var{components:r}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un stepper permet \xe0 l'utilisateur de faire d\xe9filer des valeurs num\xe9riques, des dur\xe9es (heures) ou des dates par des \xe9tapes pr\xe9-d\xe9finies en cliquant sur les boutons de direction."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(32475).Z,width:"285",height:"61"})),(0,n.kt)("h2",o({},{id:"utilisation-du-stepper"}),"Utilisation du stepper"),(0,n.kt)("p",null,"La variable associ\xe9e \xe0 l\u2019objet peut \xeatre affect\xe9e \xe0 une zone saisissable (champ ou variable) afin de stocker ou modifier la valeur courante de l\u2019objet."),(0,n.kt)("p",null,"Un stepper peut \xeatre directement associ\xe9 \xe0 une variable num\xe9rique, heure ou date."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour les valeurs de type heure, les propri\xe9t\xe9s Minimum, Maximum et Pas repr\xe9sentent des secondes. Par exemple, pour d\xe9finir un stepper de 8h00 \xe0 18h00 avec des pas de 10 minutes :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#minium"}),"minimum")," = 28 800 (8","*","60","*","60)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#maximum"}),"maximum")," = 64 800 (18","*","60","*","60)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#step"}),"step")," = 600 (10","*","60)"))),(0,n.kt)("li",{parentName:"ul"},"Pour les valeurs de type date, la valeur saisie dans la propri\xe9t\xe9 ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#step"}),"Pas")," repr\xe9sente des jours. Les propri\xe9t\xe9s Minimum et Maximum sont ignor\xe9es.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html"}),"C_TIME")," or ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html"}),"C_DATE")," command."))))),(0,n.kt)("p",null,"Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/progressIndicator#using-indicatire"}),"Utiliser des indicateurs"),' de la page "Indicateurs de progression".'),(0,n.kt)("h2",o({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Style de la bordure")," -",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesEntry#enterable"}),"Saisissable")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesAction#execute-object-method"}),"Ex\xe9cuter m\xe9thode objet")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesObject#expression-type"}),"Type d'expression"),' (uniquement "entier", "num\xe9rique", "date", ou "heure") - ',(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesHelp#help-tip"}),"Message d'aide")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. horizontal")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#maximum"}),"Maximum")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#minimum"}),"Minimum")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesScale#step"}),"Step")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"Variable ou expression")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dim. vertical")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")),(0,n.kt)("h2",o({},{id:"voir-\xe9galement"}),"Voir \xe9galement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/progressIndicator"}),"indicateurs de progression")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/19-R8/FormObjects/ruler"}),"r\xe8gle"))))}m.isMDXComponent=!0},32475:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,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"}}]);