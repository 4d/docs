/*! For license information please see b5cd8c6f.281aca93.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97474],{950071:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(474848),o=n(28453);const r={id:"shared",title:"Objets et collections partag\xe9s"},l=void 0,c={id:"Concepts/shared",title:"Objets et collections partag\xe9s",description:"Les objets partag\xe9s et les collections partag\xe9es sont des objets et des collections sp\xe9cifiques dont le contenu est partag\xe9 entre les process. Contrairement aux variables interprocess, les objets partag\xe9s et les collections partag\xe9es ont l'avantage d'\xeatre compatibles avec les process 4D pr\xe9emptifs : ils peuvent \xeatre pass\xe9s par r\xe9f\xe9rence comme param\xe8tres \xe0 des commandes telles que New process ou CALL WORKER.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/fr/20-R5/Concepts/shared",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"shared",title:"Objets et collections partag\xe9s"},sidebar:"docs",previous:{title:"Param\xe8tres",permalink:"/docs/fr/20-R5/Concepts/parameters"},next:{title:"Classes",permalink:"/docs/fr/20-R5/Concepts/classes"}},i={},a=[{value:"Utilisation des objets et collections partag\xe9s",id:"utilisation-des-objets-et-collections-partag\xe9s",level:2},{value:"Modification",id:"modification",level:3},{value:"Lecture",id:"lecture",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Les objets partag\xe9s"})," et ",(0,t.jsx)(s.strong,{children:"les collections partag\xe9es"})," sont des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/object",children:"objets"})," et des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/collection",children:"collections"})," sp\xe9cifiques dont le contenu est partag\xe9 entre les process. Contrairement aux ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/variables#variables-interprocess",children:"variables interprocess"}),", les objets partag\xe9s et les collections partag\xe9es ont l'avantage d'\xeatre compatibles avec les ",(0,t.jsx)(s.strong,{children:"process 4D pr\xe9emptifs"})," : ils peuvent \xeatre pass\xe9s par r\xe9f\xe9rence comme param\xe8tres \xe0 des commandes telles que ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page317.html",children:(0,t.jsx)(s.code,{children:"New process"})})," ou ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1389.html",children:(0,t.jsx)(s.code,{children:"CALL WORKER"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Les objets partag\xe9s et les collections partag\xe9es sont stock\xe9s dans des variables standard de type ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/object",children:(0,t.jsx)(s.code,{children:"Object"})})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/collection",children:(0,t.jsx)(s.code,{children:"Collection"})}),", mais doivent \xeatre instanci\xe9s \xe0 l'aide de commandes sp\xe9cifiques :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["pour cr\xe9er un objet partag\xe9, utilisez la commande ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1471.html",children:(0,t.jsx)(s.code,{children:"New shared object"})})," ou appelez la fonction ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/API/ClassClass#new",children:(0,t.jsx)(s.code,{children:"new()"})})," d'une ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#classes-partag%C3%A9es",children:"classe partag\xe9e"}),","]}),"\n",(0,t.jsxs)(s.li,{children:["pour cr\xe9er une collection partag\xe9e, utilisez la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/API/CollectionClass#new-shared-collection",children:(0,t.jsx)(s.code,{children:"New shared collection"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections."}),"\n",(0,t.jsxs)(s.p,{children:["Toute modification d'un objet/d'une collection partag\xe9(e) doit s'effectuer \xe0 l'int\xe9rieur d'une structure ",(0,t.jsx)(s.strong,{children:"Use...End use"}),". La lecture d'une valeur d'objet/collection ne n\xe9cessite pas de structure ",(0,t.jsx)(s.strong,{children:"Use...End use"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Un catalogue unique et global, retourn\xe9 par la commande ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,t.jsx)(s.code,{children:"Storage"})}),", est toujours disponible dans l'application et ses composants, et peut \xeatre utilis\xe9 pour stocker tous les objets partag\xe9s et collections."]}),"\n",(0,t.jsx)(s.h2,{id:"utilisation-des-objets-et-collections-partag\xe9s",children:"Utilisation des objets et collections partag\xe9s"}),"\n",(0,t.jsxs)(s.p,{children:["Une fois instanci\xe9s \xe0 l'aide des commandes ",(0,t.jsx)(s.code,{children:"New shared object"})," ou ",(0,t.jsx)(s.code,{children:"New shared collection"}),", les objets partag\xe9s et les collections partag\xe9es peuvent \xeatre modifi\xe9s et lus depuis n'importe quel process de l'application, sous certaines conditions."]}),"\n",(0,t.jsx)(s.h3,{id:"modification",children:"Modification"}),"\n",(0,t.jsx)(s.p,{children:"Les modifications suivantes peuvent \xeatre effectu\xe9es sur les objets partag\xe9s et les collections partag\xe9es :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"ajout ou suppression de propri\xe9t\xe9s d'objets,"}),"\n",(0,t.jsx)(s.li,{children:"ajout ou modification de valeurs (prises en charge par les objets/collections partag\xe9(e) s), y compris d'autres objets et collections partag\xe9(s) (ce qui cr\xe9e un groupe partag\xe9, cf. ci-dessous)."}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared."})}),"\n",(0,t.jsxs)(s.p,{children:["Toute instruction de modification dans un objet partag\xe9 ou une collection partag\xe9e doit \xeatre prot\xe9g\xe9e \xe0 l'int\xe9rieur d'un bloc ",(0,t.jsx)(s.a,{href:"#use-end-use",children:(0,t.jsx)(s.code,{children:"Use...End use"})}),", sinon une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Pour plus de commodit\xe9, toutes les ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/API/CollectionClass",children:"fonctions de collection"})," qui modifient l'objet partag\xe9 ou la collection partag\xe9e ins\xe8rent un bloc interne ",(0,t.jsx)(s.code,{children:"Use...End use"})," afin que vous n'ayez pas \xe0 le coder vous-m\xeame. Par exemple :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'$col:=New shared collection()\n$col.push("alpha") //.push() d\xe9clenche automatiquement Use/End use, donc pas besoin de le faire vous-m\xeame\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Si vous avez besoin d'ex\xe9cuter plusieurs modifications sur la m\xeame collection, vous pouvez prot\xe9ger toutes les modifications avec un unique ",(0,t.jsx)(s.code,{children:"Use...End use"})," afin que les modifications soient effectu\xe9es de mani\xe8re atomique."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'$col:=Storage.mySharedCollection\nUse($col)\n\t$col[0]:="omega" //La modification d\'un \xe9l\xe9ment n\xe9cessite d\'\xeatre effectu\xe9e dans Use/End use\n\t$col.push("alpha") //.push() d\xe9clenche en interne Use/End use, mais nous voulons faire les deux modifications de fa\xe7on atomique\nEnd use\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Un objet/une collection partag\xe9(e) ne peut \xeatre modifi\xe9(e) que par un seul process \xe0 la fois. ",(0,t.jsx)(s.code,{children:"Use"})," verrouille l'objet/la collection partag\xe9(e) pour les autres threads, tandis que ",(0,t.jsx)(s.code,{children:"End use"})," d\xe9verrouille l'objet/la collection partag\xe9(e) (si le compteur de verrouillage est \xe0 0, voir ci-dessous). . Toute tentative de modification d'un objet/d'une collection partag\xe9(e) sans au moins un appel \xe0 ",(0,t.jsx)(s.code,{children:"Use...End use"})," g\xe9n\xe8re une erreur. Lorsqu'un process appelle ",(0,t.jsx)(s.code,{children:"Use...End use"})," avec un objet/une collection partag\xe9(e) qui est d\xe9j\xe0 \"utilis\xe9(e)\" par un autre process, il est simplement mis en attente jusqu'\xe0 ce qu'il soit d\xe9verrouill\xe9 par l'appel \xe0 ",(0,t.jsx)(s.code,{children:"End use"})," (aucune erreur n'est g\xe9n\xe9r\xe9e). En cons\xe9quence, les instructions situ\xe9es \xe0 l'int\xe9rieur des structures ",(0,t.jsx)(s.code,{children:"Use...End use"})," doivent toujours s'ex\xe9cuter rapidement et d\xe9verrouiller les \xe9l\xe9ments d\xe8s que possible. Il est donc fortement d\xe9conseill\xe9 de modifier un objet ou une collection partag\xe9(e) directement depuis l'interface, par exemple depuis une bo\xeete de dialogue."]}),"\n",(0,t.jsxs)(s.p,{children:["L'assignation d'objets/collections partag\xe9(e) s \xe0 des propri\xe9t\xe9s ou \xe9l\xe9ments d'autres objets/collections partag\xe9(e) s est autoris\xe9e et entra\xeene la cr\xe9ation de ",(0,t.jsx)(s.strong,{children:"groupes partag\xe9s"}),". Un groupe partag\xe9 est automatiquement cr\xe9\xe9 lorsqu'un objet ou une collection partag\xe9(e) est assign\xe9(e) en tant que valeur de propri\xe9t\xe9 ou \xe9l\xe9ment \xe0 un autre objet ou collection partag\xe9(e). Les groupes partag\xe9s permettent d'imbriquer des objets et collections partag\xe9(e)s mais n\xe9cessitent d'observer des r\xe8gles suppl\xe9mentaires :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["L'appel de ",(0,t.jsx)(s.code,{children:"Use"})," avec un(e) objet/collection partag\xe9(e) appartenant \xe0 un groupe provoquera le verrouillage des propri\xe9t\xe9s/\xe9l\xe9ments de tous/toutes les objets/collections partag\xe9(e) s du groupe et incr\xe9mente son compteur de verrouillage. L'appel \xe0 ",(0,t.jsx)(s.code,{children:"End use"})," d\xe9cr\xe9mente le compteur de verrouillage du groupe et lorsque le compteur est \xe0 0, tous les objets ou collections partag\xe9s partag\xe9s sont d\xe9verrouill\xe9s."]}),"\n",(0,t.jsx)(s.li,{children:"Un objet ou une collection partag\xe9(e) peut appartenir \xe0 un seul groupe partag\xe9. Une erreur est g\xe9n\xe9r\xe9e si vous tentez d'assigner un objet ou une collection appartenant d\xe9j\xe0 \xe0 un groupe \xe0 un groupe diff\xe9rent."}),"\n",(0,t.jsx)(s.li,{children:"Les objets/collections group\xe9(e)s ne peuvent plus \xeatre d\xe9group\xe9(e)s. Une fois inclus dans un groupe partag\xe9, un objet ou une collection partag\xe9(e) est li\xe9(e) d\xe9finitivement au groupe pendant toute la dur\xe9e de la session. M\xeame si toutes les r\xe9f\xe9rences de l'objet/la collection sont supprim\xe9(e)s des objets/collections parent(e)s, ils resteront li\xe9s."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Reportez-vous \xe0 l'exemple 2 pour l'illustration des r\xe8gles des groupes partag\xe9s."}),"\n",(0,t.jsx)(s.h3,{id:"lecture",children:"Lecture"}),"\n",(0,t.jsxs)(s.p,{children:["La lecture de propri\xe9t\xe9s ou d'\xe9l\xe9ments d'un objet ou d'une collection partag\xe9(e) est possible sans appel de la structure ",(0,t.jsx)(s.code,{children:"Use...End use"}),', m\xeame si l\'objet ou la collection partag\xe9(e) est "utilis\xe9(e)" par un autre process.']}),"\n",(0,t.jsxs)(s.p,{children:["Cependant, lorsque plusieurs valeurs sont interd\xe9pendantes et doivent \xeatre lues simultan\xe9ment, il est n\xe9cessaire d'encadrer l'acc\xe8s en lecture par une structure ",(0,t.jsx)(s.code,{children:"Use...End use"})," pour des raisons de coh\xe9rence."]}),"\n",(0,t.jsx)(s.h3,{id:"duplication",children:"Duplication"}),"\n",(0,t.jsxs)(s.p,{children:["Appeler ",(0,t.jsx)(s.code,{children:"OB Copy"})," avec un objet partag\xe9 (ou avec un objet dont des propri\xe9t\xe9s sont des objets partag\xe9s) est possible, mais dans ce cas un objet standard (non partag\xe9) est retourn\xe9."]}),"\n",(0,t.jsx)(s.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Storage"})," est un objet partag\xe9 unique, disponible automatiquement pour chaque application et machine. Cet objet partag\xe9 est renvoy\xe9 par la commande ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1525.html",children:(0,t.jsx)(s.code,{children:"Storage"})}),". Il est destin\xe9 \xe0 r\xe9f\xe9rencer les objets ou collections partag\xe9(e)s d\xe9fini(e)s durant la session que vous souhaitez rendre accessibles \xe0 tous les process, pr\xe9emptifs ou standard."]}),"\n",(0,t.jsxs)(s.p,{children:["A noter que, \xe0 la diff\xe9rence de objets partag\xe9s standard, l'objet ",(0,t.jsx)(s.code,{children:"Storage"})," ne cr\xe9e par de groupe partag\xe9 lorsque des objets/collection lui sont assign\xe9(e)s en tant que propri\xe9t\xe9s. Cette exception permet \xe0 l'objet ",(0,t.jsx)(s.strong,{children:"Storage"})," d'\xeatre utilis\xe9 sans verrouiller les objets/collections partag\xe9(e)s connect\xe9(e)s."]}),"\n",(0,t.jsxs)(s.p,{children:["Pour plus d'informations, veuillez vous reporter \xe0 la description de la commande ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1525.html",children:(0,t.jsx)(s.code,{children:"Storage"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"useend-use",children:"Use...End use"}),"\n",(0,t.jsxs)(s.p,{children:["La syntaxe de la structure ",(0,t.jsx)(s.code,{children:"Use...End use"})," est la suivante :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    instruction(s)\n End use\n"})}),"\n",(0,t.jsxs)(s.p,{children:["La structure ",(0,t.jsx)(s.code,{children:"Use...End use"})," d\xe9finit une s\xe9quence d'instructions qui ex\xe9cutera des t\xe2ches sur le param\xe8tre ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"})," sous la protection d'un s\xe9maphore interne. ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"})," peut \xeatre tout objet partag\xe9 ou collection partag\xe9e valide."]}),"\n",(0,t.jsxs)(s.p,{children:["Les objets partag\xe9s et les collections partag\xe9es permettent d'\xe9tablir des communications entre les process, en particulier les ",(0,t.jsx)(s.strong,{children:"process 4D pr\xe9emptifs"}),". Ils peuvent \xeatre pass\xe9s par r\xe9f\xe9rence en param\xe8tre d'un process \xe0 un autre. Encadrer les modifications d'objets partag\xe9s et de collections partag\xe9es \xe0 l'aide des mots-cl\xe9s ",(0,t.jsx)(s.code,{children:"Use...End use"})," est obligatoire pour emp\xeacher les acc\xe8s concurrents entre les process."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Une fois que la ligne ",(0,t.jsx)(s.strong,{children:"Use"})," est ex\xe9cut\xe9e avec succ\xe8s, toutes les propri\xe9t\xe9s/\xe9l\xe9ments de ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"})," sont verrouill\xe9(e)s en \xe9criture pour tous les autres process jusqu'\xe0 ce que la ligne ",(0,t.jsx)(s.strong,{children:"End use"})," correspondante soit ex\xe9cut\xe9e."]}),"\n",(0,t.jsxs)(s.li,{children:["La s\xe9quence ",(0,t.jsx)(s.em,{children:"statement(s)"})," peut ex\xe9cuter n'importe quelle modification sur les propri\xe9t\xe9s/\xe9l\xe9ments de Shared_object_or_Shared_collection sans risque d'acc\xe8s concurrents."]}),"\n",(0,t.jsxs)(s.li,{children:["Si un autre objet ou collection partag\xe9(e) est ajout\xe9(e) en tant que propri\xe9t\xe9 du param\xe8tre ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"}),", il ou elle devient connect\xe9(e) et appartiennent au m\xeame groupe partag\xe9."]}),"\n",(0,t.jsxs)(s.li,{children:["Si un autre process tente d'acc\xe9der \xe0 une propri\xe9t\xe9 de ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"})," ou une propri\xe9t\xe9 connect\xe9e alors qu'une s\xe9quence ",(0,t.jsx)(s.strong,{children:"Use...End use"})," est en cours d'ex\xe9cution sur le m\xeame ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"}),", il est automatiquement plac\xe9 en attente jusqu'\xe0 ce que la s\xe9quence courante soit termin\xe9e."]}),"\n",(0,t.jsxs)(s.li,{children:["La ligne ",(0,t.jsx)(s.strong,{children:"End use"})," d\xe9verrouille les propri\xe9t\xe9s de ",(0,t.jsx)(s.em,{children:"Shared_object_or_Shared_collection"})," et tous les objets du m\xeame groupe."]}),"\n",(0,t.jsxs)(s.li,{children:["Plusieurs structures ",(0,t.jsx)(s.strong,{children:"Use...End use"})," peuvent \xeatre imbriqu\xe9es dans le code 4D. Toute modification d'un objet/d'une collection partag\xe9(e) doit s'effectuer \xe0 l'int\xe9rieur d'une structure ",(0,t.jsx)(s.strong,{children:"Use...End use"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["Les fonctions suivantes d\xe9clenchent automatiquement un ",(0,t.jsx)(s.strong,{children:"Use/End use"})," interne, rendant un appel explicite \xe0 la structure inutile lors de l'ex\xe9cution de la fonction :"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/API/CollectionClass",children:"fonctions de collection"})," qui modifient les collections partag\xe9es"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#fonctions-partagees",children:"fonctions partag\xe9es"})," (d\xe9finies dans les ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R5/Concepts/classes#classes-partagees",children:"classes partag\xe9es"}),")."]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(s.p,{children:"Vous souhaitez lancer plusieurs process qui vont effectuer des t\xe2ches d'inventaire parmi diff\xe9rents produits et mettre \xe0 jour le m\xeame objet partag\xe9. Le process principal instancie un objet partag\xe9 vide et ensuite lance les autres process, passant en param\xe8tre l'objet partag\xe9 et les produits \xe0 comptabiliser :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //remplir le tableau avec les \xe9l\xe9ments \xe0 compter\n $nbItems:=Size of array($_items)\n  var $inventory : Object\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Cr\xe9er un process\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  // objet $inventory envoy\xe9 par r\xe9f\xe9rence\n End for\n'})}),"\n",(0,t.jsx)(s.p,{children:"Dans la m\xe9thode \"HowMany\", l'inventaire est effectu\xe9 et l'objet partag\xe9 $inventory est mis \xe0 jour d\xe8s que possible :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\t//HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9thode pour compter les produits\n Use($inventory) //utiliser l'objet partag\xe9\n    $inventory[$what]:=$count  //sauvegarder les r\xe9sultats pour cet \xe9l\xe9ment\n End use\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:"Les exemples suivants illustrent les r\xe8gles sp\xe9cifiques \xe0 observer lorsque vous utilisez des groupes partag\xe9s :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:" $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //un premier groupe est cr\xe9\xe9\n  End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //un 2e groupe est cr\xe9\xe9\n End use\n\n Use($ob1) //Utilisation d'un objet du groupe 1\n    $ob1.b:=$ob4  //ERREUR\n  //$ob4 appartient d\xe9j\xe0 \xe0 un autre groupe\n  //son assignation n'est pas permise\nEnd use\n\n Use($ob3)\n    $ob3.a:=Null //on enl\xe8ve la r\xe9f\xe9rence de $ob4 du groupe 2\n End use\n\n Use($ob1) //Utilisation d'un objet du groupe 1\n    $ob1.b:=$ob4  //ERREUR\n  //$ob4 appartient toujours au groupe 2\n  //son assignation n'est pas permise\n End use\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,s,n)=>{var t=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var t,r={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(d=s.ref),s)l.call(s,t)&&!i.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:o,type:e,key:a,ref:d,props:r,_owner:c.current}}s.Fragment=r,s.jsx=a,s.jsxs=a},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var t=n(296540);const o={},r=t.createContext(o);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);