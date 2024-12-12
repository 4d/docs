---
id: use-entity-selection
title: USE ENTITY SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.USE ENTITY SELECTION.Syntax-->**USE ENTITY SELECTION** ( *entitySelection* : 4D.EntitySelection )<!-- END REF-->
<!--REF #_command_.USE ENTITY SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| entitySelection | 4D.EntitySelection | &#8594;  | An entity selection |

<!-- END REF-->

#### Description 

The `USE ENTITY SELECTION` command <!--REF #_command_.USE ENTITY SELECTION.Summary-->updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection<!-- END REF-->.

This command cannot be used with a [Remote datastore](../ORDA/remoteDatastores.md).


:::info

This command is designed to make 4D current selections benefit from the power of ORDA queries. For performance reasons, in 4D single-user and 4D Server, the command directly connects *entitySelection* to the current selection. Therefore, once *entitySelection* has been used, it must not be reused or altered afterwards.

:::

:::note

After a call to `USE ENTITY SELECTION`, the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the `LOAD RECORD` command after the `USE ENTITY SELECTION` command.

:::

#### Example

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel is related to the Employee dataclass
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //The current selection of the Employee table is updated
```



#### See also 

[Create entity selection](create-entity-selection.md)  