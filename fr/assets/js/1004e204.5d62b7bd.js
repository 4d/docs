"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65449"],{419482:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands/select-log-file","title":"SELECT LOG FILE","description":"SELECT LOG FILE ( logFile )SELECT LOG FILE ( * )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/select-log-file.md","sourceDirName":"commands","slug":"/commands/select-log-file","permalink":"/docs/fr/commands/select-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fselect-log-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"select-log-file","title":"SELECT LOG FILE","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE INFO","permalink":"/docs/fr/commands/restore-info"},"next":{"title":"BLOB","permalink":"/docs/fr/commands/theme/BLOB"}}'),i=s("785893"),t=s("250065");let l={id:"select-log-file",title:"SELECT LOG FILE",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SELECT LOG FILE"})," ( ",(0,i.jsx)(n.em,{children:"logFile"})," )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"SELECT LOG FILE"})," ( * )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"logFile"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom du fichier journal"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fermer le fichier journal courant"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SELECT LOG FILE"})," cr\xe9e ou ferme le fichier d'historique (ou fichier journal) de la base de donn\xe9es, suivant la valeur que vous passez en param\xe8tre.."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans ",(0,i.jsx)(n.em,{children:"logFile"})," le nom ou le chemin d'acc\xe8s complet du fichier d'historique \xe0 cr\xe9er. Si vous passez uniquement un nom, le fichier sera cr\xe9\xe9 dans le dossier \"Logs\" de la base, \xe0 c\xf4te du fichier de structure de la base."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez une cha\xeene vide, ",(0,i.jsx)(n.strong,{children:"SELECT LOG FILE"})," pr\xe9sente une bo\xeete de dialogue standard d'enregistrement de fichier, permettant \xe0 l'utilisateur de choisir le nom et l'emplacement du fichier d'historique \xe0 cr\xe9er. If the file is created correctly, the OK variable is set to 1. Autrement, si l'utilisateur clique sur le bouton Annuler ou si le fichier d'historique ne peut pas \xeatre cr\xe9\xe9, OK prend la valeur 0."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Le nouveau fichier journal n'est pas g\xe9n\xe9r\xe9 imm\xe9diatement apr\xe8s l'ex\xe9cution de la commande, mais apr\xe8s la sauvegarde suivante (le param\xe9trage est conserv\xe9 dans le fichier de donn\xe9es et sera pris en compte m\xeame si la base de donn\xe9es est ferm\xe9e entre-temps) ou un appel \xe0 la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/new-log-file",children:(0,i.jsx)(n.code,{children:"New log file"})}),". Vous pouvez appeler la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/backup",children:"BACKUP"})," pour d\xe9clencher la cr\xe9ation du fichier journal."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez ",(0,i.jsx)(n.em,{children:"*"})," dans ",(0,i.jsx)(n.em,{children:"logFile"}),", ",(0,i.jsx)(n.strong,{children:"SELECT LOG FILE"})," ferme le fichier journal courant de la base de donn\xe9es. La variable OK prend la valeur 1 lorsque le fichier d'historique est referm\xe9."]}),"\n",(0,i.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(n.p,{children:"OK prend la valeur 1 si le fichier d'historique est correctement cr\xe9\xe9 ou ferm\xe9."}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/new-log-file",children:"New log file"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"345"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);