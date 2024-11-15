---
id: method-called-on-event
title: Method called on event
slug: /commands/method-called-on-event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  : Text<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre del método llamado por evento |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Method called on event.Summary-->El comando Method called on event devuelve el nombre del método instalado por el comando [ON EVENT CALL](on-event-call.md "ON EVENT CALL").<!-- END REF--> 

Si no se ha instalado un ningún método, se devuelve una cadena vacía ("").

#### Ver también 

[ON EVENT CALL](on-event-call.md)  