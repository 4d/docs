"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11612],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},723572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"client-server",title:"Page Client/Serveur"},s=void 0,l={unversionedId:"settings/client-server",id:"version-20-R5/settings/client-server",title:"Page Client/Serveur",description:"Les pages Client-serveur regroupent les propri\xe9t\xe9s li\xe9es \xe0 l'utilisation de la base de donn\xe9es en mode client-serveur. Bien entendu, ces propri\xe9t\xe9s ne sont prises en compte que lorsque la base de donn\xe9es est utilis\xe9e en mode distant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/fr/settings/client-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"client-server",title:"Page Client/Serveur"},sidebar:"docs",previous:{title:"Page Sauvegarde",permalink:"/docs/fr/settings/backup"},next:{title:"Page Web",permalink:"/docs/fr/settings/web"}},u={},c=[{value:"Page Options r\xe9seau",id:"page-options-r\xe9seau",level:2},{value:"R\xe9seau",id:"r\xe9seau",level:3},{value:"Publier la base au d\xe9marrage",id:"publier-la-base-au-d\xe9marrage",level:4},{value:"Nom de publication",id:"nom-de-publication",level:4},{value:"Num\xe9ro de port",id:"num\xe9ro-de-port",level:4},{value:"4D Server et num\xe9ros de port",id:"4d-server-et-num\xe9ros-de-port",level:4},{value:"Authentification de l&#39;utilisateur aupr\xe8s du serveur de domaine",id:"authentification-de-lutilisateur-aupr\xe8s-du-serveur-de-domaine",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Network Layer",id:"network-layer",level:4},{value:"D\xe9lai avant d\xe9connexion Client-Serveur",id:"d\xe9lai-avant-d\xe9connexion-client-serveur",level:4},{value:"Communication client-serveur",id:"communication-client-serveur",level:3},{value:"Inscrire les clients au d\xe9marrage pour Ex\xe9cuter sur client",id:"inscrire-les-clients-au-d\xe9marrage-pour-ex\xe9cuter-sur-client",level:4},{value:"Crypter les communications Client-Serveur",id:"crypter-les-communications-client-serveur",level:4},{value:"Mise \xe0 jour du dossier Resources en cours de session",id:"mise-\xe0-jour-du-dossier-resources-en-cours-de-session",level:4},{value:"Page Configuration IP",id:"page-configuration-ip",level:2},{value:"Table de configuration Autoriser-Refuser",id:"table-de-configuration-autoriser-refuser",level:3}],p={toc:c};function d(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les pages Client-serveur regroupent les propri\xe9t\xe9s li\xe9es \xe0 l'utilisation de la base de donn\xe9es en mode client-serveur. Bien entendu, ces propri\xe9t\xe9s ne sont prises en compte que lorsque la base de donn\xe9es est utilis\xe9e en mode distant."),(0,r.kt)("h2",a({},{id:"page-options-r\xe9seau"}),"Page Options r\xe9seau"),(0,r.kt)("h3",a({},{id:"r\xe9seau"}),"R\xe9seau"),(0,r.kt)("h4",a({},{id:"publier-la-base-au-d\xe9marrage"}),"Publier la base au d\xe9marrage"),(0,r.kt)("p",null,"Cette option vous permet d'indiquer si la base de donn\xe9es 4D Server appara\xeetra ou non dans la liste des bases de donn\xe9es publi\xe9es."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When this option is checked (default), the database is made public and appears in the list of published databases (",(0,r.kt)("strong",{parentName:"li"},"Available")," tab)."),(0,r.kt)("li",{parentName:"ul"},"Lorsque l'option n'est pas coch\xe9e, la base de donn\xe9es n'est pas rendue publique et n'appara\xeet pas dans la liste des bases de donn\xe9es publi\xe9es. To connect, users must manually enter the address of the database on the ",(0,r.kt)("strong",{parentName:"li"},"Custom")," tab of the connection dialog box.")),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Si vous modifiez ce param\xe8tre, vous devez red\xe9marrer la base du serveur pour qu'il soit pris en compte.")),(0,r.kt)("h4",a({},{id:"nom-de-publication"}),"Nom de publication"),(0,r.kt)("p",null,"This option lets you change the publication name of a 4D Server database, ",(0,r.kt)("em",{parentName:"p"},"i.e."),", the name displayed on the dynamic ",(0,r.kt)("strong",{parentName:"p"},"Available")," tab of the connection dialog box (see the ",(0,r.kt)("a",a({parentName:"p"},{href:"../Desktop/clientServer/md#opening-a-remote-project"}),"Opening a remote project")," paragraph). Par d\xe9faut, 4D Server utilise le nom du fichier de projet. Vous pouvez saisir le nom personnalis\xe9 de votre choix."),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Ce param\xe8tre n'est pas pris en compte dans les applications client-serveur personnalis\xe9es. En th\xe9orie, l'application client se connecte directement \xe0 l'application serveur, sans passer par la bo\xeete de dialogue de connexion. Toutefois, en cas d'erreur, cette bo\xeete de dialogue peut appara\xeetre ; dans ce cas, le nom de publication de l'application serveur correspond au nom du projet compil\xe9.")),(0,r.kt)("h4",a({},{id:"num\xe9ro-de-port"}),"Num\xe9ro de port"),(0,r.kt)("p",null,"Cette option vous permet de modifier le num\xe9ro du port TCP sur lequel 4D Server publie la base de donn\xe9es. Cette information est stock\xe9e dans le projet et sur chaque machine cliente. Par d\xe9faut, le num\xe9ro de port TCP utilis\xe9 par 4D Server et 4D en mode distant est 19813."),(0,r.kt)("p",null,"La personnalisation de cette valeur est n\xe9cessaire lorsque vous souhaitez utiliser plusieurs applications 4D sur la m\xeame machine ; dans ce cas, vous devez sp\xe9cifier un num\xe9ro de port diff\xe9rent pour chaque application.\nLorsque vous modifiez cette valeur depuis 4D Server ou 4D, elle est automatiquement pass\xe9e \xe0 toutes les machines 4D connect\xe9es \xe0 la base de donn\xe9es."),(0,r.kt)("p",null,"To update any other client machines that are not connected, you just need to enter the new port number (preceded by a colon) after the IP address of the server machine on the ",(0,r.kt)("strong",{parentName:"p"},"Custom")," tab of the connection dialog box at the time of the next connection. Par exemple, si le nouveau num\xe9ro de port est 19888 :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(269062).Z,width:"466",height:"488"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Seules les bases de donn\xe9es publi\xe9es sur le m\xeame port que celui d\xe9fini dans 4D client sont visibles sur la page de publication dynamique TCP/IP.")),(0,r.kt)("h4",a({},{id:"4d-server-et-num\xe9ros-de-port"}),"4D Server et num\xe9ros de port"),(0,r.kt)("p",null,"4D Server utilise trois ports TCP pour les communications entre les serveurs internes et les clients :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL Server"),': 19812 by default (can be modified via the "SQL/Configuration" page of the Preferences).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application Server"),': 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DB4D Server")," (database server): 19814 by default . This port number cannot be modified directly but it always consists of the application server port number + 1.\\\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\\\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.")),(0,r.kt)("h4",a({},{id:"authentification-de-lutilisateur-aupr\xe8s-du-serveur-de-domaine"}),"Authentification de l'utilisateur aupr\xe8s du serveur de domaine"),(0,r.kt)("p",null,"This option allows you to implement SSO (",(0,r.kt)("em",{parentName:"p"},"Single Sign On"),") capabilities in your 4D Server database on Windows. Lorsque vous cochez cette option, 4D se connecte de mani\xe8re transparente \xe0 l'Active directory du serveur de domaine Windows et obtient les tokens d'authentification disponibles. This option is described in the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html"}),"Single Sign On (SSO) on Windows")," section."),(0,r.kt)("h4",a({},{id:"service-principal-name"}),"Service Principal Name"),(0,r.kt)("p",null,"Lorsque l'authentification unique (SSO) est activ\xe9e (voir ci-dessus), vous devez remplir ce champ si vous souhaitez utiliser Kerberos comme protocole d'authentification. This option is described in the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html"}),"Single Sign On (SSO) on Windows")," section."),(0,r.kt)("h4",a({},{id:"network-layer"}),"Network Layer"),(0,r.kt)("p",null,"This drop-down box contains 3 network layer options to choose between: ",(0,r.kt)("strong",{parentName:"p"},"legacy"),", ",(0,r.kt)("strong",{parentName:"p"},"ServerNet")," and ",(0,r.kt)("strong",{parentName:"p"},"QUIC")," (only in project mode), which are used to handle communications between 4D Server and remote 4D machines (clients)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Legacy"),': This former "legacy" network layer is still supported in order to ensure compatibility for databases created prior to v15. This network layer can also be enabled by programming using the ',(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv20/help/command/page642.html"}),"SET DATABASE PARAMETER")," command.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ServerNet")," (by default): Enables the ServerNet network layer on the server (available since 4D v15).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"QUIC")," (available only in project mode): Enables the QUIC network layer on the server."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Selecting this option overrides the Use legacy network layer option in case it has been set using the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4Dv20/help/command/page642.html"}),"SET DATABASE PARAMETER")," command."),(0,r.kt)("li",{parentName:"ul"},"You can know if a 4D application is running with a QUIC network layer using the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4Dv20/help/command/page1599.html"}),"Get application info")," command."),(0,r.kt)("li",{parentName:"ul"},"Since QUIC uses the UDP protocol, make sure UDP is allowed in your network security settings."),(0,r.kt)("li",{parentName:"ul"},"QUIC automatically connects to the port 19813 for both application server and DB4D server."),(0,r.kt)("li",{parentName:"ul"},"When the QUIC layer option is selected:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A beta message and an alert icon are displayed near the selector."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"#Client-Server-Connections-Timeout"}),"Client-server Connections Timeout settings")," are hidden"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",a({parentName:"li"},{href:"#Encrypt-Client-Server-Communications"}),"Encrypt Client-Server communication checkbox")," is hidden (QUIC communications are always in TLS, whatever your secured mode is.)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatibility"),": You need to deploy your client/server applications with 4D v20 or higher before switching to the QUIC network layer.")))),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"In case of a modification, you need to restart the application for the change to be taken into account. Toute application cliente qui \xe9tait connect\xe9e doit \xe9galement \xeatre red\xe9marr\xe9e afin de se connecter avec la nouvelle couche r\xe9seau.")),(0,r.kt)("h4",a({},{id:"d\xe9lai-avant-d\xe9connexion-client-serveur"}),"D\xe9lai avant d\xe9connexion Client-Serveur"),(0,r.kt)("p",null,"Ce dispositif permet de d\xe9finir le timeout (p\xe9riode d'inactivit\xe9 au-del\xe0 de laquelle la connexion est ferm\xe9e) entre 4D Server et les machines clientes qui s'y connectent. L'option \"Illimit\xe9\" supprime le timeout. Lorsque cette option est s\xe9lectionn\xe9e, le contr\xf4le de l'activit\xe9 du client est \xe9limin\xe9."),(0,r.kt)("p",null,"Lorsqu'un d\xe9lai d'attente est s\xe9lectionn\xe9, le serveur ferme la connexion d'un client s'il ne re\xe7oit aucune demande de ce dernier pendant le d\xe9lai sp\xe9cifi\xe9."),(0,r.kt)("h3",a({},{id:"communication-client-serveur"}),"Communication client-serveur"),(0,r.kt)("h4",a({},{id:"inscrire-les-clients-au-d\xe9marrage-pour-ex\xe9cuter-sur-client"}),"Inscrire les clients au d\xe9marrage pour Ex\xe9cuter sur client"),(0,r.kt)("p",null,"Lorsque cette option est coch\xe9e, toutes les machines distantes 4D se connectant \xe0 la base de donn\xe9es peuvent ex\xe9cuter des m\xe9thodes \xe0 distance. This mechanism is detailed in the section ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"}),"Stored procedures on client machines"),"."),(0,r.kt)("h4",a({},{id:"crypter-les-communications-client-serveur"}),"Crypter les communications Client-Serveur"),(0,r.kt)("p",null,"Cette option permet d'activer le mode s\xe9curis\xe9 pour les communications entre la machine serveur et les machines distantes 4D. This option is detailed in the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"}),"Encrypting Client/Server Connections")," section."),(0,r.kt)("h4",a({},{id:"mise-\xe0-jour-du-dossier-resources-en-cours-de-session"}),"Mise \xe0 jour du dossier Resources en cours de session"),(0,r.kt)("p",null,"This setting can be used to globally set the updating mode for the local instance of the ",(0,r.kt)("strong",{parentName:"p"},"Resources")," folder on the connected 4D machines when the ",(0,r.kt)("strong",{parentName:"p"},"Resources")," folder of the database is modified during the session (the ",(0,r.kt)("strong",{parentName:"p"},"Resources")," folder is automatically synchronized on the remote machine each time a session is opened). Trois param\xe8tres sont disponibles :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Never"),": The local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," folder is not updated during the session. La notification envoy\xe9e par le serveur est ignor\xe9e. The local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," folder may be updated manually using the ",(0,r.kt)("strong",{parentName:"li"},"Update Local Resources")," action menu command (see ",(0,r.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"}),"Using the Resources explorer"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Always"),": The synchronization of the local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," folder is automatically carried out during the session whenever notification is sent by the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ask"),": When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," folder.\\\nThe ",(0,r.kt)("strong",{parentName:"li"},"Resources")," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Des m\xe9canismes automatiques ou manuels permettent de notifier chaque client lorsque le contenu de ce dossier a \xe9t\xe9 modifi\xe9. For more information, please refer to the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html"}),"Managing the Resources folder")," section.")),(0,r.kt)("h2",a({},{id:"page-configuration-ip"}),"Page Configuration IP"),(0,r.kt)("h3",a({},{id:"table-de-configuration-autoriser-refuser"}),"Table de configuration Autoriser-Refuser"),(0,r.kt)("p",null,"Cette table vous permet de d\xe9finir des r\xe8gles de contr\xf4le d\u2019acc\xe8s \xe0 la base en fonction de l\u2019adresse IP des postes 4D distants. Cette option permet de renforcer la s\xe9curit\xe9 par exemple pour des applications strat\xe9giques."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cette table de configuration ne contr\xf4le pas les connexions Web.")),(0,r.kt)("p",null,"Le fonctionnement de la table de configuration est le suivant :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La colonne \u201cAutoriser-Refuser\u201d permet de s\xe9lectionner le type de r\xe8gle \xe0 appliquer (Autoriser ou Refuser) \xe0 l\u2019aide d\u2019un pop up menu. Pour ajouter une r\xe8gle d\u2019adresses, cliquez sur le bouton Ajouter. Une nouvelle ligne appara\xeet dans la table. The ",(0,r.kt)("strong",{parentName:"li"},"Delete")," button lets you remove the current row."),(0,r.kt)("li",{parentName:"ul"},"La colonne \u201cAdresse IP\u201d permet de d\xe9signer la ou les adresse(s) IP concern\xe9e(s) par la r\xe8gle. Pour sp\xe9cifier une adresse, cliquez dans la colonne et saisissez l\u2019adresse sous la forme 123.45.67.89 (format IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (format IPv6). Vous pouvez utiliser le caract\xe8re ","*"," (\xe9toile) pour sp\xe9cifier des adresses du type \u201ccommence par\u201d. Par exemple, 192.168.","*"," indique toutes les adresses d\xe9butant par 192.168."),(0,r.kt)("li",{parentName:"ul"},"L\u2019application des r\xe8gles s\u2019effectue dans l\u2019ordre d\u2019affichage de la table. Si deux r\xe8gles sont contradictoires, la priorit\xe9 sera accord\xe9e \xe0 la r\xe8gle situ\xe9e le plus haut dans le tableau. Vous pouvez r\xe9ordonner les lignes en modifiant le tri courant (cliquez sur un en-t\xeate de colonne pour alterner le sens de tri). Vous pouvez \xe9galement d\xe9placer des lignes par glisser-d\xe9poser."),(0,r.kt)("li",{parentName:"ul"},"Pour des raisons de s\xe9curit\xe9, seules les adresses correspondant \xe0 une r\xe8gle d\u2019autorisation explicite pourront se connecter. En particulier, si la table contient uniquement une ou plusieurs r\xe8gle(s) de type Refuser, toutes les adresses seront refus\xe9es car aucune ne satisfera \xe0 au moins une r\xe8gle. Si vous souhaitez refuser certaines adresses et autoriser toutes les autres, ajoutez une r\xe8gle Autoriser ","*"," \xe0 la fin de la table. Par exemple :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Refuser 192.168.","*"," (refuser toutes adresses d\xe9butant par 192.168)"),(0,r.kt)("li",{parentName:"ul"},"Autoriser ","*"," (et autoriser les autres)")))),(0,r.kt)("p",null,"Par d\xe9faut, aucune restriction de connexion n\u2019est appliqu\xe9e par 4D Server : la premi\xe8re ligne de la table contient le libell\xe9 Autoriser et le caract\xe8re ","*"," (toute adresse)."))}d.isMDXComponent=!0},269062:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"}}]);