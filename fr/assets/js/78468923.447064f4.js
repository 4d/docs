"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60611"],{315387:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/resume-indexes","title":"RESUME INDEXES","description":"RESUME INDEXES ( laTable {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resume-indexes.md","sourceDirName":"commands-legacy","slug":"/commands/resume-indexes","permalink":"/docs/fr/commands/resume-indexes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresume-indexes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resume-indexes","title":"RESUME INDEXES","slug":"/commands/resume-indexes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELOAD EXTERNAL DATA","permalink":"/docs/fr/commands/reload-external-data"},"next":{"title":"SET EXTERNAL DATA PATH","permalink":"/docs/fr/commands/set-external-data-path"}}'),r=s("785893"),d=s("250065");let i={id:"resume-indexes",title:"RESUME INDEXES",slug:"/commands/resume-indexes",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESUME INDEXES"})," ( ",(0,r.jsx)(n.em,{children:"laTable"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table pour laquelle r\xe9activer les index"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si pass\xe9 = indexation asynchrone"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"RESUME INDEXES"})," r\xe9active tous les index de ",(0,r.jsx)(n.em,{children:"laTable"})," s\u2019ils ont \xe9t\xe9 pr\xe9abalement suspendus via la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/pause-indexes",children:"PAUSE INDEXES"}),". Si les index de ",(0,r.jsx)(n.em,{children:"laTable"})," n\u2019\xe9taient pas suspendus, la commande ne fait rien."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans la plupart des cas, l\u2019ex\xe9cution de cette commande provoquera la reconstruction des index de ",(0,r.jsx)(n.em,{children:"laTable"}),".",(0,r.jsx)(n.br,{}),"\nSi vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", la reconstruction des index sera effectu\xe9e en mode asynchrone. Ce mode signifie que la m\xe9thode appelant la commande poursuivra son ex\xe9cution apr\xe8s cet appel, que l\u2019indexation soit termin\xe9e ou non. Si vous omettez ce param\xe8tre, la reconstruction des index bloquera l\u2019ex\xe9cution de la m\xe9thode jusqu\u2019\xe0 ce que l\u2019op\xe9ration soit termin\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"RESUME INDEXES"})," ne peut \xeatre appel\xe9e que depuis 4D Server ou un 4D local. Si cette commande est ex\xe9cut\xe9e depuis un poste 4D distant, l\u2019erreur -10513 est g\xe9n\xe9r\xe9e. Cette erreur peut \xeatre intercept\xe9e par une m\xe9thode install\xe9e par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-index",children:"CREATE INDEX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/pause-indexes",children:"PAUSE INDEXES"})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);