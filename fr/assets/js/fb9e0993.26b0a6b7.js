"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16394"],{10023:function(e,n,s){s.r(n),s.d(n,{default:()=>b,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/last-table-number","title":"Last table number","description":"Last table number  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/last-table-number.md","sourceDirName":"commands-legacy","slug":"/commands/last-table-number","permalink":"/docs/fr/20-R7/commands/last-table-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-table-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"last-table-number","title":"Last table number","slug":"/commands/last-table-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last field number","permalink":"/docs/fr/20-R7/commands/last-field-number"},"next":{"title":"PAUSE INDEXES","permalink":"/docs/fr/20-R7/commands/pause-indexes"}}'),l=s("785893"),a=s("250065");let r={id:"last-table-number",title:"Last table number",slug:"/commands/last-table-number",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Last table number"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de table le plus \xe9lev\xe9 dans la base"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Last table number"})," retourne le num\xe9ro de table le plus \xe9lev\xe9 parmi les tables de la base.",(0,l.jsx)(n.br,{}),"\nLes tables sont num\xe9rot\xe9es dans l\u2019ordre dans lequel elles ont \xe9t\xe9 cr\xe9\xe9es. Si aucune table n\u2019a \xe9t\xe9 supprim\xe9e dans la base, cette commande retourne donc le nombre de tables pr\xe9sentes dans la base. Dans le cadre de boucles it\xe9ratives sur les num\xe9ros de tables de la base, vous devez utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-table-number-valid",children:"Is table number valid"})," afin de v\xe9rifier que la table n\u2019a pas \xe9t\xe9 supprim\xe9e."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"L\u2019exemple suivant initialise les \xe9l\xe9ments du tableau tabTables. Ce tableau peut \xeatre utilis\xe9 comme liste d\xe9roulante (ou onglets, zone de d\xe9filement, etc.) pour afficher dans un formulaire la liste des tables de la base :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabTables;Lire numero derniere table)\n\xa0If(Last table number>0)\xa0//si la base contient bien des tables\n\xa0\xa0\xa0\xa0For($vlTables;Size of array(tabTables);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTables))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0tabTables{$vlTables}:=Table name($vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(tabTables;$vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/last-field-number",children:"Last field number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-table-number-valid",children:"Is table number valid"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"254"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function b(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let l={},a=t.createContext(l);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);