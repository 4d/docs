"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6325"],{316232:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","description":"LISTBOX MOVED COLUMN NUMBER ( { ;} objet ; ancPosition ; nouvPosition* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-moved-column-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-column-number","permalink":"/docs/fr/20-R8/commands/listbox-moved-column-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-column-number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","slug":"/commands/listbox-moved-column-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/fr/20-R8/commands/listbox-move-column"},"next":{"title":"LISTBOX MOVED ROW NUMBER","permalink":"/docs/fr/20-R8/commands/listbox-moved-row-number"}}'),o=s("785893"),r=s("250065");let i={id:"listbox-moved-column-number",title:"LISTBOX MOVED COLUMN NUMBER",slug:"/commands/listbox-moved-column-number",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX MOVED COLUMN NUMBER"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objet"})," ; ",(0,o.jsx)(n.em,{children:"ancPosition"})," ; ",(0,o.jsx)(n.em,{children:"nouvPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Op\xe9rateur"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objet"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ancPosition"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Ancienne position de la colonne d\xe9plac\xe9e"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nouvPosition"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nouvelle position de la colonne d\xe9plac\xe9e"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"LISTBOX MOVED COLUMN NUMBER"})," retourne dans les param\xe8tres ",(0,o.jsx)(n.em,{children:"ancPosition"})," et ",(0,o.jsx)(n.em,{children:"nouvPosition"})," des num\xe9ros indiquant respectivement la pr\xe9c\xe9dente position et la nouvelle position de la colonne d\xe9plac\xe9e dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,o.jsx)(n.em,{children:"objet"})," et ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,o.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Cette commande doit \xeatre utilis\xe9e en combinaison avec l\u2019\xe9v\xe9nement formulaire On Column Moved (cf. commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Cette commande tient compte des colonnes invisibles."]}),"\n",(0,o.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/listbox-moved-row-number",children:"LISTBOX MOVED ROW NUMBER"})]}),"\n",(0,o.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"844"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);