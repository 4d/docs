"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10577"],{461183:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/modify-selection","title":"MODIFY SELECTION","description":"MODIFY SELECTION ( {; modeS\xe9lection}{; saisieListe}{; }{; } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/modify-selection.md","sourceDirName":"commands-legacy","slug":"/commands/modify-selection","permalink":"/docs/fr/20-R8/commands/modify-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"modify-selection","title":"MODIFY SELECTION","slug":"/commands/modify-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LAST RECORD","permalink":"/docs/fr/20-R8/commands/last-record"},"next":{"title":"NEXT RECORD","permalink":"/docs/fr/20-R8/commands/next-record"}}'),t=s("785893"),i=s("250065");let d={id:"modify-selection",title:"MODIFY SELECTION",slug:"/commands/modify-selection",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"})," ( {",(0,t.jsx)(n.em,{children:"laTable"}),"}{; ",(0,t.jsx)(n.em,{children:"modeS\xe9lection"}),"}{; ",(0,t.jsx)(n.em,{children:"saisieListe"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table \xe0 afficher et modifier ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modeS\xe9lection"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mode de s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"saisieListe"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Autoriser saisie en liste"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Utiliser formulaire sortie pour un seul enregistrement et cacher les barres de d\xe9filement dans le formulaire entr\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Afficher les barres de d\xe9filement dans le formulaire entr\xe9e (= annuler le second effet du premier param\xe8tre *)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"})," est quasiment identique \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/display-selection",children:"DISPLAY SELECTION"}),". Reportez-vous \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/display-selection",children:"DISPLAY SELECTION"})," pour une description d\xe9taill\xe9e.",(0,t.jsx)(n.br,{}),"\nLes seules diff\xe9rences entre ces deux commandes sont les suivantes :"]}),"\n",(0,t.jsxs)(n.p,{children:["1. ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/display-selection",children:"DISPLAY SELECTION"})," et ",(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"})," provoquent l'affichage des enregistrements de la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"})," dans le formulaire sortie courant, ou dans le formulaire entr\xe9e lorsque vous double-cliquez sur un enregistrement. Avec ",(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"}),", vous pouvez en plus modifier les champs de l'enregistrement dans le formulaire entr\xe9e lorsque vous double-cliquez dessus (s'il n'est pas d\xe9j\xe0 charg\xe9 par un autre utilisateur/process) ou en mode \u201CSaisie en liste\u201D (s'il est autoris\xe9)."]}),"\n",(0,t.jsxs)(n.p,{children:["2. ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/display-selection",children:"DISPLAY SELECTION"})," charge les enregistrements en mode Lecture seulement dans le process courant, ce qui signifie qu'ils ne sont pas verrouill\xe9s en \xe9criture pour les autres process. ",(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"})," place tous les enregistrements de la s\xe9lection en mode Lecture-\xe9criture, ce qui signifie qu'ils sont automatiquement verrouill\xe9s en \xe9criture pour les autres process. ",(0,t.jsx)(n.strong,{children:"MODIFY SELECTION"})," lib\xe8re les enregistrements lorsque son ex\xe9cution est termin\xe9e."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/display-selection",children:"DISPLAY SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des ensembles"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"204"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);