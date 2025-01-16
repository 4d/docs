"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15758"],{492703:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/delete-folder","title":"DELETE FOLDER","description":"DELETE FOLDER ( dossier {; optionSuppression} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-folder.md","sourceDirName":"commands-legacy","slug":"/commands/delete-folder","permalink":"/docs/fr/20-R7/commands/delete-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-folder","title":"DELETE FOLDER","slug":"/commands/delete-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE DOCUMENT","permalink":"/docs/fr/20-R7/commands/delete-document"},"next":{"title":"DOCUMENT LIST","permalink":"/docs/fr/20-R7/commands/document-list"}}'),i=s("785893"),t=s("250065");let d={id:"delete-folder",title:"DELETE FOLDER",slug:"/commands/delete-folder",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DELETE FOLDER"})," ( ",(0,i.jsx)(n.em,{children:"dossier"})," {; ",(0,i.jsx)(n.em,{children:"optionSuppression"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dossier"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s complet du dossier \xe0 supprimer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"optionSuppression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Option de suppression du dossier"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"DELETE FOLDER"})," supprime le dossier dont vous avez pass\xe9 le nom ou le chemin d\u2019acc\xe8s complet dans ",(0,i.jsx)(n.em,{children:"dossier"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut pour des raisons de s\xe9curit\xe9, si vous omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"optionSuppression"}),", ",(0,i.jsx)(n.strong,{children:"DELETE FOLDER"})," permet uniquement la suppression de dossiers vides. Si vous souhaitez que cette commande puisse supprimer des dossiers non vides, vous devez utiliser le param\xe8tre ",(0,i.jsx)(n.em,{children:"optionSuppression"}),". Vous pouvez passer dans ce param\xe8tre l'une des constantes suivantes, plac\xe9es dans le th\xe8me \"",(0,i.jsx)(n.em,{children:"Documents syst\xe8me"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Delete only if empty"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Supprime le dossier uniquement s'il est vide"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Delete with contents"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Supprime le dossier ainsi que son \xe9ventuel contenu"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous passez Delete only if empty ou omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"optionSuppression"})," :\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le dossier d\xe9sign\xe9 par le param\xe8tre ",(0,i.jsx)(n.em,{children:"dossier"})," n'est supprim\xe9 que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 (Fichier d\xe9j\xe0 ouvert, ou dossier non vide) est g\xe9n\xe9r\xe9e."]}),"\n",(0,i.jsx)(n.li,{children:"Si le dossier d\xe9sign\xe9 n'existe pas, l'erreur -120 (Tentative d'acc\xe8s \xe0 un fichier avec un chemin d'acc\xe8s sp\xe9cifiant un r\xe9pertoire inexistant) est g\xe9n\xe9r\xe9e."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous passez Delete with contents :\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le dossier ainsi que tout son contenu sont supprim\xe9s.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Attention :"})," Si le dossier est verrouill\xe9 ou en lecture seule, il sera n\xe9anmoins supprim\xe9 si l'utilisateur courant dispose des droits d\u2019acc\xe8s n\xe9cessaires."]}),"\n",(0,i.jsxs)(n.li,{children:["Si le dossier d\xe9sign\xe9 ou un des fichiers qu'il contient ne peut pas \xeatre supprim\xe9, la proc\xe9dure de suppression est abandonn\xe9e d\xe8s que le premier \xe9l\xe9ment inaccessible est atteint, et une erreur(*) est retourn\xe9e. Dans ce cas, le dossier ne sera que partiellement supprim\xe9. Il est cependant possible d'utiliser la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/last-errors",children:"Last errors"}),"  pour obtenir le nom et le chemin d\u2019acc\xe8s du fichier \xe0 l'origine de l'erreur."]}),"\n",(0,i.jsxs)(n.li,{children:["Si le dossier d\xe9sign\xe9 n'existe pas, la commande ne fait rien et aucune erreur n'est g\xe9n\xe9r\xe9e.",(0,i.jsx)(n.br,{}),"\n(*) sous Windows : -54 (Tentative d'\xe9criture dans un fichier verrouill\xe9)",(0,i.jsx)(n.br,{}),"\nsous OS X : -45 (Fichier verrouill\xe9 ou chemin d'acc\xe8s invalide)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez intercepter ces erreurs \xe0 l\u2019aide d\u2019une m\xe9thode install\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"})," ."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/delete-document",children:"DELETE DOCUMENT"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"693"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);