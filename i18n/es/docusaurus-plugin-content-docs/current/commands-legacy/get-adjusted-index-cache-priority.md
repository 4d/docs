---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *campo* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo para el cual se debe recuperar la prioridad del índice |
| Resultado | Integer | &#8592; | Valor de la prioridad actual para los índices |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get adjusted index cache priority.Summary-->El comando **Get adjusted index cache priority** devuelve el valor de prioridad de caché ajustado actual aplicado por el gestor de caché para los índices de campo.<!-- END REF--> Este comando sólo es necesario para propósitos de depuración.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

#### Ver también 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
*Gestión de prioridades en la caché de la base*  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1427 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


