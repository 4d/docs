"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91074"],{84563:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>a});var s=JSON.parse('{"id":"Concepts/pointer","title":"Pointer","description":"Les variables ou expressions de type Pointeur sont des r\xe9f\xe9rences \xe0 d\'autres variables (y compris des tableaux et des \xe9l\xe9ments de tableaux), \xe0 des tables, des champs ou des objets. Il n\'existe pas de champ de type Pointeur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_pointer.md","sourceDirName":"Concepts","slug":"/Concepts/pointer","permalink":"/docs/fr/20-R7/Concepts/pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pointer","title":"Pointer"},"sidebar":"docs","previous":{"title":"Picture","permalink":"/docs/fr/20-R7/Concepts/picture"},"next":{"title":"String","permalink":"/docs/fr/20-R7/Concepts/string"}}'),t=r("785893"),i=r("250065");let l={id:"pointer",title:"Pointer"},a=void 0,o={},u=[{value:"Utiliser des pointeurs : un exemple",id:"utiliser-des-pointeurs--un-exemple",level:2},{value:"Op\xe9rateurs sur les pointeurs",id:"op\xe9rateurs-sur-les-pointeurs",level:2},{value:"Principales utilisations",id:"principales-utilisations",level:2},{value:"Utiliser des pointeurs vers des tables",id:"utiliser-des-pointeurs-vers-des-tables",level:3},{value:"Utiliser des pointeurs vers des champs",id:"utiliser-des-pointeurs-vers-des-champs",level:3},{value:"Utiliser des pointeurs vers des variables",id:"utiliser-des-pointeurs-vers-des-variables",level:3},{value:"Utiliser des pointeurs vers des \xe9l\xe9ments de tableau",id:"utiliser-des-pointeurs-vers-des-\xe9l\xe9ments-de-tableau",level:3},{value:"Utiliser des pointeurs vers des tableaux",id:"utiliser-des-pointeurs-vers-des-tableaux",level:3},{value:"Passer des pointeurs aux m\xe9thodes",id:"passer-des-pointeurs-aux-m\xe9thodes",level:3},{value:"Pointeurs vers des pointeurs",id:"pointeurs-vers-des-pointeurs",level:3}];function d(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Les variables ou expressions de type Pointeur sont des r\xe9f\xe9rences \xe0 d'autres variables (y compris des tableaux et des \xe9l\xe9ments de tableaux), \xe0 des tables, des champs ou des objets. Il n'existe pas de champ de type Pointeur."}),"\n",(0,t.jsx)(n.p,{children:"Les pointeurs sont des outils de programmation avanc\xe9e. Lorsque vous utilisez le langage de 4D, vous vous r\xe9f\xe9rez aux diff\xe9rents objets par l\u2019interm\xe9diaire de leur nom \u2014 en particulier les tables, champs, variables et tableaux. Cependant, il est parfois utile de pouvoir appeler ou r\xe9f\xe9rencer ces \xe9l\xe9ments sans n\xe9cessairement conna\xeetre leur nom. C\u2019est ce que permettent les pointeurs."}),"\n",(0,t.jsx)(n.p,{children:'Le concept de pointeur n\u2019est pas tellement \xe9loign\xe9 de la vie courante. Vous vous r\xe9f\xe9rez souvent \xe0 des choses sans conna\xeetre leur identit\xe9 exacte. Par exemple, vous pourriez dire \xe0 un ami : "Allons faire un tour avec ta voiture" au lieu de "Allons faire un tour avec la voiture qui a la plaque d\u2019immatriculation 123ABD". Dans ce cas, vous faites r\xe9f\xe9rence \xe0 la voiture avec la plaque d\'immatriculation 123ABD en utilisant l\'expression "ta voiture". L\'expression "la voiture qui a la plaque d\'immatriculation 123ABD" est le nom d\'un objet, et l\'expression "ta voiture" revient \xe0 utiliser un pointeur pour r\xe9f\xe9rencer l\'objet.'}),"\n",(0,t.jsx)(n.p,{children:'La capacit\xe9 de se r\xe9f\xe9rer \xe0 quelque chose sans conna\xeetre son identit\xe9 exacte est tr\xe8s utile. Si votre ami s\u2019achetait une nouvelle voiture, l\u2019expression "ta voiture" serait toujours exacte \u2014 ce serait toujours une voiture et vous pourriez toujours aller quelque part avec. Les pointeurs fonctionnent de la m\xeame mani\xe8re. Par exemple, un pointeur peut pointer \xe0 un moment donn\xe9 vers un champ num\xe9rique appel\xe9 Age, et plus tard vers une variable num\xe9rique appel\xe9e Ancien \xe2ge. Dans les deux cas, le pointeur r\xe9f\xe9rence des donn\xe9es num\xe9riques pouvant \xeatre utilis\xe9e dans des calculs.'}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser des pointeurs pour r\xe9f\xe9rencer des tables, des champs, des variables, des tableaux et des \xe9l\xe9ments de tableaux. Le tableau suivant vous fournit un exemple de chaque type :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"R\xe9f\xe9rencement"}),(0,t.jsx)(n.th,{children:"R\xe9f\xe9rencement"}),(0,t.jsx)(n.th,{children:"Affectation"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"vpTble:=->[Table]"}),(0,t.jsx)(n.td,{children:"DEFAULT TABLE(vpTble->)"}),(0,t.jsx)(n.td,{children:"n/a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Champ"}),(0,t.jsx)(n.td,{children:"vpChp:=->[Table]Chp"}),(0,t.jsx)(n.td,{children:"ALERT(vpChp->)"}),(0,t.jsx)(n.td,{children:'vpChp->:="Jean"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"vpVar:=->Variable"}),(0,t.jsx)(n.td,{children:"ALERT(vpVar->)"}),(0,t.jsx)(n.td,{children:'vpVar->:="Jean"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tableau"}),(0,t.jsx)(n.td,{children:"vpT:=->Tableau"}),(0,t.jsx)(n.td,{children:"SORT ARRAY(vpT->;>)"}),(0,t.jsx)(n.td,{children:"COPY ARRAY(Tab;vpT->)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"El\xe9m. tabl."}),(0,t.jsx)(n.td,{children:"vpElem:=->Tableau{1}"}),(0,t.jsx)(n.td,{children:"ALERT(vpElem->)"}),(0,t.jsx)(n.td,{children:'vpElem->:="Jean"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"vpObj:=->monObjet"}),(0,t.jsx)(n.td,{children:"ALERT (vpObj->monAttribut)"}),(0,t.jsx)(n.td,{children:'vpObj->monAttribut:="John"'})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"utiliser-des-pointeurs--un-exemple",children:"Utiliser des pointeurs : un exemple"}),"\n",(0,t.jsx)(n.p,{children:"Il est plus facile d\u2019expliquer l\u2019utilisation des pointeurs au travers d\u2019un exemple. Cet exemple vous montre comment acc\xe9der \xe0 une variable par l\u2019interm\xe9diaire d\u2019un pointeur. Nous commen\xe7ons par cr\xe9er la variable :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$MyVar:="Hello"\n'})}),"\n",(0,t.jsx)(n.p,{children:'$MyVar est d\xe9sormais une variable contenant la cha\xeene "Hello". Nous pouvons alors cr\xe9er un pointeur vers $MyVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $MyPointer : Pointer\n$MyPointer:=->$MyVar\n"})}),"\n",(0,t.jsx)(n.p,{children:'The -> symbol means \u201Cget a pointer to.\u201D Ce symbole est form\xe9 du caract\xe8re "tiret" (-) suivi du caract\xe8re "sup\xe9rieur \xe0". Dans ce cas, il cr\xe9e un pointeur qui r\xe9f\xe9rence ou \u201Cpointe vers\u201D $MyVar. Ce pointeur est assign\xe9 \xe0 $MyPointer via l\u2019op\xe9rateur d\u2019assignation.'}),"\n",(0,t.jsx)(n.p,{children:'$MyPointer est d\xe9sormais une variable qui contient un pointeur vers $MyVar. $MyPointer ne contient pas "Hello", la valeur de $MyVar, mais vous pouvez utiliser $MyPointer pour obtenir cette valeur. L\u2019expression suivante retourne la valeur de $MyVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$MyPointer->\n"})}),"\n",(0,t.jsx)(n.p,{children:'Dans ce cas, la cha\xeene "Hello" est retourn\xe9e. Lorsque le symbole -> est plac\xe9 derri\xe8re un pointeur, la valeur de l\u2019objet vers lequel pointe le pointeur est r\xe9cup\xe9r\xe9e. On dit alors qu\u2019on d\xe9pointe le pointeur.'}),"\n",(0,t.jsx)(n.p,{children:"Il est important de comprendre que vous pouvez utiliser un pointeur suivi du symbole -> partout o\xf9 vous auriez pu utiliser l\u2019objet point\xe9 lui-m\xeame. Vous pouvez placer l\u2019expression $MonPointeur-> partout o\xf9 vous pourriez utiliser la variable originale $MaVar. Par exemple, l'instruction suivante affiche une bo\xeete de dialogue d\u2019alerte comportant le mot Hello :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\n"})}),"\n",(0,t.jsx)(n.p,{children:'Vous pouvez \xe9galement utiliser $MyPointer pour modifier la valeur de $MyVar. Par exemple, l\u2019instruction suivante stocke la cha\xeene "Goodbye" dans la variable $MyVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si vous examinez les deux utilisations de l\u2019expression $MonPointeur-> ci-dessus, vous constatez que cette expression se comporte exactement comme si vous aviez utilis\xe9 $MaVar \xe0 sa place. En r\xe9sum\xe9 : les deux lignes suivantes effectuent la m\xeame op\xe9ration \u2014 elles affichent une bo\xeete de dialogue d\u2019alerte contenant la valeur courante de la variable $MyVar :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\nALERT($MyVar)\n"})}),"\n",(0,t.jsx)(n.p,{children:'Les deux lignes suivantes effectuent la m\xeame op\xe9ration ; elles assignent la cha\xeene "Goodbye" \xe0 $MyVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-pointeurs",children:"Op\xe9rateurs sur les pointeurs"}),"\n",(0,t.jsx)(n.p,{children:"Avec :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"  // vPtrA et vPtrB pointent sur le m\xeame objet\n vPtrA:=->unObjet\n vPtrB:=->unObjet\n  // vPtrC pointe sur un autre objet\n vPtrC:=->autreObjet\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Syntaxe"}),(0,t.jsx)(n.th,{children:"Retourne"}),(0,t.jsx)(n.th,{children:"Expression"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Egalit\xe9"}),(0,t.jsx)(n.td,{children:"Pointeur = Pointeur"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"vPtrA = vPtrB"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"vPtrA = vPtrC"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,t.jsx)(n.td,{children:"Pointeur # Pointeur"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"vPtrA # vPtrC"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"vPtrA # vPtrB"}),(0,t.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Null Pointers",type:"warning",children:[(0,t.jsx)(n.p,{children:"Tenter d'assigner ou de lire un pointeur null (alias \"nil\") produira une erreur \xe0 l'ex\xe9cution. Par exemple :"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $p : Pointer // non initialized pointer (Nil value)\n$v:=$p-> // error\n$p->:=$v // error\n"})}),(0,t.jsx)(n.p,{children:"Pour \xe9viter de telles erreurs, vous pouvez \xe9crire :"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"If ($p#Null)\n  $p->:=$v\nEnd if\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"principales-utilisations",children:"Principales utilisations"}),"\n",(0,t.jsx)(n.h3,{id:"utiliser-des-pointeurs-vers-des-tables",children:"Utiliser des pointeurs vers des tables"}),"\n",(0,t.jsx)(n.p,{children:"Partout o\xf9 le langage requiert un nom de table, vous pouvez utiliser un pointeur d\xe9point\xe9 vers une table. Pour cr\xe9er un pointeur vers une table, \xe9crivez une instruction du type :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=->[touteTable]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez \xe9galement r\xe9cup\xe9rer un pointeur vers une table \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.code,{children:"Table"}),". Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=Table(20)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser le pointeur d\xe9point\xe9 dans vos commandes, comme ceci :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"DEFAULT TABLE($TablePtr->)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"utiliser-des-pointeurs-vers-des-champs",children:"Utiliser des pointeurs vers des champs"}),"\n",(0,t.jsx)(n.p,{children:"Partout o\xf9 le langage requiert un nom de champ, vous pouvez utiliser un pointeur d\xe9point\xe9 vers un champ. Pour cr\xe9er un pointeur vers un champ, \xe9crivez une ligne d'instruction du type :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$ChampPtr:=->[uneTable]CeChamp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez \xe9galement r\xe9cup\xe9rer un pointeur vers un champ \xe0 l\u2019aide de la fonction ",(0,t.jsx)(n.code,{children:"Champ"}),". Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$FieldPtr:=Field(1;2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser le pointeur d\xe9point\xe9 dans vos commandes, comme ceci :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'OBJECT SET FONT($FieldPtr->;"Arial")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"utiliser-des-pointeurs-vers-des-variables",children:"Utiliser des pointeurs vers des variables"}),"\n",(0,t.jsx)(n.p,{children:"Lorsque vous utilisez des pointeurs vers des variables locales ou des variables process, vous devez veiller \xe0 ce que la variable point\xe9e soit bien d\xe9finie au moment de l\u2019utilisation du pointeur. Rappelons que les variables locales sont supprim\xe9es \xe0 la fin de l\u2019ex\xe9cution de la m\xe9thode qui les a cr\xe9\xe9es et les variables process \xe0 la fin du process dans lequel elles ont \xe9t\xe9 cr\xe9\xe9es. L\u2019appel d\u2019un pointeur vers une variable qui n\u2019existe plus provoque une erreur de syntaxe en mode interpr\xe9t\xe9 (variable ind\xe9finie) mais peut g\xe9n\xe9rer une erreur plus cons\xe9quente en mode compil\xe9."}),"\n",(0,t.jsxs)(n.p,{children:["Les pointeurs vers des variables locales permettent dans de nombreux cas d\u2019\xe9conomiser des variables process. Les pointeurs vers des variables locales peuvent \xeatre utilis\xe9s uniquement \xe0 l\u2019int\xe9rieur d\u2019un m\xeame process. Dans le d\xe9bogueur, lorsque vous affichez un pointeur vers une variable locale d\xe9clar\xe9e dans une autre m\xe9thode, le nom de la m\xe9thode d\u2019origine est indiqu\xe9e entre parenth\xe8ses, derri\xe8re le pointeur. For example, if you write in ",(0,t.jsx)(n.em,{children:"Method1"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello world"\n Method2(->$MyVar)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Method2"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"#DECLARE($param : Pointer)\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Le d\xe9bogueur affichera $param comme suit :"}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"$param"}),(0,t.jsx)(n.th,{children:"->$MaVar (M\xe9thode1)"})]})})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez \xe9tendre $param et sa valeur sera :"}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"$MyVar"}),(0,t.jsx)(n.th,{children:'"Hello world"'})]})})}),"\n",(0,t.jsx)(n.h3,{id:"utiliser-des-pointeurs-vers-des-\xe9l\xe9ments-de-tableau",children:"Utiliser des pointeurs vers des \xe9l\xe9ments de tableau"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez cr\xe9er un pointeur vers un \xe9l\xe9ment de tableau. Par exemple, les lignes d'instruction suivantes cr\xe9ent un tableau et assignent \xe0 une variable appel\xe9e $El\xe9mPtr un pointeur vers le premier \xe9l\xe9ment :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($unTableau;10) // Cr\xe9er un tableau\n$El\xe9mPtr:=->$unTableau{1} // Cr\xe9er un pointeur vers l\u2019\xe9l\xe9ment de tableau\n"})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez alors utiliser le pointeur d\xe9point\xe9 pour assigner une valeur \xe0 l\u2019\xe9l\xe9ment, comme ceci :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$El\xe9mPtr->:=8\n"})}),"\n",(0,t.jsx)(n.h3,{id:"utiliser-des-pointeurs-vers-des-tableaux",children:"Utiliser des pointeurs vers des tableaux"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez cr\xe9er un pointeur vers un tableau. Par exemple, les lignes d'instruction suivantes cr\xe9ent un tableau et assignent \xe0 la variable nomm\xe9e $TabPtr un pointeur vers le tableau :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($unTableau;10) // Cr\xe9er un tableau\n$TabPtr:=->$unTableau // Cr\xe9er un pointeur vers le tableau\n"})}),"\n",(0,t.jsx)(n.p,{children:"Il est important de comprendre que ce pointeur pointe vers le tableau, et non vers un \xe9l\xe9ment du tableau. Par exemple, vous pourriez utiliser le pointeur d\xe9point\xe9 de la mani\xe8re suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"SORT ARRAY($TabPtr->;>) // Tri du tableau\n"})}),"\n",(0,t.jsx)(n.p,{children:"Si vous devez vous r\xe9f\xe9rer au quatri\xe8me \xe9l\xe9ment du tableau \xe0 l\u2019aide du pointeur, vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" ArrPtr->{4}:=84\n"})}),"\n",(0,t.jsx)(n.h3,{id:"passer-des-pointeurs-aux-m\xe9thodes",children:"Passer des pointeurs aux m\xe9thodes"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer un pointeur en tant que param\xe8tre d\u2019une m\xe9thode. A l\u2019int\xe9rieur de la m\xe9thode, vous pouvez modifier l\u2019objet r\xe9f\xe9renc\xe9 par le pointeur. Par exemple, la m\xe9thode suivante, ",(0,t.jsx)(n.code,{children:"takeTwo"}),", re\xe7oit deux param\xe8tres qui sont des pointeurs. Elle passe l\u2019objet r\xe9f\xe9renc\xe9 par le premier param\xe8tre en caract\xe8res majuscules, et l\u2019objet r\xe9f\xe9renc\xe9 par le second param\xe8tre en caract\xe8res minuscules."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"  //takeTwo project method\n  //$changeUp \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$changeLow \u2013 Pointer to a string field or variable. Change this to lowercase.\n #DECLARE($changeUp : Pointer ; $changeLow : Pointer)\n $changeUp->:=Uppercase($changeUp->)\n $changeLow->:=Lowercase($changeLow->)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["L'instruction suivante emploie la m\xe9thode ",(0,t.jsx)(n.code,{children:"takeTwo"})," pour passer un champ en caract\xe8res majuscules et une variable en caract\xe8res minuscules :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"takeTwo(->[MaTable]MonChamp;->$MaVar)\n"})}),"\n",(0,t.jsx)(n.p,{children:'Si le champ, [MaTable]MonChamp, contenait la cha\xeene "dupont", celle-ci deviendrait "DUPONT". Si la variable $MaVar contenait la cha\xeene "BONJOUR", celle-ci deviendrait "bonjour".'}),"\n",(0,t.jsx)(n.p,{children:"Dans la m\xe9thode takeTwo (et, en fait, \xe0 chaque fois que vous utilisez des pointeurs), il est important que les types de donn\xe9es des objets r\xe9f\xe9renc\xe9s soient corrects. Dans l\u2019exemple pr\xe9c\xe9dent, les pointeurs doivent pointer vers des objets contenant une cha\xeene ou un texte."}),"\n",(0,t.jsx)(n.h3,{id:"pointeurs-vers-des-pointeurs",children:"Pointeurs vers des pointeurs"}),"\n",(0,t.jsx)(n.p,{children:"Si vous aimez compliquer les choses \xe0 l'extr\xeame (bien que cela ne soit pas n\xe9cessaire dans 4D), vous pouvez utiliser des pointeurs pour r\xe9f\xe9rencer d'autres pointeurs. Examinons l\u2019exemple suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple affiche une bo\xeete de dialogue d\u2019alerte contenant \u201CGoodbye\u201D."}),"\n",(0,t.jsx)(n.p,{children:"Voici la description de chaque ligne de l\u2019exemple :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'$MyVar:="Hello"\n--\x3e Cette ligne place la cha\xeene "Hello" dans la variable $MyVar.'}),"\n",(0,t.jsx)(n.li,{children:"$PointerOne:=->$MyVar\n--\x3e $PointerOne contient maintenant un pointeur vers $MyVar."}),"\n",(0,t.jsx)(n.li,{children:"$PointerTwo:=->$PointerOne\n--\x3e $PointerTwo (une nouvelle variable) contient un pointeur vers $PointerOne, qui pointe \xe0 son tour vers $MyVar."}),"\n",(0,t.jsx)(n.li,{children:'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> r\xe9f\xe9rence le contenu de $PointerOne, qui \xe0 son tour fait r\xe9f\xe9rence \xe0 $MyVar. Par cons\xe9quent, ($PointeurDeux->)-> r\xe9f\xe9rence le contenu de $MaVar. Donc, dans ce cas, la valeur "Goodbye" est assign\xe9e \xe0 $MyVar.'}),"\n",(0,t.jsx)(n.li,{children:"ALERTE (($PointerTwo->)->)\n--\x3e M\xeame chose : $PointerTwo-> r\xe9f\xe9rence le contenu de $PointerOne, qui \xe0 son tour fait r\xe9f\xe9rence \xe0 $MyVar. Par cons\xe9quent, ($PointeurDeux->)-> r\xe9f\xe9rence le contenu de $MaVar. Donc, dans ce cas, la bo\xeete d'alerte affiche le contenu de $MyVar."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'La ligne suivante place la valeur "Hello" dans $MyVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'($PointerTwo->)->:="Hello"\n'})}),"\n",(0,t.jsx)(n.p,{children:'La ligne suivante r\xe9cup\xe8re "Hello" \xe0 partir de $MyVar et la place dans $NewVar :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$NewVar:=($PointerTwo->)->\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," Vous devez utiliser des parenth\xe8ses lors des d\xe9r\xe9f\xe9rencements multiples."]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);