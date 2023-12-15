---
id: global-stamp
title: Using the Global Stamp
---



## Generalidades

4D automatically manages an internal **global modification stamp**, useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc.

The global modification stamp is a number, always maintained by 4D, even in case of database restoration, import, etc. Sin embargo, tenga en cuenta que el sello puede modificarse utilizando la función [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp).

Once the [data change tracking is configured and enabled](#configuring-data-change-tracking), the following actions are automatically executed by 4D at each record modification (add, modify, delete):

1. The current global modification stamp value is saved in the special "__GlobalStamp" attribute of the involved entity. In case of a deletion, a new entity is also added to the `__DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.

2. The global modification stamp value is incremented.

Este mecanismo permite identificar las entidades que han sido modificadas, añadidas o suprimidas desde un momento dado, y aplicar las medidas oportunas (ver el ejemplo).

:::info

Do not confuse the **global modification stamp** with the internal **entity stamp**, used for the [optimistic locking feature](entities.md#automatic-optimistic-lock).

:::



## Configuración del seguimiento de cambios en los datos

Por defecto, el sello de modificación global no se crea (la función [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) devuelve 0. To enable data change tracking, you need to add special fields and a table to your structure. Puede utilizar el menú contextual del Editor de estructura para crear automáticamente todos los elementos necesarios.

### Requisitos de estructura

Para habilitar el seguimiento de cambios de datos, la estructura de la aplicación debe contener al menos una tabla con un campo `__GlobalStamp`.

Además, para garantizar el correcto funcionamiento de la funcionalidad, se requieren las siguientes condiciones:

- The `__GlobalStamp` field must must be of type *Integer 64 bits*, with *automatic index*, *Expose as REST resource*, and *Invisible* properties selected.
- Debe añadirse una tabla `__DeletedRecords`, con los siguientes campos:

| Campo         | Tipo           | Descripción                               |
| ------------- | -------------- | ----------------------------------------- |
| __PrimaryKey  | Text           | Llave primaria de la entidad eliminada    |
| __Stamp       | Entero 64 bits | Global stamp just before the deletion     |
| __TableName   | Text           | Nombre de la tabla de entidades eliminada |
| __TableNumber | Entero largo   | Número de la tabla de entidades eliminada |

Sólo puede realizar un seguimiento de los cambios de los datos de las tablas que tengan el campo `__GlobalStamp`.

:::note

En el lenguaje 4D, el valor del campo `__GlobalStamp` debe manejarse a través de una variable de tipo `Real`.

:::

### Uso del Editor de estructuras

El editor de estructura 4D le permite activar o desactivar el seguimiento de cambios de datos mediante un único elemento de menú.

Para activar el seguimiento de cambios en los datos:

1. Seleccione la(s) tabla(s) para las cuales desea habilitar el seguimiento de cambios de datos.
2. Haga clic derecho en una tabla seleccionada y seleccione **Enable data change tracking** en el menú contextual.
3. Aparece una caja de diálogo de confirmación. Haga clic en **OK**.

4D realiza entonces los siguientes cambios:

- Se añade un campo preconfigurado `__GlobalStamp` a la(s) tabla(s).
- Si no existe ya, se añade a la estructura una tabla `__DeletedRecords`.


Para desactivar el seguimiento de cambios de datos:

1. Seleccione la tabla o tablas para las que desea eliminar el seguimiento de cambios de datos.
2. Haga clic derecho en una tabla seleccionada y seleccione **Disable data change tracking** en el menú contextual.
3. Aparece una caja de diálogo de confirmación. Haga clic en **OK**.

4D elimina entonces el campo `__GlobalStamp` de la(s) tabla(s). Tenga en cuenta que si desea eliminar la tabla `__DeletedRecords`, deberá hacerlo manualmente.



## Ejemplo

```4d var $oldStamp : Real var $tableName : Text var $modifiedEmps : cs.EmployeeSelection var $deletedEmpsInfo : cs.__DeletedRecordsSelection

$tableName:="Employee" $oldStamp:=... //cargar el valor del sello anterior  
///desde el cual desea comparar el sello actual

If ($oldStamp # ds.getGlobalStamp()) //get all new or modified entities $modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp) //get all deleted entities     $deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\
    $oldStamp; $tableName) End if
