"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70458"],{290200:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/push-record","title":"PUSH RECORD","description":"PUSH RECORD {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/push-record.md","sourceDirName":"commands-legacy","slug":"/commands/push-record","permalink":"/docs/fr/commands/push-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpush-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"push-record","title":"PUSH RECORD","slug":"/commands/push-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP RECORD","permalink":"/docs/fr/commands/pop-record"},"next":{"title":"Record number","permalink":"/docs/fr/commands/record-number"}}'),t=r("785893"),i=r("250065");let l={id:"push-record",title:"PUSH RECORD",slug:"/commands/push-record",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PUSH RECORD"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle empiler l'enregistrement courant ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PUSH RECORD"}),' "empile" une copie de l\'enregistrement courant de ',(0,t.jsx)(n.em,{children:"laTable"})," dans la pile d'enregistrements de la table. ",(0,t.jsx)(n.strong,{children:"PUSH RECORD"})," peut \xeatre ex\xe9cut\xe9 avant qu'un enregistrement soit sauvegard\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Si vous empilez un enregistrement non verrouill\xe9, il sera verrouill\xe9 pour tous les autres process et utilisateurs jusqu'\xe0 ce que vous le \"d\xe9piliez\" (c'est-\xe0-dire que vous le d\xe9chargiez de la pile)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant empile l'enregistrement d'un client :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0PUSH RECORD([Client])\xa0// Placer l'enregistrement du client dans la pile\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/pop-record",children:"POP RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Utiliser la pile d'enregistrements"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);