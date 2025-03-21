"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42423"],{444997:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","description":"LISTBOX SET AUTO ROW HEIGHT ( { ;} objet ; s\xe9lecteur ; valeur ; unit\xe9* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-auto-row-height","permalink":"/docs/fr/20-R7/commands/listbox-set-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-auto-row-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","slug":"/commands/listbox-set-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ARRAY","permalink":"/docs/fr/20-R7/commands/listbox-set-array"},"next":{"title":"LISTBOX SET COLUMN FORMULA","permalink":"/docs/fr/20-R7/commands/listbox-set-column-formula"}}'),i=s("785893"),r=s("250065");let l={id:"listbox-set-auto-row-height",title:"LISTBOX SET AUTO ROW HEIGHT",slug:"/commands/listbox-set-auto-row-height",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET AUTO ROW HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,i.jsx)(n.em,{children:"valeur"})," ; ",(0,i.jsx)(n.em,{children:"unit\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"s\xe9lecteur"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Limite de hauteur \xe0 d\xe9finir : lk hauteur ligne min ou lk hauteur ligne max"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Hauteur de ligne minimum ou maximum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unit\xe9"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valeur d'unit\xe9 de hauteur : 0 = pixels, 1 = lignes"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX SET AUTO ROW HEIGHT"})," vous permet de d\xe9finir une ",(0,i.jsx)(n.em,{children:"valeur"})," de hauteur minimum ou maximum dans l'objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),' : Cette commande est prise en compte uniquement si le mode "hauteur de ligne automatique" (disponible uniquement pour les list box de type "collection ou s\xe9lection d\'entit\xe9" et "tableau") est activ\xe9 (voir ',(0,i.jsx)(n.em,{children:"Hauteur de ligne automatique"}),"). Sinon, elle n'a pas d'effet."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"s\xe9lecteur"}),", passez le type de limite \xe0 d\xe9finir. Vous pouvez utiliser l'une des constantes suivantes du th\xe8me ",(0,i.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk row max height"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"33"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk row min height"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"valeur"}),", passez la valeur correspondante dans l'",(0,i.jsx)(n.em,{children:"unit\xe9"})," appropri\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"unit\xe9"})," peut \xeatre d\xe9fini \xe0 l'aide des constantes suivantes du th\xe8me ",(0,i.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk lines"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"La hauteur d\xe9signe un nombre de lignes. 4D calcule la hauteur d\u2019une ligne en fonction de la police."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk pixels"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"La hauteur est un nombre de pixels (d\xe9faut)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," La commande ne v\xe9rifie pas la coh\xe9rence des valeurs. Cependant, \xe0 l'ex\xe9cution, la valeur minimum sera appliqu\xe9e aux deux valeurs en cas de conflit. Par exemple, si la valeur minimum est 5 lignes et la valeur maximum est 3 lignes (ce qui est incoh\xe9rent), la hauteur maximum des lignes appliqu\xe9e dans la list box sera de 5 lignes."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Dans une list box o\xf9 les hauteurs de lignes sont automatiques, vous voulez d\xe9finir les hauteurs de ligne minimum et maximum :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels)\xa0// hauteur minimale 60 pixels\n\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels)\xa0//hauteur maximale 100 pixels\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1501"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);