"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73446"],{252542:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-get-hierarchy","title":"LISTBOX GET HIERARCHY","description":"LISTBOX GET HIERARCHY ( { ;} objet ; hi\xe9rarchique {; hi\xe9rarchie*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-hierarchy.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-hierarchy","permalink":"/docs/fr/commands/listbox-get-hierarchy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-hierarchy.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-hierarchy","title":"LISTBOX GET HIERARCHY","slug":"/commands/listbox-get-hierarchy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get headers height","permalink":"/docs/fr/commands/listbox-get-headers-height"},"next":{"title":"LISTBOX Get locked columns","permalink":"/docs/fr/commands/listbox-get-locked-columns"}}'),i=r("785893"),t=r("250065");let l={id:"listbox-get-hierarchy",title:"LISTBOX GET HIERARCHY",slug:"/commands/listbox-get-hierarchy",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX GET HIERARCHY"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"hi\xe9rarchique"})," {; ",(0,i.jsx)(n.em,{children:"hi\xe9rarchie"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hi\xe9rarchique"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai = list box hi\xe9rarchique, Faux = list box non hi\xe9rarchique"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hi\xe9rarchie"}),(0,i.jsx)(n.td,{children:"Pointer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Tableau de pointeurs"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX GET HIERARCHY"})," vous permet de conna\xeetre les propri\xe9t\xe9s hi\xe9rarchiques de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre objet est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre bool\xe9en ",(0,i.jsx)(n.em,{children:"hi\xe9rarchique"})," indique si list box est en mode hi\xe9rarchique ou non :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"si le param\xe8tre retourne Vrai, la list box est en mode hi\xe9rarchique,"}),"\n",(0,i.jsx)(n.li,{children:"si le param\xe8tre retourne Faux, la list box est affich\xe9e en mode non hi\xe9rarchique (mode tableau standard)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si la list box est en mode hi\xe9rarchique, la commande remplit le tableau ",(0,i.jsx)(n.em,{children:"hi\xe9rarchie"})," avec des pointeurs vers les tableaux de la list box utilis\xe9s pour d\xe9finir la hi\xe9rarchie."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si la list box est en mode non hi\xe9rarchique, la commande retourne dans le premier \xe9l\xe9ment du tableau ",(0,i.jsx)(n.em,{children:"hi\xe9rarchie"})," un pointeur vers le tableau de la premi\xe8re colonne de la list box."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-hierarchy",children:"LISTBOX SET HIERARCHY"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1099"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);