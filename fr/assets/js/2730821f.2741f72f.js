"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75145"],{466159:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-insert-rows","title":"WP Table insert rows","description":"WP Table insert rows ( objCible | {refTableau ; numLigne} {; nbLignes} )  -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-insert-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-insert-rows","permalink":"/docs/fr/WritePro/commands/wp-table-insert-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-insert-rows","title":"WP Table insert rows","slug":"/WritePro/commands/wp-table-insert-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table insert columns","permalink":"/docs/fr/WritePro/commands/wp-table-insert-columns"},"next":{"title":"WP TABLE MERGE CELLS","permalink":"/docs/fr/WritePro/commands/wp-table-merge-cells"}}'),i=r("785893"),t=r("250065");let l={id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Table insert rows"})," ( objCible | {",(0,i.jsx)(n.em,{children:"refTableau"})," ; ",(0,i.jsx)(n.em,{children:"numLigne"}),"} {; ",(0,i.jsx)(n.em,{children:"nbLignes"}),"} )  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objCible"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refTableau"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"R\xe9f\xe9rence de tableau"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numLigne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro d'indice de ligne"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nbLignes"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de lignes \xe0 ins\xe9rer (valeur par d\xe9faut = 1)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Plage de lignes du tableau"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"WP Table insert rows"})," ins\xe8re une ou plusieurs lignes dans un tableau 4D Write Pro."]}),"\n",(0,i.jsx)(n.p,{children:"Cette commande prend en charge deux syntaxes :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous passez objCible comme premier param\xe8tre, la commande ins\xe8rera la/les colonne(s) du premier tableau qui intersecte la cible. objCible peut contenir :\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,i.jsx)(n.li,{children:"un \xe9l\xe9ment (ligne / paragraphe / corps / en-t\xeate/ pied / image en ligne / section / sous-section), ou"}),"\n",(0,i.jsx)(n.li,{children:"un document 4D Write Pro."}),"\n"]}),"\nSi objCible n'intersecte pas une plage tableau ou une plage texte l\xe0 o\xf9 des lignes peuvent \xeatre ins\xe9r\xe9es, la commande ne fait rien et retourne Null (aucune erreur n'est g\xe9n\xe9r\xe9e)."]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous passez les param\xe8tres ",(0,i.jsx)(n.em,{children:"refTableau"})," et ",(0,i.jsx)(n.em,{children:"numLigne"}),", la commande ins\xe8rera la/les ligne(s) dans le tableau d\xe9sign\xe9, suivant l'indice de ligne sp\xe9cifi\xe9. Si numLigne est sup\xe9rieur au nombre de lignes dans ",(0,i.jsx)(n.em,{children:"refTableau"}),", les lignes ne sont pas ins\xe9r\xe9es dans le tableau, mais elles y sont annex\xe9es."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre optionnel nbLignes d\xe9finit le nombre de lignes \xe0 ins\xe9rer dans objCible ou ",(0,i.jsx)(n.em,{children:"refTableau"}),". Par d\xe9faut, si ce param\xe8tre est omis, une ligne est ins\xe9r\xe9e."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"R\xe9sultat"})}),"\n",(0,i.jsx)(n.p,{children:"La commande retourne une plage de ligne repr\xe9sentant un ou plusieurs ligne ins\xe9r\xe9es, ou retourne Null si rien n'a \xe9t\xe9 ins\xe9r\xe9."}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Vous souhaitez ins\xe9rer deux lignes \xe0 la fin du tableau ",(0,i.jsx)(n.em,{children:"Invoice"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $row : Object\n\xa0var $table;$row : Object\n\xa0var $rowNum : Integer\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//r\xe9cup\xe8re le tableau "Invoice"\n\xa0\n\xa0If($table#Null)\n\xa0\xa0\xa0\xa0$rowNum:=$table.rowCount+1\xa0//ajoute 1 \xe0 la derni\xe8re ligne pour d\xe9signer l\'emplacement des nouvelles lignes\n\xa0\xa0\xa0\xa0$row:=WP Table insert rows($table;$rowNum;2)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"Cela ins\xe8rera les deux nouvelles lignes \xe0 l'emplacement souhait\xe9 :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(968032).Z+"",width:"826",height:"434"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-insert-columns",children:"WP Table insert columns"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},968032:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4680266.en-262689e127dc7b61f151a8b638b6c043.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);