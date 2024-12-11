---
id: pause-indexes
title: PAUSE INDEXES
slug: /commands/pause-indexes
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE INDEXES.Syntax-->**PAUSE INDEXES** ( *aTable* )<!-- END REF-->
<!--REF #_command_.PAUSE INDEXES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to pause indexes |

<!-- END REF-->

#### Description 

<!--REF #_command_.PAUSE INDEXES.Summary-->The **PAUSE INDEXES** command temporarily disables all the indexes of *aTable*, except for the index of the primary key.<!-- END REF-->

The indexes are not physically deleted from the data (.4DIndx file) or the structure of the database (\_USER\_INDEXES, see *System Tables*), but they are rendered invalid and are thus no longer updated. When indexes are disabled, all the operations performed on *aTable* (queries, sorts, record additions, modifications and deletions) no longer use the indexes.

This command is mainly useful when you are importing or modifying large amounts of data in tables that have several indexes. Since 4D must update the indexes each time a record is validated, the operation could take a considerable amount of time. Disabling the indexes beforehand can significantly speed up the operation. 

To resume the indexes after the operation is over, you can just call the [RESUME INDEXES](resume-indexes.md) command for *aTable*. 

**Note:** You can obtain a similar result by using the [CREATE INDEX](create-index.md) and [DELETE INDEX](delete-index.md) commands, but with notable differences:

* it is necessary to call [DELETE INDEX](delete-index.md) / [CREATE INDEX](create-index.md) for each index in *aTable*.
* calling the [DELETE INDEX](delete-index.md) / [CREATE INDEX](create-index.md) commands change the internal number of the index, which is not the case with **PAUSE INDEXES** / [RESUME INDEXES](resume-indexes.md). Changing the index number will generate an automatic reindexing of the data if the dataset changes.

If you call the **PAUSE INDEXES** command for a table and then quit the database without having called the [RESUME INDEXES](resume-indexes.md) command for this table, all this table’s indexes are automatically rebuilt when the database is restarted. 

**Note:** This command cannot be executed from a 4D remote.

#### Example 

Example of method for importing large amounts of data:

```4d
 PAUSE INDEXES([Articles])
 IMPORT DATA("HugeImport.txt") //Importing
 RESUME INDEXES([Articles])
```

#### See also 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1293 |
| Thread safe | &check; |


