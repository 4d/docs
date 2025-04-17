"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66224"],{576646:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-remove-table-columns","title":"VP REMOVE TABLE COLUMNS","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-remove-table-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-table-columns","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-remove-table-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-remove-table-columns","title":"VP REMOVE TABLE COLUMNS"},"sidebar":"docs","previous":{"title":"VP REMOVE TABLE","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-remove-table"},"next":{"title":"VP REMOVE TABLE ROWS","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-remove-table-rows"}}'),s=t("785893"),d=t("250065");let o={id:"vp-remove-table-columns",title:"VP REMOVE TABLE COLUMNS"},l=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18 R6"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE TABLE COLUMNS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"column"})," : Integer {; ",(0,s.jsx)(n.em,{children:"count"})," : Integer {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome da tabela"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice na tabela da coluna inicial a remover"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"N\xfamero de colunas a remover (tem de ser >0)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP REMOVE TABLE COLUMNS"})," command removes one or ",(0,s.jsx)(n.em,{children:"count"})," column(s) in the specified ",(0,s.jsx)(n.em,{children:"tableName"})," at the specified ",(0,s.jsx)(n.em,{children:"column"})," index. O comando remove valores e estilos."]}),"\n",(0,s.jsxs)(n.p,{children:["The command removes columns from the ",(0,s.jsx)(n.em,{children:"tableName"})," table, NOT from the sheet. O n\xfamero total de colunas da folha n\xe3o \xe9 impactado pelo  comando. Os dados presentes \xe0 direita da tabela (se houver) s\xe3o automaticamente movidos para a esquerda conforme o n\xfamero de colunas removidas."]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"tableName"})," n\xe3o existir, n\xe3o acontece nada."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:'Para remover duas colunas da 3.\xaa coluna da tabela "dataTable":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-remove-table-rows",children:"VP REMOVE TABLE ROWS"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);