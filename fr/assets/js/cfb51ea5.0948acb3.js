"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42763],{172335:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(474848),o=s(28453);const i={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",description:"LISTBOX MOVED ROW NUMBER ( { ;} objet ; ancPosition ; nouvPosition* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-row-number.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-moved-row-number",permalink:"/docs/fr/commands/listbox-moved-row-number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX MOVED COLUMN NUMBER",permalink:"/docs/fr/commands/listbox-moved-column-number"},next:{title:"LISTBOX SELECT BREAK",permalink:"/docs/fr/commands/listbox-select-break"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"ancPosition"})," ; ",(0,t.jsx)(n.em,{children:"nouvPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ancPosition"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Pr\xe9c\xe9dente position de la ligne d\xe9plac\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nouvPosition"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nouvelle position de la ligne d\xe9plac\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," retourne dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"ancPosition"})," et ",(0,t.jsx)(n.em,{children:"nouvPosition"})," des num\xe9ros indiquant respectivement la pr\xe9c\xe9dente position et la nouvelle position de la ligne d\xe9plac\xe9e dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Le d\xe9placement de lignes n'est possible que dans les list box de type tableau."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande doit \xeatre utilis\xe9e en combinaison avec l\u2019\xe9v\xe9nement formulaire On Row Moved (cf. commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande ne tient pas compte de l'\xe9ventuel statut masqu\xe9/affich\xe9 des lignes de la list box."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(296540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);