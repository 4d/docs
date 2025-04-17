"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65052"],{61891:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/query-selection-by-formula","title":"QUERY SELECTION BY FORMULA","description":"QUERY SELECTION BY FORMULA ( laTable {; formule} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/query-selection-by-formula.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-by-formula","permalink":"/docs/fr/commands/query-selection-by-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-by-formula.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"query-selection-by-formula","title":"QUERY SELECTION BY FORMULA","slug":"/commands/query-selection-by-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION BY ATTRIBUTE","permalink":"/docs/fr/commands/query-selection-by-attribute"},"next":{"title":"QUERY SELECTION WITH ARRAY","permalink":"/docs/fr/commands/query-selection-with-array"}}'),t=r("785893"),l=r("250065");let i={id:"query-selection-by-formula",title:"QUERY SELECTION BY FORMULA",slug:"/commands/query-selection-by-formula",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY FORMULA"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," {; ",(0,t.jsx)(n.em,{children:"formule"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle effectuer la recherche parmi la s\xe9lection courante"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formule"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Formule de recherche"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY FORMULA"})," vous permet de rechercher des enregistrements dans ",(0,t.jsx)(n.em,{children:"laTable"}),".modifie la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"})," pour le process courant et fait du premier enregistrement le nouvel enregistrement courant."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY FORMULA"})," fonctionne de la m\xeame mani\xe8re que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),". La diff\xe9rence entre ces deux commandes se situe au niveau de la port\xe9e de la recherche :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"})," effectue sa recherche parmi la totalit\xe9 des enregistrements de la table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY FORMULA"})," effectue sa recherche uniquement parmi les enregistrements de la s\xe9lection courante."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection",children:"QUERY SELECTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"207"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);