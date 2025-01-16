"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20817"],{271669:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/record-number","title":"Record number","description":"Record number {( laTable )} : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/record-number.md","sourceDirName":"commands-legacy","slug":"/commands/record-number","permalink":"/docs/fr/20-R7/commands/record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecord-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"record-number","title":"Record number","slug":"/commands/record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PUSH RECORD","permalink":"/docs/fr/20-R7/commands/push-record"},"next":{"title":"Records in table","permalink":"/docs/fr/20-R7/commands/records-in-table"}}'),t=r("785893"),d=r("250065");let o={id:"record-number",title:"Record number",slug:"/commands/record-number",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Record number"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle vous souhaitez obtenir le num\xe9ro de l'enregistrement courant ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'enregistrement courant"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Record number"})," retourne le num\xe9ro de l'enregistrement courant de ",(0,t.jsx)(n.em,{children:"laTable"}),". S'il n'y a pas d'enregistrement courant, par exemple si le pointeur d'enregistrement se trouve avant ou apr\xe8s la s\xe9lection courante, ",(0,t.jsx)(n.strong,{children:"Record number"})," retourne -1. S'il s'agit d'un nouvel enregistrement qui n'a pas encore \xe9t\xe9 sauvegard\xe9, ",(0,t.jsx)(n.strong,{children:"Record number"})," retourne -3."]}),"\n",(0,t.jsx)(n.p,{children:"Les num\xe9ros d'enregistrements peuvent varier. Par exemple, les num\xe9ros des enregistrements supprim\xe9s sont r\xe9utilis\xe9s."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"})," Cette commande retourne un r\xe9sultat diff\xe9rent dans le contexte de l'\xe9v\xe9nement formulaire On Validate suivant qu'elle est ex\xe9cut\xe9e sur 4D en mode local ou 4D en mode distant. En mode local, la commande retourne un num\xe9ro d'enregistrement (l'enregistrement est consid\xe9r\xe9 comme d\xe9j\xe0 cr\xe9\xe9). En mode distant, la commande retourne -3 car dans ce cas, l'enregistrement est \xe9galement d\xe9j\xe0 cr\xe9\xe9 sur le serveur mais l'information n'a pas encore \xe9t\xe9 envoy\xe9e au client."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Il est fortement conseill\xe9 d'utiliser la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-new-record",children:"Is new record"})," pour v\xe9rifier si un enregistrement est en cours de cr\xe9ation."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant sauvegarde le num\xe9ro d'enregistrement courant puis cherche dans la table si un autre enregistrement a la m\xeame valeur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$NumEnreg :=Record number([Personnes])\xa0// Obtenir le num\xe9ro d'enregistrement\n\xa0\xa0// Est-ce que quelqu'un d'autre a le m\xeame nom ?\n\xa0QUERY([Personnes];[Personnes]Nom=[Personnes]Nom)\n\xa0\xa0// Afficher une alerte avec le nombre de personnes qui ont le m\xeame nom\n\xa0ALERT(\"Il existe \"+String(Enregistrements trouves([Personnes])+\" personnes du m\xeame nom.\")\n\xa0GOTO RECORD([Personnes];$NumEnreg)\xa0// Retourner \xe0 l'enregistrement original\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/goto-record",children:"GOTO RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-new-record",children:"Is new record"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/selected-record-number",children:"Selected record number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sequence-number",children:"Sequence number"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"243"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);