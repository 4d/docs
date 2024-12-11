---
id: modified-record
title: Modified record
slug: /commands/modified-record
displayed_sidebar: docs
---

<!--REF #_command_.Modified record.Syntax-->**Modified record** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Modified record.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to test if current record has been modified, or Default table, if omitted |
| Function result | Boolean | &#8592; | Record has been modified (True), or Record has not been modified (False) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Modified record.Summary-->**Modified record** returns True if the current record of *aTable* has been modified but not saved; otherwise it returns False.<!-- END REF--> This function allows the designer to quickly test whether or not the record needs to be saved. It is especially valuable in input forms to check whether or not to save the current record before proceeding to the next one. This function always returns True for a new record.

Note that this function always returns True in the following contexts:

* the current record is a new record,
* after the execution of the [PUSH RECORD](push-record.md) and [POP RECORD](pop-record.md) commands,
* as soon as a value has been assigned to a field of the record, even if it is the same value as the former one. For example, **Modified record** returns True after the following statement is executed:  
```4d  
 [Table_1]Field_1:=[Table_1]Field_1  
```

#### Example 

The following example shows a typical use for **Modified record**:

```4d
 If(Modified record([Customers]))
    SAVE RECORD([Customers])
 End if
```

#### See also 

[Modified](modified.md)  
[Old](old.md)  
[SAVE RECORD](save-record.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 314 |
| Thread safe | &check; |
| Forbidden on the server ||


