"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96825],{74771:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var l=s(474848),t=s(28453);const a={id:"array-boolean",title:"ARRAY BOOLEAN",slug:"/commands/array-boolean",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/array-boolean",title:"ARRAY BOOLEAN",description:"ARRAY BOOLEAN ( nomTableau ; taille {; taille2} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-boolean.md",sourceDirName:"commands-legacy",slug:"/commands/array-boolean",permalink:"/docs/fr/commands/array-boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-boolean.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"array-boolean",title:"ARRAY BOOLEAN",slug:"/commands/array-boolean",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ARRAY BLOB",permalink:"/docs/fr/commands/array-blob"},next:{title:"ARRAY DATE",permalink:"/docs/fr/commands/array-date"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"ARRAY BOOLEAN"})," ( ",(0,l.jsx)(n.em,{children:"nomTableau"})," ; ",(0,l.jsx)(n.em,{children:"taille"})," {; ",(0,l.jsx)(n.em,{children:"taille2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomArray"}),(0,l.jsx)(n.td,{children:"Array"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom du tableau"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"taille"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments du tableau ou Nombre de tableaux si taille2 est sp\xe9cifi\xe9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"taille2"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments des tableaux \xe0 deux dimensions"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"ARRAY BOOLEAN"})," cr\xe9e et/ou redimensionne un tableau d'\xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"Peut \xeatre VRAI ou FAUX",children:"Bool\xe9en"})," en m\xe9moire."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"nomTableau"})," est le nom du tableau."]}),"\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"taille"})," est le nombre d'\xe9l\xe9ments du tableau."]}),"\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"taille2"})," est optionnel. Si vous le sp\xe9cifiez, cette commande cr\xe9e un tableau \xe0 deux dimensions. Dans ce cas, ",(0,l.jsx)(n.em,{children:"taille"})," sp\xe9cifie le nombre de lignes et ",(0,l.jsx)(n.em,{children:"taille2"})," sp\xe9cifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau \xe0 deux dimensions peut \xeatre trait\xe9e \xe0 la fois comme un \xe9l\xe9ment et comme un tableau. Cela signifie que vous pouvez ins\xe9rer et supprimer des tableaux entiers dans un tableau \xe0 deux dimensions, par l'interm\xe9diaire des autres commandes de ce th\xe8me, lorsque vous travaillez avec la premi\xe8re dimension du tableau."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous appliquez la commande ",(0,l.jsx)(n.strong,{children:"ARRAY BOOLEAN"})," \xe0 un tableau existant :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Si vous agrandissez sa taille, les \xe9l\xe9ments existants ne sont pas modifi\xe9s, les nouveaux \xe9l\xe9ments sont initialis\xe9s \xe0 Faux."}),"\n",(0,l.jsx)(n.li,{children:'Si vous r\xe9duisez sa taille, les \xe9l\xe9ments du "bas" du tableau sont supprim\xe9s et perdus.'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Astuce :"})," Dans certaines circonstances, l'utilisation d'un tableau d'Entiers dans lequel chaque \xe9l\xe9ment diff\xe9rent de z\xe9ro signifie \"vrai\" et chaque \xe9l\xe9ment \xe9gal \xe0 z\xe9ro signifie \"faux\" est une alternative \xe0 l'utilisation d'un tableau de Bool\xe9ens."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau process contenant 100 \xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"Peut \xeatre VRAI ou FAUX",children:"Bool\xe9en"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(tabBool\xe9ens;100)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple cr\xe9e un tableau local de 100 lignes contenant chacune 50 \xe9l\xe9ments de type Bool\xe9en :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN($tabBool\xe9ens;100;50)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple cr\xe9e un tableau interprocess de 50 \xe9l\xe9ments de type Bool\xe9en et affecte \xe0 chaque \xe9l\xe9ment pair la valeur Faux :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(\u25catabBool\xe9ens;50)\n\xa0For($vElem;1;50)\n\xa0\xa0\xa0\xa0\u25catabBool\xe9ens{$vElem}:=(($vElem%2)=0)\n\xa0End for\n"})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/commands/array-integer",children:"ARRAY INTEGER"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var l=s(296540);const t={},a=l.createContext(t);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);