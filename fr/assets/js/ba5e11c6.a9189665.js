"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96119],{640302:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(474848),s=r(28453);const a={id:"count-in-array",title:"Count in array",slug:"/commands/count-in-array",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/count-in-array",title:"Count in array",description:"Count in array ( tableau ; valeur ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/count-in-array.md",sourceDirName:"commands-legacy",slug:"/commands/count-in-array",permalink:"/docs/fr/commands/count-in-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-in-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"count-in-array",title:"Count in array",slug:"/commands/count-in-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"COPY ARRAY",permalink:"/docs/fr/commands/copy-array"},next:{title:"DELETE FROM ARRAY",permalink:"/docs/fr/commands/delete-from-array"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Count in array"})," ( ",(0,t.jsx)(n.em,{children:"tableau"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau dans lequel effectuer le comptage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur \xe0 compter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombre d\u2019occurrences trouv\xe9es"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Count in array"})," retourne le nombre d\u2019occurrences de ",(0,t.jsx)(n.em,{children:"valeur"})," dans ",(0,t.jsx)(n.em,{children:"tableau"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande peut \xeatre utilis\xe9e avec des tableaux de type Texte, Num\xe9rique, Date, Pointeur, Objet et Bool\xe9en. Les param\xe8tres ",(0,t.jsx)(n.em,{children:"tableau"})," et ",(0,t.jsx)(n.em,{children:"valeur"})," doivent \xeatre du m\xeame type ou d\u2019un type compatible."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Avec les tableaux d'objets, vous ne pouvez utiliser que des r\xe9f\xe9rences d'objets dans le param\xe8tre valeur."]}),"\n",(0,t.jsxs)(n.p,{children:["Si aucun \xe9l\xe9ment de ",(0,t.jsx)(n.em,{children:"tableau"})," ne correspond \xe0 ",(0,t.jsx)(n.em,{children:"valeur"}),", la commande retourne 0."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L\u2019exemple suivant permet d\u2019afficher le nombre de lignes s\xe9lectionn\xe9es dans une list box :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//tBList est le nom d\u2019un tableau de colonne List box\n\xa0ALERT(String(Compter dans tableau(tBList;Vrai))+" ligne(s) s\xe9lectionn\xe9e(s) dans la list box")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous voulez compter les r\xe9f\xe9rences d'objets dans un tableau d'objets :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($objects;100)\n\xa0$o1:={a10;b"xyz"}\n\xa0$o2:={a10;b"xyz"}\n\xa0\n\xa0$objects{20}:=$o1\n\xa0$objects{21}:=$o1\n\xa0$objects{22}:=$o1\n\xa0\n\xa0var $n : Integer\n\xa0\n\xa0$n:=Count in array($objects;$o1)\xa0// n = 3\xa0\n\xa0$n:=Count in array($objects;$o2)\xa0// n = 0\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/find-in-array",children:"Find in array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/find-in-sorted-array",children:"Find in sorted array"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(296540);const s={},a=t.createContext(s);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);