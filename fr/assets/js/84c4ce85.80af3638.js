"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87611"],{768816:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"commands-legacy/array-real","title":"ARRAY REAL","description":"ARRAY REAL ( nomTableau ; taille {; taille2} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-real.md","sourceDirName":"commands-legacy","slug":"/commands/array-real","permalink":"/docs/fr/commands/array-real","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-real.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-real","title":"ARRAY REAL","slug":"/commands/array-real","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY POINTER","permalink":"/docs/fr/commands/array-pointer"},"next":{"title":"ARRAY TEXT","permalink":"/docs/fr/commands/array-text"}}'),r=s("785893"),t=s("250065");let i={id:"array-real",title:"ARRAY REAL",slug:"/commands/array-real",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ARRAY REAL"})," ( ",(0,r.jsx)(n.em,{children:"nomTableau"})," ; ",(0,r.jsx)(n.em,{children:"taille"})," {; ",(0,r.jsx)(n.em,{children:"taille2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomArray"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom du tableau"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"taille"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments du tableau ou Nombre de tableaux si taille2 est sp\xe9cifi\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"taille2"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre d'\xe9l\xe9ments des tableaux \xe0 deux dimensions"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ARRAY REAL"})," cr\xe9e et/ou redimensionne un tableau d'\xe9l\xe9ments de type R\xe9el en m\xe9moire.est le nom du tableau."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"taille"})," est le nombre d'\xe9l\xe9ments du tableau."]}),"\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"taille2"})," est optionnel. Si vous le sp\xe9cifiez, cette commande cr\xe9e un tableau \xe0 deux dimensions. Dans ce cas, taille sp\xe9cifie le nombre de lignes et ",(0,r.jsx)(n.em,{children:"taille2"})," sp\xe9cifie le nombre de colonnes de chaque tableau. Chaque ligne dans un tableau \xe0 deux dimensions peut \xeatre trait\xe9e \xe0 la fois comme un \xe9l\xe9ment et comme un tableau. Cela signifie que vous pouvez ins\xe9rer et supprimer des tableaux entiers dans un tableau \xe0 deux dimensions, par l'interm\xe9diaire des autres commandes de ce th\xe8me, lorsque vous travaillez avec la premi\xe8re dimension du tableau."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque vous appliquez la commande ",(0,r.jsx)(n.strong,{children:"ARRAY REAL"})," \xe0 un tableau existant :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si vous agrandissez sa taille, les \xe9l\xe9ments existants ne sont pas modifi\xe9s, les nouveaux \xe9l\xe9ments sont initialis\xe9s \xe0 0."}),"\n",(0,r.jsx)(n.li,{children:'Si vous r\xe9duisez sa taille, les \xe9l\xe9ments du "bas" du tableau sont supprim\xe9s et perdus.'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau process contenant 100 \xe9l\xe9ments de type ",(0,r.jsx)(n.a,{href:"#",title:"Number between \xb11.7e\xb1308 (15 digits)",children:"R\xe9el"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(tabR\xe9el;100)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Cet exemple cr\xe9e un tableau local de 100 lignes contenant chacune 50 \xe9l\xe9ments de type R\xe9el :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($tabR\xe9el;100;50)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple cr\xe9e un tableau interprocess de 50 \xe9l\xe9ments de type ",(0,r.jsx)(n.a,{href:"#",title:"Number between \xb11.7e\xb1308 (15 digits)",children:"R\xe9el"})," et affecte \xe0 chaque \xe9l\xe9ment son num\xe9ro :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(\u25CAtabR\xe9el;50)\n\xa0For($vElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAtabR\xe9el{$vElem}:=$vElem\n\xa0End for\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/array-integer",children:"ARRAY INTEGER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/array-longint",children:"ARRAY LONGINT"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"219"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);