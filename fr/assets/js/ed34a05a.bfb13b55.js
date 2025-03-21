"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55724"],{696480:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/records-in-selection","title":"Records in selection","description":"Records in selection {( laTable )} : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/records-in-selection.md","sourceDirName":"commands-legacy","slug":"/commands/records-in-selection","permalink":"/docs/fr/commands/records-in-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecords-in-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"records-in-selection","title":"Records in selection","slug":"/commands/records-in-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PREVIOUS RECORD","permalink":"/docs/fr/commands/previous-record"},"next":{"title":"REDUCE SELECTION","permalink":"/docs/fr/commands/reduce-selection"}}'),t=s("785893"),i=s("250065");let o={id:"records-in-selection",title:"Records in selection",slug:"/commands/records-in-selection",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Records in selection"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dont vous souhaitez conna\xeetre le nombre d'enregistrements de la s\xe9lection courante ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombre d'enregistrements dans la s\xe9lection courante de table"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Records in selection"})," retourne le nombre d'enregistrements constituant la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"})," (par opposition, ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/records-in-table",children:"Records in table"})," retourne le nombre total d'enregistrements d'une table)."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant propose une technique de boucle couramment utilis\xe9e pour se d\xe9placer parmi les enregistrements de la s\xe9lection courante. La m\xeame op\xe9ration peut \xeatre r\xe9alis\xe9e \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/apply-to-selection",children:"APPLY TO SELECTION"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FIRST RECORD([Personnes])\xa0// D\xe9part sur le premier enregistrement de la s\xe9lection\n\xa0For($VElEnreg;1;Records in selection([Personnes]))\xa0// Boucle une fois par enregistrement\n\xa0\xa0\xa0\xa0Faire quelque chose\xa0// R\xe9aliser une op\xe9ration avec l'enregistrement\n\xa0\xa0\xa0\xa0NEXT RECORD([Personnes])\xa0// Passage \xe0 l'enregistrement suivant\n\xa0End for\n"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/records-in-table",children:"Records in table"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"76"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);