"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9824"],{9138:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/query-with-array","title":"QUERY WITH ARRAY","description":"QUERY WITH ARRAY ( champCible ; tableau )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/query-with-array.md","sourceDirName":"commands-legacy","slug":"/commands/query-with-array","permalink":"/docs/fr/commands/query-with-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-with-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-with-array","title":"QUERY WITH ARRAY","slug":"/commands/query-with-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION WITH ARRAY","permalink":"/docs/fr/commands/query-selection-with-array"},"next":{"title":"SET QUERY AND LOCK","permalink":"/docs/fr/commands/set-query-and-lock"}}'),t=r("785893"),i=r("250065");let l={id:"query-with-array",title:"QUERY WITH ARRAY",slug:"/commands/query-with-array",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY WITH ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"champCible"})," ; ",(0,t.jsx)(n.em,{children:"tableau"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"champCible"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Champ duquel comparer les valeurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau des valeurs recherch\xe9es"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QUERY WITH ARRAY"})," recherche dans la table du champ pass\xe9 en premier param\xe8tre tous les enregistrements pour lesquels la valeur de ",(0,t.jsx)(n.em,{children:"champCible"})," est \xe9gale \xe0 au moins une des valeurs des \xe9l\xe9ments du tableau ",(0,t.jsx)(n.em,{children:"tableau"}),". Les enregistrements trouv\xe9s constituent la nouvelle s\xe9lection courante."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande permet de construire rapidement et simplement une recherche sur plusieurs valeurs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cette commande ne peut pas \xeatre utilis\xe9e avec des champs de type image et BLOB."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"champCible"})," et ",(0,t.jsx)(n.em,{children:"tableau"})," doivent imp\xe9rativement \xeatre du m\xeame type. Exception : vous pouvez utiliser un tableau de type Entier long avec un champ de type Heure."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple permet de r\xe9cup\xe9rer les enregistrements des clients fran\xe7ais et am\xe9ricains :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(TabRecherche;2)\n\xa0TabRecherche{1}:="FR"\n\xa0TabRecherche{2}:="US"\n\xa0QUERY WITH ARRAY([Clients]Pays;TabRecherche)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"644"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);