---
id: relate-one-selection
title: RELATE ONE SELECTION
slug: /commands/relate-one-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE ONE SELECTION.Syntax-->**RELATE ONE SELECTION** ( *manyTable* ; *oneTable* )<!-- END REF-->
<!--REF #_command_.RELATE ONE SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| manyTable | Table | &#8594;  | Many table name (from which the relation starts) |
| oneTable | Table | &#8594;  | One table name (to which the relation refers) |

<!-- END REF-->

#### Description 

<!--REF #_command_.RELATE ONE SELECTION.Summary-->The RELATE ONE SELECTION command creates a new selection of records for the table *oneTable*, based on the selection of records in the table *manyTable* and loads the first record of the new selection as the current record.<!-- END REF--> 

This command can only be used if there is a relation from *manyTable* to *oneTable*. RELATE ONE SELECTION can work across several levels of relations. There can be several related tables between *manyTable* and *oneTable*. The relations can be manual or automatic.

**RELATE ONE SELECTION** uses the "shortest" path to pass from the starting table to the destination table. If there are existing paths of the same size and you need to control the used path, you may consider using the [SET FIELD RELATION](set-field-relation.md) command. 

#### Example 

The following example finds all the clients whose invoices are due today. 

Here is one way of creating a selection in the *\[Customers\]* table, given a selection of records in the *\[Invoices\]* table:

```4d
 CREATE EMPTY SET([Customers];"Payment Due")
 QUERY([Invoices];[Invoices]DueDate=Current date)
 While(Not(End selection([Invoices])))
    RELATE ONE([Invoices]CustID)
    ADD TO SET([Customers];"Payment Due")
    NEXT RECORD([Invoices])
 End while
```

The following technique uses **RELATE ONE SELECTION** to accomplish the same result:

```4d
 QUERY([Invoices];[Invoices]DueDate=Current date)
 RELATE ONE SELECTION([Invoices];[Customers])
```

**Note:** Since version 11, this code can be written as follows without any loss of performance:  

```4d
 QUERY([Customers];[Invoices]DueDate=Current date)
```

#### See also 

[QUERY](query.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE](relate-one.md)  
*Sets*  

#### Properties
|  |  |
| --- | --- |
| Command number | 349 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||


