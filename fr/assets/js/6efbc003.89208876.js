"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68234"],{793717:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-get-indicator-type","title":"OBJECT Get indicator type","description":"OBJECT Get indicator type ( { ;} objet* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-indicator-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-indicator-type","permalink":"/docs/fr/commands/object-get-indicator-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-indicator-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-indicator-type","title":"OBJECT Get indicator type","slug":"/commands/object-get-indicator-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/fr/commands/object-get-horizontal-alignment"},"next":{"title":"OBJECT Get keyboard layout","permalink":"/docs/fr/commands/object-get-keyboard-layout"}}'),s=t("785893"),i=t("250065");let d={id:"object-get-indicator-type",title:"OBJECT Get indicator type",slug:"/commands/object-get-indicator-type",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get indicator type"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,s.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Type d\u2019indicateur"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OBJECT Get indicator type"})," retourne le type d\u2019indicateur courant affect\xe9 au(x) thermom\xe8tre(s) d\xe9sign\xe9(s) par le(s) param\xe8tre(s) ",(0,s.jsx)(n.em,{children:"objet"})," et ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le type d\u2019indicateur peut \xeatre d\xe9fini via la Liste des propri\xe9t\xe9s en mode D\xe9veloppement ou via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,s.jsxs)(n.p,{children:['Vous pouvez comparer la valeur retourn\xe9e par la commande aux constantes suivantes, plac\xe9es dans le th\xe8me "',(0,s.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Asynchronous progress bar"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Indicateur circulaire affichant une animation continue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Barber shop"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Barre affichant une animation continue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Progress bar"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Barre de progression standard"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1247"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);