---
id: global-stamp
title: Utilizando el sello global
---

## Generalidades

4D automatically manages an internal **global modification stamp**, useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc.

El sello de modificación global es un número, siempre mantenido por 4D, incluso en caso de restauración de la base de datos, importación, etc. Note however that the stamp can be modified using the [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp) function.

Once the [data change tracking is configured and enabled](#configuring-data-change-tracking), the following actions are automatically executed by 4D at each record modification (add, modify, delete):

1. El valor actual del sello de modificación global se guarda en el atributo especial "__GlobalStamp" de la entidad implicada.
   In case of a deletion, a new entity is also added to the `__DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.

2. Se incrementa el valor del sello de modificación global.

Este mecanismo permite identificar las entidades que han sido modificadas, añadidas o suprimidas desde un momento dado, y aplicar las medidas oportunas (ver el ejemplo).

:::info

Do not confuse the **global modification stamp** with the internal **entity stamp**, used for the [optimistic locking feature](entities.md#automatic-optimistic-lock).

:::

## Configuración del seguimiento de cambios en los datos

By default, the global modification stamp is not created (the [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) function returns 0. Para habilitar el seguimiento de cambios en los datos, debe añadir campos especiales y una tabla a su estructura. Puede utilizar el menú contextual del Editor de estructura para crear automáticamente todos los elementos necesarios.

### Requisitos de estructura

To enable data change tracking, the application structure must contain at least one table with a `__GlobalStamp` field.

Además, para garantizar el correcto funcionamiento de la funcionalidad, se requieren las siguientes condiciones:

- The `__GlobalStamp` field must must be of type _Integer 64 bits_, with _automatic index_, _Expose as REST resource_, and _Invisible_ properties selected.
- A `__DeletedRecords` table must be added, with the following fields:

| Campo                                                   | Tipo           | Descripción                                |
| ------------------------------------------------------- | -------------- | ------------------------------------------ |
| __PrimaryKey  | Text           | Llave primaria de la entidad eliminada     |
| __Stamp       | Entero 64 bits | Sello global justo antes de la eliminación |
| __TableName   | Text           | Nombre de la tabla de entidades eliminada  |
| __TableNumber | Entero largo   | Número de la tabla de entidades eliminada  |

You can only track changes for data in tables having the `__GlobalStamp` field.

:::note

In the 4D language, the `__GlobalStamp` field value should be handled through a `Real` type variable.

:::

### Uso del Editor de estructuras

El editor de estructura 4D le permite activar o desactivar el seguimiento de cambios de datos mediante un único elemento de menú.

Para activar el seguimiento de cambios en los datos:

1. Seleccione la(s) tabla(s) para las cuales desea habilitar el seguimiento de cambios de datos.
2. Right-click on a selected table and select **Enable data change tracking** in the contextual menu.
3. Aparece una caja de diálogo de confirmación. Presione **OK**.

4D realiza entonces los siguientes cambios:

- A preconfigured `__GlobalStamp` field is added to the table(s).
- If not already existing, a `__DeletedRecords` table is added to the structure.

Para desactivar el seguimiento de cambios de datos:

1. Seleccione la tabla o tablas para las que desea eliminar el seguimiento de cambios de datos.
2. Right-click on a selected table and select **Disable data change tracking** in the contextual menu.
3. Aparece una caja de diálogo de confirmación. Presione **OK**.

4D then removes the `__GlobalStamp` field from the table(s). Note that if you want to remove the `__DeletedRecords` table, you need to do it manually.

## Ejemplo

```4d
var $oldStamp : Real
var $tableName : Text
var $modifiedEmps : cs.EmployeeSelection
var $deletedEmpsInfo : cs.__DeletedRecordsSelection

$tableName:="Employee"
$oldStamp:=... //load the previous stamp value  
	//from which you want to compare the current stamp

If ($oldStamp # ds.getGlobalStamp())
		//get all new or modified entities
	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)
		//get all deleted entities
	$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\
	$oldStamp; $tableName)
End if
```
