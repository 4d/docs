---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *tabla* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual el valor de prioridad de los "blobs" tiene que ser recuperado |
| Resultado | Integer | &#8592; | Valor de prioridad actual para los campos "blobs" |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->El comando **Get adjusted blobs cache priority** devuelve el valor de prioridad de la caché ajustada actual aplicado en la caché para los datos "blobs" *tabla*.<!-- END REF--> Este comando sólo es necesario para propósitos de depuración. 

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

#### Ver también 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
*Gestión de prioridades en la caché de la base*  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  