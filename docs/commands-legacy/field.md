---
id: field
title: Field
slug: /commands-legacy/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *tableNum* ; *fieldNum* ) -> fieldPtr  
        
            Field ( *fieldPtr* ) -> fieldNum<!-- END REF-->
<!--REF #_command_.Field.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Longint | &rarr; | Table number |
| fieldNum | Longint | &rarr; | Field number |
| fieldPtr | Pointer | &larr; | Field pointer |
| Field ( fieldPtr ) &rarr; fieldNum |
| Parameter | Type | Description |
| fieldPtr | Pointer | &rarr; | Field pointer |
| fieldNum | Longint | &larr; | Field number |

<!-- END REF-->

#### Description 



The **Field** command has two forms:

* If you pass a table number in *tableNum* and a field number in fieldNum, **Field** returns a pointer to the field.
* If you pass a field pointer in *fieldPtr*, **Field** returns the field number of the field.

#### Example 1 

The following example sets the *fieldPtr* variable to a pointer to the second field in the third table:

```4d
 FieldPtr:=Field(3;2)
```

#### Example 2 

Passing *fieldPtr* (a pointer to the second field of a table) to **Field** returns the number 2\. The following line sets *FieldNum* to 2:

```4d
 FieldNum:=Field(FieldPtr)
```

#### Example 3 

The following example sets the *FieldNum* variable to the field number of \[Table3\]Field2:

```4d
 FieldNum:=Field(->[Table3]Field2)
```

#### See also 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Get last field number](get-last-field-number.md)  
[Table](table.md)  