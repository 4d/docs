"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79796"],{777600:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/query-by-attribute","title":"QUERY BY ATTRIBUTE","description":"QUERY BY ATTRIBUTE ( {;}{opConj ;} campoObjeto ; caminhoAtributo ; opPesq ; valor {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-attribute","permalink":"/docs/pt/20-R7/commands/query-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-attribute","title":"QUERY BY ATTRIBUTE","slug":"/commands/query-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY","permalink":"/docs/pt/20-R7/commands/query"},"next":{"title":"QUERY BY EXAMPLE","permalink":"/docs/pt/20-R7/commands/query-by-example"}}'),a=s("785893"),r=s("250065");let i={id:"query-by-attribute",title:"QUERY BY ATTRIBUTE",slug:"/commands/query-by-attribute",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Usar o operator",id:"usar-o-operator",level:5},{value:"Construir m\xfaltiplas pesquisas",id:"construir-m\xfaltiplas-pesquisas",level:5},{value:"Valores de Datas nos objetos",id:"valores-de-datas-nos-objetos",level:5},{value:"Usar a propriedade de comprimento virtual",id:"usar-a-propriedade-de-comprimento-virtual",level:5},{value:"Atributo Linking array com m\xfaltiplos argumentos pesquisa",id:"atributo-linking-array-com-m\xfaltiplos-argumentos-pesquisa",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," ( {",(0,a.jsx)(o.em,{children:"umaTabela"}),"}{;}{",(0,a.jsx)(o.em,{children:"opConj"})," ;} ",(0,a.jsx)(o.em,{children:"campoObjeto"})," ; ",(0,a.jsx)(o.em,{children:"caminhoAtributo"})," ; ",(0,a.jsx)(o.em,{children:"opPesq"})," ; ",(0,a.jsx)(o.em,{children:"valor"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"umaTable"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela para a qual retornar uma sele\xe7\xe3o de registros, ou tabela padr\xe3o se for omitido"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"opConj"}),(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Operador de Conjun\xe7\xe3o para juntar m\xfaltiplas pesquisas"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"campoObjeto"}),(0,a.jsx)(o.td,{children:"Field"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Campo Objeto para atributos de pesquisa"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"caminhoAtributo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome ou caminho do atributo"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"opPesq"}),(0,a.jsx)(o.td,{children:"Text, *"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Operador pesquisa (comparador)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"valor"}),(0,a.jsx)(o.td,{children:"Text, Number, Date, Time"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Valor a comparar"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Continua a flag de pesquisa"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," localiza os registros que correspondam com a string de consulta definida utilizando os par\xe2metros ",(0,a.jsx)(o.em,{children:"campoObjeto"}),", ",(0,a.jsx)(o.em,{children:"caminhoAtributo"}),", ",(0,a.jsx)(o.em,{children:"opPesq"})," e ",(0,a.jsx)(o.em,{children:"valor"})," e retorna uma sele\xe7\xe3o de registros para a ",(0,a.jsx)(o.em,{children:"tabela"}),".altera a sele\xe7\xe3o atual de ",(0,a.jsx)(o.em,{children:"tabela"})," para o processo atual e faz o primeiro registro da nova sele\xe7\xe3o do registro atual. Se o par\xe2metro ",(0,a.jsx)(o.em,{children:"tabela"})," for omitido, o comando aplica-se a tabela como padr\xe3o. Se voc\xea n\xe3o tiver definido qualquer tabela padr\xe3o, ocorre um erro."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"opConj"})," \xe9 usado para combinar v\xe1rias chamadas a ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," no caso de v\xe1rias pesquisas. Os operadores de conjun\xe7\xe3o dispon\xedveis s\xe3o o mesmo que o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Conjun\xe7\xe3o"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"S\xedmbolo a utilizar com QUERY BY ATTRIBUTE"})})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"AND"}),(0,a.jsx)(o.td,{children:"&"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"OR"}),(0,a.jsx)(o.td,{children:"|"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Except"}),(0,a.jsx)(o.td,{children:"#"})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"opConj"})," n\xe3o \xe9 usado para a primeira chamada para ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," de uma consulta m\xfaltipla, ou se a pesquisa for uma busca simples. Se voc\xea omitir esse par\xe2metro dentro de uma pesquisa m\xfaltipla, o operador AND (&) \xe9 usado como padr\xe3o."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"campoObjeto"}),", passe o campo objeto cujos atributos que voc\xea deseja pesquisar. Se pertence a uma tabela Um relacionada \xe0 ",(0,a.jsx)(o.em,{children:"tabela"})," com uma rela\xe7\xe3o autom\xe1tica ou manual, o ",(0,a.jsx)(o.em,{children:"campoObjeto"})," pode pertencer a uma outra tabela."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"caminhoAtributo"}),', passe o nome ou o caminho do atributo cujos valores deseja comparar. Pode passar um \xfanico atributo, por exemplo, "age": nesse caso todos os atributos com o nome ser\xe3o comparados no registro. Voc\xea pode tamb\xe9m passar um caminho, por exemplo "children.girls.age", neste caso todos os atributos com este nome ser\xe3o comparados no registro. Pode tamb\xe9m passar um caminho, por exemplo "children.girls.age", em cujo caso s\xf3 os atributos coincidentes ser\xe3o comparados no registro.']}),"\n",(0,a.jsxs)(o.p,{children:['Se um atributo "x" for um array, ',(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"}),' buscar\xe1 registros que contenham um atributo "x" no qual ao menos um elemento coincida com os crit\xe9rios. Para buscar em atributos array, \xe9 necess\xe1rio indicar ao comando ',(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"}),' que o atributo "x" \xe9 um array adicionando ".[]" a seu nome em ',(0,a.jsx)(o.em,{children:"caminhoAtributo"}),' (ver exemplo 3). \xc9 poss\xedvel adicionar uma letra entre colchetes (por exemplo "[b]") para linkar argumentos (veja o par\xe1grafo abaixo [#cmd id="1331" anchor="3181657"/]).']}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'Lembre que os nomes de atributos diferenciam entre maiusculas e min\xfasculas: pode ter diferentes nomes de atributos "MyAtt" e "myAtt" no mesmo registro.'}),"\n",(0,a.jsx)(o.li,{children:'Os nomes de atributos s\xe3o cortados para eliminar espa\xe7os adicionais. Por exemplo, "meu primeiro atributo .meu segundo atributo" se interpreta como "meu primeiro atributo.meu segundo atributo".'}),"\n",(0,a.jsxs)(o.li,{children:['N\xe3o \xe9 poss\xedvel pesquisar atributos cujos nomes contenham caracteres especiais tais como "." ou "[ ]", j\xe1 que ser\xe3o avaliados incorretamente como tokens na pesquisa de string. Para saber mais, veja o par\xe1grafo ',(0,a.jsx)(o.em,{children:"identificador nota\xe7\xe3o objeto"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"opBusq"})," \xe9 o operador de compara\xe7\xe3o que se aplica entre ",(0,a.jsx)(o.em,{children:"campoObjeto"})," e ",(0,a.jsx)(o.em,{children:"valor"}),". Pode passar um dos s\xedmbolos que se mostran aqui:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Compara\xe7\xe3o"})}),(0,a.jsxs)(o.th,{children:[(0,a.jsx)(o.strong,{children:"S\xedmbolo a utilizar com"})," ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})]})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Igual a"}),(0,a.jsx)(o.td,{children:"="})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Diferente de"}),(0,a.jsx)(o.td,{children:"#"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Menor que"}),(0,a.jsx)(o.td,{children:"<"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Maior que"}),(0,a.jsx)(o.td,{children:">"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Menor ou igual a"}),(0,a.jsx)(o.td,{children:"<="})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Maior ou igual a"}),(0,a.jsx)(o.td,{children:">="})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:['(*) Quando usado com elementos array, o operador # significa "n\xe3o cont\xe9m qualquer um". ',(0,a.jsx)(o.strong,{children:"Nota"}),": Voc\xea pode especificar o operador de compara\xe7\xe3o como uma express\xe3o de texto em vez de um s\xedmbolo. Consulte a descri\xe7\xe3o do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"})," para mais informa\xe7\xf5es."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"valor"})," \xe9 o dado contra o qual ir\xe1 comparar ",(0,a.jsx)(o.em,{children:"caminhoAtributo"}),". O valor pode ser qualquer express\xe3o do mesmo tipo que ",(0,a.jsx)(o.em,{children:"caminhoAtributo"}),'. O valor \xe9 avaliado uma vez, no in\xedcio da busca. O valor n\xe3o \xe9 avaliado para cada registro. Para procurar uma string dentro de uma string (uma procura "cont\xe9m"), use o sinal de arroba (@) em ',(0,a.jsx)(o.em,{children:"valor"}),' para isolar a string a pesquisar, como mostrado neste exemplo: "@ Smith @". Note-se que, neste caso, a busca apenas parcialmente se benef\xedcia do \xedndice (compacidade de armazenamento de dados).']}),"\n",(0,a.jsx)(o.p,{children:"Esta \xe9 a estrutura de uma consulta por atributos:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Table] ;[Table]ObjectField ;"attribute1.attribute2";=;value)\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"NOta:"})," um crit\xe9rio impl\xedcito para todos os operadores (exceto #) \xe9 que o campo Objeto contenha um atributo. Entretanto, para o operador #, ele pode ser indefinido (ver abaixo)."]}),"\n",(0,a.jsx)(o.h5,{id:"usar-o-operator",children:"Usar o operator"}),"\n",(0,a.jsxs)(o.p,{children:["Ao consultar por atributo utilizando o operador ",(0,a.jsx)(o.strong,{children:"#"}),", deve se lembrar dos casos em que um atributo pode n\xe3o estar presente em um registro. Por exemplo, considere a afirma\xe7\xe3o abaixo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]Animals;"dog.name";#;"Rex")\n'})}),"\n",(0,a.jsxs)(o.p,{children:['Esta pesquisa devolver\xe1 os registros de pessoas que tenham um cachorro cujo nome n\xe3o \xe9 "Rex", assim como tamb\xe9m os registros de pessoas que n\xe3o tenham cachorro, ou que tenham cachorro sem nome, ou seja, registros para os quais o valor da propriedade "dog.name" seja ',(0,a.jsx)(o.strong,{children:"null"}),". O conceito subjacente \xe9: se o motor de consulta n\xe3o conhce os dados para compar\xe1-los com os crit\xe9rios de pesquisa, n\xe3o pode decidir se coincidem ou n\xe3o. Portanto, o registro se exclui da consulta."]}),"\n",(0,a.jsx)(o.p,{children:"Para usar um exemplo mais gen\xe9rico:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Table];[Table]ObjectField;"attribute1.attribute2";#;value)\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Esta pesquisa devolver\xe1 todos os registros para os que ",(0,a.jsx)(o.em,{children:"[Table]ObjectField"})," cont\xe9m um objeto que contenha um atributo attribute1, que \xe9 em si um objeto que cont\xe9m um atributo attribute2 cujo valor n\xe3o seja o valor. NAO v\xe1 devolver os registros onde:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["o campo objeto n\xe3o cont\xe9m ",(0,a.jsx)(o.em,{children:"attribute1"})]}),"\n",(0,a.jsx)(o.li,{children:"o campo objeto n\xe3o cont\xe9m **attribute1.attribute*2"}),"\n",(0,a.jsx)(o.li,{children:"o campo objeto cont\xe9m **attribute1.attribute*2=null"}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Este principio tamb\xe9m aplica aos atributos array. Por exemplo, a pesquisa devolver\xe1 os registros das pessoas que tenham um ou v\xe1rios endere\xe7os, mas nenhum em Paris."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";#;"paris")\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Para obter espec\xedficamente os registros onde o atributo n\xe3o est\xe1 definido, pode utilizar um objeto vazio (ver exemplo 2). Note entretanto que a pesquisa de valores NULL em elementos array n\xe3o \xe9 compat\xedvel."]}),"\n",(0,a.jsx)(o.h5,{id:"construir-m\xfaltiplas-pesquisas",children:"Construir m\xfaltiplas pesquisas"}),"\n",(0,a.jsx)(o.p,{children:"Aqui est\xe3o as regras a serem seguidas para a constru\xe7\xe3o de v\xe1rias pesquisas por atributo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"A primeira linha n\xe3o deve conter uma conjun\xe7\xe3o."}),"\n",(0,a.jsx)(o.li,{children:"Cada argumento de consulta sucessivo pode come\xe7ar com uma conjun\xe7\xe3o. Se voc\xea omiti-lo, o operador AND (&) \xe9 usado por padr\xe3o."}),"\n",(0,a.jsxs)(o.li,{children:["Todas as linhas, exceto a \xfaltima, deve usar o par\xe2metro ",(0,a.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," pode ser combinado com os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"})," (ver exemplo)."]}),"\n",(0,a.jsxs)(o.li,{children:["Para realizar a pesquisar, n\xe3o especifique o par\xe2metro * no \xfaltimo comando ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"}),". Alternativamente, voc\xea pode executar o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"})," sem par\xe2metros diferentes \xe0 da tabela."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Cada tabela mant\xe9m sua pr\xf3pria constru\xe7\xe3o de pesquisa atual. Isto significa que voc\xea pode criar v\xe1rias consultas simultaneamente, um para cada tabela."]}),"\n",(0,a.jsx)(o.p,{children:"N\xe3o importa a forma em que a pesquisa foi definida:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Se a opera\xe7\xe3o de busca vai levar algum tempo para ser executada, 4D mostra automaticamente uma mensagem contendo um term\xf4metro de progresso. Estas mensagens podem ser ligados e desligadas usando os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/messages-on",children:"MESSAGES ON"})," y ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/messages-off",children:"MESSAGES OFF"}),". Se um term\xf4metro de progresso for exibido, o usu\xe1rio pode clicar no bot\xe3o Parar para parar a pesquisa. Se a consulta for conclu\xedda, OK \xe9 definido como 1. Caso contr\xe1rio, se a consulta for interrompida, OK \xe9 definido como 0 (zero)."]}),"\n",(0,a.jsx)(o.li,{children:"Se nenhum campo objeto indexado n\xe3o for indicado, a pesquisa \xe9 otimizada sempre que for poss\xedvel (campos indexados s\xe3o procurados primeiro), resultando em uma busca que leva o m\xednimo de tempo poss\xedvel."}),"\n"]}),"\n",(0,a.jsx)(o.h5,{id:"valores-de-datas-nos-objetos",children:"Valores de Datas nos objetos"}),"\n",(0,a.jsxs)(o.p,{children:["As datas s\xe3o armazenadas nos objectos com base nos par\xe2metros do banco de dados e; por padr\xe3o, se considera o fuso hor\xe1rio (veja selector JSON use local time no comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),")."]}),"\n",(0,a.jsxs)(o.p,{children:['!1973-05-22!">',(0,a.jsx)(o.span,{id:"result\\_box",lang:"pt",children:(0,a.jsx)(o.span,{title:"\\[#codeJS\\]!1973-05-22!",children:'[#codeJS]!1973-05-22! -> "1973-05-21T23:00:00.000Z"'})})]}),"\n",(0,a.jsx)(o.p,{children:'Essa configura\xe7\xe3o tamb\xe9m \xe9 considerada durante a busca, assim voc\xea n\xe3o precisa se preocupar com isso, se voc\xea usar sempre a sua base no mesmo lugar e se os par\xe2metros s\xe3o os mesmos em todos os computadores que acessam os dados. Neste caso, a seguinte busca retorna corretamente os registros cujo atributo \xe9 Birthday igual a !1973-05-22! (Salvo como"1973-05-21T23:00:00.00Z"):'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1973-05-22!)\n'})}),"\n",(0,a.jsx)(o.p,{children:"Se voc\xea n\xe3o quiser usar o par\xe2metro GMT, voc\xea pode modificar esses par\xe2metros com a seguinte declara\xe7\xe3o:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(JSON use local time;0)\n"})}),"\n",(0,a.jsx)(o.p,{children:'Lembnre que o escopo deste par\xe2metro \xe9 limitado ao process.. Se voc\xea executar este comando, 01 de outubro de 1965 se armazenar\xe1 como "1965-10-01T00: 00: 00.000Z", mas voc\xea deve definir o mesmo par\xe2metro antes de iniciar suas pesquisas:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0SET DATABASE PARAMETER(JSON use local time;0)\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1976-11-27!)\n'})}),"\n",(0,a.jsx)(o.h5,{id:"usar-a-propriedade-de-comprimento-virtual",children:"Usar a propriedade de comprimento virtual"}),"\n",(0,a.jsxs)(o.p,{children:['Pode usar a propriedade virtual "comprimento" com este comando. Esta propriedade est\xe1 dispon\xedvel automaticamente para qualquer atributo do tipo array e retorna o tamanho do array, ou seja, o n\xfamero de elementos que o array cont\xe9m. Pode ser usado no contexto de execu\xe7\xe3o do comando ',(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," (veja exemplo 4)."]}),"\n",(0,a.jsx)(o.h5,{id:"atributo-linking-array-com-m\xfaltiplos-argumentos-pesquisa",children:"Atributo Linking array com m\xfaltiplos argumentos pesquisa"}),"\n",(0,a.jsx)(o.p,{children:"(Novo em 4D v16 R2) Quando procurar um atributo de array com m\xfaltiplos argumentos de pesquisa unidos pelo operador AND, pode querer ter certeza que apenas registros contendo elementos que correspondam a todos os argumentos sejam retornados, e n\xe3o registros onde argumentos podem ser encontrados em diferentes elementos. Para fazer isso, precisa linkar argumentos de pesquisa a elementos array, de maneira que apenas elementos \xfanicos contendo argumentos linkados s\xe3o encontrados."}),"\n",(0,a.jsx)(o.p,{children:"Por exemplo, com os dois registros abaixo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "name":"martin",\n\xa0\xa0\xa0 "locations" : [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"home",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"paris" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n} , {\n\xa0\xa0\xa0 "name":"smith",\n\xa0\xa0\xa0 "locations" : [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"home",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"lyon" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } , {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"office",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"paris" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n}\n'})}),"\n",(0,a.jsx)(o.p,{children:'Se quiser encontrar pessoas com um local "home" na cidade "paris". Se escrever:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris";*)\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home")\n'})}),"\n",(0,a.jsx)(o.p,{children:'... a pesquisa retorna "martin" e "smith" porque "smith" tem um elemento "local" cujo "tipo" \xe9 "home" e um elemento "local" cuja "cidade" \xe9 "paris", mesmo sendo elementos diferentes.'}),"\n",(0,a.jsxs)(o.p,{children:["Se quiser obter registros onde argumentos correspondentes est\xe3o no mesmo elemento, \xe9 necess\xe1rio ",(0,a.jsx)(o.strong,{children:"argumentos linkados"}),". Para linkar argumentos de pesquisa"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Adicionar uma letra entre [] no primeiro caminho para linkar e repetir a mesma letra em todos os argumentos linkados. Por exemplo: ",(0,a.jsx)(o.strong,{children:"locations[a].city"})," e ",(0,a.jsx)(o.strong,{children:"locations[a].kind"}),". Pode usar qualquer letra no aflabeto latino (n\xe3o diferencia mai\xfasculas e min\xfasculas)."]}),"\n",(0,a.jsx)(o.li,{children:"Para adicionar diferentes crit\xe9rios linkados, use outra letra (ver exemplo abaixo). Pode criar at\xe9 26 combina\xe7\xf5es de crit\xe9rios em uma \xfanica pesquisa."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Com os registros acima, se escrever:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].city";=;"paris";*)\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].kind";=;"home")\n'})}),"\n",(0,a.jsx)(o.p,{children:'... a pesquisa vai retornar apenas "martin" porque tem um elemento "location" cujo "kind" \xe9 "home" e cuja "city" \xe9 "paris". A pesquisa n\xe3o vai retornar "smith" porque os valores "home" e "paris" n\xe3o est\xe3o no mesmo elemento array. Ver os exemplos abaixo para mais exemplos dessa propriedade.'}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"}),' Usar uma sintaxe linkada em uma \xfanica linha de pesquisa d\xe1 os mesmos resultados como uma pesquisa padr\xe3o, exceto quando usando o operador "#" : neste caso, resultados inv\xe1lidos podem ser retornados. Esta sintaxe inv\xe1lida portanto n\xe3o \xe9 compat\xedvel.']}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.p,{children:'Neste exemplo, o atributo de "age" (idade) \xe9 uma string ou um inteiro e queremos encontrar pessoas cujas idades est\xe3o entre 20 e 29. As primeiras duas linhas procuram o atributo como um n\xfamero inteiro (> = 20 e <30) e as \xfaltima consultam o campo como uma string (come\xe7ando com "2", mas \xe9 diferente de "2".)'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>=;20;*)\n\xa0QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30;*)\n\xa0QUERY BY ATTRIBUTE([Persons];|;[Persons]OB_Info;"age";=;"2@";*)\n\xa0QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";#;"2")\xa0//sem * para lan\xe7ar a execu\xe7\xe3o\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"})," pode ser usado para encontrar registros nos quais alguns atributos s\xe3o definidos (ou n\xe3o). Para isso, deve usar um objeto vazio."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//Pesquisar os registros onde o correio eletr\xf4nico \xe9 definida no campo objeto\n\xa0var $undefined : Object\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]Info;"email";#;$undefined)\n'})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//Pesquisar os registros onde o CEP- c\xf3digo postal n\xe3o est\xe1 definido no campo objeto\n\xa0var $undefined : Object\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]Info;"zip code";=;$undefined)\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Essa sintaxe espec\xedfica n\xe3o \xe9 ocmpat\xedvel com atributos do tipo array. Pesquisar por valores NULL em elementos array d\xe1 resultados inv\xe1lidos."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea quer encontrar um campo que cont\xe9m os atributos do array. Com os dois registros a seguir:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "name":"martin",\n\xa0\xa0\xa0 "locations" : [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"office",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"paris" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n} , {\n\xa0\xa0\xa0 "name":"smith",\n\xa0\xa0\xa0 "locations" : [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"home",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"lyon" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } , {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind":"office",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city":"paris" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n}\n'})}),"\n",(0,a.jsxs)(o.p,{children:["... ",(0,a.jsx)(o.strong,{children:"QUERY BY ATTRIBUTE"}),' encontra pessoas com uma localiza\xe7\xe3o "paris" usando este comando:']}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//indica o atributo array com a sintaxe ".[]"\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations.[].city";=;"paris")\n\xa0\xa0//Seleciona "martin"e\xa0 "smith"\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),': Se voc\xea tiver definido diversos crit\xe9rios no mesmo atributo array, os crit\xe9rios coincidentes n\xe3o se aplicam necessariamente ao mesmo elemento do array. No exemplo a seguir, a pesquisa retornar\xe1 "smith", porque tem um elemento "locations" cujo "kind" (tipo) \xe9 "home" e um elemento "locations", cujas "city" \xe9 "paris" Mesmo se esse n\xe3o for o mesmo elemento:']}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations.[].kind";=;"home";*)\n\xa0QUERY BY ATTRIBUTE([People];&;[People]OB_Field;"locations.[].city";=;"paris")\n\xa0\xa0//Selecciona "smith"\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(o.p,{children:'Este exemplo ilustra o uso da propriedade virtual "comprimento". Seu banco de dados tem um campo de objeto [Customer]full_Data com os dados abaixo:'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(663379).Z+"",width:"892",height:"416"})}),"\n",(0,a.jsx)(o.p,{children:"Se quiser obter os registros para qualquer cliente que tenha duas ou mais crian\xe7as, pode escrever:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Customer];[Customer]full_Data;"Children.length";>=;2)\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,a.jsx)(o.p,{children:"Estes exemplos ilustram as v\xe1rias combina\xe7\xf5es dispon\xedveis de argumentos de pesquisa linkados em arrays. Assuma que voc\xea tem os registros abaixo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'[ {\n\xa0\xa0\xa0 "Name": "Sam",\n\xa0\xa0\xa0 "Children": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Harry",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "15",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Car",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Teddy Bear",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Brown" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Betty",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "9",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Car",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Green" \n\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Puzzle",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0 }, {\n\xa0\xa0\xa0 "Name": "Louis",\n\xa0\xa0\xa0 "Children": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Harry",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "15",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Water gun",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Betty",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "3",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Car",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Puzzle",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Green" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0 }, {\n\xa0\xa0\xa0 "Name": "Victor",\n\xa0\xa0\xa0 "Children": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Harry",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "9",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Doll",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Pink" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Puzzle",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Betty",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Age": "15",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Toy": [ {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Name": "Water gun",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "Color": "Blue" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0\xa0\xa0\xa0\xa0 } ]\n\xa0} ]\n'})}),"\n",(0,a.jsx)(o.p,{children:'Para encontrar pessoas que tenham uma crian\xe7a chamada "Betty" com 15 anos:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15")\n\xa0\xa0//retorna "Victor"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15")\n\xa0\xa0//retorna "Sam", "Louis" e "Victor"\n'})}),"\n",(0,a.jsx)(o.p,{children:'Para encontrar pessoas que tenham uma filha chamada "Betty", de 15 anos, e um filho chamado "Harry" de 9 anos:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[b].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[b].Age";=;"9")\n\xa0\xa0//retorna "Victor"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"9")\n\xa0\xa0//retorna "Sam" e "Victor"\n'})}),"\n",(0,a.jsx)(o.p,{children:'Para achar pessoas que tenham um filho de 15 anos chamado "Harry" que tenha um brinquedo "blue car" (pesquisar em um array de arrays):'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Name";=;"Car";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Color";=;"Blue")\n\xa0\xa0//retorna "Sam"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Name";=;"Car";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Color";=;"Blue")\n\xa0\xa0//retorna "Sam" e "Louis"\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsxs)(o.p,{children:["Se a pesquisa \xe9 realizada corretamente, a vari\xe1vel sistema OK toma o valor 1.",(0,a.jsx)(o.br,{}),"\nA vari\xe1vel Ok toma o valor 0 se:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["o usu\xe1rio clicar em ",(0,a.jsx)(o.strong,{children:"Cancelar"})," na caixa de di\xe1logo de pesquisa,"]}),"\n",(0,a.jsxs)(o.li,{children:['em modo "pesquisa e bloqueio"! (ver o comando ',(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/set-query-and-lock",children:"SET QUERY AND LOCK"}),"), a pesquisa encontra, no m\xednimo, um registro bloqueado. Nese caso, igualmente, o conjunto sistema LockedSet \xe9 atualizado."]}),"\n"]}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"Estrutura dos objetos de linguagem 4D"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"1331"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2713"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar o registro atual"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,a.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},663379:function(e,o,s){s.d(o,{Z:function(){return n}});let n=s.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return i}});var n=s(667294);let a={},r=n.createContext(a);function i(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);