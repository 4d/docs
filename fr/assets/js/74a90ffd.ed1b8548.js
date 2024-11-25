"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62792"],{294997:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/set-real-comparison-level","title":"SET REAL COMPARISON LEVEL","description":"SET REAL COMPARISON LEVEL ( epsilon )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-real-comparison-level.md","sourceDirName":"commands-legacy","slug":"/commands/set-real-comparison-level","permalink":"/docs/fr/commands/set-real-comparison-level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-real-comparison-level.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-real-comparison-level","title":"SET REAL COMPARISON LEVEL","slug":"/commands/set-real-comparison-level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Round","permalink":"/docs/fr/commands/round"},"next":{"title":"Sin","permalink":"/docs/fr/commands/sin"}}'),l=n("785893"),i=n("250065");let t={id:"set-real-comparison-level",title:"SET REAL COMPARISON LEVEL",slug:"/commands/set-real-comparison-level",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"SET REAL COMPARISON LEVEL"})," ( ",(0,l.jsx)(s.em,{children:"epsilon"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"epsilon"}),(0,l.jsx)(s.td,{children:"Real"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Valeur epsilon pour les comparaisons d'\xe9galit\xe9 des r\xe9els"})]})})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La commande ",(0,l.jsx)(s.strong,{children:"SET REAL COMPARISON LEVEL"})," d\xe9finit la valeur ",(0,l.jsx)(s.em,{children:"epsilon"})," utilis\xe9e par 4D lors d'une comparaison d'\xe9galit\xe9 des valeurs et expressions de type R\xe9el."]}),"\n",(0,l.jsxs)(s.p,{children:["Comme un ordinateur effectue des calculs approximatifs sur les r\xe9els, les tests sur l'\xe9galit\xe9 de valeurs r\xe9elles doivent tenir compte de cette approximation. Pour cela, 4D, lorsqu'il compare des valeurs r\xe9elles, teste en fait si la diff\xe9rence entre les deux valeurs est sup\xe9rieure ou non \xe0 une certaine valeur. Cette valeur s'appelle l'",(0,l.jsx)(s.strong,{children:"epsilon"})," et fonctionne de la mani\xe8re suivante :",(0,l.jsx)(s.br,{}),"\nSoient deux valeurs r\xe9elles ",(0,l.jsx)(s.em,{children:"a"})," et ",(0,l.jsx)(s.em,{children:"b"}),". Si ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/abs",children:"Abs"}),"(a-b) est sup\xe9rieur \xe0 l'epsilon, les valeurs sont consid\xe9r\xe9es comme diff\xe9rentes ; sinon, elles sont d\xe9clar\xe9es \xe9gales.",(0,l.jsx)(s.br,{}),"\nPar d\xe9faut, 4D fixe la valeur epsilon \xe0 10 \xe0 la puissance moins 6 (10^-6). Exemples :"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.em,{children:"0,00001=0,00002"})," retourne Faux car la diff\xe9rence ",(0,l.jsx)(s.em,{children:"0,00001"})," est sup\xe9rieure \xe0 ",(0,l.jsx)(s.em,{children:"10^-6"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.em,{children:"0,000001=0,000002"})," retourne Vrai car la diff\xe9rence ",(0,l.jsx)(s.em,{children:"0,000001"})," n'est pas sup\xe9rieure \xe0 ",(0,l.jsx)(s.em,{children:"10^-6"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.em,{children:"0,000001=0,000003"})," retourne Faux car la diff\xe9rence ",(0,l.jsx)(s.em,{children:"0,000002"})," est sup\xe9rieure \xe0 ",(0,l.jsx)(s.em,{children:"10^-6"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["A l'aide de ",(0,l.jsx)(s.strong,{children:"SET REAL COMPARISON LEVEL"}),", vous pouvez augmenter ou r\xe9duire la valeur epsilon, en fonction de vos besoins."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note :"})," La commande n'aura pas d'effet si ",(0,l.jsx)(s.em,{children:"epsilon"})," > 10^-3 ou si ",(0,l.jsx)(s.em,{children:"epsilon"})," < 0."]}),"\n",(0,l.jsx)(s.p,{children:"Modifier l'epsilon affecte seulement la comparaison d'\xe9galit\xe9 des r\xe9els. Cela n'a pas d'effet sur les calculs et l'affichage des valeurs r\xe9elles."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"ATTENTION :"})," Cette commande doit \xeatre utilis\xe9e dans des cas sp\xe9cifiques, comme par exemple un tri sur un champ dont les valeurs sont inf\xe9rieures \xe0 10^-6. En g\xe9n\xe9ral, vous n'avez pas besoin de modifier la valeur par d\xe9faut d'epsilon."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note :"})," La commande ",(0,l.jsx)(s.strong,{children:"SET REAL COMPARISON LEVEL"})," n'a pas d'effet sur les recherches et les tris effectu\xe9s avec les champs de type r\xe9el. Elle s'applique uniquement au langage de 4D."]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var r=n(667294);let l={},i=r.createContext(l);function t(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);