---
id: save-record
title: SAVE RECORD
slug: /commands/save-record
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RECORD.Syntax-->**SAVE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.SAVE RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to save the current record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE RECORD.Summary-->**SAVE RECORD** saves the current record of *aTable* in the current process.<!-- END REF--> If there is no current record, then **SAVE RECORD** is ignored.

You use **SAVE RECORD** to save a record that you created or modified with code. A record that has been modified and validated by the user in a form does not need to be saved with **SAVE RECORD**. A record that has been modified by the user in a form, but has been canceled, can still be saved with **SAVE RECORD**.

If you call the **SAVE RECORD** command when no field has been modified in the record, the command does nothing (the trigger is not called). 

Here are some cases where **SAVE RECORD** is required:

* To save a new record created with [CREATE RECORD](create-record.md) or [DUPLICATE RECORD](duplicate-record.md)
* To save data from [RECEIVE RECORD](receive-record.md)
* To save a record modified by a method
* To save a record that contains new or modified subrecord data following an *\_o\_ADD SUBRECORD*, *\_o\_CREATE SUBRECORD*, or *\_o\_MODIFY SUBRECORD* command
* During data entry to save the displayed record before using a command that changes the current record
* During data entry to save the current record

You should not execute a **SAVE RECORD** during the On Validate event for a form that has been accepted. If you do, the record will be saved twice.

**Note:** Saving a record that contains edited object field(s) usually requires that you notify explicitely 4D before calling **SAVE RECORD**. For more information, please refer to the *Saving Object fields* section. 

#### Example 

The following example is part of a method that reads records from a document. The code segment receives a record, and then, if it is received properly, saves it:

```4d
 RECEIVE RECORD([Customers]) // Receive record from disk
 If(OK=1) // If the record is received properly…
    SAVE RECORD([Customers]) // save it
 End if
```

#### See also 

[CREATE RECORD](create-record.md)  
[Locked](locked.md)  
*Triggers*  