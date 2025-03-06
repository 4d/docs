---
id: create-record
title: CREATE RECORD
slug: /commands/create-record
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RECORD.Syntax-->**CREATE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.CREATE RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to create a new record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE RECORD.Summary-->**CREATE RECORD** creates a new empty record for *aTable*, but does not display the new record.<!-- END REF--> Use [ADD RECORD](add-record.md) to create a new record and display it for data entry. 

**CREATE RECORD** is used instead of [ADD RECORD](add-record.md) when data for the record is assigned with the language. The new record becomes the current record but the current selection is left untouched.

The record exists in memory only until a [SAVE RECORD](save-record.md) command is executed for the table. If the current record is changed (for example, by a query) before the record is saved, the new record is lost.

**Note:** This command does not require *aTable* to be in read/write mode. It can be used even when the table is in read-only mode (see *Record Locking*). 

#### Example 

The following example archives records that are over 30 days old. It does does this by creating new records in an archival table. When the archiving is finished, the records that were archived are deleted from the \[Accounts\] table:

```4d
  // Find records more than 30 days old
 QUERY([Accounts];[Accounts]Entered<(Current date 30))
 For($vlRecord;1;Records in selection([Accounts])) // Loop once for each record
    CREATE RECORD([Archive]) // Create a new archive record
    [Archive]Number:=[Account]Number // Copy fields to the archive record
    [Archive]Entered:=[Account]Entered
    [Archive]Amount:=[Account]Amount
    SAVE RECORD([Archive]) // Save the archive record
    NEXT RECORD([Accounts]) // Move to the next account record
 End for
 DELETE SELECTION([Accounts]) // Delete the account records
```

#### See also 

[ADD RECORD](add-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 68 |
| Thread safe | &check; |
| Changes current record ||


