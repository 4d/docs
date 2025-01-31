---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*aTable* ;} *record* )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table in which to go to the record, or Default table, if omitted |
| record | Integer | &#8594;  | Number returned by Record number |

<!-- END REF-->

#### Description 

<!--REF #_command_.GOTO RECORD.Summary-->**GOTO RECORD** selects the specified record of *aTable* as the current record.<!-- END REF--> The *record* parameter is the number returned by the [Record number](record-number.md) function. After executing this command, the record is the only record in the selection.

If *record* is less than the smallest record number in the database or greater than the greatest record number in the database, 4D generates an error message stating that the record number is out of range. If *record* is equal to the record number of a deleted record, 4D returns the error -10503 and the selection becomes empty.

#### Example 

See the example for [Record number](record-number.md).

#### See also 

*About Record Numbers*  
[Record number](record-number.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 242 |
| Thread safe | &check; |
| Modifies variables | error |
| Changes current selection ||


