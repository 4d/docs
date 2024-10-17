---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *campoAlvo* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campoAlvo | Field | &#8594;  | Campo usado para comparar os valores |
| array | Array | &#8594;  | Array de valores pesquisados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->O comando QUERY SELECTION WITH ARRAY busca na tabela do campo passado como primeiro parâmetro os registros para os quais o valor de *campoAlvo* for igual a ao menos um dos valores dos elementos no *array*.<!-- END REF--> Os registros encontrados constituem a nova seleção atual. 

QUERY SELECTION WITH ARRAY funciona da mesma forma que [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY"). A diferença entre estes dois comandos é o alcance da pesquisa:

* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY") busca em todos os registros da tabela de *campoAlvo*.
* QUERY SELECTION WITH ARRAY busca apenas nos registros da seleção atual da tabela *campoAlvo*.

Para maior informação, consulte a descrição do comando [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY").

#### Ver também 

[QUERY WITH ARRAY](query-with-array.md)  