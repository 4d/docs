---
id: records-in-table
title: Records in table
slug: /commands/records-in-table
displayed_sidebar: docs
---

<!--REF #_command_.Records in table.Syntax-->**Records in table** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return the number of records, or Default table, if omitted |
| Function result | Integer | &#8592; | Total number of records in the table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Records in table.Summary-->**Records in table** returns the total number of records in aTable.<!-- END REF--> [Records in selection](records-in-selection.md) returns the number of records in the current selection only. If **Records in table** is used within a transaction, records created during the transaction will be taken into account.

#### Example 

The following example displays an alert that shows the number of records in a table:

```4d
 ALERT("There are "+String(Records in table([People]))+" records in the table.")
```

#### See also 

[Records in selection](records-in-selection.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 83 |
| Thread safe | &check; |
| Forbidden on the server ||


