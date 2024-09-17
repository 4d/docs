---
id: ob-get-type
title: OB Get type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *object* ; *property* ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | -> | Structured object |
| property | Text | -> | Property name |
| Function result | Longint | <- | Property value type |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Get type.Summary-->The **OB Get type** command returns the type of value associated with the *property* of the language *object*.<!-- END REF-->

*object* must have been defined using the [C\_OBJECT](c-object.md) command or designate a 4D object field. 

In the *property* parameter, pass the label of the property whose type you want to find out.   
Note that the *property* parameter is case sensitive. 

The command returns a longint indicating the type of value. You can compare this value with the following constants, found in the "[Field and Variable Types](/4Dv20R6/4D/20-R6/Field-and-Variable-Types.302-6958439.en.html)" theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Longint | 6     |
| Is collection | Longint | 42    |
| Is date       | Longint | 4     |
| Is null       | Longint | 255   |
| Is object     | Longint | 38    |
| Is real       | Longint | 1     |
| Is text       | Longint | 2     |
| Is undefined  | Longint | 5     |

**Note:** For picture attributes, the command returns Is object. 

#### Example 

We want to get the type of standard values:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
 $type:=OB Get type($ref;"name") //$type returns 2
 $type2:=OB Get type($ref;"age") //$type2 returns 1
```

#### See also 

[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[Value type](value-type.md)  