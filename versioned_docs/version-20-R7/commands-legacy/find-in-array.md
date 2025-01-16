---
id: find-in-array
title: Find in array
slug: /commands/find-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in array.Syntax-->**Find in array** ( *array* ; *value* {; *start*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in array.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array to search |
| value | Expression | &#8594;  | Value of same type to search in the array |
| start | Integer | &#8594;  | Element at which to start searching |
| Function result | Integer | &#8592; | Number of the first element in array that matches value |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in array.Summary-->The Find in array command returns the number of the first element in *array* that matches *value*.<!-- END REF--> 

Find in array can be used with Text, Numeric, Date, Pointer, Object, and Boolean arrays. The *array* and *value* parameters must be of the same type.

*value* must match exactly the element to find (the same rules as for the equality operator are applied, see [Basic operators](https://developer.4d.com/docs/Concepts/operators#basic-operators)). If no match is found, Find in array returns -1.

**Note:** With Object arrays, you can only use object references in the *value* parameter. 

If *start* is specified, the command starts searching at the element number specified by *start*. If *start* is not specified, the command starts searching at element 1.

#### Example 1 

The following project method deletes all empty elements from the string or text array whose pointer is passed as parameter:

```4d
  // CLEAN UP ARRAY project method
  // CLEAN UP ARRAY ( Pointer )
  // CLEAN UP ARRAY ( -> Text or String array )
 
 var $1 : Pointer
 Repeat
    $vlElem:=Find in array($1->;"")
    If($vlElem>0)
       DELETE FROM ARRAY($1->;$vlElem)
    End if
 Until($vlElem<0)
```

After this project method is implemented in a database, you can write:

```4d
 ARRAY TEXT(atSomeValues;...)
  // ...
  // Do plenty of things with the array
  // ...
  // Eliminate empty string elements
 CLEAN UP ARRAY(->atSomeValues)
```

#### Example 2 

The following project method selects the first element of an array whose pointer is passed as the first parameter that matches the value of the variable or field whose pointer is passed as parameter:

```4d
  // SELECT ELEMENT project method
  // SELECT ELEMENT ( Pointer ; Pointer)
  // SELECT ELEMENT ( -> Text or String array ; -> Text or String variable or field )
 
 $1->:=Find in array($1->;$2->)
 If($1->=-1)
    $1->:=0 // If no element was found, set the array to no selected element
 End if
```

After this project method is implemented in a database, you can write:

```4d
  // asGender pop-up menu object method
 Case of
    :(Form event code=On Load)
       SELECT ELEMENT(->asGender;->[People]Gender)
 
 End case
```

**Note:** This example uses the **selected element** of the array. Keep in mind that the selected element is not meaningful if the array contains more than 32,767 elements (see *Arrays and Form Objects*). In this case, you need to use a longint variable to store the result of **Find in array**.

#### Example 3 

You want to find an object reference:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 var $p : Integer
 
 $p:=Find in array($objects;$o1) //$p = 20 
 $p:=Find in array($objects;$o2) //$p = -1 
 $p:=Find in array($objects;{a10;b"xyz"}) //$p = -1
```

#### See also 

[Count in array](count-in-array.md)  
[DELETE FROM ARRAY](delete-from-array.md)  
[Find in sorted array](find-in-sorted-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 230 |
| Thread safe | &check; |


