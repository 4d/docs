"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74465"],{853749:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-window-title","title":"SET WINDOW TITLE","description":"SET WINDOW TITLE ( titre {; fen\xeatre} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-window-title.md","sourceDirName":"commands-legacy","slug":"/commands/set-window-title","permalink":"/docs/fr/commands/set-window-title","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-title.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-window-title","title":"SET WINDOW TITLE","slug":"/commands/set-window-title","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET WINDOW RECT","permalink":"/docs/fr/commands/set-window-rect"},"next":{"title":"SHOW TOOL BAR","permalink":"/docs/fr/commands/show-tool-bar"}}'),s=t("785893"),i=t("250065");let d={id:"set-window-title",title:"SET WINDOW TITLE",slug:"/commands/set-window-title",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," ( ",(0,s.jsx)(n.em,{children:"titre"})," {; ",(0,s.jsx)(n.em,{children:"fen\xeatre"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"titre"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Titre de la fen\xeatre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fen\xeatre"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fen\xeatre ou Fen\xeatre au premier plan du process courant si ce param\xe8tre est omis"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," remplace le titre de la fen\xeatre dont le num\xe9ro de r\xe9f\xe9rence est pass\xe9 dans ",(0,s.jsx)(n.em,{children:"fen\xeatre"})," par le texte pass\xe9 dans ",(0,s.jsx)(n.em,{children:"titre"})," (longueur maximale 80 caract\xe8res)."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la fen\xeatre n'existe pas, ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," ne fait rien."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"fen\xeatre"}),", ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," remplace le titre de la fen\xeatre de premier plan du process courant."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," En mode D\xe9veloppement, 4D d\xe9finit automatiquement les titres des fen\xeatres \u2014 par exemple \u201CSaisie pour table1\u201D est affich\xe9 lorsque vous passez en saisie de donn\xe9es. Si vous changez le titre d'une fen\xeatre du mode D\xe9veloppement, il est probable que 4D le remplacera par la suite. En revanche, en mode Application, 4D ne modifie pas le titre des fen\xeatres."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous effectuez une saisie dans un formulaire et vous cliquez sur un bouton qui d\xe9clenche une longue op\xe9ration (par exemple une modification par programmation des enregistrements li\xe9s affich\xe9s dans un sous-formulaire). Vous pouvez afficher des informations sur la progression des op\xe9rations dans le titre de la fen\xeatre :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet du bouton bAnalyse\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Sauvegarde du titre courant de la fen\xeatre dans une variable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTitreCour:=Get window title\n\xa0\xa0// Commencer l'op\xe9ration longue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FIRST RECORD([Lignes facture])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRecord;1;Records in selection([Lignes facture]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FAIRE QUELQUE CHOSE\n\xa0\xa0// Afficher la progression\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE(\"Traitement de la ligne #\"+String($vlEnreg))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Remettre en place l'ancien titre de fen\xeatre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE($vsTitreCour)\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-window-title",children:"Get window title"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);