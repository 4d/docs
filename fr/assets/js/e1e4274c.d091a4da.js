"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26267"],{783466:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/abort-process-by-id","title":"ABORT PROCESS BY ID","description":"ABORT PROCESS BY ID ( uniqueID )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/abort-process-by-id.md","sourceDirName":"commands-legacy","slug":"/commands/abort-process-by-id","permalink":"/docs/fr/20-R7/commands/abort-process-by-id","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort-process-by-id.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"abort-process-by-id","title":"ABORT PROCESS BY ID","slug":"/commands/abort-process-by-id","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Processes","permalink":"/docs/fr/20-R7/category/processes"},"next":{"title":"Count tasks","permalink":"/docs/fr/20-R7/commands/count-tasks"}}'),t=n("785893"),i=n("250065");let o={id:"abort-process-by-id",title:"ABORT PROCESS BY ID",slug:"/commands/abort-process-by-id",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," ( ",(0,t.jsx)(s.em,{children:"uniqueID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uniqueID"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"ID unique du process"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," stoppe un process sp\xe9cifique sur 4D Server."]}),"\n",(0,t.jsxs)(s.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"uniqueID"}),", passez l'ID unique du process que vous souhaitez stopper sur le serveur. Vous pouvez r\xe9cup\xe9rer l'ID du process \xe0 l'aide des commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/process-activity",children:"Process activity"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/process-info",children:"Process info"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Notes"})," :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,t.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," ne fait rien."]}),"\n",(0,t.jsxs)(s.li,{children:["Cette commande ne peut \xeatre utilis\xe9e qu'avec la couche r\xe9seau ",(0,t.jsx)(s.em,{children:"ServerNet"}),". Voir ",(0,t.jsx)(s.em,{children:"Nouvelle couche r\xe9seau ServerNet (compatibilit\xe9)"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Cette commande ne doit \xeatre utilis\xe9e que pour la recherche d'erreurs ou \xe0 des fins d'administration, et non pas comme une proc\xe9dure ordinaire."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Vous souhaitez stopper le process s\xe9lectionn\xe9 parmi la collection de process affich\xe9e dans une list box :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//variable =curItemPosition\n\xa0\n\xa0\xa0// R\xe9cup\xe9rez la liste des process sur le serveur et affichez-la dans la list box\n\xa0$activity:=Get process activity(Processes only).processes\n\xa0...\n\xa0\xa0// Le process s\xe9lectionn\xe9 est stopp\xe9 sur le serveur\n\xa0ABORT PROCESS BY ID($activity[curItemPosition].ID)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/pause-process",children:"PAUSE PROCESS"})}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1634"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var r=n(667294);let t={},i=r.createContext(t);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);