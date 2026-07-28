---
id: resume-indexes
title: RESUME INDEXES
slug: /commands/resume-indexes
displayed_sidebar: docs
---

<!--REF #_command_.RESUME INDEXES.Syntax-->**RESUME INDEXES** ( *tabla* : Table {; *} )<!-- END REF-->
<!--REF #_command_.RESUME INDEXES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla para la cual reactivar los índices |
| * | Operador | &#8594; | Si se pasa = indexación asíncrona |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.RESUME INDEXES.Summary-->El comando **RESUME INDEXES** reactiva todos los índices de la *tabla* cuando se han detenido anteriormente utilizando el comando [PAUSE INDEXES](../commands/pause-indexes).<!-- END REF--> Si los índices de *tabla* no se han detenido, el comando no hace nada.  
  
En la mayoría de los casos, la ejecución de este comando activa la reconstrucción de los índices de *tabla*.  
Si pasa el parámetro opcional *\**, la reconstrucción de los índices se realiza en modo asíncrono. Esto significa que el método de llamada al comando continúa su ejecución después de esta llamada, independientemente de si la indexación ha terminado o no. Si omite este parámetro, la reconstrucción de los índices bloqueará la ejecución del método hasta que se complete la operación de reconstrucción.  
  
El comando **RESUME INDEXES** sólo se puede llamar desde 4D Server o un 4D local. Si este comando se ejecuta desde un equipo 4D remoto, se genera el error -10513\. Este error puede ser interceptado utilizando un método instalado por el comando [ON ERR CALL](../commands/on-err-call).

## Ver también 

[CREATE INDEX](../commands/create-index)  
[PAUSE INDEXES](../commands/pause-indexes)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1294 |
| Hilo seguro | yes |


