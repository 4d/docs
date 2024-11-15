---
id: find-in-sorted-array
title: Find in sorted array
slug: /commands/find-in-sorted-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in sorted array.Syntax-->**Find in sorted array** ( *array* ; *value* ; > or < {; *posFirst* {; *posLast*}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Find in sorted array.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array to search |
| value | Expression | &#8594;  | Value (same type as array) to search for in the array |
| > or < | Operator | &#8594;  | > if array is sorted in ascending order, < if it is sorted in descending order |
| posFirst | Integer | &#8592; | Position of its first occurrence if the value is found; otherwise position where the value should be inserted |
| posLast | Integer | &#8592; | Position of its last occurrence if the value is found; otherwise same as posFirst |
| Function result | Boolean | &#8592; | True if at least one element in array matches the value, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in sorted array.Summary-->The **Find in sorted array** command returns **true** if at least one element in the sorted *array* matches the *value*, and optionally returns position(s) of matched element(s).<!-- END REF--> Unlike [Find in array](find-in-array.md), **Find in sorted array** only works with a sorted *array* and provides information about the position of occurrences, which allows you to insert elements if necessary.

The *array* must be already sorted and must match the ordering specified by the *\> or <* parameter (i.e. the "greater than" symbol for ascending order and the "lower than" symbol for descending order). The **Find in sorted array** command will take advantage of the sort and use a *binary search* algorithm, which is much more efficient for large arrays (for more information, please refer to the [binary search algorithm page on Wikipedia](http://en.wikipedia.org/wiki/Binary%5Fsearch%5Falgorithm)). However, if the array is not properly sorted, the result may be incorrect.

**Note:** When using this command with a sorted array of type Object, you can only pass an object reference in *value*. 

The command will ignore the sort indication and behave like a standard [Find in array](find-in-array.md) (sequential search, returning -1 for *posFirst* and *posLast* if the *value* is not found) in any of the following cases:

* if the array type cannot be sorted (e.g. pointer arrays),
* if the array is of type boolean (not accurate),
* if the database is not Unicode (compatibility mode) and the array is a string or text array,
* when searching in a text array for a string that includes a wildcard ('@') at the beginning or in the middle of the string (using a binary search with such a wildcard character is not possible because matching elements may be non-contiguous in the array).

In case the command returns **False**, the value returned in *posFirst* can be passed to [INSERT IN ARRAY](insert-in-array.md) to insert the *value* into the array while keeping the array sorted. This sequence is faster than inserting a new item at the end of the array and then calling [SORT ARRAY](sort-array.md) to move it to the right place.

The value returned in *posLast* can be combined with the value returned in *posFirst* to iterate on each element of the array matching the *value* (with a [ARRAY TO LIST](array-to-list.md) loop) or to find the number of occurrences (as would be found by [Count in array](count-in-array.md), but faster).

#### Example 1 

You want to insert a value, if necessary, while keeping the array sorted:

```4d
 var $pos : Integer
 If(Find in sorted array($array ;$value ;>;$pos)
    ALERT("Found at pos "+String($pos))
 Else
    INSERT IN ARRAY($array ;$pos)
    $array{$pos}:=$value
 End if
```

#### Example 2 

You want to find the number of occurrences of strings starting with "test" and create a string that concatenates all these elements:

```4d
 var $posFirst ;$posLast : Integer
 var $output : Text
 If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))
    $output:="Found "+String($posLast-$posFirst+1)+" results :\n"
 End if
 For($i ;$posFirst ;$posLast)
    $output:=$output+$array{$i}+"\n"
 End for
```

#### See also 

[Count in array](count-in-array.md)  
[Find in array](find-in-array.md)  
[SORT ARRAY](sort-array.md)  