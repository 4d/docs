"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37003"],{640206:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>i,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/selected-record-number","title":"Selected record number","description":"Selected record number {( laTable )} : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selected-record-number.md","sourceDirName":"commands-legacy","slug":"/commands/selected-record-number","permalink":"/docs/fr/commands/selected-record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-record-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selected-record-number","title":"Selected record number","slug":"/commands/selected-record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCAN INDEX","permalink":"/docs/fr/commands/scan-index"},"next":{"title":"TRUNCATE TABLE","permalink":"/docs/fr/commands/truncate-table"}}'),t=r("785893"),d=r("250065");let c={id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Selected record number"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle retourner le num\xe9ro de l'enregistrement courant dans la s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro dans la s\xe9lection"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Selected record number"})," retourne la position de l'enregistrement courant dans la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la s\xe9lection est non vide et si l'enregistrement courant en fait partie, ",(0,t.jsx)(n.strong,{children:"Selected record number"})," retourne une valeur comprise entre ",(0,t.jsx)(n.em,{children:"1"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/records-in-selection",children:"Records in selection"}),". Si la s\xe9lection est vide ou s'il n'y a pas d'enregistrement courant, ",(0,t.jsx)(n.strong,{children:"Selected record number"})," retourne 0."]}),"\n",(0,t.jsxs)(n.p,{children:["Le num\xe9ro de l'enregistrement dans la s\xe9lection est diff\xe9rent du num\xe9ro retourn\xe9 par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/record-number",children:"Record number"})," (",(0,t.jsx)(n.a,{href:"/docs/fr/commands/record-number",children:"Record number"})," retourne le num\xe9ro physique de l'enregistrement dans la table). Le num\xe9ro de l'enregistrement dans la s\xe9lection d\xe9pend de la s\xe9lection courante."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus de pr\xe9cisions sur les num\xe9ros d'enregistrements, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant stocke le num\xe9ro de l'enregistrement courant de la s\xe9lection dans une variable :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Obtenir le num\xe9ro de l'enregistrement dans la s\xe9lection\n\xa0NumEnrCourant:=Selected record number([Personnes])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/records-in-selection",children:"Records in selection"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"246"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);