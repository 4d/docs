"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82951"],{40026:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/mod","title":"Mod","description":"Mod ( nombre1 ; nombre2 ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/mod.md","sourceDirName":"commands-legacy","slug":"/commands/mod","permalink":"/docs/fr/commands/mod","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmod.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"mod","title":"Mod","slug":"/commands/mod","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log","permalink":"/docs/fr/commands/log"},"next":{"title":"Random","permalink":"/docs/fr/commands/random"}}'),t=s("785893"),d=s("250065");let l={id:"mod",title:"Mod",slug:"/commands/mod",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mod"})," ( ",(0,t.jsx)(n.em,{children:"nombre1"})," ; ",(0,t.jsx)(n.em,{children:"nombre2"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre1"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre \xe0 diviser (num\xe9rateur)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre2"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre diviseur (d\xe9nominateur)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Reste de la division enti\xe8re de nombre1 par nombre2"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Mod"})," divise ",(0,t.jsx)(n.em,{children:"nombre1"})," par ",(0,t.jsx)(n.em,{children:"nombre2"})," et retourne le reste sous forme d'un nombre entier."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mod"})," accepte des expressions de type Entier, Entier long et R\xe9el (num\xe9rique). Cependant, si ",(0,t.jsx)(n.em,{children:"nombre1"})," et/ou ",(0,t.jsx)(n.em,{children:"nombre2"})," sont des nombres r\xe9els, ils sont arrondis avant le calcul du ",(0,t.jsx)(n.strong,{children:"Mod"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Mod"})," est \xe0 utiliser avec pr\xe9caution avec des nombres r\xe9els de grande taille (au-del\xe0 de 2^31). Dans ce cas en effet, son fonctionnement peut se heurter aux limites des capacit\xe9s de calcul des processeurs standard."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez \xe9galement utiliser l'op\xe9rateur \"%\" pour calculer le reste d'une division (reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"C_TIME"}),"). Toutefois, cet op\xe9rateur retourne des r\xe9sultats valides uniquement avec des expressions de type Entier et Entier long. Si vous voulez calculer le modulo de nombres r\xe9els, vous devez utiliser la commande ",(0,t.jsx)(n.strong,{children:"Mod"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant illustre le fonctionnement de ",(0,t.jsx)(n.strong,{children:"Mod"})," dans diff\xe9rents cas de figure. A chaque ligne, un nombre est assign\xe9 \xe0 la variable ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"}),". Les commentaires fournissent le r\xe9sultat obtenu :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0vR\xe9sultat:=Mod(3;2)\xa0// vR\xe9sultat prend la valeur 1\n\xa0vR\xe9sultat:=Mod(4;2)\xa0// vR\xe9sultat prend la valeur 0\n\xa0vR\xe9sultat:=Mod(3,5;2)\xa0// vR\xe9sultat prend la valeur 0\n"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"98"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);