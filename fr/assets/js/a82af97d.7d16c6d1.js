"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84033"],{518468:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/trunc","title":"Trunc","description":"Trunc ( nombre ; nbD\xe9cimales ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trunc.md","sourceDirName":"commands-legacy","slug":"/commands/trunc","permalink":"/docs/fr/20-R7/commands/trunc","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrunc.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trunc","title":"Trunc","slug":"/commands/trunc","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tan","permalink":"/docs/fr/20-R7/commands/tan"},"next":{"title":"Menus","permalink":"/docs/fr/20-R7/commands/theme/Menus"}}'),s=r("785893"),i=r("250065");let d={id:"trunc",title:"Trunc",slug:"/commands/trunc",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trunc"})," ( ",(0,s.jsx)(n.em,{children:"nombre"})," ; ",(0,s.jsx)(n.em,{children:"nbD\xe9cimales"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombre"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre \xe0 tronquer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nbD\xe9cimales"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de d\xe9cimales \xe0 conserver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"nombre tronqu\xe9 \xe0 partir du nombre de d\xe9cimales indiqu\xe9 par nbD\xe9cimales"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trunc"})," retourne ",(0,s.jsx)(n.em,{children:"nombre"})," dont la partie d\xe9cimale a \xe9t\xe9 tronqu\xe9e \xe0 partir du nombre de d\xe9cimales sp\xe9cifi\xe9 par ",(0,s.jsx)(n.em,{children:"nbD\xe9cimales"}),".arrondit toujours ",(0,s.jsx)(n.em,{children:"nombre"})," \xe0 la valeur inf\xe9rieure."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"nbD\xe9cimales"})," est positif, la troncature se fait sur la partie d\xe9cimale de ",(0,s.jsx)(n.em,{children:"nombre"}),". Si ",(0,s.jsx)(n.em,{children:"nbD\xe9cimales"})," est n\xe9gatif, la troncature se fait sur la partie enti\xe8re de ",(0,s.jsx)(n.em,{children:"nombre"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["L'exemple suivant illustre la mani\xe8re dont ",(0,s.jsx)(n.strong,{children:"Trunc"})," fonctionne dans diff\xe9rents cas. A chaque ligne, une valeur est assign\xe9e \xe0 la variable ",(0,s.jsx)(n.em,{children:"vR\xe9sultat"}),". Les commentaires d\xe9crivent le r\xe9sultat :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0vR\xe9sultat:=Trunc(216,897;1)\xa0// R\xe9sultat prend la valeur 216,8\n\xa0vR\xe9sultat:=Trunc(216,897;-1)\xa0// R\xe9sultat prend la valeur 210\n\xa0vR\xe9sultat:=Trunc(-216,897;1)\xa0// R\xe9sultat prend la valeur -216,9\n\xa0vR\xe9sultat:=Trunc(-216,897;-1)\xa0// R\xe9sultat prend la valeur -220\n"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/round",children:"Round"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"95"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);