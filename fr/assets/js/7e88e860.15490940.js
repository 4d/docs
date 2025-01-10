"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21990"],{910513:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/duplicate-record","title":"DUPLICATE RECORD","description":"DUPLICATE RECORD {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/duplicate-record.md","sourceDirName":"commands-legacy","slug":"/commands/duplicate-record","permalink":"/docs/fr/commands/duplicate-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fduplicate-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"duplicate-record","title":"DUPLICATE RECORD","slug":"/commands/duplicate-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISPLAY RECORD","permalink":"/docs/fr/commands/display-record"},"next":{"title":"GOTO RECORD","permalink":"/docs/fr/commands/goto-record"}}'),t=r("785893"),d=r("250065");let i={id:"duplicate-record",title:"DUPLICATE RECORD",slug:"/commands/duplicate-record",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DUPLICATE RECORD"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de l'enregistrement \xe0 dupliquer ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DUPLICATE RECORD"})," duplique l'enregistrement courant de ",(0,t.jsx)(n.em,{children:"laTable"}),". Ce nouvel enregistrement devient l'enregistrement courant. S'il n'y a pas d'enregistrement courant, ",(0,t.jsx)(n.strong,{children:"DUPLICATE RECORD"})," ne fait rien. Appelez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})," pour sauvegarder le nouvel enregistrement."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DUPLICATE RECORD"})," peut \xeatre ex\xe9cut\xe9 pendant la saisie des donn\xe9es. Vous pouvez donc dupliquer l'enregistrement qui est affich\xe9 \xe0 l'\xe9cran. N'oubliez pas que vous devez d'abord appeler ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})," si vous voulez sauvegarder les modifications apport\xe9es \xe0 l'enregistrement original."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"225"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);