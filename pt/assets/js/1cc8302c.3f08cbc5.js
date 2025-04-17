"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57505"],{480988:function(e,a,o){o.r(a),o.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/query-by-formula","title":"QUERY BY FORMULA","description":"QUERY BY FORMULA ( tabela {; formula} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/query-by-formula.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-formula","permalink":"/docs/pt/20-R8/commands/query-by-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-formula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-by-formula","title":"QUERY BY FORMULA","slug":"/commands/query-by-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY EXAMPLE","permalink":"/docs/pt/20-R8/commands/query-by-example"},"next":{"title":"QUERY SELECTION","permalink":"/docs/pt/20-R8/commands/query-selection"}}'),r=o("785893"),n=o("250065");let d={id:"query-by-formula",title:"QUERY BY FORMULA",slug:"/commands/query-by-formula",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"QUERY BY FORMULA"})," ( ",(0,r.jsx)(a.em,{children:"tabela"})," {; ",(0,r.jsx)(a.em,{children:"formula"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabela"}),(0,r.jsx)(a.td,{children:"Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabela para a qual retornar a sele\xe7\xe3o de registros"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"formula"}),(0,r.jsx)(a.td,{children:"Boolean"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"F\xf3rmula de pesquisa"})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:["QUERY BY FORMULA procura registros em ",(0,r.jsx)(a.em,{children:"tabela"}),". QUERY BY FORMULA modifica a sele\xe7\xe3o atual de ",(0,r.jsx)(a.em,{children:"tabela"})," para o processo atual e faz do primeiro registro o novo registro atual."]}),"\n",(0,r.jsxs)(a.p,{children:["QUERY BY FORMULA e ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})," funcionam exatamente da mesma maneira, exceto que QUERY BY FORMULA busca em todos os registros da tabela e ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})," busca unicamente nos registros da sele\xe7\xe3o atual."]}),"\n",(0,r.jsxs)(a.p,{children:["Os dois comandos aplicam ",(0,r.jsx)(a.em,{children:"formula"})," a cada registro da tabela ou da sele\xe7\xe3o. ",(0,r.jsx)(a.em,{children:"formula"})," \xe9 uma express\xe3o booleana que deve devolver TRUE ou FALSE. Se ",(0,r.jsx)(a.em,{children:"formula"})," devolve TRUE, o registro est\xe1 inclu\xeddo na nova sele\xe7\xe3o."]}),"\n",(0,r.jsxs)(a.p,{children:["O par\xe2metro ",(0,r.jsx)(a.em,{children:"formula"})," pode ser simples, como a compara\xe7\xe3o de um campo com um valor; ou complexa, como a realiza\xe7\xe3o de um c\xe1lculo ou inclusive uma avalia\xe7\xe3o dos valores em uma tabela relacionada. ",(0,r.jsx)(a.em,{children:"formula"})," pode ser uma fun\xe7\xe3o 4D (comando), ou uma express\xe3o que voc\xea tenha criado. Quando trabalhe com campos de tipo Alfa ou Texto, pode utilizar em ",(0,r.jsx)(a.em,{children:"formula"}),' s\xedmbolos arroba (@) assim como o operador "cont\xe9m" (%) para pesquisas de palavras chaves. Para maior informa\xe7\xe3o, por favor consulte a descri\xe7\xe3o do comando ',(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Aviso:"})," Par\xe2metros ($1...$n) n\xe3o s\xe3o aceitos em ",(0,r.jsx)(a.em,{children:"formula"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Se omitir o par\xe2metro ",(0,r.jsx)(a.em,{children:"formula"}),", 4D mostra a caixa de di\xe1logo de pesquisa pela f\xf3rmula (o usu\xe1rio pode adicionar uma linha de f\xf3rmula efetuando Alt+clique no bot\xe3o [+])."]}),"\n",(0,r.jsx)(a.p,{children:"Quando termina a pesquisa, o primeiro registro da nova sele\xe7\xe3o \xe9 carregado desde o disco e \xe9 convertido no registro atual."}),"\n",(0,r.jsxs)(a.p,{children:["Estes comandos s\xe3o otimizados e podem particularmente aproveitar os \xedndices. Quando o tipo de pesquisa o permite, esses comandos executam pesquisas equivalentes ao comando ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"}),". Por exemplo, a instru\xe7\xe3o QUERY BY FORMULA ([minhatabela]; [minhatabela]meucampo=valor) ser\xe1 executado igual que ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"})," ([minhatabela]; [minhatabela]meucampo=valor), que permite utilizar \xedndices. 4D tamb\xe9m pode otimizar pesquisas que contenham partes que n\xe3o possam ser otimizadas, executando primeiro as partes otimiz\xe1veis e depois combinando os resultados com o resto da pesquisa. Por exemplo, a instru\xe7\xe3o QUERY BY FORMULA ([minhatabela]; Length(meucampo)=valor1 | meucampo=valor2 ) ser\xe1 otimizado parcialmente."]}),"\n",(0,r.jsx)(a.p,{children:'Estes comandos por padr\xe3o realizam \u201Cuni\xf5es\u201D como SQL quando compara campos de tabelas diferentes. Isso significa que n\xe3o \xe9 necess\xe1rio que exista uma rela\xe7\xe3o autom\xe1tica estrutural entre as tabelas. Por exemplo, pode executar uma instru\xe7\xe3o do tipo QUERY BY FORMULA([Tabela_A];[Tabela_A]campo_X = [Tabela_B]campo_Y) (ver exemplo 3). A primeira parte da f\xf2rmula ([Table_A]field_X = [Table_B]field_Y) estabelece a uni\xe1o entre dois campos e a segunda parte ([Table_B]field_Y = "abc") define o crit\xe8rio de pesquisa . As regras abaixo s\xe3o aplicadas:'}),"\n",(0,r.jsxs)(a.p,{children:["-pelo menos um crit\xe9rio de pesquisa deve ser definido",(0,r.jsx)(a.br,{}),"\n-queryFormula n\xe3o pode conter mais que um campo de compara\xe7\xe3o na mesma tabela"]}),"\n",(0,r.jsx)(a.p,{children:"Se existirem, em geral as rela\xe7\xf5es entre as tabelas n\xe3o s\xe3o usadas. Entretanto, esses comandos utilizar\xe3o rela\xe7\xf5es autom\xe1ticas nos seguintes casos:"}),"\n",(0,r.jsxs)(a.p,{children:["- Se a formula n\xe3o pode ser quebrada em elementos da forma { campo ; comparador ; valor}",(0,r.jsx)(a.br,{}),"\n- Se dois campos da mesma tabela forem comparados."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota de compatibilidade"}),": por raz\xf5es de compatibilidade, \xe9 poss\xedvel desativar o mecanismo de uni\xf5es, seja globalmente atrav\xe9s das Prefer\xeancias do banco (apenas bancos de dados convertidos) ou por processos utilizando o comando ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"4D Server"})," este comando se executa no servidor, o qual otimiza sua execu\xe7\xe3o. Note que quando as vari\xe1veis s\xe3o chamadas diretamente em ",(0,r.jsx)(a.em,{children:"f\xf3rmula"}),", a ordena\xe7\xe3o se calcula com o valor da vari\xe1vel na m\xe1quina cliente. Por exemplo, a senten\xe7a QUERY BY FORMULA ([minhatabela]; [minhatabela]meucampo=minhavari\xe1vel) ser\xe1 executada sobre o servidor mas com o conte\xfado da vari\xe1vel minhavari\xe1vel da m\xe1quina cliente."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota de compatibilidade"}),": at\xe9 4D Server v11, este comando se executava na m\xe1quina cliente Por compatibilidade, este funcionamento \xe9 conservado nos bancos de dados convertidos a vers\xe3o 11. Uma prefer\xeancia de compatibilidade e um seletor do comando ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," permitem adotar o funcionamento da vers\xe3o 11 (execu\xe7\xe3o no servidor) nestes bancos de dados."]}),"\n",(0,r.jsx)(a.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(a.p,{children:["Este exemplo busca os registros para todas as faturas que sejam introduzidas em dezembro de qualquer ano. O princ\xedpio consiste em aplicar a fun\xe7\xe3o ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/month-of",title:"Month of",children:"Month of"})," a cada registro. Esta pesquisa n\xe3o poderia ser realizada de outra forma sem criar um campo separado para o m\xeas:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([Faturas];Month of([Faturas]Entrada)=12)\xa0// Buscar as faturas entradas em dezembro\n"})}),"\n",(0,r.jsx)(a.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"Este exemplo procura os registros das pessoas que tenham nomes com mais de 10 caracteres:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([Pessoas];Length([Pessoas]Nome)>10)\xa0// Pesquisar nomes de mais de dez caracteres\n"})}),"\n",(0,r.jsx)(a.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(a.p,{children:'Este exemplo utiliza uma uni\xe3o para buscar todas as linhas de faturas de cliente de "ACME" mesmo que as tabelas n\xe3o estejam relacionadas:'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query-by-sql",children:"QUERY BY SQL"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query-selection",children:"QUERY SELECTION"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})]}),"\n",(0,r.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero do comando"}),(0,r.jsx)(a.td,{children:"48"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Thread-seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modificar o registro atual"}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,r.jsx)(a.td,{})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return i},a:function(){return d}});var s=o(667294);let r={},n=s.createContext(r);function d(e){let a=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);