"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22036],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=l,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},632785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});n(667294);var a=n(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const i={id:"data-collect",title:"Collecte des donn\xe9es"},o=void 0,d={unversionedId:"Admin/data-collect",id:"version-20-R5/Admin/data-collect",title:"Collecte des donn\xe9es",description:"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n'a aucun impact sur l'exp\xe9rience utilisateur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/fr/Admin/data-collect",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"data-collect",title:"Collecte des donn\xe9es"},sidebar:"docs",previous:{title:"Restitution",permalink:"/docs/fr/Backup/restore"},next:{title:"Extensions",permalink:"/docs/fr/Extensions/overview"}},s={},u=[{value:"Informations collect\xe9es",id:"informations-collect\xe9es",level:2},{value:"Collect\xe9 au d\xe9marrage de la base de donn\xe9es",id:"collect\xe9-au-d\xe9marrage-de-la-base-de-donn\xe9es",level:3},{value:"Collect\xe9 au d\xe9marrage du serveur web et lors de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-au-d\xe9marrage-du-serveur-web-et-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collect\xe9s \xe0 intervalles r\xe9guliers",id:"collect\xe9s-\xe0-intervalles-r\xe9guliers",level:3},{value:"Collect\xe9 lors de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-lors-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collect\xe9 lors de la fermeture de la base de donn\xe9es et de l&#39;envoi de la collecte de donn\xe9es",id:"collect\xe9-lors-de-la-fermeture-de-la-base-de-donn\xe9es-et-de-lenvoi-de-la-collecte-de-donn\xe9es",level:3},{value:"Collect\xe9 \xe0 chaque fois que PHP execute est appel\xe9",id:"collect\xe9-\xe0-chaque-fois-que-php-execute-est-appel\xe9",level:3},{value:"Collect\xe9 \xe0 la connexion d&#39;un client",id:"collect\xe9-\xe0-la-connexion-dun-client",level:3},{value:"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?",id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-",level:2},{value:"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es",id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es",level:2}],m={toc:u};function p(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",l({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n'a aucun impact sur l'exp\xe9rience utilisateur."),(0,a.kt)("p",null,"Cette page explique :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"quelles sont les informations collect\xe9es,"),(0,a.kt)("li",{parentName:"ul"},"o\xf9 les informations sont stock\xe9es et quand elles sont envoy\xe9es \xe0 4D,"),(0,a.kt)("li",{parentName:"ul"},"comment d\xe9sactiver la collecte automatique de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es.")),(0,a.kt)("h2",l({},{id:"informations-collect\xe9es"}),"Informations collect\xe9es"),(0,a.kt)("p",null,"Les donn\xe9es sont collect\xe9es lors des \xe9v\xe9nements suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"d\xe9marrage de la base de donn\xe9es,"),(0,a.kt)("li",{parentName:"ul"},"fermeture de la base de donn\xe9es,"),(0,a.kt)("li",{parentName:"ul"},"d\xe9marrage du serveur web,"),(0,a.kt)("li",{parentName:"ul"},"ex\xe9cution php,"),(0,a.kt)("li",{parentName:"ul"},"connexion client,"),(0,a.kt)("li",{parentName:"ul"},"envoi de la collecte de donn\xe9es.")),(0,a.kt)("p",null,"Certaines donn\xe9es sont \xe9galement collect\xe9es \xe0 intervalles r\xe9guliers."),(0,a.kt)("h3",l({},{id:"collect\xe9-au-d\xe9marrage-de-la-base-de-donn\xe9es"}),"Collect\xe9 au d\xe9marrage de la base de donn\xe9es"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"CPU"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nom, type et vitesse du processeur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"numberOfCores"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre total de c\u0153urs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"memory"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Taille de la m\xe9moire (en octets) disponible sur la machine")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"system"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Version du syst\xe8me d'exploitation et num\xe9ro de version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"headless"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application fonctionne en mode headless")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"version"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Num\xe9ro de version de l'application 4D")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"buildNumber"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Num\xe9ro de build de l'application 4D")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"license"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nom commercial et description des licences des produits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"isRosetta"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si 4D est \xe9mul\xe9 par Rosetta sous macOS, False sinon (non \xe9mul\xe9 ou sous Windows).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"uniqueID"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"ID unique du serveur 4D")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Texte (cha\xeene hach\xe9e)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Identifiant unique associ\xe9 \xe0 la base de donn\xe9es (",(0,a.kt)("em",{parentName:"td"},"Hachage par roulement polynomial du nom de la base de donn\xe9es"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataFileSize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Taille du fichier de donn\xe9es en octets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indexesSize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Taille des index en octets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cacheSize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Taille du cache en octets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si l'ancienne couche r\xe9seau est utilis\xe9e pour le serveur d'application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"usingQUICNetworkLayer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si la base de donn\xe9es utilise la couche r\xe9seau QUIC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"encryptedConnections"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si les connexions client/serveur sont crypt\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"encrypted"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Vrai si le fichier de donn\xe9es est chiffr\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"compiled"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est compil\xe9e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"isEngined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est fusionn\xe9e avec 4D Volume Desktop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"projectMode"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est un projet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mobile"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Informations sur les sessions mobiles")))),(0,a.kt)("h3",l({},{id:"collect\xe9-au-d\xe9marrage-du-serveur-web-et-lors-de-lenvoi-de-la-collecte-de-donn\xe9es"}),"Collect\xe9 au d\xe9marrage du serveur web et lors de l'envoi de la collecte de donn\xe9es"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webServer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),'"started":true si le serveur web est en cours de d\xe9marrage ou d\xe9marr\xe9')))),(0,a.kt)("h3",l({},{id:"collect\xe9s-\xe0-intervalles-r\xe9guliers"}),"Collect\xe9s \xe0 intervalles r\xe9guliers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maximumNumberOfWebProcesses"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre maximal de process web simultan\xe9s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedPhysicalMemory"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Utilisation maximale de la m\xe9moire physique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedVirtualMemory"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Utilisation maximale de la m\xe9moire virtuelle")))),(0,a.kt)("h3",l({},{id:"collect\xe9-lors-de-lenvoi-de-la-collecte-de-donn\xe9es"}),"Collect\xe9 lors de l'envoi de la collecte de donn\xe9es"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"uptime"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Temps \xe9coul\xe9 (en secondes) depuis l'ouverture de la base de donn\xe9es 4D locale")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets lus \xe0 partir de la m\xe9moire cache")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets manqu\xe9s dans le cache")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de lectures dans le cache")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de lectures manqu\xe9es dans le cache")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets lus dans le fichier de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets \xe9crits dans le fichier de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de lectures dans le fichier de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'\xe9critures dans le fichier de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets lus dans le fichier d'index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteBytes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'octets \xe9crits dans le fichier d'index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de lectures dans le fichier d'index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteCount"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'\xe9critures dans le fichier d'index")))),(0,a.kt)("h3",l({},{id:"collect\xe9-lors-de-la-fermeture-de-la-base-de-donn\xe9es-et-de-lenvoi-de-la-collecte-de-donn\xe9es"}),"Collect\xe9 lors de la fermeture de la base de donn\xe9es et de l'envoi de la collecte de donn\xe9es"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webserverHits"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de hits sur le serveur web pendant la collecte des donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"restHits"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de hits sur le serveur REST pendant la collecte des donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesIn"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Octets re\xe7us par le serveur web pendant la collecte des donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesOut"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Octets envoy\xe9s par le serveur web pendant la collecte des donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"qodly.webforms"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de webforms Qodly")))),(0,a.kt)("h3",l({},{id:"collect\xe9-\xe0-chaque-fois-que-php-execute-est-appel\xe9"}),"Collect\xe9 \xe0 chaque fois que PHP execute est appel\xe9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"phpCall"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'appels \xe0 ",(0,a.kt)("inlineCode",{parentName:"td"},"PHP execute"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"externalPHP"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True si le client effectue un appel \xe0 ",(0,a.kt)("inlineCode",{parentName:"td"},"PHP execute")," et utilise sa propre version de php")))),(0,a.kt)("h3",l({},{id:"collect\xe9-\xe0-la-connexion-dun-client"}),"Collect\xe9 \xe0 la connexion d'un client"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maximum4DClientConnections"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre maximal de connexions de 4D Client au serveur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"connectionSystems"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Syst\xe8me d'exploitation du client sans le num\xe9ro de build (entre parenth\xe8ses) et nombre de clients qui l'utilisent")))),(0,a.kt)("h2",l({},{id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-"}),"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?"),(0,a.kt)("p",null,"Les donn\xe9es collect\xe9es sont \xe9crites dans un fichier texte (format JSON) par base de donn\xe9es lorsque 4D Server quitte. Le fichier est stock\xe9 dans le ",(0,a.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page485.html"}),"dossier 4D actif"),", c'est-\xe0-dire :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sous Windows : ",(0,a.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,a.kt)("li",{parentName:"ul"},"sous macOS : ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,a.kt)("p",null,"Une fois par semaine, le fichier est automatiquement envoy\xe9 par le r\xe9seau \xe0 4D. Le fichier est ensuite supprim\xe9 du dossier 4D actif."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(489040).Z,width:"1261",height:"398"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si le fichier n'a pas pu \xeatre envoy\xe9 pour une raison quelconque, il est n\xe9anmoins supprim\xe9 et aucun message d'erreur n'est affich\xe9 c\xf4t\xe9 4D Server.")),(0,a.kt)("p",null,"Le fichier est envoy\xe9 au serveur \xe0 l'adresse suivante : ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dcollector.4d.com")," (ip : 195.68.52.83)."),(0,a.kt)("h2",l({},{id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es"}),"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es"),(0,a.kt)("p",null,"Vous pouvez d\xe9sactiver la collecte automatique de donn\xe9es dans ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/Desktop/building#clientserver-page"}),"les applications client/serveur g\xe9n\xe9r\xe9es"),"."),(0,a.kt)("p",null,"Pour d\xe9sactiver la collecte, passez la valeur ",(0,a.kt)("strong",{parentName:"p"},"False")," \xe0 la cl\xe9 ",(0,a.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"buildApp.4DSettings"),", utilis\xe9 pour construire l'application client/serveur."))}p.isMDXComponent=!0},489040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);