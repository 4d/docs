"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85326"],{287926:function(e,s,r){r.r(s),r.d(s,{default:()=>c,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"WebServer/webServer","title":"Serveur Web","description":"4D en mode local et distant ainsi que 4D Server disposent d\'un moteur de serveur web int\xe9gr\xe9 (aussi appel\xe9 serveur Http) qui vous permet de cr\xe9er et publier des applications web afin de tirer le maximum de vos bases de donn\xe9es 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WebServer/webServer.md","sourceDirName":"WebServer","slug":"/WebServer/overview","permalink":"/docs/fr/20-R7/WebServer/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"webServer","slug":"overview","title":"Serveur Web"},"sidebar":"docs","previous":{"title":"Web Applications","permalink":"/docs/fr/20-R7/category/web-applications"},"next":{"title":"Configuration","permalink":"/docs/fr/20-R7/WebServer/webServerConfig"}}'),i=r("785893"),t=r("250065");let o={id:"webServer",slug:"overview",title:"Serveur Web"},d=void 0,l={},a=[{value:"Administration simplifi\xe9e",id:"administration-simplifi\xe9e",level:2},{value:"Pr\xeat \xe0 l&#39;emploi",id:"pr\xeat-\xe0-lemploi",level:2},{value:"S\xe9curit\xe9",id:"s\xe9curit\xe9",level:2},{value:"Sessions Utilisateur",id:"sessions-utilisateur",level:2},{value:"Point d&#39;acc\xe8s pour requ\xeates REST",id:"point-dacc\xe8s-pour-requ\xeates-rest",level:2},{value:"Extension des param\xe8tres",id:"extension-des-param\xe8tres",level:2},{value:"Templates et URLs",id:"templates-et-urls",level:2},{value:"M\xe9thodes base d\xe9di\xe9es",id:"m\xe9thodes-base-d\xe9di\xe9es",level:2}];function u(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"4D en mode local et distant ainsi que 4D Server disposent d'un moteur de serveur web int\xe9gr\xe9 (aussi appel\xe9 serveur Http) qui vous permet de cr\xe9er et publier des applications web afin de tirer le maximum de vos bases de donn\xe9es 4D."}),"\n",(0,i.jsx)(s.h2,{id:"administration-simplifi\xe9e",children:"Administration simplifi\xe9e"}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez d\xe9marrer ou arr\xeater la publication de l'application web \xe0 tout moment. Pour ce faire, il suffit de s\xe9lectionner une commande dans un menu ou d'ex\xe9cuter une ligne de code."}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez ais\xe9ment suivre l'activit\xe9 du serveur web 4D dans la fen\xeatre d'administration de 4D, ou via des ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/webServerAdmin#administration-urls",children:"URLs sp\xe9ciales"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"pr\xeat-\xe0-lemploi",children:"Pr\xeat \xe0 l'emploi"}),"\n",(0,i.jsx)(s.p,{children:"Le serveur web 4D cr\xe9e automatiquement un dossier racine et une page d'accueil par d\xe9faut, disponibles imm\xe9diatement."}),"\n",(0,i.jsx)(s.h2,{id:"s\xe9curit\xe9",children:"S\xe9curit\xe9"}),"\n",(0,i.jsx)(s.p,{children:"La s\xe9curit\xe9 des donn\xe9es est pr\xe9sente \xe0 tous les stades d'impl\xe9mentation du serveur web 4D. Les niveaux de s\xe9curit\xe9 sont \xe9volutifs, et les options les plus s\xe9curis\xe9es sont g\xe9n\xe9ralement s\xe9lection\xe9es par d\xe9faut. La s\xe9curit\xe9 du serveur web 4D est bas\xe9e sur les \xe9l\xe9ments suivants :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Extension du support du ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/Admin/tls",children:(0,i.jsx)(s.strong,{children:"Protocole TLS (HTTPS)"})}),","]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Authentification"})," : ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/authentication",children:"fonctionnalit\xe9s d'authentification"})," flexibles et personnalisables bas\xe9es sur des param\xe8tres inclus et des m\xe9thodes base (",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/authentication#on-web-authentication",children:(0,i.jsx)(s.code,{children:"On Web Authentication"})})," pour le serveur web et ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,i.jsx)(s.code,{children:"On REST Authentication"})})," pour le serveur REST),"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Contr\xf4le du contenu expos\xe9"})," : Seul le contenu que vous exposez explicitement est disponible via des requ\xeates web directes ou des requ\xeates REST. Vous devez d\xe9clarer :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/templates#allowing-project-methods",children:"Les m\xe9thodes projet"})," expos\xe9es via des requ\xeates HTTP"]}),"\n",(0,i.jsxs)(s.li,{children:["Les ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/ordaClasses#fonctions-expos%C3%A9es-vs-non-expos%C3%A9es",children:"fonctions ORDA"})," expos\xe9es via des requ\xeates REST"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/REST/configuration#exposing-tables-and-fields",children:"Les tables et champs"})," que vous ne voulez pas rendre disponibles via des requ\xeates REST."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Sandboxing"})," via la d\xe9finition d'un ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/webServerConfig#root-folder",children:"dossier HTML racine"})," par d\xe9faut"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Contr\xf4le de l'utilisation des ressources du serveur"})," (par exemple, option ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"nombre maximal de process web simultan\xe9s"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Consultez le document ",(0,i.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"})," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sessions-utilisateur",children:"Sessions Utilisateur"}),"\n",(0,i.jsxs)(s.p,{children:["Le serveur Web 4D inclut des fonctionnalit\xe9s automatiques compl\xe8tes pour une gestion facilit\xe9e des ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions",children:"sessions web"})," (sessions utilisateur) bas\xe9e sur les cookies."]}),"\n",(0,i.jsx)(s.h2,{id:"point-dacc\xe8s-pour-requ\xeates-rest",children:"Point d'acc\xe8s pour requ\xeates REST"}),"\n",(0,i.jsx)(s.p,{children:"Le serveur web 4D permet d'acc\xe9der aux donn\xe9es stock\xe9es dans vos applications 4D via des requ\xeates REST. Les requ\xeates REST offrent un acc\xe8s direct \xe0 toutes les op\xe9rations de bases de donn\xe9es telles que l'ajout, la lecture, la modification, l'organisation ou la recherche."}),"\n",(0,i.jsxs)(s.p,{children:["Les requ\xeates REST sont d\xe9taill\xe9es dans la section ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"serveur REST"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"extension-des-param\xe8tres",children:"Extension des param\xe8tres"}),"\n",(0,i.jsxs)(s.p,{children:["Les requ\xeates REST sont d\xe9taill\xe9es dans la section ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"serveur REST"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"templates-et-urls",children:"Templates et URLs"}),"\n",(0,i.jsx)(s.p,{children:"Le serveur web 4D offre un acc\xe8s aux donn\xe9es stock\xe9es dans vos applications 4D \xe0 travers des pages de template et des URLs sp\xe9cifiques."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Authentification"})," : ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/authentication",children:"fonctionnalit\xe9s d'authentification"})," flexibles et personnalisables, bas\xe9es sur des param\xe8tres int\xe9gr\xe9s, ainsi que des M\xe9thodes base de secours (",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/authentication#on-web-authentication"})," pour le serveur web et []"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/httpRequests",children:"Les URLs sp\xe9cifiques"})," permettent \xe0 4D d'\xeatre appel\xe9 pour ex\xe9cuter tout type d'action. Ces URLs peuvent \xe9galement \xeatre utilis\xe9es comme des actions de formulaire pour d\xe9clencher des traitements de donn\xe9es quand l'utilisateur poste des form"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"m\xe9thodes-base-d\xe9di\xe9es",children:"M\xe9thodes base d\xe9di\xe9es"}),"\n",(0,i.jsx)(s.p,{children:"Le serveur web 4D offre un acc\xe8s aux donn\xe9es stock\xe9es dans vos applications 4D \xe0 travers des pages de template et des URLs sp\xe9cifiques."})]})}function c(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return o}});var n=r(667294);let i={},t=n.createContext(i);function o(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);