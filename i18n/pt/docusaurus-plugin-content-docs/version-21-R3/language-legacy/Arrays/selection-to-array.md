---
id: selection-to-array
title: SELECTION TO ARRAY
slug: /commands/selection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION TO ARRAY.Syntax-->**SELECTION TO ARRAY** ({ umCampo | umaTabela ; *array* : Array {; *campo* : Field ; *array* : Array {; ...(*campo* : Field, *array* : Array)}}{; *}})<!-- END REF-->
<!--REF #_command_.SELECTION TO ARRAY.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| umCampo &#124; umaTabela | Campo, Tabela | &#8594; | Campo usado para pedir dados ou Tabela usada para pedir números de registros |
| array | Array | &#8592; | Array para receber dados do campo ou número de registros |
| campo | Field | &#8594; | Campo a ser requisitado no array |
| array | Array | &#8592; | Array a receber os dados do campo |
| * | Operador | &#8594; | Aguarde execução |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SELECTION TO ARRAY.Summary-->O comando **SELECTION TO ARRAY** cria um ou mais arrays e copia os dados nos campos ou números de registros da seleção atual para os arrays.<!-- END REF-->

O comando **SELECTION TO ARRAY** aplica-se à seleção para a tabela designada pelo primeiro parâmetro (nome da tabela ou campo). **SELECTION TO ARRAY**, pode executar o seguinte:

* Carregar os valores de um ou vários campos.
* Carrega números de registros da tabela usando a sintaxe *\[tabela\];array*
* Carrega valores dos campos relacionados, desde que haja uma relação Muitos para Um automática entre as tabelas ou desde que tenha anteriormente chamado [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) para fazer relações manuais Muitos para Um automáticas. Em ambos os casos, os valores são carregados a partir de tabelas com vários níveis de relacionamento Muitos para Um.

Cada array é digitado de acordo com o tipo de campo. Há duas exceções:

 Quando aplica **SELECTION TO ARRAY** a um campo de tipo Hora, é importante notar que só cria um array de tipo Hora se o array não foi definido como de outro tipo. Por exemplo, no seguinte contexto, o array *myArray* permanece como um array de tipo Inteiro longo:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

Se você carregar um número de registros, eles são copiados para um array [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)").

Quando você passar o parâmetro *\**, 4D não executar a linha de instrução correspondente imediatamente, mas sim armazena na memória, desta forma você pode empilhar várias linhas terminando com um *\**. Todas essas linhas que aguarda sua execução são executadas por uma instrução final **SELECTION TO ARRAY** que não tem o parâmetro *\**. Por esta razão, o comando agora pode ser chamado sem parâmetros. Neste caso, os tipos de arrays são verificados quando a linha final (sem o parâmetro *\**).  
Como com o comando [QUERY](../commands/query), este princípio permite quebrar uma instrução complexa em um conjunto de linhas, que é mais fácil de ler e manter. Você também pode inserir instruções intermediárias ou construir uma matriz dentro de um loop (ver exemplo 2 do comando [ARRAY TO SELECTION](../commands/array-to-selection)).

**4D Server:** O comando **SELECTION TO ARRAY** é otimizado para 4D Server. Cada array é criado no servidor e, em seguida, enviado, na sua totalidade, para a máquina cliente. 

**Advertência:** O comando **SELECTION TO ARRAY** pode criar arrays grandes, dependendo do tamanho da seleção atual e sobre o tipo e o tamanho dos dados que você está carregando. Arrays residem na memória, então é uma boa idéia testar o resultado depois que o comando seja concluído. Para fazer isso, teste o tamanho de cada array resultante ou cubra a chamada para o comando, utilizando um método de projeto [ON ERR CALL](../commands/on-err-call).

**Nota:** Depois de uma chamada a **SELECTION TO ARRAY**, a seleção atual e registro atual permanecem o mesmo, mas o registro atual não é mais carregado. Se você precisar usar os valores dos campos no registro atual, use o comando [LOAD RECORD](../commands/load-record)  após o comando **SELECTION TO ARRAY**.

## Exemplo 1 

No exemplo a seguir, a tabela *\[Pessoas\]* tem uma relação automática com a tabela *\[Empresa\]*. Os dois arrays *asSobrenome* e *asEmpresaDir* são dimensionados de acordo com o número de registros selecionados na tabela *\[Pessoas\]* e conterá a informação de ambas as tabelas:

```4d
 SELECTION TO ARRAY([Pessoas]Sobrenome;asSobrenome;[Empresa]Endereço;asEmpresaDir)
```

## Exemplo 2 

O exemplo a seguir retorna o números de registro da tabela *\[Clientes\]* no array *alNumerosRegistros* e os valores nos campos *\[Clientes\]Nomes* no array *asNomes*  

```4d
 SELECTION TO ARRAY([Clientes];alNumerosRegistros;[Clientes]Nomes;asNomes)
```

O mesmo exemplo pode ser escrito:

```4d
 SELECTION TO ARRAY([Clientes];alNumerosRegistros;*)
 SELECTION TO ARRAY([Clientes]Nomes;asNomes;*)
 SELECTION TO ARRAY
```

## Ver também 

[ARRAY TO SELECTION](../commands/array-to-selection)  
[CREATE SELECTION FROM ARRAY](../commands/create-selection-from-array)  
[MULTI SORT ARRAY](../commands/multi-sort-array)  
[ON ERR CALL](../commands/on-err-call)  
[SELECTION RANGE TO ARRAY](../commands/selection-range-to-array)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 260 |
| Thread-seguro | yes |


