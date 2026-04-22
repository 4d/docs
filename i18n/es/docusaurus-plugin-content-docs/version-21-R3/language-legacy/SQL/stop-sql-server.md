---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.STOP SQL SERVER.Summary-->El comando STOP SQL SERVER detiene el servidor SQL integrado de la aplicación 4D en la cual ha sido ejecutado.<!-- END REF--> 

Si el servidor SQL ha sido lanzado, todas las conexiones SQL se interrumpen y el servidor no acepta más búsquedas SQL externas. Si el servidor SQL no se lanzó, el comando no hace nada.

**Nota:** este comando no afecta el funcionamiento del motor SQL interno de 4D. El motor SQL siempre está disponible para búsquedas internas.

## Ver también 

[START SQL SERVER](../commands/start-sql-server)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 963 |
| Hilo seguro | no |


