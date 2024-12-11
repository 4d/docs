---
id: save-list
title: SAVE LIST
slug: /commands/save-list
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *lista* ; *nomLista* )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referencia de la lista |
| nomLista | Text | &#8594;  | Nombre de la lista como aparecerá en el editor de listas del entorno Diseño |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAVE LIST.Summary-->El comando SAVE LIST guarda la lista cuyo número de referencia pasó en *lista*, en el editor de listas en el entorno Diseño, bajo el nombre que pasó en *nomLista*.<!-- END REF-->

Su contenido se reemplazará si ya hay una lista con el mismo nombre.

**Nota:** este comando no se puede utilizar en una estructura cargada en sólo lectura, como un proyecto .4dz o un componente.

#### Ver también 

[Load list](load-list.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 384 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


