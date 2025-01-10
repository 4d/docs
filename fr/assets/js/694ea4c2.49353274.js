"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87802"],{977402:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"Concepts/looping","title":"Structures r\xe9p\xe9titives (ou \\"boucles\\")","description":"Les structures en boucle r\xe9p\xe8tent une s\xe9quence d\'instructions jusqu\'\xe0 ce qu\'une condition soit remplie ou qu\'un certain nombre de fois est atteint.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/cf_looping.md","sourceDirName":"Concepts","slug":"/Concepts/looping","permalink":"/docs/fr/19/Concepts/looping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcf_looping.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"looping","title":"Structures r\xe9p\xe9titives (ou \\"boucles\\")"},"sidebar":"docs","previous":{"title":"Structures conditionnelles","permalink":"/docs/fr/19/Concepts/branching"},"next":{"title":"Balises de transformation","permalink":"/docs/fr/19/Tags/tags"}}'),r=s("785893"),i=s("250065");let t={id:"looping",title:'Structures r\xe9p\xe9titives (ou "boucles")'},o=void 0,a={},c=[{value:"While...End while",id:"whileend-while",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Repeat...Until",id:"repeatuntil",level:2},{value:"Exemple",id:"exemple-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Exemples \xe9l\xe9mentaires",id:"exemples-\xe9l\xe9mentaires",level:3},{value:"D\xe9cr\xe9menter la variable Compteur",id:"d\xe9cr\xe9menter-la-variable-compteur",level:3},{value:"Incrementer la variable compteur de plus de 1",id:"incrementer-la-variable-compteur-de-plus-de-1",level:3},{value:"Comparaison des structures r\xe9p\xe9titives",id:"comparaison-des-structures-r\xe9p\xe9titives",level:3},{value:"Optimiser l&#39;ex\xe9cution de For...End for",id:"optimiser-lex\xe9cution-de-forend-for",level:3},{value:"Structures For...End for embo\xeet\xe9es",id:"structures-forend-for-embo\xeet\xe9es",level:3},{value:"For each...End for each",id:"for-eachend-for-each",level:2},{value:"Boucle sur collections",id:"boucle-sur-collections",level:3},{value:"Exemple",id:"exemple-2",level:4},{value:"Boucle sur entity selections",id:"boucle-sur-entity-selections",level:3},{value:"Exemple",id:"exemple-3",level:4},{value:"Boucles sur des propri\xe9t\xe9s d&#39;objets",id:"boucles-sur-des-propri\xe9t\xe9s-dobjets",level:3},{value:"Exemple",id:"exemple-4",level:4},{value:"Param\xe8tres begin / end",id:"param\xe8tres-begin--end",level:3},{value:"Exemple",id:"exemple-5",level:4},{value:"Conditions Until et While",id:"conditions-until-et-while",level:3},{value:"Exemple",id:"exemple-6",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Les structures en boucle r\xe9p\xe8tent une s\xe9quence d'instructions jusqu'\xe0 ce qu'une condition soit remplie ou qu'un certain nombre de fois est atteint."}),"\n",(0,r.jsx)(n.h2,{id:"whileend-while",children:"While...End while"}),"\n",(0,r.jsxs)(n.p,{children:["La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,r.jsx)(n.code,{children:"While...End while"})," est la suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" While(Expression_bool\xe9enne)\n    instruction(s)\n End while\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Une boucle ",(0,r.jsx)(n.code,{children:"While...End while"})," ex\xe9cute les instructions comprises entre ",(0,r.jsx)(n.code,{children:"While"})," et ",(0,r.jsx)(n.code,{children:"End while"})," aussi longtemps que l\u2019expression bool\xe9enne est TRUE. Elle teste l\u2019expression bool\xe9enne initiale et n\u2019entre pas dans la boucle (et donc n'ex\xe9cute aucune instruction) si l\u2019expression est \xe0 FALSE."]}),"\n",(0,r.jsxs)(n.p,{children:["Il est utile d\u2019initialiser la valeur test\xe9e dans l\u2019expression bool\xe9enne juste avant d\u2019entrer dans la boucle ",(0,r.jsx)(n.code,{children:"While...End while"}),". Initialiser la valeur signifie lui affecter un contenu appropri\xe9, g\xe9n\xe9ralement pour que l\u2019expression bool\xe9enne soit TRUE et que le programme entre dans la boucle."]}),"\n",(0,r.jsxs)(n.p,{children:["La valeur de l'expression bool\xe9enne doit pouvoir \xeatre modifi\xe9e par un \xe9l\xe9ment situ\xe9 \xe0 l'int\xe9rieur de la boucle, sinon elle s'ex\xe9cutera ind\xe9finiment. La boucle suivante est sans fin car ",(0,r.jsx)(n.em,{children:"NeverStop"})," est toujours TRUE :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" NeverStop:=True\n While(NeverStop)\n End while\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Si vous vous retrouvez dans une telle situation (o\xf9 une m\xe9thode s'ex\xe9cute de mani\xe8re incontr\xf4l\xe9e), vous pouvez utiliser les fonctions de d\xe9bogage de 4D et remonter \xe0 la source du probl\xe8me. Pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,r.jsx)(n.a,{href:"/docs/fr/19/Concepts/error-handling",children:"D\xe9bogueur"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' CONFIRM("Add a new record?") //L\'utilisateur souhaite-t-il ajouter un enregistrement ? CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) // Tant que l\'utilisateur accepte\n    ADD RECORD([aTable]) // Ajouter un nouvel enregistrement\nEnd while // Une boucle While se termine toujours par End while\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Dans cet exemple, la valeur de la variable syst\xe8me ",(0,r.jsx)(n.code,{children:"OK"})," est d\xe9finie par la commande ",(0,r.jsx)(n.code,{children:"CONFIRM"})," avant que le programme n\u2019entre dans la boucle. Si l\u2019utilisateur clique sur le bouton ",(0,r.jsx)(n.strong,{children:"OK"})," dans la bo\xeete de dialogue de confirmation, la variable ",(0,r.jsx)(n.code,{children:"OK"})," prend la valeur 1 et la boucle est ex\xe9cut\xe9e. Dans le cas contraire, la variable ",(0,r.jsx)(n.code,{children:"OK"})," prend la valeur 0 et la boucle est ignor\xe9e. Une fois que le programme entre dans la boucle, la commande ",(0,r.jsx)(n.code,{children:"ADD RECORD"})," permet de continuer \xe0 l\u2019ex\xe9cuter car elle met la variable syst\xe8me ",(0,r.jsx)(n.code,{children:"OK"})," \xe0 1 lorsque l\u2019utilisateur sauvegarde l\u2019enregistrement. Lorsque l\u2019utilisateur annule (ne valide pas) le dernier enregistrement, la variable syst\xe8me ",(0,r.jsx)(n.code,{children:"OK"})," prend la valeur 0 et la boucle s\u2019arr\xeate."]}),"\n",(0,r.jsx)(n.h2,{id:"repeatuntil",children:"Repeat...Until"}),"\n",(0,r.jsxs)(n.p,{children:["La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," est la suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" Repeat\n    instruction(s)\n Until(Boolean_Expression)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["La boucle ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," est semblable \xe0 la boucle ",(0,r.jsx)(n.a,{href:"flow-control#whileend-while",children:"While...End while"}),", \xe0 la diff\xe9rence qu\u2019elle teste la valeur de l\u2019expression bool\xe9enne apr\xe8s l\u2019ex\xe9cution de la boucle et non avant. Ainsi, la boucle est toujours ex\xe9cut\xe9e au moins une fois, tandis que si l\u2019expression bool\xe9enne est initialement \xe0 Faux, la boucle ",(0,r.jsx)(n.code,{children:"While...End while"})," ne s\u2019ex\xe9cute pas du tout."]}),"\n",(0,r.jsxs)(n.p,{children:["L'autre particularit\xe9 de la boucle ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," est qu\u2019elle se poursuit jusqu\u2019\xe0 ce que l\u2019expression bool\xe9enne soit \xe0 TRUE."]}),"\n",(0,r.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Comparez l\u2019exemple suivant avec celui de la boucle ",(0,r.jsx)(n.code,{children:"While...End while"}),". Vous constatez qu\u2019il n\u2019est pas n\xe9cessaire d\u2019initialiser l\u2019expression bool\xe9enne \u2014 il n\u2019y a pas de commande ",(0,r.jsx)(n.code,{children:"CONFIRM"})," pour initialiser la variable ",(0,r.jsx)(n.code,{children:"OK"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"forend-for",children:"For...End for"}),"\n",(0,r.jsxs)(n.p,{children:["La syntaxe de la structure r\xe9p\xe9titive ",(0,r.jsx)(n.code,{children:"For...End for"})," est la suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    instruction(s)\n End for\n"})}),"\n",(0,r.jsxs)(n.p,{children:["La structure ",(0,r.jsx)(n.code,{children:"For...End for"})," est une boucle contr\xf4l\xe9e par un compteur :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La variable compteur ",(0,r.jsx)(n.em,{children:"Counter_Variable"})," est une variable num\xe9rique (R\xe9el ou Entier long) initialis\xe9e par ",(0,r.jsx)(n.code,{children:"For...End for"})," \xe0 la valeur sp\xe9cifi\xe9e par ",(0,r.jsx)(n.em,{children:"Start_Expression"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["La variable Variable_Compteur est incr\xe9ment\xe9e de la valeur sp\xe9cifi\xe9e par le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"Increment_Expression"})," \xe0 chaque fois que la boucle est ex\xe9cut\xe9e. Si vous ne passez pas de valeur dans ",(0,r.jsx)(n.em,{children:"Increment_Expression"}),", la variable compteur est incr\xe9ment\xe9e par d\xe9faut de un (1)."]}),"\n",(0,r.jsxs)(n.li,{children:["Lorsque le compteur atteint la valeur d\xe9finie par ",(0,r.jsx)(n.em,{children:"End_Expression"}),", la boucle s'arr\xeate."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important :"})," Les expressions num\xe9riques ",(0,r.jsx)(n.em,{children:"Start_Expression"}),", ",(0,r.jsx)(n.em,{children:"End_Expression"})," et ",(0,r.jsx)(n.em,{children:"Increment_Expression"})," sont \xe9valu\xe9es une seule fois, au d\xe9but de la boucle. Si ces expressions sont des variables, leur modification depuis l'int\xe9rieur de la boucle n'affectera pas l'ex\xe9cution de la boucle."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Astuce :"})," En revanche, vous pouvez, si vous le souhaitez, modifier la valeur de la variable ",(0,r.jsx)(n.em,{children:"Counter_Variable"})," depuis l'int\xe9rieur de la boucle et cela affectera l'ex\xe9cution de la boucle."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["G\xe9n\xe9ralement, ",(0,r.jsx)(n.em,{children:"Start_Expression"})," est inf\xe9rieure \xe0 ",(0,r.jsx)(n.em,{children:"End_Expression"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Si les deux expressions sont \xe9gales, la boucle ne sera ex\xe9cut\xe9e qu'une fois."}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"Start_Expression"})," est sup\xe9rieure \xe0 ",(0,r.jsx)(n.em,{children:"End_Expression"}),", la boucle ne s'ex\xe9cutera pas du tout, \xe0 moins que vous ne sp\xe9cifiiez une ",(0,r.jsx)(n.em,{children:"Increment_Expression"})," n\xe9gative. Reportez-vous ci-dessous au paragraphe d\xe9crivant ce point."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"exemples-\xe9l\xe9mentaires",children:"Exemples \xe9l\xe9mentaires"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"La boucle suivante s'ex\xe9cute 100 fois :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Faire quelque chose\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet de traiter tous les \xe9l\xe9ments du tableau anArray :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //Faire quelque chose avec l'\xe9l\xe9ment\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet d'examiner chaque caract\xe8re du texte vtSomeText :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlChar;1;Length(vtSomeText))\n  //Faire quelque chose avec le caract\xe8re si c'est une tabulation\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet de traiter tous les enregistrements de la s\xe9lection de la table [aTable] :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Faire quelque chose avec chaque enregistrement\n    SEND RECORD([aTable])\n  //...\n  // Passer \xe0 l'enregistrement suivant\n    NEXT RECORD([aTable])\n End for\n"})}),"\n",(0,r.jsxs)(n.p,{children:["La plupart des structures ",(0,r.jsx)(n.code,{children:"For...End for"})," que vous \xe9crirez dans vos projets ressembleront \xe0 celles pr\xe9sent\xe9es ci-dessus."]}),"\n",(0,r.jsx)(n.h3,{id:"d\xe9cr\xe9menter-la-variable-compteur",children:"D\xe9cr\xe9menter la variable Compteur"}),"\n",(0,r.jsxs)(n.p,{children:["Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur d\xe9cro\xeet au lieu de cro\xeetre. Pour cela, ",(0,r.jsx)(n.em,{children:"Start_Expression"})," doit \xeatre sup\xe9rieure \xe0 ",(0,r.jsx)(n.em,{children:"End_Expression"})," et ",(0,r.jsx)(n.em,{children:"Increment_Expression"})," doit \xeatre n\xe9gative. Les exemples suivants effectuent les m\xeames t\xe2ches que les pr\xe9c\xe9dents, mais en sens inverse :"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"La boucle suivante s'ex\xe9cute 100 fois :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For(vCounter;100;1;-1)\n  //Faire quelque chose\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet de traiter tous les \xe9l\xe9ments du tableau anArray :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlElem;Size of array(anArray);1;-1)\n  //Faire quelque chose avec l'\xe9l\xe9ment\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet d'examiner chaque caract\xe8re du texte vtSomeText :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlChar;Length(vtSomeText);1;-1)\n  //Faire quelque chose avec le caract\xe8re si c'est une tabulation\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet de traiter tous les enregistrements de la s\xe9lection de la table [aTable] :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Faire quelque chose avec chaque enregistrement\n    SEND RECORD([aTable])\n  //...\n  //Passer \xe0 l'enregistrement pr\xe9c\xe9dent\n    PREVIOUS RECORD([aTable])\n End for\n"})}),"\n",(0,r.jsx)(n.h3,{id:"incrementer-la-variable-compteur-de-plus-de-1",children:"Incrementer la variable compteur de plus de 1"}),"\n",(0,r.jsxs)(n.p,{children:["Si vous le souhaitez, vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"Increment_Expression"})," une valeur (positive ou n\xe9gative) dont la valeur absolue est sup\xe9rieure \xe0 un."]}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsx)(n.li,{children:"La boucle suivante ne traite que les \xe9l\xe9ments pairs du tableau anArray :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlElem;2;Size of array(anArray);2)\n  //Faire quelque chose avec l'\xe9l\xe9ment 2,4...2n\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,r.jsx)(n.h3,{id:"comparaison-des-structures-r\xe9p\xe9titives",children:"Comparaison des structures r\xe9p\xe9titives"}),"\n",(0,r.jsxs)(n.p,{children:["Revenons au premier exemple ",(0,r.jsx)(n.code,{children:"For...End for"}),". La boucle suivante s'ex\xe9cute 100 fois :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Faire quelque chose\n End for\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Il est int\xe9ressant d'examiner la mani\xe8re dont les boucles ",(0,r.jsx)(n.code,{children:"While...End while"})," et ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," effectuent la m\xeame action. Voici la boucle ",(0,r.jsx)(n.code,{children:"While...End while"})," \xe9quivalente :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $i :=1 // Initialisation du compteur\nWhile ($i<=100) // Boucle 100 fois\n  // Faire quelque chose\n    $i :=$i +1 // Il faut incr\xe9menter le compteur\n End while\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Voici la boucle ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," \xe9quivalente :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $i :=1 // Initialisation du compteur\n Repeat\n  // Faire quelque chose\n    $i :=$i +1 // Il faut incr\xe9menter le compteur\nUntil($i=100) // Boucle 100 fois\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Astuce :"})," La boucle ",(0,r.jsx)(n.code,{children:"For...End for"})," est g\xe9n\xe9ralement plus rapide que les boucles ",(0,r.jsx)(n.code,{children:"While...End while"})," et ",(0,r.jsx)(n.code,{children:"Repeat...Until"})," car 4D teste la condition en interne pour chaque cycle de la boucle et incr\xe9mente lui-m\xeame le compteur. Par cons\xe9quent, nous vous conseillons de pr\xe9f\xe9rer \xe0 chaque fois que c'est possible la structure ",(0,r.jsx)(n.code,{children:"For...End for"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"optimiser-lex\xe9cution-de-forend-for",children:"Optimiser l'ex\xe9cution de For...End for"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez utiliser comme compteur une variable interprocess, process ou locale, et lui attribuer le type R\xe9el, Entier ou Entier long. Pour des boucles longues, et particuli\xe8rement en mode compil\xe9, nous vous conseillons d'employer des variables locales de type Entier long."}),"\n",(0,r.jsxs)(n.ol,{start:"10",children:["\n",(0,r.jsx)(n.li,{children:"Voici un exemple :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" C_LONGINT($vlCounter) // Utilisons une variable locale de type Entier long\nFor($vlCounter;1;10000)\n  // Faire quelque chose\n  End for\n"})}),"\n",(0,r.jsx)(n.h3,{id:"structures-forend-for-embo\xeet\xe9es",children:"Structures For...End for embo\xeet\xe9es"}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez embo\xeeter autant de structures r\xe9p\xe9titives que vous voulez (dans les limites du raisonnable). Cela s'applique aux structures de type ",(0,r.jsx)(n.code,{children:"For...End for"}),". Il y a dans ce cas une erreur courante \xe0 \xe9viter : assurez-vous d'utiliser une variable compteur diff\xe9rente par structure de boucle."]}),"\n",(0,r.jsx)(n.p,{children:"Voici deux exemples :"}),"\n",(0,r.jsxs)(n.ol,{start:"11",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant permet de traiter tous les \xe9l\xe9ments d'un tableau \xe0 deux dimensions :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //...\n  // Faire quelque chose avec la ligne\n  // ...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Faire quelque chose avec l'\xe9l\xe9ment\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"12",children:["\n",(0,r.jsx)(n.li,{children:"L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date pr\xe9sents dans la base :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n"})}),"\n",(0,r.jsx)(n.h2,{id:"for-eachend-for-each",children:"For each...End for each"}),"\n",(0,r.jsxs)(n.p,{children:["La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,r.jsx)(n.code,{children:"For each...End for each"})," est la suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_bool\xe9enne)}\n    instruction(s)\n End for each\n"})}),"\n",(0,r.jsxs)(n.p,{children:["La structure ",(0,r.jsx)(n.code,{children:"For each...End for each"})," ex\xe9cute le cycle d'instructions d\xe9finies pour chaque ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," de ",(0,r.jsx)(n.em,{children:"Expression"}),". Le type de ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," d\xe9pend du type de ",(0,r.jsx)(n.em,{children:"Expression"}),". La boucle ",(0,r.jsx)(n.code,{children:"For each...End for each"})," peut it\xe9rer parmi trois types d'",(0,r.jsx)(n.em,{children:"Expression"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"collections : boucle sur chaque \xe9l\xe9ment de la collection,"}),"\n",(0,r.jsx)(n.li,{children:"entity selections : boucle sur chaque entity,"}),"\n",(0,r.jsx)(n.li,{children:"objets : boucle sur chaque propri\xe9t\xe9 d'objet."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Le tableau suivant compare les trois types de ",(0,r.jsx)(n.code,{children:"Pour chaque...Fin de chaque"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Boucle sur collections"}),(0,r.jsx)(n.th,{children:"Boucle sur entity selections"}),(0,r.jsx)(n.th,{children:"Boucle sur objets"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Type Current_Item"}),(0,r.jsx)(n.td,{children:"Variable du m\xeame type que les \xe9l\xe9ments de la collection"}),(0,r.jsx)(n.td,{children:"Entity"}),(0,r.jsx)(n.td,{children:"Variable texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Types d\u2019expressions"}),(0,r.jsx)(n.td,{children:"Collection (avec des \xe9l\xe9ments du m\xeame type)"}),(0,r.jsx)(n.td,{children:"Entity selection"}),(0,r.jsx)(n.td,{children:"Object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nombre de boucles (par d\xe9faut)"}),(0,r.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments de la collection"}),(0,r.jsx)(n.td,{children:"Nombre d'entit\xe9s dans la s\xe9lection"}),(0,r.jsx)(n.td,{children:"Nombre de propri\xe9t\xe9s d'objets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Prise en charge de Param\xe8tres d\xe9but / fin"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Oui"}),(0,r.jsx)(n.td,{children:"Non"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le nombre de boucles est \xe9valu\xe9 au d\xe9marrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'\xe9l\xe9ments pendant la boucle est donc d\xe9conseill\xe9 car il pourra en r\xe9sulter une redondance ou un manque d'it\xe9rations."}),"\n",(0,r.jsxs)(n.li,{children:["Par d\xe9faut, les ",(0,r.jsx)(n.em,{children:"instructions"})," incluses sont ex\xe9cut\xe9es pour chaque valeur de ",(0,r.jsx)(n.em,{children:"Expression"}),". Il est toutefois possible de sortir de la boucle en testant une condition soit au d\xe9but de chaque it\xe9ration (",(0,r.jsx)(n.code,{children:"While"}),") ou \xe0 la fin de chaque it\xe9ration (",(0,r.jsx)(n.code,{children:"Until"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9but"})," et ",(0,r.jsx)(n.em,{children:"fin"})," peuvent \xeatre utilis\xe9s avec les collections et les entity selections afin de d\xe9finir des bornes pour la boucle."]}),"\n",(0,r.jsxs)(n.li,{children:["La boucle ",(0,r.jsx)(n.code,{children:"For each...End for each"})," peut \xeatre utilis\xe9e sur une ",(0,r.jsx)(n.strong,{children:"collection partag\xe9e"})," ou un ",(0,r.jsx)(n.strong,{children:"objet partag\xe9"}),". Si vous souhaitez modifier un ou plusieurs \xe9l\xe9ments des propri\xe9t\xe9s d'objets ou de la collection dans le code, vous devez utiliser les mots-cl\xe9s ",(0,r.jsx)(n.code,{children:"Use...End use"}),". Vous pouvez, si vous le souhaitez, appeler les mots-cl\xe9s ",(0,r.jsx)(n.code,{children:"Use...End use"})," :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"avant de saisir la boucle, si les \xe9l\xe9ments doivent \xeatre modifi\xe9s ensemble pour des raisons d'int\xe9grit\xe9, ou bien"}),"\n",(0,r.jsx)(n.li,{children:"dans la boucle, lorsque quelques \xe9l\xe9ments/propri\xe9t\xe9s seulement doivent \xeatre modifi\xe9s et qu'aucune gestion de l'int\xe9grit\xe9 n'est requise."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"boucle-sur-collections",children:"Boucle sur collections"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque ",(0,r.jsx)(n.code,{children:"For each...End for each"})," est utilis\xe9e avec une ",(0,r.jsx)(n.em,{children:"Expression"})," de type ",(0,r.jsx)(n.em,{children:"Collection"}),", le param\xe8tre ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," est une variable du m\xeame type que les \xe9l\xe9ments de la collection. Par d\xe9faut, le nombre de boucles est bas\xe9 sur le nombre d'\xe9l\xe9ments de la collection."]}),"\n",(0,r.jsxs)(n.p,{children:["La collection doit contenir uniquement des \xe9l\xe9ments du m\xeame type. Dans le cas contraire, une erreur sera retourn\xe9e d\xe8s que la premi\xe8re valeur de type diff\xe9rent sera assign\xe9e \xe0 la variable ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A chaque it\xe9ration de la boucle, la variable ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," re\xe7oit automatiquement l'\xe9l\xe9ment correspondant de la collection. Vous devez tenir compte des points suivants :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.em,{children:"Current_Item"})," variable is of the object type or collection type (i.e. Si la variable est de type scalaire, seule la variable sera modifi\xe9e."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.em,{children:"Current_Item"})," variable is of the object type or collection type (i.e. Si un seul \xe9l\xe9ment de la collection n'est pas du m\xeame type que la variable, une erreur est g\xe9n\xe9r\xe9e et la boucle s'arr\xeate."]}),"\n",(0,r.jsxs)(n.li,{children:["Si la collection contient des \xe9l\xe9ments de valeur ",(0,r.jsx)(n.strong,{children:"Null"}),", une erreur sera g\xe9n\xe9r\xe9e si le type de la variable ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," ne prend pas en charge la valeur ",(0,r.jsx)(n.strong,{children:"Null"})," (comme par exemple les variables entier long)."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez calculer quelques statistiques sur une collection de nombres :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"boucle-sur-entity-selections",children:"Boucle sur entity selections"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque ",(0,r.jsx)(n.code,{children:"For each...End for each"})," est utilis\xe9e avec une ",(0,r.jsx)(n.em,{children:"Expression"})," de type ",(0,r.jsx)(n.em,{children:"Entity selection"}),", le param\xe8tre ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," contient l'entity en cours de traitement."]}),"\n",(0,r.jsxs)(n.p,{children:["Le nombre de boucles est bas\xe9 sur le nombre d'entities pr\xe9sentes dans l'entity selection. A chaque it\xe9ration de la boucle, le param\xe8tre ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," re\xe7oit automatiquement l'entity qui est en cours de traitement."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si l'entity selection contient une entity qui a \xe9t\xe9 supprim\xe9e entre-temps par un autre process, elle est automatiquement ignor\xe9e durant la boucle."]}),"\n",(0,r.jsxs)(n.p,{children:["N'oubliez pas que toute modification effectu\xe9e sur l'entity en cours de traitement doit \xeatre explicitement sauvegard\xe9e (si n\xe9cessaire) \xe0 l'aide de la m\xe9thode ",(0,r.jsx)(n.code,{children:"entity.save( )"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez augmenter le salaire de tous les employ\xe9s britanniques dans une entity selection :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" C_OBJECT(emp)\n For each(emp;ds.Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n"})}),"\n",(0,r.jsx)(n.h3,{id:"boucles-sur-des-propri\xe9t\xe9s-dobjets",children:"Boucles sur des propri\xe9t\xe9s d'objets"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque ",(0,r.jsx)(n.code,{children:"For each...End for each"})," est utilis\xe9e avec une ",(0,r.jsx)(n.em,{children:"Expression"})," de type Objet, le param\xe8tre ",(0,r.jsx)(n.em,{children:"El\xe9ment_courant"})," est une variable texte qui re\xe7oit automatiquement le nom de la propri\xe9t\xe9 en cours de traitement."]}),"\n",(0,r.jsx)(n.p,{children:"Les propri\xe9t\xe9s de l'objet sont it\xe9r\xe9es en fonction de leur ordre de cr\xe9ation. Pendant la boucle, il est possible d'ajouter ou de supprimer des propri\xe9t\xe9s dans l'objet, sans pour autant modifier le nombre de boucles qui reste bas\xe9 sur le nombre de propri\xe9t\xe9s initial de l'objet."}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez passer en majuscules les propri\xe9t\xe9s contenant des noms dans l'objet suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"param\xe8tres-begin--end",children:"Param\xe8tres begin / end"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez d\xe9finir des bornes pour l'it\xe9ration \xe0 l'aide des param\xe8tres optionnels begin et end."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9but"})," et ",(0,r.jsx)(n.em,{children:"fin"})," sont utilisables uniquement avec les boucles sur des collections et des entity selections (ils sont ignor\xe9s avec les boucles sur des propri\xe9t\xe9s d'objets)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"d\xe9but"}),", passez la position de l'\xe9l\xe9ment de ",(0,r.jsx)(n.em,{children:"Expression"})," auquel d\xe9marrer l'it\xe9ration (",(0,r.jsx)(n.em,{children:"d\xe9but"})," est inclus)."]}),"\n",(0,r.jsxs)(n.li,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"fin"}),", vous pouvez passer la position de l'\xe9l\xe9ment de ",(0,r.jsx)(n.em,{children:"Expression"})," auquel stopper l'it\xe9ration (",(0,r.jsx)(n.em,{children:"fin"})," est exclus)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"fin"})," est omis ou si ",(0,r.jsx)(n.em,{children:"fin"})," est plus grand que le nombre d'\xe9l\xe9ments de ",(0,r.jsx)(n.em,{children:"Expression"}),", les \xe9l\xe9ments sont it\xe9r\xe9s depuis ",(0,r.jsx)(n.em,{children:"d\xe9but"})," jusqu'au dernier inclus. Si les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9but"})," et ",(0,r.jsx)(n.em,{children:"fin"})," sont des valeurs positives, ils repr\xe9sentent des positions d'\xe9l\xe9ments dans ",(0,r.jsx)(n.em,{children:"Expression"}),". Si ",(0,r.jsx)(n.em,{children:"begin"})," est une valeur n\xe9gative, elle est recalcul\xe9e comme ",(0,r.jsx)(n.code,{children:"begin:=begin+Taille expression"})," (elle est consid\xe9r\xe9e comme un d\xe9calage \xe0 partir de la fin de ",(0,r.jsx)(n.em,{children:"Expression"}),"). Si la valeur calcul\xe9e est n\xe9gative, ",(0,r.jsx)(n.em,{children:"begin"})," prend la valeur 0. ",(0,r.jsx)(n.strong,{children:"Note :"})," M\xeame si d\xe9but est une valeur n\xe9gative, l'it\xe9ration est toujours effectu\xe9e dans le m\xeame ordre. Si ",(0,r.jsx)(n.em,{children:"fin"})," est une valeur n\xe9gative, elle est recalcul\xe9e comme ",(0,r.jsx)(n.code,{children:"fin:=fin+Taille expression"})]}),"\n",(0,r.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"une collection contient 10 \xe9l\xe9ments (num\xe9rot\xe9s de 0 \xe0 9)"}),"\n",(0,r.jsx)(n.li,{children:"d\xe9but=-4 > d\xe9but=-4+10=6 > l'it\xe9ration d\xe9marre au 6e \xe9l\xe9ment (num\xe9ro 5)"}),"\n",(0,r.jsx)(n.li,{children:"fin=-2 > fin=-2+10=8 > l'it\xe9ration stoppe avant le 8e \xe9l\xe9ment (num\xe9ro 7), i.e."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-5",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"conditions-until-et-while",children:"Conditions Until et While"}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez contr\xf4ler l'ex\xe9cution de ",(0,r.jsx)(n.code,{children:"For each...End for each"})," en ajoutant une condition ",(0,r.jsx)(n.code,{children:"Jusque"})," ou ",(0,r.jsx)(n.code,{children:"Tant que"})," \xe0 la boucle. Lorsqu'une instruction ",(0,r.jsx)(n.code,{children:"Until(condition)"})," est associ\xe9e \xe0 la boucle, l'it\xe9ration stoppe d\xe8s que la condition est \xe9valu\xe9e \xe0 ",(0,r.jsx)(n.code,{children:"True"}),", tandis que dans le cas d'une instruction ",(0,r.jsx)(n.code,{children:"While(condition)"}),", l'it\xe9ration stoppe d\xe8s que la condition est \xe9valu\xe9e \xe0 ",(0,r.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez passer un mot-cl\xe9 ou l'autre en fonction de vos besoins :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La condition ",(0,r.jsx)(n.code,{children:"Until"})," est test\xe9e \xe0 la fin de chaque it\xe9ration, donc si ",(0,r.jsx)(n.em,{children:"Expression"})," n'est ni vide ni Null, la boucle sera ex\xe9cut\xe9e au moins une fois."]}),"\n",(0,r.jsxs)(n.li,{children:["La condition ",(0,r.jsx)(n.code,{children:"While"})," est test\xe9e au d\xe9but de chaque it\xe9ration, donc en fonction du r\xe9sultat de la condition, la boucle peut ne pas \xeatre ex\xe9cut\xe9e du tout."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-6",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n\n $total:=0\n For each($num;$colNum)While($total<30) //test\xe9 au d\xe9but\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n\n $total:=1000\n For each($num;$colNum)Until($total>30) //test\xe9 \xe0 la fin\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var l=s(667294);let r={},i=l.createContext(r);function t(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);