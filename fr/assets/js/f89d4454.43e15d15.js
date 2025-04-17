"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25766"],{500022:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/accumulate","title":"ACCUMULATE","description":"ACCUMULATE ( objet {; objet2 ; ... ; objetN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/accumulate.md","sourceDirName":"commands-legacy","slug":"/commands/accumulate","permalink":"/docs/fr/commands/accumulate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faccumulate.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"accumulate","title":"ACCUMULATE","slug":"/commands/accumulate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Impressions","permalink":"/docs/fr/commands/theme/Printing"},"next":{"title":"BLOB to print settings","permalink":"/docs/fr/commands/blob-to-print-settings"}}'),r=s("785893"),d=s("250065");let i={id:"accumulate",title:"ACCUMULATE",slug:"/commands/accumulate",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," ( ",(0,r.jsx)(n.em,{children:"objet"})," {; ",(0,r.jsx)(n.em,{children:"objet2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"objetN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"Field, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ ou variable de type num\xe9rique \xe0 cumuler"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," d\xe9signe les champ(s) ou variable(s) \xe0 cumuler dans un \xe9tat cr\xe9\xe9 \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous ",(0,r.jsx)(n.strong,{children:"devez"})," appeler ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," avant la g\xe9n\xe9ration de chaque \xe9tat dans lequel vous voulez utiliser des ruptures. Ces commandes activent le traitement des ruptures pour un \xe9tat. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/subtotal",children:"Subtotal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," si vous souhaitez calculer des sous-totaux pour des champs ou variables num\xe9riques dans un \xe9tat. ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," indique \xe0 4D qu'il faut stocker les sous-totaux pour chaque \xe9l\xe9ment sp\xe9cifi\xe9 dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les sous-totaux sont cumul\xe9s pour chaque niveau de rupture sp\xe9cifi\xe9 par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/subtotal",children:"Subtotal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Ex\xe9cutez ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," avant d'imprimer un \xe9tat \xe0 l'aide de ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez la fonction ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/subtotal",children:"Subtotal"})," dans la m\xe9thode formulaire ou une m\xe9thode objet pour retourner le sous-total d'un des objets sp\xe9cifi\xe9 dans ",(0,r.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/subtotal",children:"Subtotal"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"303"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);