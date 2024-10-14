"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81734],{688217:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=s(474848),r=s(28453);const d={id:"vp-insert-table-columns",title:"VP INSERT TABLE COLUMNS"},i=void 0,l={id:"ViewPro/commands/vp-insert-table-columns",title:"VP INSERT TABLE COLUMNS",description:"Historique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-insert-table-columns.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-table-columns",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-insert-table-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-table-columns.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-insert-table-columns",title:"VP INSERT TABLE COLUMNS"},sidebar:"docs",previous:{title:"VP INSERT ROWS",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-insert-rows"},next:{title:"VP INSERT TABLE ROWS",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-insert-table-rows"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R7"}),(0,t.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP INSERT TABLE COLUMNS"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,t.jsx)(n.em,{children:"column"})," : Integer {; ",(0,t.jsx)(n.em,{children:"count"})," : Integer {; ",(0,t.jsx)(n.em,{children:"insertAfter"})," : Integer {; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom de table"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"column"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Index dans la table de la colonne de d\xe9part \xe0 ins\xe9rer"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"count"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de colonnes \xe0 ajouter (doit \xeatre >0)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"insertAfter"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"vk table insert before"})," ou ",(0,t.jsx)(n.code,{children:"vk table insert after"})," ",(0,t.jsx)(n.em,{children:"column"})]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP INSERT TABLE COLUMNS"}),"  ins\xe8re une ou ",(0,t.jsx)(n.em,{children:"count"})," colonne(s) vide(s) dans le ",(0,t.jsx)(n.em,{children:"tableName"})," sp\xe9cifi\xe9 \xe0 l'index ",(0,t.jsx)(n.em,{children:"column"})," sp\xe9cifi\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsqu'une colonne a \xe9t\xe9 ins\xe9r\xe9e avec cette commande, son contenu est g\xe9n\xe9ralement modifi\xe9 \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"insertAfter"}),", vous pouvez passer une des constantes suivantes pour indiquer si la ou les colonnes doivent \xeatre ins\xe9r\xe9es avant ou apr\xe8s l'index ",(0,t.jsx)(n.em,{children:"column"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk table insert before"})}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Ins\xe9rer la(les) colonne(s) avant la ",(0,t.jsx)(n.em,{children:"column"})," (par d\xe9faut si omis)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk table insert after"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Ins\xe9rer la(les) colonne(s) apr\xe8s la ",(0,t.jsx)(n.em,{children:"column"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande ins\xe8re certaines colonnes dans la table ",(0,t.jsx)(n.em,{children:"tableName"}),", PAS dans la feuille. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"tableName"})," n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Voir les exemples pour ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);