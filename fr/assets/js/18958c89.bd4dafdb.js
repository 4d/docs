"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65843"],{786320:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/listbox-get-cell-coordinates","title":"LISTBOX GET CELL COORDINATES","description":"LISTBOX GET CELL COORDINATES ( { ;} objet ; colonne ; ligne ; gauche ; haut ; droite ; bas* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/listbox-get-cell-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-cell-coordinates","permalink":"/docs/fr/commands/listbox-get-cell-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-cell-coordinates.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-cell-coordinates","title":"LISTBOX GET CELL COORDINATES","slug":"/commands/listbox-get-cell-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get auto row height","permalink":"/docs/fr/commands/listbox-get-auto-row-height"},"next":{"title":"LISTBOX GET CELL POSITION","permalink":"/docs/fr/commands/listbox-get-cell-position"}}'),d=s("785893"),r=s("250065");let l={id:"listbox-get-cell-coordinates",title:"LISTBOX GET CELL COORDINATES",slug:"/commands/listbox-get-cell-coordinates",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX GET CELL COORDINATES"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objet"})," ; ",(0,d.jsx)(n.em,{children:"colonne"})," ; ",(0,d.jsx)(n.em,{children:"ligne"})," ; ",(0,d.jsx)(n.em,{children:"gauche"})," ; ",(0,d.jsx)(n.em,{children:"haut"})," ; ",(0,d.jsx)(n.em,{children:"droite"})," ; ",(0,d.jsx)(n.em,{children:"bas"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)Si omis, objet est une variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objet"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"colonne"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de colonne"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ligne"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gauche"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e gauche de l'objet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"haut"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e sup\xe9rieure de l\u2019objet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"droite"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e droite de l\u2019objet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bas"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e inf\xe9rieure de l\u2019objet"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"LISTBOX GET CELL COORDINATES"})," retourne dans les variables ou champs ",(0,d.jsx)(n.em,{children:"gauche"}),", ",(0,d.jsx)(n.em,{children:"haut"}),", ",(0,d.jsx)(n.em,{children:"droite"})," et ",(0,d.jsx)(n.em,{children:"bas"})," les coordonn\xe9es (en points) de la cellule d\xe9sign\xe9e par les param\xe8tres ",(0,d.jsx)(n.em,{children:"colonne"})," et ",(0,d.jsx)(n.em,{children:"ligne"})," dans la list box d\xe9finie par ",(0,d.jsx)(n.em,{children:"*"})," et ",(0,d.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene de caract\xe8res). Si vous ne passez pas le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que l'objet est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable de type objet uniquement)."]}),"\n",(0,d.jsxs)(n.p,{children:["Par coh\xe9rence avec la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),", le point d'origine est le coin sup\xe9rieur gauche du formulaire qui contient la cellule. Aussi, les coordonn\xe9es retourn\xe9es sont th\xe9oriques ; elles tiennent compte du d\xe9filement \xe9ventuel de la list box avant son affichage \xe0 l'int\xe9rieur de son cadre. En r\xe9sultat, la cellule peut ne pas \xeatre visible (ou \xeatre visible seulement en partie) \xe0 ses coordonn\xe9es, et ces coordonn\xe9es peuvent se situer au-del\xe0 des limites du formulaire (voire \xeatre n\xe9gatives). Pour savoir si la cellule est visible (et quelle partie) vous devez comparer les coordonn\xe9es retourn\xe9es avec celles de la list box elle-m\xeame, en tenant compte des r\xe8gles suivantes :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Les limites des cellules d\xe9pendent des coordonn\xe9es de leur list box parente (telles que retourn\xe9es par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"})," pour la list box)."]}),"\n",(0,d.jsx)(n.li,{children:"Les sous-objets en-t\xeate et pied sont affich\xe9s au-dessus du contenu des colonnes : lorsque les coordonn\xe9es d'une cellule coupent celles d'une ligne d'en-t\xeate ou de pied, la cellule n'est pas affich\xe9e \xe0 l'emplacement de l'intersection."}),"\n",(0,d.jsx)(n.li,{children:"Les \xe9l\xe9ments des colonnes verrouill\xe9es sont affich\xe9s au-dessus des \xe9l\xe9ments des colonnes d\xe9filables : lorsque les coordonn\xe9es d'un \xe9l\xe9ment d'une colonne d\xe9filable croisent celles d'un \xe9l\xe9ment d'une colonne verrouill\xe9e, l'\xe9l\xe9ment d\xe9filable n'est pas affich\xe9 \xe0 l'emplacement de l'intersection."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous reporter \xe0 la description de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez afficher un rectangle rouge autour de la cellule s\xe9lectionn\xe9e dans une list box :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET VISIBLE(*;"RedRect";False)\xa0//initialiser un rectangle rouge\n\xa0\xa0//le rectangle est d\xe9j\xe0 d\xe9fini quelque part dans le formulaire\n\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$row)\n\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$row;$x1;$y1;$x2;$y2)\n\xa0OBJECT SET VISIBLE(*;"RedRect";True)\n\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(670509).Z+"",width:"549",height:"203"})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1330"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},670509:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);