/*! For license information please see c93aabfb.a2850477.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57702],{539342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},d=void 0,i={id:"ViewPro/commands/vp-remove-table-rows",title:"VP REMOVE TABLE ROWS",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-remove-table-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-table-rows",permalink:"/docs/pt/ViewPro/commands/vp-remove-table-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-rows.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},sidebar:"docs",previous:{title:"VP REMOVE TABLE COLUMNS",permalink:"/docs/pt/ViewPro/commands/vp-remove-table-columns"},next:{title:"VP RESET SELECTION",permalink:"/docs/pt/ViewPro/commands/vp-reset-selection"}},a={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP REMOVE TABLE ROWS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"row"})," : Integer {; ",(0,r.jsx)(n.em,{children:"count"})," : Integer {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome da tabela"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice na tabela da linha inicial a remover"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Number of rows to remove (must be >0)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP REMOVE TABLE ROWS"})," command removes one or ",(0,r.jsx)(n.em,{children:"count"})," row(s) from the specified ",(0,r.jsx)(n.em,{children:"tableName"})," at the specified ",(0,r.jsx)(n.em,{children:"row"})," index. O comando remove valores e estilos."]}),"\n",(0,r.jsxs)(n.p,{children:["This command removes rows from the ",(0,r.jsx)(n.em,{children:"tableName"})," table, NOT from the sheet. O n\xfamero total de linhas da folha n\xe3o \xe9 impactado pelo  comando. Dados presentes abaixo da tabela (se houver) s\xe3o movidos automaticamente de acordo com o n\xfamero de linhas removidas."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"tableName"})," table is bound to a ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-data-context",children:"data context"}),", the command removes element(s) from the collection."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"tableName"})," does not exist, nothing happens."]}),"\n",(0,r.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:'Para remover duas linhas da 3.\xaa linha da tabela "dataTable":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);