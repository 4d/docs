---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *campo* : Field ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594; | Campo para el cual se debe recuperar la prioridad del índice |
| Resultado | Integer | &#8592; | Valor de la prioridad actual para los índices |
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

<!--REF #_command_.Get adjusted index cache priority.Summary-->El comando **Get adjusted index cache priority** devuelve el valor de prioridad de caché ajustado actual aplicado por el gestor de caché para los índices de campo.<!-- END REF--> Este comando sólo es necesario para propósitos de depuración.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

## Ver también 

[ADJUST INDEX CACHE PRIORITY](../commands/adjust-index-cache-priority)  
*Gestión de prioridades en la caché de la base*  
[SET INDEX CACHE PRIORITY](../commands/set-index-cache-priority)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1427 |
| Hilo seguro | yes |


