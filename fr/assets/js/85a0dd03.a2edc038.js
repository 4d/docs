"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27964"],{295949:function(e,n,d){d.r(n),d.d(n,{default:()=>o,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/field-name","title":"Field name","description":"Field name ( ptrChamp | numTable {; numChamp} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/field-name.md","sourceDirName":"commands-legacy","slug":"/commands/field-name","permalink":"/docs/fr/20-R8/commands/field-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"field-name","title":"Field name","slug":"/commands/field-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Field","permalink":"/docs/fr/20-R8/commands/field"},"next":{"title":"Get external data path","permalink":"/docs/fr/20-R8/commands/get-external-data-path"}}'),a=d("785893"),l=d("250065");let t={id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Field name"})," ( ptrChamp | numTable {; ",(0,a.jsx)(n.em,{children:"numChamp"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ptrChamp | numTable"}),(0,a.jsx)(n.td,{children:"Pointeur, Entier long"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Pointeur vers un champ ou Num\xe9ro de table"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"numChamp"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Num\xe9ro de champ si un num\xe9ro de table est pass\xe9 en premier param\xe8tre"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"R\xe9sultat"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nom du champ"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"Field name"})," retourne le nom du champ dont vous avez pass\xe9 le pointeur dans ",(0,a.jsx)(n.em,{children:"ptrChamp"}),", ou dont vous avez pass\xe9 les num\xe9ros de table et de champ dans ",(0,a.jsx)(n.em,{children:"numTable"})," et ",(0,a.jsx)(n.em,{children:"numChamp"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant assigne au second \xe9l\xe9ment du tableau ChampTableau{1} (ChampTableau \xe9tant un tableau \xe0 deux dimensions) le nom du second champ de la premi\xe8re table :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ChampTableau{1}{2}:=Field name(1;2)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsxs)(n.p,{children:["L'exemple suivant assigne au second \xe9l\xe9ment du tableau ChampTableau{1} (ChampTableau \xe9tant un tableau \xe0 deux dimensions) le nom du champ ",(0,a.jsx)(n.em,{children:"[MaTable]MonChamp"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ChampTableau{1}{2}:=Field name(->[MaTable]MonChamp)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant affiche une bo\xeete de dialogue d'alerte. Nous passons \xe0 cette m\xe9thode un pointeur vers un champ :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Le num\xe9ro du champ "+Field name($1)+" de la table "+Table name(Table($1))+" doit faire plus de cinq caract\xe8res.")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/20-R8/commands/field",children:"Field"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-field-number",children:"Last field number"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/20-R8/commands/table-name",children:"Table name"})]}),"\n",(0,a.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"257"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return t}});var s=d(667294);let a={},l=s.createContext(a);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);