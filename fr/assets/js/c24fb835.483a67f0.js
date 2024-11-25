"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77745"],{729913:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/query-with-array","title":"QUERY WITH ARRAY","description":"QUERY WITH ARRAY ( champCible ; tableau )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-with-array.md","sourceDirName":"commands-legacy","slug":"/commands/query-with-array","permalink":"/docs/fr/commands/query-with-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-with-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-with-array","title":"QUERY WITH ARRAY","slug":"/commands/query-with-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION WITH ARRAY","permalink":"/docs/fr/commands/query-selection-with-array"},"next":{"title":"SET QUERY AND LOCK","permalink":"/docs/fr/commands/set-query-and-lock"}}'),s=r("785893"),i=r("250065");let a={id:"query-with-array",title:"QUERY WITH ARRAY",slug:"/commands/query-with-array",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY WITH ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"champCible"})," ; ",(0,s.jsx)(n.em,{children:"tableau"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"champCible"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Champ duquel comparer les valeurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableau"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tableau des valeurs recherch\xe9es"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QUERY WITH ARRAY"})," recherche dans la table du champ pass\xe9 en premier param\xe8tre tous les enregistrements pour lesquels la valeur de ",(0,s.jsx)(n.em,{children:"champCible"})," est \xe9gale \xe0 au moins une des valeurs des \xe9l\xe9ments du tableau ",(0,s.jsx)(n.em,{children:"tableau"}),". Les enregistrements trouv\xe9s constituent la nouvelle s\xe9lection courante."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande permet de construire rapidement et simplement une recherche sur plusieurs valeurs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cette commande ne peut pas \xeatre utilis\xe9e avec des champs de type image et BLOB."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"champCible"})," et ",(0,s.jsx)(n.em,{children:"tableau"})," doivent imp\xe9rativement \xeatre du m\xeame type. Exception : vous pouvez utiliser un tableau de type Entier long avec un champ de type Heure."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cet exemple permet de r\xe9cup\xe9rer les enregistrements des clients fran\xe7ais et am\xe9ricains :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(TabRecherche;2)\n\xa0TabRecherche{1}:="FR"\n\xa0TabRecherche{2}:="US"\n\xa0QUERY WITH ARRAY([Clients]Pays;TabRecherche)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);