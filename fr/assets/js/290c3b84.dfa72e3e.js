"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99842"],{797608:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/set-query-destination","title":"SET QUERY DESTINATION","description":"SET QUERY DESTINATION ( destinationType {; destinationObjet {; destinationPtr}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-destination","permalink":"/docs/fr/commands/set-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-destination.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-query-destination","title":"SET QUERY DESTINATION","slug":"/commands/set-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY AND LOCK","permalink":"/docs/fr/commands/set-query-and-lock"},"next":{"title":"SET QUERY LIMIT","permalink":"/docs/fr/commands/set-query-limit"}}'),t=s("785893"),l=s("250065");let i={id:"set-query-destination",title:"SET QUERY DESTINATION",slug:"/commands/set-query-destination",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," ( ",(0,t.jsx)(n.em,{children:"destinationType"})," {; ",(0,t.jsx)(n.em,{children:"destinationObjet"})," {; ",(0,t.jsx)(n.em,{children:"destinationPtr"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"destinationType"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0=s\xe9lection courante, 1=ensemble, 2=s\xe9lection temporaire, 3=variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"destinationObjet"}),(0,t.jsx)(n.td,{children:"Text, Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'ensemble ou Nom de la s\xe9lection temporaire ou Variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"destinationPtr"}),(0,t.jsx)(n.td,{children:"Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pointeur vers la variable locale si destinationType=3"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," vous permet d'indiquer \xe0 4D o\xf9 placer les r\xe9sultats de toutes les recherches qui suivent l'appel de cette commande dans le process courant."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous sp\xe9cifiez le type de la destination dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"destinationType"}),". 4D fournit les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Recherches"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into current selection"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into named selection"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into set"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into variable"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Vous sp\xe9cifiez le nom de la destination de la recherche dans le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"destinationObjet"})," en fonction du tableau suivant :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Param\xe8tre destinationType"})}),(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.strong,{children:"Param\xe8tre"})," ",(0,t.jsx)(n.strong,{children:"destinationObjet"})]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0 (s\xe9lection courante)"}),(0,t.jsx)(n.td,{children:"Vous ne passez pas de param\xe8tre."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 (ensemble)"}),(0,t.jsx)(n.td,{children:"Vous passez le nom de l'ensemble (existant ou \xe0 cr\xe9er)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2 (s\xe9lection temporaire)"}),(0,t.jsx)(n.td,{children:"Vous passez le nom de la s\xe9lection temporaire (existante ou \xe0 cr\xe9er)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3 (variable)"}),(0,t.jsxs)(n.td,{children:['Vous passez soit une variable num\xe9rique (existante), soit une cha\xeene vide "" pour utiliser le param\xe8tre ',(0,t.jsx)(n.em,{children:"destinationPtr"})]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Avec"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into current selection)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Les enregistrements trouv\xe9s par la recherche seront plac\xe9s dans la s\xe9lection courante de la table dans laquelle la recherche est effectu\xe9e."}),"\n",(0,t.jsx)(n.p,{children:"Avec"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"monEnsem")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Les enregistrements trouv\xe9s par la recherche seront plac\xe9s dans l'ensemble ",(0,t.jsx)(n.em,{children:"monEnsem"}),". La s\xe9lection courante et l'enregistrement courant de la table dans laquelle vous recherchez restent inchang\xe9s."]}),"\n",(0,t.jsx)(n.p,{children:"Avec"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into named selection;"maTemp")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Les enregistrements trouv\xe9s par la recherche seront plac\xe9s dans la s\xe9lection temporaire ",(0,t.jsx)(n.em,{children:"maTemp"}),". La s\xe9lection courante et l'enregistrement courant pour la table sur laquelle vous effectuez la recherche restent inchang\xe9s."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si la s\xe9lection temporaire n'existe pas avant l'appel, elle est automatiquement cr\xe9\xe9e une fois la recherche effectu\xe9e."}),"\n",(0,t.jsx)(n.li,{children:'Cette commande g\xe8re les s\xe9lections temporaires comme la commande [#cmd id="334"/] : seules des r\xe9f\xe9rences sont conserv\xe9es. Une fois la s\xe9lection temporaire utilis\xe9e, elle n\'existe plus.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Avec"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into variable;$vlR\xe9sultatRech)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Avec cette syntaxe, la variable ",(0,t.jsx)(n.em,{children:"$vlR\xe9sultatRech"})," doit avoir \xe9t\xe9 d\xe9finie pr\xe9alablement, sinon une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.p,{children:"Ou"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into variable;"";->$vlR\xe9sultatRech)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette seconde syntaxe facilite l'utilisation conjointe de la commande avec ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-query-destination",children:"GET QUERY DESTINATION"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le ",(0,t.jsx)(n.strong,{children:"nombre"})," d'enregistrements trouv\xe9s par la recherche sera plac\xe9 dans la variable ",(0,t.jsx)(n.em,{children:"$vlR\xe9sultatRech"}),". La s\xe9lection courante et l'enregistrement courant de la table dans laquelle vous effectuez la recherche restent inchang\xe9s."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," ",(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," affecte toutes les recherches suivantes dans le process courant. N'oubliez pas d'associer toujours un appel \xe0 ",(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," (lorsque ",(0,t.jsx)(n.em,{children:"destinationType#0"}),") \xe0 un appel \xe0 ",(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"}),"(0) ult\xe9rieur pour r\xe9tablir le mode standard de recherche."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," modifie uniquement le comportement des commandes de recherche, c'est-\xe0-dire :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En revanche, ",(0,t.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," n'affecte pas les autres commandes qui modifient la s\xe9lection courante telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/all-records",children:"ALL RECORDS"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/relate-many",children:"RELATE MANY"})," , etc."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["Vous cr\xe9ez un formulaire qui affiche les enregistrements de la table ",(0,t.jsx)(n.em,{children:"[Annuaire]"}),". Vous cr\xe9ez un objet de type onglet nomm\xe9 ",(0,t.jsx)(n.em,{children:"asRolodex"})," (avec un onglet pour chaque lettre de l'alphabet) et un sous-formulaire qui affiche les enregistrements de la table ",(0,t.jsx)(n.em,{children:"[Annuaire]"}),". En choisissant un onglet, vous affichez les enregistrements qui correspondent \xe0 cette lettre. Puisque, dans cet exemple, la table ",(0,t.jsx)(n.em,{children:"[Annuaire]"})," contient des donn\xe9es statiques, vous ne voulez pas effectuer une recherche chaque fois que vous cliquez sur un onglet et donc vous d\xe9pensez moins de temps pr\xe9cieux \xe0 ex\xe9cuter ces recherches. Pour faire ceci, vous pouvez placer vos recherches dans les s\xe9lections temporaires pour les r\xe9utiliser quand il le faut. Vous \xe9crivez la m\xe9thode objet de l'onglet ",(0,t.jsx)(n.em,{children:"asRolodex"})," comme indiqu\xe9e ci-dessous :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de l\'onglet asRolodex\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// Avant que le formulaire s\'affiche \xe0 l\'\xe9cran,\n\xa0\xa0// initialiser l\'onglet et le tableau de bool\xe9ens qui nous indiquent\n\xa0\xa0// si une recherche pour la lettre sur laquelle vous avez cliqu\xe9\n\xa0\xa0// a \xe9t\xe9 ex\xe9cut\xe9e ou pas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY STRING(1;asRolodex;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY BOOLEAN(abRechFini;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlEl\xe9m;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asRolodex{$vlEl\xe9m}:=Char(64+$vlEl\xe9m)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abRechFini{$vlEl\xe9m}:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Lorsque l\'utilisateur clique sur un onglet, v\xe9rifier si une recherche pour cette lettre\n\xa0\xa0// a \xe9t\xe9 ex\xe9cut\xe9e ou pas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(abRechFini{asRolodex}))\n\xa0\xa0// Else, fixer la destination de la recherche vers une s\xe9lection temporaire\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into named selection;"temp")\n\xa0\xa0// Effectuer la recherche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Phone Book];[Phone Book]Last name=asRolodex{asRolodex}+"@")\n\xa0\xa0// Restituer le mode standard de recherche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\n\xa0\xa0// Use les enregistrements trouv\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("temp")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0COPY NAMED SELECTION([Phone Book];"Rolodex"+asRolodex{asRolodex})\n\xa0\xa0// La prochaine fois que cette lettre est choisie, la recherche ne sera pas ex\xe9cut\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abRechFini{asRolodex}:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Use la s\xe9lection temporaire existante pour l\'affichage des enregistrements qui correspondent \xe0 cette lettre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// Apr\xe8s que le formulaire dispara\xeet de l \'\xe9cran\n\xa0\xa0// Effacer les s\xe9lections temporaires de la m\xe9moire\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(abRechFini{$vlEl\xe9m})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlEl\xe9m})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Effacer les deux tableaux dont nous n\'avons pas besoin\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asRolodex)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(abRechFini)\n\xa0\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode ValeursUniques suivante v\xe9rifie si les valeurs sont uniques pour des champs dans une table de votre choix. L'enregistrement courant peut d\xe9j\xe0 exister ou vient d'\xeatre cr\xe9\xe9."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet ValeursUniques\n\xa0\xa0// ValeursUniques ( Pointeur ; Pointeur { ; Pointeur... } ) -> Bool\xe9en\n\xa0\xa0// ValeursUniques ( ->Table ; ->Champ { ; ->Champ2... } ) -> Oui ou non\n\xa0\n\xa0var $0 : Boolean\n\xa0var ${1} : Pointer\n\xa0var $vlChamp;$vlNmbChamps;$vlTrouv\xe9;$vlEnregCour : Integer\n\xa0$vlNmbChamps:=Count parameters-1\n\xa0$vlEnregCour:=Record number($1->)\n\xa0If($vlNmbChamps>0)\n\xa0\xa0\xa0\xa0If($vlEnregCour#-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlEnregCour<0)\n\xa0\xa0// Il s'agit d'un nouvel enregistrement qui n'a pas \xe9t\xe9 sauvegard\xe9 (num\xe9ro d'enregistrement est\n\xa0\xa0// \xe9gal \xe0 -3)\n\xa0\xa0// donc nous pouvons arr\xeater la recherche d\xe8s que nous avons trouv\xe9 un enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Il s'agit d'un enregistrement existant, donc nous pouvons arr\xeater\n\xa0\xa0// la recherche d\xe8s que nous avons trouv\xe9 au moins deux enregistrements\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// La recherche retournera le r\xe9sultat dans la variable $vlTrouv\xe9\n\xa0\xa0// sans changer l'enregistrement courant ni la s\xe9lection courante\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into variable;$vlTrouv\xe9)\n\xa0\xa0// Construire la recherche selon le nombre de champs sp\xe9cifi\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNmbChamps=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNmbChamps=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;\xa0&\xa0;$3->=$3->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlChamp;2;$vlNmbChamps-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;\xa0&\xa0;${1+$vlChamp}->=${1+$vlChamp}->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;\xa0&\xa0;${1+$vlNmbChamps}->=${1+$vlNmbChamps}->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(0)\xa0// R\xe9tablir le mode standard de recherche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(0)\xa0// Enlever la limite sur la recherche\n\xa0\xa0// Traiter le r\xe9sultat de la recherche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTrouv\xe9=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0\xa0// Pas de valeurs dupliqu\xe9es\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTrouv\xe9=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlEnregCour<0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Trouv\xe9 un enregistrement existant avec les m\xeames valeurs que le nouveau\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0\xa0// Pas de valeurs dupliqu\xe9es, nous avons trouv\xe9 le m\xeame enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlTrouv\xe9=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0\xa0\xa0// Quoi que ce soit, les valeurs sont dupliqu\xe9es\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25CAD\xe9bogage)\xa0\xa0\xa0// Cela n'a aucun sens, signalez-le pendant le d\xe9veloppement de la base\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0\xa0\xa0// ATTENTION ! Cette m\xe9thode a \xe9t\xe9 appel\xe9e sans enregistrement courant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0\xa0\xa0// Ne peut pas garantir le r\xe9sultat\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0If(\u25CAD\xe9bogage)\xa0\xa0\xa0// Cela n'a aucun sens, signalez-le pendant le d\xe9veloppement de la base\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0\xa0\xa0// ATTENTION ! Cette m\xe9thode a \xe9t\xe9 appel\xe9e sans conditions de recherche\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$0:=False\xa0\xa0\xa0// Ne peut pas garantir le r\xe9sultat\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lorsque cette m\xe9thode est impl\xe9ment\xe9e dans votre application, vous pouvez \xe9crire le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0If(ValeursUniques(->[Contacts];->[Contacts]Soci\xe9t\xe9;->[Contacts]Nom;->[Contacts]Pr\xe9nom))\n\xa0\xa0// Traitement de l\'enregistrement qui a les valeurs uniques\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Il existe d\xe9j\xe0 un contact avec ce nom pour cette soci\xe9t\xe9.")\n\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-query-destination",children:"GET QUERY DESTINATION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-sql",children:"QUERY BY SQL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection",children:"QUERY SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-query-limit",children:"SET QUERY LIMIT"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"396"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);