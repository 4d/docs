"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8177"],{432123:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-get-columns","title":"WP Table get columns","description":"WP Table get columns ( objCible ) | ( refTableau ; debutCol {; nbCols} )  -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-get-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-get-columns","permalink":"/docs/fr/WritePro/commands/wp-table-get-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-get-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-get-columns","title":"WP Table get columns","slug":"/WritePro/commands/wp-table-get-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get cells","permalink":"/docs/fr/WritePro/commands/wp-table-get-cells"},"next":{"title":"WP Table get rows","permalink":"/docs/fr/WritePro/commands/wp-table-get-rows"}}'),t=l("785893"),r=l("250065");let i={id:"wp-table-get-columns",title:"WP Table get columns",slug:"/WritePro/commands/wp-table-get-columns",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Table get columns"})," ( ",(0,t.jsx)(n.em,{children:"objCible"})," ) | ( ",(0,t.jsx)(n.em,{children:"refTableau"})," ; ",(0,t.jsx)(n.em,{children:"debutCol"})," {; ",(0,t.jsx)(n.em,{children:"nbCols"}),"} )  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objCible"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refTableau"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"debutCol"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position de la premi\xe8re colonne"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbCols"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de colonnes \xe0 lire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nouvelle plage contenant les colonnes s\xe9lectionn\xe9es"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WP Table get columns"})," retourne un nouvel objet plage cellule contenant la s\xe9lection de colonnes de objCible ou de ",(0,t.jsx)(n.em,{children:"refTableau"})," (d\xe9finies par ",(0,t.jsx)(n.em,{children:"debutCol"})," et ",(0,t.jsx)(n.em,{children:"nbCols"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Passez soit :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"objCible :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,t.jsx)(n.li,{children:"un \xe9l\xe9ment (ligne / paragraphe / corps / en-t\xeate / pied / image en ligne / section / sous-section), ou"}),"\n",(0,t.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Si objCible n'intersecte pas une plage de tableau ou de texte l\xe0 o\xf9 une s\xe9lection de colonnes peut \xeatre r\xe9cup\xe9r\xe9e, la commande retourne Null."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OU"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"refTableau"})," - la r\xe9f\xe9rence du tableau contenant la s\xe9lection de colonnes \xe0 lire."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"debutCol"})," - pointe vers la premi\xe8re colonne du tableau \xe0 retourner, et"]}),"\n",(0,t.jsxs)(n.li,{children:["(optionnel) ",(0,t.jsx)(n.em,{children:"nbCols"})," - indique le nombre de colonnes \xe0 retourner. Si nbCols est omis, l'unique colonne de ",(0,t.jsx)(n.em,{children:"debutCol"})," est retourn\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"debutCol"})," plus ",(0,t.jsx)(n.em,{children:"nbCols"})," exc\xe8de le nombre de colonnes dans ",(0,t.jsx)(n.em,{children:"refTableau"}),", ou si ",(0,t.jsx)(n.em,{children:"debutCol"})," est plus grand que le nombre de colonnes dans ",(0,t.jsx)(n.em,{children:"refTableau"}),", la plage retourn\xe9e contient le maximum de colonnes."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez modifier des attributs des deux derni\xe8res colonnes du tableau :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cols : Object\n\xa0$wpRange:=WP Create range(WParea;wk start text;wk end text)\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)\n\xa0$wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)\n\xa0$wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)\n\xa0\n\xa0$cols:=WP Table get columns($wpTable;2;2)\n\xa0WP SET ATTRIBUTES($cols;wk background color;0x00E0E0E0;wk text color;"red";wk height;"36pt";wk text align;wk center)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:l(916385).Z+"",width:"373",height:"221"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez obtenir une plage de colonnes \xe0 compter de la 10e jusqu'\xe0 la derni\xe8re :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0WP Table get columns(tableRef;10;MAXLONG)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer les colonnes s\xe9lectionn\xe9es par un utilisateur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $userSelection;$columns : Object\n\xa0\n\xa0$userSelection:=WP Selection range(myWPArea)\n\xa0\n\xa0$columns:=WP Table get columns($userSelection)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-get-cells",children:"WP Table get cells"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},916385:function(e,n,l){l.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return i}});var s=l(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);