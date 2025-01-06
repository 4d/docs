---
id: last-field-number
title: Last field number
slug: /commands/last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Last field number.Syntax-->**Last field number** ( tableNum | tablePtr ) : Integer<!-- END REF-->
<!--REF #_command_.Last field number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | Integer, Pointer | &#8594;  | Table number or Pointer to table |
| Function result | Integer | &#8592; | Highest field number in table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Last field number.Summary-->The **Last field number** command returns the highest field number among the fields in the table whose number or pointer you pass in *tableNum* or *tablePtr*.<!-- END REF-->

Fields are numbered in the order in which they are created. If no field has been deleted from the table, then this command returns the number of fields that the table contains. In the case of iterative loops on the field numbers of the table, you must use the [Is field number valid](is-field-number-valid.md) command in order to check whether the field has been deleted.

#### Example 

The following project method builds the array *asFields*, consisting of the field names, for the table whose pointer is received as first parameter:

```4d
 $vlTable:=Table($1)
 ARRAY STRING(31;asFields;Last field number($vlTable))
 For($vlField;Size of array(asFields);1;-1)
    If(Is field number valid($vlTable;$vlField))
       asFields{$vlField}:=Field name($vlTable;$vlField)
    Else
       DELETE FROM ARRAY(asFields;$vlField)
    End if
 End for
```

#### See also 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last table number](last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 255 |
| Thread safe | &check; |


