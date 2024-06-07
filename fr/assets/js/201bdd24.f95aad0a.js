"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42800],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},135975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"identifiers",title:"Identifiants"},l=void 0,i={unversionedId:"Concepts/identifiers",id:"version-19/Concepts/identifiers",title:"Identifiants",description:"Cette section d\xe9taille les r\xe8gles d'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, propri\xe9t\xe9s d'objets, tableaux, formulaires, etc.).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/fr/19/Concepts/identifiers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"identifiers",title:"Identifiants"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/fr/19/Concepts/plug-ins"},next:{title:"Chemins d'acc\xe8s",permalink:"/docs/fr/19/Concepts/paths"}},p={},u=[{value:"Tableaux",id:"tableaux",level:2},{value:"Classes",id:"classes",level:2},{value:"Fonctions",id:"fonctions",level:2},{value:"Propri\xe9t\xe9s des objets",id:"propri\xe9t\xe9s-des-objets",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Tables et champs",id:"tables-et-champs",level:2},{value:"Variables",id:"variables",level:2},{value:"Autres noms",id:"autres-noms",level:2}],m={toc:u};function c(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cette section d\xe9taille les r\xe8gles d'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, propri\xe9t\xe9s d'objets, tableaux, formulaires, etc.)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En cas d'utilisation de caract\xe8res non-romans dans les noms des identifiants, leur longueur maximum peut \xeatre inf\xe9rieure.")),(0,r.kt)("h2",a({},{id:"tableaux"}),"Tableaux"),(0,r.kt)("p",null,"Les noms de tableaux suivent les m\xeames r\xe8gles que les noms de ",(0,r.kt)("a",a({parentName:"p"},{href:"#variables"}),"variables"),"."),(0,r.kt)("h2",a({},{id:"classes"}),"Classes"),(0,r.kt)("p",null,"Le nom d\u2019une classe peut contenir jusqu\u2019\xe0 31 caract\xe8res."),(0,r.kt)("p",null,"Un nom de classe doit \xeatre conforme aux ",(0,r.kt)("a",a({parentName:"p"},{href:"#propri%C3%A9t%C3%A9s-des-objets"}),"r\xe8gles standard de nommage des propri\xe9t\xe9s")," au regard de la notation \xe0 points."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Donner le m\xeame nom \xe0 une classe et \xe0 une ",(0,r.kt)("a",a({parentName:"p"},{href:"#tables"}),"table de la base")," est d\xe9conseill\xe9 afin d'\xe9viter tout conflit.")),(0,r.kt)("h2",a({},{id:"fonctions"}),"Fonctions"),(0,r.kt)("p",null,"Les noms de fonctions doivent \xeatre conformes aux ",(0,r.kt)("a",a({parentName:"p"},{href:"#propri%C3%A9t%C3%A9s-des-objets"}),"r\xe8gles standard de nommage des propri\xe9t\xe9s")," au regard de la notation \xe0 points."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Astuce :")," Si vous pr\xe9fixez le nom d'une fonction par un trait de soulignement (\"_\"), elle ne sera pas propos\xe9e par les fonctionnalit\xe9s d'auto-compl\xe9tion dans l'\xe9diteur de code 4D.")),(0,r.kt)("h2",a({},{id:"propri\xe9t\xe9s-des-objets"}),"Propri\xe9t\xe9s des objets"),(0,r.kt)("p",null,"Le nom d'une propri\xe9t\xe9 d'objet (aussi appel\xe9 ",(0,r.kt)("em",{parentName:"p"},"attribut"),") peut contenir jusqu'\xe0 255 caract\xe8res."),(0,r.kt)("p",null,"Les propri\xe9t\xe9s d'objets peuvent r\xe9f\xe9rencer des valeurs scalaires, des \xe9l\xe9ments ORDA, des fonctions de classe, d'autres objets, etc. Quelle que soit leur nature, les noms des propri\xe9t\xe9s d'objets doivent suivre certaines r\xe8gles ",(0,r.kt)("strong",{parentName:"p"},"si vous souhaitez utiliser la ",(0,r.kt)("a",a({parentName:"strong"},{href:"/docs/fr/19/Concepts/object#propri%C3%A9t%C3%A9s-des-objets"}),"notation \xe0 point"))," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Un nom de propri\xe9t\xe9 doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").'),(0,r.kt)("li",{parentName:"ul"},'Ensuite, le nom peut inclure des lettres, des chiffres, des traits de soulignement ("_") ou des dollars ("$").'),(0,r.kt)("li",{parentName:"ul"},"Les noms de propri\xe9t\xe9s sont sensibles \xe0 la casse.")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'monObjet.monAttribut:="10"\n $valeur:=$clientObj.data.address.city\n')),(0,r.kt)("admonition",a({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Faire commencer un nom de propri\xe9t\xe9 d'objet avec un caract\xe8re de soulignement (\"_\") exclura la propri\xe9t\xe9 des fonctionnalit\xe9s d'auto-compl\xe9tion dans l'\xe9diteur de code 4D. For example, if you declare ",(0,r.kt)("inlineCode",{parentName:"p"},"$o._myPrivateProperty"),", it will not be proposed in the code editor when you type in ",(0,r.kt)("inlineCode",{parentName:"p"},'"$o. "'),".")),(0,r.kt)("p",null,"Voir \xe9galement le ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6"}),"standard ECMA Script"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez la ",(0,r.kt)("strong",{parentName:"p"},"notation chaine")," avec des crochets, les noms de propri\xe9t\xe9 peuvent contenir n'importe quel caract\xe8re (ex: ",(0,r.kt)("inlineCode",{parentName:"p"},'myObject["1. First property"]'),").")),(0,r.kt)("h2",a({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("p",null,"Les noms de param\xe8tres doivent commencer par un caract\xe8re ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," et suivent les m\xeames r\xe8gles que les ",(0,r.kt)("a",a({parentName:"p"},{href:"#variables"}),"noms de variables"),"."),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n")),(0,r.kt)("h2",a({},{id:"m\xe9thodes"}),"M\xe9thodes"),(0,r.kt)("p",null,"Le nom d\u2019une m\xe9thode projet peut contenir jusqu\u2019\xe0 31 caract\xe8res."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un nom de m\xe9thode projet doit commencer par une lettre, un chiffre ou un trait de soulignement"),(0,r.kt)("li",{parentName:"ul"},'Ensuite, le nom peut inclure n\'importe quelle lettre, chiffre, un trait de soulignement ("_") ou un caract\xe8re espace.'),(0,r.kt)("li",{parentName:"ul"},"N'utilisez pas de noms r\xe9serv\xe9s, i.e. des noms de commandes 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), des mots-cl\xe9s (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), des noms de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),"), etc."),(0,r.kt)("li",{parentName:"ul"},"Les noms des m\xe9thodes projets ne sont PAS sensibles \xe0 la casse.")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conseil :")," Nous vous recommandons d'adopter, pour nommer vos m\xe9thodes, la m\xeame convention que celle utilis\xe9e dans le langage de 4D. Ecrivez les noms de vos proc\xe9dures en caract\xe8res majuscules, et vos fonctions en minuscules avec la premi\xe8re lettre en majuscule. Ainsi, lorsque vous rouvrirez un projet au bout de plusieurs mois, vous identifierez imm\xe9diatement si une m\xe9thode retourne ou non un r\xe9sultat, en regardant son nom dans la fen\xeatre de l'Explorateur."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lorsque vous appelez une m\xe9thode, vous saisissez simplement son nom. Toutefois, certaines commandes 4D int\xe9gr\xe9es telles que ",(0,r.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),", ainsi que les commandes des plug-ins, n\xe9cessitent que vous passiez le nom d'une m\xe9thode en tant que cha\xeene lorsqu'un param\xe8tre de type m\xe9thode est attendu.")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' // Cette commande attend une m\xe9thode (fonction) ou une formule\n QUERY BY FORMULA([aTable];Special query)\n  // Cette commande attend une m\xe9thode (proc\xe9dure) ou une formule\n APPLY TO SELECTION([Employees];INCREASE SALARIES)\n  // Mais cette commande attend un nom de m\xe9thode\nON EVENT CALL("HANDLE EVENTS")\n')),(0,r.kt)("h2",a({},{id:"tables-et-champs"}),"Tables et champs"),(0,r.kt)("p",null,"Vous d\xe9signez une table en \xe9crivant son nom entre crochets : ","[...]",". Vous d\xe9signez un champ en sp\xe9cifiant d'abord la table \xe0 laquelle il appartient (le nom du champ suit imm\xe9diatement celui de la table)."),(0,r.kt)("p",null,"Un nom de table ou de champ peut contenir jusqu\u2019\xe0 31 caract\xe8res."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Un nom de table oiu de champ doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").'),(0,r.kt)("li",{parentName:"ul"},"Le nom peut ensuite contenir des caract\xe8res alphab\xe9tiques, des caract\xe8res num\xe9riques, des espaces et des tirets bas (_)."),(0,r.kt)("li",{parentName:"ul"},"N'utilisez pas de noms r\xe9serv\xe9s, i.e. des noms de commandes 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), des mots-cl\xe9s (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), des noms de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),"), etc."),(0,r.kt)("li",{parentName:"ul"},"Des r\xe8gles suppl\xe9mentaires sont \xe0 respecter lorsque la base doit \xeatre manipul\xe9e via le SQL : seuls les caract\xe8res _0123456789abcdefghijklmnopqrstuvwxyz sont accept\xe9s, et le nom ne doit pas comporter de mot-cl\xe9 SQL (commande, attribut, etc.).")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Donner le m\xeame nom \xe0 une table et \xe0 une ",(0,r.kt)("a",a({parentName:"p"},{href:"#classes"}),"classe")," est d\xe9conseill\xe9 afin d'\xe9viter tout conflit.")),(0,r.kt)("h2",a({},{id:"variables"}),"Variables"),(0,r.kt)("p",null,"Le nom d'une variable peut comporter jusqu'\xe0 31 caract\xe8res, sans compter les symboles de port\xe9e (",(0,r.kt)("inlineCode",{parentName:"p"},"$")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Le nom d\'une variable doit commencer par une lettre, un trait de soulignement ou un dollar ("$") pour les ',(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/Concepts/parameters"}),"param\xe8tres")," et ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/Concepts/variables#local-variables"}),"les variables locales"),", ou ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")," pour les ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/Concepts/variables#interprocess-variables"}),"variables interprocess"),"."),(0,r.kt)("li",{parentName:"ul"},"Un chiffre en premier caract\xe8re est autoris\xe9 mais non recommand\xe9, et n'est pas pris en charge par la ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/Concepts/variables#utilisation-du-mot-cl%C3%A9-var"}),"d\xe9claration de syntaxe ",(0,r.kt)("inlineCode",{parentName:"a"},"var")),"."),(0,r.kt)("li",{parentName:"ul"},'Ensuite, le nom peut inclure des lettres, chiffres, et traits de soulignement ("_").'),(0,r.kt)("li",{parentName:"ul"},"Un espace en premier caract\xe8re est autoris\xe9 mais non recommand\xe9, et n'est pas pris en charge par la ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/Concepts/variables#utilisation-du-mot-cl%C3%A9-var"}),"d\xe9claration de syntaxe ",(0,r.kt)("inlineCode",{parentName:"a"},"var")),"."),(0,r.kt)("li",{parentName:"ul"},"N'utilisez pas de noms r\xe9serv\xe9s, i.e. des noms de commandes 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), des mots-cl\xe9s (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), des noms de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),"), etc."),(0,r.kt)("li",{parentName:"ul"},"Les noms de variables ne sont PAS sensibles \xe0 la casse.")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'For($vlRecord;1;100) //variable locale\n$vsMyString:="Hello there" //variable locale\nvar $vName; $vJob : Text //variables locales \nIf(bValidate=1) //variable process \n<>vlProcessID:=Current process() //variable interprocess\n')),(0,r.kt)("h2",a({},{id:"autres-noms"}),"Autres noms"),(0,r.kt)("p",null,"Dans le langage de 4D, plusieurs \xe9l\xe9ments ont des noms manipul\xe9s sous forme de cha\xeenes : ",(0,r.kt)("strong",{parentName:"p"},"formulaires"),", ",(0,r.kt)("strong",{parentName:"p"},"objets de formulaires"),", ",(0,r.kt)("strong",{parentName:"p"},"s\xe9lections temporaires"),", ",(0,r.kt)("strong",{parentName:"p"},"process"),", ",(0,r.kt)("strong",{parentName:"p"},"ensembles"),", ",(0,r.kt)("strong",{parentName:"p"},"barres de menus"),", etc."),(0,r.kt)("p",null,"Ces noms peuvent contenir jusqu'\xe0 255 caract\xe8res, sans compter les \xe9ventuels caract\xe8res ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les noms sous forme de cha\xeenes peuvent contenir n'importe quel caract\xe8re."),(0,r.kt)("li",{parentName:"ul"},"Les noms sous forme de cha\xeenes ne sont pas sensibles \xe0 la casse.")),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//S\xe9lection temporaire process\nUSE NAMED SELECTION([Customers];"<>ByZipcode") //S\xe9lection temporaire interprocess\n    //D\xe9marrage du process global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n    //D\xe9marrage du process local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Ensemble process\nUSE SET("<>Deleted Records") //Ensemble interprocess\nIf(Records in set("$Selection"+String($i))>0) //Ensemble client\n\n')))}c.isMDXComponent=!0}}]);