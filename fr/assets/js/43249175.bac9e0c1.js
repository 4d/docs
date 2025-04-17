"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20286"],{880855:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-get-list-reference","title":"OBJECT Get list reference","description":"OBJECT Get list reference ( { ;} objet {; typeListe*} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-list-reference.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-reference","permalink":"/docs/fr/commands/object-get-list-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-reference.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-list-reference","title":"OBJECT Get list reference","slug":"/commands/object-get-list-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get list name","permalink":"/docs/fr/commands/object-get-list-name"},"next":{"title":"OBJECT GET MAXIMUM VALUE","permalink":"/docs/fr/commands/object-get-maximum-value"}}'),r=s("785893"),i=s("250065");let d={id:"object-get-list-reference",title:"OBJECT Get list reference",slug:"/commands/object-get-list-reference",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," {; ",(0,r.jsx)(n.em,{children:"typeListe"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeListe"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type de liste : Liste \xe9num\xe9ration, Liste obligations ou Liste exclusions"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la liste"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," retourne le num\xe9ro de r\xe9f\xe9rence (",(0,r.jsx)(n.em,{children:"RefListe"}),") de la liste hi\xe9rarchique associ\xe9e \xe0 l\u2019objet ou au groupe d'objets d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"typeListe"}),", la commande retourne le nom de l\u2019\xe9num\xe9ration simple (liste de valeurs) associ\xe9e \xe0 l\u2019",(0,r.jsx)(n.em,{children:"objet"}),". Vous pouvez \xe9galement obtenir le num\xe9ro de r\xe9f\xe9rence des listes d\u2019obligations ou d\u2019exclusions en passant dans ",(0,r.jsx)(n.em,{children:"typeListe"}),' une des constantes suivantes du th\xe8me "',(0,r.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Choice list"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:'Liste simple de choix de valeurs (option "Enum\xe9ration" dans la Liste des propri\xe9t\xe9s) (d\xe9faut)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Excluded list"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'Liste de valeurs non accept\xe9es pour la saisie (option "Exclusions" dans la Liste des propri\xe9t\xe9s)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Required list"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'Liste des seules valeurs accept\xe9es pour la saisie (option "Obligations" dans la Liste des propri\xe9t\xe9s)'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si aucune liste hi\xe9rarchique n\u2019est associ\xe9e \xe0 l\u2019objet pour le ",(0,r.jsx)(n.em,{children:"typeListe"})," d\xe9fini, la commande retourne 0."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1267"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);