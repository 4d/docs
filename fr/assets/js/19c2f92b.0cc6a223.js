"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66041],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,v=p["".concat(i,".").concat(m)]||p[m]||c[m]||u;return a?r.createElement(v,s(s({ref:t},d),{},{components:a})):r.createElement(v,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,s=new Array(u);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<u;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},381020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});a(667294);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"backup",slug:"backup",title:"Sauvegarde"},l=void 0,i={unversionedId:"Backup/backup",id:"version-20-R3/Backup/backup",title:"Sauvegarde",description:"Une sauvegarde peut \xeatre d\xe9clench\xe9e de trois mani\xe8res :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/fr/Backup/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"backup",slug:"backup",title:"Sauvegarde"},sidebar:"docs",previous:{title:"Sauvegarde et restitution",permalink:"/docs/fr/Backup/overview"},next:{title:"Pr\xe9f\xe9rences de sauvegarde",permalink:"/docs/fr/Backup/settings"}},o={},d=[{value:"Sauvegarde manuelle",id:"sauvegarde-manuelle",level:2},{value:"Sauvegarde automatique p\xe9riodique",id:"sauvegarde-automatique-p\xe9riodique",level:2},{value:"Commande BACKUP",id:"commande-backup",level:2},{value:"D\xe9roulement de la sauvegarde",id:"d\xe9roulement-de-la-sauvegarde",level:2},{value:"Acc\xe8s \xe0 l&#39;application durant la sauvegarde",id:"acc\xe8s-\xe0-lapplication-durant-la-sauvegarde",level:3},{value:"En cas de probl\xe8me au cours de la sauvegarde",id:"en-cas-de-probl\xe8me-au-cours-de-la-sauvegarde",level:3},{value:"Journal de sauvegarde (Backup Journal)",id:"journal-de-sauvegarde-backup-journal",level:2},{value:"Gestion de la taille du journal de sauvegarde",id:"gestion-de-la-taille-du-journal-de-sauvegarde",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}],c={toc:d};function p(e){var{components:t}=e,s=u(e,["components"]);return(0,r.kt)("wrapper",n({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Une sauvegarde peut \xeatre d\xe9clench\xe9e de trois mani\xe8res :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manuellement, via la commande ",(0,r.kt)("strong",{parentName:"li"},"Sauvegarde...")," du menu ",(0,r.kt)("strong",{parentName:"li"},"Fichier")," de 4D ou le bouton ",(0,r.kt)("strong",{parentName:"li"},"Sauvegarde")," du ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/MSC/backup"}),"Centre de s\xe9curit\xe9 et de maintenance (CSM)"),"."),(0,r.kt)("li",{parentName:"ul"},"Automatiquement, via le programmateur param\xe9trable dans les Propri\xe9t\xe9s,"),(0,r.kt)("li",{parentName:"ul"},"Par programmation, \xe0 l\u2019aide de la commande ",(0,r.kt)("inlineCode",{parentName:"li"},"BACKUP"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"4D Server : Il est possible de d\xe9clencher \u201cmanuellement\u201d une sauvegarde depuis un poste distant, via une m\xe9thode appelant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP"),". Dans tous les cas, la commande sera ex\xe9cut\xe9e sur le serveur.")),(0,r.kt)("h2",n({},{id:"sauvegarde-manuelle"}),"Sauvegarde manuelle"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choisissez la commande ",(0,r.kt)("strong",{parentName:"li"},"Sauvegarde...")," dans le menu ",(0,r.kt)("strong",{parentName:"li"},"Fichier")," de 4D. The backup window appears: ",(0,r.kt)("img",{src:a(416254).Z,width:"564",height:"192"}),' You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Cet emplacement est d\xe9fini dans la Page ',(0,r.kt)("strong",{parentName:"li"},"Sauvegarde/Configuration")," des Propri\xe9t\xe9s de la base.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vous pouvez \xe9galement s\xe9lectionner ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/MSC/overview"}),"Centre de s\xe9curit\xe9 et de maintenance")," de 4D et afficher la ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/MSC/backup"}),"Page Sauvegarde"),".")),(0,r.kt)("p",null,"Le bouton ",(0,r.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s de la base...")," provoque l\u2019affichage de la bo\xeete de dialogue des Propri\xe9t\xe9s de structure."),(0,r.kt)("ol",n({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Sauvegarde")," pour d\xe9clencher la sauvegarde avec les param\xe8tres courants.")),(0,r.kt)("h2",n({},{id:"sauvegarde-automatique-p\xe9riodique"}),"Sauvegarde automatique p\xe9riodique"),(0,r.kt)("p",null,"Les sauvegardes p\xe9riodiques sont d\xe9clench\xe9es automatiquement. Elles sont configur\xe9es dans la Page ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarde/P\xe9riodicit\xe9")," des ",(0,r.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s"),"."),(0,r.kt)("p",null,"Les sauvegardes s'effectuent automatiquement au moment d\xe9fini, sans intervention de l\u2019utilisateur. Pour plus d\u2019informations sur le fonctionnement de cette bo\xeete de dialogue, reportez-vous \xe0 la section ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Backup/settings#scheduler"}),"D\xe9finir des sauvegardes p\xe9riodiques"),"."),(0,r.kt)("h2",n({},{id:"commande-backup"}),"Commande BACKUP"),(0,r.kt)("p",null,"Lorsque la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP")," est ex\xe9cut\xe9e depuis une m\xe9thode, la sauvegarde est alors d\xe9clench\xe9e avec les param\xe8tres courants d\xe9finis dans les propri\xe9t\xe9s. Vous pouvez utiliser la M\xe9thode base ",(0,r.kt)("inlineCode",{parentName:"p"},"On Backup Startup")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"On Backup Shutdown")," afin de contr\xf4ler le d\xe9roulement de la sauvegarde (cf. le manuel ",(0,r.kt)("em",{parentName:"p"},"Langage de 4D"),")."),(0,r.kt)("h2",n({},{id:"d\xe9roulement-de-la-sauvegarde"}),"D\xe9roulement de la sauvegarde"),(0,r.kt)("p",null,"Une fois qu\u2019une sauvegarde a \xe9t\xe9 d\xe9clench\xe9e, 4D affiche une bo\xeete de dialogue comportant un thermom\xe8tre indiquant la progression de l\u2019op\xe9ration :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(527874).Z,width:"408",height:"168"})),(0,r.kt)("p",null,"Le thermom\xe8tre est \xe9galement affich\xe9 en bas de la page ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/MSC/backup"}),"\u201cSauvegarde\u201d du CSM")," si vous avez utilis\xe9 cette bo\xeete de dialogue."),(0,r.kt)("p",null,"Le bouton ",(0,r.kt)("strong",{parentName:"p"},"Arr\xeater")," permet \xe0 l\u2019utilisateur d\u2019interrompre la sauvegarde \xe0 tout instant (cf. paragraphe ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Backup/backup#handling-backup-issues"}),"En cas de probl\xe8me au cours de la sauvegarde"),")."),(0,r.kt)("p",null,'Le compte-rendu de la derni\xe8re sauvegarde (succ\xe8s ou \xe9chec) est stock\xe9 dans la zone "Informations sur la derni\xe8re sauvegarde" dans la ',(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/MSC/backup"}),"Page Sauvegarde du CSM")," ou dans la ",(0,r.kt)("strong",{parentName:"p"},"Page de maintenance")," de 4D Server. Il est \xe9galement enregistr\xe9 dans le ",(0,r.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,r.kt)("h3",n({},{id:"acc\xe8s-\xe0-lapplication-durant-la-sauvegarde"}),"Acc\xe8s \xe0 l'application durant la sauvegarde"),(0,r.kt)("p",null,"4D verrouille les process li\xe9s aux types de fichiers inclus dans la sauvegarde : si seul le fichier de structure est sauvegard\xe9, l\u2019acc\xe8s \xe0 la structure est impossible mais l\u2019acc\xe8s aux donn\xe9es est autoris\xe9. Pendant la sauvegarde, les acc\xe8s \xe0 l'application sont restreints par 4D en fonction du contexte."),(0,r.kt)("p",null,"A l\u2019inverse, si seul le fichier de donn\xe9es est sauvegard\xe9, l\u2019acc\xe8s \xe0 la structure reste autoris\xe9. Dans ce cas, les possibilit\xe9s d\u2019acc\xe8s \xe0 l'application sont les suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avec 4D version monoposte, l'application est verrouill\xe9e en lecture et en \xe9criture, tous les process sont gel\xe9s. Toute action est alors impossible."),(0,r.kt)("li",{parentName:"ul"},"Avec 4D Server, l'application est verrouill\xe9e uniquement en \xe9criture, les postes clients peuvent consulter les donn\xe9es. Si un poste client envoie une requ\xeate d\u2019ajout, de suppression ou de modification au serveur, il obtient une fen\xeatre l\u2019invitant \xe0 attendre la fin de la sauvegarde. Une fois l'application sauvegard\xe9e, la fen\xeatre dispara\xeet d\u2019elle-m\xeame et l\u2019action est ex\xe9cut\xe9e. Pour annuler la requ\xeate en cours et ne pas avoir \xe0 attendre la fin de la sauvegarde, il suffit de cliquer sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Annuler l\u2019op\xe9ration"),". Cependant, si l\u2019action en attente provient d\u2019une m\xe9thode lanc\xe9e avant la sauvegarde, il est d\xe9conseill\xe9 de l\u2019annuler car seules les op\xe9rations restant \xe0 effectuer seront annul\xe9es. Or, une m\xe9thode \u201c\xe0 moiti\xe9\u201d ex\xe9cut\xe9e peut conduire \xe0 des incoh\xe9rences logiques dans les donn\xe9es.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lorsque l\u2019action en attente provient d\u2019une m\xe9thode et que l\u2019utilisateur clique sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Annuler l\u2019op\xe9ration"),", 4D Server renvoie l\u2019erreur -9976 (Cette commande ne peut \xeatre ex\xe9cut\xe9e car la base est en cours de sauvegarde).")),(0,r.kt)("h3",n({},{id:"en-cas-de-probl\xe8me-au-cours-de-la-sauvegarde"}),"En cas de probl\xe8me au cours de la sauvegarde"),(0,r.kt)("p",null,"Il est possible qu'une sauvegarde ne s\u2019effectue pas correctement. Les causes de l\u2019\xe9chec peuvent \xeatre diverses : interruption par l\u2019utilisateur, fichier joint introuvable, disque de destination d\xe9faillant, transaction non termin\xe9e, etc. 4D traite l'incident selon la cause de l'\xe9chec."),(0,r.kt)("p",null,'Dans tous les cas, le statut de la derni\xe8re sauvegarde (succ\xe8s ou \xe9chec) est stock\xe9 dans la zone "Informations sur la derni\xe8re sauvegarde" dans la ',(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/MSC/backup"}),"Page Sauvegarde du CSM")," ou dans la ",(0,r.kt)("strong",{parentName:"p"},"Page de maintenance")," de 4D Server, ainsi que dans le ",(0,r.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interruption par l\u2019utilisateur")," : le bouton ",(0,r.kt)("strong",{parentName:"li"},"Arr\xeater")," de la bo\xeete de dialogue de progression de la sauvegarde permet aux utilisateurs d\u2019interrompre la sauvegarde \xe0 tout instant. Dans ce cas, la copie des \xe9l\xe9ments est stopp\xe9e et l'erreur 1406 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur dans la M\xe9thode base ",(0,r.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fichier joint introuvable")," : lorsqu\u2019un fichier joint est introuvable, 4D effectue une sauvegarde partielle (sauvegarde des fichiers de l'application et des fichiers joints accessibles) et retourne une erreur."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup impossible")," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. Le d\xe9lai d\u2019attente entre les deux tentatives est d\xe9fini dans la Page ",(0,r.kt)("strong",{parentName:"li"},"Sauvegarde/Sauvegarde& et Restitution")," des Propri\xe9t\xe9s. Si la seconde tentative \xe9choue \xe9galement, une bo\xeete de dialogue d\u2019alerte syst\xe8me est affich\xe9e et une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur dans la M\xe9thode base ",(0,r.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),".")),(0,r.kt)("h2",n({},{id:"journal-de-sauvegarde-backup-journal"}),"Journal de sauvegarde (Backup Journal)"),(0,r.kt)("p",null,"Pour faciliter le suivi et la v\xe9rification des sauvegardes, le module de sauvegarde r\xe9sume chaque op\xe9ration effectu\xe9e dans un fichier sp\xe9cial, similaire \xe0 un journal d'activit\xe9. Comme un manuel int\xe9gr\xe9, toutes les op\xe9rations de la base de donn\xe9es (sauvegardes, restaurations, int\xe9grations de fichiers d'historique) sont consign\xe9es dans ce fichier, qu\u2019elles aient \xe9t\xe9 planifi\xe9es ou ex\xe9cut\xe9es manuellement. La date et l'heure auxquelles ces op\xe9rations ont eu lieu sont \xe9galement not\xe9es dans le journal."),(0,r.kt)("p",null,"Le journal de sauvegarde s'appelle \"Backup Journal","[001]",'.txt" et se trouve dans le dossier "Logs" du projet. Le journal de sauvegarde peut \xeatre ouvert avec n\'importe quel \xe9diteur de texte.'),(0,r.kt)("h4",n({},{id:"gestion-de-la-taille-du-journal-de-sauvegarde"}),"Gestion de la taille du journal de sauvegarde"),(0,r.kt)("p",null,"Dans certaines strat\xe9gies de sauvegarde (par exemple, dans le cas o\xf9 de nombreuses pi\xe8ces jointes sont sauvegard\xe9es), le journal de sauvegarde peut rapidement atteindre une taille importante. Deux m\xe9canismes peuvent \xeatre utilis\xe9s pour g\xe9rer cette taille :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sauvegarde automatique")," : Avant chaque sauvegarde, l'application examine la taille du fichier backup journal courant. Si elle est sup\xe9rieure \xe0 10 Mo, le fichier courant est archiv\xe9 et un nouveau fichier est cr\xe9\xe9 avec le num\xe9ro ","[xxx]",' incr\xe9ment\xe9, par exemple "Backup Journal',"[002]"," .txt\u201d. Une fois le num\xe9ro de fichier 999 atteint, la num\xe9rotation reprend \xe0 1 et les fichiers existants seront remplac\xe9s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Possibilit\xe9 de r\xe9duire la quantit\xe9 d'informations enregistr\xe9es")," : Pour ce faire, il suffit de modifier la valeur de la cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"VerboseMode")," dans le fichier ",(0,r.kt)("em",{parentName:"li"},"Backup.4DSettings")," du projet. Par d\xe9faut, cette cl\xe9 est d\xe9finie sur True. Si vous d\xe9finissez la valeur de cette cl\xe9 sur False, seules les informations principales sont stock\xe9es dans le journal de sauvegarde : la date et l'heure du d\xe9but de l'op\xe9ration et les \xe9ventuelles erreurs g\xe9n\xe9r\xe9es. Les cl\xe9s XML concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.kt)("em",{parentName:"li"},"Sauvegarde des cl\xe9s XML 4D"),".")),(0,r.kt)("h2",n({},{id:"backuphistoryjson"}),"backupHistory.json"),(0,r.kt)("p",null,"Toutes les informations concernant les derni\xe8res op\xe9rations de sauvegarde et de restitution sont stock\xe9es dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," de l'application. Ce dernier enregistre le chemin de chaque fichier sauvegard\xe9 (y compris les pi\xe8ces jointes) ainsi que le num\xe9ro, la date, l'heure, la dur\xe9e et le statut de chaque op\xe9ration. Afin de limiter la taille du fichier, le nombre d'op\xe9rations enregistr\xe9es et le nombre de sauvegardes disponibles (\"Keep only the last X backup files\") d\xe9finies dans les propri\xe9t\xe9s de sauvegarde est identique."),(0,r.kt)("p",null,"Le fichier ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," se situe dans le dossier de destination de sauvegarde courant. Vous pouvez obtenir le chemin de ce fichier \xe0 l'aide de la d\xe9claration suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$backupHistory:=Get 4D file(Backup history file)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"ATTENTION"),(0,r.kt)("br",{parentName:"p"}),"\n","La suppression ou le d\xe9placement du fichier ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," entra\xeenera la r\xe9initialisation du prochain num\xe9ro de sauvegarde.\nLe fichier ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," est format\xe9 afin d'\xeatre utilis\xe9 par l'application 4D. Si vous recherchez un \xe9tat lisible sur les op\xe9rations de sauvegarde, le journal de sauvegarde sera plus pr\xe9cis.")))}p.isMDXComponent=!0},416254:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},527874:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);