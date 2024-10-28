"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9874],{661117:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(474848),r=s(28453);const o={id:"in-transaction",title:"In transaction",slug:"/commands/in-transaction",displayed_sidebar:"docs"},i=void 0,a={id:"commands-legacy/in-transaction",title:"In transaction",description:"In transaction  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/in-transaction.md",sourceDirName:"commands-legacy",slug:"/commands/in-transaction",permalink:"/docs/fr/commands/in-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fin-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"in-transaction",title:"In transaction",slug:"/commands/in-transaction",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CANCEL TRANSACTION",permalink:"/docs/fr/commands/cancel-transaction"},next:{title:"RESUME TRANSACTION",permalink:"/docs/fr/commands/resume-transaction"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(n){const e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"In transaction"}),"  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Param\xe8tre"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"R\xe9sultat"}),(0,t.jsx)(e.td,{children:"Boolean"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"VRAI si le process courant est en transaction, FAUX sinon"})]})})]}),"\n",(0,t.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["La commande ",(0,t.jsx)(e.strong,{children:"In transaction"})," retourne Vrai si le process courant est en transaction, sinon elle retourne Faux."]}),"\n",(0,t.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(e.p,{children:"Si vous effectuez des op\xe9rations (ajout, modification ou suppression) sur de multiples enregistrements, vous pouvez rencontrer des enregistrements verrouill\xe9s. Dans ce cas, pour pr\xe9server l'int\xe9grit\xe9 des donn\xe9es, vous devez avoir ouvert une transaction, de mani\xe8re \xe0 ce que vous puissiez faire \u201cmarche arri\xe8re\u201d et annuler l'ensemble de l'op\xe9ration depuis le d\xe9but, sans que les donn\xe9es de la base soient modifi\xe9es."}),"\n",(0,t.jsxs)(e.p,{children:["Si vous effectuez l'op\xe9ration depuis un trigger ou une sous-routine pouvant \xeatre appel\xe9(e) dans une transaction ou hors transaction, l'utilisation de la commande ",(0,t.jsx)(e.strong,{children:"In transaction"})," vous permet de v\xe9rifier que la m\xe9thode du process courant ou la m\xe9thode appelante a bien ouvert une transaction. Si ce n'est pas le cas, vous ne commencez m\xeame pas l'op\xe9ration, car, en cas d'\xe9chec au cours du processus, vous ne pourriez pas revenir sur les op\xe9rations d\xe9j\xe0 effectu\xe9es."]}),"\n",(0,t.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/fr/commands/active-transaction",children:"Active transaction"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/fr/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.em,{children:"Pr\xe9sentation des triggers"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/fr/commands/start-transaction",children:"START TRANSACTION"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/fr/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var t=s(296540);const r={},o=t.createContext(r);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);