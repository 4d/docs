---
id: get-adjusted-table-cache-priority
title: Get adjusted table cache priority
slug: /commands/get-adjusted-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted table cache priority.Syntax-->**Get adjusted table cache priority** ( *Tabela* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted table cache priority.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela para a qual os valores de prioridade escalares serão recuperados |
| Resultado | Integer | &#8592; | Valor atual de prioridades para campos escalares |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get adjusted table cache priority.Summary-->O comando **Get adjusted table cache priority** devolve o valor de prioridade da cache ajustada aplicado em cache para os datos escalares *tabela*.<!-- END REF-->. Este comando só é necessário para propósitos de depuração.

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

Os tipos de campos de dados escalares incluem campos de tipo data/hora, numéricos ou string.

#### Ver também 

[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
*Gerenciar prioridades em cache de banco de dados*  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1426 |
| Thread-seguro | &check; |
| Proibido no servidor ||


