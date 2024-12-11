---
id: read-only
title: READ ONLY
slug: /commands/read-only
displayed_sidebar: docs
---

<!--REF #_command_.READ ONLY.Syntax-->**READ ONLY** {( tabla | * )}<!-- END REF-->
<!--REF #_command_.READ ONLY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla &#124; * | Tabla, Operador | &#8594;  | Tabla a definir en modo sólo lectura o * para todas las tablas o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.READ ONLY.Summary-->READ ONLY cambia el estado de t*abla* a modo sólo lectura para el proceso en el cual se llama al comando.<!-- END REF--> Todos los registros cargados posteriormente están bloqueados, y no se puede realizar ninguna modificación. Si se pasa el parámetro opcional \*, todas las tablas se cambian a modo sólo lectura.

Utilice READ ONLY cuando no necesite modificar los registros.

**Nota:** este comando no es retroactivo. Los privilegios de lectura/escritura para un registro son definidos por los privilegios de la tabla en el momento en que se carga el registro. Para cargar un registro en modo sólo lectura cuando la tabla está en modo lectura/escritura, primero debe cambiar el estado de la tabla a modo sólo lectura.

#### Ver también 

[Read only state](read-only-state.md)  
[READ WRITE](read-write.md)  
*Record Locking*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 145 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


