"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19107"],{251623:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"WebServer/preemptiveWeb","title":"Utiliser des process web pr\xe9emptifs","description":"Le serveur Web de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web pr\xe9emptifs dans vos applications compil\xe9es. Vous pouvez configurer votre code li\xe9 au Web, y compris les balises 4D, les m\xe9thodes base Web ou les fonctions de classe Rest de Orda, afin qu\'il s\'ex\xe9cute simultan\xe9ment sur le plus grand nombre de coeurs possibles.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/WebServer/preemptiveWeb.md","sourceDirName":"WebServer","slug":"/WebServer/preemptiveWeb","permalink":"/docs/fr/19/WebServer/preemptiveWeb","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"preemptiveWeb","title":"Utiliser des process web pr\xe9emptifs"},"sidebar":"docs","previous":{"title":"Sessions utilisateur","permalink":"/docs/fr/19/WebServer/sessions"},"next":{"title":"Prise en main","permalink":"/docs/fr/19/REST/gettingStarted"}}'),i=r("785893"),t=r("250065");let d={id:"preemptiveWeb",title:"Utiliser des process web pr\xe9emptifs"},l=void 0,c={},o=[{value:"Disponibilit\xe9 du mode pr\xe9emptif pour les process Web",id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-process-web",level:2},{value:"Ecrire du code serveur Web thread-safe",id:"ecrire-du-code-serveur-web-thread-safe",level:2},{value:"Code web 4D thread-safe",id:"code-web-4d-thread-safe",level:2},{value:"4D commands and database methods",id:"4d-commands-and-database-methods",level:3},{value:"URL Web Server",id:"url-web-server",level:3},{value:"Ic\xf4ne de process web pr\xe9emptif",id:"ic\xf4ne-de-process-web-pr\xe9emptif",level:3}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Le serveur Web de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web pr\xe9emptifs dans vos applications compil\xe9es. Vous pouvez configurer votre code li\xe9 au Web, y compris les balises 4D, les m\xe9thodes base Web ou les fonctions de classe Rest de Orda, afin qu'il s'ex\xe9cute simultan\xe9ment sur le plus grand nombre de coeurs possibles."}),"\n",(0,i.jsxs)(s.p,{children:["Pour plus d'informations sur la fonctionnalit\xe9 des process pr\xe9emptifs dans 4D, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,i.jsx)(s.em,{children:"Process 4D pr\xe9emptifs"})," du ",(0,i.jsx)(s.a,{href:"https://doc.4d.com",children:(0,i.jsx)(s.em,{children:"manuel de language 4D"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-process-web",children:"Disponibilit\xe9 du mode pr\xe9emptif pour les process Web"}),"\n",(0,i.jsx)(s.p,{children:"Le tableau suivant indique si l'utilisation du mode pr\xe9emptif pour les process Web est disponible selon le contexte d'ex\xe9cution :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"4D Server"}),(0,i.jsxs)(s.th,{children:["Interpr\xe9t\xe9, projet (",(0,i.jsx)(s.a,{href:"/docs/fr/19/Desktop/clientServer#using-4d-and-4d-server-on-the-same-machine",children:"client connect\xe9 en local"}),")"]}),(0,i.jsx)(s.th,{children:"Interpr\xe9t\xe9, projet (sans client connect\xe9 en local) ou binaire"}),(0,i.jsx)(s.th,{children:"Compil\xe9"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Serveur REST"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:"pr\xe9emptif"}),(0,i.jsx)(s.td,{children:"pr\xe9emptif"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Serveur Web"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Server Web Services"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ancien REST"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"4D distant/monoposte"}),(0,i.jsx)(s.th,{children:"Interpr\xe9t\xe9"}),(0,i.jsx)(s.th,{children:"Compil\xe9"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Serveur REST"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:"pr\xe9emptif"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Serveur Web"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Server Web Services"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ancien REST"}),(0,i.jsx)(s.td,{children:"coop\xe9ratif"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"param\xe8tre web"})})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Serveur REST : g\xe8re les ",(0,i.jsx)(s.a,{href:"/docs/fr/19/REST/classFunctions",children:"fonctions de classe du mod\xe8le de donn\xe9es ORDA"})]}),"\n",(0,i.jsxs)(s.li,{children:["Serveur Web : g\xe8re les ",(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/templates",children:"mod\xe8les Web"}),", ",(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/httpRequests",children:"4DACTION et les m\xe9thodes base"})]}),"\n",(0,i.jsx)(s.li,{children:"Serveur de services Web : g\xe8re les requ\xeates SOAP"}),"\n",(0,i.jsxs)(s.li,{children:["Ancien REST: requ\xeates directes aux m\xe9thodes 4D (",(0,i.jsx)(s.code,{children:"/rest/{table}/{methodName}"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"param\xe8tre web"})})," signifie que le mode pr\xe9emptif d\xe9pend d'un param\xe9trage :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["lorsque l'option ",(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/sessions#enabling-sessions",children:(0,i.jsx)(s.strong,{children:"Sessions \xe9volutives"})})," est s\xe9lectionn\xe9e, le ",(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/sessions#preemptive-mode",children:"mode pr\xe9emptif est automatiquement utilis\xe9"})," pour les process web."]}),"\n",(0,i.jsxs)(s.li,{children:["sinon, l'option ",(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/webServerConfig#use-preemptive-processes",children:(0,i.jsx)(s.strong,{children:"Utiliser des process pr\xe9emptifs"})})," est prise en compte."]}),"\n",(0,i.jsx)(s.li,{children:"en ce qui concerne les process de service Web (serveur ou client), le mode pr\xe9emptif est pris en charge au niveau de la m\xe9thode. Vous devez simplement s\xe9lectionner la propri\xe9t\xe9 \"Peut \xeatre ex\xe9cut\xe9e dans un process pr\xe9emptif\" pour les m\xe9thodes de serveur SOAP publi\xe9es (voir Publication d'un service Web avec 4D) ou les m\xe9thodes de client proxy (voir Abonnement \xe0 un service Web dans 4D) et vous assurer qu'elles sont confirm\xe9es comme \xe9tant thread-safe par le compilateur."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ecrire-du-code-serveur-web-thread-safe",children:"Ecrire du code serveur Web thread-safe"}),"\n",(0,i.jsxs)(s.p,{children:["Tout le code 4D ex\xe9cut\xe9 par le serveur Web doit \xeatre thread-safe si vous souhaitez que les process Web soient lanc\xe9s en mode pr\xe9emptif. Lorsque l'option ",(0,i.jsx)(s.strong,{children:"Utiliser des process pr\xe9emptifs"})," est coch\xe9e dans la bo\xeete de dialogue Propri\xe9t\xe9s, les parties suivantes de l'application seront automatiquement \xe9valu\xe9es par le compilateur 4D :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Toutes les m\xe9thodes base li\xe9es au web :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/authentication#on-web-authentication",children:(0,i.jsx)(s.code,{children:"On Web Authentication"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/19/WebServer/httpRequests#on-web-connection",children:(0,i.jsx)(s.code,{children:"On Web Connection"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/fr/19/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,i.jsx)(s.code,{children:"On REST Authentication"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,i.jsx)(s.code,{children:"On Mobile App Authentication"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["La m\xe9thode projet ",(0,i.jsx)(s.code,{children:"compiler_web"}),' (ind\xe9pendamment de sa propri\xe9t\xe9 "Mode d\'ex\xe9cution") ;']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["En principe, tout code trait\xe9 par la commande ",(0,i.jsx)(s.code,{children:"PROCESS 4D TAGS"})," dans le contexte du web, par exemple par le biais de pages .shtml."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Toute m\xe9thode projet comportant l'attribut \"Available through 4D tags and URLS (",(0,i.jsx)(s.code,{children:"4DACTION"}),', etc.)"']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Triggers pour les tables comportant l\'attribut "Expose as REST resource"'}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/19/REST/classFunctions",children:"Fonctions de classe du mod\xe8le de donn\xe9es ORDA"})," appel\xe9es via REST"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'M\xe9thodes projet avec la propri\xe9t\xe9 "REST Server" coch\xe9es (appels REST h\xe9rit\xe9s)'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Pour chacune de ces m\xe9thodes ou parties de code, le compilateur v\xe9rifiera si les r\xe8gles thread-safe sont respect\xe9es, et retournera une erreur en cas de probl\xe8me. Pour plus d'informations \xe0 propos des r\xe8gles thread-safe, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,i.jsx)(s.em,{children:"Ecrire une m\xe9thode thread-safe"})," dans le chapitre ",(0,i.jsx)(s.em,{children:"Process"})," du manuel de ",(0,i.jsx)(s.a,{href:"https://doc.4d.com",children:"Langage 4D"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"code-web-4d-thread-safe",children:"Code web 4D thread-safe"}),"\n",(0,i.jsx)(s.p,{children:"La plupart des commandes, fonctions, m\xe9thodes base et URLs 4D sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif."}),"\n",(0,i.jsx)(s.h3,{id:"4d-commands-and-database-methods",children:"4D commands and database methods"}),"\n",(0,i.jsx)(s.p,{children:"Toutes les commandes 4D relatives au Web sont thread-safe, \xe0 savoir :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["toutes les commandes du th\xe8me ",(0,i.jsx)(s.em,{children:"Web Server"})]}),"\n",(0,i.jsxs)(s.li,{children:["toutes les commandes du th\xe8me ",(0,i.jsx)(s.em,{children:"Client HTTP"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Les m\xe9thodes base li\xe9es au web sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif (voir ci-dessous) : ",(0,i.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,i.jsx)(s.code,{children:"On Web Connection"}),", ",(0,i.jsx)(s.code,{children:"On REST Authentication"}),"...)."]}),"\n",(0,i.jsx)(s.p,{children:"Bien s\xfbr, le code ex\xe9cut\xe9 par ces m\xe9thodes doit aussi \xeatre thread-safe."}),"\n",(0,i.jsx)(s.h3,{id:"url-web-server",children:"URL Web Server"}),"\n",(0,i.jsx)(s.p,{children:"Les URLs Web Server ci-dessous sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"4daction/"})," (la m\xe9thode projet appel\xe9e doit \xe9galement \xeatre \xe0 thread-safe)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"4dcgi/"})," (les m\xe9thodes base appel\xe9es doivent \xe9galement \xeatre thread-safe)"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"4dwebtest/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"4dblank/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"4dstats/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"4dhtmlstats/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"4dcacheclear/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"rest/"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"4dimgfield/"})," (g\xe9n\xe9r\xe9 par ",(0,i.jsx)(s.code,{children:"PROCESS 4D TAGS"})," pour les requ\xeates web relatives aux champs images)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"4dimg/"})," (g\xe9n\xe9r\xe9 par ",(0,i.jsx)(s.code,{children:"PROCESS 4D TAGS"})," pour les requ\xeates web sur les variables image)"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ic\xf4ne-de-process-web-pr\xe9emptif",children:"Ic\xf4ne de process web pr\xe9emptif"}),"\n",(0,i.jsx)(s.p,{children:"Dans l'Explorateur d'ex\xe9cution et dans la fen\xeatre d'administration de 4D Server, une icone sp\xe9cifique s'affiche pour les process Web pr\xe9emptifs :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type de process"}),(0,i.jsx)(s.th,{children:"Ic\xf4ne"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"M\xe9thode Web (process pr\xe9emptif)"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.img,{src:r(820431).Z+"",width:"40",height:"32"})})]})})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},820431:function(e,s,r){r.d(s,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let i={},t=n.createContext(i);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);