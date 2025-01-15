---
id: use-set
title: USE SET
slug: /commands/use-set
displayed_sidebar: docs
---

<!--REF #_command_.USE SET.Syntax-->**USE SET** ( *set* )<!-- END REF-->
<!--REF #_command_.USE SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to use |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE SET.Summary-->**USE SET** makes the records in *set* the current selection for the table to which the set belongs.<!-- END REF-->

When you create a set, the current record is “remembered” by the set. **USE SET** retrieves the position of this record and makes it the new current record. If you delete this record before you execute **USE SET**, 4D selects the first record in the set as the current record. The set commands [UNION](union.md), [INTERSECTION](intersection.md), [DIFFERENCE](difference.md) and [ADD TO SET](add-to-set.md) reset the current record. Also, if you create a set that does not contain the position of the current record, **USE SET** selects the first record in the set as the current record.

**WARNING:** Remember that a set is a representation of a selection of records at the moment that the set is created. If the records represented by the set do change, the set may no longer be accurate. Therefore, a set saved to disk should represent a group of records that does not change frequently. A number of things can invalidate a set: modifying a record of the set, deleting a record of the set, or changing the criteria that determined the set.

#### Example 

The following example uses [LOAD SET](load-set.md) to load a set of the Acme locations in New York. It then uses **USE SET** to make the loaded set the current selection:

```4d
 LOAD SET([Companies];"NY Acme";"NYAcmeSt") // Load the set into memory
 USE SET("NY Acme") // Change current selection to NY Acme
 CLEAR SET("NY Acme") // Clear the set from memory
```

#### See also 

[CLEAR SET](clear-set.md)  
[LOAD SET](load-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 118 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||


