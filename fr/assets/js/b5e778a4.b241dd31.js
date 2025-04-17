"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9979"],{864171:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/count-tasks","title":"Count tasks","description":"Count tasks  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/count-tasks.md","sourceDirName":"commands-legacy","slug":"/commands/count-tasks","permalink":"/docs/fr/20-R8/commands/count-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-tasks.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"count-tasks","title":"Count tasks","slug":"/commands/count-tasks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT PROCESS BY ID","permalink":"/docs/fr/20-R8/commands/abort-process-by-id"},"next":{"title":"Count user processes","permalink":"/docs/fr/20-R8/commands/count-user-processes"}}'),t=n("785893"),o=n("250065");let c={id:"count-tasks",title:"Count tasks",slug:"/commands/count-tasks",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let s={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Count tasks"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nombre total de process ouverts (y compris les process du moteur de 4D)"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Count tasks"})," retourne le num\xe9ro de process vivant le plus \xe9lev\xe9 sur un poste 4D distant, 4D Server (proc\xe9dures stock\xe9es) ou dans une version monoposte de 4D. Les process sont num\xe9rot\xe9s dans l'ordre de leur cr\xe9ation. Lorsqu'aucun process n'a encore \xe9t\xe9 d\xe9truit au cours de la session, la commande retourne le nombre de process ouverts."]}),"\n",(0,t.jsx)(s.p,{children:"Ce nombre inclut tous les process, qu'ils soient cr\xe9\xe9s par vos soins ou par 4D. Le Process principal, le Gestionnaire de cache, le Process d\xe9veloppement, le Gestionnaire d'index ou le Process du serveur Web par exemple sont des process cr\xe9\xe9s automatiquement par 4D."}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:["R\xe9f\xe9rez-vous \xe0 l'exemple de ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/process-state",children:"Process state"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/semaphore",children:"Semaphore"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/count-user-processes",children:"Count user processes"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/count-users",children:"Count users"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/process-info",children:"Process info"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R8/commands/process-state",children:"Process state"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"335"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return c}});var r=n(667294);let t={},o=r.createContext(t);function c(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);