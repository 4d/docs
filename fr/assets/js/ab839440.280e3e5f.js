/*! For license information please see ab839440.280e3e5f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23714],{952027:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var i=n(474848),r=n(28453);const a={id:"settings",title:"Param\xe8tres de sauvegarde"},t=void 0,u={id:"Backup/settings",title:"Param\xe8tres de sauvegarde",description:"Les param\xe8tres de sauvegarde sont d\xe9finis sur trois pages dans la bo\xeete de dialogue des Param\xe8tres. Vous pouvez d\xe9finir :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Backup/settings.md",sourceDirName:"Backup",slug:"/Backup/settings",permalink:"/docs/fr/Backup/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fsettings.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"settings",title:"Param\xe8tres de sauvegarde"},sidebar:"docs",previous:{title:"Sauvegarde",permalink:"/docs/fr/Backup/backup"},next:{title:"Fichier d'historique (.journal)",permalink:"/docs/fr/Backup/log"}},o={},d=[{value:"P\xe9riodicit\xe9",id:"p\xe9riodicit\xe9",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Contenu",id:"contenu",level:3},{value:"Emplacement des fichiers de sauvegarde",id:"emplacement-des-fichiers-de-sauvegarde",level:3},{value:"Gestion du fichier d&#39;historique",id:"gestion-du-fichier-dhistorique",level:3},{value:"Sauvegarde et restitution",id:"sauvegarde-et-restitution",level:2},{value:"Param\xe8tres g\xe9n\xe9raux",id:"param\xe8tres-g\xe9n\xe9raux",level:3},{value:"Archive",id:"archive",level:3},{value:"Restitution automatique et int\xe9gration des journaux",id:"restitution-automatique-et-int\xe9gration-des-journaux",level:3},{value:"Restaurer la derni\xe8re sauvegarde si la base de donn\xe9es est endommag\xe9e",id:"restaurer-la-derni\xe8re-sauvegarde-si-la-base-de-donn\xe9es-est-endommag\xe9e",level:4},{value:"Int\xe9grer les derniers journaux si la base est incompl\xe8te",id:"int\xe9grer-les-derniers-journaux-si-la-base-est-incompl\xe8te",level:4}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Les param\xe8tres de sauvegarde sont d\xe9finis sur trois pages dans la ",(0,i.jsx)(s.a,{href:"/docs/fr/settings/overview",children:"bo\xeete de dialogue des Param\xe8tres"}),". Vous pouvez d\xe9finir :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"la p\xe9riodicit\xe9 des sauvegardes automatiques"}),"\n",(0,i.jsx)(s.li,{children:"les fichiers \xe0 inclure dans chaque sauvegarde"}),"\n",(0,i.jsx)(s.li,{children:"les fonctionnalit\xe9s avanc\xe9es permettant d'ex\xe9cuter des t\xe2ches automatiques"}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Les propri\xe9t\xe9s d\xe9finies dans cette bo\xeete de dialogue sont \xe9crits dans le fichier ",(0,i.jsx)(s.em,{children:"Backup.4DSettings"}),", stock\xe9 dans le ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/architecture#settings-folder",children:"dossier Settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"p\xe9riodicit\xe9",children:"P\xe9riodicit\xe9"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez automatiser les sauvegardes de vos applications ouvertes avec 4D ou 4D Server (m\xeame lorsqu\u2019aucun poste distant n\u2019est connect\xe9). Le principe consiste \xe0 d\xe9finir une fr\xe9quence de sauvegarde (en heures, jours, semaines ou mois) ; \xe0 chaque \xe9ch\xe9ance, 4D d\xe9clenche automatiquement une sauvegarde en tenant compte des param\xe8tres de sauvegarde courants."}),"\n",(0,i.jsxs)(s.p,{children:["Si l\u2019application n\u2019\xe9tait pas lanc\xe9e au moment th\xe9orique de la sauvegarde, 4D consid\xe8re au lancement suivant que la sauvegarde a \xe9chou\xe9 et applique les param\xe9trages ad\xe9quats, d\xe9finis dans les Propri\xe9t\xe9s (cf. ",(0,i.jsx)(s.a,{href:"/docs/fr/Backup/backup#handling-backup-issues",children:"En cas de probl\xe8me au cours de la sauvegarde"}),")."]}),"\n",(0,i.jsxs)(s.p,{children:["Les param\xe8tres des sauvegardes p\xe9riodiques sont d\xe9finis dans la Page ",(0,i.jsx)(s.strong,{children:"Sauvegarde/P\xe9riodicit\xe9"})," des Propri\xe9t\xe9s :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(828333).A+"",width:"862",height:"293"})}),"\n",(0,i.jsxs)(s.p,{children:["Les options regroup\xe9es dans cet onglet permettent de d\xe9finir et de param\xe9trer des sauvegardes p\xe9riodiques automatiques de l'application. Vous pouvez choisir un param\xe9trage standard rapide ou personnaliser enti\xe8rement la p\xe9riodicit\xe9. Diverses options apparaissent en fonction de la valeur d\xe9finie dans le menu ",(0,i.jsx)(s.strong,{children:"Sauvegarde automatique"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Jamais"})," : la fonction de sauvegarde p\xe9riodique est inactiv\xe9e."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toutes les heures"})," : programme une sauvegarde automatique par heure, \xe0 partir de la prochaine heure."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tous les jours"})," : programme une sauvegarde automatique par jour. Une zone de saisie vous permet d'indiquer l\u2019heure \xe0 laquelle la sauvegarde doit \xeatre d\xe9clench\xe9e."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toutes les semaines"})," : programme une sauvegarde automatique par semaine. Deux zones de saisie suppl\xe9mentaires vous permettent d'indiquer le jour et l'heure de la sauvegarde."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tous les mois"})," : programme une sauvegarde automatique par mois. Deux zones de saisie suppl\xe9mentaires vous permettent d'indiquer le jour du mois et l'heure de la sauvegarde."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Personnalis\xe9e"}),' : permet de configurer des sauvegardes p\xe9riodiques "sur-mesure". Lorsque vous s\xe9lectionnez cette, plusieurs zones de saisie suppl\xe9mentaires apparaissent :\n',(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toutes les N heure(s)"})," : permet de programmer des sauvegardes sur une base horaire. Vous pouvez saisir une valeur comprise entre 1 et 24."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tous les N jour(s) \xe0 N"})," : permet de programmer des sauvegardes sur une base journali\xe8re. Saisissez par exemple 1 si vous souhaitez une sauvegarde quotidienne. Lorsque vous cochez cette option, vous devez indiquer l\u2019heure \xe0 laquelle la sauvegarde doit \xeatre d\xe9clench\xe9e."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toutes les N semaine(s), jour \xe0 N"})," : permet de programmer des sauvegardes sur une base hebdomadaire. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jour(s) de la semaine et l\u2019heure \xe0 laquelle chaque sauvegarde doit \xeatre d\xe9clench\xe9e. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour d\xe9finir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tous les N mois, Ne jour \xe0 N"})," : permet de programmer des sauvegardes sur une base mensuelle. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit \xeatre d\xe9clench\xe9e, ainsi que l\u2019heure de d\xe9clenchement."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Les basculements entre l'heure standard et l'heure d'\xe9t\xe9 peuvent affecter temporairement le planificateur automatique et d\xe9clencher la sauvegarde suivante avec un d\xe9calage d'une heure. Cela ne se produit qu'une seule fois et les sauvegardes ult\xe9rieures sont lanc\xe9es \xe0 l'heure pr\xe9vue."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(s.p,{children:"La Page Sauvegarde/Configuration des Propri\xe9t\xe9s permet de d\xe9signer les fichiers \xe0 sauvegarder, l\u2019emplacement des fichiers de sauvegarde et le fichier d\u2019historique. Ces param\xe8res sont sp\xe9cifiques \xe0 chaque application ouverte par 4D ou 4D Server."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(219500).A+"",width:"862",height:"722"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"4D Server"})," : Ces param\xe8tres peuvent \xeatre d\xe9finis depuis le poste 4D Server uniquement."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"contenu",children:"Contenu"}),"\n",(0,i.jsx)(s.p,{children:"Cette zone permet de d\xe9signer les fichiers et/ou dossiers \xe0 copier lors de la prochaine sauvegarde."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data"})," : fichier de donn\xe9es de l'application. Lorsque cette option est coch\xe9e, les \xe9l\xe9ments suivants sont automatiquement sauvegard\xe9s en m\xeame temps que les donn\xe9es :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"le fichier journal courant de l'application (le cas \xe9ch\xe9ant),"}),"\n",(0,i.jsxs)(s.li,{children:["le dossier ",(0,i.jsx)(s.code,{children:"Settings"})," complet situ\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/architecture#settings-folder",children:"\xe0 c\xf4t\xe9 du fichier de donn\xe9es"})," (le cas \xe9ch\xe9ant), c'est-\xe0-dire ",(0,i.jsx)(s.em,{children:"les param\xe8tres utilisateur pour les donn\xe9es"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Structure"})," : fichiers et dossiers du projet d'application. Dans le cas de projets compil\xe9s, cette option permet de sauvegarder le fichier .4dz. Lorsque cette option est coch\xe9e, le dossier complet ",(0,i.jsx)(s.code,{children:"Settings"})," situ\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/architecture#settings-folder-1",children:"au m\xeame niveau que le dossier Project"}),", c'est-\xe0-dire les ",(0,i.jsx)(s.em,{children:"param\xe8tres utilisateur"}),", est automatiquement sauvegard\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Fichier de structure utilisateur (uniquement pour les bases binaires)"})," : ",(0,i.jsx)(s.em,{children:"fonctionnalit\xe9 obsol\xe8te"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Attachments"})," : cette zone permet de d\xe9signer un ensemble de fichiers et/ou de dossiers \xe0 sauvegarder en m\xeame temps que l'application. Ces fichiers peuvent \xeatre de tout type (documents ou mod\xe8les de plug-ins, \xe9tiquettes, \xe9tats, images, etc.). Vous pouvez d\xe9signer soit des fichiers individuels, soit des dossiers dont le contenu sera int\xe9gralement sauvegard\xe9. Chaque \xe9l\xe9ment joint est list\xe9 avec son chemin d\u2019acc\xe8s complet dans la zone \u201cFichiers joints\u201d.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Supprimer"})," : retire de la liste des fichiers joints l\u2019\xe9l\xe9ment s\xe9lectionn\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Ajouter dossier..."})," : affiche une bo\xeete de dialogue permettant de s\xe9lectionner un dossier \xe0 joindre \xe0 la sauvegarde. En cas de restitution, le dossier sera r\xe9cup\xe9r\xe9 avec sa structure interne. Vous pouvez d\xe9signer tout dossier ou volume connect\xe9 au poste, \xe0 l\u2019exception du dossier contenant les fichiers de l'application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Ajouter fichier..."})," : affiche une bo\xeete de dialogue permettant de s\xe9lectionner un fichier \xe0 joindre \xe0 la sauvegarde."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"emplacement-des-fichiers-de-sauvegarde",children:"Emplacement des fichiers de sauvegarde"}),"\n",(0,i.jsx)(s.p,{children:"Cette zone permet de visualiser et de modifier l\u2019emplacement auquel seront stock\xe9s les fichiers de sauvegarde ainsi que les fichiers de sauvegarde du fichier d\u2019historique (le cas \xe9ch\xe9ant)."}),"\n",(0,i.jsx)(s.p,{children:"Pour visualiser l\u2019emplacement des fichiers, cliquez dans la zone afin d\u2019afficher leur chemin d\u2019acc\xe8s sous forme de pop up menu."}),"\n",(0,i.jsxs)(s.p,{children:["Pour modifier l\u2019emplacement auquel ces fichiers devront \xeatre enregistr\xe9s, cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"[...]"}),". Une bo\xeete de dialogue de s\xe9lection de dossier appara\xeet, vous permettant de d\xe9signer un dossier ou un volume devant accueillir les sauvegardes. Les zones \u201cEspace utilis\xe9\u201d et \u201cEspace libre\u201d sont automatiquement mises \xe0 jour et indiquent l\u2019espace disque disponible sur le volume du dossier s\xe9lectionn\xe9."]}),"\n",(0,i.jsx)(s.h3,{id:"gestion-du-fichier-dhistorique",children:"Gestion du fichier d'historique"}),"\n",(0,i.jsxs)(s.p,{children:["L'option ",(0,i.jsx)(s.strong,{children:"Utiliser fichier d 'historique"}),", lorsqu'elle est coch\xe9e, indique que l'application utilise un fichier journal. Le chemin d'acc\xe8s au fichier journal pour le fichier de donn\xe9es courant est sp\xe9cifi\xe9 sous l'option. Lorsque cette option est coch\xe9e, il n\u2019est pas possible d\u2019ouvrir l'application sans fichier d\u2019historique. Pour plus d'informations sur le fichier journal, veuillez consulter ",(0,i.jsx)(s.a,{href:"/docs/fr/Backup/log",children:"fichier d'historique"})]}),"\n",(0,i.jsxs)(s.p,{children:["Par d\xe9faut, tout projet cr\xe9\xe9 avec 4D utilise un fichier d\u2019historique (option coch\xe9e dans la ",(0,i.jsx)(s.strong,{children:"Page G\xe9n\xe9ral"})," des ",(0,i.jsx)(s.strong,{children:"Pr\xe9f\xe9rences"})," de 4D). Le fichier d\u2019historique est nomm\xe9 par d\xe9faut ",(0,i.jsx)(s.em,{children:"data.journal"})," et est plac\xe9 dans le dossier Data."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"L\u2019activation d\u2019un nouveau fichier d\u2019historique n\xe9cessite que les donn\xe9es de l'application soient pr\xe9alablement sauvegard\xe9es. Lorsque vous cochez cette option pour le fichier de donn\xe9es en cours d'utilisation, un message d'avertissement vous informe qu'une sauvegarde est n\xe9cessaire. La cr\xe9ation du fichier d\u2019historique est diff\xe9r\xe9e et ne sera effective qu\u2019apr\xe8s la prochaine sauvegarde de l'application."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sauvegarde-et-restitution",children:"Sauvegarde et restitution"}),"\n",(0,i.jsx)(s.p,{children:"La modification des options de sauvegarde et de restauration est facultative. Leurs valeurs par d\xe9faut correspondent \xe0 une utilisation standard de la fonction."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(738299).A+"",width:"862",height:"644"})}),"\n",(0,i.jsx)(s.h3,{id:"param\xe8tres-g\xe9n\xe9raux",children:"Param\xe8tres g\xe9n\xe9raux"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Conserver uniquement les N derniers fichiers de sauvegarde"})," : ce param\xe8tre permet d\u2019activer et de configurer le m\xe9canisme de suppression des fichiers de sauvegarde les plus anciens, afin d\u2019\xe9viter tout risque de saturation du volume. Le principe de fonctionnement est le suivant : apr\xe8s avoir termin\xe9 la sauvegarde courante, 4D efface l\u2019archive la plus ancienne si celle-ci est localis\xe9e au m\xeame endroit que l\u2019archive \xe0 sauvegarder et porte le m\xeame nom (vous pouvez, pour des raisons d\u2019\xe9conomie de place, demander que l\u2019archive la plus ancienne soit effac\xe9e avant la sauvegarde).\nSi, par exemple, le nombre de jeux est fix\xe9 \xe0 3, les trois premi\xe8res sauvegardes cr\xe9ent successivement les archives MaBase-0001, MaBase-0002 et MaBase-0003. Lors de la quatri\xe8me sauvegarde, l\u2019archive MaBase-0004 est cr\xe9\xe9e alors que l\u2019archive MaBase-0001 est supprim\xe9e. Par d\xe9faut, le m\xe9canisme de suppression des jeux est activ\xe9 et 4D conserve 3 jeux de sauvegarde.\nPour ne pas activer le m\xe9canisme, d\xe9s\xe9lectionnez l\u2019option."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Ce param\xe8tre concerne \xe0 la fois les sauvegardes de l'application et les sauvegardes de l\u2019historique."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Sauvegarder uniquement si le fichier de donn\xe9es a \xe9t\xe9 modifi\xe9"})," : lorsque cette option est coch\xe9e, 4D d\xe9clenche les sauvegardes p\xe9riodiques uniquement si des donn\xe9es ont \xe9t\xe9 ajout\xe9es, modifi\xe9es ou supprim\xe9es depuis la derni\xe8re sauvegarde. Dans le cas contraire, la sauvegarde pr\xe9vue est annul\xe9e et report\xe9e \xe0 l\u2019\xe9ch\xe9ance suivante. Aucune erreur n\u2019est g\xe9n\xe9r\xe9e ; le report est toutefois indiqu\xe9 dans le Journal des sauvegardes. Cette option permet notamment d\u2019\xe9conomiser du temps machine sur la sauvegarde d'applications principalement utilis\xe9es en consultation. A noter qu'elle ne prend pas en compte les \xe9ventuelles modifications apport\xe9es au fichier de structure ou aux fichiers joints."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Ce param\xe8tre concerne \xe0 la fois les sauvegardes de l'application et les sauvegardes de l\u2019historique."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Effacer la sauvegarde la plus ancienne avant sauvegarde / apr\xe8s sauvegarde"})," : cette option n\u2019est utilis\xe9e que si l\u2019option \u201cConserver uniquement les N derniers fichiers de sauvegarde\u201d est coch\xe9e. Elle vous permet de sp\xe9cifier si 4D doit commencer par effacer l\u2019archive la plus ancienne avant d\u2019effectuer une sauvegarde (option ",(0,i.jsx)(s.strong,{children:"avant"}),") ou si l\u2019effacement doit \xeatre effectu\xe9 apr\xe8s la sauvegarde (option ",(0,i.jsx)(s.strong,{children:"apr\xe8s"}),"). Pour que ce m\xe9canisme fonctionne, l\u2019archive la plus ancienne ne doit pas avoir \xe9t\xe9 renomm\xe9e ou d\xe9plac\xe9e."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Si la sauvegarde \xe9choue"})," : cette option permet de d\xe9finir le m\xe9canisme de prise en charge des \xe9checs des sauvegardes (sauvegarde impossible). Lorsqu\u2019une sauvegarde est impossible, 4D permet d\u2019effectuer une nouvelle tentative."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"R\xe9essayer \xe0 la nouvelle date et heure programm\xe9e"})," : cette option n\u2019a de sens que dans le cadre de sauvegardes automatiques p\xe9riodiques. Elle revient \xe0 annuler la sauvegarde ayant \xe9chou\xe9. Une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"R\xe9essayer dans N seconde(s), minute(s) ou heure(s)"})," : lorsque cette option est coch\xe9e, une nouvelle tentative de sauvegarde est effectu\xe9e \xe0 l\u2019issue du d\xe9lai d\xe9fini. Ce m\xe9canisme permet d\u2019anticiper certaines circonstances bloquant la sauvegarde. Vous pouvez fixer un d\xe9lai en secondes, minutes ou heures \xe0 l\u2019aide du menu correspondant. Si la nouvelle tentative \xe9choue \xe9galement, une erreur est g\xe9n\xe9r\xe9e et l\u2019\xe9chec est inscrit dans les zones de statut de la derni\xe8re sauvegarde et dans le Journal des sauvegardes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Annuler l\u2019op\xe9ration au bout de N tentatives"})," : ce param\xe8tre permet de d\xe9finir le nombre de fois que le module de sauvegarde r\xe9essaiera de lancer la sauvegarde en cas d\u2019\xe9chec. Si, \xe0 l\u2019issue du nombre d\u2019essais d\xe9fini, la sauvegarde n\u2019a pas pu \xeatre effectu\xe9e, elle est annul\xe9e et l\u2019erreur 1401 est g\xe9n\xe9r\xe9e (\u201cLe nombre maximal de tentatives de sauvegarde est atteint, la sauvegarde automatique est temporairement d\xe9sactiv\xe9e\u201d). Dans ce cas, aucune nouvelle sauvegarde automatique ne sera lanc\xe9e tant que l\u2019application n\u2019aura pas \xe9t\xe9 red\xe9marr\xe9e ou qu\u2019une sauvegarde manuelle n\u2019aura \xe9t\xe9 effectu\xe9e avec succ\xe8s.\nCe param\xe8tre est utile notamment pour \xe9viter qu\u2019en cas d\u2019impossibilit\xe9 prolong\xe9e de la sauvegarde (n\xe9cessitant une intervention humaine), l\u2019application n\u2019effectue inutilement de nombreuses tentatives au d\xe9triment de ses performances. Par d\xe9faut, ce param\xe8tre n\u2019est pas coch\xe9."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"4D consid\xe8re qu\u2019une sauvegarde a \xe9chou\xe9 si l'application n\u2019\xe9tait pas lanc\xe9e au moment th\xe9orique de la sauvegarde automatique p\xe9riodique."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"archive",children:"Archive"}),"\n",(0,i.jsx)(s.p,{children:"Ces options s\u2019appliquent aux fichiers de sauvegarde principaux et aux fichiers de sauvegarde de l\u2019historique."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Segment Size (Mb)"})," 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Ce fonctionnement permet par exemple de stocker une sauvegarde sur plusieurs volumes (DVDs, usb, etc.). Au moment de la restitution, 4D fusionnera automatiquement les segments. Chaque segment est appel\xe9 MonApplication[xxxx-yyyy].4BK, o\xf9 xxxx repr\xe9sente le num\xe9ro de la sauvegarde et yyyy celui du segment. Par exemple, les trois segments de la sixi\xe8me sauvegarde de la base MonApplication seront appel\xe9s MonApplication[0006-0001].4BK, MonApplication[0006-0002].4BK et MonApplication[0006-0003].4BK.\nLe menu ",(0,i.jsx)(s.strong,{children:"Taille du segment"})," est une combo box permettant de d\xe9finir la taille en Mo de chaque segment de sauvegarde. Vous pouvez choisir une des tailles pr\xe9d\xe9finies ou saisir une taille sp\xe9cifique entre 0 et 2048. Si vous passez 0, aucune segmentation n\u2019est effectu\xe9e (\xe9quivaut \xe0 la valeur ",(0,i.jsx)(s.strong,{children:"Aucune"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Compression Rate"})," By default, 4D compresses backups to help save disk space. En contrepartie, la phase de compression des fichiers peut ralentir sensiblement les sauvegardes dans le cas de la manipulation de gros volumes de donn\xe9es. L\u2019option ",(0,i.jsx)(s.strong,{children:"Taux de compression"})," vous permet d\u2019ajuster la compression :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Aucun"})," : aucune compression n\u2019est appliqu\xe9e. La sauvegarde peut \xeatre sensiblement plus rapide mais les fichiers d\u2019archives sont plus volumineux sur le disque."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Normal"})," (par d\xe9faut) : cette option constitue un compromis vitesse de sauvegarde/taille des archives."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Elev\xe9"})," : le taux de compression maximal est appliqu\xe9 aux archives. Les fichiers d\u2019archives prennent le moins de place possible sur le disque mais la sauvegarde peut \xeatre sensiblement ralentie."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Taux d\u2019entrelacement et Taux de redondance"})," 4D peut g\xe9n\xe9rer des archives \xe0 l\u2019aide d\u2019algorithmes sp\xe9cifiques, bas\xe9s sur des m\xe9canismes d\u2019optimisation (entrelacement) et de s\xe9curisation (redondance). Vous pouvez param\xe9trer ces m\xe9canismes en fonction de vos besoins. Les menus associ\xe9s \xe0 ces options vous permettent de choisir un taux ",(0,i.jsx)(s.strong,{children:"Faible"}),", ",(0,i.jsx)(s.strong,{children:"Moyen"}),", ",(0,i.jsx)(s.strong,{children:"Elev\xe9"})," ou ",(0,i.jsx)(s.strong,{children:"Aucun"})," (d\xe9faut)."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Taux d\u2019entrelacement"})," : l\u2019entrelacement consiste \xe0 stocker les donn\xe9es dans des secteurs non contigus afin de limiter les risques en cas d\u2019endommagement des secteurs. Plus le taux est \xe9lev\xe9, plus la s\xe9curit\xe9 est \xe9lev\xe9e ; en contrepartie, le traitement des donn\xe9es consomme davantage de m\xe9moire."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Taux de redondance"})," : la redondance permet de s\xe9curiser les donn\xe9es pr\xe9sentes dans un fichier en r\xe9p\xe9tant plusieurs fois les m\xeames informations. Plus le taux est \xe9lev\xe9, plus le fichier est s\xe9curis\xe9, mais plus le stockage est lent et la taille du fichier importante."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"restitution-automatique-et-int\xe9gration-des-journaux",children:"Restitution automatique et int\xe9gration des journaux"}),"\n",(0,i.jsx)(s.h4,{id:"restaurer-la-derni\xe8re-sauvegarde-si-la-base-de-donn\xe9es-est-endommag\xe9e",children:"Restaurer la derni\xe8re sauvegarde si la base de donn\xe9es est endommag\xe9e"}),"\n",(0,i.jsx)(s.p,{children:"Lorsque cette option est coch\xe9e, le programme d\xe9marre automatiquement la restitution du fichier de donn\xe9es de la derni\xe8re sauvegarde valide de l'application, si une anomalie est d\xe9tect\xe9e (fichier corrompu, par exemple) lors du lancement de l'application. Aucune intervention de l\u2019utilisateur n\u2019est requise ; l\u2019op\xe9ration est cependant consign\xe9e dans le Journal des sauvegardes."}),"\n",(0,i.jsx)(s.h4,{id:"int\xe9grer-les-derniers-journaux-si-la-base-est-incompl\xe8te",children:"Int\xe9grer les derniers journaux si la base est incompl\xe8te"}),"\n",(0,i.jsx)(s.p,{children:"Lorsque cette option est coch\xe9e, le programme int\xe8gre automatiquement le fichier journal courant s'il contient des op\xe9rations qui ne sont pas pr\xe9sentes dans le fichier de donn\xe9es. S'il existe une s\xe9quence valide de fichiers .journal dans le m\xeame dossier, le programme int\xe8gre au pr\xe9alable tous les fichiers .journal n\xe9cessaires, du plus ancien au plus r\xe9cent. Cette situation se pr\xe9sente, par exemple, si une panne de courant survient alors que des op\xe9rations dans le cache de donn\xe9es n'ont pas encore \xe9t\xe9 \xe9crites sur le disque, ou apr\xe8s qu'une anomalie a \xe9t\xe9 d\xe9tect\xe9e lors de l'ouverture du fichier de donn\xe9es et qu'une restitution a eu lieu."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Cette fonction implique que le programme analyse tous les fichiers journaux dans le dossier des fichiers journaux courant au d\xe9marrage. Par cons\xe9quent, pour des raisons de performance, assurez-vous qu'aucun fichier journal inutile n'est stock\xe9 dans ce dossier."})}),"\n",(0,i.jsx)(s.p,{children:"Aucune bo\xeete de dialogue n\u2019est pr\xe9sent\xe9e \xe0 l\u2019utilisateur, l\u2019op\xe9ration est enti\xe8rement automatique. Le but est de faciliter au maximum la remise en route de l\u2019exploitation. L\u2019op\xe9ration est consign\xe9e dans le Journal des sauvegardes."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"En cas de restitution automatique, seuls les \xe9l\xe9ments suivants sont restitu\xe9s :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Fichier .4DD"}),"\n",(0,i.jsx)(s.li,{children:"Fichier .4DIndx"}),"\n",(0,i.jsx)(s.li,{children:"Fichier .4DSyncData"}),"\n",(0,i.jsx)(s.li,{children:"Fichier .4DSyncHeader"}),"\n",(0,i.jsx)(s.li,{children:"Dossier External Data"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous souhaitez obtenir les fichiers joints ou les fichiers de projet, vous devez effectuer une ",(0,i.jsx)(s.a,{href:"/docs/fr/Backup/restore#manually-restoring-a-backup-standard-dialog",children:"restauration manuelle"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["Si le ",(0,i.jsx)(s.a,{href:"/docs/fr/MSC/encrypt",children:"fichier de donn\xe9es est chiffr\xe9"}),", assurez-vous d'avoir ",(0,i.jsx)(s.a,{href:"../MSC/encrypt#saving-the-encryption-key",children:"enregistr\xe9 la cl\xe9 de cryptage des donn\xe9es"})," dans un fichier ",(0,i.jsx)(s.code,{children:".4DKeyChain"})," stock\xe9 au premier niveau du disque, de sorte que 4D puisse y acc\xe9der si la fonction de restitution automatique se d\xe9clenche. Dans le cas contraire, une erreur sera renvoy\xe9e pendant la s\xe9quence de restitution."]})})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,s,n)=>{var i=n(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var i,a={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,i)&&!o.hasOwnProperty(i)&&(a[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===a[i]&&(a[i]=s[i]);return{$$typeof:r,type:e,key:d,ref:l,props:a,_owner:u.current}}s.Fragment=a,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},828333:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},219500:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/backup032-7ee9866f79fb676400133c5d3a13b660.png"},738299:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>u});var i=n(296540);const r={},a=i.createContext(r);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);