---
id: delete-record
title: DELETE RECORD
slug: /commands/delete-record
displayed_sidebar: docs
---

<!--REF #_command_.DELETE RECORD.Syntax-->**DELETE RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.DELETE RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual borrar el registro actual, o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE RECORD.Summary-->DELETE RECORD borra el registro actual de *tabla* en el proceso.<!-- END REF--> Si no hay registro actual para *tabla* en el proceso, DELETE RECORD no tiene efecto. En un formulario, puede crear un botón Borrar registro y asignarle la acción automática correspondiente, en lugar de utilizar este comando.

**Notas:** 

* si el registro actual es descargado de la memoria antes de la llamada a DELETE RECORD (por ejemplo en respuesta a un [UNLOAD RECORD](unload-record.md)), la selección actual de tabla está vacía después de la eliminación.
* el comando DELETE RECORD no hace nada cuando la tabla está en modo [READ ONLY](read-only.md), independientemente de si el registro a borrar está bloqueado o no.

La eliminación de registros es una operación permanente y no puede deshacerse (excepto cuando se ejecuta durante una transacción, ver *Utilización de transacciones*).

Si se borra un registro, el número del registro se reutilizará cuando se creen nuevos registros. No utilice el número del registro como identificador del registro si su base permite la eliminación de registros.

#### Ejemplo 

El siguiente ejemplo borra un registro de un empleado. El código pregunta al usuario el número del empleado a borrar, busca el registro correspondiente y lo borra:

```4d
 vBuscar:=Request("Número del empleado a borrar:") // Obtiene un número de identificación del empleado
 If(OK=1)
    QUERY([Empleado];[Empleado]ID =vBuscar) // Buscar el empleado
    DELETE RECORD([Empleado]) // Borrar el empleado
 End if
```

#### Ver también 

[Locked](locked.md)  
*Triggers*  