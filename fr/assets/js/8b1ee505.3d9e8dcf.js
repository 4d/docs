"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77],{3905:(e,s,a)=>{a.d(s,{Zo:()=>p,kt:()=>m});var r=a(67294);function t(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function n(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?n(Object(a),!0).forEach((function(s){t(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function o(e,s){if(null==e)return{};var a,r,t=function(e,s){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=r.createContext({}),u=function(e){var s=r.useContext(i),a=s;return e&&(a="function"==typeof e?e(s):l(l({},s),e)),a},p=function(e){var s=u(e.components);return r.createElement(i.Provider,{value:s},e.children)},c={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},d=r.forwardRef((function(e,s){var a=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=t,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(v,l(l({ref:s},p),{},{components:a})):r.createElement(v,l({ref:s},p))}));function m(e,s){var a=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var i in s)hasOwnProperty.call(s,i)&&(o[i]=s[i]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41761:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});a(67294);var r=a(3905);function t(){return t=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}function n(e,s){if(null==e)return{};var a,r,t=function(e,s){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const l={id:"variables",title:"Variables"},o=void 0,i={unversionedId:"Concepts/variables",id:"version-18/Concepts/variables",title:"Variables",description:"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. Les champs stockent les donn\xe9es sur disque, de mani\xe8re permanente ; les variables stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/fr/18/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/fr/18/Concepts/variant"},next:{title:"Tableaux",permalink:"/docs/fr/18/Concepts/arrays"}},u={},p=[{value:"Cr\xe9er des variables",id:"cr\xe9er-des-variables",level:2},{value:"Assigner des valeurs",id:"assigner-des-valeurs",level:2},{value:"Variables locales, process et interprocess",id:"variables-locales-process-et-interprocess",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables process",id:"variables-process",level:3},{value:"Variables interprocess",id:"variables-interprocess",level:3}],c={toc:p};function d(e){var{components:s}=e,a=n(e,["components"]);return(0,r.kt)("wrapper",t({},c,a,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. ",(0,r.kt)("strong",{parentName:"p"},"Les champs")," stockent les donn\xe9es sur disque, de mani\xe8re permanente ; ",(0,r.kt)("strong",{parentName:"p"},"les variables")," stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire."),(0,r.kt)("p",null,"Lorsque vous d\xe9finissez votre base, vous indiquez \xe0 4D les noms et les types de champs que vous voulez utiliser. C\u2019est pratiquement la m\xeame chose pour les variables \u2014 vous leur donnez un nom et un type (cf. ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/fr/18/Concepts/data-types"}),"Type de donn\xe9es"),")."),(0,r.kt)("p",null,"Les variables sont des objets du langage; vous pouvez cr\xe9er et utiliser des variables qui n\u2019appara\xeetront jamais \xe0 l'\xe9cran. Dans vos formulaires, vous pouvez afficher des variables \xe0 l\u2019\xe9cran (\xe0 l'exception des pointeurs et des BLOB), les utiliser pour saisir des donn\xe9es, et les imprimer dans des \xe9tats. Dans ces cas, elles se comportent exactement comme des champs, et les m\xeames contr\xf4les int\xe9gr\xe9s sont disponibles lorsque vous les cr\xe9ez . Les variables peuvent \xe9galement servir \xe0 contr\xf4ler des boutons, des list box, des zones de d\xe9filement, des boutons image, etc., ou \xe0 afficher les r\xe9sultats de calculs ne devant pas \xeatre sauvegard\xe9s."),(0,r.kt)("h2",t({},{id:"cr\xe9er-des-variables"}),"Cr\xe9er des variables"),(0,r.kt)("p",null,'Vous pouvez cr\xe9er des variables en les d\xe9clarant \xe0 l\'aide de l\'une des commandes des th\xe8mes "Tableaux" ou "Compilateur".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :"),"Les tableaux sont un type particulier de variables. Un tableau est une s\xe9rie ordonn\xe9e de variables de m\xeame type. Pour plus d'informations, veuillez consulter le th\xe8me ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/fr/18/Concepts/arrays"}),"Tableaux"),"."),(0,r.kt)("p",null,"Par exemple, si vous souhaitez d\xe9finir une variable de type texte, il suffira d'\xe9crire :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_TEXT(monTexte)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :"),"Vous pouvez \xe9galement cr\xe9er des variables simplement en les utilisant; il n\u2019est pas obligatoire de les d\xe9clarer formellement comme vous le faites avec les champs. Par exemple, si vous voulez cr\xe9er une variable qui contient la date du jour plus 30 jours, il vous suffit d\u2019\xe9crire dans 4D :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," MaDate:=Current date+30 //MaDate est cr\xe9\xe9e et prend la valeur de la date courante plus 30 jours\n")),(0,r.kt)("p",null,"Une fois cr\xe9\xe9e, vous pouvez utiliser une variable partout dans votre base. Par exemple, vous pouvez la stocker dans un champ du m\xeame type :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," [MaTable]MonChamp:=MonTexte\n")),(0,r.kt)("p",null,"Voici quelques d\xe9clarations de variables simples :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"\n C_BLOB(vxMyBlob) // La variable process vxMyBlob est d\xe9clar\xe9e comme variable de type BLOB\n C_DATE($vdCurDate) // La variable locale $vdCurDate est d\xe9clar\xe9e comme variable de type Date\n C_C_LONGINT(vg1;vg2;vg3) // Les 3 variables process vg1, vg2 et vg3 sont d\xe9clar\xe9es comme variables de type Entier long\n C_OBJECT($vObj) // La variable locale $vObj est d\xe9clar\xe9e comme variable de type Objet\n C_COLLECTION($vCol) // La variable locale $vCol est d\xe9clar\xe9e comme variable de type Collection\nARRAY LONGINT(alAnArray;10) //La variable process alAnArray est d\xe9clar\xe9e comme un tableau entier long de 10 \xe9l\xe9ments\n")),(0,r.kt)("h2",t({},{id:"assigner-des-valeurs"}),"Assigner des valeurs"),(0,r.kt)("p",null,"Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou r\xe9cup\xe9rer leur valeur. Donner une valeur \xe0 une variable s\u2019appelle ",(0,r.kt)("strong",{parentName:"p"},"assigner une valeur (ou affecter une valeur)")," et s\u2019effectue \xe0 l\u2019aide de l\u2019op\xe9rateur d\u2019assignation (:=). L\u2019op\xe9rateur d\u2019assignation est \xe9galement utilis\xe9 pour assigner des valeurs aux champs."),(0,r.kt)("p",null,"L\u2019op\xe9rateur d\u2019assignation est le premier moyen pour cr\xe9er une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez cr\xe9er \xe0 gauche de l\u2019op\xe9rateur. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"MonNombre:=3\n")),(0,r.kt)("p",null,"cr\xe9e la variable ",(0,r.kt)("em",{parentName:"p"},"MonNombre")," et lui donne la valeur num\xe9rique 3. Si MonNombre existait d\xe9j\xe0, elle prend simplement la valeur 3."),(0,r.kt)("p",null,"Bien entendu, les variables ne seraient pas tr\xe8s utiles si vous ne pouviez pas r\xe9cup\xe9rer les valeurs qu\u2019elles contiennent. De nouveau, vous utilisez l\u2019op\xe9rateur d\u2019assignation. Si vous devez placer la valeur de MonNombre dans un champ nomm\xe9 ","[Produits]","Taille, il vous suffit de placer ",(0,r.kt)("em",{parentName:"p"},"MonNombre")," \xe0 droite de l\u2019op\xe9rateur d\u2019assignation :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"[Produits]Taille:=MonNombre\n")),(0,r.kt)("p",null,"Dans ce cas, ",(0,r.kt)("em",{parentName:"p"},"[Produits]","Taille")," vaudrait 3. Cet exemple est plut\xf4t simple, mais il illustre le moyen \xe9l\xe9mentaire dont vous disposez pour transf\xe9rer des donn\xe9es d\u2019un objet vers un autre en utilisant le langage."),(0,r.kt)("p",null,"Vous assignez des valeurs aux \xe9l\xe9ments du tableau \xe0 l'aide d'accolades ({...}) :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'atNoms{1}:="Richard"\n')),(0,r.kt)("h2",t({},{id:"variables-locales-process-et-interprocess"}),"Variables locales, process et interprocess"),(0,r.kt)("p",null,"Vous pouvez cr\xe9er trois types de variables : des variables ",(0,r.kt)("strong",{parentName:"p"},"locales"),", des variables ",(0,r.kt)("strong",{parentName:"p"},"process")," et des variables ",(0,r.kt)("strong",{parentName:"p"},"interprocess"),". La diff\xe9rence entre ces trois types de variables est leur port\xe9e, ou les objets pour lesquels elles sont disponibles."),(0,r.kt)("h3",t({},{id:"variables-locales"}),"Variables locales"),(0,r.kt)("p",null,"Une variable locale, comme son nom l\u2019indique, est locale \xe0 une m\xe9thode \u2014 c\u2019est-\xe0-dire accessible uniquement \xe0 l\u2019int\xe9rieur de la m\xe9thode dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e et inaccessible \xe0 l\u2019ext\xe9rieur de cette m\xe9thode. Le fait d'\xeatre local \xe0 une m\xe9thode est formellement qualifi\xe9 de \xabport\xe9e locale\xbb. Les variables locales sont utilis\xe9es pour restreindre une variable afin qu'elle ne fonctionne que dans la m\xe9thode."),(0,r.kt)("p",null,"Vous pouvez choisir d'utiliser une variable locale pour :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eviter des conflits de noms avec les autres variables"),(0,r.kt)("li",{parentName:"ul"},"Utiliser temporairement des valeurs,"),(0,r.kt)("li",{parentName:"ul"},"R\xe9duire le nombre de variables process")),(0,r.kt)("p",null,"Le nom d\u2019une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu\u2019\xe0 31 autres caract\xe8res. Si vous saisissez un nom plus long, 4D le tronque pour le ramener \xe0 31 caract\xe8res."),(0,r.kt)("p",null,"Lorsque vous d\xe9veloppez une base comportant de nombreuses m\xe9thodes et variables, il arrive souvent que vous n\u2019ayez besoin d\u2019utiliser une variable que dans une m\xe9thode. Vous pouvez alors cr\xe9er et utiliser une variable locale, sans devoir vous soucier de l\u2019existence d\u2019une autre variable du m\xeame nom ailleurs dans la base."),(0,r.kt)("p",null,"Fr\xe9quemment, dans une base de donn\xe9es, des informations ponctuelles sont demand\xe9es \xe0 l\u2019utilisateur. La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," permet d'obtenir cette information. Elle affiche une bo\xeete de dialogue comportant un message demandant \xe0 l\u2019utilisateur de r\xe9pondre et, lorsque la r\xe9ponse est valid\xe9e, la retourne.   G\xe9n\xe9ralement, il n\u2019est pas n\xe9cessaire de conserver cette information tr\xe8s longtemps dans vos m\xe9thodes. C\u2019est l\u2019endroit parfait pour utiliser une variable locale. Voici un exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Saisissez votre num\xe9ro d\'identification :")\nIf(OK=1)\n    QUERY([Personnes];[Personnes]ID=$vsID)\n End if\n')),(0,r.kt)("p",null,"Cette m\xe9thode demande simplement \xe0 l\u2019utilisateur de saisir un num\xe9ro d\u2019identification. La r\xe9ponse est plac\xe9e dans une variable locale, $vsID, puis la m\xe9thode la recherche parmi les champs ","[Personnes]","ID. Une fois la m\xe9thode termin\xe9e, la variable locale $vsID est effac\xe9e de la m\xe9moire. Ce fonctionnement est bien adapt\xe9 puisque la variable n\u2019est utile qu\u2019une seule fois et dans cette m\xe9thode uniquement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Les param\xe8tres $1, $2 etc. pass\xe9s aux m\xe9thodes sont des variables locales. Pour plus d'informations, veuillez consulter la section ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/fr/18/Concepts/parameters"}),"Param\xe8tres"),"."),(0,r.kt)("h3",t({},{id:"variables-process"}),"Variables process"),(0,r.kt)("p",null,"Une variable process est \u201cvisible\u201d uniquement dans le process o\xf9 elle a \xe9t\xe9 cr\xe9\xe9e. Elle est utilisable par toutes les m\xe9thodes du process et toutes les m\xe9thodes appel\xe9es depuis le process."),(0,r.kt)("p",null,"Le nom d\u2019une variable process ne comporte aucun pr\xe9fixe. Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."),(0,r.kt)("p",null,"En mode interpr\xe9t\xe9, les variables sont g\xe9r\xe9es dynamiquement; elles sont cr\xe9\xe9es et effac\xe9es de la m\xe9moire \xab\xe0 la vol\xe9e\xbb. En mode compil\xe9, tous les process que vous cr\xe9ez (process utilisateur) partagent la m\xeame d\xe9finition de variables process, mais chaque process a une instance diff\xe9rente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2."),(0,r.kt)("p",null,"Un process peut lire et \xe9crire des variables process dans un autre process \xe0 l'aide des commandes ",(0,r.kt)("inlineCode",{parentName:"p"},"LIRE VARIABLE PROCESS")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"ECRIRE VARIABLE PROCESS"),". Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins d\xe9crits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont \xe9t\xe9 cr\xe9\xe9es dans 4D) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Communication interprocess \xe0 des endroits particuliers de votre code"),(0,r.kt)("li",{parentName:"ul"},"Gestion du glisser-d\xe9poser interprocess"),(0,r.kt)("li",{parentName:"ul"},"En client/serveur, communication entre les process sur les postes clients et les proc\xe9dures stock\xe9es ex\xe9cut\xe9es sur le serveur")),(0,r.kt)("p",null,"Pour plus d'informations, reportez-vous \xe0 la section ",(0,r.kt)("strong",{parentName:"p"},"Process")," et \xe0 la description de ces commandes."),(0,r.kt)("h3",t({},{id:"variables-interprocess"}),"Variables interprocess"),(0,r.kt)("p",null,"Les variables interprocess sont visibles dans toute la base et sont disponibles pour tous les process. Les variables interprocess sont principalement utilis\xe9es pour le partage d\u2019informations entre les process."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"L'utilisation de variables interprocess n'est pas recommand\xe9e car elles ne sont pas disponibles depuis le process pr\xe9emptif et peuvent rendre le code moins maintenable.")),(0,r.kt)("p",null,"The name of an interprocess variable always begins with the symbols (",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."),(0,r.kt)("p",null,"En mode client/serveur, chaque poste (client et serveur) partage la m\xeame d\xe9finition des variables interprocess, mais chacun utilise une instance diff\xe9rente de chaque variable."))}d.isMDXComponent=!0}}]);