"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35021"],{139874:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-append-row","title":"WP Table append row","description":"WP Table append row ( refTableau ; valeur {; valeur2 ; ... ; valeurN} )  -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-append-row.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-append-row","permalink":"/docs/fr/20-R7/WritePro/commands/wp-table-append-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-append-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-append-row","title":"WP Table append row","slug":"/WritePro/commands/wp-table-append-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET VIEW PROPERTIES","permalink":"/docs/fr/20-R7/WritePro/commands/wp-set-view-properties"},"next":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/fr/20-R7/WritePro/commands/wp-table-delete-columns"}}'),a=t("785893"),d=t("250065");let l={id:"wp-table-append-row",title:"WP Table append row",slug:"/WritePro/commands/wp-table-append-row",displayed_sidebar:"docs"},s=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function u(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP Table append row"})," ( ",(0,a.jsx)(n.em,{children:"refTableau"})," ; ",(0,a.jsx)(n.em,{children:"valeur"})," {; ",(0,a.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"valeurN"}),"} )  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refTableau"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"R\xe9f\xe9rence de tableau"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valeur"}),(0,a.jsx)(n.td,{children:"Text, Number, Time, Date, Picture"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valeur(s) \xe0 fixer dans la ligne"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"R\xe9sultat"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Objet plage ligne"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"WP Table append row"})," ajoute une ligne au tableau ",(0,a.jsx)(n.em,{children:"refTableau"}),", le remplit avec les ",(0,a.jsx)(n.em,{children:"valeur"}),"(s) et retourne l'objet correspondant \xe0 la plage de la ligne."]}),"\n",(0,a.jsxs)(n.p,{children:["La commande ajoute autant de cellules dans la ligne qu'il y a de valeurs dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"valeur"}),". Vous pouvez ajouter n'importe quel nombre de valeurs de diff\xe9rents types ; l'alignement par d\xe9faut dans la cellule d\xe9pend du type de la valeur :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"texte : align\xe9 \xe0 gauche"}),"\n",(0,a.jsx)(n.li,{children:"image : centr\xe9e"}),"\n",(0,a.jsx)(n.li,{children:"autres type (nombres, date, et heure) : align\xe9s \xe0 droite."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Les valeurs de type Tableau ne sont pas support\xe9es."]}),"\n",(0,a.jsx)(n.p,{children:"La commande retourne la nouvelle ligne en tant qu'objet plage de ligne."}),"\n",(0,a.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"Vous souhaitez cr\xe9er un tableau vide et y ajouter plusieurs lignes de taille diff\xe9rente. Vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object\n\xa0$wpRange:=WP Text range(WParea;wk start text;wk end text)\n\xa0$wpTable:=WP Ins\xe9rer tableau($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(676914).Z+"",width:"489",height:"78"})}),"\n",(0,a.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"Dans une facturation, vous souhaitez cr\xe9er un tableau automatiquement rempli avec la s\xe9lection les lignes facture :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange : Object\n\xa0\n\xa0$wpRange:=WP Text range(4DWPArea;wk start text;wk end text)\n\xa0\n\xa0$wpTable:=WP Ins\xe9rer tableau($wpRange;wk append)\xa0//cr\xe9ation du tableau\n\xa0\n\xa0\xa0// on ajoute la ligne d\'en-t\xeate\n\xa0$row:=WP Table append row\xa0($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")\n\xa0WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)\n\xa0\n\xa0\xa0//on utilise simplement un appliquer \xe0 s\xe9lection\n\xa0APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))\n\xa0\n\xa0\xa0//on ajoute une ligne pour le pied\n\xa0$row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))\n\xa0\n\xa0\xa0//on formate le tableau\n\xa0$range:=WP Tableau lire colonne($wpTable;1;5)\n\xa0WP SET ATTRIBUTES($range;wk width;"80pt")\n\xa0WP SET ATTRIBUTES($wpTable;wk font size;10)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(941359).Z+"",width:"802",height:"302"})}),"\n",(0,a.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-insert-table",children:"WP Insert table"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function c(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},676914:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},941359:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict3369663.en-e4c9e8bc6c8de3f5caf6edb37450d228.png"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(667294);let a={},d=r.createContext(a);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);