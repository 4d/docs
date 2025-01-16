"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98026"],{316687:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"ServerWindow/maintenance","title":"Page maintenance","description":"La page Maintenance fournit diverses informations relatives au fonctionnement courant de la base. Elle donne \xe9galement acc\xe8s aux fonctions de maintenance \xe9l\xe9mentaires :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ServerWindow/maintenance.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/maintenance","permalink":"/docs/fr/ServerWindow/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmaintenance.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"maintenance","title":"Page maintenance"},"sidebar":"docs","previous":{"title":"Page Process","permalink":"/docs/fr/ServerWindow/processes"},"next":{"title":"Page Serveur d\u2019application","permalink":"/docs/fr/ServerWindow/application-server"}}'),s=r("785893"),i=r("250065");let a={id:"maintenance",title:"Page maintenance"},o=void 0,d={},l=[{value:"Derni\xe8re v\xe9rification/dernier compactage",id:"derni\xe8re-v\xe9rificationdernier-compactage",level:2},{value:"V\xe9rifier enregistrements et index",id:"v\xe9rifier-enregistrements-et-index",level:3},{value:"Compacter les donn\xe9es...",id:"compacter-les-donn\xe9es",level:3},{value:"Dur\xe9e de fonctionnement",id:"dur\xe9e-de-fonctionnement",level:2},{value:"Red\xe9marrer le serveur...",id:"red\xe9marrer-le-serveur",level:3},{value:"Derni\xe8re sauvegarde",id:"derni\xe8re-sauvegarde",level:2},{value:"Requ\xeates et d\xe9bogage",id:"requ\xeates-et-d\xe9bogage",level:2},{value:"Start/Stop Request and Debug Logs",id:"startstop-request-and-debug-logs",level:3},{value:"Voir le compte rendu",id:"voir-le-compte-rendu",level:3},{value:"Load logs configuration file",id:"load-logs-configuration-file",level:3},{value:"Pause logging",id:"pause-logging",level:3}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["La page ",(0,s.jsx)(n.strong,{children:"Maintenance"})," fournit diverses informations relatives au fonctionnement courant de la base. Elle donne \xe9galement acc\xe8s aux fonctions de maintenance \xe9l\xe9mentaires :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(106890).Z+"",width:"1036",height:"699"})}),"\n",(0,s.jsx)(n.h2,{id:"derni\xe8re-v\xe9rificationdernier-compactage",children:"Derni\xe8re v\xe9rification/dernier compactage"}),"\n",(0,s.jsxs)(n.p,{children:["Ces zones indiquent la date, l\u2019heure et le statut de la derni\xe8re ",(0,s.jsx)(n.a,{href:"/docs/fr/MSC/verify",children:"v\xe9rification des donn\xe9es"})," et de la derni\xe8re ",(0,s.jsx)(n.a,{href:"/docs/fr/MSC/compact",children:"op\xe9ration de compactage"})," effectu\xe9es sur la base."]}),"\n",(0,s.jsx)(n.h3,{id:"v\xe9rifier-enregistrements-et-index",children:"V\xe9rifier enregistrements et index"}),"\n",(0,s.jsx)(n.p,{children:"Ce bouton permet de lancer directement l\u2019op\xe9ration de v\xe9rification, sans interruption du serveur. A noter que le serveur peut \xeatre sensiblement ralenti durant l\u2019op\xe9ration."}),"\n",(0,s.jsxs)(n.p,{children:["Tous les enregistrements et tous les index de la base sont v\xe9rifi\xe9s. Si vous souhaitez pouvoir cibler la v\xe9rification ou disposer d\u2019options suppl\xe9mentaires, vous devez utiliser le ",(0,s.jsx)(n.a,{href:"/docs/fr/MSC/overview",children:"Centre de s\xe9curit\xe9 et de maintenance"})," (CSM)."]}),"\n",(0,s.jsxs)(n.p,{children:["A l\u2019issue de la v\xe9rification, un fichier de compte-rendu est g\xe9n\xe9r\xe9 au format XML sur le serveur, dans le dossier ",(0,s.jsx)(n.a,{href:"/docs/fr/Project/architecture#logs",children:"maintenance Logs"}),". Le bouton ",(0,s.jsx)(n.strong,{children:"Voir le compte rendu"})," (nomm\xe9 ",(0,s.jsx)(n.strong,{children:"T\xe9l\xe9charger le compte rendu"})," si l\u2019op\xe9ration a \xe9t\xe9 effectu\xe9e depuis un poste distant) vous permet d\u2019afficher le fichier dans votre navigateur."]}),"\n",(0,s.jsx)(n.h3,{id:"compacter-les-donn\xe9es",children:"Compacter les donn\xe9es..."}),"\n",(0,s.jsx)(n.p,{children:"Ce bouton permet de lancer directement une op\xe9ration de compactage des donn\xe9es. Cette op\xe9ration n\xe9cessite de stopper le serveur : lorsque vous cliquez sur le bouton, la bo\xeete de dialogue de fermeture de la base 4D Server appara\xeet, vous permettant de choisir le mode d\u2019interruption de l\u2019exploitation :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(805026).Z+"",width:"502",height:"356"})}),"\n",(0,s.jsxs)(n.p,{children:["Apr\xe8s l\u2019interruption effective de la base, 4D Server effectue un compactage standard des donn\xe9es de la base. Si vous souhaitez disposer d\u2019options suppl\xe9mentaires, vous devez utiliser le ",(0,s.jsx)(n.a,{href:"/docs/fr/MSC/overview",children:"Centre de s\xe9curit\xe9 et de maintenance (CSM)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Une fois le compactage termin\xe9, 4D Server relance automatiquement l'application. Les utilisateurs 4D peuvent alors se reconnecter."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Si la demande de compactage a \xe9t\xe9 effectu\xe9e depuis un client 4D distant, ce poste est automatiquement reconnect\xe9 par 4D Server."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A l\u2019issue de la v\xe9rification, un fichier de compte-rendu est g\xe9n\xe9r\xe9 au format XML sur le serveur, dans le dossier ",(0,s.jsx)(n.a,{href:"/docs/fr/Project/architecture#logs",children:"maintenance Logs"}),". Le bouton ",(0,s.jsx)(n.strong,{children:"Voir le compte rendu"})," (nomm\xe9 ",(0,s.jsx)(n.strong,{children:"T\xe9l\xe9charger le compte rendu"})," si l\u2019op\xe9ration a \xe9t\xe9 effectu\xe9e depuis un poste distant) vous permet d\u2019afficher le fichier dans votre navigateur."]}),"\n",(0,s.jsx)(n.h2,{id:"dur\xe9e-de-fonctionnement",children:"Dur\xe9e de fonctionnement"}),"\n",(0,s.jsx)(n.p,{children:"Cette zone indique la dur\xe9e de fonctionnement du serveur depuis son dernier d\xe9marrage (jours, heures et minutes)."}),"\n",(0,s.jsx)(n.h3,{id:"red\xe9marrer-le-serveur",children:"Red\xe9marrer le serveur..."}),"\n",(0,s.jsx)(n.p,{children:"Ce bouton vous permet de provoquer un red\xe9marrage imm\xe9diat du serveur. Lorsque vous cliquez sur ce bouton, la bo\xeete de dialogue de fermeture de la base 4D Server appara\xeet, vous permettant de choisir le mode d\u2019interruption de l\u2019exploitation. Apr\xe8s le red\xe9marrage, 4D Server relance automatiquement la base. Les utilisateurs 4D peuvent alors se reconnecter."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Si la demande de red\xe9marrage a \xe9t\xe9 effectu\xe9e depuis un client 4D distant, ce poste est automatiquement reconnect\xe9 par 4D Server."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"derni\xe8re-sauvegarde",children:"Derni\xe8re sauvegarde"}),"\n",(0,s.jsxs)(n.p,{children:["Cette zone indique la date et l\u2019heure de la ",(0,s.jsx)(n.a,{href:"/docs/fr/MSC/backup",children:"derni\xe8re sauvegarde"})," de la base et fournit des informations relatives \xe0 la prochaine sauvegarde automatique, le cas \xe9ch\xe9ant. Les sauvegardes automatiques sont param\xe9tr\xe9es via la page ",(0,s.jsx)(n.strong,{children:"P\xe9riodicit\xe9"})," des propri\xe9t\xe9s de la base."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Derni\xe8re sauvegarde"})," : date et heure de la derni\xe8re sauvegarde automatique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prochaine sauvegarde"})," : date et heure de la prochaine sauvegarde."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Place n\xe9cessaire estim\xe9e"})," : estimation de la taille n\xe9cessaire pour la sauvegarde. La taille r\xe9elle du fichier de sauvegarde peut varier selon les param\xe8tres (compression, etc.) et selon les variations du fichier de donn\xe9es."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Place disponible"})," : place disponible sur le volume de sauvegarde."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le bouton ",(0,s.jsx)(n.strong,{children:"Sauvegarder la base"})," permet de d\xe9marrer une sauvegarde imm\xe9diate de la base en utilisant les param\xe8tres de sauvegarde courants (fichiers sauvegard\xe9s, emplacement des archives, options, etc.). Vous pouvez visualiser ces param\xe8tres en cliquant sur le bouton ",(0,s.jsx)(n.strong,{children:"Propri\xe9t\xe9s..."}),'. Pendant une sauvegarde sur le serveur, les postes clients sont "bloqu\xe9s" (mais pas d\xe9connect\xe9s) et il n\u2019est pas possible \xe0 de nouveaux clients de se connecter.']}),"\n",(0,s.jsx)(n.h2,{id:"requ\xeates-et-d\xe9bogage",children:"Requ\xeates et d\xe9bogage"}),"\n",(0,s.jsx)(n.p,{children:"Cette zone indique la dur\xe9e d\u2019enregistrement des fichiers d'historique (lorsqu\u2019ils sont activ\xe9s) et vous permet de g\xe9rer leur activation."}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/docs/fr/Debugging/debugLogFiles",children:(0,s.jsx)(n.strong,{children:"Description of log files"})})," section for details on log files."]}),"\n",(0,s.jsx)(n.h3,{id:"startstop-request-and-debug-logs",children:"Start/Stop Request and Debug Logs"}),"\n",(0,s.jsxs)(n.p,{children:["Le bouton ",(0,s.jsx)(n.strong,{children:"D\xe9marrer les journaux des requ\xeates et de d\xe9bogage"})," permet de d\xe9marrer les fichiers de compte-rendu. Ce mode pouvant d\xe9grader sensiblement les performances du serveur, il est \xe0 r\xe9server \xe0 la phase de mise au point de l\u2019application."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Ce bouton enregistre uniquement les op\xe9rations ex\xe9cut\xe9es sur le serveur."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois l\u2019enregistrement des requ\xeates activ\xe9, le libell\xe9 du bouton devient ",(0,s.jsx)(n.strong,{children:"Arr\xeater les journaux des requ\xeates et de d\xe9bogage"}),', permettant de stopper l\u2019enregistrement des requ\xeates \xe0 tout moment. A noter qu\u2019une reprise de l\u2019enregistrement apr\xe8s un arr\xeat "\xe9crase" le fichier pr\xe9c\xe9dent.']}),"\n",(0,s.jsx)(n.h3,{id:"voir-le-compte-rendu",children:"Voir le compte rendu"}),"\n",(0,s.jsxs)(n.p,{children:["Le bouton ",(0,s.jsx)(n.strong,{children:"Voir le compte rendu"})," (nomm\xe9 ",(0,s.jsx)(n.strong,{children:"T\xe9l\xe9charger le compte rendu"})," si l\u2019op\xe9ration a \xe9t\xe9 effectu\xe9e depuis un client distant) permet d\u2019ouvrir une fen\xeatre syst\xe8me affichant le fichier journal."]}),"\n",(0,s.jsx)(n.h3,{id:"load-logs-configuration-file",children:"Load logs configuration file"}),"\n",(0,s.jsxs)(n.p,{children:["Ce bouton vous permet de charger un ",(0,s.jsx)(n.a,{href:"/docs/fr/Debugging/debugLogFiles#using-a-log-configuration-file",children:"fichier de configuration de log"})," (fichier ",(0,s.jsx)(n.code,{children:".json"}),") pour un serveur sp\xe9cifique. Such a file can be provided by 4D technical services to monitor and study specific cases."]}),"\n",(0,s.jsx)(n.h3,{id:"pause-logging",children:"Pause logging"}),"\n",(0,s.jsx)(n.p,{children:"This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks."}),"\n",(0,s.jsxs)(n.p,{children:["When the logs have been paused, the button title changes to ",(0,s.jsx)(n.strong,{children:"Resume logging"}),", so that you can resume the logging operations."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["You can pause and resume logging using the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},106890:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},805026:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);