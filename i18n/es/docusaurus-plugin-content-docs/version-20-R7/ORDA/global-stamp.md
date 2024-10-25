---
id: global-stamp
title: Utilizando el sello global
---

## Generalidades

4D gestiona automáticamente un **sello de modificación global** interno, útil para manejar implementaciones de seguimiento de cambios de datos, por ejemplo para monitorear la actividad, realizar copias de seguridad, ejecutar sincronizaciones incrementales

El sello de modificación global es un número, siempre mantenido por 4D, incluso en caso de restauración de la base de datos, importación, etc. Note sin embargo que el sello puede ser modificado por la función [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp).

Una vez [configurado y habilitado el seguimiento de cambios de datos](#configuring-data-change-tracking), las siguientes acciones son ejecutadas automáticamente por 4D en cada modificación de registro (añadir, modificar, borrar):

1. El valor actual del sello de modificación global se guarda en el atributo especial "__GlobalStamp" de la entidad implicada.
   En caso de eliminación, una nueva entidad también se añade a la tabla `__DeletedRecords` con información sobre la entidad eliminada y el valor actual del sello de modificación global se guarda en el atributo "__Stamp".

2. Se incrementa el valor del sello de modificación global.

Este mecanismo permite identificar las entidades que han sido modificadas, añadidas o suprimidas desde un momento dado, y aplicar las medidas oportunas (ver el ejemplo).

:::info

No confunda el **sello de modificación global** con el **sello de entidad** interna, utilizado para la [funcionalidad bloqueo optimista](entities.md#automatic-optimistic-lock).

:::

## Configuración del seguimiento de cambios en los datos

Por defecto, el marcador de modificación global no se crea (la función [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) devuelve 0. Para habilitar el seguimiento de cambios en los datos, debe añadir campos especiales y una tabla a su estructura. Puede utilizar el menú contextual del Editor de estructura para crear automáticamente todos los elementos necesarios.

### Requisitos de estructura

Para habilitar el seguimiento de cambios de datos, la estructura de la aplicación debe contener al menos una tabla con un campo `__GlobalStamp`.

Además, para garantizar el correcto funcionamiento de la funcionalidad, se requieren las siguientes condiciones:

- El campo `__GlobalStamp` debe ser del tipo _Entero 64 bits_, con las propiedades _índice automático_, _Exponer como recurso REST_ e _Invisible_ seleccionadas.
- Debe añadirse una tabla `__DeletedRecords`, con los siguientes campos:

| Campo                                                   | Tipo           | Descripción                                |
| ------------------------------------------------------- | -------------- | ------------------------------------------ |
| __PrimaryKey  | Text           | Llave primaria de la entidad eliminada     |
| __Stamp       | Entero 64 bits | Sello global justo antes de la eliminación |
| __TableName   | Text           | Nombre de la tabla de entidades eliminada  |
| __TableNumber | Entero largo   | Número de la tabla de entidades eliminada  |

Sólo puede realizar un seguimiento de los cambios de los datos de las tablas que tengan el campo `__GlobalStamp`.

:::note

En el lenguaje 4D, el valor del campo `__GlobalStamp` debe manejarse a través de una variable de tipo `Real`.

:::

### Uso del Editor de estructuras

El editor de estructura 4D le permite activar o desactivar el seguimiento de cambios de datos mediante un único elemento de menú.

Para activar el seguimiento de cambios en los datos:

1. Seleccione la(s) tabla(s) para las cuales desea habilitar el seguimiento de cambios de datos.
2. Haga clic derecho en una tabla seleccionada y seleccione **Enable data change tracking** en el menú contextual.
3. Aparece una caja de diálogo de confirmación. Presione **OK**.

4D realiza entonces los siguientes cambios:

- Se añade un campo preconfigurado `__GlobalStamp` a la(s) tabla(s).
- Si no existe ya, se añade a la estructura una tabla `__DeletedRecords`.

Para desactivar el seguimiento de cambios de datos:

1. Seleccione la tabla o tablas para las que desea eliminar el seguimiento de cambios de datos.
2. Haga clic derecho en una tabla seleccionada y seleccione **Disable data change tracking** en el menú contextual.
3. Aparece una caja de diálogo de confirmación. Presione **OK**.

4D elimina entonces el campo `__GlobalStamp` de la(s) tabla(s). Tenga en cuenta que si desea eliminar la tabla `__DeletedRecords`, deberá hacerlo manualmente.

## Ejemplo

```4d
var $oldStamp : Real
var $tableName : Text
var $modifiedEmps : cs.EmployeeSelection
var $deletedEmpsInfo : cs. _DeletedRecordsSelection

$tableName:="Employee"
$oldStamp:=... ///carga el valor del sello anterior  
	///desde el cual desea comparar el sello actual

If ($oldStamp # ds.getGlobalStamp())
		//obtener todas las entidades nuevas o modificadas
	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)
		//obtener todas las entidades eliminadas
	$deletedEmpsInfo:=ds. _DeletedRecords.query("__Sello > :1 y __TableName = :2";\
	$oldStamp; $tableName)
End if
```
