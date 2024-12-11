---
id: query-by-formula
title: QUERY BY FORMULA
slug: /commands/query-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY FORMULA.Syntax-->**QUERY BY FORMULA** ( *tabela* {; *formula*} )<!-- END REF-->
<!--REF #_command_.QUERY BY FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual retornar a seleção de registros |
| formula | Boolean | &#8594;  | Fórmula de pesquisa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY BY FORMULA.Summary-->QUERY BY FORMULA procura registros em *tabela*.<!-- END REF--> QUERY BY FORMULA modifica a seleção atual de *tabela* para o processo atual e faz do primeiro registro o novo registro atual. 

QUERY BY FORMULA e [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) funcionam exatamente da mesma maneira, exceto que QUERY BY FORMULA busca em todos os registros da tabela e [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) busca unicamente nos registros da seleção atual.  
  
Os dois comandos aplicam *formula* a cada registro da tabela ou da seleção. *formula* é uma expressão booleana que deve devolver TRUE ou FALSE. Se *formula* devolve TRUE, o registro está incluído na nova seleção.

O parâmetro *formula* pode ser simples, como a comparação de um campo com um valor; ou complexa, como a realização de um cálculo ou inclusive uma avaliação dos valores em uma tabela relacionada. *formula* pode ser uma função 4D (comando), ou uma expressão que você tenha criado. Quando trabalhe com campos de tipo Alfa ou Texto, pode utilizar em *formula* símbolos arroba (@) assim como o operador "contém" (%) para pesquisas de palavras chaves. Para maior informação, por favor consulte a descrição do comando [QUERY](query.md).

  
**Aviso:** Parâmetros ($1...$n) não são aceitos em *formula*.

Se omitir o parâmetro *formula*, 4D mostra a caixa de diálogo de pesquisa pela fórmula (o usuário pode adicionar uma linha de fórmula efetuando Alt+clique no botão \[+\]).  
  
Quando termina a pesquisa, o primeiro registro da nova seleção é carregado desde o disco e é convertido no registro atual.

Estes comandos são otimizados e podem particularmente aproveitar os índices. Quando o tipo de pesquisa o permite, esses comandos executam pesquisas equivalentes ao comando [QUERY](query.md). Por exemplo, a instrução QUERY BY FORMULA (\[minhatabela\]; \[minhatabela\]meucampo=valor) será executado igual que [QUERY](query.md) (\[minhatabela\]; \[minhatabela\]meucampo=valor), que permite utilizar índices. 4D também pode otimizar pesquisas que contenham partes que não possam ser otimizadas, executando primeiro as partes otimizáveis e depois combinando os resultados com o resto da pesquisa. Por exemplo, a instrução QUERY BY FORMULA (\[minhatabela\]; Length(meucampo)=valor1 | meucampo=valor2 ) será otimizado parcialmente.  
  
Estes comandos por padrão realizam “uniões” como SQL quando compara campos de tabelas diferentes. Isso significa que não é necessário que exista uma relação automática estrutural entre as tabelas. Por exemplo, pode executar uma instrução do tipo QUERY BY FORMULA(\[Tabela\_A\];\[Tabela\_A\]campo\_X = \[Tabela\_B\]campo\_Y) (ver exemplo 3). A primeira parte da fòrmula (\[Table\_A\]field\_X = \[Table\_B\]field\_Y) estabelece a uniáo entre dois campos e a segunda parte (\[Table\_B\]field\_Y = "abc") define o critèrio de pesquisa . As regras abaixo são aplicadas:

\-pelo menos um critério de pesquisa deve ser definido  
\-queryFormula não pode conter mais que um campo de comparação na mesma tabela

Se existirem, em geral as relações entre as tabelas não são usadas. Entretanto, esses comandos utilizarão relações automáticas nos seguintes casos:

\- Se a formula não pode ser quebrada em elementos da forma { campo ; comparador ; valor}  
\- Se dois campos da mesma tabela forem comparados.

  
**Nota de compatibilidade**: por razões de compatibilidade, é possível desativar o mecanismo de uniões, seja globalmente através das Preferências do banco (apenas bancos de dados convertidos) ou por processos utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md).  
  
**4D Server** este comando se executa no servidor, o qual otimiza sua execução. Note que quando as variáveis são chamadas diretamente em *fórmula*, a ordenação se calcula com o valor da variável na máquina cliente. Por exemplo, a sentença QUERY BY FORMULA (\[minhatabela\]; \[minhatabela\]meucampo=minhavariável) será executada sobre o servidor mas com o conteúdo da variável minhavariável da máquina cliente.

**Nota de compatibilidade**: até 4D Server v11, este comando se executava na máquina cliente Por compatibilidade, este funcionamento é conservado nos bancos de dados convertidos a versão 11\. Uma preferência de compatibilidade e um seletor do comando [SET DATABASE PARAMETER](set-database-parameter.md) permitem adotar o funcionamento da versão 11 (execução no servidor) nestes bancos de dados.

#### Exemplo 1 

Este exemplo busca os registros para todas as faturas que sejam introduzidas em dezembro de qualquer ano. O princípio consiste em aplicar a função [Month of](month-of.md "Month of") a cada registro. Esta pesquisa não poderia ser realizada de outra forma sem criar um campo separado para o mês: 

```4d
 QUERY BY FORMULA([Faturas];Month of([Faturas]Entrada)=12) // Buscar as faturas entradas em dezembro
```

#### Exemplo 2 

Este exemplo procura os registros das pessoas que tenham nomes com mais de 10 caracteres: 

```4d
 QUERY BY FORMULA([Pessoas];Length([Pessoas]Nome)>10) // Pesquisar nomes de mais de dez caracteres
```

#### Exemplo 3 

Este exemplo utiliza uma união para buscar todas as linhas de faturas de cliente de "ACME" mesmo que as tabelas não estejam relacionadas:

```4d
 QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))
```

#### Ver também 

[QUERY](query.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 48 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


