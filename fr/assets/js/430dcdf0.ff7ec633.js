/*! For license information please see 430dcdf0.ff7ec633.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4927],{584950:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var s=i(474848),r=i(28453);const t={id:"monitor",title:"Page Moniteur"},a=void 0,o={id:"ServerWindow/monitor",title:"Page Moniteur",description:"La Page Moniteur affiche des informations dynamiques relatives \xe0 l\u2019exploitation de la base de donn\xe9es ainsi que des informations sur le syst\xe8me et l\u2019application 4D Server.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/ServerWindow/monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/monitor",permalink:"/docs/fr/20/ServerWindow/monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmonitor.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"monitor",title:"Page Moniteur"},sidebar:"docs",previous:{title:"Fen\xeatre d'administration de 4D Server",permalink:"/docs/fr/20/ServerWindow/overview"},next:{title:"Page Utilisateurs",permalink:"/docs/fr/20/ServerWindow/users"}},l={},u=[{value:"Zone graphique",id:"Zone-graphique",level:2},{value:"Zone Vue d\u2019ensemble",id:"Zone-Vue-densemble",level:2},{value:"Zone D\xe9tails",id:"Zone-D\xe9tails",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["La Page ",(0,s.jsx)(n.strong,{children:"Moniteur"})," affiche des informations dynamiques relatives \xe0 l\u2019exploitation de la base de donn\xe9es ainsi que des informations sur le syst\xe8me et l\u2019application 4D Server."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(323516).A+"",width:"1036",height:"699"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Sous Windows, certaines informations syst\xe8me affich\xe9es sur cette page sont r\xe9cup\xe9r\xe9es via les outils \"Analyseur de performance\" de Windows. Ces outils sont accessibles uniquement si l'utilisateur ayant ouvert la session sur laquelle 4D Server a \xe9t\xe9 lanc\xe9 dispose des autorisations d'administration n\xe9cessaires."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Zone-graphique",children:"Zone graphique"}),"\n",(0,s.jsx)(n.p,{children:"La zone graphique permet de visualiser l\u2019\xe9volution en temps r\xe9el de plusieurs param\xe8tres : le taux d\u2019utilisation des processeurs, le trafic r\xe9seau et l'\xe9tat de la m\xe9moire. Vous s\xe9lectionnez le param\xe8tre \xe0 afficher via le menu situ\xe9 au centre la fen\xeatre :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(45109).A+"",width:"305",height:"162"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Utilisation processeurs"}),' : Taux d\u2019utilisation globale du ou des processeur(s) de la machine, toutes applications confondues. La part sp\xe9cifique de 4D Server dans ce taux d\u2019utilisation est fournie dans la zone d\u2019informations "Processeurs".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"R\xe9seau"}),' : Nombre d\u2019octets re\xe7us par seconde par la machine (serveur ou client). Le nombre d\u2019octets envoy\xe9s est fourni dans la zone d\u2019informations "R\xe9seau".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"M\xe9moire physique"}),' : Quantit\xe9 de m\xe9moire RAM de la machine utilis\xe9e par 4D Server. Une vue plus d\xe9taill\xe9e de l\u2019utilisation de la m\xe9moire est fournie dans la zone d\u2019informations "M\xe9moire".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"M\xe9moire virtuelle"})," : Affiche dans la zone graphique la quantit\xe9 de m\xe9moire virtuelle utilis\xe9e par l\u2019application 4D Server. Cette m\xe9moire est allou\xe9e par le syst\xe8me en fonction des besoins de l\u2019application. La valeur situ\xe9e en bas \xe0 droite de la zone indique la quantit\xe9 de m\xe9moire en cours d\u2019utilisation. La valeur situ\xe9e en haut \xe0 gauche indique la quantit\xe9 maximale de m\xe9moire virtuelle utilisable. La valeur maximale est calcul\xe9e dynamiquement en fonction des param\xe8tres m\xe9moire g\xe9n\xe9raux de l\u2019application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cache"})," : Affiche dans la zone graphique la quantit\xe9 de m\xe9moire cache utilis\xe9e par l\u2019application 4D Server. La valeur situ\xe9e en bas \xe0 droite de la zone indique la quantit\xe9 de m\xe9moire en cours d\u2019utilisation. The value found at the bottom right of the area indicates the quantity of memory currently being used."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A noter que lorsque cette option est s\xe9lectionn\xe9e, le d\xe9filement de la zone graphique est ralenti car une analyse efficace du cache s\u2019effectue g\xe9n\xe9ralement sur une p\xe9riode d\u2019observation assez longue."}),"\n",(0,s.jsx)(n.h2,{id:"Zone-Vue-densemble",children:"Zone Vue d\u2019ensemble"}),"\n",(0,s.jsx)(n.p,{children:'La zone "Vue d\u2019ensemble" fournit diverses informations relatives au syst\xe8me, \xe0 l\u2019application et aux licences install\xe9es sur la machine de 4D Server.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Informations syst\xe8me"})," : Ordinateur, syst\xe8me et adresse IP du serveur"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Informations application"})," : Num\xe9ro de version interne de 4D Server et statut du Volume Shadow Copy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connexions maximum"})," : Nombre de connexions simultan\xe9es autoris\xe9es par type de serveur"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Licence"})," : Description de la licence. Lorsque la licence produit ou l'une de ses expansions expire dans moins de 10 jours, dans le cas d'un abonnement, 4D Server tente de renouveler automatiquement la licence depuis le compte de l'utilisateur 4D. Dans ce cas, si le renouvellement automatique \xe9choue pour une raison quelconque (erreur de connexion, statut du compte invalide, contrat non prolong\xe9...), une ic\xf4ne d'avertissement est affich\xe9e \xe0 c\xf4t\xe9 de la licence afin d'alerter l'administrateur du serveur. Des informations suppl\xe9mentaires relatives au statut du renouvellement de la licence peuvent \xeatre affich\xe9es dans une info-bulle lorsque vous survolez la zone avec la souris :"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(193376).A+"",width:"502",height:"91"})}),"\n",(0,s.jsxs)(n.p,{children:["G\xe9n\xe9ralement, vous devrez v\xe9rifier le ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Admin/licenses",children:(0,s.jsx)(n.strong,{children:"Gestionnaire de licences"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Zone-D\xe9tails",children:"Zone D\xe9tails"}),"\n",(0,s.jsx)(n.p,{children:'La zone "D\xe9tails" reprend une partie des informations affich\xe9es dans la zone graphique et propose des informations compl\xe9mentaires.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Disque dur"})," : Capacit\xe9 globale du disque dur et r\xe9partition entre l\u2019espace occup\xe9 par les donn\xe9es de la base (fichier de donn\xe9es + index des donn\xe9es), l\u2019espace occup\xe9 par les autres fichiers et l\u2019espace disponible."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"M\xe9moire"})," : M\xe9moire RAM install\xe9e sur la machine et quantit\xe9 de m\xe9moire occup\xe9e par 4D Server, par les autres applications ainsi que m\xe9moire disponible. La m\xe9moire occup\xe9e par 4D Server peut \xe9galement \xeatre affich\xe9e dynamiquement dans la zone graphique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Processeurs"})," : Taux instantan\xe9 d\u2019occupation du ou des processeurs(s) de la machine par 4D Server et par les autres applications. Ce taux est recalcul\xe9 en permanence. Le taux d\u2019occupation par 4D Server peut \xe9galement \xeatre affich\xe9 dynamiquement dans la zone graphique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"R\xe9seau"})," : Nombre instantan\xe9 d\u2019octets envoy\xe9s et re\xe7us par la machine (serveur ou client). Cette valeur est r\xe9actualis\xe9e en permanence. Le nombre d\u2019octets re\xe7us peut \xe9galement \xeatre affich\xe9 dynamiquement dans la zone graphique."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,i)=>{var s=i(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,i){var s,t={},u=null,c=null;for(s in void 0!==i&&(u=""+i),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:r,type:e,key:u,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=u,n.jsxs=u},474848:(e,n,i)=>{e.exports=i(221020)},323516:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/server-admin-6de46e4a6646d48d476ad5d9f78274d3.png"},45109:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},193376:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/server-licence-failed-344940a57ec088cf090ffa990c427a47.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(296540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);