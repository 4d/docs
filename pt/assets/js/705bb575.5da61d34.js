"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76355"],{534409:function(e,o,a){a.r(o),a.d(o,{default:()=>c,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/no-default-table","title":"NO DEFAULT TABLE","description":"NO DEFAULT TABLE","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/no-default-table.md","sourceDirName":"commands-legacy","slug":"/commands/no-default-table","permalink":"/docs/pt/commands/no-default-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fno-default-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"no-default-table","title":"NO DEFAULT TABLE","slug":"/commands/no-default-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DEFAULT TABLE","permalink":"/docs/pt/commands/default-table"},"next":{"title":"Tools","permalink":"/docs/pt/category/tools"}}'),n=a("785893"),t=a("250065");let d={id:"no-default-table",title:"NO DEFAULT TABLE",slug:"/commands/no-default-table",displayed_sidebar:"docs"},s=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"NO DEFAULT TABLE"})}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(o.table,{children:(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,n.jsx)(o.th,{})]})})}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando NO DEFAULT TABLE permite cancelar o efeito do comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/default-table",children:"DEFAULT TABLE"}),". Depois da execu\xe7\xe3o deste comando, n\xe3o h\xe1 tabela padr\xe3o definida para o processo.",(0,n.jsx)(o.br,{}),"\nEste comando n\xe3o tenr\xe1 efeito se o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/default-table",children:"DEFAULT TABLE"})," n\xe3o tiver sido chamado anteriormente."]}),"\n",(0,n.jsxs)(o.p,{children:["Este comando est\xe1 relacionado com o uso de formul\xe1rios de projeto (formul\xe1rios n\xe3o associados a tabelas): a maioria dos comandos relacionados aos formul\xe1rios (al\xe9m dos formul\xe1rios de usu\xe1rio) aceitam um par\xe2metro opcional ",(0,n.jsx)(o.em,{children:"Tabela"})," como primeiro par\xe2metro. Por exemplo, este \xe9 o caso dos comandos ",(0,n.jsx)(o.em,{children:"_o_FORM GET PARAMETER"}),", ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"})," ou ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/dialog",children:"DIALOG"}),". Como um formul\xe1rio de projeto e um formul\xe1rio de tabela podem ter o mesmo nome, este par\xe2metro pode ser utilizado para determinar o formul\xe1rio a utilizar: passe o par\xe2metro ",(0,n.jsx)(o.em,{children:"Tabela"})," quando queira apontar a um formul\xe1rio tabela e om\xedta-o no caso de um formul\xe1rio de projeto."]}),"\n",(0,n.jsx)(o.p,{children:"Em um banco que contiver um formul\xe1rio de projeto chamado \u201CMeuFormul\xe1rio\u201D e um formul\xe1rio de tabela com o mesmo nome para a tabela [Tabela1]:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0DIALOG([Tabela1];"MeuFormul\xe1rio")\xa0//4D utiliza o formul\xe1rio de tabela DIALOG("MeuFormul\xe1rio") `4D utiliza o formul\xe1rio de projeto\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Entretanto, este principio \xe9 nulo e inv\xe1lido se o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/default-table",children:"DEFAULT TABLE"})," for executado quando a banco contiver um formul\xe1rio de projeto e um formul\xe1rio de tabela com o mesmo nome. Na verdade, neste caso 4D utilizar\xe1 o formul\xe1rio de tabela por padr\xe3o, mesmo se n\xe3o for passado o par\xe2metro ",(0,n.jsx)(o.em,{children:"tabela"}),". Para garantir o uso de formul\xe1rios de projeto, simplesmente utilize o comando NO DEFAULT TABLE ."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:'Em um banco que contenha um formul\xe1rio de projeto chamado "oFormul\xe1rio" e um formul\xe1rio de tabela com o mesmo nome para a tabela [Tabela1]:'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Tabela1])\n\xa0DIALOG("oFormul\xe1rio")\xa0//4D utiliza o formul\xe1rio de tabela\n\xa0NO DEFAULT TABLE\n\xa0DIALOG("oFormul\xe1rio")\xa0//4D utiliza o formul\xe1rio de projeto\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/default-table",children:"DEFAULT TABLE"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"993"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return s},a:function(){return d}});var r=a(667294);let n={},t=r.createContext(n);function d(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);