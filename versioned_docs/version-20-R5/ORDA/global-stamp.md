---
id: global-stamp
title: Using the Global Stamp
---



## Overview

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



## Configuring data change tracking

By default, the global modification stamp is not created (the [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) function returns 0. To enable data change tracking, you need to add special fields and a table to your structure. You can use the contextual menu of the Structure Editor to create automatically all necessary elements.

### Structure requirements

To enable data change tracking, the application structure must contain at least one table with a `__GlobalStamp` field.

In addition, to ensure proper operation of the feature, the following conditions are required:

- The `__GlobalStamp` field must must be of type *Integer 64 bits*, with *automatic index*, *Expose as REST resource*, and *Invisible* properties selected.
- A `__DeletedRecords` table must be added, with the following fields:

|Field|Type|Description|
|---|---|---|
|__PrimaryKey|Text|Primary key of the deleted entity|
|__Stamp|Integer 64 bits|Global stamp just before the deletion|
|__TableName|Text|Name of the deleted entity table|
|__TableNumber|Long Integer|Number of the deleted entity table|

You can only track changes for data in tables having the `__GlobalStamp` field.

:::note

In the 4D language, the `__GlobalStamp` field value should be handled through a `Real` type variable.  

:::

### Using the Structure Editor

The 4D Structure Editor allows you to enable or disable data change tracking using a single menu item.

To enable data change tracking:

1. Select the table(s) for which you want to enable data change tracking.
2. Right-click on a selected table and select **Enable data change tracking** in the contextual menu.
3. A confirmation dialog box is displayed. Click **OK**.

4D then makes the following changes:

- A preconfigured `__GlobalStamp` field is added to the table(s).
- If not already existing, a `__DeletedRecords` table is added to the structure.


To disable data change tracking:

1. Select the table(s) for which you want to remove data change tracking.
2. Right-click on a selected table and select **Disable data change tracking** in the contextual menu.
3. A confirmation dialog box is displayed. Click **OK**.

4D then removes the `__GlobalStamp` field from the table(s). Note that if you want to remove the `__DeletedRecords` table, you need to do it manually.  



## Example

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
