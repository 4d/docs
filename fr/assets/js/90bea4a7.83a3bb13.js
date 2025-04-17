"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87444"],{378250:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-insert-table","title":"WP Insert table","description":"WP Insert table ( objCible ; mode {; miseAJourPlage {; nbCols {; nbLignes}}} ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-insert-table.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-insert-table","permalink":"/docs/fr/WritePro/commands/wp-insert-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-table.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-insert-table","title":"WP Insert table","slug":"/WritePro/commands/wp-insert-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert picture","permalink":"/docs/fr/WritePro/commands/wp-insert-picture"},"next":{"title":"WP Is font style supported","permalink":"/docs/fr/WritePro/commands/wp-is-font-style-supported"}}'),t=s("785893"),l=s("250065");let i={id:"wp-insert-table",title:"WP Insert table",slug:"/WritePro/commands/wp-insert-table",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Insert table"})," ( ",(0,t.jsx)(n.em,{children:"objCible"})," ; ",(0,t.jsx)(n.em,{children:"mode"})," {; ",(0,t.jsx)(n.em,{children:"miseAJourPlage"})," {; ",(0,t.jsx)(n.em,{children:"nbCols"})," {; ",(0,t.jsx)(n.em,{children:"nbLignes"}),"}}} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objCible"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mode"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mode d'insertion"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"miseAJourPlage"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mode de mise \xe0 jour de la plage de s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbCols"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de colonnes \xe0 cr\xe9er dans le tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbLignes"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de lignes \xe0 cr\xe9er dans le tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet listant les propri\xe9t\xe9s du tableau"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WP Insert table"})," ins\xe8re un nouveau tableau dans la plage ",(0,t.jsx)(n.em,{children:"objCible"})," en fonction du ",(0,t.jsx)(n.em,{children:"mode"})," d'insertion sp\xe9cifi\xe9 et retourne le nouvel objet correspondant. Optionnellement, vous pouvez passer le param\xe8tre ",(0,t.jsx)(n.em,{children:"miseAJourPlage"})," ainsi qu'un nombre pr\xe9d\xe9fini de colonnes et de lignes dans ",(0,t.jsx)(n.em,{children:"nbCols"})," et ",(0,t.jsx)(n.em,{children:"nbLignes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"objCible"}),", passez :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,t.jsx)(n.li,{children:"un \xe9l\xe9ment (tableau / paragraphe / corps / en-t\xeate / pied / image en ligne / section / sous-section), ou"}),"\n",(0,t.jsx)(n.li,{children:"un document 4D Write Pro."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si ",(0,t.jsx)(n.em,{children:"objCible"})," est un tableau, le tableau nouvellement ins\xe9r\xe9 remplacera l'ancien tableau ou bien sera ins\xe9r\xe9 avant ou apr\xe8s l'ancien tableau, en fonction du ",(0,t.jsx)(n.em,{children:"mode"})," utilis\xe9. L'insertion d'un tableau dans un autre tableau n'est pas possible (une erreur est retourn\xe9e)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"mode"}),", passez l'une des constantes suivantes pour indiquer le mode d'insertion \xe0 utiliser pour ins\xe9rer le tableau dans le document :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk append"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Ins\xe8re le contenu \xe0 la fin de la cible"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk prepend"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Le contenu est ins\xe9r\xe9 au d\xe9but de la cible"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk replace"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Remplace le contenu de la cible"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si objCible est une plage, vous pouvez utiliser le param\xe8tre optionnel miseAJourPlage pour passer l'une des constantes suivantes et indiquer si le tableau ins\xe9r\xe9 fait partie ou non de la plage r\xe9sultante :"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk exclude from range"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Le contenu ins\xe9r\xe9 n'est pas inclus dans la plage mise \xe0 jour"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk include in range"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Le contenu ins\xe9r\xe9 est inclus dans la plage mise \xe0 jour (d\xe9faut)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"miseAJourPlage"}),", par d\xe9faut, le tableau ins\xe9r\xe9 est inclus dans la plage r\xe9sultante."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"objCible"})," n'est pas une plage, miseAJourPlage est ignor\xe9."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"nbCols"})," et ",(0,t.jsx)(n.em,{children:"nbLignes"})," le nombre de colonnes et de lignes du tableau ins\xe9r\xe9. Par d\xe9faut, si ",(0,t.jsx)(n.em,{children:"nbCols"})," et ",(0,t.jsx)(n.em,{children:"nbLignes"})," sont omis, un nouveau tableau avec 0 colonne et 0 ligne est cr\xe9\xe9. Vous pouvez alors ajouter ces \xe9l\xe9ments en utilisant la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-append-row",children:"WP Table append row"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande retourne le nouveau tableau en tant qu'objet, que vous pouvez passer ensuite \xe0 une autre commande tableau 4D Write Pro. Le tableau est cr\xe9\xe9 avec police, bordure, et attributs couleur par d\xe9faut, que vous pouvez personnaliser en utilisant la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Dans un document vide, vous souhaitez ajouter un nouveau tableau avec 3 colonnes et 2 lignes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $WPRange;$WPTable : Object\n\xa0$WPRange:=WP Text range(WParea;wk start text;wk end text)\n\xa0$WPTable:=WP Insert table($WPRange;wk append;wk exclude from range;3;2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(371489).Z+"",width:"578",height:"157"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-append-row",children:"WP Table append row"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},371489:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkIAAACdCAIAAADXMoCEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAUDSURBVHhe7dkxSqRZAIVRF+AaZEQEl2DYmJhq1tCgUo0KGmhqYmODsUswcRHNMGBoODBMbihuQudn/GWcSHjZvZzDRepVWEW9ryiX/vzrbzMzs9DJmJmZBU/GzMwseDJmZmbBkzEzMwvefxn79fsfZmZmWftfxl4BIIqMARBMxgAIJmMABJMxAILJGADBZAyAYDIGQDAZAyCYjAEQTMYACCZjAASTMQCCyRgAwWQMgGAyBkAwGQMgmIwBEEzGAAgmYwAEkzEAgskYAMFkDIBgMgZAMBkDIJiMARBMxgAIJmMABJMxAILJGADBZAyAYDIGQDAZAyCYjAEQTMYACCZjAASTMQCCyRgAwWQMgGAyBkAwGQMgmIwBEEzGAAgmYwAEkzEAgskYAMFkDIBgMgZAMBkDIJiMARBMxgAIJmMABJMxAILJGADBZAyAYDIGQDAZAyCYjAEQTMYACCZjAASTMQCCyRgAwWQMgGAyBkAwGQMgmIwBEEzGAAgmYwAEkzEAgskYAMFkDIBgMgZAMBkDIJiMARBMxgAIJmMABJMxAILJGADBZAyAYDIGQDAZAyCYjAEQTMYACCZjAASTMQCCyRgAwWQMgGAyBkAwGQMgmIwBEEzGAAgmYwAEkzEAgsnY5x4eHn4Domxvb8+P6PLt27f5an4nY5+7v79fWlo6Pz//QZednZ3pnZ0PFLm5uVlZWZkPFPn58+eXL1/mq/mdjH3uLWOPj4/zmRa3t7fTOzsfKDLdd9PX9vlAkYODAxkbIWOtZKyVjLWSsUEfMzZ9PN6epICMtZKxVjI26GPG3HpNZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEy1krGWslYKxkbJGOtZKyVjLWSsUEfMzZ9PN6epICMtZKxVjI26GPGaCJjrWSslYwNkrFWMtbq+vpaxiotFgsZG/GWsc3Nzenlo8nGxsb0zs4Hikzf2dfX1+cDRQ4PD7e2tuar+Z2Mfe7h4WF6+S4uLn7Q5fj4eHpn5wNF9vf3p8vu8vJyPtPi69evOzs7Ly8v8+38Lxn73JSx6Tv709PTfKaFHxVbTfedHxUr+d/YIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA2SsVYy1krGWsnYIBlrJWOtZKyVjA16y9jz8/N8psXd3Z2MVbq6upKxSjI2aMrY2tra7u7u9PLR5Pv378vLy/OBIicnJ6urq/OBIqenp9Pf+Wp+J2Ofu7+/Pzw8nL4F0Ofo6Ghvb28+UGSxWMyP6HJ2djZfze9kDIBgMgZAMBkDIJiMARBMxgAIJmMAxHp9/QdlqOWCWDS1YwAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);