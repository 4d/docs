---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *Campo* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Field | Field | &#8594;  | Campo para o qual a prioridade dos índices vai ser recuperada |
| Resultado | Integer | &#8592; | O valor atual da prioridade dos índices |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get adjusted index cache priority.Summary-->O comando **Get adjusted index cache priority** devolve o valor de prioridade de cache ajustado atual aplicado pelo gestor de cache para os índices de campo.<!-- END REF--> Este comando só é necessário para propósitos de depuração.

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

#### Ver também 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
*Gerenciar prioridades em cache de banco de dados*  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1427 |
| Thread-seguro | &check; |


