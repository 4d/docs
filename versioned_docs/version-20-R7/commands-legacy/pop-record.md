---
id: pop-record
title: POP RECORD
slug: /commands/pop-record
displayed_sidebar: docs
---

<!--REF #_command_.POP RECORD.Syntax-->**POP RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.POP RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to pop record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.POP RECORD.Summary-->**POP RECORD** pops a record belonging to *aTable* from the table’s record stack, and makes the record the current record.<!-- END REF-->

If you push a record, change the selection to not include the pushed record, and then pop the record, the current record is not in the current selection. To designate the popped record as the current selection, use [ONE RECORD SELECT](one-record-select.md). If you use any commands that move the record pointer before saving the record, you will lose the copy in memory.

#### Example 

The following example pops the record for the customer off the record stack:

```4d
 POP RECORD([Customers]) // Pop customer’s record onto stack
```

#### See also 

[PUSH RECORD](push-record.md)  
*Using the Record Stack*  

#### Properties
|  |  |
| --- | --- |
| Command number | 177 |
| Thread safe | &check; |
| Changes current record ||
| Forbidden on the server ||


