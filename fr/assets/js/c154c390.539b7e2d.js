"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94633],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>N});var a=t(667294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(t),N=l,k=m["".concat(d,".").concat(N)]||m[N]||s[N]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},316938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});t(667294);var a=t(603905);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const i={id:"null-undefined",title:"Null et Indefinie"},u=void 0,d={unversionedId:"Concepts/null-undefined",id:"version-20/Concepts/null-undefined",title:"Null et Indefinie",description:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/20/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"null-undefined",title:"Null et Indefinie"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/20/Concepts/date"},next:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/20/Concepts/number"}},o={},p=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Op\xe9rateurs sur les Null",id:"op\xe9rateurs-sur-les-null",level:2},{value:"Op\xe9rateurs sur les Undefined",id:"op\xe9rateurs-sur-les-undefined",level:2},{value:"Exemples",id:"exemples",level:2}],s={toc:p};function m(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",l({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."),(0,a.kt)("h2",l({},{id:"null"}),"Null"),(0,a.kt)("p",null,"Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,a.kt)("strong",{parentName:"p"},"null"),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur. Trying to read a property of a ",(0,a.kt)("strong",{parentName:"p"},"null")," value returns an error."),(0,a.kt)("p",null,"Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attributs d'objets"),(0,a.kt)("li",{parentName:"ul"},"\xe9l\xe9ments de collections"),(0,a.kt)("li",{parentName:"ul"},"variables of the object, collection, pointer, picture, or variant type (see also ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/fr/20/Concepts/data-types#null-as-default-value"}),"Null as default value"),".")),(0,a.kt)("h2",l({},{id:"undefined"}),"Undefined"),(0,a.kt)("p",null,"Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Une variable dite \"ind\xe9finie\" est une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"A variant variable has ",(0,a.kt)("strong",{parentName:"p"},"undefined")," as ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/20/Concepts/data-types#default-values"}),"default value"),"."),(0,a.kt)("p",null,"Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Indefinie")," retourne toujours Faux pour un champ)."),(0,a.kt)("p",null,"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/en/page89.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," with them:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Objet, collection, pointeur : Null"),(0,a.kt)("li",{parentName:"ul"},"Image : image vide"),(0,a.kt)("li",{parentName:"ul"},"Bool\xe9en : False"),(0,a.kt)("li",{parentName:"ul"},'Cha\xeene : ""'),(0,a.kt)("li",{parentName:"ul"},"Num\xe9rique : 0"),(0,a.kt)("li",{parentName:"ul"},'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'),(0,a.kt)("li",{parentName:"ul"},"Heure : 0 (nombre de ms)"),(0,a.kt)("li",{parentName:"ul"},"Ind\xe9fini, Null : pas de changement")))),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.'))),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n\n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une expression de condition est automatiquement convertie \xe0 Faux lorsque son \xe9valuation donne Ind\xe9finie avec les mots-cl\xe9s Si et Au cas ou :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Ind\xe9finie en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n"))),(0,a.kt)("h2",l({},{id:"op\xe9rateurs-sur-les-null"}),"Op\xe9rateurs sur les Null"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Valeur"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"valeur scalaire")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("p",null,"Les ",(0,a.kt)("em",{parentName:"p"},"valeurs scalaires")," sont des valeurs de type cha\xeene, date, heure, bool\xe9en, nombre ou Blob. Lorsqu'elles sont d\xe9clar\xe9es, leur ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/20/Concepts/data-types#valeurs-par-defaut"}),"valeur par d\xe9faut")," n'est ni undefined ni null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par d\xe9faut undefined ou null. Ex :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n')),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Les comparaisons avec les op\xe9rateurs Sup\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Inf\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), et Inf\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") ne sont pas prises en charge avec des valeurs Null et renvoient une erreur.")),(0,a.kt)("h2",l({},{id:"op\xe9rateurs-sur-les-undefined"}),"Op\xe9rateurs sur les Undefined"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Valeur"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," c.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"autres valeurs")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"autres valeurs")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"autres valeurs")," sont des expressions de tout type dont la valeur n'est ni Undefined ni Null."),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Les comparaisons de valeurs Undefined avec des pointeurs, des images, des Blobs, des objets, des collections, d'autres valeurs Undefined ou Null \xe0 l'aide des op\xe9rateurs Sup\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Inf\xe9rieur \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Sup\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},">="),") et Inf\xe9rieur ou \xe9gal \xe0 (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") ne sont pas prises en charge et renvoient une erreur.")),(0,a.kt)("h2",l({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,"Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," et de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n\n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n\n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n\n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n')),(0,a.kt)("p",null,"Exemples de r\xe9sultats de comparaisons avec des valeurs ind\xe9finies et nulles :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n')))}m.isMDXComponent=!0}}]);