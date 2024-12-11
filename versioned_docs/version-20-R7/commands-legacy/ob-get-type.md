---
id: ob-get-type
title: OB Get type
slug: /commands/ob-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *object* ; *property* ) : Integer<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Structured object |
| property | Text | &#8594;  | Property name |
| Function result | Integer | &#8592; | Property value type |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Get type.Summary-->The **OB Get type** command returns the type of value associated with the *property* of the language *object*.<!-- END REF-->can be an object varialble or a 4D object field.. 

In the *property* parameter, pass the label of the property whose type you want to find out.   
Note that the *property* parameter is case sensitive. 

The command returns a longint indicating the type of value. You can compare this value with the following constants, found in the "*Field and Variable Types*" theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Integer | 6     |
| Is collection | Integer | 42    |
| Is date       | Integer | 4     |
| Is null       | Integer | 255   |
| Is object     | Integer | 38    |
| Is real       | Integer | 1     |
| Is text       | Integer | 2     |
| Is undefined  | Integer | 5     |

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

#### Properties
|  |  |
| --- | --- |
| Command number | 1230 |
| Thread safe | &check; |
| Forbidden on the server ||


