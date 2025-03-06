---
id: scan-index
title: SCAN INDEX
slug: /commands/scan-index
displayed_sidebar: docs
---

<!--REF #_command_.SCAN INDEX.Syntax-->**SCAN INDEX** ( *aField* ; *number* {; > or <} )<!-- END REF-->
<!--REF #_command_.SCAN INDEX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Indexed field on which to scan index |
| number | Integer | &#8594;  | Number of records to return |
| > or < | Operator | &#8594;  | > from beginning of index < from end of index |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCAN INDEX.Summary-->**SCAN INDEX** returns a selection of *number* records from the table containing the *aField* field.<!-- END REF--> If you pass <, **SCAN INDEX** returns the *number* of records from the end of the index (high values). If you pass >, **SCAN INDEX** returns the *number* of records from the beginning of the index (low values). This command is very efficient because it uses the index to perform the operation.

**Note:** The selection obtained is not sorted.

**SCAN INDEX** only works on indexed fields. This command changes the current selection of the table for the current process and loads the first record of the selection as the current record.

If you specify more records than exist in the table, **SCAN INDEX** will return all the records.

##### 

**Note:** This command does not support Object type fields.

#### Example 

The following example mails letters to 50 of the worst customers and then to 50 of the best customers:

```4d
 SCAN INDEX([Customers]TotalDue;50;<) // Get the 50 worst customers
 ORDER BY([Customers]Zipcode;>) // Sort by Zip codes
 FORM SET OUTPUT([Customers];"ThreateningMail")
 PRINT SELECTION([Customers]) // Print the letters
 SCAN INDEX([Customers]TotalDue;50;>) // Get the 50 best customers
 ORDER BY([Customers]Zipcode;>) // Sort by Zip codes
 FORM SET OUTPUT([Customers];"Thanks Letter")
 PRINT SELECTION([Customers]) // Print the letters
```

#### See also 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[REDUCE SELECTION](reduce-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 350 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||


