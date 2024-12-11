---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*tabla* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro actual o Tabla por defecto si se omite |
| conjunto | Text | &#8594;  | Nombre del conjunto del cual eliminar el registro actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SET elimina el registro actual de *tabla* de *conjunto*.<!-- END REF--> El conjunto ya debe existir; si no existe, ocurre un error. Si no existe un registro actual para *Tabla*, REMOVE FROM SET no tiene efecto.

#### Ver también 

[ADD TO SET](add-to-set.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 561 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


