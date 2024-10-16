---
id: insert-in-array
title: INSERT IN ARRAY
slug: /commands/insert-in-array
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN ARRAY.Syntax-->**INSERT IN ARRAY** ( *array* ; *where* {; *howMany*} )<!-- END REF-->
<!--REF #_command_.INSERT IN ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Name of the array |
| where | Integer | &#8594;  | Where to insert the elements |
| howMany | Integer | &#8594;  | Number of elements to be inserted, or 1 element if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.INSERT IN ARRAY.Summary-->The INSERT IN ARRAY command inserts one or more elements into the array *array*.<!-- END REF--> The new elements are inserted before the element specified by *where*, and are initialized to the empty value for the array type. All elements beyond *where* are consequently moved within the array by an offset of one or the value you pass in *howMany*.

If *where* is greater than the size of the array, the elements are added to the end of the array.

The *howMany* parameter is the number of elements to insert. If *howMany* is not specified, then one element is inserted. The size of the array grows by *howMany*.

#### Example 1 

The following example inserts five new elements, starting at element 10:

```4d
 INSERT IN ARRAY(anArray;10;5)
```

#### Example 2 

The following example appends an element to an array:

```4d
 $vlElem:=Size of array(anArray)+1
 INSERT IN ARRAY(anArray;$vlElem)
 anArray{$vlElem}:=...
```

#### See also 

[DELETE FROM ARRAY](delete-from-array.md)  
[Size of array](size-of-array.md)  