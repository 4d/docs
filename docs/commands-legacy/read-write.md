---
id: read-write
title: READ WRITE
slug: /commands/read-write
displayed_sidebar: docs
---

<!--REF #_command_.READ WRITE.Syntax-->**READ WRITE** {( aTable | * )}<!-- END REF-->
<!--REF #_command_.READ WRITE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable &#124; * | Table, Operator | &#8594;  | Table for which to set read-write state, or * for all the tables, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.READ WRITE.Summary-->READ WRITE changes the state of *aTable* to read/write for the process in which it is called.<!-- END REF--> If the optional \* parameter is specified, all tables are changed to read/write state.

After a call to READ WRITE, when a record is loaded, the record is unlocked if no other user has locked the record. This command does not change the status of the currently loaded record, only that of subsequently loaded records.

The default state for all tables is read/write.

Use READ WRITE when you must modify a record and save the changes. Also use READ WRITE when you must lock a record for other users, even if you are not making any changes. Setting a table to read/write mode prevents other users from editing that table. However, other users can create new records.

**Note:** This command is not retroactive. A record is loaded according to the table’s read/write status at the time of loading. To load a record from a read-only table in read/write mode, you must first change the table state to read/write.

#### See also 

[READ ONLY](read-only.md)  
[Read only state](read-only-state.md)  
*Record Locking*  