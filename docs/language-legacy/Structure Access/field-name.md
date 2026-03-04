---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( *fieldPtr* : Pointer ) : Text<br/>**Field name** ( *tableNum* : Integer ; *fieldNum* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Field name.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr  | Pointer | &#8594;  | Field pointer  |
| tableNum | Integer | &#8594;  | Table number |
| fieldNum | Integer | &#8594;  | Field number if a table number is passed as first parameter |
| Function result | Text | &#8592; | Name of the field |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Field name.Summary-->The Field name command returns the name of the field whose pointer you pass in *fieldPtr* or whose table and field number you pass in *tableNum* and *fieldNum*.<!-- END REF-->

## Example 1 

This example sets the second element of the array FieldArray{1} to the name of the second field in the first table. FieldArray is a two-dimensional array:

```4d
 FieldArray{1}{2}:=Field name(1;2)
```

## Example 2 

This example sets the second element of the array FieldArray{1} to the name of the field *\[MyTable\]MyField*. FieldArray is a two-dimensional array:

```4d
 FieldArray{1}{2}:=Field name(->[MyTable]MyField)
```

## Example 3 

This example displays an alert. This method passes a pointer to a field: 

```4d
 ALERT("The ID number for the field "+Field name($1)+" in the table "+Table name(Table($1))+" has to be longer than five characters.")
```

## See also 

[Field](../commands/field)  
[Last field number](../commands/last-field-number)  
[Table name](../commands/table-name)  

## Properties

|  |  |
| --- | --- |
| Command number | 257 |
| Thread safe | yes |


