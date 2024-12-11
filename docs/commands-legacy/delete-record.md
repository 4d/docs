---
id: delete-record
title: DELETE RECORD
slug: /commands/delete-record
displayed_sidebar: docs
---

<!--REF #_command_.DELETE RECORD.Syntax-->**DELETE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DELETE RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table where the current record will be deleted, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE RECORD.Summary-->**DELETE RECORD** deletes the current record of *aTable* in the process.<!-- END REF--> If there is no current record for *aTable* in the process, **DELETE RECORD** has no effect. In a form, you can create a Delete Record button instead of using this command.

**Notes:**

* If the current record is unloaded from memory before calling **DELETE RECORD** (for example, subsequent to an [UNLOAD RECORD](unload-record.md)), the current selection of *table* is empty after the deletion occurs.
* The **DELETE RECORD** command does nothing when the table is in [READ ONLY](read-only.md) mode, regardless of whether the record to be deleted is locked or not.

Deleting records is a permanent operation and cannot be undone (except when it is executed during a transaction, see *Using Transactions*).

If a record is deleted, the record number will be reused when new records are created. Do not use the record number as the record identifier if you will ever delete records from the database.

#### Example 

The following example deletes an employee record. The code asks the user what employee to delete, searches for the employee’s record, and then deletes it:

```4d
 vFind:=Request("Employee ID to delete:") // Get an employee ID
 If(OK=1)
    QUERY([Employee];[Employee]ID =vFind) // Find the employee
    DELETE RECORD([Employee]) // Delete the employee
 End if
```

#### See also 

[Locked](locked.md)  
*Triggers*  

#### Properties
|  |  |
| --- | --- |
| Command number | 58 |
| Thread safe | &check; |
| Changes current record ||
| Forbidden on the server ||


