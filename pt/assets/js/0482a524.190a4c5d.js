"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94409"],{811406:function(s,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>c,metadata:()=>n,assets:()=>i,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"commands/theme/SQL_theme","title":"SQL","description":"|                                                                                                                             |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/theme/SQL.md","sourceDirName":"commands/theme","slug":"/commands/theme/SQL","permalink":"/docs/pt/20-R7/commands/theme/SQL","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FSQL.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"SQL_theme","title":"SQL","slug":"/commands/theme/SQL"},"sidebar":"docs","previous":{"title":"STRING LIST TO ARRAY","permalink":"/docs/pt/20-R7/commands/string-list-to-array"},"next":{"title":"Begin SQL","permalink":"/docs/pt/20-R7/commands/begin-sql"}}'),t=r("785893"),d=r("250065");let c={id:"SQL_theme",title:"SQL",slug:"/commands/theme/SQL"},l=void 0,i={},o=[];function h(s){let e={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...s.components};return(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsx)(e.tr,{children:(0,t.jsx)(e.th,{})})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/begin-sql",children:(0,t.jsx)(e.strong,{children:"Begin SQL"})}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/end-sql",children:(0,t.jsx)(e.strong,{children:"End SQL"})}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/is-field-value-null",children:[(0,t.jsx)(e.strong,{children:"Is field value Null"})," ( ",(0,t.jsx)(e.em,{children:"campo"})," ) : Boolean"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/query-by-sql",children:[(0,t.jsx)(e.strong,{children:"QUERY BY SQL"})," ( {",(0,t.jsx)(e.em,{children:"tabela"})," ;} ",(0,t.jsx)(e.em,{children:"sqlFormula"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/set-field-value-null",children:[(0,t.jsx)(e.strong,{children:"SET FIELD VALUE NULL"})," ( ",(0,t.jsx)(e.em,{children:"campo"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/sql-cancel-load",children:(0,t.jsx)(e.strong,{children:"SQL CANCEL LOAD"})}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-end-selection",children:[(0,t.jsx)(e.strong,{children:"SQL End selection"}),"  : Boolean"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-execute",children:[(0,t.jsx)(e.strong,{children:"SQL EXECUTE"})," ( ",(0,t.jsx)(e.em,{children:"instrucaoSQL"})," {; ",(0,t.jsx)(e.em,{children:"objAssoc"}),"}{; ",(0,t.jsx)(e.em,{children:"objAssoc2"})," ; ... ; ",(0,t.jsx)(e.em,{children:"objAssocN"}),"} )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-execute-script",children:[(0,t.jsx)(e.strong,{children:"SQL EXECUTE SCRIPT"})," ( ",(0,t.jsx)(e.em,{children:"rotaScript"})," ; ",(0,t.jsx)(e.em,{children:"a\xe7\xe3oErro"})," {; ",(0,t.jsx)(e.em,{children:"nomeAtrib"})," ; ",(0,t.jsx)(e.em,{children:"valorAtrib"}),"} {; ",(0,t.jsx)(e.em,{children:"nomeAtrib2"})," ; ",(0,t.jsx)(e.em,{children:"valorAtrib2"})," ; ... ; ",(0,t.jsx)(e.em,{children:"nomeAtribN"})," ; ",(0,t.jsx)(e.em,{children:"valorAtribN"}),"} )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-export-database",children:[(0,t.jsx)(e.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,t.jsx)(e.em,{children:"rotaPasta"})," {; ",(0,t.jsx)(e.em,{children:"numArquivos"})," {; ",(0,t.jsx)(e.em,{children:"tamMaxArquivos"})," {; ",(0,t.jsx)(e.em,{children:"tamLimCampos"}),"}}} )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-export-selection",children:[(0,t.jsx)(e.strong,{children:"SQL EXPORT SELECTION"})," ( ",(0,t.jsx)(e.em,{children:"tabela"})," ; ",(0,t.jsx)(e.em,{children:"rotaPasta"})," {; ",(0,t.jsx)(e.em,{children:"numArquivos"})," {; ",(0,t.jsx)(e.em,{children:"tamMaxArquivos"})," {; ",(0,t.jsx)(e.em,{children:"tamLimCampos"}),"}}} )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-get-current-data-source",children:[(0,t.jsx)(e.strong,{children:"SQL Get current data source"}),"  : Text"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-get-data-source-list",children:[(0,t.jsx)(e.strong,{children:"SQL GET DATA SOURCE LIST"})," ( ",(0,t.jsx)(e.em,{children:"tipoFonte"})," ; ",(0,t.jsx)(e.em,{children:"arrayNomesFontes"})," ; ",(0,t.jsx)(e.em,{children:"arrayDrivers"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-get-last-error",children:[(0,t.jsx)(e.strong,{children:"SQL GET LAST ERROR"})," ( ",(0,t.jsx)(e.em,{children:"codigoErro"})," ; ",(0,t.jsx)(e.em,{children:"textoErro"})," ; ",(0,t.jsx)(e.em,{children:"erroODBC"})," ; ",(0,t.jsx)(e.em,{children:"erroSQLServer"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-get-option",children:[(0,t.jsx)(e.strong,{children:"SQL GET OPTION"})," ( ",(0,t.jsx)(e.em,{children:"op\xe7ao"})," ; ",(0,t.jsx)(e.em,{children:"valor"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-load-record",children:[(0,t.jsx)(e.strong,{children:"SQL LOAD RECORD"})," {( ",(0,t.jsx)(e.em,{children:"numReg"})," )}"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-login",children:[(0,t.jsx)(e.strong,{children:"SQL LOGIN"})," {( ",(0,t.jsx)(e.em,{children:"entradaDados"})," ; ",(0,t.jsx)(e.em,{children:"nomeUsuario"})," ; ",(0,t.jsx)(e.em,{children:"senha"})," ; * )}"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/sql-logout",children:(0,t.jsx)(e.strong,{children:"SQL LOGOUT"})}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-set-option",children:[(0,t.jsx)(e.strong,{children:"SQL SET OPTION"})," ( ",(0,t.jsx)(e.em,{children:"op\xe7ao"})," ; ",(0,t.jsx)(e.em,{children:"valor"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsxs)(e.a,{href:"/docs/pt/20-R7/commands/sql-set-parameter",children:[(0,t.jsx)(e.strong,{children:"SQL SET PARAMETER"})," ( ",(0,t.jsx)(e.em,{children:"objeto"})," ; ",(0,t.jsx)(e.em,{children:"paramTipo"})," )"]}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/start-sql-server",children:(0,t.jsx)(e.strong,{children:"START SQL SERVER"})}),(0,t.jsx)(e.br,{})]})}),(0,t.jsx)(e.tr,{children:(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R7/commands/stop-sql-server",children:(0,t.jsx)(e.strong,{children:"STOP SQL SERVER"})}),(0,t.jsx)(e.br,{})]})})]})]})}function x(s={}){let{wrapper:e}={...(0,d.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},250065:function(s,e,r){r.d(e,{Z:function(){return l},a:function(){return c}});var n=r(667294);let t={},d=n.createContext(t);function c(s){let e=n.useContext(d);return n.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:c(s.components),n.createElement(d.Provider,{value:e},s.children)}}}]);