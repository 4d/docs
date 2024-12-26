"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76569"],{23638:function(e,s,n){n.r(s),n.d(s,{metadata:()=>a,contentTitle:()=>i,default:()=>c,assets:()=>d,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-table-titles","title":"SET TABLE TITLES","description":"SET TABLE TITLES {( titresTables ; numTables {; *})}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-titles","permalink":"/docs/fr/commands/set-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-table-titles","title":"SET TABLE TITLES","slug":"/commands/set-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD TITLES","permalink":"/docs/fr/commands/set-field-titles"},"next":{"title":"Shift down","permalink":"/docs/fr/commands/shift-down"}}'),t=n("785893"),r=n("250065");let l={id:"set-table-titles",title:"SET TABLE TITLES",slug:"/commands/set-table-titles",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function u(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," {( ",(0,t.jsx)(s.em,{children:"titresTables"})," ; ",(0,t.jsx)(s.em,{children:"numTables"})," {; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"titresTables"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Noms des tables tels qu'ils doivent appara\xeetre"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"numTables"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ros des tables"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Op\xe9rateur"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Utiliser les noms personnalis\xe9s dans l\u2019\xe9diteur de formules"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," vous permet de masquer, renommer et r\xe9ordonner les tables de votre base qui apparaissent dans les \xe9diteurs standard de 4D en mode Application (lorsque le mode de lancement est le mode ",(0,t.jsx)(s.strong,{children:"Application"}),', ou apr\xe8s avoir s\xe9lectionn\xe9 "',(0,t.jsx)(s.strong,{children:"Tester l'application"}),'" dans le menu ',(0,t.jsx)(s.strong,{children:"Ex\xe9cution"}),") ."]}),"\n",(0,t.jsxs)(s.p,{children:["Cette commande vous permet \xe9galement de modifier \xe0 la vol\xe9e les libell\xe9s des tables apparaissant dans vos formulaires, si vous avez utilis\xe9 des libell\xe9s dynamiques. Pour plus d'informations sur l'insertion de libell\xe9s de tables et de champs dynamiques dans les formulaires, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Utiliser des r\xe9f\xe9rences dans les textes statiques"})," dans le manuel ",(0,t.jsx)(s.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Les tableaux ",(0,t.jsx)(s.em,{children:"titresTables"})," et ",(0,t.jsx)(s.em,{children:"numTables"})," doivent \xeatre synchronis\xe9s. Dans le tableau ",(0,t.jsx)(s.em,{children:"titresTables"}),", vous passez les noms des tables tels que vous voulez qu'ils apparaissent. Les tables s'afficheront dans l'ordre d\xe9fini par ces tableaux. Dans chaque \xe9l\xe9ment du tableau ",(0,t.jsx)(s.em,{children:"numTables"}),", passez le num\xe9ro de la table qui correspond au nom, nouveau ou ancien, de la table, et ce dans le m\xeame num\xe9ro d'\xe9l\xe9ment que dans le tableau ",(0,t.jsx)(s.em,{children:"titresTables"}),".",(0,t.jsx)(s.br,{}),"\nSi vous voulez masquer une table, ne la mettez pas dans les tableaux. Vous avez, par exemple, une base comprenant les tables A, B et C, cr\xe9\xe9es dans cet ordre. Vous voulez que ces tables apparaissent sous les noms X, Y et Z. De plus, vous ne voulez pas faire appara\xeetre la table B. Enfin, vous voulez que les tables soient dans l'ordre Z et X. Pour cela, vous passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"titresTables"})," un tableau \xe0 deux \xe9l\xe9ments, Z et X, et vous passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"numTables"})," un tableau \xe0 deux \xe9l\xe9ments, 3 et 1."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"*"})," vous permet d'indiquer si les noms personnalis\xe9s d\xe9finis \xe0 l\u2019aide de cette commande (\"structure virtuelle\") peuvent \xeatre ou non utilis\xe9s dans les formules de 4D. Par d\xe9faut, lorsque ce param\xe8tre est omis, les formules ex\xe9cut\xe9es dans 4D ne peuvent pas utiliser ces noms personnalis\xe9s ; il est n\xe9cessaire d'utiliser les noms de tables v\xe9ritables. Vous devez passer ce param\xe8tre si vous souhaitez g\xe9rer l'information fournie aux utilisateurs et assurer la coh\xe9rence de l'interface lors de l'utilisation de ces formules ou expressions, ",(0,t.jsx)(s.em,{children:"i.e"})," :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Si votre application fournit un acc\xe8s \xe0 l'\xe9diteur de formules (par exemple via l'\xe9diteur d'\xe9tats rapides)"}),"\n",(0,t.jsx)(s.li,{children:"Si votre application affiche des r\xe9f\xe9rences d'expressions, comme dans les documents 4D Write Pro."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Lorsque le param\xe8tre * est pass\xe9, les noms d\xe9finis par cette commande peuvent \xeatre utilis\xe9s dans les formules ex\xe9cut\xe9es par 4D. ",(0,t.jsx)(s.strong,{children:"Attention dans ce cas"}),', les noms personnalis\xe9s ne doivent pas contenir de caract\xe8res \u201Cinterdits\u201D par l\u2019interpr\xe9teur du langage de 4D, tels que -?*! Par exemple, le nom "Rate_in_%" ne pourrait pas \xeatre utilis\xe9 dans une formule (pour plus d\'informations, reportez-vous \xe0 la section \u201C',(0,t.jsx)(s.em,{children:"Nommer les objets du langage 4D"}),"\u201D)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," ne modifie pas la structure de votre base. Cette commande est con\xe7ue pour affecter l'utilisation ult\xe9rieure des \xe9diteurs de 4D et des formulaires comportant des libell\xe9s dynamiques lorsqu'ils sont utilis\xe9s dans l'environnement d'Application. L'aire de validit\xe9 de la commande ",(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," est la session. L'avantage, en Client/Serveur, est que plusieurs postes 4D Client peuvent \u201Cvoir\u201D simultan\xe9ment votre structure d'une mani\xe8re diff\xe9rente. Vous pouvez appeler ",(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," autant de fois que vous voulez."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," est utile dans les cas suivants :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Traduction dynamique de votre base."}),"\n",(0,t.jsx)(s.li,{children:"Affichage des tables dans l'ordre et avec les noms que vous voulez, ind\xe9pendamment de leur d\xe9finition."}),"\n",(0,t.jsx)(s.li,{children:"Affichage des tables d'une fa\xe7on qui d\xe9pend de l'identit\xe9 ou des privil\xe8ges d'un utilisateur."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," n'annule pas l'effet de la propri\xe9t\xe9 Invisible d'une table. Si vous avez d\xe9fini une table en tant qu'invisible au niveau de la structure, elle n'appara\xeetra pas en mode Application, m\xeame si elle est sp\xe9cifi\xe9e dans ",(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"}),"."]}),"\n",(0,t.jsx)(s.li,{children:'Les plug-ins acc\xe8dent toujours \xe0 la structure "virtuelle" telle que d\xe9finie par cette commande.'}),"\n",(0,t.jsxs)(s.li,{children:["Ex\xe9cuter la commande ",(0,t.jsx)(s.strong,{children:"SET TABLE TITLES"})," sans param\xe8tres r\xe9initialise l'environnement de langage et supprime la totalit\xe9 de la structure virtuelle pour la session (incluant les noms personnalis\xe9s de tables et de champs)."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Vous d\xe9veloppez une application 4D destin\xe9e au march\xe9 international. Vous avez donc besoin de prendre en compte les n\xe9cessit\xe9s de traduction et de localisation. Pour les \xe9diteurs standard de 4D qui apparaissent en mode Application et vos formulaires utilisant des libell\xe9s dynamiques, vous pouvez traiter cette question en utilisant une table ",(0,t.jsx)(s.em,{children:"[Traductions]"})," et quelques m\xe9thodes pour cr\xe9er et utiliser les traductions pour chaque langue que vous voulez."]}),"\n",(0,t.jsx)(s.li,{children:"Dans votre base, vous cr\xe9ez la table suivante :"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(310626).Z+"",width:"163",height:"156"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Ensuite, cr\xe9ez la m\xe9thode projet ",(0,t.jsx)(s.em,{children:"traduire_TABLES_ET_CHAMPS"})," ci-dessous. Cette m\xe9thode analyse la structure de votre base dans la table ",(0,t.jsx)(s.em,{children:"[Traductions]"})," et cr\xe9e les enregistrements correspondant \xe0 la langue pass\xe9e comme param\xe8tre."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0\xa0\xa0// m\xe9thode projet traduire_TABLES_ET_CHAMPS\n\xa0\xa0\xa0\xa0// traduire_TABLES_ET_CHAMPS ( Texte)\n\xa0\xa0\xa0\xa0// traduire_TABLES_ET_CHAMPS ( CodeLangue )\n\xa0\n\xa0var $1 : Text\xa0//code de la langue\n\xa0var $vlTable;$vlChamp : Integer\n\xa0var $Langue : Text\n\xa0$Langue:=$1\n\xa0\n\xa0For($vlTable;1;Last table number)\xa0// Passer sur chaque table\n\xa0\xa0\xa0\xa0If($vlTable#(Table(->[Traductions])))\xa0//Ne pas traduire la table des traductions\n\xa0\xa0// V\xe9rifier s'il existe une traduction du nom de la table pour la langue sp\xe9cifi\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];[Traductions]CodeLangage=$Langue;*)\xa0\xa0\xa0//langue souhait\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]TableID=$vlTable;*)\xa0\xa0\xa0//numero de table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]ChampID=0)\xa0\xa0\xa0//numero de champ = 0 signifie que c'est un nom de table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\xa0\xa0\xa0//v\xe9rifier que la table existe encore\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traductions])=0)\n\xa0\xa0// Else, cr\xe9er l'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]CodeLangage:=$Langue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]ChampID:=0\n\xa0\xa0// Le nom de la table traduit aura besoin d'\xeatre saisi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]Traduction:=Table name($vlTable)+\" en \"+$Langue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlChamp;1;Last field number($vlTable))\n\xa0\xa0// V\xe9rifier s'il existe une traduction pour le nom du champ dans la langue sp\xe9cifi\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];[Traductions]CodeLangage=$Langue;*)\xa0\xa0\xa0//langue souhait\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]TableID=$vlTable;*)\xa0\xa0\xa0//num\xe9ro de table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]ChampID=$vlChamp)\xa0\xa0\xa0//num\xe9ro de champ\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is field number valid($vlTable;$vlChamp))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traductions])=0)\n\xa0\xa0// Else, cr\xe9er l'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]CodeLangage:=$Langue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]ChampID:=$vlChamp\n\xa0\xa0// Le nom du champ traduit aura besoin d'\xeatre saisi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traductions]Traduction:=Field name($vlTable;$vlChamp)+\" en \"+$Langue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traductions])#0)\n\xa0\xa0// si le champ n'existe plus, on supprime la traduction\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traductions])#0)\n\xa0\xa0// si la table n'existe plus, on supprime la traduction\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Traductions])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Si maintenant vous ex\xe9cutez la ligne suivante, vous pouvez cr\xe9er autant d'enregistrements qu'il vous faut pour la traduction espagnole de vos tables et champs :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0traduire_TABLES_ET_CHAMPS("Espagnol")\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Une fois que cette ligne de code est appel\xe9e, vous pouvez saisir une traduction dans le champ ",(0,t.jsx)(s.em,{children:"[Traductions]NomTraduit"})," pour chacun des nouveaux enregistrements."]}),"\n",(0,t.jsx)(s.li,{children:"Enfin, chaque fois que vous voulez afficher en espagnol les \xe9diteurs standard de 4D ou les formulaires avec libell\xe9s dynamiques, vous ex\xe9cutez la ligne suivante :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0TABLES_ET_CHAMPS_LOCALISES("Espagnol")\n'})}),"\n",(0,t.jsx)(s.p,{children:"La m\xe9thode projet TABLES_ET_CHAMPS_LOCALISES est la suivante :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet TABLES_ET_CHAMPS_LOCALISES\n\xa0\xa0// TABLES_ET_CHAMPS_LOCALISES ( Texte)\n\xa0\xa0// TABLES_ET_CHAMPS_LOCALISES ( CodeLangue )\n\xa0\n\xa0var $1 : Text\xa0//Code de la langue\n\xa0var $vlTable;$vlChamp : Integer\n\xa0var $Langue : Text\n\xa0var $vlNumTable;$vlNumChamp : Integer\n\xa0$Langue:=$1\n\xa0\n\xa0\xa0//Mise \xe0 jour des noms de table\n\xa0ARRAY TEXT($asNoms;0)\xa0\xa0\xa0// Initialiser les tableaux pour FIXER TITRES TABLES et FIXER TITRES CHAMPS\n\xa0ARRAY INTEGER($aiNum\xe9ros;0)\n\xa0QUERY([Traductions];[Traductions]CodeLangage=$Langue;*)\n\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]ChampID=0)\xa0\xa0\xa0//noms de table donc\n\xa0SELECTION TO ARRAY([Traductions]Traduction;$asNoms;[Traductions]TableID;$aiNum\xe9ros)\n\xa0SET TABLE TITLES($asNoms;$aiNum\xe9ros)\n\xa0\n\xa0\xa0//Mise \xe0 jour des noms de champs\n\xa0$vlNumTable:=Last table number\xa0// Obtenir le nombre de tables dans la base\n\xa0For($vlTable;1;$vlNumTable)\xa0\xa0\xa0// Passer sur chaque table\n\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];[Traductions]CodeLangage=$Langue;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]TableID=$vlTable;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traductions];\xa0&\xa0;[Traductions]ChampID#0)\xa0\xa0\xa0//\xe9vite le zero qui sert au nom de la table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Traductions]Traduction;$asNoms;[Traductions]ChampID;$aiNum\xe9ros)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FIELD TITLES(Table($vlTable)->;$asNoms;$aiNum\xe9ros)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Notez que de nouvelles traductions peuvent \xeatre effectu\xe9es dans la base sans modification de code ni recompilation."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:"Vous voulez supprimer tous les noms de tables et de champs personnalis\xe9s d\xe9finis pour la session :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET TABLE TITLES\xa0//supprimer les noms personnalis\xe9s\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/last-table-number",children:"Last table number"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/parse-formula",children:"Parse formula"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/table-name",children:"Table name"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"601"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},310626:function(e,s,n){n.d(s,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return l}});var a=n(667294);let t={},r=a.createContext(t);function l(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);