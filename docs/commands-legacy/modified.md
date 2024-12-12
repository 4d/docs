---
id: modified
title: Modified
slug: /commands/modified
displayed_sidebar: docs
---

<!--REF #_command_.Modified.Syntax-->**Modified** ( *aField* ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field to test |
| Function result | Boolean | &#8592; | True if the field has been assigned a new value, otherwise False |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Modified.Summary-->**Modified** returns [True](true.md "True") if *field* has been programmatically assigned a value or has been edited during data entry.<!-- END REF--> The **Modified** command must only be used in a form method (or a subroutine called by a form method).

Be careful, this command only returns a significant value within the same execution cycle. It is more particularly set to [False](false.md "False") for all the form events that correspond to the former *\_o\_During* execution cycle (On Clicked, On After Keystroke, etc.).

During data entry, a field is considered modified if the user has edited the field (whether or not the original value is changed) and then left it by going to another field or by clicking on a control. Note that just tabbing out of a field does not set **Modified** to True. The field must have been edited in order for **Modified** to be True.

When executing a method, a field is considered to be modified if it has been assigned a value (different or not). 

**Note:** **Modified** always returns [True](true.md "True") after the execution of the [PUSH RECORD](push-record.md) and [POP RECORD](pop-record.md) commands.

In all cases, use the [Old](old.md) command to detect whether the field value has actually been changed.

**Note:** Although **Modified** can be applied to any type of field, if you use it in combination with the [Old](old.md) command, be aware of the restrictions that apply to the [Old](old.md) command. For details, see the description of the [Old](old.md) command.

During data entry, it is usually easier to perform operations in object methods using the [Form event code](../commands/form-event-code.md) command than to use **Modified** in form methods. Since an object method is sent an On Data Change event whenever a field is modified, the use of an object method is equivalent to using **Modified** in a form method.

**Note:** To operate properly, the **Modified** command is to be used only in a form method or in a method called by a form method.

#### Example 1 

The following example tests whether either the *\[Orders\]Quantity* field or the *\[Orders\]Price* field has changed. If either has been changed, then the *\[Orders\]Total* field is recalculated. 

```4d
 If((Modified([Orders]Quantity)|(Modified([Orders]Price))
    [Orders]Total :=[Orders]Quantity*[Orders]Price
 End if
```

Note that the same thing could be accomplished by using the second line as a subroutine called by the object methods for the *\[Orders\]Quantity* field and the *\[Orders\]Price* field within the On Data Change form event.

#### Example 2 

You select a record for the table *\[anyTable\]*, then you call multiple subroutines that may modify the field *\[anyTable\]Important field,* but do not save the record. At the end of the main method, you can use the **Modified** command to detect whether you must save the record:

```4d
  // Here the record has been selected as current record
  // Then you perform actions using subroutines
 DO SOMETHING
 DO SOMETHING ELSE
 DO NOT FORGET TO DO THAT
  // ...
  // And then you test the field to detect whether the record has to be saved
 If(Modified([anyTable]Important field))
    SAVE RECORD([anyTable])
 End if
```

#### See also 

[Form event code](../commands/form-event-code.md)  
[Old](old.md)  