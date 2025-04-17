"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21774"],{591236:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/level","title":"Level","description":"Level  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/level.md","sourceDirName":"commands-legacy","slug":"/commands/level","permalink":"/docs/fr/20-R8/commands/level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flevel.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"level","title":"Level","slug":"/commands/level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in print preview","permalink":"/docs/fr/20-R8/commands/is-in-print-preview"},"next":{"title":"OPEN PRINTING JOB","permalink":"/docs/fr/20-R8/commands/open-printing-job"}}'),i=r("785893"),s=r("250065");let l={id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Level"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Niveau de rupture ou d'en-t\xeate courant"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.strong,{children:"Level"})," sert \xe0 d\xe9terminer le niveau de rupture ou d'en-t\xeate courant. Elle retourne le num\xe9ro du niveau de rupture pendant les \xe9v\xe9nements On Header et On Printing Break."]}),"\n",(0,i.jsxs)(n.p,{children:["Le niveau 0 est le dernier niveau \xe0 \xeatre imprim\xe9 et convient \xe0 l'impression d'un total g\xe9n\xe9ral. ",(0,i.jsx)(n.strong,{children:"Level"})," retourne 1 lorsque 4D imprime une rupture sur le premier champ tri\xe9, 2 lorsque 4D imprime une rupture sur le deuxi\xe8me champ tri\xe9, et ainsi de suite."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Cet exemple est une maquette de m\xe9thode formulaire. Il traite chaque \xe9v\xe9nement possible lorsqu'un \xe9tat est imprim\xe9 dans un formulaire sortie. ",(0,i.jsx)(n.strong,{children:"Level"})," est appel\xe9 lorsqu'un en-t\xeate ou une rupture est imprim\xe9(e) :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode formulaire pour un formulaire sortie utilis\xe9 pour un \xe9tat\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Header)\n\xa0\xa0// La zone en-t\xeate va \xeatre imprim\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// Le code pour la premi\xe8re rupture d'en-t\xeate doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Le code pour la rupture d'en-t\xeate niveau 1 doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0// Le code pour la rupture d'en-t\xeate niveau 2 doit \xeatre plac\xe9 ici\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Detail)\n\xa0\xa0// Un enregistrement va \xeatre imprim\xe9\n\xa0\xa0// Le code pour chaque enregistrement doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0// Une rupture va \xeatre imprim\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0// Le code pour la rupture 0 doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Le code pour la rupture 1 doit \xeatre plac\xe9 ici\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0// Le code pour le dernier pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Le code pour le pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/accumulate",children:"ACCUMULATE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/break-level",children:"BREAK LEVEL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"101"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var t=r(667294);let i={},s=t.createContext(i);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);