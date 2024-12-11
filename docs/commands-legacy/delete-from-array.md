---
id: delete-from-array
title: DELETE FROM ARRAY
slug: /commands/delete-from-array
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM ARRAY.Syntax-->**DELETE FROM ARRAY** ( *array* ; *where* {; *howMany*} )<!-- END REF-->
<!--REF #_command_.DELETE FROM ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array from which to delete elements |
| where | Integer | &#8594;  | Element at which to begin deletion |
| howMany | Integer | &#8594;  | Number of elements to delete, or 1 element if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FROM ARRAY.Summary-->The DELETE FROM ARRAY command deletes one or more elements from *array*.<!-- END REF--> Elements are deleted starting at the element specified by *where*.

The *howMany* parameter is the number of elements to delete. If *howMany* is not specified, then one element is deleted. The size of the array shrinks by *howMany*.

#### Example 1 

The following example deletes three elements, starting at element 5:

```4d
 DELETE FROM ARRAY(anArray;5;3)
```

#### Example 2 

The following example deletes the last element from an array, if it exists:

```4d
 $vlElem:=Size of array(anArray)
 If($vlElem>0)
    DELETE FROM ARRAY(anArray;$vlElem)
 End if
```

#### See also 

[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 228 |
| Thread safe | &check; |
| Forbidden on the server ||


