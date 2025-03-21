"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83980"],{110995:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands/session","title":"Session","description":"Session : 4D.Session","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/session.md","sourceDirName":"commands","slug":"/commands/session","permalink":"/docs/fr/20-R7/commands/session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session","title":"Session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME PROCESS","permalink":"/docs/fr/20-R7/commands/resume-process"},"next":{"title":"Session info","permalink":"/docs/fr/20-R7/commands/session-info"}}'),r=n("785893"),t=n("250065");let o={id:"session",title:"Session",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Sessions Web",id:"sessions-web",level:2},{value:"Sessions clients distants",id:"sessions-clients-distants",level:2},{value:"Session des proc\xe9dures stock\xe9es",id:"session-des-proc\xe9dures-stock\xe9es",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tres"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"R\xe9sultat"}),(0,r.jsx)(s.td,{children:"4D.Session"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Objet session"})]})})]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Prise en charge des sessions utilisateurs distants et proc\xe9dures stock\xe9es"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"Session"})," retourne l'objet ",(0,r.jsx)(s.code,{children:"Session"})," correspondant \xe0 la session utilisateur courante."]}),"\n",(0,r.jsx)(s.p,{children:"Selon le process \xe0 partir duquel la commande est appel\xe9e, la session utilisateur courante peut \xeatre :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["une session web (lorsque les ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions#enabling-web-sessions",children:"sessions \xe9volutives sont activ\xe9es"}),"),"]}),"\n",(0,r.jsx)(s.li,{children:"une session de client distant,"}),"\n",(0,r.jsx)(s.li,{children:"la session des proc\xe9dures stock\xe9es."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For more information, see the ",(0,r.jsx)(s.a,{href:"../command/session.md-types",children:"Session types"})," paragraph."]}),"\n",(0,r.jsxs)(s.p,{children:["Si la commande est appel\xe9e \xe0 partir d'un contexte non pris en charge (application mono-utilisateur, sessions \xe9volutives d\xe9sactiv\xe9es...), elle retourne ",(0,r.jsx)(s.em,{children:"Null"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"sessions-web",children:"Sessions Web"}),"\n",(0,r.jsxs)(s.p,{children:["L'objet ",(0,r.jsx)(s.code,{children:"Session"})," des sessions web est disponible depuis n'importe quel process web :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["M\xe9thodes base ",(0,r.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(s.code,{children:"On Web Connection"}),", et ",(0,r.jsx)(s.code,{children:"On REST Authentication"}),","]}),"\n",(0,r.jsx)(s.li,{children:"code trait\xe9 par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,r.jsx)(s.li,{children:'m\xe9thodes projet avec l\'attribut "Disponible via balises HTML et URLs 4D (4DACTION...)" et appel\xe9es via les urls 4DACTION/'}),"\n",(0,r.jsxs)(s.li,{children:["m\xe9thodes base ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,r.jsx)(s.code,{children:"On Mobile App Authentication"})})," et ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,r.jsx)(s.code,{children:"On Mobile App Action"})})," pour les requ\xeates mobiles,"]}),"\n",(0,r.jsxs)(s.li,{children:["Fonctions ORDA ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/classFunctions",children:"appel\xe9es via des requ\xeates REST"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations sur les sessions utilisateur web, veuillez consulter la section ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions",children:"Sessions web"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"sessions-clients-distants",children:"Sessions clients distants"}),"\n",(0,r.jsxs)(s.p,{children:["L'objet ",(0,r.jsx)(s.code,{children:"Session"})," des sessions client distants est disponible depuis :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Les m\xe9thodes projet qui ont l'attribut ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/Project/code-overview#execute-on-server",children:"Ex\xe9cuter sur serveur"})," (elles sont ex\xe9cut\xe9es dans le process jumeau du process client),"]}),"\n",(0,r.jsx)(s.li,{children:"Les Triggers,"}),"\n",(0,r.jsxs)(s.li,{children:["Les m\xe9thodes base ",(0,r.jsx)(s.code,{children:"On Server Open Connection"})," et ",(0,r.jsx)(s.code,{children:"On Server Shutdown Connection"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations sur les sessions utilisateur distantes, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/Desktop/clientServer#remote-user-sessions",children:(0,r.jsx)(s.strong,{children:"Sessions utilisateur client distants"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"session-des-proc\xe9dures-stock\xe9es",children:"Session des proc\xe9dures stock\xe9es"}),"\n",(0,r.jsxs)(s.p,{children:["Tous les process des proc\xe9dures stock\xe9es partagent la m\xeame session d'utilisateur virtuel. L'objet ",(0,r.jsx)(s.code,{children:"Session"})," des proc\xe9dures stock\xe9es est disponible depuis :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["les m\xe9thodes appel\xe9es avec la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/execute-on-server",children:(0,r.jsx)(s.code,{children:"Execute on server"})}),","]}),"\n",(0,r.jsxs)(s.li,{children:["Les m\xe9thodes base ",(0,r.jsx)(s.code,{children:"On Server Startup"}),", ",(0,r.jsx)(s.code,{children:"On Server Shutdown"}),", ",(0,r.jsx)(s.code,{children:"On Backup Startup"}),", ",(0,r.jsx)(s.code,{children:"On Backup Shutdown"}),", et ",(0,r.jsx)(s.code,{children:"On System event"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour des informations sur la session d'utilisateur virtuel des proc\xe9dures stock\xe9es, veuillez vous r\xe9f\xe9rer \xe0 la page ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html",children:"4D Server et langage 4D"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["Vous avez d\xe9fini la m\xe9thode ",(0,r.jsx)(s.code,{children:"action_Session"})," ayant l'attribut \"Disponible via Balises HTML et URLs 4D\". Vous appelez la m\xe9thode en saisissant l'URL suivant dans votre navigateur :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'  //m\xe9thode action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege\n          WEB SEND TEXT("4DACTION -- Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION -- Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION -- Sesion is null")\n End case\n'})}),"\n",(0,r.jsx)(s.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/session-storage",children:"Session storage"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/API/SessionClass",children:"Session API"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions",children:"Web server user sessions"})]}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1714"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var i=n(667294);let r={},t=i.createContext(r);function o(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);