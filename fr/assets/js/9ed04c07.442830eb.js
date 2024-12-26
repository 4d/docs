"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49581"],{733576:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-set-enabled","title":"OBJECT SET ENABLED","description":"OBJECT SET ENABLED ( { ;} objet ; actif* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-enabled.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-enabled","permalink":"/docs/fr/commands/object-set-enabled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-enabled.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-enabled","title":"OBJECT SET ENABLED","slug":"/commands/object-set-enabled","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET DRAG AND DROP OPTIONS","permalink":"/docs/fr/commands/object-set-drag-and-drop-options"},"next":{"title":"OBJECT SET ENTERABLE","permalink":"/docs/fr/commands/object-set-enterable"}}'),r=s("785893"),i=s("250065");let d={id:"object-set-enabled",title:"OBJECT SET ENABLED",slug:"/commands/object-set-enabled",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET ENABLED"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"actif"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"actif"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vrai = objet(s) activ\xe9(s), Faux sinon"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET ENABLED"})," permet d\u2019activer ou d\u2019inactiver l\u2019objet ou le groupe d\u2019objets d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"objet"})," dans le formulaire courant."]}),"\n",(0,r.jsx)(n.p,{children:"Un objet activ\xe9 r\xe9agit aux clics souris et aux raccourcis clavier."}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable (variable objet uniquement)."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez Vrai dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"actif"})," pour activer les objets et Faux pour les inactiver."]}),"\n",(0,r.jsx)(n.p,{children:"Cette commande peut \xeatre appliqu\xe9e aux types d'objets suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Bouton, Bouton par d\xe9faut, Bouton 3D, Bouton invisible, Bouton invers\xe9"}),"\n",(0,r.jsx)(n.li,{children:"Bouton radio, Bouton radio 3D, Bouton image"}),"\n",(0,r.jsx)(n.li,{children:"Case \xe0 cocher, Case \xe0 cocher 3D"}),"\n",(0,r.jsx)(n.li,{children:"Pop-up menu, Liste d\xe9roulante, Combo Box, Menu/Liste d\xe9roulante"}),"\n",(0,r.jsx)(n.li,{children:"Thermom\xe8tre, R\xe8gle"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande est sans effet avec un objet auquel une action standard a \xe9t\xe9 assign\xe9e (4D se charge de modifier l\u2019\xe9tat de cet objet lorsque c\u2019est n\xe9cessaire), sauf dans le cas des actions ",(0,r.jsx)(n.strong,{children:"Valider"})," et ",(0,r.jsx)(n.strong,{children:"Annuler"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-get-enabled",children:"OBJECT Get enabled"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1123"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);