"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99450"],{846068:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/before-selection","title":"Before selection","description":"Before selection {( laTable )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/before-selection.md","sourceDirName":"commands-legacy","slug":"/commands/before-selection","permalink":"/docs/fr/commands/before-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbefore-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"before-selection","title":"Before selection","slug":"/commands/before-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPLY TO SELECTION","permalink":"/docs/fr/commands/apply-to-selection"},"next":{"title":"CREATE SELECTION FROM ARRAY","permalink":"/docs/fr/commands/create-selection-from-array"}}'),t=r("785893"),o=r("250065");let i={id:"before-selection",title:"Before selection",slug:"/commands/before-selection",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Before selection"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table pour laquelle vous testez si le pointeur se trouve avant la s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Avant s\xe9lection (Vrai) sinon (Faux)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Before selection"})," retourne Vrai lorsque le pointeur d'enregistrement courant se trouve avant le premier enregistrement de la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"}),".est g\xe9n\xe9ralement utilis\xe9e pour v\xe9rifier si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/previous-record",children:"PREVIOUS RECORD"})," a d\xe9plac\xe9 le pointeur d'enregistrement courant avant le premier enregistrement. Si la s\xe9lection courante est vide, ",(0,t.jsx)(n.strong,{children:"Before selection"})," retourne Vrai."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour replacer le pointeur d'enregistrement courant dans la s\xe9lection courante, utilisez les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/first-record",children:"FIRST RECORD"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/last-record",children:"LAST RECORD"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/next-record",children:"NEXT RECORD"})," ne replace pas le pointeur d'enregistrement courant dans la s\xe9lection courante."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Before selection"})," retourne Vrai dans l'en-t\xeate lorsqu'un \xe9tat est en cours d'impression \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," ou \xe0 partir de la commande de menu Imprimer. Vous pouvez utiliser le code suivant pour tester le premier en-t\xeate et imprimer un en-t\xeate sp\xe9cial pour la premi\xe8re page :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode d'un formulaire sortie utilis\xe9 pour un \xe9tat\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=Sur ent\xeate)\n\xa0\xa0// La zone en-t\xeate va \xeatre imprim\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// Le code pour la premi\xe8re rupture d'en-t\xeate doit \xeatre plac\xe9 ici\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode formulaire suivante est utilis\xe9e pendant l'impression d'un \xe9tat. Elle d\xe9finit une variable ",(0,t.jsx)(n.em,{children:"vTitre"})," \xe0 imprimer dans la zone d'en-t\xeate sur la premi\xe8re page :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode formulaire [Finances];"Tableau"\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=Sur ent\xeate)\n\xa0\xa0// La zone en-t\xeate va \xeatre imprim\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection([Finances]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitre:="Etat des finances pour 1997"\xa0// D\xe9finir le titre pour la premi\xe8re page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitre:=""\xa0// Effacer le titre pour les autres pages\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/end-selection",children:"End selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/first-record",children:"FIRST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/previous-record",children:"PREVIOUS RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"198"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);