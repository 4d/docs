---
id: append-to-array
title: APPEND TO ARRAY
slug: /commands/append-to-array
displayed_sidebar: docs
---

<!--REF #_command_.APPEND TO ARRAY.Syntax-->**APPEND TO ARRAY** ( *array* ; *value* )<!-- END REF-->
<!--REF #_command_.APPEND TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array to which an element will be appended |
| value | Expression | &#8594;  | Value to append |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPEND TO ARRAY.Summary-->The APPEND TO ARRAY command adds a new element at the end of *array* and assigns *value* to the element.<!-- END REF--> In interpreted mode, if *array* does not exist, the command creates it with regard to the type of *value*. 

This command works with all kind of arrays: string, number, Boolean, date, pointer and picture. 

The type of *value* must match the array type, otherwise the syntax error 54 “Argument types are incompatible” is generated. The following values will, however, be accepted: 

* A string *array* (Text or String) accepts any *value* of the Text or String type.
* A number *array* (Integer, Longint or Real) accepts any *value* of the Integer, Longint, Real or Time type.

#### Example 

The following code:

```4d
 INSERT IN ARRAY($myarray;Size of array($myarray)+1)
 $myarray{Size of array($myarray)}:=$myvalue
```

... can be replaced with:

```4d
 APPEND TO ARRAY($myarray;$myvalue)
```

#### See also 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 911 |
| Thread safe | &check; |
| Forbidden on the server ||


