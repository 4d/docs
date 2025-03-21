"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83231"],{106387:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/unregister-client","title":"UNREGISTER CLIENT","description":"UNREGISTER CLIENT","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/unregister-client.md","sourceDirName":"commands-legacy","slug":"/commands/unregister-client","permalink":"/docs/fr/commands/unregister-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funregister-client.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"unregister-client","title":"UNREGISTER CLIENT","slug":"/commands/unregister-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session storage","permalink":"/docs/fr/commands/session-storage"},"next":{"title":"Recherches et tris","permalink":"/docs/fr/commands/theme/Queries"}}'),r=s("785893"),i=s("250065");let l={id:"unregister-client",title:"UNREGISTER CLIENT",slug:"/commands/unregister-client",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"UNREGISTER CLIENT"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"UNREGISTER CLIENT"})," \u201Cd\xe9sinscrit\u201D le client 4D de 4D Server. Il doit avoir \xe9t\xe9 pr\xe9alablement inscrit \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Si le poste client n\u2019\xe9tait pas inscrit ou si la commande est ex\xe9cut\xe9e sur 4D en mode local, la commande ne fait rien."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Un client 4D est automatiquement d\xe9sinscrit lorsque l\u2019application quitte."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l\u2019exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si le client est correctement d\xe9sinscrit, la variable syst\xe8me OK prend la valeur 1. Si le client n\u2019\xe9tait pas inscrit, OK prend la valeur 0."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/register-client",children:"REGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"649"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);