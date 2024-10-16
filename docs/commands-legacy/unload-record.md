---
id: unload-record
title: UNLOAD RECORD
slug: /commands/unload-record
displayed_sidebar: docs
---

<!--REF #_command_.UNLOAD RECORD.Syntax-->**UNLOAD RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.UNLOAD RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to unload record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.UNLOAD RECORD.Summary-->**UNLOAD RECORD** unloads the current record of *table*.<!-- END REF-->

If the record is unlocked for the local user (locked for the other users), **UNLOAD RECORD** unlocks the record for the other users.

Although **UNLOAD RECORD** unloads it from memory, the record remains the current record. When another record is made the current record, the previous current record is automatically unloaded and therefore unlocked for other users. Always execute this command when you have finished modifying a record and want to make it available to other users, while retaining the record as your current record.

If a record has a large amount of data, picture fields, or external documents (such as 4D Write Pro documents), you may not want to keep the current record in memory unless you need to modify it. In this case, use the **UNLOAD RECORD** command to keep the current record without having it in memory. You free the memory occupied by the record, but you do not have access to its field values. If you later need access to the values of the record, use the [LOAD RECORD](load-record.md) command.

**Note:** When it is used in a transaction, the **UNLOAD RECORD** command unloads the current record only for the process that manages the transaction. For other processes, the record stays locked as long as the transaction has not been validated (or cancelled).

#### See also 

[LOAD RECORD](load-record.md)  
*Record Locking*  