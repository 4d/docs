---
id: read-write
title: READ WRITE
slug: /commands/read-write
displayed_sidebar: docs
---

<!--REF #_command_.READ WRITE.Syntax-->**READ WRITE** {( tabla | * )}<!-- END REF-->
<!--REF #_command_.READ WRITE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla &#124; * | Tabla, Operador | &#8594;  | Tabla a definir en modo lectura/escritura o * para todas las tablas o Tabla por defecto si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.READ WRITE.Summary-->READ WRITE cambia el estado de *tabla* a modo lectura/escritura para el proceso en el cual se llama al comando.<!-- END REF--> Si pasa el parámetro opcional \*, todas las tablas pasan a modo lectura/escritura.

Después de llamar a READ WRITE, cuando se carga un registro, el registro está desbloqueado si ningún otro usuario ha bloqueado el registro. Este comando no cambia el estado del registro cargado actualmente, sólo el de los registros cargados posteriormente. 

Por defecto, todas las tablas están en modo lectura/escritura.

Utilice READ WRITE cuando tenga que modificar un registro y guardar los cambios. También puede utilizar READ WRITE cuando quiera bloquear un registro para los otros usuarios, incluso cuando no esté realizando cambios. Colocar una tabla en modo lectura/escritura evita que otros usuarios editen la tabla. Sin embargo, los otros usuarios pueden crear nuevos registros.  

**Nota:** este comando no es retroactivo. Los privilegios de lectura/escritura para un registro son definidos por los privilegios de la tabla en el momento en que se carga el registro. Para cargar un registro en modo lectura/escritura de una tabla sólo lectura, primero debe cambia el estado de la tabla a lectura/escritura.

#### Ver también 

[READ ONLY](read-only.md)  
[Read only state](read-only-state.md)  
*Record Locking*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 146 |
| Hilo seguro | &check; |


