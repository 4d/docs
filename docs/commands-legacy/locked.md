---
id: locked
title: Locked
slug: /commands/locked
displayed_sidebar: docs
---

<!--REF #_command_.Locked.Syntax-->**Locked** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Locked.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to check for locked current record, or Default table, if omitted |
| Function result | Boolean | &#8592; | Record is locked (TRUE), or Record is unlocked (FALSE) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Locked.Summary-->**Locked** tests whether or not the current record of *aTable* is locked.<!-- END REF--> Use this function to find out whether or not the record is locked; then take appropriate action, such as giving the user the choice of waiting for the record to be free or skipping the operation.

If **Locked** returns TRUE, then the record cannot be saved because it is locked by another user or another process, or it is stacked in the current process. In this case, use [LOAD RECORD](load-record.md) to reload the record until **Locked** returns FALSE.

If **Locked** returns FALSE, then the record is unlocked, meaning that the record is locked for all other users. Only the local user or current process can modify and save the record. A table must be in read/write state in order for you to modify the record.

If you try to load a record that has been deleted, **Locked** continues to return TRUE. To avoid waiting for a record that does not exist anymore, use the [LOCKED BY](locked-by.md) command. If the record has been deleted, the [LOCKED BY](locked-by.md) command returns -1 in the process parameter.

**Note:** **Locked** returns False when there is no current record in *table*, in other words, when [Record number](record-number.md) returns -1.

During transaction processing, [LOAD RECORD](load-record.md) and **Locked** are often used to test record availability. If a record is locked, it is common to cancel the transaction. 

#### See also 

[Locked records info](locked-records-info.md)  
[LOAD RECORD](load-record.md)  
[LOCKED BY](locked-by.md)  
*Record Locking*  