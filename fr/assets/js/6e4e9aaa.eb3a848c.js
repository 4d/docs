"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66316"],{84636:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/log-event","title":"LOG EVENT","description":"LOG EVENT ( {typeSortie ;} message {; importance} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-event.md","sourceDirName":"commands-legacy","slug":"/commands/log-event","permalink":"/docs/fr/commands/log-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-event","title":"LOG EVENT","slug":"/commands/log-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is Windows","permalink":"/docs/fr/commands/is-windows"},"next":{"title":"Menu bar height","permalink":"/docs/fr/commands/menu-bar-height"}}'),t=s("785893"),d=s("250065");let i={id:"log-event",title:"LOG EVENT",slug:"/commands/log-event",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOG EVENT"})," ( {",(0,t.jsx)(n.em,{children:"typeSortie"})," ;} ",(0,t.jsx)(n.em,{children:"message"})," {; ",(0,t.jsx)(n.em,{children:"importance"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeSortie"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type de sortie du message"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Contenu du message"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"importance"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Niveau d\u2019importance du message (Windows uniquement)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LOG EVENT"})," vous permet de mettre en place un syst\xe8me personnalis\xe9 d'enregistrement des \xe9v\xe9nements internes qui se produisent au cours de l'utilisation de votre application. Vous pouvez ainsi contr\xf4ler le d\xe9roulement d\u2019une session de travail."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"message"})," les informations personnalis\xe9es \xe0 noter en fonction de l'\xe9v\xe9nement."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"typeSortie"})," vous permet de pr\xe9ciser le canal de sortie emprunt\xe9 par le ",(0,t.jsx)(n.em,{children:"message"}),". Vous pouvez passer dans ce param\xe8tre une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Journal d'\xe9v\xe9nements"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into 4D commands log"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d'inscrire le ",(0,t.jsx)(n.em,{children:"message"})," dans le fichier d\u2019historique des commandes de 4D, si ce fichier a \xe9t\xe9 activ\xe9. Ce fichier d'historique peut \xeatre activ\xe9 \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (s\xe9lecteur 34).",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Note :"})," Les fichiers d\u2019historique de 4D sont regroup\xe9s dans le dossier ",(0,t.jsx)(n.strong,{children:"Logs"})," (cf. commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-4d-folder",children:"Get 4D folder"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into 4D debug message"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d'envoyer le ",(0,t.jsx)(n.em,{children:"message"})," dans l'environnement de d\xe9bogage du syst\xe8me. Le r\xe9sultat d\xe9pend de la plate-forme :",(0,t.jsx)(n.br,{}),"sous Mac OS : la commande envoie le message \xe0 la Consolesous Windows : la commande envoie le message en tant que message de d\xe9bogage. Pour pouvoir lire ce message, vous devez disposer de Microsoft Visual Studio ou de l\u2019utilitaire DebugView pour Windows (",(0,t.jsx)(n.a,{href:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx",children:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into 4D diagnostic log"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d\u2019inscrire le ",(0,t.jsx)(n.em,{children:"message"})," dans le fichier de diagnostic de 4D, si ce fichier a \xe9t\xe9 activ\xe9. ",(0,t.jsx)(n.br,{}),"Le fichier de diagnostic peut \xeatre activ\xe9 \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (s\xe9lecteur 79)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into 4D request log"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d'inscrire le ",(0,t.jsx)(n.em,{children:"message"})," dans le fichier d\u2019historique des requ\xeates de 4D, si ce fichier a \xe9t\xe9 activ\xe9"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into system standard outputs"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d'envoyer le ",(0,t.jsx)(n.em,{children:"message"})," dans un flux de sortie standard. Le message est envoy\xe9 \xe0 ",(0,t.jsx)(n.strong,{children:"stdout"})," si ",(0,t.jsx)(n.em,{children:"importance"})," = Information message ou Warning message et ",(0,t.jsx)(n.strong,{children:"stderr"})," si ",(0,t.jsx)(n.em,{children:"importance"})," = Error message"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Into Windows log events"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Indique \xe0 4D d'envoyer le ",(0,t.jsx)(n.em,{children:"message"})," vers l\u2019\u201CObservateur d\u2019\xe9v\xe9nements\u201D de Windows. Ce journal re\xe7oit et stocke des messages en provenance des applications en cours d\u2019ex\xe9cution. Dans ce cas, vous pouvez d\xe9finir le niveau d'importance du ",(0,t.jsx)(n.em,{children:"message"})," via le param\xe8tre ",(0,t.jsx)(n.em,{children:"importance"})," (cf. ci-dessous).",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.br,{}),"Notes :"]})," Pour que cette fonctionnalit\xe9 soit disponible, le service Observateur d\u2019\xe9v\xe9nements de Windows doit \xeatre d\xe9marr\xe9.Sous Mac OS, la commande ne fait rien avec ce type de sortie."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeSortie"}),", la valeur 0 (Into Windows log events) est utilis\xe9e par d\xe9faut."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez attribuer au ",(0,t.jsx)(n.em,{children:"message"})," un niveau d\u2019importance via le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"importance"})," afin de faciliter la lecture du journal d\u2019\xe9v\xe9nements. Il existe trois niveaux d\u2019importance : Information, Avertissement et Erreur. 4D vous propose les constantes pr\xe9d\xe9finies suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Error message"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Information message"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Warning message"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"importance"})," ou passez une valeur invalide, la valeur par d\xe9faut (0) est utilis\xe9e."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"importance"})," est utilis\xe9 uniquement avec les param\xe8tres ",(0,t.jsx)(n.em,{children:"typeSortie"})," ",(0,t.jsx)(n.code,{children:"Into Windows log events"}),", ",(0,t.jsx)(n.code,{children:"Into 4D diagnostic log"})," et ",(0,t.jsx)(n.code,{children:"Into system standard outputs"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Afin de conserver une trace des lancements de votre base sous Windows, vous pouvez \xe9crire, dans la ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LOG EVENT(Into Windows log events;"D\xe9marrage de la base Facturation")\n'})}),"\n",(0,t.jsx)(n.p,{children:"A chaque ouverture de la base, cette information sera inscrite dans l\u2019Observateur d\u2019\xe9v\xe9nements de Windows, avec le niveau d\u2019importance 0."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"667"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);