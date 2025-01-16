"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1180"],{642282:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/sql-get-current-data-source","title":"SQL Get current data source","description":"SQL Get current data source  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-get-current-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-current-data-source","permalink":"/docs/pt/20-R7/commands/sql-get-current-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-current-data-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-get-current-data-source","title":"SQL Get current data source","slug":"/commands/sql-get-current-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXPORT SELECTION","permalink":"/docs/pt/20-R7/commands/sql-export-selection"},"next":{"title":"SQL GET DATA SOURCE LIST","permalink":"/docs/pt/20-R7/commands/sql-get-data-source-list"}}'),r=n("785893"),d=n("250065");let a={id:"sql-get-current-data-source",title:"SQL Get current data source",slug:"/commands/sql-get-current-data-source",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SQL Get current data source"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Nome da fonte de dados atualmente sendo usada"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando SQL Get current data source retorna o nome da fonte de dados atual da aplica\xe7\xe3o. A fonte de dados atual recebe as pesquisas SQL executadas dentro das estruturas ",(0,r.jsx)(t.strong,{children:"Begin SQL/End SQL"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['Quando a fonte de dados atual for o banco 4D local, o comando retorna a cadeia \u201C;DB4D_SQL_LOCAL;\u201D, que corresponde ao valor da constante SQL_INTERNAL (tema "',(0,r.jsx)(t.em,{children:"SQL"}),'").']}),"\n",(0,r.jsx)(t.p,{children:"Este comando permite verificar a fonte de dados atual, geralmente antes de executar uma pesquisa SQL."}),"\n",(0,r.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/begin-sql",children:"Begin SQL"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/end-sql",children:"End SQL"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/sql-get-data-source-list",children:"SQL GET DATA SOURCE LIST"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/sql-login",children:"SQL LOGIN"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/sql-logout",children:"SQL LOGOUT"})]}),"\n",(0,r.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N\xfamero do comando"}),(0,r.jsx)(t.td,{children:"990"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread-seguro"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(667294);let r={},d=s.createContext(r);function a(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);