/*! For license information please see abd1f01f.4a5824d9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47820],{461291:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var r=n(474848),a=n(28453);const l={id:"variables",title:"Variables"},i=void 0,t={id:"Concepts/variables",title:"Variables",description:"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. Les champs stockent les donn\xe9es sur disque, de mani\xe8re permanente ; les variables stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/fr/19/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/fr/19/Concepts/variant"},next:{title:"Tableaux",permalink:"/docs/fr/19/Concepts/arrays"}},d={},o=[{value:"D\xe9claration des variables",id:"d\xe9claration-des-variables",level:2},{value:"Utilisation du mot-cl\xe9 <code>var</code>",id:"utilisation-du-mot-cl\xe9-var",level:3},{value:"Exemples",id:"exemples",level:4},{value:"Utilisation d&#39;une directive C_",id:"utilisation-dune-directive-c_",level:3},{value:"Assigner des valeurs",id:"assigner-des-valeurs",level:2},{value:"Variables locales, process et interprocess",id:"variables-locales-process-et-interprocess",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables process",id:"variables-process",level:3},{value:"Variables interprocess",id:"variables-interprocess",level:3}];function c(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. ",(0,r.jsx)(s.strong,{children:"Les champs"})," stockent les donn\xe9es sur disque, de mani\xe8re permanente ; ",(0,r.jsx)(s.strong,{children:"les variables"})," stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire."]}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque vous d\xe9finissez votre base, vous indiquez \xe0 4D les noms et les types de champs que vous voulez utiliser. C\u2019est pratiquement la m\xeame chose pour les variables \u2014 vous leur donnez un nom et un type (cf. ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/data-types",children:"Type de donn\xe9es"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Une fois cr\xe9\xe9e, vous pouvez utiliser une variable partout dans votre application. Par exemple, vous pouvez stocker une variable de type texte dans un champ du m\xeame type :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" [MaTable]MonChamp:=MonTexte\n"})}),"\n",(0,r.jsx)(s.p,{children:"Les variables sont des objets du langage; vous pouvez cr\xe9er et utiliser des variables qui n\u2019appara\xeetront jamais \xe0 l'\xe9cran. Dans vos formulaires, vous pouvez afficher des variables \xe0 l\u2019\xe9cran (\xe0 l'exception des pointeurs et des BLOB), les utiliser pour saisir des donn\xe9es, et les imprimer dans des \xe9tats. Dans ces cas, elles se comportent exactement comme des champs, et les m\xeames contr\xf4les int\xe9gr\xe9s sont disponibles lorsque vous les cr\xe9ez . Les variables peuvent \xe9galement servir \xe0 contr\xf4ler des boutons, des list box, des zones de d\xe9filement, des boutons image, etc., ou \xe0 afficher les r\xe9sultats de calculs ne devant pas \xeatre sauvegard\xe9s."}),"\n",(0,r.jsx)(s.h2,{id:"d\xe9claration-des-variables",children:"D\xe9claration des variables"}),"\n",(0,r.jsx)(s.p,{children:"You usually create variables by declaring them. Le langage 4D propose deux mani\xe8res de d\xe9clarer des variables :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\xe0 l'aide du mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"var"})," (recommand\xe9 particuli\xe8rement si votre code utilise des objets et des classes),"]}),"\n",(0,r.jsx)(s.li,{children:'using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When variables are declared, they are initialized to the ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/data-types#default-values",children:(0,r.jsx)(s.strong,{children:"default value corresponding to their type"})}),", which they will keep during the session as long as they have not been ",(0,r.jsx)(s.a,{href:"#assigning-data",children:"assigned"}),"."]}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate est cr\xe9\xe9 \n // 4D identifie le type date  \n // et affecte la date courante + 30 jours\n"})}),(0,r.jsx)(s.p,{children:"When a variable is created before being declared, it is not initialized at the declaration step."})]}),"\n",(0,r.jsxs)(s.h3,{id:"utilisation-du-mot-cl\xe9-var",children:["Utilisation du mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"var"})]}),"\n",(0,r.jsxs)(s.p,{children:["Il est recommand\xe9 de d\xe9clarer les variables \xe0 l'aide du mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"var"}),", car cette syntaxe permet de lier les variables objet aux classes. L'utilisation de cette syntaxe am\xe9liore les suggestions de l'\xe9diteur de code et les fonctionnalit\xe9s type-ahead."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour d\xe9clarer une variable de n'importe quel type avec le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"var"}),", utilisez la syntaxe suivante :"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,r.jsx)(s.p,{children:"Par exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myText : Text  //une variable de type texte\nvar myDate1; myDate2 : Date  //plusieurs variables de type texte\nvar $myFile : 4D.File  //une variable objet de classe de fichier\nvar $myVar //une variable variant\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"varName"})," est le nom de la variable, il doit \xeatre conforme aux ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/identifiers",children:"r\xe8gles 4D"})," concernant les identifiants.",(0,r.jsx)(s.br,{}),"\nCette syntaxe prend uniquement en charge les d\xe9clarations de ",(0,r.jsx)(s.a,{href:"#local-process-and-interprocess-variables",children:"variables locales et variables process"}),", excluant ainsi les ",(0,r.jsx)(s.a,{href:"#interprocess-variables",children:"variables interprocess"})," et les ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/arrays",children:"tableaux"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"varType"})," peut \xeatre :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["un ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/data-types",children:"type basique"}),", auquel cas la variable contient une valeur du type d\xe9clar\xe9,"]}),"\n",(0,r.jsxs)(s.li,{children:["une ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/classes",children:"r\xe9f\xe9rence de classe"})," (classe 4D ou classe utilisateur), auquel cas la variable contient une r\xe9f\xe9rence \xe0 un objet de la classe d\xe9finie."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Si ",(0,r.jsx)(s.code,{children:"varType"})," est omis, une variable de type ",(0,r.jsx)(s.strong,{children:"variant"})," est cr\xe9\xe9e."]}),"\n",(0,r.jsxs)(s.p,{children:["Le tableau suivant r\xe9pertorie toutes les valeurs ",(0,r.jsx)(s.code,{children:"varType"})," prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"varType"}),(0,r.jsx)(s.th,{children:"Contenu"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Text"})}),(0,r.jsx)(s.td,{children:"Valeur texte"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Date"})}),(0,r.jsx)(s.td,{children:"Valeur date"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Time"})}),(0,r.jsx)(s.td,{children:"Valeur Heure"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Boolean"})}),(0,r.jsx)(s.td,{children:"Valeur bool\xe9en"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Integer"})}),(0,r.jsx)(s.td,{children:"Valeur entier long"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Real"})}),(0,r.jsx)(s.td,{children:"Valeur r\xe9el"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Pointer"})}),(0,r.jsx)(s.td,{children:"Valeur pointeur"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Picture"})}),(0,r.jsx)(s.td,{children:"Valeur image"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Blob"})}),(0,r.jsx)(s.td,{children:"Valeur BLOB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Collection"})}),(0,r.jsx)(s.td,{children:"Valeur collection"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Variant"})}),(0,r.jsx)(s.td,{children:"Valeur variant"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Object"})}),(0,r.jsxs)(s.td,{children:["Objet avec classe par d\xe9faut (",(0,r.jsx)(s.code,{children:"4D.Object"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"4D.<className>"})}),(0,r.jsx)(s.td,{children:"Object de la classe 4D className"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cs.<className>"})}),(0,r.jsx)(s.td,{children:"Object de la classe utilisateur className"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pour d\xe9clarer les variables locales et les variables process basiques :"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \n\nvar $o : 4D.Object\n//also equivalent to C_OBJECT($o)\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pour d\xe9clarer les variables objet de classe 4D :"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pour d\xe9clarer les variables objet de classe utilisateur :"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n"})}),"\n",(0,r.jsx)(s.h3,{id:"utilisation-dune-directive-c_",children:"Utilisation d'une directive C_"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," Cette fonctionnalit\xe9 n'est pas recommand\xe9e pour d\xe9clarer des variables dans des m\xe9thodes. Il est recommand\xe9 d'utiliser le mot-cl\xe9 ",(0,r.jsx)(s.a,{href:"#utilisation-du-mot-cle-var",children:"var"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'Les directives du th\xe8me "Compilateur" vous permettent de d\xe9clarer des variables de types basiques.'}),"\n",(0,r.jsx)(s.p,{children:"Par exemple, si vous souhaitez d\xe9finir une variable de type texte, il suffira d'\xe9crire :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" C_TEXT(monTexte)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Voici quelques d\xe9clarations de variables simples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" C_BLOB(vxMyBlob) // La variable process vxMyBlob est d\xe9clar\xe9e comme variable de type BLOB C_DATE($vdCurDate) // La variable locale $vdCurDate est d\xe9clar\xe9e comme variable de type Date\n C_C_LONGINT(vg1;vg2;vg3) // Les 3 variables process vg1, vg2 et vg3 sont d\xe9clar\xe9es comme variables de type Entier long\n C_OBJECT($vObj) // La variable locale $vObj est d\xe9clar\xe9e comme variable de type Objet\n C_COLLECTION($vCol) // La variable locale $vCol est d\xe9clar\xe9e comme variable de type Collection\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Les tableaux sont un type particulier de variables (un tableau est une s\xe9rie ordonn\xe9e de variables du m\xeame type). Les tableaux sont d\xe9clar\xe9s avec des commandes sp\xe9cifiques, telles que ",(0,r.jsx)(s.code,{children:"ARRAY LONGINT(alAnArray;10)"}),". Pour plus d'informations, veuillez consulter le th\xe8me ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/arrays",children:"Tableaux"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"assigner-des-valeurs",children:"Assigner des valeurs"}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou r\xe9cup\xe9rer leur valeur. Donner une valeur \xe0 une variable s\u2019appelle ",(0,r.jsx)(s.strong,{children:"assigner une valeur (ou affecter une valeur)"})," et s\u2019effectue \xe0 l\u2019aide de l\u2019op\xe9rateur d\u2019assignation (:=). L\u2019op\xe9rateur d\u2019assignation est \xe9galement utilis\xe9 pour assigner des valeurs aux champs."]}),"\n",(0,r.jsx)(s.p,{children:"L\u2019op\xe9rateur d\u2019assignation est un premier moyen pour cr\xe9er une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez cr\xe9er \xe0 gauche de l\u2019op\xe9rateur. Par exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"MonNombre:=3\n"})}),"\n",(0,r.jsxs)(s.p,{children:["cr\xe9e la variable ",(0,r.jsx)(s.em,{children:"MonNombre"})," et lui donne la valeur num\xe9rique 3. Si MonNombre existait d\xe9j\xe0, elle prend simplement la valeur 3."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Il n\u2019est g\xe9n\xe9ralement pas recommand\xe9 de cr\xe9er des variables sans ",(0,r.jsx)(s.a,{href:"#creating-variables",children:"d\xe9clarer leur type"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Bien entendu, les variables ne seraient pas tr\xe8s utiles si vous ne pouviez pas r\xe9cup\xe9rer les valeurs qu\u2019elles contiennent. De nouveau, vous utilisez l\u2019op\xe9rateur d\u2019assignation. Si vous devez placer la valeur de MonNombre dans un champ nomm\xe9 [Produits]Taille, il vous suffit de placer ",(0,r.jsx)(s.em,{children:"MonNombre"})," \xe0 droite de l\u2019op\xe9rateur d\u2019assignation :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"[Produits]Taille:=MonNombre\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Dans ce cas, ",(0,r.jsx)(s.em,{children:"[Produits]Taille"})," vaudrait 3. Cet exemple est plut\xf4t simple, mais il illustre le moyen \xe9l\xe9mentaire dont vous disposez pour transf\xe9rer des donn\xe9es d\u2019un objet vers un autre en utilisant le langage."]}),"\n",(0,r.jsx)(s.p,{children:"Vous assignez des valeurs aux \xe9l\xe9ments du tableau \xe0 l'aide d'accolades ({...}) :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'atNoms{1}:="Richard"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"variables-locales-process-et-interprocess",children:"Variables locales, process et interprocess"}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez cr\xe9er trois types de variables : des variables ",(0,r.jsx)(s.strong,{children:"locales"}),", des variables ",(0,r.jsx)(s.strong,{children:"process"})," et des variables ",(0,r.jsx)(s.strong,{children:"interprocess"}),". La diff\xe9rence entre ces trois types de variables est leur port\xe9e, ou les objets pour lesquels elles sont disponibles."]}),"\n",(0,r.jsx)(s.h3,{id:"variables-locales",children:"Variables locales"}),"\n",(0,r.jsx)(s.p,{children:"Une variable locale, comme son nom l\u2019indique, est locale \xe0 une m\xe9thode \u2014 c\u2019est-\xe0-dire accessible uniquement \xe0 l\u2019int\xe9rieur de la m\xe9thode dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e et inaccessible \xe0 l\u2019ext\xe9rieur de cette m\xe9thode. Le fait d'\xeatre local \xe0 une m\xe9thode est formellement qualifi\xe9 de \xabport\xe9e locale\xbb. Les variables locales sont utilis\xe9es pour restreindre une variable afin qu'elle ne fonctionne que dans la m\xe9thode."}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez choisir d'utiliser une variable locale pour :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Eviter des conflits de noms avec les autres variables"}),"\n",(0,r.jsx)(s.li,{children:"Utiliser temporairement des valeurs,"}),"\n",(0,r.jsx)(s.li,{children:"R\xe9duire le nombre de variables process"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Le nom d\u2019une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu\u2019\xe0 31 autres caract\xe8res. Si vous saisissez un nom plus long, 4D le tronque pour le ramener \xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"Lorsque vous d\xe9veloppez un projet d'application comportant de nombreuses m\xe9thodes et variables, il arrive souvent que vous n\u2019ayez besoin d\u2019utiliser une variable que dans une m\xe9thode. Vous pouvez alors cr\xe9er et utiliser une variable locale, sans devoir vous soucier de l\u2019existence d\u2019une autre variable du m\xeame nom ailleurs dans la base."}),"\n",(0,r.jsxs)(s.p,{children:["Souvent, dans une application, des informations ponctuelles sont demand\xe9es \xe0 l\u2019utilisateur. La commande ",(0,r.jsx)(s.code,{children:"Request"})," permet d'obtenir cette information. Elle affiche une bo\xeete de dialogue comportant un message demandant \xe0 l\u2019utilisateur de r\xe9pondre et, lorsque la r\xe9ponse est valid\xe9e, la retourne.   G\xe9n\xe9ralement, il n\u2019est pas n\xe9cessaire de conserver cette information tr\xe8s longtemps dans vos m\xe9thodes. C\u2019est l\u2019endroit parfait pour utiliser une variable locale. Voici un exemple :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' $vsID:=Request("Saisissez votre num\xe9ro d\'identification :")\nIf(OK=1)\n    QUERY([Personnes];[Personnes]ID=$vsID)\n End if\n'})}),"\n",(0,r.jsx)(s.p,{children:"Cette m\xe9thode demande simplement \xe0 l\u2019utilisateur de saisir un num\xe9ro d\u2019identification. La r\xe9ponse est plac\xe9e dans une variable locale, $vsID, puis la m\xe9thode la recherche parmi les champs [Personnes]ID. Une fois la m\xe9thode termin\xe9e, la variable locale $vsID est effac\xe9e de la m\xe9moire. Ce fonctionnement est bien adapt\xe9 puisque la variable n\u2019est utile qu\u2019une seule fois et dans cette m\xe9thode uniquement."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Les param\xe8tres $1, $2 etc. pass\xe9s aux m\xe9thodes sont des variables locales. Pour plus d'informations, veuillez consulter la section ",(0,r.jsx)(s.a,{href:"/docs/fr/19/Concepts/parameters",children:"Param\xe8tres"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"variables-process",children:"Variables process"}),"\n",(0,r.jsx)(s.p,{children:"Une variable process est \u201cvisible\u201d uniquement dans le process o\xf9 elle a \xe9t\xe9 cr\xe9\xe9e. Elle est utilisable par toutes les m\xe9thodes du process et toutes les m\xe9thodes appel\xe9es depuis le process."}),"\n",(0,r.jsx)(s.p,{children:"Le nom d\u2019une variable process ne comporte aucun pr\xe9fixe. Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"En mode interpr\xe9t\xe9, les variables sont g\xe9r\xe9es dynamiquement; elles sont cr\xe9\xe9es et effac\xe9es de la m\xe9moire \xab\xe0 la vol\xe9e\xbb. En mode compil\xe9, tous les process que vous cr\xe9ez (process utilisateur) partagent la m\xeame d\xe9finition de variables process, mais chaque process a une instance diff\xe9rente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2."}),"\n",(0,r.jsxs)(s.p,{children:["Un process peut lire et \xe9crire des variables process dans un autre process \xe0 l'aide des commandes ",(0,r.jsx)(s.code,{children:"LIRE VARIABLE PROCESS"})," et ",(0,r.jsx)(s.code,{children:"ECRIRE VARIABLE PROCESS"}),". Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins d\xe9crits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont \xe9t\xe9 cr\xe9\xe9es dans 4D) :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Communication interprocess \xe0 des endroits particuliers de votre code"}),"\n",(0,r.jsx)(s.li,{children:"Gestion du glisser-d\xe9poser interprocess"}),"\n",(0,r.jsx)(s.li,{children:"En client/serveur, communication entre les process sur les postes clients et les proc\xe9dures stock\xe9es ex\xe9cut\xe9es sur le serveur"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations, reportez-vous \xe0 la section ",(0,r.jsx)(s.strong,{children:"Process"})," et \xe0 la description de ces commandes."]}),"\n",(0,r.jsx)(s.h3,{id:"variables-interprocess",children:"Variables interprocess"}),"\n",(0,r.jsx)(s.p,{children:"Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilis\xe9es pour le partage d\u2019informations entre les process."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"L'utilisation de variables interprocess n'est pas recommand\xe9e car elles ne sont pas disponibles depuis le process pr\xe9emptif et peuvent rendre le code moins maintenable."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Le nom d'une variable interprocess commence toujours par les symboles ",(0,r.jsx)(s.code,{children:"<>"}),' - un signe "inf\xe9rieur \xe0" suivi d\'un signe "sup\xe9rieur \xe0" - suivis de 31 caract\xe8res.']}),"\n",(0,r.jsx)(s.p,{children:"En mode client/serveur, chaque poste (client et serveur) partage la m\xeame d\xe9finition des variables interprocess, mais chacun utilise une instance diff\xe9rente de chaque variable."})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var r=n(296540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var r,l={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!d.hasOwnProperty(r)&&(l[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===l[r]&&(l[r]=s[r]);return{$$typeof:a,type:e,key:o,ref:c,props:l,_owner:t.current}}s.Fragment=l,s.jsx=o,s.jsxs=o},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(296540);const a={},l=r.createContext(a);function i(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);