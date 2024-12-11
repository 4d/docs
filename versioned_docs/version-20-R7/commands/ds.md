---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| localID | Text | &#8594;  | Local ID of the remote datastore to return |
| Result | DataStore | &#8592; | Reference to the datastore |

<!-- END REF-->


#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by *localID*<!-- END REF -->.

If you omit the *localID* parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `ds`.

You can also get a reference on an open remote datastore by passing its local id in the *localID* parameter. The datastore must have been previously opened with the [`Open datastore`](open-datastore.md) command by the current database (host or component). The local id is defined when using this command.

>The scope of the local id is the database where the datastore has been opened.

If no *localID* datastore is found, the command returns **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](../ORDA/dsMapping.md#general-rules).

#### Example 1

Using the main datastore on the 4D database:

```4d
var $result : cs.EmployeeSelection
$result:=ds.Employee.query("firstName = :1";"S@")
```

#### Example 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $entity:=ds($localId)[$dataClassName].all().first()
```


#### See also 

[Open datastore](open-datastore.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1482 |
| Thread safe | &check; |
| Forbidden on the server ||


