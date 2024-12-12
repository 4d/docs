---
id: load-record
title: LOAD RECORD
slug: /commands/load-record
displayed_sidebar: docs
---

<!--REF #_command_.LOAD RECORD.Syntax-->**LOAD RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.LOAD RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual cargar el registro actual o Tabla por defecto si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LOAD RECORD.Summary-->LOAD RECORD carga el registro actual de *tabla*.<!-- END REF--> Si no hay registro actual, LOAD RECORD no tienen ningún efecto.

Puede utilizar la función [Locked](locked.md "Locked") para determinar si puede modificar el registro:

* Si la tabla está en modo sólo lectura, la función [Locked](locked.md "Locked") devuelve TRUE, y no es posible modificar el registro.
* Si la tabla está en modo lectura/escritura pero el registro ha sido bloqueado, el registro será sólo lectura, y no es posible modificar el registro.
* Si la tabla está en modo lectura/escritura y el registro no está bloqueado, es posible modificar el registro en el proceso actual. La función [Locked](locked.md "Locked") devuelve TRUE para todos los otros usuarios y procesos.

**Nota:** si el comando LOAD RECORD se ejecuta después de un [READ ONLY](read-only.md "READ ONLY"), el registro se libera automáticamente y se carga sin tener que utilizar el comando [UNLOAD RECORD](unload-record.md "UNLOAD RECORD").

Generalmente, no es necesario utilizar el comando LOAD RECORD, porque los comandos como [QUERY](query.md "QUERY"), [NEXT RECORD](next-record.md "NEXT RECORD"), [PREVIOUS RECORD](previous-record.md "PREVIOUS RECORD"), etc., cargan automáticamente el registro actual.

En entornos multiusuario y multiprocesos, cuando necesite modificar un registro existente, debe acceder a la tabla (a la cual pertenece el registro) en modo lectura/escritura. Si un registro está bloqueado y no puede ser cargado, LOAD RECORD le permite intentar cargar el registro nuevamente más tarde. Utilizando LOAD RECORD en un bucle, puede esperar hasta que el registro esté disponible en modo lectura/escritura.

**Consejo:** el comando LOAD RECORD puede ser utilizado para recargar el registro actual en el contexto de un formulario de entrada. Todos los datos modificados son reemplazados por los valores anteriores. En ese caso, el comando LOAD RECORD efectúa en cierto modo una cancelación general de la entrada. 

#### Ver también 

[Locked](locked.md)  
*Record Locking*  
[UNLOAD RECORD](unload-record.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 52 |
| Hilo seguro | &check; |


