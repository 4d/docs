---
id: get-adjusted-table-cache-priority
title: Get adjusted table cache priority
slug: /commands/get-adjusted-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted table cache priority.Syntax-->**Get adjusted table cache priority** ( *tabla* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted table cache priority.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual se debe recuperar el valor de prioridad escalar |
| Resultado | Integer | &#8592; | Valor de prioridad actual para campos escalares |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get adjusted table cache priority.Summary-->El comando **Get adjusted table cache priority** devuelve el valor de prioridad de la caché ajustada aplicado en caché para los datos escalares *tabla*.<!-- END REF-->. Este comando sólo es necesario para propósitos de depuración.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

Los tipos de campos de datos escalares incluyen campos de tipo fecha/hora, numéricos o cadena.

#### Ver también 

[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
*Gestión de prioridades en la caché de la base*  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  