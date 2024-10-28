"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46959],{539349:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(474848),t=s(28453);const r={id:"listbox-select-break",title:"LISTBOX SELECT BREAK",slug:"/commands/listbox-select-break",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/listbox-select-break",title:"LISTBOX SELECT BREAK",description:"LISTBOX SELECT BREAK ( { ;} objet ; ligne ; colonne {; action*} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-select-break.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-select-break",permalink:"/docs/fr/commands/listbox-select-break",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-break.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-select-break",title:"LISTBOX SELECT BREAK",slug:"/commands/listbox-select-break",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX MOVED ROW NUMBER",permalink:"/docs/fr/commands/listbox-moved-row-number"},next:{title:"LISTBOX SELECT ROW",permalink:"/docs/fr/commands/listbox-select-row"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SELECT BREAK"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"ligne"})," ; ",(0,i.jsx)(n.em,{children:"colonne"})," {; ",(0,i.jsx)(n.em,{children:"action"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Variable (si * omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ligne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de ligne de la rupture"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"colonne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de colonne de la rupture"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Action de s\xe9lection"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX SELECT BREAK"})," permet de s\xe9lectionner des lignes de rupture dans l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),". La list box doit \xeatre affich\xe9e en mode hi\xe9rarchique."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Les lignes de rupture sont ajout\xe9es pour repr\xe9senter la hi\xe9rarchie mais ne correspondent pas \xe0 des lignes de tableaux existantes. Pour d\xe9signer une ligne de rupture \xe0 s\xe9lectionner, vous devez passer dans les param\xe8tres ",(0,i.jsx)(n.em,{children:"ligne"})," et ",(0,i.jsx)(n.em,{children:"colonne"})," des num\xe9ros de ligne et de colonne correspondant \xe0 la premi\xe8re occurrence dans le tableau correspondant. Ces valeurs sont retourn\xe9es par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"})," lorsque l\u2019utilisateur a s\xe9lectionn\xe9 une ligne de rupture. Ce principe est d\xe9taill\xe9 dans le paragraphe \u201cGestion des lignes de rupture\u201d de la section ",(0,i.jsx)(n.em,{children:"List box hi\xe9rarchiques"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"action"}),', s\u2019il est pass\xe9, permet de d\xe9finir l\u2019action de s\xe9lection \xe0 effectuer lorsqu\u2019une s\xe9lection de lignes de rupture existe d\xe9j\xe0 dans la list box. Vous pouvez passer une valeur ou l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,i.jsx)(n.em,{children:"List box"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk add to selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"La ligne s\xe9lectionn\xe9e est ajout\xe9e \xe0 la s\xe9lection existante. Si la ligne d\xe9sign\xe9e appartient d\xe9j\xe0 \xe0 la s\xe9lection existante, la commande ne fait rien."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk remove from selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"La ligne s\xe9lectionn\xe9e est supprim\xe9e de la s\xe9lection existante. Si la ligne d\xe9sign\xe9e n\u2019appartient pas \xe0 la s\xe9lection existante, la commande ne fait rien."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk replace selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["La ligne s\xe9lectionn\xe9e devient la nouvelle s\xe9lection et remplace la s\xe9lection existante. La commande produit le m\xeame effet qu\u2019un clic de l\u2019utilisateur sur une ligne de la list box (l'\xe9v\xe9nement Sur clic n'est toutefois pas g\xe9n\xe9r\xe9). Cette action est effectu\xe9e par d\xe9faut (lorsque le param\xe8tre ",(0,i.jsx)(n.em,{children:"action"})," n\u2019est pas pass\xe9)."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous avez coch\xe9 l'option ",(0,i.jsx)(n.strong,{children:"Cacher surlignage s\xe9lection"})," pour la list box :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["vous devrez g\xe9rer la repr\xe9sentation visuelle des s\xe9lections dans la list box \xe0 l'aide des options d'interface disponibles. Pour plus d'informations sur ce point, veuillez vous reporter au paragraphe ",(0,i.jsx)(n.em,{children:"Personnaliser la repr\xe9sentation des s\xe9lections"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["vous ne pouvez pas surligner les lignes de rupture dans les list box hi\xe9rarchiques dans ce cas (cf. ",(0,i.jsx)(n.em,{children:"Limitation pour les list box hi\xe9rarchiques"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Soient les tableaux suivants repr\xe9sent\xe9s dans une list box :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(254911).A+"",width:"411",height:"231"})}),"\n",(0,i.jsx)(n.p,{children:'Nous souhaitons s\xe9lectionner la ligne de rupture "Normandie" dans la repr\xe9sentation hi\xe9rarchique de ces tableaux :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$ligne:=Find in array(T2;"Normandie")\n\xa0$colonne:=2\n\xa0LISTBOX COLLAPSE(*;"MaListbox")\xa0//contraction de tous les niveaux\n\xa0LISTBOX SELECT BREAK(*;"MaListbox";$ligne;$colonne)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Voici le r\xe9sultat :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(379974).A+"",width:"251",height:"88"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-select-row",children:"LISTBOX SELECT ROW"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},254911:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/pict185052.fr-440c67955b0fba925783794655a3c3c5.png"},379974:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(296540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);