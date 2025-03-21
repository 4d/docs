"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99791"],{563030:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/active-transaction","title":"Active transaction","description":"Active transaction : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/active-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/active-transaction","permalink":"/docs/fr/commands/active-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factive-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"active-transaction","title":"Active transaction","slug":"/commands/active-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Transactions","permalink":"/docs/fr/commands/theme/Transactions"},"next":{"title":"CANCEL TRANSACTION","permalink":"/docs/fr/commands/cancel-transaction"}}'),r=t("785893"),a=t("250065");let i={id:"active-transaction",title:"Active transaction",slug:"/commands/active-transaction",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Description",id:"description-1",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Active transaction"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"R\xe9sultat"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Faux si la transaction courante est suspendue"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"Active transaction"})," retourne ",(0,r.jsx)(e.strong,{children:"Vrai"})," si le process courant est en transaction et si cette transaction n'est pas suspendue. Elle retourne ",(0,r.jsx)(e.strong,{children:"Faux"})," s'il n'y a pas de transaction en cours, ou si la transaction en cours est suspendue. Une transaction peut \xeatre suspendue \xe0 l'aide de la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/commands/suspend-transaction",children:"SUSPEND TRANSACTION"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Comme cette commande retourne \xe9galement ",(0,r.jsx)(e.strong,{children:"Faux"})," lorsque le process courant n'est pas en transaction, vous aurez besoin d'utiliser la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/commands/in-transaction",children:"In transaction"})," afin de v\xe9rifier que le process est bien en transaction."]}),"\n",(0,r.jsxs)(e.p,{children:["Pour plus d'informations, reportez-vous \xe0 la section ",(0,r.jsx)(e.em,{children:"Suspendre des transactions"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Vous voulez conna\xeetre le statut courant de transaction :"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0If(In transaction)\n\xa0\xa0\xa0\xa0If(Not(Active transaction))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("La transaction courante est suspendue")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("La transaction courante est active")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Nous ne sommes pas en transaction")\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/commands/in-transaction",children:"In transaction"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/commands/suspend-transaction",children:"SUSPEND TRANSACTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.em,{children:"Suspendre des transactions"})]}),"\n",(0,r.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"1387"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);