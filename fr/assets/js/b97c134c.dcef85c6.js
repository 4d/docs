"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30198"],{393770:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/http-get-option","title":"HTTP GET OPTION","description":"HTTP GET OPTION ( option ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-get-option.md","sourceDirName":"commands-legacy","slug":"/commands/http-get-option","permalink":"/docs/fr/commands/http-get-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-get-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-get-option","title":"HTTP GET OPTION","slug":"/commands/http-get-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Get certificates folder","permalink":"/docs/fr/commands/http-get-certificates-folder"},"next":{"title":"HTTP Parse message","permalink":"/docs/fr/commands/http-parse-message"}}'),r=t("785893"),i=t("250065");let d={id:"http-get-option",title:"HTTP GET OPTION",slug:"/commands/http-get-option",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HTTP GET OPTION"})," ( ",(0,r.jsx)(n.em,{children:"option"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Code de l\u2019option \xe0 lire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur courante de l\u2019option"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(n.p,{children:["Cette commande est maintenue pour des raisons de compatibilit\xe9 uniquement. Il est maintenant recommand\xe9 d'utiliser la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/API/HTTPRequestClass",children:(0,r.jsx)(n.code,{children:"4D.HTTPRequest"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"HTTP GET OPTION"})," retourne la valeur courante des options HTTP (options utilis\xe9es par le client pour la prochaine requ\xeate d\xe9clench\xe9e par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-get",children:"HTTP Get"})," ou ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-request",children:"HTTP Request"}),"). La valeur courante d'une option peut \xeatre la valeur par d\xe9faut ou avoir \xe9t\xe9 modifi\xe9e \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-set-option",children:"HTTP SET OPTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les options sont locales au process courant. Dans le cadre d\u2019un composant, elles sont locales au composant en cours d\u2019ex\xe9cution."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"option"})," le num\xe9ro de l\u2019option dont vous souhaitez lire la valeur. Vous pouvez utiliser une des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Client HTTP"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP client log"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"}),"= une des constantes suivantes : HTTP d\xe9sactiver log: Le journal des requ\xeates du client HTTP est d\xe9sactiv\xe9 (d\xe9faut) HTTP activer log avec tous body: Le journal des requ\xeates du client HTTP est activ\xe9 avec tous les body de la r\xe9ponse et de la requ\xeate. HTTP activer log avec body request: Le journal des requ\xeates du client HTTP est activ\xe9 avec uniquement le body de la requ\xeate HTTP activer log avec body response: Le journal des requ\xeates du client HTTP est activ\xe9 avec uniquement le body de la r\xe9ponse HTTP activer log sans body: Le journal des requ\xeates du client HTTP est activ\xe9 sans body (la taille du body est fournie dans ce cas) Permet d'obtenir ou de d\xe9finir l'\xe9tat du fichier journal des requ\xeates du client HTTP. Lorsqu'il est activ\xe9, ce fichier, nomm\xe9 \"4DHTTPClientLog_nn.txt\", est stock\xe9 dans le dossier \"Logs\" de l'application (nn est le num\xe9ro du fichier). Il est utile pour d\xe9boguer les probl\xe8mes li\xe9s aux requ\xeates du client HTTP. Il enregistre chaque requ\xeate et chaque r\xe9ponse en mode brut. Les requ\xeates enti\xe8res, y compris les en-t\xeates, sont enregistr\xe9es ; en option, les parties du body peuvent \xe9galement \xeatre enregistr\xe9es. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,r.jsx)(n.em,{children:"Description des logs"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP compression"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = 0 (ne pas compresser) ou 1 (compresser). Par d\xe9faut : 0",(0,r.jsx)(n.br,{}),"Cette option permet d\u2019activer ou d\u2019activer le m\xe9canisme de compression des requ\xeates entre le client et le serveur, destin\xe9 \xe0 acc\xe9l\xe9rer les \xe9changes. Lorsque ce m\xe9canisme est activ\xe9, le client HTTP utilise la compression deflate ou GZIP en fonction de la r\xe9ponse du serveur."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP display auth dial"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = 0 (ne pas afficher le dialogue) ou 1 (afficher le dialogue). Par d\xe9faut : 0",(0,r.jsx)(n.br,{}),"Cette option g\xe8re l\u2019affichage de bo\xeete de dialogue d\u2019authentification lors de l\u2019ex\xe9cution de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-get",children:"HTTP Get"})," ou ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-request",children:"HTTP Request"}),". Par d\xe9faut, cette commande ne provoque jamais l'affichage de la bo\xeete de dialogue, vous devez en principe utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),". Toutefois, si vous souhaitez qu\u2019une bo\xeete de dialogue d\u2019authentification apparaisse pour que l\u2019utilisateur saisisse ses identifiants, passez 1 dans valeur. La bo\xeete de dialogue n\u2019appara\xeet que si la requ\xeate requiert une authentification."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP follow redirect"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = 0 (ne pas accepter les redirections) ou 1 (accepter les redirections). ",(0,r.jsx)(n.br,{})," Valeur par d\xe9faut = 1"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP max redirect"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = nombre maximum de redirections accept\xe9es",(0,r.jsx)(n.br,{})," Valeur par d\xe9faut = 2"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP reset auth settings"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = 0 (ne pas effacer les informations) ou 1 (les effacer). Par d\xe9faut : 0",(0,r.jsx)(n.br,{}),"Cette option permet d\u2019indiquer \xe0 4D de r\xe9initialiser les informations d'authentification de l\u2019utilisateur (nom d'utilisateur, mot de passe, m\xe9thode) apr\xe8s chaque ex\xe9cution d\u2019une commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-get",children:"HTTP Get"})," ou ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-request",children:"HTTP Request"})," dans un m\xeame process. Par d\xe9faut, ces informations sont conserv\xe9es et r\xe9utilis\xe9es \xe0 chaque requ\xeate. Passez 1 dans ",(0,r.jsx)(n.em,{children:"valeur"})," pour les effacer apr\xe8s chaque appel. A noter que quel que soit le param\xe9trage, les informations sont effac\xe9es lorsque le process est d\xe9truit."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP timeout"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeur"})," = timeout de la requ\xeate cliente, exprim\xe9 en secondes. Le timeout est le d\xe9lai d\u2019attente du client HTTP en cas de non-r\xe9ponse du serveur. A l\u2019issue de ce d\xe9lai, le client referme la session, la requ\xeate est perdue.",(0,r.jsx)(n.br,{})," Par d\xe9faut, ce d\xe9lai est de 120 secondes. Il peut \xeatre modifi\xe9 en raison de caract\xe9ristiques particuli\xe8res (\xe9tat du r\xe9seau, sp\xe9cificit\xe9s de la requ\xeate, etc.)."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeur"})," une variable qui recevra la valeur courante de l'",(0,r.jsx)(n.em,{children:"option"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-set-option",children:"HTTP SET OPTION"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1159"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);