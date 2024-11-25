"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61387"],{537422:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/object-set-maximum-value","title":"OBJECT SET MAXIMUM VALUE","description":"OBJECT SET MAXIMUM VALUE ( { ;} objet ; valeurMaxi* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-maximum-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-maximum-value","permalink":"/docs/fr/commands/object-set-maximum-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-maximum-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-maximum-value","title":"OBJECT SET MAXIMUM VALUE","slug":"/commands/object-set-maximum-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET LIST BY REFERENCE","permalink":"/docs/fr/commands/object-set-list-by-reference"},"next":{"title":"OBJECT SET MINIMUM VALUE","permalink":"/docs/fr/commands/object-set-minimum-value"}}'),r=s("785893"),i=s("250065");let a={id:"object-set-maximum-value",title:"OBJECT SET MAXIMUM VALUE",slug:"/commands/object-set-maximum-value",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET MAXIMUM VALUE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"valeurMaxi"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeurMaxi"}),(0,r.jsx)(n.td,{children:"Date, Time, Number"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeur maximale pour l\u2019objet"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET MAXIMUM VALUE"})," permet de modifier la valeur maximum de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"})," pour le process courant."]}),"\n",(0,r.jsxs)(n.p,{children:['La propri\xe9t\xe9 "Valeur maximum" peut \xeatre appliqu\xe9e aux donn\xe9es de type num\xe9rique, date ou heure. Pour plus d\u2019informations, reportez-vous au paragraphe ',(0,r.jsx)(n.em,{children:"Valeurs maximales et minimales"})," dans le manuel ",(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"valeurMaxi"})," la nouvelle valeur maximum \xe0 affecter \xe0 l\u2019",(0,r.jsx)(n.em,{children:"objet"}),' pour le process courant. Cette valeur doit correspondre au type de l\u2019objet, sinon l\u2019erreur 18 "Les types sont incompatibles" est retourn\xe9e.']}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-get-maximum-value",children:"OBJECT GET MAXIMUM VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-set-minimum-value",children:"OBJECT SET MINIMUM VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);