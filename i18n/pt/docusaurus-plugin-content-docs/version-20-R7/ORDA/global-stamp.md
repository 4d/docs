---
id: global-stamp
title: Usando o selo global
---

## Visão Geral

4D gestiona automáticamente un **sello de modificación global** interno, útil para manejar implementaciones de seguimiento de cambios de datos, por ejemplo para monitorear la actividad, realizar copias de seguridad, ejecutar sincronizaciones incrementales

The global modification stamp is a number, always maintained by 4D, even in case of database restoration, import, etc. Note however that the stamp can be modified using the [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp) function.

Una vez [configurado y habilitado el seguimiento de cambios de datos](#configuring-data-change-tracking), las siguientes acciones son ejecutadas automáticamente por 4D en cada modificación de registro (añadir, modificar, borrar):

1. The current global modification stamp value is saved in the special "__GlobalStamp" attribute of the involved entity.
   En caso de eliminación, una nueva entidad también se añade a la tabla `__DeletedRecords` con información sobre la entidad eliminada y el valor actual del sello de modificación global se guarda en el atributo "__Stamp".

2. The global modification stamp value is incremented.

This mechanism allows you to identify entities that have been modified, added, or deleted since a point in time, and to implement any appropriate action (see example).

:::info

No confunda el **sello de modificación global** con el **sello de entidad** interna, utilizado para la [funcionalidad bloqueo optimista](entities.md#automatic-optimistic-lock).

:::

## Configurando rastreamento de alterações de dados

Por padrão, o carimbo de modificação global não é criado (a função [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) retorna 0. To enable data change tracking, you need to add special fields and a table to your structure. You can use the contextual menu of the Structure Editor to create automatically all necessary elements.

### Requisitos de estrutura

Para habilitar el seguimiento de cambios de datos, la estructura de la aplicación debe contener al menos una tabla con un campo `__GlobalStamp`.

In addition, to ensure proper operation of the feature, the following conditions are required:

- El campo `__GlobalStamp` debe ser del tipo *Entero 64 bits*, con las propiedades *índice automático*, *Exponer como recurso REST* e *Invisible* seleccionadas.
- Debe añadirse una tabla `__DeletedRecords`, con los siguientes campos:

| Campo                                                   | Tipo            | Descrição                             |
| ------------------------------------------------------- | --------------- | ------------------------------------- |
| __PrimaryKey  | Text            | Chave primária da entidade excluída   |
| __Stamp       | Integer 64 bits | Global stamp just before the deletion |
| __TableName   | Text            | Nome da tabela de entidades excluída  |
| __TableNumber | Long Integer    | Número da tabela da entidade excluída |

Sólo puede realizar un seguimiento de los cambios de los datos de las tablas que tengan el campo `__GlobalStamp`.

:::note

En el lenguaje 4D, el valor del campo `__GlobalStamp` debe manejarse a través de una variable de tipo `Real`.

:::

### Usando o Editor de estruturas

The 4D Structure Editor allows you to enable or disable data change tracking using a single menu item.

Para ativar o rastreamento de alterações de dados:

1. Selecione a(s) tabela(s) para as quais você deseja habilitar o rastreamento de alterações nos dados.
2. Haga clic derecho en una tabla seleccionada y seleccione **Enable data change tracking** en el menú contextual.
3. É exibida uma caixa de diálogo de confirmação. Clique em **OK**.

Em seguida, 4D faz as seguintes alterações:

- Se añade un campo preconfigurado `__GlobalStamp` a la(s) tabla(s).
- Si no existe ya, se añade a la estructura una tabla `__DeletedRecords`.

Para desativar o rastreamento de alterações de dados:

1. Selecione a(s) tabela(s) para as quais você deseja remover o rastreamento de alterações nos dados.
2. Haga clic derecho en una tabla seleccionada y seleccione **Disable data change tracking** en el menú contextual.
3. É exibida uma caixa de diálogo de confirmação. Clique em **OK**.

4D elimina entonces el campo `__GlobalStamp` de la(s) tabla(s). Tenga en cuenta que si desea eliminar la tabla `__DeletedRecords`, deberá hacerlo manualmente.

## Exemplo

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
