"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},40145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={id:"propertiesPrint",title:"Imprimer"},l=void 0,s={unversionedId:"FormObjects/propertiesPrint",id:"version-20/FormObjects/propertiesPrint",title:"Imprimer",description:"Impression cadre",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/fr/FormObjects/propertiesPrint",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"propertiesPrint",title:"Imprimer"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/fr/FormObjects/propertiesPlugIns"},next:{title:"Plage de valeurs",permalink:"/docs/fr/FormObjects/propertiesRangeOfValues"}},p={},u=[{value:"Impression cadre",id:"impression-cadre",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4}],m={toc:u};function c(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"impression-cadre"}),"Impression cadre"),(0,n.kt)("p",null,"Cette propri\xe9t\xe9 permet de g\xe9rer le mode d'impression des objets dont la taille peut varier d'un enregistrement \xe0 l'autre en fonction de leur contenu. Ces objets peuvent \xeatre imprim\xe9s sur une hauteur de taille fixe ou variable. Un cadre de taille fixe provoque l\u2019impression de l\u2019objet dans les limites d\xe9finies lors de la cr\xe9ation de l\u2019objet dans le formulaire. Un cadre de taille variable s\u2019\xe9tend si n\xe9cessaire lors de l\u2019impression afin d\u2019imprimer l\u2019int\xe9gralit\xe9 de l\u2019objet. A noter que la largeur des objets imprim\xe9s en taille variable n'est pas affect\xe9e par cette option; seule la hauteur varie automatiquement en fonction du contenu de l'objet."),(0,n.kt)("p",null,"Vous ne pouvez pas placer deux objets (ou plus) avec une taille variable c\xf4te \xe0 c\xf4te dans un formulaire. Vous pouvez placer des objets de taille fixe \xe0 c\xf4t\xe9 d\u2019un objet qui sera imprim\xe9 avec une taille variable si l\u2019objet de taille variable est plus long d\u2019au moins une ligne que l\u2019objet plac\xe9 \xe0 son c\xf4t\xe9 et que leurs limites sup\xe9rieures sont align\xe9es. Si cette condition n\u2019est pas respect\xe9e, le contenu des autres champs sera r\xe9p\xe9t\xe9 pour toute tranche horizontale de l\u2019objet de taille variable."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les commandes ",(0,n.kt)("inlineCode",{parentName:"p"},"Print object")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"Print form")," ne sont pas compatibles avec cette option.")),(0,n.kt)("p",null,"Les options d'impression sont les suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"L'option ",(0,n.kt)("strong",{parentName:"p"},"Variable")," / ",(0,n.kt)("strong",{parentName:"p"},"Impression taille variable")," coch\xe9e : 4D agrandit ou r\xe9duit la zone de l'objet du formulaire afin d'imprimer tous les sous-enregistrements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"L'option ",(0,n.kt)("strong",{parentName:"p"},"Fixe (Tronqu\xe9)")," / ",(0,n.kt)("strong",{parentName:"p"},"Impression taille variable")," non coch\xe9e : 4D imprime uniquement le contenu qui appara\xeet dans la zone de l'objet. Le formulaire n'est imprim\xe9 qu'une seule fois et le contenu non imprim\xe9 est ignor\xe9.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixe (Enregistrements multiples)")," (sous-formulaires uniquement) : la taille initiale de la zone de sous-formulaire est conserv\xe9e mais 4D imprime le formulaire plusieurs fois afin d'imprimer tous les enregistrements."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cette propri\xe9t\xe9 peut \xeatre d\xe9finie par programmation \xe0 l'aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET PRINT VARIABLE FRAME"),".")),(0,n.kt)("h4",i({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"Nom"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"Type de donn\xe9es"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"printFrame"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"string"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),'"fixed", "variable", (sous-formulaire uniquement) "fixedMultiple"')))),(0,n.kt)("h4",i({},{id:"objets-pris-en-charge"}),"Objets pris en charge"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/FormObjects/inputOverview"}),"Zone de saisie")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/FormObjects/subformOverview"}),"Sous-formulaires")," (sous-formulaires liste uniquement) - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/FormObjects/writeProAreaOverview"}),"Zones 4D Write Pro")))}c.isMDXComponent=!0}}]);