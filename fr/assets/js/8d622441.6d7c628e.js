"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77245"],{714380:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/delete-record","title":"DELETE RECORD","description":"DELETE RECORD {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-record.md","sourceDirName":"commands-legacy","slug":"/commands/delete-record","permalink":"/docs/fr/commands/delete-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-record","title":"DELETE RECORD","slug":"/commands/delete-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RECORD","permalink":"/docs/fr/commands/create-record"},"next":{"title":"DISPLAY RECORD","permalink":"/docs/fr/commands/display-record"}}'),t=r("785893"),i=r("250065");let l={id:"delete-record",title:"DELETE RECORD",slug:"/commands/delete-record",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE RECORD"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle supprimer l'enregistrement courant ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE RECORD"})," supprime de ",(0,t.jsx)(n.em,{children:"laTable"})," l'enregistrement courant du process en cours. S'il n'y a pas d'enregistrement courant pour ",(0,t.jsx)(n.em,{children:"laTable"})," dans le process, ",(0,t.jsx)(n.strong,{children:"DELETE RECORD"})," ne fait rien. Dans un formulaire, vous pouvez cr\xe9er un bouton 'Supprimer enregistrement' et lui assigner l'action automatique correspondante, plut\xf4t que d'utiliser cette commande."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si l'enregistrement courant est d\xe9charg\xe9 de la m\xe9moire avant l'appel \xe0 ",(0,t.jsx)(n.strong,{children:"DELETE RECORD"})," (par exemple suite \xe0 un ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/unload-record",children:"UNLOAD RECORD"}),"), la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"})," est vide \xe0 l'issue de la suppression."]}),"\n",(0,t.jsxs)(n.li,{children:["La commande ",(0,t.jsx)(n.strong,{children:"DELETE RECORD"})," ne fait rien si la table est en mode ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/read-only",children:"READ ONLY"}),", ind\xe9pendamment de l'\xe9tat verrouill\xe9 ou non de l'enregistrement \xe0 supprimer."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La suppression d'enregistrements est une op\xe9ration d\xe9finitive et ne peut \xeatre annul\xe9e (sauf lorsqu'elle est ex\xe9cut\xe9e durant une transaction, consultez ",(0,t.jsx)(n.em,{children:"Utiliser des transactions"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un enregistrement est supprim\xe9, son num\xe9ro interne est r\xe9utilis\xe9 lors de la cr\xe9ation de nouveaux enregistrements. Par cons\xe9quent, n'utilisez pas ces num\xe9ros comme identifiants de vos enregistrements si votre base permet la suppression d'enregistrements."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant permet de supprimer l'enregistrement d'un employ\xe9. La m\xe9thode demande \xe0 l'utilisateur le num\xe9ro de l'employ\xe9 \xe0 supprimer, recherche l'enregistrement correspondant puis le supprime :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0vCherch:=Request(\"Num\xe9ro de l'employ\xe9 \xe0 supprimer :\")\xa0//On r\xe9cup\xe8re un num\xe9ro d'identification\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Employ\xe9s];[Employ\xe9s]Num\xe9ro=vCherch)\xa0//Trouver l'employ\xe9\n\xa0\xa0\xa0\xa0DELETE RECORD([Employ\xe9s])\xa0//Suppression de l'enregistrement\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/locked",children:"Locked"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des triggers"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);