"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61511"],{520682:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/table-name","title":"Table name","description":"Table name ( numTable\xa0|\xa0ptrTable ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/table-name.md","sourceDirName":"commands-legacy","slug":"/commands/table-name","permalink":"/docs/fr/20-R8/commands/table-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"table-name","title":"Table name","slug":"/commands/table-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table","permalink":"/docs/fr/20-R8/commands/table"},"next":{"title":"Texte multistyle","permalink":"/docs/fr/20-R8/commands/theme/Styled-Text"}}'),r=t("785893"),l=t("250065");let a={id:"table-name",title:"Table name",slug:"/commands/table-name",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table name"})," ( numTable\xa0|\xa0ptrTable ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numTable\xa0|\xa0ptrTable"}),(0,r.jsx)(n.td,{children:"Entier long, Pointeur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de table ou pointeur de table"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de la table"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table name"})," retourne le nom de la table dont le num\xe9ro ou le pointeur a \xe9t\xe9 pass\xe9 dans ",(0,r.jsx)(n.em,{children:"numTable"})," ou ",(0,r.jsx)(n.em,{children:"ptrTable"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["La m\xe9thode suivante est un exemple de m\xe9thode g\xe9n\xe9rique qui affiche les enregistrements d'une table. La r\xe9f\xe9rence \xe0 la table est pass\xe9e en tant que pointeur vers la table. La commande ",(0,r.jsx)(n.strong,{children:"Table name"})," est utilis\xe9e pour inclure le nom de la table dans la barre de titre de la fen\xeatre :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet AFFICHER SELECTION COURANTE\n\xa0\xa0// AFFICHER SELECTION COURANTE (Pointeur)\n\xa0\xa0// AFFICHER SELECTION COURANTE (->[Table] )\n\xa0\n\xa0SET WINDOW TITLE(" Enregistrements pour "+Table name($1))\xa0// Fixer le titre de la fen\xeatre\n\xa0DISPLAY SELECTION($1->)\xa0// Afficher la s\xe9lection\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/field-name",children:"Field name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-table-number",children:"Last table number"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/table",children:"Table"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"256"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);