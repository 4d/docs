"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41105"],{448653:function(e,a,s){s.r(a),s.d(a,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>n});var o=JSON.parse('{"id":"commands-legacy/query","title":"QUERY","description":"QUERY ( {tabela }{;}{ criterioPesquisa {; *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query.md","sourceDirName":"commands-legacy","slug":"/commands/query","permalink":"/docs/pt/commands/query","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query","title":"QUERY","slug":"/commands/query","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY FORMULA","permalink":"/docs/pt/commands/order-by-formula"},"next":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/pt/commands/query-by-attribute"}}'),r=s("785893"),i=s("250065");let n={id:"query",title:"QUERY",slug:"/commands/query",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Constru\xe7\xe3o de uma linha de pesquisa",id:"constru\xe7\xe3o-de-uma-linha-de-pesquisa",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Exemplo 9",id:"exemplo-9",level:4},{value:"Exemplo 10",id:"exemplo-10",level:4},{value:"Exemplo 11",id:"exemplo-11",level:4},{value:"Exemplo 12",id:"exemplo-12",level:4},{value:"Exemplo 13",id:"exemplo-13",level:4},{value:"Exemplo 14",id:"exemplo-14",level:4},{value:"Exemplo 15",id:"exemplo-15",level:4},{value:"Exemplo 16",id:"exemplo-16",level:4},{value:"Exemplo 17",id:"exemplo-17",level:4},{value:"Exemplo 18",id:"exemplo-18",level:4},{value:"Exemplo 19",id:"exemplo-19",level:4},{value:"Exemplo 20",id:"exemplo-20",level:4},{value:"Exemplo 21",id:"exemplo-21",level:4},{value:"Exemplo 22",id:"exemplo-22",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function t(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"QUERY"})," ( {",(0,r.jsx)(a.em,{children:"tabela"})," }{;}{ ",(0,r.jsx)(a.em,{children:"criterioPesquisa"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabela"}),(0,r.jsx)(a.td,{children:"Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabela para a qual devolver uma sele\xe7\xe3o de registros ou Tabela por padr\xe3o, se for omitido"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"criterioPesquisa"}),(0,r.jsx)(a.td,{children:"Expression"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Crit\xe9rio de pesquisa"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"*"}),(0,r.jsx)(a.td,{children:"Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Continuar a execu\xe7\xe3o da pesquisa"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:["O comando QUERY pesquisa os registros que correspondem ao crit\xe9rio especificado em ",(0,r.jsx)(a.em,{children:"criterioPesquisa"})," e devolve una sele\xe7\xe3o de registros de ",(0,r.jsx)(a.em,{children:"tabela"}),". QUERY modifica a sele\xe7\xe3o atual de tabela para o processo atual e volve o primeiro registro na nova sele\xe7\xe3o o registro atual."]}),"\n",(0,r.jsxs)(a.p,{children:["Se omite o par\xe2metro ",(0,r.jsx)(a.em,{children:"tabela"}),", o comando se aplica a tabela por padr\xe3o. Se n\xe3o tiver definido una tabela por padr\xe3o, se gera um erro."]}),"\n",(0,r.jsxs)(a.p,{children:["Se n\xe3o especifica ",(0,r.jsx)(a.em,{children:"criterioPesquisa"})," nem o par\xe2metro ",(0,r.jsx)(a.em,{children:"*"}),", QUERY mostra a caixa de di\xe1logo do editor de pesquisas para ",(0,r.jsx)(a.em,{children:"tabela"})," (exceto quando for a \xfaltima fila de una pesquisa m\xfaltipla, ver exemplo 2):"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:s(369091).Z+"",width:"856",height:"164"})}),"\n",(0,r.jsx)(a.p,{children:"Para maior informa\xe7\xe3o sobre a utiliza\xe7\xe3o deste editor, consulte o Manual de Desenho."}),"\n",(0,r.jsxs)(a.p,{children:["O usu\xe1rio constr\xf3i a pesquisa, logo clica no bot\xe3o Pesquisar ou Pesquisar na sele\xe7\xe3o. Se a pesquisa se realiza Sem interrup\xe7\xf5es, a vari\xe1vel sistema OK toma o valor 1. Se o usu\xe1rio clicar em Cancelar, o comando QUERY \xe9 interrompido sem realizar a pesquisa e a vari\xe1vel OK toma o valor ",(0,r.jsx)(a.em,{children:"0"})," (zero)."]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir mostra o editor de pesquisas para a tabela [Produtos]:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Produtos])\n"})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"A linha seguinte mostra o editor de pesquisas para a tabela por padr\xe3o (se for definido)"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Se especifica o par\xe2metro ",(0,r.jsx)(a.em,{children:"criterioPesquisa"}),", o editor de pesquisas n\xe3o \xe9 mostrado e a pesquisa se define por programa\xe7\xe3o. Para pesquisas simples (pesquisas em um s\xf3 campo) voc\xea chama QUERY uma vez com o par\xe2metro ",(0,r.jsx)(a.em,{children:"criterioPesquisa"}),". Para pesquisas complexas (pesquisas en m\xfaltiplos campos o com m\xfaltiplas condi\xe7\xf5es), chame QUERY tantas vezes como seja necess\xe1rio com o par\xe2metro ",(0,r.jsx)(a.em,{children:"criterioPesquisa"}),", e o par\xe2metro opcional *, exceto para a \xfaltima chamada QUERY, a qual inicia a pesquisa."]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca as [Pessoas] cujo nome come\xe7a por \u201Ca\u201D:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Nome="a@")\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca as [Pessoas] cujo nome come\xe7a por \u201Ca\u201D ou \u201Cb\u201D:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Nome="a@";*)\xa0// * indica que h\xe1 outro crit\xe9rio de pesquisa\n\xa0QUERY([Pessoas];|;[Pessoas]Nome="b@")\xa0// Sem * indica o final da defini\xe7\xe3o dos crit\xe9rios de pesquisa e o in\xedcio da execu\xe7\xe3o da pesquisa.\n'})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," o modo de interpreta\xe7\xe3o do caractere @ nas pesquisas pode ser modificado em uma op\xe7\xe3o das prefer\xeancias. Para maior informa\xe7\xe3o, consulte a se\xe7\xe3o ",(0,r.jsx)(a.em,{children:"Operadores de Compara\xe7\xe3o"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"constru\xe7\xe3o-de-uma-linha-de-pesquisa",children:"Constru\xe7\xe3o de uma linha de pesquisa"}),"\n",(0,r.jsxs)(a.p,{children:["O par\xe2metro ",(0,r.jsx)(a.em,{children:"crit\xe9rioPesquisa"})," utiliza a seguinte sintaxe:"]}),"\n",(0,r.jsx)(a.p,{children:"{ operador; } campo comparador valor"}),"\n",(0,r.jsx)(a.p,{children:"O operador se utiliza para unir as chamadas a QUERY quando se definem pesquisas m\xfaltiplas. Os operadores dispon\xedveis s\xe3o os mesmos do editor de pesquisas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Operador"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"S\xedmbolo a utilizar com QUERY"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"AND"}),(0,r.jsx)(a.td,{children:"&"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"OR"}),(0,r.jsx)(a.td,{children:"|"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Except"}),(0,r.jsx)(a.td,{children:"#"})]})]})]}),"\n",(0,r.jsx)(a.p,{children:"O operador \xe9 opcional e n\xe3o \xe9 necess\xe1rio para a primeira chamada a QUERY de uma pesquisa m\xfaltipla, ou se a pesquisa for uma pesquisa simples."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["O ",(0,r.jsx)(a.em,{children:"campo"})," \xe9 o campo a buscar. O ",(0,r.jsx)(a.em,{children:"campo"})," pode pertencer a outra tabela se pertence a uma tabela Um relacionada a ",(0,r.jsx)(a.em,{children:"tabela"})," com rela\xe7\xe3o autom\xe1tica ou manual. A tabela \xe0 qual se aplica QUERY deve ser a tabela Muitos."]}),"\n",(0,r.jsxs)(a.li,{children:["O ",(0,r.jsx)(a.em,{children:"operador"})," \xe9 o elemento que permite comparar ",(0,r.jsx)(a.em,{children:"campo"})," e ",(0,r.jsx)(a.em,{children:"criterioPesquisa"}),". Esta \xe9 a lista de poss\xedveis comparadores:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Comparador"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"S\xedmbolo a utilizar com QUERY"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Igual a"}),(0,r.jsx)(a.td,{children:"="})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Diferente de"}),(0,r.jsx)(a.td,{children:"#"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Menor que"}),(0,r.jsx)(a.td,{children:"<"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Maior que"}),(0,r.jsx)(a.td,{children:">"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Menor ou igual a"}),(0,r.jsx)(a.td,{children:"<="})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Maior ou igual a"}),(0,r.jsx)(a.td,{children:">="})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": \xe9 poss\xedvel definir o comparador sob a forma de uma express\xe3o alfanum\xe9rica em lugar de um s\xedmbolo. Nesse caso, \xe9 obrigat\xf3rio utilizar ponto e v\xedrgula para dissociar os elementos da string de pesquisa. Este princ\xedpio permite por exemplo criar seq\xfc\xeancias de pesquisas param\xe9tricas variando o comparador, ou construir interfaces de pesquisa usu\xe1rio personalizadas. Consulte o exemplo 19."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["O ",(0,r.jsx)(a.em,{children:"valor"})," \xe9 o dado que se compara com o conte\xfado de ",(0,r.jsx)(a.em,{children:"campo"}),". O valor pode ser uma express\xe3o do mesmo tipo que ",(0,r.jsx)(a.em,{children:"campo"}),'. O tipo de valor avaliado uma vez, ao come\xe7o da pesquisa e n\xe3o para cada registro. Se a pesquisa se refere ao conte\xfado de uma cadeia de caracteres, utilize em valor o s\xedmbolo arroba (@) para isolar o conte\xfado a buscar, por exemplo "@Perez@". \xc9 de anotar, neste caso, que voc\xea se beneficiar\xe1 s\xf3 de forma parcial de uma pesquisa indexada (compatibidade de armazenamento).']}),"\n",(0,r.jsxs)(a.li,{children:["A pesquisa por palavras chaves est\xe1 s\xf3 dispon\xedvel para campos tipo Alfa e Texto. Por favor consulte a se\xe7\xe3o ",(0,r.jsx)(a.em,{children:"Operadores de Compara\xe7\xe3o"})," para mais informa\xe7\xe3o sobre esse tipo de pesquisa."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Estas s\xe3o as regras a considerar para a constru\xe7\xe3o de pesquisas m\xfaltiplas:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"A primeira linha n\xe3o deve conter um operador."}),"\n",(0,r.jsx)(a.li,{children:"As seguintes linhas devem come\xe7ar com um operador."}),"\n",(0,r.jsx)(a.li,{children:"Todas as linhas, exceto a \xfaltima, devem utilizar o par\xe2metro *."}),"\n",(0,r.jsxs)(a.li,{children:["Para iniciar a pesquisa, n\xe3o passe o par\xe2metro * durante a constru\xe7\xe3o de sua \xfaltima linha. Alternativamente, pode executar o comando QUERY sem outros par\xe2metros diferentes \xe0 tabela (o editor de pesquisas n\xe3o \xe9 mostrado; em seu lugar, se executa a pesquisa m\xfaltipla).\n",(0,r.jsx)(a.strong,{children:"Nota"}),": cada tabela mant\xe9m sua pr\xf3pria constru\xe7\xe3o de pesquisa atual. Isto significa que pode criar m\xfaltiplas pesquisas simultaneamente, uma para cada tabela. Deve utilizar o par\xe2metro tabela ou especificar uma tabela padr\xe3o."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Sem importar de que maneira tenha sido definida uma pesquisa:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Se a opera\xe7\xe3o de pesquisa vai tomar algum tempo, 4D mostra automaticamente uma mensagem que contenha um term\xf4metro de progresso. Estas mensagens podem ser ativadas ou desativadas utilizando os comandos ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/messages-on",title:"MESSAGES ON",children:"MESSAGES ON"})," e ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/messages-off",title:"MESSAGES OFF",children:"MESSAGES OFF"}),". Se for mostrado o term\xf4metro de progresso, o usu\xe1rio pode clicar no botao Parar para interromper a pesquisa. Se a pesquisa \xe9 completada, OK toma o valor 1. Do contr\xe1rio, se a pesquisa for interrompida, OK toma o valor 0 (zero)."]}),"\n",(0,r.jsxs)(a.li,{children:["Se os campos indexados s\xe3o especificados, a pesquisa \xe9 otimizada cada vez que seja poss\xedvel (se busca primeiro nos campo indexados) reduzindo ao m\xe1ximo a dura\xe7\xe3o da opera\xe7\xe3o. O comando usa os \xedndices compostos para as pesquisas utilizando ",(0,r.jsx)(a.em,{children:"AND"})," (&"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(a.p,{children:"Pesquisamos os registros para que correspondam a pessoas com o sobrenome Silva:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Sobrenome="Silva")\n'})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," se o campo Sobrenome est\xe1 indexado, nos beneficiamos de uma pesquisa acelerada utilizando o \xedndice."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Lembrete:"})," esta pesquisa encontrar\xe1 registros como \u201CSilva\u201D, \u201Csilva\u201D, \u201CSILVA\u201D, etc. Se quer que a pesquisa considere as mai\xfasculas e min\xfasculas, defina crit\xe9rios adicionais que utilizem os c\xf3digos ASCII."]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca os registros de pessoas chamadas Carlos Silva. O campo Sobrenome est\xe1 indexado. O campo Nome n\xe3o est\xe1 indexado."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Sobrenome="silva";*)\xa0// Buscar todas as pessoas de sobrenome Silva\n\xa0QUERY([Pessoas];\xa0&\xa0;[Pessoas]Nome="carlos")\xa0// e que tamb\xe9m s\xe3o chamadas Carlos\n'})}),"\n",(0,r.jsx)(a.p,{children:"Quando se realiza a pesquisa, primeiro se realiza uma pesquisa r\xe1pida no campo indexado Sobrenome, e se reduz a sele\xe7\xe3o de registros \xe0s pessoas de Sobrenome Silva. A pesquisa depois busca sequencialmente no campo Nome nesta sele\xe7\xe3o de registros."}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,r.jsxs)(a.p,{children:["O exemplo abaixo aproveitarr\xe1 automaticamente um \xedndice composto dos campos ",(0,r.jsx)(a.em,{children:"[People]First Name"}),"+",(0,r.jsx)(a.em,{children:"[People]Last Name"})," (se existir) para encontrar os registros de todas as pessoas chamadas John Smith."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([People];[People]First Name="john";*)\xa0// Buscar a cada pessoa chamada John\n\xa0QUERY([People];&;[People]Last Name="smith")\xa0// com sobrenome Smith\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Para mais informa\xe7\xe3o, consulte ",(0,r.jsx)(a.em,{children:"\xcdndices compostos"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir pesquisa registros de pessoas de sobrenome Silva ou Oliveira. O campo sobrenome est\xe1 indexado."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Sobrenome="silva";*)\xa0// Buscar todas as pessoas de sobrenome Silva\u2026\n\xa0QUERY([Pessoas];|;[Pessoas]Sobrenome="oliveira")\xa0// ...ou Oliveira\n'})}),"\n",(0,r.jsx)(a.p,{children:"O comando QUERY utiliza o \xedndice do campo Sobrenome para ambas as pesquisas. As duas pesquisas s\xe3o realizadas e seus resultados s\xe3o colocados em conjuntos internos que s\xe3o combinados eventualmente utilizando uma opera\xe7\xe3o de uni\xe3o."}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-9",children:"Exemplo 9"}),"\n",(0,r.jsxs)(a.p,{children:["O exemplo busca os registros de pessoas que n\xe3o trabalham em uma empresa. A pesquisa \xe9 realizada provando se o nome da empresa",(0,r.jsx)(a.br,{}),"\ne uma string vazia."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Empresa="")\xa0// Buscar as pessoas sem empresa\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-10",children:"Exemplo 10"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca cada pessoa cujo sobrenome for Silva, e trabalha para uma empresa em Rio de Janeiro. A segunda pesquisa utiliza um campo de outra tabela. Esta pesquisa pode ser realizada porque a tabela [Pessoas] est\xe1 relacionada \xe0 tabela [Empresa] por uma rela\xe7\xe3o muitos para um:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Sobrenome="silva";*)\xa0// Buscar todas as pessoas de sobrenome Silva\u2026\n\xa0QUERY([Pessoas];\xa0&\xa0;[Empresa]Cidade ="Rio de Janeiro")\xa0// ... que trabalham para uma empresa em Rio de Janeiro\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-11",children:"Exemplo 11"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca o registro de cada pessoa cujo inicial do nome esteja entre a letra A (inclu\xedda) e M (inclu\xedda):"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]Nome<"n")\xa0// Encontrar todas as pessoas entre A e M\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-12",children:"Exemplo 12"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca os registros das pessoas que vivem em S\xe3o Paulo ou Porto Alegre:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Pessoas];[Pessoas]CodigoPostal ="28@";*)\xa0// Buscar todas as pessoas que vivem em S\xe3o Paulo\u2026\n\xa0QUERY([Pessoas];|;[Pessoas]CEP CodigoPostal ="08@")\xa0// ...ou Porto Alegre\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-13",children:"Exemplo 13"}),"\n",(0,r.jsx)(a.p,{children:'Pesquisa por palavra chave: o exemplo a seguir procura em toda a tabela [Produtos] os registros cujo campo Descri\xe7\xe3o contenha a palavra "f\xe1cil":'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Produtos];[Produtos]Descri\xe7\xe3o%"f\xe1cil")\xa0// Buscar produtos cuja descri\xe7\xe3o contenha a palavra chave f\xe1cil\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-14",children:"Exemplo 14"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo busca os registros que correspondem \xe0 refer\xeancia da fatura introduzida em uma caixa de di\xe1logo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0vBuscar:=Request("Introduzir uma refer\xeancia de fatura:")\xa0// Obter uma refer\xeancia de fatura do usu\xe1rio\n\xa0If(OK=1)\xa0// Se o usu\xe1rio clicar em OK\n\xa0\xa0\xa0\xa0QUERY([Fatura];[Fatura]Ref=vBuscar)\xa0// Buscar a refer\xeancia de fatura que corresponda a vBuscar\n\xa0End if\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-15",children:"Exemplo 15"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca os registros de faturas introduzidas em 1996. Buscamos todos os registros introduzidos entre 31/12/95 e 1/1/97:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Faturas];[Faturas]DataFatura >!31/12/95!;*)\xa0// Buscar faturas depois de 31/12/95\u2026\n\xa0QUERY([Faturas];\xa0&\xa0;[Faturas]DataFatura \n"})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-16",children:"Exemplo 16"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir busca os empregados cujo sal\xe1rio est\xe1 entre $10.000 e $50.000. A pesquisa inclui os empregados que ganham $10.000, mas exclui aos que ganham $50.000:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Empregados];[Empregados]Sal\xe1rio >=10000;*)\xa0// Buscar os empregados que tenham un sal\xe1rio entre\u2026\n\xa0QUERY([Empregados];\xa0&\xa0;[Empregados]Sal\xe1rio <50000)\xa0// ...$10.000 e $50.000\n"})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-17",children:"Exemplo 17"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo procura os empregados do departamento de marketing com sal\xe1rios superiores a $20.000. Se procura primeiro no campo Sal\xe1rio porque est\xe1 indexado. Observe que a segunda pesquisa utiliza um campo de outra tabela. Isso \xe9 poss\xedvel porque a tabela [Dept] est\xe1 relacionada \xe0 tabela [Empregados] por uma rela\xe7\xe3o autom\xe1tica de muitos para um. Mesmo que o campo [Dept]Nome est\xe1 indexado, a pesquisa n\xe3o \xe9 indexada porque a rela\xe7\xe3o deve ser ativada sequencialmente para cada registro na tabela [Empregados]:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Empregados];[Empregados]Salario >20000;*)\xa0// Buscar os empregados com sal\xe1rios superiores a $20.000 e...\n\xa0QUERY([Empregados];\xa0&\xa0;[Dept]Nome="marketing")\xa0// ...que trabalhem no departamento de marketing\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-18",children:"Exemplo 18"}),"\n",(0,r.jsx)(a.p,{children:'Dadas tr\xeas tabelas relacionadas de muitos a um: [Cidade] -> [Estado] -> [Regi\xe3o]. O exemplo a seguir busca as regi\xf5es cujas cidades come\xe7am com "S\xe3o".'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Regi\xe3o];[Cidade]Nome="S\xe3o")\xa0// Buscar todas as regi\xf5es cujas cidades come\xe7am por "S\xe3o"\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-19",children:"Exemplo 19"}),"\n",(0,r.jsxs)(a.p,{children:["O exemplo a seguir pesquisa a informa\xe7\xe3o igual ao valor da vari\xe1vel ",(0,r.jsx)(a.em,{children:"minhaVar"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Leis];[Leis]Texto =minhaVar)\xa0// Pesquisar todas as leis que sejam iguais ao valor de minhaVar\n"})}),"\n",(0,r.jsxs)(a.p,{children:["A pesquisa pode ter muitos resultados diferentes, dependendo do valor de ",(0,r.jsx)(a.em,{children:"minhaVar"}),". A pesquisa se realizar\xe1 tamb\xe9m de maneira diferente. Por exemplo:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Se ",(0,r.jsx)(a.em,{children:"minhaVar"})," for igual a ",(0,r.jsx)(a.em,{children:'"Copyright@"'}),", a sele\xe7\xe3o cont\xe9m todas as leis que contenham textos que come\xe7am por Copyright."]}),"\n",(0,r.jsxs)(a.li,{children:["Se ",(0,r.jsx)(a.em,{children:"minhaVar"})," for igual a ",(0,r.jsx)(a.em,{children:'"@Copyright@"'}),", a sele\xe7\xe3o cont\xe9m todas as leis que contenham pelo menos uma ocorr\xeancia de Copyright."]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-20",children:"Exemplo 20"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir adiciona ou n\xe3o linhas a uma pesquisa complexa dependendo do valor das vari\xe1veis. Desta forma, s\xf3 os crit\xe9rios v\xe1lidos s\xe3o considerados para a pesquisa."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Fatura];[Fatura]Paga=False;*)\n\xa0If($cidade#"")\xa0// se for especificado um nome de cidade `\n\xa0\xa0\xa0\xa0QUERY([Fatura];[Fatura]Cidade_entrega=$cidade;*)\n\xa0End if\n\xa0\n\xa0If($Codigo_Postal#"")\xa0// se for especificado um c\xf3digo postal\n\xa0\xa0\xa0\xa0QUERY([Fatura];[Fatura]Codigo_Postal=$Codigo_Postal;*)\n\xa0End if\n\xa0QUERY([Fatura])\xa0// Execu\xe7\xe3o da pesquisa sobre os crit\xe9rios\n'})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-21",children:"Exemplo 21"}),"\n",(0,r.jsx)(a.p,{children:"Este exemplo ilustra a utiliza\xe7\xe3o de um operador de compara\xe7\xe3o como express\xe3o alfanum\xe9rico. O valor do operador de compara\xe7\xe3o est\xe1 definido atrav\xe9s de um menu suspenso localizado em uma caixa de di\xe1logo de pesquisas personalizada:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0var $oper : Text\n\xa0$oper:=_popup_operator{_popup_operator}\xa0//$oper igual por exemplo "#" ou "="\n'})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Fatura];[Fatura]Quantidade;$oper;$quantidade)\n\xa0End if\n"})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo-22",children:"Exemplo 22"}),"\n",(0,r.jsx)(a.p,{children:"O uso de \xedndices de palavras-chave da imagem pode aumentar muito a velocidade de suas aplica\xe7\xf5es."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([PICTURES];[PICTURES]Photos %"cats")\xa0// olhar para as fotografias associadas ao palavra-chave "gatos"\n'})}),"\n",(0,r.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsxs)(a.p,{children:["Se a pesquisa \xe9 realizada corretamente, a vari\xe1vel sistema OK toma o valor 1.",(0,r.jsx)(a.br,{}),"\nA vari\xe1vel Ok toma o valor 0 se:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["o usu\xe1rio clicar em ",(0,r.jsx)(a.strong,{children:"Cancelar"})," na caixa de di\xe1logo de pesquisa,"]}),"\n",(0,r.jsxs)(a.li,{children:['em modo "pesquisa e bloqueio"! (ver o comando ',(0,r.jsx)(a.a,{href:"/docs/pt/commands/set-query-and-lock",children:"SET QUERY AND LOCK"}),"), a pesquisa encontra, no m\xednimo, um registro bloqueado. Nese caso, igualmente, o conjunto sistema LockedSet \xe9 atualizado."]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/docs/pt/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,r.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero do comando"}),(0,r.jsx)(a.td,{children:"277"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Thread-seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(a.td,{children:"OK"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modificar o registro atual"}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,r.jsx)(a.td,{})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},369091:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict1581957.en-4f7d8295c765769a7a8bb7c532baae00.png"},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return n}});var o=s(667294);let r={},i=o.createContext(r);function n(e){let a=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);