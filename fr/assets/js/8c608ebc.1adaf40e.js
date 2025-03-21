"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62991"],{425469:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/query-selection","title":"QUERY SELECTION","description":"QUERY SELECTION ( {laTable }{;}{ crit\xe8re {; *}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-selection.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection","permalink":"/docs/fr/20-R7/commands/query-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-selection","title":"QUERY SELECTION","slug":"/commands/query-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY FORMULA","permalink":"/docs/fr/20-R7/commands/query-by-formula"},"next":{"title":"QUERY SELECTION BY ATTRIBUTE","permalink":"/docs/fr/20-R7/commands/query-selection-by-attribute"}}'),t=r("785893"),i=r("250065");let c={id:"query-selection",title:"QUERY SELECTION",slug:"/commands/query-selection",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION"})," ( {",(0,t.jsx)(n.em,{children:"laTable"})," }{;}{ ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle effectuer la recherche ou ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"crit\xe8re"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Lignes de recherche"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Attente d'ex\xe9cution de la recherche"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION"})," recherche des enregistrements dans ",(0,t.jsx)(n.em,{children:"laTable"}),".modifie la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"})," pour le process courant. Le premier enregistrement de la nouvelle s\xe9lection devient l'enregistrement courant."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION"})," a un fonctionnement et des effets proches de ceux de ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"}),". La diff\xe9rence entre ces deux commandes est la port\xe9e de la recherche :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"})," recherche des enregistrements dans la table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION"})," recherche des enregistrements parmi la s\xe9lection courante de la table."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION"})," est utile lorsqu'une recherche ne peut pas \xeatre exprim\xe9e via une s\xe9quence d'appels \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"})," reli\xe9s \xe0 l'aide du param\xe8tre ",(0,t.jsx)(n.em,{children:"*"}),". Typiquement, c'est le cas lorsque vous souhaitez effectuer une recherche dans une s\xe9lection courante qui ne r\xe9sulte pas d'une pr\xe9c\xe9dente recherche, mais de l'ex\xe9cution d'une commande telle que ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/use-set",children:"USE SET"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez effectuer une recherche parmi les enregistrements pr\xe9alablement surlign\xe9s par l'utilisateur dans un formulaire liste. Vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0USE SET("UserSet")\xa0//remplace la s\xe9lection courante par les enregistrements surlign\xe9s\n\xa0QUERY SELECTION([Soci\xe9t\xe9s];[Soci\xe9t\xe9s]Ville="Paris";*)\n\xa0QUERY SELECTION([Soci\xe9t\xe9s];[Soci\xe9t\xe9s]Activit\xe9="Affaires boursi\xe8res")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Vous trouvez donc toutes les soci\xe9t\xe9s bas\xe9es \xe0 Paris, dont l'activit\xe9 est boursi\xe8re, parmi la s\xe9lection initiale de l'utilisateur."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"341"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var s=r(667294);let t={},i=s.createContext(t);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);