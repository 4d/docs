"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67562"],{861821:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/array-pointer","title":"ARRAY POINTER","description":"ARRAY POINTER ( nomTableau ; taille {; taille2} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/array-pointer","permalink":"/docs/fr/commands/array-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-pointer","title":"ARRAY POINTER","slug":"/commands/array-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY PICTURE","permalink":"/docs/fr/commands/array-picture"},"next":{"title":"ARRAY REAL","permalink":"/docs/fr/commands/array-real"}}'),l=r("785893"),s=r("250065");let i={id:"array-pointer",title:"ARRAY POINTER",slug:"/commands/array-pointer",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"ARRAY POINTER"})," ( ",(0,l.jsx)(n.em,{children:"nomTableau"})," ; ",(0,l.jsx)(n.em,{children:"taille"})," {; ",(0,l.jsx)(n.em,{children:"taille2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomArray"}),(0,l.jsx)(n.td,{children:"Array"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom du tableau"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"taille"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments du tableau ou Nombre de tableaux si taille2 est sp\xe9cifi\xe9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"taille2"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments des tableaux \xe0 deux dimensions"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"ARRAY POINTER"})," cr\xe9e ou redimensionne un tableau d'\xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointeur"})," en m\xe9moire.est le nom du tableau."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"taille"})," est le nombre d'\xe9l\xe9ments du tableau."]}),"\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"taille2"})," est optionnel. Si vous le sp\xe9cifiez, cette commande cr\xe9e un tableau \xe0 deux dimensions. Dans ce cas, ",(0,l.jsx)(n.em,{children:"taille"})," sp\xe9cifie le nombre de lignes et ",(0,l.jsx)(n.em,{children:"taille2"})," sp\xe9cifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau \xe0 deux dimensions peut \xeatre trait\xe9e \xe0 la fois comme un \xe9l\xe9ment et comme un tableau. Cela signifie que vous pouvez ins\xe9rer et supprimer des tableaux entiers dans un tableau \xe0 deux dimensions, par l'interm\xe9diaire des autres commandes de ce th\xe8me, lorsque vous travaillez avec la premi\xe8re dimension du tableau."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous appliquez la commande ",(0,l.jsx)(n.strong,{children:"ARRAY POINTER"})," \xe0 un tableau existant :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si vous agrandissez sa taille, les \xe9l\xe9ments existants ne sont pas modifi\xe9s, les nouveaux \xe9l\xe9ments sont initialis\xe9s \xe0 un pointeur nul (ce qui signifie que la fonction ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/is-nil-pointer",children:"Is nil pointer"})," appliqu\xe9e \xe0 l'un de ces \xe9l\xe9ments retourne Vrai)."]}),"\n",(0,l.jsx)(n.li,{children:'Si vous r\xe9duisez sa taille, les \xe9l\xe9ments du "bas" du tableau sont supprim\xe9s et perdus.'}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau process contenant 100 \xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointeur"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY POINTER(tabPointeurs;100)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau local de 100 lignes contenant chacune 50 \xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointeur"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY POINTER($tabPointeurs;100;50)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau interprocess d'\xe9l\xe9ments de type ",(0,l.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointeur"})," dont la taille est \xe9gale au nombre de tables dans la base et remplit chaque \xe9l\xe9ment pointant vers la table dont le num\xe9ro est le m\xeame que celui de l'\xe9l\xe9ment. Dans la cas d'une table supprim\xe9e, la ligne retournera Nil."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY POINTER(<>tabPointeurs;Lire numero derniere table)\n\xa0For($vElem;Size of array(<>tabPointeurs);1;-1)\n\xa0\xa0\xa0\xa0If(Is table number valid($vElem))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>tabPointeurs{$vElem}:=Table($vElem)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"280"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let l={},s=t.createContext(l);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);