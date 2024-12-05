"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39152"],{782687:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/end-selection","title":"End selection","description":"End selection {( laTable )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/end-selection.md","sourceDirName":"commands-legacy","slug":"/commands/end-selection","permalink":"/docs/fr/commands/end-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fend-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"end-selection","title":"End selection","slug":"/commands/end-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Displayed line number","permalink":"/docs/fr/commands/displayed-line-number"},"next":{"title":"FIRST RECORD","permalink":"/docs/fr/commands/first-record"}}'),t=r("785893"),i=r("250065");let d={id:"end-selection",title:"End selection",slug:"/commands/end-selection",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"End selection"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table pour laquelle tester si le pointeur d'enregistrement courant est au-del\xe0 du dernier enregistrement de la s\xe9lection courante ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Oui (Vrai), Non (Faux)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"End selection"})," retourne Vrai lorsque le pointeur de l'enregistrement courant se trouve apr\xe8s le dernier enregistrement de la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"}),". ",(0,t.jsx)(n.strong,{children:"End selection"})," est g\xe9n\xe9ralement utilis\xe9e pour tester si l'appel \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/next-record",children:"NEXT RECORD"})," place ou non le pointeur d'enregistrement courant derri\xe8re le dernier enregistrement de la s\xe9lection. Si la s\xe9lection courante est vide, ",(0,t.jsx)(n.strong,{children:"End selection"})," retourne Vrai."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour replacer le pointeur d'enregistrement courant dans la s\xe9lection, utilisez les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/first-record",children:"FIRST RECORD"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/last-record",children:"LAST RECORD"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/previous-record",children:"PREVIOUS RECORD"})," ne replace pas le pointeur dans la s\xe9lection."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"End selection"})," retourne \xe9galement Vrai lors de l'impression du dernier pied de page d'un \xe9tat, d\xe9clench\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," ou le menu ",(0,t.jsx)(n.strong,{children:"Imprimer"}),". Vous pouvez utiliser l'instruction suivante pour intercepter le dernier pied de page et ins\xe9rer une mention particuli\xe8re :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode d'un formulaire sortie utilis\xe9 pour imprimer un \xe9tat\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0// Un pied\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0// Le code pour le dernier pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Le code pour le pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode formulaire de l'exemple suivant est utilis\xe9e lors de l'impression d'un \xe9tat. Elle cr\xe9e la variable VPied, \xe0 imprimer dans le pied de page de la derni\xe8re page :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode formulaire [Finances];"Tableau"\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection([Finances]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0VPied:="\xa91997 SARL Dupont"\xa0// D\xe9finir le pied de page de la derni\xe8re page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0VPied:=""\xa0// Effacer le pied de page pour toutes les autres pages\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/before-selection",children:"Before selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/last-record",children:"LAST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/next-record",children:"NEXT RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);