"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36208],{317831:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(474848),s=r(28453);const o={id:"application-server",title:"Page Serveur d\u2019application"},t=void 0,l={id:"ServerWindow/application-server",title:"Page Serveur d\u2019application",description:"La Page Serveur d\u2019application regroupe les informations relatives \xe0 la base de donn\xe9es publi\xe9e par 4D Server et permet de g\xe9rer cette publication.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ServerWindow/application-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/application-server",permalink:"/docs/fr/ServerWindow/application-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fapplication-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"application-server",title:"Page Serveur d\u2019application"},sidebar:"docs",previous:{title:"Page maintenance",permalink:"/docs/fr/ServerWindow/maintenance"},next:{title:"Page Serveur SQL",permalink:"/docs/fr/ServerWindow/sql-server"}},a={},c=[{value:"Refuser / Accepter nouvelles connexions",id:"refuser--accepter-nouvelles-connexions",level:2},{value:"Informations",id:"informations",level:2},{value:"Configuration",id:"configuration",level:3},{value:"M\xe9moire",id:"m\xe9moire",level:3},{value:"Connexions application serveur",id:"connexions-application-serveur",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"La Page Serveur d\u2019application regroupe les informations relatives \xe0 la base de donn\xe9es publi\xe9e par 4D Server et permet de g\xe9rer cette publication."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(957826).A+"",width:"1036",height:"699"})}),"\n",(0,i.jsx)(n.p,{children:"La partie sup\xe9rieure de la page fournit des informations sur le statut courant du serveur d\u2019application de 4D Server."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Etat"})," : D\xe9marr\xe9 ou Arr\xeat\xe9."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Date de d\xe9marrage"})," : Date et heure de lancement de la base serveur. Cette date correspond \xe0 l\u2019ouverture de la base par 4D Server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dur\xe9e de fonctionnement"})," : Dur\xe9e \xe9coul\xe9e depuis la derni\xe8re ouverture de la base."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"refuser--accepter-nouvelles-connexions",children:"Refuser / Accepter nouvelles connexions"}),"\n",(0,i.jsx)(n.p,{children:"Il permet de g\xe9rer l\u2019acc\xe8s de nouveaux postes clients \xe0 l\u2019application serveur."}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, lorsque la base est publi\xe9e :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Le libell\xe9 du bouton est "Refuser nouvelles connexions"'}),"\n",(0,i.jsx)(n.li,{children:"De nouveaux clients peuvent se connecter librement (dans les limites des connexions accord\xe9es par la licence)."}),"\n",(0,i.jsx)(n.li,{children:'Le nom de la base est publi\xe9 dans la bo\xeete de dialogue de connexion (si l\u2019option "Publier le nom de la base au d\xe9marrage dans le dialogue de connexion" est coch\xe9e dans les Pr\xe9f\xe9rences).'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"Refuser nouvelles connexions"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Le libell\xe9 du bouton devient "Accepter nouvelles connexions"'}),"\n",(0,i.jsx)(n.li,{children:"Plus aucun nouveau client ne peut alors se connecter. Les clients qui tenteront de se connecter recevront le message suivant :"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(990514).A+"",width:"671",height:"255"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le nom du projet n\u2019appara\xeet plus dans la bo\xeete de dialogue de connexion."}),"\n",(0,i.jsx)(n.li,{children:"Les clients d\xe9j\xe0 connect\xe9s ne sont pas d\xe9connect\xe9s et peuvent continuer \xe0 travailler normalement."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Vous pouvez effectuer la m\xeame action avec la commande ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1635.html",children:(0,i.jsx)(n.code,{children:"REJECT NEW REMOTE CONNECTIONS"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"Accepter nouvelles connexions"}),', la base retourne dans l\u2019\xe9tat "par d\xe9faut".']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Cette fonction permet par exemple \xe0 un administrateur d'effectuer diverses op\xe9rations de maintenance (v\xe9rification, compactage, etc.) juste apr\xe8s avoir d\xe9marr\xe9 le serveur. S\u2019il utilise une connexion cliente, il a la certitude d\u2019\xeatre le seul \xe0 modifier les donn\xe9es. Il est \xe9galement possible d\u2019utiliser cette fonction en pr\xe9paration d\u2019une op\xe9ration de maintenance n\xe9cessitant qu\u2019aucun poste client ne soit connect\xe9."}),"\n",(0,i.jsx)(n.h2,{id:"informations",children:"Informations"}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Cette zone fournit plusieurs informations sur la base de donn\xe9es 4D publi\xe9e par le serveur : nom et emplacement des fichiers de structure et de donn\xe9es et nom du fichier journal (fichier d\u2019historique de la base). Vous pouvez cliquer sur le nom du fichier de structure ou de donn\xe9es afin de visualiser son chemin d\u2019acc\xe8s complet."}),"\n",(0,i.jsxs)(n.p,{children:["Le champ ",(0,i.jsx)(n.strong,{children:"Mode"})," indique le mode d'ex\xe9cution courant de l'application : compil\xe9 ou interpr\xe9t\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"La partie inf\xe9rieure de la zone indique les param\xe8tres de configuration du serveur (d\xe9marr\xe9 comme service, port et adresse IP) et l\u2019activation du TLS pour les connexions client-serveur (ne concerne pas les connexions SQL ni HTTP)."}),"\n",(0,i.jsx)(n.h3,{id:"m\xe9moire",children:"M\xe9moire"}),"\n",(0,i.jsxs)(n.p,{children:["Cette zone indique la ",(0,i.jsx)(n.strong,{children:"m\xe9moire cache totale"})," (param\xe8tre d\xe9fini dans les pr\xe9f\xe9rences de la base) et la ",(0,i.jsx)(n.strong,{children:"m\xe9moire cache utilis\xe9e"})," (allocation dynamique par 4D Server en fonction des besoins)."]}),"\n",(0,i.jsx)(n.h3,{id:"connexions-application-serveur",children:"Connexions application serveur"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Maximum"})," : indique le nombre maximum de connexions clientes simultan\xe9es autoris\xe9es pour le serveur d'application. Cette valeur d\xe9pend de la licence install\xe9e sur le poste serveur."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Utilis\xe9es"})," : indique le nombre de connexions actuellement consomm\xe9es."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},957826:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},990514:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(296540);const s={},o=i.createContext(s);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);