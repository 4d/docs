---
id: distinct-values
title: DISTINCT VALUES
slug: /commands/distinct-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT VALUES.Syntax-->**DISTINCT VALUES** ( *campo* ; *array* {; *contArray*} )<!-- END REF-->
<!--REF #_command_.DISTINCT VALUES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo ou subcampo indexável a utilizar para dados |
| array | Array | &#8592; | Array a receber os dados do campo |
| contArray | Integer array, Real array | &#8592; | Array a receber o contador de cada valor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DISTINCT VALUES.Summary-->O comando **DISTINCT VALUES** cria e preenche o array *array* com valores não-repetidos (únicos) do campo *campo* para a seleção atual da tabela que pertence ao campo ou subcampo.<!-- END REF-->

Você pode passar a **DISTINCT VALUES** qualquer campo indexável, ou seja, cujo tipo suporte **indexável**, sem que necessariamente esteja indexado. 

Entretanto, executar este comando com campos não indexáveis será um processo mais lento. Também note que neste caso, o comando perde o registro atual. 

**DISTINCT VALUES** analisa e extrai os valores não repetidos nos registros selecionados.

**Nota:** quando o comando **DISTINCT VALUES** é utilizado durante a transação que não tenha terminado ainda, o comando leva em consideração os registros criados durante a transação.

Se criar o array antes da chamada, DISTINCT VALUES espera um tipo de array compatìvel com o campo que passar. De outra maneira, em modo interpretado, DISTINCT VALUES vai criar um array do tipo apropriado Há uma exceção a essa regra: se o campo é do tipo Imagem (e está associado com um índex de palavras-chave), o array correspondente deve ser do tipo Texto.

Depois de acionado, o tamanho do array é igual ao número de valores distintos encontrados na seleção. O comando não muda a seleção atual nem o registro atual. O comando **DISTINCT VALUES** usa o index do campo, então os elementos no array são devolvidos ordenados em ordem ascendente. Se este é o comando que necessitam não é preciso acionar [SORT ARRAY](sort-array.md) depois de utilizar **DISTINCT VALUES**.

**Nota:** quando **DISTINCT VALUES** é executado com um campo de texto associado com um índice de palavras chave, o comando preenche o array com as palavras chave do índice. Diferente de outros tipos de dados, os valores devolvidos diferem de acordo com a existência do índex. No caso de um campo de texto, o índex de palavras-chave é sempre tido em conta, mesmo quando o campo também é associado com um índice padrão. Se o campo texto ou imagem não está associado com um índice de palavras-chave, o array é retornado vazio.

O comando aceita um array *contArray* como um parâmetro opcional. Quando se passar, este array devolve, para cada valor não repetido em *campo*, o número de ocorrências detectadas na seleção atual. O array *contArray* Se dimensiona automaticamente ao número de elementos em *array*. Por exemplo, para uma seleção que contenha três registros com os valores de campos "A", "B" e "A", *array* conterá {A;B} e *contArray* contendrá {2;1}. Pode passar um array Inteiro longo ou Real em *contArray*. 

**Nota:** o parâmetro *contArray* não é suportado para os campos texto ou imagem associados aos índices de palavras chaves (neste contexto, se devolve vazio).

**Advertência:** **DISTINCT VALUES** pode criar arrays grandes, dependendo do tamanho da seleção atual e do tipo e tamanho de dados para carregar. Os arrays residem na memória, portanto é uma boa idéia testar o resultado depois que o comando esteja completo. Para fazer isso, teste o tamanho do array resultante ou cubra o chamado do comando, usando um método projeto de interceptação de erro instalado pelo comando [ON ERR CALL](on-err-call.md). 

**4D Server:** o comando é otimizado para 4D Server. O array é criado e os valores são calculados na maquina do servidor. O array é então enviado, em sua integridade, ao cliente.

##### 

**Nota:** Este comando não é compatível com campos tipo Objeto

#### Exemplo 1 

O exemplo a seguir cria uma lista de cidades a partir da seleção atual e indica ao usuário o número de cidades nas quais a empresa tem filiais: 

```4d
 ALL RECORDS([Filiais]) // Criar uma seleção de registros
 DISTINCT VALUES([Filiais]Cidade;asCidades)
 ALERT("A empresa tem filiais em "+String(Size of array(asCidades))+" cidades.")
```

#### Exemplo 2 

Você deseja obter uma lista completa de palavras-chaves contidas no índice de palavras-chave do campo "Pictures":

```4d
 ALL RECORDS([PICTURES])
 ARRAY TEXT(<>_MyKeywords;10)
 DISTINCT VALUES([PICTURES]Photos;<>_MyKeywords)
```

#### Exemplo 3 

Para calcular as estatísticas, se quiser ordenar o número de valores distintos em um campo em ordem descendente:

```4d
 ARRAY TEXT($_issue_type;0)
 ARRAY LONGINT($_issue_type_instance;0)
 DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)
 SORT ARRAY($_issue_type_instances;$_issue_type;<)
```

#### Ver também 

  
[GET TEXT KEYWORDS](get-text-keywords.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  