"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17769"],{60759:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/window-list","title":"WINDOW LIST","description":"WINDOW LIST ( fen\xeatres {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/window-list.md","sourceDirName":"commands-legacy","slug":"/commands/window-list","permalink":"/docs/fr/commands/window-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"window-list","title":"WINDOW LIST","slug":"/commands/window-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Window kind","permalink":"/docs/fr/commands/window-kind"},"next":{"title":"Window process","permalink":"/docs/fr/commands/window-process"}}'),r=s("785893"),l=s("250065");let d={id:"window-list",title:"WINDOW LIST",slug:"/commands/window-list",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WINDOW LIST"})," ( ",(0,r.jsx)(n.em,{children:"fen\xeatres"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fen\xeatres"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau des num\xe9ros de r\xe9f\xe9rence des fen\xeatres"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si omis, ignorer fen\xeatres flottantes Si sp\xe9cifi\xe9, tenir compte des fen\xeatres flottantes"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WINDOW LIST"})," remplit le tableau ",(0,r.jsx)(n.em,{children:"fen\xeatres"}),' avec les num\xe9ros de r\xe9f\xe9rence des fen\xeatres actuellement ouvertes dans tous les process (process moteur et process utilisateur). Seules les fen\xeatres "visibles" (i.e. non cach\xe9es) sont retourn\xe9es.']}),"\n",(0,r.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", les fen\xeatres flottantes sont ignor\xe9es."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'La m\xe9thode projet suivante place en "mosa\xefque" toutes les fen\xeatres ouvertes (\xe0 l\'exception des fen\xeatres flottantes et des bo\xeetes de dialogue) :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Mosa\xefque\n\xa0\n\xa0WINDOW LIST($alWnd)\n\xa0$vlLeft:=10\n\xa0$vlTop:=80\xa0// Laissons de la place \xe0 la barre d'outils\n\xa0For($vlWnd;1;Size of array($alWnd))\n\xa0\xa0\xa0\xa0If(Window kind($alWnd{$vlWnd})#Modal dialog)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWR:=$vlLeft+($vlWR-$vlWL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWB:=$vlTop+($vlWB-$vlWT)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWL:=$vlLeft\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWT:=$vlTop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlLeft:=$vlLeft+10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlTop:=$vlTop+25\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette m\xe9thode pourrait \xeatre am\xe9lior\xe9e par l'ajout de tests sur la taille de la fen\xeatre principale (sous Windows) ou sur la taille et l'emplacement du ou des \xe9cran(s) (sous Mac OS)."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/window-kind",children:"Window kind"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/window-process",children:"Window process"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},l=t.createContext(r);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);