"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51601"],{183488:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/listbox-set-property","title":"LISTBOX SET PROPERTY","description":"LISTBOX SET PROPERTY ( { ;} objet ; propri\xe9t\xe9 ; valeur* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-property","permalink":"/docs/fr/commands/listbox-set-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-property.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-property","title":"LISTBOX SET PROPERTY","slug":"/commands/listbox-set-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET LOCKED COLUMNS","permalink":"/docs/fr/commands/listbox-set-locked-columns"},"next":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/fr/commands/listbox-set-row-color"}}'),l=s("785893"),i=s("250065");let t={id:"listbox-set-property",title:"LISTBOX SET PROPERTY",slug:"/commands/listbox-set-property",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX SET PROPERTY"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,l.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si pass\xe9, objet est un nom d'objet (cha\xeene). Si omis, objet est une variable."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Propri\xe9t\xe9 de list box ou de colonne de list box"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valeur"}),(0,l.jsx)(n.td,{children:"Integer, Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"LISTBOX SET PROPERTY"})," permet de d\xe9finir la ",(0,l.jsx)(n.em,{children:"valeur"})," de la ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," de list box ou de colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Si la list box ou la colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"})," n'existe pas, la commande ne fait rien et aucune erreur n'est g\xe9n\xe9r\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," et ",(0,l.jsx)(n.em,{children:"valeur"})," respectivement la propri\xe9t\xe9 \xe0 d\xe9finir ainsi que sa nouvelle valeur. Utilisez les constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,l.jsx)(n.em,{children:"List box"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Valeur"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk allow wordwrap"}),(0,l.jsx)(n.td,{children:"14"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Retour \xe0 la ligne"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk non (0)lk oui (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk auto row height"}),(0,l.jsx)(n.td,{children:"31"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Hauteur de ligne automatique"})," des list box de type tableau",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne",(0,l.jsx)(n.br,{}),"Valeurs possibles : ",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)",(0,l.jsx)(n.strong,{children:"4D View Pro :"})," Cette fonction n\xe9cessite une licence 4D View Pro. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,l.jsx)(n.em,{children:"4D View Pro"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk background color expression"}),(0,l.jsx)(n.td,{children:"22"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression couleur de fond"})," des list box de type s\xe9lection, collection ou entity selection.",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk cell horizontal padding"}),(0,l.jsx)(n.td,{children:"36"}),(0,l.jsxs)(n.td,{children:["Padding horizontal de la cellule en pixels (m\xeame valeur pour le padding gauche et droit)",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box, colonne, en-t\xeate, pied de page"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk cell vertical padding"}),(0,l.jsx)(n.td,{children:"37"}),(0,l.jsxs)(n.td,{children:["Padding vertical de la cellule en pixels (m\xeame valeur pour le padding haut et bas)",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box, colonne, en-t\xeate, pied de page"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column max width"}),(0,l.jsx)(n.td,{children:"26"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Largeur maxi"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column min width"}),(0,l.jsx)(n.td,{children:"25"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Largeur mini"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column resizable"}),(0,l.jsx)(n.td,{children:"15"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Redimensionnable"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk detail form name"}),(0,l.jsx)(n.td,{children:"19"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Nom formulaire d\xe9taill\xe9"})," pour les list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display footer"}),(0,l.jsx)(n.td,{children:"8"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Afficher pieds"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0) : masqu\xe9lk yes (1) : affich\xe9"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display header"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 **Afficher en-t\xeates",(0,l.jsx)(n.br,{}),"**S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0) : masqu\xe9lk yes (1) : affich\xe9"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display type"}),(0,l.jsx)(n.td,{children:"21"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Type d'affichage"})," pour les colonnes num\xe9riques",(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk numeric format (0)lk three states checkbox (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk double click on row"}),(0,l.jsx)(n.td,{children:"18"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Double-clic sur ligne"})," des list box de type s\xe9lection ",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk ne rien faire (0) : n'effectue aucune action automatiquelk modifier enregistrement (1) : affiche l'enregistrement correspondant en mode lecture \xe9criturelk afficher enregistrement (2) : affiche l'enregistrement correspondant en mode lecture seule"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk extra rows"}),(0,l.jsx)(n.td,{children:"13"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Masquer lignes vides finales"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk display (0)lk hide (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font color expression"}),(0,l.jsx)(n.td,{children:"23"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression couleur de police"})," des list box de type s\xe9lection, collection ou entity selection.",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font style expression"}),(0,l.jsx)(n.td,{children:"24"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression style"})," des list box de type s\xe9lection, collection ou entity selection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hide selection highlight"}),(0,l.jsx)(n.td,{children:"16"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Masquer surlignage s\xe9lection"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk highlight set"}),(0,l.jsx)(n.td,{children:"27"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Ensemble surlignage"})," des list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hor scrollbar height"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"Hauteur en pixels"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk meta expression"}),(0,l.jsx)(n.td,{children:"34"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression"})," ",(0,l.jsx)(n.strong,{children:"Meta Info"})," des list box de type collection ou entity selection.",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk movable rows"}),(0,l.jsx)(n.td,{children:"35"}),(0,l.jsxs)(n.td,{children:["La propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Lignes D\xe9pla\xe7ables"})," pour list box de type tableau",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box (hors mode hi\xe9archique) ",(0,l.jsx)(n.br,{}),"Valeurs possibles : lk non (0) : Les lignes ne peuvent pas \xeatre d\xe9plac\xe9es \xe0 l'ex\xe9cution) lk oui (1) : Les lignes peuvent \xeatre d\xe9plac\xe9es \xe0 l'ex\xe9cution (par d\xe9faut)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk multi style"}),(0,l.jsx)(n.td,{children:"30"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Multistyle"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk named selection"}),(0,l.jsx)(n.td,{children:"28"}),(0,l.jsxs)(n.td,{children:["Nom de la ",(0,l.jsx)(n.strong,{children:"S\xe9lection temporaire"})," pour une list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk resizing mode"}),(0,l.jsx)(n.td,{children:"11"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Redimensionnement colonnes auto"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk manual (0)lk automatic (2)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk row height unit"}),(0,l.jsx)(n.td,{children:"17"}),(0,l.jsxs)(n.td,{children:["Unit\xe9 de la propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Hauteur des lignes"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk pixels (0)lk lines (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk selection mode"}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Mode de s\xe9lection"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk none (0)lk single (1)lk mulltiple (2)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk single click edit"}),(0,l.jsx)(n.td,{children:"29"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Saisie sur clic unique"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk sortable"}),(0,l.jsx)(n.td,{children:"20"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Triable"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk truncate"}),(0,l.jsx)(n.td,{children:"12"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Tronquer avec ellipse"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk ver scrollbar width"}),(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"Largeur en pixels"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["*Cette propri\xe9t\xe9 est applicable aux colonnes de list box uniquement ; cependant, si vous passez une list box en param\xe8tre, ",(0,l.jsx)(n.strong,{children:"LISTBOX SET PROPERTY"})," appliquera la ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," \xe0 chaque colonne de la list box."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Si vous passez une ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," qui n'existe pas ou qui n'est pas disponible pour la list box ou la colonne sp\xe9cifi\xe9e (par exemple lk expression syle de police appliqu\xe9e \xe0 une list box de type tableau), la commande ne fait rien et aucune erreur n'est g\xe9n\xe9r\xe9e."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:'Vous souhaitez rendre toutes les colonnes de la list box "MyListbox" redimensionnables :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes)\xa0//Toutes les colonnes sont redimensionnables\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:'Vous souhaitez modifier la largeur maximale de la colonne nomm\xe9e "ProductNumber" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"List box"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-property",children:"LISTBOX Get property"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"1440"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let l={},i=r.createContext(l);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);