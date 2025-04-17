"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29386"],{399291:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/web-server-list","title":"WEB Server list","description":"WEB Server list : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/web-server-list.md","sourceDirName":"commands","slug":"/commands/web-server-list","permalink":"/docs/fr/20-R8/commands/web-server-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fweb-server-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-server-list","title":"WEB Server list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Server","permalink":"/docs/fr/20-R8/commands/web-server"},"next":{"title":"WEB SET HOME PAGE","permalink":"/docs/fr/20-R8/commands/web-set-home-page"}}'),t=s("785893"),i=s("250065");let l={id:"web-server-list",title:"WEB Server list",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB Server list"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection des objets Web Server disponibles"})]})})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R3"}),(0,t.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"WEB Server list"})," renvoie une collection de tous les objets serveur Web disponibles dans l'application 4D."]}),"\n",(0,t.jsx)(n.p,{children:"Une application 4D peut contenir de un \xe0 plusieurs serveurs Web :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un serveur Web pour la base de donn\xe9es h\xf4te (serveur Web par d\xe9faut)"}),"\n",(0,t.jsx)(n.li,{children:"un serveur Web pour chaque composant."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Tous les serveurs Web disponibles sont renvoy\xe9s par la commande ",(0,t.jsx)(n.code,{children:"WEB Server list"})," , qu'ils soient en cours d'ex\xe9cution ou non."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["L'objet serveur Web par d\xe9faut est automatiquement charg\xe9 par 4D au d\xe9marrage. D'un autre c\xf4t\xe9, chaque serveur Web composant que vous voulez utiliser doit \xeatre instanci\xe9 en utilisant la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-server",children:(0,t.jsx)(n.code,{children:"WEB Server"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser la propri\xe9t\xe9 ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/API/WebServerClass#name",children:".name"})," de l'objet serveur Web pour identifier le projet ou le composant auquel chaque objet serveur Web de la liste est attach\xe9."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Nous voulons savoir combien de serveurs web en fonctionnement sont disponibles :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $wSList : Collection\n var $vRun : Integer\n\n $wSList:=WEB Server list\n $vRun:=$wSList.countValues(True;"isRunning")\n ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-server",children:"WEB Server"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/API/WebServerClass#stop",children:"webServer.stop()"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1716"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);