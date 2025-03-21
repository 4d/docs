"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91298"],{281053:function(e,a,o){o.r(a),o.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/default-table","title":"DEFAULT TABLE","description":"DEFAULT TABLE ( tabela )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/default-table.md","sourceDirName":"commands-legacy","slug":"/commands/default-table","permalink":"/docs/pt/commands/default-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdefault-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"default-table","title":"DEFAULT TABLE","slug":"/commands/default-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form table","permalink":"/docs/pt/commands/current-form-table"},"next":{"title":"NO DEFAULT TABLE","permalink":"/docs/pt/commands/no-default-table"}}'),r=o("785893"),s=o("250065");let d={id:"default-table",title:"DEFAULT TABLE",slug:"/commands/default-table",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"DEFAULT TABLE"})," ( ",(0,r.jsx)(a.em,{children:"tabela"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabela"}),(0,r.jsx)(a.td,{children:"Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabela a ser definida como padr\xe3o"})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Dica"}),": ainda que utilizar DEFAULT TABLE e omitir o nome da tabela podem fazer o c\xf3digo mais f\xe1cil de ler, muitos programadores consideram que a utiliza\xe7\xe3o deste comando em realidade traz mais inconvenientes que vantagens. Em particular, note que ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/default-table",children:"DEFAULT TABLE"})," \xe9 priorit\xe1rio quando utiliza por exemplo o comando ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/dialog",children:"DIALOG"})," com um formul\xe1rio projeto e h\xe1 um formul\xe1rio da tabela por padr\xe3o com o mesmo nome."]}),"\n",(0,r.jsxs)(a.p,{children:["DEFAULT TABLE define ",(0,r.jsx)(a.em,{children:"tabela"})," como a tabela por padr\xe3o para o processo atual."]}),"\n",(0,r.jsxs)(a.p,{children:["Um processo n\xe3o tem tabela por padr\xe3o at\xe9 que o comando DEFAULT TABLE tenha sido executada. Depois que seja definida uma tabela por padr\xe3o, qualquer comando que omita o par\xe2metro ",(0,r.jsx)(a.em,{children:"tabela"})," funcionar\xe1 sobre a tabela por padr\xe3o. Por exemplo, considere este comando:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Tabela];"formul\xe1rio")\n'})}),"\n",(0,r.jsx)(a.p,{children:"Se a tabela por padr\xe3o foi definida previamente como [Tabela], o mesmo comando poderia ser escrito desta forma:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0FORM SET INPUT("formul\xe1rio")\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Uma das raz\xf5es para definir a tabela por padr\xe3o \xe9 criar c\xf3digo que n\xe3o seja espec\xedfico para uma tabela. Isso permite operar o mesmo c\xf3digo para diferentes tabelas. Tamb\xe9m pode utilizar ponteiros para tabelas para escrever c\xf3digo que n\xe3o seja espec\xedfico a tabelas. Para maior informa\xe7\xe3o sobre esta t\xe9cnica, veja a descri\xe7\xe3o do comando ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/table-name",children:"Table name"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"DEFAULT TABLE n\xe3o permite a omiss\xe3o de nomes de tabelas quando se refere aos campos. Por exemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0[MinhaTabela]Meu Campo:="Uma String"\xa0// Correto\n'})}),"\n",(0,r.jsx)(a.p,{children:"n\xe3o pode ser escrita como:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Minha Tabela])\n\xa0Meu Campo:="Uma string"\xa0// INCORRETO\n'})}),"\n",(0,r.jsx)(a.p,{children:"porque uma tabela por padr\xe3o foi definida. No entanto, pode omitir o nome da tabela quando se refira aos campos nos triggers, nos formul\xe1rios, e nos objetos que pertencem a tabela."}),"\n",(0,r.jsx)(a.p,{children:"Em 4D, todas as tabelas est\xe3o \u201Cabertas\u201D e prontas para ser utilizadas. DEFAULT TABLE n\xe3o abre uma tabela, define uma tabela atual, ou prepara a tabela para entrada ou sa\xedda. DEFAULT TABLE \xe9 simplemente uma facilidade de programa\xe7\xe3o para facilitar a digita\xe7\xe3o e leitura do c\xf3digo."}),"\n",(0,r.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(a.p,{children:["O exemplo abaixo apresenta primeiro o c\xf3digo sem o comando DEFAULT TABLE. Depois mostra o mesmo c\xf3digo, com DEFAULT TABLE. O c\xf3digo \xe9 um loop comumente utilizado para adicionar novos registros a um banco de dados. Os comandos ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/form-set-input",children:"FORM SET INPUT"})," e ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"})," necesitam uma tabela como primeiro par\xe1metro:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Clientes];"Adicionar Registros")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Clientes])\n\xa0Until(OK=0)\n'})}),"\n",(0,r.jsx)(a.p,{children:"Neste c\xf3digo o resultado da tabela padr\xe3o:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Clientes])\n\xa0FORM SET INPUT("Adicionar Registros")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD\n\xa0Until(OK=0)\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/pt/commands/current-default-table",children:"Current default table"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/commands/no-default-table",children:"NO DEFAULT TABLE"})]}),"\n",(0,r.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero do comando"}),(0,r.jsx)(a.td,{children:"46"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Thread-seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return t},a:function(){return d}});var n=o(667294);let r={},s=n.createContext(r);function d(e){let a=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);