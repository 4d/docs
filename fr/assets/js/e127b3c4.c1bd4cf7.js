"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14316"],{929655:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/sql-login","title":"SQL LOGIN","description":"SQL LOGIN {( source ; nomUtilisateur ; motDePasse ; * )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sql-login.md","sourceDirName":"commands-legacy","slug":"/commands/sql-login","permalink":"/docs/fr/commands/sql-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-login.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sql-login","title":"SQL LOGIN","slug":"/commands/sql-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL LOAD RECORD","permalink":"/docs/fr/commands/sql-load-record"},"next":{"title":"SQL LOGOUT","permalink":"/docs/fr/commands/sql-logout"}}'),i=n("785893"),l=n("250065");let a={id:"sql-login",title:"SQL LOGIN",slug:"/commands/sql-login",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Exemple 6",id:"exemple-6",level:2},{value:"Exemple 7",id:"exemple-7",level:2},{value:"Exemple 8",id:"exemple-8",level:2},{value:"Exemple 9",id:"exemple-9",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",adresse:"adresse",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",porttcp:"porttcp",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SQL LOGIN"})," {( ",(0,i.jsx)(s.em,{children:"source"})," ; ",(0,i.jsx)(s.em,{children:"nomUtilisateur"})," ; ",(0,i.jsx)(s.em,{children:"motDePasse"})," ; * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"source"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:'Nom de publication de base 4D ouAdresse IP de base distante ouNom de source de donn\xe9es dans le gestionnaire ODBC ou"" pour afficher le dialogue de s\xe9lection'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nomUtilisateur"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Nom d\u2019utilisateur enregistr\xe9 dans la source de donn\xe9es"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"motDePasse"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Mot de passe de l\u2019utilisateur"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Op\xe9rateur"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Appliquer \xe0 Debut SQL/Fin SQL Si omis : ne pas appliquer (base locale), si pass\xe9 : appliquer"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"SQL LOGIN"})," vous permet d\u2019ouvrir une connexion avec une source de donn\xe9es SQL, d\xe9finie dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"source"}),". Elle d\xe9signe la cible des requ\xeates SQL ex\xe9cut\xe9es ult\xe9rieurement dans le process courant :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"}),","]}),"\n",(0,i.jsxs)(s.li,{children:["via le code plac\xe9 \xe0 l\u2019int\xe9rieur des balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," (si le param\xe8tre ",(0,i.jsx)(s.em,{children:"*"})," est pass\xe9)."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"La source de donn\xe9es SQL peut \xeatre soit :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"une base 4D Server externe \xe0 laquelle vous acc\xe9dez directement,"}),"\n",(0,i.jsx)(s.li,{children:"une source ODBC externe,"}),"\n",(0,i.jsx)(s.li,{children:"la base 4D locale (base interne)."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez passer dans ",(0,i.jsx)(s.em,{children:"source"})," l\u2019une des valeurs suivantes : une adresse IP, un nom de publication de base 4D, un nom de source de donn\xe9es ODBC, une cha\xeene vide ou la constante SQL_INTERNAL."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"adresse IP"}),(0,i.jsx)(s.br,{}),"\nSyntaxe : ",(0,i.jsxs)(s.strong,{children:["IP:",(0,i.jsxs)(s.adresse,{ip:"",children:["{:",(0,i.jsx)(s.porttcp,{children:"}"})]})]}),(0,i.jsx)(s.br,{}),'\nDans ce cas, la commande ouvre une connexion directe avec la base 4D Server ex\xe9cut\xe9e sur l\u2019ordinateur ayant l\u2019adresse IP d\xe9finie. Sur l\u2019ordinateur "cible", le serveur SQL doit \xeatre lanc\xe9. Si vous passez un num\xe9ro de port TCP, il doit avoir \xe9t\xe9 sp\xe9cifi\xe9 comme port de publication du serveur SQL dans la base "cible". Si vous ne passez pas de num\xe9ro de port TCP, le port par d\xe9faut sera utilis\xe9 (19812). Le num\xe9ro de port TCP du serveur SQL peut \xeatre modifi\xe9 dans la page "SQL" des Propri\xe9t\xe9s de la base. Reportez-vous aux exemples 4 et 5.',(0,i.jsx)(s.br,{}),'\nSi vous avez activ\xe9 le SSL pour le serveur SQL "cible" (option accessible via les Propri\xe9t\xe9s de la base), vous devez ajouter le mot-cl\xe9 ":ssl" \xe0 la suite de l\'adresse IP et du port TCP (obligatoire dans ce cas) afin que le serveur puisse traiter correctement la requ\xeate (voir exemple 6).']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"nom de publication de base 4D"}),(0,i.jsx)(s.br,{}),"\nSyntaxe : ",(0,i.jsx)(s.strong,{children:"4D:<Nom_de_Publication>"}),(0,i.jsx)(s.br,{}),'\nDans ce cas, la commande ouvre une connexion directe avec la base 4D Server dont le nom de publication sur le r\xe9seau correspond au nom sp\xe9cifi\xe9. Le nom de publication r\xe9seau d\u2019une base est d\xe9fini dans la page "Client-Serveur" des Propri\xe9t\xe9s de la base.',(0,i.jsx)(s.br,{}),"\nReportez-vous \xe0 l\u2019exemple 4.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Note :"})," Le num\xe9ro de port TCP du serveur SQL 4D cible (qui publie la base 4D) et le num\xe9ro de port TCP du serveur SQL de l\u2019application 4D ouvrant la connexion doivent \xeatre identiques."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"nom de source de donn\xe9es ODBC valide"}),(0,i.jsx)(s.br,{}),"\nSyntaxe : ",(0,i.jsx)(s.strong,{children:"ODBC:<Ma_DSN>"})," ou ",(0,i.jsx)(s.strong,{children:"<Ma_DSN>"}),(0,i.jsx)(s.br,{}),"\nDans ce cas, le param\xe8tre ",(0,i.jsx)(s.em,{children:"source"})," contient le nom de la source de donn\xe9es telle qu'elle a \xe9t\xe9 d\xe9finie dans le gestionnaire du pilote ODBC.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Notes :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'Par compatibilit\xe9 avec les versions pr\xe9c\xe9dentes de 4D, il est possible d\'omettre le pr\xe9fixe "ODBC:". Toutefois pour des raisons de lisibilit\xe9 du code il est conseill\xe9 d\u2019utiliser ce pr\xe9fixe. Reportez-vous \xe0 l\u2019exemple 2.'}),"\n",(0,i.jsx)(s.li,{children:'Sous Windows, le nom de la source de donn\xe9es doit respecter les majuscules/minuscules. Par exemple, si la source de donn\xe9es a \xe9t\xe9 d\xe9finie en "4D_v16", passer la valeur "4D_V16" \xe9chouera.'}),"\n",(0,i.jsx)(s.li,{children:'Sous Windows et Mac, le pr\xe9fixe "ODBC:" doit \xeatre saisi en majuscules. Si vous passez "odbc:", la connexion \xe9chouera.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"cha\xeene vide"}),(0,i.jsx)(s.br,{}),"\nSyntaxe : ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:'""'})}),(0,i.jsx)(s.br,{}),"\nDans ce cas la commande provoque l\u2019affichage de la bo\xeete de dialogue de connexion, permettant de d\xe9signer manuellement la source de donn\xe9es \xe0 laquelle se connecter :",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.img,{src:n(167837).Z+"",width:"479",height:"306"}),(0,i.jsx)(s.br,{}),"\nCette bo\xeete de dialogue comporte plusieurs pages. La page TCP/IP se compose des \xe9l\xe9ments suivants :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Nom cible : ce menu est construit \xe0 l\u2019aide de deux listes :",(0,i.jsx)(s.br,{}),'\n* la liste des bases ouvertes r\xe9cemment en connexion directe. Le m\xe9canisme de mise \xe0 jour de cette liste est identique \xe0 celui de l\u2019application 4D, \xe0 la diff\xe9rence pr\xe8s que le dossier contenant les fichiers .4DLink est nomm\xe9 "Favorites SQL vXX" au lieu de "Favorites vXX".',(0,i.jsx)(s.br,{}),"\n* la liste des applications 4D Server dont le serveur SQL est lanc\xe9 et dont le port TCP pour les connexions SQL est \xe9gal \xe0 celui de l\u2019application source. Cette liste est mise \xe0 jour dynamiquement \xe0 chaque nouvel appel de la commande ",(0,i.jsx)(s.strong,{children:"SQL LOGIN"})," sans le param\xe8tre ",(0,i.jsx)(s.em,{children:"source"}),'. Le caract\xe8re "^" plac\xe9 devant un nom de base indique que la connexion est effectu\xe9e en mode s\xe9curis\xe9 via SSL.']}),"\n",(0,i.jsx)(s.li,{children:"Adresse r\xe9seau : cette zone affiche l\u2019adresse IP et \xe9ventuellement le port TCP de la base s\xe9lectionn\xe9e dans le menu Nom cible. Vous pouvez \xe9galement saisir dans cette zone une adresse IP puis cliquer sur le bouton Connexion afin de vous connecter \xe0 la base 4D Server correspondante. Vous pouvez \xe9galement sp\xe9cifier le port TCP, en saisissant deux points (:) puis le num\xe9ro du port \xe0 la suite de l\u2019adresse. Par exemple : 192.168.93.105:19855"}),"\n",(0,i.jsx)(s.li,{children:"Utilisateur et Mot de passe : ces zones permettent de saisir les identifiants de la connexion."}),"\n",(0,i.jsx)(s.li,{children:"Les pages DSN utilisateur et DSN syst\xe8me affichent respectivement la liste des sources de donn\xe9es ODBC utilisateur et syst\xe8me d\xe9finies dans le gestionnaire ODBC de la machine. Ces pages permettent de s\xe9lectionner une source de donn\xe9es et de saisir des identifiants afin d\u2019ouvrir une connexion avec une source ODBC externe."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Si la connexion est \xe9tablie, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e. Cette erreur peut \xeatre intercept\xe9e via une m\xe9thode de gestion d\u2019erreurs install\xe9e par la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"constante SQL_INTERNAL"}),(0,i.jsx)(s.br,{}),"\nSyntaxe : ",(0,i.jsx)(s.strong,{children:"SQL_INTERNAL"}),(0,i.jsx)(s.br,{}),"\nDans ce cas, la commande redirige les requ\xeates SQL suivantes vers la base 4D interne."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attention :"})," Les pr\xe9fixes utilis\xe9s dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"source"})," (IP, ODBC, 4D) doivent \xeatre \xe9crits en majuscules."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre ",(0,i.jsx)(s.em,{children:"utilisateur"})," contient le nom de l\u2019utilisateur autoris\xe9 \xe0 se connecter \xe0 la source de donn\xe9es externe. Par exemple, avec Oracle\xae, ce nom d\u2019utilisateur peut \xeatre \u201CScott\u201D."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre ",(0,i.jsx)(s.em,{children:"motDePasse"})," contient le mot de passe de l\u2019utilisateur autoris\xe9 \xe0 se connecter. Par exemple, avec Oracle\xae, ce mot de passe peut \xeatre \u201Ctiger\u201D."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Dans le cas d\u2019une connexion directe, si vous passez des cha\xeenes vides dans les param\xe8tres ",(0,i.jsx)(s.em,{children:"utilisateur"})," et ",(0,i.jsx)(s.em,{children:"motDePasse"}),", la connexion ne sera accept\xe9e que si les mots de passe 4D ne sont pas activ\xe9s dans la base cible. Sinon, la connexion est refus\xe9e."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(s.em,{children:"*"})," permet de changer la cible du code SQL ex\xe9cut\xe9 au sein des balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"}),". Si vous ne passez pas ce param\xe8tre, le code plac\xe9 dans les balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," sera toujours adress\xe9 au moteur SQL interne de 4D, sans tenir compte du param\xe9trage d\xe9fini par la commande ",(0,i.jsx)(s.strong,{children:"SQL LOGIN"}),". Si vous passez ce param\xe8tre, le code SQL ex\xe9cut\xe9 au sein des balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," sera adress\xe9 \xe0 la ",(0,i.jsx)(s.em,{children:"source"})," d\xe9finie par la commande."]}),"\n",(0,i.jsxs)(s.p,{children:["Pour refermer la connexion courante et lib\xe9rer la m\xe9moire, il suffit d\u2019ex\xe9cuter la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-logout",children:"SQL LOGOUT"}),". Toutes les requ\xeates SQL sont alors dirig\xe9es vers la base 4D SQL interne.",(0,i.jsx)(s.br,{}),"\nSi vous appelez une nouvelle fois ",(0,i.jsx)(s.strong,{children:"SQL LOGIN"})," sans avoir referm\xe9 explicitement la connexion courante, elle est automatiquement referm\xe9e."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," En cas d'\xe9chec d'une tentative de connexion externe via ",(0,i.jsx)(s.strong,{children:"SQL LOGIN"}),", la base 4D interne devient automatiquement la source de donn\xe9es courante."]}),"\n",(0,i.jsx)(s.p,{children:"Tous les param\xe8tres sont facultatifs. Si aucun param\xe8tre n\u2019est pass\xe9, la commande provoquera l\u2019affichage de la bo\xeete de dialogue de connexion ODBC, permettant de d\xe9signer manuellement la source de donn\xe9es \xe0 laquelle se connecter."}),"\n",(0,i.jsx)(s.p,{children:"La port\xe9e de cette commande est le process. Autrement dit, si vous souhaitez ouvrir deux connexions distinctes, vous devez cr\xe9er deux process et ouvrir chaque connexion dans chaque process."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attention :"})," Il n'est pas possible d'ouvrir une connexion ODBC dans les contextes d\xe9crits ci-dessous. Ces configurations conduisent au blocage de l'application :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"connexion via ODBC depuis l'application en ex\xe9cution vers elle-m\xeame"}),"\n",(0,i.jsx)(s.li,{children:"connexion via ODBC depuis une application 4D vers 4D Server alors qu'une connexion client/serveur classique est d\xe9j\xe0 ouverte entre les deux applications."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(s.p,{children:"Cette instruction provoque l\u2019affichage de la bo\xeete de dialogue du gestionnaire ODBC :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0SQL LOGIN\n"})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(s.p,{children:['Ouverture d\u2019une connexion via le protocole ODBC avec la source de donn\xe9es externe "MonOracle". Les requ\xeates SQL ex\xe9cut\xe9es via la commande ',(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"})," et les requ\xeates incluses dans les balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," seront redirig\xe9es vers cette connexion :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("ODBC:MonOracle";"Scott";"tiger";*)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(s.p,{children:"Ouverture d'une connexion avec le moteur SQL interne de 4D :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0SQL LOGIN(SQL_INTERNAL;$utilisateur;$motdepasse)\n"})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsxs)(s.p,{children:["Ouverture d\u2019une connexion directe avec l\u2019application 4D Server ex\xe9cut\xe9e sur le poste ayant l\u2019adresse IP 192.168.45.34 et r\xe9pondant sur le port TCP par d\xe9faut. Les requ\xeates SQL ex\xe9cut\xe9es via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"})," seront redirig\xe9es vers cette connexion, les requ\xeates incluses dans les balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," ne seront pas redirig\xe9es."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34";"John";"azerty")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,i.jsxs)(s.p,{children:["Ouverture d\u2019une connexion directe avec l\u2019application 4D Server ex\xe9cut\xe9e sur le poste ayant l\u2019adresse IP 192.168.45.34 et r\xe9pondant sur le port TCP 20150. Les requ\xeates SQL ex\xe9cut\xe9es via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"})," et les requ\xeates incluses dans les balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," seront redirig\xe9es vers cette connexion."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:20150";"John";"azerty";*)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,i.jsx)(s.p,{children:"Ouverture d\u2019une connexion directe en SSL avec l\u2019application 4D Server ex\xe9cut\xe9e sur le poste ayant l\u2019adresse IP 192.168.45.34 et r\xe9pondant sur le port TCP par d\xe9faut. Le SSL doit avoir \xe9t\xe9 activ\xe9 pour le serveur SQL sur l'application 4D Server :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:19812:ssl";"Admin";"sd156")\xa0// Notez le ":ssl" apr\xe8s l\'adresse IP et le port TCP\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,i.jsxs)(s.p,{children:["Ouverture d'une connexion directe avec l'application 4D Server ex\xe9cut\xe9e sur la machine ayant l'adresse IPv6 2a01:e35:2e41:c960:dc39:3eb0:f29b:3747 et r\xe9pondant sur le port TCP 20150. Les requ\xeates SQL ex\xe9cut\xe9es via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"})," seront redirig\xe9es sur cette connexion ; les requ\xeates inclues dans les mots-cl\xe9s ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," ne seront pas redirig\xe9es."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:[2a01:e35:2e41:c960:dc39:3eb0:f29b:3747]:20150";"John";"qwerty")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,i.jsxs)(s.p,{children:['Ouverture d\u2019une connexion directe avec l\u2019application 4D Server qui publie sur le r\xe9seau local une base dont le nom de publication est "DB_Compta". Le port TCP utilis\xe9 pour le serveur SQL des deux bases (d\xe9fini dans la page "SQL" des Propri\xe9t\xe9s de la base) doit \xeatre identique (19812 par d\xe9faut). Les requ\xeates SQL ex\xe9cut\xe9es via la commande ',(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-execute",children:"SQL EXECUTE"})," seront redirig\xe9es vers cette connexion, les requ\xeates incluses dans les balises ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"})," ne seront pas redirig\xe9es."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0SQL LOGIN("4D:DB_Compta";"John";"azerty")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-9",children:"Exemple 9"}),"\n",(0,i.jsx)(s.p,{children:"Cet exemple illustre les possibilit\xe9s de connexion offertes par la commande SQL LOGIN :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT(aNames;0)\n\xa0ARRAY LONGINT(aAges;0)\n\xa0SQL LOGIN("ODBC:MonORACLE";"Marc";"azerty")\n\xa0If(OK=1)\n\xa0\xa0//La requ\xeate suivante sera redirig\xe9e vers la base ORACLE externe\n\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)\n\xa0\xa0//La requ\xeate suivante sera dirig\xe9e vers la base 4D locale\n\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0//La commande SQL LOGIN suivante referme la connexion courante\n\xa0\xa0//avec la base externe ORACLE et ouvre une nouvelle connexion avec\n\xa0\xa0//une base externe MySQL\n\xa0\xa0\xa0\xa0SQL LOGIN("ODBC:MySQL";"Jean";"qwerty";*)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0//La requ\xeate suivante sera redirig\xe9e vers la base MySQL externe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)\n\xa0\xa0//La requ\xeate suivante sera aussi redirig\xe9e vers la base MySQL externe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL LOGOUT\n\xa0\xa0//La requ\xeate suivante sera dirig\xe9e vers la base 4D locale\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(s.p,{children:"Si la connexion est correctement \xe9tablie, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,i.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/sql-logout",children:"SQL LOGOUT"})]}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"817"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modifie les variables"}),(0,i.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},167837:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/pict33536.fr-69205111676f19044aa2ab738bc9df2a.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return a}});var r=n(667294);let i={},l=r.createContext(i);function a(e){let s=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);