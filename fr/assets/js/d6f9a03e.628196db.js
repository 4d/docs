"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36831],{603905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,N=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},809755:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={id:"overview",title:"Form Events"},u=void 0,o={unversionedId:"Events/overview",id:"version-20-R4/Events/overview",title:"Form Events",description:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/fr/Events/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"overview",title:"Form Events"},sidebar:"docs",previous:{title:"Web Area",permalink:"/docs/fr/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/docs/fr/Events/onActivate"}},m={},p=[{value:"Objet \xe9v\xe9nement",id:"objet-\xe9v\xe9nement",level:2},{value:"\xc9v\xe9nements et m\xe9thodes",id:"\xe9v\xe9nements-et-m\xe9thodes",level:2},{value:"Tableau des appels",id:"tableau-des-appels",level:2}],d={toc:p};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit."),(0,a.kt)("p",null,"Dans votre code, vous contr\xf4lez les \xe9v\xe9nements \xe0 l'aide de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),", qui retourne l'\xe9v\xe9nement d\xe9clench\xe9. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//code d'un bouton\nIf(FORM Event.code=On Clicked) \n// faire quelque chose quand on clique sur le bouton\nEnd if\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble pr\xe9d\xe9fini d'\xe9v\xe9nements, mais seuls les \xe9v\xe9nements que vous avez activ\xe9s au niveau du formulaire et/ou \xe0 chaque niveau d'objet se produiront r\xe9ellement.")),(0,a.kt)("h2",r({},{id:"objet-\xe9v\xe9nement"}),"Objet \xe9v\xe9nement"),(0,a.kt)("p",null,"Chaque \xe9v\xe9nement est retourn\xe9 sous forme d'objet par la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),". Par d\xe9faut, il contient les propri\xe9t\xe9s suivantes :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name of the object triggering the event - Not included if the event is triggered by the form")))),(0,a.kt)("p",null,"Des propri\xe9t\xe9s suppl\xe9mentaires sont retourn\xe9es lorsque l'\xe9v\xe9nement se produit sur des objets sp\xe9cifiques. En particulier :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/FormObjects/listboxOverview#supported-form-events"}),"list box")," et les ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/FormObjects/listboxOverview#supported-form-events-1"}),"colonnes de list box")," retournent des ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/FormObjects/listboxOverview#additional-properties"}),"propri\xe9t\xe9s suppl\xe9mentaires")," telles que ",(0,a.kt)("inlineCode",{parentName:"li"},"columnName")," ou ",(0,a.kt)("inlineCode",{parentName:"li"},"isRowSelected"),"."),(0,a.kt)("li",{parentName:"ul"},"Les ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/FormObjects/viewProAreaOverview"}),"zones 4D View Pro")," retournent par exemple des propri\xe9t\xe9s ",(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," ou ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," dans l'objet \xe9v\xe9nement ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/Events/onAfterEdit"}),"On After Edit"),".")),(0,a.kt)("h2",r({},{id:"\xe9v\xe9nements-et-m\xe9thodes"}),"\xc9v\xe9nements et m\xe9thodes"),(0,a.kt)("p",null,"Lorsqu'un \xe9v\xe9nement formulaire se produit, 4D effectue les actions suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tout d'abord, il parcourt les objets du formulaire et appelle la m\xe9thode objet pour tout objet (associ\xe9 \xe0 l'\xe9v\xe9nement) dont la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."),(0,a.kt)("li",{parentName:"ul"},"Deuxi\xe8mement, il appelle la m\xe9thode formulaire si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire correspondante a \xe9t\xe9 s\xe9lectionn\xe9e.")),(0,a.kt)("p",null,"Ne supposez pas que les m\xe9thodes objet, le cas \xe9ch\xe9ant, seront appel\xe9es dans un ordre particulier. La r\xe8gle d'or est que les m\xe9thodes objet sont toujours appel\xe9es avant la m\xe9thode formulaire. Si un objet est un sous-formulaire, les m\xe9thodes objet du formulaire liste du sous-formulaire sont appel\xe9es, suivie de la m\xe9thode formulaire du formulaire liste. 4D continue alors d'appeler les m\xe9thodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la m\xeame r\xe8gle pour les m\xe9thodes objet et formulaire au sein de l'objet sous-formulaire."),(0,a.kt)("p",null,"\xc0 l'exception des \xe9v\xe9nements ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Events/onLoad"}),"On Load")," et ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Events/onUnload"}),"On Unload")," (voir ci-dessous), si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire n'est pas s\xe9lectionn\xe9e pour un \xe9v\xe9nement donn\xe9, cela n'emp\xeache pas les appels vers les m\xe9thodes objet pour les objets dont la m\xeame propri\xe9t\xe9 d'\xe9v\xe9nement est s\xe9lectionn\xe9e. En d'autres termes, l'activation ou la d\xe9sactivation d'un \xe9v\xe9nement au niveau du formulaire n'a aucun effet sur les propri\xe9t\xe9s d'\xe9v\xe9nement de l'objet."),(0,a.kt)("p",null,"Le nombre d'objets associ\xe9s \xe0 un \xe9v\xe9nement d\xe9pend de la nature de l'\xe9v\xe9nement."),(0,a.kt)("h2",r({},{id:"tableau-des-appels"}),"Tableau des appels"),(0,a.kt)("p",null,"Le tableau suivant r\xe9sume la mani\xe8re dont les m\xe9thodes objet et formulaire sont appel\xe9es pour chaque type d'\xe9v\xe9nement :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Ev\xe9nement"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9thode objet"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9thode formulaire"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Objets"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Load"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Unload"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur validation"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Double Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Edit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Getting Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Losing Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur activation"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Deactivate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur appel ext\xe9rieur"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur changement page"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Enter"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Move"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Leave"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Up"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur menu s\xe9lectionn\xe9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Bound variable change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Data Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur appel zone du plug in"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur ent\xeate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Break"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Footer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Box"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Display Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tous les objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun, except\xe9 les List box")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun, except\xe9 les List box")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur redimensionnement"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Selection Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur chargement ligne"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur minuteur"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Aucun")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Scroll"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Data Entry"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box et Zone 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Header Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box et Zone 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Footer Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Sort"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sur clic long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Bouton)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Alternative Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Bouton et List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Expand"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Liste hi\xe9rar. et list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Collapse"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Liste hi\xe9rar. et list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Delete Action"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Liste hi\xe9rar. et list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Resource Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Loading Error"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Filtering"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On End URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open External Link"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Window Opening Denied"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (Zone Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Range Changed"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (4D View Pro Area)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Ready"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (4D View Pro Area)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Oui (4D View Pro Area)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Jamais"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objets concern\xe9s uniquement")))),(0,a.kt)("p",null,"Gardez toujours \xe0 l'esprit que, pour tout \xe9v\xe9nement, la m\xe9thode d'un formulaire ou d'un objet est appel\xe9e si la propri\xe9t\xe9 d'\xe9v\xe9nement correspondante est s\xe9lectionn\xe9e pour le formulaire ou les objets. L'avantage de la d\xe9sactivation des \xe9v\xe9nements dans l'environnement de d\xe9veloppement (\xe0 l'aide de la liste des propri\xe9t\xe9s de l'\xe9diteur de formulaires) est la r\xe9duction du nombre d'appels vers des m\xe9thodes et par cons\xe9quent l'optimisation de la vitesse d'ex\xe9cution de vos formulaires."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ATTENTION : Les \xe9v\xe9nements ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Events/onLoad"}),"On Load")," et ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Events/onUnload"}),"On Unload")," sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s \xe0 la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire.")))}s.isMDXComponent=!0}}]);