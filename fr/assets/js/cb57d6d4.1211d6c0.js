"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45497"],{99451:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/table","title":"Table","description":"Table ( numTable\xa0|\xa0unPtr ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/table.md","sourceDirName":"commands-legacy","slug":"/commands/table","permalink":"/docs/fr/20-R7/commands/table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"table","title":"Table","slug":"/commands/table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX","permalink":"/docs/fr/20-R7/commands/set-index"},"next":{"title":"Table name","permalink":"/docs/fr/20-R7/commands/table-name"}}'),r=l("785893"),a=l("250065");let t={id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table"})," ( numTable\xa0|\xa0unPtr ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numTable\xa0|\xa0unPtr"}),(0,r.jsx)(n.td,{children:"Entier long, Pointeur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de table ou Pointeur de table ou Pointeur de champ"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer, Pointer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Pointeur de table si un Num\xe9ro de table est pass\xe9, Num\xe9ro de table si un Pointeur de table est pass\xe9, Num\xe9ro de table si un Pointeur de champ est pass\xe9"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table"})," a trois syntaxes diff\xe9rentes.retourne un pointeur sur la table."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous passez un pointeur de table dans ",(0,r.jsx)(n.em,{children:"unPtr"}),", ",(0,r.jsx)(n.strong,{children:"Table"})," retourne le num\xe9ro de la table."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous passez un pointeur de champ dans ",(0,r.jsx)(n.em,{children:"unPtr"}),", ",(0,r.jsx)(n.strong,{children:"Table"})," retourne le num\xe9ro de table du champ."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Dans cet exemple, la variable ",(0,r.jsx)(n.em,{children:"ptrTable"})," re\xe7oit un pointeur sur la table n\xb03 :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ptrTable:=Table(3)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez ",(0,r.jsx)(n.em,{children:"ptrTable"})," \xe0 la fonction Table, elle retourne 3. Par exemple, dans la ligne suivante, la variable ",(0,r.jsx)(n.em,{children:"numTable"})," prend la valeur 3 :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0numTable:=Table(ptrTable)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Dans l'exemple suivant, la variable ",(0,r.jsx)(n.em,{children:"numTable"})," est \xe9gale au num\xe9ro de la table [Table3] :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0numTable:=Table(->[Table3])\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsxs)(n.p,{children:["Dans l'exemple suivant, la variable ",(0,r.jsx)(n.em,{children:"numTable"})," est \xe9gale au num\xe9ro de la table \xe0 laquelle appartient le champ [Table3]Champ1 :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0numTable:=Table(->[Table3]Champ1)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/field",children:"Field"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/last-table-number",children:"Last table number"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"252"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return t}});var s=l(667294);let r={},a=s.createContext(r);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);