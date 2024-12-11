---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número limite de registros,0 = número ilimitado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get query limit.Summary-->O comando **Get query limit** devolve o limite do número de registros que uma pesquisa pode encontrar no processo atual.<!-- END REF-->

Se define este limite utilizando o comando [SET QUERY LIMIT](set-query-limit.md). 

Por defeito, caso nenhum limite tenha sido definido, o comando devolve 0.

#### Ver também 

[SET QUERY LIMIT](set-query-limit.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1156 |
| Thread-seguro | &check; |
| Proibido no servidor ||


