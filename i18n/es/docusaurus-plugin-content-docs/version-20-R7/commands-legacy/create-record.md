---
id: create-record
title: CREATE RECORD
slug: /commands/create-record
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RECORD.Syntax-->**CREATE RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.CREATE RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual crear un nuevo registro, o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE RECORD.Summary-->**CREATE RECORD** crea un nuevo registro vacío para *tabla,* pero no muestra el nuevo registro.<!-- END REF--> Utilice el comando [ADD RECORD](add-record.md) para crear un nuevo registro y mostrarlo en un formulario de entrada. 

**CREATE RECORD** se utiliza en lugar de [ADD RECORD](add-record.md) cuando los valores de los registros se introducen por programación. El nuevo registro se convierte en el registro actual para la selección actual pero la selección actual no se modifica. 

El registro existe en memoria únicamente hasta que un comando [SAVE RECORD](save-record.md) se ejecute para la tabla. Si cambia el registro actual (por ejemplo, por una búsqueda) antes de guardar el registro, el nuevo registro se pierde.

**Nota:** este comando no requiere *tabla* para estar en modo lectura/escritura. Se puede utilizar incluso cuando la tabla está en modo de sólo lectura (ver *Record Locking*). 

#### Ejemplo 

El siguiente ejemplo archiva los registros que tienen más de 30 días. Esta operación se realiza para la creación de registros en una tabla de archivo. Una vez termina la operación, los registros archivados son eliminados de la tabla \[Cuentas\]:

```4d
  // Búsqueda de registros de más de 30 días
 QUERY([Cuentas];[Cuentas]Introducido<(Current date 30))
 For($vlRegistro;1;Records in selection([Cuentas])) // Bucle una vez por registro
    CREATE RECORD([Archivo]) // Creación de un nuevo registro de archivo
    [Archive]Number:=[Cuentas]Numero // Copia de los campos en el archivo
    [Archive]Entered:=[Cuentas]Introducido
    [Archive]Amount:=[Cuentas]Cantidad
    SAVE RECORD([Cuentas]) // Guardar el registro del archivo
    NEXT RECORD([Cuentas]) // Mover el registro de cuenta siguiente
 End for
 DELETE SELECTION([Cuentas]) // Borrar los registros de cuenta
```

#### Ver también 

[ADD RECORD](add-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 68 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Prohibido en el servidor ||


