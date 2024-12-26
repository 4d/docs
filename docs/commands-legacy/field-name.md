---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( fieldPtr | tableNum {; *fieldNum*} ) : Text<!-- END REF-->
<!--REF #_command_.Field name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr &#124; tableNum | Pointer, Longint | &#8594;  | Field pointer or Table number |
| fieldNum | Integer | &#8594;  | Field number if a table number is passed as first parameter |
| Function result | Text | &#8592; | Name of the field |

<!-- END REF-->

#### Description 

<!--REF #_command_.Field name.Summary-->The Field name command returns the name of the field whose pointer you pass in *fieldPtr* or whose table and field number you pass in *tableNum* and *fieldNum*.<!-- END REF-->

#### Example 1 

This example sets the second element of the array FieldArray{1} to the name of the second field in the first table. FieldArray is a two-dimensional array:

```4d
 FieldArray{1}{2}:=Field name(1;2)
```

#### Example 2 

This example sets the second element of the array FieldArray{1} to the name of the field *\[MyTable\]MyField*. FieldArray is a two-dimensional array:

```4d
 FieldArray{1}{2}:=Field name(->[MyTable]MyField)
```

#### Example 3 

This example displays an alert. This method passes a pointer to a field: 

```4d
 ALERT("The ID number for the field "+Field name($1)+" in the table "+Table name(Table($1))+" has to be longer than five characters.")
```

#### See also 

[Field](field.md)  
[Last field number](last-field-number.md)  
[Table name](table-name.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 257 |
| Thread safe | &check; |


