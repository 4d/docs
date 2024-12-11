---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *campo* )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo Uno |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OLD RELATED MANY.Summary-->OLD RELATED MANY funciona de la misma forma que [RELATE MANY](relate-many.md "RELATE MANY"), excepto que OLD RELATED MANY utiliza el valor anterior del campo Uno para establecer la relación.<!-- END REF-->OLD RELATED MANY utiliza el valor anterior del campo Muchos, tal como lo devuelve la función [Old](old.md "Old"). Para mayor información, consulte la descripción del comando [Old](old.md "Old").

OLD RELATED MANY cambia la selección de la tabla relacionada y selecciona el primer registro de la selección actual como registro actual.

#### Ver también 

[OLD RELATED ONE](old-related-one.md)  
[RELATE MANY](relate-many.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 263 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


