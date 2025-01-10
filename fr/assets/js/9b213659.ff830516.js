"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22094"],{213567:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"Admin/cli","title":"Interface de ligne de commande","description":"Vous pouvez utiliser le Terminal macOS ou la console Windows pour piloter vos applications 4D (4D, 4D Server, application fusionn\xe9e, et tool4d) en utilisant des lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/fr/20-R6/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"cli","title":"Interface de ligne de commande"},"sidebar":"docs","previous":{"title":"Explorateur de donn\xe9es","permalink":"/docs/fr/20-R6/Admin/dataExplorer"},"next":{"title":"TLS Protocol","permalink":"/docs/fr/20-R6/Admin/tls"}}'),t=s("785893"),d=s("250065");let l={id:"cli",title:"Interface de ligne de commande"},r=void 0,a={},o=[{value:"Informations de base",id:"informations-de-base",level:2},{value:"Lancer une application 4D",id:"lancer-une-application-4d",level:2},{value:"Exemples",id:"exemples",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Utilisation de tool4d",id:"utilisation-de-tool4d",level:3},{value:"Fonctionnalit\xe9s 4D d\xe9sactiv\xe9es",id:"fonctionnalit\xe9s-4d-d\xe9sactiv\xe9es",level:3},{value:"4D Server en mode utilitaire",id:"4d-server-en-mode-utilitaire",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser le Terminal macOS ou la console Windows pour piloter vos applications 4D (4D, 4D Server, application fusionn\xe9e, et ",(0,t.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),") en utilisant des lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"de lancer une base de donn\xe9es \xe0 distance, ce qui peut \xeatre particuli\xe8rement utile pour administrer des serveurs Web."}),"\n",(0,t.jsx)(n.li,{children:"d'ex\xe9cuter des tests automatiques pour vos applications."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"informations-de-base",children:"Informations de base"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez ex\xe9cuter des lignes de commande pour les applications 4D \xe0 l'aide du terminal macOS ou de la console Windows."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sous macOS, vous devez utiliser la commande ",(0,t.jsx)(n.code,{children:"open"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Sous Windows, vous pouvez simplement passer les arguments directement."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, \xe0 l'int\xe9rieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier ",(0,t.jsx)(n.code,{children:"MyFolder"}),", vous devez \xe9crire la ligne de commande comme suit : ",(0,t.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". Cependant, nous vous recommandons d'utiliser la commande ",(0,t.jsx)(n.code,{children:"open"})," chaque fois que vous n'avez pas besoin d'acc\xe9der au flux stderr."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lancer-une-application-4d",children:"Lancer une application 4D"}),"\n",(0,t.jsx)(n.p,{children:"Voici une description des lignes de commande et des arguments pris en charge pour lancer les applications 4D."}),"\n",(0,t.jsx)(n.p,{children:"Syntaxe :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Argument"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"applicationPath"})}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s \xe0 4D, 4D Server, application fusionn\xe9e ou tool4d"}),(0,t.jsxs)(n.td,{children:["Lance l'application.",(0,t.jsx)(n.br,{}),"S'il ne s'agit pas d'une application headless : identique \xe0 un double-clic sur l'application ; lorsqu'elle est appel\xe9e sans argument de fichier de structure, l'application est ex\xe9cut\xe9e et la bo\xeete de dialogue \"s\xe9lectionner une base de donn\xe9es\" appara\xeet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--version"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Affiche la version de l'application et quitte"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--help"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Affiche le message d'aide et quitte. Autres arguments : -?, -h"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--project"})}),(0,t.jsx)(n.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,t.jsx)(n.td,{children:"Fichier de projet \xe0 ouvrir avec le fichier de donn\xe9es courant. Aucune bo\xeete de dialogue n'appara\xeet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--data"})}),(0,t.jsx)(n.td,{children:"dataPath"}),(0,t.jsx)(n.td,{children:"Fichier de donn\xe9es \xe0 ouvrir avec le fichier de projet d\xe9sign\xe9. S'il n'est pas sp\xe9cifi\xe9, le dernier fichier de donn\xe9es ouvert est utilis\xe9."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--opening-mode"})}),(0,t.jsx)(n.td,{children:"interpreted | compiled"}),(0,t.jsx)(n.td,{children:"Base de donn\xe9es de requ\xeates \xe0 ouvrir en mode interpr\xe9t\xe9 ou compil\xe9. Aucune erreur n'est g\xe9n\xe9r\xe9e si le mode demand\xe9 n'est pas disponible."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--create-data"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Cr\xe9e automatiquement un nouveau fichier de donn\xe9es si aucun fichier de donn\xe9es valide n'est trouv\xe9. Aucune bo\xeete de dialogue n'appara\xeet. 4D utilise le nom de fichier pass\xe9 dans l'argument \"--data\" s'il en exise un (g\xe9n\xe8re une erreur si un fichier du m\xeame nom existe d\xe9j\xe0)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--user-param"})}),(0,t.jsx)(n.td,{children:"Cha\xeene utilisateur personnalis\xe9e"}),(0,t.jsxs)(n.td,{children:["Une cha\xeene qui sera disponible dans l'application via la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/fr/page643.html",children:(0,t.jsx)(n.code,{children:"Get database parameter"})}),' (la cha\xeene ne doit pas commencer par un caract\xe8re "-", qui est r\xe9serv\xe9).']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--headless"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Lance 4D, 4D Server ou l'application fusionn\xe9e sans interface (mode headless). Dans ce mode:",(0,t.jsx)(n.li,{children:" Le mode Conception n'est pas disponible, la base de donn\xe9es d\xe9marre en mode Application"}),(0,t.jsx)(n.li,{children:" Pas de barre d'outils, barre de menus, la fen\xeatre MDI ou l'\xe9cran de d\xe9marrage est affich\xe9"}),(0,t.jsx)(n.li,{children:"Aucune ic\xf4ne n'est affich\xe9e dans le dock ou la barre de t\xe2ches"}),(0,t.jsx)(n.li,{children:'La base de donn\xe9es ouverte n\'est pas enregistr\xe9e dans le menu "bases de donn\xe9es r\xe9centes"'}),(0,t.jsxs)(n.li,{children:["Le journal de diagnostic est automatiquement d\xe9marr\xe9 (voir ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page642.html",children:"SET DATABASE PARAMETER"}),", selecteur 79)"]}),(0,t.jsxs)(n.li,{children:["Chaque appel \xe0 une bo\xeete de dialogue est intercept\xe9 et une r\xe9ponse automatique fournie (par exemple, OK pour la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page41.html",children:"ALERT"}),", Abort pour un dialogue d'erreur...). Toutes les commandes intercept\xe9es(*) sont journalis\xe9es dans le journal de diagnostic."]}),(0,t.jsx)(n.br,{}),"Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte vers les flux de sortie standard en utilisant la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page667.html",children:"LOG EVENT"}),". A noter que les applications 4D headless ne peuvent \xeatre ferm\xe9es qu'en appelant ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page291.html",children:"QUIT 4D"})," ou en utilisant le gestionnaire de t\xe2ches du syst\xe8me d'exploitation."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--dataless"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Lance 4D, 4D Server, une application fusionn\xe9e ou tool4d en mode sans donn\xe9es. Le mode Dataless est utile lorsque 4D ex\xe9cute des t\xe2ches sans donn\xe9es (compilation de projet par exemple). Dans ce mode : ",(0,t.jsxs)(n.li,{children:["Aucun fichier contenant des donn\xe9es n'est ouvert, m\xeame s'il est sp\xe9cifi\xe9 dans la ligne de commande ou le fichier ",(0,t.jsx)(n.code,{children:".4DLink"}),", ou lors de l'utilisation des commandes ",(0,t.jsx)(n.code,{children:"CREATE DATA FILE"})," et ",(0,t.jsx)(n.code,{children:"OPEN DATA FILE"}),"."]}),(0,t.jsxs)(n.li,{children:["Les commandes qui manipulent les donn\xe9es g\xe9n\xe9reront une erreur. Par exemple, ",(0,t.jsx)(n.code,{children:"CREATE RECORD"})," g\xe9n\xe8re l'erreur \xab aucune table sur laquelle appliquer la commande \xbb."]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Note"}),":",(0,t.jsx)(n.li,{children:"Si le mode dataless est activ\xe9 en ligne de commande, il s'applique \xe0 toutes les bases de donn\xe9es ouvertes dans 4D, tant que l'application n'est pas ferm\xe9e."}),(0,t.jsxs)(n.li,{children:["Si le mode dataless est activ\xe9 via le fichier ",(0,t.jsx)(n.code,{children:".4DLink"}),", il s'applique uniquement \xe0 la base de donn\xe9es sp\xe9cifi\xe9e dans le fichier ",(0,t.jsx)(n.code,{children:".4DLink"}),". Pour plus d'informations sur les fichiers ",(0,t.jsx)(n.code,{children:".4DLink"}),", voir ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/GettingStarted/creating#raccourcis-douverture-des-projets",children:"Raccourcis d'ouverture des projets"}),"."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--webadmin-settings-file"})}),(0,t.jsx)(n.td,{children:"Chemin de fichier"}),(0,t.jsxs)(n.td,{children:["Chemin du fichier ",(0,t.jsx)(n.code,{children:".4DSettings"})," personnalis\xe9 pour le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Admin/webAdmin",children:"serveur web WebAdmin"}),". Non disponible avec ",(0,t.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--webadmin-access-key"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Cl\xe9 d'acc\xe8s pour le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Admin/webAdmin",children:"serveur web WebAdmin"}),". Non disponible avec ",(0,t.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--webadmin-auto-start"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["Statut du lancement automatique du ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Admin/webAdmin",children:"serveur web WebAdmin"}),". Non disponible avec ",(0,t.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--webadmin-store-settings"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Stocke la cl\xe9 d'acc\xe8s et les param\xe8tres de d\xe9marrage automatique dans le fichier de param\xe8tres actuellement utilis\xe9 (c'est-\xe0-dire le fichier ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Admin/webAdmin#webadmin-settings",children:(0,t.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," par d\xe9faut ou un fichier personnalis\xe9 d\xe9sign\xe9 avec le param\xe8tre ",(0,t.jsx)(n.code,{children:"--webadmin-settings-path"}),"). Utilisez l'argument ",(0,t.jsx)(n.code,{children:"--webadmin-store-settings"})," pour enregistrer ces param\xe8tres si n\xe9cessaire. Non disponible avec ",(0,t.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--utility"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Disponible uniquement avec 4D Server. Lance ",(0,t.jsx)(n.a,{href:"#4d-server-in-utility-mode",children:"4D Server en mode utilitaire"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--skip-onstartup"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:['Lance le projet sans ex\xe9cuter aucune m\xe9thode "automatique", y compris les m\xe9thodes base ',(0,t.jsx)(n.code,{children:"On Startup"})," et ",(0,t.jsx)(n.code,{children:"On Exit"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"--startup-method"})}),(0,t.jsx)(n.td,{children:"Nom de m\xe9thode projet (cha\xeene)"}),(0,t.jsxs)(n.td,{children:["M\xe9thode projet \xe0 ex\xe9cuter imm\xe9diatement apr\xe8s la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Startup"})," (si elle n'est pas ignor\xe9e avec ",(0,t.jsx)(n.code,{children:"--skip-onstartup"}),")."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(*) Certaines bo\xeetes de dialogue sont affich\xe9es avant l'ouverture de la base de donn\xe9es, de sorte qu'il est impossible d'\xe9crire dans le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"fichier journal de diagnostic"})," (alerte de licence, bo\xeete de dialogue de Dans ce cas, un message d'erreur est envoy\xe9 \xe0 la fois dans le flux stderr et dans le journal d'\xe9v\xe9nements syst\xe8me, puis l'application se ferme."]}),"\n",(0,t.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'Le dossier courant de l\'utilisateur est atteint \xe0 l\'aide de la commande "~" sous macOS et de la commande "%HOMEPATH%" sous Windows.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Lancez une application 4D stock\xe9e sur le bureau :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ouvrez un paquet sur macOS :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ouvrez un fichier de projet :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ouvrez un fichier de projet et un fichier de donn\xe9es :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nou :\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ouvrez un fichier .4DLink :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lancez l'application en mode compil\xe9 et cr\xe9er un fichier de donn\xe9es s'il n'est pas disponible :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lancez l'application avec un fichier projet et un fichier de donn\xe9es :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ouverture sans interface (mode headless) :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous macOS :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tool4d",children:"tool4d"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tool4d"})," est une application gratuite, l\xe9g\xe8re et autonome qui vous permet d'ouvrir un projet 4D en mode headless et d'ex\xe9cuter du code 4D \xe0 l'aide de la CLI."]}),"\n",(0,t.jsx)(n.p,{children:"tool4d est disponible sur Windows et macOS et est toujours associ\xe9 \xe0 une version de 4D (m\xeame version et m\xeame num\xe9ro de build). Il n'est disponible qu'en anglais."}),"\n",(0,t.jsx)(n.p,{children:"tool4d est l'outil parfait si vous souhaitez :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"mettre en place une cha\xeene CI/CD pour votre application 4D,"}),"\n",(0,t.jsx)(n.li,{children:"utiliser un ex\xe9cutable 4D l\xe9ger pour lancer des scripts 4D, par exemple pour ex\xe9cuter des tests unitaires automatiques."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"utilisation-de-tool4d",children:"Utilisation de tool4d"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez obtenir tool4d \xe0 partir de la ",(0,t.jsx)(n.a,{href:"https://product-download.4d.com/",children:"page de t\xe9l\xe9chargement"})," des produits 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous utilisez tool4d en ex\xe9cutant une ",(0,t.jsx)(n.a,{href:"#launch-a-4d-application",children:"ligne de commande"})," avec un projet 4D standard. Vous pouvez utiliser tous les arguments d\xe9crits dans le tableau ci-dessus, \xe0 l'exception de --",(0,t.jsx)(n.code,{children:"webadmin"})," puisque ce composant est ",(0,t.jsx)(n.a,{href:"#disabled-4d-features",children:"d\xe9sactiv\xe9 dans tool4d"}),". Avec tool4d, la s\xe9quence sp\xe9cifique suivante est lanc\xe9e :"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["tool4d ex\xe9cute la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Startup"}),' (et toutes les m\xe9thodes "automatiques" telles que la ',(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Users/editing#user-properties",children:"m\xe9thode utilisateur"}),"), sauf si l'argument ",(0,t.jsx)(n.code,{children:"--skip-onstartup"})," est pass\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:["tool4d ex\xe9cute la m\xe9thode d\xe9sign\xe9e par l'argument ",(0,t.jsx)(n.code,{children:"--startup-method"})," , le cas \xe9ch\xe9ant."]}),"\n",(0,t.jsxs)(n.li,{children:["tool4d ex\xe9cute la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Exit"}),", sauf si l'argument ",(0,t.jsx)(n.code,{children:"--skip-onstartup"})," est fourni."]}),"\n",(0,t.jsx)(n.li,{children:"tool4d quitte."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Sous Windows, tool4d est une application console de sorte que le flux ",(0,t.jsx)(n.code,{children:"stdout"})," est affich\xe9 dans le terminal (cmd, powershell...)."]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["tool4d est toujours ex\xe9cut\xe9 headless (l'option de ligne de commande ",(0,t.jsx)(n.code,{children:"headless"})," est inutile)."]}),"\n",(0,t.jsxs)(n.li,{children:["La commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page494.html",children:(0,t.jsx)(n.code,{children:"Application type"})})," renvoie la valeur 6 (\"tool4d\") lorsqu'elle est appel\xe9e \xe0 partir de l'application tool4d."]}),"\n",(0,t.jsxs)(n.li,{children:["le ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"fichier journal de diagnostic"}),' est pr\xe9fix\xe9 par "4DDiagnosticLogTool".']}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fonctionnalit\xe9s-4d-d\xe9sactiv\xe9es",children:"Fonctionnalit\xe9s 4D d\xe9sactiv\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["N'oubliez pas que tool4d s'ex\xe9cute automatiquement en mode ",(0,t.jsx)(n.strong,{children:"headless"})," (voir ",(0,t.jsx)(n.code,{children:"--headless"})," dans ",(0,t.jsx)(n.a,{href:"#launch-a-4d-application",children:"ce tableau"}),"), et ne donne acc\xe8s ni \xe0 l'IDE 4D ni \xe0 aucun de ses serveurs. En particulier, les fonctions suivantes ne sont pas accessibles :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"serveur d'application, serveur Web, serveur SQL,"}),"\n",(0,t.jsx)(n.li,{children:"planificateur de sauvegarde,"}),"\n",(0,t.jsx)(n.li,{children:"ODBC et SQL pass-through,"}),"\n",(0,t.jsx)(n.li,{children:"tous les composants tels que 4D View Pro, 4D SVG, 4D NetKit...,"}),"\n",(0,t.jsx)(n.li,{children:"correcteur orthographique hunspell,"}),"\n",(0,t.jsxs)(n.li,{children:["correcteur orthographique japonais (",(0,t.jsx)(n.em,{children:"mecab"})," library),"]}),"\n",(0,t.jsx)(n.li,{children:"WebAdmin,"}),"\n",(0,t.jsx)(n.li,{children:"CEF,"}),"\n",(0,t.jsx)(n.li,{children:"PHP,"}),"\n",(0,t.jsxs)(n.li,{children:["d\xe9bogueur distant (le d\xe9bogueur local, ",(0,t.jsx)(n.code,{children:"TRACE"})," et les points d'arr\xeat sont ignor\xe9s dans les applications headless)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4d-server-en-mode-utilitaire",children:"4D Server en mode utilitaire"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez lancer une instance de 4D Server en mode utilitaire (headless) en utilisant l'option CLI ",(0,t.jsx)(n.code,{children:"--utility"})," . Dans ce cas, la s\xe9quence suivante est d\xe9clench\xe9e :"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["4D Server ex\xe9cute la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Startup"}),' (et toutes les m\xe9thodes "automatiques" telles que la ',(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Users/editing#user-properties",children:"m\xe9thode utilisateur"}),"), sauf si le param\xe8tre ",(0,t.jsx)(n.code,{children:"--skip-onstartup"})," est pass\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:["4D Server ex\xe9cute la m\xe9thode d\xe9sign\xe9e par l'option ",(0,t.jsx)(n.code,{children:"--startup-method"}),", le cas \xe9ch\xe9ant."]}),"\n",(0,t.jsxs)(n.li,{children:["4D Server ex\xe9cute la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Exit"})," , sauf si le param\xe8tre ",(0,t.jsx)(n.code,{children:"--skip-onstartup"})," est pass\xe9."]}),"\n",(0,t.jsx)(n.li,{children:"4D Server quitte."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Contrairement \xe0 tool4d, 4D Server en mode utilitaire a toutes ses fonctionnalit\xe9s activ\xe9es. Cependant, le serveur d'application et tous les autres serveurs ne sont pas d\xe9marr\xe9s."})}),"\n",(0,t.jsx)(n.admonition,{title:"Voir \xe9galement",type:"tip",children:(0,t.jsxs)(n.p,{children:["Voir ",(0,t.jsx)(n.a,{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/",children:"ce billet de blog"})," pour des exemples d'utilisation de tool4d et 4D Server en mode utilitaire."]})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var i=s(667294);let t={},d=i.createContext(t);function l(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);