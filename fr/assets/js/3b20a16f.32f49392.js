"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15035"],{424417:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/use-set","title":"USE SET","description":"USE SET ( ensemble )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-set","permalink":"/docs/fr/commands/use-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-set","title":"USE SET","slug":"/commands/use-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"UNION","permalink":"/docs/fr/commands/union"},"next":{"title":"Spell Checker","permalink":"/docs/fr/category/spell-checker"}}'),t=s("785893"),i=s("250065");let l={id:"use-set",title:"USE SET",slug:"/commands/use-set",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"USE SET"})," ( ",(0,t.jsx)(n.em,{children:"ensemble"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ensemble"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'ensemble \xe0 utiliser"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"USE SET"})," cr\xe9e, avec les enregistrements de ",(0,t.jsx)(n.em,{children:"ensemble"}),", une nouvelle s\xe9lection courante pour la table \xe0 laquelle ",(0,t.jsx)(n.em,{children:"ensemble"})," appartient."]}),"\n",(0,t.jsxs)(n.p,{children:["Au moment o\xf9 vous cr\xe9ez un ensemble, la position de l'enregistrement courant est sauvegard\xe9e. ",(0,t.jsx)(n.strong,{children:"USE SET"})," r\xe9cup\xe8re cette information et fait de l'enregistrement le nouvel enregistrement courant. Si vous supprimez cet enregistrement avant d'ex\xe9cuter ",(0,t.jsx)(n.strong,{children:"USE SET"}),', 4D s\xe9lectionne comme enregistrement courant le premier enregistrement de l\'ensemble. Les commandes du th\xe8me "Ensembles", ',(0,t.jsx)(n.a,{href:"/docs/fr/commands/union",children:"UNION"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/intersection",children:"INTERSECTION"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/difference",children:"DIFFERENCE"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/add-to-set",children:"ADD TO SET"}),"  r\xe9initialisent l'enregistrement courant.",(0,t.jsx)(n.br,{}),"\nSi vous avez cr\xe9\xe9 un ensemble ne contenant pas de position d'enregistrement courant, ",(0,t.jsx)(n.strong,{children:"USE SET"})," d\xe9signe le premier enregistrement de l'ensemble comme enregistrement courant."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION :"})," Rappelez-vous qu'un ensemble est la repr\xe9sentation d'une s\xe9lection d'enregistrements \xe0 un instant donn\xe9 (au moment de la cr\xe9ation de l'ensemble). Si les enregistrements que l'ensemble repr\xe9sente sont modifi\xe9s, il se peut que celui-ci ne soit plus valide. En cons\xe9quence, un ensemble sauvegard\xe9 sur disque doit g\xe9n\xe9ralement repr\xe9senter un groupe d'enregistrements qui ne change pas souvent. De multiples \xe9v\xe9nements peuvent rendre un ensemble invalide, comme par exemple la suppression ou la modification d'un enregistrement de l'ensemble, ou encore la modification des crit\xe8res de cr\xe9ation de l'ensemble."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant utilise ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/load-set",children:"LOAD SET"})," pour charger un ensemble des sites de la soci\xe9t\xe9 Dubois \xe0 Paris. ",(0,t.jsx)(n.strong,{children:"USE SET"})," est ensuite appel\xe9e pour faire de l'ensemble la s\xe9lection courante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Charger l\'ensemble en m\xe9moire\n\xa0LOAD SET([Entreprises];"DuboisParis";"ENSDuboisParis")\n\xa0USE SET("DuboisParis")\xa0// Modification de la s\xe9lection courante\n\xa0CLEAR SET("DuboisParis")\xa0// Effacement de l\'ensemble de la m\xe9moire\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-set",children:"CLEAR SET"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/load-set",children:"LOAD SET"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"118"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);