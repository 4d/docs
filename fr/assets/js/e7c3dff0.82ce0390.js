"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69635"],{932878:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/scan-index","title":"SCAN INDEX","description":"SCAN INDEX ( leChamp ; nombre {; > ou <} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/scan-index.md","sourceDirName":"commands-legacy","slug":"/commands/scan-index","permalink":"/docs/fr/commands/scan-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscan-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"scan-index","title":"SCAN INDEX","slug":"/commands/scan-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE SELECTION","permalink":"/docs/fr/commands/reduce-selection"},"next":{"title":"Selected record number","permalink":"/docs/fr/commands/selected-record-number"}}'),t=s("785893"),i=s("250065");let d={id:"scan-index",title:"SCAN INDEX",slug:"/commands/scan-index",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," ( ",(0,t.jsx)(n.em,{children:"leChamp"})," ; ",(0,t.jsx)(n.em,{children:"nombre"})," {; > ou <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:'Champ index\xe9 avec lequel "scanner" les enregistrements'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre d'enregistrements \xe0 retourner"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> ou <"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"> \xe0 partir du d\xe9but de l'index < \xe0 partir de la fin de l'index"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," retourne une s\xe9lection de ",(0,t.jsx)(n.em,{children:"nombre"})," enregistrements de la table du champ ",(0,t.jsx)(n.em,{children:"leChamp"}),". Cette commande est extr\xeamement rapide car elle utilise l'index.",(0,t.jsx)(n.br,{}),"\nSi vous passez ",(0,t.jsx)(n.em,{children:"<"}),", ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," retourne ",(0,t.jsx)(n.em,{children:"nombre"})," enregistrements \xe0 partir de la fin de l'index (valeurs sup\xe9rieures). Si vous passez ",(0,t.jsx)(n.em,{children:">"}),", ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," retourne ",(0,t.jsx)(n.em,{children:"nombre"})," enregistrements \xe0 partir du d\xe9but de l'index (valeurs inf\xe9rieures). Si vous ne passez pas le dernier param\xe8tre, la commande retourne ",(0,t.jsx)(n.em,{children:"nombre"})," enregistrements \xe0 partir du d\xe9but de l'index (\xe9quivaut \xe0 passer ",(0,t.jsx)(n.em,{children:">"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La s\xe9lection obtenue n'est pas tri\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," fonctionne uniquement avec des champs index\xe9s. Cette commande modifie la s\xe9lection courante de la table pour le process courant et charge le premier enregistrement de la s\xe9lection en tant qu'enregistrement courant."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous sp\xe9cifiez un nombre d'enregistrements sup\xe9rieur au nombre d'enregistrements pr\xe9sents dans la table, ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," retourne tous les enregistrements."]}),"\n",(0,t.jsx)(n.h5,{id:""}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande ne prend pas en charge les champs de type Objet."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant envoie des lettres aux 50 plus mauvais clients puis aux 50 meilleurs clients :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SCAN INDEX([Clients]TotalD\xfb;50;<)\xa0// Obtenir la liste des 50 plus mauvais clients\n\xa0ORDER BY([Clients]CodePostal;>)\xa0// Trier par code postal\n\xa0FORM SET OUTPUT([Clients];"Menace")\n\xa0PRINT SELECTION([Clients])\xa0// Imprimer les lettres\n\xa0SCAN INDEX([Clients]TotalD\xfb;50;>)\xa0// Obtenir la liste des 50 meilleurs clients\n\xa0ORDER BY([Clients]CodePostal;>)\xa0// Trier par code postal\n\xa0FORM SET OUTPUT([Clients];"Remerciement")\n\xa0PRINT SELECTION([Clients])\xa0// Imprimer les lettres\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/reduce-selection",children:"REDUCE SELECTION"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);