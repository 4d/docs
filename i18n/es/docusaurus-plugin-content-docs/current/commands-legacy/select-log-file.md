---
id: select-log-file
title: SELECT LOG FILE
slug: /commands/select-log-file
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *historial* )<!-- END REF-->
<!--REF #_command_.SELECT LOG FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| historial | *, Text | &#8594;  | Nombre del archivo historial o * para cerrar el historial actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SELECT LOG FILE.Summary-->El comando **SELECT LOG FILE** crea, o cierra el archivo historial de acuerdo al valor que se pase en *historial*.<!-- END REF-->

Pase en *historial*, el nombre o la ruta de acceso completa del archivo historial a crear. Si pasa únicamente un nombre, el archivo se creará junto al archivo de estructura de la base.

Si pasa una cadena vacía en *historial*, **SELECT LOG FILE** presenta una caja de diálogo estándar de registro de archivo, permitiendo al usuario elegir el nombre y la ubicación del archivo historial a crear. Si el archivo se crea correctamente, la variable OK toma el valor 1\. Por el contrario, si el usuario hace clic en el botón Cancelar o si el archivo historial no se puede crear, OK toma el valor 0.

**Nota:** el nuevo archivo de historial no se genera de inmediato después de la ejecución del comando, sino después del siguiente backup (el parámetro se conserva en el archivo de datos y se tendrá en cuenta incluso si la base se cierra). Puede llamar al comando [BACKUP](backup.md) para provocar la creación del archivo historial.

Si pasa *"\*"* en *historial*, **SELECT LOG FILE** cierra el archivo historial actual de la base. La variable OK toma el valor 1 cuando el archivo historial está cerrado.

Si utiliza **SELECT LOG FILE** para crear un archivo historial antes de que el backup haya terminado y el archivo de datos ya contiene registros, 4D genera el error *\-4447,* el cual puede interceptar con un método [ON ERR CALL](on-err-call.md).

#### Variables y conjuntos del sistema 

OK toma el valor 1 si el archivo histórico es creado o cerrado correctamente.

#### Gestión de errores 

Se genera el error -4447 si no se puede realizar la operación porque la base de datos necesita una copia de seguridad. Puede interceptar el error con un método [ON ERR CALL](on-err-call.md "ON ERR CALL"). 

#### Ver también 

[ON ERR CALL](on-err-call.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 345 |
| Hilo seguro | &cross; |
| Modifica variables | OK, error |


