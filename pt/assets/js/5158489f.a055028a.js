"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90346"],{949414:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/sql-export-selection","title":"SQL EXPORT SELECTION","description":"SQL EXPORT SELECTION ( tabela ; rotaPasta {; numArquivos {; tamMaxArquivos {; tamLimCampos}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sql-export-selection.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-selection","permalink":"/docs/pt/commands/sql-export-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sql-export-selection","title":"SQL EXPORT SELECTION","slug":"/commands/sql-export-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXPORT DATABASE","permalink":"/docs/pt/commands/sql-export-database"},"next":{"title":"SQL Get current data source","permalink":"/docs/pt/commands/sql-get-current-data-source"}}'),o=s("785893"),a=s("250065");let r={id:"sql-export-selection",title:"SQL EXPORT SELECTION",slug:"/commands/sql-export-selection",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SQL EXPORT SELECTION"})," ( ",(0,o.jsx)(n.em,{children:"tabela"})," ; ",(0,o.jsx)(n.em,{children:"rotaPasta"})," {; ",(0,o.jsx)(n.em,{children:"numArquivos"})," {; ",(0,o.jsx)(n.em,{children:"tamMaxArquivos"})," {; ",(0,o.jsx)(n.em,{children:"tamLimCampos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabela"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabela para a qual vai exportar a sele\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rotaPasta"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'Nome da rota da pasta de exporta\xe7\xe3o ou "" para exibir caixa de di\xe1logo de sele\xe7\xe3o de pasta'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numArquivos"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"M\xe1ximo n\xfamero de arquivos por pasta"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tamMaxArquivos"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tamanho m\xe1ximo de arquivo Export.sql (em Kb)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tamLimCampos"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tamanho limite (em bytes) abaixo do qual os conte\xfados dos campos Texto, BLOB ou Imagem s\xe3o inclu\xeddos no arquivo principal"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando SQL EXPORT SELECTION exporta ao formato SQL os registros da sele\xe7\xe3o atual da tabela 4D especificada pelo par\xe2metro ",(0,o.jsx)(n.em,{children:"Tabela"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando \xe9 quase id\xeantico ao comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sql-export-database",children:"SQL EXPORT DATABASE"}),'. O arquivo gerado pode ser utilizado diretamente pelo comando [#cmd id="1089"/] com o prop\xf3sito de importar dados em outra base 4D. A \xfanica diferen\xe7a entre estes dois comandos \xe9 que SQL EXPORT SELECTION apenas exporta a sele\xe7\xe3o de ',(0,o.jsx)(n.em,{children:"Tabela"})," enquanto ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," exporta o banco de dados inteiro. Al\xe9m disso, diferente do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sql-export-database",children:"SQL EXPORT DATABASE"}),", este comando n\xe3o funciona com as bancos SQL externos. Apenas pode ser utilizado com a banco principal."]}),"\n",(0,o.jsxs)(n.p,{children:["Consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," para uma descri\xe7\xe3o detalhada do funcionamento e par\xe2metros destes comandos."]}),"\n",(0,o.jsx)(n.p,{children:"Se a sele\xe7\xe3o atual estiver vazia, o comando n\xe3o faz nada. Note que neste caso, a pasta de destino n\xe3o \xe9 esvaziado."}),"\n",(0,o.jsx)(n.p,{children:"Se a exporta\xe7\xe3o for realizada corretamente, a vari\xe1vel OK assume o valor 1. Do contr\xe1rio, assume o valor 0."}),"\n",(0,o.jsx)(n.h3,{id:""}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/sql-export-database",children:"SQL EXPORT DATABASE"})}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1064"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let o={},a=t.createContext(o);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);