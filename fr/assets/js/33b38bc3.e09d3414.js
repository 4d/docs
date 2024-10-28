"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84708],{155173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(474848),r=s(28453);const o={id:"listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",slug:"/commands/listbox-set-column-formula",displayed_sidebar:"docs"},l=void 0,i={id:"commands-legacy/listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",description:"LISTBOX SET COLUMN FORMULA ( { ;} objet ; formule ; typeDonn\xe9es* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-column-formula.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-set-column-formula",permalink:"/docs/fr/commands/listbox-set-column-formula",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",slug:"/commands/listbox-set-column-formula",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SET AUTO ROW HEIGHT",permalink:"/docs/fr/commands/listbox-set-auto-row-height"},next:{title:"LISTBOX SET COLUMN WIDTH",permalink:"/docs/fr/commands/listbox-set-column-width"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"formule"})," ; ",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)Si omis, objet est une variable ou un champ"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formule"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Formule 4D associ\xe9e \xe0 la colonne"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeDonn\xe9es"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type de r\xe9sultat de la formule"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," permet de modifier la ",(0,t.jsx)(n.em,{children:"formule"})," associ\xe9e \xe0 la colonne de list box d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et ",(0,t.jsx)(n.em,{children:"*"}),". Les formules ne peuvent \xeatre utilis\xe9es que lorsque la propri\xe9t\xe9 \u201cSource de donn\xe9es\u201d de la list box est ",(0,t.jsx)(n.strong,{children:"S\xe9lection courante"}),", ",(0,t.jsx)(n.strong,{children:"S\xe9lection temporaire"})," ou ",(0,t.jsx)(n.strong,{children:"Collection ou entity selection"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous pouvez utiliser la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})," pour d\xe9finir la source de donn\xe9es d'une list box de type tableau."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Ce param\xe8tre doit d\xe9signer une colonne de la listbox."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"formule"})," peut contenir toute expression valide, soit :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une instruction,"}),"\n",(0,t.jsx)(n.li,{children:"une formule g\xe9n\xe9r\xe9e \xe0 l\u2019aide de l\u2019\xe9diteur de formules,"}),"\n",(0,t.jsx)(n.li,{children:"un appel \xe0 une commande 4D,"}),"\n",(0,t.jsx)(n.li,{children:"un appel \xe0 une m\xe9thode projet."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Au moment de l\u2019appel de la commande, la formule est analys\xe9e puis ex\xe9cut\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/command-name",children:"Command name"})," afin de d\xe9finir des formules ind\xe9pendantes de la langue de l\u2019application (lorsqu\u2019elles font appel \xe0 des commandes 4D)."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeDonn\xe9es"})," permet de d\xe9signer le type des donn\xe9es issues de l\u2019ex\xe9cution de la formule. Vous devez passer dans ce param\xe8tre une des constantes du th\xe8me ",(0,t.jsx)(n.em,{children:"Types champs et variables"}),". Si le r\xe9sultat de la formule ne correspond pas au type de donn\xe9es attendu, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-column-formula",children:"LISTBOX Get column formula"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(296540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);