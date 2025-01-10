"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95053"],{211404:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/sql-get-last-error","title":"SQL GET LAST ERROR","description":"SQL GET LAST ERROR ( codigoErro ; textoErro ; erroODBC ; erroSQLServer )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-get-last-error.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-last-error","permalink":"/docs/pt/commands/sql-get-last-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-last-error.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-get-last-error","title":"SQL GET LAST ERROR","slug":"/commands/sql-get-last-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET DATA SOURCE LIST","permalink":"/docs/pt/commands/sql-get-data-source-list"},"next":{"title":"SQL GET OPTION","permalink":"/docs/pt/commands/sql-get-option"}}'),t=n("785893"),s=n("250065");let d={id:"sql-get-last-error",title:"SQL GET LAST ERROR",slug:"/commands/sql-get-last-error",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"SQL GET LAST ERROR"})," ( ",(0,t.jsx)(r.em,{children:"codigoErro"})," ; ",(0,t.jsx)(r.em,{children:"textoErro"})," ; ",(0,t.jsx)(r.em,{children:"erroODBC"})," ; ",(0,t.jsx)(r.em,{children:"erroSQLServer"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"codigoErro"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"C\xf3digo do Erro"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"textoErro"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Erro do texto"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"erroODBC"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"C\xf3digo do erro ODBC"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"erroSQLServer"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"C\xf3digo de erro nativo do servidor"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(r.p,{children:"O comando SQL GET LAST ERROR retorna a informa\xe7\xe3o relacionada com o \xfaltimo erro encontrado durante a execu\xe7\xe3o de um comando ODBC. O erro pode vir da aplica\xe7\xe3o 4D, da rede, da fonte ODBC, etc."}),"\n",(0,t.jsxs)(r.p,{children:["Este comando geralmente deve ser chamado no contexto de um m\xe9todo de gest\xe3o de erros instalado utilizando o comando ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["O par\xe2metro ",(0,t.jsx)(r.em,{children:"codigoErro"})," retorna o c\xf3digo do erro."]}),"\n",(0,t.jsxs)(r.li,{children:["O par\xe2metro ",(0,t.jsx)(r.em,{children:"textoErro"})," retorna o texto do erro.\nOs dos \xfaltimos par\xe2metros apenas s\xe3o preenchidos quando o erro vem da fonte ODBC; do contr\xe1rio, s\xe3o retornados vazios."]}),"\n",(0,t.jsxs)(r.li,{children:["O par\xe2metro ",(0,t.jsx)(r.em,{children:"erroODBC"})," retorna o c\xf3digo do erro ODBC (estado SQL)."]}),"\n",(0,t.jsxs)(r.li,{children:["O par\xe2metro ",(0,t.jsx)(r.em,{children:"erroSQLServer"})," retorna o c\xf3digo do erro nativo servidor SQL."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/last-errors",children:"Last errors"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"825"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var o=n(667294);let t={},s=o.createContext(t);function d(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);