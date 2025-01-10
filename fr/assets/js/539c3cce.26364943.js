"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24455"],{615931:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"Notes/updates","title":"Release Notes","description":"4D 20 R6","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Notes/updates.md","sourceDirName":"Notes","slug":"/Notes/updates","permalink":"/docs/fr/20-R6/Notes/updates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Notes%2Fupdates.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"updates","title":"Release Notes"},"sidebar":"docs","previous":{"title":"Cr\xe9er ou ouvrir un projet","permalink":"/docs/fr/20-R6/GettingStarted/creating"},"next":{"title":"Core Development","permalink":"/docs/fr/20-R6/category/core-development"}}'),t=n("785893"),i=n("250065");let d={id:"updates",title:"Release Notes"},l=void 0,o={},c=[{value:"4D 20 R6",id:"4d-20-r6",level:2},{value:"Points forts",id:"points-forts",level:4},{value:"Changements de comportement",id:"changements-de-comportement",level:4},{value:"4D 20 R5",id:"4d-20-r5",level:2},{value:"Points forts",id:"points-forts-1",level:4},{value:"Changements de comportement",id:"changements-de-comportement-1",level:4},{value:"4D 20 R4",id:"4d-20-r4",level:2},{value:"Points forts",id:"points-forts-2",level:4},{value:"Changements de comportement",id:"changements-de-comportement-2",level:4},{value:"4D 20 R3",id:"4d-20-r3",level:2},{value:"Points forts",id:"points-forts-3",level:4},{value:"Changements de comportement",id:"changements-de-comportement-3",level:4},{value:"4D 20 R2",id:"4d-20-r2",level:2},{value:"Points forts",id:"points-forts-4",level:4},{value:"Changements de comportement",id:"changements-de-comportement-4",level:4},{value:"4D 20.x LTS",id:"4d-20x-lts",level:2},{value:"Tableau des biblioth\xe8ques",id:"tableau-des-biblioth\xe8ques",level:2}];function a(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"4d-20-r6",children:"4D 20 R6"}),"\n",(0,t.jsxs)(s.p,{children:["Lisez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/fr-whats-new-in-4d-20-R6/",children:(0,t.jsx)(s.strong,{children:"Les nouveaut\xe9s de 4D 20 R6"})}),", l'article de blog qui liste toutes les nouvelles fonctionnalit\xe9s et am\xe9liorations de 4D 20 R6."]}),"\n",(0,t.jsx)(s.h4,{id:"points-forts",children:"Points forts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Prise en charge des op\xe9rateurs de comparaison sur les ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/object#operateurs-sur-les-objets",children:"r\xe9f\xe9rences d'objet"})," et les ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/collection#operateurs-sur-les-collections",children:"r\xe9f\xe9rences de collection"}),". ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/CollectionClass#query",children:(0,t.jsx)(s.code,{children:"collection.query()"})})," prend maintenant en charge les ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/CollectionClass#reference-dobject-ou-de-collection-comme-value",children:"r\xe9f\xe9rences d'objet et de collection en tant que valeurs de requ\xeate"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Lorsqu'un composant a un ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Extensions/develop-components#declaring-the-component-namespace",children:"espace de noms d\xe9clar\xe9"}),", ses classes sont maintenant automatiquement partag\xe9es entre tous les composants charg\xe9s dans le projet h\xf4te via ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#cs",children:(0,t.jsx)(s.code,{children:"cs.<namespace>"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Gestionnaire de composants : Prise en charge des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Project/components#declaring-components-stored-on-github",children:"composants stock\xe9s sur GitHub"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle fonction ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/EntitySelectionClass#clean",children:(0,t.jsx)(s.code,{children:"entitySelection.clean()"})})," et API REST ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/REST/clean",children:(0,t.jsx)(s.code,{children:"$clean"})})," pour obtenir une nouvelle entity selection bas\xe9e sur l'entity selection originale mais sans ses entit\xe9s supprim\xe9es."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle fonction ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/SessionClass#getprivileges",children:(0,t.jsx)(s.code,{children:"session.getPrivileges()"})})," et API REST ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/REST/info",children:(0,t.jsx)(s.code,{children:"$info/privileges"})})," pour inspecter les privil\xe8ges de session plus facilement lors du d\xe9bogage."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau fichier ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/FormObjects/webAreaOverview#4dcefparametersjson",children:"4DCEFParameters.json"})," pour personnaliser les zones Web embarqu\xe9es dans 4D."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle classe ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/HTTPAgentClass",children:"HTTPAgent"})," et nouvelle propri\xe9t\xe9 ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/HTTPRequestClass#options-parameter",children:(0,t.jsx)(s.code,{children:"agent"})})," pour la classe HTTPRequest."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelles fonctions ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/WebFormClass",children:(0,t.jsx)(s.code,{children:"enableState()"})})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/WebFormClass",children:(0,t.jsx)(s.code,{children:"disableState()"})})," pour contr\xf4ler les ",(0,t.jsx)(s.em,{children:"states"})," des pages Qodly depuis le serveur."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle ",(0,t.jsxs)(s.a,{href:"/docs/fr/20-R6/REST/singleton",children:["API ",(0,t.jsx)(s.code,{children:"$singleton"})]})," pour appeler les fonctions singleton expos\xe9es depuis REST et nouveaux ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/ORDA/privileges",children:"privil\xe8ges associ\xe9s"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Un ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/settings/web#activer-la-validation-dauthentification-rest-avec-la-fonction-dsauthentify",children:"nouveau bouton de param\xe8tre"}),' vous aide \xe0 mettre \xe0 niveau votre projet pour utiliser le mode REST "connexion forc\xe9e" (la m\xe9thode base ',(0,t.jsx)(s.code,{children:"On REST Authentication"})," est maintenant obsol\xe8te)."]}),"\n",(0,t.jsxs)(s.li,{children:["Un ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Project/compiler#warnings",children:"nouvel onglet de param\xe8tres"})," vous permet de d\xe9finir la g\xe9n\xe9ration de warnings de mani\xe8re globale."]}),"\n",(0,t.jsxs)(s.li,{children:['Plusieurs commandes, principalement du th\xe8me "Environnement 4D", sont maintenant thread-safe (',(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R/4D/Preemptive_6957385.999-2878208.en.html",children:"voir la liste compl\xe8te"}),"), ainsi que certains s\xe9lecteurs des commandes ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20R/help/command/fe/page642.html",children:(0,t.jsx)(s.code,{children:"SET DATABASE PARAMETER"})}),"/",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20R/help/command/fe/page643.html",children:(0,t.jsx)(s.code,{children:"Get database parameter"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau ",(0,t.jsx)(s.a,{href:"https://github.com/4d/4D-QPDF",children:"composant 4D-QPDF"})," qui fournit la commande ",(0,t.jsx)(s.code,{children:"PDF Get attachments"})," pour extraire les pi\xe8ces jointes d'un document PDF/A3."]}),"\n",(0,t.jsxs)(s.li,{children:["Commandes du langage 4D : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.fe.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R/4D/20-R6/What-s-new.901-6993921.fe.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R6",children:(0,t.jsx)(s.strong,{children:"Liste des bugs corrig\xe9s"})})," : liste de tous les bugs qui ont \xe9t\xe9 corrig\xe9s dans 4D 20 R6."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"changements-de-comportement",children:"Changements de comportement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Prise en charge de l'encha\xeenement de d\xe9filement dans les formulaires : les parents des sous-formulaires d\xe9filent d\xe9sormais automatiquement lorsque les objets int\xe9gr\xe9s d\xe9filables (",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"verticalement"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"horizontalement"}),") ont atteint leurs limites et que l'utilisateur continue de faire d\xe9filer \xe0 l'aide de la souris ou du trackpad (",(0,t.jsx)(s.em,{children:"overscrolling"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["L'API REST ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/REST/catalog",children:(0,t.jsx)(s.code,{children:"$catalog"})})," retourne maintenant les singletons (le cas \xe9ch\xe9ant)."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4d-20-r5",children:"4D 20 R5"}),"\n",(0,t.jsxs)(s.p,{children:["Lisez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/fr-whats-new-in-4d-20-R5/",children:(0,t.jsx)(s.strong,{children:"Les nouveaut\xe9s de 4D 20 R5"})}),", l'article de blog qui liste toutes les nouvelles fonctionnalit\xe9s et am\xe9liorations de 4D 20 R5."]}),"\n",(0,t.jsx)(s.h4,{id:"points-forts-1",children:"Points forts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Nouveau ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Project/components",children:"Gestionnaire de composants"})," permettant de contr\xf4ler les composants \xe0 travers un fichier ",(0,t.jsx)(s.code,{children:"dependencies.json"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge des structures de gestion d'erreur ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/error-handling#trycatchend-try",children:(0,t.jsx)(s.code,{children:"Try...Catch...End try"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["La couche r\xe9seau QUIC prend d\xe9sormais en charge le ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Desktop/clientServer#ouverture-d-un-projet-%C3%A0-distance",children:(0,t.jsx)(s.em,{children:"broadcasting"})}),", ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.fe.html",children:"SSO"})," et ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R/4D/20-R5/Param%C3%A8tres-IP.300-6932707.fe.html",children:"IPv6"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/ORDA/entities#restricting-entity-selections",children:"restricted entity selections"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#shared-classes",children:"classes partag\xe9es"})," et des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/classes#singleton-classes",children:"classes singleton"}),". Nouvelles propri\xe9t\xe9s de classe : ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/ClassClass#isshared",children:(0,t.jsx)(s.code,{children:"isShared"})}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/ClassClass#isingleton",children:(0,t.jsx)(s.code,{children:"isSingleton"})}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/ClassClass#me",children:(0,t.jsx)(s.code,{children:"me"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge de l'",(0,t.jsx)(s.a,{href:"../Concepts/classes.md/#initializing-the-property-in-the-declaration-line",children:"initialisation d'une propri\xe9t\xe9 de classe dans sa ligne de d\xe9claration"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/REST/authUsers#force-login-mode",children:"mode de connexion force login pour les requ\xeates REST"})," avec une ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/WebServer/qodly-studio#force-login",children:"prise en charge sp\xe9cifique dans Qodly Studio for 4D"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau param\xe8tre REST ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/REST/format",children:"$format"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["L'objet ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/SessionClass#session",children:(0,t.jsx)(s.code,{children:"Session"})})," est maintenant disponible pour les sessions utilisateur \xe0 distance et les proc\xe9dures stock\xe9es."]}),"\n",(0,t.jsxs)(s.li,{children:["Commandes du langage 4D : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.fe.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.fe.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R5",children:(0,t.jsx)(s.strong,{children:"Liste des bugs corrig\xe9s"})})," : liste de tous les bugs qui ont \xe9t\xe9 corrig\xe9s dans 4D 20 R5."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"changements-de-comportement-1",children:"Changements de comportement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Les plug-ins ",(0,t.jsx)(s.em,{children:"4D Internet Commands"})," et ",(0,t.jsx)(s.em,{children:"4D for OCI"})," ne sont plus inclus dans les installateurs 4D. Pour obtenir ces plug-ins, vous devez vous connecter au ",(0,t.jsx)(s.a,{href:"https://product-download.4d.com/",children:(0,t.jsx)(s.strong,{children:"portail de t\xe9l\xe9chargement des produits 4D"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Les modifications apport\xe9es \xe0 l'\xe9diteur de structure concernant l'apparence graphique des tables et des champs (couleur, position, ordre...) sont maintenant sauvegard\xe9s dans un fichier s\xe9par\xe9 nomm\xe9 ",(0,t.jsx)(s.code,{children:"catalog_editor.json"})," stock\xe9 dans le dossier ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Project/architecture#sources",children:(0,t.jsx)(s.code,{children:"Sources"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4d-20-r4",children:"4D 20 R4"}),"\n",(0,t.jsxs)(s.p,{children:["Lisez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/fr-whats-new-in-4d-v20-R4/",children:(0,t.jsx)(s.strong,{children:"Les nouveaut\xe9s de 4D 20 R4"})}),", l'article de blog qui liste toutes les nouvelles fonctionnalit\xe9s et am\xe9liorations de 4D 20 R4."]}),"\n",(0,t.jsx)(s.h4,{id:"points-forts-2",children:"Points forts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Prise en charge du ",(0,t.jsxs)(s.a,{href:"/docs/fr/20-R6/Admin/tls#encryption",children:["format de cryptage ",(0,t.jsx)(s.code,{children:"ECDSA"})]})," pour les certificats TLS."]}),"\n",(0,t.jsxs)(s.li,{children:["Les connexions TLS client/serveur et serveur SQL sont d\xe9sormais ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Admin/tls#enabling-tls-with-the-other-servers",children:"configur\xe9es dynamiquement"})," (aucun fichier de certificat n'est requis)."]}),"\n",(0,t.jsxs)(s.li,{children:["Format HTML direct pour les ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html",children:"exports de d\xe9finition de structure"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/code-editor/write-class-method#warnings-and-errors",children:"Code Live Checker"})," qui am\xe9liore le contr\xf4le du code pendant le typage, la v\xe9rification de la syntaxe et les \xe9tapes de compilation afin d'\xe9viter les erreurs d'ex\xe9cution."]}),"\n",(0,t.jsxs)(s.li,{children:["Les param\xe8tres de m\xe9thode d\xe9clar\xe9s dans les prototypes ",(0,t.jsx)(s.code,{children:"#DECLARE"}),' ne sont [plus n\xe9cessaires dans les m\xe9thodes "Compiler_"(../Concepts/parameters.md#compilation).']}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge des ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Project/date-time-formats",children:"formats de date et d'heure personnalis\xe9s"})]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau mot-cl\xe9 ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/error-handling#tryexpression",children:(0,t.jsx)(s.code,{children:"Try(expression)"})})," pour g\xe9rer les cas d'erreur simples."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/HTTPRequestClass#http-parse-message",children:(0,t.jsx)(s.code,{children:"HTTP Parse message"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle option de compatibilit\xe9 ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/settings/compatibility",children:"Impression non bloquante"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouveau ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Admin/dataExplorer#editing-data",children:"mode \xe9dition"})," dans le Data Explorer."]}),"\n",(0,t.jsxs)(s.li,{children:["Commandes du langage 4D : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html",children:"page What's new"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R4",children:(0,t.jsx)(s.strong,{children:"Liste des bugs corrig\xe9s"})})," : liste de tous les bugs qui ont \xe9t\xe9 corrig\xe9s dans 4D 20 R4."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"changements-de-comportement-2",children:"Changements de comportement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["L'utilisation d'une ancienne syntaxe pour la d\xe9claration des param\xe8tres (par exemple ",(0,t.jsx)(s.code,{children:"C_TEXT($1)"})," ou ",(0,t.jsx)(s.code,{children:"var $1 : Text"}),") est maintenant d\xe9pr\xe9ci\xe9e et g\xe9n\xe8re des warnings lors du typage du code, de la v\xe9rification syntaxique et de la compilation."]}),"\n",(0,t.jsxs)(s.li,{children:["La coh\xe9rence des s\xe9lections est d\xe9sormais pr\xe9serv\xe9e lorsque certains enregistrements sont supprim\xe9s puis d'autres cr\xe9\xe9s (voir ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/",children:"ce billet de blog"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["Dans la mise \xe0 jour de la ",(0,t.jsx)(s.a,{href:"#library-table",children:"biblioth\xe8que OpenSSL"}),", le niveau de s\xe9curit\xe9 SSL/TLS par d\xe9faut a \xe9t\xe9 modifi\xe9 de 1 \xe0 2. Les cl\xe9s RSA, DSA et DH de 1024 bits et plus et de moins de 2048 bits ainsi que les cl\xe9s ECC de 160 bits et plus et de moins de 224 bits ne sont plus autoris\xe9es. Par d\xe9faut, la compression TLS \xe9tait d\xe9j\xe0 d\xe9sactiv\xe9e dans les versions pr\xe9c\xe9dentes d'OpenSSL. Au niveau de s\xe9curit\xe9 2, il ne peut pas \xeatre activ\xe9."]}),"\n",(0,t.jsxs)(s.li,{children:["Afin de permettre la v\xe9rification du mot de passe lorsque ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/bcrypt-support-for-passwords/",children:"l'annuaire des utilisateurs 4D utilise l'algorithme bcrypt"}),', la valeur "password" dans le param\xe8tre ',(0,t.jsx)(s.em,{children:"connectionInfo"})," de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/DataStoreClass#open-datastore",children:(0,t.jsx)(s.code,{children:"Open datastore"})}),' est maintenant envoy\xe9e en clair par d\xe9faut. Assurez-vous que votre m\xe9thode base "On REST authentication" peut g\xe9rer les mots de passe en clair (le troisi\xe8me param\xe8tre est alors ',(0,t.jsx)(s.strong,{children:"False"}),") et que ",(0,t.jsx)(s.code,{children:"Open datastore"}),' chiffre votre connexion en passant l\'option "tls" \xe0 ',(0,t.jsx)(s.strong,{children:"True"})," dans ",(0,t.jsx)(s.em,{children:"connectionInfo"}),'. Dans certains cas sp\xe9cifiques, une nouvelle option "passwordAlgorithm" peut \xe9galement \xeatre utilis\xe9e pour la compatibilit\xe9 (voir la commande ',(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/DataStoreClass#open-datastore",children:(0,t.jsx)(s.code,{children:"Open datastore"})}),")."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4d-20-r3",children:"4D 20 R3"}),"\n",(0,t.jsxs)(s.p,{children:["Lisez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/fr-whats-new-in-4d-v20-R3/",children:(0,t.jsx)(s.strong,{children:"Les nouveaut\xe9s de 4D 20 R3"})}),", l'article de blog qui liste toutes les nouvelles fonctionnalit\xe9s et am\xe9liorations de 4D 20 R3."]}),"\n",(0,t.jsx)(s.h4,{id:"points-forts-3",children:"Points forts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Nouvelle fonction ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/CollectionClass#multisort",children:(0,t.jsx)(s.code,{children:"collection.multiSort"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge du param\xe8tre ",(0,t.jsx)(s.em,{children:"context"})," dans ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/FunctionClass#formula-from-string",children:(0,t.jsx)(s.code,{children:"Formula from string"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Prise en charge de la propri\xe9t\xe9 ",(0,t.jsx)(s.code,{children:"headers"})," dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"connectionHandler"})," de ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/WebSocketClass#4dwebsocketnew",children:"4D.WebSocket.new"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/ORDA/global-stamp",children:"Marqueur de modification global"})," pour faciliter la mise en \u0153uvre de modules de synchronisation des donn\xe9es. Nouvelles fonctions : ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/DataStoreClass#getglobalstamp",children:(0,t.jsx)(s.code,{children:"ds.getGlobalStamp"})})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/DataStoreClass#setglobalstamp",children:(0,t.jsx)(s.code,{children:"ds.setGlobalStamp"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["L'assignation de r\xe9f\xe9rences de fichiers \xe0 des attributs picture/blob est ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/ORDA/entities#d#assigning-files-to-picture-or-blob-attributes",children:"prise en charge dans ORDA"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Prise en charge de [l'initialisation de la valeur et du type de donn\xe9es de la variable dans la ligne de d\xe9claration](../Concepts/variables/#initialisation des variables dans la ligne de d\xe9claration)."}),"\n",(0,t.jsxs)(s.li,{children:["Les param\xe8tres du fichier journal sont d\xe9sormais ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Backup/settings#log-file-management",children:"sauvegard\xe9s avec le fichier de donn\xe9es courant"})]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle syntaxe pour ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/parameters#declaring-variadic-parameters",children:"d\xe9clarer des param\xe8tres variadiques"})]}),"\n",(0,t.jsxs)(s.li,{children:["4D View Pro : Prise en charge de ",(0,t.jsx)(s.a,{href:"../ViewPro/commands/vp-import-from-blob",children:"l'importation"})," et de ",(0,t.jsx)(s.a,{href:"../ViewPro/commands/vp-export-to-blob",children:"l'exportation"})," des documents 4D View Pro au format Blob."]}),"\n",(0,t.jsxs)(s.li,{children:["Commandes du langage 4D : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html",children:"page What's new"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R3",children:(0,t.jsx)(s.strong,{children:"Liste des bugs corrig\xe9s"})})," : liste de tous les bugs qui ont \xe9t\xe9 corrig\xe9s dans 4D 20 R3."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"changements-de-comportement-3",children:"Changements de comportement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Certaines erreurs ne pouvaient \xeatre intercept\xe9es par votre ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/Concepts/error-handling",children:"m\xe9thode de gestion des erreurs"})," qu'en mode interpr\xe9t\xe9. Une correction a \xe9t\xe9 apport\xe9e, de sorte que les erreurs suivantes seront d\xe9sormais \xe9galement d\xe9tect\xe9es en mode compil\xe9 : ",(0,t.jsx)(s.em,{children:"Indice hors de l'intervalle"}),", ",(0,t.jsx)(s.em,{children:"Type incompatible"}),", et ",(0,t.jsx)(s.em,{children:"D\xe9r\xe9f\xe9rencement d'un pointeur Null"}),". Cependant, pour de telles erreurs sur les processeurs Intel, la proc\xe9dure est toujours interrompue comme auparavant, alors que sur les processeurs Apple Silicon, la proc\xe9dure n'est interrompue que si vous appelez la commande ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page156.html",children:(0,t.jsx)(s.code,{children:"ABORT"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["4D n'inclut plus d'interpr\xe9teur PHP interne. Vous devez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter",children:"configurer et ex\xe9cuter votre propre interpr\xe9teur PHP"})," pour utiliser les commandes PHP."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4d-20-r2",children:"4D 20 R2"}),"\n",(0,t.jsxs)(s.p,{children:["Lisez ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/fr-whats-new-in-4d-v20-R2/",children:(0,t.jsx)(s.strong,{children:"Les nouveaut\xe9s de 4D 20 R2"})}),", l'article de blog qui liste toutes les nouvelles fonctionnalit\xe9s et am\xe9liorations de 4D 20 R2."]}),"\n",(0,t.jsx)(s.admonition,{title:"Note de s\xe9curit\xe9",type:"warning",children:(0,t.jsxs)(s.p,{children:["Si vos applications 4D utilisent des connexions TLS, il est recommand\xe9 de mettre \xe0 jour 4D en release 20 R2 HF1 build 100440 ou plus. Pour plus d'informations, consultez ce ",(0,t.jsx)(s.a,{href:"https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/",children:"Bulletin de s\xe9curit\xe9"}),"."]})}),"\n",(0,t.jsx)(s.h4,{id:"points-forts-4",children:"Points forts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Nouvelle ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/WebSocketClass",children:"classe WebSocket"})," pour cr\xe9er et g\xe9rer les connexions WebSocket clientes depuis 4D."]}),"\n",(0,t.jsxs)(s.li,{children:["Nouvelle ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/settings/client-server#network-layer",children:"option d'interface"})," pour la couche r\xe9seau QUIC."]}),"\n",(0,t.jsxs)(s.li,{children:["4D View Pro : Prise en charge du format de fichier ",(0,t.jsx)(s.strong,{children:".sjs"})," pour ",(0,t.jsx)(s.a,{href:"../ViewPro/commands/vp-import-document",children:"l'importation"})," et ",(0,t.jsx)(s.a,{href:"../ViewPro/commands/vp-export-document",children:"l'exportation"})," de documents."]}),"\n",(0,t.jsxs)(s.li,{children:["Commandes du langage 4D : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html",children:"page What's new"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro : ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html",children:"Liste des nouveaut\xe9s"})," sur doc.4d.com."]}),"\n",(0,t.jsxs)(s.li,{children:["4D Write Pro Interface : Nouveau ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/WritePro/writeprointerface",children:"Table Wizard"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R2",children:(0,t.jsx)(s.strong,{children:"Liste des bugs corrig\xe9s"})})," : liste de tous les bugs qui ont \xe9t\xe9 corrig\xe9s dans 4D 20 R2."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"changements-de-comportement-4",children:"Changements de comportement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Attention"})," : La valeur de d\xe9part ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/FileHandleClass#offset",children:(0,t.jsx)(s.code,{children:"offset"})})," des objets ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R6/API/FileHandleClass",children:"4D.FileHandle"})," \xe9tait incorrectement fix\xe9e \xe0 1 au lieu de 0. Une correction a \xe9t\xe9 apport\xe9e dans 4D \xe0 partir des versions ",(0,t.jsx)(s.strong,{children:"20.1 HF1"})," et ",(0,t.jsx)(s.strong,{children:"20 R2"})," et la valeur est maintenant 0."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4d-20x-lts",children:"4D 20.x LTS"}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"/docs/fr/20/Notes/updates",children:(0,t.jsx)(s.strong,{children:"Release Notes for 4D 20.x LTS"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"tableau-des-biblioth\xe8ques",children:"Tableau des biblioth\xe8ques"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Biblioth\xe8que"}),(0,t.jsx)(s.th,{children:"Version courante"}),(0,t.jsx)(s.th,{children:"Mise \xe0 jour dans 4D"}),(0,t.jsx)(s.th,{children:"Commentaire"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"BoringSSL"}),(0,t.jsx)(s.td,{children:"0aa300b"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"20 R6"})}),(0,t.jsx)(s.td,{children:"Utilis\xe9 pour QUIC"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CEF"}),(0,t.jsx)(s.td,{children:"121"}),(0,t.jsx)(s.td,{children:"20 R5"}),(0,t.jsx)(s.td,{children:"Chromium 6167"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Hunspell"}),(0,t.jsx)(s.td,{children:"1.7.2"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"Utilis\xe9 pour la v\xe9rification orthographique dans les formulaires 4D et 4D Write Pro"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ICU"}),(0,t.jsx)(s.td,{children:"73.2"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"Cette mise \xe0 jour majeure entra\xeene une reconstruction automatique des index alphanum\xe9riques, texte et objets."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"libldap"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"2.6.7"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"20 R6"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"libsasl"}),(0,t.jsx)(s.td,{children:"2.1.28"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Libuv"}),(0,t.jsx)(s.td,{children:"1.48"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"20 R6"})}),(0,t.jsx)(s.td,{children:"Utilis\xe9 pour QUIC"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"libZip"}),(0,t.jsx)(s.td,{children:"1.9.2"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"Utilis\xe9 par les classes zip, 4D Write Pro, les composants svg et serverNet"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"LZMA"}),(0,t.jsx)(s.td,{children:"5.4.1"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"OpenSSL"}),(0,t.jsx)(s.td,{children:"3.2.0"}),(0,t.jsx)(s.td,{children:"20 R4"}),(0,t.jsxs)(s.td,{children:["Le niveau de s\xe9curit\xe9 TLS/SSL par d\xe9faut a \xe9t\xe9 relev\xe9. Voir ",(0,t.jsx)(s.a,{href:"#behavior-changes",children:"Changements de comportement"})," pour la version 20 R4"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PDFWriter"}),(0,t.jsx)(s.td,{children:"4.3"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"FreeType dependency dans 12.2.1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PHP"}),(0,t.jsx)(s.td,{children:"8.2.4"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SpreadJS"}),(0,t.jsx)(s.td,{children:"16.2.6"}),(0,t.jsx)(s.td,{children:"20 R4"}),(0,t.jsx)(s.td,{children:"Moteur 4D View Pro"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"webKit"}),(0,t.jsx)(s.td,{children:"WKWebView"}),(0,t.jsx)(s.td,{children:"19"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Zlib"}),(0,t.jsx)(s.td,{children:"1.2.13"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return d}});var r=n(667294);let t={},i=r.createContext(t);function d(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);