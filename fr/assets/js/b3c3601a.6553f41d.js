"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44458"],{713909:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/quit-4d","title":"QUIT 4D","description":"QUIT 4D {( d\xe9lai )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/quit-4d.md","sourceDirName":"commands-legacy","slug":"/commands/quit-4d","permalink":"/docs/fr/commands/quit-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquit-4d.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"quit-4d","title":"QUIT 4D","slug":"/commands/quit-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLUGIN LIST","permalink":"/docs/fr/commands/plugin-list"},"next":{"title":"REJECT NEW REMOTE CONNECTIONS","permalink":"/docs/fr/commands/reject-new-remote-connections"}}'),r=n("785893"),i=n("250065");let d={id:"quit-4d",title:"QUIT 4D",slug:"/commands/quit-4d",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Avec 4D en mode local ou distant",id:"avec-4d-en-mode-local-ou-distant",level:5},{value:"Avec 4D Server (proc\xe9dure stock\xe9e)",id:"avec-4d-server-proc\xe9dure-stock\xe9e",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"QUIT 4D"})," {( ",(0,r.jsx)(s.em,{children:"d\xe9lai"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"d\xe9lai"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"D\xe9lai (secondes) avant que le serveur ne quitte"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"QUIT 4D"}),"  vous permet de quitter l'application 4D courante et de retourner sur le Bureau du syst\xe8me d'exploitation."]}),"\n",(0,r.jsx)(s.p,{children:"Le m\xe9canismes mis en jeu par la commande sont diff\xe9rents suivant qu'elle est ex\xe9cut\xe9e sur 4D (mode local ou distant) ou 4D Server (proc\xe9dure stock\xe9e)."}),"\n",(0,r.jsx)(s.h5,{id:"avec-4d-en-mode-local-ou-distant",children:"Avec 4D en mode local ou distant"}),"\n",(0,r.jsxs)(s.p,{children:["Apr\xe8s un appel \xe0 ",(0,r.jsx)(s.strong,{children:"QUIT 4D"}),", l'ex\xe9cution du process courant est stopp\xe9e, puis 4D effectue les op\xe9rations suivantes :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si une ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})," existe, 4D l'ex\xe9cute dans un nouveau process local. Par exemple, vous pouvez utiliser cette m\xe9thode base pour informer les autres process, via la communication interprocess, qu'ils doivent \xeatre ferm\xe9s (s'ils sont en saisie de donn\xe9es) ou stopper l'ex\xe9cution des op\xe9rations d\xe9marr\xe9es dans la ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"})," (connexion de 4D \xe0 un autre serveur de bases de donn\xe9es). Notez que 4D quittera dans tous les cas : la ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})," peut assurer le nettoyage et la fermeture de toutes les op\xe9rations que vous voulez, mais la fermeture de la base est in\xe9luctable."]}),"\n",(0,r.jsxs)(s.li,{children:["S'il n'existe pas de ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"}),", 4D ferme tous les process un par un, sans distinction."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Si l'utilisateur est en saisie de donn\xe9es, les enregistrements seront annul\xe9s et non valid\xe9s.",(0,r.jsx)(s.br,{}),"\nSi vous voulez permettre \xe0 l'utilisateur de sauvegarder ses modifications effectu\xe9es dans les fen\xeatres du process courant, vous pouvez utiliser la communication interprocess pour indiquer \xe0 tous les autres process utilisateur que la base est sur le point d'\xeatre quitt\xe9e. Pour cela, vous pouvez adopter deux strat\xe9gies :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Effectuer ces op\xe9rations depuis le process courant avant d'appeler ",(0,r.jsx)(s.strong,{children:"QUIT 4D"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Traiter ces op\xe9rations depuis la ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Une troisi\xe8me strat\xe9gie est \xe9galement possible. Avant d'appeler ",(0,r.jsx)(s.strong,{children:"QUIT 4D"}),", vous testez si une fen\xeatre n\xe9cessite une validation. Si c'est le cas, vous demandez \xe0 l'utilisateur de valider ou d'annuler cette fen\xeatre puis de choisir Quitter de nouveau. Cependant, du point de vue purement \"interface utilisateur\", les deux premi\xe8res solutions sont pr\xe9f\xe9rables."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Le param\xe8tre ",(0,r.jsx)(s.em,{children:"d\xe9lai"})," n'est pas utilisable avec 4D en mode local ou distant."]}),"\n",(0,r.jsx)(s.h5,{id:"avec-4d-server-proc\xe9dure-stock\xe9e",children:"Avec 4D Server (proc\xe9dure stock\xe9e)"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"QUIT 4D"})," peut \xeatre ex\xe9cut\xe9e sur le poste serveur, dans une proc\xe9dure stock\xe9e.",(0,r.jsx)(s.br,{}),"\nDans ce cas, elle admet le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"d\xe9lai"}),". Ce param\xe8tre permet d\u2019allouer \xe0 4D Server un d\xe9lai d\u2019attente avant que l\u2019application ne quitte r\xe9ellement, laissant ainsi aux postes clients le temps de se d\xe9connecter. Vous devez passer dans ",(0,r.jsx)(s.em,{children:"d\xe9lai"})," une valeur en secondes.",(0,r.jsx)(s.br,{}),"\nCe param\xe8tre n\u2019est pris en compte que dans le cadre d\u2019une ex\xe9cution sur le poste serveur. Avec 4D en mode local ou distant, il est ignor\xe9.",(0,r.jsx)(s.br,{}),"\nSi vous ne passez pas le param\xe8tre ",(0,r.jsx)(s.em,{children:"d\xe9lai"}),", 4D Server attendra que tous les postes clients soient d\xe9connect\xe9s avant de quitter.",(0,r.jsx)(s.br,{}),"\nA la diff\xe9rence de 4D, le traitement de ",(0,r.jsx)(s.strong,{children:"QUIT 4D"})," par 4D Server est asynchrone : la m\xe9thode dans laquelle la commande est appel\xe9e n\u2019est pas interrompue apr\xe8s son ex\xe9cution."]}),"\n",(0,r.jsxs)(s.p,{children:["Si une ",(0,r.jsx)(s.em,{children:"On Server Shutdown Database Method"})," existe, elle est ex\xe9cut\xe9e \xe0 l\u2019issue du d\xe9lai d\xe9fini par le param\xe8tre ",(0,r.jsx)(s.em,{children:"d\xe9lai"}),", ou de la d\xe9connexion de tous les clients, suivant vos param\xe9trages."]}),"\n",(0,r.jsxs)(s.p,{children:["L\u2019action de la commande ",(0,r.jsx)(s.strong,{children:"QUIT 4D"})," utilis\xe9e dans une proc\xe9dure stock\xe9e est \xe9quivalente \xe0 celle de la commande ",(0,r.jsx)(s.strong,{children:"Quitter"})," du menu ",(0,r.jsx)(s.strong,{children:"Fichier"})," de 4D Server : elle provoque l\u2019apparition, sur chaque poste client, d\u2019une bo\xeete de dialogue signalant que le serveur est sur le point de quitter."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["La m\xe9thode projet suivante est associ\xe9e \xe0 la commande ",(0,r.jsx)(s.strong,{children:"Quitter"})," du menu ",(0,r.jsx)(s.strong,{children:"Fichier"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet M_QUITTER\n\xa0\n\xa0CONFIRM("Etes-vous certain de vouloir quitter ?")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"291"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var t=n(667294);let r={},i=t.createContext(r);function d(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);