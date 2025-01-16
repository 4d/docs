"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11725"],{283582:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"API/FunctionClass","title":"Function","description":"Un objet 4D.Function contient un morceau de code qui peut \xeatre ex\xe9cut\xe9 \xe0 partir d\'un objet, soit en utilisant l\'op\xe9rateur (), soit en utilisant les fonctions apply() et call(). 4D propose trois types d\'objets Function :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/API/FunctionClass.md","sourceDirName":"API","slug":"/API/FunctionClass","permalink":"/docs/fr/20-R7/API/FunctionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFunctionClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"FunctionClass","title":"Function"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/fr/20-R7/API/FolderClass"},"next":{"title":"HTTPAgent","permalink":"/docs/fr/20-R7/API/HTTPAgentClass"}}'),l=s("785893"),t=s("250065");let i={id:"FunctionClass",title:"Function"},c=void 0,a={},o=[{value:"Objets Formula",id:"objets-formula",level:3},{value:"Passer des param\xe8tres",id:"passer-des-param\xe8tres",level:4},{value:"Param\xe8tres d&#39;une seule m\xe9thode",id:"param\xe8tres-dune-seule-m\xe9thode",level:4},{value:"Sommaire",id:"sommaire",level:3},{value:".apply()",id:"apply",level:2},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:".call()",id:"call",level:2},{value:"Description",id:"description-1",level:4},{value:"Exemple 1",id:"exemple-1-1",level:4},{value:"Exemple 2",id:"exemple-2-1",level:4},{value:".source",id:"source",level:2},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple",level:4}];function d(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Un objet ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"4D.Function"})})," contient un morceau de code qui peut \xeatre ex\xe9cut\xe9 \xe0 partir d'un objet, soit en utilisant l'op\xe9rateur ",(0,l.jsx)(n.code,{children:"()"}),", soit en utilisant les fonctions ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," et ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})}),". 4D propose trois types d'objets ",(0,l.jsx)(n.code,{children:"Function"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"les fonctions natives"}),", c'est-\xe0-dire les fonctions int\xe9gr\xe9es des diverses classes 4D telles que ",(0,l.jsx)(n.code,{children:"collection.sort()"})," ou ",(0,l.jsx)(n.code,{children:"file.copyTo()"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"les fonctions utilisateur"}),", cr\xe9\xe9es dans les ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/classes",children:"classes utilisateur"})," \xe0 l'aide du mot-cl\xe9 ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/classes#function",children:"Function"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"les fonctions de formule"}),", c'est-\xe0-dire les fonctions qui peuvent ex\xe9cuter n'importe quelle formule 4D."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"objets-formula",children:"Objets Formula"}),"\n",(0,l.jsxs)(n.p,{children:["Les commandes ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/formula",children:"Formula"})," et ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/formula-from-string",children:"Formula from string"})," vous permettent de cr\xe9er des objets ",(0,l.jsx)(n.a,{href:"#objets-formula",children:(0,l.jsx)(n.code,{children:"4D.Function"})})," pour ex\xe9cuter n'importe quelle expression ou code 4D exprim\xe9 sous forme de texte."]}),"\n",(0,l.jsx)(n.p,{children:"Les objets Formula peuvent \xeatre encapsul\xe9s dans des propri\xe9t\xe9s d'objet :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=New object\n $f.message:=Formula(ALERT("Hello world"))\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est une \"fonction objet\", c'est-\xe0-dire une fonction qui est li\xe9e \xe0 son objet parent. Pour ex\xe9cuter une fonction stock\xe9e dans une propri\xe9t\xe9 objet, utilisez l'op\xe9rateur ",(0,l.jsx)(n.strong,{children:"()"})," apr\xe8s le nom de la propri\xe9t\xe9, comme par exemple :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message() //affiche"Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"La syntaxe avec des crochets est \xe9galement prise en charge :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f["message"]() //affiche "Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"A noter que, m\xeame si elle n'a pas de param\xe8tres (voir ci-dessous), une fonction objet \xe0 ex\xe9cuter doit \xeatre appel\xe9e avec des parenth\xe8ses (). Appeler uniquement la propri\xe9t\xe9 retournera une nouvelle r\xe9f\xe9rence \xe0 la formule (elle ne sera pas ex\xe9cut\xe9e) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $o:=$f.message //retourne l'objet formule en $o\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez \xe9galement ex\xe9cuter une fonction en utilisant les fonctions ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," et ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message.apply() //affiche "Hello world"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"passer-des-param\xe8tres",children:"Passer des param\xe8tres"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez passer des param\xe8tres \xe0 vos formules en utilisant ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/parameters#sequential-parameters",children:"la syntaxe s\xe9quentielle des param\xe8tres"})," bas\xe9e sur $1, $2...$n. Par exemple, vous pouvez \xe9crire :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=New object\n $f.message:=Formula(ALERT("Hello "+$1))\n $f.message("John") //affiche "Hello John"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Ou en utilisant la fonction ",(0,l.jsx)(n.a,{href:"#call",children:".call()"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=Formula($1+" "+$2)\n $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"\n $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retourne "Welcome to 2019" (par exemple)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"param\xe8tres-dune-seule-m\xe9thode",children:"Param\xe8tres d'une seule m\xe9thode"}),"\n",(0,l.jsx)(n.p,{children:"Pour plus de commodit\xe9, lorsque la formule est constitu\xe9e d'une seule m\xe9thode projet, les param\xe8tres peuvent \xeatre omis dans l'initialisation de l'objet formule. Ils peuvent simplement \xeatre pass\xe9s lorsque la formule est appel\xe9e. Par exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n\n $f:=Formula(myMethod)\n  //Ecrire Formula(myMethod($1;$2)) n\'est pas n\xe9cessaire\n $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"\n $text:=$f.call() //retourne "How are you?"\n\n  //myMethod\n #DECLARE ($param1 : Text; $param2 : Text)->$return : Text\n If(Count parameters=2)\n    $return:=$param1+" "+$param2\n Else\n    $return:="How are you?"\n End if\n'})}),"\n",(0,l.jsx)(n.p,{children:"Les param\xe8tres sont re\xe7us dans la m\xe9thode, dans l'ordre o\xf9 ils sont sp\xe9cifi\xe9s dans l'appel."}),"\n",(0,l.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{})})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#apply",children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),(0,l.jsx)(n.br,{}),"ex\xe9cute l'objet ",(0,l.jsx)(n.code,{children:"formula"})," auquel elle est appliqu\xe9e et retourne la valeur r\xe9sultante"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#call",children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),(0,l.jsx)(n.br,{}),"ex\xe9cute l'objet ",(0,l.jsx)(n.code,{children:"formula"})," auquel elle est appliqu\xe9e et retourne la valeur r\xe9sultante"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#source",children:[(0,l.jsx)(n.strong,{children:".source"})," : Text "]}),(0,l.jsx)(n.br,{}),"contient l'expression source de ",(0,l.jsx)(n.code,{children:"formula"})," sous forme de texte"]})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"apply",children:".apply()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Modifications"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"center"}}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(n.td,{children:"Objet \xe0 retourner par la commande This dans la formule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formulaParams"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsxs)(n.td,{children:["Collection des valeurs \xe0 passer en tant que $1...$n lorsque ",(0,l.jsx)(n.code,{children:"formula"})," est ex\xe9cut\xe9"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(n.td,{children:"Valeur obtenue \xe0 partir de l'ex\xe9cution de la formule"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La fonction ",(0,l.jsx)(n.code,{children:".apply()"})," ex\xe9cute l'objet ",(0,l.jsx)(n.code,{children:"formula"})," auquel elle est appliqu\xe9e et retourne la valeur r\xe9sultante. L'objet formula peut \xeatre cr\xe9\xe9 \xe0 l'aide des commandes ",(0,l.jsx)(n.code,{children:"Formula"})," ou ",(0,l.jsx)(n.code,{children:"Formula from string"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"thisObj"}),", vous pouvez passer une r\xe9f\xe9rence \xe0 l'objet \xe0 utiliser en tant que ",(0,l.jsx)(n.code,{children:"This"})," dans la formule."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez \xe9galement passer une collection \xe0 utiliser comme param\xe8tres $1...$n dans la formule \xe0 l'aide du param\xe8tre facultatif ",(0,l.jsx)(n.em,{children:"formulaParams"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Notez que ",(0,l.jsx)(n.code,{children:".apply()"})," est similaire \xe0 ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:".call()"})})," sauf que les param\xe8tres sont pass\xe9s en tant que collection. Cela peut \xeatre utile pour passer des r\xe9sultats calcul\xe9s."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" var $f : 4D.Function\n $f:=Formula($1+$2+$3)\n\n $c:=New collection(10;20;30)\n $result:=$f.apply(Null;$c) // retourne 60\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $calc : 4D.Function\n var $feta; $robot : Object\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}\n $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"call",children:".call()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Modifications"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objet \xe0 retourner par la commande This dans la formule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"params"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Valeur(s) \xe0 passer en tant que $1...$n lorsque formula est ex\xe9cut\xe9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Valeur obtenue \xe0 partir de l'ex\xe9cution de la formule"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La fonction ",(0,l.jsx)(n.code,{children:".call()"})," ex\xe9cute l'objet ",(0,l.jsx)(n.code,{children:"formula"})," auquel elle est appliqu\xe9e et retourne la valeur r\xe9sultante. L'objet formula peut \xeatre cr\xe9\xe9 \xe0 l'aide des commandes ",(0,l.jsx)(n.code,{children:"Formula"})," ou ",(0,l.jsx)(n.code,{children:"Formula from string"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"thisObj"}),", vous pouvez passer une r\xe9f\xe9rence \xe0 l'objet \xe0 utiliser en tant que ",(0,l.jsx)(n.code,{children:"This"})," dans la formule."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez \xe9galement passer des valeurs \xe0 utiliser comme param\xe8tres ",(0,l.jsx)(n.em,{children:"$1...$n"})," dans la formule \xe0 l'aide du param\xe8tre facultatif ",(0,l.jsx)(n.em,{children:"params"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Notez que ",(0,l.jsx)(n.code,{children:".call()"})," est similaire \xe0 ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:".apply()"})})," sauf que les param\xe8tres sont pass\xe9s directement."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(Uppercase($1))\n $result:=$f.call(Null;"hello") // retourne "HELLO"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2-1",children:"Exemple 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $o:=New object("value";50)\n $f:=Formula(This.value*2)\n $result:=$f.call($o) // retourne 100\n'})}),"\n",(0,l.jsx)(n.h2,{id:"source",children:".source"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Modifications"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"18 R2"}),(0,l.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".source"})," : Text"]}),"\n",(0,l.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(n.code,{children:".source"})," contient l'expression source de ",(0,l.jsx)(n.code,{children:"formula"})," sous forme de texte."]}),"\n",(0,l.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est en ",(0,l.jsx)(n.strong,{children:"lecture seule"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $of : 4D.Function\n var $tf : Text\n $of:=Formula(String(Current time;HH MM AM PM))\n $tf:=$of.source //"String(Current time;HH MM AM PM)"\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let l={},t=r.createContext(l);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);