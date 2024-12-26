"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87144"],{158011:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/check-log-file","title":"CHECK LOG FILE","description":"CHECK LOG FILE","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/check-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/check-log-file","permalink":"/docs/fr/commands/check-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcheck-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"check-log-file","title":"CHECK LOG FILE","slug":"/commands/check-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP INFO","permalink":"/docs/fr/commands/backup-info"},"next":{"title":"INTEGRATE MIRROR LOG FILE","permalink":"/docs/fr/commands/integrate-mirror-log-file"}}'),s=r("785893"),i=r("250065");let l={id:"check-log-file",title:"CHECK LOG FILE",slug:"/commands/check-log-file",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CHECK LOG FILE"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"CHECK LOG FILE"})," affiche la bo\xeete de dialogue de visualisation du fichier d\u2019historique courant de la base (\xe9galement accessible via la fen\xeatre du Centre de s\xe9curit\xe9 et de maintenance) :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(42449).Z+"",width:"607",height:"454"})}),"\n",(0,s.jsxs)(n.p,{children:["Cette bo\xeete de dialogue comporte le bouton ",(0,s.jsx)(n.strong,{children:"Revenir en arri\xe8re"}),", permettant d\u2019annuler des op\xe9rations effectu\xe9es sur les donn\xe9es de la base. Pour plus d\u2019informations sur cette bo\xeete de dialogue, reportez-vous au manuel Mode D\xe9veloppement de 4D."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," La fonction de retour en arri\xe8re \xe9tant relativement puissante, il est conseill\xe9 de restreindre l\u2019acc\xe8s \xe0 la commande ",(0,s.jsx)(n.strong,{children:"CHECK LOG FILE"})," aux administrateurs de la base."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande est utilisable dans le contexte d\u2019une application monoposte uniquement. Elle permet notamment d'acc\xe9der \xe0 la fonction de retour en arri\xe8re depuis les applications 4D Volume Desktop (applications sans mode D\xe9veloppement). Si elle est appel\xe9e dans une application client/serveur, elle ne fait rien et l\u2019erreur 1421 est retourn\xe9e."}),"\n",(0,s.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si cette commande est ex\xe9cut\xe9e dans une base de donn\xe9es fonctionnant sans fichier d\u2019historique, elle ne fait rien et l\u2019erreur 1403 est retourn\xe9e."}),"\n",(0,s.jsxs)(n.li,{children:["Si cette commande est ex\xe9cut\xe9e sur une base client/serveur, elle ne fait rien et l\u2019erreur 1421 est retourn\xe9e.",(0,s.jsx)(n.br,{}),"\nVous pouvez intercepter ces erreurs \xe0 l\u2019aide d\u2019une m\xe9thode de gestion d\u2019erreurs install\xe9e par la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Erreurs du gestionnaire de sauvegarde (1401 -> 1421)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/restore",children:"RESTORE"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"799"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},42449:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict4835044.fr-a441ffd8969f4050dc34c959417c5fd0.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var t=r(667294);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);