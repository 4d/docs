---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( manyTable | Field ; *one* ; *many* )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| manyTable &#124; Field | Table, Field | &#8594;  | Starting table of relations or Starting field of a relation |
| one | Integer | &#8594;  | Status of the Many-to-One relation starting from the field or the Many-to-One relations of the table |
| many | Integer | &#8594;  | Status of the One-to-Many relation starting from the field or the One-to-Many relations of the table |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FIELD RELATION.Summary-->The **SET FIELD RELATION** command sets the automatic/manual status of each relation of the database separately for the current process, regardless of its initial status as specified in the Relation properties window in the Design environment.<!-- END REF--> 

In the first parameter, pass a table or field name:

* If you pass a field name (*manyField*), the command only applies to the relation starting from the specified Many field.
* If you pass a table name (*manyTable*), the command applies to all the relations starting from the specified Many table.
* If there is no relation starting from the *manyField* field or *manyTable* table, the syntax error No. 16 (“The field has no relation”) is generated and the system variable OK is set to 0\.

In the *one* and *many* parameters, pass the values indicating the changing of the automatic/manual status to be applied respectively to the specified Many-to-One and One-to-Many relation(s). You can use the constants of the “*Relations*” theme:

* Do not modify (0) = Do not modify the current status of the relation(s).
* Structure configuration (1) = Use the configuration set for the relation(s) in the Structure window of the application.
* Manual (2) = Makes the relation(s) manual for the current process.
* Automatic (3) = Makes the relation(s) automatic for the current process.

**Note:** Changes made using this command only apply to the current process. The configuration of the relations set using the options in the Relation properties window is not modified. 

**Note:** If you passed [True](true.md "True") to the [SET AUTOMATIC RELATIONS](set-automatic-relations.md) command during the same session, calls to **SET FIELD RELATION** are ignored, regardless of whether they are placed before or after [SET AUTOMATIC RELATIONS](set-automatic-relations.md). To "lock" the automatic mode and take calls to **SET FIELD RELATION** into account, pass [False](false.md "False") to [SET AUTOMATIC RELATIONS](set-automatic-relations.md).

#### Example 

The following code allows setting only useful relations as automatic in the Quick Report editor:

```4d
 SET AUTOMATIC RELATIONS(False;False) //Reset of the relations
  //Only the following relations will be used
 SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)
 SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)
 QR REPORT([Invoices];Char(1))
```

#### See also 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  