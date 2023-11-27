"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73900],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(t),f=l,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});t(67294);var r=t(3905);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const a={id:"null-undefined",title:"Null et Indefinie"},u=void 0,o={unversionedId:"Concepts/null-undefined",id:"version-18/Concepts/null-undefined",title:"Null et Indefinie",description:"Null",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/18/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"null-undefined",title:"Null et Indefinie"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/18/Concepts/date"},next:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/18/Concepts/number"}},p={},s=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Exemples",id:"exemples",level:2}],d={toc:s};function c(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",l({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",l({},{id:"null"}),"Null"),(0,r.kt)("p",null,"Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,r.kt)("strong",{parentName:"p"},"null"),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur."),(0,r.kt)("p",null,"Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Null"),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"attributs d'objets"),(0,r.kt)("li",{parentName:"ul"},"\xe9l\xe9ments de collections"),(0,r.kt)("li",{parentName:"ul"},"variables de type objet, collection, pointeur, image ou variant.")),(0,r.kt)("h2",l({},{id:"undefined"}),"Undefined"),(0,r.kt)("p",null,"Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Une variable dite \"ind\xe9finie\" est une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Une fonction utilisateur (c'est-\xe0-dire une m\xe9thode projet qui retourne une valeur) peut retourner une valeur ind\xe9finie si, \xe0 l'int\xe9rieur de la m\xe9thode, le r\xe9sultat de la fonction ($0) est assign\xe9 \xe0 une expression ind\xe9finie (une expression issue d'un calcul effectu\xe9 avec au moins une variable ind\xe9finie). Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Indefinie")," retourne toujours Faux pour un champ). Une variable variant porte la valeur par d\xe9faut ",(0,r.kt)("strong",{parentName:"p"},"undefined"),"."),(0,r.kt)("h2",l({},{id:"exemples"}),"Exemples"),(0,r.kt)("p",null,"Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Undefined")," et de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Null")," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // Faux\n$null:=($vEmp.name=Null) //Faux\n\n$undefined:=Undefined($vEmp.children) // Faux\n$null:=($vEmp.children=Null) //Vrai\n\n$undefined:=Undefined($vEmp.parent) // Vrai\n$null:=($vEmp.parent=Null) //Vrai\n')))}c.isMDXComponent=!0}}]);