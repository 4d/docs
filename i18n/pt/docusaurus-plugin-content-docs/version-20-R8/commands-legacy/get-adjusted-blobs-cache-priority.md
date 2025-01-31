---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *Tabela* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela para a qual o valor de prioridade dos "blobs" vai ser recuperada |
| Resultado | Integer | &#8592; | Valor de prioridade atual para campos "blobs" |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->O comando **Get adjusted blobs cache priority** devolve o valor de prioridade da cache ajustada atual aplicado na cache para os dados "blobs" *tabela*.<!-- END REF--> Este comando só é necessário para propósitos de depuração. 

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

#### Ver também 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
*Gerenciar prioridades em cache de banco de dados*  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1428 |
| Thread-seguro | &check; |


