"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14033"],{112880:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/listbox-set-grid","title":"LISTBOX SET GRID","description":"LISTBOX SET GRID ( { ;} objet ; horizontal ; vertical* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-grid.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid","permalink":"/docs/fr/commands/listbox-set-grid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-grid","title":"LISTBOX SET GRID","slug":"/commands/listbox-set-grid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET FOOTERS HEIGHT","permalink":"/docs/fr/commands/listbox-set-footers-height"},"next":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/fr/commands/listbox-set-grid-color"}}'),r=n("785893"),i=n("250065");let d={id:"listbox-set-grid",title:"LISTBOX SET GRID",slug:"/commands/listbox-set-grid",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LISTBOX SET GRID"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objet"})," ; ",(0,r.jsx)(s.em,{children:"horizontal"})," ; ",(0,r.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objet"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"horizontal"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vrai=montrer, Faux=cacher"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vertical"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vrai=montrer, Faux=cacher"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"LISTBOX SET GRID"})," permet d\u2019afficher ou de masquer les traits horizontaux et/ou verticaux composant la grille de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,r.jsx)(s.em,{children:"objet"})," et ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,r.jsx)(s.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans les param\xe8tres ",(0,r.jsx)(s.em,{children:"horizontal"})," et ",(0,r.jsx)(s.em,{children:"vertical"})," des valeurs bool\xe9ennes indiquant si les traits correspondants doivent \xeatre affich\xe9s (Vrai) ou cach\xe9s (Faux). Par d\xe9faut, la grille est affich\xe9e."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-grid",children:"LISTBOX GET GRID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})]}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"841"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return d}});var t=n(667294);let r={},i=t.createContext(r);function d(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);