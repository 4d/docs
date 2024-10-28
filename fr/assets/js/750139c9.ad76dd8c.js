"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22914],{240525:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=n(474848),t=n(28453);const d={id:"webServerObject",title:"Objet Web Server"},i=void 0,l={id:"WebServer/webServerObject",title:"Objet Web Server",description:"Un projet 4D peut d\xe9marrer et piloter un serveur Web pour l'application principale (h\xf4te) ainsi que pour chaque composant h\xe9berg\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/fr/20-R6/WebServer/webServerObject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webServerObject",title:"Objet Web Server"},sidebar:"docs",previous:{title:"Administration",permalink:"/docs/fr/20-R6/WebServer/webServerAdmin"},next:{title:"D\xe9veloppement Web",permalink:"/docs/fr/20-R6/WebServer/gettingStarted"}},c={},o=[{value:"Instancier un objet serveur web",id:"instancier-un-objet-serveur-web",level:2},{value:"Fonctions du serveur web",id:"fonctions-du-serveur-web",level:2},{value:"Propri\xe9t\xe9s du serveur web",id:"propri\xe9t\xe9s-du-serveur-web",level:2},{value:"Port\xe9e des commandes 4D Web",id:"port\xe9e-des-commandes-4d-web",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Un projet 4D peut d\xe9marrer et piloter un serveur Web pour l'application principale (h\xf4te) ainsi que pour chaque composant h\xe9berg\xe9."}),"\n",(0,s.jsx)(r.p,{children:"Par exemple, si vous avez install\xe9 deux composants dans votre application principale, vous pouvez d\xe9marrer et contr\xf4ler jusqu'\xe0 trois serveurs Web ind\xe9pendants \xe0 partir de votre application :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"un serveur web pour l'application h\xf4te,"}),"\n",(0,s.jsx)(r.li,{children:"un serveur web pour le composant n\xb01,"}),"\n",(0,s.jsx)(r.li,{children:"un serveur web pour le composant n\xb02."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"En dehors de la m\xe9moire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant \xeatre rattach\xe9s \xe0 un seul projet d'application 4D."}),"\n",(0,s.jsxs)(r.p,{children:["Chaque serveur web 4D, y compris le serveur web de l'application principale, est expos\xe9 comme un ",(0,s.jsx)(r.strong,{children:"objet"})," sp\xe9cifique de la classe ",(0,s.jsx)(r.code,{children:"4D.WebServer"}),". Une fois instanci\xe9, un objet serveur Web peut \xeatre g\xe9r\xe9 depuis l'application courante ou depuis n'importe quel composant \xe0 l'aide d'un ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass",children:"grand nombre de propri\xe9t\xe9s et de fonctions"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Les ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"commandes WEB"})," h\xe9rit\xe9es du langage 4D sont prises en charge mais ne peuvent pas s\xe9lectionner le serveur Web auquel elles s'appliquent (voir ci-dessous)."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Chaque serveur web (application h\xf4te ou composant) peut \xeatre utilis\xe9 dans son propre contexte, notamment :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["les appels vers la m\xe9thode base ",(0,s.jsx)(r.code,{children:"On Web Authentication"})," et ",(0,s.jsx)(r.code,{children:"On Web Connection"})]}),"\n",(0,s.jsx)(r.li,{children:"le traitement des balises 4D et les appels de m\xe9thodes,"}),"\n",(0,s.jsx)(r.li,{children:"sessions web et gestion du protocole TLS."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Cela vous permet de d\xe9velopper des composants ind\xe9pendants et des fonctionnalit\xe9s qui accompagnent leurs propres interfaces Web."}),"\n",(0,s.jsx)(r.h2,{id:"instancier-un-objet-serveur-web",children:"Instancier un objet serveur web"}),"\n",(0,s.jsx)(r.p,{children:"L'objet serveur Web de l'application h\xf4te (serveur Web par d\xe9faut) est automatiquement charg\xe9 par 4D au d\xe9marrage. Ainsi, si vous \xe9crivez dans un projet nouvellement cr\xe9\xe9 :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//la valeur de $nbSrv est 1\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Pour instancier un objet serveur web, appelez la commande ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#web-server",children:(0,s.jsx)(r.code,{children:"WEB Server"})})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\t//cr\xe9er une variable objet de la classe 4D.WebServer\nvar webServer : 4D.WebServer \n\t//appeler le serveur web depuis le contexte courant\nwebServer:=WEB Server  \n\n\t//\xe9quivalent \xe0\nwebServer:=WEB Server(Web server database)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Si l'application utilise des composants et que vous souhaitez appeler :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"le serveur Web de l'application h\xf4te \xe0 partir d'un composant ou"}),"\n",(0,s.jsx)(r.li,{children:"le serveur qui a re\xe7u la requ\xeate (quel que soit le serveur)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"vous pouvez \xe9galement utiliser :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"var webServer : 4D.WebServer \n\t//appeler le serveur web h\xf4te depuis un composant  \nwebServer:=WEB Server(Web server host database)  \n\t//appeler le serveur web cible\nwebServer:=WEB Server(Web server receiving request)  \n"})}),"\n",(0,s.jsx)(r.h2,{id:"fonctions-du-serveur-web",children:"Fonctions du serveur web"}),"\n",(0,s.jsxs)(r.p,{children:["Un ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#web-server-object",children:"objet de classe Web server"})," contient les fonctions suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Fonctions"}),(0,s.jsx)(r.th,{children:"Param\xe8tres"}),(0,s.jsx)(r.th,{children:"Valeur retourn\xe9e"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:"start()"})})}),(0,s.jsx)(r.td,{children:"settings (objet)"}),(0,s.jsx)(r.td,{children:"status (object)"}),(0,s.jsx)(r.td,{children:"D\xe9marre le serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:"stop()"})})}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"Stoppe le serveur web"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Pour d\xe9marrer et arr\xeater un serveur Web, il suffit d'appeler les fonctions ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:"start()"})})," et ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#stop",children:(0,s.jsx)(r.code,{children:"stop()"})})," de l'objet serveur Web :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"var $status : Object\n  \t//d\xe9marrer un serveur web avec les param\xe8tres par d\xe9faut\n$status:=webServer.start()\n\t//d\xe9marrer le serveur web avec des param\xe8tres personnalis\xe9s  \n\t//$settings objet contient les propri\xe9t\xe9s du serveur web\nwebServer.start($settings)\n\n\t//stopper le serveur web\n$status:=webServer.stop()\n"})}),"\n",(0,s.jsx)(r.h2,{id:"propri\xe9t\xe9s-du-serveur-web",children:"Propri\xe9t\xe9s du serveur web"}),"\n",(0,s.jsxs)(r.p,{children:["Un objet serveur Web contient ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#web-server-object",children:"diverses propri\xe9t\xe9s"})," qui configurent le serveur Web."]}),"\n",(0,s.jsx)(r.p,{children:"Ces propri\xe9t\xe9s sont d\xe9finies :"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\xe0 l'aide du param\xe8tre ",(0,s.jsx)(r.code,{children:"settings"})," de la fonction ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:".start()"})})," (sauf pour les propri\xe9t\xe9s en lecture seule, voir ci-dessous),"]}),"\n",(0,s.jsxs)(r.li,{children:["si elles ne sont pas utilis\xe9es, \xe0 l'aide de la commande ",(0,s.jsx)(r.code,{children:"WEB SET OPTION"})," (applications h\xf4tes uniquement),"]}),"\n",(0,s.jsx)(r.li,{children:"si elles ne sont pas utilis\xe9es, dans les propri\xe9t\xe9s de l'application h\xf4te ou du composant."}),"\n"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Si le serveur Web n'est pas d\xe9marr\xe9, les propri\xe9t\xe9s contiennent les valeurs qui seront utilis\xe9es au prochain d\xe9marrage du serveur Web."}),"\n",(0,s.jsxs)(r.li,{children:["Si le serveur Web est d\xe9marr\xe9, les propri\xe9t\xe9s contiennent les valeurs r\xe9elles utilis\xe9es par le serveur Web (les param\xe8tres par d\xe9faut peuvent avoir \xe9t\xe9 remplac\xe9s par le param\xe8tre ",(0,s.jsx)(r.code,{children:"settings"})," de la fonction ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:".start()"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"isRunning"}),", ",(0,s.jsx)(r.em,{children:"name"}),", ",(0,s.jsx)(r.em,{children:"openSSLVersion"})," et ",(0,s.jsx)(r.em,{children:"perfectForwardSecrecy"})," sont des propri\xe9t\xe9s en lecture seule qui ne peuvent pas \xeatre pr\xe9d\xe9finies dans le param\xe8tre objet ",(0,s.jsx)(r.code,{children:"settings"})," pour la fonction ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/API/WebServerClass#start",children:(0,s.jsx)(r.code,{children:"start()"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"port\xe9e-des-commandes-4d-web",children:"Port\xe9e des commandes 4D Web"}),"\n",(0,s.jsxs)(r.p,{children:["Le langage 4D contient ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"plusieurs commandes"})," permettant de contr\xf4ler le serveur Web. Cependant, ces commandes sont destin\xe9es \xe0 fonctionner avec un seul serveur Web (par d\xe9faut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur port\xe9e est appropri\xe9e."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Command"}),(0,s.jsx)(r.th,{children:"Port\xe9e"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"SET DATABASE PARAMETER"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB CLOSE SESSION"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET BODY PART"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Get body part count"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Get Current Session ID"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET HTTP BODY"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET HTTP HEADER"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET OPTION"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Get server info"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Get session process count"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET STATISTICS"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB GET VARIABLES"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Is secured connection"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Is server running"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SEND BLOB"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SEND FILE"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SEND RAW DATA"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SEND TEXT"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SET HOME PAGE"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SET HTTP HEADER"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SET OPTION"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB SET ROOT FOLDER"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB START SERVER"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB STOP SERVER"})}),(0,s.jsx)(r.td,{children:"Application h\xf4te du serveur web"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WEB Validate digest"})}),(0,s.jsx)(r.td,{children:"Serveur Web ayant re\xe7u la requ\xeate"})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var s=n(296540);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);