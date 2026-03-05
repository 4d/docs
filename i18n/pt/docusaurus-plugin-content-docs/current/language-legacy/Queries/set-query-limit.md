---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limite* : Integer )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| limite | Integer | &#8594; | Número de registros, ou 0 se não houver limite |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SET QUERY LIMIT.Summary-->SET QUERY LIMIT permite pedir a 4D deter todas as pesquisas posteriores no processo atual logo que encontre o número de registros definido em *limite*.<!-- END REF--> 

Se por exemplo, *limite* for igual a 1, as pesquisas param logo que um registro coincida com as condições de pesquisa. 

Para que as pesquisas sejam ilimitadas de novo, chame SET QUERY LIMIT novamente com *limite* igual a 0.

**Advertência:** SET QUERY LIMIT afeta todas as pesquisas posteriores no processo atual. LEMBRE sempre associar uma chamada a SET QUERY LIMIT(*limite*) (onde *limite>0*) com uma chamada a SET QUERY LIMIT(0) para restabelecer as pesquisas ilimitadas.

SET QUERY LIMIT muda o comportamento dos comandos de pesquisa:

* [QUERY](query.md "QUERY")
* [QUERY SELECTION](query-selection.md "QUERY SELECTION")
* [QUERY BY EXAMPLE](query-by-example.md "QUERY BY EXAMPLE")
* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")
* [QUERY BY SQL](query-by-sql.md "QUERY BY SQL")
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md "QUERY SELECTION BY FORMULA")
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md "QUERY SELECTION WITH ARRAY")
* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY")
* [QUERY BY ATTRIBUTE](../commands/query-by-attribute)
* [QUERY SELECTION BY ATTRIBUTE](../commands/query-selection-by-attribute)

Por outro lado, SET QUERY LIMIT não afeta os outros comandos que possam modificar a seleção atual de uma tabela como [ALL RECORDS](all-records.md "ALL RECORDS"), [RELATE MANY](relate-many.md "RELATE MANY"), etc.

## Exemplo 1 

Para realizar uma pesquisa que corresponda à fórmula “...encontrar dez clientes cujas vendas sejam superiores a $1 M...”, escreva o seguinte código: 

```4d
 SET QUERY LIMIT(10)
 QUERY([Clientes];[Clientes]Vendas>1000000)
 SET QUERY LIMIT(0)
```

## Exemplo 2 

Ver o segundo exemplo do comando [SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION").

## Ver também 

[Get query limit](../commands/get-query-limit)  
[QUERY](../commands/query)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY SQL](../commands/query-by-sql)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[QUERY WITH ARRAY](../commands/query-with-array)  
[SET QUERY DESTINATION](../commands/set-query-destination)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 395 |
| Thread-seguro | yes |


