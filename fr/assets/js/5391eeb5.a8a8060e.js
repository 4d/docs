"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73821"],{25695:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","description":"LISTBOX MOVED ROW NUMBER ( { ;} objet ; ancPosition ; nouvPosition* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-moved-row-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-row-number","permalink":"/docs/fr/20-R8/commands/listbox-moved-row-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","slug":"/commands/listbox-moved-row-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/fr/20-R8/commands/listbox-moved-column-number"},"next":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/fr/20-R8/commands/listbox-select-break"}}'),r=s("785893"),i=s("250065");let o={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"ancPosition"})," ; ",(0,r.jsx)(n.em,{children:"nouvPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ancPosition"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Pr\xe9c\xe9dente position de la ligne d\xe9plac\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nouvPosition"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nouvelle position de la ligne d\xe9plac\xe9e"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," retourne dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"ancPosition"})," et ",(0,r.jsx)(n.em,{children:"nouvPosition"})," des num\xe9ros indiquant respectivement la pr\xe9c\xe9dente position et la nouvelle position de la ligne d\xe9plac\xe9e dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Le d\xe9placement de lignes n'est possible que dans les list box de type tableau."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,r.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande doit \xeatre utilis\xe9e en combinaison avec l\u2019\xe9v\xe9nement formulaire On Row Moved (cf. commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande ne tient pas compte de l'\xe9ventuel statut masqu\xe9/affich\xe9 des lignes de la list box."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"837"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);