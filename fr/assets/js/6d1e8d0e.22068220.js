"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57922"],{900929:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/table-fragmentation","title":"Table fragmentation","description":"Table fragmentation ( laTable ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/table-fragmentation.md","sourceDirName":"commands-legacy","slug":"/commands/table-fragmentation","permalink":"/docs/fr/commands/table-fragmentation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-fragmentation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"table-fragmentation","title":"Table fragmentation","slug":"/commands/table-fragmentation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Structure file","permalink":"/docs/fr/commands/structure-file"},"next":{"title":"USE ENTITY SELECTION","permalink":"/docs/fr/commands/use-entity-selection"}}'),a=t("785893"),s=t("250065");let i={id:"table-fragmentation",title:"Table fragmentation",slug:"/commands/table-fragmentation",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Table fragmentation"})," ( ",(0,a.jsx)(n.em,{children:"laTable"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"laTable"}),(0,a.jsx)(n.td,{children:"Table"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Table de laquelle conna\xeetre le taux de fragmentation"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"R\xe9sultat"}),(0,a.jsx)(n.td,{children:"Real"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Pourcentage de fragmentation"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"Table fragmentation"})," retourne le pourcentage de fragmentation logique des enregistrements de la table d\xe9sign\xe9e par le param\xe8tre ",(0,a.jsx)(n.em,{children:"laTable"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Le taux de fragmentation logique des enregistrements indique si les enregistrements sont stock\xe9s de mani\xe8re ordonn\xe9e dans le fichier de donn\xe9es. Une fragmentation trop \xe9lev\xe9e peut ralentir sensiblement les tris et les recherches s\xe9quentiels sur la table. Un pourcentage de fragmentation de 0 correspond \xe0 une fragmentation nulle. Au-del\xe0 de 20 %, il peut \xeatre int\xe9ressant de proc\xe9der au compactage du fichier de donn\xe9es."}),"\n",(0,a.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(n.p,{children:"Cette m\xe9thode de maintenance permet de demander le compactage du fichier de donn\xe9es en cas de fragmentation importante d\u2019au moins une table de la base :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ACompacter:=False\n\xa0For($i;1;Last table number)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Table fragmentation(Table($i)->)>20)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ACompacter:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0If(ACompacter)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Poser un marqueur de demande de compactage\n\xa0End if\n"})}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/fr/commands/compact-data-file",children:"Compact data file"})}),"\n",(0,a.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"1127"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);