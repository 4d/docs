---
id: load-record
title: LOAD RECORD
slug: /commands/load-record
displayed_sidebar: docs
---

<!--REF #_command_.LOAD RECORD.Syntax-->**LOAD RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.LOAD RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to load record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD RECORD.Summary-->**LOAD RECORD** loads the current record of *aTable*.<!-- END REF--> If there is no current record, **LOAD RECORD** has no effect.  
You can then use the [Locked](locked.md) function to determine whether you can modify the record:

* If the table is in read-only state, the [Locked](locked.md) function returns TRUE, and you cannot modify the record.
* If the table is in read/write state but the record was already locked, the record will be read-only, and you cannot modify the record.
* If the table is in read/write state and the record is not locked, you can modify the record in the current process. The [Locked](locked.md) function returns TRUE for all other users and processes.

**Note:** If the **LOAD RECORD** command is executed after a [READ ONLY](read-only.md), the record is automatically unloaded and loaded without having to use the [UNLOAD RECORD](unload-record.md) command.

Usually, you do not need to use the **LOAD RECORD** command, because commands like [QUERY](query.md), [NEXT RECORD](next-record.md), [PREVIOUS RECORD](previous-record.md), etc., automatically load the current record.

In multi-user and multi-process environments, when you need to modify an existing record, you must access the table (to which the record belongs) in read/write mode. If a record is locked and not loaded, **LOAD RECORD** allows you to attempt to load the record again at a later time. By using **LOAD RECORD** in a loop, you can wait until the record becomes available in read/write mode.

**Tip:** The **LOAD RECORD** command can be used to reload the current record in the context of an input form. All the data modified are then replaced by their previous values. In this case, the **LOAD RECORD** command carries out a sort of general cancellation of data entry. 

#### See also 

[Locked](locked.md)  
*Record Locking*  
[UNLOAD RECORD](unload-record.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 52 |
| Thread safe | &check; |
| Forbidden on the server ||


