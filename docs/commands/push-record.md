---
id: push-record
title: PUSH RECORD
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | -> | Table for which to push record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.PUSH RECORD.Summary-->**PUSH RECORD** pushes the current record of *aTable* (and its subrecords, if any) onto the table’s record stack.<!-- END REF--> **PUSH RECORD** may be executed before a record is saved.

If you push a record that was unlocked, this record stays locked for all the other processes and users until you pop and unload it.

**Compatibility note:** Beginning with version 11 of 4D, this command no longer supports subtables. 

#### Example 

The following example pushes the record for the customer onto the record stack:

```4d
 PUSH RECORD([Customer]) ` Push customer’s record onto stack
```

#### See also 
[POP RECORD](pop-record.md)  
[Using the Record Stack](../../4D/20-R6/Using-the-Record-Stack.300-6958028.en.html)  