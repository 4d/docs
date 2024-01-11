"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22051],{603905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),m=o(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},725397:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(667294);var a=n(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={id:"date",title:"Date"},u=void 0,p={unversionedId:"Concepts/date",id:"version-20/Concepts/date",title:"Date",description:"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/fr/20/Concepts/date",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/fr/20/Concepts/collection"},next:{title:"Null et Indefinie",permalink:"/docs/fr/20/Concepts/null-undefined"}},o={},s=[{value:"Constantes litt\xe9rales de type date",id:"constantes-litt\xe9rales-de-type-date",level:2},{value:"Op\xe9rateurs sur les dates",id:"op\xe9rateurs-sur-les-dates",level:2}],d={toc:s};function m(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767."),(0,a.kt)("p",null,"Bien que le mode de repr\xe9sentation des dates puisse fonctionner avec des dates jusqu'\xe0 l'ann\xe9e 32 767, certaines op\xe9rations passant par le syst\xe8me imposent une limite inf\xe9rieure."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Dans le manuel de r\xe9f\xe9rence du langage 4D, les param\xe8tres de type Date dans les descriptions des commandes sont appel\xe9s Date, sauf sp\xe9cification explicite."),(0,a.kt)("h2",r({},{id:"constantes-litt\xe9rales-de-type-date"}),"Constantes litt\xe9rales de type date"),(0,a.kt)("p",null,"Une constante litt\xe9rale de type date est comprise entre deux points d'exclamation (!\u2026!). Une date doit \xeatre structur\xe9e avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n")),(0,a.kt)("p",null,"Une date nulle s\u2019\xe9crit ",(0,a.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Astuce :")," L'\xe9diteur de code comprend un raccourci pour saisir une date nulle. Pour cela, tapez un point d\u2019exclamation (!) et appuyez sur la touche Entr\xe9e."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour des raisons de compatibilit\xe9, 4D accepte que l'ann\xe9e soit saisie sur deux chiffres. Dans ce cas, le programme consid\xe8re qu\u2019elle appartient au XXe ou au XXIe si\xe8cle selon qu'elle est sup\xe9rieure ou inf\xe9rieure \xe0 30, sauf si ce fonctionnement par d\xe9faut a \xe9t\xe9 modifi\xe9 \xe0 l'aide de la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"SET DEFAULT CENTURY"),"."),(0,a.kt)("li",{parentName:"ul"},'Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" (cf. Page M\xe9thodes), vous devez utiliser le format de date d\xe9fini dans votre syst\xe8me. G\xe9n\xe9ralement dans un environnement fran\xe7ais, une date est saisie sous la forme jour/mois/ann\xe9e, une barre oblique "/" s\xe9parant les valeurs.')),(0,a.kt)("h2",r({},{id:"op\xe9rateurs-sur-les-dates"}),"Op\xe9rateurs sur les dates"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valeur"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Diff\xe9rence"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date - Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"19")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Addition"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date + Num\xe9rique"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! + 9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-29!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Soustraction"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date - Num\xe9rique"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - 9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-11!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date = Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! = !2017-01-01!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date # Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date > Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! > !2017-01-01!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! > !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date < Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! < !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! < !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date >= Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! >=!2017-01-01!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!>=!2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date <= Date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! <= !2017-01-20!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! <= !2017-01-01!"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))))}m.isMDXComponent=!0}}]);