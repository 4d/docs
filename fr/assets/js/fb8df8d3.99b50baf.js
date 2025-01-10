"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13853"],{941571:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/send-variable","title":"SEND VARIABLE","description":"SEND VARIABLE ( variable )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-variable.md","sourceDirName":"commands-legacy","slug":"/commands/send-variable","permalink":"/docs/fr/commands/send-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-variable","title":"SEND VARIABLE","slug":"/commands/send-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND RECORD","permalink":"/docs/fr/commands/send-record"},"next":{"title":"SET CHANNEL","permalink":"/docs/fr/commands/set-channel"}}'),d=r("785893"),t=r("250065");let a={id:"send-variable",title:"SEND VARIABLE",slug:"/commands/send-variable",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," ( ",(0,d.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"variable"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Variable \xe0 envoyer"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," envoie ",(0,d.jsx)(n.em,{children:"variable"})," vers le document ou le port s\xe9rie pr\xe9alablement ouvert par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". La variable est envoy\xe9e dans un format interne sp\xe9cial qui ne peut \xeatre relu que par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),". ",(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," envoie la totalit\xe9 de la variable (y compris son type et sa valeur)."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Si vous envoyez une variable \xe0 un document avec cette commande, le document doit avoir \xe9t\xe9 ouvert par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". Vous ne pouvez pas utiliser ",(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," avec un document ouvert par ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," ou ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["Cette commande ne fonctionne pas avec les variables de type tableau. Si vous voulez envoyer et recevoir des tableaux via un document ou un port s\xe9rie, utilisez les ",(0,d.jsx)(n.em,{children:"Commandes du th\xe8me BLOB"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let d={},t=s.createContext(d);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);