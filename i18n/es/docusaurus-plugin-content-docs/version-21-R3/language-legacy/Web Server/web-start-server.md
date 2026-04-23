---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Renombrar|
|2003|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.WEB START SERVER.Summary-->El comando WEB START SERVER inicia el servidor web de la aplicación 4D en la cual se ejecuta (4D o 4D Server).<!-- END REF--> La base es por lo tanto publicada en su red Intranet o en el Internet. 

Si el servidor web se inicia correctamente, OK toma el valor *1*, de lo contrario toma el valor *0* (cero). Por ejemplo, si el protocolo de red TCP/IP no está correctamente configurado, OK toma el valor *0*.

## Variables y conjuntos del sistema 

Si el servidor web se inicia correctamente, OK toma el valor *1*; de lo contrario OK toma el valor *0*.

## Ver también 

[WEB STOP SERVER](../commands/web-stop-server)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 617 |
| Hilo seguro | yes |
| Modifica variables | OK |


