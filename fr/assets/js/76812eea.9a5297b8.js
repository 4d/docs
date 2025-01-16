"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25122"],{841134:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/listbox-collapse","title":"LISTBOX COLLAPSE","description":"LISTBOX COLLAPSE ( { ;} objet {; r\xe9cursive {; s\xe9lecteur {; ligne {; colonne*}}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-collapse.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-collapse","permalink":"/docs/fr/commands/listbox-collapse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-collapse.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-collapse","title":"LISTBOX COLLAPSE","slug":"/commands/listbox-collapse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"List Box","permalink":"/docs/fr/category/list-box"},"next":{"title":"LISTBOX DELETE COLUMN","permalink":"/docs/fr/commands/listbox-delete-column"}}'),t=s("785893"),i=s("250065");let l={id:"listbox-collapse",title:"LISTBOX COLLAPSE",slug:"/commands/listbox-collapse",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX COLLAPSE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," {; ",(0,t.jsx)(n.em,{children:"r\xe9cursive"})," {; ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," {; ",(0,t.jsx)(n.em,{children:"ligne"})," {; ",(0,t.jsx)(n.em,{children:"colonne"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,t.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Variable (si * omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r\xe9cursive"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai = contracter les sous-niveaux, Faux = ne pas contracter les sous-niveaux"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9lecteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Partie de la list box \xe0 contracter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligne"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de la rupture \xe0 contracter ou Num\xe9ro de niveau de la list box \xe0 contracter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"colonne"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de colonne de la rupture \xe0 contracter"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LISTBOX COLLAPSE"})," vous permet de provoquer la contraction des lignes de rupture de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la list box n\u2019est pas configur\xe9e en mode hi\xe9rarchique, la commande ne fait rien. Pour plus d\u2019informations sur les list box h\xe9rarchiques, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"List box hi\xe9rarchiques"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"r\xe9cursive"})," vous permet de param\xe9trer la contraction des sous-niveaux hi\xe9rarchiques de la list box. Passez Vrai ou omettez ce param\xe8tre pour que la commande provoque la contraction de tous les niveaux et tous les sous-niveaux. Si vous passez Faux, seul le premier niveau sera contract\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," vous permet de d\xe9finir la port\xe9e de la commande. Vous pouvez passer dans ce param\xe8tre l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk all"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"La commande agit sur tous les sous-niveaux (valeur par d\xe9faut, utilis\xe9e si le param\xe8tre est omis)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk selection"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"La commande agit sur les sous-niveaux s\xe9lectionn\xe9s."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk break row"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:['La commande agit sur le sous-niveau auquel appartient la "cellule" d\xe9sign\xe9e par les param\xe8tres ',(0,t.jsx)(n.em,{children:"ligne"})," et ",(0,t.jsx)(n.em,{children:"colonne"}),". A noter que ces param\xe8tres repr\xe9sentent les num\xe9ros de ligne et de colonne dans la listbox en mode standard et non dans sa repr\xe9sentation hi\xe9rarchique. Si les param\xe8tres ",(0,t.jsx)(n.em,{children:"ligne"})," et ",(0,t.jsx)(n.em,{children:"colonne"})," sont omis, la commande ne fait rien."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk level"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsxs)(n.td,{children:["La commande agit sur toutes les lignes de rupture correspondant \xe0 la colonne ",(0,t.jsx)(n.em,{children:"niveau"}),". Ce param\xe8tre d\xe9signe un num\xe9ro de colonne dans la listbox en mode standard et non dans sa repr\xe9sentation hi\xe9rarchique. Si le param\xe8tre ",(0,t.jsx)(n.em,{children:"niveau"})," est omis, la commande ne fait rien."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Si la s\xe9lection ou la list box ne contient pas de ligne de rupture, ou si toutes les lignes de rupture sont d\xe9j\xe0 contract\xe9es, la commande ne fait rien."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple contracte le premier niveau de lignes de rupture de la s\xe9lection de la list box :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX COLLAPSE(*;"MaListbox";False;lk selection)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-expand",children:"LISTBOX EXPAND"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1101"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);