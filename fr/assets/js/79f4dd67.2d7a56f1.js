"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23194"],{972182:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/set-update-folder","title":"SET UPDATE FOLDER","description":"SET UPDATE FOLDER ( cheminDossier {; erreursDiscr\xe8tes} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-update-folder.md","sourceDirName":"commands-legacy","slug":"/commands/set-update-folder","permalink":"/docs/fr/20-R8/commands/set-update-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-update-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-update-folder","title":"SET UPDATE FOLDER","slug":"/commands/set-update-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DATABASE PARAMETER","permalink":"/docs/fr/20-R8/commands/set-database-parameter"},"next":{"title":"Structure file","permalink":"/docs/fr/20-R8/commands/structure-file"}}'),i=n("785893"),t=n("250065");let o={id:"set-update-folder",title:"SET UPDATE FOLDER",slug:"/commands/set-update-folder",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SET UPDATE FOLDER"})," ( ",(0,i.jsx)(s.em,{children:"cheminDossier"})," {; ",(0,i.jsx)(s.em,{children:"erreursDiscr\xe8tes"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cheminDossier"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Chemin d\u2019acc\xe8s du dossier (package sous macOS) contenant l\u2019application mise \xe0 jour"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"erreursDiscr\xe8tes"}),(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Faux (d\xe9faut) = afficher des messages d\u2019erreur, Vrai = ne pas afficher de messages (uniquement enregistrer les erreurs)"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"SET UPDATE FOLDER"})," permet de d\xe9finir le dossier contenant la mise \xe0 jour de l\u2019application 4D fusionn\xe9e courante. Cette information est m\xe9moris\xe9e durant la session 4D jusqu\u2019\xe0 l\u2019appel de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/restart-4d",children:"RESTART 4D"}),". Si l\u2019application est quitt\xe9e manuellement, cette information n'est pas conserv\xe9e."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette commande est destin\xe9e \xe0 \xeatre utilis\xe9e dans un processus de mise \xe0 jour automatique d\u2019une application fusionn\xe9e (serveur ou monoposte). Pour plus d\u2019informations, reportez-vous \xe0 la section ",(0,i.jsx)(s.em,{children:"Finaliser et d\xe9ployer les applications finales"})," dans le manuel ",(0,i.jsx)(s.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," La commande fonctionne uniquement avec 4D Server ou une application monoposte fusionn\xe9e avec 4D Volume Desktop."]}),"\n",(0,i.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"cheminDossier"})," le chemin d\u2019acc\xe8s complet du dossier de la nouvelle version de l\u2019application fusionn\xe9e (dossier contenant l\u2019application ",(0,i.jsx)(s.em,{children:"monApp4D.exe"})," sous Windows et package ",(0,i.jsx)(s.em,{children:"monApp4D.app"})," sous macOS), cr\xe9\xe9e par le g\xe9n\xe9rateur d\u2019applications de 4D."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Il est fortement conseill\xe9 d\u2019utiliser pour les fichiers des nouvelles versions des applications le m\xeame nom que ceux des applications elles-m\xeames, car le processus de mise \xe0 jour remplace le dossier de l\u2019application. Si vous utilisez des noms diff\xe9rents, les raccourcis et chemins m\xe9moris\xe9s ne fonctionneront plus."]}),"\n",(0,i.jsxs)(s.p,{children:['Si les param\xe8tres sont valides, la mise \xe0 jour est plac\xe9e "en attente" dans la session jusqu\u2019\xe0 l\u2019appel de la commande ',(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/restart-4d",children:"RESTART 4D"}),". Si vous ex\xe9cutez plusieurs fois ",(0,i.jsx)(s.strong,{children:"SET UPDATE FOLDER"})," avant ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/restart-4d",children:"RESTART 4D"}),", le dernier appel valide est pris en compte."]}),"\n",(0,i.jsxs)(s.p,{children:['Vous pouvez passer une cha\xeene vide ("") dans ',(0,i.jsx)(s.em,{children:"cheminDossier"})," pour r\xe9initialiser les informations de mise \xe0 jour pour la session courante."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"erreursDiscr\xe8tes"})," permet de d\xe9finir le mode de report des erreurs lors de la mise \xe0 jour :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["si vous passez ",(0,i.jsx)(s.strong,{children:"Faux"})," ou si ce param\xe8tre est omis, les erreurs sont inscrites dans le journal des mises \xe0 jour et affich\xe9es dans une bo\xeete de dialogue d\u2019alerte."]}),"\n",(0,i.jsxs)(s.li,{children:["si vous passez ",(0,i.jsx)(s.strong,{children:"Vrai"}),", les erreurs sont uniquement inscrites dans le journal des mises \xe0 jour."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Exception : s'il n'est pas possible de cr\xe9er un fichier journal, une bo\xeete de dialogue d\u2019alerte est affich\xe9e, quelle que soit la valeur du param\xe8tre ",(0,i.jsx)(s.em,{children:"erreursDiscr\xe8tes"}),". Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/last-update-log-path",children:"Last update log path"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0. Vous pouvez intercepter les erreurs \xe9ventuellement g\xe9n\xe9r\xe9es par la commande \xe0 l\u2019aide d\u2019une m\xe9thode install\xe9e via la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:'Vous avez cr\xe9\xe9 un dossier "MesMisesAJour" sur votre disque, dans lequel vous avez plac\xe9 une nouvelle version de l\u2019application "MonAppli". Vous ne souhaitez pas afficher les erreurs. Pour pr\xe9parer la mise \xe0 jour, vous \xe9crivez :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0// Syntaxe Windows\n\xa0SET UPDATE FOLDER("C:\\\\MesMisesAJour"+Folder separator+"MonAppli"+Folder separator;True)\n\xa0\n\xa0\xa0\xa0\xa0\xa0// Syntaxe macOS\n\xa0SET UPDATE FOLDER("MacHD:MesMisesAJour"+Folder separator+"MonAppli.app"+Folder separator;True)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/last-update-log-path",children:"Last update log path"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/restart-4d",children:"RESTART 4D"})]}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"1291"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modifie les variables"}),(0,i.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var r=n(667294);let i={},t=r.createContext(i);function o(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);