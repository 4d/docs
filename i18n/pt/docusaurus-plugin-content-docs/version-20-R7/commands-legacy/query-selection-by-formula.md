---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *tabela* {; *formula*} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual retornar a seleção de registros |
| formula | Boolean | &#8594;  | Fórmula de pesquisa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->O comando QUERY SELECTION BY FORMULA pesquisa registros em tabela.<!-- END REF--> busca registros em tabela aplicando QUERY BY FORMULA a cada registro da seleção QUERY SELECTION BY FORMULA modifica a seleção atual de tabela para o processo atual e faz do primeiro registro o novo registro atual.

QUERY SELECTION BY FORMULA funciona da mesma forma que [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"). A diferença entres esses dois comandos é o alcance da pesquisa:

* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA") busca registros entre todos os registros da tabela.
* QUERY SELECTION BY FORMULA realiza sua pesquisa unicamente nos registros da seleção atual da tabela.

Para maior informação, consulte a descrição do comando [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA").

#### Ver também 

[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION](query-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 207 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


