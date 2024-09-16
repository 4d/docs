---
id: get-field-properties
title: GET FIELD PROPERTIES
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD PROPERTIES.Syntax-->**GET FIELD PROPERTIES** ( fieldPtr | tableNum {; *fieldNum*}; *fieldType* {; *fieldLength* {; *indexed* {; *unique* {; *invisible*}}}} )<!-- END REF-->
<!--REF #_command_.GET FIELD PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr | tableNum | Pointer, Longint | -> | Table number or Field pointer |
| fieldNum | Longint | -> | Field number if Table number is passed |
| fieldType | Longint | <-> | Type of field |
| fieldLength | Longint | <-> | Length of field, if Alphanumeric |
| indexed | Boolean | <-> | True = Indexed, False = Non indexed |
| unique | Boolean | <-> | True = Unique, False = Non unique |
| invisible | Boolean | <-> | True = Invisible, False = Visible |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD PROPERTIES.Summary-->The **GET FIELD PROPERTIES** command returns information about the field specified by *fieldPtr* or by *tableNum* and *fieldNum*.<!-- END REF-->

You either pass:

* the table and field numbers in *tableNum* and *fieldNum*, or
* a pointer to the field in *fieldPtr*.

After the call:

* *fieldType* returns the type of the field. The *fieldType* variable parameter can take a value provided by the following predefined constants ([Field and Variable Types](/4Dv20R6/4D/20-R6/Field-and-Variable-Types.302-6958439.en.html) theme):  
| Constant           | Type    | Value |  
| ------------------ | ------- | ----- |  
| Is alpha field     | Longint | 0     |  
| Is BLOB            | Longint | 30    |  
| Is Boolean         | Longint | 6     |  
| Is date            | Longint | 4     |  
| Is float           | Longint | 35    |  
| Is integer         | Longint | 8     |  
| Is integer 64 bits | Longint | 25    |  
| Is longint         | Longint | 9     |  
| Is object          | Longint | 38    |  
| Is picture         | Longint | 3     |  
| Is real            | Longint | 1     |  
| Is subtable        | Longint | 7     |  
| Is text            | Longint | 2     |  
| Is time            | Longint | 11    |
* The *fieldLen* parameter returns the length of the field, if the field is Alphanumeric (i.e., *fieldType*\=Is alpha field). The value of *fieldLen* is meaningless for the other field types.
* The *indexed* parameter returns True is the field is indexed, and False if not. The value of *indexed* is meaningful only for Alphanumeric, Integer, Long Integer, Real, Date, Time, and Boolean fields.
* The *unique* parameter returns True if the field is set to “Unique”, else False.
* The *invisible* parameter returns True if the field is set to “Invisible”, else False. The Invisible attribute can be used to hide a given field in 4D standard editor (label, charts...).

#### Example 1 

This example sets the variables *vType*, *vLength*, *vIndex*, *vUnique* and *vInvisible* to the properties for the third field of the first table:

```4d
 GET FIELD PROPERTIES(1;3;vType;vLength;vIndex;vUnique;vInvisible)
```

#### Example 2 

This example sets the variables *vType*, *vLength*, *vIndex*, *vUnique* and *vInvisible* to the properties for the field named \[Table3\]Field2:

```4d
 GET FIELD PROPERTIES(->[Table3]Field2;vType;vLength;vIndex;vUnique;vInvisible)
```

#### See also 
[Field](field.md)  
[Field name](field-name.md)  
[SET INDEX](set-index.md)  