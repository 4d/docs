---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *aField* )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Many table field (from which the relation starts) |

<!-- END REF-->

#### Description 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->The RELATE MANY SELECTION command generates a selection of records in the Many table, based on a selection of records in the One table, and loads the first record of the Many table as the current record.<!-- END REF-->RELATE MANY SELECTION changes the current record for the One table.

#### Example 

This example selects all invoices made to the customers whose credit is greater than or equal to $1,000\. The \[Invoices\] table field *\[Invoices\]Customer ID* relates to the \[Customer\] table field *\[Customers\]ID Number*. 

```4d
  // Select the Customers
 QUERY([Customers];[Customers]Credit>=1000)
  // Find all invoices related to any of these customers
 RELATE MANY SELECTION([Invoices]Customer ID)
```

#### See also 

[QUERY](query.md)  
[RELATE ONE](relate-one.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 340 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||


