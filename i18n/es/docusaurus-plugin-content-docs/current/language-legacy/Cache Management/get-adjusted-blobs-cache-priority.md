---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *tabla* : Table ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla para la cual el valor de prioridad de los "blobs" tiene que ser recuperado |
| Resultado | Integer | &#8592; | Valor de prioridad actual para los campos "blobs" |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|16 R2|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->El comando **Get adjusted blobs cache priority** devuelve el valor de prioridad de la caché ajustada actual aplicado en la caché para los datos "blobs" *tabla*.<!-- END REF--> Este comando sólo es necesario para propósitos de depuración. 

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

## Ver también 

[ADJUST BLOBS CACHE PRIORITY](../commands/adjust-blobs-cache-priority)  
*Gestión de prioridades en la caché de la base*  
[SET BLOBS CACHE PRIORITY](../commands/set-blobs-cache-priority)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1428 |
| Hilo seguro | yes |


