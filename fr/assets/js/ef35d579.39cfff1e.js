"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64429"],{971111:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"commands/new-log-file","title":"New log file","description":"New log file : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/new-log-file.md","sourceDirName":"commands","slug":"/commands/new-log-file","permalink":"/docs/fr/commands/new-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-log-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-log-file","title":"New log file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOG FILE TO JSON","permalink":"/docs/fr/commands/log-file-to-json"},"next":{"title":"RESTORE","permalink":"/docs/fr/commands/restore"}}'),s=r("785893"),t=r("250065");let o={id:"new-log-file",title:"New log file",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"New log file"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Chemin complet du fichier journal ferm\xe9"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note pr\xe9liminaire:"})," Cette commande ne fonctionne qu'avec 4D Server. Elle ne peut \xeatre ex\xe9cut\xe9e que via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/execute-on-server",children:"Execute on server"})," ou via une proc\xe9dure stock\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"New log file"})," referme le fichier journal courant, le renomme et en cr\xe9e un nouveau avec le m\xeame nom et le m\xeame emplacement que le pr\xe9c\xe9dent. Cette commande est destin\xe9e \xe0 la mise en place d'un syst\xe8me de sauvegarde utilisant un miroir logique (voir la section ",(0,s.jsx)(n.em,{children:"Mise en place d'un miroir logique"})," dans le ",(0,s.jsx)(n.a,{href:"https://doc/4d.com",children:"manuel de r\xe9f\xe9rence de 4D Server"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande renvoie le chemin d'acc\xe8s complet (chemin d'acc\xe8s + nom) du fichier journal en cours de fermeture (appel\xe9 \"segment\"). Ce fichier est stock\xe9 au m\xeame endroit que le fichier journal courant (sp\xe9cifi\xe9 dans la ",(0,s.jsx)(n.a,{href:"/docs/fr/Backup/settings#configuration",children:"page Configuration"})," du th\xe8me Sauvegarde des Settings). La commande n'effectue aucun traitement (compression, segmentation) sur le fichier sauvegard\xe9. Aucune bo\xeete de dialogue n'appara\xeet."]}),"\n",(0,s.jsx)(n.p,{children:"Le fichier est renomm\xe9 avec les num\xe9ros de sauvegarde courants de la base de donn\xe9es et du fichier journal, comme indiqu\xe9 dans l'exemple suivant : DatabaseName[BackupNum-LogBackupNum].journal. Par exemple:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Si la base MyDatabase.4DD a \xe9t\xe9 sauvegard\xe9e 4 fois, le dernier fichier de sauvegarde sera nomm\xe9 MyDatabase[0004].4BK. Le nom du premier "segment" du fichier journal sera donc MyDatabase[0004-0001].journal.'}),"\n",(0,s.jsx)(n.li,{children:"Si la base MyDatabase.4DD a \xe9t\xe9 sauvegard\xe9e 3 fois et que le fichier journal a \xe9t\xe9 sauvegard\xe9 5 fois depuis, le nom de la 6e sauvegarde du fichier journal sera MyDatabase[0003-0006].journal."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Un fichier journal doit toujours \xeatre associ\xe9 \xe0 un fichier de donn\xe9es. Si vous appelez cette commande juste apr\xe8s l'activation d'un fichier journal (sans sauvegarde) en utilisant ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/select-log-file",children:(0,s.jsx)(n.code,{children:"SELECT LOG FILE"})})," ou la ",(0,s.jsx)(n.a,{href:"/docs/fr/Backup/settings#configuration",children:"bo\xeete de dialogue des Settings"}),", assurez-vous d'avoir une copie correspondante de votre fichier de donn\xe9es, sinon le fichier journal ne pourrait pas \xeatre int\xe9gr\xe9."]})}),"\n",(0,s.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,s.jsxs)(n.p,{children:["En cas d'erreur, la commande g\xe9n\xe8re un code qui peut \xeatre intercept\xe9 \xe0 l'aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/select-log-file",children:"SELECT LOG FILE"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var i=r(667294);let s={},t=i.createContext(s);function o(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);