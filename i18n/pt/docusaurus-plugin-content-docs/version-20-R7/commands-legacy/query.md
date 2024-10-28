---
id: query
title: QUERY
slug: /commands/query
displayed_sidebar: docs
---

<!--REF #_command_.QUERY.Syntax-->**QUERY** ( {*tabela* }{;}{ *criterioPesquisa* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual devolver uma seleção de registros ou Tabela por padrão, se for omitido |
| criterioPesquisa | Expression | &#8594;  | Critério de pesquisa |
| * | Operador | &#8594;  | Continuar a execução da pesquisa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY.Summary-->O comando QUERY pesquisa os registros que correspondem ao critério especificado em *criterioPesquisa* e devolve una seleção de registros de *tabela*.<!-- END REF--> QUERY modifica a seleção atual de tabela para o processo atual e volve o primeiro registro na nova seleção o registro atual.  

Se omite o parâmetro *tabela*, o comando se aplica a tabela por padrão. Se não tiver definido una tabela por padrão, se gera um erro.  
  
Se não especifica *criterioPesquisa* nem o parâmetro *\**, QUERY mostra a caixa de diálogo do editor de pesquisas para *tabela* (exceto quando for a última fila de una pesquisa múltipla, ver exemplo 2):  
  
![](../assets/en/commands/pict1581957.en.png)  
  
Para maior informação sobre a utilização deste editor, consulte o Manual de Desenho.  
  
O usuário constrói a pesquisa, logo clica no botão Pesquisar ou Pesquisar na seleção. Se a pesquisa se realiza Sem interrupções, a variável sistema OK toma o valor 1\. Se o usuário clicar em Cancelar, o comando QUERY é interrompido sem realizar a pesquisa e a variável OK toma o valor *0* (zero).

#### Exemplo 1 

O exemplo a seguir mostra o editor de pesquisas para a tabela \[Produtos\]: 

```4d
 QUERY([Produtos])
```

#### Exemplo 2 

A linha seguinte mostra o editor de pesquisas para a tabela por padrão (se for definido) 

```4d
 QUERY
```

  
Se especifica o parâmetro *criterioPesquisa*, o editor de pesquisas não é mostrado e a pesquisa se define por programação. Para pesquisas simples (pesquisas em um só campo) você chama QUERY uma vez com o parâmetro *criterioPesquisa*. Para pesquisas complexas (pesquisas en múltiplos campos o com múltiplas condições), chame QUERY tantas vezes como seja necessário com o parâmetro *criterioPesquisa*, e o parâmetro opcional \*, exceto para a última chamada QUERY, a qual inicia a pesquisa.  

#### Exemplo 3 

O exemplo a seguir busca as \[Pessoas\] cujo nome começa por “a”: 

```4d
 QUERY([Pessoas];[Pessoas]Nome="a@")
```

#### Exemplo 4 

O exemplo a seguir busca as \[Pessoas\] cujo nome começa por “a” ou “b”: 

```4d
 QUERY([Pessoas];[Pessoas]Nome="a@";*) // * indica que há outro critério de pesquisa
 QUERY([Pessoas];|;[Pessoas]Nome="b@") // Sem * indica o final da definição dos critérios de pesquisa e o início da execução da pesquisa.
```

**Nota:** o modo de interpretação do caractere @ nas pesquisas pode ser modificado em uma opção das preferências. Para maior informação, consulte a seção *Operadores de Comparação*.  

#### Construção de uma linha de pesquisa 

O parâmetro *critérioPesquisa* utiliza a seguinte sintaxe:

 { operador; } campo comparador valor  
  
O operador se utiliza para unir as chamadas a QUERY quando se definem pesquisas múltiplas. Os operadores disponíveis são os mesmos do editor de pesquisas:  
  
| **Operador** | **Símbolo a utilizar com QUERY** |
| ------------ | -------------------------------- |
| AND          | &                                |
| OR           | \|                               |
| Except       | #                                |

O operador é opcional e não é necessário para a primeira chamada a QUERY de uma pesquisa múltipla, ou se a pesquisa for uma pesquisa simples.  

* O *campo* é o campo a buscar. O *campo* pode pertencer a outra tabela se pertence a uma tabela Um relacionada a *tabela* com relação automática ou manual. A tabela à qual se aplica QUERY deve ser a tabela Muitos.
* O *operador* é o elemento que permite comparar *campo* e *criterioPesquisa*. Esta é a lista de possíveis comparadores:

| **Comparador**   | **Símbolo a utilizar com QUERY** |
| ---------------- | -------------------------------- |
| Igual a          | \=                               |
| Diferente de     | #                                |
| Menor que        | <                                |
| Maior que        | \>                               |
| Menor ou igual a | <=                               |
| Maior ou igual a | \>=                              |
  
  
**Nota**: é possível definir o comparador sob a forma de uma expressão alfanumérica em lugar de um símbolo. Nesse caso, é obrigatório utilizar ponto e vírgula para dissociar os elementos da string de pesquisa. Este princípio permite por exemplo criar seqüências de pesquisas paramétricas variando o comparador, ou construir interfaces de pesquisa usuário personalizadas. Consulte o exemplo 19.
* O *valor* é o dado que se compara com o conteúdo de *campo*. O valor pode ser uma expressão do mesmo tipo que *campo*. O tipo de valor avaliado uma vez, ao começo da pesquisa e não para cada registro. Se a pesquisa se refere ao conteúdo de uma cadeia de caracteres, utilize em valor o símbolo arroba (@) para isolar o conteúdo a buscar, por exemplo "@Perez@". É de anotar, neste caso, que você se beneficiará só de forma parcial de uma pesquisa indexada (compatibidade de armazenamento).
* A pesquisa por palavras chaves está só disponível para campos tipo Alfa e Texto. Por favor consulte a seção *Operadores de Comparação* para mais informação sobre esse tipo de pesquisa.

Estas são as regras a considerar para a construção de pesquisas múltiplas:  

* A primeira linha não deve conter um operador.
* As seguintes linhas devem começar com um operador.
* Todas as linhas, exceto a última, devem utilizar o parâmetro \*.
* Para iniciar a pesquisa, não passe o parâmetro \* durante a construção de sua última linha. Alternativamente, pode executar o comando QUERY sem outros parâmetros diferentes à tabela (o editor de pesquisas não é mostrado; em seu lugar, se executa a pesquisa múltipla).
**Nota**: cada tabela mantém sua própria construção de pesquisa atual. Isto significa que pode criar múltiplas pesquisas simultaneamente, uma para cada tabela. Deve utilizar o parâmetro tabela ou especificar uma tabela padrão.  
  
 Sem importar de que maneira tenha sido definida uma pesquisa:  
  
* Se a operação de pesquisa vai tomar algum tempo, 4D mostra automaticamente uma mensagem que contenha um termômetro de progresso. Estas mensagens podem ser ativadas ou desativadas utilizando os comandos [MESSAGES ON](messages-on.md "MESSAGES ON") e [MESSAGES OFF](messages-off.md "MESSAGES OFF"). Se for mostrado o termômetro de progresso, o usuário pode clicar no botao Parar para interromper a pesquisa. Se a pesquisa é completada, OK toma o valor 1\. Do contrário, se a pesquisa for interrompida, OK toma o valor 0 (zero).
* Se os campos indexados são especificados, a pesquisa é otimizada cada vez que seja possível (se busca primeiro nos campo indexados) reduzindo ao máximo a duração da operação. O comando usa os índices compostos para as pesquisas utilizando *AND* (&

#### Exemplo 5 

Pesquisamos os registros para que correspondam a pessoas com o sobrenome Silva: 

```4d
 QUERY([Pessoas];[Pessoas]Sobrenome="Silva")
```

**Nota:** se o campo Sobrenome está indexado, nos beneficiamos de uma pesquisa acelerada utilizando o índice.

**Lembrete:** esta pesquisa encontrará registros como “Silva”, “silva”, “SILVA”, etc. Se quer que a pesquisa considere as maiúsculas e minúsculas, defina critérios adicionais que utilizem os códigos ASCII. 

#### Exemplo 6 

O exemplo a seguir busca os registros de pessoas chamadas Carlos Silva. O campo Sobrenome está indexado. O campo Nome não está indexado. 

```4d
 QUERY([Pessoas];[Pessoas]Sobrenome="silva";*) // Buscar todas as pessoas de sobrenome Silva
 QUERY([Pessoas]; & ;[Pessoas]Nome="carlos") // e que também são chamadas Carlos
```

Quando se realiza a pesquisa, primeiro se realiza uma pesquisa rápida no campo indexado Sobrenome, e se reduz a seleção de registros às pessoas de Sobrenome Silva. A pesquisa depois busca sequencialmente no campo Nome nesta seleção de registros.

#### Exemplo 7 

O exemplo abaixo aproveitarrá automaticamente um índice composto dos campos *\[People\]First Name*+*\[People\]Last Name* (se existir) para encontrar os registros de todas as pessoas chamadas John Smith.

```4d
 QUERY([People];[People]First Name="john";*) // Buscar a cada pessoa chamada John
 QUERY([People];&;[People]Last Name="smith") // com sobrenome Smith
```

Para mais informação, consulte *Índices compostos*.

#### Exemplo 8 

O exemplo a seguir pesquisa registros de pessoas de sobrenome Silva ou Oliveira. O campo sobrenome está indexado. 

```4d
 QUERY([Pessoas];[Pessoas]Sobrenome="silva";*) // Buscar todas as pessoas de sobrenome Silva…
 QUERY([Pessoas];|;[Pessoas]Sobrenome="oliveira") // ...ou Oliveira
```

O comando QUERY utiliza o índice do campo Sobrenome para ambas as pesquisas. As duas pesquisas são realizadas e seus resultados são colocados em conjuntos internos que são combinados eventualmente utilizando uma operação de união. 

#### Exemplo 9 

O exemplo busca os registros de pessoas que não trabalham em uma empresa. A pesquisa é realizada provando se o nome da empresa   
e uma string vazia. 

```4d
 QUERY([Pessoas];[Pessoas]Empresa="") // Buscar as pessoas sem empresa
```

#### Exemplo 10 

O exemplo a seguir busca cada pessoa cujo sobrenome for Silva, e trabalha para uma empresa em Rio de Janeiro. A segunda pesquisa utiliza um campo de outra tabela. Esta pesquisa pode ser realizada porque a tabela \[Pessoas\] está relacionada à tabela \[Empresa\] por uma relação muitos para um: 

```4d
 QUERY([Pessoas];[Pessoas]Sobrenome="silva";*) // Buscar todas as pessoas de sobrenome Silva…
 QUERY([Pessoas]; & ;[Empresa]Cidade ="Rio de Janeiro") // ... que trabalham para uma empresa em Rio de Janeiro
```

#### Exemplo 11 

O exemplo a seguir busca o registro de cada pessoa cujo inicial do nome esteja entre a letra A (incluída) e M (incluída): 

```4d
 QUERY([Pessoas];[Pessoas]Nome<"n") // Encontrar todas as pessoas entre A e M
```

#### Exemplo 12 

O exemplo a seguir busca os registros das pessoas que vivem em São Paulo ou Porto Alegre: 

```4d
 QUERY([Pessoas];[Pessoas]CodigoPostal ="28@";*) // Buscar todas as pessoas que vivem em São Paulo…
 QUERY([Pessoas];|;[Pessoas]CEP CodigoPostal ="08@") // ...ou Porto Alegre
```

#### Exemplo 13 

Pesquisa por palavra chave: o exemplo a seguir procura em toda a tabela \[Produtos\] os registros cujo campo Descrição contenha a palavra "fácil": 

```4d
 QUERY([Produtos];[Produtos]Descrição%"fácil") // Buscar produtos cuja descrição contenha a palavra chave fácil
```

#### Exemplo 14 

O exemplo busca os registros que correspondem à referência da fatura introduzida em uma caixa de diálogo: 

```4d
 vBuscar:=Request("Introduzir uma referência de fatura:") // Obter uma referência de fatura do usuário
 If(OK=1) // Se o usuário clicar em OK
    QUERY([Fatura];[Fatura]Ref=vBuscar) // Buscar a referência de fatura que corresponda a vBuscar
 End if
```

#### Exemplo 15 

O exemplo a seguir busca os registros de faturas introduzidas em 1996\. Buscamos todos os registros introduzidos entre 31/12/95 e 1/1/97: 

```4d
 QUERY([Faturas];[Faturas]DataFatura >!31/12/95!;*) // Buscar faturas depois de 31/12/95…
 QUERY([Faturas]; & ;[Faturas]DataFatura 
```

#### Exemplo 16 

O exemplo a seguir busca os empregados cujo salário está entre $10.000 e $50.000\. A pesquisa inclui os empregados que ganham $10.000, mas exclui aos que ganham $50.000: 

```4d
 QUERY([Empregados];[Empregados]Salário >=10000;*) // Buscar os empregados que tenham un salário entre…
 QUERY([Empregados]; & ;[Empregados]Salário <50000) // ...$10.000 e $50.000
```

#### Exemplo 17 

O exemplo procura os empregados do departamento de marketing com salários superiores a $20.000\. Se procura primeiro no campo Salário porque está indexado. Observe que a segunda pesquisa utiliza um campo de outra tabela. Isso é possível porque a tabela \[Dept\] está relacionada à tabela \[Empregados\] por uma relação automática de muitos para um. Mesmo que o campo \[Dept\]Nome está indexado, a pesquisa não é indexada porque a relação deve ser ativada sequencialmente para cada registro na tabela \[Empregados\]: 

```4d
 QUERY([Empregados];[Empregados]Salario >20000;*) // Buscar os empregados com salários superiores a $20.000 e...
 QUERY([Empregados]; & ;[Dept]Nome="marketing") // ...que trabalhem no departamento de marketing
```

#### Exemplo 18 

Dadas três tabelas relacionadas de muitos a um: \[Cidade\] -> \[Estado\] -> \[Região\]. O exemplo a seguir busca as regiões cujas cidades começam com "São". 

```4d
 QUERY([Região];[Cidade]Nome="São") // Buscar todas as regiões cujas cidades começam por "São"
```

#### Exemplo 19 

O exemplo a seguir pesquisa a informação igual ao valor da variável *minhaVar*. 

```4d
 QUERY([Leis];[Leis]Texto =minhaVar) // Pesquisar todas as leis que sejam iguais ao valor de minhaVar
```

A pesquisa pode ter muitos resultados diferentes, dependendo do valor de *minhaVar*. A pesquisa se realizará também de maneira diferente. Por exemplo: 

* Se *minhaVar* for igual a *"Copyright@"*, a seleção contém todas as leis que contenham textos que começam por Copyright.
* Se *minhaVar* for igual a *"@Copyright@"*, a seleção contém todas as leis que contenham pelo menos uma ocorrência de Copyright.

#### Exemplo 20 

O exemplo a seguir adiciona ou não linhas a uma pesquisa complexa dependendo do valor das variáveis. Desta forma, só os critérios válidos são considerados para a pesquisa. 

```4d
 QUERY([Fatura];[Fatura]Paga=False;*)
 If($cidade#"") // se for especificado um nome de cidade `
    QUERY([Fatura];[Fatura]Cidade_entrega=$cidade;*)
 End if
 
 If($Codigo_Postal#"") // se for especificado um código postal
    QUERY([Fatura];[Fatura]Codigo_Postal=$Codigo_Postal;*)
 End if
 QUERY([Fatura]) // Execução da pesquisa sobre os critérios
```

#### Exemplo 21 

Este exemplo ilustra a utilização de um operador de comparação como expressão alfanumérico. O valor do operador de comparação está definido através de um menu suspenso localizado em uma caixa de diálogo de pesquisas personalizada: 

```4d
 var $oper : Text
 $oper:=_popup_operator{_popup_operator} //$oper igual por exemplo "#" ou "="
```

```4d
 If(OK=1)
    QUERY([Fatura];[Fatura]Quantidade;$oper;$quantidade)
 End if
```

#### Exemplo 22 

O uso de índices de palavras-chave da imagem pode aumentar muito a velocidade de suas aplicações.

```4d
 QUERY([PICTURES];[PICTURES]Photos %"cats") // olhar para as fotografias associadas ao palavra-chave "gatos"
```

#### Variáveis e conjuntos do sistema 

Se a pesquisa é realizada corretamente, a variável sistema OK toma o valor 1.  
A variável Ok toma o valor 0 se:

* o usuário clicar em **Cancelar** na caixa de diálogo de pesquisa,
* em modo "pesquisa e bloqueio"! (ver o comando [SET QUERY AND LOCK](set-query-and-lock.md)), a pesquisa encontra, no mínimo, um registro bloqueado. Nese caso, igualmente, o conjunto sistema LockedSet é atualizado.

#### Ver também 

[QUERY SELECTION](query-selection.md)  