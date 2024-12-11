---
id: one-record-select
title: ONE RECORD SELECT
slug: /commands/one-record-select
displayed_sidebar: docs
---

<!--REF #_command_.ONE RECORD SELECT.Syntax-->**ONE RECORD SELECT** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.ONE RECORD SELECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table in which to reduce the selection to the current record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.ONE RECORD SELECT.Summary-->**ONE RECORD SELECT** reduces the current selection of *aTable* to the current record.<!-- END REF--> If no current record exists or if the current record is not loaded into memory (special case), **ONE RECORD SELECT** has no effect.

#### Note 

This command was useful to “return” a record that had been pushed and popped from the record stack back to the selection while the selection for the table was changed. [SET QUERY DESTINATION](set-query-destination.md) allows you to make a query without changing the selection or the current record of a table; therefore, you no longer need to push and pop a current record in order to query its table. Consequently, **ONE RECORD SELECT** is less useful, unless you actually want to reduce the selection of a table to the current record.

**Warning:** Keep in mind that a record number can be reused if the record is deleted and another record is created (see *About Record Numbers*). 

#### See also 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
*Named Selections*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 189 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||


