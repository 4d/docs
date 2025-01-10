"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62199"],{192255:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"Concepts/identifiers","title":"Identifiants","description":"Cette section d\xe9taille les r\xe8gles d\'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, propri\xe9t\xe9s d\'objets, tableaux, formulaires, etc.).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Concepts/identifiers.md","sourceDirName":"Concepts","slug":"/Concepts/identifiers","permalink":"/docs/fr/Concepts/identifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"identifiers","title":"Identifiants"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/fr/Concepts/plug-ins"},"next":{"title":"Chemins d\'acc\xe8s","permalink":"/docs/fr/Concepts/paths"}}'),t=n("785893"),i=n("250065");let l={id:"identifiers",title:"Identifiants"},o=void 0,a={},d=[{value:"Tableaux",id:"tableaux",level:2},{value:"Classes",id:"classes",level:2},{value:"Fonctions",id:"fonctions",level:2},{value:"Propri\xe9t\xe9s des objets",id:"propri\xe9t\xe9s-des-objets",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Tables et champs",id:"tables-et-champs",level:2},{value:"Variables",id:"variables",level:2},{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:3},{value:"Autres noms",id:"autres-noms",level:2}];function c(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Cette section d\xe9taille les r\xe8gles d'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, propri\xe9t\xe9s d'objets, tableaux, formulaires, etc.)."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"En cas d'utilisation de caract\xe8res non-romans dans les noms des identifiants, leur longueur maximum peut \xeatre inf\xe9rieure."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"tableaux",children:"Tableaux"}),"\n",(0,t.jsxs)(s.p,{children:["Les noms de tableaux suivent les m\xeames r\xe8gles que les noms de ",(0,t.jsx)(s.a,{href:"#variables",children:"variables"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsx)(s.p,{children:"Le nom d\u2019une classe peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,t.jsxs)(s.p,{children:["Un nom de classe doit \xeatre conforme aux ",(0,t.jsx)(s.a,{href:"#propri%C3%A9t%C3%A9s-des-objets",children:"r\xe8gles standard de nommage des propri\xe9t\xe9s"})," au regard de la notation \xe0 points."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Donner le m\xeame nom \xe0 une classe et \xe0 une ",(0,t.jsx)(s.a,{href:"#tables",children:"table de la base"})," est d\xe9conseill\xe9 afin d'\xe9viter tout conflit."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"fonctions",children:"Fonctions"}),"\n",(0,t.jsxs)(s.p,{children:["Les noms de fonctions doivent \xeatre conformes aux ",(0,t.jsx)(s.a,{href:"#propri%C3%A9t%C3%A9s-des-objets",children:"r\xe8gles standard de nommage des propri\xe9t\xe9s"})," au regard de la notation \xe0 points."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Astuce :"})," Si vous pr\xe9fixez le nom d'une fonction par un trait de soulignement (\"_\"), elle ne sera pas propos\xe9e par les fonctionnalit\xe9s d'auto-compl\xe9tion dans l'\xe9diteur de code 4D."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s-des-objets",children:"Propri\xe9t\xe9s des objets"}),"\n",(0,t.jsxs)(s.p,{children:["Le nom d'une propri\xe9t\xe9 d'objet (aussi appel\xe9 ",(0,t.jsx)(s.em,{children:"attribut"}),") peut contenir jusqu'\xe0 255 caract\xe8res."]}),"\n",(0,t.jsxs)(s.p,{children:["Les propri\xe9t\xe9s d'objets peuvent r\xe9f\xe9rencer des valeurs scalaires, des \xe9l\xe9ments ORDA, des fonctions de classe, d'autres objets, etc. Quelle que soit leur nature, les noms des propri\xe9t\xe9s d'objets doivent suivre certaines r\xe8gles ",(0,t.jsxs)(s.strong,{children:["si vous souhaitez utiliser la ",(0,t.jsx)(s.a,{href:"/docs/fr/Concepts/object#propri%C3%A9t%C3%A9s-des-objets",children:"notation \xe0 point"})]})," :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Un nom de propri\xe9t\xe9 doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").'}),"\n",(0,t.jsx)(s.li,{children:'Ensuite, le nom peut inclure des lettres, des chiffres, des traits de soulignement ("_") ou des dollars ("$").'}),"\n",(0,t.jsx)(s.li,{children:"Les noms de propri\xe9t\xe9s sont sensibles \xe0 la casse."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'monObjet.monAttribut:="10"\n $valeur:=$clientObj.data.address.city\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Faire commencer un nom de propri\xe9t\xe9 d'objet avec un caract\xe8re de soulignement (\"_\") exclura la propri\xe9t\xe9 des fonctionnalit\xe9s d'auto-compl\xe9tion dans l'\xe9diteur de code 4D. Par exemple, si vous d\xe9clarez ",(0,t.jsx)(s.code,{children:"$o._myPrivateProperty"}),", il ne sera pas propos\xe9 dans l'\xe9diteur de code lorsque vous tapez ",(0,t.jsx)(s.code,{children:'"$o. "'}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["Voir \xe9galement le ",(0,t.jsx)(s.a,{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6",children:"standard ECMA Script"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Si vous utilisez la ",(0,t.jsx)(s.strong,{children:"notation chaine"})," avec des crochets, les noms de propri\xe9t\xe9 peuvent contenir n'importe quel caract\xe8re (ex: ",(0,t.jsx)(s.code,{children:'myObject["1. First property"]'}),")."]})}),"\n",(0,t.jsx)(s.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(s.p,{children:["Les noms de param\xe8tres doivent commencer par un caract\xe8re ",(0,t.jsx)(s.code,{children:"$"})," et suivent les m\xeames r\xe8gles que les ",(0,t.jsx)(s.a,{href:"#variables",children:"noms de variables"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n"})}),"\n",(0,t.jsx)(s.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,t.jsx)(s.p,{children:"Le nom d\u2019une m\xe9thode projet peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Un nom de m\xe9thode projet doit commencer par une lettre, un chiffre ou un trait de soulignement"}),"\n",(0,t.jsx)(s.li,{children:'Ensuite, le nom peut inclure n\'importe quelle lettre, chiffre, un trait de soulignement ("_") ou un caract\xe8re espace.'}),"\n",(0,t.jsxs)(s.li,{children:["N'utilisez pas de noms r\xe9serv\xe9s, i.e. des noms de commandes 4D (",(0,t.jsx)(s.code,{children:"Date"}),", ",(0,t.jsx)(s.code,{children:"Time"}),", etc), des mots-cl\xe9s (",(0,t.jsx)(s.code,{children:"If"}),", ",(0,t.jsx)(s.code,{children:"For"}),", etc.), des noms de constantes (",(0,t.jsx)(s.code,{children:"Euro"}),", ",(0,t.jsx)(s.code,{children:"Black"}),", ",(0,t.jsx)(s.code,{children:"Friday"}),"), etc."]}),"\n",(0,t.jsx)(s.li,{children:"Les noms des m\xe9thodes projets ne sont PAS sensibles \xe0 la casse."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Conseil :"})," Nous vous recommandons d'adopter, pour nommer vos m\xe9thodes, la m\xeame convention que celle utilis\xe9e dans le langage de 4D. Ecrivez les noms de vos proc\xe9dures en caract\xe8res majuscules, et vos fonctions en minuscules avec la premi\xe8re lettre en majuscule. Ainsi, lorsque vous rouvrirez un projet au bout de plusieurs mois, vous identifierez imm\xe9diatement si une m\xe9thode retourne ou non un r\xe9sultat, en regardant son nom dans la fen\xeatre de l'Explorateur."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Lorsque vous appelez une m\xe9thode, vous saisissez simplement son nom. Toutefois, certaines commandes 4D int\xe9gr\xe9es telles que ",(0,t.jsx)(s.code,{children:"ON EVENT CALL"}),", ainsi que les commandes des plug-ins, n\xe9cessitent que vous passiez le nom d'une m\xe9thode en tant que cha\xeene lorsqu'un param\xe8tre de type m\xe9thode est attendu."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' // Cette commande attend une m\xe9thode (fonction) ou une formule\n QUERY BY FORMULA([aTable];Special query)\n // Cette commande attend une m\xe9thode (proc\xe9dure) ou une formule\n APPLY TO SELECTION([Employees];INCREASE SALARIES)\n // Mais cette commande attend un nom de m\xe9thode\nON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,t.jsx)(s.h2,{id:"tables-et-champs",children:"Tables et champs"}),"\n",(0,t.jsx)(s.p,{children:"Vous d\xe9signez une table en \xe9crivant son nom entre crochets : [...]. Vous d\xe9signez un champ en sp\xe9cifiant d'abord la table \xe0 laquelle il appartient (le nom du champ suit imm\xe9diatement celui de la table)."}),"\n",(0,t.jsx)(s.p,{children:"Un nom de table ou de champ peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Un nom de table oiu de champ doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").'}),"\n",(0,t.jsx)(s.li,{children:"Le nom peut ensuite contenir des caract\xe8res alphab\xe9tiques, des caract\xe8res num\xe9riques, des espaces et des tirets bas (_)."}),"\n",(0,t.jsxs)(s.li,{children:["N'utilisez pas de noms r\xe9serv\xe9s, i.e. des noms de commandes 4D (",(0,t.jsx)(s.code,{children:"Date"}),", ",(0,t.jsx)(s.code,{children:"Time"}),", etc), des mots-cl\xe9s (",(0,t.jsx)(s.code,{children:"If"}),", ",(0,t.jsx)(s.code,{children:"For"}),", etc.), des noms de constantes (",(0,t.jsx)(s.code,{children:"Euro"}),", ",(0,t.jsx)(s.code,{children:"Black"}),", ",(0,t.jsx)(s.code,{children:"Friday"}),"), etc."]}),"\n",(0,t.jsx)(s.li,{children:"Des r\xe8gles suppl\xe9mentaires sont \xe0 respecter lorsque la base doit \xeatre manipul\xe9e via le SQL : seuls les caract\xe8res _0123456789abcdefghijklmnopqrstuvwxyz sont accept\xe9s, et le nom ne doit pas comporter de mot-cl\xe9 SQL (commande, attribut, etc.)."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Donner le m\xeame nom \xe0 une table et \xe0 une ",(0,t.jsx)(s.a,{href:"#classes",children:"classe"})," est d\xe9conseill\xe9 afin d'\xe9viter tout conflit."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(s.p,{children:["Le nom d'une variable peut comporter jusqu'\xe0 31 caract\xe8res, sans compter les symboles de port\xe9e (",(0,t.jsx)(s.code,{children:"$"})," ou ",(0,t.jsx)(s.code,{children:"<>"}),")."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:['A variable name must begin with a letter, an underscore, or a dollar ("$") for ',(0,t.jsx)(s.a,{href:"/docs/fr/Concepts/parameters",children:"parameters"})," and ",(0,t.jsx)(s.a,{href:"/docs/fr/Concepts/variables#local-variables",children:"local variables"}),", or ",(0,t.jsx)(s.code,{children:"<>"})," for ",(0,t.jsx)(s.a,{href:"/docs/fr/Concepts/variables#interprocess-variables",children:"interprocess variables"})," (deprecated)."]}),"\n",(0,t.jsx)(s.li,{children:'Ensuite, le nom peut inclure des lettres, chiffres, et traits de soulignement ("_").'}),"\n",(0,t.jsxs)(s.li,{children:["Do not use reserved names, i.e. 4D command names (",(0,t.jsx)(s.code,{children:"Date"}),", ",(0,t.jsx)(s.code,{children:"Time"}),", etc), keywords (",(0,t.jsx)(s.code,{children:"If"}),", ",(0,t.jsx)(s.code,{children:"For"}),", etc.), system variable names (",(0,t.jsx)(s.code,{children:"OK"}),", ",(0,t.jsx)(s.code,{children:"document"}),"...), or constant names (",(0,t.jsx)(s.code,{children:"Euro"}),", ",(0,t.jsx)(s.code,{children:"Black"}),", ",(0,t.jsx)(s.code,{children:"Friday"}),", etc.)."]}),"\n",(0,t.jsx)(s.li,{children:"Les noms de variables ne sont PAS sensibles \xe0 la casse."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'For($vlRecord;1;100) //local variable\n$vsMyString:="Hello there" //local variable\nvar $vName; $vJob : Text //local variales\nIf(bValidate=1) //process variable\n<>vlProcessID:=Current process() //interprocess variable\n'})}),"\n",(0,t.jsx)(s.h3,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,t.jsxs)(s.p,{children:["Some naming practices were previously allowed but are no longer supported when the ",(0,t.jsx)(s.a,{href:"/docs/fr/Project/compiler#enabling-direct-typing",children:"direct typing mode is enabled"})," (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"a variable name has a digit as first character,"}),"\n",(0,t.jsx)(s.li,{children:"a variable name contains space characters,"}),"\n",(0,t.jsx)(s.li,{children:"you declared variables named $0, $1, etc."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"autres-noms",children:"Autres noms"}),"\n",(0,t.jsxs)(s.p,{children:["Dans le langage de 4D, plusieurs \xe9l\xe9ments ont des noms manipul\xe9s sous forme de cha\xeenes : ",(0,t.jsx)(s.strong,{children:"formulaires"}),", ",(0,t.jsx)(s.strong,{children:"objets de formulaires"}),", ",(0,t.jsx)(s.strong,{children:"s\xe9lections temporaires"}),", ",(0,t.jsx)(s.strong,{children:"process"}),", ",(0,t.jsx)(s.strong,{children:"ensembles"}),", ",(0,t.jsx)(s.strong,{children:"barres de menus"}),", etc."]}),"\n",(0,t.jsxs)(s.p,{children:["Ces noms peuvent contenir jusqu'\xe0 255 caract\xe8res, sans compter les \xe9ventuels caract\xe8res ",(0,t.jsx)(s.code,{children:"$"})," ou ",(0,t.jsx)(s.code,{children:"<>"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Les noms sous forme de cha\xeenes peuvent contenir n'importe quel caract\xe8re."}),"\n",(0,t.jsx)(s.li,{children:"Les noms sous forme de cha\xeenes ne sont pas sensibles \xe0 la casse."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Exemples :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//S\xe9lection temporaire process\nUSE NAMED SELECTION([Customers];"<>;ByZipcode") //S\xe9lection temporaire interprocess\n //D\xe9marrage du process global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //D\xe9marrage du process local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Ensemble process\nUSE SET("<>Deleted Records") //Ensemble interprocess\nIf(Records in set("$Selection"+String($i))>0) //Ensemble client\n\n'})})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var r=n(667294);let t={},i=r.createContext(t);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);