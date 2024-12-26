"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46283"],{8335:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-get-footer-calculation","title":"LISTBOX Get footer calculation","description":"LISTBOX Get footer calculation ( { ;} objet* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-footer-calculation.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-footer-calculation","permalink":"/docs/fr/commands/listbox-get-footer-calculation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-footer-calculation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-footer-calculation","title":"LISTBOX Get footer calculation","slug":"/commands/listbox-get-footer-calculation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get column width","permalink":"/docs/fr/commands/listbox-get-column-width"},"next":{"title":"LISTBOX Get footers height","permalink":"/docs/fr/commands/listbox-get-footers-height"}}'),o=t("785893"),r=t("250065");let i={id:"listbox-get-footer-calculation",title:"LISTBOX Get footer calculation",slug:"/commands/listbox-get-footer-calculation",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get footer calculation"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objet"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Op\xe9rateur"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,o.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objet"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Type de calcul"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"LISTBOX Get footer calculation"})," retourne le type de calcul associ\xe9 \xe0 la zone de pied de list box d\xe9sign\xe9e par les param\xe8tres ",(0,o.jsx)(n.em,{children:"objet"})," et ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,o.jsxs)(n.p,{children:["Le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," peut d\xe9signer :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"la variable ou le nom d\u2019une zone de pied. Dans ce cas, la commande retourne le calcul associ\xe9 \xe0 cette zone."}),"\n",(0,o.jsx)(n.li,{children:"la variable ou le nom d\u2019une colonne de list box. Dans ce cas, la commande retourne le calcul associ\xe9 \xe0 la zone de pied de cette colonne."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Vous pouvez comparer la valeur retourn\xe9e aux constantes du th\xe8me ",(0,o.jsx)(n.em,{children:"List box pied calcul"})," (cf. commande ",(0,o.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-footer-calculation",children:"LISTBOX SET FOOTER CALCULATION"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-footer-calculation",children:"LISTBOX SET FOOTER CALCULATION"})}),"\n",(0,o.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"1150"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);