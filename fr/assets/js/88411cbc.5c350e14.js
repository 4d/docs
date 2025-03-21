"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34714"],{837029:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/new-log-file","title":"New log file","description":"New log file  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/new-log-file","permalink":"/docs/fr/20-R7/commands/new-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-log-file","title":"New log file","slug":"/commands/new-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOG FILE TO JSON","permalink":"/docs/fr/20-R7/commands/log-file-to-json"},"next":{"title":"RESTORE","permalink":"/docs/fr/20-R7/commands/restore"}}'),i=r("785893"),t=r("250065");let d={id:"new-log-file",title:"New log file",slug:"/commands/new-log-file",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New log file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s complet du fichier d\u2019historique referm\xe9"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note pr\xe9liminaire :"})," Cette commande ne fonctionne qu\u2019avec 4D Server. Elle ne peut \xeatre ex\xe9cut\xe9e que via la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/execute-on-server",children:"Execute on server"})," ou dans une proc\xe9dure stock\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"New log file"})," referme le fichier d\u2019historique courant, le renomme et en cr\xe9e un nouveau avec le m\xeame nom et au m\xeame emplacement que le pr\xe9c\xe9dent. Cette commande est destin\xe9e \xe0 la mise en place d\u2019un syst\xe8me de sauvegarde par miroir logique (cf. section \u201C",(0,i.jsx)(n.em,{children:"Mise en place d'un miroir logique"}),"\u201D dans le Manuel de r\xe9f\xe9rence de 4D Server)."]}),"\n",(0,i.jsx)(n.p,{children:"La commande retourne le nom complet (chemin d\u2019acc\xe8s+nom) du fichier d\u2019historique referm\xe9 (appel\xe9 \u201Csegment\u201D). Ce fichier est stock\xe9 au m\xeame emplacement que le fichier d\u2019historique courant (sp\xe9cifi\xe9 dans la page Configuration des pr\xe9f\xe9rences de l\u2019application, th\xe8me Sauvegarde). La commande n\u2019effectue aucun traitement (compression, segmentation) sur le fichier sauvegard\xe9. Aucune bo\xeete de dialogue n\u2019appara\xeet."}),"\n",(0,i.jsx)(n.p,{children:"Le fichier est renomm\xe9 avec les num\xe9ros de sauvegarde courants de la base et du fichier d\u2019historique, sur le mod\xe8le suivant : NomBase[NumSvgde-NumSvgdeHisto].journal. Par exemple :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"si la base MaBase.4DD a \xe9t\xe9 sauvegard\xe9e 4 fois, le dernier fichier de sauvegarde se nomme MaBase[0004].4BK. Le nom du premier \u201Csegment\u201D de fichier d\u2019historique sera donc MaBase[0004-0001].journal."}),"\n",(0,i.jsx)(n.li,{children:"si la base MaBase.4DD a \xe9t\xe9 sauvegard\xe9e 3 fois et que le fichier d\u2019historique a \xe9t\xe9 sauvegard\xe9 5 fois depuis, le nom de la 6e sauvegarde du fichier d\u2019historique sera MaBase[0003-0006].journal."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,i.jsxs)(n.p,{children:["En cas d'anomalie, la commande g\xe9n\xe8re une erreur que vous pouvez intercepter \xe0 l\u2019aide de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"926"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);