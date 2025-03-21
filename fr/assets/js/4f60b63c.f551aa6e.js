"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94826"],{946275:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/web-set-root-folder","title":"WEB SET ROOT FOLDER","description":"WEB SET ROOT FOLDER ( dossierRacine )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-set-root-folder.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-root-folder","permalink":"/docs/fr/20-R7/commands/web-set-root-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-root-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-set-root-folder","title":"WEB SET ROOT FOLDER","slug":"/commands/web-set-root-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET OPTION","permalink":"/docs/fr/20-R7/commands/web-set-option"},"next":{"title":"WEB START SERVER","permalink":"/docs/fr/20-R7/commands/web-start-server"}}'),t=s("785893"),i=s("250065");let d={id:"web-set-root-folder",title:"WEB SET ROOT FOLDER",slug:"/commands/web-set-root-folder",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SET ROOT FOLDER"})," ( ",(0,t.jsx)(n.em,{children:"dossierRacine"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dossierRacine"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s du dossier racine du serveur Web"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB SET ROOT FOLDER"})," permet de modifier le dossier racine par d\xe9faut dans lequel 4D ira rechercher les fichiers HTML demand\xe9s au serveur Web."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande ne tient pas compte du dossier racine HTML par d\xe9faut \xe9ventuellement d\xe9fini dans les Propri\xe9t\xe9s de la base. Pour plus d'informations sur ce dossier, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"S\xe9curit\xe9 des connexions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"L'emplacement du dossier racine peut \xeatre exprim\xe9 soit en syntaxe HTML (type URL), soit en syntaxe syst\xe8me (chemin absolu) :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Syntaxe HTML : les noms de dossiers sont s\xe9par\xe9s par une barre oblique ("/"), quelle que soit la plate-forme que vous utilisez.'}),"\n",(0,t.jsxs)(n.li,{children:["Syntaxe syst\xe8me : chemin d\u2019acc\xe8s absolu (\u201Cnom long\u201D) respectant la syntaxe de la plate-forme courante, par exemple :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(Mac OS) Disque:Applications:monserv:dossier"}),"\n",(0,t.jsx)(n.li,{children:"(Windows) C:\\Applications\\monserv\\dossier"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La prise en compte du nouveau dossier racine n\xe9cessite le red\xe9marrage du serveur Web."}),"\n",(0,t.jsxs)(n.li,{children:["Vous pouvez conna\xeetre \xe0 tout moment l'emplacement du dossier racine courant \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-4d-folder",children:"Get 4D folder"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez un chemin d'acc\xe8s invalide, une erreur li\xe9e \xe0 la gestion de fichiers du syst\xe8me d'exploitation est g\xe9n\xe9r\xe9e. Vous pouvez intercepter l'erreur \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),". Si la m\xe9thode affiche une bo\xeete de dialogue d'alerte ou de message, celle-ci appara\xeet sur l'\xe9cran du navigateur."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-4d-folder",children:"Get 4D folder"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"634"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);