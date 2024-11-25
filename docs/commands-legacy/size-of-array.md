---
id: size-of-array
title: Size of array
slug: /commands/size-of-array
displayed_sidebar: docs
---

<!--REF #_command_.Size of array.Syntax-->**Size of array** ( *array* ) : Integer<!-- END REF-->
<!--REF #_command_.Size of array.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array whose size is returned |
| Function result | Integer | &#8592; | Returns the number of elements in array |

<!-- END REF-->

#### Description 

<!--REF #_command_.Size of array.Summary-->The Size of array command returns the number of elements in *array*.<!-- END REF-->

#### Example 1 

The following example returns the size of the array *anArray*:

```4d
 vlSize:=Size of array(anArray) // vlSize gets the size of anArray
```

#### Example 2 

The following example returns the number of rows in a two-dimensional array:

```4d
 vlRows:=Size of array(a2DArray) // vlRows gets the size of a2DArray
```

#### Example 3 

The following example returns the number of columns for a row in a two-dimensional array:

```4d
 vlColumns:=Size of array(a2DArray{10}) // vlColumns gets the size of a2DArray{10}
```

#### See also 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  