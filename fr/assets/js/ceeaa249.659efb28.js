"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63213"],{364552:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>t,toc:()=>i,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/messages-off","title":"MESSAGES OFF","description":"MESSAGES OFF","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/messages-off.md","sourceDirName":"commands-legacy","slug":"/commands/messages-off","permalink":"/docs/fr/commands/messages-off","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmessages-off.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"messages-off","title":"MESSAGES OFF","slug":"/commands/messages-off","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MESSAGE","permalink":"/docs/fr/commands/message"},"next":{"title":"MESSAGES ON","permalink":"/docs/fr/commands/messages-on"}}'),d=r("785893"),o=r("250065");let a={id:"messages-off",title:"MESSAGES OFF",slug:"/commands/messages-off",displayed_sidebar:"docs"},c=void 0,t={},i=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"MESSAGES OFF"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(s.table,{children:(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Ne requiert pas de param\xe8tre"}),(0,d.jsx)(s.th,{})]})})}),"\n",(0,d.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(s.p,{children:["Les commandes ",(0,d.jsx)(s.strong,{children:"MESSAGES OFF"})," et ",(0,d.jsx)(s.a,{href:"/docs/fr/commands/messages-on",children:"MESSAGES ON"})," suppriment ou font appara\xeetre les thermom\xe8tres de progression affich\xe9s par 4D lorsque le programme ex\xe9cute des op\xe9rations de longue dur\xe9e. Par d\xe9faut, les messages sont affich\xe9s."]}),"\n",(0,d.jsx)(s.p,{children:"Voici la liste des op\xe9rations qui peuvent provoquer l'affichage d'un thermom\xe8tre de progression : Application d'une formule, G\xe9n\xe9ration d'un \xe9tat rapide, Export de donn\xe9es, Import de donn\xe9es, Tri, G\xe9n\xe9ration d'un graphe, Recherche, Recherche par formulaire, Recherche par formule."}),"\n",(0,d.jsx)(s.p,{children:"Voici les commandes qui peuvent provoquer l'affichage d'un thermom\xe8tre de progression :"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/fr/commands/apply-to-selection",children:"APPLY TO SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/query",children:"QUERY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/query-selection",children:"QUERY SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/export-dif",children:"EXPORT DIF"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/export-sylk",children:"EXPORT SYLK"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/build-application",children:"BUILD APPLICATION"})]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/fr/commands/import-text",children:"IMPORT TEXT"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/relate-one-selection",children:"RELATE ONE SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/import-dif",children:"IMPORT DIF"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/import-sylk",children:"IMPORT SYLK"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/max",children:"Max"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/min",children:"Min"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/average",children:"Average"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/qr-report",children:"QR REPORT"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/reduce-selection",children:"REDUCE SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/scan-index",children:"SCAN INDEX"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/relate-many-selection",children:"RELATE MANY SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/sum",children:"Sum"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/order-by",children:"ORDER BY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/order-by-formula",children:"ORDER BY FORMULA"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/distinct-values",children:"DISTINCT VALUES"})]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Note 4D Server :"})," A compter de 4D Server v14 R3, les fen\xeatres de messages de progression ne sont plus affich\xe9es sur le serveur, ces op\xe9rations \xe9tant automatiquement list\xe9es dans la ",(0,d.jsx)(s.em,{children:"Fen\xeatre d'administration de 4D Server"})," de la fen\xeatre d'administration. Si vous souhaitez forcer l'affichage de ces fen\xeatres de progression, vous devez appeler la commande ",(0,d.jsx)(s.a,{href:"/docs/fr/commands/messages-on",children:"MESSAGES ON"})," sur le serveur."]}),"\n",(0,d.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(s.p,{children:"L'exemple suivant supprime les thermom\xe8tres de progression avant d'effectuer un tri, puis les r\xe9tablit apr\xe8s l'op\xe9ration :"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0MESSAGES OFF\n\xa0ORDER BY([Adresses];[Adresses]CP;>;[Adresses]Nom2;>)\n\xa0MESSAGES ON\n"})}),"\n",(0,d.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"/docs/fr/commands/messages-on",children:"MESSAGES ON"})}),"\n",(0,d.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(s.td,{children:"175"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread safe"}),(0,d.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return a}});var n=r(667294);let d={},o=n.createContext(d);function a(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);