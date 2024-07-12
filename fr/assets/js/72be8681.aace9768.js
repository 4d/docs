/*! For license information please see 72be8681.aace9768.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63752],{723361:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=n(474848),r=n(28453);const o={id:"methods",title:"Methods"},i=void 0,l={id:"Concepts/methods",title:"Methods",description:"Une m\xe9thode est un morceau de code qui ex\xe9cute une ou plusieurs actions. Dans le langage 4D, il existe deux cat\xe9gories de m\xe9thodes :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/fr/18/Concepts/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"methods",title:"Methods"},sidebar:"docs",previous:{title:"Tableaux",permalink:"/docs/fr/18/Concepts/arrays"},next:{title:"Param\xe8tres",permalink:"/docs/fr/18/Concepts/parameters"}},d={},u=[{value:"M\xe9thodes projet",id:"m\xe9thodes-projet",level:2},{value:"Sous-routines et fonctions",id:"sous-routines-et-fonctions",level:3},{value:"M\xe9thodes associ\xe9es \xe0 des objets",id:"m\xe9thodes-associ\xe9es-\xe0-des-objets",level:3},{value:"M\xe9thodes de menu",id:"m\xe9thodes-de-menu",level:3},{value:"M\xe9thodes de gestion de process",id:"m\xe9thodes-de-gestion-de-process",level:3},{value:"M\xe9thodes de gestion d\u2019\xe9v\xe9nements et d&#39;erreurs",id:"m\xe9thodes-de-gestion-d\xe9v\xe9nements-et-derreurs",level:3},{value:"M\xe9thode projet r\xe9cursives",id:"m\xe9thode-projet-r\xe9cursives",level:2},{value:"M\xe9thodes sp\xe9cialis\xe9es",id:"m\xe9thodes-sp\xe9cialis\xe9es",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Une m\xe9thode est un morceau de code qui ex\xe9cute une ou plusieurs actions. Dans le langage 4D, il existe deux cat\xe9gories de m\xe9thodes :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Les m\xe9thodes int\xe9gr\xe9es"}),", fournies par 4D ou des d\xe9veloppeurs tiers, qui peuvent \xeatre appel\xe9es uniquement par votre code. Les m\xe9thodes int\xe9gr\xe9es incluent :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Les commandes et fonctions de 4D API, telles que ",(0,t.jsx)(s.code,{children:"ALERT"})," ou ",(0,t.jsx)(s.code,{children:"Current date"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Les m\xe9thodes associ\xe9es \xe0 des collections ou \xe0 des objets natifs, telles que ",(0,t.jsx)(s.code,{children:"collection.orderBy()"})," ou ",(0,t.jsx)(s.code,{children:"entity.save()"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Les commandes issues de plug-ins ou de composants, fournies par 4D ou des d\xe9veloppeurs tiers, telles que ",(0,t.jsx)(s.code,{children:"SVG_New_arc"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Les m\xe9thodes int\xe9gr\xe9es sont d\xe9taill\xe9es dans le manuel ",(0,t.jsx)(s.em,{children:"4D Langage"})," ou dans les manuels consacr\xe9s aux plug-ins et aux composants."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Les ",(0,t.jsx)(s.strong,{children:"m\xe9thodes projets"}),", dans lesquelles vous pouvez \xe9crire votre propre code pour ex\xe9cuter des actions personnalis\xe9es. Une fois que votre m\xe9thode projet est cr\xe9\xe9e, elle devient partie int\xe9grante du langage de la base dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e. Une m\xe9thode projet est compos\xe9e de plusieurs lignes d\u2019instructions. Une ligne d\u2019instructions effectue une action. Une instruction ex\xe9cute une action, et peut \xeatre simple ou complexe. Cette ligne peut \xeatre aussi longue que vous voulez (elle peut comporter jusqu\u2019\xe0 32 000 caract\xe8res, ce qui est normalement suffisant pour la plupart des instructions). A statement performs an action, and may be simple or complex."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," 4D fournit \xe9galement des m\xe9thodes sp\xe9cifiques ex\xe9cut\xe9es automatiquement en fonction de la base ou des \xe9v\xe9nements formulaires. Voir ",(0,t.jsx)(s.a,{href:"#specialized-methods",children:"M\xe9thodes sp\xe9cialis\xe9es"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"m\xe9thodes-projet",children:"M\xe9thodes projet"}),"\n",(0,t.jsx)(s.p,{children:"Une m\xe9thode projet peut tenir les r\xf4les suivants, en fonction de la mani\xe8re dont elle est ex\xe9cut\xe9e et utilis\xe9e :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Sous-routine et fonction"}),"\n",(0,t.jsx)(s.li,{children:"M\xe9thode associ\xe9e \xe0 un objet"}),"\n",(0,t.jsx)(s.li,{children:"M\xe9thode de menu"}),"\n",(0,t.jsx)(s.li,{children:"M\xe9thode de gestion de process"}),"\n",(0,t.jsx)(s.li,{children:"M\xe9thode de gestion d\u2019\xe9v\xe9nements et d'erreurs"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"sous-routines-et-fonctions",children:"Sous-routines et fonctions"}),"\n",(0,t.jsx)(s.p,{children:"Une sous-routine est une m\xe9thode projet qui peut \xeatre consid\xe9r\xe9e comme une m\xe9thode asservie. D\u2019autres m\xe9thodes lui demandent d\u2019effectuer des t\xe2ches. Une sous-routine qui retourne une valeur est appel\xe9e une fonction."}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous avez \xe9crit une m\xe9thode projet, elle devient partie int\xe9grante du langage de la base dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e. Vous pouvez alors l'appeler \xe0 partir d'autres m\xe9thodes projets, ou \xe0 partir des ",(0,t.jsx)(s.a,{href:"#predefined-methods",children:"m\xe9thodes pr\xe9d\xe9finies"})," de la m\xeame mani\xe8re que vous appelez les commandes int\xe9gr\xe9es de 4D. Une m\xe9thode projet utilis\xe9e de cette mani\xe8re est appel\xe9e une sous-routine."]}),"\n",(0,t.jsx)(s.p,{children:"L'utilisation de sous-routines procure les avantages suivants :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"R\xe9duction du code r\xe9p\xe9titif,"}),"\n",(0,t.jsx)(s.li,{children:"Clarification des m\xe9thodes,"}),"\n",(0,t.jsx)(s.li,{children:"Modification plus facile des m\xe9thodes,"}),"\n",(0,t.jsx)(s.li,{children:"Cr\xe9ation de code modulaire"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Imaginons par exemple que vous travaillez avec une base de clients. A mesure que vous construisez la base, vous vous apercevez que vous r\xe9p\xe9tez souvent certaines t\xe2ches, telles que la recherche d\u2019un client et la modification de son enregistrement. Le code n\xe9cessaire \xe0 l\u2019accomplissement de cette op\xe9ration pourrait \xeatre :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"  // Recherche d'un client\n QUERY BY EXAMPLE([Clients])\n  // S\xe9lection du formulaire entr\xe9e\n FORM SET INPUT([Clients];\"Saisie de donn\xe9es\")\n  // Modification de l'enregistrement du client\n MODIFY RECORD([Clients])\n"})}),"\n",(0,t.jsx)(s.p,{children:"Si vous n\u2019utilisez pas de sous-routines, vous devrez \xe9crire ce code \xe0 chaque fois que vous voudrez modifier l\u2019enregistrement d\u2019un client. Si vous n\u2019utilisez pas de sous-routines, vous devrez \xe9crire ce code \xe0 chaque fois que vous voudrez modifier l\u2019enregistrement d\u2019un client. Gr\xe2ce aux sous-routines, vous ne l\u2019\xe9crirez qu\u2019une seule fois en tout. C\u2019est le premier avantage des sous-routines : r\xe9duire la quantit\xe9 de code \xe0 \xe9crire."}),"\n",(0,t.jsxs)(s.p,{children:["Si le code ci-dessus \xe9tait une m\xe9thode projet appel\xe9e ",(0,t.jsx)(s.code,{children:"MODIFIER CLIENT"}),", vous l\u2019ex\xe9cuteriez simplement en inscrivant son nom dans une autre m\xe9thode. Par exemple, pour modifier l\u2019enregistrement d\u2019un client puis l\u2019imprimer, vous n\u2019auriez qu\u2019\xe0 \xe9crire :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:" MODIFY CUSTOMER\n PRINT SELECTION([Clients])\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cette possibilit\xe9 simplifie \xe9norm\xe9ment vos m\xe9thodes. Cette possibilit\xe9 simplifie \xe9norm\xe9ment vos m\xe9thodes. C\u2019est le deuxi\xe8me avantage que vous pouvez tirer de l\u2019utilisation de sous-routines : la clarification de votre code. Ainsi, ces m\xe9thodes deviennent en quelque sorte des extensions du langage de 4D."}),"\n",(0,t.jsx)(s.p,{children:"Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule m\xe9thode, et non dix. C\u2019est un autre avantage des sous-routines : faciliter les modifications de votre code."}),"\n",(0,t.jsx)(s.p,{children:"Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d\u2019entre eux effectuant une t\xe2che logique. Examinez le code suivant, tir\xe9 d\u2019une base de gestion de comptes ch\xe8ques :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:" FIND CLEARED CHECKS // Rechercher les ch\xe8ques \xe9mis\n RECONCILE ACCOUNT // Rapprocher le compte\nPRINT CHECK BOOK REPORT // Imprimer un relev\xe9\n"})}),"\n",(0,t.jsx)(s.p,{children:"M\xeame pour quelqu\u2019un qui ne conna\xeet pas la base, le code est clair. Il n\u2019est pas n\xe9cessaire d\u2019examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d\u2019instructions et effectuer des op\xe9rations complexes, mais l\u2019important est ce qu\u2019elles font. Nous vous conseillons de d\xe9couper votre code en t\xe2ches logiques, ou modules, \xe0 chaque fois que c\u2019est possible."}),"\n",(0,t.jsx)(s.h3,{id:"m\xe9thodes-associ\xe9es-\xe0-des-objets",children:"M\xe9thodes associ\xe9es \xe0 des objets"}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez encapsuler vos m\xe9thodes projets dans les objets ",(0,t.jsx)(s.strong,{children:"formule"})," et les appeler \xe0 partir de vos objets."]}),"\n",(0,t.jsxs)(s.p,{children:["Les commandes ",(0,t.jsx)(s.code,{children:"Formula"})," ou ",(0,t.jsx)(s.code,{children:"Formula from string"})," vous permettent de cr\xe9er des objets formule natifs que vous pouvez encapsuler dans des propri\xe9t\xe9s d'objets. Vous pouvez ainsi impl\xe9menter des m\xe9thodes d'objets personnalis\xe9es."]}),"\n",(0,t.jsxs)(s.p,{children:["Pour ex\xe9cuter une m\xe9thode stock\xe9e dans une propri\xe9t\xe9 d'objet, utilisez l'op\xe9rateur ",(0,t.jsx)(s.strong,{children:"( )"})," apr\xe8s le nom de la propri\xe9t\xe9. Par exemple :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'//myAlert\nALERT("Hello world!")\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"myAlert"})," peut ensuite \xeatre encapsul\xe9 dans n'importe quel objet et peut \xeatre appel\xe9 :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //affiche "Hello world!"\n'})}),"\n",(0,t.jsx)(s.p,{children:"La syntaxe avec des crochets est \xe9galement prise en charge :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'$o["custom_Alert"]() //affiche "Hello world!"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez appeler votre formule en lui ",(0,t.jsx)(s.a,{href:"/docs/fr/18/Concepts/parameters",children:"passant des param\xe8tres"})," $1, $2, etc., tout comme pour les m\xe9thodes projet de 4D :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'//m\xe9thode fullName\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez encapsuler ",(0,t.jsx)(s.code,{children:"fullName"})," dans un objet :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith")\n//$result = "John Smith"\n// \xe9quivalent \xe0 $result:=fullName("param1";"param2")\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Lorsqu'elles sont associ\xe9es \xe0 la fonction ",(0,t.jsx)(s.code,{children:"This"}),", ces m\xe9thodes objets vous permettent d'\xe9crire du code g\xe9n\xe9rique tr\xe8s puissant. Par exemple :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'//m\xe9thode fullName2 \nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,t.jsx)(s.p,{children:"La m\xe9thode agit ensuite comme un nouvel attribut calcul\xe9 qui peut \xeatre ajout\xe9e aux autres attributs :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //ajouter la m\xe9thode  \n\n$result:=$o.fullName()\n//$result = "Jim Wesson"\n'})}),"\n",(0,t.jsx)(s.p,{children:"A note que m\xeame si elle n'a pas de param\xe8tres, une m\xe9thode objet devant \xeatre ex\xe9cut\xe9e doit \xeatre appel\xe9e avec des parenth\xe8ses ( ). Appeler uniquement la propri\xe9t\xe9 retournera une nouvelle r\xe9f\xe9rence \xe0 la formule (elle ne sera pas ex\xe9cut\xe9e) :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"$o:=$f.message //retourne l'objet formule en $o\n"})}),"\n",(0,t.jsx)(s.h3,{id:"m\xe9thodes-de-menu",children:"M\xe9thodes de menu"}),"\n",(0,t.jsx)(s.p,{children:"Une m\xe9thode de menu est appel\xe9e lorsque la commande de menu personnalis\xe9 \xe0 laquelle elle est associ\xe9e est s\xe9lectionn\xe9e. Vous assignez la m\xe9thode \xe0 la commande de menu dans l\u2019\xe9diteur de menus de 4D. Lorsque l\u2019utilisateur s\xe9lectionne la commande de menu, la m\xe9thode est ex\xe9cut\xe9e. Ce fonctionnement est l\u2019un des principaux aspects de la personnalisation d\u2019une base de donn\xe9es. C\u2019est en cr\xe9ant des menus qui appellent des m\xe9thodes de menu que vous personnalisez votre base."}),"\n",(0,t.jsxs)(s.p,{children:["Les commandes de menus personnalis\xe9s peuvent d\xe9clencher une ou plusieurs actions. Par exemple, une commande de menu de saisie d\u2019enregistrements peut appeler une m\xe9thode effectuant deux actions : afficher le formulaire entr\xe9e appropri\xe9 et appeler la commande ",(0,t.jsx)(s.code,{children:"AJOUTER ENREGISTREMENT"})," jusqu\u2019\xe0 ce que l\u2019utilisateur annule la saisie de nouveaux enregistrements."]}),"\n",(0,t.jsx)(s.p,{children:"L\u2019automatisation de s\xe9quences d\u2019actions est une possibilit\xe9 tr\xe8s puissante du langage de programmation de 4D. A l\u2019aide des menus personnalis\xe9s, vous pouvez automatiser des s\xe9quences de t\xe2ches, vous permettez aux utilisateurs de naviguer plus facilement dans votre base."}),"\n",(0,t.jsx)(s.h3,{id:"m\xe9thodes-de-gestion-de-process",children:"M\xe9thodes de gestion de process"}),"\n",(0,t.jsxs)(s.p,{children:["Une ",(0,t.jsx)(s.strong,{children:"m\xe9thode projet"})," est une m\xe9thode projet appel\xe9e lorsqu\u2019un process est d\xe9marr\xe9. Le process existera tant que la m\xe9thode sera en cours d'ex\xe9cution. A noter qu'une m\xe9thode de menu associ\xe9e \xe0 une commande de menu pour laquelle la propri\xe9t\xe9 ",(0,t.jsx)(s.em,{children:"D\xe9marrer un nouveau process"})," est s\xe9lectionn\xe9e, est aussi la m\xe9thode de gestion de process pour le process cr\xe9\xe9."]}),"\n",(0,t.jsx)(s.h3,{id:"m\xe9thodes-de-gestion-d\xe9v\xe9nements-et-derreurs",children:"M\xe9thodes de gestion d\u2019\xe9v\xe9nements et d'erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Une ",(0,t.jsx)(s.strong,{children:"m\xe9thode de gestion d\u2019\xe9v\xe9nements"})," est une m\xe9thode d\xe9di\xe9e \xe0 la gestion des \xe9v\xe9nements, qui s'ex\xe9cute dans un process diff\xe9rent de celui de la m\xe9thode de gestion des process. G\xe9n\xe9ralement, pour la gestion des \xe9v\xe9nements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de donn\xe9es, 4D d\xe9tecte les clics souris et les touches enfonc\xe9es, puis appelle les m\xe9thodes objet et formulaire correspondantes, vous permettant ainsi de pr\xe9voir dans ces m\xe9thodes les traitements appropri\xe9s aux \xe9v\xe9nements. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(s.code,{children:"APPELER SUR EVENEMENT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Une ",(0,t.jsx)(s.strong,{children:"m\xe9thode de gestion d\u2019erreurs"})," est une m\xe9thode projet d'interruption. Elle s'ex\xe9cute \xe0 l'int\xe9rieur du process dans lequel elle a \xe9t\xe9 install\xe9e \xe0 chaque fois qu'une erreur se produit. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(s.code,{children:"APPELER SUR ERREUR"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"m\xe9thode-projet-r\xe9cursives",children:"M\xe9thode projet r\xe9cursives"}),"\n",(0,t.jsx)(s.p,{children:"Des m\xe9thodes projet peuvent s'appeler les unes les autres. Par exemple :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Une m\xe9thode A peut appeler une m\xe9thode B, qui appelle A, donc A appelle B de nouveau, etc."}),"\n",(0,t.jsx)(s.li,{children:"Une m\xe9thode peut s'appeler elle-m\xeame."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Cela s'appelle la r\xe9cursivit\xe9. Le langage de 4D supporte pleinement la r\xe9cursivit\xe9."}),"\n",(0,t.jsxs)(s.p,{children:["Examinons l'exemple suivant : Supposons que vous disposiez d'une table ",(0,t.jsx)(s.code,{children:"[Friends and Relatives]"})," compos\xe9e de cet ensemble de champs extr\xeamement simplifi\xe9 :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"[Amis et parents]Nom"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"[Amis et parents]Enfant'Nom"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le m\xeame nom). A partir d'un nom, vous voulez \xe9crire la phrase \u201cUn de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !\u201d :"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Vous pouvez proc\xe9der de la mani\xe8re suivante :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' $vsName:=Request("Saisissez le nom :";"John")\n Si(OK=1)\n    QUERY([Amis et parents];[Amis et parents]Nom=$vsNom)\n    If(Records in selection([Amis et parents])>0)\n       $vtHistoireCompl\xe8te:="Un de mes amis, "+$vsName\n       Repeat\n          QUERY([Amis et parents];[Amis et parents]Enfant\'Nom=$vsName)\n          $vlResultRecherche:=Records in selection([Amis et parents])\n          If($vlResultRecherche>0)\n             $vtHistoireCompl\xe8te:=$vtHistoireCompl\xe8te+" qui est le rejeton de "+[Amis et parents]Nom\n             $vsName:=[Amis et parents]Nom\n          End if\n       Until($vlResultRecherche=0)\n       $vtHistoireCompl\xe8te:=$vtHistoireCompl\xe8te+", fait cela pour gagner sa vie !"\n       ALERT($vtHistoireCompl\xe8te)\n    End if\n End if\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Vous pouvez \xe9galement proc\xe9der ainsi :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' $vsName:=Request("Saisissez le nom :";"John")\n  If(OK=1)\n    QUERY([Amis et parents];[Amis et parents]Nom=$vsName)\n    If(Records in selection([Amis et parents])>0)\n       ALERT("Un de mes amis, "+G\xe9n\xe9alogie de($vsName)+", fait cela pour gagner sa vie !")\n    End if\n End if\n'})}),"\n",(0,t.jsxs)(s.p,{children:["en utilisant la fonction r\xe9cursive ",(0,t.jsx)(s.code,{children:"G\xe9n\xe9alogie de"})," suivante :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'  // M\xe9thode projet G\xe9n\xe9alogie de\n  // G\xe9n\xe9alogie de ( Cha\xeene ) -> Texte\n  // G\xe9n\xe9alogie de ( Nom ) -> Partie de la phrase\n\n $0:=$1\n QUERY([Amis et parents];[Amis et parents]Enfant\'Nom=$1)\nIf(Enregistrements trouves([Amis et parents])>0)\n    $0:=$0+" qui est le rejeton de "+G\xe9n\xe9alogie de([Amis et parents]Nom)\nEnd if\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Vous notez que la m\xe9thode ",(0,t.jsx)(s.code,{children:"G\xe9n\xe9alogie de"})," s'appelle elle-m\xeame."]}),"\n",(0,t.jsxs)(s.p,{children:["La premi\xe8re mani\xe8re de proc\xe9der utilise un ",(0,t.jsx)(s.strong,{children:"algorithme it\xe9ratif"}),". La seconde mani\xe8re utilise un ",(0,t.jsx)(s.strong,{children:"algorithme r\xe9cursif"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Lorsque vous impl\xe9mentez du code pour traiter des cas comme celui d\xe9crit ci-dessus, vous aurez toujours le choix entre \xe9crire des m\xe9thodes utilisant des algorithmes it\xe9ratifs ou r\xe9cursifs. Typiquement, la r\xe9cursivit\xe9 fournit un code plus concis, plus facile \xe0 lire et \xe0 maintenir, mais elle est facultative."}),"\n",(0,t.jsx)(s.p,{children:"Dans 4D, la r\xe9cursivit\xe9 est typiquement utilis\xe9e pour :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Traiter les enregistrements de tables li\xe9es les unes aux autres de la m\xeame mani\xe8re que d\xe9crit dans l'exemple ci-dessus."}),"\n",(0,t.jsxs)(s.li,{children:["Naviguer parmi les documents et les dossiers de votre disque \xe0 l'aide des commandes ",(0,t.jsx)(s.code,{children:"LISTE DES DOSSIERS"})," et ",(0,t.jsx)(s.code,{children:"LISTE DES DOCUMENTS"}),". Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-m\xeames contenir des dossiers et des documents, etc."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important :"})," Les appels r\xe9cursifs doivent toujours se terminer \xe0 un moment donn\xe9. Dans l'exemple ci-dessus, la m\xe9thode ",(0,t.jsx)(s.code,{children:"G\xe9n\xe9alogie de"})," cesse de s'appeler elle-m\xeame lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la m\xe9thode s'appellerait ind\xe9finiment et 4D pourrait au bout d'un certain temps retourner l'erreur \u201cLa pile est pleine\u201d car le programme n'aurait plus assez de place pour \"empiler\" les appels (ainsi que les param\xe8tres et les variables locales utilis\xe9s dans la m\xe9thode)."]}),"\n",(0,t.jsx)(s.h2,{id:"m\xe9thodes-sp\xe9cialis\xe9es",children:"M\xe9thodes sp\xe9cialis\xe9es"}),"\n",(0,t.jsxs)(s.p,{children:["Outre les ",(0,t.jsx)(s.strong,{children:"m\xe9thodes projets"}),", 4D prend en charge plusieurs types de m\xe9thodes sp\xe9cifiques, appel\xe9es automatiquement en fonction des \xe9v\xe9nements :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Contexte d'appel"}),(0,t.jsx)(s.th,{children:"Accepte des param\xe8tres"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"M\xe9thode objet (widget)"})}),(0,t.jsx)(s.td,{children:"Automatique, lorsqu'un \xe9v\xe9nement implique l'objet auquel la m\xe9thode est associ\xe9e"}),(0,t.jsx)(s.td,{children:"Non"}),(0,t.jsx)(s.td,{children:"Propri\xe9t\xe9 d'un objet formulaire (\xe9galement appel\xe9 widget)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"M\xe9thode formulaire"})}),(0,t.jsx)(s.td,{children:"Automatique, lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e"}),(0,t.jsx)(s.td,{children:"Non"}),(0,t.jsx)(s.td,{children:"Propri\xe9t\xe9 d'un formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Trigger"})," (ou ",(0,t.jsx)(s.em,{children:"m\xe9thode table"}),")"]}),(0,t.jsx)(s.td,{children:"Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)"}),(0,t.jsx)(s.td,{children:"Non"}),(0,t.jsx)(s.td,{children:"Propri\xe9t\xe9 d'une table. Les triggers sont des m\xe9thodes qui peuvent \xe9viter les op\xe9rations 'ill\xe9gales' effectu\xe9es avec les enregistrements de votre base."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"M\xe9thode base"})}),(0,t.jsx)(s.td,{children:"Automatique, lorsqu'un \xe9v\xe9nement se produit sur la session de travail"}),(0,t.jsx)(s.td,{children:"Oui (pr\xe9d\xe9fini)"}),(0,t.jsx)(s.td,{children:"Il existe 16 m\xe9thodes base dans 4D. Voir la section M\xe9thodes bases"})]})]})]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,s,n){var t,o={},u=null,a=null;for(t in void 0!==n&&(u=""+n),void 0!==s.key&&(u=""+s.key),void 0!==s.ref&&(a=s.ref),s)i.call(s,t)&&!d.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:u,ref:a,props:o,_owner:l.current}}s.Fragment=o,s.jsx=u,s.jsxs=u},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(296540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);