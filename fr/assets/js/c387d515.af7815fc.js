"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3398"],{32072:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"Concepts/parameters","title":"Param\xe8tres","description":"Vous aurez souvent besoin de fournir des valeurs \xe0 vos m\xe9thodes et fonctions. Vous pouvez facilement effectuer cette op\xe9ration gr\xe2ce aux param\xe8tres.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Concepts/parameters.md","sourceDirName":"Concepts","slug":"/Concepts/parameters","permalink":"/docs/fr/20-R7/Concepts/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fparameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"parameters","title":"Param\xe8tres"},"sidebar":"docs","previous":{"title":"Methods","permalink":"/docs/fr/20-R7/Concepts/methods"},"next":{"title":"Objets et collections partag\xe9s","permalink":"/docs/fr/20-R7/Concepts/shared"}}'),a=s("785893"),t=s("250065");let l={id:"parameters",title:"Param\xe8tres"},i=void 0,o={},d=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"D\xe9claration des param\xe8tres",id:"d\xe9claration-des-param\xe8tres",level:2},{value:"Valeur retourn\xe9e",id:"valeur-retourn\xe9e",level:3},{value:"Type de donn\xe9es pris en charge",id:"type-de-donn\xe9es-pris-en-charge",level:3},{value:"Initialisation",id:"initialisation",level:3},{value:"<code>return {expression}</code>",id:"return-expression",level:2},{value:"Indirections sur les param\xe8tres (${N})",id:"indirections-sur-les-param\xe8tres-n",level:2},{value:"Utilisation des param\xe8tres variadiques",id:"utilisation-des-param\xe8tres-variadiques",level:3},{value:"D\xe9claration des param\xe8tres variadiques",id:"d\xe9claration-des-param\xe8tres-variadiques",level:3},{value:"Exemple",id:"exemple",level:4},{value:"Triggers and On Drag Over",id:"triggers-and-on-drag-over",level:2},{value:"Type de param\xe8tre erron\xe9",id:"type-de-param\xe8tre-erron\xe9",level:2},{value:"Utilisation des propri\xe9t\xe9s d&#39;objet comme param\xe8tres nomm\xe9s",id:"utilisation-des-propri\xe9t\xe9s-dobjet-comme-param\xe8tres-nomm\xe9s",level:2},{value:"Param\xe8tres optionnels",id:"param\xe8tres-optionnels",level:2},{value:"Valeurs ou r\xe9f\xe9rences",id:"valeurs-ou-r\xe9f\xe9rences",level:2},{value:"Cas particuliers : objets et collections",id:"cas-particuliers--objets-et-collections",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Vous aurez souvent besoin de fournir des valeurs \xe0 vos m\xe9thodes et fonctions. Vous pouvez facilement effectuer cette op\xe9ration gr\xe2ce aux param\xe8tres."}),"\n",(0,a.jsx)(n.h2,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Les param\xe8tres"})," (ou ",(0,a.jsx)(n.strong,{children:"arguments"}),") sont des donn\xe9es dont une m\xe9thode ou une fonction de classe a besoin pour s\u2019ex\xe9cuter. Le terme ",(0,a.jsx)(n.em,{children:"param\xe8tres"})," ou ",(0,a.jsx)(n.em,{children:"arguments"})," est utilis\xe9 indiff\xe9remment dans ce manuel. Des param\xe8tres sont \xe9galement pass\xe9s aux commandes int\xe9gr\xe9es de 4D. Dans l\u2019exemple ci-dessous, la cha\xeene \u201CBonjour\u201D est un param\xe8tre de la commande ",(0,a.jsx)(n.code,{children:"ALERT"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'ALERT("Bonjour")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Les param\xe8tres sont pass\xe9s de la m\xeame mani\xe8re aux m\xe9thodes ou aux fonctions de classe (class functions). Par exemple, si une fonction de classe nomm\xe9e ",(0,a.jsx)(n.code,{children:"getArea()"})," accepte deux param\xe8tres, voil\xe0 \xe0 quoi pourrait ressembler un appel \xe0 la fonction de classe :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Ou si une m\xe9thode projet ",(0,a.jsx)(n.code,{children:"FAIRE QUELQUE CHOSE"})," accepte trois param\xe8tres, l'appel \xe0 cette m\xe9thode pourrait \xeatre de la forme suivante :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"FAIRE QUELQUE CHOSE($AvecCeci;$EtCela;$CommeCeci)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Les param\xe8tres d'entr\xe9e sont s\xe9par\xe9s par des points-virgules (;)."}),"\n",(0,a.jsx)(n.p,{children:"Les m\xeames principes s'appliquent lorsque des m\xe9thodes sont ex\xe9cut\xe9es via des commandes d\xe9di\xe9es, comme par exemple :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'EXECUTER METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  \n//passer la date !05/05/20! comme param\xe8tre \xe0 SetCalendarDate  \n//dans le contexte d\'un sous-formulaire\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Les donn\xe9es peuvent \xe9galement \xeatre ",(0,a.jsx)(n.strong,{children:"retourn\xe9es"})," \xe0 partir de m\xe9thodes et de fonctions de classe. Par exemple, la ligne d\u2019instruction suivante utilise une commande 4D, ",(0,a.jsx)(n.code,{children:"Length"}),", qui retourne la longueur d\u2019une cha\xeene. La valeur retourn\xe9e par ",(0,a.jsx)(n.code,{children:"Longueur"})," est plac\xe9e dans une variable appel\xe9e ",(0,a.jsx)(n.em,{children:"MaLongueur"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'MaLongueur:=Length("Comment suis-je arriv\xe9 l\xe0 ?")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Toute sous-routine peut retourner une valeur. Un seul param\xe8tre de sortie peut \xeatre d\xe9clar\xe9 par m\xe9thode ou fonction de classe."}),"\n",(0,a.jsxs)(n.p,{children:["Les valeurs d'entr\xe9e et de sortie sont ",(0,a.jsx)(n.a,{href:"#values-or-references",children:"\xe9valu\xe9es"})," au moment de l'appel et copi\xe9es dans ou \xe0 partir de variables locales au sein de la fonction ou de la m\xe9thode appel\xe9e. Les variables de param\xe8tres doivent \xeatre ",(0,a.jsx)(n.a,{href:"#declaring-parameters",children:"d\xe9clar\xe9es"})," dans le code appel\xe9."]}),"\n",(0,a.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,a.jsxs)(n.p,{children:["The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as ",(0,a.jsx)(n.code,{children:"C_TEXT($1;$2)"}),", is ",(0,a.jsx)(n.strong,{children:"deprecated"})," as of 4D 20 R7."]})}),"\n",(0,a.jsx)(n.h2,{id:"d\xe9claration-des-param\xe8tres",children:"D\xe9claration des param\xe8tres"}),"\n",(0,a.jsxs)(n.p,{children:["Dans les m\xe9thodes et fonctions de classe qui sont appel\xe9es, les valeurs des param\xe8tres sont assign\xe9es aux variables locales. Vous d\xe9clarez g\xe9n\xe9ralement les param\xe8tres en utilisant un ",(0,a.jsx)(n.strong,{children:"nom de param\xe8tre"})," et un ",(0,a.jsx)(n.strong,{children:"type de param\xe8tre"}),", s\xe9par\xe9s par deux points."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For class functions, parameters are declared along with the function prototype, i.e. when using the ",(0,a.jsx)(n.code,{children:"Function"})," or ",(0,a.jsx)(n.code,{children:"Class Constructor"})," keywords."]}),"\n",(0,a.jsxs)(n.li,{children:["Pour les m\xe9thodes (m\xe9thodes projet, m\xe9thodes objet, m\xe9thodes base et triggers), les param\xe8tres sont d\xe9clar\xe9s \xe0 l'aide du mot cl\xe9 ",(0,a.jsx)(n.code,{children:"#DECLARE"})," saisi au d\xe9but du code de la m\xe9thode."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Exemples :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer) -> $area : Integer\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" //myProjectMethod\n#DECLARE ($i : Integer) -> $myResult : Object\n"})}),"\n",(0,a.jsx)(n.p,{children:"Les r\xe8gles suivantes s'appliquent :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"La ligne de d\xe9claration doit \xeatre la premi\xe8re ligne de code de la m\xe9thode ou de la fonction, sinon une erreur est affich\xe9e (seuls des commentaires ou des sauts de ligne peuvent pr\xe9c\xe9der la d\xe9claration)."}),"\n",(0,a.jsxs)(n.li,{children:["Les noms des param\xe8tres doivent commencer par un caract\xe8re ",(0,a.jsx)(n.code,{children:"$"})," et \xeatre conformes aux ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/identifiers#propri%C3%A9t%C3%A9s-des-objets",children:"r\xe8gles de nommage des propri\xe9t\xe9s"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Les param\xe8tres multiples (et leurs types) sont s\xe9par\xe9s par des points-virgules (;)."}),"\n",(0,a.jsx)(n.li,{children:'Les syntaxes multilignes sont prises en charge (en utilisant le caract\xe8re "").'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Par exemple, lorsque vous appelez une fonction ",(0,a.jsx)(n.code,{children:"getArea()"})," avec deux param\xe8tres :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Dans le code de la fonction de classe, la valeur de chaque param\xe8tre est copi\xe9e dans le param\xe8tre d\xe9clar\xe9 correspondant :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"// Class: Polygon\nFunction getArea($width : Integer; $height : Integer)-> $area : Integer\n	$area:=$width*$height\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Si le type n'est pas d\xe9fini, le param\xe8tre sera d\xe9fini comme ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variant",children:(0,a.jsx)(n.code,{children:"Variant"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Tous les types de m\xe9thodes 4D prennent en charge le mot-cl\xe9 ",(0,a.jsx)(n.code,{children:"#DECLARE"}),", y compris les m\xe9thodes base. Par exemple, dans la m\xe9thode base ",(0,a.jsx)(n.code,{children:"On Web Authentication"}),", vous pouvez d\xe9clarer des param\xe8tres nomm\xe9s :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'	// On Web Authentication database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n$entitySelection:=ds.User.query("login=:1"; $user)\n// V\xe9rifier le hash du mot passe...\n'})}),"\n",(0,a.jsx)(n.h3,{id:"valeur-retourn\xe9e",children:"Valeur retourn\xe9e"}),"\n",(0,a.jsx)(n.p,{children:"Vous d\xe9clarez le param\xe8tre de retour d'une fonction en ajoutant une fl\xe8che (->) et la d\xe9finition du param\xe8tre apr\xe8s la liste des param\xe8tres d'entr\xe9e. Par exemple :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer) -> $result : Integer\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Vous pouvez \xe9galement d\xe9clarer le param\xe8tre de retour en ajoutant uniquement ",(0,a.jsx)(n.code,{children:": type"}),", auquel cas il peut \xeatre trait\xe9 par un ",(0,a.jsx)(n.a,{href:"#return-expression",children:"return"}),". Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer): Integer\n	return $x+$y\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"Les param\xe8tres, y compris la valeur retourn\xe9e, doivent \xeatre d\xe9clar\xe9s une seule fois. En particulier, vous ne pouvez pas d\xe9clarer le m\xeame param\xe8tre en tant qu'entr\xe9e et sortie, m\xeame avec le m\xeame type. Par exemple :"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-qs",children:"	//invalid declaration\nFunction myTransform ($x : Integer) -> $x : Integer\n	//error: $x is declared twice\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"type-de-donn\xe9es-pris-en-charge",children:"Type de donn\xe9es pris en charge"}),"\n",(0,a.jsxs)(n.p,{children:["Avec les param\xe8tres nomm\xe9s, vous pouvez utiliser les m\xeames types de donn\xe9es que ceux qui sont ",(0,a.jsxs)(n.a,{href:"/docs/fr/20-R7/Concepts/variables#utilisation-du-mot-cl%C3%A9-var",children:["pris en charge par le mot-cl\xe9 ",(0,a.jsx)(n.code,{children:"var"})]}),", y compris les objets de classe. Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Les expressions tables ou tableaux (arrays) peuvent uniquement \xeatre pass\xe9es ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/pointer#pointers-as-parameters-to-methods",children:"par r\xe9f\xe9rence en utilisant un pointeur"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"initialisation",children:"Initialisation"}),"\n",(0,a.jsxs)(n.p,{children:["Lorsque les param\xe8tres sont d\xe9clar\xe9s, ils sont initialis\xe9s \xe0 la ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/data-types#valeurs-par-defaut",children:(0,a.jsx)(n.strong,{children:"valeur par d\xe9faut correspondant \xe0 leur type"})}),", qu'ils conserveront pendant la session tant qu'ils n'auront pas \xe9t\xe9 assign\xe9s."]}),"\n",(0,a.jsx)(n.h2,{id:"return-expression",children:(0,a.jsx)(n.code,{children:"return {expression}"})}),"\n",(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Release"}),(0,a.jsx)(n.th,{children:"Modifications"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"19 R4"}),(0,a.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["L'instruction ",(0,a.jsx)(n.code,{children:"return"})," met fin \xe0 l'ex\xe9cution d'une fonction ou d'une m\xe9thode et peut \xeatre utilis\xe9e pour retourner une expression \xe0 l'appelant."]}),"\n",(0,a.jsx)(n.p,{children:"Par exemple, la fonction suivante retourne le carr\xe9 de son argument, $x, o\xf9 $x est un nombre."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function square($x : Integer) -> $result : Integer\n   return $x * $x\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Internally, ",(0,a.jsx)(n.code,{children:"return x"})," executes ",(0,a.jsx)(n.code,{children:"myReturnValue:=x"}),", and returns to the caller. Si ",(0,a.jsx)(n.code,{children:"return"})," est utilis\xe9 sans expression, la fonction ou la m\xe9thode retourne une valeur nulle du type de retour d\xe9clar\xe9 (le cas \xe9ch\xe9ant), sinon elle est ",(0,a.jsx)(n.em,{children:"ind\xe9finie"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["L'instruction ",(0,a.jsx)(n.code,{children:"return"})," peut \xeatre utilis\xe9e avec la syntaxe standard pour les ",(0,a.jsx)(n.a,{href:"#returned-value",children:"valeurs retourn\xe9es"})," (la valeur retourn\xe9e doit \xeatre du type d\xe9clar\xe9). Cependant, notez qu'elle met imm\xe9diatement fin \xe0 l'ex\xe9cution du code. Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function getValue -> $v : Integer\n	$v:=10\n	return 20\n	// returns 20\n\nFunction getValue -> $v : Integer\n	return 10\n	$v:=20 // never executed\n	// returns 10\n"})}),"\n",(0,a.jsx)(n.h2,{id:"indirections-sur-les-param\xe8tres-n",children:"Indirections sur les param\xe8tres (${N})"}),"\n",(0,a.jsxs)(n.p,{children:["Les m\xe9thodes et fonctions 4D acceptent un nombre variable de param\xe8tres. Vous pouvez adresser ces param\xe8tres avec une boucle ",(0,a.jsx)(n.code,{children:"For...End for"}),", la ",(0,a.jsxs)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page259.html",children:["commande ",(0,a.jsx)(n.code,{children:"Count parameters"})]})," et la ",(0,a.jsx)(n.strong,{children:"syntaxe d'indirection des param\xe8tres"}),". Au sein de la m\xe9thode, une adresse d'indirection est format\xe9e ",(0,a.jsx)(n.code,{children:"${N}"}),", o\xf9 ",(0,a.jsx)(n.code,{children:"N"})," est une expression num\xe9rique."]}),"\n",(0,a.jsx)(n.h3,{id:"utilisation-des-param\xe8tres-variadiques",children:"Utilisation des param\xe8tres variadiques"}),"\n",(0,a.jsx)(n.p,{children:"Par un exemple, consid\xe9rons une m\xe9thode qui calcule une somme de valeurs retourn\xe9e suivant un format pass\xe9 comme param\xe8tre. A chaque appel \xe0 cette m\xe9thode, le nombre de valeurs \xe0 additionner peut varier. Il faudra donc passer comme param\xe8tre \xe0 notre m\xe9thode les valeurs, en nombre variable, et le format, exprim\xe9 sous forme d\u2019une cha\xeene de caract\xe8res."}),"\n",(0,a.jsxs)(n.p,{children:["Voici la m\xe9thode nomm\xe9e ",(0,a.jsx)(n.code,{children:"MySum"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" #DECLARE($format : Text) -> $result : Text\n $sum:=0\n For($i;2;Count parameters)\n    $sum:=$sum+${$i}\n End for\n $result:=String($sum;$format)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Les param\xe8tres de la m\xe9thode doivent \xeatre pass\xe9s dans le bon ordre : le format d\u2019abord et ensuite les valeurs, dont le nombre peut varier :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24) //"182.70"\n Result:=MySum("000";1;2;200) //"203"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Notez que m\xeame si vous avez d\xe9clar\xe9 0, 1, ou plus param\xe8tres, vous pouvez toujours passer le nombre de param\xe8tres que vous voulez. Tous les param\xe8tres sont accessibles dans le code appel\xe9 via la syntaxe ",(0,a.jsx)(n.code,{children:"${N}"})," et le type des param\xe8tres suppl\xe9mentaires est ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variant",children:"Variant"})," par d\xe9faut (vous pouvez les d\xe9clarer en utilisant la notation variadique [](#declaring-variadic-parameter Il vous suffit de vous assurer que les param\xe8tres existent, gr\xe2ce \xe0 la commande ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page259.html",children:(0,a.jsx)(n.code,{children:"Count parameters"})}),". Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'//foo method\n#DECLARE($p1: Text;$p2 : Text; $p3 : Date)\nFor($i;1;Count parameters)\n	ALERT("param "+String($i)+" = "+String(${$i}))\nEnd for\n'})}),"\n",(0,a.jsx)(n.p,{children:"Cette m\xe9thode peut \xeatre appel\xe9e :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'foo("hello";"world";!01/01/2021!;42;?12:00:00?) //des param\xe8tres suppl\xe9mentaires sont pass\xe9s\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les param\xe8tres ne sont pas adress\xe9s par indirection, ce qui est le cas le plus fr\xe9quent, il faut que les param\xe8tres adress\xe9s par indirection soient pass\xe9s en fin de liste."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"d\xe9claration-des-param\xe8tres-variadiques",children:"D\xe9claration des param\xe8tres variadiques"}),"\n",(0,a.jsxs)(n.p,{children:["Il n'est pas obligatoire de d\xe9clarer les param\xe8tres variadiques. Les param\xe8tres variadiques non d\xe9clar\xe9s obtiennent automatiquement le type ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/variant",children:"Variant"}),"."]}),"\n",(0,a.jsx)(n.p,{children:'Toutefois, pour \xe9viter les erreurs de correspondance de type lors de l\'ex\xe9cution du code, vous pouvez d\xe9clarer un nombre variable de param\xe8tres en utilisant la notation "..." dans les prototypes de vos fonctions, constructeurs de classes et m\xe9thodes (param\xe8tres variadiques). Vous sp\xe9cifiez le type du param\xe8tre en suivant la notation "..." avec le type d\xe9sir\xe9.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"#DECLARE ( ... : Text ) // Nombre ind\xe9fini de param\xe8tres 'Text'\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function myfunction ( ... : Text)\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Lors de la d\xe9claration de plusieurs param\xe8tres, la notation variadique doit \xeatre employ\xe9e en derni\xe8re position, par exemple :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"#DECLARE ( param: Real ; ... : Text )\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"Function myfunction (var1: Integer ; ... : Text)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsxs)(n.p,{children:["Nous avons ici une m\xe9thode appel\xe9e ",(0,a.jsx)(n.code,{children:"SumNumbers"})," qui renvoie le total calcul\xe9 pour tous les nombres transmis en tant que param\xe8tres :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\n#DECLARE( ... : Real) : Real\n\n\n\nvar $number; $total : Real\n\nFor each ($number; 1; Count parameters)\n	$total+=${$number}\nEnd for each\n\nreturn $total\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Cette m\xe9thode peut \xeatre appel\xe9e avec un nombre variable de param\xe8tres Real. Dans le cas d'un param\xe8tre de type incorrect, une erreur sera renvoy\xe9e avant que la m\xe9thode ne soit ex\xe9cut\xe9e :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\n$total1:=SumNumbers // returns 0\n$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15\n$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error\n\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"note",children:(0,a.jsxs)(n.p,{children:["The legacy syntax for declaring variadic parameters (",(0,a.jsx)(n.code,{children:"C_TEXT(${4})"}),") is deprecated as of 4D 20 R7."]})}),"\n",(0,a.jsx)(n.h2,{id:"triggers-and-on-drag-over",children:"Triggers and On Drag Over"}),"\n",(0,a.jsx)(n.p,{children:'Certains contextes ne prennent pas en charge la d\xe9claration dans une m\xe9thode "Compiler_", ils sont donc g\xe9r\xe9s de mani\xe8re sp\xe9cifique :'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Triggers - Le param\xe8tre $0 (Entier long), qui r\xe9sulte d'un trigger, sera typ\xe9 par le compilateur si le param\xe8tre n'a pas \xe9t\xe9 explicitement d\xe9clar\xe9. N\xe9anmoins, si vous souhaitez le d\xe9clarer, vous devez le faire dans le trigger lui-m\xeame."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"type-de-param\xe8tre-erron\xe9",children:"Type de param\xe8tre erron\xe9"}),"\n",(0,a.jsxs)(n.p,{children:["L'appel d'un param\xe8tre de type incorrect est une ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/error-handling",children:"erreur"})," qui emp\xeache une ex\xe9cution correcte. Par exemple, si vous \xe9crivez les m\xe9thodes suivantes :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"// method1\n#DECLARE($value : Text)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"// method2\nmethod1(42) //mauvais type, texte attendu\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ce cas est trait\xe9 par 4D en fonction du contexte :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["dans les ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/interpreted-compiled",children:"projets compil\xe9s"}),", une erreur est g\xe9n\xe9r\xe9e \xe0 l'\xe9tape de compilation lorsque cela est possible. Sinon, une erreur est g\xe9n\xe9r\xe9e lorsque la m\xe9thode est appel\xe9e."]}),"\n",(0,a.jsxs)(n.li,{children:["dans les projets interpr\xe9t\xe9s :\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["si le param\xe8tre a \xe9t\xe9 d\xe9clar\xe9 en utilisant ",(0,a.jsx)(n.a,{href:"#named-parameters",children:"la syntaxe nomm\xe9e"})," (",(0,a.jsx)(n.code,{children:"#DECLARE"})," ou ",(0,a.jsx)(n.code,{children:"Function"}),"), une erreur est g\xe9n\xe9r\xe9e lorsque la m\xe9thode est appel\xe9e."]}),"\n",(0,a.jsxs)(n.li,{children:["if the parameter was declared using a legacy (",(0,a.jsx)(n.code,{children:"_C_XXX"}),") syntax, no error is generated, the called method receives an empty value of the expected type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"utilisation-des-propri\xe9t\xe9s-dobjet-comme-param\xe8tres-nomm\xe9s",children:"Utilisation des propri\xe9t\xe9s d'objet comme param\xe8tres nomm\xe9s"}),"\n",(0,a.jsxs)(n.p,{children:["L'utilisation d'objets en tant que param\xe8tres vous permet de g\xe9rer des ",(0,a.jsx)(n.strong,{children:"param\xe8tres nomm\xe9s"}),". Ce style de programmation est simple, souple et facile \xe0 lire."]}),"\n",(0,a.jsxs)(n.p,{children:["Par exemple, si vous utilisez la m\xe9thode ",(0,a.jsx)(n.code,{children:"CreatePerson"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,a.jsxs)(n.p,{children:["Dans la m\xe9thode ",(0,a.jsx)(n.code,{children:"ChangeAge"}),", vous pouvez \xe9crire :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["C'est un moyen puissant de d\xe9finir des ",(0,a.jsx)(n.a,{href:"#optional-parameters",children:"param\xe8tres optionnels"})," (voir ci-dessous \xe9galement). Pour g\xe9rer les param\xe8tres manquants, vous pouvez :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["v\xe9rifier si tous les param\xe8tres attendus sont fournis en les comparant \xe0 la valeur ",(0,a.jsx)(n.code,{children:"Null"}),", ou"]}),"\n",(0,a.jsx)(n.li,{children:"pr\xe9d\xe9finir les valeurs des param\xe8tres, ou"}),"\n",(0,a.jsx)(n.li,{children:"les utiliser sous forme de valeurs vides."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Dans la m\xe9thode ",(0,a.jsx)(n.code,{children:"ChangeAge"})," ci-dessus, les propri\xe9t\xe9s Age et Nom sont obligatoires et pourraient g\xe9n\xe9rer des erreurs si elles sont manquantes. Pour \xe9viter cela, vous pouvez simplement \xe9crire :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,a.jsx)(n.p,{children:'Les deux param\xe8tres sont alors optionnels. S\'ils ne sont pas renseign\xe9s, le r\xe9sultat sera "a 10 ans", mais aucune erreur ne sera g\xe9n\xe9r\xe9e.'}),"\n",(0,a.jsx)(n.p,{children:"Enfin, les param\xe8tres nomm\xe9s permettent de maintenir et de reproduire des applications en toutes simplicit\xe9 et s\xe9curit\xe9. Imaginez que vous r\xe9alisez, par la suite, qu'ajouter 10 ans n'est pas toujours appropri\xe9. Vous aurez besoin d'un autre param\xe8tre pour d\xe9finir le nombre d'ann\xe9es \xe0 ajouter. Vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\n#DECLARE ($para : Object)  \nIf ($para.toAdd=Null)\n	$para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ici, toute la puissance r\xe9side dans le fait de ne pas avoir \xe0 changer votre code existant. Cela fonctionnera toujours dans l'ancienne version, mais le cas \xe9ch\xe9ant, vous pouvez utiliser une autre valeur que 10 ans."}),"\n",(0,a.jsx)(n.p,{children:"Avec les variables nomm\xe9es, n'importe quel param\xe8tre peut \xeatre optionnel. Dans l'exemple ci-dessus, tous les param\xe8tres sont optionnels et peuvent \xeatre donn\xe9s, dans n'importe quel ordre."}),"\n",(0,a.jsx)(n.h2,{id:"param\xe8tres-optionnels",children:"Param\xe8tres optionnels"}),"\n",(0,a.jsxs)(n.p,{children:["Dans le manuel ",(0,a.jsx)(n.em,{children:"Langage de 4D"}),", les caract\xe8res { } (accolades) indiquent des param\xe8tres facultatifs. Par exemple, ",(0,a.jsx)(n.code,{children:"ALERT (message{; okButtonTitle})"})," signifie que le param\xe8tre ",(0,a.jsx)(n.em,{children:"okButtonTitle"})," doit \xeatre omis lors de l'appel de la commande. Vous pouvez l'appeler comme suit :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'ALERT("Etes*vous s\xfbr?";"Oui, je le suis") //2 param\xe8tres\nALERT("Temps \xe9coul\xe9") //1 param\xe8tre\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Les m\xe9thodes et les fonctions 4D acceptent \xe9galement de ces param\xe8tres optionnels. Vous pouvez d\xe9clarer un nombre quelconque de param\xe8tres. Si vous appelez une m\xe9thode ou une fonction avec moins de param\xe8tres que ceux d\xe9clar\xe9s, les param\xe8tres manquants sont trait\xe9s comme des valeurs par d\xe9faut dans le code appel\xe9, ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/data-types#default-values",children:"en fonction de leur type"}),". Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'// fonction "concate" de myClass\nFunction concate ($param1 : Text ; $param2 : Text)->$result : Text\n$result:=$param1+" "+$param2\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  // M\xe9thode appelante\n $class:=cs.myClass.new()\n $class.concate("Hello") // "Hello "\n $class.concate() // Affiche " "\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Vous pouvez \xe9galement appeler une m\xe9thode ou une fonction avec plus de param\xe8tres que ceux d\xe9clar\xe9s. Ils seront disponibles dans le code appel\xe9 gr\xe2ce \xe0 la ",(0,a.jsx)(n.a,{href:"#parameter-indirection-n",children:"syntaxe ${N}"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["A l'aide de la commande ",(0,a.jsx)(n.code,{children:"Count parameters"})," contenue dans la m\xe9thode appel\xe9e, vous pouvez d\xe9tecter le nombre de param\xe8tres et effectuer des op\xe9rations diff\xe9rentes en fonction de ce nombre."]}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant affiche un message et peut ins\xe9rer le texte dans un document sur disque ou dans une zone 4D Write Pro :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n #DECLARE ($message : Text; $path : Text; $wpArea : Object)\n\n ALERT($message)\n If(Count parameters>=3)\n    WP SET TEXT($wpArea;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($path;$message)\n    End if\n End if\n"})}),"\n",(0,a.jsx)(n.p,{children:"Une fois que cette m\xe9thode projet a \xe9t\xe9 ajout\xe9e \xe0 votre application, vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"APPEND TEXT(vtSomeText) //Affichera uniquement le message\nAPPEND TEXT(vtSomeText;$path) //Affiche le message et l'annexe au document dans $path\nAPPEND TEXT(vtSomeText;\"\";$wpArea) //Affiche le message et l'\xe9crit dans $wpArea\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Lorsque les param\xe8tres sont n\xe9cessaires dans vos m\xe9thodes, vous pouvez \xe9galement envisager des ",(0,a.jsx)(n.a,{href:"#using-objects-properties-as-named-parameters",children:"propri\xe9t\xe9s d'objet comme param\xe8tres nomm\xe9s"})," pour g\xe9rer plusieurs param\xe8tres de mani\xe8re flexible."]})}),"\n",(0,a.jsx)(n.h2,{id:"valeurs-ou-r\xe9f\xe9rences",children:"Valeurs ou r\xe9f\xe9rences"}),"\n",(0,a.jsxs)(n.p,{children:["Lorsque vous passez un param\xe8tre, 4D \xe9value toujours l'expression du param\xe8tre dans le contexte de la m\xe9thode appel\xe9e et affecte la ",(0,a.jsx)(n.strong,{children:"valeur r\xe9sultante"})," aux variables locales dans la fonction de classe ou la sous-routine. Les variables/param\xe8tres locaux ne correspondent pas aux v\xe9ritables champs, variables ou expressions pass\xe9s par la m\xe9thode appel\xe9e; ils contiennent uniquement les valeurs qui n'ont pas \xe9t\xe9 pass\xe9es. Les variables/param\xe8tres locaux ne correspondent pas aux v\xe9ritables champs, variables ou expressions pass\xe9s par la m\xe9thode appel\xe9e; ils contiennent uniquement les valeurs qui n'ont pas \xe9t\xe9 pass\xe9es. Par exemple :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'	//Here is some code from the method MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n\n	//Here is the code of the method DO_SOMETHING\n #DECLARE($param : Text)\n $param:=Uppercase($param)\n ALERT($param)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["La bo\xeete de dialogue d'alerte affich\xe9e par ",(0,a.jsx)(n.code,{children:"DO_SOMETHING"}),' contiendra "WILLIAM" et celle affich\xe9e par ',(0,a.jsx)(n.code,{children:"MY_METHOD"}),' contiendra "william". The method locally changed the value of the parameter $param, but this does not affect the value of the field ',(0,a.jsx)(n.code,{children:"[People]Name"})," passed as parameter by the method ",(0,a.jsx)(n.code,{children:"MY_METHOD"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si vous voulez r\xe9ellement que la m\xe9thode ",(0,a.jsx)(n.code,{children:"DO_SOMETHING"})," modifie la valeur du champ, deux solutions s'offrent \xe0 vous :"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Plut\xf4t que de passer le champ \xe0 la m\xe9thode, vous lui passez un pointeur :"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  //Here is some code from the method MY_METHOD\nDO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Last Name)\n\n  //Here the code of the method DO_SOMETHING\n#DECLARE($param : Text)\n$param->:=Uppercase($param->)\nALERT($param->)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Ici, le param\xe8tre n'est pas le champ lui-m\xeame, mais un pointeur vers le champ. Therefore, within the ",(0,a.jsx)(n.code,{children:"DO SOMETHING"})," method, $param is no longer the value of the field but a pointer to the field. The object ",(0,a.jsx)(n.strong,{children:"referenced"})," by $param ($param-> in the code above) is the actual field. Par cons\xe9quent, la modification de l'objet r\xe9f\xe9renc\xe9 d\xe9passe les limites de la sous-routine et le champ lui-m\xeame est affect\xe9. Dans cet exemple, les deux bo\xeetes de dialogue d'alerte afficheront \"WILLIAMS\"."]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Plut\xf4t que la m\xe9thode ",(0,a.jsx)(n.code,{children:"DO_SOMETHING"})," \u201Cfasse quelque chose\u201D, vous pouvez la r\xe9\xe9crire de mani\xe8re \xe0 ce qu'elle retourne une valeur."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'	//Here is some code from the method MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n	//Here the code of the method DO SOMETHING\n #DECLARE ($param : Text) -> ($result : Text)\n $result:=Uppercase($param)\n ALERT($result)\n'})}),"\n",(0,a.jsxs)(n.p,{children:['This second technique of returning a value by a subroutine is called "using a function". Elle est d\xe9crite dans le paragraphe ',(0,a.jsx)(n.a,{href:"#valeur-retournee",children:"Valeur retourn\xe9e"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"cas-particuliers--objets-et-collections",children:"Cas particuliers : objets et collections"}),"\n",(0,a.jsxs)(n.p,{children:["Vous devez faire attention au fait que les types de donn\xe9es Objet et Collection ne peuvent \xeatre g\xe9r\xe9s que par une r\xe9f\xe9rence (c'est-\xe0-dire un ",(0,a.jsx)(n.em,{children:"pointeur interne"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Consequently, when using such data types as parameters, ",(0,a.jsx)(n.code,{children:"$param, $return..."})," do not contain ",(0,a.jsx)(n.em,{children:"values"})," but ",(0,a.jsx)(n.em,{children:"references"}),". Modifying the value of the ",(0,a.jsx)(n.code,{children:"$param, $return..."})," parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/pointer#pointers-as-parameters-to-methods",children:"pointers"}),", except that ",(0,a.jsx)(n.code,{children:"$param, $return..."})," parameters do not need to be dereferenced in the subroutine."]}),"\n",(0,a.jsxs)(n.p,{children:["Par exemple, consid\xe9rons la m\xe9thode ",(0,a.jsx)(n.code,{children:"CreatePerson"}),", qui cr\xe9e un objet et qui l'envoie comme param\xe8tre :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,a.jsxs)(n.p,{children:["La m\xe9thode ",(0,a.jsx)(n.code,{children:"ChangeAge"})," ajoute 10 \xe0 l'attribut Age de l'objet re\xe7u"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"  //ChangeAge\n #DECLARE ($person : Object)\n $person.Age:=$person.Age+10\n ALERT(String($person.Age))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Si vous ex\xe9cutez la m\xe9thode ",(0,a.jsx)(n.code,{children:"CreatePerson"}),', les deux messages d\'alerte contiendront "50" car le m\xeame objet est trait\xe9 par les deux m\xe9thodes.']}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4D Server :"})," Lorsque des param\xe8tres sont pass\xe9s entre des m\xe9thodes qui ne sont pas ex\xe9cut\xe9es sur la m\xeame machine (lors de l'utilisation de l'option Ex\xe9cuter sur serveur par exemple), il n'est pas possible d'utiliser des r\xe9f\xe9rences. Dans ce cas, ce sont des copies des param\xe8tres objet ou collection qui sont envoy\xe9es au lieu de r\xe9f\xe9rences."]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let a={},t=r.createContext(a);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);