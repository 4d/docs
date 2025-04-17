"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65855"],{193327:function(e,n,a){a.r(n),a.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>u});var s=JSON.parse('{"id":"Backup/backup","title":"Sauvegarde","description":"Une sauvegarde peut \xeatre d\xe9clench\xe9e de trois mani\xe8res :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Backup/backup.md","sourceDirName":"Backup","slug":"/Backup/backup","permalink":"/docs/fr/20-R8/Backup/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"backup","slug":"backup","title":"Sauvegarde"},"sidebar":"docs","previous":{"title":"Sauvegarde et restitution","permalink":"/docs/fr/20-R8/Backup/overview"},"next":{"title":"Param\xe8tres de sauvegarde","permalink":"/docs/fr/20-R8/Backup/settings"}}'),r=a("785893"),t=a("250065");let i={id:"backup",slug:"backup",title:"Sauvegarde"},u=void 0,l={},d=[{value:"Sauvegarde manuelle",id:"sauvegarde-manuelle",level:2},{value:"Sauvegarde automatique p\xe9riodique",id:"sauvegarde-automatique-p\xe9riodique",level:2},{value:"Commande BACKUP",id:"commande-backup",level:2},{value:"D\xe9roulement de la sauvegarde",id:"d\xe9roulement-de-la-sauvegarde",level:2},{value:"Acc\xe8s \xe0 l&#39;application durant la sauvegarde",id:"acc\xe8s-\xe0-lapplication-durant-la-sauvegarde",level:3},{value:"En cas de probl\xe8me au cours de la sauvegarde",id:"en-cas-de-probl\xe8me-au-cours-de-la-sauvegarde",level:3},{value:"Journal de sauvegarde (Backup Journal)",id:"journal-de-sauvegarde-backup-journal",level:2},{value:"Gestion de la taille du journal de sauvegarde",id:"gestion-de-la-taille-du-journal-de-sauvegarde",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Une sauvegarde peut \xeatre d\xe9clench\xe9e de trois mani\xe8res :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Manuellement, via la commande ",(0,r.jsx)(n.strong,{children:"Sauvegarde..."})," du menu ",(0,r.jsx)(n.strong,{children:"Fichier"})," de 4D ou le bouton ",(0,r.jsx)(n.strong,{children:"Sauvegarde"})," du ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/backup",children:"Centre de s\xe9curit\xe9 et de maintenance (CSM)"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Automatiquement, via le programmateur param\xe9trable dans les Propri\xe9t\xe9s,"}),"\n",(0,r.jsxs)(n.li,{children:["Par programmation, \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.code,{children:"BACKUP"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["4D Server : Il est possible de d\xe9clencher \u201Cmanuellement\u201D une sauvegarde depuis un poste distant, via une m\xe9thode appelant la commande ",(0,r.jsx)(n.code,{children:"BACKUP"}),". Dans tous les cas, la commande sera ex\xe9cut\xe9e sur le serveur."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sauvegarde-manuelle",children:"Sauvegarde manuelle"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Choisissez la commande ",(0,r.jsx)(n.strong,{children:"Sauvegarde..."})," dans le menu ",(0,r.jsx)(n.strong,{children:"Fichier"})," de 4D.\nLa fen\xeatre de sauvegarde s'affiche:\n",(0,r.jsx)(n.img,{src:a(658525).Z+"",width:"564",height:"192"}),'\nVous pouvez voir l\'emplacement du dossier de sauvegarde en utilisant le menu d\xe9roulant \xe0 c\xf4t\xe9 de la zone "Destination de la sauvegarde". Cet emplacement est d\xe9fini dans la Page ',(0,r.jsx)(n.strong,{children:"Sauvegarde/Configuration"})," des Propri\xe9t\xe9s de la base."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Vous pouvez \xe9galement s\xe9lectionner ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/overview",children:"Centre de s\xe9curit\xe9 et de maintenance"})," de 4D et afficher la ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/backup",children:"Page Sauvegarde"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Le bouton ",(0,r.jsx)(n.strong,{children:"Propri\xe9t\xe9s de la base..."})," provoque l\u2019affichage de la bo\xeete de dialogue des Propri\xe9t\xe9s de structure."]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Cliquez sur le bouton ",(0,r.jsx)(n.strong,{children:"Sauvegarde"})," pour d\xe9clencher la sauvegarde avec les param\xe8tres courants."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sauvegarde-automatique-p\xe9riodique",children:"Sauvegarde automatique p\xe9riodique"}),"\n",(0,r.jsxs)(n.p,{children:["Les sauvegardes p\xe9riodiques sont d\xe9clench\xe9es automatiquement. Elles sont configur\xe9es dans la Page ",(0,r.jsx)(n.strong,{children:"Sauvegarde/P\xe9riodicit\xe9"})," des ",(0,r.jsx)(n.strong,{children:"Propri\xe9t\xe9s"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Les sauvegardes s'effectuent automatiquement au moment d\xe9fini, sans intervention de l\u2019utilisateur. Pour plus d\u2019informations sur le fonctionnement de cette bo\xeete de dialogue, reportez-vous \xe0 la section ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/Backup/settings#scheduler",children:"D\xe9finir des sauvegardes p\xe9riodiques"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"commande-backup",children:"Commande BACKUP"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque la commande ",(0,r.jsx)(n.code,{children:"BACKUP"})," est ex\xe9cut\xe9e depuis une m\xe9thode, la sauvegarde est alors d\xe9clench\xe9e avec les param\xe8tres courants d\xe9finis dans les propri\xe9t\xe9s. Vous pouvez utiliser la M\xe9thode base ",(0,r.jsx)(n.code,{children:"On Backup Startup"})," et ",(0,r.jsx)(n.code,{children:"On Backup Shutdown"})," afin de contr\xf4ler le d\xe9roulement de la sauvegarde (cf. le manuel ",(0,r.jsx)(n.em,{children:"Langage de 4D"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"d\xe9roulement-de-la-sauvegarde",children:"D\xe9roulement de la sauvegarde"}),"\n",(0,r.jsx)(n.p,{children:"Une fois qu\u2019une sauvegarde a \xe9t\xe9 d\xe9clench\xe9e, 4D affiche une bo\xeete de dialogue comportant un thermom\xe8tre indiquant la progression de l\u2019op\xe9ration :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(911557).Z+"",width:"408",height:"168"})}),"\n",(0,r.jsxs)(n.p,{children:["Le thermom\xe8tre est \xe9galement affich\xe9 en bas de la page ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/backup",children:"\u201CSauvegarde\u201D du CSM"})," si vous avez utilis\xe9 cette bo\xeete de dialogue."]}),"\n",(0,r.jsxs)(n.p,{children:["Le bouton ",(0,r.jsx)(n.strong,{children:"Arr\xeater"})," permet \xe0 l\u2019utilisateur d\u2019interrompre la sauvegarde \xe0 tout instant (cf. paragraphe ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/Backup/backup#handling-backup-issues",children:"En cas de probl\xe8me au cours de la sauvegarde"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:['Le compte-rendu de la derni\xe8re sauvegarde (succ\xe8s ou \xe9chec) est stock\xe9 dans la zone "Informations sur la derni\xe8re sauvegarde" dans la ',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/backup",children:"Page Sauvegarde du CSM"})," ou dans la ",(0,r.jsx)(n.strong,{children:"Page de maintenance"})," de 4D Server. Il est \xe9galement enregistr\xe9 dans le ",(0,r.jsx)(n.strong,{children:"Backup journal.txt"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"acc\xe8s-\xe0-lapplication-durant-la-sauvegarde",children:"Acc\xe8s \xe0 l'application durant la sauvegarde"}),"\n",(0,r.jsx)(n.p,{children:"4D verrouille les process li\xe9s aux types de fichiers inclus dans la sauvegarde : si seul le fichier de structure est sauvegard\xe9, l\u2019acc\xe8s \xe0 la structure est impossible mais l\u2019acc\xe8s aux donn\xe9es est autoris\xe9. Pendant la sauvegarde, les acc\xe8s \xe0 l'application sont restreints par 4D en fonction du contexte."}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019inverse, si seul le fichier de donn\xe9es est sauvegard\xe9, l\u2019acc\xe8s \xe0 la structure reste autoris\xe9. Dans ce cas, les possibilit\xe9s d\u2019acc\xe8s \xe0 l'application sont les suivantes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avec 4D version monoposte, l'application est verrouill\xe9e en lecture et en \xe9criture, tous les process sont gel\xe9s. Toute action est alors impossible."}),"\n",(0,r.jsxs)(n.li,{children:["Avec 4D Server, l'application est verrouill\xe9e uniquement en \xe9criture, les postes clients peuvent consulter les donn\xe9es. Si un poste client envoie une requ\xeate d\u2019ajout, de suppression ou de modification au serveur, il obtient une fen\xeatre l\u2019invitant \xe0 attendre la fin de la sauvegarde. Une fois l'application sauvegard\xe9e, la fen\xeatre dispara\xeet d\u2019elle-m\xeame et l\u2019action est ex\xe9cut\xe9e. Pour annuler la requ\xeate en cours et ne pas avoir \xe0 attendre la fin de la sauvegarde, il suffit de cliquer sur le bouton ",(0,r.jsx)(n.strong,{children:"Annuler l\u2019op\xe9ration"}),". Cependant, si l\u2019action en attente provient d\u2019une m\xe9thode lanc\xe9e avant la sauvegarde, il est d\xe9conseill\xe9 de l\u2019annuler car seules les op\xe9rations restant \xe0 effectuer seront annul\xe9es. Or, une m\xe9thode \u201C\xe0 moiti\xe9\u201D ex\xe9cut\xe9e peut conduire \xe0 des incoh\xe9rences logiques dans les donn\xe9es."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Lorsque l\u2019action en attente provient d\u2019une m\xe9thode et que l\u2019utilisateur clique sur le bouton ",(0,r.jsx)(n.strong,{children:"Annuler l\u2019op\xe9ration"}),", 4D Server renvoie l\u2019erreur -9976 (Cette commande ne peut \xeatre ex\xe9cut\xe9e car la base est en cours de sauvegarde)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"en-cas-de-probl\xe8me-au-cours-de-la-sauvegarde",children:"En cas de probl\xe8me au cours de la sauvegarde"}),"\n",(0,r.jsx)(n.p,{children:"Il est possible qu'une sauvegarde ne s\u2019effectue pas correctement. Les causes de l\u2019\xe9chec peuvent \xeatre diverses : interruption par l\u2019utilisateur, fichier joint introuvable, disque de destination d\xe9faillant, transaction non termin\xe9e, etc. 4D traite l'incident selon la cause de l'\xe9chec."}),"\n",(0,r.jsxs)(n.p,{children:["Dans tous les cas, gardez \xe0 l'esprit que le statut de la derni\xe8re sauvegarde (r\xe9ussie ou \xe9chou\xe9e) est stock\xe9 dans la zone Informations sur la derni\xe8re sauvegarde de la ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/MSC/backup",children:"page Sauvegarde du CSM"})," ou dans la page ",(0,r.jsx)(n.strong,{children:"Maintenance"})," de 4D Server, ainsi que dans le ",(0,r.jsx)(n.strong,{children:"Backup journal.txt"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Automatiquement, via le programmateur param\xe9trable dans les Propri\xe9t\xe9s, Dans ce cas, la copie des \xe9l\xe9ments est stopp\xe9e et l'erreur 1406 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur dans la M\xe9thode base ",(0,r.jsx)(n.code,{children:"On Backup Shutdown"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fichier joint introuvable"})," : lorsqu\u2019un fichier joint est introuvable, 4D effectue une sauvegarde partielle (sauvegarde des fichiers de l'application et des fichiers joints accessibles) et retourne une erreur."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sauvegarde impossible"})," (disque plein ou prot\xe9g\xe9 en \xe9criture, disque manquant, panne du disque, transaction non termin\xe9e, projet non lanc\xe9 au moment d\u2019une sauvegarde automatique p\xe9riodique, etc.) : S\u2019il s\u2019agit du premier \xe9chec, 4D effectuera ult\xe9rieurement une seconde tentative. Le d\xe9lai d\u2019attente entre les deux tentatives est d\xe9fini dans la Page ",(0,r.jsx)(n.strong,{children:"Sauvegarde/Sauvegarde& et Restitution"})," des Propri\xe9t\xe9s.\nSi la seconde tentative \xe9choue \xe9galement, une bo\xeete de dialogue d\u2019alerte syst\xe8me est affich\xe9e et une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur dans la M\xe9thode base ",(0,r.jsx)(n.code,{children:"On Backup Shutdown"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"journal-de-sauvegarde-backup-journal",children:"Journal de sauvegarde (Backup Journal)"}),"\n",(0,r.jsx)(n.p,{children:"Pour faciliter le suivi et la v\xe9rification des sauvegardes, le module de sauvegarde r\xe9sume chaque op\xe9ration effectu\xe9e dans un fichier sp\xe9cial, similaire \xe0 un journal d'activit\xe9. Comme un manuel int\xe9gr\xe9, toutes les op\xe9rations de la base de donn\xe9es (sauvegardes, restaurations, int\xe9grations de fichiers d'historique) sont consign\xe9es dans ce fichier, qu\u2019elles aient \xe9t\xe9 planifi\xe9es ou ex\xe9cut\xe9es manuellement. La date et l'heure auxquelles ces op\xe9rations ont eu lieu sont \xe9galement not\xe9es dans le journal."}),"\n",(0,r.jsx)(n.p,{children:'Le journal de sauvegarde s\'appelle "Backup Journal[001].txt" et se trouve dans le dossier "Logs" du projet. Le journal de sauvegarde peut \xeatre ouvert avec n\'importe quel \xe9diteur de texte.'}),"\n",(0,r.jsx)(n.h4,{id:"gestion-de-la-taille-du-journal-de-sauvegarde",children:"Gestion de la taille du journal de sauvegarde"}),"\n",(0,r.jsx)(n.p,{children:"Dans certaines strat\xe9gies de sauvegarde (par exemple, dans le cas o\xf9 de nombreuses pi\xe8ces jointes sont sauvegard\xe9es), le journal de sauvegarde peut rapidement atteindre une taille importante. Deux m\xe9canismes peuvent \xeatre utilis\xe9s pour g\xe9rer cette taille :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sauvegarde automatique"})," : Avant chaque sauvegarde, l'application examine la taille du fichier backup journal courant. Si elle est sup\xe9rieure \xe0 10 Mo, le fichier courant est archiv\xe9 et un nouveau fichier est cr\xe9\xe9 avec le num\xe9ro [xxx] incr\xe9ment\xe9, par exemple \"Backup Journal[002] .txt\u201D. Une fois le num\xe9ro de fichier 999 atteint, la num\xe9rotation reprend \xe0 1 et les fichiers existants seront remplac\xe9s."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Possibilit\xe9 de r\xe9duire la quantit\xe9 d'informations enregistr\xe9es"})," : Pour ce faire, il suffit de modifier la valeur de la cl\xe9 ",(0,r.jsx)(n.code,{children:"VerboseMode"})," dans le fichier ",(0,r.jsx)(n.em,{children:"Backup.4DSettings"})," du projet. Par d\xe9faut, cette cl\xe9 est d\xe9finie sur True. Si vous d\xe9finissez la valeur de cette cl\xe9 sur False, seules les informations principales sont stock\xe9es dans le journal de sauvegarde : la date et l'heure du d\xe9but de l'op\xe9ration et les \xe9ventuelles erreurs g\xe9n\xe9r\xe9es. Les cl\xe9s XML concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.jsx)(n.em,{children:"Sauvegarde des cl\xe9s XML 4D"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backuphistoryjson",children:"backupHistory.json"}),"\n",(0,r.jsxs)(n.p,{children:["Toutes les informations concernant les derni\xe8res op\xe9rations de sauvegarde et de restitution sont stock\xe9es dans le fichier ",(0,r.jsx)(n.strong,{children:"backupHistory.json"})," de l'application. Ce dernier enregistre le chemin de chaque fichier sauvegard\xe9 (y compris les pi\xe8ces jointes) ainsi que le num\xe9ro, la date, l'heure, la dur\xe9e et le statut de chaque op\xe9ration. Afin de limiter la taille du fichier, le nombre d'op\xe9rations enregistr\xe9es et le nombre de sauvegardes disponibles (\"Keep only the last X backup files\") d\xe9finies dans les propri\xe9t\xe9s de sauvegarde est identique."]}),"\n",(0,r.jsxs)(n.p,{children:["Le fichier ",(0,r.jsx)(n.strong,{children:"backupHistory.json"})," se situe dans le dossier de destination de sauvegarde courant. Vous pouvez obtenir le chemin de ce fichier \xe0 l'aide de la d\xe9claration suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$backupHistory:=Get 4D file(Backup history file)\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ATTENTION"}),(0,r.jsx)(n.br,{}),"\nSupprimer ou d\xe9placer le fichier ",(0,r.jsx)(n.strong,{children:"backupHistory.json"})," entra\xeenera la r\xe9initialisation du prochain num\xe9ro de sauvegarde."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Le fichier ",(0,r.jsx)(n.strong,{children:"backupHistory.json"})," est format\xe9 afin d'\xeatre utilis\xe9 par l'application 4D. Si vous recherchez un \xe9tat lisible sur les op\xe9rations de sauvegarde, le journal de sauvegarde sera plus pr\xe9cis."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},658525:function(e,n,a){a.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},911557:function(e,n,a){a.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,a){a.d(n,{Z:function(){return u},a:function(){return i}});var s=a(667294);let r={},t=s.createContext(r);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);