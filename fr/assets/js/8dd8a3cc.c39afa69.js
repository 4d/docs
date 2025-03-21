"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40156"],{878843:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/suspend-transaction","title":"SUSPEND TRANSACTION","description":"SUSPEND TRANSACTION","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/suspend-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/suspend-transaction","permalink":"/docs/fr/20-R7/commands/suspend-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsuspend-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"suspend-transaction","title":"SUSPEND TRANSACTION","slug":"/commands/suspend-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"START TRANSACTION","permalink":"/docs/fr/20-R7/commands/start-transaction"},"next":{"title":"Transaction level","permalink":"/docs/fr/20-R7/commands/transaction-level"}}'),r=s("785893"),a=s("250065");let i={id:"suspend-transaction",title:"SUSPEND TRANSACTION",slug:"/commands/suspend-transaction",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"SUSPEND TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(e.table,{children:(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Ne requiert pas de param\xe8tre"}),(0,r.jsx)(e.th,{})]})})}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"SUSPEND TRANSACTION"})," suspend les m\xe9canismes de la transaction courante dans le process courant. Vous pouvez alors manipuler des donn\xe9es dans d'autres parties de la base, sans qu'elles soient contr\xf4l\xe9es par la transaction, tout en pr\xe9servant le contexte courant de la transaction. Tout enregistrement qui a \xe9t\xe9 mis \xe0 jour ou ajout\xe9 durant la transaction est verrouill\xe9 jusqu'\xe0 ce que la transaction soit r\xe9activ\xe9e \xe0 l'aide de la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/resume-transaction",children:"RESUME TRANSACTION"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,r.jsx)(e.em,{children:"Suspendre des transactions"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/active-transaction",children:"Active transaction"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.em,{children:"Suspendre des transactions"})]}),"\n",(0,r.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"1385"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},a=t.createContext(r);function i(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);