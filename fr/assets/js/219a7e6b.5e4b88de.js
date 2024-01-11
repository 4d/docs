"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65852],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},843843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"SessionClass",title:"Session"},s=void 0,o={unversionedId:"API/SessionClass",id:"version-20-R3/API/SessionClass",title:"Session",description:"Les objets Session sont retourn\xe9s par la commande Session lorsque les sessions extensibles sont activ\xe9es dans votre projet. L'objet Session est automatiquement cr\xe9\xe9 et maintenu par le serveur web 4D pour contr\xf4ler la session d'un client web (par exemple, un navigateur). Cet objet fournit au d\xe9veloppeur web une interface avec la session de l'utilisateur, permettant de g\xe9rer les privil\xe8ges, de stocker des donn\xe9es contextuelles, de partager des informations entre les process et de lancer des processus pr\xe9emptifs li\xe9s \xe0 la session.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/fr/20-R3/API/SessionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/fr/20-R3/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/fr/20-R3/API/SignalClass"}},p={},u=[{value:"Sommaire",id:"sommaire",level:3},{value:"Session",id:"session",level:2},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description-1",level:4},{value:"Exemple",id:"exemple-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Exemple",id:"exemple-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-4",level:4},{value:"Exemple",id:"exemple-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-5",level:4},{value:"Exemple",id:"exemple-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-6",level:4},{value:"Exemple",id:"exemple-6",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-7",level:4},{value:"Exemple",id:"exemple-7",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-8",level:4}],m={toc:u};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les objets Session sont retourn\xe9s par la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#session"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session"))," lorsque ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/WebServer/sessions#enabling-sessions"}),"les sessions extensibles sont activ\xe9es dans votre projet"),". L'objet Session est automatiquement cr\xe9\xe9 et maintenu par le serveur web 4D pour contr\xf4ler la session d'un client web (par exemple, un navigateur). Cet objet fournit au d\xe9veloppeur web une interface avec la session de l'utilisateur, permettant de g\xe9rer les privil\xe8ges, de stocker des donn\xe9es contextuelles, de partager des informations entre les process et de lancer des processus pr\xe9emptifs li\xe9s \xe0 la session."),(0,a.kt)("p",null,"Pour des informations d\xe9taill\xe9es sur l'impl\xe9mentation de la session, veuillez consulter la section ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/WebServer/sessions"}),"Sessions du serveur web"),"."),(0,a.kt)("h3",r({},{id:"sommaire"}),"Sommaire"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#clearprivileges"}),(0,a.kt)("strong",{parentName:"a"},".clearPrivileges()")),"\xa0","\xa0","\xa0","\xa0","supprime tous les privil\xe8ges associ\xe9s \xe0 la session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#expirationdate"}),(0,a.kt)("strong",{parentName:"a"},".expirationDate")," : Text"),"\xa0","\xa0","\xa0","\xa0","la date et l'heure d'expiration du cookie de session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#hasprivilege"}),(0,a.kt)("strong",{parentName:"a"},".hasPrivilege"),"( ",(0,a.kt)("em",{parentName:"a"},"privilege")," : Text ) : Boolean"),"\xa0","\xa0","\xa0","\xa0","renvoie Vrai si le privil\xe8ge est associ\xe9 \xe0 la session, et Faux sinon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#idletimeout"}),(0,a.kt)("strong",{parentName:"a"},".idleTimeout")," : Integer"),"\xa0","\xa0","\xa0","\xa0","le d\xe9lai maximal d'inactivit\xe9 de session (en minutes), au-del\xe0 duquel la session est automatiquement ferm\xe9e par 4D")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#isguest"}),(0,a.kt)("strong",{parentName:"a"},".isGuest()")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","associates the privilege(s) defined in the parameter to the session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#setprivileges"}),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"privilege")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"privileges")," : Collection )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"settings")," : Object )"),"\xa0","\xa0","\xa0","\xa0","associe \xe0 la session le(s) privil\xe8ge(s) et/ou le(s) r\xf4le(s) d\xe9fini(s) dans le param\xe8tre")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#storage"}),(0,a.kt)("strong",{parentName:"a"},".storage")," : Object"),"\xa0","\xa0","\xa0","\xa0","un objet partag\xe9 qui peut \xeatre utilis\xe9 pour stocker des informations disponibles pour toutes les requ\xeates du client web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#username"}),(0,a.kt)("strong",{parentName:"a"},".userName")," : Text"),"\xa0","\xa0","\xa0","\xa0","le nom d'utilisateur associ\xe9 \xe0 la session")))),(0,a.kt)("h2",r({},{id:"session"}),"Session"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Session")," : 4D.Session"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Session"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objet session")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"La commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," renvoie l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," correspondant \xe0 la session web utilisateur extensible courante."),(0,a.kt)("p",null,"Cette commande fonctionne uniquement lorsque les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/WebServer/sessions#enabling-sessions"}),"sessions extensibles sont activ\xe9es"),". Elle retourne ",(0,a.kt)("em",{parentName:"p"},"Null")," lorsque ces sessions sont inactives ou lorsque les anciennes sessions sont utilis\xe9es."),(0,a.kt)("p",null,"Lorsque les sessions extensibles sont activ\xe9es, l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," est disponible depuis n'importe quel process web dans les contextes suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"M\xe9thodes base ",(0,a.kt)("inlineCode",{parentName:"li"},"On Web Authentication"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", et ",(0,a.kt)("inlineCode",{parentName:"li"},"On REST Authentication"),","),(0,a.kt)("li",{parentName:"ul"},"M\xe9thodes base ",(0,a.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," et ",(0,a.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))," pour les requ\xeates mobiles,"),(0,a.kt)("li",{parentName:"ul"},"Les ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/20-R3/ORDA/ordaClasses"}),"fonctions Data Model Class")," ORDA appel\xe9es par des requ\xeates REST,"),(0,a.kt)("li",{parentName:"ul"},"le code trait\xe9 par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"),(0,a.kt)("li",{parentName:"ul"},'les m\xe9thodes projet avec l\'attribut "Available through 4D tags and URLs (4DACTION...)" et appel\xe9es via les urls 4DACTION/.')),(0,a.kt)("h4",r({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"Vous avez d\xe9fini la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"action_Session")," ayant l'attribut \"Disponible via Balises HTML et URLs 4D\". Vous appelez la m\xe9thode en saisissant l'URL suivant dans votre navigateur :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"IP:port/4DACTION/action_Session\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //m\xe9thode action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n')),(0,a.kt)("h2",r({},{id:"clearprivileges"}),".clearPrivileges()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".clearPrivileges()")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ne requiert aucun param\xe8tre")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},".clearPrivileges()")," supprime tous les privil\xe8ges associ\xe9s \xe0 la session. En r\xe9sultat, la session devient automatiquement une session Guest."),(0,a.kt)("h4",r({},{id:"exemple-1"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//Invalider une session\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest est mis \xe0 True\n")),(0,a.kt)("h2",r({},{id:"expirationdate"}),".expirationDate"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".expirationDate")," : Text"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".expirationDate")," contient la date et l'heure d'expiration du cookie de session. La valeur est exprim\xe9e sous forme de texte au format ISO 8601 : ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS.mmmZ"),"."),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,a.kt)("strong",{parentName:"p"},"lecture seule"),". Elle est automatiquement recalcul\xe9e si la valeur de la propri\xe9t\xe9 ",(0,a.kt)("a",r({parentName:"p"},{href:"#idletimeout"}),(0,a.kt)("inlineCode",{parentName:"a"},".idleTimeout"))," est modifi\xe9e."),(0,a.kt)("h4",r({},{id:"exemple-2"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $expiration : Text\n$expiration:=Session.expirationDate //ex : "2021-11-05T17:10:42Z"\n')),(0,a.kt)("h2",r({},{id:"hasprivilege"}),".hasPrivilege()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".hasPrivilege"),"( ",(0,a.kt)("em",{parentName:"p"},"privilege")," : Text ) : Boolean"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privilege"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom du privil\xe8ge \xe0 v\xe9rifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai si la session dispose du ",(0,a.kt)("em",{parentName:"td"},"privilege"),", sinon Faux")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},".hasPrivilege()")," renvoie Vrai si le privil\xe8ge est associ\xe9 \xe0 la session, et Faux sinon."),(0,a.kt)("h4",r({},{id:"exemple-3"}),"Exemple"),(0,a.kt)("p",null,'Vous voulez v\xe9rifier si le privil\xe8ge "WebAdmin" est associ\xe9 \xe0 la session :'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'If (Session.hasPrivilege("WebAdmin"))\n    //Acc\xe8s accord\xe9, ne rien faire\nElse\n    //Afficher une page d\'authentification\n\nEnd if\n')),(0,a.kt)("h2",r({},{id:"idletimeout"}),".idleTimeout"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".idleTimeout")," : Integer"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".idleTimeout")," contient le d\xe9lai maximal d'inactivit\xe9 de session (en minutes), au-del\xe0 duquel la session est automatiquement ferm\xe9e par 4D."),(0,a.kt)("p",null,"Si cette propri\xe9t\xe9 n'est pas d\xe9finie, sa valeur par d\xe9faut est 60 (1h)."),(0,a.kt)("p",null,"Lorsque cette propri\xe9t\xe9 est modifi\xe9e, la propri\xe9t\xe9 ",(0,a.kt)("a",r({parentName:"p"},{href:"#expirationdate"}),(0,a.kt)("inlineCode",{parentName:"a"},".expirationDate"))," est mise \xe0 jour en cons\xe9quence."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La valeur ne peut pas \xeatre < 60 ; si une valeur inf\xe9rieure est d\xe9finie, le timeout est \xe9lev\xe9 \xe0 60.")),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,a.kt)("strong",{parentName:"p"},"lecture-\xe9criture"),"."),(0,a.kt)("h4",r({},{id:"exemple-4"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n        // La session d'un invit\xe9 se ferme apr\xe8s 60 minutes d'inactivit\xe9. Session.idleTimeout:=60\nElse\n        //D'autres sessions se fermeront apr\xe8s 60 minutes d'inactivit\xe9. Session.idleTimeout:=120\nEnd if\n\n")),(0,a.kt)("h2",r({},{id:"isguest"}),".isGuest()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isGuest()")," : Boolean"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai s'il s'agit d'une session Guest, sinon Faux")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," function associates the privilege(s) defined in the parameter to the session."),(0,a.kt)("h4",r({},{id:"exemple-5"}),"Exemple"),(0,a.kt)("p",null,"Dans la m\xe9thode base ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Connection")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n    //Faire quelque chose pour l'utilisateur invit\xe9\nEnd if\n")),(0,a.kt)("h2",r({},{id:"setprivileges"}),".setPrivileges()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Prise en charge de la propri\xe9t\xe9 "roles" dans settings')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"privilege")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"privileges")," : Collection )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"settings")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privilege"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom de privil\xe8ge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de noms de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"settings"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Objet contenant une propri\xe9t\xe9 "privileges" (texte ou collection)')))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," associe \xe0 la session le(s) privil\xe8ge(s) et/ou le(s) r\xf4le(s) d\xe9fini(s) dans le param\xe8tre."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dans le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"privilege"),", passez une cha\xeene contenant un nom de privil\xe8ge (ou plusieurs noms de privil\xe8ges s\xe9par\xe9s par des virgules).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dans le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"privileges"),", passez une collection de cha\xeenes contenant des noms de privil\xe8ges.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dans le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"settings"),", passez un objet contenant les propri\xe9t\xe9s suivantes :"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text ou Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("li",null,"Cha\xeene contenant un nom de privil\xe8ge, ou"),(0,a.kt)("li",null,"Collection de cha\xeenes contenant des noms de privil\xe8ges"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text ou Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("li",null,"Cha\xeene contenant un nom de r\xf4le, ou"),(0,a.kt)("li",null,"Collection de cha\xeenes contenant des noms de roles"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"userName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom d'utilisateur \xe0 associer \xe0 la session (optionnel)")))),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Les privil\xe8ges et les r\xf4les sont d\xe9finis dans le fichier ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/ORDA/privileges#rolesjson-file"}),(0,a.kt)("inlineCode",{parentName:"a"},"roles.json"))," du projet. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/ORDA/privileges"}),(0,a.kt)("strong",{parentName:"a"},"Privileges"))," .")),(0,a.kt)("p",null,"Si la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"privileges")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," contient un nom qui n'est pas d\xe9clar\xe9 dans le fichier ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R3/ORDA/privileges#rolesjson-file"}),(0,a.kt)("inlineCode",{parentName:"a"},"roles.json"))," , elle est ignor\xe9e."),(0,a.kt)("p",null,"Par d\xe9faut lorsqu'aucun privil\xe8ge ou r\xf4le n'est associ\xe9 \xe0 la session, la session est une ",(0,a.kt)("a",r({parentName:"p"},{href:"#isguest"}),"session Guest"),"."),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("a",r({parentName:"p"},{href:"#username"}),(0,a.kt)("inlineCode",{parentName:"a"},"userName"))," est accessible au niveau de l'objet session (lecture seulement)."),(0,a.kt)("h4",r({},{id:"exemple-6"}),"Exemple"),(0,a.kt)("p",null,"Dans une m\xe9thode d'authentification personnalis\xe9e, vous assignez le privil\xe8ge \"WebAdmin\" \xe0 l'utilisateur :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $userOK : Boolean\n\n... //Authentifier l'utilisateur\n\nIf ($userOK) //L'utilisateur a \xe9t\xe9 approuv\xe9\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection(\"WebAdmin\")\n  Session.setPrivileges($info)\nEnd if\n\n")),(0,a.kt)("h2",r({},{id:"storage"}),".storage"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".storage")," : Object"),(0,a.kt)("h4",r({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," contient un objet partag\xe9 qui peut \xeatre utilis\xe9 pour stocker des informations disponibles pour toutes les requ\xeates du client web."),(0,a.kt)("p",null,"Lorsqu'un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," est cr\xe9\xe9, la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," est vide. Puisqu'il s'agit d'un objet partag\xe9, cette propri\xe9t\xe9 sera disponible dans l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," du serveur."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tout comme l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," du serveur, la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," est toujours \"single\" : l'ajout d'un objet partag\xe9 ou d'une collection partag\xe9e \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," ne cr\xe9e pas de groupe partag\xe9.")),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est elle-m\xeame en ",(0,a.kt)("strong",{parentName:"p"},"lecture seulement")," mais elle retourne un objet en lecture-\xe9criture."),(0,a.kt)("h4",r({},{id:"exemple-7"}),"Exemple"),(0,a.kt)("p",null,"Vous voulez stocker l'adresse IP du client dans la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".storage"),". Vous pouvez \xe9crire dans la m\xe9thode base ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n')),(0,a.kt)("h2",r({},{id:"username"}),".userName"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".userName")," : Text"),(0,a.kt)("h4",r({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".userName")," contient le nom d'utilisateur associ\xe9 \xe0 la session. Vous pouvez vous en servir pour identifier l'utilisateur dans votre code."),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est une cha\xeene vide par d\xe9faut. Elle peut \xeatre d\xe9finie via la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"privileges")," de la fonction ",(0,a.kt)("a",r({parentName:"p"},{href:"#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"setPrivileges()")),"."),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,a.kt)("strong",{parentName:"p"},"lecture seule"),"."))}d.isMDXComponent=!0}}]);