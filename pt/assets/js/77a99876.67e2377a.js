"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95823],{181836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(474848),r=t(28453);const d={id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},o=void 0,i={id:"ViewPro/commands/vp-remove-table-rows",title:"VP REMOVE TABLE ROWS",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-remove-table-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-table-rows",permalink:"/docs/pt/ViewPro/commands/vp-remove-table-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},sidebar:"docs",previous:{title:"VP REMOVE TABLE COLUMNS",permalink:"/docs/pt/ViewPro/commands/vp-remove-table-columns"},next:{title:"VP RESET SELECTION",permalink:"/docs/pt/ViewPro/commands/vp-reset-selection"}},a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18 R6"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE TABLE ROWS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"row"})," : Integer {; ",(0,s.jsx)(n.em,{children:"count"})," : Integer {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome da tabela"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice na tabela da linha inicial a remover"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"N\xfamero de linhas a remover (tem de ser >0)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP REMOVE TABLE ROWS"})," command removes one or ",(0,s.jsx)(n.em,{children:"count"})," row(s) from the specified ",(0,s.jsx)(n.em,{children:"tableName"})," at the specified ",(0,s.jsx)(n.em,{children:"row"})," index. O comando remove valores e estilos."]}),"\n",(0,s.jsxs)(n.p,{children:["This command removes rows from the ",(0,s.jsx)(n.em,{children:"tableName"})," table, NOT from the sheet. O n\xfamero total de linhas da folha n\xe3o \xe9 impactado pelo  comando. Dados presentes abaixo da tabela (se houver) s\xe3o movidos automaticamente de acordo com o n\xfamero de linhas removidas."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"tableName"})," table is bound to a ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-data-context",children:"data context"}),", the command removes element(s) from the collection."]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"tableName"})," n\xe3o existir, n\xe3o acontece nada."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:'Para remover duas linhas da 3.\xaa linha da tabela "dataTable":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(296540);const r={},d=s.createContext(r);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);