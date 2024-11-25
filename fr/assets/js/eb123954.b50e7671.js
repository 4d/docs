"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41717"],{725712:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>o,default:()=>a,assets:()=>l,toc:()=>u,frontMatter:()=>d});var r=JSON.parse('{"id":"Desktop/user-settings","title":"Propri\xe9t\xe9s utilisateur","description":"4D propose deux modes de fonctionnement pour les Propri\xe9t\xe9s des projets :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Desktop/user-settings.md","sourceDirName":"Desktop","slug":"/Desktop/user-settings","permalink":"/docs/fr/20-R6/Desktop/user-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2Fuser-settings.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"user-settings","title":"Propri\xe9t\xe9s utilisateur"},"sidebar":"docs","previous":{"title":"Mode SDI sous Windows","permalink":"/docs/fr/20-R6/Menus/sdi"},"next":{"title":"Build Application","permalink":"/docs/fr/20-R6/Desktop/building"}}'),i=t("785893"),n=t("250065");let d={id:"user-settings",title:"Propri\xe9t\xe9s utilisateur"},o=void 0,l={},u=[{value:"Activer les propri\xe9t\xe9s utilisateur",id:"activer-les-propri\xe9t\xe9s-utilisateur",level:2},{value:"Propri\xe9t\xe9s utilisateur et propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es",id:"propri\xe9t\xe9s-utilisateur-et-propri\xe9t\xe9s-utilisateur-pour-le-fichier-de-donn\xe9es",level:2},{value:"<code>SET DATABASE PARAMETER</code> et propri\xe9t\xe9s utilisateur",id:"set-database-parameter-et-propri\xe9t\xe9s-utilisateur",level:2},{value:"Fichiers settings.4DSettings",id:"fichiers-settings4dsettings",level:2},{value:"Propri\xe9t\xe9s utilisateur",id:"propri\xe9t\xe9s-utilisateur",level:3},{value:"Propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es",id:"propri\xe9t\xe9s-utilisateur-pour-fichier-de-donn\xe9es",level:3},{value:"Priorit\xe9 des param\xe8tres",id:"priorit\xe9-des-param\xe8tres",level:2}];function c(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"4D propose deux modes de fonctionnement pour les Propri\xe9t\xe9s des projets :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Mode ",(0,i.jsx)(s.strong,{children:"Standard"})," : tous les ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/overview",children:"param\xe8tres"})," sont stock\xe9s dans le fichier ",(0,i.jsxs)(s.a,{href:"/docs/fr/20-R6/Project/architecture#sources",children:[(0,i.jsx)(s.em,{children:"settings.4DSettings"})," au niveau du projet"]})," et sont appliqu\xe9s dans tous les cas. C'est le mode par d\xe9faut, adapt\xe9 \xe0 la phase de d\xe9veloppement (toutes les applications)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Mode propri\xe9t\xe9s utilisateur"})," : une partie des param\xe8tres personnalis\xe9s sont stock\xe9s dans un fichier ",(0,i.jsx)(s.em,{children:"settings.4DSettings"})," ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/Project/architecture#settings-user",children:"dans le dossier Settings"})," (pour tous les fichiers de donn\xe9es) ou ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/Project/architecture#settings-user-data",children:"dans le dossier Data"})," (pour ce fichier de donn\xe9es) et sont utilis\xe9s \xe0 la place des param\xe8tres de structure. Ce mode convient \xe0 la phase de d\xe9ploiement pour les applications Desktop. Activez ce mode \xe0 l'aide d'une option situ\xe9e sur la ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/security",children:"page S\xe9curit\xe9"})," des Propri\xe9t\xe9s."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"En d\xe9finissant des propri\xe9t\xe9s utilisateur, vous pouvez conserver des param\xe8tres personnalis\xe9s entre les mises \xe0 jour de vos applications 4D, ou g\xe9rer des param\xe8tres diff\xe9rents pour une m\xeame application 4D d\xe9ploy\xe9e sur plusieurs sites diff\xe9rents. Cela permet \xe9galement d'utiliser la programmation pour g\xe9rer les fichiers de param\xe8tres \xe0 l'aide de XML."}),"\n",(0,i.jsx)(s.p,{children:"4D peut g\xe9n\xe9rer et utiliser deux types de propri\xe9t\xe9s utilisateur :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"})," : elles sont utilis\xe9es \xe0 la place des propri\xe9t\xe9s de structure pour tout fichier de donn\xe9es ouvert avec l'application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es"})," : elles peuvent \xeatre d\xe9finies sp\xe9cifiquement pour chaque fichier de donn\xe9es utilis\xe9 avec votre application, en configurant par exemple l'ID du port ou le cache du serveur."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Avec cette option, vous pouvez facilement d\xe9ployer et mettre \xe0 jour plusieurs copies de la m\xeame application Desktop avec plusieurs fichiers de donn\xe9es, chacun contenant des propri\xe9t\xe9s diff\xe9rentes."}),"\n",(0,i.jsx)(s.p,{children:"Prenons par exemple la configuration suivante, o\xf9 une application est dupliqu\xe9e et o\xf9 chaque copie utilise un param\xe8tre d'ID de port diff\xe9rent. Si ce param\xe8tre utilisateur est li\xe9 au fichier de donn\xe9es, vous pourrez mettre \xe0 jour l'application sans avoir \xe0 modifier manuellement l'ID du port :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(299233).Z+"",width:"350",height:"228"})}),"\n",(0,i.jsx)(s.h2,{id:"activer-les-propri\xe9t\xe9s-utilisateur",children:"Activer les propri\xe9t\xe9s utilisateur"}),"\n",(0,i.jsxs)(s.p,{children:["Pour activer les param\xe8tres utilisateur, vous devez cocher l'option ",(0,i.jsx)(s.strong,{children:"Param\xe8tres"})," > ",(0,i.jsx)(s.strong,{children:"S\xe9curit\xe9"})," > ",(0,i.jsx)(s.strong,{children:"Autoriser les propri\xe9t\xe9s utilisateur"})," :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(461551).Z+"",width:"822",height:"173"})}),"\n",(0,i.jsx)(s.p,{children:"Lorsque vous cochez cette option, les param\xe8tres sont s\xe9par\xe9s en trois bo\xeetes de dialogue :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s structure"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez acc\xe9der \xe0 ces bo\xeetes de dialogue en utilisant le menu ",(0,i.jsx)(s.strong,{children:"D\xe9veloppement > Propri\xe9t\xe9s..."})," ou le bouton ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s"})," dans la barre d'outils :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(993093).Z+"",width:"233",height:"128"})}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez \xe9galement acc\xe9der \xe0 ces bo\xeetes de dialogue \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page903.html",children:"OPEN SETTINGS WINDOW"})," avec le s\xe9lecteur ",(0,i.jsx)(s.em,{children:"settingsType"})," appropri\xe9."]}),"\n",(0,i.jsx)(s.p,{children:"La bo\xeete de dialogue Propri\xe9t\xe9s de structure est identique \xe0 la bo\xeete de dialogue Propri\xe9t\xe9s standard et permet d'acc\xe9der \xe0 toutes ses propri\xe9t\xe9s (qui peuvent \xeatre \xe9cras\xe9es par des propri\xe9t\xe9s utilisateur)."}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9s-utilisateur-et-propri\xe9t\xe9s-utilisateur-pour-le-fichier-de-donn\xe9es",children:"Propri\xe9t\xe9s utilisateur et propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es"}),"\n",(0,i.jsxs)(s.p,{children:["Les bo\xeetes de dialogue ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"})," et ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es"})," contiennent une s\xe9lection de propri\xe9t\xe9s pertinentes qui peuvent \xeatre d\xe9finies pour tous les fichiers de donn\xe9es ou pour un seul fichier de donn\xe9es :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(181441).Z+"",width:"862",height:"722"})}),"\n",(0,i.jsxs)(s.p,{children:["Le tableau suivant r\xe9pertorie les pages de param\xe8tres des bo\xeetes de dialogue ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"})," et ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es"})," et d\xe9crit leurs principales diff\xe9rences par rapport aux param\xe8tres standard :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Page des Propri\xe9t\xe9s structure"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Page des Propri\xe9t\xe9s utilisateur"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Page des Propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/general",children:"Page G\xe9n\xe9ral"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"N/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/interface",children:"Page Interface"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/compiler",children:"Page Compilateur"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"N/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/database#data-storage",children:"Page Base de donn\xe9es/Stockage des donn\xe9es"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"N/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/database#memory",children:"Page Base de donn\xe9es/M\xe9moire"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/backup#scheduler",children:"Page Sauvegarde/P\xe9riodicit\xe9"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/backup#configuration",children:"Page Sauvegarde/Configuration"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/backup#backup-restore",children:"Page Sauvegarde/Sauvegarde & Restitution"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/client-server#network-options",children:"Page Client-serveur/R\xe9seau"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/client-server#ip-configuration",children:"Page Client-serveur/Configuration IP"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#configuration",children:"Page Web/Configuration"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#options",children:"Page Web/Options (I)"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#options-ii",children:"Page Web/Options (II)"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#log",children:"Page Web/Journal (format)"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#log",children:"Page Web/Journal (sauvegarde)"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#web-services",children:"Page Web/Services Web"})}),(0,i.jsx)(s.td,{children:"Option de pr\xe9fixage des m\xe9thodes non disponible"}),(0,i.jsx)(s.td,{children:"Option de pr\xe9fixage des m\xe9thodes non disponible"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/sql",children:"Page SQL"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/php",children:"Page PHP"})}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"}),(0,i.jsx)(s.td,{children:"Identique aux Propri\xe9t\xe9s structure"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/security",children:"Page S\xe9curit\xe9"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"N/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/settings/compatibility",children:"Page Compatibilit\xe9"})}),(0,i.jsx)(s.td,{children:"N/a"}),(0,i.jsx)(s.td,{children:"N/a"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque vous modifiez les param\xe8tres dans cette bo\xeete de dialogue, ils sont automatiquement enregistr\xe9s dans le fichier correspondant ",(0,i.jsx)(s.em,{children:"settings.4DSettings"})," (voir ci-dessous) ou le fichier ",(0,i.jsx)(s.em,{children:"Backup.4DSettings"})," (consultez la page ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/Backup/settings",children:"Param\xe8tres de sauvegarde"})," pour plus d'informations)."]}),"\n",(0,i.jsxs)(s.h2,{id:"set-database-parameter-et-propri\xe9t\xe9s-utilisateur",children:[(0,i.jsx)(s.code,{children:"SET DATABASE PARAMETER"})," et propri\xe9t\xe9s utilisateur"]}),"\n",(0,i.jsxs)(s.p,{children:["Certaines propri\xe9t\xe9s utilisateur sont aussi disponibles via la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),". Pour les propri\xe9t\xe9s utilisateur, la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:"Conserv\xe9 entre deux sessions"})," est fix\xe9e \xe0 ",(0,i.jsx)(s.strong,{children:"Oui"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque la fonctionnalit\xe9 ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur"})," est activ\xe9e, les propri\xe9t\xe9s utilisateur modifi\xe9es par la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html",children:"SET DATABASE PARAMETER"})," sont automatiquement stock\xe9es dans les Propri\xe9t\xe9s utilisateurs pour le fichier de donn\xe9es."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Table sequence number"})," est une exception ; cette valeur de param\xe8tre est toujours stock\xe9e dans le fichier de donn\xe9es lui-m\xeame."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"fichiers-settings4dsettings",children:"Fichiers settings.4DSettings"}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque vous ",(0,i.jsxs)(s.a,{href:"#enabling-user-settings",children:["cochez l'option ",(0,i.jsx)(s.strong,{children:"Autoriser les propri\xe9t\xe9s utilisateur"})]}),", des fichiers de propri\xe9t\xe9s utilisateur sont automatiquement cr\xe9\xe9s. Leur emplacement d\xe9pend du type de propri\xe9t\xe9 utilisateur d\xe9finie."]}),"\n",(0,i.jsx)(s.h3,{id:"propri\xe9t\xe9s-utilisateur",children:"Propri\xe9t\xe9s utilisateur"}),"\n",(0,i.jsx)(s.p,{children:"Le fichier de propri\xe9t\xe9 utilisateur standard est automatiquement cr\xe9\xe9 et plac\xe9 dans un dossier de propri\xe9t\xe9s \xe0 l'emplacement suivant :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/Project/architecture#settings-user",children:(0,i.jsx)(s.code,{children:"ProjectFolder/Settings/settings.4DSettings"})})}),"\n",(0,i.jsxs)(s.p,{children:["... o\xf9 ",(0,i.jsx)(s.em,{children:"ProjectFolder"})," est le nom du dossier contenant le fichier de structure du projet."]}),"\n",(0,i.jsx)(s.p,{children:"Dans les applications fusionn\xe9es, le fichier de propri\xe9t\xe9s utilisateur est plac\xe9 \xe0 l'emplacement suivant :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Dans les versions mono-utilisateur : ProjectFolder/Database/Settings/settings.4DSettings"}),"\n",(0,i.jsx)(s.li,{children:"Dans les versions client/serveur : ProjectFolder/Database/Settings/settings.4DSettings"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"propri\xe9t\xe9s-utilisateur-pour-fichier-de-donn\xe9es",children:"Propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es"}),"\n",(0,i.jsx)(s.p,{children:"Le fichier de propri\xe9t\xe9s utilisateur li\xe9 au fichier de donn\xe9es est automatiquement cr\xe9\xe9 et plac\xe9 dans un dossier de propri\xe9t\xe9s \xe0 l'emplacement suivant :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R6/Project/architecture#settings-user-data",children:(0,i.jsx)(s.code,{children:"Data/Settings/settings.4DSettings"})})}),"\n",(0,i.jsxs)(s.p,{children:["... o\xf9 ",(0,i.jsx)(s.em,{children:"Data"})," est le nom du dossier contenant le fichier de donn\xe9es courant de l'application."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Lorsque le fichier de donn\xe9es est situ\xe9 au m\xeame niveau que le fichier de structure du projet, les fichiers de propri\xe9t\xe9s utilisateur bas\xe9s sur la structure et sur les donn\xe9es partagent le m\xeame emplacement et le m\xeame fichier. La commande de menu ",(0,i.jsx)(s.strong,{children:"Propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es..."})," n'est pas propos\xe9e."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Les fichiers de propri\xe9t\xe9s sont des fichiers XML ; ils peuvent \xeatre lus et modifi\xe9s \xe0 l'aide des commandes XML int\xe9gr\xe9es de 4D ou d'un \xe9diteur XML. Cela signifie que vous pouvez g\xe9rer les param\xe8tres par programmation, notamment dans le cadre d'applications compil\xe9es et fusionn\xe9es avec 4D Volume Desktop. Lorsque vous modifiez ce fichier par programmation, les changements ne sont pris en compte que lors de la prochaine ouverture de la base de donn\xe9es."})}),"\n",(0,i.jsx)(s.h2,{id:"priorit\xe9-des-param\xe8tres",children:"Priorit\xe9 des param\xe8tres"}),"\n",(0,i.jsx)(s.p,{children:"Les propri\xe9t\xe9s peuvent \xeatre stock\xe9es \xe0 trois niveaux. Chaque param\xe8tre d\xe9fini \xe0 un niveau a priorit\xe9 sur le m\xeame param\xe8tre d\xe9fini \xe0 un niveau pr\xe9c\xe9dent, le cas \xe9ch\xe9ant :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Niveau de priorit\xe9"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Nom"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Emplacement"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Commentaires"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"3 (le plus faible)"}),(0,i.jsx)(s.td,{children:'Param\xe8tres de structure (ou Param\xe8tres lorsque la fonction "Param\xe8tres utilisateur" n\'est pas activ\xe9e)'}),(0,i.jsxs)(s.td,{children:["Fichier ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"settings.4DSettings"})})," dans le dossier Sources (bases projet) ou dans le dossier Settings au m\xeame niveau que le fichier de structure (bases binaires)"]}),(0,i.jsx)(s.td,{children:"Emplacement unique lorsque les param\xe8tres utilisateur ne sont pas activ\xe9s. Appliqu\xe9 \xe0 toutes les copies de l'application."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:"Propri\xe9t\xe9s utilisateur (tous les fichiers de donn\xe9es)"}),(0,i.jsxs)(s.td,{children:["Fichier ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"settings.4DSettings"})})," dans le dossier Settings au m\xeame niveau que le dossier Project"]}),(0,i.jsx)(s.td,{children:"Remplace les propri\xe9t\xe9s de structure. Stock\xe9 dans le package de l'application."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1 (le plus \xe9lev\xe9)"}),(0,i.jsx)(s.td,{children:"Propri\xe9t\xe9s utilisateur (fichier de donn\xe9es courant)"}),(0,i.jsxs)(s.td,{children:["Fichier ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"settings.4DSettings"})})," dans le dossier Settings au m\xeame niveau que le fichier de donn\xe9es"]}),(0,i.jsx)(s.td,{children:"Remplace les propri\xe9t\xe9s de structure et les propri\xe9t\xe9s utilisateur. S'applique uniquement lorsque le fichier de donn\xe9es associ\xe9 est utilis\xe9 avec l'application."})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"A noter que les fichiers de propri\xe9t\xe9s utilisateur ne contiennent qu'un sous-ensemble de param\xe8tres pertinents, tandis que le fichier de structure contient tous les param\xe8tres personnalis\xe9s, y compris les param\xe8tres de bas niveau."})]})}function a(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},181441:function(e,s,t){t.d(s,{Z:function(){return r}});let r=t.p+"assets/images/user-settings-2-d5bae457dfa8f5aba0868be2f2f312a4.png"},299233:function(e,s,t){t.d(s,{Z:function(){return r}});let r=t.p+"assets/images/user-settings-config-2056e51f0b96b9a9a0012d72010e05bb.png"},993093:function(e,s,t){t.d(s,{Z:function(){return r}});let r="data:image/png;base64,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"},461551:function(e,s,t){t.d(s,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,s,t){t.d(s,{Z:function(){return o},a:function(){return d}});var r=t(667294);let i={},n=r.createContext(i);function d(e){let s=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);