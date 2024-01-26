"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39540],{603905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return t?n.createElement(v,s(s({ref:a},p),{},{components:t})):n.createElement(v,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=c;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},516005:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});t(667294);var n=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"variables",title:"Variables"},i=void 0,o={unversionedId:"Concepts/variables",id:"version-20-R3/Concepts/variables",title:"Variables",description:"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. Les champs stockent les donn\xe9es sur disque, de mani\xe8re permanente ; les variables stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/fr/20-R3/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/fr/20-R3/Concepts/variant"},next:{title:"Tableaux",permalink:"/docs/fr/20-R3/Concepts/arrays"}},u={},p=[{value:"D\xe9claration des variables",id:"d\xe9claration-des-variables",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Initializing Variables in the Declaration Line",id:"initializing-variables-in-the-declaration-line",level:2},{value:"Assigner des valeurs",id:"assigner-des-valeurs",level:2},{value:"Variables locales, process et interprocess",id:"variables-locales-process-et-interprocess",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables process",id:"variables-process",level:3},{value:"Variables interprocess",id:"variables-interprocess",level:3}],d={toc:p};function c(e){var{components:a}=e,t=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. ",(0,n.kt)("strong",{parentName:"p"},"Les champs")," stockent les donn\xe9es sur disque, de mani\xe8re permanente ; ",(0,n.kt)("strong",{parentName:"p"},"les variables")," stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire."),(0,n.kt)("p",null,"Lorsque vous d\xe9finissez votre base, vous indiquez \xe0 4D les noms et les types de champs que vous voulez utiliser. C\u2019est pratiquement la m\xeame chose pour les variables \u2014 vous leur donnez un nom et un type (cf. ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/data-types"}),"Type de donn\xe9es"),")."),(0,n.kt)("p",null,"Une fois cr\xe9\xe9e, vous pouvez utiliser une variable partout dans votre application. Par exemple, vous pouvez stocker une variable de type texte dans un champ du m\xeame type :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," [MaTable]MonChamp:=MonTexte\n")),(0,n.kt)("p",null,"Les variables sont des objets du langage; vous pouvez cr\xe9er et utiliser des variables qui n\u2019appara\xeetront jamais \xe0 l'\xe9cran. Dans vos formulaires, vous pouvez afficher des variables \xe0 l\u2019\xe9cran (\xe0 l'exception des pointeurs et des BLOB), les utiliser pour saisir des donn\xe9es, et les imprimer dans des \xe9tats. Dans ces cas, elles se comportent exactement comme des champs, et les m\xeames contr\xf4les int\xe9gr\xe9s sont disponibles lorsque vous les cr\xe9ez . Les variables peuvent \xe9galement servir \xe0 contr\xf4ler des boutons, des list box, des zones de d\xe9filement, des boutons image, etc., ou \xe0 afficher les r\xe9sultats de calculs ne devant pas \xeatre sauvegard\xe9s."),(0,n.kt)("h2",r({},{id:"d\xe9claration-des-variables"}),"D\xe9claration des variables"),(0,n.kt)("p",null,"You usually create variables by declaring them. Le langage 4D propose deux mani\xe8res de d\xe9clarer des variables :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using the ",(0,n.kt)("inlineCode",{parentName:"li"},"var")," keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),"),(0,n.kt)("li",{parentName:"ul"},'using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).')),(0,n.kt)("p",null,"When variables are declared, they are initialized to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/data-types#default-values"}),(0,n.kt)("strong",{parentName:"a"},"default value corresponding to their type")),", which they will keep during the session as long as they have not been ",(0,n.kt)("a",r({parentName:"p"},{href:"#assigning-data"}),"assigned"),". Alternatively, when declaring variables, you can ",(0,n.kt)("a",r({parentName:"p"},{href:"#initializing-variables-in-the-declaration-line"}),"initialize")," their value along with their data type all within one line."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate est cr\xe9\xe9 \n // 4D identifie le type date  \n // et affecte la date courante + 30 jours\n")),(0,n.kt)("p",{parentName:"admonition"},"When a variable is created before being declared, it is not initialized at the declaration step.")),(0,n.kt)("p",null,"To declare a variable of any type, use the following syntax:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"var <varName>{; <varName2>;...}{ : <varType>}")),(0,n.kt)("p",null,"Par exemple :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myText : Text  //une variable de type texte\nvar myDate1; myDate2 : Date  //plusieurs variables de type texte\nvar $myFile : 4D.File  //une variable objet de classe de fichier\nvar $myVar //une variable variant\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varName")," est le nom de la variable, il doit respecter les ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/identifiers"}),"r\xe8gles de 4D")," concernant les identifiants. Cette syntaxe ne prend en charge que les d\xe9clarations de variables ",(0,n.kt)("a",r({parentName:"p"},{href:"#local-process-and-interprocess-variables"}),"locales et process"),", ce qui exclut donc les variables ",(0,n.kt)("a",r({parentName:"p"},{href:"#interprocess-variables"}),"interprocess")," et les ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/arrays"}),"tableaux"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varType")," peut \xeatre :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"un ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R3/Concepts/data-types"}),"type basique"),", auquel cas la variable contient une valeur du type d\xe9clar\xe9,"),(0,n.kt)("li",{parentName:"ul"},"une ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R3/Concepts/classes"}),"r\xe9f\xe9rence de classe")," (classe 4D ou classe utilisateur), auquel cas la variable contient une r\xe9f\xe9rence \xe0 un objet de la classe d\xe9finie.")),(0,n.kt)("p",null,"Si ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," est omis, une variable de type ",(0,n.kt)("strong",{parentName:"p"},"variant")," est cr\xe9\xe9e."),(0,n.kt)("p",null,"Le tableau suivant r\xe9pertorie toutes les valeurs ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," prises en charge :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"varType"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contenu"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur texte")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur Heure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur bool\xe9en")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur entier long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur r\xe9el")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur pointeur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur image")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur Blob scalaire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Variant")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valeur variant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objet de classe par d\xe9faut (4D.Object)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object de la classe 4D className")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object de la classe utilisateur className")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<namespace><className>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object de la classe className du composant ",(0,n.kt)("inlineCode",{parentName:"td"},"<namespace>"))))),(0,n.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour d\xe9clarer les variables locales et les variables process basiques :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//\xe9quivalent \xe0 :  \nvar $o : 4D.Object\n//\xe9galement \xe9quivalent \xe0 C_OBJECT($o)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour d\xe9clarer les variables objet de classe 4D :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour d\xe9clarer les variables objet de classe utilisateur :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n")),(0,n.kt)("h2",r({},{id:"initializing-variables-in-the-declaration-line"}),"Initializing Variables in the Declaration Line"),(0,n.kt)("p",null,"When declaring variables, you have the flexibility to specify their data type and provide an initial value in one statement. Voici quelques exemples :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n')),(0,n.kt)("p",null,"Variables can also be declared and initialized without explicitly mentioning their data type, in which case their type will be inferred by 4D. Voici quelques exemples :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $text:="hello"  // Inferred as Text \nvar $number:=20  // Inferred as Real \nvar $obj:={}  // Inferred as an Object \nvar $mycol:=[]  // Inferred as a Collection  \n\n')),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The inferred type might be different between ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/interpreted-compiled"}),"interpreted and compiled mode")," if the evaluation of the value is too ambiguous. In this case, a warning is generated by the compiler and a variant type is used. For example, in the following $a type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and $a will be typed as a variant for the compiled mode."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $class:={test: "a"}\nvar $a:=$class.test\n\n'))),(0,n.kt)("p",null,"4D tries to deduce the most general type. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"var $a:=10 //Real type is inferred"),"). In such cases, or when initializing a variable with a complex type such as class instantiation, it is recommended to pass the type explicitly."),(0,n.kt)("p",null,"In most cases, all variable types are automatically determined. The exception is when you assign a value to a process or interprocess variable, which then triggers a warning message."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Multiple assignments in one line are not supported:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $a; $b : Integer:=15 //error\n\n"))),(0,n.kt)("h2",r({},{id:"assigner-des-valeurs"}),"Assigner des valeurs"),(0,n.kt)("p",null,"Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou r\xe9cup\xe9rer leur valeur. Donner une valeur \xe0 une variable s\u2019appelle ",(0,n.kt)("strong",{parentName:"p"},"assigner une valeur (ou affecter une valeur)")," et s\u2019effectue \xe0 l\u2019aide de l\u2019op\xe9rateur d\u2019assignation (:=). L\u2019op\xe9rateur d\u2019assignation est \xe9galement utilis\xe9 pour assigner des valeurs aux champs."),(0,n.kt)("p",null,"L\u2019op\xe9rateur d\u2019assignation est un premier moyen pour cr\xe9er une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez cr\xe9er \xe0 gauche de l\u2019op\xe9rateur. Par exemple :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"MonNombre:=3\n")),(0,n.kt)("p",null,"cr\xe9e la variable ",(0,n.kt)("em",{parentName:"p"},"MonNombre")," et lui donne la valeur num\xe9rique 3. Si MonNombre existait d\xe9j\xe0, elle prend simplement la valeur 3."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Il n'est g\xe9n\xe9ralement pas recommand\xe9 de cr\xe9er des variables sans ",(0,n.kt)("a",r({parentName:"p"},{href:"#declaratio-des-variables"}),"d\xe9clarer leur type"),".")),(0,n.kt)("p",null,"Bien entendu, les variables ne seraient pas tr\xe8s utiles si vous ne pouviez pas r\xe9cup\xe9rer les valeurs qu\u2019elles contiennent. De nouveau, vous utilisez l\u2019op\xe9rateur d\u2019assignation. Si vous devez placer la valeur de MonNombre dans un champ nomm\xe9 ","[Produits]","Taille, il vous suffit de placer ",(0,n.kt)("em",{parentName:"p"},"MonNombre")," \xe0 droite de l\u2019op\xe9rateur d\u2019assignation :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"[Produits]Taille:=MonNombre\n")),(0,n.kt)("p",null,"Dans ce cas, ",(0,n.kt)("em",{parentName:"p"},"[Produits]","Taille")," vaudrait 3. Cet exemple est plut\xf4t simple, mais il illustre le moyen \xe9l\xe9mentaire dont vous disposez pour transf\xe9rer des donn\xe9es d\u2019un objet vers un autre en utilisant le langage."),(0,n.kt)("p",null,"Vous assignez des valeurs aux \xe9l\xe9ments du tableau \xe0 l'aide d'accolades ({...}) :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'atNoms{1}:="Richard"\n')),(0,n.kt)("h2",r({},{id:"variables-locales-process-et-interprocess"}),"Variables locales, process et interprocess"),(0,n.kt)("p",null,"Vous pouvez cr\xe9er trois types de variables : des variables ",(0,n.kt)("strong",{parentName:"p"},"locales"),", des variables ",(0,n.kt)("strong",{parentName:"p"},"process")," et des variables ",(0,n.kt)("strong",{parentName:"p"},"interprocess"),". La diff\xe9rence entre ces trois types de variables est leur port\xe9e, ou les objets pour lesquels elles sont disponibles."),(0,n.kt)("h3",r({},{id:"variables-locales"}),"Variables locales"),(0,n.kt)("p",null,"Une variable locale, comme son nom l\u2019indique, est locale \xe0 une m\xe9thode \u2014 c\u2019est-\xe0-dire accessible uniquement \xe0 l\u2019int\xe9rieur de la m\xe9thode dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e et inaccessible \xe0 l\u2019ext\xe9rieur de cette m\xe9thode. Le fait d'\xeatre local \xe0 une m\xe9thode est formellement qualifi\xe9 de \xabport\xe9e locale\xbb. Les variables locales sont utilis\xe9es pour restreindre une variable afin qu'elle ne fonctionne que dans la m\xe9thode."),(0,n.kt)("p",null,"Vous pouvez choisir d'utiliser une variable locale pour :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Eviter des conflits de noms avec les autres variables"),(0,n.kt)("li",{parentName:"ul"},"Utiliser temporairement des valeurs,"),(0,n.kt)("li",{parentName:"ul"},"R\xe9duire le nombre de variables process")),(0,n.kt)("p",null,"Le nom d\u2019une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu\u2019\xe0 31 autres caract\xe8res. Si vous saisissez un nom plus long, 4D le tronque pour le ramener \xe0 31 caract\xe8res."),(0,n.kt)("p",null,"Lorsque vous d\xe9veloppez un projet d'application comportant de nombreuses m\xe9thodes et variables, il arrive souvent que vous n\u2019ayez besoin d\u2019utiliser une variable que dans une m\xe9thode. Vous pouvez alors cr\xe9er et utiliser une variable locale, sans devoir vous soucier de l\u2019existence d\u2019une autre variable du m\xeame nom ailleurs dans la base."),(0,n.kt)("p",null,"Souvent, dans une application, des informations ponctuelles sont demand\xe9es \xe0 l\u2019utilisateur. La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Request")," permet d'obtenir cette information. Elle affiche une bo\xeete de dialogue comportant un message demandant \xe0 l\u2019utilisateur de r\xe9pondre et, lorsque la r\xe9ponse est valid\xe9e, la retourne.   G\xe9n\xe9ralement, il n\u2019est pas n\xe9cessaire de conserver cette information tr\xe8s longtemps dans vos m\xe9thodes. C\u2019est l\u2019endroit parfait pour utiliser une variable locale. Voici un exemple :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Saisissez votre num\xe9ro d\'identification :")\nIf(OK=1)\n    QUERY([Personnes];[Personnes]ID=$vsID)\n End if\n')),(0,n.kt)("p",null,"Cette m\xe9thode demande simplement \xe0 l\u2019utilisateur de saisir un num\xe9ro d\u2019identification. La r\xe9ponse est plac\xe9e dans une variable locale, $vsID, puis la m\xe9thode la recherche parmi les champs ","[Personnes]","ID. Une fois la m\xe9thode termin\xe9e, la variable locale $vsID est effac\xe9e de la m\xe9moire. Ce fonctionnement est bien adapt\xe9 puisque la variable n\u2019est utile qu\u2019une seule fois et dans cette m\xe9thode uniquement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note :")," Les param\xe8tres $1, $2 etc. pass\xe9s aux m\xe9thodes sont des variables locales. Pour plus d'informations, veuillez consulter la section ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/parameters"}),"Param\xe8tres"),"."),(0,n.kt)("h3",r({},{id:"variables-process"}),"Variables process"),(0,n.kt)("p",null,"Une variable process est \u201cvisible\u201d uniquement dans le process o\xf9 elle a \xe9t\xe9 cr\xe9\xe9e. Elle est utilisable par toutes les m\xe9thodes du process et toutes les m\xe9thodes appel\xe9es depuis le process."),(0,n.kt)("p",null,"Le nom d\u2019une variable process ne comporte aucun pr\xe9fixe. Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."),(0,n.kt)("p",null,"En mode interpr\xe9t\xe9, les variables sont g\xe9r\xe9es dynamiquement; elles sont cr\xe9\xe9es et effac\xe9es de la m\xe9moire \xab\xe0 la vol\xe9e\xbb. En mode compil\xe9, tous les process que vous cr\xe9ez (process utilisateur) partagent la m\xeame d\xe9finition de variables process, mais chaque process a une instance diff\xe9rente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2."),(0,n.kt)("p",null,"Un process peut lire et \xe9crire des variables process dans un autre process \xe0 l'aide des commandes ",(0,n.kt)("inlineCode",{parentName:"p"},"LIRE VARIABLE PROCESS")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"ECRIRE VARIABLE PROCESS"),". Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins d\xe9crits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont \xe9t\xe9 cr\xe9\xe9es dans 4D) :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Communication interprocess \xe0 des endroits particuliers de votre code"),(0,n.kt)("li",{parentName:"ul"},"Gestion du glisser-d\xe9poser interprocess"),(0,n.kt)("li",{parentName:"ul"},"En client/serveur, communication entre les process sur les postes clients et les proc\xe9dures stock\xe9es ex\xe9cut\xe9es sur le serveur")),(0,n.kt)("p",null,"Pour plus d'informations, reportez-vous \xe0 la section ",(0,n.kt)("strong",{parentName:"p"},"Process")," et \xe0 la description de ces commandes."),(0,n.kt)("h3",r({},{id:"variables-interprocess"}),"Variables interprocess"),(0,n.kt)("p",null,"Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilis\xe9es pour le partage d\u2019informations entre les process."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"L'utilisation de variables interprocess n'est pas recommand\xe9e car elles ne sont pas disponibles depuis le process pr\xe9emptif et peuvent rendre le code moins maintenable.")),(0,n.kt)("p",null,"Le nom d'une variable interprocess commence toujours par les symboles ",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),' - un signe "inf\xe9rieur \xe0" suivi d\'un signe "sup\xe9rieur \xe0" - suivis de 31 caract\xe8res.'),(0,n.kt)("p",null,"En mode client/serveur, chaque poste (client et serveur) partage la m\xeame d\xe9finition des variables interprocess, mais chacun utilise une instance diff\xe9rente de chaque variable."))}c.isMDXComponent=!0}}]);