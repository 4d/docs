"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28319"],{311685:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/read-only","title":"READ ONLY","description":"READ ONLY {( laTable | * )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/read-only.md","sourceDirName":"commands-legacy","slug":"/commands/read-only","permalink":"/docs/fr/commands/read-only","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"read-only","title":"READ ONLY","slug":"/commands/read-only","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked records info","permalink":"/docs/fr/commands/locked-records-info"},"next":{"title":"Read only state","permalink":"/docs/fr/commands/read-only-state"}}'),s=t("785893"),l=t("250065");let o={id:"read-only",title:"READ ONLY",slug:"/commands/read-only",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"READ ONLY"})," {( laTable | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"laTable | *"}),(0,s.jsx)(n.td,{children:"Table, Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table \xe0 d\xe9finir en mode lecture seulement ou * pour toutes les tables ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"READ ONLY"})," place ",(0,s.jsx)(n.em,{children:"laTable"})," en mode lecture seulement pour le process dans lequel la commande a \xe9t\xe9 appel\xe9e. Tous les enregistrements charg\xe9s par la suite sont verrouill\xe9s, aucune modification ne peut leur \xeatre apport\xe9e. Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", toutes les tables sont plac\xe9es en mode lecture seulement."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez utiliser ",(0,s.jsx)(n.strong,{children:"READ ONLY"})," lorsqu'il n'est pas utile de modifier les enregistrements."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande n'est pas r\xe9troactive. Les privil\xe8ges de lecture/\xe9criture pour un enregistrement sont d\xe9finis par ceux de la table au moment o\xf9 l'enregistrement est charg\xe9. Pour qu'un enregistrement soit charg\xe9 en mode lecture seulement alors que la table est en mode lecture/\xe9criture, vous devez placer la table en mode lecture seulement avant que l'enregistrement soit charg\xe9."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/read-only-state",children:"Read only state"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Verrouillage d'enregistrements"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"145"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},l=r.createContext(s);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);