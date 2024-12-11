---
id: array-object
title: ARRAY OBJECT
slug: /commands/array-object
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY OBJECT.Syntax-->**ARRAY OBJECT** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY OBJECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of array |
| size | Integer | &#8594;  | Number of array elements or Number of arrays if size2 is specified |
| size2 | Integer | &#8594;  | Number of 2D array elements |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY OBJECT.Summary-->The **ARRAY OBJECT** command creates and/or resizes an array of language Object type elements in memory.<!-- END REF-->

The *arrayName* parameter is the name of the array. You can use any name that conforms to 4D conventions.

The *size* parameter is the number of array elements.

The *size2* parameter is optional. If you pass it, this command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* the number of columns in each array. Each row in a two-dimensional array can be processed both as an element and an array. This means that when you work with the first dimension of a two-dimensional array, you can insert and remove entire arrays using other commands in the "Arrays" theme. 

When you apply the **ARRAY OBJECT** command to an existing array:

* If you enlarge its size, existing elements are not changed and new elements are undefined. You can test whether an element is defined using the [OB Is defined](ob-is-defined.md) command.
* If you reduce its size, elements at the "bottom" of the array are deleted and lost.

#### Example 1 

Creation of a process array of 100 Object-type elements:

```4d
 ARRAY OBJECT(arrObjects;100)
```

#### Example 2 

Creation of a local array of 100 rows each containing 50 Object-type elements:

```4d
 ARRAY OBJECT($arrObjects;100;50)
```

#### Example 3 

Creation and filling of a local object array:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4)
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James";"age";3)
 APPEND TO ARRAY($arrayChildren;$ref_james)
  // $arrayChildren{1} -> {"name":"Richard","age":7}
  // $arrayChildren{2} -> {"name":"Susan","age":4}
  // $arrayChildren{3} -> {"name":"James","age":3}
```

#### See also 

*Creating Arrays*  
*Objects (Language)*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1221 |
| Thread safe | &check; |
| Forbidden on the server ||


