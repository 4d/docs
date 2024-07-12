/*! For license information please see eb102aa7.b56e4d62.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25646],{912585:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>u,metadata:()=>a,toc:()=>d});var i=r(474848),t=r(28453);const u={id:"editing",title:"Gestion des groupes et utilisateurs 4D"},n=void 0,a={id:"Users/editing",title:"Gestion des groupes et utilisateurs 4D",description:"Super_Utilisateur et Administrateur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Users/handling_users_groups.md",sourceDirName:"Users",slug:"/Users/editing",permalink:"/docs/fr/18/Users/editing",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Fhandling_users_groups.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"editing",title:"Gestion des groupes et utilisateurs 4D"},sidebar:"docs",previous:{title:"Vue d\u2019ensemble",permalink:"/docs/fr/18/Users/overview"},next:{title:"Prise en main",permalink:"/docs/fr/18/REST/gettingStarted"}},l={},d=[{value:"Super_Utilisateur et Administrateur",id:"super_utilisateur-et-administrateur",level:2},{value:"\xc9diteur d&#39;utilisateurs",id:"\xe9diteur-dutilisateurs",level:2},{value:"Ajouter et modifier des utilisateurs",id:"ajouter-et-modifier-des-utilisateurs",level:3},{value:"Supprimer un utilisateur",id:"supprimer-un-utilisateur",level:3},{value:"Propri\xe9t\xe9s des utilisateurs",id:"propri\xe9t\xe9s-des-utilisateurs",level:3},{value:"\xc9diteur de groupes",id:"\xe9diteur-de-groupes",level:2},{value:"Configurer des groupes",id:"configurer-des-groupes",level:3},{value:"Placer des utilisateurs ou des groupes dans des groupes",id:"placer-des-utilisateurs-ou-des-groupes-dans-des-groupes",level:3},{value:"Affecter un groupe \xe0 un plug-in ou \xe0 un serveur",id:"affecter-un-groupe-\xe0-un-plug-in-ou-\xe0-un-serveur",level:3},{value:"Un sch\xe9ma d\u2019acc\xe8s hi\xe9rarchique",id:"un-sch\xe9ma-dacc\xe8s-hi\xe9rarchique",level:3}];function o(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"super_utilisateur-et-administrateur",children:"Super_Utilisateur et Administrateur"}),"\n",(0,i.jsx)(s.p,{children:"4D fournit \xe0 certains utilisateurs des privil\xe8ges d\u2019acc\xe8s standard ainsi que des pr\xe9rogatives sp\xe9cifiques. Une fois qu\u2019un syst\xe8me d\u2019utilisateurs et de groupes a \xe9t\xe9 cr\xe9\xe9, ces privil\xe8ges standard prennent effet."}),"\n",(0,i.jsxs)(s.p,{children:["L\u2019utilisateur le plus puissant est le ",(0,i.jsx)(s.strong,{children:"Super_Utilisateur"}),". Aucune partie de la base de donn\xe9es n\u2019est inaccessible au Super_Utilisateur. Le Super_Utilisateur peut :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"acc\xe9der \xe0 tous les serveurs de la base sans restrictions,"}),"\n",(0,i.jsx)(s.li,{children:"cr\xe9er des utilisateurs et des groupes,"}),"\n",(0,i.jsx)(s.li,{children:"affecter des privil\xe8ges d\u2019acc\xe8s aux groupes,"}),"\n",(0,i.jsx)(s.li,{children:"utiliser le mode D\xe9veloppement. En monoposte, les droits d'acc\xe8s du Super_Utilisateur sont toujours utilis\xe9s. En mode client/serveur, l'affectation d'un mot de passe au Super_Utilisateur affiche la bo\xeete de dialogue de connexion.  L'acc\xe8s au mode D\xe9veloppement est en lecture seule."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Apr\xe8s le Super_Utilisateur, le second plus puissant utilisateur est ",(0,i.jsx)(s.strong,{children:"l\u2019Administrateur"}),", qui est en g\xe9n\xe9ral responsable de la gestion du syst\xe8me d\u2019acc\xe8s et des fonctionnalit\xe9s d'administration."]}),"\n",(0,i.jsx)(s.p,{children:"L'Administrateur peut :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"cr\xe9er des utilisateurs et des groupes,"}),"\n",(0,i.jsx)(s.li,{children:"acc\xe9der au moniteur et \xe0 la fen\xeatre d'administration de 4D Server"}),"\n",(0,i.jsx)(s.li,{children:"acc\xe9der \xe0 la fen\xeatre CSM pour g\xe9rer les sauvegardes, restitutions ou le serveur."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"L'Administrateur ne peut pas :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"modifier l'utilisateur Super_Utilisateur"}),"\n",(0,i.jsx)(s.li,{children:"par d\xe9faut, acc\xe9der \xe0 des objets prot\xe9g\xe9s de la base. En particulier, l'Administrateur ne peut pas acc\xe9der au mode D\xe9veloppement s'il est restreint. L'Administrateur doit faire partie d'un ou plusieurs groupes pour avoir des privil\xe8ges d\u2019acc\xe8s dans la base. Il est plac\xe9 dans tous les nouveaux groupes, mais vous pouvez cependant l'exclure de ces groupes."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Par d\xe9faut, le Super_Utilisateur et l'Administrateur se trouvent dans toutes les bases. Dans la ",(0,i.jsx)(s.a,{href:"#users-and-groups-editor",children:"bo\xeete de dialogue de gestion des utilisateurs"}),", les ic\xf4nes du Super_Utilisateur et de l\u2019Administrateur ont des ic\xf4nes respectivement rouge et verte :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Ic\xf4ne du Super_Utilisateur : ",(0,i.jsx)(s.img,{src:r(775747).A+"",width:"15",height:"15"})]}),"\n",(0,i.jsxs)(s.li,{children:["Ic\xf4ne de l'Administrateur : ",(0,i.jsx)(s.img,{src:r(799315).A+"",width:"15",height:"15"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez renommer les utilisateurs Super_Utilisateur et Administrateur. Dans le langage, Super_Utilisateur porte toujours l'identifiant 1 et l'Administrateur l'identifiant 2."}),"\n",(0,i.jsx)(s.p,{children:"Le Super_Utilisateur et l\u2019Administrateur peuvent cr\xe9er chacun 16 000 groupes et 16 000 utilisateurs."}),"\n",(0,i.jsx)(s.h2,{id:"\xe9diteur-dutilisateurs",children:"\xc9diteur d'utilisateurs"}),"\n",(0,i.jsx)(s.p,{children:"L'\xe9diteur des utilisateurs se trouve dans la bo\xeete \xe0 outils de 4D."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(855912).A+"",width:"778",height:"276"})}),"\n",(0,i.jsx)(s.h3,{id:"ajouter-et-modifier-des-utilisateurs",children:"Ajouter et modifier des utilisateurs"}),"\n",(0,i.jsx)(s.p,{children:"Vous utilisez l\u2019\xe9diteur d\u2019utilisateurs pour cr\xe9er des comptes utilisateurs, d\xe9finir leurs propri\xe9t\xe9s et leur appartenance aux diff\xe9rents groupes."}),"\n",(0,i.jsx)(s.p,{children:"Pour ajouter un utilisateur depuis la boite \xe0 outils :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Bo\xeete \xe0 outils > Utilisateurs"})," dans le menu ",(0,i.jsx)(s.strong,{children:"D\xe9veloppement"})," ou cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"Bo\xeete outils"})," de la barre d\u2019outils de 4D. 4D affiche la fen\xeatre d\u2019\xe9dition des utilisateurs."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["La liste des utilisateurs affiche tous les utilisateurs, y compris ",(0,i.jsx)(s.a,{href:"#designer-and-administrator",children:"le Super_Utilisateur et l'l\u2019Administrateur"}),"."]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["Cliquez sur le bouton d\u2019ajout ",(0,i.jsx)(s.img,{src:r(618780).A+"",width:"20",height:"16"})," situ\xe9 au-dessous de la Liste des utilisateurs. OU Cliquez avec le bouton droit de la souris dans la Liste des utilisateurs et choisissez la commande ",(0,i.jsx)(s.strong,{children:"Ajouter"})," ou ",(0,i.jsx)(s.strong,{children:"Dupliquer"})," dans le menu contextuel."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"Dupliquer"})," permet de cr\xe9er rapidement plusieurs utilisateurs ayant des caract\xe9ristiques communes."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:'4D ajoute un nouvel utilisateur \xe0 la liste, nomm\xe9 par d\xe9faut "Nouvel utilisateurN".'}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Saisissez le nom du nouvel utilisateur. Ce nom sera utilis\xe9 par l\u2019utilisateur pour ouvrir la base. Vous pouvez renommer un utilisateur \xe0 tout moment en utilisant la commande ",(0,i.jsx)(s.strong,{children:"Renommer"})," du menu contextuel, ou en utilisant la combinaison Alt+clic (Windows) ou Option+clic (macOS) ou en cliquant deux fois sur un nom."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Pour saisir le mot de passe de l\u2019utilisateur, cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"Modifier..."})," dans la zone des propri\xe9t\xe9s de l\u2019utilisateur et saisissez deux fois le mot de passe dans la boite de dialogue. Vous pouvez saisir jusqu\u2019\xe0 15 caract\xe8res alphanum\xe9riques. L\u2019\xe9diteur de mots de passe tient compte de la casse des caract\xe8res (majuscules ou minuscules)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Les utilisateurs peuvent modifier leur mot de passe \xe0 tout moment en fonction des options de la page S\xe9curit\xe9 des propri\xe9t\xe9s de la base, ou \xe0 l'aide de la commande ",(0,i.jsx)(s.code,{children:"CHANGE PASSWORD"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsx)(s.li,{children:"D\xe9finissez le ou les groupe(s) d\u2019appartenance de l\u2019utilisateur \xe0 l\u2019aide du tableau \u201cMembre des groupes\u201d. Vous pouvez ajouter l\u2019utilisateur s\xe9lectionn\xe9 \xe0 un groupe en cochant l\u2019option correspondante dans la colonne Membre."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["L\u2019appartenance des utilisateurs aux groupes peut \xe9galement \xeatre d\xe9finie par groupe dans la ",(0,i.jsx)(s.a,{href:"#configuring-access-groups",children:"page Groupes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"supprimer-un-utilisateur",children:"Supprimer un utilisateur"}),"\n",(0,i.jsxs)(s.p,{children:["Pour supprimer un utilisateur, s\xe9lectionnez-le puis cliquez sur le bouton de suppression ou utilisez la commande ",(0,i.jsx)(s.strong,{children:"Supprimer"})," du menu contextuel. ",(0,i.jsx)(s.img,{src:r(20132).A+"",width:"19",height:"18"})]}),"\n",(0,i.jsx)(s.p,{children:"Les utilisateurs supprim\xe9s n'apparaissent plus dans la liste de l'\xe9diteur d'utilisateurs. A noter que les num\xe9ros des utilisateurs supprim\xe9s peuvent \xeatre r\xe9attribu\xe9s lors de la cr\xe9ation de nouveaux comptes."}),"\n",(0,i.jsx)(s.h3,{id:"propri\xe9t\xe9s-des-utilisateurs",children:"Propri\xe9t\xe9s des utilisateurs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Le champ ",(0,i.jsx)(s.strong,{children:"Type d\u2019utilisateur"}),' : le champ Type d\u2019utilisateur contient "Super_Utilisateur", "Administrateur", ou (pour tous les autres utilisateurs) "Utilisateur".']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"M\xe9thodes de d\xe9marrage"})," : Nom d'une m\xe9thode associ\xe9e qui sera automatiquement associ\xe9e lorsque l'utilisateur ouvre la base (facultatif). Cette m\xe9thode peut \xeatre utilis\xe9e par exemple pour charger les pr\xe9f\xe9rences utilisateur."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\xe9diteur-de-groupes",children:"\xc9diteur de groupes"}),"\n",(0,i.jsx)(s.p,{children:"L'\xe9diteur de groupes se trouve dans la bo\xeete \xe0 outils de 4D."}),"\n",(0,i.jsx)(s.h3,{id:"configurer-des-groupes",children:"Configurer des groupes"}),"\n",(0,i.jsx)(s.p,{children:"Vous utilisez l\u2019\xe9diteur de groupes pour d\xe9finir les \xe9l\xe9ments qu\u2019ils contiennent (utilisateurs et/ou autres groupes) et pour r\xe9partir les acc\xe8s aux plug-ins."}),"\n",(0,i.jsx)(s.p,{children:"Attention, une fois cr\xe9\xe9, un groupe ne peut pas \xeatre supprim\xe9. Si vous souhaitez d\xe9sactiver un groupe, il vous suffit de retirer tous les utilisateurs qu\u2019il contient."}),"\n",(0,i.jsx)(s.p,{children:"Pour cr\xe9er un groupe :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["S\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Bo\xeete \xe0 outils > Groupes"})," dans le menu ",(0,i.jsx)(s.strong,{children:"D\xe9veloppement"})," ou cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"Bo\xeete outils"})," de la barre d\u2019outils de 4D puis cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"Groupes"}),". 4D affiche la fen\xeatre d\u2019\xe9dition des groupes. La liste des groupes affiche tous les groupes de la base."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Cliquez sur le bouton ",(0,i.jsx)(s.img,{src:r(618780).A+"",width:"20",height:"16"})," situ\xe9 en-dessous de la liste des groupes.",(0,i.jsx)(s.br,{}),"\nOU",(0,i.jsx)(s.br,{}),"\nFaites un clic droit sur la liste de groupes et s\xe9lectionnez la commande ",(0,i.jsx)(s.strong,{children:"Ajouter"})," ou ",(0,i.jsx)(s.strong,{children:"Dupliquer"})," dans le menu contextuel."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"La commande Dupliquer permet de cr\xe9er rapidement plusieurs groupes ayant des caract\xe9ristiques communes."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:'4D ajoute un nouveau groupe \xe0 la liste, nomm\xe9 par d\xe9faut "Nouveau groupe1".'}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["Saisissez le nom du nouveau groupe. Le nom du groupe peut avoir une longueur maximale de 15 caract\xe8res. Vous pouvez renommer un groupe \xe0 tout moment en utilisant la commande ",(0,i.jsx)(s.strong,{children:"Renommer"})," du menu contextuel, ou en utilisant la combinaison Alt+clic (Windows) ou Option+clic (macOS) ou en cliquant deux fois sur un nom."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"placer-des-utilisateurs-ou-des-groupes-dans-des-groupes",children:"Placer des utilisateurs ou des groupes dans des groupes"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez placer tout utilisateur ou tout groupe dans un groupe et vous pouvez aussi le placer dans plusieurs groupes. Il n\u2019est pas obligatoire de placer un utilisateur dans un groupe."}),"\n",(0,i.jsx)(s.p,{children:'Pour placer un utilisateur ou un groupe dans un groupe, il suffit de s\xe9lectionner le groupe dans la liste puis de cocher l\u2019option "Membre" pour chaque utilisateur ou groupe dans la zone d\u2019attribution des membres :'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(675675).A+"",width:"450",height:"263"})}),"\n",(0,i.jsx)(s.p,{children:"Si vous cochez le nom d\u2019un utilisateur, l\u2019utilisateur est ajout\xe9 au groupe. Si vous cochez un nom de groupe, tous les utilisateurs du groupe sont ajout\xe9s au nouveau groupe. L\u2019utilisateur ou le groupe affili\xe9 dispose alors des privil\xe8ges d\u2019acc\xe8s affect\xe9s au nouveau groupe."}),"\n",(0,i.jsxs)(s.p,{children:["Placer des groupes dans d\u2019autres groupes permet de cr\xe9er une hi\xe9rarchie d\u2019utilisateurs. Les utilisateurs d\u2019un groupe plac\xe9 dans un autre groupe disposent des autorisations d\u2019acc\xe8s des deux groupes. Reportez-vous au paragraphe ",(0,i.jsx)(s.a,{href:"#an-access-hierarchy-scheme",children:"Un sch\xe9ma d\u2019acc\xe8s hi\xe9rarchique"})," ci-dessous."]}),"\n",(0,i.jsx)(s.p,{children:"Pour supprimer un utilisateur ou un groupe d\u2019un autre groupe, il suffit de d\xe9s\xe9lectionner l\u2019option correspondante dans la liste des membres."}),"\n",(0,i.jsx)(s.h3,{id:"affecter-un-groupe-\xe0-un-plug-in-ou-\xe0-un-serveur",children:"Affecter un groupe \xe0 un plug-in ou \xe0 un serveur"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez affecter un groupe d\u2019acc\xe8s \xe0 tout plug-in 4D install\xe9 dans votre base de donn\xe9es. Les plug-ins comprennent tous les plug-ins de 4D ainsi que tout plug-in d\xe9velopp\xe9s par une soci\xe9t\xe9 tierce."}),"\n",(0,i.jsx)(s.p,{children:"R\xe9partir les acc\xe8s aux plug-ins vous permet de contr\xf4ler l\u2019utilisation des licences dont vous disposez pour ces plug-ins. Tout utilisateur n\u2019appartenant pas au groupe d\u2019acc\xe8s \xe0 un plug-in ne pourra pas charger ce plug-in."}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez \xe9galement contr\xf4ler l\u2019utilisation du serveur Web et du serveur SOAP de 4D en mode distant via la zone d\u2019acc\xe8s aux plug-ins."}),"\n",(0,i.jsx)(s.p,{children:"La zone \u201cPlug-ins\u201d de la page Groupes de la bo\xeete \xe0 outils liste tous les plug-ins charg\xe9s par l\u2019application 4D. Pour affecter un groupe \xe0 un plug-in, il suffit de cocher l\u2019option correspondante."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(998347).A+"",width:"450",height:"139"})}),"\n",(0,i.jsxs)(s.p,{children:["Les lignes ",(0,i.jsx)(s.strong,{children:"4D Client Web Server"})," et ",(0,i.jsx)(s.strong,{children:"4D Client SOAP Server"})," permettent contr\xf4ler la possibilit\xe9 de publication Web et SOAP (Web Services) de chaque 4D en mode distant. En effet, ces licences sont consid\xe9r\xe9es par 4D Server comme des licences de plug-ins. Ainsi, comme pour un plug-in, vous pouvez restreindre le droit d\u2019utiliser ces licences \xe0 un groupe d\u2019utilisateurs sp\xe9cifique."]}),"\n",(0,i.jsx)(s.h3,{id:"un-sch\xe9ma-dacc\xe8s-hi\xe9rarchique",children:"Un sch\xe9ma d\u2019acc\xe8s hi\xe9rarchique"}),"\n",(0,i.jsx)(s.p,{children:"Le meilleur moyen d\u2019assurer la s\xe9curit\xe9 de votre base de donn\xe9es et de proposer diff\xe9rents niveaux d\u2019acc\xe8s aux utilisateurs est d\u2019utiliser un sch\xe9ma hi\xe9rarchique des acc\xe8s. Les utilisateurs peuvent \xeatre affect\xe9s \xe0 diff\xe9rents groupes et les groupes peuvent \xeatre hi\xe9rarchis\xe9s pour cr\xe9er des niveaux de droits d\u2019acc\xe8s. Cette section d\xe9crit diff\xe9rentes approches de ce th\xe8me."}),"\n",(0,i.jsx)(s.p,{children:"Dans cet exemple, un utilisateur appartient \xe0 l\u2019un des trois groupes d\xe9finis suivant son niveau de responsabilit\xe9. Les utilisateurs du groupe Comptabilit\xe9 sont responsables de la saisie de donn\xe9es. Les utilisateurs du groupe Dir. finance sont responsables de la mise \xe0 jour des donn\xe9es, comme la mise \xe0 jour d\u2019enregistrements ou la suppression d\u2019enregistrements obsol\xe8tes. Les utilisateurs du groupe Direction g\xe9n\xe9rale sont responsables de l\u2019analyse de donn\xe9es, ce qui inclut la r\xe9alisation de recherches et l\u2019impression d\u2019\xe9tats."}),"\n",(0,i.jsx)(s.p,{children:"Les groupes sont hi\xe9rarchis\xe9s afin que les privil\xe8ges soient correctement affect\xe9s aux utilisateurs de chacun des groupes."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Le groupe Direction g\xe9n\xe9rale ne contient que les utilisateurs de \u201chaut niveau\u201d. ",(0,i.jsx)(s.img,{src:r(206033).A+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Le groupe Dir. finance contient des utilisateurs de la maintenance des donn\xe9es ainsi que ceux de la direction g\xe9n\xe9rale. Les utilisateurs de la direction g\xe9n\xe9rale disposent donc \xe9galement des privil\xe8ges du groupe Finances. ",(0,i.jsx)(s.img,{src:r(784922).A+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Le groupe Comptabilit\xe9 contient des op\xe9rateurs de saisie mais aussi les utilisateurs des groupes Dir. finance et donc Direction g\xe9n\xe9rale. ",(0,i.jsx)(s.img,{src:r(32675).A+"",width:"778",height:"575"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez ensuite d\xe9cider des privil\xe8ges affect\xe9s \xe0 chaque groupe suivant le niveau de responsabilit\xe9 des utilisateurs qu\u2019il contient."}),"\n",(0,i.jsx)(s.p,{children:"Un tel syst\xe8me hi\xe9rarchique rend ais\xe9e l\u2019affectation d\u2019un utilisateur \xe0 un groupe. Il suffit de placer chaque utilisateur dans un groupe et d\u2019utiliser la hi\xe9rarchie des groupes pour d\xe9terminer les acc\xe8s."})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},221020:(e,s,r)=>{var i=r(296540),t=Symbol.for("react.element"),u=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var i,u={},d=null,o=null;for(i in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(o=s.ref),s)n.call(s,i)&&!l.hasOwnProperty(i)&&(u[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===u[i]&&(u[i]=s[i]);return{$$typeof:t,type:e,key:d,ref:o,props:u,_owner:a.current}}s.Fragment=u,s.jsx=d,s.jsxs=d},474848:(e,s,r)=>{e.exports=r(221020)},20132:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},618780:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC"},855912:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png"},675675:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,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"},799315:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD6SURBVChTlZCxS8NQEIffP9tYHVycMlscdXURxLFU0mqhZkqGdhFFaA0FQ15bCLGWpppgqaZ5Lx7JS+AOMvjxm+73DXfHMowV8SN+1/It88vdikRNS5AdJPGB1214RpEz35aZVF0Osjvha6UWGW+XqstB9vXqmdh2xFWXg+yrj6d/2A+fb8R2d2vV5SB7LwV8o1Ivl4+qKEE28C1+m7wH6sl8kEqhpiXUBo5nfbDh6wK/D6A2/9lo5SbkREDZUbqDEy+CUbFGlVPfug2d9yQuNJbI1AidQyyRaF63vZ7AD9jN6oV0dbnfTJm+MMm0LufBkMHtZFoXfWH+AfQdLr4l7+k0AAAAAElFTkSuQmCC"},775747:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADmSURBVChTlZA/C0FhFMbfb+FPYjIafQPKF5AvYDMYfAAlmYzMFG4GZWK6k0RKV4kBq4UUFrm6PN57nRfvqzv49UzP+Q3nHAaFVQ1aEL04llWYJyoFsn1ao+lHw0PpJ/C408hBto3CR31lq9PIQbZHWdXmi30h28PMPza/TLH3Exo5yLZl2t94q4M09QLZ5phHtAK22ongfqNS8GNz2mHb1kJ4WNQIfuyDgYaXNlnVqRQI+7LDogI9RWu804vBKOK8eVkM1hWzkiopafowzfMzGMY5deaWeZmhG1Vbt+hJZt+utG7pRp+KuBb6s9xHMQAAAABJRU5ErkJggg=="},998347:(e,s,r)=>{r.d(s,{A:()=>i});const i="data:image/png;base64,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"},206033:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/schema1-84178d2d3287349910a9a1a80a34f272.png"},784922:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/schema2-fc09440a4cb7bfbc55f3f0aeae5c5ed0.png"},32675:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/schema3-b83a7c0eb98fa319eeb7c0e32a5f6749.png"},28453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>a});var i=r(296540);const t={},u=i.createContext(t);function n(e){const s=i.useContext(u);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(u.Provider,{value:s},e.children)}}}]);