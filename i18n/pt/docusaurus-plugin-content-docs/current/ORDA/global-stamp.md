---
id: global-stamp
title: Usando o selo global
---

## Visão Geral

4D automatically manages an internal **global modification stamp**, useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc.

The global modification stamp is a number, always maintained by 4D, even in case of database restoration, import, etc. Note however that the stamp can be modified using the [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp) function.

Once the [data change tracking is configured and enabled](#configuring-data-change-tracking), the following actions are automatically executed by 4D at each record modification (add, modify, delete):

1. The current global modification stamp value is saved in the special "__GlobalStamp" attribute of the involved entity.
   In case of a deletion, a new entity is also added to the `__DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.

2. The global modification stamp value is incremented.

This mechanism allows you to identify entities that have been modified, added, or deleted since a point in time, and to implement any appropriate action (see example).

:::info

Do not confuse the **global modification stamp** with the internal **entity stamp**, used for the [optimistic locking feature](entities.md#automatic-optimistic-lock).

:::

## Configurando rastreamento de alterações de dados

By default, the global modification stamp is not created (the [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) function returns 0. To enable data change tracking, you need to add special fields and a table to your structure. You can use the contextual menu of the Structure Editor to create automatically all necessary elements.

### Requisitos de estrutura

To enable data change tracking, the application structure must contain at least one table with a `__GlobalStamp` field.

In addition, to ensure proper operation of the feature, the following conditions are required:

- The `__GlobalStamp` field must must be of type _Integer 64 bits_, with _automatic index_, _Expose as REST resource_, and _Invisible_ properties selected.
- A `__DeletedRecords` table must be added, with the following fields:

| Campo                                                   | Tipo            | Descrição                             |
| ------------------------------------------------------- | --------------- | ------------------------------------- |
| __PrimaryKey  | Text            | Chave primária da entidade excluída   |
| __Stamp       | Integer 64 bits | Global stamp just before the deletion |
| __TableName   | Text            | Nome da tabela de entidades excluída  |
| __TableNumber | Long Integer    | Número da tabela da entidade excluída |

You can only track changes for data in tables having the `__GlobalStamp` field.

:::note

In the 4D language, the `__GlobalStamp` field value should be handled through a `Real` type variable.

:::

### Usando o Editor de estruturas

The 4D Structure Editor allows you to enable or disable data change tracking using a single menu item.

Para ativar o rastreamento de alterações de dados:

1. Selecione a(s) tabela(s) para as quais você deseja habilitar o rastreamento de alterações nos dados.
2. Right-click on a selected table and select **Enable data change tracking** in the contextual menu.
3. É exibida uma caixa de diálogo de confirmação. Click **OK**.

Em seguida, 4D faz as seguintes alterações:

- A preconfigured `__GlobalStamp` field is added to the table(s).
- If not already existing, a `__DeletedRecords` table is added to the structure.

Para desativar o rastreamento de alterações de dados:

1. Selecione a(s) tabela(s) para as quais você deseja remover o rastreamento de alterações nos dados.
2. Right-click on a selected table and select **Disable data change tracking** in the contextual menu.
3. É exibida uma caixa de diálogo de confirmação. Click **OK**.

4D then removes the `__GlobalStamp` field from the table(s). Note that if you want to remove the `__DeletedRecords` table, you need to do it manually.

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
