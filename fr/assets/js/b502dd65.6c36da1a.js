"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19210"],{364787:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","description":"CREATE SELECTION FROM ARRAY ( laTable ; tabEnrg {; nom} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-selection-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-selection-from-array","permalink":"/docs/fr/commands/create-selection-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-selection-from-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","slug":"/commands/create-selection-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before selection","permalink":"/docs/fr/commands/before-selection"},"next":{"title":"DELETE SELECTION","permalink":"/docs/fr/commands/delete-selection"}}'),t=r("785893"),i=r("250065");let l={id:"create-selection-from-array",title:"CREATE SELECTION FROM ARRAY",slug:"/commands/create-selection-from-array",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," ; ",(0,t.jsx)(n.em,{children:"tabEnrg"})," {; ",(0,t.jsx)(n.em,{children:"nom"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de la s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabEnrg"}),(0,t.jsx)(n.td,{children:"Integer, Boolean array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau de n\xb0 d\u2019enregistrements, ou Tableau de bool\xe9ens (Vrai = l\u2019enregistrement est dans la s\xe9lection, Faux = il n\u2019est pas dans la s\xe9lection)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nom"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la s\xe9lection temporaire \xe0 cr\xe9er, ou Appliquer la commande \xe0 la s\xe9lection courante si ce param\xe8tre est omis ou vide"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," construit la s\xe9lection temporaire ",(0,t.jsx)(n.em,{children:"nom"})," \xe0 partir :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["soit du tableau de num\xe9ros d\u2019enregistrements absolus ",(0,t.jsx)(n.em,{children:"tabEnrg"})," de ",(0,t.jsx)(n.em,{children:"laTable"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["soit du tableau de bool\xe9ens ",(0,t.jsx)(n.em,{children:"tabEnrg"})," ; dans ce cas, les valeurs du tableau indiquent l\u2019appartenance (Vrai) ou non (Faux) de chaque enregistrement de ",(0,t.jsx)(n.em,{children:"laTable"})," \xe0 la s\xe9lection ",(0,t.jsx)(n.em,{children:"nom"}),". Une s\xe9lection nomm\xe9e est cr\xe9\xe9e et charg\xe9e en m\xe9moire. Par cons\xe9quent, assurez-vous que vous disposez de suffisamment de m\xe9moire avant d'ex\xe9cuter cette commande."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"nom"})," ou si vous passez une cha\xeene vide, la commande s\u2019appliquera \xe0 la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"}),", qui sera donc mise \xe0 jour."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous utilisez la commande avec un tableau d\u2019entiers longs, tous les num\xe9ros du tableau repr\xe9sentent la liste des num\xe9ros d\u2019enregistrements qui feront partie de la s\xe9lection ",(0,t.jsx)(n.em,{children:"nom"}),". Si un num\xe9ro est invalide (enregistrement non cr\xe9\xe9), l\u2019erreur -10503 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Attention, vous devez veiller \xe0 ce que le tableau ne contienne pas d'\xe9l\xe9ments ayant la m\xeame valeur, sinon la s\xe9lection r\xe9sultante sera incorrecte."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous utilisez la commande avec un tableau de bool\xe9ens, le Ni\xe8me \xe9l\xe9ment du tableau repr\xe9sente l\u2019int\xe9gration (Vrai) ou non (Faux) de l\u2019enregistrement num\xe9ro N dans la s\xe9lection ",(0,t.jsx)(n.em,{children:"nom"}),". En principe, le nombre d\u2019\xe9l\xe9ments du tableau doit \xeatre \xe9gal au nombre d\u2019enregistrements de ",(0,t.jsx)(n.em,{children:"laTable"}),". Si le tableau est plus petit que le nombre d\u2019enregistrements, seuls les enregistrements d\xe9finis par le tableau pourront faire partie de la s\xe9lection."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Avec un tableau de bool\xe9ens, la commande utilise les \xe9l\xe9ments du num\xe9ro 0 au num\xe9ro N-1."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention"})," : N'oubliez pas qu'un num\xe9ro d'enregistrement peut \xeatre r\xe9utilis\xe9 si l'enregistrement est supprim\xe9 et qu'un autre enregistrement est cr\xe9\xe9 (voir ",(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(n.p,{children:["Si un num\xe9ro d'enregistrement est invalide (enregistrement non cr\xe9\xe9), l\u2019erreur -10503 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/longint-array-from-selection",children:"LONGINT ARRAY FROM SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"640"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);