"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93295"],{927806:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/one-record-select","title":"ONE RECORD SELECT","description":"ONE RECORD SELECT {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/one-record-select.md","sourceDirName":"commands-legacy","slug":"/commands/one-record-select","permalink":"/docs/fr/20-R8/commands/one-record-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fone-record-select.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"one-record-select","title":"ONE RECORD SELECT","slug":"/commands/one-record-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NEXT RECORD","permalink":"/docs/fr/20-R8/commands/next-record"},"next":{"title":"PREVIOUS RECORD","permalink":"/docs/fr/20-R8/commands/previous-record"}}'),s=r("785893"),i=r("250065");let o={id:"one-record-select",title:"ONE RECORD SELECT",slug:"/commands/one-record-select",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," {( ",(0,s.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"laTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table de laquelle r\xe9duire la s\xe9lection \xe0 un enregistrement"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," r\xe9duit la s\xe9lection courante de ",(0,s.jsx)(n.em,{children:"laTable"})," \xe0 l'enregistrement courant. S'il n'y a pas d'enregistrement courant ou si l'enregistrement courant n'est pas charg\xe9 en m\xe9moire (cas particulier), ",(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," ne fait rien."]}),"\n",(0,s.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:["A l'origine, cette commande \xe9tait utile pour \"replacer\" dans la s\xe9lection courante un enregistrement qui avait \xe9t\xe9 empil\xe9 puis d\xe9pil\xe9 de la pile d'enregistrements pendant que la s\xe9lection de la table \xe9tait modifi\xe9e. Cependant, puisque la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-query-destination",children:"SET QUERY DESTINATION"})," vous permet d'effectuer une recherche sans changer la s\xe9lection ni l'enregistrement courants de la table, vous n'avez plus besoin d'empiler et de d\xe9piler un enregistrement courant pour effectuer une recherche sur sa table. Par cons\xe9quent, ",(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," est moins utile, \xe0 moins que vous ne souhaitiez express\xe9ment, pour une autre raison, r\xe9duire la s\xe9lection d'une table \xe0 l'enregistrement courant."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attention :"})," N'oubliez pas qu'un num\xe9ro d'enregistrement peut \xeatre r\xe9utilis\xe9 si l'enregistrement est supprim\xe9 et qu'un autre enregistrement est cr\xe9\xe9 (voir ",(0,s.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Pr\xe9sentation des S\xe9lections Temporaires"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"189"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,s.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);