---
id: add-to-set
title: ADD TO SET
slug: /commands/add-to-set
displayed_sidebar: docs
---

<!--REF #_command_.ADD TO SET.Syntax-->**ADD TO SET** ( {*tabla* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.ADD TO SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro actual o Tabla por defecto si se omite |
| conjunto | Text | &#8594;  | Nombre del conjunto al cual añadir el registro actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ADD TO SET.Summary-->ADD TO SET añade el registro actual de *tabla* a *conjunto*.<!-- END REF--> El conjunto ya debe existir; si no, ocurre un error. Si no hay un registro actual para *tabla*, ADD TO SET no tiene efecto.

#### Ver también 

[REMOVE FROM SET](remove-from-set.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 119 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


