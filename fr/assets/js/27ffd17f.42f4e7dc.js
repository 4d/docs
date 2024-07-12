/*! For license information please see 27ffd17f.42f4e7dc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90060],{992135:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(474848),l=n(28453);const i={id:"identifiers",title:"Identifiants"},t=void 0,o={id:"Concepts/identifiers",title:"Identifiants",description:"Cette section d\xe9taille les r\xe8gles d'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, tableaux, objets, formulaires, etc.).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/fr/18/Concepts/identifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"identifiers",title:"Identifiants"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/fr/18/Concepts/plug-ins"},next:{title:"Vue d\u2019ensemble",permalink:"/docs/fr/18/Project/overview"}},a={},d=[{value:"R\xe8gles de base",id:"r\xe8gles-de-base",level:2},{value:"R\xe8gles suppl\xe9mentaires pour les propri\xe9t\xe9s d&#39;objet et les noms ORDA",id:"r\xe8gles-suppl\xe9mentaires-pour-les-propri\xe9t\xe9s-dobjet-et-les-noms-orda",level:3},{value:"R\xe8gles suppl\xe9mentaires pour SQL",id:"r\xe8gles-suppl\xe9mentaires-pour-sql",level:3},{value:"Tables",id:"tables",level:2},{value:"Champs",id:"champs",level:2},{value:"Variables interprocess",id:"variables-interprocess",level:2},{value:"Variables process",id:"variables-process",level:2},{value:"Variables locales",id:"variables-locales",level:2},{value:"Tableaux",id:"tableaux",level:2},{value:"Tableaux interprocess",id:"tableaux-interprocess",level:3},{value:"Tableaux process",id:"tableaux-process",level:3},{value:"Tableaux locaux",id:"tableaux-locaux",level:3},{value:"El\xe9ments de tableaux",id:"el\xe9ments-de-tableaux",level:3},{value:"El\xe9ments de tableaux \xe0 deux dimensions",id:"el\xe9ments-de-tableaux-\xe0-deux-dimensions",level:3},{value:"Propri\xe9t\xe9s (attributs) d&#39;objets",id:"propri\xe9t\xe9s-attributs-dobjets",level:2},{value:"Formulaires",id:"formulaires",level:2},{value:"Objets de formulaires",id:"objets-de-formulaires",level:2},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Commandes de plug-ins",id:"commandes-de-plug-ins",level:2},{value:"Ensembles",id:"ensembles",level:2},{value:"Ensembles interprocess",id:"ensembles-interprocess",level:3},{value:"Ensembles process",id:"ensembles-process",level:3},{value:"Ensembles clients",id:"ensembles-clients",level:3},{value:"S\xe9lections temporaires",id:"s\xe9lections-temporaires",level:2},{value:"S\xe9lections temporaires interprocess",id:"s\xe9lections-temporaires-interprocess",level:3},{value:"S\xe9lections temporaires process",id:"s\xe9lections-temporaires-process",level:3},{value:"Process",id:"process",level:2},{value:"Process globaux",id:"process-globaux",level:3},{value:"Process locaux",id:"process-locaux",level:3},{value:"R\xe9sum\xe9 des conventions d&#39;\xe9criture dans 4D",id:"r\xe9sum\xe9-des-conventions-d\xe9criture-dans-4d",level:2},{value:"R\xe9soudre les conflits de noms",id:"r\xe9soudre-les-conflits-de-noms",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Cette section d\xe9taille les r\xe8gles d'\xe9criture et de nommage appliqu\xe9es aux divers identifiants utilis\xe9s dans le langage de 4D (variables, tableaux, objets, formulaires, etc.)."}),"\n",(0,r.jsx)(s.h2,{id:"r\xe8gles-de-base",children:"R\xe8gles de base"}),"\n",(0,r.jsx)(s.p,{children:"Les r\xe8gles suivantes s'appliquent \xe0 toutes les structures de 4D."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'Un nom doit commencer par un caract\xe8re alphab\xe9tique, un tiret bas ou un dollar ("$") (\xe0 noter que le symbole dollar peut d\xe9signer un \xe9l\xe9ment local, voir ci-dessous).'}),"\n",(0,r.jsx)(s.li,{children:"Le nom peut ensuite contenir des caract\xe8res alphab\xe9tiques, des caract\xe8res num\xe9riques, des espaces et des tirets bas (_)."}),"\n",(0,r.jsx)(s.li,{children:'Les points (".") Les points (".") Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.'}),"\n",(0,r.jsx)(s.li,{children:"Les virgules, barres de fraction, guillemets et deux points (:) sont interdits."}),"\n",(0,r.jsx)(s.li,{children:"Les caract\xe8res r\xe9serv\xe9s car utilis\xe9s comme op\xe9rateurs, comme l\u2019ast\xe9risque (*) ou le +, sont interdits."}),"\n",(0,r.jsxs)(s.li,{children:["Les noms r\xe9serv\xe9s, c'est-\xe0-dire les noms de commandes 4D (",(0,r.jsx)(s.code,{children:"Date"}),", ",(0,r.jsx)(s.code,{children:"Time"}),", etc), les mots-cl\xe9s (If, For, etc.) et les constantes."]}),"\n",(0,r.jsx)(s.li,{children:"4D ignore les espaces superflus."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"r\xe8gles-suppl\xe9mentaires-pour-les-propri\xe9t\xe9s-dobjet-et-les-noms-orda",children:"R\xe8gles suppl\xe9mentaires pour les propri\xe9t\xe9s d'objet et les noms ORDA"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Les espaces sont interdits."}),"\n",(0,r.jsx)(s.li,{children:'Les points (".") Les points (".") Periods (".") and brackets ("[ ]") are not allowed.'}),"\n",(0,r.jsx)(s.li,{children:"Les noms sont sensibles \xe0 la casse."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"r\xe8gles-suppl\xe9mentaires-pour-sql",children:"R\xe8gles suppl\xe9mentaires pour SQL"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Seuls les caract\xe8res _0123456789abcdefghijklmnopqrstuvwxyz sont accept\xe9s"}),"\n",(0,r.jsx)(s.li,{children:"Les noms ne doivent pas comporter de mot-cl\xe9 SQL (commande, attribut, etc.)."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," La zone \"SQL\" de l'inspecteur de l'\xe9diteur de Structure signale automatiquement les caract\xe8res non autoris\xe9s dans un nom de table ou de champ."]}),"\n",(0,r.jsx)(s.h2,{id:"tables",children:"Tables"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez une table en pla\xe7ant son nom entre crochets : [...]. Un nom de table peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'DEFAULT TABLE([Commandes])\nFORM SET INPUT([Clients];"Entr\xe9e")\nADD RECORD([Lettres])\n'})}),"\n",(0,r.jsx)(s.h2,{id:"champs",children:"Champs"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez un champ en sp\xe9cifiant d\u2019abord la table \xe0 laquelle il appartient. Le nom du champ se place imm\xe9diatement derri\xe8re celui de la table. Un nom de champ peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'[Commandes]Total:=Sum([Ligne]Montant)\n QUERY([Clients];[Clients]Nom="Dupont")\n [Lettres]Text:=Capitalize text([Lettres]Texte)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"variables-interprocess",children:"Variables interprocess"}),"\n",(0,r.jsxs)(s.p,{children:["You designate an interprocess variable by preceding the name of the variable with the symbols (",(0,r.jsx)(s.code,{children:"<>"}),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."]}),"\n",(0,r.jsxs)(s.p,{children:["The name of an interprocess variable can be up to 31 characters, not including the ",(0,r.jsx)(s.code,{children:"<>"})," symbols."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'<>vlProcessID:=Current process\n <>vsKey:=Char(KeyCode)\nIf(<>vtNom#"")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"variables-process",children:"Variables process"}),"\n",(0,r.jsxs)(s.p,{children:["You designate a process variable by using its name (which cannot start with the ",(0,r.jsx)(s.code,{children:"<>"})," symbols nor the dollar sign $). Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'vrGrandTotal:=Sum([Comptes]Montant)\n If(bValider=1)\n vsNomCourant:=""\n'})}),"\n",(0,r.jsx)(s.h2,{id:"variables-locales",children:"Variables locales"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez une variable locale en faisant pr\xe9c\xe9der son nom du symbole dollar ($). Le nom d\u2019une variable locale peut contenir jusqu\u2019\xe0 31 caract\xe8res, signe dollar non compris."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'For($vlRecord;1;100)\nIf($vsTempVar="Non")\n$vsMyString:="Bonjour \xe0 tous"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"tableaux",children:"Tableaux"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez un tableau en \xe9crivant simplement son nom, qui est celui que vous passez \xe0 une commande de d\xe9claration de tableau (par exemple ARRAY LONGINT) lorsque vous cr\xe9ez le tableau. Les tableaux sont des variables, et comme pour les variables, il existe trois types de tableaux qui se diff\xe9rencient par leur port\xe9e :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Tableaux interprocess,"}),"\n",(0,r.jsx)(s.li,{children:"Tableaux process,"}),"\n",(0,r.jsx)(s.li,{children:"Tableaux locaux."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"tableaux-interprocess",children:"Tableaux interprocess"}),"\n",(0,r.jsxs)(s.p,{children:["The name of an interprocess array is preceded by the symbols (",(0,r.jsx)(s.code,{children:"<>"}),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."]}),"\n",(0,r.jsxs)(s.p,{children:["An interprocess array name can contain up to 31 characters, not including the ",(0,r.jsx)(s.code,{children:"<>"})," symbols."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"ARRAY TEXT(<>atSujets;Records in table([Topics]))\nSORT ARRAY(<>asMotsCl\xe9s;>)\nARRAY INTEGER(<>aiGrosTableau;10000)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"tableaux-process",children:"Tableaux process"}),"\n",(0,r.jsxs)(s.p,{children:["You designate a process array by using its name (which cannot start with the ",(0,r.jsx)(s.code,{children:"<>"})," symbols nor the dollar sign $). Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"ARRAY TEXT(atSujets;Records in table([Topics]))\n SORT ARRAY(asMotsCl\xe9s;>)\n ARRAY INTEGER(aiGrosTableau;10000)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"tableaux-locaux",children:"Tableaux locaux"}),"\n",(0,r.jsx)(s.p,{children:"Un tableau est d\xe9clar\xe9 local lorsque son nom est pr\xe9c\xe9d\xe9 du signe dollar ($). Le nom d\u2019un tableau local peut contenir jusqu\u2019\xe0 31 caract\xe8res, signe dollar non compris."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"ARRAY TEXT($atSujets;Records in table([Topics]))\nSORT ARRAY($asMotsCl\xe9s;>)\nARRAY INTEGER($aiGrosTableau;10000)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"el\xe9ments-de-tableaux",children:"El\xe9ments de tableaux"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez un \xe9l\xe9ment d\u2019un tableau local, process ou interprocess \xe0 l\u2019aide d\u2019accolades ({\u2026}). L\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9 (l\u2019indice) est indiqu\xe9 par une expression num\xe9rique."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Addressing an element of an interprocess array\nIf(<>asKeywords{1}="Stop")\n<>atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}\n\n //Addressing an element of a process array\nIf(asKeywords{1}="Stop")\natSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{Size of array(aiBigArray)}\n\n //Addressing an element of a local array\nIf($asKeywords{1}="Stop")\n$atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{Size of array($aiBigArray)}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"el\xe9ments-de-tableaux-\xe0-deux-dimensions",children:"El\xe9ments de tableaux \xe0 deux dimensions"}),"\n",(0,r.jsx)(s.p,{children:"You reference an element of a two-dimensional array by using the curly braces ({\u2026}) twice.   Vous d\xe9signez un \xe9l\xe9ment d\u2019un tableau \xe0 deux dimensions \xe0 l\u2019aide d'une double paire d\u2019accolades ({\u2026})   L\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9 (l\u2019indice) est indiqu\xe9 par deux expressions num\xe9riques dans deux paires d\u2019accolades."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Addressing an element of a two-dimensional interprocess array\nIf(<>asKeywords{$vlNextRow}{1}="Stop")\n<>atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional process array\nIf(asKeywords{$vlNextRow}{1}="Stop")\natSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional local array\nIf($asKeywords{$vlNextRow}{1}="Stop")\n$atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s-attributs-dobjets",children:"Propri\xe9t\xe9s (attributs) d'objets"}),"\n",(0,r.jsx)(s.p,{children:"When object notation is enabled, you designate an object attribute (also called object property) by placing a point (\".\") between the name of the object (or attribute) and the name of the attribute. entre le nom de l'objet (ou de l'attribut) et le nom de l'attribut. Un nom d'attribut peut contenir jusqu'\xe0 255 caract\xe8res et est sensible \xe0 la casse."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'monObjet.monAttribut:="10"\n $valeur:=$clientObj.data.address.city\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Des r\xe8gles suppl\xe9mentaires s'appliquent aux noms des attributs d'objets (ils doivent \xeatre conformes \xe0 la sp\xe9cification ECMA Script). Pour plus d'informations, reportez-vous \xe0 la section ",(0,r.jsx)(s.a,{href:"/docs/fr/18/Concepts/object#object-property-identifiers",children:"Identificateurs des propri\xe9t\xe9s d'objets"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"formulaires",children:"Formulaires"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez un formulaire en utilisant une expression de type cha\xeene alphanum\xe9rique qui repr\xe9sente son nom. Le nom d\u2019un formulaire peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'FORM SET INPUT([Personnes];"Entr\xe9e")\nFORM SET OUTPUT([Personnes];"Sortie")\n DIALOG([Stock];"Bo\xeete de note"+String($vlStage))\n'})}),"\n",(0,r.jsx)(s.h2,{id:"objets-de-formulaires",children:"Objets de formulaires"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez un objet de formulaire en passant son nom sous forme de cha\xeene, pr\xe9c\xe9d\xe9e du param\xe8tre *. Un nom d'objet peut contenir jusqu'\xe0 255 octets."}),"\n",(0,r.jsx)(s.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'OBJECT SET FONT(*;"Binfo";"Times")\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Ne confondez pas les objets de formulaire (boutons, list box, variables saisissables...) et les objets du langage 4D. Les objets du langage de 4D sont cr\xe9\xe9s et manipul\xe9s via la notation objet ou des commandes d\xe9di\xe9es."]}),"\n",(0,r.jsx)(s.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez une m\xe9thode (proc\xe9dure ou fonction utilisateur) en saisissant son nom. Ce nom peut contenir jusqu\u2019\xe0 31 caract\xe8res."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Une m\xe9thode qui ne retourne pas de r\xe9sultat est appel\xe9e une proc\xe9dure. Une m\xe9thode qui retourne un r\xe9sultat est appel\xe9e une fonction utilisateur."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Conseil :"})," Nous vous recommandons d'adopter, pour nommer vos m\xe9thodes, la m\xeame convention que celle utilis\xe9e dans le langage de 4D. \xe9crivez les noms de vos proc\xe9dures en caract\xe8res majuscules, et vos fonctions en minuscules avec la premi\xe8re lettre en majuscule. Ainsi, lorsque vous rouvrirez une base au bout de plusieurs mois, vous identifierez imm\xe9diatement si une m\xe9thode retourne ou non un r\xe9sultat, en regardant son nom dans la fen\xeatre de l'Explorateur."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Lorsque vous souhaitez appeler une m\xe9thode, vous saisissez simplement son nom. Toutefois, certaines commandes int\xe9gr\xe9es telles que ",(0,r.jsx)(s.code,{children:"APPELER SUR EVENEMENT"}),", ainsi que les commandes des plug-ins, n\xe9cessitent que vous passiez le nom d'une m\xe9thode en tant que cha\xeene lorsqu'un param\xe8tre de type m\xe9thode est requis. Voici un exemple :"]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' // Cette commande attend une m\xe9thode (fonction) ou une formule\n QUERY BY FORMULA([aTable];Special query)\n  // Cette commande attend une m\xe9thode (proc\xe9dure) ou une formule\n APPLY TO SELECTION([Employees];INCREASE SALARIES)\n  // Mais cette commande attend un nom de m\xe9thode\nON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,r.jsx)(s.p,{children:"Les m\xe9thodes peuvent accepter des param\xe8tres (ou arguments). Les param\xe8tres sont pass\xe9s \xe0 la m\xe9thode entre parenth\xe8ses, \xe0 la suite du nom de la m\xe9thode. Chaque param\xe8tre est s\xe9par\xe9 par des points virgule (;). Les param\xe8tres sont pass\xe9s \xe0 la m\xe9thode appel\xe9e en tant que variables locales num\xe9rot\xe9es s\xe9quentiellement : $1, $2,\u2026, $n. The parameters are passed to the method in parentheses, following the name of the method."}),"\n",(0,r.jsx)(s.p,{children:"A l\u2019int\xe9rieur d'une fonction, la variable locale $0 contient la valeur \xe0 retourner."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Within DROP SPACES $1 is a pointer to the field [People]Name\nDROP SPACES(->[People]Name)\n\n //Within Calc creator:\n //- $1 is numeric and equal to 1\n //- $2 is numeric and equal to 5\n //- $3 is text or string and equal to "Nice"\n //- The result value is assigned to $0\n$vsResult:=Calc creator(1;5;"Nice")\n\n //Within Dump:\n //- The three parameters are text or string\n //- They can be addressed as $1, $2 or $3\n //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3\n //- The result value is assigned to $0\nvtClone:=Dump("is";"the";"it")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"commandes-de-plug-ins",children:"Commandes de plug-ins"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9signez une commande de plug-in en \xe9crivant son nom tel qu'il est d\xe9fini dans le plug-in. Le nom d'une commande de plug-in peut contenir jusqu'\xe0 31 caract\xe8res."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$erreur:=SMTP_From($smtp_id;"henry@gmail.com")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"ensembles",children:"Ensembles"}),"\n",(0,r.jsx)(s.p,{children:"Dans 4D, il existe deux types d'ensembles qui se distinguent par leur port\xe9e :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ensembles interprocess"}),"\n",(0,r.jsx)(s.li,{children:"Ensembles process"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"On peut \xe9galement distinguer un troisi\xe8me type d'ensemble, sp\xe9cifique \xe0 4D Server :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ensembles clients"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"ensembles-interprocess",children:"Ensembles interprocess"}),"\n",(0,r.jsxs)(s.p,{children:["A set is an interprocess set if the name of the set is preceded by the symbols (",(0,r.jsx)(s.code,{children:"<>"}),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."]}),"\n",(0,r.jsxs)(s.p,{children:["An interprocess set name can contain up to 255 characters, not including the ",(0,r.jsx)(s.code,{children:"<>"})," symbols."]}),"\n",(0,r.jsx)(s.h3,{id:"ensembles-process",children:"Ensembles process"}),"\n",(0,r.jsxs)(s.p,{children:["You denote a process set by using a string expression that represents its name (which cannot start with the ",(0,r.jsx)(s.code,{children:"<>"})," symbols or the dollar sign $). Le nom d\u2019un ensemble process peut comporter jusqu\u2019\xe0 255 caract\xe8res."]}),"\n",(0,r.jsx)(s.h3,{id:"ensembles-clients",children:"Ensembles clients"}),"\n",(0,r.jsx)(s.p,{children:"Le nom d'un ensemble client doit \xeatre pr\xe9c\xe9d\xe9 du symbole dollar ($). Ce nom peut comporter jusqu'\xe0 255 caract\xe8res, symbole dollar non compris."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Les ensembles sont g\xe9r\xe9s par le serveur. Dans certains cas, pour des raisons particuli\xe8res ou d'optimisation, vous pourrez avoir besoin d'utiliser des ensembles localement, sur les postes clients. Pour cela, il vous suffit de cr\xe9er des ensembles clients."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Interprocess sets\nUSE SET("<>Deleted Records")\nCREATE SET([Customers];"<>Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Process sets\nUSE SET("Deleted Records")\nCREATE SET([Customers];"Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Client sets\nUSE SET("$Deleted Records")\nCREATE SET([Customers];"$Customer Orders")\nIf(Records in set("$Selection"+String($i))>0)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"s\xe9lections-temporaires",children:"S\xe9lections temporaires"}),"\n",(0,r.jsx)(s.p,{children:"Dans 4D, il existe deux types de s\xe9lections temporaires, qui se distinguent par leur port\xe9e :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"S\xe9lections temporaires interprocess"}),"\n",(0,r.jsx)(s.li,{children:"S\xe9lections temporaires process."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"s\xe9lections-temporaires-interprocess",children:"S\xe9lections temporaires interprocess"}),"\n",(0,r.jsxs)(s.p,{children:["A named selection is an interprocess named selection if its name is preceded by the symbols (",(0,r.jsx)(s.code,{children:"<>"}),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."]}),"\n",(0,r.jsxs)(s.p,{children:["An interprocess named selection name can contain up to 255 characters, not including the ",(0,r.jsx)(s.code,{children:"<>"})," symbols."]}),"\n",(0,r.jsx)(s.h3,{id:"s\xe9lections-temporaires-process",children:"S\xe9lections temporaires process"}),"\n",(0,r.jsxs)(s.p,{children:["You denote a process named selection by using a string expression that represents its name (which cannot start with the ",(0,r.jsx)(s.code,{children:"<>"})," symbols nor the dollar sign $). Le nom d\u2019une s\xe9lection temporaire process peut comporter jusqu\u2019\xe0 255 caract\xe8res."]}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Interprocess Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n //Process Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"process",children:"Process"}),"\n",(0,r.jsx)(s.p,{children:"En mode mono-utilisateur, ou sur le poste client en mode client/serveur, il existe deux types de process :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Process globaux"}),"\n",(0,r.jsx)(s.li,{children:"Process locaux."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"process-globaux",children:"Process globaux"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9clarez un process global en passant une expression de type cha\xeene de caract\xe8res qui repr\xe9sente son nom (qui ne doit pas commencer par le symbole $). Le nom d\u2019un process peut comporter jusqu\u2019\xe0 255 caract\xe8res."}),"\n",(0,r.jsx)(s.h3,{id:"process-locaux",children:"Process locaux"}),"\n",(0,r.jsx)(s.p,{children:"Vous d\xe9clarez un process local lorsque son nom est pr\xe9c\xe9d\xe9 du symbole dollar ($). Le nom d\u2019un process peut comporter jusqu\u2019\xe0 255 caract\xe8res, symbole dollar non compris."}),"\n",(0,r.jsx)(s.p,{children:"Exemples :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' //Starting the global process "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Starting the local process "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"r\xe9sum\xe9-des-conventions-d\xe9criture-dans-4d",children:"R\xe9sum\xe9 des conventions d'\xe9criture dans 4D"}),"\n",(0,r.jsx)(s.p,{children:"Le tableau suivant r\xe9sume les principes de nommage des identifiants dans les m\xe9thodes."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Identifiant"}),(0,r.jsx)(s.th,{children:"Longueur Longueur max."}),(0,r.jsx)(s.th,{children:"Exemple"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:"[Factures]"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Champ"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:"[Employ\xe9s]Nom"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Variable/Tableau interprocess"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"<>"})," + 31"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<>vlNextProcessID"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Variable/Tableau process"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:"vsNomCourant"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Variable/Tableau local(e)"}),(0,r.jsx)(s.td,{children:"$ + 31"}),(0,r.jsx)(s.td,{children:"$vlCompteurLocal"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Propri\xe9t\xe9s d'objets"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsx)(s.td,{children:"$o.monAttribut"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Formulaire"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:'"Formulaire Web perso"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Objet de formulaire"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsx)(s.td,{children:'"MonBouton"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M\xe9thode"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:"M_AJOUTER_CLIENTS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Commande de plug-in"}),(0,r.jsx)(s.td,{children:"31"}),(0,r.jsx)(s.td,{children:"WR INSERER TEXTE"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ensemble interprocess"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"<>"})," + 255"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'"<>Records to be Archived"'})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ensemble process"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsx)(s.td,{children:'"Enregistrements actuels"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ensemble client"}),(0,r.jsx)(s.td,{children:"$ + 255"}),(0,r.jsx)(s.td,{children:'"$Sujets pr\xe9c\xe9dents"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"S\xe9lection temporaire"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsx)(s.td,{children:'"Employ\xe9s de A \xe0 Z"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"S\xe9lection temporaire interprocess"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"<>"})," + 255"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'"<>Employees Z to A"'})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Process local"}),(0,r.jsx)(s.td,{children:"$ + 255"}),(0,r.jsx)(s.td,{children:'"$SuivreEv\xe9nements"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Process global"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsxs)(s.td,{children:['"',(0,r.jsx)(s.em,{children:"P_MODULE_FACTURES"}),'"']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"S\xe9maphore"}),(0,r.jsx)(s.td,{children:"255"}),(0,r.jsx)(s.td,{children:'"mons\xe9maphore"'})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," En cas d'utilisation de caract\xe8res non romans dans les noms des identifiants, leur taille maximum peut \xeatre inf\xe9rieure."]}),"\n",(0,r.jsx)(s.h2,{id:"r\xe9soudre-les-conflits-de-noms",children:"R\xe9soudre les conflits de noms"}),"\n",(0,r.jsx)(s.p,{children:"Veillez \xe0 utiliser des noms uniques pour les diff\xe9rents \xe9l\xe9ments de votre base. Si un identifiant d\u2019un certain type a le m\xeame nom qu\u2019un autre identifiant d\u2019un autre type (par exemple, si un champ est baptis\xe9 Personnes et qu\u2019une variable est \xe9galement nomm\xe9e Personnes), 4D utilise un syst\xe8me de priorit\xe9."}),"\n",(0,r.jsx)(s.p,{children:"4D identifie les noms utilis\xe9s dans les m\xe9thodes en fonction de l\u2019ordre de priorit\xe9 suivant :"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Champs"}),"\n",(0,r.jsx)(s.li,{children:"Commandes"}),"\n",(0,r.jsx)(s.li,{children:"Methods"}),"\n",(0,r.jsx)(s.li,{children:"Commandes de plug-in"}),"\n",(0,r.jsx)(s.li,{children:"Constantes pr\xe9d\xe9finies"}),"\n",(0,r.jsx)(s.li,{children:"Variables."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Par exemple, 4D dispose d\u2019une fonction interne appel\xe9e ",(0,r.jsx)(s.code,{children:"Date"}),". Si vous appelez ",(0,r.jsx)(s.em,{children:"Date"})," une de vos m\xe9thodes, 4D consid\xe9rera ",(0,r.jsx)(s.code,{children:"Date"})," comme \xe9tant la fonction interne et non votre m\xe9thode. Vous ne pourrez pas appeler votre m\xe9thode. En revanche, si vous nommez un champ \u201cDate\u201d, 4D consid\xe9rera que vous souhaitez appeler votre champ et non la fonction int\xe9gr\xe9e."]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var r=n(296540),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,r)&&!a.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:l,type:e,key:d,ref:c,props:i,_owner:o.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var r=n(296540);const l={},i=r.createContext(l);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);