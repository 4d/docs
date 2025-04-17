"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9253"],{932027:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","description":"LISTBOX SET GRID COLOR ( { ;} objet ; couleur ; horizontal ; vertical* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/listbox-set-grid-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid-color","permalink":"/docs/fr/commands/listbox-set-grid-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid-color.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","slug":"/commands/listbox-set-grid-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID","permalink":"/docs/fr/commands/listbox-set-grid"},"next":{"title":"LISTBOX SET HEADERS HEIGHT","permalink":"/docs/fr/commands/listbox-set-headers-height"}}'),t=r("785893"),i=r("250065");let l={id:"listbox-set-grid-color",title:"LISTBOX SET GRID COLOR",slug:"/commands/listbox-set-grid-color",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"LISTBOX SET GRID COLOR"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"objet"})," ; ",(0,t.jsx)(s.em,{children:"couleur"})," ; ",(0,t.jsx)(s.em,{children:"horizontal"})," ; ",(0,t.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Op\xe9rateur"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"objet"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"couleur"}),(0,t.jsx)(s.td,{children:"Text, Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Valeur de couleur RVB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"horizontal"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Utiliser la couleur pour les traits horizontaux"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"vertical"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Utiliser la couleur pour les traits verticaux"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"LISTBOX SET GRID COLOR"})," permet de modifier la couleur de la grille de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,t.jsx)(s.em,{children:"objet"})," et ",(0,t.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"couleur"})," une valeur de couleur RVB. Pour plus d\u2019informations sur les couleurs RVB, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Les param\xe8tres ",(0,t.jsx)(s.em,{children:"horizontal"})," et ",(0,t.jsx)(s.em,{children:"vertical"})," vous permettent de sp\xe9cifier les traits auxquels la couleur doit \xeatre appliqu\xe9e :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["si vous passez ",(0,t.jsx)(s.strong,{children:"Vrai"})," dans ",(0,t.jsx)(s.em,{children:"horizontal"}),", la couleur sera appliqu\xe9e aux traits horizontaux de la grille. Si vous passez ",(0,t.jsx)(s.strong,{children:"Faux"}),", leur couleur ne sera pas modifi\xe9e."]}),"\n",(0,t.jsxs)(s.li,{children:["si vous passez ",(0,t.jsx)(s.strong,{children:"Vrai"})," dans ",(0,t.jsx)(s.em,{children:"vertical"}),", la couleur sera appliqu\xe9e aux traits verticaux de la grille. Si vous passez ",(0,t.jsx)(s.strong,{children:"Faux"}),", leur couleur ne sera pas modifi\xe9e."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-grid-colors",children:"LISTBOX GET GRID COLORS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"842"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return l}});var n=r(667294);let t={},i=n.createContext(t);function l(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);