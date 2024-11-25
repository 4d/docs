"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10657"],{561062:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/create-set","title":"CREATE SET","description":"CREATE SET ( {laTable ;} ensemble )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-set","permalink":"/docs/fr/commands/create-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-set","title":"CREATE SET","slug":"/commands/create-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE EMPTY SET","permalink":"/docs/fr/commands/create-empty-set"},"next":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/fr/commands/create-set-from-array"}}'),r=s("785893"),l=s("250065");let c={id:"create-set",title:"CREATE SET",slug:"/commands/create-set",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE SET"})," ( {",(0,r.jsx)(n.em,{children:"laTable"})," ;} ",(0,r.jsx)(n.em,{children:"ensemble"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table pour laquelle vous voulez cr\xe9er un ensemble \xe0 partir de la s\xe9lection courante ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ensemble"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom du nouvel ensemble"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE SET"})," cr\xe9e un nouvel ensemble, ",(0,r.jsx)(n.em,{children:"ensemble"}),", pour ",(0,r.jsx)(n.em,{children:"laTable"}),", et y place la s\xe9lection courante. Le pointeur d'enregistrement courant de la table est sauvegard\xe9 avec ",(0,r.jsx)(n.em,{children:"ensemble"}),". Si ",(0,r.jsx)(n.em,{children:"ensemble"})," est pass\xe9 \xe0 la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/use-set",children:"USE SET"}),", la s\xe9lection courante et l'enregistrement courant sont restitu\xe9s. Comme pour tout ensemble, il ne peut y avoir de tri, et lorsque ",(0,r.jsx)(n.em,{children:"ensemble"})," est appel\xe9, l'ordre par d\xe9faut est utilis\xe9. Si un ensemble du m\xeame nom existe d\xe9j\xe0, il est effac\xe9 et remplac\xe9 par le nouvel ensemble."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant cr\xe9e un ensemble apr\xe8s qu'une recherche ait \xe9t\xe9 effectu\xe9e, de mani\xe8re \xe0 ce que l'ensemble puisse \xeatre stock\xe9 sur disque :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes])\xa0// L\'utilisateur effectue une recherche\n\xa0CREATE SET([Personnes];"EnsembleRecherche")\xa0// Cr\xe9ation d\'un nouvel ensemble\n\xa0SAVE SET("EnsembleRecherche";"MaRecherche")\xa0// L\'ensemble est stock\xe9 sur disque\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-empty-set",children:"CREATE EMPTY SET"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var t=s(667294);let r={},l=t.createContext(r);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);