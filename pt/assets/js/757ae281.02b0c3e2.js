"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74792"],{125981:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-rows","title":"WP TABLE DELETE ROWS","description":"WP TABLE DELETE ROWS ( objTarget ) | ( refTabela ; numLinha {; nbLinhas} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-delete-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-rows","permalink":"/docs/pt/WritePro/commands/wp-table-delete-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-delete-rows","title":"WP TABLE DELETE ROWS","slug":"/WritePro/commands/wp-table-delete-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/pt/WritePro/commands/wp-table-delete-columns"},"next":{"title":"WP Table get cells","permalink":"/docs/pt/WritePro/commands/wp-table-get-cells"}}'),t=a("785893"),s=a("250065");let i={id:"wp-table-delete-rows",title:"WP TABLE DELETE ROWS",slug:"/WritePro/commands/wp-table-delete-rows",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP TABLE DELETE ROWS"})," ( ",(0,t.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,t.jsx)(n.em,{children:"refTabela"})," ; ",(0,t.jsx)(n.em,{children:"numLinha"})," {; ",(0,t.jsx)(n.em,{children:"nbLinhas"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objTarget"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Range ou elemento ou documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refTabela"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia de Tabela"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numLinha"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"n\xfamero \xedndice Linhas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbLinhas"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero linhas a apagar"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"WP TABLE DELETE ROWS"})," elimina uma ou v\xe1rias linhas de uma tabela 4D Write Pro."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando admite duas sintaxes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Se passar um objTarget como primeiro par\xe2metro, o comando eliminar\xe1 todas as linhas nas tabelas que se intersecta com o target. objTarget pode conter:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"uma range ou"}),"\n",(0,t.jsx)(n.li,{children:"um elemento (fila / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / imagem inline / se\xe7\xe3o / subse\xe7\xe3o), ou"}),"\n",(0,t.jsx)(n.li,{children:"um documento 4D Write Pro."}),"\n"]}),"\nSe objTarget se intersectar com v\xe1rias tabelas, se eliminam as filas tocadas em todas as tabelas. Se objTarget n\xe3o se intersectar com uma tabela, o comando n\xe3o faz nada (n\xe3o se gera nenhum erro).",(0,t.jsx)(n.br,{}),"\nCom esta sintaxe, se ignora o par\xe2metro ",(0,t.jsx)(n.em,{children:"nbLineas"})," (se passar)."]}),"\n",(0,t.jsxs)(n.li,{children:["Se passar os par\xe2metros ",(0,t.jsx)(n.em,{children:"refTabela e"})," ",(0,t.jsx)(n.em,{children:"numLinha"}),", o comando eliminar\xe1 as linhas da tabela designada, come\xe7ando no n\xfamero de \xedndice de linha especificada.",(0,t.jsx)(n.br,{}),"\nCom esta sintaxe, o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"nbLineas"})," define o n\xfamero de linhas a eliminar de ",(0,t.jsx)(n.em,{children:"refTabela"}),". De forma predeterminada, se for omitido este par\xe2metro, se elimina uma linha."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Eliminar todas as linhas de uma taberla eliminar\xe1 toda a tabela."}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Se quiser eliminar duas linhas da tabela ",(0,t.jsx)(n.em,{children:"Invoice"}),". Este c\xf3digo:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//recupera a tabela "Invoice"\n\xa0\n\xa0WP TABLE DELETE ROWS($table;3;2)\xa0//elimina 2 linhas depois da 2da linha (3ra posi\xe7\xe3o)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Eliminar\xe1 as duas linhas da localiza\xe7\xe3o inicial:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(479920).Z+"",width:"756",height:"338"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-table-delete-columns",children:"WP TABLE DELETE COLUMNS"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},479920:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict4680306.en-118b136b14ce3f07f9e9923676db4cf2.png"},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);