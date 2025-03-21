"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13603"],{227996:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/is-field-number-valid","title":"Is field number valid","description":"Is field number valid ( numTable\xa0|\xa0ptrTable ; numChamp ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-field-number-valid.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-number-valid","permalink":"/docs/fr/20-R7/commands/is-field-number-valid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-field-number-valid","title":"Is field number valid","slug":"/commands/is-field-number-valid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT STRUCTURE","permalink":"/docs/fr/20-R7/commands/import-structure"},"next":{"title":"Is table number valid","permalink":"/docs/fr/20-R7/commands/is-table-number-valid"}}'),t=s("785893"),d=s("250065");let i={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Is field number valid"})," ( numTable\xa0|\xa0ptrTable ; ",(0,t.jsx)(n.em,{children:"numChamp"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numTable\xa0|\xa0ptrTable"}),(0,t.jsx)(n.td,{children:"Entier long, Pointeur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de table ou Pointeur vers une table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numChamp"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de champ"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai = le champ existe dans la table, Faux = le champ n\u2019existe pas dans la table"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Is field number valid"})," retourne Vrai si le champ dont le num\xe9ro est pass\xe9 dans ",(0,t.jsx)(n.em,{children:"numChamp"})," existe dans la table dont le num\xe9ro ou le pointeur est pass\xe9 dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"numTable"})," ou ",(0,t.jsx)(n.em,{children:"ptrTable"}),". Si le champ n\u2019existe pas, la commande retourne Faux. A noter que la commande retourne Faux si la table du champ se trouve dans la Corbeille de l\u2019Explorateur."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande permet de d\xe9tecter d\u2019\xe9ventuelles suppressions de champs, ce qui cr\xe9e des ruptures dans la s\xe9quence des num\xe9ros de champs."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/last-table-number",children:"Last table number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-table-number-valid",children:"Is table number valid"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);