"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4219"],{765583:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>t});var r=JSON.parse('{"id":"Concepts/variables","title":"Variables","description":"Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. Les champs stockent les donn\xe9es sur disque, de mani\xe8re permanente ; les variables stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Concepts/variables.md","sourceDirName":"Concepts","slug":"/Concepts/variables","permalink":"/docs/fr/Concepts/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"variables","title":"Variables"},"sidebar":"docs","previous":{"title":"Variant","permalink":"/docs/fr/Concepts/variant"},"next":{"title":"Tableaux","permalink":"/docs/fr/Concepts/arrays"}}'),l=n("785893"),a=n("250065");let i={id:"variables",title:"Variables"},t=void 0,d={},o=[{value:"D\xe9claration des variables",id:"d\xe9claration-des-variables",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Initialisation des variables dans la ligne de d\xe9claration",id:"initialisation-des-variables-dans-la-ligne-de-d\xe9claration",level:2},{value:"Assigner des valeurs",id:"assigner-des-valeurs",level:2},{value:"Variables locales, process et interprocess",id:"variables-locales-process-et-interprocess",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables process",id:"variables-process",level:3},{value:"Variables interprocess",id:"variables-interprocess",level:3},{value:"Variables syst\xe8me",id:"variables-syst\xe8me",level:2}];function c(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Fondamentalement, dans 4D, les donn\xe9es peuvent \xeatre stock\xe9es de deux mani\xe8res. Les ",(0,l.jsx)(s.strong,{children:"champs"})," stockent les donn\xe9es sur disque, de mani\xe8re permanente ; les ",(0,l.jsx)(s.strong,{children:"variables"})," stockent les donn\xe9es en m\xe9moire, de mani\xe8re temporaire."]}),"\n",(0,l.jsxs)(s.p,{children:["Lorsque vous d\xe9finissez votre base, vous indiquez \xe0 4D les noms et les types de champs que vous voulez utiliser. C'est \xe0 peu pr\xe8s pareil pour les variables \u2014 vous pouvez aussi leur donner des noms et des types diff\xe9rents (voir ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/data-types",children:"Types de donn\xe9es"}),")."]}),"\n",(0,l.jsx)(s.p,{children:"Une fois cr\xe9\xe9e, vous pouvez utiliser une variable partout dans votre application. Par exemple, vous pouvez stocker une variable de type texte dans un champ du m\xeame type :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:" [MaTable]MonChamp:=MonTexte\n"})}),"\n",(0,l.jsx)(s.p,{children:"Les variables sont des objets du langage; vous pouvez cr\xe9er et utiliser des variables qui n\u2019appara\xeetront jamais \xe0 l'\xe9cran. Dans vos formulaires, vous pouvez afficher des variables \xe0 l\u2019\xe9cran (\xe0 l'exception des pointeurs et des BLOB), les utiliser pour saisir des donn\xe9es, et les imprimer dans des \xe9tats. Dans ces cas, elles se comportent exactement comme des champs, et les m\xeames contr\xf4les int\xe9gr\xe9s sont disponibles lorsque vous les cr\xe9ez . Les variables peuvent \xe9galement servir \xe0 contr\xf4ler des boutons, des list box, des zones de d\xe9filement, des boutons image, etc., ou \xe0 afficher les r\xe9sultats de calculs ne devant pas \xeatre sauvegard\xe9s."}),"\n",(0,l.jsx)(s.h2,{id:"d\xe9claration-des-variables",children:"D\xe9claration des variables"}),"\n",(0,l.jsxs)(s.p,{children:["You create variables by declaring them using the ",(0,l.jsx)(s.code,{children:"var"})," keyword."]}),"\n",(0,l.jsxs)(s.p,{children:["Lorsque les variables sont d\xe9clar\xe9es, elles sont initialis\xe9es \xe0 la ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/data-types#valeurs-par-defaut",children:(0,l.jsx)(s.strong,{children:"valeur par d\xe9faut correspondant \xe0 leur type"})}),", qu'elles conserveront pendant la session tant qu'on ne leur aura pas ",(0,l.jsx)(s.a,{href:"#assigning-data",children:"assign\xe9 une valeur"}),". Alternativement, lors de la d\xe9claration des variables, vous pouvez ",(0,l.jsx)(s.a,{href:"#initializing-variables-in-the-declaration-line",children:"initialiser"})," leur valeur en m\xeame temps que leur type de donn\xe9es en une seule ligne."]}),"\n",(0,l.jsxs)(s.admonition,{type:"note",children:[(0,l.jsx)(s.p,{children:"Bien que cela ne soit pas recommand\xe9, vous pouvez cr\xe9er des variables simplement en les utilisant ; il n'est pas obligatoire de les d\xe9clarer formellement. Par exemple, pour cr\xe9er une variable qui contiendra la date du jour plus 30 jours, vous pouvez \xe9crire :"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate est cr\xe9\xe9 \n // 4D identifie le type date  \n // et affecte la date courante + 30 jours\n"})}),(0,l.jsx)(s.p,{children:"Lorsqu'une variable est cr\xe9\xe9e avant d'\xeatre d\xe9clar\xe9e, elle n'est pas initialis\xe9e lors de l'\xe9tape de d\xe9claration."})]}),"\n",(0,l.jsx)(s.p,{children:"Pour d\xe9clarer une variable de n'importe quel type, utilisez la syntaxe suivante :"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,l.jsx)(s.p,{children:"Par exemple :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $myText : Text  //une variable de type texte\nvar myDate1; myDate2 : Date  //plusieurs variables de type texte\nvar $myFile : 4D.File  //une variable objet de classe de fichier\nvar $myVar //une variable variant\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"varName"})," est le nom de la variable, il doit respecter les ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/identifiers",children:"r\xe8gles de 4D"})," concernant les identifiants.\nThis syntax only supports ",(0,l.jsx)(s.a,{href:"#local-process-and-interprocess-variables",children:"local and process variables"})," declarations, thus excluding ",(0,l.jsx)(s.a,{href:"#interprocess-variables",children:"interprocess variables"})," (deprecated) and ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/arrays",children:"arrays"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"varType"})," peut \xeatre :"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["un ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/data-types",children:"type basique"}),", auquel cas la variable contient une valeur du type d\xe9clar\xe9,"]}),"\n",(0,l.jsxs)(s.li,{children:["une ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/classes",children:"r\xe9f\xe9rence de classe"})," (classe 4D ou classe utilisateur), auquel cas la variable contient une r\xe9f\xe9rence \xe0 un objet de la classe d\xe9finie."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Si ",(0,l.jsx)(s.code,{children:"varType"})," est omis, une variable de type ",(0,l.jsx)(s.strong,{children:"variant"})," est cr\xe9\xe9e."]}),"\n",(0,l.jsxs)(s.p,{children:["Le tableau suivant liste toutes les valeurs ",(0,l.jsx)(s.code,{children:"varType"})," prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"varType"}),(0,l.jsx)(s.th,{children:"Contenu"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Text"})}),(0,l.jsx)(s.td,{children:"Valeur texte"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Date"})}),(0,l.jsx)(s.td,{children:"Valeur date"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Time"})}),(0,l.jsx)(s.td,{children:"Valeur Heure"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Boolean"})}),(0,l.jsx)(s.td,{children:"Valeur bool\xe9en"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Integer"})}),(0,l.jsx)(s.td,{children:"Valeur entier long"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Real"})}),(0,l.jsx)(s.td,{children:"Valeur r\xe9el"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Pointer"})}),(0,l.jsx)(s.td,{children:"Valeur pointeur"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Picture"})}),(0,l.jsx)(s.td,{children:"Valeur image"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Blob"})}),(0,l.jsx)(s.td,{children:"Valeur Blob scalaire"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Collection"})}),(0,l.jsx)(s.td,{children:"Valeur collection"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Variant"})}),(0,l.jsx)(s.td,{children:"Valeur variant"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Object"})}),(0,l.jsx)(s.td,{children:"Object with default class"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"4D.<className>"})}),(0,l.jsx)(s.td,{children:"Objet de la classe 4D className"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"cs.<className>"})}),(0,l.jsx)(s.td,{children:"Objet de la classe utilisateur className"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"cs.<namespace><className>"})}),(0,l.jsxs)(s.td,{children:["Object de la classe className du composant ",(0,l.jsx)(s.code,{children:"<namespace>"})]})]})]})]}),"\n",(0,l.jsx)(s.admonition,{title:"Compatibilit\xe9",type:"note",children:(0,l.jsxs)(s.p,{children:["The legacy syntax using ",(0,l.jsx)(s.code,{children:"C_XXX"})," commands is deprecated as of 4D 20 R7."]})}),"\n",(0,l.jsx)(s.h3,{id:"exemples",children:"Exemples"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Pour d\xe9clarer les variables locales et les variables process basiques :"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//\xe9quivalent \xe0 :  \nvar $o : 4D.Object\n//\xe9galement \xe9quivalent \xe0 C_OBJECT($o)\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Pour d\xe9clarer les variables objet de classe 4D :"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Pour d\xe9clarer les variables objet de classe utilisateur :"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n"})}),"\n",(0,l.jsx)(s.h2,{id:"initialisation-des-variables-dans-la-ligne-de-d\xe9claration",children:"Initialisation des variables dans la ligne de d\xe9claration"}),"\n",(0,l.jsx)(s.p,{children:"Lorsque vous d\xe9clarez des variables, vous avez la flexibilit\xe9 de sp\xe9cifier leur type de donn\xe9es et de fournir une valeur initiale dans une seule instruction. Voici quelques exemples :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n'})}),"\n",(0,l.jsx)(s.p,{children:"Les variables peuvent \xe9galement \xeatre d\xe9clar\xe9es et initialis\xe9es sans mentionner explicitement leur type de donn\xe9es, auquel cas leur type sera d\xe9duit par 4D. Voici quelques exemples :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'var $text:="hello"  // Inferred as Text\nvar $number:=20  // Inferred as Real\nvar $obj:={}  // Inferred as an Object\nvar $mycol:=[]  // Inferred as a Collection  \n\n'})}),"\n",(0,l.jsxs)(s.admonition,{type:"note",children:[(0,l.jsxs)(s.p,{children:["Le type d\xe9duit peut \xeatre diff\xe9rent entre le ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/interpreted-compiled",children:"mode interpr\xe9t\xe9 et compil\xe9"})," si l'\xe9valuation de la valeur est trop ambigu\xeb. Dans ce cas, un warning est g\xe9n\xe9r\xe9 par le compilateur et un type variant est utilis\xe9. For example, in the following ",(0,l.jsx)(s.em,{children:"$a"})," type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and ",(0,l.jsx)(s.em,{children:"$a"})," will be typed as a variant for the compiled mode."]}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'var $class:={test: "a"}\nvar $a:=$class.test\n\n'})})]}),"\n",(0,l.jsxs)(s.p,{children:["4D essaie de d\xe9duire le type le plus g\xe9n\xe9ral. Par exemple, il utilise le type Real plut\xf4t que le type Integer lorsqu'une variable est initialis\xe9e avec une valeur enti\xe8re (par exemple, ",(0,l.jsx)(s.code,{children:"var $a:=10 //Le type Real est d\xe9duit"}),"). Dans de tels cas, ou lors de l'initialisation d'une variable avec un type complexe comme une instance de classe, il est recommand\xe9 de passer le type explicitement."]}),"\n",(0,l.jsx)(s.p,{children:"Dans la plupart des cas, tous les types de variables sont automatiquement d\xe9termin\xe9s. L'exception est lorsque vous attribuez une valeur \xe0 une variable process ou interprocess, ce qui d\xe9clenche ensuite un message de warning."}),"\n",(0,l.jsxs)(s.admonition,{type:"note",children:[(0,l.jsx)(s.p,{children:"Les affectations multiples sur une seule ligne ne sont pas prises en charge :"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"var $a; $b : Integer:=15 //erreur\n\n"})})]}),"\n",(0,l.jsx)(s.h2,{id:"assigner-des-valeurs",children:"Assigner des valeurs"}),"\n",(0,l.jsx)(s.p,{children:"Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou r\xe9cup\xe9rer leur valeur. Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou r\xe9cup\xe9rer leur valeur. L\u2019op\xe9rateur d\u2019assignation est \xe9galement utilis\xe9 pour assigner des valeurs aux champs."}),"\n",(0,l.jsx)(s.p,{children:"L\u2019op\xe9rateur d\u2019assignation est un premier moyen pour cr\xe9er une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez cr\xe9er \xe0 gauche de l\u2019op\xe9rateur. Par exemple :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"MonNombre:=3\n"})}),"\n",(0,l.jsxs)(s.p,{children:["cr\xe9e la variable ",(0,l.jsx)(s.em,{children:"MonNombre"})," et lui donne la valeur num\xe9rique 3. Si MonNombre existait d\xe9j\xe0, elle prend simplement la valeur 3."]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["Il n'est g\xe9n\xe9ralement pas recommand\xe9 de cr\xe9er des variables sans ",(0,l.jsx)(s.a,{href:"#declaring-variables",children:"d\xe9clarer leur type"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Bien entendu, les variables ne seraient pas tr\xe8s utiles si vous ne pouviez pas r\xe9cup\xe9rer les valeurs qu\u2019elles contiennent. De nouveau, vous utilisez l\u2019op\xe9rateur d\u2019assignation. Si vous aviez besoin de mettre la valeur de MonNombre dans un champ appel\xe9 [Produits]Taille, vous \xe9cririez ",(0,l.jsx)(s.em,{children:"MonNombre"})," \xe0 droite de l'op\xe9rateur d'assignation :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"[Produits]Taille:=MonNombre\n"})}),"\n",(0,l.jsxs)(s.p,{children:["Dans ce cas, ",(0,l.jsx)(s.em,{children:"[Produits]Taille"})," vaudrait 3. Cet exemple est plut\xf4t simple, mais il illustre le moyen \xe9l\xe9mentaire dont vous disposez pour transf\xe9rer des donn\xe9es d\u2019un objet vers un autre en utilisant le langage."]}),"\n",(0,l.jsx)(s.h2,{id:"variables-locales-process-et-interprocess",children:"Variables locales, process et interprocess"}),"\n",(0,l.jsxs)(s.p,{children:["Vous pouvez cr\xe9er trois types de variables : ",(0,l.jsx)(s.strong,{children:"locales"}),", ",(0,l.jsx)(s.strong,{children:"process"}),", et ",(0,l.jsx)(s.strong,{children:"interprocess"}),". La diff\xe9rence entre ces trois types de variables est leur port\xe9e, ou les objets pour lesquels elles sont disponibles."]}),"\n",(0,l.jsx)(s.h3,{id:"variables-locales",children:"Variables locales"}),"\n",(0,l.jsx)(s.p,{children:"Une variable locale, comme son nom l\u2019indique, est locale \xe0 une m\xe9thode \u2014 c\u2019est-\xe0-dire accessible uniquement \xe0 l\u2019int\xe9rieur de la m\xe9thode dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e et inaccessible \xe0 l\u2019ext\xe9rieur de cette m\xe9thode. Le fait d'\xeatre local \xe0 une m\xe9thode est formellement qualifi\xe9 de \xabport\xe9e locale\xbb. Les variables locales sont utilis\xe9es pour restreindre une variable afin qu'elle ne fonctionne que dans la m\xe9thode."}),"\n",(0,l.jsx)(s.p,{children:"Vous pouvez choisir d'utiliser une variable locale pour :"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Eviter des conflits de noms avec les autres variables"}),"\n",(0,l.jsx)(s.li,{children:"Utiliser temporairement des valeurs,"}),"\n",(0,l.jsx)(s.li,{children:"R\xe9duire le nombre de variables process"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Le nom d\u2019une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu\u2019\xe0 31 autres caract\xe8res. Si vous saisissez un nom plus long, 4D le tronque pour le ramener \xe0 31 caract\xe8res."}),"\n",(0,l.jsx)(s.p,{children:"Lorsque vous d\xe9veloppez un projet d'application comportant de nombreuses m\xe9thodes et variables, il arrive souvent que vous n\u2019ayez besoin d\u2019utiliser une variable que dans une m\xe9thode. Vous pouvez alors cr\xe9er et utiliser une variable locale, sans devoir vous soucier de l\u2019existence d\u2019une autre variable du m\xeame nom ailleurs dans la base."}),"\n",(0,l.jsxs)(s.p,{children:["Souvent, dans une application, des informations ponctuelles sont demand\xe9es \xe0 l\u2019utilisateur. La commande ",(0,l.jsx)(s.code,{children:"Request"})," peut obtenir ces informations. Elle affiche une bo\xeete de dialogue comportant un message demandant \xe0 l\u2019utilisateur de r\xe9pondre et, lorsque la r\xe9ponse est valid\xe9e, la retourne.   G\xe9n\xe9ralement, il n\u2019est pas n\xe9cessaire de conserver cette information tr\xe8s longtemps dans vos m\xe9thodes. C\u2019est l\u2019endroit parfait pour utiliser une variable locale. Voici un exemple :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:' $vsID:=Request("Saisissez votre num\xe9ro d\'identification :")\nIf(OK=1)\n    QUERY([Personnes];[Personnes]ID=$vsID)\n End if\n'})}),"\n",(0,l.jsx)(s.p,{children:"Cette m\xe9thode demande simplement \xe0 l\u2019utilisateur de saisir un num\xe9ro d\u2019identification. La r\xe9ponse est plac\xe9e dans une variable locale, $vsID, puis la m\xe9thode la recherche parmi les champs [Personnes]ID. Une fois la m\xe9thode termin\xe9e, la variable locale $vsID est effac\xe9e de la m\xe9moire. Ce fonctionnement est bien adapt\xe9 puisque la variable n\u2019est utile qu\u2019une seule fois et dans cette m\xe9thode uniquement."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note:"})," Les param\xe8tres $1, $2... pass\xe9s \xe0 des m\xe9thodes sont des variables locales. Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/parameters",children:"Param\xe8tres"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"variables-process",children:"Variables process"}),"\n",(0,l.jsx)(s.p,{children:"Une variable process est \u201Cvisible\u201D uniquement dans le process o\xf9 elle a \xe9t\xe9 cr\xe9\xe9e. Elle est utilisable par toutes les m\xe9thodes du process et toutes les m\xe9thodes appel\xe9es depuis le process."}),"\n",(0,l.jsx)(s.p,{children:"Le nom d\u2019une variable process ne comporte aucun pr\xe9fixe. Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,l.jsx)(s.p,{children:"En mode interpr\xe9t\xe9, les variables sont g\xe9r\xe9es dynamiquement; elles sont cr\xe9\xe9es et effac\xe9es de la m\xe9moire \xab\xe0 la vol\xe9e\xbb. En mode compil\xe9, tous les process que vous cr\xe9ez (process utilisateur) partagent la m\xeame d\xe9finition de variables process, mais chaque process a une instance diff\xe9rente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2."}),"\n",(0,l.jsxs)(s.p,{children:["Un process peut lire et \xe9crire des variables process dans un autre process \xe0 l'aide des commandes ",(0,l.jsx)(s.code,{children:"GET PROCESS VARIABLE"})," et ",(0,l.jsx)(s.code,{children:"SET PROCESS VARIABLE"}),". Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins d\xe9crits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont \xe9t\xe9 cr\xe9\xe9es dans 4D) :"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Communication interprocess \xe0 des endroits particuliers de votre code"}),"\n",(0,l.jsx)(s.li,{children:"Gestion du glisser-d\xe9poser interprocess"}),"\n",(0,l.jsx)(s.li,{children:"En client/serveur, communication entre les process sur les postes clients et les proc\xe9dures stock\xe9es ex\xe9cut\xe9es sur le serveur"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Pour plus d'informations, consultez le chapitre ",(0,l.jsx)(s.strong,{children:"Process"})," et la description de ces commandes."]}),"\n",(0,l.jsx)(s.h3,{id:"variables-interprocess",children:"Variables interprocess"}),"\n",(0,l.jsx)(s.admonition,{title:"Obsol\xe8te",type:"warning",children:(0,l.jsxs)(s.p,{children:["Use of interprocess variables is not recommended since they are not available from ",(0,l.jsx)(s.a,{href:"/docs/fr/Develop/preemptive-processes",children:"preemptive processes"})," and tend to make the code less maintainable."]})}),"\n",(0,l.jsx)(s.p,{children:"Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilis\xe9es pour le partage d\u2019informations entre les process."}),"\n",(0,l.jsxs)(s.p,{children:["Le nom d'une variable interprocess commence toujours par les symboles ",(0,l.jsx)(s.code,{children:"<>"}),' \u2014 un signe "inf\xe9rieur \xe0" et un signe "sup\xe9rieur \xe0" \u2014 suivi de 31 caract\xe8res.']}),"\n",(0,l.jsx)(s.p,{children:"En mode client/serveur, chaque poste (client et serveur) partage la m\xeame d\xe9finition des variables interprocess, mais chacun utilise une instance diff\xe9rente de chaque variable."}),"\n",(0,l.jsx)(s.h2,{id:"variables-syst\xe8me",children:"Variables syst\xe8me"}),"\n",(0,l.jsxs)(s.p,{children:["The 4D language manages several ",(0,l.jsx)(s.strong,{children:"system variables"}),", which allow you to control the execution of different operations. Vous pouvez tester leur valeur et les utiliser comme n'importe quelle variable. All system variables are ",(0,l.jsx)(s.a,{href:"#process-variables",children:"process variables"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["System variables are used by ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/command-index",children:"4D commands"}),'. Reportez-vous au paragraphe "Variables et ensembles syst\xe8me" dans la description d\'une commande pour savoir si elle affecte une variable syst\xe8me.']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Nom de variable syst\xe8me"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"OK"})}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Usually set to 1 after a command has displayed a dialog box and the user clicked the ",(0,l.jsx)(s.strong,{children:"OK"})," button, and 0 if they clicked ",(0,l.jsx)(s.strong,{children:"Cancel"}),". Some commands also modify the value of the ",(0,l.jsx)(s.code,{children:"OK"})," system variable when a operation is successfully executed."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Document"})}),(0,l.jsx)(s.td,{children:"Text"}),(0,l.jsxs)(s.td,{children:['Contains the "long name" (full path+name) of the last file opened or created using commands such as ',(0,l.jsx)(s.a,{href:"/docs/fr/commands/open-document",children:"Open document"})," or ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/select-log-file",children:"SELECT LOG FILE"}),"."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.code,{children:"FldDelimit"}),", ",(0,l.jsx)(s.code,{children:"RecDelimit"})]}),(0,l.jsx)(s.td,{children:"Text"}),(0,l.jsxs)(s.td,{children:["Contain the character codes that will be used respectively as a field separator (default is ",(0,l.jsx)(s.strong,{children:"Tab"})," (9)) and record separator (default is ",(0,l.jsx)(s.strong,{children:"carriage return"})," (13)) when importing or exporting text. Pour utiliser un s\xe9parateur diff\xe9rent, attribuez une nouvelle valeur \xe0 la variable syst\xe8me."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.code,{children:"Error"}),", ",(0,l.jsx)(s.code,{children:"Error method"}),", ",(0,l.jsx)(s.code,{children:"Error line"}),", ",(0,l.jsx)(s.code,{children:"Error formula"})]}),(0,l.jsx)(s.td,{children:"Text, Longint"}),(0,l.jsxs)(s.td,{children:["Used in an error-catching method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:(0,l.jsx)(s.code,{children:"ON ERR CALL"})})," command. See ",(0,l.jsx)(s.a,{href:"/docs/fr/Concepts/error-handling#handling-errors-within-the-method",children:"Handling errors within the method"}),"."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"MouseDown"})}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Used in a method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-event-call",children:(0,l.jsx)(s.code,{children:"ON EVENT CALL"})})," command. Prend la valeur 1 si le bouton de la souris a \xe9t\xe9 enfonc\xe9, sinon prend la valeur 0."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.code,{children:"MouseX"}),", ",(0,l.jsx)(s.code,{children:"MouseY"})]}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Used in a method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-event-call",children:(0,l.jsx)(s.code,{children:"ON EVENT CALL"})})," command. ",(0,l.jsxs)(s.li,{children:["In a ",(0,l.jsx)(s.code,{children:"MouseDown=1"})," event, ",(0,l.jsx)(s.code,{children:"MouseX"})," and ",(0,l.jsx)(s.code,{children:"MouseY"})," are respectively set to the vertical and horizontal coordinates of the click. Les deux valeurs sont exprim\xe9es en pixels et avec le syst\xe8me de coordonn\xe9es locales de la fen\xeatre. "]}),(0,l.jsxs)(s.li,{children:["In case of a picture field or variable, ",(0,l.jsx)(s.code,{children:"MouseX"})," and ",(0,l.jsx)(s.code,{children:"MouseY"})," return the local coordinates of a mouse click in the ",(0,l.jsx)(s.a,{href:"/docs/fr/Events/onClicked",children:(0,l.jsx)(s.code,{children:"On Clicked"})}),", ",(0,l.jsx)(s.a,{href:"/docs/fr/Events/onDoubleClicked",children:(0,l.jsx)(s.code,{children:"On Double Clicked"})})," and ",(0,l.jsx)(s.a,{href:"/docs/fr/Events/onMouseUp",children:(0,l.jsx)(s.code,{children:"On Mouse Up"})})," form events. Les coordonn\xe9es locales du curseur de la souris sont \xe9galement retourn\xe9es dans les \xe9v\xe9nements ",(0,l.jsx)(s.a,{href:"/docs/fr/Events/onMouseEnter",children:(0,l.jsx)(s.code,{children:"On Mouse Enter"})})," et ",(0,l.jsx)(s.a,{href:"/docs/fr/Events/onMouseMove",children:(0,l.jsx)(s.code,{children:"On Mouse Move"})})," . For more information, see the ",(0,l.jsx)(s.a,{href:"/docs/fr/FormEditor/pictures#mouse-coordinates-in-a-picture",children:"Mouse Coordinates in a picture"})," section."]})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"KeyCode"})}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Used in a method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-event-call",children:(0,l.jsx)(s.code,{children:"ON EVENT CALL"})})," command. D\xe9finit le code de caract\xe8re de la touche qui vient d'\xeatre press\xe9e. If the key is a function key, ",(0,l.jsx)(s.code,{children:"KeyCode"})," is set to a special code."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Modifiers"})}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Used in a method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-event-call",children:(0,l.jsx)(s.code,{children:"ON EVENT CALL"})})," command. Contient les codes des modifiers du clavier (Ctrl/Commande, Alt/Option, Maj, Verr."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"MouseProc"})}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsxs)(s.td,{children:["Used in a method installed by the ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-event-call",children:(0,l.jsx)(s.code,{children:"ON EVENT CALL"})})," command. Contient le num\xe9ro du process dans lequel le dernier \xe9v\xe9nement a eu lieu"]})]})]})]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"Par cons\xe9quent, vous ne pouvez pas cr\xe9er une variable, une m\xe9thode ou une fonction utilisant un des noms de ces variables."})})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return i}});var r=n(667294);let l={},a=r.createContext(l);function i(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);