"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98279"],{791241:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","description":"OBJECT GET PRINT VARIABLE FRAME ( { ;} objet ; tailleVariable {; fixeSousForm*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-print-variable-frame.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-print-variable-frame","permalink":"/docs/fr/commands/object-get-print-variable-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-print-variable-frame.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","slug":"/commands/object-get-print-variable-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get pointer","permalink":"/docs/fr/commands/object-get-pointer"},"next":{"title":"OBJECT GET RESIZING OPTIONS","permalink":"/docs/fr/commands/object-get-resizing-options"}}'),i=r("785893"),t=r("250065");let a={id:"object-get-print-variable-frame",title:"OBJECT GET PRINT VARIABLE FRAME",slug:"/commands/object-get-print-variable-frame",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"tailleVariable"})," {; ",(0,i.jsx)(n.em,{children:"fixeSousForm"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tailleVariable"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai = Impression taille variable, Faux = Impression taille fixe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fixeSousForm"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Option d\u2019impression en taille fixe des sous-formulaires"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," vous permet de d\u2019obtenir la configuration courante des options d\u2019impression en taille variable de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Les propri\xe9t\xe9s d\u2019impression en taille variable peuvent \xeatre d\xe9finies via la Liste des propri\xe9t\xe9s ou la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,i.jsxs)(n.p,{children:["La commande retourne dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"tailleVariable"})," une variable bool\xe9enne dont la valeur indique le statut activ\xe9 (",(0,i.jsx)(n.strong,{children:"Vrai"}),") ou inactiv\xe9 (",(0,i.jsx)(n.strong,{children:"Faux"}),") de l\u2019impression en taille variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Si l\u2019",(0,i.jsx)(n.em,{children:"objet"})," est un sous-formulaire et si l\u2019impression en taille variable est \xe0 ",(0,i.jsx)(n.strong,{children:"Faux"}),", la commande retourne \xe9galement dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"fixeSousForm"}),' l\u2019option d\u2019impression en taille fixe du sous-formulaire. Vous pouvez comparer la valeur retourn\xe9e aux constantes suivantes, plac\xe9es dans le th\xe8me "',(0,i.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print Frame fixed with multiple records"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"La taille initiale de la zone du sous-formulaire est conserv\xe9e mais 4D imprime le formulaire plusieurs fois pour imprimer tous les enregistrements."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print Frame fixed with truncation"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"4D n\u2019imprime que les enregistrements qui apparaissent dans la zone du sous-formulaire. Le formulaire n\u2019est imprim\xe9 qu\u2019une fois et les enregistrements qui ne sont pas imprim\xe9s sont ignor\xe9s."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1241"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var s=r(667294);let i={},t=s.createContext(i);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);