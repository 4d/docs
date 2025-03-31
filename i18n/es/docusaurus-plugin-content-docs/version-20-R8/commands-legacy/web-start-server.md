---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB START SERVER.Summary-->El comando WEB START SERVER inicia el servidor web de la aplicación 4D en la cual se ejecuta (4D o 4D Server).<!-- END REF--> La base es por lo tanto publicada en su red Intranet o en el Internet. 

Si el servidor web se inicia correctamente, OK toma el valor *1*, de lo contrario toma el valor *0* (cero). Por ejemplo, si el protocolo de red TCP/IP no está correctamente configurado, OK toma el valor *0*.

#### Variables y conjuntos del sistema 

Si el servidor web se inicia correctamente, OK toma el valor *1*; de lo contrario OK toma el valor *0*.

#### Ver también 

[WEB STOP SERVER](web-stop-server.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 617 |
| Hilo seguro | &check; |
| Modifica variables | OK |


