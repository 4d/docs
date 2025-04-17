"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8351"],{816163:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/printing-page","title":"Printing page","description":"Printing page  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/printing-page.md","sourceDirName":"commands-legacy","slug":"/commands/printing-page","permalink":"/docs/fr/20-R8/commands/printing-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinting-page.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"printing-page","title":"Printing page","slug":"/commands/printing-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINTERS LIST","permalink":"/docs/fr/20-R8/commands/printers-list"},"next":{"title":"SET CURRENT PRINTER","permalink":"/docs/fr/20-R8/commands/set-current-printer"}}'),t=r("785893"),s=r("250065");let a={id:"printing-page",title:"Printing page",slug:"/commands/printing-page",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Printing page"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de la page en cours d'impression"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Printing page"})," retourne le num\xe9ro de la page en cours d'impression. Cette fonction vous permet de num\xe9roter automatiquement les pages d'une impression en cours \xe0 l'aide de ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/print-selection",children:"PRINT SELECTION"})," ou du menu Impression dans le mode D\xe9veloppement."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant change la position des num\xe9ros de page sur un \xe9tat pour que l'\xe9tat puisse \xeatre reproduit au format recto-verso. Le formulaire pour l'\xe9tat comporte deux variables qui affichent les num\xe9ros de page. Une variable dans le coin bas \xe0 gauche (",(0,t.jsx)(n.em,{children:"vNumGauche"}),") imprime les num\xe9ros de page pairs. Une autre variable dans le coin bas \xe0 droite (",(0,t.jsx)(n.em,{children:"vNumDroite"}),") imprime les num\xe9ros de page impairs. L'exemple teste si le num\xe9ro de page est pair ou impair, puis utilise et efface les variables appropri\xe9es :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((Printing page% 2)=0)\xa0// Modulo vaut 0 pour un num\xe9ro de page pair\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumGauche:=String(Page impression)\xa0// Fixer le num\xe9ro de page \xe0 gauche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumDroite:=""\xa0// Effacer le num\xe9ro de page droit\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0// Else, le num\xe9ro de page est impair\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumGauche:=""\xa0// Effacer le num\xe9ro de page gauche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumDroite:=String(Page impression)\xa0// Fixer le num\xe9ro de page \xe0 droite\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/print-selection",children:"PRINT SELECTION"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"275"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var i=r(667294);let t={},s=i.createContext(t);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);