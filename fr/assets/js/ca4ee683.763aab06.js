"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1040"],{689183:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-get-sorts","title":"QR GET SORTS","description":"QR GET SORTS ( zone ; tabColonnes ; tabTris )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-sorts.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-sorts","permalink":"/docs/fr/commands/qr-get-sorts","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-sorts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-sorts","title":"QR GET SORTS","slug":"/commands/qr-get-sorts","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET SELECTION","permalink":"/docs/fr/commands/qr-get-selection"},"next":{"title":"QR Get text property","permalink":"/docs/fr/commands/qr-get-text-property"}}'),r=s("785893"),i=s("250065");let d={id:"qr-get-sorts",title:"QR GET SORTS",slug:"/commands/qr-get-sorts",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Etats tableaux crois\xe9s",id:"etats-tableaux-crois\xe9s",level:5},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR GET SORTS"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ; ",(0,r.jsx)(n.em,{children:"tabColonnes"})," ; ",(0,r.jsx)(n.em,{children:"tabTris"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabColonnes"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Colonnes tri\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabTris"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Ordres de tris"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR GET SORTS"})," remplit deux tableaux r\xe9els :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"tabColonnes"}),(0,r.jsx)(n.br,{}),"\nCe tableau contient toutes les colonnes auxquelles un ordre de tri a \xe9t\xe9 associ\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"tabTris"}),(0,r.jsx)(n.br,{}),"\nChaque \xe9l\xe9ment de ce tableau fournit l'ordre de tri courant de la colonne correspondante.",(0,r.jsx)(n.br,{}),"\n- si ",(0,r.jsx)(n.em,{children:"tabTris{$i}"})," vaut 1, le tri est croissant.",(0,r.jsx)(n.br,{}),"\n- si ",(0,r.jsx)(n.em,{children:"tabTris{$i}"})," vaut -1, le tri est d\xe9croissant."]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"etats-tableaux-crois\xe9s",children:"Etats tableaux crois\xe9s"}),"\n",(0,r.jsxs)(n.p,{children:["Avec ce type d'\xe9tat, les tableaux ne peuvent pas comporter plus de deux \xe9l\xe9ments puisque les tris ne peuvent \xeatre effectu\xe9s que sur les colonnes (1) et les lignes (2) (valeurs pour ",(0,r.jsx)(n.em,{children:"tabColonnes"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-set-sorts",children:"QR SET SORTS"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"753"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);