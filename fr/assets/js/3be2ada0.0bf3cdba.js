"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97425],{198596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(474848),i=t(28453);const r={id:"object-set-vertical-alignment",title:"OBJECT SET VERTICAL ALIGNMENT",slug:"/commands/object-set-vertical-alignment",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/object-set-vertical-alignment",title:"OBJECT SET VERTICAL ALIGNMENT",description:"OBJECT SET VERTICAL ALIGNMENT ( { ;} objet ; alignement* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-vertical-alignment.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-vertical-alignment",permalink:"/docs/fr/commands/object-set-vertical-alignment",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-vertical-alignment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-vertical-alignment",title:"OBJECT SET VERTICAL ALIGNMENT",slug:"/commands/object-set-vertical-alignment",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET VALUE",permalink:"/docs/fr/commands/object-set-value"},next:{title:"OBJECT SET VISIBLE",permalink:"/docs/fr/commands/object-set-visible"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET VERTICAL ALIGNMENT"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ; ",(0,s.jsx)(n.em,{children:"alignement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,s.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,s.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"alignement"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Code d\u2019alignement"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OBJECT SET VERTICAL ALIGNMENT"})," vous permet de modifier par programmation le type d\u2019alignement vertical appliqu\xe9 \xe0 l\u2019objet ou aux objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,s.jsx)(n.em,{children:"objet"})," et ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"alignement"})," une des constantes suivantes du th\xe8me ",(0,s.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align bottom"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.br,{})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align center"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.br,{})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align default"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align top"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.br,{})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Les objets de formulaire auxquels un alignement vertical peut \xeatre appliqu\xe9 sont les suivants :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"list box,"}),"\n",(0,s.jsx)(n.li,{children:"colonnes de list box,"}),"\n",(0,s.jsx)(n.li,{children:"en-t\xeate et pieds de list box."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-get-horizontal-alignment",children:"OBJECT Get horizontal alignment"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-get-vertical-alignment",children:"OBJECT Get vertical alignment"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-set-horizontal-alignment",children:"OBJECT SET HORIZONTAL ALIGNMENT"})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(296540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);