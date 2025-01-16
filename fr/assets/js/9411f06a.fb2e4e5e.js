"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49802"],{999158:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/is-compiled-mode","title":"Is compiled mode","description":"Is compiled mode {( * )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-compiled-mode.md","sourceDirName":"commands-legacy","slug":"/commands/is-compiled-mode","permalink":"/docs/fr/commands/is-compiled-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-compiled-mode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-compiled-mode","title":"Is compiled mode","slug":"/commands/is-compiled-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get last update log path","permalink":"/docs/fr/commands/get-last-update-log-path"},"next":{"title":"Is data file locked","permalink":"/docs/fr/commands/is-data-file-locked"}}'),o=s("785893"),r=s("250065");let t={id:"is-compiled-mode",title:"Is compiled mode",slug:"/commands/is-compiled-mode",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Is compiled mode"})," {( * )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Op\xe9rateur"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Retourner l'information de la base h\xf4te"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Mode compil\xe9 (Vrai), mode interpr\xe9t\xe9 (Faux)"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La fonction ",(0,o.jsx)(n.strong,{children:"Is compiled mode"})," teste si la base tourne en mode compil\xe9 (Vrai) ou en mode interpr\xe9t\xe9 (Faux)."]}),"\n",(0,o.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,o.jsx)(n.em,{children:"*"})," est utile dans le cadre d'une architecture utilisant des composants : il permet de d\xe9terminer la base (h\xf4te ou composant) dont vous souhaitez conna\xeetre le mode d'ex\xe9cution."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Lorsque la commande est appel\xe9e depuis un composant :\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["si le param\xe8tre ",(0,o.jsx)(n.em,{children:"*"})," est pass\xe9, la commande retourne ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/true",children:"True"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/false",children:"False"})," en fonction du mode d\u2019ex\xe9cution de la base h\xf4te,"]}),"\n",(0,o.jsxs)(n.li,{children:["si le param\xe8tre ",(0,o.jsx)(n.em,{children:"*"})," n\u2019est pas pass\xe9, la commande retourne ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/true",children:"True"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/false",children:"False"})," en fonction du mode d\u2019ex\xe9cution du composant."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Lorsque la commande est appel\xe9e depuis une m\xe9thode d\u2019une base h\xf4te, elle retourne toujours ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/true",children:"True"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/false",children:"False"})," en fonction du mode d\u2019ex\xe9cution de la base h\xf4te."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsxs)(n.p,{children:["Dans une de vos m\xe9thodes, vous avez plac\xe9 du code pour d\xe9boguer la base lorsque vous \xeates en mode interpr\xe9t\xe9. Vous pouvez pr\xe9c\xe9der ce code d'un test qui appelle la fonction ",(0,o.jsx)(n.strong,{children:"Is compiled mode"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// ...\n\xa0If(Not(Is compiled mode))\n\xa0\xa0// Mettre du code pour d\xe9boguer votre base ici\n\xa0End if\n\xa0\xa0// ...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/commands/idle",children:"IDLE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/commands/undefined",children:"Undefined"})]}),"\n",(0,o.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"492"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var d=s(667294);let o={},r=d.createContext(o);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);