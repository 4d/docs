"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14274"],{285266:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/sql-load-record","title":"SQL LOAD RECORD","description":"SQL LOAD RECORD {( numReg )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-load-record.md","sourceDirName":"commands-legacy","slug":"/commands/sql-load-record","permalink":"/docs/pt/20-R7/commands/sql-load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-load-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-load-record","title":"SQL LOAD RECORD","slug":"/commands/sql-load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET OPTION","permalink":"/docs/pt/20-R7/commands/sql-get-option"},"next":{"title":"SQL LOGIN","permalink":"/docs/pt/20-R7/commands/sql-login"}}'),o=r("785893"),d=r("250065");let t={id:"sql-load-record",title:"SQL LOAD RECORD",slug:"/commands/sql-load-record",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SQL LOAD RECORD"})," {( ",(0,o.jsx)(n.em,{children:"numReg"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numReg"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de registros a carregar"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"O comando SQL LOAD RECORD recupera a 4D um ou mais registros da fonte de dados aberta na conex\xe3o atual."}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"numReg"})," \xe9 utilizado para definir o n\xfamero de registros a recuperar:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Se omitir este par\xe2metro, o comando recuperar\xe1 o registro atual da fonte de dados. Este princ\xedpio corresponde \xe0 recupera\xe7\xe3o de dados em um loop onde um registro \xe9 recuperado por vez."}),"\n",(0,o.jsxs)(n.li,{children:["Se passa um valor inteiro em ",(0,o.jsx)(n.em,{children:"numReg"}),", o comando recupera um n\xfamero de registros igual a ",(0,o.jsx)(n.em,{children:"numReg"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Se passa a constante SQL All Records (valor -1), o comando recuperar\xe1 todos os registros da tabela.\n",(0,o.jsx)(n.strong,{children:"Nota"}),": estes dois \xfaltimos par\xe2metros apenas tem sentido se os dados recuperados est\xe3o associados com arrays ou campos 4D."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel Sistema OK retorna 1. Do contr\xe1rio, retorna 0."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sql-cancel-load",children:"SQL CANCEL LOAD"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sql-execute",children:"SQL EXECUTE"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"822"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var s=r(667294);let o={},d=s.createContext(o);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);