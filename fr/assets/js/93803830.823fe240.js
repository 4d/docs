"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50375"],{648888:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/form-set-horizontal-resizing","title":"FORM SET HORIZONTAL RESIZING","description":"FORM SET HORIZONTAL RESIZING ( redimension {; largeurMini {; largeurMaxi}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-set-horizontal-resizing.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-horizontal-resizing","permalink":"/docs/fr/commands/form-set-horizontal-resizing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-horizontal-resizing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-set-horizontal-resizing","title":"FORM SET HORIZONTAL RESIZING","slug":"/commands/form-set-horizontal-resizing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET ENTRY ORDER","permalink":"/docs/fr/commands/form-set-entry-order"},"next":{"title":"FORM SET INPUT","permalink":"/docs/fr/commands/form-set-input"}}'),i=n("785893"),t=n("250065");let l={id:"form-set-horizontal-resizing",title:"FORM SET HORIZONTAL RESIZING",slug:"/commands/form-set-horizontal-resizing",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"FORM SET HORIZONTAL RESIZING"})," ( ",(0,i.jsx)(r.em,{children:"redimension"})," {; ",(0,i.jsx)(r.em,{children:"largeurMini"})," {; ",(0,i.jsx)(r.em,{children:"largeurMaxi"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tre"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"redimension"}),(0,i.jsx)(r.td,{children:"Boolean"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Vrai : le formulaire est redimensionnable horizontalement Faux : le formulaire n\u2019est pas redimensionnable horizontalement"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"largeurMini"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Largeur minimale du formulaire (pixels)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"largeurMaxi"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Largeur maximale du formulaire (pixels)"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.strong,{children:"FORM SET HORIZONTAL RESIZING"})," permet de modifier par programmation les propri\xe9t\xe9s de redimensionnement horizontal du formulaire courant. Par d\xe9faut, ces propri\xe9t\xe9s sont d\xe9finies dans l\u2019\xe9diteur de formulaires en mode D\xe9veloppement. Les nouvelles propri\xe9t\xe9s sont fix\xe9es pour le process courant, elles ne sont pas stock\xe9es avec le formulaire."]}),"\n",(0,i.jsxs)(r.p,{children:["Le param\xe8tre ",(0,i.jsx)(r.em,{children:"redimension"})," permet de d\xe9finir si le formulaire est redimensionnable horizontalement, c\u2019est-\xe0-dire si sa largeur est modifiable (manuellement par l\u2019utilisateur ou par programmation)."]}),"\n",(0,i.jsxs)(r.p,{children:["Si vous passez Vrai, la largeur du formulaire peut \xeatre modifi\xe9e par l\u2019utilisateur ; 4D utilise comme bornes les valeurs \xe9ventuellement pass\xe9es dans les param\xe8tres ",(0,i.jsx)(r.em,{children:"largeurMini"})," et ",(0,i.jsx)(r.em,{children:"largeurMaxi"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Si vous passez Faux, la largeur courante du formulaire n\u2019est pas modifiable ; dans ce cas, il est inutile de passer des valeurs dans les param\xe8tres ",(0,i.jsx)(r.em,{children:"largeurMini"})," et ",(0,i.jsx)(r.em,{children:"largeurMaxi"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Si vous avez pass\xe9 Vrai dans le premier param\xe8tre, vous pouvez passer dans les param\xe8tres facultatifs ",(0,i.jsx)(r.em,{children:"largeurMini"})," et ",(0,i.jsx)(r.em,{children:"largeurMaxi"})," les nouvelles largeurs minimale et maximale du formulaire en pixels. Si vous omettez ces param\xe8tres, les valeurs d\xe9finies en mode D\xe9veloppement (le cas \xe9ch\xe9ant) seront utilis\xe9es."]}),"\n",(0,i.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(r.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,i.jsx)(r.a,{href:"/docs/fr/commands/form-set-size",children:"FORM SET SIZE"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/commands/form-get-horizontal-resizing",children:"FORM GET HORIZONTAL RESIZING"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/form-set-size",children:"FORM SET SIZE"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/form-set-vertical-resizing",children:"FORM SET VERTICAL RESIZING"})]}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(r.td,{children:"892"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return l}});var s=n(667294);let i={},t=s.createContext(i);function l(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);