"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6811"],{37614:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-split-cells","title":"WP TABLE SPLIT CELLS","description":"WP TABLE SPLIT CELLS ( targetObj ) | ( tableRef ; startColumn ; startRow {; columnCount{; rowCount}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-split-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-split-cells","permalink":"/docs/fr/20-R7/WritePro/commands/wp-table-split-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-split-cells.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-split-cells","title":"WP TABLE SPLIT CELLS","slug":"/WritePro/commands/wp-table-split-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table range","permalink":"/docs/fr/20-R7/WritePro/commands/wp-table-range"},"next":{"title":"WP Text range","permalink":"/docs/fr/20-R7/WritePro/commands/wp-text-range"}}'),r=t("785893"),l=t("250065");let i={id:"wp-table-split-cells",title:"WP TABLE SPLIT CELLS",slug:"/WritePro/commands/wp-table-split-cells",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function u(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," ( ",(0,r.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,r.jsx)(n.em,{children:"tableRef"})," ; ",(0,r.jsx)(n.em,{children:"startColumn"})," ; ",(0,r.jsx)(n.em,{children:"startRow"})," {; ",(0,r.jsx)(n.em,{children:"columnCount"}),"{; ",(0,r.jsx)(n.em,{children:"rowCount"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableRef"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startColumn"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Position of first cell column"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startRow"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Position of first column row"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of columns to split"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of rows to split"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," fractionne la s\xe9lection intersect\xe9e de cellules contenues dans ",(0,r.jsx)(n.em,{children:"targetObj"})," ou ",(0,r.jsx)(n.em,{children:"tableRef"})," (d\xe9fini par ",(0,r.jsx)(n.em,{children:"startColumn"}),", ",(0,r.jsx)(n.em,{children:"startRow"}),", ",(0,r.jsx)(n.em,{children:"columnCount"}),", et ",(0,r.jsx)(n.em,{children:"rowCount"}),"). Une cellule ne sera fractionn\xe9e que si elle a d\xe9j\xe0 \xe9t\xe9 fusionn\xe9e horizontalement, verticalement ou les deux ; dans le cas contraire, la cellule ne sera pas modifi\xe9e."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez passer soit :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"targetObj:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,r.jsx)(n.li,{children:"un \xe9l\xe9ment (tableau / ligne / corps / paragraphe / image ancr\xe9e / en-t\xeate / pied / section / sous-section), ou"}),"\n",(0,r.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"targetObj"})," ne croise pas un tableau ou une plage de texte o\xf9 une s\xe9lection de cellules peut \xeatre r\xe9cup\xe9r\xe9e, la commande ne fait rien."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"targetObj"})," croise une ou plusieurs cellules qui n'ont pas \xe9t\xe9 fusionn\xe9es auparavant, la commande ",(0,r.jsx)(n.strong,{children:"WP TABLE SPLIT CELLS"})," ne fait rien."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OU"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["startColumn et ",(0,r.jsx)(n.em,{children:"startRow"})," - d\xe9finissent les coordonn\xe9es gauche-haut de la premi\xe8re cellule \xe0 fractionner."]}),"\n",(0,r.jsx)(n.li,{children:"columnCount et rowCount (facultatif) - sp\xe9cifie respectivement le nombre de colonnes et le nombre de lignes \xe0 fractionner."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Si rowCount est omis, cela \xe9quivaut \xe0 passer 1 (valeur par d\xe9faut). Si columnCount et rowCount sont tous deux omis, cela \xe9quivaut \xe0 fractionner une seule cellule, et si elle n'a pas \xe9t\xe9 fusionn\xe9e auparavant, rien ne se produit."}),"\n",(0,r.jsxs)(n.p,{children:["Si startColumn plus ColumnCount ou ",(0,r.jsx)(n.em,{children:"startRow"})," plus rowCount d\xe9passe le nombre de colonnes/lignes dans tableRef, ou si startColumn ou ",(0,r.jsx)(n.em,{children:"startRow"})," est sup\xe9rieur au nombre de colonnes/lignes dans tableRef, la plage renvoy\xe9e contient le maximum de colonnes/lignes possibles, ce qui signifie que chaque cellule du tableau (si elle a \xe9t\xe9 fusionn\xe9e auparavant) est fractionn\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant consiste \xe0 d\xe9signer une plage de cellules (qui contient des cellules d\xe9j\xe0 fusionn\xe9es) et \xe0 la fractionner :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0WP TABLE SPLIT CELLS($table;3;2;1;1)\n\xa0\xa0//or\n\xa0$cells:=WP Table get cells($table;3;2;1;1)\n\xa0WP TABLE SPLIT CELLS($cells)\n"})}),"\n",(0,r.jsx)(n.p,{children:"R\xe9sultat :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(983955).Z+"",width:"600",height:"96"})}),"\n",(0,r.jsx)(n.p,{children:"Les donn\xe9es de la cellule d\xe9j\xe0 fusionn\xe9e sont toutes conserv\xe9es dans la premi\xe8re cellule ( premi\xe8re en haut \xe0 gauche) apr\xe8s le fractionnement, les autres cellules r\xe9sultant du fractionnement restent vides."}),"\n",(0,r.jsxs)(n.p,{children:["Pour plus de d\xe9tails, veuillez consulter ",(0,r.jsx)(n.em,{children:"Fusionner et fractionner des cellules"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Manipuler des tableaux"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-table-merge-cells",children:"WP TABLE MERGE CELLS"})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},983955:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);