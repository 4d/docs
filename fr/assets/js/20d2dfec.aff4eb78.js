"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89170"],{765869:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/listbox-get-row-color","title":"LISTBOX Get row color","description":"LISTBOX Get row color ( { ;} objet ; ligne {; typeCouleur*} )  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-row-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-color","permalink":"/docs/fr/20-R7/commands/listbox-get-row-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-color.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-row-color","title":"LISTBOX Get row color","slug":"/commands/listbox-get-row-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get property","permalink":"/docs/fr/20-R7/commands/listbox-get-property"},"next":{"title":"LISTBOX Get row color as number","permalink":"/docs/fr/20-R7/commands/listbox-get-row-color-as-number"}}'),o=s("785893"),t=s("250065");let l={id:"listbox-get-row-color",title:"LISTBOX Get row color",slug:"/commands/listbox-get-row-color",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get row color"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objet"})," ; ",(0,o.jsx)(n.em,{children:"ligne"})," {; ",(0,o.jsx)(n.em,{children:"typeCouleur"}),"} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Op\xe9rateur"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, l'objet est un nom d'objet (cha\xeene). Si omis, l'objet est une variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objet"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ligne"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"typeCouleur"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Couleur de police de la listbox (par d\xe9faut) ou couleur de fond de la listbox"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valeur de la couleur"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Cette commande ne fonctionne qu'avec les list box de type tableau."]}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"LISTBOX Get row color"})," retourne la couleur d'une ligne ou d'une cellule dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,o.jsx)(n.em,{children:"objet"})," et ",(0,o.jsx)(n.em,{children:"*"})," en tant que cha\xeene CSS."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez lire la couleur au format entier long de 4 octets, vous devez utiliser la commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Pour plus d'informations sur les formats de couleur, veuillez consulter la description de la commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"*"})," indique que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est un nom d'objet (cha\xeene). Si vous ne passez pas ce param\xe8tre, il indique que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous passez une r\xe9f\xe9rence de variable au lieu d'une chaine. Vous pouvez d\xe9signer une list box ou une colonne de list box dans le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Lorsque le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," d\xe9signe une list box, la commande retourne la couleur de la ligne."]}),"\n",(0,o.jsxs)(n.li,{children:["Lorsque le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," d\xe9signe une colonne de list box, la commande retourne la couleur de la cellule."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Dans ",(0,o.jsx)(n.em,{children:"ligne,"})," passez le num\xe9ro de la ligne dont vous souhaitez lire la couleur."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," La commande ne tient pas compte des \xe9tats cach\xe9/visible des lignes de la list box."]}),"\n",(0,o.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,o.jsx)(n.em,{children:"typeCouleur"}),', vous pouvez passer la constante lk couleur de fond ou lk couleur de police (th\xe8me "',(0,o.jsx)(n.em,{children:"List box"}),"\") afin d'identifier la couleur de fond ou de police de la ligne. Si vous omettez ce param\xe8tre, la couleur de la police est retourn\xe9e."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Attention :"})," Une couleur affect\xe9e \xe0 une ligne ne s'affiche pas n\xe9cessairement dans chaque cellule de la ligne (voir l'exemple). Si des valeurs de couleurs qui sont en conflit sont param\xe9tr\xe9es \xe0 l'aide des propri\xe9t\xe9s des list box ou des colonnes de list box, un ordre de priorit\xe9 est appliqu\xe9. Pour plus d'informations, veuillez consulter le manuel ",(0,o.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:"Consid\xe9rons la list box suivante :"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(540073).Z+"",width:"363",height:"122"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $vtColor;$vtColor2;$vtColor3 : Text\n\xa0$vtColor:=LISTBOX Get row color(*;"Col5";3)\n\xa0$vtColor2:=LISTBOX Get row color(*;"List Box";3)\n\xa0$vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)\n\xa0\xa0// $vtColor contient "#FFFF00" (jaune)\n\xa0\xa0// $vtColor2 contient\xa0"#0000FF" (bleu)\n\xa0\xa0// $vtColor3 contient\xa0"#FF0000" (rouge)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})}),"\n",(0,o.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"1658"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},540073:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let o={},t=r.createContext(o);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);