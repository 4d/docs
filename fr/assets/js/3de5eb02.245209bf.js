"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17692"],{564411:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>i});var d=JSON.parse('{"id":"Admin/data-collect","title":"Collecte des donn\xe9es","description":"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d\'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n\'a aucun impact sur l\'exp\xe9rience utilisateur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/Admin/data-collect.md","sourceDirName":"Admin","slug":"/Admin/data-collect","permalink":"/docs/fr/Admin/data-collect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"data-collect","title":"Collecte des donn\xe9es"},"sidebar":"docs","previous":{"title":"Restitution","permalink":"/docs/fr/Backup/restore"},"next":{"title":"Extensions","permalink":"/docs/fr/Extensions/overview"}}'),t=s("785893"),l=s("250065");let r={id:"data-collect",title:"Collecte des donn\xe9es"},i=void 0,c={},o=[{value:"Informations collect\xe9es",id:"informations-collect\xe9es",level:2},{value:"Collect\xe9 au d\xe9marrage de la base de donn\xe9es",id:"collect\xe9-au-d\xe9marrage-de-la-base-de-donn\xe9es",level:3},{value:"Collect\xe9 au d\xe9marrage du serveur web et lors de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-au-d\xe9marrage-du-serveur-web-et-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collected at new web session creation",id:"collected-at-new-web-session-creation",level:3},{value:"Collected at datastore opening",id:"collected-at-datastore-opening",level:3},{value:"Collect\xe9s \xe0 intervalles r\xe9guliers",id:"collect\xe9s-\xe0-intervalles-r\xe9guliers",level:3},{value:"Collect\xe9 lors de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collect\xe9 lors de la fermeture de la base de donn\xe9es et de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-lors-de-la-fermeture-de-la-base-de-donn\xe9es-et-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collected at every new call to the remote debugger",id:"collected-at-every-new-call-to-the-remote-debugger",level:3},{value:"Collect\xe9 \xe0 chaque fois que PHP execute est appel\xe9",id:"collect\xe9-\xe0-chaque-fois-que-php-execute-est-appel\xe9",level:3},{value:"Collect\xe9 \xe0 la connexion d&#39;un client",id:"collect\xe9-\xe0-la-connexion-dun-client",level:3},{value:"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?",id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-",level:2},{value:"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es",id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n'a aucun impact sur l'exp\xe9rience utilisateur."}),"\n",(0,t.jsx)(n.p,{children:"Cette page explique :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"quelles sont les informations collect\xe9es,"}),"\n",(0,t.jsx)(n.li,{children:"o\xf9 les informations sont stock\xe9es et quand elles sont envoy\xe9es \xe0 4D,"}),"\n",(0,t.jsx)(n.li,{children:"comment d\xe9sactiver la collecte automatique de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"informations-collect\xe9es",children:"Informations collect\xe9es"}),"\n",(0,t.jsx)(n.p,{children:"Les donn\xe9es sont collect\xe9es lors des \xe9v\xe9nements suivants :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"d\xe9marrage de la base de donn\xe9es,"}),"\n",(0,t.jsx)(n.li,{children:"fermeture de la base de donn\xe9es,"}),"\n",(0,t.jsx)(n.li,{children:"d\xe9marrage du serveur web,"}),"\n",(0,t.jsx)(n.li,{children:"use of specific features such as php, open datastore, remote debugger,"}),"\n",(0,t.jsx)(n.li,{children:"connexion client,"}),"\n",(0,t.jsx)(n.li,{children:"envoi de la collecte de donn\xe9es."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Certaines donn\xe9es sont \xe9galement collect\xe9es \xe0 intervalles r\xe9guliers."}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-au-d\xe9marrage-de-la-base-de-donn\xe9es",children:"Collect\xe9 au d\xe9marrage de la base de donn\xe9es"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom, type et vitesse du processeur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numberOfCores"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre total de c\u0153urs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"memory"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Taille de la m\xe9moire (en octets) disponible sur la machine"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"system"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Version du syst\xe8me d'exploitation et num\xe9ro de version"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"headless"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si l'application fonctionne en mode headless"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"version"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de version de l'application 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"buildNumber"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de build de l'application 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"license"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nom commercial et description des licences des produits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isRosetta"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si 4D est \xe9mul\xe9 par Rosetta sous macOS, False sinon (non \xe9mul\xe9 ou sous Windows)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqueID"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"ID unique du serveur 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"Texte (cha\xeene hach\xe9e)"}),(0,t.jsxs)(n.td,{children:["Identifiant unique associ\xe9 \xe0 la base de donn\xe9es (",(0,t.jsx)(n.em,{children:"Hachage par roulement polynomial du nom de la base de donn\xe9es"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataFileSize"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Taille du fichier de donn\xe9es en octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexesSize"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Taille des index en octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheSize"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Taille du cache en octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usingLegacyNetworkLayer"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si l'ancienne couche r\xe9seau est utilis\xe9e pour le serveur d'application"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usingQUICNetworkLayer"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si la base de donn\xe9es utilise la couche r\xe9seau QUIC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encryptedConnections"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si les connexions client/serveur sont crypt\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encrypted"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Vrai si le fichier de donn\xe9es est chiffr\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"compiled"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si l'application est compil\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isEngined"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si l'application est fusionn\xe9e avec 4D Volume Desktop"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"projectMode"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si l'application est un projet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mobile"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Informations sur les sessions mobiles"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-au-d\xe9marrage-du-serveur-web-et-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",children:"Collect\xe9 au d\xe9marrage du serveur web et lors de l'envoi de la collecte de donn\xe9es"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webServer"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:'"started":true si le serveur web est en cours de d\xe9marrage ou d\xe9marr\xe9'})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"collected-at-new-web-session-creation",children:"Collected at new web session creation"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.webMaxLicensedSessions"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Maximum number of non-REST web sessions on the server that use the webserver license"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.restMaxLicensedSessions"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Maximum number of REST web sessions on the server that use the REST license"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.webMaxUnlicensedSessions"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Maximum number of other non-REST web sessions on the server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.restMaxUnlicensedSessions"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Maximum number of other REST web sessions on the server"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collected-at-datastore-opening",children:"Collected at datastore opening"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.externalDatastoreOpened"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Number of calls to ",(0,t.jsx)(n.code,{children:"Open datastore"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.internalDatastoreOpened"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of times the datastore is opened by an external server"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9s-\xe0-intervalles-r\xe9guliers",children:"Collect\xe9s \xe0 intervalles r\xe9guliers"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maximumNumberOfWebProcesses"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre maximal de process web simultan\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maximumUsedPhysicalMemory"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Utilisation maximale de la m\xe9moire physique"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maximumUsedVirtualMemory"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Utilisation maximale de la m\xe9moire virtuelle"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",children:"Collect\xe9 lors de l'envoi de la collecte de donn\xe9es"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uptime"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Temps \xe9coul\xe9 (en secondes) depuis l'ouverture de la base de donn\xe9es 4D locale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheReadBytes"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre d'octets lus \xe0 partir de la m\xe9moire cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheMissBytes"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre d'octets manqu\xe9s dans le cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheReadCount"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre de lectures dans le cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheMissCount"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre de lectures manqu\xe9es dans le cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataSegment1.diskReadBytes"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre d'octets lus dans le fichier de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataSegment1.diskWriteBytes"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre d'octets \xe9crits dans le fichier de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataSegment1.diskReadCount"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre de lectures dans le fichier de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataSegment1.diskWriteCount"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Nombre d'\xe9critures dans le fichier de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexSegment.diskReadBytes"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre d'octets lus dans le fichier d'index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexSegment.diskWriteBytes"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre d'octets \xe9crits dans le fichier d'index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexSegment.diskReadCount"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de lectures dans le fichier d'index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexSegment.diskWriteCount"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre d'\xe9critures dans le fichier d'index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.webScalableSessions"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True if scalable sessions are activated"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.webIPAddressesNumber"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of different IP addresses that made a request to 4D Server"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-lors-de-la-fermeture-de-la-base-de-donn\xe9es-et-de-lenvoi-de-la-collecte-de-donn\xe9es",children:"Collect\xe9 lors de la fermeture de la base de donn\xe9es et de l'envoi de la collecte de donn\xe9es"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webserverHits"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de hits sur le serveur web pendant la collecte des donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"restHits"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de hits sur le serveur REST pendant la collecte des donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webserverBytesIn"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Octets re\xe7us par le serveur web pendant la collecte des donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webserverBytesOut"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Octets envoy\xe9s par le serveur web pendant la collecte des donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qodly.webforms"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de webforms Qodly"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collected-at-every-new-call-to-the-remote-debugger",children:"Collected at every new call to the remote debugger"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.remoteDebugger4DRemoteAttachments"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of attachments to the remote debugger from a remote 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.remoteDebuggerQodlyAttachments"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of attachments to the remote debugger from Qodly"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databases.remoteDebuggerVSCodeAttachments"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of attachments to the remote debugger from VS Code"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-\xe0-chaque-fois-que-php-execute-est-appel\xe9",children:"Collect\xe9 \xe0 chaque fois que PHP execute est appel\xe9"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phpCall"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Nombre d'appels \xe0 ",(0,t.jsx)(n.code,{children:"PHP execute"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"externalPHP"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["True si le client effectue un appel \xe0 ",(0,t.jsx)(n.code,{children:"PHP execute"})," et utilise sa propre version de php"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"collect\xe9-\xe0-la-connexion-dun-client",children:"Collect\xe9 \xe0 la connexion d'un client"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maximum4DClientConnections"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre maximal de connexions de 4D Client au serveur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"connectionSystems"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Syst\xe8me d'exploitation du client sans le num\xe9ro de build (entre parenth\xe8ses) et nombre de clients qui l'utilisent"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-",children:"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?"}),"\n",(0,t.jsxs)(n.p,{children:["Les donn\xe9es collect\xe9es sont \xe9crites dans un fichier texte (format JSON) par base de donn\xe9es lorsque 4D Server quitte. Le fichier est stock\xe9 dans le ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-4d-folder",children:"dossier 4D actif"}),", c'est-\xe0-dire :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["sous Windows : ",(0,t.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D Server"})]}),"\n",(0,t.jsxs)(n.li,{children:["sous macOS : ",(0,t.jsx)(n.code,{children:"/Users/[userName]/Library/ApplicationSupport/4D Server"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Une fois par semaine, le fichier est automatiquement envoy\xe9 par le r\xe9seau \xe0 4D. Le fichier est ensuite supprim\xe9 du dossier 4D actif."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(54988).Z+"",width:"1261",height:"398"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Si le fichier n'a pas pu \xeatre envoy\xe9 pour une raison quelconque, il est n\xe9anmoins supprim\xe9 et aucun message d'erreur n'est affich\xe9 c\xf4t\xe9 4D Server."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Le fichier est envoy\xe9 au serveur \xe0 l'adresse suivante : ",(0,t.jsx)(n.code,{children:"https://dcollector.4d.com"})," (ip : 195.68.52.83)."]}),"\n",(0,t.jsx)(n.h2,{id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es",children:"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez d\xe9sactiver la collecte automatique de donn\xe9es dans ",(0,t.jsx)(n.a,{href:"/docs/fr/Desktop/building#clientserver-page",children:"les applications client/serveur g\xe9n\xe9r\xe9es"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour d\xe9sactiver la collecte, passez la valeur ",(0,t.jsx)(n.strong,{children:"False"})," \xe0 la cl\xe9 ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html",children:(0,t.jsx)(n.code,{children:"ServerDataCollection"})})," dans le fichier ",(0,t.jsx)(n.code,{children:"buildApp.4DSettings"}),", utilis\xe9 pour construire l'application client/serveur."]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},54988:function(e,n,s){s.d(n,{Z:function(){return d}});let d=s.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var d=s(667294);let t={},l=d.createContext(t);function r(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);