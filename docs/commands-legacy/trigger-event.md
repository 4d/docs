---
id: trigger-event
title: Trigger event
slug: /commands/trigger-event
displayed_sidebar: docs
---

<!--REF #_command_.Trigger event.Syntax-->**Trigger event**  : Integer<!-- END REF-->
<!--REF #_command_.Trigger event.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | 0 Outside any trigger execution cycle 1 Saving a new record 2 Saving an existing record 3 Deleting a record |

<!-- END REF-->

#### Description 

<!--REF #_command_.Trigger event.Summary-->Called from within a trigger, the **Trigger event** command returns a numeric value that denotes the type of the database event, in other words, the reason why the trigger has been invoked.<!-- END REF-->

The following predefined constants are provided in the *Trigger Events* theme:

| Constant                        | Type    | Value |
| ------------------------------- | ------- | ----- |
| On Deleting Record Event        | Integer | 3     |
| On Saving Existing Record Event | Integer | 2     |
| On Saving New Record Event      | Integer | 1     |

Within a trigger, if you perform database operations on multiple records, you may encounter conditions (usually locked records) that will make the trigger unable to perform correctly. An example of this situation is updating multiple records in a \[Products\] table when a record is being added to an \[Invoices\] table. At this point, you must stop attempting database operations, and return a database error so the invoking process will know that its database request cannot be performed. Then the invoking process must be able to cancel, during the transaction, the incomplete database operations performed by the trigger. When this type of situation occurs, you need to know from within the trigger if you are in transaction even before attempting anything. To do so, use the command [In transaction](in-transaction.md).

When cascading trigger calls, 4D has no limit other than the available memory. To optimize trigger execution, you may want to write the code of your triggers depending not only on the database event, but also on the level of the call when triggers are cascaded. For example, during a deletion database event for the \[Invoices\] table, you may want to skip the update of the \[Customers\] Gross Sales field if the deletion of the \[Invoices\] record is part of the deletion of **all** the invoices related to a \[Customers\] record being deleted. To do so, use the commands [Trigger level](trigger-level.md) and [TRIGGER PROPERTIES](trigger-properties.md).

#### Example 

You use the **Trigger event** command to structure your triggers as follows:

```4d
  // Trigger for [anyTable]
 var $0 : Integer
 $0:=0 // Assume the database request will be granted
 Case of
    :(Trigger event=On Saving New Record Event)
  // Perform appropriate action for the saving of a newly created record
    :(Trigger event=On Saving Existing Record Event)
  // Perform appropriate actions for the saving of an already existing record
    :(Trigger event=On Deleting Record Event)
  // Perform appropriate actions for the deletion of a record
 End case
```

#### See also 

[In transaction](in-transaction.md)  
[Trigger level](trigger-level.md)  
[TRIGGER PROPERTIES](trigger-properties.md)  
*Triggers*  