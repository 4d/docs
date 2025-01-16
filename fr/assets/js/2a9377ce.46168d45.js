"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90357"],{833969:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/web-set-option","title":"WEB SET OPTION","description":"WEB SET OPTION ( s\xe9lecteur ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-option","permalink":"/docs/fr/20-R7/commands/web-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-set-option","title":"WEB SET OPTION","slug":"/commands/web-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET HTTP HEADER","permalink":"/docs/fr/20-R7/commands/web-set-http-header"},"next":{"title":"WEB SET ROOT FOLDER","permalink":"/docs/fr/20-R7/commands/web-set-root-folder"}}'),t=r("785893"),i=r("250065");let d={id:"web-set-option",title:"WEB SET OPTION",slug:"/commands/web-set-option",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB SET OPTION"})," ( ",(0,t.jsx)(s.em,{children:"s\xe9lecteur"})," ; ",(0,t.jsx)(s.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"s\xe9lecteur"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Code de l\u2019option \xe0 modifier"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"valeur"}),(0,t.jsx)(s.td,{children:"Integer, Text, Collection"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Valeur de l\u2019option"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"WEB SET OPTION"})," permet de modifier la valeur courante de diverses options de fonctionnement du serveur Web de 4D."]}),"\n",(0,t.jsx)(s.p,{children:"Les modifications apport\xe9es \xe0 ces options sont conserv\xe9es en cas d'arr\xeat et de red\xe9marrage du serveur HTTP, en revanche elles ne sont pas conserv\xe9es en cas d'arr\xeat et de red\xe9marrage de l'application 4D elle-m\xeame."}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"s\xe9lecteur"}),' une des constantes du th\xe8me "',(0,t.jsx)(s.em,{children:"Serveur Web"}),'" et dans ',(0,t.jsx)(s.em,{children:"valeur"})," la nouvelle valeur de l\u2019option :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constante"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Valeur"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web character set"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"17"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Jeu de caract\xe8res que le serveur Web 4D (avec 4D en mode local et 4D Server) utilise pour communiquer avec les navigateurs Web qui se connectent \xe0 la base. La valeur par d\xe9faut d\xe9pend de la langue du syst\xe8me d\u2019exploitation. Ce param\xe8tre est d\xe9fini dans les Propri\xe9t\xe9s de la base. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : Les valeurs possibles d\xe9pendent du mode d'ex\xe9cution de la base relatif au jeu de caract\xe8res. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.em,{children:"Mode Unicode"})," : Lorsque l\u2019application est ex\xe9cut\xe9e en mode Unicode, les valeurs \xe0 passer pour ce param\xe8tre sont des identifiants de jeux de caract\xe8res (entier long ",(0,t.jsx)(s.em,{children:"MIBEnum"})," ou cha\xeene ",(0,t.jsx)(s.em,{children:"Name"}),", identifiants d\xe9finis par l\u2019IANA, cf. ",(0,t.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"}),"). Voici la liste des identifiants correspondant aux jeux de caract\xe8res pris en charge par le serveur Web de 4D :",(0,t.jsx)(s.br,{})," 4=ISO-8859-1",(0,t.jsx)(s.br,{}),"12=ISO-8859-9",(0,t.jsx)(s.br,{})," 13=ISO-8859-10",(0,t.jsx)(s.br,{})," 17=Shift-JIS",(0,t.jsx)(s.br,{}),"2024=Windows-31J",(0,t.jsx)(s.br,{})," 2026=Big5",(0,t.jsx)(s.br,{})," 38=euc-kr",(0,t.jsx)(s.br,{})," 106=UTF-8",(0,t.jsx)(s.br,{})," 2250=Windows-1250",(0,t.jsx)(s.br,{})," 2251=Windows-1251",(0,t.jsx)(s.br,{}),"2253=Windows-1253",(0,t.jsx)(s.br,{})," 2255=Windows-1255",(0,t.jsx)(s.br,{})," 2256=Windows-1256",(0,t.jsx)(s.em,{children:"Mode compatibilit\xe9 ASCII"})," :",(0,t.jsx)(s.br,{}),"0 : Occidental",(0,t.jsx)(s.br,{}),"1 : Japonais",(0,t.jsx)(s.br,{}),"2 : Chinois",(0,t.jsx)(s.br,{}),"3 : Cor\xe9en",(0,t.jsx)(s.br,{}),"4 : D\xe9fini par l\u2019utilisateur",(0,t.jsx)(s.br,{}),"5 : R\xe9serv\xe9",(0,t.jsx)(s.br,{}),"6 : Europe Centrale",(0,t.jsx)(s.br,{}),"7 : Cyrillique",(0,t.jsx)(s.br,{}),"8 : Arabe",(0,t.jsx)(s.br,{}),"9 : Grec",(0,t.jsx)(s.br,{}),"10 : H\xe9breu",(0,t.jsx)(s.br,{}),"11 : Turc",(0,t.jsx)(s.br,{}),"12 : Nordique"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web Client IP address to listen"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"23"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D distant",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : voir Web IP address to listen",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Permet de sp\xe9cifier ce param\xe9trage pour une machine 4D distante utilis\xe9e comme serveur Web (appliqu\xe9 au serveur Web distant uniquement)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web CORS enabled"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"92"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e :"})," serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"})," Statut du service CORS (",(0,t.jsx)(s.em,{children:"Cross-origin resource sharing"}),") du serveur Web. S'il est activ\xe9, les appels XHR (ex : REST) depuis les pages Web hors du domaine sont autoris\xe9s dans votre application. (",(0,t.jsx)(s.strong,{children:"Note :"})," Une liste d'adresses et de m\xe9thodes autoris\xe9es \xe0 utiliser le service CORS doit \xe9galement \xeatre d\xe9finie, voir Web CORS settings). Lorsque le service CORS est d\xe9sactiv\xe9, les requ\xeates CORS sont ignor\xe9es. Lorsque le service CORS est activ\xe9 et qu'un domaine ou une m\xe9thode non autoris\xe9s envoient une requ\xeate inter-site, il est rejet\xe9, accompagn\xe9 d'un message d'erreur \"403 - forbidden\" ",(0,t.jsx)(s.strong,{children:"Valeurs possibles :"})," 0 (d\xe9sactiv\xe9, par d\xe9faut) ou 1 (activ\xe9)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web CORS settings"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"93"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e :"})," serveur Web local ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," Liste de m\xe9thodes et d'h\xf4tes du service CORS",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles :"})," Collection d'objets CORS avec les propri\xe9t\xe9s suivantes :                     ",(0,t.jsx)(s.table,{children:(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Type"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Description"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[ ].host"}),(0,t.jsx)(s.td,{children:"Texte"}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.em,{children:"Obligatoire"}),"-- Si l'h\xf4te n'est pas pr\xe9sent ou vide, l'objet est ignor\xe9."]}),(0,t.jsx)(s.br,{}),"Nom de domaine ou adresse IP \xe0 partir desquels les pages externes sont autoris\xe9es \xe0 envoyer des requ\xeates de donn\xe9es au serveur via CORS. Plusieurs attributs de domaine peuvent \xeatre ajout\xe9s pour cr\xe9er une liste blanche. Plusieurs syntaxes sont prises en charge:",(0,t.jsx)(s.br,{}),"192.168.5.17:8081",(0,t.jsx)(s.br,{}),"192.168.5.17",(0,t.jsx)(s.br,{}),"192.168.*",(0,t.jsx)(s.br,{}),"192.168.*:8081",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.a,{href:"http://192.168.5.17:8081",children:"http://192.168.5.17:8081"}),(0,t.jsx)(s.br,{}),"http://*.myDomain.com",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.a,{href:"http://myProject.myDomain.com",children:"http://myProject.myDomain.com"}),(0,t.jsx)(s.br,{}),"*.myDomain.com",(0,t.jsx)(s.br,{}),"myProject.myDomain.com",(0,t.jsx)(s.br,{}),"*"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[ ].methods"}),(0,t.jsx)(s.td,{children:"Texte"}),(0,t.jsxs)(s.td,{children:['M\xe9thode(s) HTTP accept\xe9e(s) pour l\'h\xf4te CORS correspondant. S\xe9parez chaque m\xe9thode par un ";" (par exemple: "post; get")',(0,t.jsx)(s.br,{}),"Si ",(0,t.jsx)(s.em,{children:"methods"})," est vide, null ou ind\xe9fini : toutes les m\xe9thodes sont activ\xe9es."]}),(0,t.jsx)(s.td,{children:" "}),(0,t.jsx)(s.td,{children:" "})]})]})})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web debug log"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"84"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e :"})," serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"})," Permet de lire ou de d\xe9finir le statut du fichier de debug de requ\xeates HTTP du serveur Web 4D. Lorsqu'il est activ\xe9, ce fichier, nomm\xe9 \"",(0,t.jsxs)(s.strong,{children:["HTTPDebugLog_",(0,t.jsx)(s.em,{children:"nn"}),".txt"]}),'", est stock\xe9 dans le dossier "Logs" de l\'application (',(0,t.jsx)(s.em,{children:"nn"})," est le num\xe9ro de fichier). L'historique des requ\xeates HTTP est particuli\xe8rement utile dans le contexte du d\xe9bogage du serveur Web. Il stocke en texte brut chaque requ\xeate et chaque r\xe9ponse. La totalit\xe9 des requ\xeates, en-t\xeates compris, est enregistr\xe9e ; en option, il est possible d'enregistrer \xe9galement le corps (body) des requ\xeates. Pour plus d'informations sur les fichiers HTTPDebugLog, veuillez vous reporter \xe0 la section ",(0,t.jsx)(s.em,{children:"Description des fichiers d'historique"})," dans le manuel ",(0,t.jsx)(s.em,{children:"Mode D\xe9veloppement"}),". ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"}),' : Une des constantes pr\xe9fix\xe9es "wdl" (reportez-vous ci-dessous \xe0 la description de ces constantes).',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 0 (non activ\xe9)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HSTS enabled"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"86"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Statut pour ",(0,t.jsx)(s.em,{children:"HTTP Strict Transport Security"})," (HSTS). HSTS permet au serveur Web de 4D de d\xe9clarer que les navigateurs Web ne peuvent interagir avec lui que via des connexions HTTPS s\xe9curis\xe9es. Lorsque HSTS est activ\xe9, le serveur Web de 4D ajoute automatiquement des informations relatives au HSTS dans tous les en-t\xeates des r\xe9ponses. A la premi\xe8re connexion, les navigateurs enregistrent les informations HSTS re\xe7ues du serveur Web et toutes les requ\xeates HTTP futures seront automatiquement transform\xe9es en requ\xeates HTTPS. La dur\xe9e de conservation de ces informations par les navigateurs est d\xe9finie via le s\xe9lecteur Web HSTS max age. ",(0,t.jsx)(s.br,{})," HSTS n\xe9cessite que le HTTPS soit activ\xe9 sur le serveur. HTTP doit \xe9galement \xeatre activ\xe9 pour permettre la connexion initiale des clients. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 (d\xe9sactiv\xe9, valeur par d\xe9faut) ou 1 (activ\xe9)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Note :"})," Le serveur Web de 4D doit \xeatre red\xe9marr\xe9 pour que la modification de ce param\xe8tre soit prise en compte."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HSTS max age"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"87"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Dur\xe9e maximum (en secondes) d'activation du HSTS dans chaque nouvelle connexion cliente. Cette information sera stock\xe9e dans le navigateur pendant la dur\xe9e d\xe9finie. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : Entier long (nombre de secondes) ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 63072000 (2 ans)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.br,{}),(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.em,{children:"Attention :"})," Une fois que HSTS est activ\xe9, les connexions clientes continueront d'utiliser automatiquement ce m\xe9canisme pendant la dur\xe9e d\xe9finie. Lorsque vous testez vos applications, il est recommand\xe9 de d\xe9finir une dur\xe9e assez courte afin de pouvoir basculer en mode non-s\xe9curis\xe9 si n\xe9cessaire."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP compression level"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"50"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : Serveur Web local**",(0,t.jsx)(s.br,{}),"Description** : Niveau de compression pour tous les \xe9changes HTTP compress\xe9s effectu\xe9s pour le serveur HTTP de 4D (requ\xeates client ou r\xe9ponses serveur, Web et Web Service). Ce s\xe9lecteur permet d\u2019optimiser les \xe9changes en privil\xe9giant la rapidit\xe9 d\u2019ex\xe9cution (compression moindre) ou la quantit\xe9 de compression (vitesse moindre). Le choix d\u2019une valeur d\xe9pend de la taille et de la nature des donn\xe9es \xe9chang\xe9es. Passez de 1 \xe0 9 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"valeur"}),", 1 \xe9tant la compression la plus rapide et 9 la plus \xe9lev\xe9e. Vous pouvez \xe9galement passer -1 pour obtenir un compromis entre vitesse et taux de compression. Par d\xe9faut le niveau de compression est 1 (compression rapide).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : 1 \xe0 9 (1 = plus rapide, 9 = plus compress\xe9) ou -1 = meilleur compromis."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP compression threshold"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"51"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : Serveur HTTP local**",(0,t.jsx)(s.br,{}),"Description** : Dans le cadre d\u2019\xe9changes HTTP optimis\xe9s, seuil de taille de requ\xeate au-dessous de laquelle les \xe9changes ne doivent pas \xeatre compress\xe9s. Ce param\xe9trage est utile pour \xe9viter de perdre du temps machine \xe0 compresser les trop petits \xe9changes. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : Toute valeur de type Entier long. Le param\xe8tre ",(0,t.jsx)(s.em,{children:"valeur"})," contient une taille exprim\xe9e en octets. Par d\xe9faut, le seul de compression est fix\xe9 \xe0 1024 octets."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP enabled"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"88"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Statut des communications via HTTP.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 (d\xe9sactiv\xe9) ou 1 (activ\xe9)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP TRACE"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"85"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Permet de d\xe9sactiver ou d'activer la m\xe9thode HTTP TRACE dans le serveur Web de 4D. Pour des raisons de s\xe9curit\xe9, \xe0 compter de 4D v15 R2, par d\xe9faut le serveur Web de 4D Web rejette les requ\xeates HTTP TRACE avec l'erreur 405 (see D\xe9sactivation de HTTP TRACE). Si n\xe9cessaire, vous pouvez r\xe9tablir la prise en charge de la m\xe9thode HTTP TRACE pour la session en passant cette constante avec la valeur 1. Lorsque l'option est activ\xe9e, le serveur Web de 4D r\xe9pond aux requ\xeates HTTP TRACE en retournant la ligne de requ\xeate, l'en-t\xeate et le corps.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 (d\xe9sactiv\xe9) ou 1 (activ\xe9)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 0 (d\xe9sactiv\xe9)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTPS enabled"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"89"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Statut des communications via HTTPS.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 (d\xe9sactiv\xe9) ou 1 (activ\xe9)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTPS port ID"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"39"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server**",(0,t.jsx)(s.br,{}),"Description** : Num\xe9ro du port TCP utilis\xe9 par le serveur Web de 4D en mode local et de 4D Server pour les connexions s\xe9curis\xe9es via TLS (protocole HTTPS). Le num\xe9ro de port HTTPS est d\xe9fini dans la page \u201CWeb/Configuration\u201D de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base. ",(0,t.jsx)(s.br,{}),"Par d\xe9faut, la valeur est 443 (valeur standard). Vous pouvez utiliser les constantes du th\xe8me ",(0,t.jsx)(s.em,{children:"Num\xe9ros de port TCP"})," pour le param\xe8tre ",(0,t.jsx)(s.em,{children:"valeur"}),".",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 \xe0 65535"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web inactive process timeout"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"78"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description :"})," Permet de modifier la dur\xe9e de vie des process inactifs associ\xe9s aux sessions. A l\u2019issue du timeout, le process est tu\xe9 sur le serveur, la ",(0,t.jsx)(s.em,{children:"M\xe9thode base Sur fermeture session Web ancienne"})," est appel\xe9e puis le contexte de la session est d\xe9truit.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : Entier long (minutes)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 480 minutes (passez 0 pour r\xe9tablir la valeur par d\xe9faut)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web inactive session timeout"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"72"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description"})," : Permet de modifier la dur\xe9e de vie des sessions inactives (dur\xe9e d\xe9finie dans le cookie). A l\u2019issue de cette dur\xe9e, le cookie de session expire et n\u2019est plus envoy\xe9 par le client HTTP.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : Entier long (minutes)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 480 minutes (passez 0 pour r\xe9tablir la valeur par d\xe9faut)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web IP address to listen"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Adresse IP sur laquelle le serveur Web doit recevoir les requ\xeates HTTP avec 4D en mode local et 4D Server. Par d\xe9faut, aucune adresse particuli\xe8re n\u2019est sp\xe9cifi\xe9e. Ce param\xe8tre est d\xe9fini dans les Propri\xe9t\xe9s de la base. Ce s\xe9lecteur est utile dans le cas de serveurs Web 4D compil\xe9s et fusionn\xe9s avec 4D Desktop (pas d\u2019acc\xe8s au mode D\xe9veloppement). ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"}),' : Adresse IP sous forme de cha\xeene. Les formats cha\xeene IPv6 (ex : "2001:0db8:0000:0000:0000:ff00:0042:8329") et cha\xeene IPv4 (ex : "123.45.67.89") sont pris en charge.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Note :"})," Par compatibilit\xe9, les adresses IPv4 exprim\xe9es sous forme hexad\xe9cimale (obsol\xe8te) sont toujours prises en charge."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web legacy session"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"70"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local**",(0,t.jsx)(s.br,{}),"Description :** Permet d\u2019activer ou d\u2019inactiver la gestion automatique des sessions (d\xe9crit dans la section ",(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),"). ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : 1 (activer mode) ou 0 (inactiver mode)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 1 pour les bases cr\xe9\xe9es depuis la v13, 0 pour les bases converties. A noter que ce mode active \xe9galement le m\xe9canisme de r\xe9utilisation des contextes temporaires en mode distant. Pour plus d\u2019informations sur ce m\xe9canisme, reportez-vous \xe0 la description de cette option dans la section ",(0,t.jsx)(s.em,{children:"Param\xe9trages du serveur Web"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web log recording"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"29"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : D\xe9marrage ou arr\xeat de l\u2019enregistrement des requ\xeates Web re\xe7ues par le serveur Web de 4D en mode local ou de 4D Server. Par d\xe9faut, la valeur est 0 (pas d\u2019enregistrement des requ\xeates). ",(0,t.jsx)(s.br,{}),"L\u2019historique des requ\xeates Web est stock\xe9 sous la forme d\u2019un fichier texte nomm\xe9 \u201Clogweb.txt\u201D automatiquement plac\xe9 dans le dossier Logs de la base, \xe0 c\xf4t\xe9 du fichier de structure. Le format de ce fichier est d\xe9termin\xe9 par la valeur que vous passez. Pour plus d'informations sur les diff\xe9rents formats d'historique des requ\xeates, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Informations sur le site Web"}),". L\u2019activation de ce fichier peut \xe9galement \xeatre d\xe9finie dans la page \u201CWeb/Journal\u201D des Propri\xe9t\xe9s de la base. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 = Ne pas enregistrer (d\xe9faut), 1 = Enregistrer au format CLF, 2 = Enregistrer au format DLF, 3 = Enregistrer au format ELF, 4 = Enregistrer au format WLF.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Attention"})," : Les formats 3 et 4 sont des formats personnalis\xe9s, dont le contenu doit \xeatre d\xe9fini au pr\xe9alable dans les Propri\xe9t\xe9s de la base. Si vous utilisez l\u2019un de ces formats sans que ses champs n\u2019aient \xe9t\xe9 s\xe9lectionn\xe9s, le fichier des requ\xeates n\u2019est pas g\xe9n\xe9r\xe9."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web max concurrent processes"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"18"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Limite strictement sup\xe9rieure du nombre de process Web de tout type accept\xe9s par le serveur Web avec 4D en mode local et 4D Server. Lorsque ce nombre limite (moins un) est atteint, 4D ne cr\xe9e plus de nouveau process et retourne le message \u201CServeur non disponible\u201D (statut HTTP 503 - Service Unavailable) \xe0 toute nouvelle requ\xeate.",(0,t.jsx)(s.br,{}),"Ce param\xe8tre permet de pr\xe9venir la saturation du serveur Web 4D pouvant se produire lors d\u2019un envoi massif de requ\xeates ou d\u2019une demande excessive de cr\xe9ation de contextes. Il peut \xe9galement \xeatre d\xe9fini dans la bo\xeete de dialogue des Propri\xe9t\xe9s de la base.",(0,t.jsx)(s.br,{}),"En th\xe9orie, le nombre maximum de process Web est le r\xe9sultat de la division M\xe9moire disponible / Taille de la pile d\u2019un process Web. Une autre solution consiste \xe0 visualiser les informations sur les process Web affich\xe9es dans l\u2019Exporateur d\u2019ex\xe9cution : le nombre courant de process Web et le nombre maximum atteint depuis le d\xe9marrage du serveur Web sont indiqu\xe9s.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : Toute valeur incluse entre 10 et 32 000. La valeur par d\xe9faut est 100."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web max sessions"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"71"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description"})," : Permet de limiter le nombre de sessions simultan\xe9es. Lorsque le nombre d\xe9fini est atteint, la session la plus ancienne est d\xe9truite (et la ",(0,t.jsx)(s.em,{children:"M\xe9thode base Sur fermeture session Web ancienne"})," est appel\xe9e) si le serveur Web a besoin d\u2019en cr\xe9er une nouvelle.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs"})," : Entier long. Le nombre de sessions simultan\xe9es ne peut pas d\xe9passer le nombre total de process Web (option Web max concurrent processes, 100 par d\xe9faut)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 100 (passez 0 pour r\xe9tablir la valeur par d\xe9faut)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web maximum requests size"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"27"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : 4D local, 4D Server**",(0,t.jsx)(s.br,{}),"Description** : Taille maximale (en octets) des requ\xeates HTTP entrantes (POST) que le serveur Web est autoris\xe9 \xe0 traiter. Par d\xe9faut, la valeur est 2 000 000, c\u2019est-\xe0-dire un peu moins de 2 Mo. La valeur maximale (2 147 483 647) signifie en pratique qu\u2019aucune limite n\u2019est fix\xe9e. ",(0,t.jsx)(s.br,{}),"Ce param\xe9trage permet d\u2019emp\xeacher une saturation du serveur Web li\xe9e \xe0 des requ\xeates entrantes de trop grande taille. Lorsqu\u2019une requ\xeate atteint la limite, le serveur Web de 4D la refuse.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 500 000 \xe0 2 147 483 647."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web port ID"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"15"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," ",(0,t.jsx)(s.strong,{children:":"})," 4D en mode local et 4D Server.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"})," Permet de fixer ou de lire le num\xe9ro du port TCP utilis\xe9 par le serveur Web 4D avec 4D en mode local et 4D Server. Le num\xe9ro de port TCP est d\xe9fini dans la page \u201CWeb/Configuration\u201D de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base. Vous pouvez utiliser les constantes du th\xe8me ",(0,t.jsx)(s.em,{children:"Num\xe9ros de port TCP"})," pour le param\xe8tre ",(0,t.jsx)(s.em,{children:"valeur"}),". Ce s\xe9lecteur est utile dans le cadre de serveurs Web 4D compil\xe9s et fusionn\xe9s avec 4D Desktop (pas d\u2019acc\xe8s au mode D\xe9veloppement).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs :"})," Pour plus d\u2019informations sur le num\xe9ro de port TCP, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Param\xe9trages du serveur Web"}),".",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut :"})," 80"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web scalable session"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"90"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : Serveur Web local ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"})," Active ou d\xe9sactive le mode de gestion de session extensible (d\xe9crit dans ",(0,t.jsx)(s.em,{children:"la page Session utilisateur"})," sur ",(0,t.jsx)(s.em,{children:"developer.4d.com"}),")",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 1 (activer mode) ou 0 (d\xe9sactiver mode). Si la valeur est modifi\xe9e, le serveur Web doit \xeatre red\xe9marr\xe9 pour que la modification soit prise en compte. Lorsque ce mode est activ\xe9, les options suivantes sont ignor\xe9es : Web inactive process timeout, Web max concurrent processes, Web session cookie name, et Web inactive session timeout."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie domain"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"81"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e :"})," serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"}),' Permet de fixer ou de lire la valeur du champ "domain" du cookie de session. Ce s\xe9lecteur (ainsi que le s\xe9lecteur 82) est utile pour contr\xf4ler la port\xe9e des cookies de session : si vous d\xe9finissez par exemple la valeur "/*.4d.fr" pour ce s\xe9lecteur, le client n\'enverra un cookie que lorsque la requ\xeate s\'adresse au domaine ".4d.fr", ce qui exclut les serveurs h\xe9bergeant des donn\xe9es statiques externes.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs :"})," Texte"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie name"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"73"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"})," Permet de d\xe9finir le nom du cookie utilis\xe9 pour stocker l\u2019ID de session.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs :"})," Texte. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut :"}),' "4DSID" (passez une cha\xeene vide pour r\xe9tablir la valeur par d\xe9faut)']})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie path"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"82"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e :"})," serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description :"}),' Permet de fixer ou de lire la valeur du champ "path" du cookie de session. Ce s\xe9lecteur (ainsi que le s\xe9lecteur 81) est utile pour contr\xf4ler la port\xe9e des cookies de session : si vous d\xe9finissez par exemple la valeur "/4DACTION" pour ce s\xe9lecteur, le client n\'enverra un cookie que pour les requ\xeates dynamiques d\xe9butant par 4DACTION et pas pour les images, pages statiques, etc.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs :"})," Texte"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session enable IP address validation"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"83"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Port\xe9e"})," : serveur Web local",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"})," : Permet de d\xe9sactiver ou d'activer la validation des adresses IP pour les cookies de session. Pour des raisons de s\xe9curit\xe9, par d\xe9faut le serveur Web de 4D v\xe9rifie l'adresse IP de chaque requ\xeate contenant un cookie de session et rejette la requ\xeate si cette adresse ne correspond pas \xe0 l'adresse IP utilis\xe9e pour cr\xe9er le cookie. Dans certaines applications sp\xe9cifiques, vous pouvez souhaiter d\xe9sactiver cette validation et accepter les cookies de session m\xeame si les adresses IP ne correspondent pas. Par exemple, lorsque les appareils mobiles basculent du r\xe9seau Wifi au r\xe9seau 3G/4G, leur adresse IP change. Dans ce cas, vous pouvez passer 0 dans cette option afin de permettre aux clients de pouvoir continuer \xe0 utiliser leur session Web m\xeame apr\xe8s changement d'adresse IP. Notez que ce param\xe9trage abaisse le niveau de s\xe9curit\xe9 de votre application.",(0,t.jsx)(s.br,{}),"Lorsqu'il est modifi\xe9, ce param\xe9trage est effectif imm\xe9diatement (il n'est pas n\xe9cessaire de red\xe9marrer le serveur HTTP).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeurs possibles"})," : 0 (d\xe9sactiv\xe9) ou 1 (activ\xe9)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})," : 1 (les adresses IP sont v\xe9rifi\xe9es)"]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous utilisez le ",(0,t.jsx)(s.em,{children:"s\xe9lecteur"})," Web debug log, vous pouvez passer une des constantes suivantes dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"valeur"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constante"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Valeur"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl disable web log"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"Le fichier de debug de requ\xeates HTTP Web est d\xe9sactiv\xe9"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with all body parts"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"Le fichier de debug de requ\xeates HTTP Web est activ\xe9 avec les body de la requ\xeate et de la r\xe9ponse"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with request body"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"Le fichier de debug de requ\xeates HTTP Web est activ\xe9 avec le body de la requ\xeate uniquement"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with response body"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"Le fichier de debug de requ\xeates HTTP Web est activ\xe9 avec le body de la r\xe9ponse uniquement"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable without body"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Le fichier de debug de requ\xeates HTTP Web est activ\xe9 sans les body (la taille des body est fournie dans ce cas)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Activation du fichier d'historique de debug des requ\xeates HTTP, sans les parties body :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0WEB SET OPTION(Web debug log;wdl enable without body)\n"})}),"\n",(0,t.jsx)(s.p,{children:"Voici un exemple d'entr\xe9e enregistr\xe9e dans le fichier d'historique :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-RAW",children:"# REQUEST# SocketID: 1592# PeerIP: 127.0.0.1# PeerPort: 54912# TimeStamp: 39089388#ConnectionID: 9808E3B4B06E4EB5A60E9A3FC69116BD#SequenceNumber: 5GET /4DWEBTEST HTTP/1.1Connection: CloseHost: 127.0.0.1User-Agent: 4D_HTTP_Client/0.0.0.0# RESPONSE# SocketID: 1592# PeerIP: 127.0.0.1# PeerPort: 54912# TimeStamp: 39089389 (elapsed time: 1 ms)#ConnectionID: 9808E3B4B06E4EB5A60E9A3FC69116BD#SequenceNumber: 6HTTP/1.1 200 OKAccept-Ranges: bytesConnection: keep-aliveContent-Encoding: gzipContent-Length: 3555Content-Type: text/plain; charset=UTF-8Date: Thu, 20 Apr 2017 10:51:29 GMTExpires: Thu, 20 Apr 2017 10:51:29 GMTServer: 4D/16.0[Body Size: 3555]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/web-get-option",children:"WEB GET OPTION"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/web-legacy-get-session-expiration",children:"WEB LEGACY GET SESSION EXPIRATION"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);