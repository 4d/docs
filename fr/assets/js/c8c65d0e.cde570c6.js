"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13907"],{355846:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>x,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/listbox-get-property","title":"LISTBOX Get property","description":"LISTBOX Get property ( { ;} objet ; propri\xe9t\xe9* ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-property","permalink":"/docs/fr/commands/listbox-get-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-property","title":"LISTBOX Get property","slug":"/commands/listbox-get-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/fr/commands/listbox-get-print-information"},"next":{"title":"LISTBOX Get row color","permalink":"/docs/fr/commands/listbox-get-row-color"}}'),l=s("785893"),t=s("250065");let i={id:"listbox-get-property",title:"LISTBOX Get property",slug:"/commands/listbox-get-property",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Propri\xe9t\xe9 dont vous souhaitez conna\xeetre la valeur"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Text, Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valeur courante"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retourne la valeur courante de la ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," de list box ou de colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Si la list box ou la colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"})," n'existe pas, la commande ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retourne -1 pour les propri\xe9t\xe9s num\xe9riques ou une cha\xeene vide."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," une constante indiquant la propri\xe9t\xe9 \xe0 lire. Vous pouvez passer l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,l.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk display hor scrollbar"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk display ver scrollbar"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk footer height"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"9"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk header height"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-headers-height",children:"LISTBOX Get headers height"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk hor scrollbar position"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"6"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-get-scroll-position",children:"OBJECT GET SCROLL POSITION"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_o_lk ver scrollbar position"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"7"}),(0,l.jsxs)(n.td,{children:["***Constante obsol\xe8te*** Utiliser la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-get-scroll-position",children:"OBJECT GET SCROLL POSITION"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk allow wordwrap"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"14"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Retour \xe0 la ligne"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk non (0)lk oui (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk background color expression"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"22"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression couleur de fond"})," des list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column max width"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"26"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Largeur maxi"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column min width"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"25"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Largeur mini"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column resizable"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"15"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Redimensionnable"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk detail form name"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"19"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Nom formulaire d\xe9taill\xe9"})," pour les list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display footer"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"8"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Afficher pieds"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0) : masqu\xe9lk yes (1) : affich\xe9"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display header"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 **Afficher en-t\xeates",(0,l.jsx)(n.br,{}),"**S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0) : masqu\xe9lk yes (1) : affich\xe9"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display type"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"21"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Type d'affichage"})," pour les colonnes num\xe9riques",(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk numeric format (0)lk three states checkbox (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk double click on row"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"18"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Double-clic sur ligne"})," des list box de type s\xe9lection ",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk ne rien faire (0) : n'effectue aucune action automatiquelk modifier enregistrement (1) : affiche l'enregistrement correspondant en mode lecture \xe9criturelk afficher enregistrement (2) : affiche l'enregistrement correspondant en mode lecture seule"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk extra rows"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"13"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Masquer lignes vides finales"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk display (0)lk hide (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font color expression"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"23"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression couleur de police"})," des list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font style expression"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"24"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Expression style"})," des list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hide selection highlight"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"16"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Masquer surlignage s\xe9lection"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk highlight set"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"27"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Ensemble surlignage"})," des list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hor scrollbar height"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"Hauteur en pixels"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk multi style"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"30"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Multistyle"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : Colonne*",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk named selection"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"28"}),(0,l.jsxs)(n.td,{children:["Nom de la ",(0,l.jsx)(n.strong,{children:"S\xe9lection temporaire"})," pour une list box de type s\xe9lection",(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk resizing mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"11"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Redimensionnement colonnes auto"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk manual (0)lk automatic (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk row height unit"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"17"}),(0,l.jsxs)(n.td,{children:["Unit\xe9 de la propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Hauteur des lignes"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk pixels (0)lk lines (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk selection mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Mode de s\xe9lection"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk none (0)lk single (1)lk mulltiple (2)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk single click edit"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"29"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Saisie sur clic unique"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk sortable"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"20"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Triable"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk truncate"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"12"}),(0,l.jsxs)(n.td,{children:["Propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"Tronquer avec ellipse"}),(0,l.jsx)(n.br,{}),"S'applique \xe0 : List box ou Colonne",(0,l.jsx)(n.br,{}),"Valeurs possibles :lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk ver scrollbar width"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"Largeur en pixels"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["*Cette propri\xe9t\xe9 est applicable aux colonnes de list box uniquement ; si vous passez une list box en param\xe8tre, ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retournera -1 ou une cha\xeene vide, suivant la ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["En g\xe9n\xe9ral, pour signaler un r\xe9sultat invalide ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retournera -1 pour les propri\xe9t\xe9s \xe0 valeur num\xe9rique, ou une cha\xeene vide pour les autres. Aucune erreur n'est g\xe9n\xe9r\xe9e. Cela peut se produire notamment dans les cas suivants :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si vous passez une ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," qui n'existe pas"]}),"\n",(0,l.jsxs)(n.li,{children:["Si vous passez une ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," qui n'est pas disponible pour la list box ou la colonne sp\xe9cifi\xe9e (par exemple lk font color expression appliqu\xe9e \xe0 une list box de type tableau)"]}),"\n",(0,l.jsxs)(n.li,{children:["Si vous passez une colonne en param\xe8tre avec une ",(0,l.jsx)(n.em,{children:"propri\xe9t\xe9"})," de list box ou inversement (voir * ci-dessus)."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["De plus, il n'est pas possible de retourner des valeurs pour plus d'une colonne \xe0 la fois. Si vous utilisez le caract\xe8re \"@\" afin de d\xe9signer plusieurs colonnes, ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retournera la premi\xe8re valeur correspondante trouv\xe9e, elle ne sera donc pas significative."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Les constantes lk display footer et lk display header sont utiles pour calculer la taille de la zone de list box affich\xe9e dans le formulaire."}),"\n",(0,l.jsxs)(n.li,{children:["Lorsque vous utilisez la constante _o_lk hor scrollbar position ou _o_lk ver scrollbar position, la commande retourne la position relative du curseur de d\xe9filement par rapport \xe0 son origine, c\u2019est-\xe0-dire la taille de la partie masqu\xe9e de la fen\xeatre, exprim\xe9e en pixels. Par d\xe9faut, cette position correspond \xe0 0. Combin\xe9e par exemple aux informations relatives \xe0 la hauteur des lignes, cette valeur permet de conna\xeetre le contenu affich\xe9 dans la list box. Ces constantes sont d\xe9sormais obsol\xe8tes et pourront \xeatre avantageusement remplac\xe9es par la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-get-scroll-position",children:"OBJECT GET SCROLL POSITION"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["L'instruction ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"}),"(vLB;_o_lk footer height) retourne la m\xeame valeur que la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," lorsque les pieds sont affich\xe9s. Dans le cas contraire, ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," retourne 0 alors que ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," retourne toujours la hauteur, dans ce cas th\xe9orique, des pieds."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:'Soit une list box "MyListbox", si vous ex\xe9cutez l\u2019instruction suivante :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$selMode:=LISTBOX Get property(*;"MyListbox";lk selection mode)\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"$selMode"})," vaut 0, 1 ou 2 suivant le mode de s\xe9lection courant de la list box."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Soit une list box contenant des lignes d\u2019une hauteur de 20 pixels chacune. Vous ex\xe9cutez l\u2019instruction suivante :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$d\xe9f:=LISTBOX Get information(*;"Listbox";lk ver scrollbar position)\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si, par exemple, $d\xe9f retourne 200, vous pouvez en d\xe9duire que la 11e ligne est actuellement la premi\xe8re affich\xe9e dans la list box (200/20=10, donc 10 lignes sont masqu\xe9es)."}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-property",children:"LISTBOX SET PROPERTY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let l={},t=r.createContext(l);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);