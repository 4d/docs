---
id: delete-index
title: DELETE INDEX
slug: /commands/delete-index
displayed_sidebar: docs
---

<!--REF #_command_.DELETE INDEX.Syntax-->**DELETE INDEX** ( fieldPtr | indexName {; *} )<!-- END REF-->
<!--REF #_command_.DELETE INDEX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr &#124; indexName | Pointer, Text | &#8594;  | Pointer to field whose indexes are to be deleted or Name of index to be deleted |
| * | Operator | &#8594;  | If passed = asynchronous operation |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE INDEX.Summary-->The DELETE INDEX command deletes one or more existing indexes from the database.<!-- END REF-->  
You can pass either a pointer to a field or the name of an index in the parameter:

* If you pass a pointer to a field (*fieldPtr*), all the indexes associated with the field will be deleted. This can consist of keyword indexes or standard indexes. However, if the field is included in one or more composite indexes, they are not deleted (you must pass an index name).
* If you pass the name of an index (*indexName*), only the designated index will be deleted. This can consist of keyword indexes, standard indexes or composite indexes.

The optional *\** parameter, when it is passed, performs deindexing in asynchronous mode. In this mode, the original method continues its execution after the call from the command, regardless of whether or not the index deletion is finished.

If there is no index corresponding to *fieldPtr* or *indexName*, the command does nothing.

#### Note for deployment 

Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the *Program Files* folder or .4dz file). 

#### Example 

This example illustrates both syntaxes of the command: 

```4d
  //Deletion of all indexes related to the LastName field
 DELETE INDEX(->[Customers]LastName)
  //Deletion of index named “CityZip”
 DELETE INDEX("CityZip")
```

#### See also 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  
[SET INDEX](set-index.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 967 |
| Thread safe | &check; |


