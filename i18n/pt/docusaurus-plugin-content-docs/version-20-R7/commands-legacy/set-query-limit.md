---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limite* )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| limite | Integer | &#8594;  | Número de registros, ou 0 se não houver limite |

<!-- END REF-->

#### Descrição 

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
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

Por outro lado, SET QUERY LIMIT não afeta os outros comandos que possam modificar a seleção atual de uma tabela como [ALL RECORDS](all-records.md "ALL RECORDS"), [RELATE MANY](relate-many.md "RELATE MANY"), etc.

#### Exemplo 1 

Para realizar uma pesquisa que corresponda à fórmula “...encontrar dez clientes cujas vendas sejam superiores a $1 M...”, escreva o seguinte código: 

```4d
 SET QUERY LIMIT(10)
 QUERY([Clientes];[Clientes]Vendas>1000000)
 SET QUERY LIMIT(0)
```

#### Exemplo 2 

Ver o segundo exemplo do comando [SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION").

#### Ver também 

[Get query limit](get-query-limit.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY DESTINATION](set-query-destination.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 395 |
| Thread-seguro | &check; |
| Proibido no servidor ||


