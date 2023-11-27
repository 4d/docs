"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82788],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>N});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=p(t),N=l,k=m["".concat(d,".").concat(N)]||m[N]||s[N]||r;return t?a.createElement(k,i(i({ref:n},o),{},{components:t})):a.createElement(k,i({ref:n},o))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>o});t(67294);var a=t(3905);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const i={id:"null-undefined",title:"Null et Indefinie"},u=void 0,d={unversionedId:"Concepts/null-undefined",id:"version-20-R3/Concepts/null-undefined",title:"Null et Indefinie",description:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"null-undefined",title:"Null et Indefinie"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/Concepts/date"},next:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/Concepts/number"}},p={},o=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Op\xe9rateurs sur les Null",id:"op\xe9rateurs-sur-les-null",level:2},{value:"Op\xe9rateurs sur les Undefined",id:"op\xe9rateurs-sur-les-undefined",level:2},{value:"Exemples",id:"exemples",level:2}],s={toc:o};function m(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",l({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."),(0,a.kt)("h2",l({},{id:"null"}),"Null"),(0,a.kt)("p",null,"Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,a.kt)("strong",{parentName:"p"},"null"),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur."),(0,a.kt)("p",null,"Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attributs d'objets"),(0,a.kt)("li",{parentName:"ul"},"\xe9l\xe9ments de collections"),(0,a.kt)("li",{parentName:"ul"},"variables de type objet, collection, pointeur, image ou variant.")),(0,a.kt)("h2",l({},{id:"undefined"}),"Undefined"),(0,a.kt)("p",null,"Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Une variable dite \"ind\xe9finie\" est une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Une fonction utilisateur (c'est-\xe0-dire une m\xe9thode projet qui retourne une valeur) peut retourner une valeur ind\xe9finie si, \xe0 l'int\xe9rieur de la m\xe9thode, le r\xe9sultat de la fonction ($0) est assign\xe9 \xe0 une expression ind\xe9finie (une expression issue d'un calcul effectu\xe9 avec au moins une variable ind\xe9finie). Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Indefinie")," retourne toujours Faux pour un champ). Une variable variant porte la valeur par d\xe9faut ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"."),(0,a.kt)("h2",l({},{id:"op\xe9rateurs-sur-les-null"}),"Op\xe9rateurs sur les Null"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Valeur"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"valeur scalaire")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("p",null,"Les ",(0,a.kt)("em",{parentName:"p"},"valeurs scalaires")," sont des valeurs de type cha\xeene, date, heure, bool\xe9en, nombre ou Blob. Lorsqu'elles sont d\xe9clar\xe9es, leur ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/Concepts/data-types#valeurs-par-defaut"}),"valeur par d\xe9faut")," n'est ni undefined ni null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par d\xe9faut undefined ou null. Ex :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n')),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Les comparaisons avec les op\xe9rateurs Sup\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Inf\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), et Inf\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") ne sont pas prises en charge avec des valeurs Null et renvoient une erreur.")),(0,a.kt)("h2",l({},{id:"op\xe9rateurs-sur-les-undefined"}),"Op\xe9rateurs sur les Undefined"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Valeur"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," c.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"autres valeurs")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"autres valeurs")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"autres valeurs")," sont des expressions de tout type dont la valeur n'est ni Undefined ni Null."),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Les comparaisons de valeurs Undefined avec des pointeurs, des images, des Blobs, des objets, des collections, d'autres valeurs Undefined ou Null \xe0 l'aide des op\xe9rateurs Sup\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Inf\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">="),") et Inf\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") ne sont pas prises en charge et renvoient une erreur.")),(0,a.kt)("h2",l({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,"Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," et de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n\n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n\n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n\n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n')),(0,a.kt)("p",null,"Exemples de r\xe9sultats de comparaisons avec des valeurs ind\xe9finies et nulles :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n')))}m.isMDXComponent=!0}}]);