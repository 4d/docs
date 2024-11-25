---
id: count-in-array
title: Count in array
slug: /commands/count-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Count in array.Syntax-->**Count in array** ( *array* ; *value* ) : Integer<!-- END REF-->
<!--REF #_command_.Count in array.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array where count should occur |
| value | Expression | &#8594;  | Value to count |
| Function result | Integer | &#8592; | Number of instances found |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count in array.Summary-->The Count in array command returns the number of times *value* is found in *array*.<!-- END REF-->

This command can be used with the following array types: Text, number, Date, Pointer, Object, and Boolean. The *array* and *value* parameters must be the same type or compatible.

**Note:** With Object arrays, you can only use object references in the *value* parameter. 

If no element in *array* matches *value*, the command returns 0.

#### Example 1 

The following example allows displaying the number of selected lines in a list box: 

```4d
  //tBList is the name of a List box column array
 ALERT(String(Count in array(tBList;True))+" line(s) selected in the list box")
```

#### Example 2 

You want to count object references in an object array:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 $objects{21}:=$o1
 $objects{22}:=$o1
 
 var $n : Integer
 
 $n:=Count in array($objects;$o1) // n = 3 
 $n:=Count in array($objects;$o2) // n = 0
```

#### See also 

[Find in array](find-in-array.md)  
[Find in sorted array](find-in-sorted-array.md)  