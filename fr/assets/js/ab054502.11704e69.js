"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63576],{526863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(474848),t=s(28453);const i={id:"listbox-set-array",title:"LISTBOX SET ARRAY",slug:"/commands/listbox-set-array",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/listbox-set-array",title:"LISTBOX SET ARRAY",description:"LISTBOX SET ARRAY ( { ;} objet ; typeTab ; ptrTab* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-array.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-set-array",permalink:"/docs/fr/commands/listbox-set-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-set-array",title:"LISTBOX SET ARRAY",slug:"/commands/listbox-set-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SELECT ROWS",permalink:"/docs/fr/commands/listbox-select-rows"},next:{title:"LISTBOX SET AUTO ROW HEIGHT",permalink:"/docs/fr/commands/listbox-set-auto-row-height"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET ARRAY"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"typeTab"})," ; ",(0,r.jsx)(n.em,{children:"ptrTab"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeTab"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type de tableau"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ptrTab"}),(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tableau \xe0 associer \xe0 la propri\xe9t\xe9"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement avec les list box de type tableau."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LISTBOX SET ARRAY"})," vous permet d\u2019associer un tableau de type ",(0,r.jsx)(n.em,{children:"typeTab"})," \xe0 la list box ou \xe0 la colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Des tableaux de style, de couleur, de couleur de fond ou de contr\xf4le des lignes peuvent \xe9galement \xeatre associ\xe9s aux list box de type tableau via la Liste des propri\xe9t\xe9s en mode D\xe9veloppement."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Vous pouvez d\xe9signer comme param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," une list box ou une colonne de list box."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"typeTab"}),' le type de tableau \xe0 associer \xe0 la list box ou \xe0 la colonne. Vous pouvez utiliser une des constantes suivantes du th\xe8me "',(0,r.jsx)(n.em,{children:"List box"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk background color array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk control array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk font color array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row height array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"(Licence 4D View Pro requise)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk style array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"ptrTab"})," un pointeur vers le tableau \xe0 utiliser pour prendre en charge le type de propri\xe9t\xe9."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez r\xe9utiliser le tableau de couleurs de police de la colonne 4 pour la colonne 10 :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0// r\xe9cup\xe9rer un pointeur vers le tableau de la colonne 4\n\xa0$Pointer:=LISTBOX Get array(*;"Col4";lk font color array)\n\xa0\xa0\xa0\xa0\xa0// v\xe9rification qu\u2019il existe\n\xa0If(Not(Nil($Pointer)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//report sur la colonne 10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous voulez associer un tableau de hauteurs de ligne \xe0 une list box :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," : La propri\xe9t\xe9 de list box ",(0,r.jsx)(n.strong,{children:"Tableau hauteurs lignes"})," n\xe9cessite la licence 4D View Pro. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,r.jsx)(n.em,{children:"4D View Pro"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(296540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);